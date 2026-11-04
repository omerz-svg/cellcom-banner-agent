// buildFromSpec: run with use_figma in the TARGET file (e.g. Campaigns zyp67jdVgIYSgUoyJD8XzM).
// Paste the spec JSON (from extractSpec) into SPEC. Set SECTION_NAME, X, Y, FRAME_NAME.
// Returns {frameId, imageSlots:[{id,name,w,h}], texts:[{id,name,chars}], warnings}
const SPEC = __SPEC__;
const SECTION_NAME = "__SECTION__"; const FRAME_NAME = "__FRAME_NAME__";
const X = __X__, Y = __Y__; const HIDE_INSTRUCTIONS = true;
const warnings = [], imageSlots = [], texts = [];
const fontCache = new Set();
async function font(f) { const k = f.family + '|' + f.style; if (fontCache.has(k)) return true; try { await figma.loadFontAsync(f); fontCache.add(k); return true; } catch (e) { warnings.push('font missing ' + k); return false; } }
async function paints(arr) {
  if (!arr) return [];
  const out = [];
  for (const p of arr) {
    if (p.type === 'IMAGE') { out.push({ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 }, opacity: 0.25 }); continue; } // translucent placeholder until an image is placed
    const q = Object.assign({}, p); const vk = q.varKey; delete q.varKey;
    let paint = q;
    if (vk && q.type === 'SOLID') { try { const v = await figma.variables.importVariableByKeyAsync(vk); paint = figma.variables.setBoundVariableForPaint(q, 'color', v); } catch (e) { } }
    out.push(paint);
  }
  return out;
}
// find or create section
let section = figma.currentPage.findChild(n => n.type === 'SECTION' && n.name === SECTION_NAME);
if (!section) { section = figma.createSection(); section.name = SECTION_NAME; const maxY = Math.max(0, ...figma.currentPage.children.filter(n => n !== section).map(n => n.y + n.height)); section.x = 0; section.y = maxY + 400; }
async function build(o, parentNode, parentAbs) {
  let n;
  const rel = { x: o.x - parentAbs.x, y: o.y - parentAbs.y };
  if (o.t === 'SVG') {
    n = figma.createNodeFromSvg(o.svg); n.name = o.n; parentNode.appendChild(n); n.x = rel.x; n.y = rel.y;
    if (Math.abs(n.width - o.w) > 2 || Math.abs(n.height - o.h) > 2) warnings.push('svg size drift ' + o.n + ' ' + n.width + 'x' + n.height + ' vs ' + o.w + 'x' + o.h);
    n.fills = []; n.clipsContent = false;
    if (o.op !== undefined) n.opacity = o.op; if (o.hidden) n.visible = false; return n;
  }
  if (o.t === 'TEXT') {
    n = figma.createText(); parentNode.appendChild(n);
    for (const s of o.txt.segs) await font(s.f);
    n.fontName = o.txt.segs[0].f; n.characters = o.txt.chars;
    for (const s of o.txt.segs) {
      if (s.styleKey) { try { const st = await figma.importStyleByKeyAsync(s.styleKey); await n.setRangeTextStyleIdAsync(s.s, s.e, st.id); } catch (e) { warnings.push('style ' + s.styleKey); } }
      if (fontCache.has(s.f.family + '|' + s.f.style)) n.setRangeFontName(s.s, s.e, s.f);
      n.setRangeFontSize(s.s, s.e, s.sz);
      if (s.lh) n.setRangeLineHeight(s.s, s.e, s.lh.unit === 'AUTO' ? { unit: 'AUTO' } : s.lh);
      if (s.ls) n.setRangeLetterSpacing(s.s, s.e, s.ls);
      if (s.fills) n.setRangeFills(s.s, s.e, await paints(s.fills));
    }
    n.textAlignHorizontal = o.txt.ah; n.textAlignVertical = o.txt.av;
    n.textAutoResize = o.txt.ar === 'WIDTH_AND_HEIGHT' ? 'WIDTH_AND_HEIGHT' : 'NONE';
    if (o.txt.ar !== 'WIDTH_AND_HEIGHT') n.resize(o.w, o.h);
    if (o.txt.ar === 'HEIGHT') n.textAutoResize = 'HEIGHT';
    texts.push({ id: n.id, name: o.n, chars: o.txt.chars });
  } else if (o.t === 'INSTANCE') {
    try {
      const comp = await figma.importComponentByKeyAsync(o.inst.key); n = comp.createInstance(); parentNode.appendChild(n);
      if (Math.abs(n.width - o.w) > 0.5 || Math.abs(n.height - o.h) > 0.5) n.resize(o.w, o.h);
      const tp = {}; for (const [k, v] of Object.entries(o.inst.props)) tp[k] = v; try { if (Object.keys(tp).length) n.setProperties(tp); } catch (e) { }
      const its = n.findAll(c => c.type === 'TEXT');
      for (const t of o.inst.texts) { const tn = its.find(c => c.name === t.n); if (tn && tn.characters !== t.chars) { await font(tn.fontName); tn.characters = t.chars; } }
    } catch (e) { warnings.push('component ' + o.n + ' ' + o.inst.key + ' ' + e.message); n = figma.createFrame(); n.fills = []; parentNode.appendChild(n); n.resize(o.w, o.h); }
  } else {
    n = (o.t === 'RECTANGLE') ? figma.createRectangle() : (o.t === 'ELLIPSE' ? figma.createEllipse() : figma.createFrame());
    parentNode.appendChild(n); n.resize(Math.max(o.w, 0.01), Math.max(o.h, 0.01));
    n.fills = await paints(o.fills || []);
    if ('clipsContent' in n) n.clipsContent = (o.t === 'GROUP') ? false : !!o.clip;
    if (o.img) imageSlots.push({ id: n.id, name: o.n, w: o.w, h: o.h, aboveDecor: !!o.aboveDecor });
  }
  n.name = o.n;
  if (o.rot) n.rotation = o.rot;
  n.x = rel.x; n.y = rel.y;
  if (o.op !== undefined) n.opacity = o.op;
  if (o.hidden) n.visible = false;
  if (o.strokes && 'strokes' in n && o.t !== 'INSTANCE') { n.strokes = await paints(o.strokes); n.strokeWeight = o.sw; }
  if (o.fx && 'effects' in n && o.t !== 'INSTANCE') { try { n.effects = o.fx; } catch (e) { } }
  if (o.r && 'cornerRadius' in n && o.t !== 'INSTANCE') n.cornerRadius = o.r;
  if (o.kids && o.t !== 'INSTANCE' && o.t !== 'TEXT') for (const k of o.kids) await build(k, n, { x: o.x, y: o.y });
  return n;
}
const frame = await build(SPEC, section, { x: 0, y: 0 });
frame.name = FRAME_NAME; frame.x = X; frame.y = Y;
if (HIDE_INSTRUCTIONS) frame.findAll(c => c.name === 'instructions').forEach(c => c.visible = false);
// grow section to fit
const b = section.children.reduce((a, c) => ({ w: Math.max(a.w, c.x + c.width + 100), h: Math.max(a.h, c.y + c.height + 100) }), { w: 200, h: 200 });
section.resizeWithoutConstraints(b.w, b.h);
return { sectionId: section.id, frameId: frame.id, imageSlots, texts, warnings };
