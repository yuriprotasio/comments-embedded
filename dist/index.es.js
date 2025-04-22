import ee, { useRef as re, useState as y, useEffect as te } from "react";
var S = { exports: {} }, _ = {};
var L;
function ne() {
  if (L)
    return _;
  L = 1;
  var s = Symbol.for("react.transitional.element"), b = Symbol.for("react.fragment");
  function d(m, n, c) {
    var l = null;
    if (c !== void 0 && (l = "" + c), n.key !== void 0 && (l = "" + n.key), "key" in n) {
      c = {};
      for (var E in n)
        E !== "key" && (c[E] = n[E]);
    } else
      c = n;
    return n = c.ref, {
      $$typeof: s,
      type: m,
      key: l,
      ref: n !== void 0 ? n : null,
      props: c
    };
  }
  return _.Fragment = b, _.jsx = d, _.jsxs = d, _;
}
var T = {};
var U;
function oe() {
  return U || (U = 1, process.env.NODE_ENV !== "production" && function() {
    function s(e) {
      if (e == null)
        return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case D:
          return "Profiler";
        case M:
          return "StrictMode";
        case G:
          return "Suspense";
        case H:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case u:
            return "Portal";
          case J:
            return (e.displayName || "Context") + ".Provider";
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case q:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case X:
            return r = e.displayName || null, r !== null ? r : s(e.type) || "Memo";
          case C:
            r = e._payload, e = e._init;
            try {
              return s(e(r));
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
      if (e === p)
        return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === C)
        return "<...>";
      try {
        var r = s(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = A.A;
      return e === null ? null : e.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function l(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function E(e, r) {
      function t() {
        Y || (Y = !0, console.error(
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
      var e = s(this.type);
      return $[e] || ($[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function h(e, r, t, o, f, i, x, j) {
      return t = i.ref, e = {
        $$typeof: O,
        type: e,
        key: r,
        props: i,
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
        value: x
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function g(e, r, t, o, f, i, x, j) {
      var a = r.children;
      if (a !== void 0)
        if (o)
          if (Q(a)) {
            for (o = 0; o < a.length; o++)
              k(a[o]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else
          k(a);
      if (I.call(r, "key")) {
        a = s(e);
        var v = Object.keys(r).filter(function(K) {
          return K !== "key";
        });
        o = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", W[a + o] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          a,
          v,
          a
        ), W[a + o] = !0);
      }
      if (a = null, t !== void 0 && (d(t), a = "" + t), l(r) && (d(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var N in r)
          N !== "key" && (t[N] = r[N]);
      } else
        t = r;
      return a && E(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), h(
        e,
        a,
        i,
        f,
        n(),
        t,
        x,
        j
      );
    }
    function k(e) {
      typeof e == "object" && e !== null && e.$$typeof === O && e._store && (e._store.validated = 1);
    }
    var R = ee, O = Symbol.for("react.transitional.element"), u = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), J = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), A = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, Q = Array.isArray, P = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var Y, $ = {}, z = R["react-stack-bottom-frame"].bind(
      R,
      c
    )(), F = P(m(c)), W = {};
    T.Fragment = p, T.jsx = function(e, r, t, o, f) {
      var i = 1e4 > A.recentlyCreatedOwnerStacks++;
      return g(
        e,
        r,
        t,
        !1,
        o,
        f,
        i ? Error("react-stack-top-frame") : z,
        i ? P(m(e)) : F
      );
    }, T.jsxs = function(e, r, t, o, f) {
      var i = 1e4 > A.recentlyCreatedOwnerStacks++;
      return g(
        e,
        r,
        t,
        !0,
        o,
        f,
        i ? Error("react-stack-top-frame") : z,
        i ? P(m(e)) : F
      );
    };
  }()), T;
}
(function(s) {
  process.env.NODE_ENV === "production" ? s.exports = ne() : s.exports = oe();
})(S);
const se = ({ workspaceId: s, pageUrl: b, pageId: d, pageTitle: m }) => {
  const n = re(), [c, l] = y(), [E, w] = y("0px"), [h, g] = y(!1);
  function k() {
    l(n.current.offsetWidth);
  }
  return te(() => {
    var R;
    l(((R = n == null ? void 0 : n.current) == null ? void 0 : R.offsetWidth) || 0), new ResizeObserver(k).observe(n.current), h || (window.addEventListener("message", (O) => {
      var p;
      const u = JSON.parse(O.data);
      u != null && u.commentsSize && w(((p = u == null ? void 0 : u.commentsSize) == null ? void 0 : p.height) + 15);
    }, !1), g(!0));
  }, []), /* @__PURE__ */ S.exports.jsxs("div", { ref: n, style: { position: "relative", left: 0 }, children: [
    "URL: ",
    "http://localhost:3002",
    /* @__PURE__ */ S.exports.jsx("br", {}),
    "ENVIRONMENT: ",
    "PRODUCTION",
    h ? /* @__PURE__ */ S.exports.jsx(
      "iframe",
      {
        style: { zIndex: 2147483647, width: c, minHeight: "480px", height: E },
        src: `http://localhost:3002/comments?workspaceId=${s}
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
  se as default
};
//# sourceMappingURL=index.es.js.map
