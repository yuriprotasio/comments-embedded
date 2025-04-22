import Se, { useRef as ur, useState as Q, useEffect as sr } from "react";
var z = { exports: {} }, $ = {};
var Oe;
function fr() {
  if (Oe)
    return $;
  Oe = 1;
  var T = Se, S = Symbol.for("react.element"), D = Symbol.for("react.fragment"), O = Object.prototype.hasOwnProperty, h = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(E, l, R) {
    var c, g = {}, m = null, x = null;
    R !== void 0 && (m = "" + R), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (x = l.ref);
    for (c in l)
      O.call(l, c) && !P.hasOwnProperty(c) && (g[c] = l[c]);
    if (E && E.defaultProps)
      for (c in l = E.defaultProps, l)
        g[c] === void 0 && (g[c] = l[c]);
    return { $$typeof: S, type: E, key: m, ref: x, props: g, _owner: h.current };
  }
  return $.Fragment = D, $.jsx = w, $.jsxs = w, $;
}
var W = {};
var we;
function lr() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && function() {
    var T = Se, S = Symbol.for("react.element"), D = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), E = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), b = Symbol.iterator, N = "@@iterator";
    function Ce(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = b && e[b] || e[N];
      return typeof r == "function" ? r : null;
    }
    var j = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Pe("error", e, t);
      }
    }
    function Pe(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var xe = !1, je = !1, ke = !1, Fe = !1, De = !1, ee;
    ee = Symbol.for("react.module.reference");
    function Ae(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === O || e === P || De || e === h || e === R || e === c || Fe || e === x || xe || je || ke || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === g || e.$$typeof === w || e.$$typeof === E || e.$$typeof === l || e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function Ie(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function y(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case O:
          return "Fragment";
        case D:
          return "Portal";
        case P:
          return "Profiler";
        case h:
          return "StrictMode";
        case R:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return re(r) + ".Consumer";
          case w:
            var t = e;
            return re(t._context) + ".Provider";
          case l:
            return Ie(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : y(e.type) || "Memo";
          case m: {
            var o = e, u = o._payload, i = o._init;
            try {
              return y(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, A = 0, te, ne, ae, ie, oe, ue, se;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function $e() {
      {
        if (A === 0) {
          te = console.log, ne = console.info, ae = console.warn, ie = console.error, oe = console.group, ue = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function We() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: te
            }),
            info: C({}, e, {
              value: ne
            }),
            warn: C({}, e, {
              value: ae
            }),
            error: C({}, e, {
              value: ie
            }),
            group: C({}, e, {
              value: oe
            }),
            groupCollapsed: C({}, e, {
              value: ue
            }),
            groupEnd: C({}, e, {
              value: se
            })
          });
        }
        A < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = j.ReactCurrentDispatcher, q;
    function Y(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            q = n && n[1] || "";
          }
        return `
` + q + e;
      }
    }
    var J = !1, L;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Ne();
    }
    function le(e, r) {
      if (!e || J)
        return "";
      {
        var t = L.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      J = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = B.current, B.current = null, $e();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (_) {
              n = _;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (_) {
              n = _;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            n = _;
          }
          e();
        }
      } catch (_) {
        if (_ && n && typeof _.stack == "string") {
          for (var a = _.stack.split(`
`), v = n.stack.split(`
`), s = a.length - 1, f = v.length - 1; s >= 1 && f >= 0 && a[s] !== v[f]; )
            f--;
          for (; s >= 1 && f >= 0; s--, f--)
            if (a[s] !== v[f]) {
              if (s !== 1 || f !== 1)
                do
                  if (s--, f--, f < 0 || a[s] !== v[f]) {
                    var p = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, p), p;
                  }
                while (s >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        J = !1, B.current = u, We(), Error.prepareStackTrace = o;
      }
      var F = e ? e.displayName || e.name : "", Te = F ? Y(F) : "";
      return typeof e == "function" && L.set(e, Te), Te;
    }
    function Ye(e, r, t) {
      return le(e, !1);
    }
    function Le(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, Le(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case R:
          return Y("Suspense");
        case c:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Ye(e.render);
          case g:
            return U(e.type, r, t);
          case m: {
            var n = e, o = n._payload, u = n._init;
            try {
              return U(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, ce = {}, de = j.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, o) {
      {
        var u = Function.call.bind(V);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (M(o), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), M(null)), a instanceof Error && !(a.message in ce) && (ce[a.message] = !0, M(o), d("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var Ve = Array.isArray;
    function H(e) {
      return Ve(e);
    }
    function Me(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function pe(e) {
      if (ze(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Me(e)), ve(e);
    }
    var I = j.ReactCurrentOwner, Be = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, ge, G;
    G = {};
    function qe(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Je(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = y(I.current.type);
        G[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y(I.current.type), e.ref), G[t] = !0);
      }
    }
    function Ge(e, r) {
      {
        var t = function() {
          he || (he = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          ge || (ge = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Xe = function(e, r, t, n, o, u, i) {
      var a = {
        $$typeof: S,
        type: e,
        key: r,
        ref: t,
        props: i,
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Ze(e, r, t, n, o) {
      {
        var u, i = {}, a = null, v = null;
        t !== void 0 && (pe(t), a = "" + t), Je(r) && (pe(r.key), a = "" + r.key), qe(r) && (v = r.ref, He(r, o));
        for (u in r)
          V.call(r, u) && !Be.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || v) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ge(i, f), v && Ke(i, f);
        }
        return Xe(e, a, v, o, n, I.current, i);
      }
    }
    var K = j.ReactCurrentOwner, me = j.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === S;
    }
    function Ee() {
      {
        if (K.current) {
          var e = y(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Qe(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Re = {};
    function er(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function be(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = er(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var n = "";
        e && e._owner && e._owner !== K.current && (n = " It was passed a child from " + y(e._owner.type) + "."), k(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function ye(e, r) {
      {
        if (typeof e != "object")
          return;
        if (H(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && be(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = Ce(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              Z(i.value) && be(i.value, r);
        }
      }
    }
    function rr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = y(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var o = y(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function _e(e, r, t, n, o, u) {
      {
        var i = Ae(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = Qe(o);
          v ? a += v : a += Ee();
          var s;
          e === null ? s = "null" : H(e) ? s = "array" : e !== void 0 && e.$$typeof === S ? (s = "<" + (y(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var f = Ze(e, r, t, o, u);
        if (f == null)
          return f;
        if (i) {
          var p = r.children;
          if (p !== void 0)
            if (n)
              if (H(p)) {
                for (var F = 0; F < p.length; F++)
                  ye(p[F], e);
                Object.freeze && Object.freeze(p);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ye(p, e);
        }
        return e === O ? tr(f) : rr(f), f;
      }
    }
    function nr(e, r, t) {
      return _e(e, r, t, !0);
    }
    function ar(e, r, t) {
      return _e(e, r, t, !1);
    }
    var ir = ar, or = nr;
    W.Fragment = O, W.jsx = ir, W.jsxs = or;
  }()), W;
}
(function(T) {
  process.env.NODE_ENV === "production" ? T.exports = fr() : T.exports = lr();
})(z);
const dr = ({ workspaceId: T, pageUrl: S, pageId: D, pageTitle: O }) => {
  const h = ur(), [P, w] = Q(), [E, l] = Q("0px"), [R, c] = Q(!1);
  function g() {
    w(h.current.offsetWidth);
  }
  return sr(() => {
    var m;
    w(((m = h == null ? void 0 : h.current) == null ? void 0 : m.offsetWidth) || 0), new ResizeObserver(g).observe(h.current), R || (window.addEventListener("message", (x) => {
      var N;
      const b = JSON.parse(x.data);
      b != null && b.commentsSize && l(((N = b == null ? void 0 : b.commentsSize) == null ? void 0 : N.height) + 15);
    }, !1), c(!0));
  }, []), /* @__PURE__ */ z.exports.jsxs("div", { ref: h, style: { position: "relative", left: 0 }, children: [
    "URL: ",
    "http://localhost:3002",
    /* @__PURE__ */ z.exports.jsx("br", {}),
    "ENVIRONMENT: ",
    "PRODUCTION",
    R ? /* @__PURE__ */ z.exports.jsx(
      "iframe",
      {
        style: { zIndex: 2147483647, width: P, minHeight: "480px", height: E },
        src: `http://localhost:3002/comments?workspaceId=${T}
              &pageUrl=${S}&pageId=${D}&pageTitle=${O}`,
        width: "100%",
        height: "100%",
        frameBorder: "0",
        scrolling: "no"
      }
    ) : ""
  ] });
};
export {
  dr as default
};
//# sourceMappingURL=index.es.js.map
