const s = (/* @__PURE__ */ new Date()).toISOString().split("T")[0], i = (t) => {
  if (!t) return "N/A";
  const e = new Date(t);
  if (isNaN(e.getTime())) return t;
  const n = new Date(
    e.getTime() + Math.abs(e.getTimezoneOffset() * 6e4)
  ), r = String(n.getDate()).padStart(2, "0"), a = String(n.getMonth() + 1).padStart(2, "0"), o = String(n.getFullYear()).slice(-2);
  return `${r}/${a}/${o}`;
}, c = (t) => t ? new Date(t).toISOString().split("T")[0] : "", u = (t) => t ? new Date(t).toISOString() : "";
export {
  i as calendarFormat,
  c as inputsFormat,
  u as isoFormat,
  s as today
};
