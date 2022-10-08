var Lt = Object.defineProperty;
var Ct = (t, e, n) => e in t ? Lt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var b = (t, e, n) => (Ct(t, typeof e != "symbol" ? e + "" : e, n), n);
import * as w from "d3";
function bt(t, e) {
  if (!document.getElementById("PRERENDER_SVG")) {
    let o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    o.setAttribute("id", "PRERENDER_SVG"), o.setAttribute("pointer-events", "none"), o.setAttribute("width", "0"), o.setAttribute("height", "0"), o.setAttribute("style", "opacity: 0; position: absolute; top: 0; left: 0; width: 0; height: 0;"), document.body.appendChild(o);
  }
  let n = document.getElementById("PRERENDER_SVG");
  n.innerHTML = t.html(), e(n.children[0]), n.innerHTML = "";
}
function C(t) {
  let e = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
  return bt(t, (n) => {
    e = n.getBBox();
  }), e;
}
function D(t) {
  return w.select(document.createElementNS("http://www.w3.org/2000/svg", t));
}
function H(t, e) {
  const n = C(t), o = e / Math.max(n.width, n.height), s = {
    x: -n.width * o / 2 || 0,
    y: -n.height * o / 2 || 0
  };
  return t.attr("transform", `translate(${s.x}, ${s.y}) scale(${o || 1})`), {
    scale: o,
    translate: s
  };
}
function St(t) {
  const e = D("g"), n = D("circle");
  return n.attr("r", t), n.attr("transform", `translate(${t}, ${t})`), e.append(() => n.node()), e;
}
function jt(t, e, n = 0) {
  const o = D("g"), s = D("path");
  return s.attr("d", `M ${0} ${-(e / 2)} L ${t / 2 - n} ${-(e / 2)} A ${n} ${n} 0 0 1 ${t / 2} ${-(e / 2) + n} L ${t / 2} ${e / 2 - n} A ${n} ${n} 0 0 1 ${t / 2 - n} ${e / 2} L ${-(t / 2) + n} ${e / 2} A ${n} ${n} 0 0 1 ${-(t / 2)} ${e / 2 - n} L ${-(t / 2)} ${-(e / 2) + n} A ${n} ${n} 0 0 1 ${-(t / 2) + n} ${-(e / 2)} Z`), s.attr("transform", `translate(${t / 2}, ${e / 2})`), o.append(() => s.node()), o;
}
function At(t, e, n = 0) {
  const o = St(e);
  o.select("circle").attr("fill", "none"), o.select("circle").attr("stroke", "none");
  const s = D("path"), r = [];
  for (let i = 0; i < t; i++) {
    const a = i / t * 2 * Math.PI - Math.PI / 2, c = Math.cos(a) * e, l = Math.sin(a) * e;
    r.push({ x: c, y: l });
  }
  return s.attr("d", Rt(r, n)), s.attr("transform", `translate(${e}, ${e})`), o.append(() => s.node()), o;
}
function Rt(t, e) {
  const n = [];
  t = t.slice();
  for (let o = 0; o < t.length; o++) {
    const s = o + 1 > t.length - 1 ? (o + 1) % t.length : o + 1, r = o + 2 > t.length - 1 ? (o + 2) % t.length : o + 2, i = t[o], a = t[s], c = t[r], l = Math.sqrt(Math.pow(i.x - a.x, 2) + Math.pow(i.y - a.y, 2)), u = (l - e) / l, h = [
      ((1 - u) * i.x + u * a.x).toFixed(1),
      ((1 - u) * i.y + u * a.y).toFixed(1)
    ], p = Math.sqrt(Math.pow(a.x - c.x, 2) + Math.pow(a.y - c.y, 2)), y = e / p, f = [
      ((1 - y) * a.x + y * c.x).toFixed(1),
      ((1 - y) * a.y + y * c.y).toFixed(1)
    ];
    o === t.length - 1 && n.unshift("M" + f.join(",")), n.push("L" + h.join(",")), n.push("Q" + a.x + "," + a.y + "," + f.join(","));
  }
  return n.push("Z"), n.join(" ");
}
const zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  prerender: bt,
  getBBox: C,
  create: D,
  transform: H,
  Circle: St,
  Rectangle: jt,
  Polygon: At
}, Symbol.toStringTag, { value: "Module" }));
function z(t, e, n) {
  return {
    key: t,
    value: e,
    condition: n != null ? n : !0
  };
}
function Nt(t, e, n, o) {
  return {
    shape: t,
    key: e,
    value: n,
    condition: o != null ? o : !0
  };
}
function G(t, e) {
  e.forEach((n) => {
    n.key === "class" && n.value.split(".").forEach((o) => {
      t.classed(o, typeof n.condition == "function" ? n.condition() : n.condition);
    }), (typeof n.condition == "function" ? n.condition() : n.condition) && t.style(n.key, n.value);
  });
}
function vt(t, e) {
  e.forEach((n) => {
    n.key === "class" && n.value.split(".").forEach((o) => {
      n.shape.classed(o, typeof n.condition == "function" ? n.condition(t) : n.condition);
    }), (typeof n.condition == "function" ? n.condition(t) : n.condition) && n.shape.style(n.key, n.value);
  });
}
function Zt(t) {
  const e = D("path");
  return e.attr("d", t), e;
}
function wt(t) {
  const e = D("g");
  return e.html(t), e;
}
function It(t, e = [], n = [], o = 0) {
  let s = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return typeof t == "number" ? s = { top: t, right: t, bottom: t, left: t } : Array.isArray(t) && t.length === 2 ? s = { top: t[0], right: t[1], bottom: t[0], left: t[1] } : Array.isArray(t) && t.length === 4 && (s = { top: t[0], right: t[1], bottom: t[2], left: t[3] }), {
    padding: s,
    textStyles: e,
    backgroundStyles: n,
    cornerRadius: o
  };
}
function J(t, e) {
  const n = D("g").classed("tag", !0), o = n.append("text").text(t).attr("dy", "0.35em").attr("text-anchor", "middle");
  G(o, e.textStyles);
  const s = C(n), r = s.width, i = s.height, a = e.padding.top, c = e.padding.right, l = e.padding.bottom, u = e.padding.left, h = e.cornerRadius, p = n.append("path").attr("d", `M ${0} ${-(i / 2) - a} L ${r / 2 + c - h} ${-(i / 2) - a} A ${h} ${h} 0 0 1 ${r / 2 + c} ${-(i / 2) - a + h} L ${r / 2 + c} ${i / 2 + l - h} A ${h} ${h} 0 0 1 ${r / 2 + c - h} ${i / 2 + l} L ${-(r / 2) - u + h} ${i / 2 + l} A ${h} ${h} 0 0 1 ${-(r / 2) - u} ${i / 2 + l - h} L ${-(r / 2) - u} ${-(i / 2) - a + h} A ${h} ${h} 0 0 1 ${-(r / 2) - u + h} ${-(i / 2) - a} Z`);
  return G(p, e.backgroundStyles), o.remove(), n.append(() => o.node()), n;
}
function Q(t, e = []) {
  const n = D("g").classed("text", !0), o = n.append("text").text(t);
  return G(o, e), n.attr("text-anchor", "middle"), n;
}
function kt() {
  return "break-line";
}
var ot = /* @__PURE__ */ ((t) => (t.Left = "left", t.Center = "center", t.Right = "right", t))(ot || {});
function st(t, e, n, o, s, r, i, a = "center", c = []) {
  return {
    height: t,
    width: e,
    x: n,
    y: o,
    dx: s,
    dy: r,
    rowCount: i,
    align: a,
    rowMargins: c
  };
}
function rt(t, e, n = null) {
  const o = D("g").classed("collection", !0).attr("transform", `translate(${e.x}, ${e.y})`);
  return Ot(t, e, n, o), o;
}
function Ot(t, e, n = null, o) {
  const s = (e.height - e.dy * (e.rowCount - 1)) / e.rowCount;
  let r = 0, i = [];
  for (let a = 0; a < e.rowCount; a++) {
    if (r > t.length - 1)
      return;
    const c = e.rowMargins[a] || 0, l = e.width - c * 2, u = o.append("g").attr("id", `row-${a}`).attr("transform", `translate(${c}, ${(s + e.dy) * a})`);
    r = Ht(t, e, n, u, l, r, i, a == e.rowCount - 1);
  }
}
function Ht(t, e, n = null, o, s, r, i, a) {
  const c = [];
  let l = 0, u = r;
  for (; l < s && u < t.length; ) {
    const p = t[u];
    if (!p)
      break;
    if (typeof p == "string") {
      u++;
      break;
    }
    if (typeof p == "string")
      break;
    const y = C(p).width;
    if (y > s) {
      i.push(p), u++;
      continue;
    }
    if (l + y < s)
      c.push(p), l += y + e.dx, u++;
    else {
      a && i.push(p);
      break;
    }
  }
  n && i.length > 0 && (u >= t.length || a) && (c.push(n), l += C(n).width + e.dx), l -= e.dx;
  let h = 0;
  return c.forEach((p) => {
    const y = C(p).width;
    let f = 0;
    switch (e.align) {
      case "left":
        f = h + y / 2;
        break;
      case "center":
        f = h + y / 2 + (s - l) / 2;
        break;
      case "right":
        f = h + y / 2 + (s - l);
        break;
    }
    p.attr("transform", `translate(${f}, 0)`), o.append(() => p.node()), h += y + e.dx;
  }), u;
}
function it(t, e, n = []) {
  const o = [];
  t.split(" ").forEach((a) => {
    a.includes(`
`) ? (a.split(`
`).forEach((l) => {
      o.push(Q(l, n)), o.push(kt());
    }), o.pop()) : o.push(Q(a, n));
  });
  const r = Q("...", n);
  return rt(o, e, r);
}
function Bt(t, e, n) {
  const o = [];
  t.forEach((i) => {
    const a = J(i, n);
    o.push(a);
  });
  const s = J("...", n);
  return rt(o, e, s);
}
function Gt(t, e, n = []) {
  const o = `${t.id}-${e}`, s = e / (isNaN(t.shape.scale) ? 1 : t.shape.scale);
  t.forceSimulation.registerOnZoom(o, s, (r) => {
    if (w.select("[data-id='" + t.id + "']").size() === 0)
      return t.forceSimulation.deregisterOnZoom(o);
    const i = r * (isNaN(t.shape.scale) ? 1 : t.shape.scale);
    vt(i, n);
  });
}
function Wt(t, e, n, ...o) {
  !e.forceSimulation || e.forceSimulation.eventStore.emit(`template:${e.shape.type}:${t}`, e, n, ...o);
}
const ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Shape: zt,
  ShapeStyle: z,
  LODStyle: Nt,
  applyStyles: G,
  applyLODStyles: vt,
  PathShape: Zt,
  SVGShape: wt,
  TagStyle: It,
  TagShape: J,
  BreakLine: kt,
  Alignment: ot,
  CollectionStyle: st,
  ShapeCollection: rt,
  TextCollection: it,
  TagCollection: Bt,
  OnZoom: Gt,
  EmitEvent: Wt
}, Symbol.toStringTag, { value: "Module" })), Ft = {
  shapeSize: 200,
  shapeBuilder: Xt
};
function Xt(t) {
  const e = D("g"), { icon_large: n } = Yt(e);
  return n.classed("hidden", !0), Vt(e), Qt(t, e), e;
}
function Yt(t) {
  const e = wt(`
		<g>
			<path id="border" d="M8.373,392.094c-11.164,-19.338 -11.164,-43.163 0,-62.5c39.417,-68.271 132.833,-230.073 172.249,-298.344c11.165,-19.338 31.798,-31.25 54.127,-31.25l344.498,0c22.329,-0 42.962,11.912 54.126,31.25c39.417,68.271 132.833,230.073 172.249,298.344c11.165,19.337 11.165,43.162 0,62.5c-39.416,68.271 -132.832,230.073 -172.249,298.344c-11.164,19.337 -31.797,31.25 -54.126,31.25l-344.498,-0c-22.329,-0 -42.962,-11.913 -54.127,-31.25c-39.416,-68.271 -132.832,-230.073 -172.249,-298.344Zm41.667,-0c-11.164,-19.338 -11.164,-43.163 0,-62.5c35.831,-62.06 115.585,-200.199 151.416,-262.26c11.164,-19.337 31.797,-31.25 54.126,-31.25l302.831,0c22.33,0 42.963,11.913 54.127,31.25c35.831,62.061 115.585,200.2 151.416,262.26c11.164,19.337 11.164,43.162 -0,62.5c-35.831,62.06 -115.585,200.199 -151.416,262.259c-11.164,19.338 -31.797,31.25 -54.127,31.25l-302.831,0c-22.329,0 -42.962,-11.912 -54.126,-31.25c-35.831,-62.06 -115.585,-200.199 -151.416,-262.259Z" style="fill:#e57373;" />
			<path id="body" d="M50.04,392.094c-11.164,-19.338 -11.164,-43.163 0,-62.5c35.831,-62.06 115.585,-200.199 151.416,-262.26c11.164,-19.337 31.797,-31.25 54.126,-31.25l302.831,0c22.33,0 42.963,11.913 54.127,31.25c35.831,62.061 115.585,200.2 151.416,262.26c11.164,19.337 11.164,43.162 -0,62.5c-35.831,62.06 -115.585,200.199 -151.416,262.259c-11.164,19.338 -31.797,31.25 -54.127,31.25l-302.831,0c-22.329,0 -42.962,-11.912 -54.126,-31.25c-35.831,-62.06 -115.585,-200.199 -151.416,-262.259Z" />
			<path id="icon" d="M392.598,301.417c-0,7.953 6.447,14.4 14.4,14.4c0.003,-0 0.005,-0 0.008,-0c3.817,-0 7.478,-1.516 10.177,-4.215c2.699,-2.699 4.215,-6.36 4.215,-10.177c-0,-1.135 -0,-2.281 -0,-3.416c-0,-3.817 -1.516,-7.478 -4.215,-10.177c-2.699,-2.699 -6.36,-4.215 -10.177,-4.215c-0.003,-0 -0.005,-0 -0.008,-0c-7.953,-0 -14.4,6.447 -14.4,14.4c-0,1.129 -0,2.27 -0,3.4Zm2.242,-47.423c0.2,6.587 5.597,11.823 12.187,11.823c0.003,-0 0.007,-0 0.01,-0c6.556,-0 11.93,-5.202 12.144,-11.755c0.506,-15.54 1.397,-42.915 1.944,-59.729c0.124,-3.806 -1.301,-7.499 -3.949,-10.235c-2.649,-2.736 -6.294,-4.281 -10.102,-4.281c-0.004,-0 -0.008,-0 -0.012,-0c-3.795,-0 -7.429,1.537 -10.072,4.261c-2.643,2.724 -4.07,6.403 -3.955,10.196c0.507,16.785 1.335,44.149 1.805,59.72Z" style="fill:#e57373;fill-rule:nonzero;" />
			<path id="icon_large" d="M371.559,477.859c-0,19.491 15.8,35.291 35.291,35.291c0.002,0 0.004,0 0.005,0c19.491,0 35.292,-15.8 35.292,-35.291c-0,-2.771 -0,-5.568 -0,-8.339c-0,-19.491 -15.801,-35.291 -35.292,-35.291c-0.001,-0 -0.003,-0 -0.005,-0c-19.491,-0 -35.291,15.8 -35.291,35.291c-0,2.771 -0,5.568 -0,8.339Zm5.494,-116.303c0.489,16.181 13.748,29.045 29.936,29.045l0.012,0c16.041,0 29.188,-12.726 29.71,-28.758c1.239,-38.08 3.425,-105.217 4.768,-146.446c0.303,-9.329 -3.19,-18.381 -9.681,-25.088c-6.492,-6.706 -15.426,-10.492 -24.759,-10.492c-0.003,-0 -0.005,-0 -0.007,-0c-9.309,-0 -18.22,3.77 -24.702,10.451c-6.481,6.68 -9.981,15.702 -9.699,25.006c1.243,41.116 3.268,108.114 4.422,146.282Z" style="fill:#e57373;fill-rule:nonzero;" />
		</g>
	`);
  return t.append(() => e.node()), t.classed("gly_animated", !0), {
    border: e.select("#border"),
    body: e.select("#body"),
    icon: e.select("#icon"),
    icon_large: e.select("#icon_large")
  };
}
function Vt(t) {
  const e = C(t), n = it("Template Error", st(100, e.width, 0, 140, 20, 20, 1), [
    z("class", "gly_text.dark"),
    z("font-weight", "bold"),
    z("font-size", "44pt")
  ]);
  return t.append(() => n.node()), n;
}
function Qt(t, e) {
  var s;
  const n = C(e), o = it((s = t == null ? void 0 : t.errorMessage) != null ? s : "Something went wrong while rendering the template!", st(250, n.width, 0, n.height * 0.6, 15, 20, 4, ot.Center, [80, 130, 180, 230]), [z("class", "gly_text.dark"), z("font-size", "32pt")]);
  return e.append(() => o.node()), o;
}
class Jt {
  constructor() {
    b(this, "_errorTemplate", Ft);
    b(this, "_templates", {});
    b(this, "failed", []);
    b(this, "remoteOrigin", "");
  }
  get errorTemplate() {
    return this._errorTemplate;
  }
  get templates() {
    return this._templates;
  }
  add(e, n) {
    this._templates[e] = n;
  }
  async get(e) {
    var s;
    const n = e.shape.type;
    return this.templates[n] ? this.templates[n] : this.failed.includes(n) ? this.errorTemplate : await this.load((s = e.shape.url) != null ? s : this.remoteOrigin + n + ".js", n).then(() => {
      if (this.templates[n])
        return this.templates[n];
    });
  }
  async load(e, n) {
    this.failed.includes(n) || origin != "" && await import(
      /* webpackIgnore: true */
      /* @vite-ignore */
      e
    ).then(({ default: o }) => {
      this.add(n, o);
    }).catch((o) => {
      console.error(`Template "${n}" not founnd \u2013 Fetched from "${e}"`), console.error(o), this.failed.push(n);
    }).finally(() => {
    });
  }
}
class Kt {
  constructor() {
    b(this, "nodes", {});
  }
  clear() {
    this.nodes = {};
  }
  add(e, n) {
    this.nodes[e] = this.storeNode(n);
  }
  remove(e) {
    delete this.nodes[e];
  }
  hasNode(e) {
    return this.nodes[e] !== void 0;
  }
  hasTemplateChange(e, n) {
    const o = this.nodes[e];
    return o === void 0 ? !1 : o.shape.type !== n.shape.type || o.shape.template !== n.shape.template;
  }
  hasPayloadChanges(e, n) {
    var s, r;
    const o = this.nodes[e];
    return o ? JSON.stringify((s = o.payload) != null ? s : "") !== JSON.stringify((r = n.payload) != null ? r : "") : !0;
  }
  storeNode(e) {
    return {
      shape: {
        type: Object.assign({}, e.shape).type,
        template: Object.assign({}, e.shape).template
      },
      payload: e.payload ? this.deepCopy(e.payload) : void 0
    };
  }
  deepCopy(e) {
    if (e == null)
      return e;
    if (e instanceof Array) {
      var n = [];
      return e.forEach((r) => {
        n.push(r);
      }), n.map((r) => this.deepCopy(r));
    }
    if (e instanceof Object) {
      var o = { ...e };
      for (var s in e)
        e.hasOwnProperty(s) && (o[s] = this.deepCopy(e[s]));
      return o;
    }
    return e;
  }
}
var W = /* @__PURE__ */ ((t) => (t.Soft = "soft", t.Hard = "hard", t))(W || {}), E = /* @__PURE__ */ ((t) => (t.Solid = "solid", t.Dashed = "dashed", t.Dotted = "dotted", t.Hidden = "hidden", t))(E || {}), B = /* @__PURE__ */ ((t) => (t.Strong = "strong", t.Weak = "weak", t.Loose = "loose", t))(B || {});
function ut(t) {
  var h, p, y, f, S;
  if (!t.forceSimulation)
    return t.shape.failed = !0, null;
  const n = t.forceSimulation.nodeDataStore.hasNode(t.id) ? w.select(this) : D("g"), o = t.forceSimulation.nodeDataStore.hasPayloadChanges(t.id, t), s = t.forceSimulation.nodeDataStore.hasTemplateChange(t.id, t);
  if (t.forceSimulation.nodeDataStore.add(t.id, t), !o && !s && !t.shape.failed)
    return H(n.select("[data-object=shape]"), t.shape.scale * ((p = (h = t.shape.template) == null ? void 0 : h.shapeSize) != null ? p : 300)), n.node();
  if (n.selectAll("*").remove(), n.classed("gly-node", !0).attr("data-id", t.id), !t.shape.template)
    return u(`Template "${t.shape.type}" not found!`);
  try {
    n.append(() => t.shape.template.shapeBuilder.bind(this)(t, ht).node()).attr("data-object", "shape");
  } catch (d) {
    return console.error(d), u(d.message);
  }
  const r = C(n), i = t.shape.scale * ((f = (y = t.shape.template) == null ? void 0 : y.shapeSize) != null ? f : 300);
  t.shape.bodyPoints = [];
  const a = n.select(".gly-body").node(), c = [];
  if (a && a.getTotalLength) {
    let d = ((S = t.shape) == null ? void 0 : S.bodyResolution) || 32;
    const v = a.getTotalLength();
    for (let g = 0; g < d; g++) {
      const T = a.getPointAtLength(g / d * v);
      T.x = Math.round(T.x), T.y = Math.round(T.y), c.push(T);
    }
    const m = Math.min(...c.map((g) => g.x)), $ = Math.max(...c.map((g) => g.x)), k = Math.min(...c.map((g) => g.y)), P = Math.max(...c.map((g) => g.y)), _ = $ - m, L = P - k, M = {
      x: r.width / _,
      y: r.height / L
    };
    c.forEach((g) => {
      var T, j, A, R, N, Z, I, O;
      g.x = (g.x - m) * M.x + r.x - _ * M.x / 2 + i, g.y = (g.y - k) * M.y + r.y - L * M.y / 2 + i, ((j = (T = t.forceSimulation) == null ? void 0 : T.debug) == null ? void 0 : j.enabled) && ((N = (R = (A = t.forceSimulation) == null ? void 0 : A.debug) == null ? void 0 : R.bodyPoints) == null ? void 0 : N.enabled) && n.select("[data-object=shape]").append("circle").classed("gly-body-points", !0).attr("cx", g.x + _ * M.x / 2 - i).attr("cy", g.y + L * M.y / 2 - i).attr("r", Math.max(r.height, r.width) / i * 5).attr("fill", (O = (I = (Z = t.forceSimulation) == null ? void 0 : Z.debug) == null ? void 0 : I.bodyPoints) == null ? void 0 : O.color).attr("stroke", "none");
    }), t.shape.bodyPoints = c;
  }
  t.shape.failed = !1;
  const l = H(n.select("[data-object=shape]"), i);
  for (let d of c)
    d.x = (d.x - i) * l.scale, d.y = (d.y - i) * l.scale;
  return n.node();
  function u(d) {
    var v, m, $, k;
    return t.shape.failed = !0, t.errorMessage = d, n.append(() => t.forceSimulation ? t.forceSimulation.templateStore.errorTemplate.shapeBuilder.bind(this)(t, ht).node() : null).attr("data-object", "shape"), H(n.select("[data-object=shape]"), t.shape.scale * ((k = ($ = (m = (v = t.forceSimulation) == null ? void 0 : v.templateStore) == null ? void 0 : m.errorTemplate) == null ? void 0 : $.shapeSize) != null ? k : 300)), n.node();
  }
}
var x = /* @__PURE__ */ ((t) => (t.NodeClick = "node:click", t.NodeDoubleClick = "node:doubleclick", t.NodeContextMenu = "node:contextmenu", t.NodeDragStart = "node:dragstart", t.NodeDragMove = "node:dragmove", t.NodeDragEnd = "node:dragend", t.LinkClick = "link:click", t.LinkDoubleClick = "link:doubleclick", t.LinkContextMenu = "link:contextmenu", t.LinkDragStart = "link:dragstart", t.LinkDragMove = "link:dragmove", t.LinkDragEnd = "link:dragend", t.EnvironmentClick = "environment:click", t.EnvironmentDoubleClick = "environment:doubleclick", t.EnvironmentContextMenu = "environment:contextmenu", t.EnvironmentMove = "environment:move", t.SimulationTick = "simulation:tick", t.SimulationTickEnd = "simulation:tickend", t))(x || {});
const Ut = {
  ["node:click"]: {
    event: (t) => t,
    node: (t) => t
  },
  ["node:doubleclick"]: {
    event: (t) => t,
    node: (t) => t
  },
  ["node:contextmenu"]: {
    event: (t) => t,
    node: (t) => t
  },
  ["node:dragstart"]: {
    event: (t) => t,
    node: (t) => t,
    pos: (t, e) => ({ x: t, y: e })
  },
  ["node:dragmove"]: {
    event: (t) => t,
    node: (t) => t,
    pos: (t, e) => ({ x: t, y: e })
  },
  ["node:dragend"]: {
    event: (t) => t,
    node: (t) => t,
    pos: (t, e) => ({ x: t, y: e })
  },
  ["link:click"]: {
    event: (t) => t,
    link: (t) => t
  },
  ["link:doubleclick"]: {
    event: (t) => t,
    link: (t) => t
  },
  ["link:contextmenu"]: {
    event: (t) => t,
    link: (t) => t
  },
  ["link:dragstart"]: {
    event: (t) => t,
    source: (t) => t,
    pos: (t, e) => ({ x: t, y: e })
  },
  ["link:dragmove"]: {
    event: (t) => t,
    source: (t) => t,
    pos: (t, e) => ({ x: t, y: e })
  },
  ["link:dragend"]: {
    event: (t) => t,
    source: (t) => t,
    target: (t) => t,
    pos: (t, e) => ({ x: t, y: e })
  },
  ["environment:click"]: {
    event: (t) => t,
    pos: (t, e) => ({ x: t, y: e })
  },
  ["environment:doubleclick"]: {
    event: (t) => t,
    pos: (t, e) => ({ x: t, y: e })
  },
  ["environment:contextmenu"]: {
    event: (t) => t,
    pos: (t, e) => ({ x: t, y: e })
  },
  ["environment:move"]: {
    pos: (t) => t
  },
  ["simulation:tick"]: {},
  ["simulation:tickend"]: {}
};
class $t {
  constructor() {
    b(this, "register", {});
  }
  on(e, n) {
    this.register[e] || (this.register[e] = {}), this.register[e][n.name] = n;
  }
  off(e, n) {
    !this.register[e] || delete this.register[e][n.name];
  }
  emit(e, ...n) {
    if (!!this.register[e])
      for (const o in this.register[e])
        return this.register[e][o](...n);
  }
}
b($t, "events", Ut);
let V = !1, F, K = { x: 0, y: 0 };
function qt() {
  return w.drag().on("start", (t, e) => te.bind(this)(t, e)).on("drag", (t, e) => ee.bind(this)(t, e)).on("end", (t, e) => ne.bind(this)(t, e));
}
function te(t, e) {
  if (this.eventStore.emit(x.NodeDragStart, t, e, { x: t.x, y: t.y }) == "newlink")
    return oe.bind(this)(t, e);
  !this.draggableNodes || (this.simulation.alphaTarget(0.05).restart(), e.isDraged = !0, e.fx = t.x, e.fy = t.y);
}
function ee(t, e) {
  if (V)
    return se.bind(this)(t, e);
  !this.draggableNodes || (e.fx = t.x, e.fy = t.y, this.eventStore.emit(x.NodeDragMove, t, e, { x: t.x, y: t.y }));
}
function ne(t, e) {
  if (V)
    return dt.bind(this)(t, e);
  if (!this.draggableNodes)
    return dt.bind(this)(t, e);
  !this.draggableNodes || (this.simulation.alphaTarget(0), e.isDraged = !1, e.fx = null, e.fy = null, this.eventStore.emit(x.NodeDragEnd, t, e, { x: t.x, y: t.y }));
}
function oe(t, e) {
  var n, o, s, r;
  K = {
    x: t.sourceEvent.offsetX / this.worldTransform.k - this.worldTransform.x / this.worldTransform.k - ((n = e.x) != null ? n : 0),
    y: t.sourceEvent.offsetY / this.worldTransform.k - this.worldTransform.y / this.worldTransform.k - ((o = e.y) != null ? o : 0)
  }, V = !0, F = this.selectionGroups.links.append("g").attr("data-object", "prelink").classed("gly-prelink", !0), F.append("line").attr("data-object", "prelink-link-line").classed("gly-link-line", !0).attr("x1", (s = e.x) != null ? s : 0).attr("y1", (r = e.y) != null ? r : 0).attr("x2", t.x).attr("y2", t.y), this.eventStore.emit(x.LinkDragStart, t, e, { x: t.x, y: t.y });
}
function se(t, e) {
  const n = {
    x: t.x + K.x,
    y: t.y + K.y
  };
  F.select("[data-object='prelink-link-line']").attr("x2", n.x).attr("y2", n.y), this.eventStore.emit(x.LinkDragMove, t, e, { x: t.x, y: t.y });
}
function dt(t, e) {
  F.remove(), V = !1;
  let n = t.sourceEvent.target;
  if (n == this.svgElement)
    return this.eventStore.emit(x.LinkDragEnd, t, e, null, { x: t.x, y: t.y });
  for (; n.attributes["data-object"] == null; ) {
    if (n == null)
      return this.eventStore.emit(x.LinkDragEnd, t, e, null, { x: t.x, y: t.y });
    if (n = n.parentElement, !n)
      return this.eventStore.emit(x.LinkDragEnd, t, e, null, { x: t.x, y: t.y });
  }
  if (n = n.parentElement, !n)
    return this.eventStore.emit(x.LinkDragEnd, t, e, null, { x: t.x, y: t.y });
  const o = this.graph.nodes.find((s) => {
    var r;
    return s.id == ((r = n.attributes["data-id"]) == null ? void 0 : r.value);
  });
  if (!o)
    return this.eventStore.emit(x.LinkDragEnd, t, e, null, { x: t.x, y: t.y });
  if (o.id == e.id)
    return this.eventStore.emit(x.LinkDragEnd, t, e, null, { x: t.x, y: t.y });
  this.eventStore.emit(x.LinkDragEnd, t, e, o, { x: t.x, y: t.y });
}
function re(t) {
  t.links = t.links.filter((e) => {
    const n = typeof e.source == "string" ? t.nodes.find((s) => s.id === e.source) : t.nodes.find((s) => s.id === e.source.id), o = typeof e.target == "string" ? t.nodes.find((s) => s.id === e.target) : t.nodes.find((s) => s.id === e.target.id);
    return !(!n || !o);
  }), t.nodes.forEach((e) => {
    const n = [];
    t.links.forEach((s) => {
      (s.source == e.id || s.source.id == e.id) && n.push(s);
    });
    const o = {};
    n.forEach((s) => {
      if (typeof s.target == "object") {
        const r = typeof s.target == "string" ? s.target : s.target.id;
        o[r] || (o[r] = []), o[r].push(s);
      } else
        o[s.target] || (o[s.target] = []), o[s.target].push(s);
    }), Object.keys(o).forEach((s) => {
      o[s].forEach((r, i) => {
        r.i = i;
      }), o[s].sort((r, i) => {
        var a, c;
        return ((a = r.index) != null ? a : 0) - ((c = i.index) != null ? c : 0);
      });
    });
  });
}
async function ie(t) {
  await ce.bind(this)(t), t.nodes.forEach((n) => {
    n.forceSimulation = this;
  }), le(t.nodes);
  const e = this.selectionGroups.nodes.selectAll("[data-object='node']").data(t.nodes, (n) => n.id);
  e.enter().append(ut.bind(this)).attr("data-object", "node").style("pointer-events", "fill").call(qt.bind(this)()).on("click", (n, o) => {
    this.eventStore.emit(x.NodeClick, n, o), n.stopPropagation();
  }).on("dblclick", (n, o) => {
    this.eventStore.emit(x.NodeDoubleClick, n, o), n.stopPropagation();
  }).on("contextmenu", (n, o) => {
    this.eventStore.emit(x.NodeContextMenu, n, o), n.stopPropagation();
  }).attr("opacity", 0).transition().duration(this.animationDuration).attr("opacity", 1), e.exit().transition().duration(this.animationDuration).attr("opacity", 0).each((n) => {
    this.nodeDataStore.remove(n.id);
  }).remove(), e.each((n) => {
    e.filter((s) => s.id === n.id).select(ut);
  }).attr("opacity", 1);
}
function ae(t) {
  const e = this.selectionGroups.links.selectAll("[data-object='link']").data(t.links, (o) => U(o)), n = e.enter().append("g").attr("data-object", "link").attr("data-id", (o) => U(o)).classed("gly-link", !0).on("click", (o, s) => {
    this.eventStore.emit(x.LinkClick, o, s), o.stopPropagation();
  }).on("dblclick", (o, s) => {
    this.eventStore.emit(x.LinkDoubleClick, o, s), o.stopPropagation();
  }).on("contextmenu", (o, s) => {
    this.eventStore.emit(x.LinkContextMenu, o, s), o.stopPropagation();
  });
  n.append("path").attr("data-object", "link-line-full").attr("fill", "none").attr("stroke", "none"), n.append("path").attr("data-object", "link-line").classed("gly-link-line", !0).classed("solid", (o) => o.type ? o.type === E.Solid : !0).classed("dashed", (o) => o.type === E.Dashed).classed("dotted", (o) => o.type === E.Dotted).classed("hidden", (o) => o.type === E.Hidden).style("stroke-width", (o) => {
    var s;
    return (s = o.width) != null ? s : null;
  }), n.append("path").attr("data-object", "link-arrow-head").classed("gly-link-arrow", !0).classed("gly-link-arrow-head", !0).classed("hidden", (o) => o.type === E.Hidden).style("stroke-width", (o) => {
    var s;
    return (s = o.width) != null ? s : null;
  }), n.append("path").attr("data-object", "link-arrow-tail").classed("gly-link-arrow", !0).classed("gly-link-arrow-tail", !0).classed("hidden", (o) => o.type === E.Hidden).style("stroke-width", (o) => {
    var s;
    return (s = o.width) != null ? s : null;
  }), n.append("text").attr("data-object", "link-label").classed("gly-link-label", !0).text((o) => {
    var s;
    return o.type !== E.Hidden && (s = o.label) != null ? s : "";
  }).attr("text-anchor", "middle").attr("dominant-baseline", "central").attr("dy", "0.35em"), n.attr("opacity", 0).transition().duration(this.animationDuration).attr("opacity", 1), e.exit().transition().duration(this.animationDuration).attr("opacity", 0).remove(), e.attr("opacity", 1), e.select("[data-object='link-line']").classed("solid", (o) => o.type ? o.type === E.Solid : !0).classed("dashed", (o) => o.type === E.Dashed).classed("dotted", (o) => o.type === E.Dotted).classed("hidden", (o) => o.type === E.Hidden).style("stroke-width", (o) => {
    var s;
    return (s = o.width) != null ? s : null;
  }), e.select("[data-object='link-arrow-head']").classed("hidden", (o) => o.type === E.Hidden).style("stroke-width", (o) => {
    var s;
    return (s = o.width) != null ? s : null;
  }), e.select("[data-object='link-arrow-tail']").classed("hidden", (o) => o.type === E.Hidden).style("stroke-width", (o) => {
    var s;
    return (s = o.width) != null ? s : null;
  }), e.select("[data-object='link-label']").text((o) => {
    var s;
    return o.type !== E.Hidden && (s = o.label) != null ? s : "";
  });
}
async function ce(t) {
  for (let e in t.nodes) {
    const n = t.nodes[e];
    await this.templateStore.get(n).then((o) => {
      n.shape.template = o;
    });
  }
}
function le(t) {
  var e, n, o, s, r, i, a, c, l, u, h, p;
  for (let y in t) {
    const f = t[y];
    if (!(f.x || f.y) && !(f.fx || f.fy) && !(((e = f.anchor) == null ? void 0 : e.x) || ((n = f.anchor) == null ? void 0 : n.y)) && !(((o = f.satellite) == null ? void 0 : o.x) || ((s = f.satellite) == null ? void 0 : s.y)) && f.spawn) {
      const S = typeof f.spawn.source == "string" ? f.spawn.source : f.spawn.source.id, d = t.find((P) => P.id === S), v = {
        x: (c = (a = (r = d == null ? void 0 : d.x) != null ? r : d == null ? void 0 : d.fx) != null ? a : (i = d == null ? void 0 : d.anchor) == null ? void 0 : i.x) != null ? c : 0,
        y: (p = (h = (l = d == null ? void 0 : d.y) != null ? l : d == null ? void 0 : d.fy) != null ? h : (u = d == null ? void 0 : d.anchor) == null ? void 0 : u.y) != null ? p : 0
      }, m = f.spawn.distance, $ = f.spawn.angle, k = {
        x: v.x + m * Math.cos($ * Math.PI / 180 - Math.PI / 2),
        y: v.y + m * Math.sin($ * Math.PI / 180 - Math.PI / 2)
      };
      f.x = k.x, f.y = k.y;
    }
  }
}
function U(t) {
  return t.id || (t.id = Math.random().toString(36).substring(2, 34) + Math.random().toString(36).substring(2, 34)), t.id ? t.id : (typeof t.source == "string" ? t.source : t.source.id) + (typeof t.target == "string" ? t.target : t.target.id) + t.type + t.directed + t.label + t.strength;
}
var q = /* @__PURE__ */ ((t) => (t.Head = "head", t.Tail = "tail", t))(q || {});
function he(t) {
  const e = Mt(t), n = Et(t), o = tt(e, n, et(t, e, n, 0.1)), s = {
    start: e,
    center: o,
    end: n
  };
  if (!!s)
    return `M ${s.start.x} ${s.start.y}Q ${s.center.x}, ${s.center.y} ${s.end.x} ${s.end.y}`;
}
function ue(t) {
  var n;
  const e = at(t, (n = t.padding) != null ? n : 10);
  if (!!e)
    return `M ${e.start.x} ${e.start.y}Q ${e.center.x}, ${e.center.y} ${e.end.x} ${e.end.y}`;
}
function ft(t, e = "head") {
  var c;
  if (!t.directed)
    return "";
  const n = at(t, (c = t.padding) != null ? c : 10);
  if (!n)
    return;
  const o = Math.atan2(n.end.y - n.center.y, n.end.x - n.center.x), s = 10, r = {
    x: n.end.x + s * Math.cos(o + Math.PI / 2),
    y: n.end.y + s * Math.sin(o + Math.PI / 2)
  }, i = {
    x: n.end.x + s * Math.cos(o),
    y: n.end.y + s * Math.sin(o)
  }, a = {
    x: n.end.x + s * Math.cos(o - Math.PI / 2),
    y: n.end.y + s * Math.sin(o - Math.PI / 2)
  };
  return `M ${r.x} ${r.y}L ${i.x} ${i.y}L ${a.x} ${a.y}`;
}
function de(t) {
  var r;
  const e = at(t, (r = t.padding) != null ? r : 10);
  if (!e)
    return;
  const n = Tt(e.start, e.end), o = e.center.x + (n.x - e.center.x) / 2, s = e.center.y + (n.y - e.center.y) / 2;
  return "translate(" + o + "," + s + ")";
}
function Mt(t) {
  return typeof t.source == "string" || typeof t.target == "string" ? { x: 0, y: 0 } : Dt(t.target, t.source);
}
function Et(t) {
  return typeof t.source == "string" || typeof t.target == "string" ? { x: 0, y: 0 } : Dt(t.source, t.target);
}
function Tt(t, e) {
  return { x: (t.x + e.x) / 2, y: (t.y + e.y) / 2 };
}
function tt(t, e, n) {
  var s, r;
  const o = Tt(t, e);
  return { x: o.x + ((s = n == null ? void 0 : n.x) != null ? s : 0), y: o.y - ((r = n == null ? void 0 : n.y) != null ? r : 0) };
}
function et(t, e, n, o) {
  var h;
  const s = fe(e, n), r = pe(e, n), i = ye(s, r), a = t.curvature || o, c = t.curvature ? 1 : ((h = t.i) != null ? h : 0) + 1, l = a * (r / i) * i * c, u = a * (s / i) * i * c;
  return { x: l, y: u };
}
function fe(t, e) {
  return e.x - t.x;
}
function pe(t, e) {
  return e.y - t.y;
}
function ye(t, e) {
  return Math.sqrt(t * t + e * e);
}
function Dt(t, e) {
  var r, i, a, c, l, u, h, p;
  const n = ((r = e.x) != null ? r : 0) - ((i = t.x) != null ? i : 0), o = ((a = e.y) != null ? a : 0) - ((c = t.y) != null ? c : 0);
  return Math.sqrt(n * n + o * o) === 0 ? { x: (l = t.x) != null ? l : 0, y: (u = t.y) != null ? u : 0 } : { x: n + ((h = t.x) != null ? h : 0), y: o + ((p = t.y) != null ? p : 0) };
}
function at(t, e = 0) {
  var m, $, k, P, _, L, M, g, T, j, A, R;
  const n = Mt(t), o = Et(t), s = et(t, n, o, 0.1);
  if (typeof t.source == "string" || typeof t.target == "string")
    return { start: n, end: o, center: s };
  const r = tt({ x: (m = t.source.x) != null ? m : 0, y: ($ = t.source.y) != null ? $ : 0 }, { x: (k = t.target.x) != null ? k : 0, y: (P = t.target.y) != null ? P : 0 }, s), i = t.directed ? 20 : 0, a = D("g").append("path").attr("d", `M ${n.x} ${n.y}Q ${r.x}, ${r.y} ${o.x} ${o.y}`).node();
  if (!a)
    return { start: n, end: o, center: s };
  const c = t.source.shape.failed ? (_ = t.source.forceSimulation) == null ? void 0 : _.templateStore.errorTemplate.shapeSize : (M = (L = t.source.shape.template) == null ? void 0 : L.shapeSize) != null ? M : 300, l = t.target.shape.failed ? (g = t.target.forceSimulation) == null ? void 0 : g.templateStore.errorTemplate.shapeSize : (j = (T = t.target.shape.template) == null ? void 0 : T.shapeSize) != null ? j : 300, u = pt(t.source, t.target, t, !1), h = pt(t.source, t.target, t, !0), p = u || ((A = t.source.shape.scale) != null ? A : 1) * ((c != null ? c : 300) / 2), y = h || ((R = t.target.shape.scale) != null ? R : 1) * ((l != null ? l : 300) / 2), f = a.getAttribute("d").includes("NaN") ? 0 : a.getPointAtLength(p + e), S = a.getAttribute("d").includes("NaN") ? 0 : a.getPointAtLength(a.getTotalLength() - y - e - i), d = et(t, f, S, 0.1), v = tt(f, S, d);
  return {
    start: { x: f.x, y: f.y },
    center: { x: v.x, y: v.y },
    end: { x: S.x, y: S.y }
  };
}
function pt(t, e, n, o = !1) {
  var f, S, d, v, m, $, k, P, _, L, M, g, T, j, A, R, N, Z, I, O, ct, lt;
  const s = w.select("[data-id='" + U(n) + "']").select("[data-object='link-line-full']").node();
  if (!s || !s.getPointAtLength || s.getAttribute("d").includes("NaN"))
    return 0;
  const r = o ? (f = e.shape.bodyPoints) != null ? f : [] : (S = t.shape.bodyPoints) != null ? S : [];
  if (r.length === 0)
    return 0;
  const i = s.getTotalLength(), a = o ? -(((v = (d = e.shape.template) == null ? void 0 : d.shapeSize) != null ? v : 300) * ((m = e.shape.scale) != null ? m : 1)) / 20 : ((k = ($ = t.shape.template) == null ? void 0 : $.shapeSize) != null ? k : 300) * ((P = t.shape.scale) != null ? P : 1) / 20;
  let c = o ? i : 0, l = s.getPointAtLength(c), u = { x: 0, y: 0 };
  o ? u = {
    x: l.x - ((M = e.x) != null ? M : 0),
    y: l.y - ((g = e.y) != null ? g : 0)
  } : u = {
    x: l.x - ((_ = t.x) != null ? _ : 0),
    y: l.y - ((L = t.y) != null ? L : 0)
  };
  let h = 0;
  for (; nt(u, r) && c <= i && h < 30; )
    h++, c += a, l = s.getPointAtLength(c), o ? u = {
      x: l.x - ((A = e.x) != null ? A : 0),
      y: l.y - ((R = e.y) != null ? R : 0)
    } : u = {
      x: l.x - ((T = t.x) != null ? T : 0),
      y: l.y - ((j = t.y) != null ? j : 0)
    };
  for (h = 0; !nt(u, r) && c >= 0 && h < 30; )
    h++, c = o ? c + 1 : c - 1, l = s.getPointAtLength(c), o ? u = {
      x: l.x - ((I = e.x) != null ? I : 0),
      y: l.y - ((O = e.y) != null ? O : 0)
    } : u = {
      x: l.x - ((N = t.x) != null ? N : 0),
      y: l.y - ((Z = t.y) != null ? Z : 0)
    };
  const p = o ? ((ct = e.shape.scale) != null ? ct : 1) / ((lt = t.shape.scale) != null ? lt : 1) : 1;
  return (o ? i - c : c) * p;
}
function nt(t, e) {
  for (var n = !1, o = 0, s = e.length - 1; o < e.length; s = o++) {
    var r = e[o].x, i = e[o].y, a = e[s].x, c = e[s].y, l = i > t.y != c > t.y && t.x < (a - r) * (t.y - i) / (c - i) + r;
    l && (n = !n);
  }
  return n;
}
function yt(t) {
  return w.forceLink().id((n) => n.id).strength((n) => {
    if (n.strength === void 0)
      return 0.3;
    if (typeof n.strength == "number")
      return n.strength;
    switch (n.strength) {
      case B.Strong:
        return 0.5;
      case B.Weak:
        return 0.3;
      case B.Loose:
        return 0;
      default:
        return 0.3;
    }
  }).distance(t);
}
function ge() {
  return w.forceX().x((e) => X(e).x).strength((e) => Y(e));
}
function me() {
  return w.forceY().y((e) => X(e).y).strength((e) => Y(e));
}
function gt(t) {
  return w.forceManyBody().strength((n) => n.gravity ? n.gravity : t);
}
function X(t) {
  var e, n, o, s;
  return t.satellite ? { x: (e = t.satellite.x) != null ? e : 0, y: (n = t.satellite.y) != null ? n : 0 } : t.anchor ? { x: (o = t.anchor.x) != null ? o : 0, y: (s = t.anchor.y) != null ? s : 0 } : { x: 0, y: 0 };
}
function Y(t) {
  if (t.satellite)
    return 6;
  if (t.anchor)
    switch (t.anchor.type) {
      case W.Hard:
      case W.Soft:
        return 2;
      default:
        return 0;
    }
  return 0;
}
function xe(t) {
  const e = this.graph.nodes;
  var n = w.quadtree().x((o) => o.x).y((o) => o.y).addAll(e);
  e.forEach((o) => {
    var l, u;
    o.x = o.x || 0, o.y = o.y || 0;
    var s = ((u = (l = o.shape.template) == null ? void 0 : l.shapeSize) != null ? u : 300) * o.shape.scale, r = o.x - s, i = o.x + s, a = o.y - s, c = o.y + s;
    n.visit((h, p, y, f, S) => {
      var $, k, P, _, L, M;
      if (h.data && h.data !== o) {
        var d = (($ = o.x) != null ? $ : 0) - h.data.x, v = ((k = o.y) != null ? k : 0) - h.data.y, m = Math.sqrt(d * d + v * v);
        const g = ((_ = (P = o.shape.template) == null ? void 0 : P.shapeSize) != null ? _ : 300) * o.shape.scale;
        be(o, h.data) && (((L = o.shape.bodyPoints) == null ? void 0 : L.length) == 0 || ((M = h.data.shape.bodyPoints) == null ? void 0 : M.length) == 0 ? m < g && (m = (m - g) / m * t, o.x = o.x || 0, o.y = o.y || 0, o.x -= d *= m, o.y -= v *= m, h.data.x += d, h.data.y += v) : Se(o, h.data) && (m = (m - g) / m * t, o.x = o.x || 0, o.y = o.y || 0, o.x -= d *= m, o.y -= v *= m, h.data.x += d, h.data.y += v));
      }
      return p > i || f < r || y > c || S < a;
    });
  });
}
function be(t, e) {
  var a, c, l, u, h, p, y, f, S, d;
  const n = { x: (a = t.x) != null ? a : 0, y: (c = t.y) != null ? c : 0 }, o = ((h = (u = (l = t.shape) == null ? void 0 : l.template) == null ? void 0 : u.shapeSize) != null ? h : 300) / 2 * (t.shape.scale * 1.5), s = { x: (p = e.x) != null ? p : 0, y: (y = e.y) != null ? y : 0 }, r = ((d = (S = (f = e.shape) == null ? void 0 : f.template) == null ? void 0 : S.shapeSize) != null ? d : 300) / 2 * (e.shape.scale * 1.5);
  return Math.sqrt(Math.pow(n.x - s.x, 2) + Math.pow(n.y - s.y, 2)) < o + r;
}
function Se(t, e) {
  var s, r;
  const n = ((s = t.shape.bodyPoints) != null ? s : []).map((i) => {
    var a, c;
    return { x: i.x - ((a = t.x) != null ? a : 0), y: i.y - ((c = t.y) != null ? c : 0) };
  }), o = ((r = e.shape.bodyPoints) != null ? r : []).map((i) => {
    var a, c;
    return { x: i.x - ((a = e.x) != null ? a : 0), y: i.y - ((c = e.y) != null ? c : 0) };
  });
  for (let i = 0; i < n.length; i++) {
    const a = {
      x: n[i].x,
      y: n[i].y
    };
    if (nt(a, o))
      return !0;
  }
  return !1;
}
function ve() {
  for (let t in this.graph.nodes)
    this.graph.nodes[t].isDraged || (we(this.graph, this.graph.nodes[t]), ke(this.graph.nodes[t]));
  this.selectionGroups.nodes.selectAll("[data-object='node']").attr("transform", (t) => {
    var e, n;
    return `translate(${(e = t.x) != null ? e : 0},${(n = t.y) != null ? n : 0})`;
  }), this.selectionGroups.links.selectAll("[data-object='link']").call((t) => {
    t.select("[data-object='link-line-full']").attr("d", he), t.select("[data-object='link-line']").attr("d", ue), t.select("[data-object='link-arrow-head']").attr("d", (i) => ft(i, q.Head)), t.select("[data-object='link-arrow-tail']").attr("d", (i) => ft(i, q.Tail)), t.select("[data-object='link-label']").attr("transform", de);
  }), this.simulation.force("forceX").x((t) => X(t).x).strength((t) => Y(t)), this.simulation.force("forceY").y((t) => X(t).y).strength((t) => Y(t)), this.eventStore.emit(x.SimulationTick);
}
function we(t, e) {
  var r, i, a, c, l, u, h, p;
  if (!e.satellite)
    return;
  if (typeof e.satellite.source == "string") {
    const y = t.nodes.find((f) => f.id === e.satellite.source);
    if (!y)
      return;
    e.satellite.source = y;
  }
  const n = (r = e.satellite.distance) != null ? r : 400, o = (i = e.satellite.angle) != null ? i : 0, s = {
    x: ((l = (c = (a = e.satellite) == null ? void 0 : a.source) == null ? void 0 : c.x) != null ? l : 0) + n * Math.cos(o * Math.PI / 180 - Math.PI / 2),
    y: ((p = (h = (u = e.satellite) == null ? void 0 : u.source) == null ? void 0 : h.y) != null ? p : 0) + n * Math.sin(o * Math.PI / 180 - Math.PI / 2)
  };
  e.satellite.x = s.x, e.satellite.y = s.y;
}
function ke(t) {
  t.satellite || !t.anchor || (t.fx = null, t.fy = null, t.anchor.type === W.Hard && (t.fx = t.anchor.x, t.fy = t.anchor.y));
}
function mt() {
  const t = w.zoom().extent([
    [0, 0],
    [this.svgElement.clientWidth, this.svgElement.clientHeight]
  ]).scaleExtent([0.1, 3]).on("zoom", ({ transform: e }) => Pt.bind(this)(e));
  return this.svgSelection.call(t).call(t.transform, w.zoomIdentity.translate(this.worldTransform.x, this.worldTransform.y).scale(this.worldTransform.k)), this.svgSelection.on("dblclick.zoom", null), t;
}
function Pt(t) {
  if (this.selectionGroups.world.attr("transform", `translate(${t.x}, ${t.y}) scale(${t.k})`), this.worldTransform.k != t.k) {
    const e = [this.worldTransform.k, t.k].sort();
    Object.keys(this.onZoomRoutines).forEach((n) => {
      const o = parseFloat(n);
      o > e[0] && o < e[1] && this.onZoomRoutines[o].forEach((s) => s(t.k));
    });
  }
  this.worldTransform = t, this.eventStore.emit(x.EnvironmentMove, t);
}
function $e(t, e) {
  if (t.transform)
    return _t.bind(this)(t.transform, e, t.duration);
  const n = [];
  t.boundaries && n.push(xt(t.boundaries)), t.nodes && n.push(Me(t.nodes)), Ee.bind(this)(xt(n), e, t.duration, t.padding);
}
function xt(t) {
  let e = t.reduce((r, i) => Math.min(r, i.x), 1 / 0), n = t.reduce((r, i) => Math.min(r, i.y), 1 / 0), o = t.reduce((r, i) => Math.max(r, i.x + i.width), -1 / 0), s = t.reduce((r, i) => Math.max(r, i.y + i.height), -1 / 0);
  return {
    x: e,
    y: n,
    width: o - e,
    height: s - n
  };
}
function Me(t) {
  var i, a, c, l, u, h, p;
  const e = w.extent(t, (y) => y.x), n = w.extent(t, (y) => y.y), o = ((i = e[1]) != null ? i : 0) - ((a = e[0]) != null ? a : 0), s = ((c = n[1]) != null ? c : 0) - ((l = n[0]) != null ? l : 0), r = (u = w.max(t.map((y) => {
    var f, S;
    return y.shape.scale * ((S = (f = y.shape.template) == null ? void 0 : f.shapeSize) != null ? S : 300);
  }))) != null ? u : 0;
  return {
    x: ((h = e[0]) != null ? h : 0) - r / 2,
    y: ((p = n[0]) != null ? p : 0) - r / 2,
    width: o + r,
    height: s + r
  };
}
function _t(t, e, n) {
  const o = this.svgElement.clientWidth, s = this.svgElement.clientHeight, r = { x: o / 2, y: s / 2 }, i = {
    x: -t.x + o / 2 * (1 - t.k) * (t.x / (o / 2)) + r.x,
    y: -t.y + s / 2 * (1 - t.k) * (t.y / (s / 2)) + r.y,
    k: t.k
  };
  Te.bind(this)(i, e, n);
}
function Ee(t, e, n, o) {
  const s = this.svgElement.clientWidth, r = this.svgElement.clientHeight, i = s / r, a = (t.width + (o != null ? o : 0) * 2) / (t.height + (o != null ? o : 0) * 2), c = i < a ? s / (t.width + (o != null ? o : 0) * 2) : r / (t.height + (o != null ? o : 0) * 2), l = {
    x: t.x + t.width / 2,
    y: t.y + t.height / 2,
    k: c
  };
  _t.bind(this)(l, e, n);
}
function Te(t, e, n) {
  isNaN(t.x) || isNaN(t.y) || isNaN(t.k) || this.selectionGroups.world.transition().duration(n != null ? n : 1e3).ease(w.easePolyInOut).attr("transform", `translate(${t.x},${t.y}) scale(${t.k})`).on("end", () => {
    e(t);
  });
}
function De() {
  const t = [], e = [];
  return this.graph.nodes.forEach((n) => {
    var s, r, i, a, c, l, u, h;
    const o = {
      id: n.id,
      x: n.x,
      y: n.y,
      shape: {
        type: n.shape.type,
        scale: n.shape.scale,
        url: n.shape.url
      },
      gravity: n.gravity,
      anchor: {
        type: ((s = n.anchor) == null ? void 0 : s.type) || "",
        x: ((r = n.anchor) == null ? void 0 : r.x) || 0,
        y: ((i = n.anchor) == null ? void 0 : i.y) || 0
      },
      satellite: {
        source: typeof ((a = n.satellite) == null ? void 0 : a.source) == "string" ? n.satellite.source : ((l = (c = n.satellite) == null ? void 0 : c.source) == null ? void 0 : l.id) || "",
        angle: ((u = n.satellite) == null ? void 0 : u.angle) || 0,
        distance: ((h = n.satellite) == null ? void 0 : h.distance) || 0
      },
      payload: n.payload
    };
    t.push(o);
  }), this.graph.links.forEach((n) => {
    const o = {
      source: typeof n.source == "string" ? n.source : n.source.id,
      target: typeof n.target == "string" ? n.target : n.target.id,
      id: n.id,
      type: n.type,
      directed: n.directed,
      label: n.label,
      strength: n.strength,
      padding: n.padding,
      width: n.width,
      curvature: n.curvature,
      payload: n.payload
    };
    e.push(o);
  }), {
    nodes: t,
    links: e
  };
}
class _e {
  constructor(e) {
    b(this, "debug", {
      enabled: !1,
      bodyPoints: {
        enabled: !0,
        color: "#00ffff"
      }
    });
    b(this, "_svgElement");
    b(this, "_svgSelection");
    b(this, "_simulation");
    b(this, "_selectedNodes", []);
    b(this, "_zoom");
    b(this, "worldTransform", { x: 0, y: 0, k: 1 });
    b(this, "_onZoomRegister", []);
    b(this, "_onZoomRoutines", {});
    b(this, "animationDuration", 300);
    b(this, "draggableNodes", !0);
    b(this, "selectionGroups");
    b(this, "graph", { nodes: [], links: [] });
    b(this, "templateStore", new Jt());
    b(this, "nodeDataStore", new Kt());
    b(this, "eventStore", new $t());
    e instanceof SVGElement ? (this._svgElement = e, this._svgSelection = w.select(e)) : (this._svgSelection = e, this._svgElement = e.node()), this.worldTransform = { x: this.svgElement.clientWidth / 2, y: this.svgElement.clientHeight / 2, k: 1 }, this._simulation = this.createSimulation(), this.selectionGroups = this.createWorld(), this._zoom = mt.bind(this)(), this.setEvents();
  }
  get svgElement() {
    return this._svgElement;
  }
  set svgElement(e) {
    this._svgElement = e, this._svgSelection = w.select(e), this.selectionGroups = this.createWorld(), this._zoom = mt.bind(this)(), this.setEvents(), this.render(this.graph);
  }
  get svgSelection() {
    return this._svgSelection;
  }
  get simulation() {
    return this._simulation;
  }
  get selectedNodes() {
    return this._selectedNodes;
  }
  set selectedNodes(e) {
    this._selectedNodes = e, this.selectNodes();
  }
  get worldBounds() {
    const { x: e, y: n, k: o } = this.worldTransform;
    return {
      x: -(e / o),
      y: -(n / o),
      width: this.svgElement.clientWidth / o,
      height: this.svgElement.clientHeight / o
    };
  }
  set zoomScaleExtent(e) {
    this._zoom.scaleExtent(e);
  }
  set zoomEnabled(e) {
    this._zoom.on("zoom", null), e && this._zoom.on("zoom", ({ transform: n }) => Pt.bind(this)(n));
  }
  get onZoomRegister() {
    return this._onZoomRegister;
  }
  get onZoomRoutines() {
    return this._onZoomRoutines;
  }
  set envGravity(e) {
    this.simulation.force("gravity", gt(e));
  }
  set linkDistance(e) {
    this.simulation.force("link", yt(e));
  }
  createSimulation() {
    return w.forceSimulation().force("link", yt(400)).force("forceX", ge()).force("forceY", me()).force("gravity", gt(-1e4)).force("shapeCollide", xe.bind(this)).on("tick", ve.bind(this)).on("end", () => {
      this.eventStore.emit(x.SimulationTickEnd);
    });
  }
  createWorld() {
    const e = this.svgSelection.append("g").attr("data-object", "world"), n = e.append("g").attr("data-object", "links"), o = e.append("g").attr("data-object", "nodes");
    return { world: e, nodes: o, links: n };
  }
  setEvents() {
    function e(n) {
      return {
        x: this.worldBounds.x + n.offsetX / this.worldTransform.k,
        y: this.worldBounds.y + n.offsetY / this.worldTransform.k
      };
    }
    this.svgSelection.on("click", (n) => this.eventStore.emit(x.EnvironmentClick, n, e.bind(this)(n))), this.svgSelection.on("dblclick", (n) => this.eventStore.emit(x.EnvironmentDoubleClick, n, e.bind(this)(n))), this.svgSelection.on("contextmenu", (n) => this.eventStore.emit(x.EnvironmentContextMenu, n, e.bind(this)(n)));
  }
  registerOnZoom(e, n, o) {
    this.deregisterOnZoom(e), this._onZoomRegister.push({ id: e, threshold: n, callback: o }), this.createOnZoomRoutines();
  }
  deregisterOnZoom(e) {
    this._onZoomRegister = this._onZoomRegister.filter(({ id: n }) => n !== e);
  }
  createOnZoomRoutines() {
    this._onZoomRoutines = {}, this._onZoomRegister.forEach((e) => {
      this._onZoomRoutines[e.threshold] || (this._onZoomRoutines[e.threshold] = []), this._onZoomRoutines[e.threshold].push(e.callback);
    });
  }
  selectNodes() {
    this.selectionGroups.nodes.selectAll(".gly-selectable").classed("gly-selected", !1), this.selectionGroups.nodes.selectAll("[data-object='node']").filter((e) => this.selectedNodes.includes(e.id)).selectAll(".gly-selectable").classed("gly-selected", !0);
  }
  async render(e, n = 0.05, o = !1) {
    o && (this.nodeDataStore.clear(), this.selectionGroups.nodes.selectAll("*").remove(), this.selectionGroups.links.selectAll("*").remove()), this.graph = e, await ie.bind(this)(this.graph).then(() => {
      re(e), ae.bind(this)(this.graph), this.simulation.nodes(this.graph.nodes), this.simulation.force("link").links(e.links), this.simulation.alphaTarget(n).restart(), setTimeout(() => {
        this.simulation.alphaTarget(0);
      }, 100), this._onZoomRegister.forEach((s) => s.callback(this.worldTransform.k)), this.selectNodes();
    });
  }
  exportGraph() {
    return De.bind(this)();
  }
  moveTo(e) {
    $e.bind(this)(e, (n) => {
      this.svgSelection.call(this._zoom.transform, w.zoomIdentity.translate(n.x, n.y).scale(n.k));
    });
  }
  on(e, n) {
    this.eventStore.on(e, n);
  }
}
export {
  W as AnchorType,
  x as Event,
  _e as ForceSimulation,
  B as LinkStrength,
  E as LinkType,
  ht as TemplateAPI
};
