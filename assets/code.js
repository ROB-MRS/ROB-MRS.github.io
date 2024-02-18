(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        r(l);
    new MutationObserver(l=>{
        for (const i of l)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(l) {
        const i = {};
        return l.integrity && (i.integrity = l.integrity),
        l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
        l.crossOrigin === "use-credentials" ? i.credentials = "include" : l.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(l) {
        if (l.ep)
            return;
        l.ep = !0;
        const i = n(l);
        fetch(l.href, i)
    }
}
)();
function wc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var bu = {
    exports: {}
}
  , il = {}
  , es = {
    exports: {}
}
  , T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qn = Symbol.for("react.element")
  , kc = Symbol.for("react.portal")
  , xc = Symbol.for("react.fragment")
  , Sc = Symbol.for("react.strict_mode")
  , Ec = Symbol.for("react.profiler")
  , Cc = Symbol.for("react.provider")
  , _c = Symbol.for("react.context")
  , Nc = Symbol.for("react.forward_ref")
  , jc = Symbol.for("react.suspense")
  , Pc = Symbol.for("react.memo")
  , zc = Symbol.for("react.lazy")
  , Ao = Symbol.iterator;
function Lc(e) {
    return e === null || typeof e != "object" ? null : (e = Ao && e[Ao] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ts = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , ns = Object.assign
  , rs = {};
function an(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = rs,
    this.updater = n || ts
}
an.prototype.isReactComponent = {};
an.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
an.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function ls() {}
ls.prototype = an.prototype;
function Hi(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = rs,
    this.updater = n || ts
}
var Qi = Hi.prototype = new ls;
Qi.constructor = Hi;
ns(Qi, an.prototype);
Qi.isPureReactComponent = !0;
var Bo = Array.isArray
  , is = Object.prototype.hasOwnProperty
  , Ki = {
    current: null
}
  , os = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function us(e, t, n) {
    var r, l = {}, i = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            is.call(t, r) && !os.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1)
        l.children = n;
    else if (1 < u) {
        for (var s = Array(u), c = 0; c < u; c++)
            s[c] = arguments[c + 2];
        l.children = s
    }
    if (e && e.defaultProps)
        for (r in u = e.defaultProps,
        u)
            l[r] === void 0 && (l[r] = u[r]);
    return {
        $$typeof: qn,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: Ki.current
    }
}
function Tc(e, t) {
    return {
        $$typeof: qn,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Yi(e) {
    return typeof e == "object" && e !== null && e.$$typeof === qn
}
function Rc(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Wo = /\/+/g;
function Cl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Rc("" + e.key) : t.toString(36)
}
function Er(e, t, n, r, l) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case qn:
            case kc:
                o = !0
            }
        }
    if (o)
        return o = e,
        l = l(o),
        e = r === "" ? "." + Cl(o, 0) : r,
        Bo(l) ? (n = "",
        e != null && (n = e.replace(Wo, "$&/") + "/"),
        Er(l, t, n, "", function(c) {
            return c
        })) : l != null && (Yi(l) && (l = Tc(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Wo, "$&/") + "/") + e)),
        t.push(l)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    Bo(e))
        for (var u = 0; u < e.length; u++) {
            i = e[u];
            var s = r + Cl(i, u);
            o += Er(i, t, n, s, l)
        }
    else if (s = Lc(e),
    typeof s == "function")
        for (e = s.call(e),
        u = 0; !(i = e.next()).done; )
            i = i.value,
            s = r + Cl(i, u++),
            o += Er(i, t, n, s, l);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function ir(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , l = 0;
    return Er(e, r, "", "", function(i) {
        return t.call(n, i, l++)
    }),
    r
}
function Mc(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var se = {
    current: null
}
  , Cr = {
    transition: null
}
  , Oc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: Cr,
    ReactCurrentOwner: Ki
};
T.Children = {
    map: ir,
    forEach: function(e, t, n) {
        ir(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ir(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return ir(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Yi(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
T.Component = an;
T.Fragment = xc;
T.Profiler = Ec;
T.PureComponent = Hi;
T.StrictMode = Sc;
T.Suspense = jc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oc;
T.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = ns({}, e.props)
      , l = e.key
      , i = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        o = Ki.current),
        t.key !== void 0 && (l = "" + t.key),
        e.type && e.type.defaultProps)
            var u = e.type.defaultProps;
        for (s in t)
            is.call(t, s) && !os.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1)
        r.children = n;
    else if (1 < s) {
        u = Array(s);
        for (var c = 0; c < s; c++)
            u[c] = arguments[c + 2];
        r.children = u
    }
    return {
        $$typeof: qn,
        type: e.type,
        key: l,
        ref: i,
        props: r,
        _owner: o
    }
}
;
T.createContext = function(e) {
    return e = {
        $$typeof: _c,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Cc,
        _context: e
    },
    e.Consumer = e
}
;
T.createElement = us;
T.createFactory = function(e) {
    var t = us.bind(null, e);
    return t.type = e,
    t
}
;
T.createRef = function() {
    return {
        current: null
    }
}
;
T.forwardRef = function(e) {
    return {
        $$typeof: Nc,
        render: e
    }
}
;
T.isValidElement = Yi;
T.lazy = function(e) {
    return {
        $$typeof: zc,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Mc
    }
}
;
T.memo = function(e, t) {
    return {
        $$typeof: Pc,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
T.startTransition = function(e) {
    var t = Cr.transition;
    Cr.transition = {};
    try {
        e()
    } finally {
        Cr.transition = t
    }
}
;
T.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
T.useCallback = function(e, t) {
    return se.current.useCallback(e, t)
}
;
T.useContext = function(e) {
    return se.current.useContext(e)
}
;
T.useDebugValue = function() {}
;
T.useDeferredValue = function(e) {
    return se.current.useDeferredValue(e)
}
;
T.useEffect = function(e, t) {
    return se.current.useEffect(e, t)
}
;
T.useId = function() {
    return se.current.useId()
}
;
T.useImperativeHandle = function(e, t, n) {
    return se.current.useImperativeHandle(e, t, n)
}
;
T.useInsertionEffect = function(e, t) {
    return se.current.useInsertionEffect(e, t)
}
;
T.useLayoutEffect = function(e, t) {
    return se.current.useLayoutEffect(e, t)
}
;
T.useMemo = function(e, t) {
    return se.current.useMemo(e, t)
}
;
T.useReducer = function(e, t, n) {
    return se.current.useReducer(e, t, n)
}
;
T.useRef = function(e) {
    return se.current.useRef(e)
}
;
T.useState = function(e) {
    return se.current.useState(e)
}
;
T.useSyncExternalStore = function(e, t, n) {
    return se.current.useSyncExternalStore(e, t, n)
}
;
T.useTransition = function() {
    return se.current.useTransition()
}
;
T.version = "18.2.0";
es.exports = T;
var P = es.exports;
const He = wc(P);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ic = P
  , Fc = Symbol.for("react.element")
  , Dc = Symbol.for("react.fragment")
  , Uc = Object.prototype.hasOwnProperty
  , $c = Ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Ac = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function ss(e, t, n) {
    var r, l = {}, i = null, o = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        Uc.call(t, r) && !Ac.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: Fc,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: $c.current
    }
}
il.Fragment = Dc;
il.jsx = ss;
il.jsxs = ss;
bu.exports = il;
var v = bu.exports
  , Jl = {}
  , as = {
    exports: {}
}
  , we = {}
  , cs = {
    exports: {}
}
  , fs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(C, z) {
        var L = C.length;
        C.push(z);
        e: for (; 0 < L; ) {
            var Q = L - 1 >>> 1
              , Z = C[Q];
            if (0 < l(Z, z))
                C[Q] = z,
                C[L] = Z,
                L = Q;
            else
                break e
        }
    }
    function n(C) {
        return C.length === 0 ? null : C[0]
    }
    function r(C) {
        if (C.length === 0)
            return null;
        var z = C[0]
          , L = C.pop();
        if (L !== z) {
            C[0] = L;
            e: for (var Q = 0, Z = C.length, rr = Z >>> 1; Q < rr; ) {
                var gt = 2 * (Q + 1) - 1
                  , El = C[gt]
                  , wt = gt + 1
                  , lr = C[wt];
                if (0 > l(El, L))
                    wt < Z && 0 > l(lr, El) ? (C[Q] = lr,
                    C[wt] = L,
                    Q = wt) : (C[Q] = El,
                    C[gt] = L,
                    Q = gt);
                else if (wt < Z && 0 > l(lr, L))
                    C[Q] = lr,
                    C[wt] = L,
                    Q = wt;
                else
                    break e
            }
        }
        return z
    }
    function l(C, z) {
        var L = C.sortIndex - z.sortIndex;
        return L !== 0 ? L : C.id - z.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date
          , u = o.now();
        e.unstable_now = function() {
            return o.now() - u
        }
    }
    var s = []
      , c = []
      , h = 1
      , p = null
      , m = 3
      , w = !1
      , k = !1
      , x = !1
      , O = typeof setTimeout == "function" ? setTimeout : null
      , d = typeof clearTimeout == "function" ? clearTimeout : null
      , a = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function f(C) {
        for (var z = n(c); z !== null; ) {
            if (z.callback === null)
                r(c);
            else if (z.startTime <= C)
                r(c),
                z.sortIndex = z.expirationTime,
                t(s, z);
            else
                break;
            z = n(c)
        }
    }
    function y(C) {
        if (x = !1,
        f(C),
        !k)
            if (n(s) !== null)
                k = !0,
                xl(S);
            else {
                var z = n(c);
                z !== null && Sl(y, z.startTime - C)
            }
    }
    function S(C, z) {
        k = !1,
        x && (x = !1,
        d(j),
        j = -1),
        w = !0;
        var L = m;
        try {
            for (f(z),
            p = n(s); p !== null && (!(p.expirationTime > z) || C && !je()); ) {
                var Q = p.callback;
                if (typeof Q == "function") {
                    p.callback = null,
                    m = p.priorityLevel;
                    var Z = Q(p.expirationTime <= z);
                    z = e.unstable_now(),
                    typeof Z == "function" ? p.callback = Z : p === n(s) && r(s),
                    f(z)
                } else
                    r(s);
                p = n(s)
            }
            if (p !== null)
                var rr = !0;
            else {
                var gt = n(c);
                gt !== null && Sl(y, gt.startTime - z),
                rr = !1
            }
            return rr
        } finally {
            p = null,
            m = L,
            w = !1
        }
    }
    var _ = !1
      , N = null
      , j = -1
      , A = 5
      , R = -1;
    function je() {
        return !(e.unstable_now() - R < A)
    }
    function dn() {
        if (N !== null) {
            var C = e.unstable_now();
            R = C;
            var z = !0;
            try {
                z = N(!0, C)
            } finally {
                z ? pn() : (_ = !1,
                N = null)
            }
        } else
            _ = !1
    }
    var pn;
    if (typeof a == "function")
        pn = function() {
            a(dn)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var $o = new MessageChannel
          , gc = $o.port2;
        $o.port1.onmessage = dn,
        pn = function() {
            gc.postMessage(null)
        }
    } else
        pn = function() {
            O(dn, 0)
        }
        ;
    function xl(C) {
        N = C,
        _ || (_ = !0,
        pn())
    }
    function Sl(C, z) {
        j = O(function() {
            C(e.unstable_now())
        }, z)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(C) {
        C.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        k || w || (k = !0,
        xl(S))
    }
    ,
    e.unstable_forceFrameRate = function(C) {
        0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < C ? Math.floor(1e3 / C) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return m
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(s)
    }
    ,
    e.unstable_next = function(C) {
        switch (m) {
        case 1:
        case 2:
        case 3:
            var z = 3;
            break;
        default:
            z = m
        }
        var L = m;
        m = z;
        try {
            return C()
        } finally {
            m = L
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(C, z) {
        switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            C = 3
        }
        var L = m;
        m = C;
        try {
            return z()
        } finally {
            m = L
        }
    }
    ,
    e.unstable_scheduleCallback = function(C, z, L) {
        var Q = e.unstable_now();
        switch (typeof L == "object" && L !== null ? (L = L.delay,
        L = typeof L == "number" && 0 < L ? Q + L : Q) : L = Q,
        C) {
        case 1:
            var Z = -1;
            break;
        case 2:
            Z = 250;
            break;
        case 5:
            Z = 1073741823;
            break;
        case 4:
            Z = 1e4;
            break;
        default:
            Z = 5e3
        }
        return Z = L + Z,
        C = {
            id: h++,
            callback: z,
            priorityLevel: C,
            startTime: L,
            expirationTime: Z,
            sortIndex: -1
        },
        L > Q ? (C.sortIndex = L,
        t(c, C),
        n(s) === null && C === n(c) && (x ? (d(j),
        j = -1) : x = !0,
        Sl(y, L - Q))) : (C.sortIndex = Z,
        t(s, C),
        k || w || (k = !0,
        xl(S))),
        C
    }
    ,
    e.unstable_shouldYield = je,
    e.unstable_wrapCallback = function(C) {
        var z = m;
        return function() {
            var L = m;
            m = z;
            try {
                return C.apply(this, arguments)
            } finally {
                m = L
            }
        }
    }
}
)(fs);
cs.exports = fs;
var Bc = cs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ds = P
  , ge = Bc;
function g(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ps = new Set
  , In = {};
function Rt(e, t) {
    tn(e, t),
    tn(e + "Capture", t)
}
function tn(e, t) {
    for (In[e] = t,
    e = 0; e < t.length; e++)
        ps.add(t[e])
}
var Ke = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , ql = Object.prototype.hasOwnProperty
  , Wc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Vo = {}
  , Ho = {};
function Vc(e) {
    return ql.call(Ho, e) ? !0 : ql.call(Vo, e) ? !1 : Wc.test(e) ? Ho[e] = !0 : (Vo[e] = !0,
    !1)
}
function Hc(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Qc(e, t, n, r) {
    if (t === null || typeof t > "u" || Hc(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function ae(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = l,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = o
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    te[e] = new ae(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    te[t] = new ae(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    te[e] = new ae(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    te[e] = new ae(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    te[e] = new ae(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    te[e] = new ae(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    te[e] = new ae(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    te[e] = new ae(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    te[e] = new ae(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Gi = /[\-:]([a-z])/g;
function Xi(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Gi, Xi);
    te[t] = new ae(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Gi, Xi);
    te[t] = new ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Gi, Xi);
    te[t] = new ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    te[e] = new ae(e,1,!1,e.toLowerCase(),null,!1,!1)
});
te.xlinkHref = new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    te[e] = new ae(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Zi(e, t, n, r) {
    var l = te.hasOwnProperty(t) ? te[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Qc(t, n, l, r) && (n = null),
    r || l === null ? Vc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName,
    r = l.attributeNamespace,
    n === null ? e.removeAttribute(t) : (l = l.type,
    n = l === 3 || l === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Ze = ds.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , or = Symbol.for("react.element")
  , Dt = Symbol.for("react.portal")
  , Ut = Symbol.for("react.fragment")
  , Ji = Symbol.for("react.strict_mode")
  , bl = Symbol.for("react.profiler")
  , ms = Symbol.for("react.provider")
  , hs = Symbol.for("react.context")
  , qi = Symbol.for("react.forward_ref")
  , ei = Symbol.for("react.suspense")
  , ti = Symbol.for("react.suspense_list")
  , bi = Symbol.for("react.memo")
  , qe = Symbol.for("react.lazy")
  , vs = Symbol.for("react.offscreen")
  , Qo = Symbol.iterator;
function mn(e) {
    return e === null || typeof e != "object" ? null : (e = Qo && e[Qo] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var V = Object.assign, _l;
function Sn(e) {
    if (_l === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            _l = t && t[1] || ""
        }
    return `
` + _l + e
}
var Nl = !1;
function jl(e, t) {
    if (!e || Nl)
        return "";
    Nl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var l = c.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u]; )
                u--;
            for (; 1 <= o && 0 <= u; o--,
            u--)
                if (l[o] !== i[u]) {
                    if (o !== 1 || u !== 1)
                        do
                            if (o--,
                            u--,
                            0 > u || l[o] !== i[u]) {
                                var s = `
` + l[o].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                s
                            }
                        while (1 <= o && 0 <= u);
                    break
                }
        }
    } finally {
        Nl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Sn(e) : ""
}
function Kc(e) {
    switch (e.tag) {
    case 5:
        return Sn(e.type);
    case 16:
        return Sn("Lazy");
    case 13:
        return Sn("Suspense");
    case 19:
        return Sn("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = jl(e.type, !1),
        e;
    case 11:
        return e = jl(e.type.render, !1),
        e;
    case 1:
        return e = jl(e.type, !0),
        e;
    default:
        return ""
    }
}
function ni(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Ut:
        return "Fragment";
    case Dt:
        return "Portal";
    case bl:
        return "Profiler";
    case Ji:
        return "StrictMode";
    case ei:
        return "Suspense";
    case ti:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case hs:
            return (e.displayName || "Context") + ".Consumer";
        case ms:
            return (e._context.displayName || "Context") + ".Provider";
        case qi:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case bi:
            return t = e.displayName || null,
            t !== null ? t : ni(e.type) || "Memo";
        case qe:
            t = e._payload,
            e = e._init;
            try {
                return ni(e(t))
            } catch {}
        }
    return null
}
function Yc(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return ni(t);
    case 8:
        return t === Ji ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function pt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function ys(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Gc(e) {
    var t = ys(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(o) {
                r = "" + o,
                i.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function ur(e) {
    e._valueTracker || (e._valueTracker = Gc(e))
}
function gs(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = ys(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Ir(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function ri(e, t) {
    var n = t.checked;
    return V({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Ko(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = pt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function ws(e, t) {
    t = t.checked,
    t != null && Zi(e, "checked", t, !1)
}
function li(e, t) {
    ws(e, t);
    var n = pt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ii(e, t.type, n) : t.hasOwnProperty("defaultValue") && ii(e, t.type, pt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Yo(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function ii(e, t, n) {
    (t !== "number" || Ir(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var En = Array.isArray;
function Xt(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var l = 0; l < n.length; l++)
            t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            l = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== l && (e[n].selected = l),
            l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + pt(n),
        t = null,
        l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0,
                r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}
function oi(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(g(91));
    return V({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Go(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(g(92));
            if (En(n)) {
                if (1 < n.length)
                    throw Error(g(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: pt(n)
    }
}
function ks(e, t) {
    var n = pt(t.value)
      , r = pt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Xo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function xs(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function ui(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? xs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var sr, Ss = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (sr = sr || document.createElement("div"),
        sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = sr.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Fn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Nn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Xc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Nn).forEach(function(e) {
    Xc.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Nn[t] = Nn[e]
    })
});
function Es(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Nn.hasOwnProperty(e) && Nn[e] ? ("" + t).trim() : t + "px"
}
function Cs(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , l = Es(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, l) : e[n] = l
        }
}
var Zc = V({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function si(e, t) {
    if (t) {
        if (Zc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(g(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(g(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(g(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(g(62))
    }
}
function ai(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var ci = null;
function eo(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var fi = null
  , Zt = null
  , Jt = null;
function Zo(e) {
    if (e = tr(e)) {
        if (typeof fi != "function")
            throw Error(g(280));
        var t = e.stateNode;
        t && (t = cl(t),
        fi(e.stateNode, e.type, t))
    }
}
function _s(e) {
    Zt ? Jt ? Jt.push(e) : Jt = [e] : Zt = e
}
function Ns() {
    if (Zt) {
        var e = Zt
          , t = Jt;
        if (Jt = Zt = null,
        Zo(e),
        t)
            for (e = 0; e < t.length; e++)
                Zo(t[e])
    }
}
function js(e, t) {
    return e(t)
}
function Ps() {}
var Pl = !1;
function zs(e, t, n) {
    if (Pl)
        return e(t, n);
    Pl = !0;
    try {
        return js(e, t, n)
    } finally {
        Pl = !1,
        (Zt !== null || Jt !== null) && (Ps(),
        Ns())
    }
}
function Dn(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = cl(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(g(231, t, typeof n));
    return n
}
var di = !1;
if (Ke)
    try {
        var hn = {};
        Object.defineProperty(hn, "passive", {
            get: function() {
                di = !0
            }
        }),
        window.addEventListener("test", hn, hn),
        window.removeEventListener("test", hn, hn)
    } catch {
        di = !1
    }
function Jc(e, t, n, r, l, i, o, u, s) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (h) {
        this.onError(h)
    }
}
var jn = !1
  , Fr = null
  , Dr = !1
  , pi = null
  , qc = {
    onError: function(e) {
        jn = !0,
        Fr = e
    }
};
function bc(e, t, n, r, l, i, o, u, s) {
    jn = !1,
    Fr = null,
    Jc.apply(qc, arguments)
}
function ef(e, t, n, r, l, i, o, u, s) {
    if (bc.apply(this, arguments),
    jn) {
        if (jn) {
            var c = Fr;
            jn = !1,
            Fr = null
        } else
            throw Error(g(198));
        Dr || (Dr = !0,
        pi = c)
    }
}
function Mt(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Ls(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Jo(e) {
    if (Mt(e) !== e)
        throw Error(g(188))
}
function tf(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Mt(e),
        t === null)
            throw Error(g(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var l = n.return;
        if (l === null)
            break;
        var i = l.alternate;
        if (i === null) {
            if (r = l.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === i.child) {
            for (i = l.child; i; ) {
                if (i === n)
                    return Jo(l),
                    e;
                if (i === r)
                    return Jo(l),
                    t;
                i = i.sibling
            }
            throw Error(g(188))
        }
        if (n.return !== r.return)
            n = l,
            r = i;
        else {
            for (var o = !1, u = l.child; u; ) {
                if (u === n) {
                    o = !0,
                    n = l,
                    r = i;
                    break
                }
                if (u === r) {
                    o = !0,
                    r = l,
                    n = i;
                    break
                }
                u = u.sibling
            }
            if (!o) {
                for (u = i.child; u; ) {
                    if (u === n) {
                        o = !0,
                        n = i,
                        r = l;
                        break
                    }
                    if (u === r) {
                        o = !0,
                        r = i,
                        n = l;
                        break
                    }
                    u = u.sibling
                }
                if (!o)
                    throw Error(g(189))
            }
        }
        if (n.alternate !== r)
            throw Error(g(190))
    }
    if (n.tag !== 3)
        throw Error(g(188));
    return n.stateNode.current === n ? e : t
}
function Ts(e) {
    return e = tf(e),
    e !== null ? Rs(e) : null
}
function Rs(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Rs(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Ms = ge.unstable_scheduleCallback
  , qo = ge.unstable_cancelCallback
  , nf = ge.unstable_shouldYield
  , rf = ge.unstable_requestPaint
  , K = ge.unstable_now
  , lf = ge.unstable_getCurrentPriorityLevel
  , to = ge.unstable_ImmediatePriority
  , Os = ge.unstable_UserBlockingPriority
  , Ur = ge.unstable_NormalPriority
  , of = ge.unstable_LowPriority
  , Is = ge.unstable_IdlePriority
  , ol = null
  , Ue = null;
function uf(e) {
    if (Ue && typeof Ue.onCommitFiberRoot == "function")
        try {
            Ue.onCommitFiberRoot(ol, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Re = Math.clz32 ? Math.clz32 : cf
  , sf = Math.log
  , af = Math.LN2;
function cf(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (sf(e) / af | 0) | 0
}
var ar = 64
  , cr = 4194304;
function Cn(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function $r(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , l = e.suspendedLanes
      , i = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var u = o & ~l;
        u !== 0 ? r = Cn(u) : (i &= o,
        i !== 0 && (r = Cn(i)))
    } else
        o = n & ~l,
        o !== 0 ? r = Cn(o) : i !== 0 && (r = Cn(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r,
    i = t & -t,
    l >= i || l === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Re(t),
            l = 1 << n,
            r |= e[n],
            t &= ~l;
    return r
}
function ff(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function df(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var o = 31 - Re(i)
          , u = 1 << o
          , s = l[o];
        s === -1 ? (!(u & n) || u & r) && (l[o] = ff(u, t)) : s <= t && (e.expiredLanes |= u),
        i &= ~u
    }
}
function mi(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Fs() {
    var e = ar;
    return ar <<= 1,
    !(ar & 4194240) && (ar = 64),
    e
}
function zl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function bn(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Re(t),
    e[t] = n
}
function pf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - Re(n)
          , i = 1 << l;
        t[l] = 0,
        r[l] = -1,
        e[l] = -1,
        n &= ~i
    }
}
function no(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Re(n)
          , l = 1 << r;
        l & t | e[r] & t && (e[r] |= t),
        n &= ~l
    }
}
var I = 0;
function Ds(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Us, ro, $s, As, Bs, hi = !1, fr = [], lt = null, it = null, ot = null, Un = new Map, $n = new Map, et = [], mf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function bo(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        lt = null;
        break;
    case "dragenter":
    case "dragleave":
        it = null;
        break;
    case "mouseover":
    case "mouseout":
        ot = null;
        break;
    case "pointerover":
    case "pointerout":
        Un.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        $n.delete(t.pointerId)
    }
}
function vn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l]
    },
    t !== null && (t = tr(t),
    t !== null && ro(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    l !== null && t.indexOf(l) === -1 && t.push(l),
    e)
}
function hf(e, t, n, r, l) {
    switch (t) {
    case "focusin":
        return lt = vn(lt, e, t, n, r, l),
        !0;
    case "dragenter":
        return it = vn(it, e, t, n, r, l),
        !0;
    case "mouseover":
        return ot = vn(ot, e, t, n, r, l),
        !0;
    case "pointerover":
        var i = l.pointerId;
        return Un.set(i, vn(Un.get(i) || null, e, t, n, r, l)),
        !0;
    case "gotpointercapture":
        return i = l.pointerId,
        $n.set(i, vn($n.get(i) || null, e, t, n, r, l)),
        !0
    }
    return !1
}
function Ws(e) {
    var t = St(e.target);
    if (t !== null) {
        var n = Mt(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Ls(n),
                t !== null) {
                    e.blockedOn = t,
                    Bs(e.priority, function() {
                        $s(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function _r(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = vi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            ci = r,
            n.target.dispatchEvent(r),
            ci = null
        } else
            return t = tr(n),
            t !== null && ro(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function eu(e, t, n) {
    _r(e) && n.delete(t)
}
function vf() {
    hi = !1,
    lt !== null && _r(lt) && (lt = null),
    it !== null && _r(it) && (it = null),
    ot !== null && _r(ot) && (ot = null),
    Un.forEach(eu),
    $n.forEach(eu)
}
function yn(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    hi || (hi = !0,
    ge.unstable_scheduleCallback(ge.unstable_NormalPriority, vf)))
}
function An(e) {
    function t(l) {
        return yn(l, e)
    }
    if (0 < fr.length) {
        yn(fr[0], e);
        for (var n = 1; n < fr.length; n++) {
            var r = fr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (lt !== null && yn(lt, e),
    it !== null && yn(it, e),
    ot !== null && yn(ot, e),
    Un.forEach(t),
    $n.forEach(t),
    n = 0; n < et.length; n++)
        r = et[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < et.length && (n = et[0],
    n.blockedOn === null); )
        Ws(n),
        n.blockedOn === null && et.shift()
}
var qt = Ze.ReactCurrentBatchConfig
  , Ar = !0;
function yf(e, t, n, r) {
    var l = I
      , i = qt.transition;
    qt.transition = null;
    try {
        I = 1,
        lo(e, t, n, r)
    } finally {
        I = l,
        qt.transition = i
    }
}
function gf(e, t, n, r) {
    var l = I
      , i = qt.transition;
    qt.transition = null;
    try {
        I = 4,
        lo(e, t, n, r)
    } finally {
        I = l,
        qt.transition = i
    }
}
function lo(e, t, n, r) {
    if (Ar) {
        var l = vi(e, t, n, r);
        if (l === null)
            $l(e, t, r, Br, n),
            bo(e, r);
        else if (hf(l, e, t, n, r))
            r.stopPropagation();
        else if (bo(e, r),
        t & 4 && -1 < mf.indexOf(e)) {
            for (; l !== null; ) {
                var i = tr(l);
                if (i !== null && Us(i),
                i = vi(e, t, n, r),
                i === null && $l(e, t, r, Br, n),
                i === l)
                    break;
                l = i
            }
            l !== null && r.stopPropagation()
        } else
            $l(e, t, r, null, n)
    }
}
var Br = null;
function vi(e, t, n, r) {
    if (Br = null,
    e = eo(r),
    e = St(e),
    e !== null)
        if (t = Mt(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Ls(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Br = e,
    null
}
function Vs(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (lf()) {
        case to:
            return 1;
        case Os:
            return 4;
        case Ur:
        case of:
            return 16;
        case Is:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var nt = null
  , io = null
  , Nr = null;
function Hs() {
    if (Nr)
        return Nr;
    var e, t = io, n = t.length, r, l = "value"in nt ? nt.value : nt.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++)
        ;
    return Nr = l.slice(e, 1 < r ? 1 - r : void 0)
}
function jr(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function dr() {
    return !0
}
function tu() {
    return !1
}
function ke(e) {
    function t(n, r, l, i, o) {
        this._reactName = n,
        this._targetInst = l,
        this.type = r,
        this.nativeEvent = i,
        this.target = o,
        this.currentTarget = null;
        for (var u in e)
            e.hasOwnProperty(u) && (n = e[u],
            this[u] = n ? n(i) : i[u]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? dr : tu,
        this.isPropagationStopped = tu,
        this
    }
    return V(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = dr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = dr)
        },
        persist: function() {},
        isPersistent: dr
    }),
    t
}
var cn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, oo = ke(cn), er = V({}, cn, {
    view: 0,
    detail: 0
}), wf = ke(er), Ll, Tl, gn, ul = V({}, er, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: uo,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== gn && (gn && e.type === "mousemove" ? (Ll = e.screenX - gn.screenX,
        Tl = e.screenY - gn.screenY) : Tl = Ll = 0,
        gn = e),
        Ll)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Tl
    }
}), nu = ke(ul), kf = V({}, ul, {
    dataTransfer: 0
}), xf = ke(kf), Sf = V({}, er, {
    relatedTarget: 0
}), Rl = ke(Sf), Ef = V({}, cn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Cf = ke(Ef), _f = V({}, cn, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Nf = ke(_f), jf = V({}, cn, {
    data: 0
}), ru = ke(jf), Pf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, zf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Lf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Tf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Lf[e]) ? !!t[e] : !1
}
function uo() {
    return Tf
}
var Rf = V({}, er, {
    key: function(e) {
        if (e.key) {
            var t = Pf[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = jr(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? zf[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: uo,
    charCode: function(e) {
        return e.type === "keypress" ? jr(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? jr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Mf = ke(Rf)
  , Of = V({}, ul, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , lu = ke(Of)
  , If = V({}, er, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: uo
})
  , Ff = ke(If)
  , Df = V({}, cn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Uf = ke(Df)
  , $f = V({}, ul, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Af = ke($f)
  , Bf = [9, 13, 27, 32]
  , so = Ke && "CompositionEvent"in window
  , Pn = null;
Ke && "documentMode"in document && (Pn = document.documentMode);
var Wf = Ke && "TextEvent"in window && !Pn
  , Qs = Ke && (!so || Pn && 8 < Pn && 11 >= Pn)
  , iu = String.fromCharCode(32)
  , ou = !1;
function Ks(e, t) {
    switch (e) {
    case "keyup":
        return Bf.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Ys(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var $t = !1;
function Vf(e, t) {
    switch (e) {
    case "compositionend":
        return Ys(t);
    case "keypress":
        return t.which !== 32 ? null : (ou = !0,
        iu);
    case "textInput":
        return e = t.data,
        e === iu && ou ? null : e;
    default:
        return null
    }
}
function Hf(e, t) {
    if ($t)
        return e === "compositionend" || !so && Ks(e, t) ? (e = Hs(),
        Nr = io = nt = null,
        $t = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Qs && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Qf = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function uu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Qf[e.type] : t === "textarea"
}
function Gs(e, t, n, r) {
    _s(r),
    t = Wr(t, "onChange"),
    0 < t.length && (n = new oo("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var zn = null
  , Bn = null;
function Kf(e) {
    ia(e, 0)
}
function sl(e) {
    var t = Wt(e);
    if (gs(t))
        return e
}
function Yf(e, t) {
    if (e === "change")
        return t
}
var Xs = !1;
if (Ke) {
    var Ml;
    if (Ke) {
        var Ol = "oninput"in document;
        if (!Ol) {
            var su = document.createElement("div");
            su.setAttribute("oninput", "return;"),
            Ol = typeof su.oninput == "function"
        }
        Ml = Ol
    } else
        Ml = !1;
    Xs = Ml && (!document.documentMode || 9 < document.documentMode)
}
function au() {
    zn && (zn.detachEvent("onpropertychange", Zs),
    Bn = zn = null)
}
function Zs(e) {
    if (e.propertyName === "value" && sl(Bn)) {
        var t = [];
        Gs(t, Bn, e, eo(e)),
        zs(Kf, t)
    }
}
function Gf(e, t, n) {
    e === "focusin" ? (au(),
    zn = t,
    Bn = n,
    zn.attachEvent("onpropertychange", Zs)) : e === "focusout" && au()
}
function Xf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return sl(Bn)
}
function Zf(e, t) {
    if (e === "click")
        return sl(t)
}
function Jf(e, t) {
    if (e === "input" || e === "change")
        return sl(t)
}
function qf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Oe = typeof Object.is == "function" ? Object.is : qf;
function Wn(e, t) {
    if (Oe(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!ql.call(t, l) || !Oe(e[l], t[l]))
            return !1
    }
    return !0
}
function cu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function fu(e, t) {
    var n = cu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = cu(n)
    }
}
function Js(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Js(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function qs() {
    for (var e = window, t = Ir(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Ir(e.document)
    }
    return t
}
function ao(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function bf(e) {
    var t = qs()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Js(n.ownerDocument.documentElement, n)) {
        if (r !== null && ao(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length
                  , i = Math.min(r.start, l);
                r = r.end === void 0 ? i : Math.min(r.end, l),
                !e.extend && i > r && (l = r,
                r = i,
                i = l),
                l = fu(n, i);
                var o = fu(n, r);
                l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(l.node, l.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var ed = Ke && "documentMode"in document && 11 >= document.documentMode
  , At = null
  , yi = null
  , Ln = null
  , gi = !1;
function du(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    gi || At == null || At !== Ir(r) || (r = At,
    "selectionStart"in r && ao(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Ln && Wn(Ln, r) || (Ln = r,
    r = Wr(yi, "onSelect"),
    0 < r.length && (t = new oo("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = At)))
}
function pr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Bt = {
    animationend: pr("Animation", "AnimationEnd"),
    animationiteration: pr("Animation", "AnimationIteration"),
    animationstart: pr("Animation", "AnimationStart"),
    transitionend: pr("Transition", "TransitionEnd")
}
  , Il = {}
  , bs = {};
Ke && (bs = document.createElement("div").style,
"AnimationEvent"in window || (delete Bt.animationend.animation,
delete Bt.animationiteration.animation,
delete Bt.animationstart.animation),
"TransitionEvent"in window || delete Bt.transitionend.transition);
function al(e) {
    if (Il[e])
        return Il[e];
    if (!Bt[e])
        return e;
    var t = Bt[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in bs)
            return Il[e] = t[n];
    return e
}
var ea = al("animationend")
  , ta = al("animationiteration")
  , na = al("animationstart")
  , ra = al("transitionend")
  , la = new Map
  , pu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ht(e, t) {
    la.set(e, t),
    Rt(t, [e])
}
for (var Fl = 0; Fl < pu.length; Fl++) {
    var Dl = pu[Fl]
      , td = Dl.toLowerCase()
      , nd = Dl[0].toUpperCase() + Dl.slice(1);
    ht(td, "on" + nd)
}
ht(ea, "onAnimationEnd");
ht(ta, "onAnimationIteration");
ht(na, "onAnimationStart");
ht("dblclick", "onDoubleClick");
ht("focusin", "onFocus");
ht("focusout", "onBlur");
ht(ra, "onTransitionEnd");
tn("onMouseEnter", ["mouseout", "mouseover"]);
tn("onMouseLeave", ["mouseout", "mouseover"]);
tn("onPointerEnter", ["pointerout", "pointerover"]);
tn("onPointerLeave", ["pointerout", "pointerover"]);
Rt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Rt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Rt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Rt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Rt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var _n = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , rd = new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));
function mu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    ef(r, t, void 0, e),
    e.currentTarget = null
}
function ia(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var u = r[o]
                      , s = u.instance
                      , c = u.currentTarget;
                    if (u = u.listener,
                    s !== i && l.isPropagationStopped())
                        break e;
                    mu(l, u, c),
                    i = s
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (u = r[o],
                    s = u.instance,
                    c = u.currentTarget,
                    u = u.listener,
                    s !== i && l.isPropagationStopped())
                        break e;
                    mu(l, u, c),
                    i = s
                }
        }
    }
    if (Dr)
        throw e = pi,
        Dr = !1,
        pi = null,
        e
}
function D(e, t) {
    var n = t[Ei];
    n === void 0 && (n = t[Ei] = new Set);
    var r = e + "__bubble";
    n.has(r) || (oa(t, e, 2, !1),
    n.add(r))
}
function Ul(e, t, n) {
    var r = 0;
    t && (r |= 4),
    oa(n, e, r, t)
}
var mr = "_reactListening" + Math.random().toString(36).slice(2);
function Vn(e) {
    if (!e[mr]) {
        e[mr] = !0,
        ps.forEach(function(n) {
            n !== "selectionchange" && (rd.has(n) || Ul(n, !1, e),
            Ul(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[mr] || (t[mr] = !0,
        Ul("selectionchange", !1, t))
    }
}
function oa(e, t, n, r) {
    switch (Vs(t)) {
    case 1:
        var l = yf;
        break;
    case 4:
        l = gf;
        break;
    default:
        l = lo
    }
    n = l.bind(null, t, n, e),
    l = void 0,
    !di || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0),
    r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}
function $l(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var u = r.stateNode.containerInfo;
                if (u === l || u.nodeType === 8 && u.parentNode === l)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var s = o.tag;
                        if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo,
                        s === l || s.nodeType === 8 && s.parentNode === l))
                            return;
                        o = o.return
                    }
                for (; u !== null; ) {
                    if (o = St(u),
                    o === null)
                        return;
                    if (s = o.tag,
                    s === 5 || s === 6) {
                        r = i = o;
                        continue e
                    }
                    u = u.parentNode
                }
            }
            r = r.return
        }
    zs(function() {
        var c = i
          , h = eo(n)
          , p = [];
        e: {
            var m = la.get(e);
            if (m !== void 0) {
                var w = oo
                  , k = e;
                switch (e) {
                case "keypress":
                    if (jr(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    w = Mf;
                    break;
                case "focusin":
                    k = "focus",
                    w = Rl;
                    break;
                case "focusout":
                    k = "blur",
                    w = Rl;
                    break;
                case "beforeblur":
                case "afterblur":
                    w = Rl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    w = nu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    w = xf;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    w = Ff;
                    break;
                case ea:
                case ta:
                case na:
                    w = Cf;
                    break;
                case ra:
                    w = Uf;
                    break;
                case "scroll":
                    w = wf;
                    break;
                case "wheel":
                    w = Af;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    w = Nf;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    w = lu
                }
                var x = (t & 4) !== 0
                  , O = !x && e === "scroll"
                  , d = x ? m !== null ? m + "Capture" : null : m;
                x = [];
                for (var a = c, f; a !== null; ) {
                    f = a;
                    var y = f.stateNode;
                    if (f.tag === 5 && y !== null && (f = y,
                    d !== null && (y = Dn(a, d),
                    y != null && x.push(Hn(a, y, f)))),
                    O)
                        break;
                    a = a.return
                }
                0 < x.length && (m = new w(m,k,null,n,h),
                p.push({
                    event: m,
                    listeners: x
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover",
                w = e === "mouseout" || e === "pointerout",
                m && n !== ci && (k = n.relatedTarget || n.fromElement) && (St(k) || k[Ye]))
                    break e;
                if ((w || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window,
                w ? (k = n.relatedTarget || n.toElement,
                w = c,
                k = k ? St(k) : null,
                k !== null && (O = Mt(k),
                k !== O || k.tag !== 5 && k.tag !== 6) && (k = null)) : (w = null,
                k = c),
                w !== k)) {
                    if (x = nu,
                    y = "onMouseLeave",
                    d = "onMouseEnter",
                    a = "mouse",
                    (e === "pointerout" || e === "pointerover") && (x = lu,
                    y = "onPointerLeave",
                    d = "onPointerEnter",
                    a = "pointer"),
                    O = w == null ? m : Wt(w),
                    f = k == null ? m : Wt(k),
                    m = new x(y,a + "leave",w,n,h),
                    m.target = O,
                    m.relatedTarget = f,
                    y = null,
                    St(h) === c && (x = new x(d,a + "enter",k,n,h),
                    x.target = f,
                    x.relatedTarget = O,
                    y = x),
                    O = y,
                    w && k)
                        t: {
                            for (x = w,
                            d = k,
                            a = 0,
                            f = x; f; f = It(f))
                                a++;
                            for (f = 0,
                            y = d; y; y = It(y))
                                f++;
                            for (; 0 < a - f; )
                                x = It(x),
                                a--;
                            for (; 0 < f - a; )
                                d = It(d),
                                f--;
                            for (; a--; ) {
                                if (x === d || d !== null && x === d.alternate)
                                    break t;
                                x = It(x),
                                d = It(d)
                            }
                            x = null
                        }
                    else
                        x = null;
                    w !== null && hu(p, m, w, x, !1),
                    k !== null && O !== null && hu(p, O, k, x, !0)
                }
            }
            e: {
                if (m = c ? Wt(c) : window,
                w = m.nodeName && m.nodeName.toLowerCase(),
                w === "select" || w === "input" && m.type === "file")
                    var S = Yf;
                else if (uu(m))
                    if (Xs)
                        S = Jf;
                    else {
                        S = Xf;
                        var _ = Gf
                    }
                else
                    (w = m.nodeName) && w.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (S = Zf);
                if (S && (S = S(e, c))) {
                    Gs(p, S, n, h);
                    break e
                }
                _ && _(e, m, c),
                e === "focusout" && (_ = m._wrapperState) && _.controlled && m.type === "number" && ii(m, "number", m.value)
            }
            switch (_ = c ? Wt(c) : window,
            e) {
            case "focusin":
                (uu(_) || _.contentEditable === "true") && (At = _,
                yi = c,
                Ln = null);
                break;
            case "focusout":
                Ln = yi = At = null;
                break;
            case "mousedown":
                gi = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                gi = !1,
                du(p, n, h);
                break;
            case "selectionchange":
                if (ed)
                    break;
            case "keydown":
            case "keyup":
                du(p, n, h)
            }
            var N;
            if (so)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var j = "onCompositionStart";
                        break e;
                    case "compositionend":
                        j = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        j = "onCompositionUpdate";
                        break e
                    }
                    j = void 0
                }
            else
                $t ? Ks(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
            j && (Qs && n.locale !== "ko" && ($t || j !== "onCompositionStart" ? j === "onCompositionEnd" && $t && (N = Hs()) : (nt = h,
            io = "value"in nt ? nt.value : nt.textContent,
            $t = !0)),
            _ = Wr(c, j),
            0 < _.length && (j = new ru(j,e,null,n,h),
            p.push({
                event: j,
                listeners: _
            }),
            N ? j.data = N : (N = Ys(n),
            N !== null && (j.data = N)))),
            (N = Wf ? Vf(e, n) : Hf(e, n)) && (c = Wr(c, "onBeforeInput"),
            0 < c.length && (h = new ru("onBeforeInput","beforeinput",null,n,h),
            p.push({
                event: h,
                listeners: c
            }),
            h.data = N))
        }
        ia(p, t)
    })
}
function Hn(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Wr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var l = e
          , i = l.stateNode;
        l.tag === 5 && i !== null && (l = i,
        i = Dn(e, n),
        i != null && r.unshift(Hn(e, i, l)),
        i = Dn(e, t),
        i != null && r.push(Hn(e, i, l))),
        e = e.return
    }
    return r
}
function It(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function hu(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
        var u = n
          , s = u.alternate
          , c = u.stateNode;
        if (s !== null && s === r)
            break;
        u.tag === 5 && c !== null && (u = c,
        l ? (s = Dn(n, i),
        s != null && o.unshift(Hn(n, s, u))) : l || (s = Dn(n, i),
        s != null && o.push(Hn(n, s, u)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var ld = /\r\n?/g
  , id = /\u0000|\uFFFD/g;
function vu(e) {
    return (typeof e == "string" ? e : "" + e).replace(ld, `
`).replace(id, "")
}
function hr(e, t, n) {
    if (t = vu(t),
    vu(e) !== t && n)
        throw Error(g(425))
}
function Vr() {}
var wi = null
  , ki = null;
function xi(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Si = typeof setTimeout == "function" ? setTimeout : void 0
  , od = typeof clearTimeout == "function" ? clearTimeout : void 0
  , yu = typeof Promise == "function" ? Promise : void 0
  , ud = typeof queueMicrotask == "function" ? queueMicrotask : typeof yu < "u" ? function(e) {
    return yu.resolve(null).then(e).catch(sd)
}
: Si;
function sd(e) {
    setTimeout(function() {
        throw e
    })
}
function Al(e, t) {
    var n = t
      , r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n),
        l && l.nodeType === 8)
            if (n = l.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(l),
                    An(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    An(t)
}
function ut(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function gu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var fn = Math.random().toString(36).slice(2)
  , De = "__reactFiber$" + fn
  , Qn = "__reactProps$" + fn
  , Ye = "__reactContainer$" + fn
  , Ei = "__reactEvents$" + fn
  , ad = "__reactListeners$" + fn
  , cd = "__reactHandles$" + fn;
function St(e) {
    var t = e[De];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Ye] || n[De]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = gu(e); e !== null; ) {
                    if (n = e[De])
                        return n;
                    e = gu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function tr(e) {
    return e = e[De] || e[Ye],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Wt(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(g(33))
}
function cl(e) {
    return e[Qn] || null
}
var Ci = []
  , Vt = -1;
function vt(e) {
    return {
        current: e
    }
}
function U(e) {
    0 > Vt || (e.current = Ci[Vt],
    Ci[Vt] = null,
    Vt--)
}
function F(e, t) {
    Vt++,
    Ci[Vt] = e.current,
    e.current = t
}
var mt = {}
  , ie = vt(mt)
  , de = vt(!1)
  , jt = mt;
function nn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return mt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n)
        l[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = l),
    l
}
function pe(e) {
    return e = e.childContextTypes,
    e != null
}
function Hr() {
    U(de),
    U(ie)
}
function wu(e, t, n) {
    if (ie.current !== mt)
        throw Error(g(168));
    F(ie, t),
    F(de, n)
}
function ua(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t))
            throw Error(g(108, Yc(e) || "Unknown", l));
    return V({}, n, r)
}
function Qr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || mt,
    jt = ie.current,
    F(ie, e),
    F(de, de.current),
    !0
}
function ku(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(g(169));
    n ? (e = ua(e, t, jt),
    r.__reactInternalMemoizedMergedChildContext = e,
    U(de),
    U(ie),
    F(ie, e)) : U(de),
    F(de, n)
}
var Be = null
  , fl = !1
  , Bl = !1;
function sa(e) {
    Be === null ? Be = [e] : Be.push(e)
}
function fd(e) {
    fl = !0,
    sa(e)
}
function yt() {
    if (!Bl && Be !== null) {
        Bl = !0;
        var e = 0
          , t = I;
        try {
            var n = Be;
            for (I = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Be = null,
            fl = !1
        } catch (l) {
            throw Be !== null && (Be = Be.slice(e + 1)),
            Ms(to, yt),
            l
        } finally {
            I = t,
            Bl = !1
        }
    }
    return null
}
var Ht = []
  , Qt = 0
  , Kr = null
  , Yr = 0
  , xe = []
  , Se = 0
  , Pt = null
  , We = 1
  , Ve = "";
function kt(e, t) {
    Ht[Qt++] = Yr,
    Ht[Qt++] = Kr,
    Kr = e,
    Yr = t
}
function aa(e, t, n) {
    xe[Se++] = We,
    xe[Se++] = Ve,
    xe[Se++] = Pt,
    Pt = e;
    var r = We;
    e = Ve;
    var l = 32 - Re(r) - 1;
    r &= ~(1 << l),
    n += 1;
    var i = 32 - Re(t) + l;
    if (30 < i) {
        var o = l - l % 5;
        i = (r & (1 << o) - 1).toString(32),
        r >>= o,
        l -= o,
        We = 1 << 32 - Re(t) + l | n << l | r,
        Ve = i + e
    } else
        We = 1 << i | n << l | r,
        Ve = e
}
function co(e) {
    e.return !== null && (kt(e, 1),
    aa(e, 1, 0))
}
function fo(e) {
    for (; e === Kr; )
        Kr = Ht[--Qt],
        Ht[Qt] = null,
        Yr = Ht[--Qt],
        Ht[Qt] = null;
    for (; e === Pt; )
        Pt = xe[--Se],
        xe[Se] = null,
        Ve = xe[--Se],
        xe[Se] = null,
        We = xe[--Se],
        xe[Se] = null
}
var ye = null
  , ve = null
  , $ = !1
  , Te = null;
function ca(e, t) {
    var n = Ee(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function xu(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        ye = e,
        ve = ut(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        ye = e,
        ve = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Pt !== null ? {
            id: We,
            overflow: Ve
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Ee(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        ye = e,
        ve = null,
        !0) : !1;
    default:
        return !1
    }
}
function _i(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ni(e) {
    if ($) {
        var t = ve;
        if (t) {
            var n = t;
            if (!xu(e, t)) {
                if (_i(e))
                    throw Error(g(418));
                t = ut(n.nextSibling);
                var r = ye;
                t && xu(e, t) ? ca(r, n) : (e.flags = e.flags & -4097 | 2,
                $ = !1,
                ye = e)
            }
        } else {
            if (_i(e))
                throw Error(g(418));
            e.flags = e.flags & -4097 | 2,
            $ = !1,
            ye = e
        }
    }
}
function Su(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    ye = e
}
function vr(e) {
    if (e !== ye)
        return !1;
    if (!$)
        return Su(e),
        $ = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !xi(e.type, e.memoizedProps)),
    t && (t = ve)) {
        if (_i(e))
            throw fa(),
            Error(g(418));
        for (; t; )
            ca(e, t),
            t = ut(t.nextSibling)
    }
    if (Su(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(g(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ve = ut(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ve = null
        }
    } else
        ve = ye ? ut(e.stateNode.nextSibling) : null;
    return !0
}
function fa() {
    for (var e = ve; e; )
        e = ut(e.nextSibling)
}
function rn() {
    ve = ye = null,
    $ = !1
}
function po(e) {
    Te === null ? Te = [e] : Te.push(e)
}
var dd = Ze.ReactCurrentBatchConfig;
function ze(e, t) {
    if (e && e.defaultProps) {
        t = V({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var Gr = vt(null)
  , Xr = null
  , Kt = null
  , mo = null;
function ho() {
    mo = Kt = Xr = null
}
function vo(e) {
    var t = Gr.current;
    U(Gr),
    e._currentValue = t
}
function ji(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function bt(e, t) {
    Xr = e,
    mo = Kt = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (fe = !0),
    e.firstContext = null)
}
function _e(e) {
    var t = e._currentValue;
    if (mo !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Kt === null) {
            if (Xr === null)
                throw Error(g(308));
            Kt = e,
            Xr.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Kt = Kt.next = e;
    return t
}
var Et = null;
function yo(e) {
    Et === null ? Et = [e] : Et.push(e)
}
function da(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n,
    yo(t)) : (n.next = l.next,
    l.next = n),
    t.interleaved = n,
    Ge(e, r)
}
function Ge(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var be = !1;
function go(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function pa(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Qe(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function st(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    M & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next,
        l.next = t),
        r.pending = t,
        Ge(e, n)
    }
    return l = r.interleaved,
    l === null ? (t.next = t,
    yo(r)) : (t.next = l.next,
    l.next = t),
    r.interleaved = t,
    Ge(e, n)
}
function Pr(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        no(e, n)
    }
}
function Eu(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var l = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? l = i = o : i = i.next = o,
                n = n.next
            } while (n !== null);
            i === null ? l = i = t : i = i.next = t
        } else
            l = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Zr(e, t, n, r) {
    var l = e.updateQueue;
    be = !1;
    var i = l.firstBaseUpdate
      , o = l.lastBaseUpdate
      , u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var s = u
          , c = s.next;
        s.next = null,
        o === null ? i = c : o.next = c,
        o = s;
        var h = e.alternate;
        h !== null && (h = h.updateQueue,
        u = h.lastBaseUpdate,
        u !== o && (u === null ? h.firstBaseUpdate = c : u.next = c,
        h.lastBaseUpdate = s))
    }
    if (i !== null) {
        var p = l.baseState;
        o = 0,
        h = c = s = null,
        u = i;
        do {
            var m = u.lane
              , w = u.eventTime;
            if ((r & m) === m) {
                h !== null && (h = h.next = {
                    eventTime: w,
                    lane: 0,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                });
                e: {
                    var k = e
                      , x = u;
                    switch (m = t,
                    w = n,
                    x.tag) {
                    case 1:
                        if (k = x.payload,
                        typeof k == "function") {
                            p = k.call(w, p, m);
                            break e
                        }
                        p = k;
                        break e;
                    case 3:
                        k.flags = k.flags & -65537 | 128;
                    case 0:
                        if (k = x.payload,
                        m = typeof k == "function" ? k.call(w, p, m) : k,
                        m == null)
                            break e;
                        p = V({}, p, m);
                        break e;
                    case 2:
                        be = !0
                    }
                }
                u.callback !== null && u.lane !== 0 && (e.flags |= 64,
                m = l.effects,
                m === null ? l.effects = [u] : m.push(u))
            } else
                w = {
                    eventTime: w,
                    lane: m,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                },
                h === null ? (c = h = w,
                s = p) : h = h.next = w,
                o |= m;
            if (u = u.next,
            u === null) {
                if (u = l.shared.pending,
                u === null)
                    break;
                m = u,
                u = m.next,
                m.next = null,
                l.lastBaseUpdate = m,
                l.shared.pending = null
            }
        } while (1);
        if (h === null && (s = p),
        l.baseState = s,
        l.firstBaseUpdate = c,
        l.lastBaseUpdate = h,
        t = l.shared.interleaved,
        t !== null) {
            l = t;
            do
                o |= l.lane,
                l = l.next;
            while (l !== t)
        } else
            i === null && (l.shared.lanes = 0);
        Lt |= o,
        e.lanes = o,
        e.memoizedState = p
    }
}
function Cu(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , l = r.callback;
            if (l !== null) {
                if (r.callback = null,
                r = n,
                typeof l != "function")
                    throw Error(g(191, l));
                l.call(r)
            }
        }
}
var ma = new ds.Component().refs;
function Pi(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : V({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var dl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Mt(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ue()
          , l = ct(e)
          , i = Qe(r, l);
        i.payload = t,
        n != null && (i.callback = n),
        t = st(e, i, l),
        t !== null && (Me(t, e, l, r),
        Pr(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ue()
          , l = ct(e)
          , i = Qe(r, l);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = st(e, i, l),
        t !== null && (Me(t, e, l, r),
        Pr(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ue()
          , r = ct(e)
          , l = Qe(n, r);
        l.tag = 2,
        t != null && (l.callback = t),
        t = st(e, l, r),
        t !== null && (Me(t, e, r, n),
        Pr(t, e, r))
    }
};
function _u(e, t, n, r, l, i, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Wn(n, r) || !Wn(l, i) : !0
}
function ha(e, t, n) {
    var r = !1
      , l = mt
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = _e(i) : (l = pe(t) ? jt : ie.current,
    r = t.contextTypes,
    i = (r = r != null) ? nn(e, l) : mt),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = dl,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = l,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Nu(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && dl.enqueueReplaceState(t, t.state, null)
}
function zi(e, t, n, r) {
    var l = e.stateNode;
    l.props = n,
    l.state = e.memoizedState,
    l.refs = ma,
    go(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = _e(i) : (i = pe(t) ? jt : ie.current,
    l.context = nn(e, i)),
    l.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (Pi(e, t, i, n),
    l.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state,
    typeof l.componentWillMount == "function" && l.componentWillMount(),
    typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
    t !== l.state && dl.enqueueReplaceState(l, l.state, null),
    Zr(e, n, l, r),
    l.state = e.memoizedState),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}
function wn(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(g(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(g(147, e));
            var l = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var u = l.refs;
                u === ma && (u = l.refs = {}),
                o === null ? delete u[i] : u[i] = o
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(g(284));
        if (!n._owner)
            throw Error(g(290, e))
    }
    return e
}
function yr(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(g(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function ju(e) {
    var t = e._init;
    return t(e._payload)
}
function va(e) {
    function t(d, a) {
        if (e) {
            var f = d.deletions;
            f === null ? (d.deletions = [a],
            d.flags |= 16) : f.push(a)
        }
    }
    function n(d, a) {
        if (!e)
            return null;
        for (; a !== null; )
            t(d, a),
            a = a.sibling;
        return null
    }
    function r(d, a) {
        for (d = new Map; a !== null; )
            a.key !== null ? d.set(a.key, a) : d.set(a.index, a),
            a = a.sibling;
        return d
    }
    function l(d, a) {
        return d = ft(d, a),
        d.index = 0,
        d.sibling = null,
        d
    }
    function i(d, a, f) {
        return d.index = f,
        e ? (f = d.alternate,
        f !== null ? (f = f.index,
        f < a ? (d.flags |= 2,
        a) : f) : (d.flags |= 2,
        a)) : (d.flags |= 1048576,
        a)
    }
    function o(d) {
        return e && d.alternate === null && (d.flags |= 2),
        d
    }
    function u(d, a, f, y) {
        return a === null || a.tag !== 6 ? (a = Gl(f, d.mode, y),
        a.return = d,
        a) : (a = l(a, f),
        a.return = d,
        a)
    }
    function s(d, a, f, y) {
        var S = f.type;
        return S === Ut ? h(d, a, f.props.children, y, f.key) : a !== null && (a.elementType === S || typeof S == "object" && S !== null && S.$$typeof === qe && ju(S) === a.type) ? (y = l(a, f.props),
        y.ref = wn(d, a, f),
        y.return = d,
        y) : (y = Or(f.type, f.key, f.props, null, d.mode, y),
        y.ref = wn(d, a, f),
        y.return = d,
        y)
    }
    function c(d, a, f, y) {
        return a === null || a.tag !== 4 || a.stateNode.containerInfo !== f.containerInfo || a.stateNode.implementation !== f.implementation ? (a = Xl(f, d.mode, y),
        a.return = d,
        a) : (a = l(a, f.children || []),
        a.return = d,
        a)
    }
    function h(d, a, f, y, S) {
        return a === null || a.tag !== 7 ? (a = Nt(f, d.mode, y, S),
        a.return = d,
        a) : (a = l(a, f),
        a.return = d,
        a)
    }
    function p(d, a, f) {
        if (typeof a == "string" && a !== "" || typeof a == "number")
            return a = Gl("" + a, d.mode, f),
            a.return = d,
            a;
        if (typeof a == "object" && a !== null) {
            switch (a.$$typeof) {
            case or:
                return f = Or(a.type, a.key, a.props, null, d.mode, f),
                f.ref = wn(d, null, a),
                f.return = d,
                f;
            case Dt:
                return a = Xl(a, d.mode, f),
                a.return = d,
                a;
            case qe:
                var y = a._init;
                return p(d, y(a._payload), f)
            }
            if (En(a) || mn(a))
                return a = Nt(a, d.mode, f, null),
                a.return = d,
                a;
            yr(d, a)
        }
        return null
    }
    function m(d, a, f, y) {
        var S = a !== null ? a.key : null;
        if (typeof f == "string" && f !== "" || typeof f == "number")
            return S !== null ? null : u(d, a, "" + f, y);
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
            case or:
                return f.key === S ? s(d, a, f, y) : null;
            case Dt:
                return f.key === S ? c(d, a, f, y) : null;
            case qe:
                return S = f._init,
                m(d, a, S(f._payload), y)
            }
            if (En(f) || mn(f))
                return S !== null ? null : h(d, a, f, y, null);
            yr(d, f)
        }
        return null
    }
    function w(d, a, f, y, S) {
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return d = d.get(f) || null,
            u(a, d, "" + y, S);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case or:
                return d = d.get(y.key === null ? f : y.key) || null,
                s(a, d, y, S);
            case Dt:
                return d = d.get(y.key === null ? f : y.key) || null,
                c(a, d, y, S);
            case qe:
                var _ = y._init;
                return w(d, a, f, _(y._payload), S)
            }
            if (En(y) || mn(y))
                return d = d.get(f) || null,
                h(a, d, y, S, null);
            yr(a, y)
        }
        return null
    }
    function k(d, a, f, y) {
        for (var S = null, _ = null, N = a, j = a = 0, A = null; N !== null && j < f.length; j++) {
            N.index > j ? (A = N,
            N = null) : A = N.sibling;
            var R = m(d, N, f[j], y);
            if (R === null) {
                N === null && (N = A);
                break
            }
            e && N && R.alternate === null && t(d, N),
            a = i(R, a, j),
            _ === null ? S = R : _.sibling = R,
            _ = R,
            N = A
        }
        if (j === f.length)
            return n(d, N),
            $ && kt(d, j),
            S;
        if (N === null) {
            for (; j < f.length; j++)
                N = p(d, f[j], y),
                N !== null && (a = i(N, a, j),
                _ === null ? S = N : _.sibling = N,
                _ = N);
            return $ && kt(d, j),
            S
        }
        for (N = r(d, N); j < f.length; j++)
            A = w(N, d, j, f[j], y),
            A !== null && (e && A.alternate !== null && N.delete(A.key === null ? j : A.key),
            a = i(A, a, j),
            _ === null ? S = A : _.sibling = A,
            _ = A);
        return e && N.forEach(function(je) {
            return t(d, je)
        }),
        $ && kt(d, j),
        S
    }
    function x(d, a, f, y) {
        var S = mn(f);
        if (typeof S != "function")
            throw Error(g(150));
        if (f = S.call(f),
        f == null)
            throw Error(g(151));
        for (var _ = S = null, N = a, j = a = 0, A = null, R = f.next(); N !== null && !R.done; j++,
        R = f.next()) {
            N.index > j ? (A = N,
            N = null) : A = N.sibling;
            var je = m(d, N, R.value, y);
            if (je === null) {
                N === null && (N = A);
                break
            }
            e && N && je.alternate === null && t(d, N),
            a = i(je, a, j),
            _ === null ? S = je : _.sibling = je,
            _ = je,
            N = A
        }
        if (R.done)
            return n(d, N),
            $ && kt(d, j),
            S;
        if (N === null) {
            for (; !R.done; j++,
            R = f.next())
                R = p(d, R.value, y),
                R !== null && (a = i(R, a, j),
                _ === null ? S = R : _.sibling = R,
                _ = R);
            return $ && kt(d, j),
            S
        }
        for (N = r(d, N); !R.done; j++,
        R = f.next())
            R = w(N, d, j, R.value, y),
            R !== null && (e && R.alternate !== null && N.delete(R.key === null ? j : R.key),
            a = i(R, a, j),
            _ === null ? S = R : _.sibling = R,
            _ = R);
        return e && N.forEach(function(dn) {
            return t(d, dn)
        }),
        $ && kt(d, j),
        S
    }
    function O(d, a, f, y) {
        if (typeof f == "object" && f !== null && f.type === Ut && f.key === null && (f = f.props.children),
        typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
            case or:
                e: {
                    for (var S = f.key, _ = a; _ !== null; ) {
                        if (_.key === S) {
                            if (S = f.type,
                            S === Ut) {
                                if (_.tag === 7) {
                                    n(d, _.sibling),
                                    a = l(_, f.props.children),
                                    a.return = d,
                                    d = a;
                                    break e
                                }
                            } else if (_.elementType === S || typeof S == "object" && S !== null && S.$$typeof === qe && ju(S) === _.type) {
                                n(d, _.sibling),
                                a = l(_, f.props),
                                a.ref = wn(d, _, f),
                                a.return = d,
                                d = a;
                                break e
                            }
                            n(d, _);
                            break
                        } else
                            t(d, _);
                        _ = _.sibling
                    }
                    f.type === Ut ? (a = Nt(f.props.children, d.mode, y, f.key),
                    a.return = d,
                    d = a) : (y = Or(f.type, f.key, f.props, null, d.mode, y),
                    y.ref = wn(d, a, f),
                    y.return = d,
                    d = y)
                }
                return o(d);
            case Dt:
                e: {
                    for (_ = f.key; a !== null; ) {
                        if (a.key === _)
                            if (a.tag === 4 && a.stateNode.containerInfo === f.containerInfo && a.stateNode.implementation === f.implementation) {
                                n(d, a.sibling),
                                a = l(a, f.children || []),
                                a.return = d,
                                d = a;
                                break e
                            } else {
                                n(d, a);
                                break
                            }
                        else
                            t(d, a);
                        a = a.sibling
                    }
                    a = Xl(f, d.mode, y),
                    a.return = d,
                    d = a
                }
                return o(d);
            case qe:
                return _ = f._init,
                O(d, a, _(f._payload), y)
            }
            if (En(f))
                return k(d, a, f, y);
            if (mn(f))
                return x(d, a, f, y);
            yr(d, f)
        }
        return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f,
        a !== null && a.tag === 6 ? (n(d, a.sibling),
        a = l(a, f),
        a.return = d,
        d = a) : (n(d, a),
        a = Gl(f, d.mode, y),
        a.return = d,
        d = a),
        o(d)) : n(d, a)
    }
    return O
}
var ln = va(!0)
  , ya = va(!1)
  , nr = {}
  , $e = vt(nr)
  , Kn = vt(nr)
  , Yn = vt(nr);
function Ct(e) {
    if (e === nr)
        throw Error(g(174));
    return e
}
function wo(e, t) {
    switch (F(Yn, t),
    F(Kn, e),
    F($e, nr),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ui(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = ui(t, e)
    }
    U($e),
    F($e, t)
}
function on() {
    U($e),
    U(Kn),
    U(Yn)
}
function ga(e) {
    Ct(Yn.current);
    var t = Ct($e.current)
      , n = ui(t, e.type);
    t !== n && (F(Kn, e),
    F($e, n))
}
function ko(e) {
    Kn.current === e && (U($e),
    U(Kn))
}
var B = vt(0);
function Jr(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Wl = [];
function xo() {
    for (var e = 0; e < Wl.length; e++)
        Wl[e]._workInProgressVersionPrimary = null;
    Wl.length = 0
}
var zr = Ze.ReactCurrentDispatcher
  , Vl = Ze.ReactCurrentBatchConfig
  , zt = 0
  , W = null
  , G = null
  , J = null
  , qr = !1
  , Tn = !1
  , Gn = 0
  , pd = 0;
function ne() {
    throw Error(g(321))
}
function So(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Oe(e[n], t[n]))
            return !1;
    return !0
}
function Eo(e, t, n, r, l, i) {
    if (zt = i,
    W = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    zr.current = e === null || e.memoizedState === null ? yd : gd,
    e = n(r, l),
    Tn) {
        i = 0;
        do {
            if (Tn = !1,
            Gn = 0,
            25 <= i)
                throw Error(g(301));
            i += 1,
            J = G = null,
            t.updateQueue = null,
            zr.current = wd,
            e = n(r, l)
        } while (Tn)
    }
    if (zr.current = br,
    t = G !== null && G.next !== null,
    zt = 0,
    J = G = W = null,
    qr = !1,
    t)
        throw Error(g(300));
    return e
}
function Co() {
    var e = Gn !== 0;
    return Gn = 0,
    e
}
function Fe() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return J === null ? W.memoizedState = J = e : J = J.next = e,
    J
}
function Ne() {
    if (G === null) {
        var e = W.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = G.next;
    var t = J === null ? W.memoizedState : J.next;
    if (t !== null)
        J = t,
        G = e;
    else {
        if (e === null)
            throw Error(g(310));
        G = e,
        e = {
            memoizedState: G.memoizedState,
            baseState: G.baseState,
            baseQueue: G.baseQueue,
            queue: G.queue,
            next: null
        },
        J === null ? W.memoizedState = J = e : J = J.next = e
    }
    return J
}
function Xn(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Hl(e) {
    var t = Ne()
      , n = t.queue;
    if (n === null)
        throw Error(g(311));
    n.lastRenderedReducer = e;
    var r = G
      , l = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var o = l.next;
            l.next = i.next,
            i.next = o
        }
        r.baseQueue = l = i,
        n.pending = null
    }
    if (l !== null) {
        i = l.next,
        r = r.baseState;
        var u = o = null
          , s = null
          , c = i;
        do {
            var h = c.lane;
            if ((zt & h) === h)
                s !== null && (s = s.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var p = {
                    lane: h,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                s === null ? (u = s = p,
                o = r) : s = s.next = p,
                W.lanes |= h,
                Lt |= h
            }
            c = c.next
        } while (c !== null && c !== i);
        s === null ? o = r : s.next = u,
        Oe(r, t.memoizedState) || (fe = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = s,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        l = e;
        do
            i = l.lane,
            W.lanes |= i,
            Lt |= i,
            l = l.next;
        while (l !== e)
    } else
        l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Ql(e) {
    var t = Ne()
      , n = t.queue;
    if (n === null)
        throw Error(g(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , l = n.pending
      , i = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = l = l.next;
        do
            i = e(i, o.action),
            o = o.next;
        while (o !== l);
        Oe(i, t.memoizedState) || (fe = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function wa() {}
function ka(e, t) {
    var n = W
      , r = Ne()
      , l = t()
      , i = !Oe(r.memoizedState, l);
    if (i && (r.memoizedState = l,
    fe = !0),
    r = r.queue,
    _o(Ea.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || J !== null && J.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Zn(9, Sa.bind(null, n, r, l, t), void 0, null),
        q === null)
            throw Error(g(349));
        zt & 30 || xa(n, t, l)
    }
    return l
}
function xa(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = W.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    W.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Sa(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Ca(t) && _a(e)
}
function Ea(e, t, n) {
    return n(function() {
        Ca(t) && _a(e)
    })
}
function Ca(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Oe(e, n)
    } catch {
        return !0
    }
}
function _a(e) {
    var t = Ge(e, 1);
    t !== null && Me(t, e, 1, -1)
}
function Pu(e) {
    var t = Fe();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xn,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = vd.bind(null, W, e),
    [t.memoizedState, e]
}
function Zn(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = W.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    W.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Na() {
    return Ne().memoizedState
}
function Lr(e, t, n, r) {
    var l = Fe();
    W.flags |= e,
    l.memoizedState = Zn(1 | t, n, void 0, r === void 0 ? null : r)
}
function pl(e, t, n, r) {
    var l = Ne();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (G !== null) {
        var o = G.memoizedState;
        if (i = o.destroy,
        r !== null && So(r, o.deps)) {
            l.memoizedState = Zn(t, n, i, r);
            return
        }
    }
    W.flags |= e,
    l.memoizedState = Zn(1 | t, n, i, r)
}
function zu(e, t) {
    return Lr(8390656, 8, e, t)
}
function _o(e, t) {
    return pl(2048, 8, e, t)
}
function ja(e, t) {
    return pl(4, 2, e, t)
}
function Pa(e, t) {
    return pl(4, 4, e, t)
}
function za(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function La(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    pl(4, 4, za.bind(null, t, e), n)
}
function No() {}
function Ta(e, t) {
    var n = Ne();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && So(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Ra(e, t) {
    var n = Ne();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && So(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Ma(e, t, n) {
    return zt & 21 ? (Oe(n, t) || (n = Fs(),
    W.lanes |= n,
    Lt |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    fe = !0),
    e.memoizedState = n)
}
function md(e, t) {
    var n = I;
    I = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Vl.transition;
    Vl.transition = {};
    try {
        e(!1),
        t()
    } finally {
        I = n,
        Vl.transition = r
    }
}
function Oa() {
    return Ne().memoizedState
}
function hd(e, t, n) {
    var r = ct(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Ia(e))
        Fa(t, n);
    else if (n = da(e, t, n, r),
    n !== null) {
        var l = ue();
        Me(n, e, r, l),
        Da(n, t, r)
    }
}
function vd(e, t, n) {
    var r = ct(e)
      , l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Ia(e))
        Fa(t, l);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var o = t.lastRenderedState
                  , u = i(o, n);
                if (l.hasEagerState = !0,
                l.eagerState = u,
                Oe(u, o)) {
                    var s = t.interleaved;
                    s === null ? (l.next = l,
                    yo(t)) : (l.next = s.next,
                    s.next = l),
                    t.interleaved = l;
                    return
                }
            } catch {} finally {}
        n = da(e, t, l, r),
        n !== null && (l = ue(),
        Me(n, e, r, l),
        Da(n, t, r))
    }
}
function Ia(e) {
    var t = e.alternate;
    return e === W || t !== null && t === W
}
function Fa(e, t) {
    Tn = qr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Da(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        no(e, n)
    }
}
var br = {
    readContext: _e,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1
}
  , yd = {
    readContext: _e,
    useCallback: function(e, t) {
        return Fe().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: _e,
    useEffect: zu,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Lr(4194308, 4, za.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Lr(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Lr(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Fe();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Fe();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = hd.bind(null, W, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Fe();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Pu,
    useDebugValue: No,
    useDeferredValue: function(e) {
        return Fe().memoizedState = e
    },
    useTransition: function() {
        var e = Pu(!1)
          , t = e[0];
        return e = md.bind(null, e[1]),
        Fe().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = W
          , l = Fe();
        if ($) {
            if (n === void 0)
                throw Error(g(407));
            n = n()
        } else {
            if (n = t(),
            q === null)
                throw Error(g(349));
            zt & 30 || xa(r, t, n)
        }
        l.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return l.queue = i,
        zu(Ea.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        Zn(9, Sa.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Fe()
          , t = q.identifierPrefix;
        if ($) {
            var n = Ve
              , r = We;
            n = (r & ~(1 << 32 - Re(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Gn++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = pd++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , gd = {
    readContext: _e,
    useCallback: Ta,
    useContext: _e,
    useEffect: _o,
    useImperativeHandle: La,
    useInsertionEffect: ja,
    useLayoutEffect: Pa,
    useMemo: Ra,
    useReducer: Hl,
    useRef: Na,
    useState: function() {
        return Hl(Xn)
    },
    useDebugValue: No,
    useDeferredValue: function(e) {
        var t = Ne();
        return Ma(t, G.memoizedState, e)
    },
    useTransition: function() {
        var e = Hl(Xn)[0]
          , t = Ne().memoizedState;
        return [e, t]
    },
    useMutableSource: wa,
    useSyncExternalStore: ka,
    useId: Oa,
    unstable_isNewReconciler: !1
}
  , wd = {
    readContext: _e,
    useCallback: Ta,
    useContext: _e,
    useEffect: _o,
    useImperativeHandle: La,
    useInsertionEffect: ja,
    useLayoutEffect: Pa,
    useMemo: Ra,
    useReducer: Ql,
    useRef: Na,
    useState: function() {
        return Ql(Xn)
    },
    useDebugValue: No,
    useDeferredValue: function(e) {
        var t = Ne();
        return G === null ? t.memoizedState = e : Ma(t, G.memoizedState, e)
    },
    useTransition: function() {
        var e = Ql(Xn)[0]
          , t = Ne().memoizedState;
        return [e, t]
    },
    useMutableSource: wa,
    useSyncExternalStore: ka,
    useId: Oa,
    unstable_isNewReconciler: !1
};
function un(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Kc(r),
            r = r.return;
        while (r);
        var l = n
    } catch (i) {
        l = `
Error generating stack: ` + i.message + ` ` + i.stack}
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}
function Kl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Li(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var kd = typeof WeakMap == "function" ? WeakMap : Map;
function Ua(e, t, n) {
    n = Qe(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        tl || (tl = !0,
        Ai = r),
        Li(e, t)
    }
    ,
    n
}
function $a(e, t, n) {
    n = Qe(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }
        ,
        n.callback = function() {
            Li(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Li(e, t),
        typeof r != "function" && (at === null ? at = new Set([this]) : at.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function Lu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new kd;
        var l = new Set;
        r.set(t, l)
    } else
        l = r.get(t),
        l === void 0 && (l = new Set,
        r.set(t, l));
    l.has(n) || (l.add(n),
    e = Od.bind(null, e, t, n),
    t.then(e, e))
}
function Tu(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Ru(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = l,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qe(-1, 1),
    t.tag = 2,
    st(n, t, 1))),
    n.lanes |= 1),
    e)
}
var xd = Ze.ReactCurrentOwner
  , fe = !1;
function oe(e, t, n, r) {
    t.child = e === null ? ya(t, null, n, r) : ln(t, e.child, n, r)
}
function Mu(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return bt(t, l),
    r = Eo(e, t, n, r, i, l),
    n = Co(),
    e !== null && !fe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    Xe(e, t, l)) : ($ && n && co(t),
    t.flags |= 1,
    oe(e, t, r, l),
    t.child)
}
function Ou(e, t, n, r, l) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Oo(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        Aa(e, t, i, r, l)) : (e = Or(n.type, null, r, t, t.mode, l),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & l)) {
        var o = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Wn,
        n(o, r) && e.ref === t.ref)
            return Xe(e, t, l)
    }
    return t.flags |= 1,
    e = ft(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Aa(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Wn(i, r) && e.ref === t.ref)
            if (fe = !1,
            t.pendingProps = r = i,
            (e.lanes & l) !== 0)
                e.flags & 131072 && (fe = !0);
            else
                return t.lanes = e.lanes,
                Xe(e, t, l)
    }
    return Ti(e, t, n, r, l)
}
function Ba(e, t, n) {
    var r = t.pendingProps
      , l = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            F(Gt, he),
            he |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                F(Gt, he),
                he |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            F(Gt, he),
            he |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        F(Gt, he),
        he |= r;
    return oe(e, t, l, n),
    t.child
}
function Wa(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Ti(e, t, n, r, l) {
    var i = pe(n) ? jt : ie.current;
    return i = nn(t, i),
    bt(t, l),
    n = Eo(e, t, n, r, i, l),
    r = Co(),
    e !== null && !fe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    Xe(e, t, l)) : ($ && r && co(t),
    t.flags |= 1,
    oe(e, t, n, l),
    t.child)
}
function Iu(e, t, n, r, l) {
    if (pe(n)) {
        var i = !0;
        Qr(t)
    } else
        i = !1;
    if (bt(t, l),
    t.stateNode === null)
        Tr(e, t),
        ha(t, n, r),
        zi(t, n, r, l),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , u = t.memoizedProps;
        o.props = u;
        var s = o.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = _e(c) : (c = pe(n) ? jt : ie.current,
        c = nn(t, c));
        var h = n.getDerivedStateFromProps
          , p = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        p || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== c) && Nu(t, o, r, c),
        be = !1;
        var m = t.memoizedState;
        o.state = m,
        Zr(t, r, o, l),
        s = t.memoizedState,
        u !== r || m !== s || de.current || be ? (typeof h == "function" && (Pi(t, n, h, r),
        s = t.memoizedState),
        (u = be || _u(t, n, u, r, m, s, c)) ? (p || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = s),
        o.props = r,
        o.state = s,
        o.context = c,
        r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        pa(e, t),
        u = t.memoizedProps,
        c = t.type === t.elementType ? u : ze(t.type, u),
        o.props = c,
        p = t.pendingProps,
        m = o.context,
        s = n.contextType,
        typeof s == "object" && s !== null ? s = _e(s) : (s = pe(n) ? jt : ie.current,
        s = nn(t, s));
        var w = n.getDerivedStateFromProps;
        (h = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== p || m !== s) && Nu(t, o, r, s),
        be = !1,
        m = t.memoizedState,
        o.state = m,
        Zr(t, r, o, l);
        var k = t.memoizedState;
        u !== p || m !== k || de.current || be ? (typeof w == "function" && (Pi(t, n, w, r),
        k = t.memoizedState),
        (c = be || _u(t, n, c, r, m, k, s) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, k, s),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, k, s)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = k),
        o.props = r,
        o.state = k,
        o.context = s,
        r = c) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Ri(e, t, n, r, i, l)
}
function Ri(e, t, n, r, l, i) {
    Wa(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return l && ku(t, n, !1),
        Xe(e, t, i);
    r = t.stateNode,
    xd.current = t;
    var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = ln(t, e.child, null, i),
    t.child = ln(t, null, u, i)) : oe(e, t, u, i),
    t.memoizedState = r.state,
    l && ku(t, n, !0),
    t.child
}
function Va(e) {
    var t = e.stateNode;
    t.pendingContext ? wu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && wu(e, t.context, !1),
    wo(e, t.containerInfo)
}
function Fu(e, t, n, r, l) {
    return rn(),
    po(l),
    t.flags |= 256,
    oe(e, t, n, r),
    t.child
}
var Mi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Oi(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Ha(e, t, n) {
    var r = t.pendingProps, l = B.current, i = !1, o = (t.flags & 128) !== 0, u;
    if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1),
    F(B, l & 1),
    e === null)
        return Ni(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = o) : i = vl(o, r, 0, null),
        e = Nt(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = Oi(n),
        t.memoizedState = Mi,
        e) : jo(t, o));
    if (l = e.memoizedState,
    l !== null && (u = l.dehydrated,
    u !== null))
        return Sd(e, t, o, r, u, l, n);
    if (i) {
        i = r.fallback,
        o = t.mode,
        l = e.child,
        u = l.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== l ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = s,
        t.deletions = null) : (r = ft(l, s),
        r.subtreeFlags = l.subtreeFlags & 14680064),
        u !== null ? i = ft(u, i) : (i = Nt(i, o, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        o = e.child.memoizedState,
        o = o === null ? Oi(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        i.memoizedState = o,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = Mi,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = ft(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function jo(e, t) {
    return t = vl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function gr(e, t, n, r) {
    return r !== null && po(r),
    ln(t, e.child, null, n),
    e = jo(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Sd(e, t, n, r, l, i, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Kl(Error(g(422))),
        gr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        l = t.mode,
        r = vl({
            mode: "visible",
            children: r.children
        }, l, 0, null),
        i = Nt(i, l, o, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && ln(t, e.child, null, o),
        t.child.memoizedState = Oi(o),
        t.memoizedState = Mi,
        i);
    if (!(t.mode & 1))
        return gr(e, t, o, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset,
        r)
            var u = r.dgst;
        return r = u,
        i = Error(g(419)),
        r = Kl(i, r, void 0),
        gr(e, t, o, r)
    }
    if (u = (o & e.childLanes) !== 0,
    fe || u) {
        if (r = q,
        r !== null) {
            switch (o & -o) {
            case 4:
                l = 2;
                break;
            case 16:
                l = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                l = 32;
                break;
            case 536870912:
                l = 268435456;
                break;
            default:
                l = 0
            }
            l = l & (r.suspendedLanes | o) ? 0 : l,
            l !== 0 && l !== i.retryLane && (i.retryLane = l,
            Ge(e, l),
            Me(r, e, l, -1))
        }
        return Mo(),
        r = Kl(Error(g(421))),
        gr(e, t, o, r)
    }
    return l.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Id.bind(null, e),
    l._reactRetry = t,
    null) : (e = i.treeContext,
    ve = ut(l.nextSibling),
    ye = t,
    $ = !0,
    Te = null,
    e !== null && (xe[Se++] = We,
    xe[Se++] = Ve,
    xe[Se++] = Pt,
    We = e.id,
    Ve = e.overflow,
    Pt = t),
    t = jo(t, r.children),
    t.flags |= 4096,
    t)
}
function Du(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    ji(e.return, t, n)
}
function Yl(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = l)
}
function Qa(e, t, n) {
    var r = t.pendingProps
      , l = r.revealOrder
      , i = r.tail;
    if (oe(e, t, r.children, n),
    r = B.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Du(e, n, t);
                else if (e.tag === 19)
                    Du(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (F(B, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (l) {
        case "forwards":
            for (n = t.child,
            l = null; n !== null; )
                e = n.alternate,
                e !== null && Jr(e) === null && (l = n),
                n = n.sibling;
            n = l,
            n === null ? (l = t.child,
            t.child = null) : (l = n.sibling,
            n.sibling = null),
            Yl(t, !1, l, n, i);
            break;
        case "backwards":
            for (n = null,
            l = t.child,
            t.child = null; l !== null; ) {
                if (e = l.alternate,
                e !== null && Jr(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling,
                l.sibling = n,
                n = l,
                l = e
            }
            Yl(t, !0, n, null, i);
            break;
        case "together":
            Yl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Tr(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Xe(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Lt |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(g(153));
    if (t.child !== null) {
        for (e = t.child,
        n = ft(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = ft(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Ed(e, t, n) {
    switch (t.tag) {
    case 3:
        Va(t),
        rn();
        break;
    case 5:
        ga(t);
        break;
    case 1:
        pe(t.type) && Qr(t);
        break;
    case 4:
        wo(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , l = t.memoizedProps.value;
        F(Gr, r._currentValue),
        r._currentValue = l;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (F(B, B.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Ha(e, t, n) : (F(B, B.current & 1),
            e = Xe(e, t, n),
            e !== null ? e.sibling : null);
        F(B, B.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Qa(e, t, n);
            t.flags |= 128
        }
        if (l = t.memoizedState,
        l !== null && (l.rendering = null,
        l.tail = null,
        l.lastEffect = null),
        F(B, B.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Ba(e, t, n)
    }
    return Xe(e, t, n)
}
var Ka, Ii, Ya, Ga;
Ka = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Ii = function() {}
;
Ya = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode,
        Ct($e.current);
        var i = null;
        switch (n) {
        case "input":
            l = ri(e, l),
            r = ri(e, r),
            i = [];
            break;
        case "select":
            l = V({}, l, {
                value: void 0
            }),
            r = V({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            l = oi(e, l),
            r = oi(e, r),
            i = [];
            break;
        default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Vr)
        }
        si(n, r);
        var o;
        n = null;
        for (c in l)
            if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
                if (c === "style") {
                    var u = l[c];
                    for (o in u)
                        u.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (In.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
        for (c in r) {
            var s = r[c];
            if (u = l != null ? l[c] : void 0,
            r.hasOwnProperty(c) && s !== u && (s != null || u != null))
                if (c === "style")
                    if (u) {
                        for (o in u)
                            !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in s)
                            s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}),
                            n[o] = s[o])
                    } else
                        n || (i || (i = []),
                        i.push(c, n)),
                        n = s;
                else
                    c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                    u = u ? u.__html : void 0,
                    s != null && u !== s && (i = i || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (In.hasOwnProperty(c) ? (s != null && c === "onScroll" && D("scroll", e),
                    i || u === s || (i = [])) : (i = i || []).push(c, s))
        }
        n && (i = i || []).push("style", n);
        var c = i;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
Ga = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function kn(e, t) {
    if (!$)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags & 14680064,
            r |= l.flags & 14680064,
            l.return = e,
            l = l.sibling;
    else
        for (l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags,
            r |= l.flags,
            l.return = e,
            l = l.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Cd(e, t, n) {
    var r = t.pendingProps;
    switch (fo(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return re(t),
        null;
    case 1:
        return pe(t.type) && Hr(),
        re(t),
        null;
    case 3:
        return r = t.stateNode,
        on(),
        U(de),
        U(ie),
        xo(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (vr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Te !== null && (Vi(Te),
        Te = null))),
        Ii(e, t),
        re(t),
        null;
    case 5:
        ko(t);
        var l = Ct(Yn.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Ya(e, t, n, r, l),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(g(166));
                return re(t),
                null
            }
            if (e = Ct($e.current),
            vr(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[De] = t,
                r[Qn] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    D("cancel", r),
                    D("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    D("load", r);
                    break;
                case "video":
                case "audio":
                    for (l = 0; l < _n.length; l++)
                        D(_n[l], r);
                    break;
                case "source":
                    D("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    D("error", r),
                    D("load", r);
                    break;
                case "details":
                    D("toggle", r);
                    break;
                case "input":
                    Ko(r, i),
                    D("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    D("invalid", r);
                    break;
                case "textarea":
                    Go(r, i),
                    D("invalid", r)
                }
                si(n, i),
                l = null;
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        var u = i[o];
                        o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && hr(r.textContent, u, e),
                        l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && hr(r.textContent, u, e),
                        l = ["children", "" + u]) : In.hasOwnProperty(o) && u != null && o === "onScroll" && D("scroll", r)
                    }
                switch (n) {
                case "input":
                    ur(r),
                    Yo(r, i, !0);
                    break;
                case "textarea":
                    ur(r),
                    Xo(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = Vr)
                }
                r = l,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = l.nodeType === 9 ? l : l.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = xs(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[De] = t,
                e[Qn] = r,
                Ka(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = ai(n, r),
                    n) {
                    case "dialog":
                        D("cancel", e),
                        D("close", e),
                        l = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        D("load", e),
                        l = r;
                        break;
                    case "video":
                    case "audio":
                        for (l = 0; l < _n.length; l++)
                            D(_n[l], e);
                        l = r;
                        break;
                    case "source":
                        D("error", e),
                        l = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        D("error", e),
                        D("load", e),
                        l = r;
                        break;
                    case "details":
                        D("toggle", e),
                        l = r;
                        break;
                    case "input":
                        Ko(e, r),
                        l = ri(e, r),
                        D("invalid", e);
                        break;
                    case "option":
                        l = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        l = V({}, r, {
                            value: void 0
                        }),
                        D("invalid", e);
                        break;
                    case "textarea":
                        Go(e, r),
                        l = oi(e, r),
                        D("invalid", e);
                        break;
                    default:
                        l = r
                    }
                    si(n, l),
                    u = l;
                    for (i in u)
                        if (u.hasOwnProperty(i)) {
                            var s = u[i];
                            i === "style" ? Cs(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                            s != null && Ss(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Fn(e, s) : typeof s == "number" && Fn(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (In.hasOwnProperty(i) ? s != null && i === "onScroll" && D("scroll", e) : s != null && Zi(e, i, s, o))
                        }
                    switch (n) {
                    case "input":
                        ur(e),
                        Yo(e, r, !1);
                        break;
                    case "textarea":
                        ur(e),
                        Xo(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + pt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? Xt(e, !!r.multiple, i, !1) : r.defaultValue != null && Xt(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof l.onClick == "function" && (e.onclick = Vr)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return re(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Ga(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(g(166));
            if (n = Ct(Yn.current),
            Ct($e.current),
            vr(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[De] = t,
                (i = r.nodeValue !== n) && (e = ye,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        hr(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && hr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[De] = t,
                t.stateNode = r
        }
        return re(t),
        null;
    case 13:
        if (U(B),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if ($ && ve !== null && t.mode & 1 && !(t.flags & 128))
                fa(),
                rn(),
                t.flags |= 98560,
                i = !1;
            else if (i = vr(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(g(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(g(317));
                    i[De] = t
                } else
                    rn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                re(t),
                i = !1
            } else
                Te !== null && (Vi(Te),
                Te = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || B.current & 1 ? X === 0 && (X = 3) : Mo())),
        t.updateQueue !== null && (t.flags |= 4),
        re(t),
        null);
    case 4:
        return on(),
        Ii(e, t),
        e === null && Vn(t.stateNode.containerInfo),
        re(t),
        null;
    case 10:
        return vo(t.type._context),
        re(t),
        null;
    case 17:
        return pe(t.type) && Hr(),
        re(t),
        null;
    case 19:
        if (U(B),
        i = t.memoizedState,
        i === null)
            return re(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = i.rendering,
        o === null)
            if (r)
                kn(i, !1);
            else {
                if (X !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = Jr(e),
                        o !== null) {
                            for (t.flags |= 128,
                            kn(i, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                o = i.alternate,
                                o === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = o.childLanes,
                                i.lanes = o.lanes,
                                i.child = o.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = o.memoizedProps,
                                i.memoizedState = o.memoizedState,
                                i.updateQueue = o.updateQueue,
                                i.type = o.type,
                                e = o.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return F(B, B.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && K() > sn && (t.flags |= 128,
                r = !0,
                kn(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Jr(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    kn(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !o.alternate && !$)
                        return re(t),
                        null
                } else
                    2 * K() - i.renderingStartTime > sn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    kn(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = i.last,
            n !== null ? n.sibling = o : t.child = o,
            i.last = o)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = K(),
        t.sibling = null,
        n = B.current,
        F(B, r ? n & 1 | 2 : n & 1),
        t) : (re(t),
        null);
    case 22:
    case 23:
        return Ro(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? he & 1073741824 && (re(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(g(156, t.tag))
}
function _d(e, t) {
    switch (fo(t),
    t.tag) {
    case 1:
        return pe(t.type) && Hr(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return on(),
        U(de),
        U(ie),
        xo(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return ko(t),
        null;
    case 13:
        if (U(B),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(g(340));
            rn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return U(B),
        null;
    case 4:
        return on(),
        null;
    case 10:
        return vo(t.type._context),
        null;
    case 22:
    case 23:
        return Ro(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var wr = !1
  , le = !1
  , Nd = typeof WeakSet == "function" ? WeakSet : Set
  , E = null;
function Yt(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                H(e, t, r)
            }
        else
            n.current = null
}
function Fi(e, t, n) {
    try {
        n()
    } catch (r) {
        H(e, t, r)
    }
}
var Uu = !1;
function jd(e, t) {
    if (wi = Ar,
    e = qs(),
    ao(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , u = -1
                      , s = -1
                      , c = 0
                      , h = 0
                      , p = e
                      , m = null;
                    t: for (; ; ) {
                        for (var w; p !== n || l !== 0 && p.nodeType !== 3 || (u = o + l),
                        p !== i || r !== 0 && p.nodeType !== 3 || (s = o + r),
                        p.nodeType === 3 && (o += p.nodeValue.length),
                        (w = p.firstChild) !== null; )
                            m = p,
                            p = w;
                        for (; ; ) {
                            if (p === e)
                                break t;
                            if (m === n && ++c === l && (u = o),
                            m === i && ++h === r && (s = o),
                            (w = p.nextSibling) !== null)
                                break;
                            p = m,
                            m = p.parentNode
                        }
                        p = w
                    }
                    n = u === -1 || s === -1 ? null : {
                        start: u,
                        end: s
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (ki = {
        focusedElem: e,
        selectionRange: n
    },
    Ar = !1,
    E = t; E !== null; )
        if (t = E,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            E = e;
        else
            for (; E !== null; ) {
                t = E;
                try {
                    var k = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (k !== null) {
                                var x = k.memoizedProps
                                  , O = k.memoizedState
                                  , d = t.stateNode
                                  , a = d.getSnapshotBeforeUpdate(t.elementType === t.type ? x : ze(t.type, x), O);
                                d.__reactInternalSnapshotBeforeUpdate = a
                            }
                            break;
                        case 3:
                            var f = t.stateNode.containerInfo;
                            f.nodeType === 1 ? f.textContent = "" : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(g(163))
                        }
                } catch (y) {
                    H(t, t.return, y)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    E = e;
                    break
                }
                E = t.return
            }
    return k = Uu,
    Uu = !1,
    k
}
function Rn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                l.destroy = void 0,
                i !== void 0 && Fi(t, n, i)
            }
            l = l.next
        } while (l !== r)
    }
}
function ml(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Di(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Xa(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Xa(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[De],
    delete t[Qn],
    delete t[Ei],
    delete t[ad],
    delete t[cd])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Za(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function $u(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Za(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Ui(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Vr));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ui(e, t, n),
        e = e.sibling; e !== null; )
            Ui(e, t, n),
            e = e.sibling
}
function $i(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for ($i(e, t, n),
        e = e.sibling; e !== null; )
            $i(e, t, n),
            e = e.sibling
}
var b = null
  , Le = !1;
function Je(e, t, n) {
    for (n = n.child; n !== null; )
        Ja(e, t, n),
        n = n.sibling
}
function Ja(e, t, n) {
    if (Ue && typeof Ue.onCommitFiberUnmount == "function")
        try {
            Ue.onCommitFiberUnmount(ol, n)
        } catch {}
    switch (n.tag) {
    case 5:
        le || Yt(n, t);
    case 6:
        var r = b
          , l = Le;
        b = null,
        Je(e, t, n),
        b = r,
        Le = l,
        b !== null && (Le ? (e = b,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
        break;
    case 18:
        b !== null && (Le ? (e = b,
        n = n.stateNode,
        e.nodeType === 8 ? Al(e.parentNode, n) : e.nodeType === 1 && Al(e, n),
        An(e)) : Al(b, n.stateNode));
        break;
    case 4:
        r = b,
        l = Le,
        b = n.stateNode.containerInfo,
        Le = !0,
        Je(e, t, n),
        b = r,
        Le = l;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!le && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            l = r = r.next;
            do {
                var i = l
                  , o = i.destroy;
                i = i.tag,
                o !== void 0 && (i & 2 || i & 4) && Fi(n, t, o),
                l = l.next
            } while (l !== r)
        }
        Je(e, t, n);
        break;
    case 1:
        if (!le && (Yt(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (u) {
                H(n, t, u)
            }
        Je(e, t, n);
        break;
    case 21:
        Je(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (le = (r = le) || n.memoizedState !== null,
        Je(e, t, n),
        le = r) : Je(e, t, n);
        break;
    default:
        Je(e, t, n)
    }
}
function Au(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Nd),
        t.forEach(function(r) {
            var l = Fd.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(l, l))
        })
    }
}
function Pe(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = e
                  , o = t
                  , u = o;
                e: for (; u !== null; ) {
                    switch (u.tag) {
                    case 5:
                        b = u.stateNode,
                        Le = !1;
                        break e;
                    case 3:
                        b = u.stateNode.containerInfo,
                        Le = !0;
                        break e;
                    case 4:
                        b = u.stateNode.containerInfo,
                        Le = !0;
                        break e
                    }
                    u = u.return
                }
                if (b === null)
                    throw Error(g(160));
                Ja(i, o, l),
                b = null,
                Le = !1;
                var s = l.alternate;
                s !== null && (s.return = null),
                l.return = null
            } catch (c) {
                H(l, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            qa(t, e),
            t = t.sibling
}
function qa(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Pe(t, e),
        Ie(e),
        r & 4) {
            try {
                Rn(3, e, e.return),
                ml(3, e)
            } catch (x) {
                H(e, e.return, x)
            }
            try {
                Rn(5, e, e.return)
            } catch (x) {
                H(e, e.return, x)
            }
        }
        break;
    case 1:
        Pe(t, e),
        Ie(e),
        r & 512 && n !== null && Yt(n, n.return);
        break;
    case 5:
        if (Pe(t, e),
        Ie(e),
        r & 512 && n !== null && Yt(n, n.return),
        e.flags & 32) {
            var l = e.stateNode;
            try {
                Fn(l, "")
            } catch (x) {
                H(e, e.return, x)
            }
        }
        if (r & 4 && (l = e.stateNode,
        l != null)) {
            var i = e.memoizedProps
              , o = n !== null ? n.memoizedProps : i
              , u = e.type
              , s = e.updateQueue;
            if (e.updateQueue = null,
            s !== null)
                try {
                    u === "input" && i.type === "radio" && i.name != null && ws(l, i),
                    ai(u, o);
                    var c = ai(u, i);
                    for (o = 0; o < s.length; o += 2) {
                        var h = s[o]
                          , p = s[o + 1];
                        h === "style" ? Cs(l, p) : h === "dangerouslySetInnerHTML" ? Ss(l, p) : h === "children" ? Fn(l, p) : Zi(l, h, p, c)
                    }
                    switch (u) {
                    case "input":
                        li(l, i);
                        break;
                    case "textarea":
                        ks(l, i);
                        break;
                    case "select":
                        var m = l._wrapperState.wasMultiple;
                        l._wrapperState.wasMultiple = !!i.multiple;
                        var w = i.value;
                        w != null ? Xt(l, !!i.multiple, w, !1) : m !== !!i.multiple && (i.defaultValue != null ? Xt(l, !!i.multiple, i.defaultValue, !0) : Xt(l, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    l[Qn] = i
                } catch (x) {
                    H(e, e.return, x)
                }
        }
        break;
    case 6:
        if (Pe(t, e),
        Ie(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(g(162));
            l = e.stateNode,
            i = e.memoizedProps;
            try {
                l.nodeValue = i
            } catch (x) {
                H(e, e.return, x)
            }
        }
        break;
    case 3:
        if (Pe(t, e),
        Ie(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                An(t.containerInfo)
            } catch (x) {
                H(e, e.return, x)
            }
        break;
    case 4:
        Pe(t, e),
        Ie(e);
        break;
    case 13:
        Pe(t, e),
        Ie(e),
        l = e.child,
        l.flags & 8192 && (i = l.memoizedState !== null,
        l.stateNode.isHidden = i,
        !i || l.alternate !== null && l.alternate.memoizedState !== null || (Lo = K())),
        r & 4 && Au(e);
        break;
    case 22:
        if (h = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (le = (c = le) || h,
        Pe(t, e),
        le = c) : Pe(t, e),
        Ie(e),
        r & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !h && e.mode & 1)
                for (E = e,
                h = e.child; h !== null; ) {
                    for (p = E = h; E !== null; ) {
                        switch (m = E,
                        w = m.child,
                        m.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Rn(4, m, m.return);
                            break;
                        case 1:
                            Yt(m, m.return);
                            var k = m.stateNode;
                            if (typeof k.componentWillUnmount == "function") {
                                r = m,
                                n = m.return;
                                try {
                                    t = r,
                                    k.props = t.memoizedProps,
                                    k.state = t.memoizedState,
                                    k.componentWillUnmount()
                                } catch (x) {
                                    H(r, n, x)
                                }
                            }
                            break;
                        case 5:
                            Yt(m, m.return);
                            break;
                        case 22:
                            if (m.memoizedState !== null) {
                                Wu(p);
                                continue
                            }
                        }
                        w !== null ? (w.return = m,
                        E = w) : Wu(p)
                    }
                    h = h.sibling
                }
            e: for (h = null,
            p = e; ; ) {
                if (p.tag === 5) {
                    if (h === null) {
                        h = p;
                        try {
                            l = p.stateNode,
                            c ? (i = l.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = p.stateNode,
                            s = p.memoizedProps.style,
                            o = s != null && s.hasOwnProperty("display") ? s.display : null,
                            u.style.display = Es("display", o))
                        } catch (x) {
                            H(e, e.return, x)
                        }
                    }
                } else if (p.tag === 6) {
                    if (h === null)
                        try {
                            p.stateNode.nodeValue = c ? "" : p.memoizedProps
                        } catch (x) {
                            H(e, e.return, x)
                        }
                } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                    p.child.return = p,
                    p = p.child;
                    continue
                }
                if (p === e)
                    break e;
                for (; p.sibling === null; ) {
                    if (p.return === null || p.return === e)
                        break e;
                    h === p && (h = null),
                    p = p.return
                }
                h === p && (h = null),
                p.sibling.return = p.return,
                p = p.sibling
            }
        }
        break;
    case 19:
        Pe(t, e),
        Ie(e),
        r & 4 && Au(e);
        break;
    case 21:
        break;
    default:
        Pe(t, e),
        Ie(e)
    }
}
function Ie(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Za(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(g(160))
            }
            switch (r.tag) {
            case 5:
                var l = r.stateNode;
                r.flags & 32 && (Fn(l, ""),
                r.flags &= -33);
                var i = $u(e);
                $i(e, i, l);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , u = $u(e);
                Ui(e, u, o);
                break;
            default:
                throw Error(g(161))
            }
        } catch (s) {
            H(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Pd(e, t, n) {
    E = e,
    ba(e)
}
function ba(e, t, n) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
        var l = E
          , i = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || wr;
            if (!o) {
                var u = l.alternate
                  , s = u !== null && u.memoizedState !== null || le;
                u = wr;
                var c = le;
                if (wr = o,
                (le = s) && !c)
                    for (E = l; E !== null; )
                        o = E,
                        s = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Vu(l) : s !== null ? (s.return = o,
                        E = s) : Vu(l);
                for (; i !== null; )
                    E = i,
                    ba(i),
                    i = i.sibling;
                E = l,
                wr = u,
                le = c
            }
            Bu(e)
        } else
            l.subtreeFlags & 8772 && i !== null ? (i.return = l,
            E = i) : Bu(e)
    }
}
function Bu(e) {
    for (; E !== null; ) {
        var t = E;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        le || ml(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !le)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : ze(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Cu(t, i, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Cu(t, o, n)
                        }
                        break;
                    case 5:
                        var u = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = u;
                            var s = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                s.autoFocus && n.focus();
                                break;
                            case "img":
                                s.src && (n.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var h = c.memoizedState;
                                if (h !== null) {
                                    var p = h.dehydrated;
                                    p !== null && An(p)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(g(163))
                    }
                le || t.flags & 512 && Di(t)
            } catch (m) {
                H(t, t.return, m)
            }
        }
        if (t === e) {
            E = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            E = n;
            break
        }
        E = t.return
    }
}
function Wu(e) {
    for (; E !== null; ) {
        var t = E;
        if (t === e) {
            E = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            E = n;
            break
        }
        E = t.return
    }
}
function Vu(e) {
    for (; E !== null; ) {
        var t = E;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    ml(4, t)
                } catch (s) {
                    H(t, n, s)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var l = t.return;
                    try {
                        r.componentDidMount()
                    } catch (s) {
                        H(t, l, s)
                    }
                }
                var i = t.return;
                try {
                    Di(t)
                } catch (s) {
                    H(t, i, s)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    Di(t)
                } catch (s) {
                    H(t, o, s)
                }
            }
        } catch (s) {
            H(t, t.return, s)
        }
        if (t === e) {
            E = null;
            break
        }
        var u = t.sibling;
        if (u !== null) {
            u.return = t.return,
            E = u;
            break
        }
        E = t.return
    }
}
var zd = Math.ceil
  , el = Ze.ReactCurrentDispatcher
  , Po = Ze.ReactCurrentOwner
  , Ce = Ze.ReactCurrentBatchConfig
  , M = 0
  , q = null
  , Y = null
  , ee = 0
  , he = 0
  , Gt = vt(0)
  , X = 0
  , Jn = null
  , Lt = 0
  , hl = 0
  , zo = 0
  , Mn = null
  , ce = null
  , Lo = 0
  , sn = 1 / 0
  , Ae = null
  , tl = !1
  , Ai = null
  , at = null
  , kr = !1
  , rt = null
  , nl = 0
  , On = 0
  , Bi = null
  , Rr = -1
  , Mr = 0;
function ue() {
    return M & 6 ? K() : Rr !== -1 ? Rr : Rr = K()
}
function ct(e) {
    return e.mode & 1 ? M & 2 && ee !== 0 ? ee & -ee : dd.transition !== null ? (Mr === 0 && (Mr = Fs()),
    Mr) : (e = I,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Vs(e.type)),
    e) : 1
}
function Me(e, t, n, r) {
    if (50 < On)
        throw On = 0,
        Bi = null,
        Error(g(185));
    bn(e, n, r),
    (!(M & 2) || e !== q) && (e === q && (!(M & 2) && (hl |= n),
    X === 4 && tt(e, ee)),
    me(e, r),
    n === 1 && M === 0 && !(t.mode & 1) && (sn = K() + 500,
    fl && yt()))
}
function me(e, t) {
    var n = e.callbackNode;
    df(e, t);
    var r = $r(e, e === q ? ee : 0);
    if (r === 0)
        n !== null && qo(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && qo(n),
        t === 1)
            e.tag === 0 ? fd(Hu.bind(null, e)) : sa(Hu.bind(null, e)),
            ud(function() {
                !(M & 6) && yt()
            }),
            n = null;
        else {
            switch (Ds(r)) {
            case 1:
                n = to;
                break;
            case 4:
                n = Os;
                break;
            case 16:
                n = Ur;
                break;
            case 536870912:
                n = Is;
                break;
            default:
                n = Ur
            }
            n = uc(n, ec.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function ec(e, t) {
    if (Rr = -1,
    Mr = 0,
    M & 6)
        throw Error(g(327));
    var n = e.callbackNode;
    if (en() && e.callbackNode !== n)
        return null;
    var r = $r(e, e === q ? ee : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = rl(e, r);
    else {
        t = r;
        var l = M;
        M |= 2;
        var i = nc();
        (q !== e || ee !== t) && (Ae = null,
        sn = K() + 500,
        _t(e, t));
        do
            try {
                Rd();
                break
            } catch (u) {
                tc(e, u)
            }
        while (1);
        ho(),
        el.current = i,
        M = l,
        Y !== null ? t = 0 : (q = null,
        ee = 0,
        t = X)
    }
    if (t !== 0) {
        if (t === 2 && (l = mi(e),
        l !== 0 && (r = l,
        t = Wi(e, l))),
        t === 1)
            throw n = Jn,
            _t(e, 0),
            tt(e, r),
            me(e, K()),
            n;
        if (t === 6)
            tt(e, r);
        else {
            if (l = e.current.alternate,
            !(r & 30) && !Ld(l) && (t = rl(e, r),
            t === 2 && (i = mi(e),
            i !== 0 && (r = i,
            t = Wi(e, i))),
            t === 1))
                throw n = Jn,
                _t(e, 0),
                tt(e, r),
                me(e, K()),
                n;
            switch (e.finishedWork = l,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(g(345));
            case 2:
                xt(e, ce, Ae);
                break;
            case 3:
                if (tt(e, r),
                (r & 130023424) === r && (t = Lo + 500 - K(),
                10 < t)) {
                    if ($r(e, 0) !== 0)
                        break;
                    if (l = e.suspendedLanes,
                    (l & r) !== r) {
                        ue(),
                        e.pingedLanes |= e.suspendedLanes & l;
                        break
                    }
                    e.timeoutHandle = Si(xt.bind(null, e, ce, Ae), t);
                    break
                }
                xt(e, ce, Ae);
                break;
            case 4:
                if (tt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                l = -1; 0 < r; ) {
                    var o = 31 - Re(r);
                    i = 1 << o,
                    o = t[o],
                    o > l && (l = o),
                    r &= ~i
                }
                if (r = l,
                r = K() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * zd(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Si(xt.bind(null, e, ce, Ae), r);
                    break
                }
                xt(e, ce, Ae);
                break;
            case 5:
                xt(e, ce, Ae);
                break;
            default:
                throw Error(g(329))
            }
        }
    }
    return me(e, K()),
    e.callbackNode === n ? ec.bind(null, e) : null
}
function Wi(e, t) {
    var n = Mn;
    return e.current.memoizedState.isDehydrated && (_t(e, t).flags |= 256),
    e = rl(e, t),
    e !== 2 && (t = ce,
    ce = n,
    t !== null && Vi(t)),
    e
}
function Vi(e) {
    ce === null ? ce = e : ce.push.apply(ce, e)
}
function Ld(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r]
                      , i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Oe(i(), l))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function tt(e, t) {
    for (t &= ~zo,
    t &= ~hl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Re(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Hu(e) {
    if (M & 6)
        throw Error(g(327));
    en();
    var t = $r(e, 0);
    if (!(t & 1))
        return me(e, K()),
        null;
    var n = rl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = mi(e);
        r !== 0 && (t = r,
        n = Wi(e, r))
    }
    if (n === 1)
        throw n = Jn,
        _t(e, 0),
        tt(e, t),
        me(e, K()),
        n;
    if (n === 6)
        throw Error(g(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    xt(e, ce, Ae),
    me(e, K()),
    null
}
function To(e, t) {
    var n = M;
    M |= 1;
    try {
        return e(t)
    } finally {
        M = n,
        M === 0 && (sn = K() + 500,
        fl && yt())
    }
}
function Tt(e) {
    rt !== null && rt.tag === 0 && !(M & 6) && en();
    var t = M;
    M |= 1;
    var n = Ce.transition
      , r = I;
    try {
        if (Ce.transition = null,
        I = 1,
        e)
            return e()
    } finally {
        I = r,
        Ce.transition = n,
        M = t,
        !(M & 6) && yt()
    }
}
function Ro() {
    he = Gt.current,
    U(Gt)
}
function _t(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    od(n)),
    Y !== null)
        for (n = Y.return; n !== null; ) {
            var r = n;
            switch (fo(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Hr();
                break;
            case 3:
                on(),
                U(de),
                U(ie),
                xo();
                break;
            case 5:
                ko(r);
                break;
            case 4:
                on();
                break;
            case 13:
                U(B);
                break;
            case 19:
                U(B);
                break;
            case 10:
                vo(r.type._context);
                break;
            case 22:
            case 23:
                Ro()
            }
            n = n.return
        }
    if (q = e,
    Y = e = ft(e.current, null),
    ee = he = t,
    X = 0,
    Jn = null,
    zo = hl = Lt = 0,
    ce = Mn = null,
    Et !== null) {
        for (t = 0; t < Et.length; t++)
            if (n = Et[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var l = r.next
                  , i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = l,
                    r.next = o
                }
                n.pending = r
            }
        Et = null
    }
    return e
}
function tc(e, t) {
    do {
        var n = Y;
        try {
            if (ho(),
            zr.current = br,
            qr) {
                for (var r = W.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null),
                    r = r.next
                }
                qr = !1
            }
            if (zt = 0,
            J = G = W = null,
            Tn = !1,
            Gn = 0,
            Po.current = null,
            n === null || n.return === null) {
                X = 1,
                Jn = t,
                Y = null;
                break
            }
            e: {
                var i = e
                  , o = n.return
                  , u = n
                  , s = t;
                if (t = ee,
                u.flags |= 32768,
                s !== null && typeof s == "object" && typeof s.then == "function") {
                    var c = s
                      , h = u
                      , p = h.tag;
                    if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var m = h.alternate;
                        m ? (h.updateQueue = m.updateQueue,
                        h.memoizedState = m.memoizedState,
                        h.lanes = m.lanes) : (h.updateQueue = null,
                        h.memoizedState = null)
                    }
                    var w = Tu(o);
                    if (w !== null) {
                        w.flags &= -257,
                        Ru(w, o, u, i, t),
                        w.mode & 1 && Lu(i, c, t),
                        t = w,
                        s = c;
                        var k = t.updateQueue;
                        if (k === null) {
                            var x = new Set;
                            x.add(s),
                            t.updateQueue = x
                        } else
                            k.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Lu(i, c, t),
                            Mo();
                            break e
                        }
                        s = Error(g(426))
                    }
                } else if ($ && u.mode & 1) {
                    var O = Tu(o);
                    if (O !== null) {
                        !(O.flags & 65536) && (O.flags |= 256),
                        Ru(O, o, u, i, t),
                        po(un(s, u));
                        break e
                    }
                }
                i = s = un(s, u),
                X !== 4 && (X = 2),
                Mn === null ? Mn = [i] : Mn.push(i),
                i = o;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var d = Ua(i, s, t);
                        Eu(i, d);
                        break e;
                    case 1:
                        u = s;
                        var a = i.type
                          , f = i.stateNode;
                        if (!(i.flags & 128) && (typeof a.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (at === null || !at.has(f)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var y = $a(i, u, t);
                            Eu(i, y);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            lc(n)
        } catch (S) {
            t = S,
            Y === n && n !== null && (Y = n = n.return);
            continue
        }
        break
    } while (1)
}
function nc() {
    var e = el.current;
    return el.current = br,
    e === null ? br : e
}
function Mo() {
    (X === 0 || X === 3 || X === 2) && (X = 4),
    q === null || !(Lt & 268435455) && !(hl & 268435455) || tt(q, ee)
}
function rl(e, t) {
    var n = M;
    M |= 2;
    var r = nc();
    (q !== e || ee !== t) && (Ae = null,
    _t(e, t));
    do
        try {
            Td();
            break
        } catch (l) {
            tc(e, l)
        }
    while (1);
    if (ho(),
    M = n,
    el.current = r,
    Y !== null)
        throw Error(g(261));
    return q = null,
    ee = 0,
    X
}
function Td() {
    for (; Y !== null; )
        rc(Y)
}
function Rd() {
    for (; Y !== null && !nf(); )
        rc(Y)
}
function rc(e) {
    var t = oc(e.alternate, e, he);
    e.memoizedProps = e.pendingProps,
    t === null ? lc(e) : Y = t,
    Po.current = null
}
function lc(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = _d(n, t),
            n !== null) {
                n.flags &= 32767,
                Y = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                X = 6,
                Y = null;
                return
            }
        } else if (n = Cd(n, t, he),
        n !== null) {
            Y = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Y = t;
            return
        }
        Y = t = e
    } while (t !== null);
    X === 0 && (X = 5)
}
function xt(e, t, n) {
    var r = I
      , l = Ce.transition;
    try {
        Ce.transition = null,
        I = 1,
        Md(e, t, n, r)
    } finally {
        Ce.transition = l,
        I = r
    }
    return null
}
function Md(e, t, n, r) {
    do
        en();
    while (rt !== null);
    if (M & 6)
        throw Error(g(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(g(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (pf(e, i),
    e === q && (Y = q = null,
    ee = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || kr || (kr = !0,
    uc(Ur, function() {
        return en(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = Ce.transition,
        Ce.transition = null;
        var o = I;
        I = 1;
        var u = M;
        M |= 4,
        Po.current = null,
        jd(e, n),
        qa(n, e),
        bf(ki),
        Ar = !!wi,
        ki = wi = null,
        e.current = n,
        Pd(n),
        rf(),
        M = u,
        I = o,
        Ce.transition = i
    } else
        e.current = n;
    if (kr && (kr = !1,
    rt = e,
    nl = l),
    i = e.pendingLanes,
    i === 0 && (at = null),
    uf(n.stateNode),
    me(e, K()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            l = t[n],
            r(l.value, {
                componentStack: l.stack,
                digest: l.digest
            });
    if (tl)
        throw tl = !1,
        e = Ai,
        Ai = null,
        e;
    return nl & 1 && e.tag !== 0 && en(),
    i = e.pendingLanes,
    i & 1 ? e === Bi ? On++ : (On = 0,
    Bi = e) : On = 0,
    yt(),
    null
}
function en() {
    if (rt !== null) {
        var e = Ds(nl)
          , t = Ce.transition
          , n = I;
        try {
            if (Ce.transition = null,
            I = 16 > e ? 16 : e,
            rt === null)
                var r = !1;
            else {
                if (e = rt,
                rt = null,
                nl = 0,
                M & 6)
                    throw Error(g(331));
                var l = M;
                for (M |= 4,
                E = e.current; E !== null; ) {
                    var i = E
                      , o = i.child;
                    if (E.flags & 16) {
                        var u = i.deletions;
                        if (u !== null) {
                            for (var s = 0; s < u.length; s++) {
                                var c = u[s];
                                for (E = c; E !== null; ) {
                                    var h = E;
                                    switch (h.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Rn(8, h, i)
                                    }
                                    var p = h.child;
                                    if (p !== null)
                                        p.return = h,
                                        E = p;
                                    else
                                        for (; E !== null; ) {
                                            h = E;
                                            var m = h.sibling
                                              , w = h.return;
                                            if (Xa(h),
                                            h === c) {
                                                E = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = w,
                                                E = m;
                                                break
                                            }
                                            E = w
                                        }
                                }
                            }
                            var k = i.alternate;
                            if (k !== null) {
                                var x = k.child;
                                if (x !== null) {
                                    k.child = null;
                                    do {
                                        var O = x.sibling;
                                        x.sibling = null,
                                        x = O
                                    } while (x !== null)
                                }
                            }
                            E = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        o.return = i,
                        E = o;
                    else
                        e: for (; E !== null; ) {
                            if (i = E,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Rn(9, i, i.return)
                                }
                            var d = i.sibling;
                            if (d !== null) {
                                d.return = i.return,
                                E = d;
                                break e
                            }
                            E = i.return
                        }
                }
                var a = e.current;
                for (E = a; E !== null; ) {
                    o = E;
                    var f = o.child;
                    if (o.subtreeFlags & 2064 && f !== null)
                        f.return = o,
                        E = f;
                    else
                        e: for (o = a; E !== null; ) {
                            if (u = E,
                            u.flags & 2048)
                                try {
                                    switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ml(9, u)
                                    }
                                } catch (S) {
                                    H(u, u.return, S)
                                }
                            if (u === o) {
                                E = null;
                                break e
                            }
                            var y = u.sibling;
                            if (y !== null) {
                                y.return = u.return,
                                E = y;
                                break e
                            }
                            E = u.return
                        }
                }
                if (M = l,
                yt(),
                Ue && typeof Ue.onPostCommitFiberRoot == "function")
                    try {
                        Ue.onPostCommitFiberRoot(ol, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            I = n,
            Ce.transition = t
        }
    }
    return !1
}
function Qu(e, t, n) {
    t = un(n, t),
    t = Ua(e, t, 1),
    e = st(e, t, 1),
    t = ue(),
    e !== null && (bn(e, 1, t),
    me(e, t))
}
function H(e, t, n) {
    if (e.tag === 3)
        Qu(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Qu(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (at === null || !at.has(r))) {
                    e = un(n, e),
                    e = $a(t, e, 1),
                    t = st(t, e, 1),
                    e = ue(),
                    t !== null && (bn(t, 1, e),
                    me(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Od(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = ue(),
    e.pingedLanes |= e.suspendedLanes & n,
    q === e && (ee & n) === n && (X === 4 || X === 3 && (ee & 130023424) === ee && 500 > K() - Lo ? _t(e, 0) : zo |= n),
    me(e, t)
}
function ic(e, t) {
    t === 0 && (e.mode & 1 ? (t = cr,
    cr <<= 1,
    !(cr & 130023424) && (cr = 4194304)) : t = 1);
    var n = ue();
    e = Ge(e, t),
    e !== null && (bn(e, t, n),
    me(e, n))
}
function Id(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    ic(e, n)
}
function Fd(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(g(314))
    }
    r !== null && r.delete(t),
    ic(e, n)
}
var oc;
oc = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || de.current)
            fe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return fe = !1,
                Ed(e, t, n);
            fe = !!(e.flags & 131072)
        }
    else
        fe = !1,
        $ && t.flags & 1048576 && aa(t, Yr, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Tr(e, t),
        e = t.pendingProps;
        var l = nn(t, ie.current);
        bt(t, n),
        l = Eo(null, t, r, e, l, n);
        var i = Co();
        return t.flags |= 1,
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        pe(r) ? (i = !0,
        Qr(t)) : i = !1,
        t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null,
        go(t),
        l.updater = dl,
        t.stateNode = l,
        l._reactInternals = t,
        zi(t, r, e, n),
        t = Ri(null, t, r, !0, i, n)) : (t.tag = 0,
        $ && i && co(t),
        oe(null, t, l, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Tr(e, t),
            e = t.pendingProps,
            l = r._init,
            r = l(r._payload),
            t.type = r,
            l = t.tag = Ud(r),
            e = ze(r, e),
            l) {
            case 0:
                t = Ti(null, t, r, e, n);
                break e;
            case 1:
                t = Iu(null, t, r, e, n);
                break e;
            case 11:
                t = Mu(null, t, r, e, n);
                break e;
            case 14:
                t = Ou(null, t, r, ze(r.type, e), n);
                break e
            }
            throw Error(g(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : ze(r, l),
        Ti(e, t, r, l, n);
    case 1:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : ze(r, l),
        Iu(e, t, r, l, n);
    case 3:
        e: {
            if (Va(t),
            e === null)
                throw Error(g(387));
            r = t.pendingProps,
            i = t.memoizedState,
            l = i.element,
            pa(e, t),
            Zr(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    l = un(Error(g(423)), t),
                    t = Fu(e, t, r, n, l);
                    break e
                } else if (r !== l) {
                    l = un(Error(g(424)), t),
                    t = Fu(e, t, r, n, l);
                    break e
                } else
                    for (ve = ut(t.stateNode.containerInfo.firstChild),
                    ye = t,
                    $ = !0,
                    Te = null,
                    n = ya(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (rn(),
                r === l) {
                    t = Xe(e, t, n);
                    break e
                }
                oe(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return ga(t),
        e === null && Ni(t),
        r = t.type,
        l = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        o = l.children,
        xi(r, l) ? o = null : i !== null && xi(r, i) && (t.flags |= 32),
        Wa(e, t),
        oe(e, t, o, n),
        t.child;
    case 6:
        return e === null && Ni(t),
        null;
    case 13:
        return Ha(e, t, n);
    case 4:
        return wo(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = ln(t, null, r, n) : oe(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : ze(r, l),
        Mu(e, t, r, l, n);
    case 7:
        return oe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return oe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return oe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            l = t.pendingProps,
            i = t.memoizedProps,
            o = l.value,
            F(Gr, r._currentValue),
            r._currentValue = o,
            i !== null)
                if (Oe(i.value, o)) {
                    if (i.children === l.children && !de.current) {
                        t = Xe(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var u = i.dependencies;
                        if (u !== null) {
                            o = i.child;
                            for (var s = u.firstContext; s !== null; ) {
                                if (s.context === r) {
                                    if (i.tag === 1) {
                                        s = Qe(-1, n & -n),
                                        s.tag = 2;
                                        var c = i.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var h = c.pending;
                                            h === null ? s.next = s : (s.next = h.next,
                                            h.next = s),
                                            c.pending = s
                                        }
                                    }
                                    i.lanes |= n,
                                    s = i.alternate,
                                    s !== null && (s.lanes |= n),
                                    ji(i.return, n, t),
                                    u.lanes |= n;
                                    break
                                }
                                s = s.next
                            }
                        } else if (i.tag === 10)
                            o = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (o = i.return,
                            o === null)
                                throw Error(g(341));
                            o.lanes |= n,
                            u = o.alternate,
                            u !== null && (u.lanes |= n),
                            ji(o, n, t),
                            o = i.sibling
                        } else
                            o = i.child;
                        if (o !== null)
                            o.return = i;
                        else
                            for (o = i; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (i = o.sibling,
                                i !== null) {
                                    i.return = o.return,
                                    o = i;
                                    break
                                }
                                o = o.return
                            }
                        i = o
                    }
            oe(e, t, l.children, n),
            t = t.child
        }
        return t;
    case 9:
        return l = t.type,
        r = t.pendingProps.children,
        bt(t, n),
        l = _e(l),
        r = r(l),
        t.flags |= 1,
        oe(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        l = ze(r, t.pendingProps),
        l = ze(r.type, l),
        Ou(e, t, r, l, n);
    case 15:
        return Aa(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : ze(r, l),
        Tr(e, t),
        t.tag = 1,
        pe(r) ? (e = !0,
        Qr(t)) : e = !1,
        bt(t, n),
        ha(t, r, l),
        zi(t, r, l, n),
        Ri(null, t, r, !0, e, n);
    case 19:
        return Qa(e, t, n);
    case 22:
        return Ba(e, t, n)
    }
    throw Error(g(156, t.tag))
}
;
function uc(e, t) {
    return Ms(e, t)
}
function Dd(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Ee(e, t, n, r) {
    return new Dd(e,t,n,r)
}
function Oo(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Ud(e) {
    if (typeof e == "function")
        return Oo(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === qi)
            return 11;
        if (e === bi)
            return 14
    }
    return 2
}
function ft(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ee(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Or(e, t, n, r, l, i) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        Oo(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case Ut:
            return Nt(n.children, l, i, t);
        case Ji:
            o = 8,
            l |= 8;
            break;
        case bl:
            return e = Ee(12, n, t, l | 2),
            e.elementType = bl,
            e.lanes = i,
            e;
        case ei:
            return e = Ee(13, n, t, l),
            e.elementType = ei,
            e.lanes = i,
            e;
        case ti:
            return e = Ee(19, n, t, l),
            e.elementType = ti,
            e.lanes = i,
            e;
        case vs:
            return vl(n, l, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case ms:
                    o = 10;
                    break e;
                case hs:
                    o = 9;
                    break e;
                case qi:
                    o = 11;
                    break e;
                case bi:
                    o = 14;
                    break e;
                case qe:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(g(130, e == null ? e : typeof e, ""))
        }
    return t = Ee(o, n, t, l),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function Nt(e, t, n, r) {
    return e = Ee(7, e, r, t),
    e.lanes = n,
    e
}
function vl(e, t, n, r) {
    return e = Ee(22, e, r, t),
    e.elementType = vs,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Gl(e, t, n) {
    return e = Ee(6, e, null, t),
    e.lanes = n,
    e
}
function Xl(e, t, n) {
    return t = Ee(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function $d(e, t, n, r, l) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = zl(0),
    this.expirationTimes = zl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = zl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = l,
    this.mutableSourceEagerHydrationData = null
}
function Io(e, t, n, r, l, i, o, u, s) {
    return e = new $d(e,t,n,u,s),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = Ee(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    go(i),
    e
}
function Ad(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Dt,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function sc(e) {
    if (!e)
        return mt;
    e = e._reactInternals;
    e: {
        if (Mt(e) !== e || e.tag !== 1)
            throw Error(g(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (pe(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(g(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (pe(n))
            return ua(e, n, t)
    }
    return t
}
function ac(e, t, n, r, l, i, o, u, s) {
    return e = Io(n, r, !0, e, l, i, o, u, s),
    e.context = sc(null),
    n = e.current,
    r = ue(),
    l = ct(n),
    i = Qe(r, l),
    i.callback = t ?? null,
    st(n, i, l),
    e.current.lanes = l,
    bn(e, l, r),
    me(e, r),
    e
}
function yl(e, t, n, r) {
    var l = t.current
      , i = ue()
      , o = ct(l);
    return n = sc(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Qe(i, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = st(l, t, o),
    e !== null && (Me(e, l, o, i),
    Pr(e, l, o)),
    o
}
function ll(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Ku(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Fo(e, t) {
    Ku(e, t),
    (e = e.alternate) && Ku(e, t)
}
function Bd() {
    return null
}
var cc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Do(e) {
    this._internalRoot = e
}
gl.prototype.render = Do.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(g(409));
    yl(e, t, null, null)
}
;
gl.prototype.unmount = Do.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Tt(function() {
            yl(null, e, null, null)
        }),
        t[Ye] = null
    }
}
;
function gl(e) {
    this._internalRoot = e
}
gl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = As();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++)
            ;
        et.splice(n, 0, e),
        n === 0 && Ws(e)
    }
}
;
function Uo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function wl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Yu() {}
function Wd(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var c = ll(o);
                i.call(c)
            }
        }
        var o = ac(t, r, e, 0, null, !1, !1, "", Yu);
        return e._reactRootContainer = o,
        e[Ye] = o.current,
        Vn(e.nodeType === 8 ? e.parentNode : e),
        Tt(),
        o
    }
    for (; l = e.lastChild; )
        e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function() {
            var c = ll(s);
            u.call(c)
        }
    }
    var s = Io(e, 0, !1, null, null, !1, !1, "", Yu);
    return e._reactRootContainer = s,
    e[Ye] = s.current,
    Vn(e.nodeType === 8 ? e.parentNode : e),
    Tt(function() {
        yl(t, s, n, r)
    }),
    s
}
function kl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof l == "function") {
            var u = l;
            l = function() {
                var s = ll(o);
                u.call(s)
            }
        }
        yl(t, o, e, l)
    } else
        o = Wd(n, t, e, l, r);
    return ll(o)
}
Us = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Cn(t.pendingLanes);
            n !== 0 && (no(t, n | 1),
            me(t, K()),
            !(M & 6) && (sn = K() + 500,
            yt()))
        }
        break;
    case 13:
        Tt(function() {
            var r = Ge(e, 1);
            if (r !== null) {
                var l = ue();
                Me(r, e, 1, l)
            }
        }),
        Fo(e, 1)
    }
}
;
ro = function(e) {
    if (e.tag === 13) {
        var t = Ge(e, 134217728);
        if (t !== null) {
            var n = ue();
            Me(t, e, 134217728, n)
        }
        Fo(e, 134217728)
    }
}
;
$s = function(e) {
    if (e.tag === 13) {
        var t = ct(e)
          , n = Ge(e, t);
        if (n !== null) {
            var r = ue();
            Me(n, e, t, r)
        }
        Fo(e, t)
    }
}
;
As = function() {
    return I
}
;
Bs = function(e, t) {
    var n = I;
    try {
        return I = e,
        t()
    } finally {
        I = n
    }
}
;
fi = function(e, t, n) {
    switch (t) {
    case "input":
        if (li(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var l = cl(r);
                    if (!l)
                        throw Error(g(90));
                    gs(r),
                    li(r, l)
                }
            }
        }
        break;
    case "textarea":
        ks(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Xt(e, !!n.multiple, t, !1)
    }
}
;
js = To;
Ps = Tt;
var Vd = {
    usingClientEntryPoint: !1,
    Events: [tr, Wt, cl, _s, Ns, To]
}
  , xn = {
    findFiberByHostInstance: St,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , Hd = {
    bundleType: xn.bundleType,
    version: xn.version,
    rendererPackageName: xn.rendererPackageName,
    rendererConfig: xn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ze.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Ts(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: xn.findFiberByHostInstance || Bd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xr.isDisabled && xr.supportsFiber)
        try {
            ol = xr.inject(Hd),
            Ue = xr
        } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vd;
we.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Uo(t))
        throw Error(g(200));
    return Ad(e, t, null, n)
}
;
we.createRoot = function(e, t) {
    if (!Uo(e))
        throw Error(g(299));
    var n = !1
      , r = ""
      , l = cc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    t = Io(e, 1, !1, null, null, n, !1, r, l),
    e[Ye] = t.current,
    Vn(e.nodeType === 8 ? e.parentNode : e),
    new Do(t)
}
;
we.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(g(188)) : (e = Object.keys(e).join(","),
        Error(g(268, e)));
    return e = Ts(t),
    e = e === null ? null : e.stateNode,
    e
}
;
we.flushSync = function(e) {
    return Tt(e)
}
;
we.hydrate = function(e, t, n) {
    if (!wl(t))
        throw Error(g(200));
    return kl(null, e, t, !0, n)
}
;
we.hydrateRoot = function(e, t, n) {
    if (!Uo(e))
        throw Error(g(405));
    var r = n != null && n.hydratedSources || null
      , l = !1
      , i = ""
      , o = cc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = ac(t, null, e, 1, n ?? null, l, !1, i, o),
    e[Ye] = t.current,
    Vn(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            l = n._getVersion,
            l = l(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new gl(t)
}
;
we.render = function(e, t, n) {
    if (!wl(t))
        throw Error(g(200));
    return kl(null, e, t, !1, n)
}
;
we.unmountComponentAtNode = function(e) {
    if (!wl(e))
        throw Error(g(40));
    return e._reactRootContainer ? (Tt(function() {
        kl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Ye] = null
        })
    }),
    !0) : !1
}
;
we.unstable_batchedUpdates = To;
we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!wl(n))
        throw Error(g(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(g(38));
    return kl(e, t, n, !1, r)
}
;
we.version = "18.2.0-next-9e3b772b8-20220608";
function fc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fc)
        } catch (e) {
            console.error(e)
        }
}
fc(),
as.exports = we;
var Qd = as.exports
  , Gu = Qd;
Jl.createRoot = Gu.createRoot,
Jl.hydrateRoot = Gu.hydrateRoot;
const Kd = "modulepreload"
  , Yd = function(e) {
    return "/" + e
}
  , Xu = {}
  , Gd = function(t, n, r) {
    if (!n || n.length === 0)
        return t();
    const l = document.getElementsByTagName("link");
    return Promise.all(n.map(i=>{
        if (i = Yd(i),
        i in Xu)
            return;
        Xu[i] = !0;
        const o = i.endsWith(".css")
          , u = o ? '[rel="stylesheet"]' : "";
        if (!!r)
            for (let h = l.length - 1; h >= 0; h--) {
                const p = l[h];
                if (p.href === i && (!o || p.rel === "stylesheet"))
                    return
            }
        else if (document.querySelector(`link[href="${i}"]${u}`))
            return;
        const c = document.createElement("link");
        if (c.rel = o ? "stylesheet" : Kd,
        o || (c.as = "script",
        c.crossOrigin = ""),
        c.href = i,
        document.head.appendChild(c),
        o)
            return new Promise((h,p)=>{
                c.addEventListener("load", h),
                c.addEventListener("error", ()=>p(new Error(`Unable to preload CSS for ${i}`)))
            }
            )
    }
    )).then(()=>t()).catch(i=>{
        const o = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (o.payload = i,
        window.dispatchEvent(o),
        !o.defaultPrevented)
            throw i
    }
    )
}
  , Xd = {
    socials: [{
        name: "github",
        url: "https://github.com/ROB-MRS"
    }, {
        name: "instagram",
        url: "https://www.instagram.com/_rob.marse_/"
    }],
    navigator: [{
        name: "Home"
    }, {
        name: "About"
    }, {
        name: "Projects"
    }, {
        name: "Writings"
    }]
};
function Zd({handleOnClick: e, scrollToSection: t, homeRef: n, aboutRef: r, projectsRef: l, writingsRef: i}) {
    const [o,u] = P.useState(!1)
      , [s,c] = P.useState()
      , h = ()=>{
        window.scrollY >= 40 ? u(!0) : u(!1)
    }
    ;
    window.addEventListener("scroll", h);
    const p = o ? "nav-links-filled" : "nav-links"
      , m = w=>{
        switch (c(w),
        w) {
        case 0:
            t(n);
            break;
        case 1:
            t(r);
            break;
        case 2:
            t(l);
            break;
        case 3:
            t(i);
            break
        }
    }
    ;
    return v.jsx("div", {
        className: "nav",
        children: v.jsxs("div", {
            className: p,
            children: [Xd.navigator.map((w,k)=>v.jsx("span", {
                onClick: ()=>m(k),
                className: `nav-links-item ${s === k ? "active" : ""}`,
                children: w.name
            }, k)), 
            // v.jsx("button", {
            //     onClick: e,
            //     className: "nav-links-item contact",
            //     children: "Chat"
            // }), 
            v.jsx("div", {
                className: `nav-slider ${s === 0 ? "Home" : s === 1 ? "About" : s === 2 ? "Projects" : s === 3 && "Writings"}`
            })]
        })
    })
}
const dc = {
    title: "About",
    description: "Hi, I'm Roberto Marsella. Something about me...",
    experiences: [{
        date: "Feb 2023 - Aug 2023",
        title: "Software Engineer",
        company: "Deloitte & Touche",
        description: "What I did",
        technologies: ["C#", ".NET"]
    }, {
        date: "Aug 2022 - Dec 2022",
        title: "Blockchain - Smart Contract Developer",
        company: "Lazio Chain Research Project",
        description: "What I did",
        technologies: ["EOSIO"]
    }],
    education: [{
        date: "Sept 2023 - Present",
        title: "MSc Fintech with Business Analytics",
        uni: "University of Westminster",
        description: "description of the master",
    }, {
        date: "Sept 2019 - Dec 2022",
        title: "BSc Computer Science and Engineering",
        uni: "Universitá degli Studi Roma Tre",
        description: "description of the bsc",
    }],
    skills: ["Culo", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Sass", "Tailwind", "Material-UI", "Git", "Framer-Motion", "Firebase", "Jira", "Cypress", "Playwright", "Storybook", "Styled-Components", "Zustand", "GraphQL", "GitLab", "Web Accessibility", "Nest.js", "Postman", "Insomnia", "Scrum", "Bitbucket", "Confluence"]
};
function Jd() {
    return v.jsxs("div", {
        className: "skills-container",
        children: [v.jsx("h2", {
            className: "skills-heading",
            children: "Technical Skills"
        }), v.jsx("div", {
            className: "skills-wrapper",
            children: dc.skills.map((e,t)=>v.jsx(He.Fragment, {
                children: v.jsx("span", {
                    children: e
                })
            }, t))
        })]
    })
}
function qd({date: e, title: t, company: c, description: n, technologies: r}) {
    return v.jsxs("div", {
        className: "about-experience-item",
        children: [v.jsx("div", {
            className: "about-experience-date",
            children: e
        }), v.jsxs("div", {
            children: [v.jsx("h2", {
                className: "about-experience-title",
                children: t
            }), v.jsx("h2", {
                className: "about-experience-title",
                children: c
            }), v.jsx("p", {
                className: "about-experience-description",
                children: n
            }), v.jsx("div", {
                className: "about-experience-technologies",
                children: r.map((l,i)=>v.jsx("span", {
                    className: "about-experience-technology",
                    children: l
                }, i))
            })]
        })]
    })
}
function edd({date: e, title: t, uni: u, description: n}) {
    return v.jsxs("div", {
        className: "about-experience-item",
        children: [v.jsx("div", {
            className: "about-experience-date",
            children: e
        }), v.jsxs("div", {
            children: [v.jsx("h2", {
                className: "about-experience-title",
                children: t
            }), v.jsx("h2", {
                className: "about-experience-title",
                children: u
            }), v.jsx("p", {
                className: "about-experience-description",
                children: n
            })]
        })]
    })
}
function bd() {
    const {title: e, description: t, experiences: n, education: k} = dc;
    return v.jsxs("div", {
        className: "about-container",
        children: [v.jsx("h2", {
            className: "about-title",
            children: e
        }), 
        v.jsxs("p", {
            className: "about-description",
            children: [t, 
            //     " Follow my ", 
            //     v.jsx("a", {
            //     className: "instagram",
            //     href: "https://www.instagram.com/mirayatech",
            //     target: "_blanket",
            //     children: "Instagram"
            // }), " to see my journey."
            ]
        }),
        v.jsx(Jd, {}), v.jsxs("div", {
            className: "about-experience-section",
            children: [v.jsx("h2", {
                className: "about-experience-heading",
                children: "Work Experience"
            }), n.map((r,l)=>v.jsx(qd, {
                date: r.date,
                title: r.title,
                company: r.company,
                description: r.description,
                technologies: r.technologies
            }, l))],
        }), v.jsxs("div", {
            className: "about-experience-section",
            children: [v.jsx("h2", {
                className: "about-experience-heading",
                children: "Education"
            }), k.map((r,l)=>v.jsx(edd, {
                date: r.date,
                title: r.title,
                uni: r.uni,
                description: r.description
            }, l))],
        }), v.jsx("div", {
            className: "about-experience-section download-button",
            children: [v.jsx("p", {
                children: "Download my full CV"
            }), v.jsx("a", {
                children: [v.jsx(dw, {})]
            })]
        })]
    })
}
const ep = {
    title: "Writings",
    writings: [],
    // [{
    //     url: "https://www.google.it/search?sca_esv=14fbc76bdf925f77&sxsrf=ACQVn0_KhrG3RQKVp-JGrQeQsuq5EvNj2Q:1708185244448&q=cats&tbm=isch&source=lnms&sa=X&ved=2ahUKEwj4tNL13bKEAxXhVEEAHZkCD30Q0pQJegQIDRAB&biw=1135&bih=934&dpr=1",
    //     title: "Kitties Title",
    //     subtitle: "An article about kitties and how beautiful they are",
    //     date: "Oct 24, 2023",
    //     readMinutes: "2",
    //     coffe: "☕️"
    // }, {
    //     url: "https://www.google.it/search?sca_esv=14fbc76bdf925f77&sxsrf=ACQVn0_KhrG3RQKVp-JGrQeQsuq5EvNj2Q:1708185244448&q=cats&tbm=isch&source=lnms&sa=X&ved=2ahUKEwj4tNL13bKEAxXhVEEAHZkCD30Q0pQJegQIDRAB&biw=1135&bih=934&dpr=1",
    //     title: "Another Kitties Title",
    //     subtitle: "Another article about kitties and how beautiful they are",
    //     date: "Oct 24, 2023",
    //     readMinutes: "1",
    //     coffe: "☕️"
    // }]
};
function tp() {
    return v.jsxs("div", {
        className: "writings-container",
        children: [v.jsx("h2", {
            className: "writings-headline",
            children: "Some of my writings. Coming SOon...."
        }), v.jsx("div", {
            className: "writings-cards-container",
            children: ep.writings.map(e=>v.jsxs("a", {
                className: "writings-card",
                href: e.url,
                target: "_blank",
                children: [v.jsx("div", {
                    className: "writings-card-gardient"
                }), v.jsx("h3", {
                    className: "writings-card-title",
                    children: e.title
                }), v.jsxs("div", {
                    className: "writings-card-wrapper",
                    children: [v.jsx("span", {
                        children: e.date
                    }), " ", v.jsx("span", {
                        children: "•"
                    }), v.jsxs("div", {
                        className: "writings-card-wrapper-minutes",
                        children: [v.jsx("div", {
                            children: e.coffe
                        }), v.jsxs("div", {
                            children: [e.readMinutes, " min read"]
                        })]
                    })]
                }), v.jsxs("p", {
                    className: "writings-card-subtitle",
                    children: [" ", e.subtitle]
                })]
            }, e.title))
        })]
    })
}
var pc = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
  , Zu = He.createContext && He.createContext(pc)
  , dt = globalThis && globalThis.__assign || function() {
    return dt = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var l in t)
                Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l])
        }
        return e
    }
    ,
    dt.apply(this, arguments)
}
  , np = globalThis && globalThis.__rest || function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
            t.indexOf(r[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[l]) && (n[r[l]] = e[r[l]]);
    return n
}
;
function mc(e) {
    return e && e.map(function(t, n) {
        return He.createElement(t.tag, dt({
            key: n
        }, t.attr), mc(t.child))
    })
}
function Ot(e) {
    return function(t) {
        return He.createElement(rp, dt({
            attr: dt({}, e.attr)
        }, t), mc(e.child))
    }
}
function rp(e) {
    var t = function(n) {
        var r = e.attr, l = e.size, i = e.title, o = np(e, ["attr", "size", "title"]), u = l || n.size || "1em", s;
        return n.className && (s = n.className),
        e.className && (s = (s ? s + " " : "") + e.className),
        He.createElement("svg", dt({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, o, {
            className: s,
            style: dt(dt({
                color: e.color || n.color
            }, n.style), e.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg"
        }), i && He.createElement("title", null, i), e.children)
    };
    return Zu !== void 0 ? He.createElement(Zu.Consumer, null, function(n) {
        return t(n)
    }) : t(pc)
}
// function lp(e) {
//     return Ot({
//         tag: "svg",
//         attr: {
//             viewBox: "0 0 24 24",
//             fill: "none",
//             stroke: "currentColor",
//             strokeWidth: "2",
//             strokeLinecap: "round",
//             strokeLinejoin: "round"
//         },
//         child: [{
//             tag: "path",
//             attr: {
//                 d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
//             }
//         }, {
//             tag: "line",
//             attr: {
//                 x1: "16",
//                 y1: "8",
//                 x2: "2",
//                 y2: "22"
//             }
//         }, {
//             tag: "line",
//             attr: {
//                 x1: "17.5",
//                 y1: "15",
//                 x2: "9",
//                 y2: "15"
//             }
//         }]
//     })(e)
// }
function hc(e) {
    return Ot({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            }
        }]
    })(e)
}
function ip(e) {
    return Ot({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "rect",
            attr: {
                x: "2",
                y: "2",
                width: "20",
                height: "20",
                rx: "5",
                ry: "5"
            }
        }, {
            tag: "path",
            attr: {
                d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
            }
        }, {
            tag: "line",
            attr: {
                x1: "17.5",
                y1: "6.5",
                x2: "17.51",
                y2: "6.5"
            }
        }]
    })(e)
}
function op(e) {
    return Ot({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
            }
        }, {
            tag: "path",
            attr: {
                d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
            }
        }]
    })(e)
}
function up(e) {
    return Ot({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            }
        }, {
            tag: "rect",
            attr: {
                x: "2",
                y: "9",
                width: "4",
                height: "12"
            }
        }, {
            tag: "circle",
            attr: {
                cx: "4",
                cy: "4",
                r: "2"
            }
        }]
    })(e)
}

function dw(e) {
    return Ot({
        tag: "svg",
        attr: {
            width: "30px",
            height: "30px",
            viewBox: "0 0 24 24",
            fill: "#1C274C",
            xmlns: "http://www.w3.org/2000/svg"
        },
        child: [{
            tag: "path",
            attr: {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V12.1893L14.4697 10.4697C14.7626 10.1768 15.2374 10.1768 15.5303 10.4697C15.8232 10.7626 15.8232 11.2374 15.5303 11.5303L12.5303 14.5303C12.3897 14.671 12.1989 14.75 12 14.75C11.8011 14.75 11.6103 14.671 11.4697 14.5303L8.46967 11.5303C8.17678 11.2374 8.17678 10.7626 8.46967 10.4697C8.76256 10.1768 9.23744 10.1768 9.53033 10.4697L11.25 12.1893V7C11.25 6.58579 11.5858 6.25 12 6.25ZM8 16.25C7.58579 16.25 7.25 16.5858 7.25 17C7.25 17.4142 7.58579 17.75 8 17.75H16C16.4142 17.75 16.75 17.4142 16.75 17C16.75 16.5858 16.4142 16.25 16 16.25H8Z",
                fill: "var(--text-color)"
            }
        }]
    })(e)
}


function sp(e) {
    return Ot({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            }
        }, {
            tag: "polyline",
            attr: {
                points: "22,6 12,13 2,6"
            }
        }]
    })(e)
}
function Mp(e) {
    return Ot({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "line",
            attr: {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
            }
        }, {
            tag: "line",
            attr: {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
            }
        }]
    })(e)
}
const Ju = {
    title: "Projects",
    projects: [{
        name: "Project 1",
        live: "https://tic-tac-emoji.vercel.app",
        github: "https://github.com/mirayatech/tic-tac-emoji",
        languages: ["Tech1", "Tech2", "Tech3"]
    }, {
        name: "Project 2",
        live: "https://tic-tac-emoji.vercel.app",
        github: "https://github.com/mirayatech/tic-tac-emoji",
        languages: ["Tech5", "Tech6", "Tech7"]
    }]
};
// function ap() {
//     return v.jsxs("div", {
//         className: "projects-container",
//         children: [v.jsx("h2", {
//             className: "projects-headline",
//             children: Ju.title
//         }), v.jsx("div", {
//             className: "projects-wrapper",
//             children: Ju.projects.map(e=>v.jsxs("a", {
//                 href: e.github,
//                 className: "projects-card terminal",
//                 target: "_blank",
//                 children: [v.jsx("div", {
//                     className: "terminal-button",
//                     children: [v.jsx("div", {
//                         className: "red"
//                     }),v.jsx("div", {
//                         className: "yellow"
//                     }),v.jsx("div", {
//                         className: "green"
//                     }),]
//                 }),v.jsx("div", {
//                     className: "projects-card-gardient"
//                 }), v.jsxs("div", {
//                     className: "projects-card-links",
//                     children: [] // [v.jsx("a", {
//                     //     href: e.github,
//                     //     target: "_blank",
//                     //     children: v.jsx(hc, {})
//                     // }), v.jsx("a", {
//                     //     href: e.live,
//                     //     target: "_blank",
//                     //     children: v.jsx(op, {})
//                     // })]
//                 }), v.jsx("h3", {
//                     className: "projects-card-name",
//                     children:[] // e.name
//                 }), v.jsx("div", {
//                     className: "projects-card-languages",
//                     children: [] // e.languages.map(t=>v.jsx("span", {
//                         // children: t
//                     // }, t))
//                 })]
//             }, e.name))
//         })]
//     })
// }
function ap() {
    return v.jsxs("div", {
        className: "projects-container",
        children: [v.jsx("h2", {
            className: "projects-headline",
            children: Ju.title
        }), v.jsx("div", {
            className: "projects-wrapper",
            children: Ju.projects.map(e=>v.jsxs("a", {
                href: e.github,
                className: "projects-card",
                target: "_blank",
                children: [v.jsx("div", {
                    className: "bar",
                    children: [ v.jsx("div", {
                        className: " terminal-button red"
                    }),v.jsx("div", {
                        className: "terminal-button yellow"
                    }),v.jsx("div", {
                        className: "terminal-button green"
                    })]
                }), v.jsx("div", {
                    className: "screen",
                    children: [// v.jsx("div", {
                        //     className: "projects-card-gardient"
                        // }), 
                        v.jsxs("div", {
                            className: "projects-card-links",
                            children: [] // [v.jsx("a", {
                            //     href: e.github,
                            //     target: "_blank",
                            //     children: v.jsx(hc, {})
                            // }), v.jsx("a", {
                            //     href: e.live,
                            //     target: "_blank",
                            //     children: v.jsx(op, {})
                            // })]
                        }), v.jsx("h3", {
                            className: "projects-card-name",
                            children:[] // e.name
                        }), v.jsx("div", {
                            className: "projects-card-languages",
                            children: [] // e.languages.map(t=>v.jsx("span", {
                                // children: t
                            // }, t))
                        })]
                })]
            }, e.name))
        })]
    })
}
function cp() {
    return v.jsxs("footer", {
        className: "footer",
        children: [v.jsx("span", {
            children: "© 2024 Roberto Marsella - Camden Town, London - Last Update: 17 Feb 2024"
        }), v.jsxs("div", {
            className: "footer-social",
            children: [v.jsx("a", {
                href: "https://www.linkedin.com/in/roberto-marsella",
                target: "_blank",
                children: v.jsx(up, {})
            }), v.jsx("a", {
                href: "mailto:roberto.marsella@icloud.com",
                children: v.jsx(sp, {})
            }), v.jsx("a", {
                href: "https://www.instagram.com/_rob.marse_/",
                target: "_blank",
                children: v.jsx(ip, {})
            }), v.jsx("a", {
                href: "https://github.com/ROB-MRS",
                target: "_blank",
                children: v.jsx(hc, {})
            })]
        })]
    })
}
const fp = "/assets/images/background_image.webp";
function dp() {
    return v.jsxs("svg", {
        className: "hero-stars",
        xmlns: "http://www.w3.org/2000/svg",
        width: "1680",
        height: "730",
        viewBox: "0 0 1680 730",
        fill: "none",
        children: [v.jsx("circle", {
            cx: "0.6",
            cy: "0.6",
            r: "0.6",
            transform: "matrix(0.873077 0.487583 -0.78755 0.61625 429.154 175.316)",
            fill: "white"
        }), v.jsx("circle", {
            cx: "0.6",
            cy: "0.6",
            r: "0.6",
            transform: "matrix(0.994947 -0.100399 0.322552 0.946552 263.797 71.2188)",
            fill: "white"
        }), v.jsx("circle", {
            cx: "0.6",
            cy: "0.6",
            r: "0.6",
            transform: "matrix(0.994947 -0.100399 0.322552 0.946552 440 282.121)",
            fill: "white"
        }), v.jsx("circle", {
            cx: "0.6",
            cy: "0.6",
            r: "0.6",
            transform: "matrix(0.994947 -0.100399 0.322552 0.946552 410.404 338.926)",
            fill: "white"
        }), v.jsx("circle", {
            cx: "0.6",
            cy: "0.6",
            r: "0.6",
            transform: "matrix(0.994947 -0.100399 0.322552 0.946552 576 145.121)",
            fill: "white"
        }), v.jsx("circle", {
            cx: "0.6",
            cy: "0.6",
            r: "0.6",
            transform: "matrix(0.061383 -0.998114 0.99741 0.07192 961.715 604.32)",
            fill: "white"
        }), v.jsx("circle", {
            cx: "0.6",
            cy: "0.6",
            r: "0.6",
            transform: "matrix(0.322553 0.946552 -0.994947 0.100399 544.891 280.938)",
            fill: "white"
        }), v.jsx("circle", {
            cx: "0.6",
            cy: "0.6",
            r: "0.6",
            transform: "matrix(0.322553 0.946552 -0.994947 0.100399 1245.01 314.668)",
            fill: "white"
        }), v.jsx("circle", {
            cx: "0.6",
            cy: "0.6",
            r: "0.6",
            transform: "matrix(0.322553 0.946552 -0.994947 0.100399 989.111 172.809)",
            fill: "white"
        }), v.jsx("circle", {
            cx: "0.6",
            cy: "0.6",
            r: "0.6",
            transform: "matrix(0.322553 0.946552 -0.994947 0.100399 974.557 162.211)",
            fill: "white"
        }), v.jsx("circle", {
            cx: "0.6",
            cy: "0.6",
            r: "0.6",
            transform: "matrix(0.322553 0.946552 -0.994947 0.100399 861.078 260.352)",
            fill: "white"
        }), v.jsx("circle", {
            cx: "0.6",
            cy: "0.6",
            r: "0.6",
            transform: "matrix(-0.322553 -0.946552 0.994947 -0.100399 814.387 514.258)",
            fill: "white"
        }), v.jsx("circle", {
            cx: "0.6",
            cy: "0.6",
            r: "0.6",
            transform: "matrix(-0.322553 -0.946552 0.994947 -0.100399 995.66 552.828)",
            fill: "white"
        }), v.jsx("circle", {
            cx: "0.6",
            cy: "0.6",
            r: "0.6",
            transform: "matrix(-0.322553 -0.946552 0.994947 -0.100399 1154.39 545.258)",
            fill: "white"
        }), v.jsx("ellipse", {
            cx: "0.6",
            cy: "0.6",
            rx: "0.6",
            ry: "0.6",
            transform: "matrix(-0.95101 -0.309159 0.561017 -0.827804 280.908 307.363)",
            fill: "white"
        }), v.jsx("ellipse", {
            cx: "0.6",
            cy: "0.6",
            rx: "0.6",
            ry: "0.6",
            transform: "matrix(-0.95101 -0.309159 0.561017 -0.827804 601.275 539.539)",
            fill: "white"
        }), v.jsx("ellipse", {
            cx: "0.6",
            cy: "0.6",
            rx: "0.6",
            ry: "0.6",
            transform: "matrix(-0.95101 -0.309159 0.561017 -0.827804 250.141 326.566)",
            fill: "white"
        }), v.jsx("ellipse", {
            cx: "0.6",
            cy: "0.6",
            rx: "0.6",
            ry: "0.6",
            transform: "matrix(-0.95101 -0.309159 0.561017 -0.827804 1553.78 554.305)",
            fill: "white"
        }), v.jsx("ellipse", {
            cx: "0.6",
            cy: "0.6",
            rx: "0.6",
            ry: "0.6",
            transform: "matrix(-0.95101 -0.309159 0.561017 -0.827804 322.141 513.363)",
            fill: "white"
        }), v.jsx("ellipse", {
            cx: "0.6",
            cy: "0.6",
            rx: "0.6",
            ry: "0.6",
            transform: "matrix(-0.95101 -0.309159 0.561017 -0.827804 1504.14 366.363)",
            fill: "white"
        }), v.jsx("ellipse", {
            cx: "0.6",
            cy: "0.6",
            rx: "0.6",
            ry: "0.6",
            transform: "matrix(-0.95101 -0.309159 0.561017 -0.827804 1140.55 485.527)",
            fill: "white"
        }), v.jsx("ellipse", {
            cx: "0.6",
            cy: "0.6",
            rx: "0.6",
            ry: "0.6",
            transform: "matrix(-0.95101 -0.309159 0.561017 -0.827804 108.141 433.363)",
            fill: "white"
        }), v.jsx("ellipse", {
            cx: "0.6",
            cy: "0.6",
            rx: "0.6",
            ry: "0.6",
            transform: "matrix(-0.95101 -0.309159 0.561017 -0.827804 1285.14 263.363)",
            fill: "white"
        }), v.jsx("ellipse", {
            cx: "0.6",
            cy: "0.6",
            rx: "0.6",
            ry: "0.6",
            transform: "matrix(-0.95101 -0.309159 0.561017 -0.827804 1372.09 492.215)",
            fill: "white"
        }), v.jsx("ellipse", {
            cx: "0.6",
            cy: "0.6",
            rx: "0.6",
            ry: "0.6",
            transform: "matrix(-0.95101 -0.309159 0.561017 -0.827804 630.725 434.363)",
            fill: "white"
        }), v.jsx("ellipse", {
            cx: "0.6",
            cy: "0.6",
            rx: "0.6",
            ry: "0.6",
            transform: "matrix(-0.95101 -0.309159 0.561017 -0.827804 696.141 281.363)",
            fill: "white"
        }), v.jsx("ellipse", {
            cx: "0.6",
            cy: "0.6",
            rx: "0.6",
            ry: "0.6",
            transform: "matrix(-0.95101 -0.309159 0.561017 -0.827804 1343.31 263.105)",
            fill: "white"
        }), v.jsx("ellipse", {
            cx: "0.6",
            cy: "0.6",
            rx: "0.6",
            ry: "0.6",
            transform: "matrix(-0.95101 -0.309159 0.561017 -0.827804 320.141 360.363)",
            fill: "white"
        }), v.jsx("ellipse", {
            cx: "0.6",
            cy: "0.6",
            rx: "0.6",
            ry: "0.6",
            transform: "matrix(-0.95101 -0.309159 0.561017 -0.827804 1086.54 295.914)",
            fill: "white"
        }), v.jsx("circle", {
            cx: "0.6",
            cy: "0.6",
            r: "0.6",
            transform: "matrix(-0.958827 0.28399 -0.613701 -0.789538 1308.95 468.746)",
            fill: "white"
        }), v.jsx("circle", {
            cx: "0.6",
            cy: "0.6",
            r: "0.6",
            transform: "matrix(-0.958827 0.28399 -0.613701 -0.789538 1327.66 447.223)",
            fill: "white"
        }), v.jsx("circle", {
            cx: "0.6",
            cy: "0.6",
            r: "0.6",
            transform: "matrix(-0.958827 0.28399 -0.613701 -0.789538 1469.98 192.406)",
            fill: "white"
        }), v.jsx("circle", {
            cx: "0.6",
            cy: "0.6",
            r: "0.6",
            transform: "matrix(-0.958827 0.28399 -0.613701 -0.789538 586.887 448.488)",
            fill: "white"
        }),
        v.jsx("circle", {
            cx: "0.6",
            cy: "0.6",
            r: "0.6",
            transform: "matrix(-0.958827 0.28399 -0.613701 -0.789538 100.123 200.456)",
            fill: "white"
        }),
        v.jsx("circle", {
            cx: "0.6",
            cy: "0.6",
            r: "0.6",
            transform: "matrix(-0.958827 0.28399 -0.613701 -0.789538 400.789 300.123)",
            fill: "white"
        }),
        // Add more elements here with different random positions
        v.jsx("circle", {
            cx: "0.6",
            cy: "0.6",
            r: "0.6",
            transform: "matrix(-0.958827 0.28399 -0.613701 -0.789538 700.456 500.789)",
            fill: "white"
        }),
        v.jsx("circle", {
            cx: "0.6",
            cy: "0.6",
            r: "0.6",
            transform: "matrix(-0.958827 0.28399 -0.613701 -0.789538 900.123 600.456)",
            fill: "white"
        })]
    })
}
function pp() {
    return v.jsxs("div", {
        className: "hero",
        children: [v.jsx(dp, {}), v.jsx("img", {
            src: fp,
            className: "img"
        }), v.jsxs("div", {
            className: "hero-wrapper",
            children: [v.jsxs("h1", {
                className: "hero-wrapper-title",
                children: [v.jsx("span", {
                    children: "Hello. I'm Roberto."
                }), v.jsx("span", {
                    children: "A Software Engineer."
                })]
            }), v.jsx("p", {
                className: "hero-wrapper-description",
                children: "I'm passionate about something....."
            })]
        })]
    })
}
const mp = P.createContext(null)
  , hp = typeof document < "u"
  , vc = hp ? P.useLayoutEffect : P.useEffect
  , vp = P.createContext({});
function yp(e) {
    const t = P.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const gp = e=>e;
class qu {
    constructor() {
        this.order = [],
        this.scheduled = new Set
    }
    add(t) {
        if (!this.scheduled.has(t))
            return this.scheduled.add(t),
            this.order.push(t),
            !0
    }
    remove(t) {
        const n = this.order.indexOf(t);
        n !== -1 && (this.order.splice(n, 1),
        this.scheduled.delete(t))
    }
    clear() {
        this.order.length = 0,
        this.scheduled.clear()
    }
}
function wp(e) {
    let t = new qu
      , n = new qu
      , r = 0
      , l = !1
      , i = !1;
    const o = new WeakSet
      , u = {
        schedule: (s,c=!1,h=!1)=>{
            const p = h && l
              , m = p ? t : n;
            return c && o.add(s),
            m.add(s) && p && l && (r = t.order.length),
            s
        }
        ,
        cancel: s=>{
            n.remove(s),
            o.delete(s)
        }
        ,
        process: s=>{
            if (l) {
                i = !0;
                return
            }
            if (l = !0,
            [t,n] = [n, t],
            n.clear(),
            r = t.order.length,
            r)
                for (let c = 0; c < r; c++) {
                    const h = t.order[c];
                    h(s),
                    o.has(h) && (u.schedule(h),
                    e())
                }
            l = !1,
            i && (i = !1,
            u.process(s))
        }
    };
    return u
}
const Sr = ["prepare", "read", "update", "preRender", "render", "postRender"]
  , kp = 40;
function xp(e, t) {
    let n = !1
      , r = !0;
    const l = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , i = Sr.reduce((p,m)=>(p[m] = wp(()=>n = !0),
    p), {})
      , o = p=>i[p].process(l)
      , u = ()=>{
        const p = performance.now();
        n = !1,
        l.delta = r ? 1e3 / 60 : Math.max(Math.min(p - l.timestamp, kp), 1),
        l.timestamp = p,
        l.isProcessing = !0,
        Sr.forEach(o),
        l.isProcessing = !1,
        n && t && (r = !1,
        e(u))
    }
      , s = ()=>{
        n = !0,
        r = !0,
        l.isProcessing || e(u)
    }
    ;
    return {
        schedule: Sr.reduce((p,m)=>{
            const w = i[m];
            return p[m] = (k,x=!1,O=!1)=>(n || s(),
            w.schedule(k, x, O)),
            p
        }
        , {}),
        cancel: p=>Sr.forEach(m=>i[m].cancel(p)),
        state: l,
        steps: i
    }
}
const {schedule: Sp, cancel: Op, state: Ip, steps: Fp} = xp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : gp, !0);
function yc() {
    const e = P.useRef(!1);
    return vc(()=>(e.current = !0,
    ()=>{
        e.current = !1
    }
    ), []),
    e
}
function Ep() {
    const e = yc()
      , [t,n] = P.useState(0)
      , r = P.useCallback(()=>{
        e.current && n(t + 1)
    }
    , [t]);
    return [P.useCallback(()=>Sp.postRender(r), [r]), t]
}
class Cp extends P.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0,
            r.width = n.offsetWidth || 0,
            r.top = n.offsetTop,
            r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function _p({children: e, isPresent: t}) {
    const n = P.useId()
      , r = P.useRef(null)
      , l = P.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    });
    return P.useInsertionEffect(()=>{
        const {width: i, height: o, top: u, left: s} = l.current;
        if (t || !r.current || !i || !o)
            return;
        r.current.dataset.motionPopId = n;
        const c = document.createElement("style");
        return document.head.appendChild(c),
        c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${o}px !important;
            top: ${u}px !important;
            left: ${s}px !important;
          }
        `),
        ()=>{
            document.head.removeChild(c)
        }
    }
    , [t]),
    P.createElement(Cp, {
        isPresent: t,
        childRef: r,
        sizeRef: l
    }, P.cloneElement(e, {
        ref: r
    }))
}
const Zl = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: l, presenceAffectsLayout: i, mode: o})=>{
    const u = yp(Np)
      , s = P.useId()
      , c = P.useMemo(()=>({
        id: s,
        initial: t,
        isPresent: n,
        custom: l,
        onExitComplete: h=>{
            u.set(h, !0);
            for (const p of u.values())
                if (!p)
                    return;
            r && r()
        }
        ,
        register: h=>(u.set(h, !1),
        ()=>u.delete(h))
    }), i ? void 0 : [n]);
    return P.useMemo(()=>{
        u.forEach((h,p)=>u.set(p, !1))
    }
    , [n]),
    P.useEffect(()=>{
        !n && !u.size && r && r()
    }
    , [n]),
    o === "popLayout" && (e = P.createElement(_p, {
        isPresent: n
    }, e)),
    P.createElement(mp.Provider, {
        value: c
    }, e)
}
;
function Np() {
    return new Map
}
function jp(e) {
    return P.useEffect(()=>()=>e(), [])
}
const Ft = e=>e.key || "";
function Pp(e, t) {
    e.forEach(n=>{
        const r = Ft(n);
        t.set(r, n)
    }
    )
}
function zp(e) {
    const t = [];
    return P.Children.forEach(e, n=>{
        P.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const Lp = ({children: e, custom: t, initial: n=!0, onExitComplete: r, exitBeforeEnter: l, presenceAffectsLayout: i=!0, mode: o="sync"})=>{
    const u = P.useContext(vp).forceRender || Ep()[0]
      , s = yc()
      , c = zp(e);
    let h = c;
    const p = P.useRef(new Map).current
      , m = P.useRef(h)
      , w = P.useRef(new Map).current
      , k = P.useRef(!0);
    if (vc(()=>{
        k.current = !1,
        Pp(c, w),
        m.current = h
    }
    ),
    jp(()=>{
        k.current = !0,
        w.clear(),
        p.clear()
    }
    ),
    k.current)
        return P.createElement(P.Fragment, null, h.map(a=>P.createElement(Zl, {
            key: Ft(a),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: i,
            mode: o
        }, a)));
    h = [...h];
    const x = m.current.map(Ft)
      , O = c.map(Ft)
      , d = x.length;
    for (let a = 0; a < d; a++) {
        const f = x[a];
        O.indexOf(f) === -1 && !p.has(f) && p.set(f, void 0)
    }
    return o === "wait" && p.size && (h = []),
    p.forEach((a,f)=>{
        if (O.indexOf(f) !== -1)
            return;
        const y = w.get(f);
        if (!y)
            return;
        const S = x.indexOf(f);
        let _ = a;
        if (!_) {
            const N = ()=>{
                w.delete(f),
                p.delete(f);
                const j = m.current.findIndex(A=>A.key === f);
                if (m.current.splice(j, 1),
                !p.size) {
                    if (m.current = c,
                    s.current === !1)
                        return;
                    u(),
                    r && r()
                }
            }
            ;
            _ = P.createElement(Zl, {
                key: Ft(y),
                isPresent: !1,
                onExitComplete: N,
                custom: t,
                presenceAffectsLayout: i,
                mode: o
            }, y),
            p.set(f, _)
        }
        h.splice(S, 0, _)
    }
    ),
    h = h.map(a=>{
        const f = a.key;
        return p.has(f) ? a : P.createElement(Zl, {
            key: Ft(a),
            isPresent: !0,
            presenceAffectsLayout: i,
            mode: o
        }, a)
    }
    ),
    P.createElement(P.Fragment, null, p.size ? h : h.map(a=>P.cloneElement(a)))
};
function Rp() {
    const [e,t] = P.useState(!1)
      , n = P.useRef(null)
      , r = P.useRef(null)
      , l = P.useRef(null)
      , i = P.useRef(null)
      , o = u=>{
        var s;
        window.scrollTo({
            top: ((s = u.current) == null ? void 0 : s.offsetTop) || 0,
            behavior: "smooth"
        })
    }
    ;
    return v.jsxs(v.Fragment, {
        children: [v.jsx(Zd, {
            handleOnClick: ()=>t(!e),
            scrollToSection: o,
            homeRef: n,
            aboutRef: r,
            projectsRef: l,
            writingsRef: i
        }), v.jsx("div", {
            ref: n,
            children: v.jsx(pp, {})
        }), v.jsxs("main", {
            className: "main",
            children: [v.jsx("div", {
                ref: r,
                children: v.jsx(bd, {})
            }), v.jsx("div", {
                ref: l,
                children: v.jsx(ap, {})
            }), v.jsx("div", {
                ref: i,
                children: v.jsx(tp, {})
            }), v.jsx(cp, {}), e && v.jsx(P.Suspense, {
                children: v.jsx(Lp, {
                    children: v.jsx(Tp, {
                        handleOnClick: ()=>t(!e)
                    })
                })
            })]
        })]
    })
}
Jl.createRoot(document.getElementById("root")).render(v.jsx(Rp, {}));
export {Mp as F, vp as L, mp as P, He as R, yp as a, Ip as b, Op as c, Sp as f, hp as i, v as j, gp as n, P as r, Fp as s, vc as u};
