import te, { useRef as ne, useState as y, useEffect as oe } from "react";
var S = { exports: {} }, _ = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U;
function ae() {
  if (U) return _;
  U = 1;
  var i = Symbol.for("react.transitional.element"), b = Symbol.for("react.fragment");
  function d(m, n, s) {
    var u = null;
    if (s !== void 0 && (u = "" + s), n.key !== void 0 && (u = "" + n.key), "key" in n) {
      s = {};
      for (var E in n)
        E !== "key" && (s[E] = n[E]);
    } else s = n;
    return n = s.ref, {
      $$typeof: i,
      type: m,
      key: u,
      ref: n !== void 0 ? n : null,
      props: s
    };
  }
  return _.Fragment = b, _.jsx = d, _.jsxs = d, _;
}
var T = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M;
function se() {
  return M || (M = 1, process.env.NODE_ENV !== "production" && function() {
    function i(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case v:
          return "Fragment";
        case q:
          return "Profiler";
        case J:
          return "StrictMode";
        case X:
          return "Suspense";
        case B:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case l:
            return "Portal";
          case G:
            return (e.displayName || "Context") + ".Provider";
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case H:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return r = e.displayName || null, r !== null ? r : i(e.type) || "Memo";
          case I:
            r = e._payload, e = e._init;
            try {
              return i(e(r));
            } catch {
            }
        }
      return null;
    }
    function b(e) {
      return "" + e;
    }
    function d(e) {
      try {
        b(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, o = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), b(e);
      }
    }
    function m(e) {
      if (e === v) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === I)
        return "<...>";
      try {
        var r = i(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = x.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function u(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function E(e, r) {
      function t() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function w() {
      var e = i(this.type);
      return z[e] || (z[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function h(e, r, t, o, f, c, P, j) {
      return t = c.ref, e = {
        $$typeof: O,
        type: e,
        key: r,
        props: c,
        _owner: f
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: w
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: P
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function g(e, r, t, o, f, c, P, j) {
      var a = r.children;
      if (a !== void 0)
        if (o)
          if (ee(a)) {
            for (o = 0; o < a.length; o++)
              k(a[o]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else k(a);
      if (Y.call(r, "key")) {
        a = i(e);
        var p = Object.keys(r).filter(function(re) {
          return re !== "key";
        });
        o = 0 < p.length ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}", L[a + o] || (p = 0 < p.length ? "{" + p.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          a,
          p,
          a
        ), L[a + o] = !0);
      }
      if (a = null, t !== void 0 && (d(t), a = "" + t), u(r) && (d(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var N in r)
          N !== "key" && (t[N] = r[N]);
      } else t = r;
      return a && E(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), h(
        e,
        a,
        c,
        f,
        n(),
        t,
        P,
        j
      );
    }
    function k(e) {
      typeof e == "object" && e !== null && e.$$typeof === O && e._store && (e._store.validated = 1);
    }
    var R = te, O = Symbol.for("react.transitional.element"), l = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), G = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), x = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, ee = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var $, z = {}, F = R["react-stack-bottom-frame"].bind(
      R,
      s
    )(), W = A(m(s)), L = {};
    T.Fragment = v, T.jsx = function(e, r, t, o, f) {
      var c = 1e4 > x.recentlyCreatedOwnerStacks++;
      return g(
        e,
        r,
        t,
        !1,
        o,
        f,
        c ? Error("react-stack-top-frame") : F,
        c ? A(m(e)) : W
      );
    }, T.jsxs = function(e, r, t, o, f) {
      var c = 1e4 > x.recentlyCreatedOwnerStacks++;
      return g(
        e,
        r,
        t,
        !0,
        o,
        f,
        c ? Error("react-stack-top-frame") : F,
        c ? A(m(e)) : W
      );
    };
  }()), T;
}
var D;
function ce() {
  return D || (D = 1, process.env.NODE_ENV === "production" ? S.exports = ae() : S.exports = se()), S.exports;
}
var C = ce();
const ue = ({ workspaceId: i, pageUrl: b, pageId: d, pageTitle: m }) => {
  const n = ne(), [s, u] = y(), [E, w] = y("0px"), [h, g] = y(!1);
  function k() {
    u(n.current.offsetWidth);
  }
  return oe(() => {
    var R;
    u(((R = n == null ? void 0 : n.current) == null ? void 0 : R.offsetWidth) || 0), new ResizeObserver(k).observe(n.current), h || (window.addEventListener("message", (O) => {
      var v;
      const l = JSON.parse(O.data);
      l != null && l.commentsSize && w(((v = l == null ? void 0 : l.commentsSize) == null ? void 0 : v.height) + 15);
    }, !1), g(!0));
  }, []), // @ts-ignore
  /* @__PURE__ */ C.jsxs("div", { ref: n, style: { position: "relative", left: 0 }, children: [
    "URL: ",
    "http://localhost:3002",
    /* @__PURE__ */ C.jsx("br", {}),
    "ENVIRONMENT: ",
    "PRODUCTION",
    h ? /* @__PURE__ */ C.jsx(
      "iframe",
      {
        style: { zIndex: 2147483647, width: s, minHeight: "480px", height: E },
        src: `http://localhost:3002/comments?workspaceId=${i}
              &pageUrl=${b}&pageId=${d}&pageTitle=${m}`,
        width: "100%",
        height: "100%",
        frameBorder: "0",
        scrolling: "no"
      }
    ) : ""
  ] });
};
export {
  ue as default
};
