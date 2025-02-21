import { j as e, C as x } from "./Calendar_icon-DhO_pceK.js";
import u from "react";
const j = u.forwardRef(function(a, n) {
  const {
    label: l,
    defaultValue: r = "",
    name: s,
    type: o = "text",
    className: i = "",
    theme: c
  } = a;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("label", { className: `groker__input-label ${i} ${c}`, children: l }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: o,
        className: `groker__input-field ${c}`,
        name: s,
        defaultValue: r,
        ref: n,
        "aria-labelledby": `${s || "input"}-field-label`
      }
    )
  ] });
}), b = u.forwardRef(function(a, n) {
  const {
    theme: l,
    change: r,
    click: s,
    iconSize: o,
    defaultValue: i = "",
    label: c,
    toShowValue: m
  } = a;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("label", { className: `groker__input-label ${l}`, children: c }),
    /* @__PURE__ */ e.jsxs("div", { className: `groker__input-field ${l}`, children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          ref: n,
          type: "date",
          style: {
            opacity: 0,
            position: "absolute",
            zIndex: -1
          },
          defaultValue: i,
          onChange: r
        }
      ),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          readOnly: !0,
          value: m,
          onClick: s,
          className: "custom-date-input"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          className: "custom-date-button",
          onClick: s,
          "aria-label": "Abrir selector de fecha",
          children: /* @__PURE__ */ e.jsx(x, { size: o })
        }
      )
    ] })
  ] });
}), d = ({
  children: t,
  className: a = "",
  onEvent: n,
  theme: l = "light"
}) => /* @__PURE__ */ e.jsx("button", { className: `groker__btn ${a} ${l}`, onClick: n, children: t }), f = ({ switcher: t, onEvent: a, name: n }) => /* @__PURE__ */ e.jsxs("label", { className: "groker__toggle-switch", children: [
  /* @__PURE__ */ e.jsx(
    "input",
    {
      type: "checkbox",
      checked: t,
      onChange: a,
      name: n
    }
  ),
  /* @__PURE__ */ e.jsx("span", { className: "groker__slider" })
] }), g = ({ message: t, onClose: a, theme: n = "light" }) => /* @__PURE__ */ e.jsx("div", { className: "modal-overlay", children: /* @__PURE__ */ e.jsxs("div", { className: `modal-content ${n}`, children: [
  /* @__PURE__ */ e.jsx("p", { children: t }),
  /* @__PURE__ */ e.jsx(d, { className: "confirm-button", onEvent: a, children: "Confirmar" })
] }) });
function N({
  isOpen: t,
  onClose: a,
  onConfirm: n,
  message: l,
  theme: r = "light"
}) {
  return t ? /* @__PURE__ */ e.jsx("div", { className: "modal-overlay", onClick: a, children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `modal-content ${r}`,
      onClick: (s) => s.stopPropagation(),
      children: [
        /* @__PURE__ */ e.jsx("p", { children: l }),
        /* @__PURE__ */ e.jsxs("div", { className: "modal-actions", children: [
          /* @__PURE__ */ e.jsx(d, { className: "confirm-button", onEvent: n, theme: r, children: "Confirmar" }),
          /* @__PURE__ */ e.jsx(d, { className: "cancel-button", onEvent: a, theme: r, children: "Cancelar" })
        ] })
      ]
    }
  ) }) : null;
}
export {
  g as A,
  d as B,
  N as C,
  b as D,
  j as T,
  f as a
};
