// extractSpec: run with use_figma in the DESIGN SYSTEM file (CzmhbSKM1vha4Fq8ch1KDN).
// Set NODE_ID and OFFSET. Returns a slice of the JSON spec (max 19000 chars) + total length.
const NODE_ID = "__NODE_ID__"; const OFFSET = __OFFSET__;
const SKIP = ["instructions"]; // layer names to omit (crop-zone overlays are documented in templates.md)
const root = await figma.getNodeByIdAsync(NODE_ID);
const R = v => Math.round(v * 1000) / 1000;
const ax = n => n.absoluteTransform[0][2], ay = n => n.absoluteTransform[1][2];
const hasImg = n => 'fills' in n && Array.isArray(n.fills) && n.fills.some(f => f.type === 'IMAGE' && f.visible !== false);
const isDecor = n => {
  if (['VECTOR','BOOLEAN_OPERATION','STAR','POLYGON','LINE','ELLIPSE'].includes(n.type)) return !hasImg(n);
  if (n.type === 'GROUP' || n.type === 'FRAME') {
    const d = n.findAll(() => true);
    return d.length > 0 && !d.some(c => c.type === 'TEXT' || c.type === 'INSTANCE' || hasImg(c)) && d.some(c => c.type !== 'FRAME' && c.type !== 'GROUP' && c.type !== 'RECTANGLE') ;
  }
  return false;
};
async function paints(arr) {
  if (!Array.isArray(arr)) return undefined;
  const out = [];
  for (const p of arr) {
    if (p.visible === false) continue;
    if (p.type === 'IMAGE') { out.push({ type: 'IMAGE' }); continue; }
    const q = JSON.parse(JSON.stringify(p)); delete q.boundVariables;
    if (q.visible === true) delete q.visible; if (q.opacity === 1) delete q.opacity; if (q.blendMode === 'NORMAL') delete q.blendMode;
    if (q.color) q.color = { r: R(q.color.r), g: R(q.color.g), b: R(q.color.b) };
    if (p.boundVariables && p.boundVariables.color) { const v = await figma.variables.getVariableByIdAsync(p.boundVariables.color.id); if (v) q.varKey = v.key; }
    out.push(q);
  }
  return out;
}
async function node(n) {
  const o = { t: n.type, n: n.name, x: R(ax(n) - ax(root)), y: R(ay(n) - ay(root)), w: R(n.width), h: R(n.height) };
  if (n.visible === false) o.hidden = true;
  if ('opacity' in n && n.opacity < 1) o.op = n.opacity;
  if (n.rotation && Math.abs(n.rotation) > 0.01) o.rot = R(n.rotation);
  if (n !== root && isDecor(n)) {
    // SVG placement uses the bounding box; useAbsoluteBounds prevents cropping by ancestor clips
    const bb = n.absoluteBoundingBox; o.t = 'SVG'; delete o.rot;
    o.x = R(bb.x - ax(root)); o.y = R(bb.y - ay(root)); o.w = R(bb.width); o.h = R(bb.height);
    o.svg = await n.exportAsync({ format: 'SVG_STRING', useAbsoluteBounds: true }); return o;
  }
  if ('fills' in n && n.type !== 'INSTANCE') o.fills = await paints(n.fills);
  if ('strokes' in n && n.strokes.length && n.type !== 'INSTANCE') { o.strokes = await paints(n.strokes); o.sw = n.strokeWeight; }
  if ('effects' in n && n.effects.length && n.type !== 'INSTANCE') o.fx = JSON.parse(JSON.stringify(n.effects)).map(e => { delete e.boundVariables; return e; });
  if ('cornerRadius' in n && n.cornerRadius && n.cornerRadius !== figma.mixed) o.r = n.cornerRadius;
  if ('clipsContent' in n) o.clip = n.clipsContent;
  if (n.type === 'TEXT') {
    o.txt = { chars: n.characters, ah: n.textAlignHorizontal, av: n.textAlignVertical, ar: n.textAutoResize, segs: [] };
    for (const s of n.getStyledTextSegments(['fontName', 'fontSize', 'fills', 'textStyleId', 'lineHeight', 'letterSpacing'])) {
      const seg = { s: s.start, e: s.end, f: s.fontName, sz: s.fontSize, lh: s.lineHeight, ls: s.letterSpacing, fills: await paints(s.fills) };
      if (s.textStyleId) { const st = await figma.getStyleByIdAsync(s.textStyleId); if (st && st.key) seg.styleKey = st.key; }
      o.txt.segs.push(seg);
    }
    return o;
  }
  if (n.type === 'INSTANCE') {
    const mc = await n.getMainComponentAsync();
    o.inst = { key: mc ? mc.key : null, props: {}, texts: [] };
    for (const [k, v] of Object.entries(n.componentProperties || {})) if (v.type === 'TEXT' || v.type === 'BOOLEAN') o.inst.props[k] = v.value;
    for (const t of n.findAll(c => c.type === 'TEXT')) o.inst.texts.push({ n: t.name, chars: t.characters });
    return o;
  }
  if (hasImg(n)) {
    o.img = true;
    // image above a decorative sibling => the template expects a CUTOUT (transparent PNG); below => full-bleed photo
    const sib = n.parent ? n.parent.children : []; const i = sib.indexOf(n);
    o.aboveDecor = sib.slice(0, i).some(c => isDecor(c));
  }
  if ('children' in n) { o.kids = []; for (const c of n.children) if (!SKIP.includes(c.name)) o.kids.push(await node(c)); }
  return o;
}
const spec = JSON.stringify(await node(root));
return { total: spec.length, offset: OFFSET, chunk: spec.slice(OFFSET, OFFSET + 19000) };
