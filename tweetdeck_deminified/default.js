function ScribeTransport(e) {
    this.SESSION_BUFFER_KEY = "ScribeTransport", this.SCRIBE_API_ENDPOINT = "/i/jot", this.options = {}, e && (this.updateOptions(e), this.registerEventHandlers(e))
}

function ClientEvent(e) {
    this.scribeContext = {}, this.scribeData = {}, this.scribe = function (t, i) {
        var s = e || window.scribeTransport;
        if (!s) throw Error("You must create a global scribeTransport variable or pass one into this constructor.");
        if (!t || "object" != typeof t || i && "object" != typeof i) throw Error("Invalid terms or data hash argument when calling ClientEvent.scribe().");
        if (this.scribeContext) {
            var n = "function" == typeof this.scribeContext ? this.scribeContext() : this.scribeContext;
            t = $.extend({}, n, t)
        }
        for (var r in t) t[r] = t[r] && ("" + t[r]).toLowerCase().replace(/_?[^a-z0-9_]+_?/g, "_");
        s.options.debug && $.each(["client", "action"], function (e, i) {
            if (!t[i]) throw Error("You must specify a " + i + " term in your client_event.")
        });
        var i = $.extend({}, i);
        if (this.scribeData) {
            var o = "function" == typeof this.scribeData ? this.scribeData() : this.scribeData;
            i = $.extend({}, o, i)
        }
        i.event_namespace = t, i.triggered_on = i.triggered_on || +new Date, i.format_version = i.format_version || 2, s.send(i, "client_event")
    }
}
window.Modernizr = function (e, t, i) {
    function s(e) {
        y.cssText = e
    }

    function n(e, t) {
        return s(w.join(e + ";") + (t || ""))
    }

    function r(e, t) {
        return typeof e === t
    }

    function o(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function a(e, t) {
        for (var s in e) {
            var n = e[s];
            if (!o(n, "-") && y[n] !== i) return "pfx" == t ? n : !0
        }
        return !1
    }

    function c(e, t, s) {
        for (var n in e) {
            var o = t[e[n]];
            if (o !== i) return s === !1 ? e[n] : r(o, "function") ? o.bind(s || t) : o
        }
        return !1
    }

    function l(e, t, i) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            n = (e + " " + S.join(s + " ") + s).split(" ");
        return r(t, "string") || r(t, "undefined") ? a(n, t) : (n = (e + " " + E.join(s + " ") + s).split(" "), c(n, t, i))
    }

    function u() {
        m.input = function (i) {
            for (var s = 0, n = i.length; n > s; s++) I[i[s]] = !! (i[s] in _);
            return I.list && (I.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)), I
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), m.inputtypes = function (e) {
            for (var s, n, r, o = 0, a = e.length; a > o; o++) _.setAttribute("type", n = e[o]), s = "text" !== _.type, s && (_.value = D, _.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(n) && _.style.WebkitAppearance !== i ? (g.appendChild(_), r = t.defaultView, s = r.getComputedStyle && "textfield" !== r.getComputedStyle(_, null).WebkitAppearance && 0 !== _.offsetHeight, g.removeChild(_)) : /^(search|tel)$/.test(n) || (s = /^(url|email)$/.test(n) ? _.checkValidity && _.checkValidity() === !1 : _.value != D)), A[e[o]] = !! s;
            return A
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var d, h, p = "2.6.2",
        m = {}, f = !0,
        g = t.documentElement,
        T = "modernizr",
        v = t.createElement(T),
        y = v.style,
        _ = t.createElement("input"),
        D = ":)",
        b = {}.toString,
        w = " -webkit- -moz- -o- -ms- ".split(" "),
        C = "Webkit Moz O ms",
        S = C.split(" "),
        E = C.toLowerCase().split(" "),
        k = {
            svg: "http://www.w3.org/2000/svg"
        }, x = {}, A = {}, I = {}, M = [],
        R = M.slice,
        L = function (e, i, s, n) {
            var r, o, a, c, l = t.createElement("div"),
                u = t.body,
                d = u || t.createElement("body");
            if (parseInt(s, 10))
                for (; s--;) a = t.createElement("div"), a.id = n ? n[s] : T + (s + 1), l.appendChild(a);
            return r = ["&#173;", '<style id="s', T, '">', e, "</style>"].join(""), l.id = T, (u ? l : d).innerHTML += r, d.appendChild(l), u || (d.style.background = "", d.style.overflow = "hidden", c = g.style.overflow, g.style.overflow = "hidden", g.appendChild(d)), o = i(l, e), u ? l.parentNode.removeChild(l) : (d.parentNode.removeChild(d), g.style.overflow = c), !! o
        }, N = function (t) {
            var i = e.matchMedia || e.msMatchMedia;
            if (i) return i(t).matches;
            var s;
            return L("@media " + t + " { #" + T + " { position: absolute; } }", function (t) {
                s = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
            }), s
        }, F = function () {
            function e(e, n) {
                n = n || t.createElement(s[e] || "div"), e = "on" + e;
                var o = e in n;
                return o || (n.setAttribute || (n = t.createElement("div")), n.setAttribute && n.removeAttribute && (n.setAttribute(e, ""), o = r(n[e], "function"), r(n[e], "undefined") || (n[e] = i), n.removeAttribute(e))), n = null, o
            }
            var s = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return e
        }(),
        $ = {}.hasOwnProperty;
    h = r($, "undefined") || r($.call, "undefined") ? function (e, t) {
        return t in e && r(e.constructor.prototype[t], "undefined")
    } : function (e, t) {
        return $.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError;
        var i = R.call(arguments, 1),
            s = function () {
                if (this instanceof s) {
                    var n = function () {};
                    n.prototype = t.prototype;
                    var r = new n,
                        o = t.apply(r, i.concat(R.call(arguments)));
                    return Object(o) === o ? o : r
                }
                return t.apply(e, i.concat(R.call(arguments)))
            };
        return s
    }), x.flexbox = function () {
        return l("flexWrap")
    }, x.flexboxlegacy = function () {
        return l("boxDirection")
    }, x.canvas = function () {
        var e = t.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }, x.canvastext = function () {
        return !(!m.canvas || !r(t.createElement("canvas").getContext("2d").fillText, "function"))
    }, x.webgl = function () {
        return !!e.WebGLRenderingContext
    }, x.touch = function () {
        var i;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? i = !0 : L(["@media (", w.join("touch-enabled),("), T, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
            i = 9 === e.offsetTop
        }), i
    }, x.geolocation = function () {
        return "geolocation" in navigator
    }, x.postmessage = function () {
        return !!e.postMessage
    }, x.websqldatabase = function () {
        return !!e.openDatabase
    }, x.indexedDB = function () {
        return !!l("indexedDB", e)
    }, x.hashchange = function () {
        return F("hashchange", e) && (t.documentMode === i || t.documentMode > 7)
    }, x.history = function () {
        return !(!e.history || !history.pushState)
    }, x.draganddrop = function () {
        var e = t.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e
    }, x.websockets = function () {
        return "WebSocket" in e || "MozWebSocket" in e
    }, x.rgba = function () {
        return s("background-color:rgba(150,255,150,.5)"), o(y.backgroundColor, "rgba")
    }, x.hsla = function () {
        return s("background-color:hsla(120,40%,100%,.5)"), o(y.backgroundColor, "rgba") || o(y.backgroundColor, "hsla")
    }, x.multiplebgs = function () {
        return s("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(y.background)
    }, x.backgroundsize = function () {
        return l("backgroundSize")
    }, x.borderimage = function () {
        return l("borderImage")
    }, x.borderradius = function () {
        return l("borderRadius")
    }, x.boxshadow = function () {
        return l("boxShadow")
    }, x.textshadow = function () {
        return "" === t.createElement("div").style.textShadow
    }, x.opacity = function () {
        return n("opacity:.55"), /^0.55$/.test(y.opacity)
    }, x.cssanimations = function () {
        return l("animationName")
    }, x.csscolumns = function () {
        return l("columnCount")
    }, x.cssgradients = function () {
        var e = "background-image:",
            t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            i = "linear-gradient(left top,#9f9, white);";
        return s((e + "-webkit- ".split(" ").join(t + e) + w.join(i + e)).slice(0, -e.length)), o(y.backgroundImage, "gradient")
    }, x.cssreflections = function () {
        return l("boxReflect")
    }, x.csstransforms = function () {
        return !!l("transform")
    }, x.csstransforms3d = function () {
        var e = !! l("perspective");
        return e && "webkitPerspective" in g.style && L("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (t) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }), e
    }, x.csstransitions = function () {
        return l("transition")
    }, x.fontface = function () {
        var e;
        return L('@font-face {font-family:"font";src:url("https://")}', function (i, s) {
            var n = t.getElementById("smodernizr"),
                r = n.sheet || n.styleSheet,
                o = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : "";
            e = /src/i.test(o) && 0 === o.indexOf(s.split(" ")[0])
        }), e
    }, x.generatedcontent = function () {
        var e;
        return L(["#", T, "{font:0/0 a}#", T, ':after{content:"', D, '";visibility:hidden;font:3px/1 a}'].join(""), function (t) {
            e = t.offsetHeight >= 3
        }), e
    }, x.video = function () {
        var e = t.createElement("video"),
            i = !1;
        try {
            (i = !! e.canPlayType) && (i = new Boolean(i), i.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), i.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), i.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (s) {}
        return i
    }, x.audio = function () {
        var e = t.createElement("audio"),
            i = !1;
        try {
            (i = !! e.canPlayType) && (i = new Boolean(i), i.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), i.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), i.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), i.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (s) {}
        return i
    }, x.localstorage = function () {
        try {
            return localStorage.setItem(T, T), localStorage.removeItem(T), !0
        } catch (e) {
            return !1
        }
    }, x.sessionstorage = function () {
        try {
            return sessionStorage.setItem(T, T), sessionStorage.removeItem(T), !0
        } catch (e) {
            return !1
        }
    }, x.webworkers = function () {
        return !!e.Worker
    }, x.applicationcache = function () {
        return !!e.applicationCache
    }, x.svg = function () {
        return !!t.createElementNS && !! t.createElementNS(k.svg, "svg").createSVGRect
    }, x.inlinesvg = function () {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == k.svg
    }, x.smil = function () {
        return !!t.createElementNS && /SVGAnimate/.test(b.call(t.createElementNS(k.svg, "animate")))
    }, x.svgclippaths = function () {
        return !!t.createElementNS && /SVGClipPath/.test(b.call(t.createElementNS(k.svg, "clipPath")))
    };
    for (var O in x) h(x, O) && (d = O.toLowerCase(), m[d] = x[O](), M.push((m[d] ? "" : "no-") + d));
    return m.input || u(), m.addTest = function (e, t) {
        if ("object" == typeof e)
            for (var s in e) h(e, s) && m.addTest(s, e[s]);
        else {
            if (e = e.toLowerCase(), m[e] !== i) return m;
            t = "function" == typeof t ? t() : t, f !== i && f && (g.className += " " + (t ? "" : "no-") + e), m[e] = t
        }
        return m
    }, s(""), v = _ = null,
    function (e, t) {
        function s(e, t) {
            var i = e.createElement("p"),
                s = e.getElementsByTagName("head")[0] || e.documentElement;
            return i.innerHTML = "x<style>" + t + "</style>", s.insertBefore(i.lastChild, s.firstChild)
        }

        function n() {
            var e = v.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function r(e) {
            var t = T[e[f]];
            return t || (t = {}, g++, e[f] = g, T[g] = t), t
        }

        function o(e, i, s) {
            if (i || (i = t), d) return i.createElement(e);
            s || (s = r(i));
            var n;
            return n = s.cache[e] ? s.cache[e].cloneNode() : m.test(e) ? (s.cache[e] = s.createElem(e)).cloneNode() : s.createElem(e), n.canHaveChildren && !p.test(e) ? s.frag.appendChild(n) : n
        }

        function a(e, i) {
            if (e || (e = t), d) return e.createDocumentFragment();
            i = i || r(e);
            for (var s = i.frag.cloneNode(), o = 0, a = n(), c = a.length; c > o; o++) s.createElement(a[o]);
            return s
        }

        function c(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (i) {
                return v.shivMethods ? o(i, e, t) : t.createElem(i)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/\w+/g, function (e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(v, t.frag)
        }

        function l(e) {
            e || (e = t);
            var i = r(e);
            return !v.shivCSS || u || i.hasCSS || (i.hasCSS = !! s(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), d || c(e, i), e
        }
        var u, d, h = e.html5 || {}, p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            m = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            f = "_html5shiv",
            g = 0,
            T = {};
        (function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", u = "hidden" in e, d = 1 == e.childNodes.length || function () {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return e.cloneNode === i || e.createDocumentFragment === i || e.createElement === i
                }()
            } catch (s) {
                u = !0, d = !0
            }
        })();
        var v = {
            elements: h.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: h.shivCSS !== !1,
            supportsUnknownElements: d,
            shivMethods: h.shivMethods !== !1,
            type: "default",
            shivDocument: l,
            createElement: o,
            createDocumentFragment: a
        };
        e.html5 = v, l(t)
    }(this, t), m._version = p, m._prefixes = w, m._domPrefixes = E, m._cssomPrefixes = S, m.mq = N, m.hasEvent = F, m.testProp = function (e) {
        return a([e])
    }, m.testAllProps = l, m.testStyles = L, m.prefixed = function (e, t, i) {
        return t ? l(e, t, i) : l(e, "pfx")
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + M.join(" ") : ""), m
}(this, this.document), window.console || (window.console = {
    log: function () {}
});
var TD = {
    storage: {},
    core: {},
    net: {},
    mustaches: "undefined" == typeof TD_mustaches ? {} : TD_mustaches,
    templates: {},
    components: {},
    services: {},
    controller: {
        auth: {}
    },
    vo: {},
    ui: {},
    sync: {},
    cache: {}
};
TD.buildID = "3c3082142de77589a69b60e37cfe0f2289ed9415", TD.buildIDShort = "3c30821", TD.version = "3.2.4", TD.config = {
    api_root: "https://web.tweetdeck.com",
    td_create_key: "WRaMQNHU2Jy51bhFEL3C",
    td_create_secret: "MiLkmD1t1xlZqKoLLY8ScxX5gwpOQsjBopZcV4KLcuo=",
    client_name: "blackbird",
    debug_menu: !1,
    touchdeck: !0,
    sync_name: "blackbird"
}, TD.i = function () {
    var e = /[^A-Za-z0-9_]/g,
        t = {}, i = TD.config.i18n_test_length_ratio || .2,
        s = TD.config.i18n_test_padding_char || "d";
    return function (n, r, o) {
        var a, c, l;
        return "string" == typeof n && (n = {
            text: n
        }), "en_US" === TD.util.i18n.getLocale() ? c = n.text : (a = t[n.text], void 0 === a && (a = n.text.replace(e, ""), t[n.text] = a), c = TD.util.i18n.getMessage(a) || n.text), o || (c = TD.ui.template.toHtml(c, r)), TD.config.i18n_test && (l = Math.round(c.length * i), c += Array(l + 1).join(s)), c
    }
}();
var Hogan = {};
(function (e, t) {
    function i(e, t, i) {
        var s;
        return t && "object" == typeof t && (null != t[e] ? s = t[e] : i && t.get && "function" == typeof t.get && (s = t.get(e))), s
    }

    function s(e, t, i, s) {
        function n() {}

        function r() {}
        n.prototype = e, r.prototype = e.subs;
        var o, a = new n;
        a.subs = new r, a.subsText = {}, a.ib();
        for (o in t) a.subs[o] = t[o], a.subsText[o] = s;
        for (o in i) a.partials[o] = i[o];
        return a
    }

    function n(e) {
        return (null === e || void 0 === e ? "" : e) + ""
    }

    function r(e) {
        return e = n(e), d.test(e) ? e.replace(o, "&amp;").replace(a, "&lt;").replace(c, "&gt;").replace(l, "&#39;").replace(u, "&quot;") : e
    }
    e.Template = function (e, t, i, s) {
        e = e || {}, this.r = e.code || this.r, this.c = i, this.options = s || {}, this.text = t || "", this.partials = e.partials || {}, this.subs = e.subs || {}, this.ib()
    }, e.Template.prototype = {
        r: function () {
            return ""
        },
        v: r,
        t: n,
        render: function (e, t, i) {
            return this.ri([e], t || {}, i)
        },
        ri: function (e, t, i) {
            return this.r(e, t, i)
        },
        ep: function (e, t) {
            var i = this.partials[e],
                n = t[i.name];
            if (i.instance && i.base == n) return i.instance;
            if ("string" == typeof n) {
                if (!this.c) throw Error("No compiler available.");
                n = this.c.compile(n, this.options)
            }
            return n ? (this.partials[e].base = n, i.subs && (void 0 === this.activeSub && (t.stackText = this.text), n = s(n, i.subs, i.partials, t.stackText || this.text)), this.partials[e].instance = n, n) : null
        },
        rp: function (e, t, i, s) {
            var n = this.ep(e, i);
            return n ? n.ri(t, i, s) : ""
        },
        rs: function (e, t, i) {
            var s = e[e.length - 1];
            if (!h(s)) return i(e, t, this), void 0;
            for (var n = 0; s.length > n; n++) e.push(s[n]), i(e, t, this), e.pop()
        },
        s: function (e, t, i, s, n, r, o) {
            var a;
            return h(e) && 0 === e.length ? !1 : ("function" == typeof e && (e = this.ms(e, t, i, s, n, r, o)), a = !! e, !s && a && t && t.push("object" == typeof e ? e : t[t.length - 1]), a)
        },
        d: function (e, t, s, n) {
            var r, o = e.split("."),
                a = this.f(o[0], t, s, n),
                c = this.options.modelGet,
                l = null;
            if ("." === e && h(t[t.length - 2])) a = t[t.length - 1];
            else
                for (var u = 1; o.length > u; u++) r = i(o[u], a, c), null != r ? (l = a, a = r) : a = "";
            return n && !a ? !1 : (n || "function" != typeof a || (t.push(l), a = this.mv(a, t, s), t.pop()), a)
        },
        f: function (e, t, s, n) {
            for (var r = !1, o = null, a = !1, c = this.options.modelGet, l = t.length - 1; l >= 0; l--)
                if (o = t[l], r = i(e, o, c), null != r) {
                    a = !0;
                    break
                }
            return a ? (n || "function" != typeof r || (r = this.mv(r, t, s)), r) : n ? !1 : ""
        },
        ls: function (e, t, i, s, r) {
            var o = this.options.delimiters;
            return this.options.delimiters = r, this.b(this.ct(n(e.call(t, s)), t, i)), this.options.delimiters = o, !1
        },
        ct: function (e, t, i) {
            if (this.options.disableLambda) throw Error("Lambda features disabled.");
            return this.c.compile(e, this.options).render(t, i)
        },
        b: t ? function (e) {
            this.buf.push(e)
        } : function (e) {
            this.buf += e
        },
        fl: t ? function () {
            var e = this.buf.join("");
            return this.buf = [], e
        } : function () {
            var e = this.buf;
            return this.buf = "", e
        },
        ib: function () {
            this.buf = t ? [] : ""
        },
        ms: function (e, t, i, s, n, r, o) {
            var a, c = t[t.length - 1],
                l = e.call(c);
            return "function" == typeof l ? s ? !0 : (a = this.activeSub && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(l, c, i, a.substring(n, r), o)) : l
        },
        mv: function (e, t, i) {
            var s = t[t.length - 1],
                r = e.call(s);
            return "function" == typeof r ? this.ct(n(r.call(s)), s, i) : r
        },
        sub: function (e, t, i, s) {
            var n = this.subs[e];
            n && (this.activeSub = e, n(t, i, this, s), this.activeSub = !1)
        }
    };
    var o = /&/g,
        a = /</g,
        c = />/g,
        l = /\'/g,
        u = /\"/g,
        d = /[&<>\"\']/,
        h = Array.isArray || function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
})("undefined" != typeof exports ? exports : Hogan),
function (e) {
    function t(e) {
        "}" === e.n.substr(e.n.length - 1) && (e.n = e.n.substring(0, e.n.length - 1))
    }

    function i(e) {
        return e.trim ? e.trim() : e.replace(/^\s*|\s*$/g, "")
    }

    function s(e, t, i) {
        if (t.charAt(i) != e.charAt(0)) return !1;
        for (var s = 1, n = e.length; n > s; s++)
            if (t.charAt(i + s) != e.charAt(s)) return !1;
        return !0
    }

    function n(t, i, s, a) {
        var c = [],
            l = null,
            u = null,
            d = null;
        for (u = s[s.length - 1]; t.length > 0;) {
            if (d = t.shift(), u && "<" == u.tag && !(d.tag in y)) throw Error("Illegal content in < super tag.");
            if (e.tags[d.tag] <= e.tags.$ || r(d, a)) s.push(d), d.nodes = n(t, d.tag, s, a);
            else {
                if ("/" == d.tag) {
                    if (0 === s.length) throw Error("Closing tag without opener: /" + d.n);
                    if (l = s.pop(), d.n != l.n && !o(d.n, l.n, a)) throw Error("Nesting error: " + l.n + " vs. " + d.n);
                    return l.end = d.i, c
                }
                "\n" == d.tag && (d.last = 0 == t.length || "\n" == t[0].tag)
            }
            c.push(d)
        }
        if (s.length > 0) throw Error("missing closing tag: " + s.pop().n);
        return c
    }

    function r(e, t) {
        for (var i = 0, s = t.length; s > i; i++)
            if (t[i].o == e.n) return e.tag = "#", !0
    }

    function o(e, t, i) {
        for (var s = 0, n = i.length; n > s; s++)
            if (i[s].c == e && i[s].o == t) return !0
    }

    function a(e) {
        var t = [];
        for (var i in e) t.push('"' + l(i) + '": function(c,p,t,i) {' + e[i] + "}");
        return "{ " + t.join(",") + " }"
    }

    function c(e) {
        var t = [];
        for (var i in e.partials) t.push('"' + l(i) + '":{name:"' + l(e.partials[i].name) + '", ' + c(e.partials[i]) + "}");
        return "partials: {" + t.join(",") + "}, subs: " + a(e.subs)
    }

    function l(e) {
        return e.replace(v, "\\\\").replace(f, '\\"').replace(g, "\\n").replace(T, "\\r")
    }

    function u(e) {
        return~ e.indexOf(".") ? "d" : "f"
    }

    function d(e, t) {
        var i = "<" + (t.prefix || ""),
            s = i + e.n + _++;
        return t.partials[s] = {
            name: e.n,
            partials: {}
        }, t.code += 't.b(t.rp("' + l(s) + '",c,p,"' + (e.indent || "") + '"));', s
    }

    function h(e, t) {
        t.code += "t.b(t.t(t." + u(e.n) + '("' + l(e.n) + '",c,p,0)));'
    }

    function p(e) {
        return "t.b(" + e + ");"
    }
    var m = /\S/,
        f = /\"/g,
        g = /\n/g,
        T = /\r/g,
        v = /\\/g;
    e.tags = {
        "#": 1,
        "^": 2,
        "<": 3,
        $: 4,
        "/": 5,
        "!": 6,
        ">": 7,
        "=": 8,
        _v: 9,
        "{": 10,
        "&": 11,
        _t: 12
    }, e.scan = function (n, r) {
        function o() {
            v.length > 0 && (y.push({
                tag: "_t",
                text: new String(v)
            }), v = "")
        }

        function a() {
            for (var t = !0, i = b; y.length > i; i++)
                if (t = e.tags[y[i].tag] < e.tags._v || "_t" == y[i].tag && null === y[i].text.match(m), !t) return !1;
            return t
        }

        function c(e, t) {
            if (o(), e && a())
                for (var i, s = b; y.length > s; s++) y[s].text && ((i = y[s + 1]) && ">" == i.tag && (i.indent = "" + y[s].text), y.splice(s, 1));
            else t || y.push({
                tag: "\n"
            });
            _ = !1, b = y.length
        }

        function l(e, t) {
            var s = "=" + C,
                n = e.indexOf(s, t),
                r = i(e.substring(e.indexOf("=", t) + 1, n)).split(" ");
            return w = r[0], C = r[r.length - 1], n + s.length - 1
        }
        var u = n.length,
            d = 0,
            h = 1,
            p = 2,
            f = d,
            g = null,
            T = null,
            v = "",
            y = [],
            _ = !1,
            D = 0,
            b = 0,
            w = "{{",
            C = "}}";
        for (r && (r = r.split(" "), w = r[0], C = r[1]), D = 0; u > D; D++) f == d ? s(w, n, D) ? (--D, o(), f = h) : "\n" == n.charAt(D) ? c(_) : v += n.charAt(D) : f == h ? (D += w.length - 1, T = e.tags[n.charAt(D + 1)], g = T ? n.charAt(D + 1) : "_v", "=" == g ? (D = l(n, D), f = d) : (T && D++, f = p), _ = D) : s(C, n, D) ? (y.push({
            tag: g,
            n: i(v),
            otag: w,
            ctag: C,
            i: "/" == g ? _ - w.length : D + C.length
        }), v = "", D += C.length - 1, f = d, "{" == g && ("}}" == C ? D++ : t(y[y.length - 1]))) : v += n.charAt(D);
        return c(_, !0), y
    };
    var y = {
        _t: !0,
        "\n": !0,
        $: !0,
        "/": !0
    };
    e.stringify = function (t) {
        return "{code: function (c,p,i) { " + e.wrapMain(t.code) + " }," + c(t) + "}"
    };
    var _ = 0;
    e.generate = function (t, i, s) {
        _ = 0;
        var n = {
            code: "",
            subs: {},
            partials: {}
        };
        return e.walk(t, n), s.asString ? this.stringify(n, i, s) : this.makeTemplate(n, i, s)
    }, e.wrapMain = function (e) {
        return 'var t=this;t.b(i=i||"");' + e + "return t.fl();"
    }, e.template = e.Template, e.makeTemplate = function (e, t, i) {
        var s = this.makePartials(e);
        return s.code = Function("c", "p", "i", this.wrapMain(e.code)), new this.template(s, t, this, i)
    }, e.makePartials = function (e) {
        var t, i = {
                subs: {},
                partials: e.partials,
                name: e.name
            };
        for (t in i.partials) i.partials[t] = this.makePartials(i.partials[t]);
        for (t in e.subs) i.subs[t] = Function("c", "p", "t", "i", e.subs[t]);
        return i
    }, e.codegen = {
        "#": function (t, i) {
            i.code += "if(t.s(t." + u(t.n) + '("' + l(t.n) + '",c,p,1),' + "c,p,0," + t.i + "," + t.end + ',"' + t.otag + " " + t.ctag + '")){' + "t.rs(c,p," + "function(c,p,t){", e.walk(t.nodes, i), i.code += "});c.pop();}"
        },
        "^": function (t, i) {
            i.code += "if(!t.s(t." + u(t.n) + '("' + l(t.n) + '",c,p,1),c,p,1,0,0,"")){', e.walk(t.nodes, i), i.code += "};"
        },
        ">": d,
        "<": function (t, i) {
            var s = {
                partials: {},
                code: "",
                subs: {},
                inPartial: !0
            };
            e.walk(t.nodes, s);
            var n = i.partials[d(t, i)];
            n.subs = s.subs, n.partials = s.partials
        },
        $: function (t, i) {
            var s = {
                subs: {},
                code: "",
                partials: i.partials,
                prefix: t.n
            };
            e.walk(t.nodes, s), i.subs[t.n] = s.code, i.inPartial || (i.code += 't.sub("' + l(t.n) + '",c,p,i);')
        },
        "\n": function (e, t) {
            t.code += p('"\\n"' + (e.last ? "" : " + i"))
        },
        _v: function (e, t) {
            t.code += "t.b(t.v(t." + u(e.n) + '("' + l(e.n) + '",c,p,0)));'
        },
        _t: function (e, t) {
            t.code += p('"' + l(e.text) + '"')
        },
        "{": h,
        "&": h
    }, e.walk = function (t, i) {
        for (var s, n = 0, r = t.length; r > n; n++) s = e.codegen[t[n].tag], s && s(t[n], i);
        return i
    }, e.parse = function (e, t, i) {
        return i = i || {}, n(e, "", [], i.sectionTags || [])
    }, e.cache = {}, e.cacheKey = function (e, t) {
        return [e, !! t.asString, !! t.disableLambda, t.delimiters, !! t.modelGet].join("||")
    }, e.compile = function (t, i) {
        i = i || {};
        var s = e.cacheKey(t, i),
            n = this.cache[s];
        return n ? n : (n = this.generate(this.parse(this.scan(t, i.delimiters), t, i), t, i), this.cache[s] = n)
    }
}("undefined" != typeof exports ? exports : Hogan), ScribeTransport.prototype = {
    flush: function (e, t) {
        if (e && e.length) {
            if (void 0 === t && (t = !! this.options.sync), this.options.useAjax) {
                var i = {
                    url: this.options.url,
                    data: $.extend(this.ajaxParams(e), this.options.requestParameters),
                    type: "POST",
                    dataType: "json",
                    async: !t,
                    headers: {
                        "X-Twitter-Polling": !0
                    }
                };
                this.options.debug && (this.options.debugHandler && (i.success = this.options.debugHandler), i.data.debug = "1"), $.ajax(i)
            } else {
                var s = this.options.debug ? "&debug=1" : "";
                (new Image).src = this.options.url + "?q=" + ("" + +new Date).slice(-4) + s + "&" + this.imageParams(e)
            }
            this.reset()
        }
    },
    ajaxParams: function (e) {
        if ("string" == typeof e) return {
            log: "[" + e + "]"
        };
        var t = this.options.encodeParameters;
        return t && "function" == typeof t ? t.apply(this, arguments) : {
            log: JSON.stringify(e)
        }
    },
    imageParams: function (e) {
        if ("string" == typeof e) return "log=%5B" + e + "%5D";
        var t = this.options.encodeParameters;
        return t && "function" == typeof t ? t.apply(this, arguments) : "log=" + encodeURIComponent(JSON.stringify(e))
    },
    reset: function () {
        this.options.bufferEvents && (this.skipUnloadFlush = !1, sessionStorage.removeItem(this.options.bufferKey))
    },
    getBuffer: function () {
        return sessionStorage.getItem(this.options.bufferKey) || ""
    },
    send: function (e, t, i) {
        if (t && e && !(0 > this.options.bufferSize)) {
            if (e._category_ = t, !i && this.options.bufferEvents && this.options.bufferSize) {
                var s = JSON.stringify(e);
                this.options.useAjax || (s = encodeURIComponent(s));
                var n = this.getBuffer(),
                    r = n + (n ? this.SEPARATOR + s : s);
                this.options.bufferSize && this.fullBuffer(r) ? this.options.useAjax ? this.flush(r) : (this.flush(n), sessionStorage.setItem(this.options.bufferKey, s)) : sessionStorage.setItem(this.options.bufferKey, r)
            } else this.flush([e], i);
            this.options.debug && $(document).trigger("scribedata." + this.options.bufferKey, e), this.options.metrics && "debug" != e.event_info && $(document).trigger("debugscribe", e)
        }
    },
    fullBuffer: function (e) {
        return e.length >= (this.options.useAjax ? 2083 * this.options.bufferSize : 2050 - this.options.url.length)
    },
    updateOptions: function (e) {
        if (this.options = $.extend({}, this.options, e), this.options.requestParameters || (this.options.requestParameters = {}), void 0 === this.options.flushOnUnload && (this.options.flushOnUnload = !0), this.options.bufferKey || (this.options.bufferKey = this.SESSION_BUFFER_KEY), 0 === this.options.bufferSize && (this.options.bufferEvents = !1), void 0 === this.options.useAjax && (this.options.useAjax = !0), this.options.bufferEvents || void 0 == this.options.bufferEvents) try {
            sessionStorage.setItem(this.SESSION_BUFFER_KEY + ".init", "test");
            var t = "test" == sessionStorage.getItem(this.SESSION_BUFFER_KEY + ".init");
            sessionStorage.removeItem(this.SESSION_BUFFER_KEY + ".init"), this.options.bufferEvents = t
        } catch (i) {
            this.options.bufferEvents = !1
        }
        if (this.options.debug && !this.options.debugHandler) {
            var s = this;
            this.options.debugHandler = e.debugHandler || function (e) {
                $(document).trigger("handlescribe." + s.options.bufferKey, e)
            }
        }
        var n = "https:" === window.location.protocol ? "https:" : "http:";
        this.options.url = void 0 === this.options.url ? this.options.useAjax ? this.SCRIBE_API_ENDPOINT : "https://twitter.com" + this.SCRIBE_API_ENDPOINT : this.options.url.replace(/^[a-z]+:/g, n).replace(/\/$/, ""), this.options.bufferEvents && void 0 === this.options.bufferSize && (this.options.bufferSize = 20)
    },
    appHost: function () {
        return window.location.host
    },
    registerEventHandlers: function () {
        var e = this,
            t = $(document);
        if (this.options.bufferEvents && (t.on("flushscribe." + e.options.bufferKey, function () {
            e.flush(e.getBuffer(), !0)
        }), this.options.flushOnUnload)) {
            var i = function (t) {
                e.skipUnloadFlush = !t || !t.match(/http/) || !! t.match(RegExp("^https?://" + e.appHost(), "gi")), e.skipUnloadFlush && window.setTimeout(function () {
                    e.skipUnloadFlush = !1
                }, 3e3)
            };
            t.on("mouseup." + this.options.bufferKey, "a", function (e) {
                this.getAttribute("target") || e.button || e.metaKey || e.shiftKey || e.altKey || e.ctrlKey || i(this.getAttribute("href"))
            }), t.on("submit." + this.options.bufferKey, "form", function () {
                i(this.getAttribute("action"))
            }), t.on("uiNavigate." + this.options.bufferKey, function (e, t) {
                i(t.url)
            }), $(window).on("unload." + this.options.bufferKey, function () {
                e.skipUnloadFlush || e.flush(e.getBuffer(), !0), e.skipUnloadFlush = !1
            })
        }
        this.SEPARATOR = this.options.useAjax ? "," : encodeURIComponent(",")
    },
    destroy: function () {
        this.flush(this.getBuffer()), $(document).off("flushscribe." + this.options.bufferKey), $(window).off("unload." + this.options.bufferKey), $(document).off("mouseup." + this.options.bufferKey), $(document).off("submit." + this.options.bufferKey), $(document).off("uiNavigate." + this.options.bufferKey)
    }
},
function (e, t) {
    function i(e) {
        var t = e.length,
            i = rt.type(e);
        return rt.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === i || "function" !== i && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function s(e) {
        var t = mt[e] = {};
        return rt.each(e.match(at) || [], function (e, i) {
            t[i] = !0
        }), t
    }

    function n() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = rt.expando + Math.random()
    }

    function r(e, i, s) {
        var n;
        if (s === t && 1 === e.nodeType)
            if (n = "data-" + i.replace(vt, "-$1").toLowerCase(), s = e.getAttribute(n), "string" == typeof s) {
                try {
                    s = "true" === s ? !0 : "false" === s ? !1 : "null" === s ? null : +s + "" === s ? +s : Tt.test(s) ? JSON.parse(s) : s
                } catch (r) {}
                ft.set(e, i, s)
            } else s = t;
        return s
    }

    function o() {
        return !0
    }

    function a() {
        return !1
    }

    function c() {
        try {
            return z.activeElement
        } catch (e) {}
    }

    function l(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function u(e, t, i) {
        if (rt.isFunction(t)) return rt.grep(e, function (e, s) {
            return !!t.call(e, s, e) !== i
        });
        if (t.nodeType) return rt.grep(e, function (e) {
            return e === t !== i
        });
        if ("string" == typeof t) {
            if (xt.test(t)) return rt.filter(t, e, i);
            t = rt.filter(t, e)
        }
        return rt.grep(e, function (e) {
            return tt.call(t, e) >= 0 !== i
        })
    }

    function d(e, t) {
        return rt.nodeName(e, "table") && rt.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function h(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function p(e) {
        var t = jt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function m(e, t) {
        for (var i = e.length, s = 0; i > s; s++) gt.set(e[s], "globalEval", !t || gt.get(t[s], "globalEval"))
    }

    function f(e, t) {
        var i, s, n, r, o, a, c, l;
        if (1 === t.nodeType) {
            if (gt.hasData(e) && (r = gt.access(e), o = gt.set(t, r), l = r.events)) {
                delete o.handle, o.events = {};
                for (n in l)
                    for (i = 0, s = l[n].length; s > i; i++) rt.event.add(t, n, l[n][i])
            }
            ft.hasData(e) && (a = ft.access(e), c = rt.extend({}, a), ft.set(t, c))
        }
    }

    function g(e, i) {
        var s = e.getElementsByTagName ? e.getElementsByTagName(i || "*") : e.querySelectorAll ? e.querySelectorAll(i || "*") : [];
        return i === t || i && rt.nodeName(e, i) ? rt.merge([e], s) : s
    }

    function T(e, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && $t.test(e.type) ? t.checked = e.checked : ("input" === i || "textarea" === i) && (t.defaultValue = e.defaultValue)
    }

    function v(e, t) {
        if (t in e) return t;
        for (var i = t.charAt(0).toUpperCase() + t.slice(1), s = t, n = Zt.length; n--;)
            if (t = Zt[n] + i, t in e) return t;
        return s
    }

    function y(e, t) {
        return e = t || e, "none" === rt.css(e, "display") || !rt.contains(e.ownerDocument, e)
    }

    function _(t) {
        return e.getComputedStyle(t, null)
    }

    function D(e, t) {
        for (var i, s, n, r = [], o = 0, a = e.length; a > o; o++) s = e[o], s.style && (r[o] = gt.get(s, "olddisplay"), i = s.style.display, t ? (r[o] || "none" !== i || (s.style.display = ""), "" === s.style.display && y(s) && (r[o] = gt.access(s, "olddisplay", S(s.nodeName)))) : r[o] || (n = y(s), (i && "none" !== i || !n) && gt.set(s, "olddisplay", n ? i : rt.css(s, "display"))));
        for (o = 0; a > o; o++) s = e[o], s.style && (t && "none" !== s.style.display && "" !== s.style.display || (s.style.display = t ? r[o] || "" : "none"));
        return e
    }

    function b(e, t, i) {
        var s = Gt.exec(t);
        return s ? Math.max(0, s[1] - (i || 0)) + (s[2] || "px") : t
    }

    function w(e, t, i, s, n) {
        for (var r = i === (s ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > r; r += 2) "margin" === i && (o += rt.css(e, i + Jt[r], !0, n)), s ? ("content" === i && (o -= rt.css(e, "padding" + Jt[r], !0, n)), "margin" !== i && (o -= rt.css(e, "border" + Jt[r] + "Width", !0, n))) : (o += rt.css(e, "padding" + Jt[r], !0, n), "padding" !== i && (o += rt.css(e, "border" + Jt[r] + "Width", !0, n)));
        return o
    }

    function C(e, t, i) {
        var s = !0,
            n = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = _(e),
            o = rt.support.boxSizing && "border-box" === rt.css(e, "boxSizing", !1, r);
        if (0 >= n || null == n) {
            if (n = Ht(e, t, r), (0 > n || null == n) && (n = e.style[t]), Vt.test(n)) return n;
            s = o && (rt.support.boxSizingReliable || n === e.style[t]), n = parseFloat(n) || 0
        }
        return n + w(e, t, i || (o ? "border" : "content"), s, r) + "px"
    }

    function S(e) {
        var t = z,
            i = Yt[e];
        return i || (i = E(e, t), "none" !== i && i || (Wt = (Wt || rt("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Wt[0].contentWindow || Wt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), i = E(e, t), Wt.detach()), Yt[e] = i), i
    }

    function E(e, t) {
        var i = rt(t.createElement(e)).appendTo(t.body),
            s = rt.css(i[0], "display");
        return i.remove(), s
    }

    function k(e, t, i, s) {
        var n;
        if (rt.isArray(t)) rt.each(t, function (t, n) {
            i || ti.test(e) ? s(e, n) : k(e + "[" + ("object" == typeof n ? t : "") + "]", n, i, s)
        });
        else if (i || "object" !== rt.type(t)) s(e, t);
        else
            for (n in t) k(e + "[" + n + "]", t[n], i, s)
    }

    function x(e) {
        return function (t, i) {
            "string" != typeof t && (i = t, t = "*");
            var s, n = 0,
                r = t.toLowerCase().match(at) || [];
            if (rt.isFunction(i))
                for (; s = r[n++];) "+" === s[0] ? (s = s.slice(1) || "*", (e[s] = e[s] || []).unshift(i)) : (e[s] = e[s] || []).push(i)
        }
    }

    function A(e, i, s, n) {
        function r(c) {
            var l;
            return o[c] = !0, rt.each(e[c] || [], function (e, c) {
                var u = c(i, s, n);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : t : (i.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var o = {}, a = e === vi;
        return r(i.dataTypes[0]) || !o["*"] && r("*")
    }

    function I(e, i) {
        var s, n, r = rt.ajaxSettings.flatOptions || {};
        for (s in i) i[s] !== t && ((r[s] ? e : n || (n = {}))[s] = i[s]);
        return n && rt.extend(!0, e, n), e
    }

    function M(e, i, s) {
        for (var n, r, o, a, c = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), n === t && (n = e.mimeType || i.getResponseHeader("Content-Type"));
        if (n)
            for (r in c)
                if (c[r] && c[r].test(n)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in s) o = l[0];
        else {
            for (r in s) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                a || (a = r)
            }
            o = o || a
        }
        return o ? (o !== l[0] && l.unshift(o), s[o]) : t
    }

    function R(e, t, i, s) {
        var n, r, o, a, c, l = {}, u = e.dataTypes.slice();
        if (u[1])
            for (o in e.converters) l[o.toLowerCase()] = e.converters[o];
        for (r = u.shift(); r;)
            if (e.responseFields[r] && (i[e.responseFields[r]] = t), !c && s && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = r, r = u.shift())
                if ("*" === r) r = c;
                else if ("*" !== c && c !== r) {
            if (o = l[c + " " + r] || l["* " + r], !o)
                for (n in l)
                    if (a = n.split(" "), a[1] === r && (o = l[c + " " + a[0]] || l["* " + a[0]])) {
                        o === !0 ? o = l[n] : l[n] !== !0 && (r = a[0], u.unshift(a[1]));
                        break
                    }
            if (o !== !0)
                if (o && e["throws"]) t = o(t);
                else try {
                    t = o(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: o ? d : "No conversion from " + c + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function L() {
        return setTimeout(function () {
            ki = t
        }), ki = rt.now()
    }

    function N(e, t, i) {
        for (var s, n = (Li[t] || []).concat(Li["*"]), r = 0, o = n.length; o > r; r++)
            if (s = n[r].call(i, t, e)) return s
    }

    function F(e, t, i) {
        var s, n, r = 0,
            o = Ri.length,
            a = rt.Deferred().always(function () {
                delete c.elem
            }),
            c = function () {
                if (n) return !1;
                for (var t = ki || L(), i = Math.max(0, l.startTime + l.duration - t), s = i / l.duration || 0, r = 1 - s, o = 0, c = l.tweens.length; c > o; o++) l.tweens[o].run(r);
                return a.notifyWith(e, [l, r, i]), 1 > r && c ? i : (a.resolveWith(e, [l]), !1)
            }, l = a.promise({
                elem: e,
                props: rt.extend({}, t),
                opts: rt.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: ki || L(),
                duration: i.duration,
                tweens: [],
                createTween: function (t, i) {
                    var s = rt.Tween(e, l.opts, t, i, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(s), s
                },
                stop: function (t) {
                    var i = 0,
                        s = t ? l.tweens.length : 0;
                    if (n) return this;
                    for (n = !0; s > i; i++) l.tweens[i].run(1);
                    return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
                }
            }),
            u = l.props;
        for ($(u, l.opts.specialEasing); o > r; r++)
            if (s = Ri[r].call(l, e, u, l.opts)) return s;
        return rt.map(u, N, l), rt.isFunction(l.opts.start) && l.opts.start.call(e, l), rt.fx.timer(rt.extend(c, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function $(e, t) {
        var i, s, n, r, o;
        for (i in e)
            if (s = rt.camelCase(i), n = t[s], r = e[i], rt.isArray(r) && (n = r[1], r = e[i] = r[0]), i !== s && (e[s] = r, delete e[i]), o = rt.cssHooks[s], o && "expand" in o) {
                r = o.expand(r), delete e[s];
                for (i in r) i in e || (e[i] = r[i], t[i] = n)
            } else t[s] = n
    }

    function O(e, i, s) {
        var n, r, o, a, c, l, u = this,
            d = {}, h = e.style,
            p = e.nodeType && y(e),
            m = gt.get(e, "fxshow");
        s.queue || (c = rt._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, l = c.empty.fire, c.empty.fire = function () {
            c.unqueued || l()
        }), c.unqueued++, u.always(function () {
            u.always(function () {
                c.unqueued--, rt.queue(e, "fx").length || c.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in i || "width" in i) && (s.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === rt.css(e, "display") && "none" === rt.css(e, "float") && (h.display = "inline-block")), s.overflow && (h.overflow = "hidden", u.always(function () {
            h.overflow = s.overflow[0], h.overflowX = s.overflow[1], h.overflowY = s.overflow[2]
        }));
        for (n in i)
            if (r = i[n], Ai.exec(r)) {
                if (delete i[n], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                    if ("show" !== r || !m || m[n] === t) continue;
                    p = !0
                }
                d[n] = m && m[n] || rt.style(e, n)
            }
        if (!rt.isEmptyObject(d)) {
            m ? "hidden" in m && (p = m.hidden) : m = gt.access(e, "fxshow", {}), o && (m.hidden = !p), p ? rt(e).show() : u.done(function () {
                rt(e).hide()
            }), u.done(function () {
                var t;
                gt.remove(e, "fxshow");
                for (t in d) rt.style(e, t, d[t])
            });
            for (n in d) a = N(p ? m[n] : 0, n, u), n in m || (m[n] = a.start, p && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function U(e, t, i, s, n) {
        return new U.prototype.init(e, t, i, s, n)
    }

    function j(e, t) {
        var i, s = {
                height: e
            }, n = 0;
        for (t = t ? 1 : 0; 4 > n; n += 2 - t) i = Jt[n], s["margin" + i] = s["padding" + i] = e;
        return t && (s.opacity = s.width = e), s
    }

    function P(e) {
        return rt.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var B, H, W = typeof t,
        K = e.location,
        z = e.document,
        G = z.documentElement,
        V = e.jQuery,
        q = e.$,
        Y = {}, Q = [],
        X = "2.0.3",
        J = Q.concat,
        Z = Q.push,
        et = Q.slice,
        tt = Q.indexOf,
        it = Y.toString,
        st = Y.hasOwnProperty,
        nt = X.trim,
        rt = function (e, t) {
            return new rt.fn.init(e, t, B)
        }, ot = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        at = /\S+/g,
        ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        lt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ut = /^-ms-/,
        dt = /-([\da-z])/gi,
        ht = function (e, t) {
            return t.toUpperCase()
        }, pt = function () {
            z.removeEventListener("DOMContentLoaded", pt, !1), e.removeEventListener("load", pt, !1), rt.ready()
        };
    rt.fn = rt.prototype = {
        jquery: X,
        constructor: rt,
        init: function (e, i, s) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ct.exec(e), !n || !n[1] && i) return !i || i.jquery ? (i || s).find(e) : this.constructor(i).find(e);
                if (n[1]) {
                    if (i = i instanceof rt ? i[0] : i, rt.merge(this, rt.parseHTML(n[1], i && i.nodeType ? i.ownerDocument || i : z, !0)), lt.test(n[1]) && rt.isPlainObject(i))
                        for (n in i) rt.isFunction(this[n]) ? this[n](i[n]) : this.attr(n, i[n]);
                    return this
                }
                return r = z.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = z, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : rt.isFunction(e) ? s.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), rt.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function () {
            return et.call(this)
        },
        get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function (e) {
            var t = rt.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return rt.each(this, e, t)
        },
        ready: function (e) {
            return rt.ready.promise().done(e), this
        },
        slice: function () {
            return this.pushStack(et.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                i = +e + (0 > e ? t : 0);
            return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
        },
        map: function (e) {
            return this.pushStack(rt.map(this, function (t, i) {
                return e.call(t, i, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: Z,
        sort: [].sort,
        splice: [].splice
    }, rt.fn.init.prototype = rt.fn, rt.extend = rt.fn.extend = function () {
        var e, i, s, n, r, o, a = arguments[0] || {}, c = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[1] || {}, c = 2), "object" == typeof a || rt.isFunction(a) || (a = {}), l === c && (a = this, --c); l > c; c++)
            if (null != (e = arguments[c]))
                for (i in e) s = a[i], n = e[i], a !== n && (u && n && (rt.isPlainObject(n) || (r = rt.isArray(n))) ? (r ? (r = !1, o = s && rt.isArray(s) ? s : []) : o = s && rt.isPlainObject(s) ? s : {}, a[i] = rt.extend(u, o, n)) : n !== t && (a[i] = n));
        return a
    }, rt.extend({
        expando: "jQuery" + (X + Math.random()).replace(/\D/g, ""),
        noConflict: function (t) {
            return e.$ === rt && (e.$ = q), t && e.jQuery === rt && (e.jQuery = V), rt
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? rt.readyWait++ : rt.ready(!0)
        },
        ready: function (e) {
            (e === !0 ? --rt.readyWait : rt.isReady) || (rt.isReady = !0, e !== !0 && --rt.readyWait > 0 || (H.resolveWith(z, [rt]), rt.fn.trigger && rt(z).trigger("ready").off("ready")))
        },
        isFunction: function (e) {
            return "function" === rt.type(e)
        },
        isArray: Array.isArray,
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Y[it.call(e)] || "object" : typeof e
        },
        isPlainObject: function (e) {
            if ("object" !== rt.type(e) || e.nodeType || rt.isWindow(e)) return !1;
            try {
                if (e.constructor && !st.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (t) {
                return !1
            }
            return !0
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function (e) {
            throw Error(e)
        },
        parseHTML: function (e, t, i) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (i = t, t = !1), t = t || z;
            var s = lt.exec(e),
                n = !i && [];
            return s ? [t.createElement(s[1])] : (s = rt.buildFragment([e], t, n), n && rt(n).remove(), rt.merge([], s.childNodes))
        },
        parseJSON: JSON.parse,
        parseXML: function (e) {
            var i, s;
            if (!e || "string" != typeof e) return null;
            try {
                s = new DOMParser, i = s.parseFromString(e, "text/xml")
            } catch (n) {
                i = t
            }
            return (!i || i.getElementsByTagName("parsererror").length) && rt.error("Invalid XML: " + e), i
        },
        noop: function () {},
        globalEval: function (e) {
            var t, i = eval;
            e = rt.trim(e), e && (1 === e.indexOf("use strict") ? (t = z.createElement("script"), t.text = e, z.head.appendChild(t).parentNode.removeChild(t)) : i(e))
        },
        camelCase: function (e) {
            return e.replace(ut, "ms-").replace(dt, ht)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, s) {
            var n, r = 0,
                o = e.length,
                a = i(e);
            if (s) {
                if (a)
                    for (; o > r && (n = t.apply(e[r], s), n !== !1); r++);
                else
                    for (r in e)
                        if (n = t.apply(e[r], s), n === !1) break
            } else if (a)
                for (; o > r && (n = t.call(e[r], r, e[r]), n !== !1); r++);
            else
                for (r in e)
                    if (n = t.call(e[r], r, e[r]), n === !1) break; return e
        },
        trim: function (e) {
            return null == e ? "" : nt.call(e)
        },
        makeArray: function (e, t) {
            var s = t || [];
            return null != e && (i(Object(e)) ? rt.merge(s, "string" == typeof e ? [e] : e) : Z.call(s, e)), s
        },
        inArray: function (e, t, i) {
            return null == t ? -1 : tt.call(t, e, i)
        },
        merge: function (e, i) {
            var s = i.length,
                n = e.length,
                r = 0;
            if ("number" == typeof s)
                for (; s > r; r++) e[n++] = i[r];
            else
                for (; i[r] !== t;) e[n++] = i[r++];
            return e.length = n, e
        },
        grep: function (e, t, i) {
            var s, n = [],
                r = 0,
                o = e.length;
            for (i = !! i; o > r; r++) s = !! t(e[r], r), i !== s && n.push(e[r]);
            return n
        },
        map: function (e, t, s) {
            var n, r = 0,
                o = e.length,
                a = i(e),
                c = [];
            if (a)
                for (; o > r; r++) n = t(e[r], r, s), null != n && (c[c.length] = n);
            else
                for (r in e) n = t(e[r], r, s), null != n && (c[c.length] = n);
            return J.apply([], c)
        },
        guid: 1,
        proxy: function (e, i) {
            var s, n, r;
            return "string" == typeof i && (s = e[i], i = e, e = s), rt.isFunction(e) ? (n = et.call(arguments, 2), r = function () {
                return e.apply(i || this, n.concat(et.call(arguments)))
            }, r.guid = e.guid = e.guid || rt.guid++, r) : t
        },
        access: function (e, i, s, n, r, o, a) {
            var c = 0,
                l = e.length,
                u = null == s;
            if ("object" === rt.type(s)) {
                r = !0;
                for (c in s) rt.access(e, i, c, s[c], !0, o, a)
            } else if (n !== t && (r = !0, rt.isFunction(n) || (a = !0), u && (a ? (i.call(e, n), i = null) : (u = i, i = function (e, t, i) {
                return u.call(rt(e), i)
            })), i))
                for (; l > c; c++) i(e[c], s, a ? n : n.call(e[c], c, i(e[c], s)));
            return r ? e : u ? i.call(e) : l ? i(e[0], s) : o
        },
        now: Date.now,
        swap: function (e, t, i, s) {
            var n, r, o = {};
            for (r in t) o[r] = e.style[r], e.style[r] = t[r];
            n = i.apply(e, s || []);
            for (r in t) e.style[r] = o[r];
            return n
        }
    }), rt.ready.promise = function (t) {
        return H || (H = rt.Deferred(), "complete" === z.readyState ? setTimeout(rt.ready) : (z.addEventListener("DOMContentLoaded", pt, !1), e.addEventListener("load", pt, !1))), H.promise(t)
    }, rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        Y["[object " + t + "]"] = t.toLowerCase()
    }), B = rt(z),
    function (e, t) {
        function i(e, t, i, s) {
            var n, r, o, a, c, l, u, d, m, f;
            if ((t ? t.ownerDocument || t : P) !== R && M(t), t = t || R, i = i || [], !e || "string" != typeof e) return i;
            if (1 !== (a = t.nodeType) && 9 !== a) return [];
            if (N && !s) {
                if (n = yt.exec(e))
                    if (o = n[1]) {
                        if (9 === a) {
                            if (r = t.getElementById(o), !r || !r.parentNode) return i;
                            if (r.id === o) return i.push(r), i
                        } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(o)) && U(t, r) && r.id === o) return i.push(r), i
                    } else {
                        if (n[2]) return et.apply(i, t.getElementsByTagName(e)), i;
                        if ((o = n[3]) && w.getElementsByClassName && t.getElementsByClassName) return et.apply(i, t.getElementsByClassName(o)), i
                    }
                if (w.qsa && (!F || !F.test(e))) {
                    if (d = u = j, m = t, f = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (l = h(e), (u = t.getAttribute("id")) ? d = u.replace(bt, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", c = l.length; c--;) l[c] = d + p(l[c]);
                        m = pt.test(e) && t.parentNode || t, f = l.join(",")
                    }
                    if (f) try {
                        return et.apply(i, m.querySelectorAll(f)), i
                    } catch (g) {} finally {
                        u || t.removeAttribute("id")
                    }
                }
            }
            return D(e.replace(ut, "$1"), t, i, s)
        }

        function s() {
            function e(i, s) {
                return t.push(i += " ") > S.cacheLength && delete e[t.shift()], e[i] = s
            }
            var t = [];
            return e
        }

        function n(e) {
            return e[j] = !0, e
        }

        function r(e) {
            var t = R.createElement("div");
            try {
                return !!e(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var i = e.split("|"), s = e.length; s--;) S.attrHandle[i[s]] = t
        }

        function a(e, t) {
            var i = t && e,
                s = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (s) return s;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function c(e) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function u(e) {
            return n(function (t) {
                return t = +t, n(function (i, s) {
                    for (var n, r = e([], i.length, t), o = r.length; o--;) i[n = r[o]] && (i[n] = !(s[n] = i[n]))
                })
            })
        }

        function d() {}

        function h(e, t) {
            var s, n, r, o, a, c, l, u = K[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, c = [], l = S.preFilter; a;) {
                (!s || (n = dt.exec(a))) && (n && (a = a.slice(n[0].length) || a), c.push(r = [])), s = !1, (n = ht.exec(a)) && (s = n.shift(), r.push({
                    value: s,
                    type: n[0].replace(ut, " ")
                }), a = a.slice(s.length));
                for (o in S.filter)!(n = Tt[o].exec(a)) || l[o] && !(n = l[o](n)) || (s = n.shift(), r.push({
                    value: s,
                    type: o,
                    matches: n
                }), a = a.slice(s.length));
                if (!s) break
            }
            return t ? a.length : a ? i.error(e) : K(e, c).slice(0)
        }

        function p(e) {
            for (var t = 0, i = e.length, s = ""; i > t; t++) s += e[t].value;
            return s
        }

        function m(e, t, i) {
            var s = t.dir,
                n = i && "parentNode" === s,
                r = H++;
            return t.first ? function (t, i, r) {
                for (; t = t[s];)
                    if (1 === t.nodeType || n) return e(t, i, r)
            } : function (t, i, o) {
                var a, c, l, u = B + " " + r;
                if (o) {
                    for (; t = t[s];)
                        if ((1 === t.nodeType || n) && e(t, i, o)) return !0
                } else
                    for (; t = t[s];)
                        if (1 === t.nodeType || n)
                            if (l = t[j] || (t[j] = {}), (c = l[s]) && c[0] === u) {
                                if ((a = c[1]) === !0 || a === C) return a === !0
                            } else if (c = l[s] = [u], c[1] = e(t, i, o) || C, c[1] === !0) return !0
            }
        }

        function f(e) {
            return e.length > 1 ? function (t, i, s) {
                for (var n = e.length; n--;)
                    if (!e[n](t, i, s)) return !1;
                return !0
            } : e[0]
        }

        function g(e, t, i, s, n) {
            for (var r, o = [], a = 0, c = e.length, l = null != t; c > a; a++)(r = e[a]) && (!i || i(r, s, n)) && (o.push(r), l && t.push(a));
            return o
        }

        function T(e, t, i, s, r, o) {
            return s && !s[j] && (s = T(s)), r && !r[j] && (r = T(r, o)), n(function (n, o, a, c) {
                var l, u, d, h = [],
                    p = [],
                    m = o.length,
                    f = n || _(t || "*", a.nodeType ? [a] : a, []),
                    T = !e || !n && t ? f : g(f, h, e, a, c),
                    v = i ? r || (n ? e : m || s) ? [] : o : T;
                if (i && i(T, v, a, c), s)
                    for (l = g(v, p), s(l, [], a, c), u = l.length; u--;)(d = l[u]) && (v[p[u]] = !(T[p[u]] = d));
                if (n) {
                    if (r || e) {
                        if (r) {
                            for (l = [], u = v.length; u--;)(d = v[u]) && l.push(T[u] = d);
                            r(null, v = [], l, c)
                        }
                        for (u = v.length; u--;)(d = v[u]) && (l = r ? it.call(n, d) : h[u]) > -1 && (n[l] = !(o[l] = d))
                    }
                } else v = g(v === o ? v.splice(m, v.length) : v), r ? r(null, o, v, c) : et.apply(o, v)
            })
        }

        function v(e) {
            for (var t, i, s, n = e.length, r = S.relative[e[0].type], o = r || S.relative[" "], a = r ? 1 : 0, c = m(function (e) {
                    return e === t
                }, o, !0), l = m(function (e) {
                    return it.call(t, e) > -1
                }, o, !0), u = [
                    function (e, i, s) {
                        return !r && (s || i !== A) || ((t = i).nodeType ? c(e, i, s) : l(e, i, s))
                    }
                ]; n > a; a++)
                if (i = S.relative[e[a].type]) u = [m(f(u), i)];
                else {
                    if (i = S.filter[e[a].type].apply(null, e[a].matches), i[j]) {
                        for (s = ++a; n > s && !S.relative[e[s].type]; s++);
                        return T(a > 1 && f(u), a > 1 && p(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ut, "$1"), i, s > a && v(e.slice(a, s)), n > s && v(e = e.slice(s)), n > s && p(e))
                    }
                    u.push(i)
                }
            return f(u)
        }

        function y(e, t) {
            var s = 0,
                r = t.length > 0,
                o = e.length > 0,
                a = function (n, a, c, l, u) {
                    var d, h, p, m = [],
                        f = 0,
                        T = "0",
                        v = n && [],
                        y = null != u,
                        _ = A,
                        D = n || o && S.find.TAG("*", u && a.parentNode || a),
                        b = B += null == _ ? 1 : Math.random() || .1;
                    for (y && (A = a !== R && a, C = s); null != (d = D[T]); T++) {
                        if (o && d) {
                            for (h = 0; p = e[h++];)
                                if (p(d, a, c)) {
                                    l.push(d);
                                    break
                                }
                            y && (B = b, C = ++s)
                        }
                        r && ((d = !p && d) && f--, n && v.push(d))
                    }
                    if (f += T, r && T !== f) {
                        for (h = 0; p = t[h++];) p(v, m, a, c);
                        if (n) {
                            if (f > 0)
                                for (; T--;) v[T] || m[T] || (m[T] = J.call(l));
                            m = g(m)
                        }
                        et.apply(l, m), y && !n && m.length > 0 && f + t.length > 1 && i.uniqueSort(l)
                    }
                    return y && (B = b, A = _), v
                };
            return r ? n(a) : a
        }

        function _(e, t, s) {
            for (var n = 0, r = t.length; r > n; n++) i(e, t[n], s);
            return s
        }

        function D(e, t, i, s) {
            var n, r, o, a, c, l = h(e);
            if (!s && 1 === l.length) {
                if (r = l[0] = l[0].slice(0), r.length > 2 && "ID" === (o = r[0]).type && w.getById && 9 === t.nodeType && N && S.relative[r[1].type]) {
                    if (t = (S.find.ID(o.matches[0].replace(wt, Ct), t) || [])[0], !t) return i;
                    e = e.slice(r.shift().value.length)
                }
                for (n = Tt.needsContext.test(e) ? 0 : r.length; n-- && (o = r[n], !S.relative[a = o.type]);)
                    if ((c = S.find[a]) && (s = c(o.matches[0].replace(wt, Ct), pt.test(r[0].type) && t.parentNode || t))) {
                        if (r.splice(n, 1), e = s.length && p(r), !e) return et.apply(i, s), i;
                        break
                    }
            }
            return x(e, l)(s, t, !N, i, pt.test(e)), i
        }
        var b, w, C, S, E, k, x, A, I, M, R, L, N, F, $, O, U, j = "sizzle" + -new Date,
            P = e.document,
            B = 0,
            H = 0,
            W = s(),
            K = s(),
            z = s(),
            G = !1,
            V = function (e, t) {
                return e === t ? (G = !0, 0) : 0
            }, q = typeof t,
            Y = 1 << 31,
            Q = {}.hasOwnProperty,
            X = [],
            J = X.pop,
            Z = X.push,
            et = X.push,
            tt = X.slice,
            it = X.indexOf || function (e) {
                for (var t = 0, i = this.length; i > t; t++)
                    if (this[t] === e) return t;
                return -1
            }, st = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            ot = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            at = ot.replace("w", "w#"),
            ct = "\\[" + nt + "*(" + ot + ")" + nt + "*(?:([*^$|!~]?=)" + nt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + at + ")|)|)" + nt + "*\\]",
            lt = ":(" + ot + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ct.replace(3, 8) + ")*)|.*)\\)|)",
            ut = RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            dt = RegExp("^" + nt + "*," + nt + "*"),
            ht = RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            pt = RegExp(nt + "*[+~]"),
            mt = RegExp("=" + nt + "*([^\\]'\"]*)" + nt + "*\\]", "g"),
            ft = RegExp(lt),
            gt = RegExp("^" + at + "$"),
            Tt = {
                ID: RegExp("^#(" + ot + ")"),
                CLASS: RegExp("^\\.(" + ot + ")"),
                TAG: RegExp("^(" + ot.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + ct),
                PSEUDO: RegExp("^" + lt),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: RegExp("^(?:" + st + ")$", "i"),
                needsContext: RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            }, vt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _t = /^(?:input|select|textarea|button)$/i,
            Dt = /^h\d$/i,
            bt = /'|\\/g,
            wt = RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            Ct = function (e, t, i) {
                var s = "0x" + t - 65536;
                return s !== s || i ? t : 0 > s ? String.fromCharCode(s + 65536) : String.fromCharCode(55296 | s >> 10, 56320 | 1023 & s)
            };
        try {
            et.apply(X = tt.call(P.childNodes), P.childNodes), X[P.childNodes.length].nodeType
        } catch (St) {
            et = {
                apply: X.length ? function (e, t) {
                    Z.apply(e, tt.call(t))
                } : function (e, t) {
                    for (var i = e.length, s = 0; e[i++] = t[s++];);
                    e.length = i - 1
                }
            }
        }
        k = i.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, w = i.support = {}, M = i.setDocument = function (e) {
            var i = e ? e.ownerDocument || e : P,
                s = i.defaultView;
            return i !== R && 9 === i.nodeType && i.documentElement ? (R = i, L = i.documentElement, N = !k(i), s && s.attachEvent && s !== s.top && s.attachEvent("onbeforeunload", function () {
                M()
            }), w.attributes = r(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = r(function (e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = r(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), w.getById = r(function (e) {
                return L.appendChild(e).id = j, !i.getElementsByName || !i.getElementsByName(j).length
            }), w.getById ? (S.find.ID = function (e, t) {
                if (typeof t.getElementById !== q && N) {
                    var i = t.getElementById(e);
                    return i && i.parentNode ? [i] : []
                }
            }, S.filter.ID = function (e) {
                var t = e.replace(wt, Ct);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete S.find.ID, S.filter.ID = function (e) {
                var t = e.replace(wt, Ct);
                return function (e) {
                    var i = typeof e.getAttributeNode !== q && e.getAttributeNode("id");
                    return i && i.value === t
                }
            }), S.find.TAG = w.getElementsByTagName ? function (e, i) {
                return typeof i.getElementsByTagName !== q ? i.getElementsByTagName(e) : t
            } : function (e, t) {
                var i, s = [],
                    n = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = r[n++];) 1 === i.nodeType && s.push(i);
                    return s
                }
                return r
            }, S.find.CLASS = w.getElementsByClassName && function (e, i) {
                return typeof i.getElementsByClassName !== q && N ? i.getElementsByClassName(e) : t
            }, $ = [], F = [], (w.qsa = vt.test(i.querySelectorAll)) && (r(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || F.push("\\[" + nt + "*(?:value|" + st + ")"), e.querySelectorAll(":checked").length || F.push(":checked")
            }), r(function (e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && F.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (w.matchesSelector = vt.test(O = L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function (e) {
                w.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), $.push("!=", lt)
            }), F = F.length && RegExp(F.join("|")), $ = $.length && RegExp($.join("|")), U = vt.test(L.contains) || L.compareDocumentPosition ? function (e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e,
                    s = t && t.parentNode;
                return e === s || !(!s || 1 !== s.nodeType || !(i.contains ? i.contains(s) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(s)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, V = L.compareDocumentPosition ? function (e, t) {
                if (e === t) return G = !0, 0;
                var s = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return s ? 1 & s || !w.sortDetached && t.compareDocumentPosition(e) === s ? e === i || U(P, e) ? -1 : t === i || U(P, t) ? 1 : I ? it.call(I, e) - it.call(I, t) : 0 : 4 & s ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var s, n = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    c = [e],
                    l = [t];
                if (e === t) return G = !0, 0;
                if (!r || !o) return e === i ? -1 : t === i ? 1 : r ? -1 : o ? 1 : I ? it.call(I, e) - it.call(I, t) : 0;
                if (r === o) return a(e, t);
                for (s = e; s = s.parentNode;) c.unshift(s);
                for (s = t; s = s.parentNode;) l.unshift(s);
                for (; c[n] === l[n];) n++;
                return n ? a(c[n], l[n]) : c[n] === P ? -1 : l[n] === P ? 1 : 0
            }, i) : R
        }, i.matches = function (e, t) {
            return i(e, null, null, t)
        }, i.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== R && M(e), t = t.replace(mt, "='$1']"), !(!w.matchesSelector || !N || $ && $.test(t) || F && F.test(t))) try {
                var s = O.call(e, t);
                if (s || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return s
            } catch (n) {}
            return i(t, R, null, [e]).length > 0
        }, i.contains = function (e, t) {
            return (e.ownerDocument || e) !== R && M(e), U(e, t)
        }, i.attr = function (e, i) {
            (e.ownerDocument || e) !== R && M(e);
            var s = S.attrHandle[i.toLowerCase()],
                n = s && Q.call(S.attrHandle, i.toLowerCase()) ? s(e, i, !N) : t;
            return n === t ? w.attributes || !N ? e.getAttribute(i) : (n = e.getAttributeNode(i)) && n.specified ? n.value : null : n
        }, i.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, i.uniqueSort = function (e) {
            var t, i = [],
                s = 0,
                n = 0;
            if (G = !w.detectDuplicates, I = !w.sortStable && e.slice(0), e.sort(V), G) {
                for (; t = e[n++];) t === e[n] && (s = i.push(n));
                for (; s--;) e.splice(i[s], 1)
            }
            return e
        }, E = i.getText = function (e) {
            var t, i = "",
                s = 0,
                n = e.nodeType;
            if (n) {
                if (1 === n || 9 === n || 11 === n) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += E(e)
                } else if (3 === n || 4 === n) return e.nodeValue
            } else
                for (; t = e[s]; s++) i += E(t);
            return i
        }, S = i.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: Tt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(wt, Ct), e[3] = (e[4] || e[5] || "").replace(wt, Ct), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || i.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && i.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var i, s = !e[5] && e[2];
                    return Tt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : s && ft.test(s) && (i = h(s, !0)) && (i = s.indexOf(")", s.length - i) - s.length) && (e[0] = e[0].slice(0, i), e[2] = s.slice(0, i)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(wt, Ct).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = W[e + " "];
                    return t || (t = RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && W(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== q && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, s) {
                    return function (n) {
                        var r = i.attr(n, e);
                        return null == r ? "!=" === t : t ? (r += "", "=" === t ? r === s : "!=" === t ? r !== s : "^=" === t ? s && 0 === r.indexOf(s) : "*=" === t ? s && r.indexOf(s) > -1 : "$=" === t ? s && r.slice(-s.length) === s : "~=" === t ? (" " + r + " ").indexOf(s) > -1 : "|=" === t ? r === s || r.slice(0, s.length + 1) === s + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, i, s, n) {
                    var r = "nth" !== e.slice(0, 3),
                        o = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === s && 0 === n ? function (e) {
                        return !!e.parentNode
                    } : function (t, i, c) {
                        var l, u, d, h, p, m, f = r !== o ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            T = a && t.nodeName.toLowerCase(),
                            v = !c && !a;
                        if (g) {
                            if (r) {
                                for (; f;) {
                                    for (d = t; d = d[f];)
                                        if (a ? d.nodeName.toLowerCase() === T : 1 === d.nodeType) return !1;
                                    m = f = "only" === e && !m && "nextSibling"
                                }
                                return !0
                            }
                            if (m = [o ? g.firstChild : g.lastChild], o && v) {
                                for (u = g[j] || (g[j] = {}), l = u[e] || [], p = l[0] === B && l[1], h = l[0] === B && l[2], d = p && g.childNodes[p]; d = ++p && d && d[f] || (h = p = 0) || m.pop();)
                                    if (1 === d.nodeType && ++h && d === t) {
                                        u[e] = [B, p, h];
                                        break
                                    }
                            } else if (v && (l = (t[j] || (t[j] = {}))[e]) && l[0] === B) h = l[1];
                            else
                                for (;
                                    (d = ++p && d && d[f] || (h = p = 0) || m.pop()) && ((a ? d.nodeName.toLowerCase() !== T : 1 !== d.nodeType) || !++h || (v && ((d[j] || (d[j] = {}))[e] = [B, h]), d !== t)););
                            return h -= n, h === s || 0 === h % s && h / s >= 0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var s, r = S.pseudos[e] || S.setFilters[e.toLowerCase()] || i.error("unsupported pseudo: " + e);
                    return r[j] ? r(t) : r.length > 1 ? (s = [e, e, "", t], S.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function (e, i) {
                        for (var s, n = r(e, t), o = n.length; o--;) s = it.call(e, n[o]), e[s] = !(i[s] = n[o])
                    }) : function (e) {
                        return r(e, 0, s)
                    }) : r
                }
            },
            pseudos: {
                not: n(function (e) {
                    var t = [],
                        i = [],
                        s = x(e.replace(ut, "$1"));
                    return s[j] ? n(function (e, t, i, n) {
                        for (var r, o = s(e, null, n, []), a = e.length; a--;)(r = o[a]) && (e[a] = !(t[a] = r))
                    }) : function (e, n, r) {
                        return t[0] = e, s(t, null, r, i), !i.pop()
                    }
                }),
                has: n(function (e) {
                    return function (t) {
                        return i(e, t).length > 0
                    }
                }),
                contains: n(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                    }
                }),
                lang: n(function (e) {
                    return gt.test(e || "") || i.error("unsupported lang: " + e), e = e.replace(wt, Ct).toLowerCase(),
                    function (t) {
                        var i;
                        do
                            if (i = N ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === e || 0 === i.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function (t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function (e) {
                    return e === L
                },
                focus: function (e) {
                    return e === R.activeElement && (!R.hasFocus || R.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !! e.checked || "option" === t && !! e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0
                },
                parent: function (e) {
                    return !S.pseudos.empty(e)
                },
                header: function (e) {
                    return Dt.test(e.nodeName)
                },
                input: function (e) {
                    return _t.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: u(function () {
                    return [0]
                }),
                last: u(function (e, t) {
                    return [t - 1]
                }),
                eq: u(function (e, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: u(function (e, t) {
                    for (var i = 0; t > i; i += 2) e.push(i);
                    return e
                }),
                odd: u(function (e, t) {
                    for (var i = 1; t > i; i += 2) e.push(i);
                    return e
                }),
                lt: u(function (e, t, i) {
                    for (var s = 0 > i ? i + t : i; --s >= 0;) e.push(s);
                    return e
                }),
                gt: u(function (e, t, i) {
                    for (var s = 0 > i ? i + t : i; t > ++s;) e.push(s);
                    return e
                })
            }
        }, S.pseudos.nth = S.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) S.pseudos[b] = c(b);
        for (b in {
            submit: !0,
            reset: !0
        }) S.pseudos[b] = l(b);
        d.prototype = S.filters = S.pseudos, S.setFilters = new d, x = i.compile = function (e, t) {
            var i, s = [],
                n = [],
                r = z[e + " "];
            if (!r) {
                for (t || (t = h(e)), i = t.length; i--;) r = v(t[i]), r[j] ? s.push(r) : n.push(r);
                r = z(e, y(n, s))
            }
            return r
        }, w.sortStable = j.split("").sort(V).join("") === j, w.detectDuplicates = G, M(), w.sortDetached = r(function (e) {
            return 1 & e.compareDocumentPosition(R.createElement("div"))
        }), r(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, i, s) {
            return s ? t : e.getAttribute(i, "type" === i.toLowerCase() ? 1 : 2)
        }), w.attributes && r(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, i, s) {
            return s || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
        }), r(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(st, function (e, i, s) {
            var n;
            return s ? t : (n = e.getAttributeNode(i)) && n.specified ? n.value : e[i] === !0 ? i.toLowerCase() : null
        }), rt.find = i, rt.expr = i.selectors, rt.expr[":"] = rt.expr.pseudos, rt.unique = i.uniqueSort, rt.text = i.getText, rt.isXMLDoc = i.isXML, rt.contains = i.contains
    }(e);
    var mt = {};
    rt.Callbacks = function (e) {
        e = "string" == typeof e ? mt[e] || s(e) : rt.extend({}, e);
        var i, n, r, o, a, c, l = [],
            u = !e.once && [],
            d = function (t) {
                for (i = e.memory && t, n = !0, c = o || 0, o = 0, a = l.length, r = !0; l && a > c; c++)
                    if (l[c].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        i = !1;
                        break
                    }
                r = !1, l && (u ? u.length && d(u.shift()) : i ? l = [] : h.disable())
            }, h = {
                add: function () {
                    if (l) {
                        var t = l.length;
                        (function s(t) {
                            rt.each(t, function (t, i) {
                                var n = rt.type(i);
                                "function" === n ? e.unique && h.has(i) || l.push(i) : i && i.length && "string" !== n && s(i)
                            })
                        })(arguments), r ? a = l.length : i && (o = t, d(i))
                    }
                    return this
                },
                remove: function () {
                    return l && rt.each(arguments, function (e, t) {
                        for (var i;
                            (i = rt.inArray(t, l, i)) > -1;) l.splice(i, 1), r && (a >= i && a--, c >= i && c--)
                    }), this
                },
                has: function (e) {
                    return e ? rt.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function () {
                    return l = [], a = 0, this
                },
                disable: function () {
                    return l = u = i = t, this
                },
                disabled: function () {
                    return !l
                },
                lock: function () {
                    return u = t, i || h.disable(), this
                },
                locked: function () {
                    return !u
                },
                fireWith: function (e, t) {
                    return !l || n && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? u.push(t) : d(t)), this
                },
                fire: function () {
                    return h.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!n
                }
            };
        return h
    }, rt.extend({
        Deferred: function (e) {
            var t = [
                ["resolve", "done", rt.Callbacks("once memory"), "resolved"],
                ["reject", "fail", rt.Callbacks("once memory"), "rejected"],
                ["notify", "progress", rt.Callbacks("memory")]
            ],
                i = "pending",
                s = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return n.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return rt.Deferred(function (i) {
                            rt.each(t, function (t, r) {
                                var o = r[0],
                                    a = rt.isFunction(e[t]) && e[t];
                                n[r[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && rt.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o + "With"](this === s ? i.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? rt.extend(e, s) : s
                    }
                }, n = {};
            return s.pipe = s.then, rt.each(t, function (e, r) {
                var o = r[2],
                    a = r[3];
                s[r[1]] = o.add, a && o.add(function () {
                    i = a
                }, t[1 ^ e][2].disable, t[2][2].lock), n[r[0]] = function () {
                    return n[r[0] + "With"](this === n ? s : this, arguments), this
                }, n[r[0] + "With"] = o.fireWith
            }), s.promise(n), e && e.call(n, n), n
        },
        when: function (e) {
            var t, i, s, n = 0,
                r = et.call(arguments),
                o = r.length,
                a = 1 !== o || e && rt.isFunction(e.promise) ? o : 0,
                c = 1 === a ? e : rt.Deferred(),
                l = function (e, i, s) {
                    return function (n) {
                        i[e] = this, s[e] = arguments.length > 1 ? et.call(arguments) : n, s === t ? c.notifyWith(i, s) : --a || c.resolveWith(i, s)
                    }
                };
            if (o > 1)
                for (t = Array(o), i = Array(o), s = Array(o); o > n; n++) r[n] && rt.isFunction(r[n].promise) ? r[n].promise().done(l(n, s, r)).fail(c.reject).progress(l(n, i, t)) : --a;
            return a || c.resolveWith(s, r), c.promise()
        }
    }), rt.support = function (t) {
        var i = z.createElement("input"),
            s = z.createDocumentFragment(),
            n = z.createElement("div"),
            r = z.createElement("select"),
            o = r.appendChild(z.createElement("option"));
        return i.type ? (i.type = "checkbox", t.checkOn = "" !== i.value, t.optSelected = o.selected, t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, r.disabled = !0, t.optDisabled = !o.disabled, i = z.createElement("input"), i.value = "t", i.type = "radio", t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), s.appendChild(i), t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = "onfocusin" in e, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === n.style.backgroundClip, rt(function () {
            var i, s, r = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
                o = z.getElementsByTagName("body")[0];
            o && (i = z.createElement("div"), i.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", o.appendChild(i).appendChild(n), n.innerHTML = "", n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", rt.swap(o, null != o.style.zoom ? {
                zoom: 1
            } : {}, function () {
                t.boxSizing = 4 === n.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(n, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(n, null) || {
                width: "4px"
            }).width, s = n.appendChild(z.createElement("div")), s.style.cssText = n.style.cssText = r, s.style.marginRight = s.style.width = "0", n.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(s, null) || {}).marginRight)), o.removeChild(i))
        }), t) : t
    }({});
    var ft, gt, Tt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        vt = /([A-Z])/g;
    n.uid = 1, n.accepts = function (e) {
        return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0
    }, n.prototype = {
        key: function (e) {
            if (!n.accepts(e)) return 0;
            var t = {}, i = e[this.expando];
            if (!i) {
                i = n.uid++;
                try {
                    t[this.expando] = {
                        value: i
                    }, Object.defineProperties(e, t)
                } catch (s) {
                    t[this.expando] = i, rt.extend(e, t)
                }
            }
            return this.cache[i] || (this.cache[i] = {}), i
        },
        set: function (e, t, i) {
            var s, n = this.key(e),
                r = this.cache[n];
            if ("string" == typeof t) r[t] = i;
            else if (rt.isEmptyObject(r)) rt.extend(this.cache[n], t);
            else
                for (s in t) r[s] = t[s];
            return r
        },
        get: function (e, i) {
            var s = this.cache[this.key(e)];
            return i === t ? s : s[i]
        },
        access: function (e, i, s) {
            var n;
            return i === t || i && "string" == typeof i && s === t ? (n = this.get(e, i), n !== t ? n : this.get(e, rt.camelCase(i))) : (this.set(e, i, s), s !== t ? s : i)
        },
        remove: function (e, i) {
            var s, n, r, o = this.key(e),
                a = this.cache[o];
            if (i === t) this.cache[o] = {};
            else {
                rt.isArray(i) ? n = i.concat(i.map(rt.camelCase)) : (r = rt.camelCase(i), i in a ? n = [i, r] : (n = r, n = n in a ? [n] : n.match(at) || [])), s = n.length;
                for (; s--;) delete a[n[s]]
            }
        },
        hasData: function (e) {
            return !rt.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    }, ft = new n, gt = new n, rt.extend({
        acceptData: n.accepts,
        hasData: function (e) {
            return ft.hasData(e) || gt.hasData(e)
        },
        data: function (e, t, i) {
            return ft.access(e, t, i)
        },
        removeData: function (e, t) {
            ft.remove(e, t)
        },
        _data: function (e, t, i) {
            return gt.access(e, t, i)
        },
        _removeData: function (e, t) {
            gt.remove(e, t)
        }
    }), rt.fn.extend({
        data: function (e, i) {
            var s, n, o = this[0],
                a = 0,
                c = null;
            if (e === t) {
                if (this.length && (c = ft.get(o), 1 === o.nodeType && !gt.get(o, "hasDataAttrs"))) {
                    for (s = o.attributes; s.length > a; a++) n = s[a].name, 0 === n.indexOf("data-") && (n = rt.camelCase(n.slice(5)), r(o, n, c[n]));
                    gt.set(o, "hasDataAttrs", !0)
                }
                return c
            }
            return "object" == typeof e ? this.each(function () {
                ft.set(this, e)
            }) : rt.access(this, function (i) {
                var s, n = rt.camelCase(e);
                if (o && i === t) {
                    if (s = ft.get(o, e), s !== t) return s;
                    if (s = ft.get(o, n), s !== t) return s;
                    if (s = r(o, n, t), s !== t) return s
                } else this.each(function () {
                    var s = ft.get(this, n);
                    ft.set(this, n, i), -1 !== e.indexOf("-") && s !== t && ft.set(this, e, i)
                })
            }, null, i, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                ft.remove(this, e)
            })
        }
    }), rt.extend({
        queue: function (e, i, s) {
            var n;
            return e ? (i = (i || "fx") + "queue", n = gt.get(e, i), s && (!n || rt.isArray(s) ? n = gt.access(e, i, rt.makeArray(s)) : n.push(s)), n || []) : t
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var i = rt.queue(e, t),
                s = i.length,
                n = i.shift(),
                r = rt._queueHooks(e, t),
                o = function () {
                    rt.dequeue(e, t)
                };
            "inprogress" === n && (n = i.shift(), s--), n && ("fx" === t && i.unshift("inprogress"), delete r.stop, n.call(e, o, r)), !s && r && r.empty.fire()
        },
        _queueHooks: function (e, t) {
            var i = t + "queueHooks";
            return gt.get(e, i) || gt.access(e, i, {
                empty: rt.Callbacks("once memory").add(function () {
                    gt.remove(e, [t + "queue", i])
                })
            })
        }
    }), rt.fn.extend({
        queue: function (e, i) {
            var s = 2;
            return "string" != typeof e && (i = e, e = "fx", s--), s > arguments.length ? rt.queue(this[0], e) : i === t ? this : this.each(function () {
                var t = rt.queue(this, e, i);
                rt._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && rt.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                rt.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = rt.fx ? rt.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, i) {
                var s = setTimeout(t, e);
                i.stop = function () {
                    clearTimeout(s)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, i) {
            var s, n = 1,
                r = rt.Deferred(),
                o = this,
                a = this.length,
                c = function () {
                    --n || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (i = e, e = t), e = e || "fx"; a--;) s = gt.get(o[a], e + "queueHooks"), s && s.empty && (n++, s.empty.add(c));
            return c(), r.promise(i)
        }
    });
    var yt, _t, Dt = /[\t\r\n\f]/g,
        bt = /\r/g,
        wt = /^(?:input|select|textarea|button)$/i;
    rt.fn.extend({
        attr: function (e, t) {
            return rt.access(this, rt.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                rt.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return rt.access(this, rt.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[rt.propFix[e] || e]
            })
        },
        addClass: function (e) {
            var t, i, s, n, r, o = 0,
                a = this.length,
                c = "string" == typeof e && e;
            if (rt.isFunction(e)) return this.each(function (t) {
                rt(this).addClass(e.call(this, t, this.className))
            });
            if (c)
                for (t = (e || "").match(at) || []; a > o; o++)
                    if (i = this[o], s = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Dt, " ") : " ")) {
                        for (r = 0; n = t[r++];) 0 > s.indexOf(" " + n + " ") && (s += n + " ");
                        i.className = rt.trim(s)
                    }
            return this
        },
        removeClass: function (e) {
            var t, i, s, n, r, o = 0,
                a = this.length,
                c = 0 === arguments.length || "string" == typeof e && e;
            if (rt.isFunction(e)) return this.each(function (t) {
                rt(this).removeClass(e.call(this, t, this.className))
            });
            if (c)
                for (t = (e || "").match(at) || []; a > o; o++)
                    if (i = this[o], s = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Dt, " ") : "")) {
                        for (r = 0; n = t[r++];)
                            for (; s.indexOf(" " + n + " ") >= 0;) s = s.replace(" " + n + " ", " ");
                        i.className = e ? rt.trim(s) : ""
                    }
            return this
        },
        toggleClass: function (e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : rt.isFunction(e) ? this.each(function (i) {
                rt(this).toggleClass(e.call(this, i, this.className, t), t)
            }) : this.each(function () {
                if ("string" === i)
                    for (var t, s = 0, n = rt(this), r = e.match(at) || []; t = r[s++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
                else(i === W || "boolean" === i) && (this.className && gt.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : gt.get(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", i = 0, s = this.length; s > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Dt, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var i, s, n, r = this[0]; {
                if (arguments.length) return n = rt.isFunction(e), this.each(function (s) {
                    var r;
                    1 === this.nodeType && (r = n ? e.call(this, s, rt(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : rt.isArray(r) && (r = rt.map(r, function (e) {
                        return null == e ? "" : e + ""
                    })), i = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, r, "value") !== t || (this.value = r))
                });
                if (r) return i = rt.valHooks[r.type] || rt.valHooks[r.nodeName.toLowerCase()], i && "get" in i && (s = i.get(r, "value")) !== t ? s : (s = r.value, "string" == typeof s ? s.replace(bt, "") : null == s ? "" : s)
            }
        }
    }), rt.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    for (var t, i, s = e.options, n = e.selectedIndex, r = "select-one" === e.type || 0 > n, o = r ? null : [], a = r ? n + 1 : s.length, c = 0 > n ? a : r ? n : 0; a > c; c++)
                        if (i = s[c], !(!i.selected && c !== n || (rt.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && rt.nodeName(i.parentNode, "optgroup"))) {
                            if (t = rt(i).val(), r) return t;
                            o.push(t)
                        }
                    return o
                },
                set: function (e, t) {
                    for (var i, s, n = e.options, r = rt.makeArray(t), o = n.length; o--;) s = n[o], (s.selected = rt.inArray(rt(s).val(), r) >= 0) && (i = !0);
                    return i || (e.selectedIndex = -1), r
                }
            }
        },
        attr: function (e, i, s) {
            var n, r, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === W ? rt.prop(e, i, s) : (1 === o && rt.isXMLDoc(e) || (i = i.toLowerCase(), n = rt.attrHooks[i] || (rt.expr.match.bool.test(i) ? _t : yt)), s === t ? n && "get" in n && null !== (r = n.get(e, i)) ? r : (r = rt.find.attr(e, i), null == r ? t : r) : null !== s ? n && "set" in n && (r = n.set(e, s, i)) !== t ? r : (e.setAttribute(i, s + ""), s) : (rt.removeAttr(e, i), t))
        },
        removeAttr: function (e, t) {
            var i, s, n = 0,
                r = t && t.match(at);
            if (r && 1 === e.nodeType)
                for (; i = r[n++];) s = rt.propFix[i] || i, rt.expr.match.bool.test(i) && (e[s] = !1), e.removeAttribute(i)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!rt.support.radioValue && "radio" === t && rt.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (e, i, s) {
            var n, r, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !rt.isXMLDoc(e), o && (i = rt.propFix[i] || i, r = rt.propHooks[i]), s !== t ? r && "set" in r && (n = r.set(e, s, i)) !== t ? n : e[i] = s : r && "get" in r && null !== (n = r.get(e, i)) ? n : e[i]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    return e.hasAttribute("tabindex") || wt.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), _t = {
        set: function (e, t, i) {
            return t === !1 ? rt.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, rt.each(rt.expr.match.bool.source.match(/\w+/g), function (e, i) {
        var s = rt.expr.attrHandle[i] || rt.find.attr;
        rt.expr.attrHandle[i] = function (e, i, n) {
            var r = rt.expr.attrHandle[i],
                o = n ? t : (rt.expr.attrHandle[i] = t) != s(e, i, n) ? i.toLowerCase() : null;
            return rt.expr.attrHandle[i] = r, o
        }
    }), rt.support.optSelected || (rt.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        rt.propFix[this.toLowerCase()] = this
    }), rt.each(["radio", "checkbox"], function () {
        rt.valHooks[this] = {
            set: function (e, i) {
                return rt.isArray(i) ? e.checked = rt.inArray(rt(e).val(), i) >= 0 : t
            }
        }, rt.support.checkOn || (rt.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Ct = /^key/,
        St = /^(?:mouse|contextmenu)|click/,
        Et = /^(?:focusinfocus|focusoutblur)$/,
        kt = /^([^.]*)(?:\.(.+)|)$/;
    rt.event = {
        global: {},
        add: function (e, i, s, n, r) {
            var o, a, c, l, u, d, h, p, m, f, g, T = gt.get(e);
            if (T) {
                for (s.handler && (o = s, s = o.handler, r = o.selector), s.guid || (s.guid = rt.guid++), (l = T.events) || (l = T.events = {}), (a = T.handle) || (a = T.handle = function (e) {
                    return typeof rt === W || e && rt.event.triggered === e.type ? t : rt.event.dispatch.apply(a.elem, arguments)
                }, a.elem = e), i = (i || "").match(at) || [""], u = i.length; u--;) c = kt.exec(i[u]) || [], m = g = c[1], f = (c[2] || "").split(".").sort(), m && (h = rt.event.special[m] || {}, m = (r ? h.delegateType : h.bindType) || m, h = rt.event.special[m] || {}, d = rt.extend({
                    type: m,
                    origType: g,
                    data: n,
                    handler: s,
                    guid: s.guid,
                    selector: r,
                    needsContext: r && rt.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, o), (p = l[m]) || (p = l[m] = [], p.delegateCount = 0, h.setup && h.setup.call(e, n, f, a) !== !1 || e.addEventListener && e.addEventListener(m, a, !1)), h.add && (h.add.call(e, d), d.handler.guid || (d.handler.guid = s.guid)), r ? p.splice(p.delegateCount++, 0, d) : p.push(d), rt.event.global[m] = !0);
                e = null
            }
        },
        remove: function (e, t, i, s, n) {
            var r, o, a, c, l, u, d, h, p, m, f, g = gt.hasData(e) && gt.get(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(at) || [""], l = t.length; l--;)
                    if (a = kt.exec(t[l]) || [], p = f = a[1], m = (a[2] || "").split(".").sort(), p) {
                        for (d = rt.event.special[p] || {}, p = (s ? d.delegateType : d.bindType) || p, h = c[p] || [], a = a[2] && RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = r = h.length; r--;) u = h[r], !n && f !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || s && s !== u.selector && ("**" !== s || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
                        o && !h.length && (d.teardown && d.teardown.call(e, m, g.handle) !== !1 || rt.removeEvent(e, p, g.handle), delete c[p])
                    } else
                        for (p in c) rt.event.remove(e, p + t[l], i, s, !0);
                rt.isEmptyObject(c) && (delete g.handle, gt.remove(e, "events"))
            }
        },
        trigger: function (i, s, n, r) {
            var o, a, c, l, u, d, h, p = [n || z],
                m = st.call(i, "type") ? i.type : i,
                f = st.call(i, "namespace") ? i.namespace.split(".") : [];
            if (a = c = n = n || z, 3 !== n.nodeType && 8 !== n.nodeType && !Et.test(m + rt.event.triggered) && (m.indexOf(".") >= 0 && (f = m.split("."), m = f.shift(), f.sort()), u = 0 > m.indexOf(":") && "on" + m, i = i[rt.expando] ? i : new rt.Event(m, "object" == typeof i && i), i.isTrigger = r ? 2 : 3, i.namespace = f.join("."), i.namespace_re = i.namespace ? RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, i.result = t, i.target || (i.target = n), s = null == s ? [i] : rt.makeArray(s, [i]), h = rt.event.special[m] || {}, r || !h.trigger || h.trigger.apply(n, s) !== !1)) {
                if (!r && !h.noBubble && !rt.isWindow(n)) {
                    for (l = h.delegateType || m, Et.test(l + m) || (a = a.parentNode); a; a = a.parentNode) p.push(a), c = a;
                    c === (n.ownerDocument || z) && p.push(c.defaultView || c.parentWindow || e)
                }
                for (o = 0;
                    (a = p[o++]) && !i.isPropagationStopped();) i.type = o > 1 ? l : h.bindType || m, d = (gt.get(a, "events") || {})[i.type] && gt.get(a, "handle"), d && d.apply(a, s), d = u && a[u], d && rt.acceptData(a) && d.apply && d.apply(a, s) === !1 && i.preventDefault();
                return i.type = m, r || i.isDefaultPrevented() || h._default && h._default.apply(p.pop(), s) !== !1 || !rt.acceptData(n) || u && rt.isFunction(n[m]) && !rt.isWindow(n) && (c = n[u], c && (n[u] = null), rt.event.triggered = m, n[m](), rt.event.triggered = t, c && (n[u] = c)), i.result
            }
        },
        dispatch: function (e) {
            e = rt.event.fix(e);
            var i, s, n, r, o, a = [],
                c = et.call(arguments),
                l = (gt.get(this, "events") || {})[e.type] || [],
                u = rt.event.special[e.type] || {};
            if (c[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = rt.event.handlers.call(this, e, l), i = 0;
                    (r = a[i++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, s = 0;
                        (o = r.handlers[s++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, n = ((rt.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, c), n !== t && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, i) {
            var s, n, r, o, a = [],
                c = i.delegateCount,
                l = e.target;
            if (c && l.nodeType && (!e.button || "click" !== e.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled !== !0 || "click" !== e.type) {
                        for (n = [], s = 0; c > s; s++) o = i[s], r = o.selector + " ", n[r] === t && (n[r] = o.needsContext ? rt(r, this).index(l) >= 0 : rt.find(r, this, null, [l]).length), n[r] && n.push(o);
                        n.length && a.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return i.length > c && a.push({
                elem: this,
                handlers: i.slice(c)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, i) {
                var s, n, r, o = i.button;
                return null == e.pageX && null != i.clientX && (s = e.target.ownerDocument || z, n = s.documentElement, r = s.body, e.pageX = i.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), e.pageY = i.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), e.which || o === t || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[rt.expando]) return e;
            var t, i, s, n = e.type,
                r = e,
                o = this.fixHooks[n];
            for (o || (this.fixHooks[n] = o = St.test(n) ? this.mouseHooks : Ct.test(n) ? this.keyHooks : {}), s = o.props ? this.props.concat(o.props) : this.props, e = new rt.Event(r), t = s.length; t--;) i = s[t], e[i] = r[i];
            return e.target || (e.target = z), 3 === e.target.nodeType && (e.target = e.target.parentNode), o.filter ? o.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== c() && this.focus ? (this.focus(), !1) : t
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === c() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && rt.nodeName(this, "input") ? (this.click(), !1) : t
                },
                _default: function (e) {
                    return rt.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, i, s) {
            var n = rt.extend(new rt.Event, i, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            s ? rt.event.trigger(n, null, t) : rt.event.dispatch.call(t, n), n.isDefaultPrevented() && i.preventDefault()
        }
    }, rt.removeEvent = function (e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i, !1)
    }, rt.Event = function (e, i) {
        return this instanceof rt.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? o : a) : this.type = e, i && rt.extend(this, i), this.timeStamp = e && e.timeStamp || rt.now(), this[rt.expando] = !0, t) : new rt.Event(e, i)
    }, rt.Event.prototype = {
        isDefaultPrevented: a,
        isPropagationStopped: a,
        isImmediatePropagationStopped: a,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = o, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = o, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = o, this.stopPropagation()
        }
    }, rt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        rt.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var i, s = this,
                    n = e.relatedTarget,
                    r = e.handleObj;
                return (!n || n !== s && !rt.contains(s, n)) && (e.type = r.origType, i = r.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), rt.support.focusinBubbles || rt.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var i = 0,
            s = function (e) {
                rt.event.simulate(t, e.target, rt.event.fix(e), !0)
            };
        rt.event.special[t] = {
            setup: function () {
                0 === i++ && z.addEventListener(e, s, !0)
            },
            teardown: function () {
                0 === --i && z.removeEventListener(e, s, !0)
            }
        }
    }), rt.fn.extend({
        on: function (e, i, s, n, r) {
            var o, c;
            if ("object" == typeof e) {
                "string" != typeof i && (s = s || i, i = t);
                for (c in e) this.on(c, i, s, e[c], r);
                return this
            }
            if (null == s && null == n ? (n = i, s = i = t) : null == n && ("string" == typeof i ? (n = s, s = t) : (n = s, s = i, i = t)), n === !1) n = a;
            else if (!n) return this;
            return 1 === r && (o = n, n = function (e) {
                return rt().off(e), o.apply(this, arguments)
            }, n.guid = o.guid || (o.guid = rt.guid++)), this.each(function () {
                rt.event.add(this, e, n, s, i)
            })
        },
        one: function (e, t, i, s) {
            return this.on(e, t, i, s, 1)
        },
        off: function (e, i, s) {
            var n, r;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, rt(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, i, e[r]);
                return this
            }
            return (i === !1 || "function" == typeof i) && (s = i, i = t), s === !1 && (s = a), this.each(function () {
                rt.event.remove(this, e, s, i)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                rt.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, i) {
            var s = this[0];
            return s ? rt.event.trigger(e, i, s, !0) : t
        }
    });
    var xt = /^.[^:#\[\.,]*$/,
        At = /^(?:parents|prev(?:Until|All))/,
        It = rt.expr.match.needsContext,
        Mt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    rt.fn.extend({
        find: function (e) {
            var t, i = [],
                s = this,
                n = s.length;
            if ("string" != typeof e) return this.pushStack(rt(e).filter(function () {
                for (t = 0; n > t; t++)
                    if (rt.contains(s[t], this)) return !0
            }));
            for (t = 0; n > t; t++) rt.find(e, s[t], i);
            return i = this.pushStack(n > 1 ? rt.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        has: function (e) {
            var t = rt(e, this),
                i = t.length;
            return this.filter(function () {
                for (var e = 0; i > e; e++)
                    if (rt.contains(this, t[e])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(u(this, e || [], !0))
        },
        filter: function (e) {
            return this.pushStack(u(this, e || [], !1))
        },
        is: function (e) {
            return !!u(this, "string" == typeof e && It.test(e) ? rt(e) : e || [], !1).length
        },
        closest: function (e, t) {
            for (var i, s = 0, n = this.length, r = [], o = It.test(e) || "string" != typeof e ? rt(e, t || this.context) : 0; n > s; s++)
                for (i = this[s]; i && i !== t; i = i.parentNode)
                    if (11 > i.nodeType && (o ? o.index(i) > -1 : 1 === i.nodeType && rt.find.matchesSelector(i, e))) {
                        i = r.push(i);
                        break
                    }
            return this.pushStack(r.length > 1 ? rt.unique(r) : r)
        },
        index: function (e) {
            return e ? "string" == typeof e ? tt.call(rt(e), this[0]) : tt.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            var i = "string" == typeof e ? rt(e, t) : rt.makeArray(e && e.nodeType ? [e] : e),
                s = rt.merge(this.get(), i);
            return this.pushStack(rt.unique(s))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), rt.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return rt.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, i) {
            return rt.dir(e, "parentNode", i)
        },
        next: function (e) {
            return l(e, "nextSibling")
        },
        prev: function (e) {
            return l(e, "previousSibling")
        },
        nextAll: function (e) {
            return rt.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return rt.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, i) {
            return rt.dir(e, "nextSibling", i)
        },
        prevUntil: function (e, t, i) {
            return rt.dir(e, "previousSibling", i)
        },
        siblings: function (e) {
            return rt.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return rt.sibling(e.firstChild)
        },
        contents: function (e) {
            return e.contentDocument || rt.merge([], e.childNodes)
        }
    }, function (e, t) {
        rt.fn[e] = function (i, s) {
            var n = rt.map(this, t, i);
            return "Until" !== e.slice(-5) && (s = i), s && "string" == typeof s && (n = rt.filter(s, n)), this.length > 1 && (Mt[e] || rt.unique(n), At.test(e) && n.reverse()), this.pushStack(n)
        }
    }), rt.extend({
        filter: function (e, t, i) {
            var s = t[0];
            return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === s.nodeType ? rt.find.matchesSelector(s, e) ? [s] : [] : rt.find.matches(e, rt.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        },
        dir: function (e, i, s) {
            for (var n = [], r = s !== t;
                (e = e[i]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && rt(e).is(s)) break;
                    n.push(e)
                }
            return n
        },
        sibling: function (e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        }
    });
    var Rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Lt = /<([\w:]+)/,
        Nt = /<|&#?\w+;/,
        Ft = /<(?:script|style|link)/i,
        $t = /^(?:checkbox|radio)$/i,
        Ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ut = /^$|\/(?:java|ecma)script/i,
        jt = /^true\/(.*)/,
        Pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Bt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Bt.optgroup = Bt.option, Bt.tbody = Bt.tfoot = Bt.colgroup = Bt.caption = Bt.thead, Bt.th = Bt.td, rt.fn.extend({
        text: function (e) {
            return rt.access(this, function (e) {
                return e === t ? rt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var i, s = e ? rt.filter(e, this) : this, n = 0; null != (i = s[n]); n++) t || 1 !== i.nodeType || rt.cleanData(g(i)), i.parentNode && (t && rt.contains(i.ownerDocument, i) && m(g(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (rt.cleanData(g(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return rt.clone(this, e, t)
            })
        },
        html: function (e) {
            return rt.access(this, function (e) {
                var i = this[0] || {}, s = 0,
                    n = this.length;
                if (e === t && 1 === i.nodeType) return i.innerHTML;
                if ("string" == typeof e && !Ft.test(e) && !Bt[(Lt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Rt, "<$1></$2>");
                    try {
                        for (; n > s; s++) i = this[s] || {}, 1 === i.nodeType && (rt.cleanData(g(i, !1)), i.innerHTML = e);
                        i = 0
                    } catch (r) {}
                }
                i && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = rt.map(this, function (e) {
                return [e.nextSibling, e.parentNode]
            }),
                t = 0;
            return this.domManip(arguments, function (i) {
                var s = e[t++],
                    n = e[t++];
                n && (s && s.parentNode !== n && (s = this.nextSibling), rt(this).remove(), n.insertBefore(i, s))
            }, !0), t ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t, i) {
            e = J.apply([], e);
            var s, n, r, o, a, c, l = 0,
                u = this.length,
                d = this,
                m = u - 1,
                f = e[0],
                T = rt.isFunction(f);
            if (T || !(1 >= u || "string" != typeof f || rt.support.checkClone) && Ot.test(f)) return this.each(function (s) {
                var n = d.eq(s);
                T && (e[0] = f.call(this, s, n.html())), n.domManip(e, t, i)
            });
            if (u && (s = rt.buildFragment(e, this[0].ownerDocument, !1, !i && this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (r = rt.map(g(s, "script"), h), o = r.length; u > l; l++) a = s, l !== m && (a = rt.clone(a, !0, !0), o && rt.merge(r, g(a, "script"))), t.call(this[l], a, l);
                if (o)
                    for (c = r[r.length - 1].ownerDocument, rt.map(r, p), l = 0; o > l; l++) a = r[l], Ut.test(a.type || "") && !gt.access(a, "globalEval") && rt.contains(c, a) && (a.src ? rt._evalUrl(a.src) : rt.globalEval(a.textContent.replace(Pt, "")))
            }
            return this
        }
    }), rt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        rt.fn[e] = function (e) {
            for (var i, s = [], n = rt(e), r = n.length - 1, o = 0; r >= o; o++) i = o === r ? this : this.clone(!0), rt(n[o])[t](i), Z.apply(s, i.get());
            return this.pushStack(s)
        }
    }), rt.extend({
        clone: function (e, t, i) {
            var s, n, r, o, a = e.cloneNode(!0),
                c = rt.contains(e.ownerDocument, e);
            if (!(rt.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || rt.isXMLDoc(e)))
                for (o = g(a), r = g(e), s = 0, n = r.length; n > s; s++) T(r[s], o[s]);
            if (t)
                if (i)
                    for (r = r || g(e), o = o || g(a), s = 0, n = r.length; n > s; s++) f(r[s], o[s]);
                else f(e, a);
            return o = g(a, "script"), o.length > 0 && m(o, !c && g(e, "script")), a
        },
        buildFragment: function (e, t, i, s) {
            for (var n, r, o, a, c, l, u = 0, d = e.length, h = t.createDocumentFragment(), p = []; d > u; u++)
                if (n = e[u], n || 0 === n)
                    if ("object" === rt.type(n)) rt.merge(p, n.nodeType ? [n] : n);
                    else if (Nt.test(n)) {
                for (r = r || h.appendChild(t.createElement("div")), o = (Lt.exec(n) || ["", ""])[1].toLowerCase(), a = Bt[o] || Bt._default, r.innerHTML = a[1] + n.replace(Rt, "<$1></$2>") + a[2], l = a[0]; l--;) r = r.lastChild;
                rt.merge(p, r.childNodes), r = h.firstChild, r.textContent = ""
            } else p.push(t.createTextNode(n));
            for (h.textContent = "", u = 0; n = p[u++];)
                if ((!s || -1 === rt.inArray(n, s)) && (c = rt.contains(n.ownerDocument, n), r = g(h.appendChild(n), "script"), c && m(r), i))
                    for (l = 0; n = r[l++];) Ut.test(n.type || "") && i.push(n);
            return h
        },
        cleanData: function (e) {
            for (var i, s, r, o, a, c, l = rt.event.special, u = 0;
                (s = e[u]) !== t; u++) {
                if (n.accepts(s) && (a = s[gt.expando], a && (i = gt.cache[a]))) {
                    if (r = Object.keys(i.events || {}), r.length)
                        for (c = 0;
                            (o = r[c]) !== t; c++) l[o] ? rt.event.remove(s, o) : rt.removeEvent(s, o, i.handle);
                    gt.cache[a] && delete gt.cache[a]
                }
                delete ft.cache[s[ft.expando]]
            }
        },
        _evalUrl: function (e) {
            return rt.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), rt.fn.extend({
        wrapAll: function (e) {
            var t;
            return rt.isFunction(e) ? this.each(function (t) {
                rt(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = rt(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function (e) {
            return rt.isFunction(e) ? this.each(function (t) {
                rt(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = rt(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = rt.isFunction(e);
            return this.each(function (i) {
                rt(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Ht, Wt, Kt = /^(none|table(?!-c[ea]).+)/,
        zt = /^margin/,
        Gt = RegExp("^(" + ot + ")(.*)$", "i"),
        Vt = RegExp("^(" + ot + ")(?!px)[a-z%]+$", "i"),
        qt = RegExp("^([+-])=(" + ot + ")", "i"),
        Yt = {
            BODY: "block"
        }, Qt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Xt = {
            letterSpacing: 0,
            fontWeight: 400
        }, Jt = ["Top", "Right", "Bottom", "Left"],
        Zt = ["Webkit", "O", "Moz", "ms"];
    rt.fn.extend({
        css: function (e, i) {
            return rt.access(this, function (e, i, s) {
                var n, r, o = {}, a = 0;
                if (rt.isArray(i)) {
                    for (n = _(e), r = i.length; r > a; a++) o[i[a]] = rt.css(e, i[a], !1, n);
                    return o
                }
                return s !== t ? rt.style(e, i, s) : rt.css(e, i)
            }, e, i, arguments.length > 1)
        },
        show: function () {
            return D(this, !0)
        },
        hide: function () {
            return D(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                y(this) ? rt(this).show() : rt(this).hide()
            })
        }
    }), rt.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var i = Ht(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (e, i, s, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, c = rt.camelCase(i),
                    l = e.style;
                return i = rt.cssProps[c] || (rt.cssProps[c] = v(l, c)), a = rt.cssHooks[i] || rt.cssHooks[c], s === t ? a && "get" in a && (r = a.get(e, !1, n)) !== t ? r : l[i] : (o = typeof s, "string" === o && (r = qt.exec(s)) && (s = (r[1] + 1) * r[2] + parseFloat(rt.css(e, i)), o = "number"), null == s || "number" === o && isNaN(s) || ("number" !== o || rt.cssNumber[c] || (s += "px"), rt.support.clearCloneStyle || "" !== s || 0 !== i.indexOf("background") || (l[i] = "inherit"), a && "set" in a && (s = a.set(e, s, n)) === t || (l[i] = s)), t)
            }
        },
        css: function (e, i, s, n) {
            var r, o, a, c = rt.camelCase(i);
            return i = rt.cssProps[c] || (rt.cssProps[c] = v(e.style, c)), a = rt.cssHooks[i] || rt.cssHooks[c], a && "get" in a && (r = a.get(e, !0, s)), r === t && (r = Ht(e, i, n)), "normal" === r && i in Xt && (r = Xt[i]), "" === s || s ? (o = parseFloat(r), s === !0 || rt.isNumeric(o) ? o || 0 : r) : r
        }
    }), Ht = function (e, i, s) {
        var n, r, o, a = s || _(e),
            c = a ? a.getPropertyValue(i) || a[i] : t,
            l = e.style;
        return a && ("" !== c || rt.contains(e.ownerDocument, e) || (c = rt.style(e, i)), Vt.test(c) && zt.test(i) && (n = l.width, r = l.minWidth, o = l.maxWidth, l.minWidth = l.maxWidth = l.width = c, c = a.width, l.width = n, l.minWidth = r, l.maxWidth = o)), c
    }, rt.each(["height", "width"], function (e, i) {
        rt.cssHooks[i] = {
            get: function (e, s, n) {
                return s ? 0 === e.offsetWidth && Kt.test(rt.css(e, "display")) ? rt.swap(e, Qt, function () {
                    return C(e, i, n)
                }) : C(e, i, n) : t
            },
            set: function (e, t, s) {
                var n = s && _(e);
                return b(e, t, s ? w(e, i, s, rt.support.boxSizing && "border-box" === rt.css(e, "boxSizing", !1, n), n) : 0)
            }
        }
    }), rt(function () {
        rt.support.reliableMarginRight || (rt.cssHooks.marginRight = {
            get: function (e, i) {
                return i ? rt.swap(e, {
                    display: "inline-block"
                }, Ht, [e, "marginRight"]) : t
            }
        }), !rt.support.pixelPosition && rt.fn.position && rt.each(["top", "left"], function (e, i) {
            rt.cssHooks[i] = {
                get: function (e, s) {
                    return s ? (s = Ht(e, i), Vt.test(s) ? rt(e).position()[i] + "px" : s) : t
                }
            }
        })
    }), rt.expr && rt.expr.filters && (rt.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight
    }, rt.expr.filters.visible = function (e) {
        return !rt.expr.filters.hidden(e)
    }), rt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        rt.cssHooks[e + t] = {
            expand: function (i) {
                for (var s = 0, n = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > s; s++) n[e + Jt[s] + t] = r[s] || r[s - 2] || r[0];
                return n
            }
        }, zt.test(e) || (rt.cssHooks[e + t].set = b)
    });
    var ei = /%20/g,
        ti = /\[\]$/,
        ii = /\r?\n/g,
        si = /^(?:submit|button|image|reset|file)$/i,
        ni = /^(?:input|select|textarea|keygen)/i;
    rt.fn.extend({
        serialize: function () {
            return rt.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = rt.prop(this, "elements");
                return e ? rt.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !rt(this).is(":disabled") && ni.test(this.nodeName) && !si.test(e) && (this.checked || !$t.test(e))
            }).map(function (e, t) {
                var i = rt(this).val();
                return null == i ? null : rt.isArray(i) ? rt.map(i, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(ii, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(ii, "\r\n")
                }
            }).get()
        }
    }), rt.param = function (e, i) {
        var s, n = [],
            r = function (e, t) {
                t = rt.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (i === t && (i = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(e) || e.jquery && !rt.isPlainObject(e)) rt.each(e, function () {
            r(this.name, this.value)
        });
        else
            for (s in e) k(s, e[s], i, r);
        return n.join("&").replace(ei, "+")
    }, rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        rt.fn[t] = function (e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), rt.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, i, s) {
            return this.on(t, e, i, s)
        },
        undelegate: function (e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    });
    var ri, oi, ai = rt.now(),
        ci = /\?/,
        li = /#.*$/,
        ui = /([?&])_=[^&]*/,
        di = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        hi = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        pi = /^(?:GET|HEAD)$/,
        mi = /^\/\//,
        fi = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        gi = rt.fn.load,
        Ti = {}, vi = {}, yi = "*/".concat("*");
    try {
        oi = K.href
    } catch (_i) {
        oi = z.createElement("a"), oi.href = "", oi = oi.href
    }
    ri = fi.exec(oi.toLowerCase()) || [], rt.fn.load = function (e, i, s) {
        if ("string" != typeof e && gi) return gi.apply(this, arguments);
        var n, r, o, a = this,
            c = e.indexOf(" ");
        return c >= 0 && (n = e.slice(c), e = e.slice(0, c)), rt.isFunction(i) ? (s = i, i = t) : i && "object" == typeof i && (r = "POST"), a.length > 0 && rt.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: i
        }).done(function (e) {
            o = arguments, a.html(n ? rt("<div>").append(rt.parseHTML(e)).find(n) : e)
        }).complete(s && function (e, t) {
            a.each(s, o || [e.responseText, t, e])
        }), this
    }, rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        rt.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), rt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: oi,
            type: "GET",
            isLocal: hi.test(ri[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": yi,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": rt.parseJSON,
                "text xml": rt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? I(I(e, rt.ajaxSettings), t) : I(rt.ajaxSettings, e)
        },
        ajaxPrefilter: x(Ti),
        ajaxTransport: x(vi),
        ajax: function (e, i) {
            function s(e, i, s, a) {
                var l, d, v, y, D, w = i;
                2 !== _ && (_ = 2, c && clearTimeout(c), n = t, o = a || "", b.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, s && (y = M(h, b, s)), y = R(h, y, b, l), l ? (h.ifModified && (D = b.getResponseHeader("Last-Modified"), D && (rt.lastModified[r] = D), D = b.getResponseHeader("etag"), D && (rt.etag[r] = D)), 204 === e || "HEAD" === h.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = y.state, d = y.data, v = y.error, l = !v)) : (v = w, (e || !w) && (w = "error", 0 > e && (e = 0))), b.status = e, b.statusText = (i || w) + "", l ? f.resolveWith(p, [d, w, b]) : f.rejectWith(p, [b, w, v]), b.statusCode(T), T = t, u && m.trigger(l ? "ajaxSuccess" : "ajaxError", [b, h, l ? d : v]), g.fireWith(p, [b, w]), u && (m.trigger("ajaxComplete", [b, h]), --rt.active || rt.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (i = e, e = t), i = i || {};
            var n, r, o, a, c, l, u, d, h = rt.ajaxSetup({}, i),
                p = h.context || h,
                m = h.context && (p.nodeType || p.jquery) ? rt(p) : rt.event,
                f = rt.Deferred(),
                g = rt.Callbacks("once memory"),
                T = h.statusCode || {}, v = {}, y = {}, _ = 0,
                D = "canceled",
                b = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === _) {
                            if (!a)
                                for (a = {}; t = di.exec(o);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === _ ? o : null
                    },
                    setRequestHeader: function (e, t) {
                        var i = e.toLowerCase();
                        return _ || (e = y[i] = y[i] || e, v[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return _ || (h.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > _)
                                for (t in e) T[t] = [T[t], e[t]];
                            else b.always(e[b.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || D;
                        return n && n.abort(t), s(0, t), this
                    }
                };
            if (f.promise(b).complete = g.add, b.success = b.done, b.error = b.fail, h.url = ((e || h.url || oi) + "").replace(li, "").replace(mi, ri[1] + "//"), h.type = i.method || i.type || h.method || h.type, h.dataTypes = rt.trim(h.dataType || "*").toLowerCase().match(at) || [""], null == h.crossDomain && (l = fi.exec(h.url.toLowerCase()), h.crossDomain = !(!l || l[1] === ri[1] && l[2] === ri[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (ri[3] || ("http:" === ri[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = rt.param(h.data, h.traditional)), A(Ti, h, i, b), 2 === _) return b;
            u = h.global, u && 0 === rt.active++ && rt.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !pi.test(h.type), r = h.url, h.hasContent || (h.data && (r = h.url += (ci.test(r) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = ui.test(r) ? r.replace(ui, "$1_=" + ai++) : r + (ci.test(r) ? "&" : "?") + "_=" + ai++)), h.ifModified && (rt.lastModified[r] && b.setRequestHeader("If-Modified-Since", rt.lastModified[r]), rt.etag[r] && b.setRequestHeader("If-None-Match", rt.etag[r])), (h.data && h.hasContent && h.contentType !== !1 || i.contentType) && b.setRequestHeader("Content-Type", h.contentType), b.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + yi + "; q=0.01" : "") : h.accepts["*"]);
            for (d in h.headers) b.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (h.beforeSend.call(p, b, h) === !1 || 2 === _)) return b.abort();
            D = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            }) b[d](h[d]);
            if (n = A(vi, h, i, b)) {
                b.readyState = 1, u && m.trigger("ajaxSend", [b, h]), h.async && h.timeout > 0 && (c = setTimeout(function () {
                    b.abort("timeout")
                }, h.timeout));
                try {
                    _ = 1, n.send(v, s)
                } catch (w) {
                    if (!(2 > _)) throw w;
                    s(-1, w)
                }
            } else s(-1, "No Transport");
            return b
        },
        getJSON: function (e, t, i) {
            return rt.get(e, t, i, "json")
        },
        getScript: function (e, i) {
            return rt.get(e, t, i, "script")
        }
    }), rt.each(["get", "post"], function (e, i) {
        rt[i] = function (e, s, n, r) {
            return rt.isFunction(s) && (r = r || n, n = s, s = t), rt.ajax({
                url: e,
                type: i,
                dataType: r,
                data: s,
                success: n
            })
        }
    }), rt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return rt.globalEval(e), e
            }
        }
    }), rt.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), rt.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, i;
            return {
                send: function (s, n) {
                    t = rt("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", i = function (e) {
                        t.remove(), i = null, e && n("error" === e.type ? 404 : 200, e.type)
                    }), z.head.appendChild(t[0])
                },
                abort: function () {
                    i && i()
                }
            }
        }
    });
    var Di = [],
        bi = /(=)\?(?=&|$)|\?\?/;
    rt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Di.pop() || rt.expando + "_" + ai++;
            return this[e] = !0, e
        }
    }), rt.ajaxPrefilter("json jsonp", function (i, s, n) {
        var r, o, a, c = i.jsonp !== !1 && (bi.test(i.url) ? "url" : "string" == typeof i.data && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && bi.test(i.data) && "data");
        return c || "jsonp" === i.dataTypes[0] ? (r = i.jsonpCallback = rt.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, c ? i[c] = i[c].replace(bi, "$1" + r) : i.jsonp !== !1 && (i.url += (ci.test(i.url) ? "&" : "?") + i.jsonp + "=" + r), i.converters["script json"] = function () {
            return a || rt.error(r + " was not called"), a[0]
        }, i.dataTypes[0] = "json", o = e[r], e[r] = function () {
            a = arguments
        }, n.always(function () {
            e[r] = o, i[r] && (i.jsonpCallback = s.jsonpCallback, Di.push(r)), a && rt.isFunction(o) && o(a[0]), a = o = t
        }), "script") : t
    }), rt.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var wi = rt.ajaxSettings.xhr(),
        Ci = {
            0: 200,
            1223: 204
        }, Si = 0,
        Ei = {};
    e.ActiveXObject && rt(e).on("unload", function () {
        for (var e in Ei) Ei[e]();
        Ei = t
    }), rt.support.cors = !! wi && "withCredentials" in wi, rt.support.ajax = wi = !! wi, rt.ajaxTransport(function (e) {
        var i;
        return rt.support.cors || wi && !e.crossDomain ? {
            send: function (s, n) {
                var r, o, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (r in e.xhrFields) a[r] = e.xhrFields[r];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest");
                for (r in s) a.setRequestHeader(r, s[r]);
                i = function (e) {
                    return function () {
                        i && (delete Ei[o], i = a.onload = a.onerror = null, "abort" === e ? a.abort() : "error" === e ? n(a.status || 404, a.statusText) : n(Ci[a.status] || a.status, a.statusText, "string" == typeof a.responseText ? {
                            text: a.responseText
                        } : t, a.getAllResponseHeaders()))
                    }
                }, a.onload = i(), a.onerror = i("error"), i = Ei[o = Si++] = i("abort"), a.send(e.hasContent && e.data || null)
            },
            abort: function () {
                i && i()
            }
        } : t
    });
    var ki, xi, Ai = /^(?:toggle|show|hide)$/,
        Ii = RegExp("^(?:([+-])=|)(" + ot + ")([a-z%]*)$", "i"),
        Mi = /queueHooks$/,
        Ri = [O],
        Li = {
            "*": [
                function (e, t) {
                    var i = this.createTween(e, t),
                        s = i.cur(),
                        n = Ii.exec(t),
                        r = n && n[3] || (rt.cssNumber[e] ? "" : "px"),
                        o = (rt.cssNumber[e] || "px" !== r && +s) && Ii.exec(rt.css(i.elem, e)),
                        a = 1,
                        c = 20;
                    if (o && o[3] !== r) {
                        r = r || o[3], n = n || [], o = +s || 1;
                        do a = a || ".5", o /= a, rt.style(i.elem, e, o + r); while (a !== (a = i.cur() / s) && 1 !== a && --c)
                    }
                    return n && (o = i.start = +o || +s || 0, i.unit = r, i.end = n[1] ? o + (n[1] + 1) * n[2] : +n[2]), i
                }
            ]
        };
    rt.Animation = rt.extend(F, {
        tweener: function (e, t) {
            rt.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var i, s = 0, n = e.length; n > s; s++) i = e[s], Li[i] = Li[i] || [], Li[i].unshift(t)
        },
        prefilter: function (e, t) {
            t ? Ri.unshift(e) : Ri.push(e)
        }
    }), rt.Tween = U, U.prototype = {
        constructor: U,
        init: function (e, t, i, s, n, r) {
            this.elem = e, this.prop = i, this.easing = n || "swing", this.options = t, this.start = this.now = this.cur(), this.end = s, this.unit = r || (rt.cssNumber[i] ? "" : "px")
        },
        cur: function () {
            var e = U.propHooks[this.prop];
            return e && e.get ? e.get(this) : U.propHooks._default.get(this)
        },
        run: function (e) {
            var t, i = U.propHooks[this.prop];
            return this.pos = t = this.options.duration ? rt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : U.propHooks._default.set(this), this
        }
    }, U.prototype.init.prototype = U.prototype, U.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = rt.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                rt.fx.step[e.prop] ? rt.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[rt.cssProps[e.prop]] || rt.cssHooks[e.prop]) ? rt.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, U.propHooks.scrollTop = U.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, rt.each(["toggle", "show", "hide"], function (e, t) {
        var i = rt.fn[t];
        rt.fn[t] = function (e, s, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(j(t, !0), e, s, n)
        }
    }), rt.fn.extend({
        fadeTo: function (e, t, i, s) {
            return this.filter(y).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, s)
        },
        animate: function (e, t, i, s) {
            var n = rt.isEmptyObject(e),
                r = rt.speed(t, i, s),
                o = function () {
                    var t = F(this, rt.extend({}, e), r);
                    (n || gt.get(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, n || r.queue === !1 ? this.each(o) : this.queue(r.queue, o)
        },
        stop: function (e, i, s) {
            var n = function (e) {
                var t = e.stop;
                delete e.stop, t(s)
            };
            return "string" != typeof e && (s = i, i = e, e = t), i && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    r = rt.timers,
                    o = gt.get(this);
                if (i) o[i] && o[i].stop && n(o[i]);
                else
                    for (i in o) o[i] && o[i].stop && Mi.test(i) && n(o[i]);
                for (i = r.length; i--;) r[i].elem !== this || null != e && r[i].queue !== e || (r[i].anim.stop(s), t = !1, r.splice(i, 1));
                (t || !s) && rt.dequeue(this, e)
            })
        },
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, i = gt.get(this),
                    s = i[e + "queue"],
                    n = i[e + "queueHooks"],
                    r = rt.timers,
                    o = s ? s.length : 0;
                for (i.finish = !0, rt.queue(this, e, []), n && n.stop && n.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; o > t; t++) s[t] && s[t].finish && s[t].finish.call(this);
                delete i.finish
            })
        }
    }), rt.each({
        slideDown: j("show"),
        slideUp: j("hide"),
        slideToggle: j("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        rt.fn[e] = function (e, i, s) {
            return this.animate(t, e, i, s)
        }
    }), rt.speed = function (e, t, i) {
        var s = e && "object" == typeof e ? rt.extend({}, e) : {
            complete: i || !i && t || rt.isFunction(e) && e,
            duration: e,
            easing: i && t || t && !rt.isFunction(t) && t
        };
        return s.duration = rt.fx.off ? 0 : "number" == typeof s.duration ? s.duration : s.duration in rt.fx.speeds ? rt.fx.speeds[s.duration] : rt.fx.speeds._default, (null == s.queue || s.queue === !0) && (s.queue = "fx"), s.old = s.complete, s.complete = function () {
            rt.isFunction(s.old) && s.old.call(this), s.queue && rt.dequeue(this, s.queue)
        }, s
    }, rt.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, rt.timers = [], rt.fx = U.prototype.init, rt.fx.tick = function () {
        var e, i = rt.timers,
            s = 0;
        for (ki = rt.now(); i.length > s; s++) e = i[s], e() || i[s] !== e || i.splice(s--, 1);
        i.length || rt.fx.stop(), ki = t
    }, rt.fx.timer = function (e) {
        e() && rt.timers.push(e) && rt.fx.start()
    }, rt.fx.interval = 13, rt.fx.start = function () {
        xi || (xi = setInterval(rt.fx.tick, rt.fx.interval))
    }, rt.fx.stop = function () {
        clearInterval(xi), xi = null
    }, rt.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, rt.fx.step = {}, rt.expr && rt.expr.filters && (rt.expr.filters.animated = function (e) {
        return rt.grep(rt.timers, function (t) {
            return e === t.elem
        }).length
    }), rt.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            rt.offset.setOffset(this, e, t)
        });
        var i, s, n = this[0],
            r = {
                top: 0,
                left: 0
            }, o = n && n.ownerDocument;
        if (o) return i = o.documentElement, rt.contains(i, n) ? (typeof n.getBoundingClientRect !== W && (r = n.getBoundingClientRect()), s = P(o), {
            top: r.top + s.pageYOffset - i.clientTop,
            left: r.left + s.pageXOffset - i.clientLeft
        }) : r
    }, rt.offset = {
        setOffset: function (e, t, i) {
            var s, n, r, o, a, c, l, u = rt.css(e, "position"),
                d = rt(e),
                h = {};
            "static" === u && (e.style.position = "relative"), a = d.offset(), r = rt.css(e, "top"), c = rt.css(e, "left"), l = ("absolute" === u || "fixed" === u) && (r + c).indexOf("auto") > -1, l ? (s = d.position(), o = s.top, n = s.left) : (o = parseFloat(r) || 0, n = parseFloat(c) || 0), rt.isFunction(t) && (t = t.call(e, i, a)), null != t.top && (h.top = t.top - a.top + o), null != t.left && (h.left = t.left - a.left + n), "using" in t ? t.using.call(e, h) : d.css(h)
        }
    }, rt.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, i = this[0],
                    s = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === rt.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), rt.nodeName(e[0], "html") || (s = e.offset()), s.top += rt.css(e[0], "borderTopWidth", !0), s.left += rt.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - s.top - rt.css(i, "marginTop", !0),
                    left: t.left - s.left - rt.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || G; e && !rt.nodeName(e, "html") && "static" === rt.css(e, "position");) e = e.offsetParent;
                return e || G
            })
        }
    }), rt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (i, s) {
        var n = "pageYOffset" === s;
        rt.fn[i] = function (r) {
            return rt.access(this, function (i, r, o) {
                var a = P(i);
                return o === t ? a ? a[s] : i[r] : (a ? a.scrollTo(n ? e.pageXOffset : o, n ? o : e.pageYOffset) : i[r] = o, t)
            }, i, r, arguments.length, null)
        }
    }), rt.each({
        Height: "height",
        Width: "width"
    }, function (e, i) {
        rt.each({
            padding: "inner" + e,
            content: i,
            "": "outer" + e
        }, function (s, n) {
            rt.fn[n] = function (n, r) {
                var o = arguments.length && (s || "boolean" != typeof n),
                    a = s || (n === !0 || r === !0 ? "margin" : "border");
                return rt.access(this, function (i, s, n) {
                    var r;
                    return rt.isWindow(i) ? i.document.documentElement["client" + e] : 9 === i.nodeType ? (r = i.documentElement, Math.max(i.body["scroll" + e], r["scroll" + e], i.body["offset" + e], r["offset" + e], r["client" + e])) : n === t ? rt.css(i, s, a) : rt.style(i, s, n, a)
                }, i, o ? n : t, o, null)
            }
        })
    }), rt.fn.size = function () {
        return this.length
    }, rt.fn.andSelf = rt.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = rt : "function" == typeof define && define.amd && define("jquery", [], function () {
        return rt
    }), "object" == typeof e && "object" == typeof e.document && (e.jQuery = e.$ = rt)
}(window),
function (e, t, i) {
    function s(i) {
        var s = t.console;
        r[i] || (r[i] = !0, e.migrateWarnings.push(i), s && s.warn && !e.migrateMute && (s.warn("JQMIGRATE: " + i), e.migrateTrace && s.trace && s.trace()))
    }

    function n(t, n, r, o) {
        if (Object.defineProperty) try {
            return Object.defineProperty(t, n, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return s(o), r
                },
                set: function (e) {
                    s(o), r = e
                }
            }), i
        } catch (a) {}
        e._definePropertyBroken = !0, t[n] = r
    }
    var r = {};
    e.migrateWarnings = [], !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === i && (e.migrateTrace = !0), e.migrateReset = function () {
        r = {}, e.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && s("jQuery is not compatible with Quirks Mode");
    var o = e("<input/>", {
        size: 1
    }).attr("size") && e.attrFn,
        a = e.attr,
        c = e.attrHooks.value && e.attrHooks.value.get || function () {
            return null
        }, l = e.attrHooks.value && e.attrHooks.value.set || function () {
            return i
        }, u = /^(?:input|button)$/i,
        d = /^[238]$/,
        h = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        p = /^(?:checked|selected)$/i;
    n(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"), e.attr = function (t, n, r, c) {
        var l = n.toLowerCase(),
            m = t && t.nodeType;
        return c && (4 > a.length && s("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(m) && (o ? n in o : e.isFunction(e.fn[n]))) ? e(t)[n](r) : ("type" === n && r !== i && u.test(t.nodeName) && t.parentNode && s("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[l] && h.test(l) && (e.attrHooks[l] = {
            get: function (t, s) {
                var n, r = e.prop(t, s);
                return r === !0 || "boolean" != typeof r && (n = t.getAttributeNode(s)) && n.nodeValue !== !1 ? s.toLowerCase() : i
            },
            set: function (t, i, s) {
                var n;
                return i === !1 ? e.removeAttr(t, s) : (n = e.propFix[s] || s, n in t && (t[n] = !0), t.setAttribute(s, s.toLowerCase())), s
            }
        }, p.test(l) && s("jQuery.fn.attr('" + l + "') may use property instead of attribute")), a.call(e, t, n, r))
    }, e.attrHooks.value = {
        get: function (e, t) {
            var i = (e.nodeName || "").toLowerCase();
            return "button" === i ? c.apply(this, arguments) : ("input" !== i && "option" !== i && s("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
        },
        set: function (e, t) {
            var n = (e.nodeName || "").toLowerCase();
            return "button" === n ? l.apply(this, arguments) : ("input" !== n && "option" !== n && s("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, i)
        }
    };
    var m, f, g = e.fn.init,
        T = e.parseJSON,
        v = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    e.fn.init = function (t, i, n) {
        var r;
        return t && "string" == typeof t && !e.isPlainObject(i) && (r = v.exec(e.trim(t))) && r[0] && ("<" !== t.charAt(0) && s("$(html) HTML strings must start with '<' character"), r[3] && s("$(html) HTML text after last tag is ignored"), "#" === r[0].charAt(0) && (s("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), i && i.context && (i = i.context), e.parseHTML) ? g.call(this, e.parseHTML(r[2], i, !0), i, n) : g.apply(this, arguments)
    }, e.fn.init.prototype = e.fn, e.parseJSON = function (e) {
        return e || null === e ? T.apply(this, arguments) : (s("jQuery.parseJSON requires a valid JSON string"), null)
    }, e.uaMatch = function (e) {
        e = e.toLowerCase();
        var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
        return {
            browser: t[1] || "",
            version: t[2] || "0"
        }
    }, e.browser || (m = e.uaMatch(navigator.userAgent), f = {}, m.browser && (f[m.browser] = !0, f.version = m.version), f.chrome ? f.webkit = !0 : f.webkit && (f.safari = !0), e.browser = f), n(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function () {
        function t(e, i) {
            return new t.fn.init(e, i)
        }
        e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function (s, n) {
            return n && n instanceof e && !(n instanceof t) && (n = t(n)), e.fn.init.call(this, s, n, i)
        }, t.fn.init.prototype = t.fn;
        var i = t(document);
        return s("jQuery.sub() is deprecated"), t
    }, e.ajaxSetup({
        converters: {
            "text json": e.parseJSON
        }
    });
    var y = e.fn.data;
    e.fn.data = function (t) {
        var n, r, o = this[0];
        return !o || "events" !== t || 1 !== arguments.length || (n = e.data(o, t), r = e._data(o, t), n !== i && n !== r || r === i) ? y.apply(this, arguments) : (s("Use of jQuery.fn.data('events') is deprecated"), r)
    };
    var _ = /\/(java|ecma)script/i,
        D = e.fn.andSelf || e.fn.addBack;
    e.fn.andSelf = function () {
        return s("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), D.apply(this, arguments)
    }, e.clean || (e.clean = function (t, n, r, o) {
        n = n || document, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, s("jQuery.clean() is deprecated");
        var a, c, l, u, d = [];
        if (e.merge(d, e.buildFragment(t, n).childNodes), r)
            for (l = function (e) {
                return !e.type || _.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : r.appendChild(e) : i
            }, a = 0; null != (c = d[a]); a++) e.nodeName(c, "script") && l(c) || (r.appendChild(c), c.getElementsByTagName !== i && (u = e.grep(e.merge([], c.getElementsByTagName("script")), l), d.splice.apply(d, [a + 1, 0].concat(u)), a += u.length));
        return d
    });
    var b = e.event.add,
        w = e.event.remove,
        C = e.event.trigger,
        S = e.fn.toggle,
        E = e.fn.live,
        k = e.fn.die,
        x = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
        A = RegExp("\\b(?:" + x + ")\\b"),
        I = /(?:^|\s)hover(\.\S+|)\b/,
        M = function (t) {
            return "string" != typeof t || e.event.special.hover ? t : (I.test(t) && s("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(I, "mouseenter$1 mouseleave$1"))
        };
    e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && n(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function (e, t, i, n, r) {
        e !== document && A.test(t) && s("AJAX events should be attached to document: " + t), b.call(this, e, M(t || ""), i, n, r)
    }, e.event.remove = function (e, t, i, s, n) {
        w.call(this, e, M(t) || "", i, s, n)
    }, e.fn.error = function () {
        var e = Array.prototype.slice.call(arguments, 0);
        return s("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
    }, e.fn.toggle = function (t, i) {
        if (!e.isFunction(t) || !e.isFunction(i)) return S.apply(this, arguments);
        s("jQuery.fn.toggle(handler, handler...) is deprecated");
        var n = arguments,
            r = t.guid || e.guid++,
            o = 0,
            a = function (i) {
                var s = (e._data(this, "lastToggle" + t.guid) || 0) % o;
                return e._data(this, "lastToggle" + t.guid, s + 1), i.preventDefault(), n[s].apply(this, arguments) || !1
            };
        for (a.guid = r; n.length > o;) n[o++].guid = r;
        return this.click(a)
    }, e.fn.live = function (t, i, n) {
        return s("jQuery.fn.live() is deprecated"), E ? E.apply(this, arguments) : (e(this.context).on(t, this.selector, i, n), this)
    }, e.fn.die = function (t, i) {
        return s("jQuery.fn.die() is deprecated"), k ? k.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", i), this)
    }, e.event.trigger = function (e, t, i, n) {
        return i || A.test(e) || s("Global events are undocumented and deprecated"), C.call(this, e, t, i || document, n)
    }, e.each(x.split("|"), function (t, i) {
        e.event.special[i] = {
            setup: function () {
                var t = this;
                return t !== document && (e.event.add(document, i + "." + e.guid, function () {
                    e.event.trigger(i, null, t, !0)
                }), e._data(this, i, e.guid++)), !1
            },
            teardown: function () {
                return this !== document && e.event.remove(document, i + "." + e._data(this, i)), !1
            }
        }
    })
}(jQuery, window), TD.controller.feather = function () {
    var exposed = {};
    exposed.latestFeatherId = 6;
    var feather_base;
    return feather_base = 0 === window.location.href.indexOf("http://localhost:8090") ? "http://localhost:8090" : "https://web.tweetdeck.com", exposed.loadFeathers = function (isRetry) {
        var d = new TD.core.defer.Deferred;
        return $.get(feather_base + "/web/scripts/unbundled/feathers.js").success(function (feathers) {
            try {
                eval(feathers), d.callback()
            } catch (e) {
                d.errback()
            }
        }).error(function () {
            isRetry || exposed.loadFeathers(!0), d.errback()
        }), d
    }, exposed.applyFeathers = function (e) {
        for (var t, i = exposed.latestFeatherId, s = _.sortBy(e, function (e) {
                return e.id
            }), n = 0; s.length > n; n++)
            if (t = s[n], t.id > i) try {
                t.patch(), i = t.id
            } catch (r) {
                console.log("Error patching feather id: " + t.id + " " + r)
            }
            exposed.latestFeatherId = i
    }, setInterval(exposed.loadFeathers, 36e5), exposed
}(),
function (e) {
    var t = {};
    e.publish = function (i, s) {
        var n = t[i];
        n && e.each(n, function () {
            this.apply(e, s || [])
        })
    }, e.subscribe = function (e, i) {
        return t[e] || (t[e] = []), t[e].push(i), [e, i]
    }, e.unsubscribe = function (i) {
        if (!(i && i instanceof Array)) throw Error("unsubscribe(): handle must be an instance of Array.");
        var s = i[0];
        t[s] && e.each(t[s], function (e) {
            this == i[1] && t[s].splice(e, 1)
        })
    }, e.unsubscribeAll = function (e) {
        delete t[e]
    }
}(jQuery), window.TD = window.TD || {}, TD.core = TD.core || {}, TD.core.base64 = function () {
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        t = function (e) {
            e = e.replace(/\r\n/g, "\n");
            for (var t = "", i = 0; e.length > i; i++) {
                var s = e.charCodeAt(i);
                128 > s ? t += String.fromCharCode(s) : s > 127 && 2048 > s ? (t += String.fromCharCode(192 | s >> 6), t += String.fromCharCode(128 | 63 & s)) : (t += String.fromCharCode(224 | s >> 12), t += String.fromCharCode(128 | 63 & s >> 6), t += String.fromCharCode(128 | 63 & s))
            }
            return t
        }, i = function (e) {
            for (var t = "", i = 0, s = c1 = c2 = 0; e.length > i;) s = e.charCodeAt(i), 128 > s ? (t += String.fromCharCode(s), i++) : s > 191 && 224 > s ? (c2 = e.charCodeAt(i + 1), t += String.fromCharCode((31 & s) << 6 | 63 & c2), i += 2) : (c2 = e.charCodeAt(i + 1), c3 = e.charCodeAt(i + 2), t += String.fromCharCode((15 & s) << 12 | (63 & c2) << 6 | 63 & c3), i += 3);
            return t
        }, s = function (i) {
            var s, n, r, o, a, c, l, u = "",
                d = 0;
            for (i = t(i); i.length > d;) s = i.charCodeAt(d++), n = i.charCodeAt(d++), r = i.charCodeAt(d++), o = s >> 2, a = (3 & s) << 4 | n >> 4, c = (15 & n) << 2 | r >> 6, l = 63 & r, isNaN(n) ? c = l = 64 : isNaN(r) && (l = 64), u = u + e.charAt(o) + e.charAt(a) + e.charAt(c) + e.charAt(l);
            return u
        }, n = function (t) {
            var s, n, r, o, a, c, l, u = "",
                d = 0;
            for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); t.length > d;) o = e.indexOf(t.charAt(d++)), a = e.indexOf(t.charAt(d++)), c = e.indexOf(t.charAt(d++)), l = e.indexOf(t.charAt(d++)), s = o << 2 | a >> 4, n = (15 & a) << 4 | c >> 2, r = (3 & c) << 6 | l, u += String.fromCharCode(s), 64 != c && (u += String.fromCharCode(n)), 64 != l && (u += String.fromCharCode(r));
            return u = i(u)
        };
    return {
        encode: s,
        decode: n
    }
}(),
function (e) {
    function t(e, t, i) {
        for (var s = (i || 0) - 1, n = e.length; n > ++s;)
            if (e[s] === t) return s;
        return -1
    }

    function i(e, i) {
        var s = typeof i;
        if (e = e.cache, "boolean" == s || null == i) return e[i];
        "number" != s && "string" != s && (s = "object");
        var n = "number" == s ? i : D + i;
        return e = e[s] || (e[s] = {}), "object" == s ? e[n] && t(e[n], i) > -1 ? 0 : -1 : e[n] ? 0 : -1
    }

    function s(e) {
        var t = this.cache,
            i = typeof e;
        if ("boolean" == i || null == e) t[e] = !0;
        else {
            "number" != i && "string" != i && (i = "object");
            var s = "number" == i ? e : D + e,
                n = t[i] || (t[i] = {});
            "object" == i ? (n[s] || (n[s] = [])).push(e) == this.array.length && (t[i] = !1) : n[s] = !0
        }
    }

    function n(e) {
        return e.charCodeAt(0)
    }

    function r(e, t) {
        var i = e.index,
            s = t.index;
        if (e = e.criteria, t = t.criteria, e !== t) {
            if (e > t || e === g) return 1;
            if (t > e || t === g) return -1
        }
        return s > i ? -1 : 1
    }

    function o(e) {
        var t = -1,
            i = e.length,
            n = l();
        n["false"] = n["null"] = n["true"] = n.undefined = !1;
        var r = l();
        for (r.array = e, r.cache = n, r.push = s; i > ++t;) r.push(e[t]);
        return n.object === !1 ? (p(r), null) : r
    }

    function a(e) {
        return "\\" + J[e]
    }

    function c() {
        return T.pop() || []
    }

    function l() {
        return v.pop() || {
            args: "",
            array: null,
            bottom: "",
            cache: null,
            criteria: null,
            "false": !1,
            firstArg: "",
            index: 0,
            init: "",
            leading: !1,
            loop: "",
            maxWait: 0,
            "null": !1,
            number: null,
            object: null,
            push: null,
            shadowedProps: null,
            string: null,
            support: null,
            top: "",
            trailing: !1,
            "true": !1,
            undefined: !1,
            useHas: !1,
            useKeys: !1,
            value: null
        }
    }

    function u(e) {
        return "function" != typeof e.toString && "string" == typeof (e + "")
    }

    function d() {}

    function h(e) {
        e.length = 0, w > T.length && T.push(e)
    }

    function p(e) {
        var t = e.cache;
        t && p(t), e.array = e.cache = e.criteria = e.object = e.number = e.string = e.value = null, w > v.length && v.push(e)
    }

    function m(e, t, i) {
        t || (t = 0), i === g && (i = e ? e.length : 0);
        for (var s = -1, n = i - t || 0, r = Array(0 > n ? 0 : n); n > ++s;) r[s] = e[t + s];
        return r
    }

    function f(s) {
        function T(e) {
            return e && "object" == typeof e && !Ps(e) && ms.call(e, "__wrapped__") ? e : new v(e)
        }

        function v(e) {
            this.__wrapped__ = e
        }

        function w(e, t, i, s) {
            function n() {
                var s = arguments,
                    l = o ? this : t;
                if (r || (e = t[a]), i.length && (s = s.length ? (s = Is.call(s), c ? s.concat(i) : i.concat(s)) : i), this instanceof n) {
                    l = Z(e.prototype);
                    var u = e.apply(l, s);
                    return Dt(u) ? u : l
                }
                return e.apply(l, s)
            }
            var r = _t(e),
                o = !i,
                a = t;
            if (o) {
                var c = s;
                i = t
            } else if (!r) {
                if (!s) throw new ts;
                t = e
            }
            return n
        }

        function J() {
            var e = l();
            e.shadowedProps = U, e.support = Fs, e.array = e.bottom = e.loop = e.top = "", e.init = "iterable", e.useHas = !0, e.useKeys = !! Hs;
            for (var t, i = 0; t = arguments[i]; i++)
                for (var s in t) e[s] = t[s];
            var n = e.args;
            e.firstArg = /^[^,]+/.exec(n)[0];
            var r = Yi("errorClass, errorProto, hasOwnProperty, isArguments, isArray, isString, keys, lodash, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString", "return function(" + n + ") {\n" + $s(e) + "\n}");
            return p(e), r(K, ss, ms, at, Ps, Et, Hs, T, ns, X, Ns, Y, rs, ys)
        }

        function Z(e) {
            return Dt(e) ? Ds(e) : {}
        }

        function tt(e) {
            return Ks[e]
        }

        function st() {
            var e = (e = T.indexOf) === ni ? t : e;
            return e
        }

        function nt(e) {
            return function (t, i, s, n) {
                return "boolean" != typeof i && null != i && (n = s, s = n && n[i] === t ? g : i, i = !1), null != s && (s = T.createCallback(s, n)), e(t, i, s, n)
            }
        }

        function rt(e) {
            var t, i;
            return !e || ys.call(e) != V || (t = e.constructor, _t(t) && !(t instanceof t)) || !Fs.argsClass && at(e) || !Fs.nodeClass && u(e) ? !1 : Fs.ownLast ? (qs(e, function (e, t, s) {
                return i = ms.call(s, t), !1
            }), i !== !1) : (qs(e, function (e, t) {
                i = t
            }), i === g || ms.call(e, i))
        }

        function ot(e) {
            return zs[e]
        }

        function at(e) {
            return ys.call(e) == P
        }

        function ct(e, t, i, s, n, r) {
            var o = e;
            if ("boolean" != typeof t && null != t && (s = i, i = t, t = !1), "function" == typeof i) {
                if (i = s === g ? i : T.createCallback(i, s, 1), o = i(o), o !== g) return o;
                o = e
            }
            var a = Dt(o);
            if (a) {
                var l = ys.call(o);
                if (!Q[l] || !Fs.nodeClass && u(o)) return o;
                var d = Ps(o)
            }
            if (!a || !t) return a ? d ? m(o) : Gs({}, o) : o;
            var p = Ls[l];
            switch (l) {
            case H:
            case W:
                return new p(+o);
            case G:
            case Y:
                return new p(o);
            case q:
                return p(o.source, A.exec(o))
            }
            var f = !n;
            n || (n = c()), r || (r = c());
            for (var v = n.length; v--;)
                if (n[v] == e) return r[v];
            return o = d ? p(o.length) : {}, d && (ms.call(e, "index") && (o.index = e.index), ms.call(e, "input") && (o.input = e.input)), n.push(e), r.push(o), (d ? Ws : Ys)(e, function (e, s) {
                o[s] = ct(e, t, i, g, n, r)
            }), f && (h(n), h(r)), o
        }

        function lt(e, t, i) {
            return ct(e, !0, t, i)
        }

        function ut(e, t, i) {
            var s;
            return t = T.createCallback(t, i), Ys(e, function (e, i, n) {
                return t(e, i, n) ? (s = i, !1) : g
            }), s
        }

        function dt(e) {
            var t = [];
            return qs(e, function (e, i) {
                _t(e) && t.push(i)
            }), t.sort()
        }

        function ht(e, t) {
            return e ? ms.call(e, t) : !1
        }

        function pt(e) {
            for (var t = -1, i = Hs(e), s = i.length, n = {}; s > ++t;) {
                var r = i[t];
                n[e[r]] = r
            }
            return n
        }

        function mt(e) {
            return e === !0 || e === !1 || ys.call(e) == H
        }

        function ft(e) {
            return e ? "object" == typeof e && ys.call(e) == W : !1
        }

        function gt(e) {
            return e ? 1 === e.nodeType : !1
        }

        function Tt(e) {
            var t = !0;
            if (!e) return t;
            var i = ys.call(e),
                s = e.length;
            return i == B || i == Y || (Fs.argsClass ? i == P : at(e)) || i == V && "number" == typeof s && _t(e.splice) ? !s : (Ys(e, function () {
                return t = !1
            }), t)
        }

        function vt(e, t, i, s, n, r) {
            var o = i === _;
            if ("function" == typeof i && !o) {
                i = T.createCallback(i, s, 2);
                var a = i(e, t);
                if (a !== g) return !!a
            }
            if (e === t) return 0 !== e || 1 / e == 1 / t;
            var l = typeof e,
                d = typeof t;
            if (e === e && (!e || "function" != l && "object" != l) && (!t || "function" != d && "object" != d)) return !1;
            if (null == e || null == t) return e === t;
            var p = ys.call(e),
                m = ys.call(t);
            if (p == P && (p = V), m == P && (m = V), p != m) return !1;
            switch (p) {
            case H:
            case W:
                return +e == +t;
            case G:
                return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
            case q:
            case Y:
                return e == es(t)
            }
            var f = p == B;
            if (!f) {
                if (ms.call(e, "__wrapped__ ") || ms.call(t, "__wrapped__")) return vt(e.__wrapped__ || e, t.__wrapped__ || t, i, s, n, r);
                if (p != V || !Fs.nodeClass && (u(e) || u(t))) return !1;
                var v = !Fs.argsObject && at(e) ? Ji : e.constructor,
                    y = !Fs.argsObject && at(t) ? Ji : t.constructor;
                if (v != y && !(_t(v) && v instanceof v && _t(y) && y instanceof y)) return !1
            }
            var D = !n;
            n || (n = c()), r || (r = c());
            for (var b = n.length; b--;)
                if (n[b] == e) return r[b] == t;
            var w = 0;
            if (a = !0, n.push(e), r.push(t), f) {
                if (b = e.length, w = t.length, a = w == e.length, !a && !o) return a;
                for (; w--;) {
                    var C = b,
                        S = t[w];
                    if (o)
                        for (; C-- && !(a = vt(e[C], S, i, s, n, r)););
                    else if (!(a = vt(e[w], S, i, s, n, r))) break
                }
                return a
            }
            return qs(t, function (t, o, c) {
                return ms.call(c, o) ? (w++, a = ms.call(e, o) && vt(e[o], t, i, s, n, r)) : g
            }), a && !o && qs(e, function (e, t, i) {
                return ms.call(i, t) ? a = --w > -1 : g
            }), D && (h(n), h(r)), a
        }

        function yt(e) {
            return ws(e) && !Cs(parseFloat(e))
        }

        function _t(e) {
            return "function" == typeof e
        }

        function Dt(e) {
            return !(!e || !X[typeof e])
        }

        function bt(e) {
            return Ct(e) && e != +e
        }

        function wt(e) {
            return null === e
        }

        function Ct(e) {
            return "number" == typeof e || ys.call(e) == G
        }

        function St(e) {
            return !(!e || !X[typeof e]) && ys.call(e) == q
        }

        function Et(e) {
            return "string" == typeof e || ys.call(e) == Y
        }

        function kt(e) {
            return e === g
        }

        function xt(e, t, i) {
            var s = arguments,
                n = 0,
                r = 2;
            if (!Dt(e)) return e;
            if (i === _) var o = s[3],
            a = s[4], l = s[5];
            else {
                var u = !0;
                a = c(), l = c(), "number" != typeof i && (r = s.length), r > 3 && "function" == typeof s[r - 2] ? o = T.createCallback(s[--r - 1], s[r--], 2) : r > 2 && "function" == typeof s[r - 1] && (o = s[--r])
            }
            for (; r > ++n;)(Ps(s[n]) ? Pt : Ys)(s[n], function (t, i) {
                var s, n, r = t,
                    c = e[i];
                if (t && ((n = Ps(t)) || Qs(t))) {
                    for (var u = a.length; u--;)
                        if (s = a[u] == t) {
                            c = l[u];
                            break
                        }
                    if (!s) {
                        var d;
                        o && (r = o(c, t), (d = r !== g) && (c = r)), d || (c = n ? Ps(c) ? c : [] : Qs(c) ? c : {}), a.push(t), l.push(c), d || (c = xt(c, t, _, o, a, l))
                    }
                } else o && (r = o(c, t), r === g && (r = t)), r !== g && (c = r);
                e[i] = c
            });
            return u && (h(a), h(l)), e
        }

        function At(e, t, i) {
            var s = st(),
                n = "function" == typeof t,
                r = {};
            if (n) t = T.createCallback(t, i);
            else var o = us.apply(is, Is.call(arguments, 1));
            return qs(e, function (e, i, a) {
                (n ? !t(e, i, a) : 0 > s(o, i)) && (r[i] = e)
            }), r
        }

        function It(e) {
            for (var t = -1, i = Hs(e), s = i.length, n = zi(s); s > ++t;) {
                var r = i[t];
                n[t] = [r, e[r]]
            }
            return n
        }

        function Mt(e, t, i) {
            var s = {};
            if ("function" != typeof t)
                for (var n = -1, r = us.apply(is, Is.call(arguments, 1)), o = Dt(e) ? r.length : 0; o > ++n;) {
                    var a = r[n];
                    a in e && (s[a] = e[a])
                } else t = T.createCallback(t, i), qs(e, function (e, i, n) {
                    t(e, i, n) && (s[i] = e)
                });
            return s
        }

        function Rt(e, t, i, s) {
            var n = Ps(e);
            if (t = T.createCallback(t, s, 4), null == i)
                if (n) i = [];
                else {
                    var r = e && e.constructor,
                        o = r && r.prototype;
                    i = Z(o)
                }
            return (n ? Ws : Ys)(e, function (e, s, n) {
                return t(i, e, s, n)
            }), i
        }

        function Lt(e) {
            for (var t = -1, i = Hs(e), s = i.length, n = zi(s); s > ++t;) n[t] = e[i[t]];
            return n
        }

        function Nt(e) {
            var t = -1,
                i = us.apply(is, Is.call(arguments, 1)),
                s = i.length,
                n = zi(s);
            for (Fs.unindexedChars && Et(e) && (e = e.split("")); s > ++t;) n[t] = e[i[t]];
            return n
        }

        function Ft(e, t, i) {
            var s = -1,
                n = st(),
                r = e ? e.length : 0,
                o = !1;
            return i = (0 > i ? Es(0, r + i) : i) || 0, r && "number" == typeof r ? o = (Et(e) ? e.indexOf(t, i) : n(e, t, i)) > -1 : Ws(e, function (e) {
                return ++s >= i ? !(o = e === t) : g
            }), o
        }

        function $t(e, t, i) {
            var s = {};
            return t = T.createCallback(t, i), Pt(e, function (e, i, n) {
                i = es(t(e, i, n)), ms.call(s, i) ? s[i]++ : s[i] = 1
            }), s
        }

        function Ot(e, t, i) {
            var s = !0;
            if (t = T.createCallback(t, i), Ps(e))
                for (var n = -1, r = e.length; r > ++n && (s = !! t(e[n], n, e)););
            else Ws(e, function (e, i, n) {
                return s = !! t(e, i, n)
            });
            return s
        }

        function Ut(e, t, i) {
            var s = [];
            if (t = T.createCallback(t, i), Ps(e))
                for (var n = -1, r = e.length; r > ++n;) {
                    var o = e[n];
                    t(o, n, e) && s.push(o)
                } else Ws(e, function (e, i, n) {
                    t(e, i, n) && s.push(e)
                });
            return s
        }

        function jt(e, t, i) {
            if (t = T.createCallback(t, i), !Ps(e)) {
                var s;
                return Ws(e, function (e, i, n) {
                    return t(e, i, n) ? (s = e, !1) : g
                }), s
            }
            for (var n = -1, r = e.length; r > ++n;) {
                var o = e[n];
                if (t(o, n, e)) return o
            }
        }

        function Pt(e, t, i) {
            if (t && i === g && Ps(e))
                for (var s = -1, n = e.length; n > ++s && t(e[s], s, e) !== !1;);
            else Ws(e, t, i);
            return e
        }

        function Bt(e, t, i) {
            var s = {};
            return t = T.createCallback(t, i), Pt(e, function (e, i, n) {
                i = es(t(e, i, n)), (ms.call(s, i) ? s[i] : s[i] = []).push(e)
            }), s
        }

        function Ht(e, t) {
            var i = Is.call(arguments, 2),
                s = -1,
                n = "function" == typeof t,
                r = e ? e.length : 0,
                o = zi("number" == typeof r ? r : 0);
            return Pt(e, function (e) {
                o[++s] = (n ? t : e[t]).apply(e, i)
            }), o
        }

        function Wt(e, t, i) {
            var s = -1,
                n = e ? e.length : 0,
                r = zi("number" == typeof n ? n : 0);
            if (t = T.createCallback(t, i), Ps(e))
                for (; n > ++s;) r[s] = t(e[s], s, e);
            else Ws(e, function (e, i, n) {
                r[++s] = t(e, i, n)
            });
            return r
        }

        function Kt(e, t, i) {
            var s = -1 / 0,
                r = s;
            if (!t && Ps(e))
                for (var o = -1, a = e.length; a > ++o;) {
                    var c = e[o];
                    c > r && (r = c)
                } else t = !t && Et(e) ? n : T.createCallback(t, i), Ws(e, function (e, i, n) {
                    var o = t(e, i, n);
                    o > s && (s = o, r = e)
                });
            return r
        }

        function zt(e, t, i) {
            var s = 1 / 0,
                r = s;
            if (!t && Ps(e))
                for (var o = -1, a = e.length; a > ++o;) {
                    var c = e[o];
                    r > c && (r = c)
                } else t = !t && Et(e) ? n : T.createCallback(t, i), Ws(e, function (e, i, n) {
                    var o = t(e, i, n);
                    s > o && (s = o, r = e)
                });
            return r
        }

        function Gt(e, t, i, s) {
            var n = 3 > arguments.length;
            if (t = T.createCallback(t, s, 4), Ps(e)) {
                var r = -1,
                    o = e.length;
                for (n && (i = e[++r]); o > ++r;) i = t(i, e[r], r, e)
            } else Ws(e, function (e, s, r) {
                i = n ? (n = !1, e) : t(i, e, s, r)
            });
            return i
        }

        function Vt(e, t, i, s) {
            var n = e,
                r = e ? e.length : 0,
                o = 3 > arguments.length;
            if ("number" != typeof r) {
                var a = Hs(e);
                r = a.length
            } else Fs.unindexedChars && Et(e) && (n = e.split(""));
            return t = T.createCallback(t, s, 4), Pt(e, function (e, s, c) {
                s = a ? a[--r] : --r, i = o ? (o = !1, n[s]) : t(i, n[s], s, c)
            }), i
        }

        function qt(e, t, i) {
            return t = T.createCallback(t, i), Ut(e, function (e, i, s) {
                return !t(e, i, s)
            })
        }

        function Yt(e) {
            var t = -1,
                i = e ? e.length : 0,
                s = zi("number" == typeof i ? i : 0);
            return Pt(e, function (e) {
                var i = ds(As() * (++t + 1));
                s[t] = s[i], s[i] = e
            }), s
        }

        function Qt(e) {
            var t = e ? e.length : 0;
            return "number" == typeof t ? t : Hs(e).length
        }

        function Xt(e, t, i) {
            var s;
            if (t = T.createCallback(t, i), Ps(e))
                for (var n = -1, r = e.length; r > ++n && !(s = t(e[n], n, e)););
            else Ws(e, function (e, i, n) {
                return !(s = t(e, i, n))
            });
            return !!s
        }

        function Jt(e, t, i) {
            var s = -1,
                n = e ? e.length : 0,
                o = zi("number" == typeof n ? n : 0);
            for (t = T.createCallback(t, i), Pt(e, function (e, i, n) {
                var r = o[++s] = l();
                r.criteria = t(e, i, n), r.index = s, r.value = e
            }), n = o.length, o.sort(r); n--;) {
                var a = o[n];
                o[n] = a.value, p(a)
            }
            return o
        }

        function Zt(e) {
            return e && "number" == typeof e.length ? Fs.unindexedChars && Et(e) ? e.split("") : m(e) : Lt(e)
        }

        function ei(e) {
            for (var t = -1, i = e ? e.length : 0, s = []; i > ++t;) {
                var n = e[t];
                n && s.push(n)
            }
            return s
        }

        function ti(e) {
            var s = -1,
                n = st(),
                r = e ? e.length : 0,
                a = us.apply(is, Is.call(arguments, 1)),
                c = [],
                l = r >= b && n === t;
            if (l) {
                var u = o(a);
                u ? (n = i, a = u) : l = !1
            }
            for (; r > ++s;) {
                var d = e[s];
                0 > n(a, d) && c.push(d)
            }
            return l && p(a), c
        }

        function ii(e, t, i) {
            var s = -1,
                n = e ? e.length : 0;
            for (t = T.createCallback(t, i); n > ++s;)
                if (t(e[s], s, e)) return s;
            return -1
        }

        function si(e, t, i) {
            if (e) {
                var s = 0,
                    n = e.length;
                if ("number" != typeof t && null != t) {
                    var r = -1;
                    for (t = T.createCallback(t, i); n > ++r && t(e[r], r, e);) s++
                } else if (s = t, null == s || i) return e[0];
                return m(e, 0, ks(Es(0, s), n))
            }
        }

        function ni(e, i, s) {
            if ("number" == typeof s) {
                var n = e ? e.length : 0;
                s = 0 > s ? Es(0, n + s) : s || 0
            } else if (s) {
                var r = di(e, i);
                return e[r] === i ? r : -1
            }
            return e ? t(e, i, s) : -1
        }

        function ri(e, t, i) {
            if (!e) return [];
            var s = 0,
                n = e.length;
            if ("number" != typeof t && null != t) {
                var r = n;
                for (t = T.createCallback(t, i); r-- && t(e[r], r, e);) s++
            } else s = null == t || i ? 1 : t || s;
            return m(e, 0, ks(Es(0, n - s), n))
        }

        function oi(e) {
            for (var s = arguments, n = s.length, r = -1, a = c(), l = -1, u = st(), d = e ? e.length : 0, m = [], f = c(); n > ++r;) {
                var g = s[r];
                a[r] = u === t && (g ? g.length : 0) >= b && o(r ? s[r] : f)
            }
            e: for (; d > ++l;) {
                var T = a[0];
                if (g = e[l], 0 > (T ? i(T, g) : u(f, g))) {
                    for (r = n, (T || f).push(g); --r;)
                        if (T = a[r], 0 > (T ? i(T, g) : u(s[r], g))) continue e;
                    m.push(g)
                }
            }
            for (; n--;) T = a[n], T && p(T);
            return h(a), h(f), m
        }

        function ai(e, t, i) {
            if (e) {
                var s = 0,
                    n = e.length;
                if ("number" != typeof t && null != t) {
                    var r = n;
                    for (t = T.createCallback(t, i); r-- && t(e[r], r, e);) s++
                } else if (s = t, null == s || i) return e[n - 1];
                return m(e, Es(0, n - s))
            }
        }

        function ci(e, t, i) {
            var s = e ? e.length : 0;
            for ("number" == typeof i && (s = (0 > i ? Es(0, s + i) : ks(i, s - 1)) + 1); s--;)
                if (e[s] === t) return s;
            return -1
        }

        function li(e, t, i) {
            e = +e || 0, i = +i || 1, null == t && (t = e, e = 0);
            for (var s = -1, n = Es(0, cs((t - e) / i)), r = zi(n); n > ++s;) r[s] = e, e += i;
            return r
        }

        function ui(e, t, i) {
            if ("number" != typeof t && null != t) {
                var s = 0,
                    n = -1,
                    r = e ? e.length : 0;
                for (t = T.createCallback(t, i); r > ++n && t(e[n], n, e);) s++
            } else s = null == t || i ? 1 : Es(0, t);
            return m(e, s)
        }

        function di(e, t, i, s) {
            var n = 0,
                r = e ? e.length : n;
            for (i = i ? T.createCallback(i, s, 1) : Li, t = i(t); r > n;) {
                var o = n + r >>> 1;
                t > i(e[o]) ? n = o + 1 : r = o
            }
            return n
        }

        function hi(e) {
            return Ps(e) || (arguments[0] = e ? Is.call(e) : is), en(us.apply(is, arguments))
        }

        function pi(e) {
            for (var t = -1, i = e ? Kt(Xs(e, "length")) : 0, s = zi(0 > i ? 0 : i); i > ++t;) s[t] = Xs(e, t);
            return s
        }

        function mi(e) {
            return ti(e, Is.call(arguments, 1))
        }

        function fi(e) {
            return e ? pi(arguments) : []
        }

        function gi(e, t) {
            for (var i = -1, s = e ? e.length : 0, n = {}; s > ++i;) {
                var r = e[i];
                t ? n[r] = t[i] : n[r[0]] = r[1]
            }
            return n
        }

        function Ti(e, t) {
            return 1 > e ? t() : function () {
                return 1 > --e ? t.apply(this, arguments) : g
            }
        }

        function vi(e, t) {
            return Fs.fastBind || _s && arguments.length > 2 ? _s.call.apply(_s, arguments) : w(e, t, Is.call(arguments, 2))
        }

        function yi(e) {
            for (var t = arguments.length > 1 ? us.apply(is, Is.call(arguments, 1)) : dt(e), i = -1, s = t.length; s > ++i;) {
                var n = t[i];
                e[n] = vi(e[n], e)
            }
            return e
        }

        function _i(e, t) {
            return w(e, t, Is.call(arguments, 2), _)
        }

        function Di() {
            var e = arguments;
            return function () {
                for (var t = arguments, i = e.length; i--;) t = [e[i].apply(this, t)];
                return t[0]
            }
        }

        function bi(e, t, i) {
            if (null == e) return Li;
            var s = typeof e;
            if ("function" != s) {
                if ("object" != s) return function (t) {
                    return t[e]
                };
                var n = Hs(e);
                return function (t) {
                    for (var i = n.length, s = !1; i-- && (s = vt(t[n[i]], e[n[i]], _)););
                    return s
                }
            }
            return t === g || M && !M.test(hs.call(e)) ? e : 1 === i ? function (i) {
                return e.call(t, i)
            } : 2 === i ? function (i, s) {
                return e.call(t, i, s)
            } : 4 === i ? function (i, s, n, r) {
                return e.call(t, i, s, n, r)
            } : function (i, s, n) {
                return e.call(t, i, s, n)
            }
        }

        function wi(e, t, i) {
            function s() {
                ls(h), ls(p), l = 0, h = p = null
            }

            function n() {
                var t = m && (!f || l > 1);
                s(), t && (d !== !1 && (u = new Vi), a = e.apply(c, o))
            }

            function r() {
                s(), (m || d !== t) && (u = new Vi, a = e.apply(c, o))
            }
            var o, a, c, l = 0,
                u = 0,
                d = !1,
                h = null,
                p = null,
                m = !0;
            if (t = Es(0, t || 0), i === !0) {
                var f = !0;
                m = !1
            } else Dt(i) && (f = i.leading, d = "maxWait" in i && Es(t, i.maxWait || 0), m = "trailing" in i ? i.trailing : m);
            return function () {
                if (o = arguments, c = this, l++, ls(p), d === !1) f && 2 > l && (a = e.apply(c, o));
                else {
                    var i = new Vi;
                    h || f || (u = i);
                    var s = d - (i - u);
                    0 >= s ? (ls(h), h = null, u = i, a = e.apply(c, o)) : h || (h = vs(r, s))
                }
                return t !== d && (p = vs(n, t)), a
            }
        }

        function Ci(e) {
            var t = Is.call(arguments, 1);
            return vs(function () {
                e.apply(g, t)
            }, 1)
        }

        function Si(e, t) {
            var i = Is.call(arguments, 2);
            return vs(function () {
                e.apply(g, i)
            }, t)
        }

        function Ei(e, t) {
            function i() {
                var s = i.cache,
                    n = D + (t ? t.apply(this, arguments) : arguments[0]);
                return ms.call(s, n) ? s[n] : s[n] = e.apply(this, arguments)
            }
            return i.cache = {}, i
        }

        function ki(e) {
            var t, i;
            return function () {
                return t ? i : (t = !0, i = e.apply(this, arguments), e = null, i)
            }
        }

        function xi(e) {
            return w(e, Is.call(arguments, 1))
        }

        function Ai(e) {
            return w(e, Is.call(arguments, 1), null, _)
        }

        function Ii(e, t, i) {
            var s = !0,
                n = !0;
            i === !1 ? s = !1 : Dt(i) && (s = "leading" in i ? i.leading : s, n = "trailing" in i ? i.trailing : n), i = l(), i.leading = s, i.maxWait = t, i.trailing = n;
            var r = wi(e, t, i);
            return p(i), r
        }

        function Mi(e, t) {
            return function () {
                var i = [e];
                return fs.apply(i, arguments), t.apply(this, i)
            }
        }

        function Ri(e) {
            return null == e ? "" : es(e).replace(F, tt)
        }

        function Li(e) {
            return e
        }

        function Ni(e) {
            Pt(dt(e), function (t) {
                var i = T[t] = e[t];
                T.prototype[t] = function () {
                    var e = this.__wrapped__,
                        t = [e];
                    fs.apply(t, arguments);
                    var s = i.apply(T, t);
                    return e && "object" == typeof e && e === s ? this : new v(s)
                }
            })
        }

        function Fi() {
            return s._ = os, this
        }

        function $i(e, t) {
            null == e && null == t && (t = 1), e = +e || 0, null == t ? (t = e, e = 0) : t = +t || 0;
            var i = As();
            return e % 1 || t % 1 ? e + ks(i * (t - e + parseFloat("1e-" + ((i + "").length - 1))), t) : e + ds(i * (t - e + 1))
        }

        function Oi(e, t) {
            var i = e ? e[t] : g;
            return _t(i) ? e[t]() : i
        }

        function Ui(e, t, i) {
            var s = T.templateSettings;
            e || (e = ""), i = $s ? Vs({}, i, s) : s;
            var n, r = $s && Vs({}, i.imports, s.imports),
                o = $s ? Hs(r) : ["_"],
                c = $s ? Lt(r) : [T],
                l = 0,
                u = i.interpolate || N,
                d = "__p += '",
                h = Zi((i.escape || N).source + "|" + u.source + "|" + (u === I ? x : N).source + "|" + (i.evaluate || N).source + "|$", "g");
            e.replace(h, function (t, i, s, r, o, c) {
                return s || (s = r), d += e.slice(l, c).replace($, a), i && (d += "' +\n__e(" + i + ") +\n'"), o && (n = !0, d += "';\n" + o + ";\n__p += '"), s && (d += "' +\n((__t = (" + s + ")) == null ? '' : __t) +\n'"), l = c + t.length, t
            }), d += "';\n";
            var p = i.variable,
                m = p;
            m || (p = "obj", d = "with (" + p + ") {\n" + d + "\n}\n"), d = (n ? d.replace(C, "") : d).replace(S, "$1").replace(E, "$1;"), d = "function(" + p + ") {\n" + (m ? "" : p + " || (" + p + " = {});\n") + "var __t, __p = '', __e = _.escape" + (n ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + d + "return __p\n}";
            var f = "\n/*\n//@ sourceURL=" + (i.sourceURL || "/lodash/template/source[" + j+++"]") + "\n*/";
            try {
                var v = Yi(o, "return " + d + f).apply(g, c)
            } catch (y) {
                throw y.source = d, y
            }
            return t ? v(t) : (v.source = d, v)
        }

        function ji(e, t, i) {
            e = (e = +e) > -1 ? e : 0;
            var s = -1,
                n = zi(e);
            for (t = T.createCallback(t, i, 1); e > ++s;) n[s] = t(s);
            return n
        }

        function Pi(e) {
            return null == e ? "" : es(e).replace(k, ot)
        }

        function Bi(e) {
            var t = ++y;
            return es(null == e ? "" : e) + t
        }

        function Hi(e, t) {
            return t(e), e
        }

        function Wi() {
            return es(this.__wrapped__)
        }

        function Ki() {
            return this.__wrapped__
        }
        s = s ? it.defaults(e.Object(), s, it.pick(e, O)) : e;
        var zi = s.Array,
            Gi = s.Boolean,
            Vi = s.Date,
            qi = s.Error,
            Yi = s.Function,
            Qi = s.Math,
            Xi = s.Number,
            Ji = s.Object,
            Zi = s.RegExp,
            es = s.String,
            ts = s.TypeError,
            is = [],
            ss = qi.prototype,
            ns = Ji.prototype,
            rs = es.prototype,
            os = s._,
            as = Zi("^" + es(ns.valueOf).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/valueOf|for [^\]]+/g, ".+?") + "$"),
            cs = Qi.ceil,
            ls = s.clearTimeout,
            us = is.concat,
            ds = Qi.floor,
            hs = Yi.prototype.toString,
            ps = as.test(ps = Ji.getPrototypeOf) && ps,
            ms = ns.hasOwnProperty,
            fs = is.push,
            gs = ns.propertyIsEnumerable,
            Ts = s.setImmediate,
            vs = s.setTimeout,
            ys = ns.toString,
            _s = as.test(_s = ys.bind) && _s,
            Ds = as.test(Ds = Ji.create) && Ds,
            bs = as.test(bs = zi.isArray) && bs,
            ws = s.isFinite,
            Cs = s.isNaN,
            Ss = as.test(Ss = Ji.keys) && Ss,
            Es = Qi.max,
            ks = Qi.min,
            xs = s.parseInt,
            As = Qi.random,
            Is = is.slice,
            Ms = as.test(s.attachEvent),
            Rs = _s && !/\n|true/.test(_s + Ms),
            Ls = {};
        Ls[B] = zi, Ls[H] = Gi, Ls[W] = Vi, Ls[z] = Yi, Ls[V] = Ji, Ls[G] = Xi, Ls[q] = Zi, Ls[Y] = es;
        var Ns = {};
        Ns[B] = Ns[W] = Ns[G] = {
            constructor: !0,
            toLocaleString: !0,
            toString: !0,
            valueOf: !0
        }, Ns[H] = Ns[Y] = {
            constructor: !0,
            toString: !0,
            valueOf: !0
        }, Ns[K] = Ns[z] = Ns[q] = {
            constructor: !0,
            toString: !0
        }, Ns[V] = {
            constructor: !0
        },
        function () {
            for (var e = U.length; e--;) {
                var t = U[e];
                for (var i in Ns) ms.call(Ns, i) && !ms.call(Ns[i], t) && (Ns[i][t] = !1)
            }
        }(), v.prototype = T.prototype;
        var Fs = T.support = {};
        (function () {
            var e = function () {
                this.x = 1
            }, t = {
                    0: 1,
                    length: 1
                }, i = [];
            e.prototype = {
                valueOf: 1,
                y: 1
            };
            for (var s in new e) i.push(s);
            for (s in arguments);
            Fs.argsObject = arguments.constructor == Ji && !(arguments instanceof zi), Fs.argsClass = at(arguments), Fs.enumErrorProps = gs.call(ss, "message") || gs.call(ss, "name"), Fs.enumPrototypes = gs.call(e, "prototype"), Fs.fastBind = _s && !Rs, Fs.ownLast = "x" != i[0], Fs.nonEnumArgs = 0 != s, Fs.nonEnumShadows = !/valueOf/.test(i), Fs.spliceObjects = (is.splice.call(t, 0, 1), !t[0]), Fs.unindexedChars = "xx" != "x" [0] + Ji("x")[0];
            try {
                Fs.nodeClass = !(ys.call(document) == V && !({
                    toString: 0
                } + ""))
            } catch (n) {
                Fs.nodeClass = !0
            }
        })(1), T.templateSettings = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: I,
            variable: "",
            imports: {
                _: T
            }
        };
        var $s = Ui("var index, iterable = <%= firstArg %>, result = <%= init %>;\nif (!iterable) return result;\n<%= top %>;<% if (array) { %>\nvar length = iterable.length; index = -1;\nif (<%= array %>) {  <% if (support.unindexedChars) { %>\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  <% } %>\n  while (++index < length) {\n    <%= loop %>;\n  }\n}\nelse {  <% } else if (support.nonEnumArgs) { %>\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      <%= loop %>;\n    }\n  } else {  <% } %>  <% if (support.enumPrototypes) { %>\n  var skipProto = typeof iterable == 'function';\n  <% } %>  <% if (support.enumErrorProps) { %>\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  <% } %>  <%    var conditions = [];    if (support.enumPrototypes) { conditions.push('!(skipProto && index == \"prototype\")'); }    if (support.enumErrorProps)  { conditions.push('!(skipErrorProps && (index == \"message\" || index == \"name\"))'); }  %>  <% if (useHas && useKeys) { %>\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n<%    if (conditions.length) { %>    if (<%= conditions.join(' && ') %>) {\n  <% } %>    <%= loop %>;    <% if (conditions.length) { %>\n    }<% } %>\n  }  <% } else { %>\n  for (index in iterable) {\n<%    if (useHas) { conditions.push(\"hasOwnProperty.call(iterable, index)\"); }    if (conditions.length) { %>    if (<%= conditions.join(' && ') %>) {\n  <% } %>    <%= loop %>;    <% if (conditions.length) { %>\n    }<% } %>\n  }    <% if (support.nonEnumShadows) { %>\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      <% for (k = 0; k < 7; k++) { %>\n    index = '<%= shadowedProps[k] %>';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))<%        if (!useHas) { %> || (!nonEnum[index] && iterable[index] !== objectProto[index])<% }      %>) {\n      <%= loop %>;\n    }      <% } %>\n  }    <% } %>  <% } %>  <% if (array || support.nonEnumArgs) { %>\n}<% } %>\n<%= bottom %>;\nreturn result"),
            Os = {
                args: "object, source, guard",
                top: "var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",
                loop: "if (typeof result[index] == 'undefined') result[index] = iterable[index]",
                bottom: "  }\n}"
            }, Us = {
                args: "collection, callback, thisArg",
                top: "callback = callback && typeof thisArg == 'undefined' ? callback : lodash.createCallback(callback, thisArg)",
                array: "typeof length == 'number'",
                loop: "if (callback(iterable[index], index, collection) === false) return result"
            }, js = {
                top: "if (!objectTypes[typeof iterable]) return result;\n" + Us.top,
                array: !1
            };
        if (!Ds) var Z = function (e) {
            if (Dt(e)) {
                d.prototype = e;
                var t = new d;
                d.prototype = null
            }
            return t || {}
        };
        Fs.argsClass || (at = function (e) {
            return e ? ms.call(e, "callee") : !1
        });
        var Ps = bs || function (e) {
                return e ? "object" == typeof e && ys.call(e) == B : !1
            }, Bs = J({
                args: "object",
                init: "[]",
                top: "if (!(objectTypes[typeof object])) return result",
                loop: "result.push(index)"
            }),
            Hs = Ss ? function (e) {
                return Dt(e) ? Fs.enumPrototypes && "function" == typeof e || Fs.nonEnumArgs && e.length && at(e) ? Bs(e) : Ss(e) : []
            } : Bs,
            Ws = J(Us),
            Ks = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }, zs = pt(Ks),
            Gs = J(Os, {
                top: Os.top.replace(";", ";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = lodash.createCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),
                loop: "result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"
            }),
            Vs = J(Os),
            qs = J(Us, js, {
                useHas: !1
            }),
            Ys = J(Us, js);
        _t(/x/) && (_t = function (e) {
            return "function" == typeof e && ys.call(e) == z
        });
        var Qs = ps ? function (e) {
                if (!e || ys.call(e) != V || !Fs.argsClass && at(e)) return !1;
                var t = e.valueOf,
                    i = "function" == typeof t && (i = ps(t)) && ps(i);
                return i ? e == i || ps(e) == i : rt(e)
            } : rt,
            Xs = Wt,
            Js = Ut,
            Zs = nt(function Zs(e, t, i) {
                for (var s = -1, n = e ? e.length : 0, r = []; n > ++s;) {
                    var o = e[s];
                    i && (o = i(o, s, e)), Ps(o) ? fs.apply(r, t ? o : Zs(o)) : r.push(o)
                }
                return r
            }),
            en = nt(function (e, s, n) {
                var r = -1,
                    a = st(),
                    l = e ? e.length : 0,
                    u = [],
                    d = !s && l >= b && a === t,
                    m = n || d ? c() : u;
                if (d) {
                    var f = o(m);
                    f ? (a = i, m = f) : (d = !1, m = n ? m : (h(m), u))
                }
                for (; l > ++r;) {
                    var g = e[r],
                        T = n ? n(g, r, e) : g;
                    (s ? !r || m[m.length - 1] !== T : 0 > a(m, T)) && ((n || d) && m.push(T), u.push(g))
                }
                return d ? (h(m.array), p(m)) : n && h(m), u
            });
        Rs && et && "function" == typeof Ts && (Ci = vi(Ts, s));
        var tn = 8 == xs(R + "08") ? xs : function (e, t) {
                return xs(Et(e) ? e.replace(L, "") : e, t || 0)
            };
        return T.after = Ti, T.assign = Gs, T.at = Nt, T.bind = vi, T.bindAll = yi, T.bindKey = _i, T.compact = ei, T.compose = Di, T.countBy = $t, T.createCallback = bi, T.debounce = wi, T.defaults = Vs, T.defer = Ci, T.delay = Si, T.difference = ti, T.filter = Ut, T.flatten = Zs, T.forEach = Pt, T.forIn = qs, T.forOwn = Ys, T.functions = dt, T.groupBy = Bt, T.initial = ri, T.intersection = oi, T.invert = pt, T.invoke = Ht, T.keys = Hs, T.map = Wt, T.max = Kt, T.memoize = Ei, T.merge = xt, T.min = zt, T.omit = At, T.once = ki, T.pairs = It, T.partial = xi, T.partialRight = Ai, T.pick = Mt, T.pluck = Xs, T.range = li, T.reject = qt, T.rest = ui, T.shuffle = Yt, T.sortBy = Jt, T.tap = Hi, T.throttle = Ii, T.times = ji, T.toArray = Zt, T.transform = Rt, T.union = hi, T.uniq = en, T.unzip = pi, T.values = Lt, T.where = Js, T.without = mi, T.wrap = Mi, T.zip = fi, T.zipObject = gi, T.collect = Wt, T.drop = ui, T.each = Pt, T.extend = Gs, T.methods = dt, T.object = gi, T.select = Ut, T.tail = ui, T.unique = en, Ni(T), T.chain = T, T.prototype.chain = function () {
            return this
        }, T.clone = ct, T.cloneDeep = lt, T.contains = Ft, T.escape = Ri, T.every = Ot, T.find = jt, T.findIndex = ii, T.findKey = ut, T.has = ht, T.identity = Li, T.indexOf = ni, T.isArguments = at, T.isArray = Ps, T.isBoolean = mt, T.isDate = ft, T.isElement = gt, T.isEmpty = Tt, T.isEqual = vt, T.isFinite = yt, T.isFunction = _t, T.isNaN = bt, T.isNull = wt, T.isNumber = Ct, T.isObject = Dt, T.isPlainObject = Qs, T.isRegExp = St, T.isString = Et, T.isUndefined = kt, T.lastIndexOf = ci, T.mixin = Ni, T.noConflict = Fi, T.parseInt = tn, T.random = $i, T.reduce = Gt, T.reduceRight = Vt, T.result = Oi, T.runInContext = f, T.size = Qt, T.some = Xt, T.sortedIndex = di, T.template = Ui, T.unescape = Pi, T.uniqueId = Bi, T.all = Ot, T.any = Xt, T.detect = jt, T.findWhere = jt, T.foldl = Gt, T.foldr = Vt, T.include = Ft, T.inject = Gt, Ys(T, function (e, t) {
            T.prototype[t] || (T.prototype[t] = function () {
                var t = [this.__wrapped__];
                return fs.apply(t, arguments), e.apply(T, t)
            })
        }), T.first = si, T.last = ai, T.take = si, T.head = si, Ys(T, function (e, t) {
            T.prototype[t] || (T.prototype[t] = function (t, i) {
                var s = e(this.__wrapped__, t, i);
                return null == t || i && "function" != typeof t ? s : new v(s)
            })
        }), T.VERSION = "1.3.1", T.prototype.toString = Wi, T.prototype.value = Ki, T.prototype.valueOf = Ki, Ws(["join", "pop", "shift"], function (e) {
            var t = is[e];
            T.prototype[e] = function () {
                return t.apply(this.__wrapped__, arguments)
            }
        }), Ws(["push", "reverse", "sort", "unshift"], function (e) {
            var t = is[e];
            T.prototype[e] = function () {
                return t.apply(this.__wrapped__, arguments), this
            }
        }), Ws(["concat", "slice", "splice"], function (e) {
            var t = is[e];
            T.prototype[e] = function () {
                return new v(t.apply(this.__wrapped__, arguments))
            }
        }), Fs.spliceObjects || Ws(["pop", "shift", "splice"], function (e) {
            var t = is[e],
                i = "splice" == e;
            T.prototype[e] = function () {
                var e = this.__wrapped__,
                    s = t.apply(e, arguments);
                return 0 === e.length && delete e[0], i ? new v(s) : s
            }
        }), T._basicEach = Ws, T._iteratorTemplate = $s, T._shimKeys = Bs, T
    }
    var g, T = [],
        v = [],
        y = 0,
        _ = {}, D = +new Date + "",
        b = 75,
        w = 40,
        C = /\b__p \+= '';/g,
        S = /\b(__p \+=) '' \+/g,
        E = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        k = /&(?:amp|lt|gt|quot|#39);/g,
        x = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        A = /\w*$/,
        I = /<%=([\s\S]+?)%>/g,
        M = (M = /\bthis\b/) && M.test(f) && M,
        R = " 	\f ﻿\n\r\u2028\u2029 ᠎             　",
        L = RegExp("^[" + R + "]*0+(?=.$)"),
        N = /($^)/,
        F = /[&<>"']/g,
        $ = /['\n\r\t\u2028\u2029\\]/g,
        O = ["Array", "Boolean", "Date", "Error", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setImmediate", "setTimeout"],
        U = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        j = 0,
        P = "[object Arguments]",
        B = "[object Array]",
        H = "[object Boolean]",
        W = "[object Date]",
        K = "[object Error]",
        z = "[object Function]",
        G = "[object Number]",
        V = "[object Object]",
        q = "[object RegExp]",
        Y = "[object String]",
        Q = {};
    Q[z] = !1, Q[P] = Q[B] = Q[H] = Q[W] = Q[G] = Q[V] = Q[q] = Q[Y] = !0;
    var X = {
        "boolean": !1,
        "function": !0,
        object: !0,
        number: !1,
        string: !1,
        undefined: !1
    }, J = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, Z = X[typeof exports] && exports,
        et = X[typeof module] && module && module.exports == Z && module,
        tt = X[typeof global] && global;
    !tt || tt.global !== tt && tt.window !== tt || (e = tt);
    var it = f();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (e._ = it, define(function () {
        return it
    })) : Z && !Z.nodeType ? et ? (et.exports = it)._ = it : Z._ = it : e._ = it
}(this),
function () {
    function e(e) {
        return e ? t.escapeRegExp(e) : "\\s"
    }
    var t, i = String.prototype.trim;
    t = this._s = {
        capitalize: function (e) {
            return e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()
        },
        join: function (e) {
            for (var t = "", i = 1; arguments.length > i; i += 1) t += arguments[i] + "", i !== arguments.length - 1 && (t += e + "");
            return t
        },
        escapeRegExp: function (e) {
            return e.replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1")
        },
        reverse: function (e) {
            return Array.prototype.reverse.apply(e.split("")).join("")
        },
        contains: function (e, t) {
            return -1 !== e.indexOf(t)
        },
        clean: function (e) {
            return t.strip(e.replace(/\s+/g, " "))
        },
        trim: function (t, s) {
            return !s && i ? i.call(t) : (s = e(s), t.replace(RegExp("^[" + s + "]+|[" + s + "]+$", "g"), ""))
        },
        ltrim: function (t, i) {
            return i = e(i), t.replace(RegExp("^[" + i + "]+", "g"), "")
        },
        rtrim: function (t, i) {
            return i = e(i), t.replace(RegExp("[" + i + "]+$", "g"), "")
        },
        startsWith: function (e, t) {
            return e.length >= t.length && e.substring(0, t.length) === t
        },
        endsWith: function (e, t) {
            return e.length >= t.length && e.substring(e.length - t.length) === t
        },
        sprintf: function () {
            for (var e, t, i, s, n = 0, r = arguments[n++], o = []; r;) {
                if (t = /^[^\x25]+/.exec(r)) o.push(t[0]);
                else if (t = /^\x25{2}/.exec(r)) o.push("%");
                else {
                    if (!(t = /^\x25(?:(\d+)\$)?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(r))) throw "Huh ?!";
                    if (null == (e = arguments[t[1] || n++]) || void 0 == e) throw "Too few arguments.";
                    if (/[^s]/.test(t[7]) && "number" != typeof e) throw "Expecting number but found " + typeof e;
                    switch (t[7]) {
                    case "b":
                        e = e.toString(2);
                        break;
                    case "c":
                        e = String.fromCharCode(e);
                        break;
                    case "d":
                        e = parseInt(e);
                        break;
                    case "e":
                        e = t[6] ? e.toExponential(t[6]) : e.toExponential();
                        break;
                    case "f":
                        e = t[6] ? parseFloat(e).toFixed(t[6]) : parseFloat(e);
                        break;
                    case "o":
                        e = e.toString(8);
                        break;
                    case "s":
                        e = (e += "") && t[6] ? e.substring(0, t[6]) : e;
                        break;
                    case "u":
                        e = Math.abs(e);
                        break;
                    case "x":
                        e = e.toString(16);
                        break;
                    case "X":
                        e = e.toString(16).toUpperCase()
                    }
                    if (e = /[def]/.test(t[7]) && t[2] && e >= 0 ? "+" + e : e, i = t[3] ? "0" == t[3] ? "0" : t[3].charAt(1) : " ", s = t[5] - (e + "").length - 0, t[5]) {
                        s = s;
                        for (var a = []; s > 0; a[--s] = i);
                        i = a.join("")
                    } else i = "";
                    i = i, o.push("" + (t[4] ? e + i : i + e))
                }
                r = r.substring(t[0].length)
            }
            return o.join("")
        }
    }, this._s.strip = t.trim, this._s.lstrip = t.ltrim, this._s.rstrip = t.rtrim, this._ && this._.mixin(this._s)
}(), window.TD = window.TD || {}, TD.core = TD.core || {}, TD.core.sha1 = function (e) {
    function t(e, t) {
        var i = e << t | e >>> 32 - t;
        return i
    }

    function i(e) {
        var t, i, s = "";
        for (t = 7; t >= 0; t--) i = 15 & e >>> 4 * t, s += i.toString(16);
        return s
    }

    function s(e) {
        e = e.replace(/\r\n/g, "\n");
        for (var t = "", i = 0; e.length > i; i++) {
            var s = e.charCodeAt(i);
            128 > s ? t += String.fromCharCode(s) : s > 127 && 2048 > s ? (t += String.fromCharCode(192 | s >> 6), t += String.fromCharCode(128 | 63 & s)) : (t += String.fromCharCode(224 | s >> 12), t += String.fromCharCode(128 | 63 & s >> 6), t += String.fromCharCode(128 | 63 & s))
        }
        return t
    }
    var n, r, o, a, c, l, u, d, h, p = Array(80),
        m = 1732584193,
        f = 4023233417,
        g = 2562383102,
        T = 271733878,
        v = 3285377520;
    e = s(e);
    var y = e.length,
        _ = [];
    for (r = 0; y - 3 > r; r += 4) o = e.charCodeAt(r) << 24 | e.charCodeAt(r + 1) << 16 | e.charCodeAt(r + 2) << 8 | e.charCodeAt(r + 3), _.push(o);
    switch (y % 4) {
    case 0:
        r = 2147483648;
        break;
    case 1:
        r = 8388608 | e.charCodeAt(y - 1) << 24;
        break;
    case 2:
        r = 32768 | (e.charCodeAt(y - 2) << 24 | e.charCodeAt(y - 1) << 16);
        break;
    case 3:
        r = 128 | (e.charCodeAt(y - 3) << 24 | e.charCodeAt(y - 2) << 16 | e.charCodeAt(y - 1) << 8)
    }
    for (_.push(r); 14 != _.length % 16;) _.push(0);
    for (_.push(y >>> 29), _.push(4294967295 & y << 3), n = 0; _.length > n; n += 16) {
        for (r = 0; 16 > r; r++) p[r] = _[n + r];
        for (r = 16; 79 >= r; r++) p[r] = t(p[r - 3] ^ p[r - 8] ^ p[r - 14] ^ p[r - 16], 1);
        for (a = m, c = f, l = g, u = T, d = v, r = 0; 19 >= r; r++) h = 4294967295 & t(a, 5) + (c & l | ~c & u) + d + p[r] + 1518500249, d = u, u = l, l = t(c, 30), c = a, a = h;
        for (r = 20; 39 >= r; r++) h = 4294967295 & t(a, 5) + (c ^ l ^ u) + d + p[r] + 1859775393, d = u, u = l, l = t(c, 30), c = a, a = h;
        for (r = 40; 59 >= r; r++) h = 4294967295 & t(a, 5) + (c & l | c & u | l & u) + d + p[r] + 2400959708, d = u, u = l, l = t(c, 30), c = a, a = h;
        for (r = 60; 79 >= r; r++) h = 4294967295 & t(a, 5) + (c ^ l ^ u) + d + p[r] + 3395469782, d = u, u = l, l = t(c, 30), c = a, a = h;
        m = 4294967295 & m + a, f = 4294967295 & f + c, g = 4294967295 & g + l, T = 4294967295 & T + u, v = 4294967295 & v + d
    }
    var h = i(m) + i(f) + i(g) + i(T) + i(v);
    return h.toLowerCase()
},
function () {
    var e = 8,
        t = "=",
        i = 0,
        s = function (t) {
            var i, s = [],
                n = (1 << e) - 1,
                r = t.length * e;
            for (i = 0; r > i; i += e) s[i >> 5] |= (t.charCodeAt(i / e) & n) << 32 - e - i % 32;
            return s
        }, n = function (e) {
            var t, i, s = [],
                n = e.length;
            for (t = 0; n > t; t += 2) {
                if (i = parseInt(e.substr(t, 2), 16), isNaN(i)) return "INVALID HEX STRING";
                s[t >> 3] |= i << 24 - 4 * (t % 8)
            }
            return s
        }, r = function (e) {
            var t, s, n = i ? "0123456789ABCDEF" : "0123456789abcdef",
                r = "",
                o = 4 * e.length;
            for (t = 0; o > t; t += 1) s = e[t >> 2] >> 8 * (3 - t % 4), r += n.charAt(15 & s >> 4) + n.charAt(15 & s);
            return r
        }, o = function (e) {
            var i, s, n, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                o = "",
                a = 4 * e.length;
            for (i = 0; a > i; i += 3)
                for (n = (255 & e[i >> 2] >> 8 * (3 - i % 4)) << 16 | (255 & e[i + 1 >> 2] >> 8 * (3 - (i + 1) % 4)) << 8 | 255 & e[i + 2 >> 2] >> 8 * (3 - (i + 2) % 4), s = 0; 4 > s; s += 1) o += 32 * e.length >= 8 * i + 6 * s ? r.charAt(63 & n >> 6 * (3 - s)) : t;
            return o
        }, a = function (e, t) {
            return e >>> t | e << 32 - t
        }, c = function (e, t) {
            return e >>> t
        }, l = function (e, t, i) {
            return e & t ^ ~e & i
        }, u = function (e, t, i) {
            return e & t ^ e & i ^ t & i
        }, d = function (e) {
            return a(e, 2) ^ a(e, 13) ^ a(e, 22)
        }, h = function (e) {
            return a(e, 6) ^ a(e, 11) ^ a(e, 25)
        }, p = function (e) {
            return a(e, 7) ^ a(e, 18) ^ c(e, 3)
        }, m = function (e) {
            return a(e, 17) ^ a(e, 19) ^ c(e, 10)
        }, f = function (e, t) {
            var i = (65535 & e) + (65535 & t),
                s = (e >>> 16) + (t >>> 16) + (i >>> 16);
            return (65535 & s) << 16 | 65535 & i
        }, g = function (e, t, i, s) {
            var n = (65535 & e) + (65535 & t) + (65535 & i) + (65535 & s),
                r = (e >>> 16) + (t >>> 16) + (i >>> 16) + (s >>> 16) + (n >>> 16);
            return (65535 & r) << 16 | 65535 & n
        }, T = function (e, t, i, s, n) {
            var r = (65535 & e) + (65535 & t) + (65535 & i) + (65535 & s) + (65535 & n),
                o = (e >>> 16) + (t >>> 16) + (i >>> 16) + (s >>> 16) + (n >>> 16) + (r >>> 16);
            return (65535 & o) << 16 | 65535 & r
        }, v = function (e, t, i) {
            var s, n, r, o, a, c, v, y, _, D, b, w, C, S, E, k, x = [];
            for (("SHA-224" === i || "SHA-256" === i) && (w = (t + 65 >> 9 << 4) + 15, E = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], b = "SHA-224" === i ? [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428] : [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]), e[t >> 5] |= 128 << 24 - t % 32, e[w] = t, k = e.length, C = 0; k > C; C += 16) {
                for (s = b[0], n = b[1], r = b[2], o = b[3], a = b[4], c = b[5], v = b[6], y = b[7], S = 0; 64 > S; S += 1) x[S] = 16 > S ? e[S + C] : g(m(x[S - 2]), x[S - 7], p(x[S - 15]), x[S - 16]), _ = T(y, h(a), l(a, c, v), E[S], x[S]), D = f(d(s), u(s, n, r)), y = v, v = c, c = a, a = f(o, _), o = r, r = n, n = s, s = f(_, D);
                b[0] = f(s, b[0]), b[1] = f(n, b[1]), b[2] = f(r, b[2]), b[3] = f(o, b[3]), b[4] = f(a, b[4]), b[5] = f(c, b[5]), b[6] = f(v, b[6]), b[7] = f(y, b[7])
            }
            switch (i) {
            case "SHA-224":
                return [b[0], b[1], b[2], b[3], b[4], b[5], b[6]];
            case "SHA-256":
                return b;
            default:
                return []
            }
        }, y = function (t, i) {
            if (this.sha224 = null, this.sha256 = null, this.strBinLen = null, this.strToHash = null, "HEX" === i) {
                if (0 !== t.length % 2) return "TEXT MUST BE IN BYTE INCREMENTS";
                this.strBinLen = 4 * t.length, this.strToHash = n(t)
            } else {
                if ("ASCII" !== i && void 0 !== i) return "UNKNOWN TEXT INPUT TYPE";
                this.strBinLen = t.length * e, this.strToHash = s(t)
            }
        };
    y.prototype = {
        getHash: function (e, t) {
            var i = null,
                s = this.strToHash.slice();
            switch (t) {
            case "HEX":
                i = r;
                break;
            case "B64":
                i = o;
                break;
            default:
                return "FORMAT NOT RECOGNIZED"
            }
            switch (e) {
            case "SHA-224":
                return null === this.sha224 && (this.sha224 = v(s, this.strBinLen, e)), i(this.sha224);
            case "SHA-256":
                return null === this.sha256 && (this.sha256 = v(s, this.strBinLen, e)), i(this.sha256);
            default:
                return "HASH NOT RECOGNIZED"
            }
        },
        getHMAC: function (t, i, a, c) {
            var l, u, d, h, p, m, f = [],
                g = [];
            switch (c) {
            case "HEX":
                l = r;
                break;
            case "B64":
                l = o;
                break;
            default:
                return "FORMAT NOT RECOGNIZED"
            }
            switch (a) {
            case "SHA-224":
                m = 224;
                break;
            case "SHA-256":
                m = 256;
                break;
            default:
                return "HASH NOT RECOGNIZED"
            }
            if ("HEX" === i) {
                if (0 !== t.length % 2) return "KEY MUST BE IN BYTE INCREMENTS";
                u = n(t), p = 4 * t.length
            } else {
                if ("ASCII" !== i) return "UNKNOWN KEY INPUT TYPE";
                u = s(t), p = t.length * e
            }
            for (p / 8 > 64 ? (u = v(u, p, a), u[15] &= 4294967040) : 64 > p / 8 && (u[15] &= 4294967040), d = 0; 15 >= d; d += 1) f[d] = 909522486 ^ u[d], g[d] = 1549556828 ^ u[d];
            return h = v(f.concat(this.strToHash), 512 + this.strBinLen, a), h = v(g.concat(h), 512 + m, a), l(h)
        }
    }, window.jsSHA = y
}(), TD.util = function () {
    var e, t, i, s, n = 0,
        r = 1e3,
        o = 60 * r,
        a = 60 * o,
        c = 24 * a,
        l = /(.+)(?:_normal)\.(\w+)$/,
        u = RegExp("<(?:.|\\n)*?>", "gm"),
        d = /\B(?=(\d{3})+(?!\d))/g,
        h = /^[@\uff20]?/,
        p = /^https?:\/\/twitter.com\/([a-zA-Z0-9-_]+)(?:\/status\/([0-9]+))?$/,
        m = !isNaN(new Date("Mon Oct 08 16:34:01 +0000 2012").getTime());
    return $.subscribe("/date", function (e) {
        var t = TD.util.parseDateString(e).getTime(),
            i = (new Date).getTime();
        n = t - i
    }), {
        ANCHOR_TAG_REGEXP: /href=/g,
        LT_REGEXP: /</g,
        GT_REGEXP: />/g,
        SINGLE_QUOTE_REGEXP: /'/g,
        QUOTE_REGEXP: /"/g,
        TWITTER_USERNAME_REGEXP: /@([A-Za-z0-9_]+)/g,
        parseDateString: function (e) {
            var t;
            return t = !m && e ? new Date(Date.parse(e.replace(/( \+)/, " UTC$1"))) : new Date(e)
        },
        parseISO8601: function (e) {
            var t = e.split("+"),
                i = t[0].split("T"),
                s = i[0].split("-"),
                n = i[1].split("Z"),
                r = n[0].split(":"),
                o = r[2].split("."),
                a = Number(r[0]),
                c = new Date;
            return c.setUTCDate(1), c.setUTCMonth(0), c.setUTCFullYear(Number(s[0])), c.setUTCMonth(Number(s[1]) - 1), c.setUTCDate(Number(s[2])), c.setUTCHours(Number(a)), c.setUTCMinutes(Number(r[1])), c.setUTCSeconds(Number(o[0])), o[1] ? c.setUTCMilliseconds(Number(o[1].substring(0, 3))) : c.setUTCMilliseconds(0), c
        },
        iso8601: function (e) {
            e || (e = new Date);
            var t = ("000" + e.getUTCFullYear()).slice(-4) + "-" + ("0" + (e.getUTCMonth() + 1)).slice(-2) + "-" + ("0" + e.getUTCDate()).slice(-2) + "T" + ("0" + e.getUTCHours()).slice(-2) + ":" + ("0" + e.getUTCMinutes()).slice(-2) + ":" + ("0" + e.getUTCSeconds()).slice(-2);
            return e.getMilliseconds() && (t += "." + ("000" + e.getMilliseconds()).slice(-3)), t
        },
        unixTime: function (e) {
            return Math.round(e.getTime() / 1e3)
        },
        prettyDate: function (e) {
            return TD.util.timeAgo(e.getTime(), !1, !0)
        },
        clean: function (e) {
            return e ? e.replace(this.LT_REGEXP, "&lt;").replace(this.GT_REGEXP, "&gt;").replace(this.SINGLE_QUOTE_REGEXP, "&#39;").replace(this.QUOTE_REGEXP, "&quot;") : e
        },
        removeHTMLCodes: function (e) {
            return e.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"')
        },
        stripHTMLTags: function (e) {
            return e.replace(u, "")
        },
        htmlToText: function (e) {
            return $("<div>" + e + "</div>").text()
        },
        h: function (e) {
            var t = $("<div/>"),
                i = function (e) {
                    return e ? t.text(e).html().replace(/\"/gi, "&quot;") : e
                };
            return this.h = function (e) {
                return i(e)
            }, i(e)
        },
        transform: function (e, t) {
            return e ? (t = t || {}, this.updateEntities(e, t), this.linkify(e, t)) : ""
        },
        updateEntities: function (e, t) {
            var i, s, n, r, o, a, c, l = twttr.txt.modifyIndicesFromUnicodeToUTF16;
            if (t.media && t.media.length ? l(e, t.media) : t.media = [], t.urls && t.urls.length) l(e, t.urls);
            else {
                for (s = this.extractURLEntities(e), c = {}, t.urls = [], n = 0; t.media.length > n; n++) c[t.media[n].url] = !0;
                for (n = 0; s.length > n; n++) c[s[n].url] || t.urls.push(s[n])
            }
            for (t.hashtags && t.hashtags.length ? l(e, t.hashtags) : t.hashtags = this.extractHashtagEntities(e), t.user_mentions && t.user_mentions.length ? l(e, t.user_mentions) : t.user_mentions = [], t.cashtags = twttr.txt.extractCashtagsWithIndices(e), i = this.extractMentionEntities(e), n = 0, r = i.length; r > n; n++) o = i[n], a = this.getEntityOverlap(o, t), a ? o.list_slug && o.indices[0] === a.indices[0] && (a.indices = o.indices, a.list_slug = o.list_slug) : t.user_mentions.push(o);
            return t
        },
        extractURLEntities: function (e) {
            return twttr.txt.extractUrlsWithIndices(e)
        },
        extractMentionEntities: function (e) {
            var t = twttr.txt.extractMentionsOrListsWithIndices(e);
            return _.each(t, function (e) {
                e.screen_name = e.screenName, e.list_slug = e.listSlug, delete e.screenName, delete e.listSlug
            }), t
        },
        extractHashtagEntities: function (e) {
            var t = twttr.txt.extractHashtagsWithIndices(e);
            return _.each(t, function (e) {
                e.text = e.hashtag, delete e.hashtag
            }), t
        },
        getEntityOverlap: function (e, t) {
            var i = t.urls;
            i = i.concat(t.media), i = i.concat(t.user_mentions), i = i.concat(t.hashtags);
            for (var s = 0, n = i.length; n > s; s++)
                if (e.indices[0] < i[s].indices[1] && e.indices[1] > i[s].indices[0]) return i[s];
            return null
        },
        linkify: function (e, t) {
            var i, s, n, r, o, a, c = "",
                l = t.urls || [];
            l = l.concat(t.media || []), l = l.concat(t.user_mentions || []), l = l.concat(t.hashtags || []), l = l.concat(t.cashtags || []), l.sort(function (e, t) {
                return t.indices[0] - e.indices[0]
            });
            for (var u = 0, d = l.length; d > u; u++) r = l[u], i = e.substring(0, r.indices[0]), s = e.substring(r.indices[0], r.indices[1]), n = e.substring(r.indices[1]), o = "", r.url ? o = s === r.url ? this.createUrlAnchor(r) : s : r.screen_name ? r.list_slug ? o = TD.ui.template.render("text/list_link", {
                slug: r.list_slug.substr(1),
                user: {
                    screenName: r.screen_name
                },
                fullName: "@" + r.screen_name + r.list_slug
            }) : (s = '<span class="at">@</span>' + r.screen_name, o = '<a href="http://twitter.com/' + r.screen_name + '"', o += ' rel="user"', o += ' data-user-name="' + r.screen_name + '"', o += ' target="_blank">' + s + "</a>") : r.text ? (a = {
                searchTerm: r.text,
                symbol: "#",
                escapedSymbol: escape("#")
            }, o = TD.ui.template.render("text/search_link", a)) : r.cashtag && (a = {
                searchTerm: r.cashtag,
                symbol: "$",
                escapedSymbol: escape("$")
            }, o = TD.ui.template.render("text/search_link", a)), c = o + this.clean(n) + c, e = i;
            return this.clean(e) + c
        },
        createUrlAnchor: function (e) {
            var t, i, s, n = e.url,
                r = "url",
                o = e.expanded_url || e.url,
                a = o.match(p);
            return a && (i = a[1], s = a[2]), _.startsWith(n, "https://") || _.startsWith(n, "http://") || (n = "http://" + n), t = '<a href="' + TD.util.escape(n) + '" target="_blank" class="url-ext" ', e.expanded_url && (t += 'data-full-url="' + TD.util.escape(e.expanded_url) + '" '), s ? (r = "tweet", t += 'data-tweet-id="' + s + '" ') : i && (r = "user", t += 'data-user-name="' + i + '" '), t += 'rel="' + r + '" ', e.display_url && e.expanded_url && 8230 == e.display_url.charCodeAt(e.display_url.length - 1) && (t += 'title="' + TD.util.escape(e.expanded_url) + '" '), t += ">" + TD.util.escape(e.display_url || e.url) + "</a>"
        },
        getReplyUsers: function (e) {
            var t = e.getMainTweet(),
                i = {}, s = e.account.getUsername().toLowerCase(),
                n = [t.user.screenName];
            return n = n.concat(twttr.txt.extractMentions(t.text)), e.retweetedStatus && n.push(e.user.screenName), n = n.filter(function (e) {
                return e.toLowerCase() !== s
            }), t.user.isMe() && 0 === n.length && n.unshift(t.user.screenName), n = n.filter(function (e) {
                var t = e.toLowerCase(),
                    s = !i[t];
                return i[t] = !0, s
            }), n = n.map(TD.util.atMentionify)
        },
        pluralise: function (e, t, i) {
            return 1 != i ? t : e
        },
        atMentionify: function (e) {
            return e.replace(h, "@")
        },
        deMentionify: function (e) {
            return e.replace(h, "")
        },
        selectAttrsFrom: function (e, t) {
            for (var i = {}, s = 0; t.length > s; s++) i[t[s]] = e[t[s]];
            return i
        },
        values: function (e) {
            var t = [];
            for (var i in e) e.hasOwnProperty(i) && t.push(e[i]);
            return t
        },
        isEmpty: _.isEmpty,
        isChromeApp: function () {
            return null == e && (e = _.startsWith(window.location.href, "chrome-extension://")), e
        },
        isChrome: function () {
            return null == t && (t = window.navigator.userAgent.indexOf("Chrome") > -1), t
        },
        isWrapperApp: function () {
            return null == i && (i = Boolean(window.deck && deck.inApp())), i
        },
        isTouchDevice: function () {
            return null == s && (s = Boolean(Modernizr.touch && TD.config.touchdeck)), s
        },
        isUnsupportedWebWrapperVersion: function () {
            var e, t, i = !1,
                s = Boolean(TD.util.isWrapperApp() && deck.getWrapperVersion);
            if (s) {
                switch (t = deck.getWrapperVersion(), TD.util.getAppEnv()) {
                case "mac":
                    e = TD.minWrapperVersionMac;
                    break;
                case "win":
                    e = TD.minWrapperVersionWin
                }
                i = !e || 0 > TD.util.versionComparator(t, e)
            }
            return i
        },
        isRetina: function () {
            return window.devicePixelRatio >= 1.5
        },
        shouldStream: function () {
            var e = new XMLHttpRequest,
                t = "withCredentials" in e;
            return t && TD.settings.getUseStream() && !TD.config.disable_streaming
        },
        getCurrentLocation: function (e, t, i) {
            var s, n, r, o = Number.MAX_VALUE,
                a = navigator.geolocation,
                c = function (e) {
                    var t = e.coords.accuracy;
                    o > t && (s = e, o = t), 50 > t && (clearTimeout(r), l())
                }, l = function () {
                    a.clearWatch(n), s ? t(s) : i && i()
                };
            r = setTimeout(l, e), n = a.watchPosition(c, i, {
                enableHighAccuracy: !0
            })
        },
        openURL: function (e, t) {
            if (_.isString(e) && (_.startsWith(e, "https://") || _.startsWith(e, "http://"))) {
                t && (e = TD.net.util.addURLParameters(e, t));
                var i = window.open(e);
                i.focus()
            }
        },
        maybeOpenClickExternally: function (e) {
            var t = !1,
                i = $(e.currentTarget),
                s = i.prop("tagName"),
                n = i.attr("rel"),
                r = i.attr("target"),
                o = e.ctrlKey || e.shiftKey || e.altKey || e.metaKey || 0 !== e.button;
            return "A" === s && "_blank" === r && ("url" === n || o) && (TD.util.isWrapperApp() ? (TD.util.openURL(i.attr("href")), e.preventDefault(), e.stopImmediatePropagation()) : e.stopImmediatePropagation(), t = !0), t
        },
        openEmail: function (e, t, i) {
            var s = "mailto:",
                n = {};
            t && (n.subject = t), i && (n.body = i), e && (s += e), s = s + "?" + TD.net.util.formEncode(n), window.open(s)
        },
        escape: function (e) {
            return this.clean(e)
        },
        truncateText: function (e, t, i, s, n, r) {
            t = void 0 == t ? "…" : t, s = s || 0, r = r || 0;
            var o;
            if (e.length > i + s) {
                var a = e.indexOf(" ", i - r - 1); - 1 != a && (i = Math.min(i, a + 1)), o = e.substr(0, i), n && (o = this.transform(o)), o += t
            }
            return o
        },
        timesCached: null,
        timeWords: function () {
            return TD.util.timesCached || (TD.util.timesCached = {
                longForm: {
                    singular: {
                        now: TD.i("now", null, !0),
                        seconds: TD.i("{{one}} second ago", null, !0),
                        minutes: TD.i("{{one}} minute ago", null, !0),
                        hours: TD.i("{{one}} hour ago", null, !0),
                        days: TD.i("{{one}} day ago", null, !0)
                    },
                    plural: {
                        now: TD.i("now", null, !0),
                        seconds: TD.i("{{plural_number}} seconds ago", null, !0),
                        minutes: TD.i("{{plural_number}} minutes ago", null, !0),
                        hours: TD.i("{{plural_number}} hours ago", null, !0),
                        days: TD.i("{{plural_number}} days ago", null, !0)
                    }
                },
                shortForm: {
                    singular: {
                        now: TD.i("now", null, !0),
                        seconds: TD.i("{{one}}s", null, !0),
                        minutes: TD.i("{{one}}m", null, !0),
                        hours: TD.i("{{one}}h", null, !0),
                        days: TD.i("{{one}}d", null, !0)
                    },
                    plural: {
                        now: TD.i("now", null, !0),
                        seconds: TD.i("{{plural_number}}s", null, !0),
                        minutes: TD.i("{{plural_number}}m", null, !0),
                        hours: TD.i("{{plural_number}}h", null, !0),
                        days: TD.i("{{plural_number}}d", null, !0)
                    }
                }
            }), TD.util.timesCached
        },
        datesCached: null,
        dates: function () {
            return TD.util.datesCached || (TD.util.datesCached = {
                months: [TD.i("Jan"), TD.i("Feb"), TD.i("Mar"), TD.i("Apr"), TD.i("May"), TD.i("Jun"), TD.i("Jul"), TD.i("Aug"), TD.i("Sep"), TD.i("Oct"), TD.i("Nov"), TD.i("Dec")],
                dates: [TD.i("1st"), TD.i("2nd"), TD.i("3rd"), TD.i("4th"), TD.i("5th"), TD.i("6th"), TD.i("7th"), TD.i("8th"), TD.i("9th"), TD.i("10th"), TD.i("11th"), TD.i("12th"), TD.i("13th"), TD.i("14th"), TD.i("15th"), TD.i("16th"), TD.i("17th"), TD.i("18th"), TD.i("19th"), TD.i("20th"), TD.i("21st"), TD.i("22nd"), TD.i("23rd"), TD.i("24th"), TD.i("25th"), TD.i("26th"), TD.i("27th"), TD.i("28th"), TD.i("29th"), TD.i("30th"), TD.i("31st")]
            }), TD.util.datesCached
        },
        timeAgo: function (e, t, i) {
            var s, l, u, d, h = (new Date).getTime(),
                p = new Date(e).getTime(),
                m = TD.util.timeWords()[t ? "longForm" : "shortForm"];
            return i && (h += n), s = h - p, isNaN(s) || -5 * r > s ? "" : (7 * r > s ? (u = "", l = "now") : o > s ? (u = Math.floor(s / r), l = "seconds") : a > s ? (u = Math.floor(s / o), l = "minutes") : c > s ? (u = Math.floor(s / a), l = "hours") : (u = Math.floor(s / c), l = "days"), m = 1 === u ? m.singular : m.plural, d = TD.ui.template.toHtml(m[l], {
                one: u,
                plural_number: u
            }))
        },
        prettyTime: function (e) {
            var t = {
                month: TD.util.dates().months[e.getMonth()],
                hours24: e.getHours(),
                hours12: e.getHours() % 12 || 12,
                minutes: TD.util.padLeadingZero(e.getMinutes()),
                amPm: 12 > e.getHours() ? TD.i("am") : TD.i("pm"),
                date: TD.util.dates().dates[e.getDate() - 1],
                day: e.getDate(),
                year: ("" + e.getFullYear()).slice(2),
                fullYear: e.getFullYear()
            };
            return t
        },
        prettyTimeString: function (e) {
            return TD.i("{{hours12}}:{{minutes}}{{amPm}} · {{day}} {{month}} {{year}}", TD.util.prettyTime(e))
        },
        prettyTimeOfDayString: function (e) {
            return TD.i("{{hours12}}:{{minutes}}{{amPm}}", TD.util.prettyTime(e))
        },
        prettyDateString: function (e) {
            return TD.i("{{day}} {{month}} {{fullYear}}", TD.util.prettyTime(e))
        },
        padLeadingZero: function (e) {
            return ("" + e).replace(/^(\d)$/, "0$1")
        },
        prettyNumber: function (e) {
            var t;
            if ("string" == typeof e) e = parseInt(e, 10);
            else if ("number" != typeof e || isNaN(e)) return "";
            return t = ("" + e).split("."), t[0].replace(d, ",")
        },
        chirpDescSort: function (e, t) {
            return t.created.getTime() - e.created.getTime()
        },
        chirpAscSort: function (e, t) {
            return e.created.getTime() - t.created.getTime()
        },
        transformTwitterAvatar: function (e, t) {
            return e.replace(l, "$1_" + t + ".$2")
        },
        getOSName: function () {
            var e = "";
            return this.isWrapperApp() ? e = deck.osname() : -1 != navigator.appVersion.indexOf("Win") ? e = "windows" : -1 != navigator.appVersion.indexOf("Mac") ? e = "osx" : -1 != navigator.appVersion.indexOf("Linux") && (e = "linux"), e
        },
        getAppEnv: function () {
            var e, t = "unknown";
            if (this.isChromeApp()) t = "chrome";
            else if (this.isWrapperApp()) switch (e = this.getOSName()) {
            case "osx":
                t = "mac";
                break;
            case "windows":
                t = "win"
            } else _.startsWith(window.location.href, "file://") || (t = "web");
            return t
        },
        hasFixedScrollBars: function () {
            var e, t = $("<div>").css({
                    width: "100px",
                    height: "100px",
                    overflow: "scroll",
                    position: "absolute",
                    top: "-9999px"
                });
            return $("body").append(t), e = t[0].offsetWidth - t[0].clientWidth, t.remove(), Boolean(e)
        },
        bind: function (e, t) {
            return function () {
                e.apply(t, arguments)
            }
        },
        random: function (e, t) {
            return null == t && (t = e, e = 0), e + (0 | Math.random() * (t - e + 1))
        },
        extendObjectWith: function (e, t) {
            _.each(t, function (t) {
                e[t[0]] = t[1]
            })
        },
        insertLogDivider: _.debounce(function () {
            console.log(" ")
        }, 1),
        versionComparator: function (e, t) {
            e = "" + e, t = "" + t;
            for (var i, s, n = e.split("."), r = t.split("."), o = Math.min(n.length, r.length), a = 0; o > a; a++) {
                if (i = parseInt(n[a], 10), s = parseInt(r[a], 10), i > s) return 1;
                if (s > i) return -1
            }
            return n.length > r.length ? 1 : n.length < r.length ? -1 : 0
        },
        getPreciseTime: function () {
            return window.performance ? "function" == typeof window.performance.now ? window.performance.now() : "function" == typeof window.performance.webkitNow ? window.performance.webkitNow() : void 0 : +new Date
        },
        fnPerformanceWrapper: function (e, t, i) {
            return function () {
                var s, n = TD.util.getPreciseTime(),
                    r = e.apply(t, arguments);
                return s = TD.util.getPreciseTime(), TD.controller.stats.performance.log(i, s - n), r
            }
        },
        logTimeToRenderColumn: function (e, t) {
            var i;
            t > 0 && (i = e / t, TD.controller.stats.performance.log(TD.controller.stats.performance.keys.RENDER_TWEET, i))
        },
        TpmCounter: function (e, t, i) {
            var s = 0,
                n = 0,
                r = 0,
                o = [],
                a = (new Date).getTime(),
                c = setInterval(function () {
                    var e, c, l, u = (new Date).getTime(),
                        d = u - t;
                    for (o.push({
                        renderedCount: r,
                        startTime: a
                    }), n += r, r = 0, a = u; o.length && d > o[0].startTime;) e = o.shift(), n -= e.renderedCount;
                    o.length && (c = u - o[0].startTime, l = 6e4 / c, s = n * l, $(document).trigger(i, {
                        itemsPerMinute: Math.round(s)
                    }))
                }.bind(this), e);
            this.incrementCounter = function (e) {
                r += e
            }, this.stop = function () {
                clearInterval(c)
            }
        },
        deterministicObjectHash: function (e) {
            var t = TD.util.createHashableObject(e),
                i = JSON.stringify(t),
                s = TD.core.sha1(i);
            return s = s.substr(0, 10)
        },
        createHashableObject: function (e) {
            var t, i;
            if (Array.isArray(e)) t = e.map(TD.util.createHashableObject), t.push("A");
            else if (e === Object(e)) {
                t = [];
                for (var s in e) e.hasOwnProperty(s) && (i = TD.util.createHashableObject(e[s]), t.push([s, i]));
                t.sort(function (e, t) {
                    return e[0].localeCompare(t[0])
                }), t.push("O")
            } else t = e;
            return t
        }
    }
}(), TD.core.defer = function () {
    var e = {};
    e.NAME = "TD.core.defer", e.DEBUG_DEFERREDS = !1;
    var t = Array.prototype.slice,
        i = function (e) {
            this.message = e, this.name = e
        };
    i.prototype = Error(), i.prototype.toString = function () {
        return this.message && this.message != this.name ? this.name + "(" + ("" + this.message) + ")" : this.name + "()"
    };
    var s = function (e, t, s) {
        s.prototype = new i(e.NAME + "." + t), e[t] = s
    };
    s(e, "AlreadyCalledError", function (e) {
        this.deferred = e
    }), s(e, "CancelledError", function (e) {
        this.deferred = e
    }), s(e, "GenericError", function (e) {
        this.message = e
    }), s(e, "XMLHttpRequestError", function (e, t) {
        this.req = e, this.message = t;
        try {
            this.number = e.status
        } catch (i) {}
        if (this.req) switch (this.req.responseText) {
        case "Item cannot be scheduled for the past.":
            this.humanReadableMessage = TD.i("You can't schedule a Tweet for the past.");
            break;
        case "Item too far in the future.":
            this.humanReadableMessage = TD.i("You can't schedule a Tweet for more than a year ahead.");
            break;
        case "You have too many updates scheduled.":
            this.humanReadableMessage = TD.i("You can only save 150 scheduled Tweets at once. Please delete one or try later.")
        }
    });
    var n = function () {
        try {
            throw Error("DEBUG_DEFERRED stack trace")
        } catch (e) {
            return e.stack
        }
    };
    return e.Deferred = function (t) {
        this.chain = [], this.id = _.uniqueId("d:"), e.DEBUG_DEFERREDS && (this.create_stack = n()), this.fired = -1, this.paused = 0, this.results = [null, null], this.canceller = t, this.silentlyCancelled = !1, this.chained = !1
    }, e.Deferred.prototype = {
        toString: function () {
            var e;
            return e = -1 == this.fired ? "unfired" : 0 === this.fired ? "success" : "error", "Deferred(" + this.id + ", " + e + "[" + this.chain.length + "])"
        },
        cancel: function () {
            -1 == this.fired ? (this.canceller ? this.canceller(this) : this.silentlyCancelled = !0, -1 == this.fired && this.errback(new e.CancelledError(this))) : 0 === this.fired && this.results[0] instanceof e.Deferred && this.results[0].cancel()
        },
        _resback: function (t) {
            e.DEBUG_DEFERREDS && (this.invoke_stack = n()), this.fired = t instanceof Error ? 1 : 0, this.results[this.fired] = t, this._fire()
        },
        _check: function () {
            if (-1 != this.fired) {
                if (!this.silentlyCancelled) throw new e.AlreadyCalledError(this);
                return this.silentlyCancelled = !1, void 0
            }
        },
        callback: function (t) {
            if (this._check(), t instanceof e.Deferred) throw Error("Deferred instances can only be chained if they are the result of a callback");
            this._resback(t)
        },
        errback: function (t) {
            if (this._check(), t instanceof e.Deferred) throw Error("Deferred instances can only be chained if they are the result of a callback");
            t instanceof Error || (t = new e.GenericError(t)), this._resback(t)
        },
        addBoth: function (e) {
            var i = t.call(arguments, 1);
            return this.addCallbacks(e, e, i, i, null, null)
        },
        addBothWith: function (e, i) {
            var s = t.call(arguments, 2);
            return this.addCallbacks(i, i, s, s, e, e)
        },
        addCallback: function (e) {
            var i = t.call(arguments, 1);
            return this.addCallbacks(e, null, i, null, null, null)
        },
        addCallbackWith: function (e, i) {
            var s = t.call(arguments, 2);
            return this.addCallbacks(i, null, s, null, e, null)
        },
        addErrback: function (e) {
            var i = t.call(arguments, 1);
            return this.addCallbacks(null, e, null, i, null, null)
        },
        addErrbackWith: function (e, i) {
            var s = t.call(arguments, 2);
            return this.addCallbacks(null, i, null, s, null, e)
        },
        addCallbacks: function (e, t, i, s, n, r) {
            if (this.chained) throw Error("Chained Deferreds can not be re-used");
            return this.chain.push([e, t, i, s, n, r]), this.fired >= 0 && this._fire(), this
        },
        _fire: function () {
            for (var t, i, s = this.chain, n = this.fired, r = this.results[n], o = this, a = null, c = function (e) {
                    o._resback(e), o.paused--, 0 === o.paused && o.fired >= 0 && o._fire()
                }; s.length > 0 && 0 === this.paused;) {
                var l = s.shift(),
                    u = l[n];
                if (null !== u) try {
                    t = l[2 + n] ? [r].concat(l[2 + n]) : [r], i = l[4 + n], r = u.apply(i, t), n = r instanceof Error ? 1 : 0, r instanceof e.Deferred && (a = c, this.paused++)
                } catch (d) {
                    n = 1, r = d instanceof Error ? d : new e.GenericError(d), r.stackTrace = r.stack && r.stack.split ? r.stack.split("\n") : []
                }
            }
            this.fired = n, this.results[n] = r, a && this.paused && (r.addBoth(a), r.chained = !0)
        }
    }, e.DeferredList = function (t, i, s) {
        e.Deferred.apply(this, [s]), this.list = t;
        var n = [];
        this.resultList = n, this.finishedCount = 0, this.fireOnOneCallback = Boolean(i && i.fireOnOneCallback), this.fireOnOneErrback = Boolean(i && i.fireOnOneErrback), this.consumeErrors = Boolean(i && i.consumeErrors);
        for (var r = _.bind(this._cbDeferred, this), o = 0; t.length > o; o++) {
            var a = t[o];
            n.push(void 0), a.addCallback(r, o, !0), a.addErrback(r, o, !1)
        }
        0 !== t.length || this.fireOnOneCallback || this.callback(this.resultList)
    }, e.DeferredList.prototype = new e.Deferred, e.DeferredList.prototype._cbDeferred = function (e, t, i) {
        return this.resultList[t] = [i, e], this.finishedCount += 1, -1 == this.fired && (i && this.fireOnOneCallback ? this.callback([t, e]) : !i && this.fireOnOneErrback ? this.errback(e) : this.finishedCount == this.list.length && this.callback(this.resultList)), !i && this.consumeErrors && (e = null), e
    }, e.gatherResults = function (t) {
        var i = new e.DeferredList(t, {
            fireOnOneErrback: !0
        });
        return i.addCallback(function (e) {
            for (var t = [], i = 0; e.length > i; i++) t.push(e[i][1]);
            return t
        }), i
    }, e.succeed = function (t) {
        var i = new e.Deferred;
        return i.callback.apply(i, [t]), i
    }, e.fail = function (t) {
        var i = new e.Deferred;
        return i.errback.apply(i, [t]), i
    }, e.maybeDeferred = function (i) {
        var s;
        try {
            var n = i.apply(null, t.call(arguments, 1));
            s = n instanceof e.Deferred ? n : n instanceof Error ? e.fail(n) : e.succeed(n)
        } catch (r) {
            s = e.fail(r)
        }
        return s
    }, e
}(), TD.util.i18n = function () {
    var e, t = {};
    return t.getMessage = function (e) {
        if ("undefined" == typeof TD_locale_messages) return void 0;
        var t = TD_locale_messages[e];
        return t && t.message ? t.message : void 0
    }, t.getLocale = function () {
        return e ? e : (TD.util.isChromeApp() && (e = t.getMessage("@@ui_locale")), e)
    }, t
}(), TD.constants = {
    keyCodes: {
        enter: 13,
        escape: 27,
        tab: 9,
        del: 8,
        spacebar: 32,
        upArrow: 38,
        downArrow: 40,
        leftArrow: 37,
        rightArrow: 39
    },
    charCodes: {
        space: 32,
        questionMark: 63
    },
    regexps: {
        name: /\S+/,
        username: /^[@＠]?([a-zA-Z0-9_]{1,15})$/,
        usernameWithAt: /^[@＠]{1}([a-zA-Z0-9_]{1,15}) /,
        usernameWithSpace: /^[@＠]{1}(\w{1,15})\s*$/,
        email: /^[\w-]+([^@,\s\<\>\(\)]*[\w-]+)?\@[\w-]+(\.[\w-]+)*\.[a-z]{2,}$/i,
        tokenSeparator: /[\s-_]+/
    },
    time: {
        oneDay: 864e5,
        oneHour: 36e5
    },
    TDApi: {
        ERROR_ACCOUNT_DOESNT_EXIST: "Account does not exist.",
        ERROR_BAD_PASSWORD: "BadPassword",
        ERROR_SESSION_EXPIRED: "SessionExpired",
        ERROR_RATE_LIMIT_EXCEEDED: "RateLimitExceeded"
    }
}, TD.languages = {
    _index: null,
    _initialiseIndex: function () {
        var e = TD.languages.getAllLanguages();
        TD.languages._index = {}, e.forEach(function (e) {
            TD.languages._index[e.code] = e, e.actual_code && (TD.languages._index[e.actual_code] = e)
        })
    },
    getLanguageFromISOCode: function (e) {
        TD.languages._index || TD.languages._initialiseIndex();
        var t = TD.languages._index[e];
        return _.clone(t)
    },
    getSystemLanguageCode: function (e) {
        var t = navigator.language || navigator.userLanguage || "";
        return e && (t = t.replace(/-[a-z]+$/i, "")), t
    },
    isSupportedTranslationSourceLanguage: function (e) {
        var t = TD.languages.getSupportedTranslationSourceLanguages();
        return -1 !== t.indexOf(e.toLowerCase())
    },
    isSystemLangSupportedDestinationLanguage: function () {
        var e = TD.languages.getSupportedTranslationDestinationLanguages();
        return -1 !== e.indexOf(TD.languages.getSystemLanguageCode(!0).toLowerCase()) || -1 !== e.indexOf(TD.languages.getSystemLanguageCode(!1).toLowerCase())
    },
    getSupportedDestinationSystemLanguage: function () {
        var e = TD.languages.getSupportedTranslationDestinationLanguages();
        return -1 !== e.indexOf(TD.languages.getSystemLanguageCode(!0).toLowerCase()) ? TD.languages.getSystemLanguageCode(!0) : TD.languages.getSystemLanguageCode(!1)
    },
    getAllLanguages: function () {
        return [{
            code: "am",
            localized_name: TD.i("Amharic"),
            name: "አማርኛ"
        }, {
            code: "ar",
            localized_name: TD.i("Arabic"),
            name: "العربية"
        }, {
            code: "bg",
            localized_name: TD.i("Bulgarian"),
            name: "Български"
        }, {
            code: "bn",
            localized_name: TD.i("Bengali"),
            name: "বাংলা"
        }, {
            code: "bo",
            localized_name: TD.i("Tibetan"),
            name: "བོད་སྐད"
        }, {
            code: "ca",
            localized_name: TD.i("Catalan"),
            name: "Català"
        }, {
            code: "chr",
            localized_name: TD.i("Cherokee"),
            name: "ᏣᎳᎩ"
        }, {
            code: "cs",
            localized_name: TD.i("Czech"),
            name: "čeština"
        }, {
            code: "da",
            localized_name: TD.i("Danish"),
            name: "Dansk"
        }, {
            code: "de",
            localized_name: TD.i("German"),
            name: "Deutsch"
        }, {
            code: "dv",
            localized_name: TD.i("Maldivian"),
            name: "ދިވެހި"
        }, {
            code: "el",
            localized_name: TD.i("Greek"),
            name: "Ελληνικά"
        }, {
            code: "en",
            localized_name: TD.i("English"),
            name: "English"
        }, {
            code: "es",
            localized_name: TD.i("Spanish"),
            name: "Español"
        }, {
            code: "et",
            localized_name: TD.i("Estonian"),
            name: "eesti"
        }, {
            code: "fa",
            localized_name: TD.i("Persian"),
            name: "فارسی"
        }, {
            code: "fi",
            localized_name: TD.i("Finnish"),
            name: "Suomi"
        }, {
            code: "fr",
            localized_name: TD.i("French"),
            name: "Français"
        }, {
            code: "gu",
            localized_name: TD.i("Gujarati"),
            name: "ગુજરાતી"
        }, {
            code: "iw",
            actual_code: "he",
            localized_name: TD.i("Hebrew"),
            name: "עברית"
        }, {
            code: "hi",
            localized_name: TD.i("Hindi"),
            name: "हिंदी"
        }, {
            code: "ht",
            localized_name: TD.i("Haitian Creole"),
            name: "Kreyòl ayisyen"
        }, {
            code: "hu",
            localized_name: TD.i("Hungarian"),
            name: "Magyar"
        }, {
            code: "hy",
            localized_name: TD.i("Armenian"),
            name: "Հայերեն"
        }, {
            code: "in",
            actual_code: "id",
            localized_name: TD.i("Indonesian"),
            name: "Bahasa Indonesia"
        }, {
            code: "is",
            localized_name: TD.i("Icelandic"),
            name: "Íslenska"
        }, {
            code: "it",
            localized_name: TD.i("Italian"),
            name: "Italiano"
        }, {
            code: "iu",
            localized_name: TD.i("Inuktitut"),
            name: "ᐃᓄᒃᑎᑐᑦ"
        }, {
            code: "ja",
            localized_name: TD.i("Japanese"),
            name: "日本語"
        }, {
            code: "ka",
            localized_name: TD.i("Georgian"),
            name: "ქართული"
        }, {
            code: "km",
            localized_name: TD.i("Khmer"),
            name: "ខ្មែរ"
        }, {
            code: "kn",
            localized_name: TD.i("Kannada"),
            name: "ಕನ್ನಡ"
        }, {
            code: "ko",
            localized_name: TD.i("Korean"),
            name: "한국어"
        }, {
            code: "lo",
            localized_name: TD.i("Lao"),
            name: "ລາວ"
        }, {
            code: "lt",
            localized_name: TD.i("Lithuanian"),
            name: "Lietuvių"
        }, {
            code: "lv",
            localized_name: TD.i("Latvian"),
            name: "latviešu valoda"
        }, {
            code: "ml",
            localized_name: TD.i("Malayalam"),
            name: "മലയാളം"
        }, {
            code: "my",
            localized_name: TD.i("Myanmar"),
            name: "မြန်မာဘာသာ"
        }, {
            code: "ne",
            localized_name: TD.i("Nepali"),
            name: "नेपाली"
        }, {
            code: "nl",
            localized_name: TD.i("Dutch"),
            name: "Nederlands"
        }, {
            code: "no",
            localized_name: TD.i("Norwegian"),
            name: "Norsk"
        }, {
            code: "or",
            localized_name: TD.i("Oriya"),
            name: "ଓଡ଼ିଆ"
        }, {
            code: "pa",
            localized_name: TD.i("Panjabi"),
            name: "ਪੰਜਾਬੀ"
        }, {
            code: "pl",
            localized_name: TD.i("Polish"),
            name: "Polski"
        }, {
            code: "pt",
            localized_name: TD.i("Portuguese"),
            name: "Português"
        }, {
            code: "ro",
            localized_name: TD.i("Romanian"),
            name: "limba română"
        }, {
            code: "ru",
            localized_name: TD.i("Russian"),
            name: "Русский"
        }, {
            code: "si",
            localized_name: TD.i("Sinhala"),
            name: "සිංහල"
        }, {
            code: "sk",
            localized_name: TD.i("Slovak"),
            name: "slovenčina"
        }, {
            code: "sl",
            localized_name: TD.i("Slovene"),
            name: "slovenski jezik"
        }, {
            code: "sv",
            localized_name: TD.i("Swedish"),
            name: "Svenska"
        }, {
            code: "ta",
            localized_name: TD.i("Tamil"),
            name: "தமிழ்"
        }, {
            code: "te",
            localized_name: TD.i("Telugu"),
            name: "తెలుగు"
        }, {
            code: "th",
            localized_name: TD.i("Thai"),
            name: "ไทย"
        }, {
            code: "tl",
            localized_name: TD.i("Tagalog"),
            name: "Tagalog"
        }, {
            code: "tr",
            localized_name: TD.i("Turkish"),
            name: "Türkçe"
        }, {
            code: "uk",
            localized_name: TD.i("Ukrainian"),
            name: "українська мова"
        }, {
            code: "ur",
            localized_name: TD.i("Urdu"),
            name: "ﺍﺭﺩﻭ"
        }, {
            code: "vi",
            localized_name: TD.i("Vietnamese"),
            name: "Tiếng Việt"
        }, {
            code: "zh",
            localized_name: TD.i("Chinese"),
            name: "中文"
        }]
    },
    getSupportedTranslationSourceLanguages: function () {
        return ["bg", "ca", "zh", "cs", "da", "nl", "en", "et", "fi", "fr", "de", "el", "ht", "hi", "hu", "id", "in", "it", "ja", "ko", "lv", "lt", "no", "pl", "pt", "ro", "ru", "sk", "sl", "es", "sv", "th", "tr", "uk", "vi", "ar", "fa", "he"]
    },
    getSupportedTranslationDestinationLanguages: function () {
        return ["bg", "ca", "zh-cn", "zh-tw", "cs", "da", "nl", "en", "et", "fi", "fr", "de", "el", "ht", "hi", "hu", "id", "in", "it", "ja", "ko", "lv", "lt", "no", "pl", "pt", "ro", "ru", "sk", "sl", "es", "sv", "th", "tr", "uk", "vi", "ar", "fa", "he"]
    }
}, TD.services.bitly = function () {
    var e = {}, t = "tweetdeckapi",
        i = "R_b8032856b71a14fabfe64f6845689ddf",
        s = function (e, s) {
            var n, r = "https://api-ssl.bitly.com/v3/" + e;
            s.login = t, s.apiKey = i, s.format = "json";
            var o = TD.storage.accountController.getAccountsForService("bitly");
            if (o.length > 0) {
                var a = o[0];
                s.x_login = a.getUserID(), s.x_apiKey = a.getOAuthToken()
            }
            return n = TD.net.ajax.jsonp(r, s)
        };
    return e.shorten = function (e) {
        var t, i = e;
        return _.startsWith(e, "http://") || _.startsWith(e, "https://") || (i = "http://" + e), t = s("shorten", {
            longUrl: i
        }), t.addCallback(function (t) {
            var i = t.data;
            if (!i || !i.data || !i.data.url) throw "Bit.ly shortening failed";
            return i.data && (i.data.long_url = e), i.data
        }), t
    }, e.shortenTextLinks = function (e) {
        var t = twttr.txt.extractUrls(e),
            i = t.map(function (e) {
                return TD.services.bitly.shorten(e)
            }),
            s = new TD.core.defer.DeferredList(i);
        return s.addCallback(function (t) {
            return t.forEach(function (t) {
                var i = t[0],
                    s = t[1];
                i && (e = e.replace(s.long_url, s.url))
            }), e
        }), s
    }, e
}(), ! function (e, t) {
    "function" == typeof define ? define(t) : "undefined" != typeof module ? module.exports = t() : this[e] = t()
}("klass", function () {
    function e(e) {
        return n.call(t(e) ? e : function () {}, e, 1)
    }

    function t(e) {
        return typeof e === a
    }

    function i(e, t, i) {
        return function () {
            var s = this.supr;
            this.supr = i[l][e];
            var n = t.apply(this, arguments);
            return this.supr = s, n
        }
    }

    function s(e, s, n) {
        for (var r in s) s.hasOwnProperty(r) && (e[r] = t(s[r]) && t(n[l][r]) && c.test(s[r]) ? i(r, s[r], n) : s[r])
    }

    function n(e, i) {
        function n() {}

        function r() {
            this.initialize ? this.initialize.apply(this, arguments) : (i || c && o.apply(this, arguments), u.apply(this, arguments))
        }
        n[l] = this[l];
        var o = this,
            a = new n,
            c = t(e),
            u = c ? e : this,
            d = c ? {} : e;
        return r.methods = function (e) {
            return s(a, e, o), r[l] = a, this
        }, r.methods.call(r, d).prototype.constructor = r, r.extend = arguments.callee, r[l].implement = r.statics = function (e, t) {
            return e = "string" == typeof e ? function () {
                var i = {};
                return i[e] = t, i
            }() : e, s(this, e, o), this
        }, r.mixin = function () {
            for (var e = 0; arguments.length > e; e++) {
                var t = arguments[e];
                void 0 === t ? console.warn("you have an undefined mixin coming from " + ns) : t.call(this, this)
            }
            return this
        }, r
    }
    var r = this,
        o = r.klass,
        a = "function",
        c = /xyz/.test(function () {}) ? /\bsupr\b/ : /.*/,
        l = "prototype";
    return e.noConflict = function () {
        return r.klass = o, this
    }, r.klass = e, e
}), klass.mixin = function (e, t) {
    if (_.isString(e)) {
        for (var i = window, s = e.split("."), n = 0, r = s.length; r > n; ++n) i = i[s[n]] = i[s[n]] || (_.isUndefined(s[n + 1]) ? t : {});
        return i
    }
    _.extend(e, t)
}, klass.mixin("TD.mixins.caretHelper", function () {
    return this.statics({
        spaceBoundary: /\s|$/,
        wordEnd: /\S+$/
    }).methods({
        init: function () {
            this.$input.bind("blur", _.bind(function () {
                setTimeout(_.bind(function () {
                    this.hide()
                }, this), 1e3)
            }, this)).bind("mouseup", _.bind(function () {
                setTimeout(_.bind(function () {
                    this.getCaret()
                }, this), 0)
            }, this)).bind("focus", _.bind(function () {
                this.getCaret()
            }, this))
        },
        getCurrentText: function () {
            return this.$input.val()
        },
        setCaretPosition: function (e) {
            var t = this.$input[0];
            if (t.setSelectionRange) t.focus(), t.setSelectionRange(e, e);
            else if (t.createTextRange) {
                var i = t.createTextRange();
                i.collapse(!0), i.moveEnd("character", e), i.moveStart("character", e), i.select()
            }
            this.lastCaret = e
        },
        getCaret: function () {
            var e = this.$input[0],
                t = 0;
            if (document.selection) {
                try {
                    e.focus()
                } catch (i) {}
                var s = document.selection.createRange();
                if (null == s) return this.lastCaret = 0, 0;
                var n = e.createTextRange(),
                    r = n.duplicate();
                n.moveToBookmark(s.getBookmark()), r.setEndPoint("EndToStart", n), t = r.text.length
            } else(e.selectionStart || "0" == e.selectionStart) && (t = e.selectionStart);
            return this.lastCaret = t, t
        },
        insertOrReplaceSelection: function (e, t) {
            var i = this.$input[0],
                s = this.getCaret(),
                n = s + e.length;
            if (document.selection) {
                i.focus();
                var r = document.selection.createRange();
                if (r.text = e, t) {
                    var o = i.createTextRange();
                    o.collapse(!0), o.moveEnd("character", n), o.moveStart("character", s), o.select()
                } else this.setCaretPosition(n)
            } else if (i.selectionStart || "0" == i.selectionStart) {
                var a = i.selectionStart,
                    c = i.selectionEnd,
                    l = i.scrollTop;
                i.value = i.value.substring(0, a) + e + i.value.substring(c, i.value.length), i.focus(), i.selectionStart = t ? s : n, i.selectionEnd = n, i.scrollTop = l
            } else i.value += e, this.setCaretPosition(n), i.focus();
            this.lastCaret = n, this.$input.change()
        },
        getCurrentWord: function (e) {
            var t = this.getCurrentText(),
                i = t.slice(0, e),
                s = t.slice(e, t.length),
                n = t.charAt(e - 1);
            if (!n || " " === n) return "";
            this.leftBoundary = i.search(this.constructor.wordEnd);
            var r = i.slice(this.leftBoundary, i.length),
                o = s.slice(0, s.search(this.constructor.spaceBoundary)),
                a = r.concat(o);
            return this.rightBoundary = this.leftBoundary + a.length, a
        },
        replaceCurrentWord: function (e) {
            var t = this.getCurrentText().split("");
            this.oldValueArray = t;
            var i = t.slice(0, this.leftBoundary),
                s = t.slice(this.rightBoundary, t.length);
            (1 > s.length || !s[0].match(/\s/)) && (e += " ");
            var n = (i.join("") + e).length + 1;
            return {
                value: i.join("") + e + s.join(""),
                cursor: n
            }
        }
    }), this
}),
function () {
    function e(e, t) {
        return t = t || "", "string" != typeof e && (e.global && 0 > t.indexOf("g") && (t += "g"), e.ignoreCase && 0 > t.indexOf("i") && (t += "i"), e.multiline && 0 > t.indexOf("m") && (t += "m"), e = e.source), RegExp(e.replace(/#\{(\w+)\}/g, function (e, t) {
            var i = r.txt.regexen[t] || "";
            return "string" != typeof i && (i = i.source), i
        }), t)
    }

    function t(e, t) {
        return e.replace(/#\{(\w+)\}/g, function (e, i) {
            return t[i] || ""
        })
    }

    function i(e, t, i) {
        var s = String.fromCharCode(t);
        return i !== t && (s += "-" + String.fromCharCode(i)), e.push(s), e
    }

    function s(e) {
        var t = {};
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        return t
    }

    function n(e, t, i) {
        return i ? !e || e.match(t) && RegExp["$&"] === e : "string" == typeof e && e.match(t) && RegExp["$&"] === e
    }
    if (r === void 0 || null === r) var r = {};
    r.txt = {}, r.txt.regexen = {};
    var o = {
        "&": "&amp;",
        ">": "&gt;",
        "<": "&lt;",
        '"': "&quot;",
        "'": "&#39;"
    };
    r.txt.htmlEscape = function (e) {
        return e && e.replace(/[&"'><]/g, function (e) {
            return o[e]
        })
    }, r.txt.regexSupplant = e, r.txt.stringSupplant = t, r.txt.addCharsToCharClass = i;
    var a = String.fromCharCode,
        c = [a(32), a(133), a(160), a(5760), a(6158), a(8232), a(8233), a(8239), a(8287), a(12288)];
    i(c, 9, 13), i(c, 8192, 8202);
    var l = [a(65534), a(65279), a(65535)];
    i(l, 8234, 8238), r.txt.regexen.spaces_group = e(c.join("")), r.txt.regexen.spaces = e("[" + c.join("") + "]"), r.txt.regexen.invalid_chars_group = e(l.join("")), r.txt.regexen.punct = /\!'#%&'\(\)*\+,\\\-\.\/:;<=>\?@\[\]\^_{|}~\$/, r.txt.regexen.rtl_chars = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm, r.txt.regexen.non_bmp_code_pairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/gm;
    var u = [];
    i(u, 1024, 1279), i(u, 1280, 1319), i(u, 11744, 11775), i(u, 42560, 42655), i(u, 1425, 1471), i(u, 1473, 1474), i(u, 1476, 1477), i(u, 1479, 1479), i(u, 1488, 1514), i(u, 1520, 1524), i(u, 64274, 64296), i(u, 64298, 64310), i(u, 64312, 64316), i(u, 64318, 64318), i(u, 64320, 64321), i(u, 64323, 64324), i(u, 64326, 64335), i(u, 1552, 1562), i(u, 1568, 1631), i(u, 1646, 1747), i(u, 1749, 1756), i(u, 1758, 1768), i(u, 1770, 1775), i(u, 1786, 1788), i(u, 1791, 1791), i(u, 1872, 1919), i(u, 2208, 2208), i(u, 2210, 2220), i(u, 2276, 2302), i(u, 64336, 64433), i(u, 64467, 64829), i(u, 64848, 64911), i(u, 64914, 64967), i(u, 65008, 65019), i(u, 65136, 65140), i(u, 65142, 65276), i(u, 8204, 8204), i(u, 3585, 3642), i(u, 3648, 3662), i(u, 4352, 4607), i(u, 12592, 12677), i(u, 43360, 43391), i(u, 44032, 55215), i(u, 55216, 55295), i(u, 65441, 65500), i(u, 12449, 12538), i(u, 12540, 12542), i(u, 65382, 65439), i(u, 65392, 65392), i(u, 65296, 65305), i(u, 65313, 65338), i(u, 65345, 65370), i(u, 12353, 12438), i(u, 12441, 12446), i(u, 13312, 19903), i(u, 19968, 40959), i(u, 173824, 177983), i(u, 177984, 178207), i(u, 194560, 195103), i(u, 12291, 12291), i(u, 12293, 12293), i(u, 12347, 12347), r.txt.regexen.nonLatinHashtagChars = e(u.join(""));
    var d = [];
    i(d, 192, 214), i(d, 216, 246), i(d, 248, 255), i(d, 256, 591), i(d, 595, 596), i(d, 598, 599), i(d, 601, 601), i(d, 603, 603), i(d, 611, 611), i(d, 616, 616), i(d, 623, 623), i(d, 626, 626), i(d, 649, 649), i(d, 651, 651), i(d, 699, 699), i(d, 768, 879), i(d, 7680, 7935), r.txt.regexen.latinAccentChars = e(d.join("")), r.txt.regexen.hashSigns = /[#＃]/, r.txt.regexen.hashtagAlpha = e(/[a-z_#{latinAccentChars}#{nonLatinHashtagChars}]/i), r.txt.regexen.hashtagAlphaNumeric = e(/[a-z0-9_#{latinAccentChars}#{nonLatinHashtagChars}]/i), r.txt.regexen.endHashtagMatch = e(/^(?:#{hashSigns}|:\/\/)/), r.txt.regexen.hashtagBoundary = e(/(?:^|$|[^&a-z0-9_#{latinAccentChars}#{nonLatinHashtagChars}])/), r.txt.regexen.validHashtag = e(/(#{hashtagBoundary})(#{hashSigns})(#{hashtagAlphaNumeric}*#{hashtagAlpha}#{hashtagAlphaNumeric}*)/gi), r.txt.regexen.validMentionPrecedingChars = /(?:^|[^a-zA-Z0-9_!#$%&*@＠]|RT:?)/, r.txt.regexen.atSigns = /[@＠]/, r.txt.regexen.validMentionOrList = e("(#{validMentionPrecedingChars})(#{atSigns})([a-zA-Z0-9_]{1,20})(/[a-zA-Z][a-zA-Z0-9_-]{0,24})?", "g"), r.txt.regexen.validReply = e(/^(?:#{spaces})*#{atSigns}([a-zA-Z0-9_]{1,20})/), r.txt.regexen.endMentionMatch = e(/^(?:#{atSigns}|[#{latinAccentChars}]|:\/\/)/), r.txt.regexen.validUrlPrecedingChars = e(/(?:[^A-Za-z0-9@＠$#＃#{invalid_chars_group}]|^)/), r.txt.regexen.invalidUrlWithoutProtocolPrecedingChars = /[-_.\/]$/, r.txt.regexen.invalidDomainChars = t("#{punct}#{spaces_group}#{invalid_chars_group}", r.txt.regexen), r.txt.regexen.validDomainChars = e(/[^#{invalidDomainChars}]/), r.txt.regexen.validSubdomain = e(/(?:(?:#{validDomainChars}(?:[_-]|#{validDomainChars})*)?#{validDomainChars}\.)/), r.txt.regexen.validDomainName = e(/(?:(?:#{validDomainChars}(?:-|#{validDomainChars})*)?#{validDomainChars}\.)/), r.txt.regexen.validGTLD = e(/(?:(?:aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|xxx)(?=[^0-9a-zA-Z]|$))/), r.txt.regexen.validCCTLD = e(/(?:(?:ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|sx)(?=[^0-9a-zA-Z]|$))/), r.txt.regexen.validPunycode = e(/(?:xn--[0-9a-z]+)/), r.txt.regexen.validDomain = e(/(?:#{validSubdomain}*#{validDomainName}(?:#{validGTLD}|#{validCCTLD}|#{validPunycode}))/), r.txt.regexen.validAsciiDomain = e(/(?:(?:[\-a-z0-9#{latinAccentChars}]+)\.)+(?:#{validGTLD}|#{validCCTLD}|#{validPunycode})/gi), r.txt.regexen.invalidShortDomain = e(/^#{validDomainName}#{validCCTLD}$/), r.txt.regexen.validPortNumber = e(/[0-9]+/), r.txt.regexen.validGeneralUrlPathChars = e(/[a-z0-9!\*';:=\+,\.\$\/%#\[\]\-_~@|&#{latinAccentChars}]/i), r.txt.regexen.validUrlBalancedParens = e(/\(#{validGeneralUrlPathChars}+\)/i), r.txt.regexen.validUrlPathEndingChars = e(/[\+\-a-z0-9=_#\/#{latinAccentChars}]|(?:#{validUrlBalancedParens})/i), r.txt.regexen.validUrlPath = e("(?:(?:#{validGeneralUrlPathChars}*(?:#{validUrlBalancedParens}#{validGeneralUrlPathChars}*)*#{validUrlPathEndingChars})|(?:@#{validGeneralUrlPathChars}+/))", "i"), r.txt.regexen.validUrlQueryChars = /[a-z0-9!?\*'@\(\);:&=\+\$\/%#\[\]\-_\.,~|]/i, r.txt.regexen.validUrlQueryEndingChars = /[a-z0-9_&=#\/]/i, r.txt.regexen.extractUrl = e("((#{validUrlPrecedingChars})((https?:\\/\\/)?(#{validDomain})(?::(#{validPortNumber}))?(\\/#{validUrlPath}*)?(\\?#{validUrlQueryChars}*#{validUrlQueryEndingChars})?))", "gi"), r.txt.regexen.validTcoUrl = /^https?:\/\/t\.co\/[a-z0-9]+/i, r.txt.regexen.urlHasProtocol = /^https?:\/\//i, r.txt.regexen.urlHasHttps = /^https:\/\//i, r.txt.regexen.cashtag = /[a-z]{1,6}(?:[._][a-z]{1,2})?/i, r.txt.regexen.validCashtag = e("(^|#{spaces})(\\$)(#{cashtag})(?=$|\\s|[#{punct}])", "gi"), r.txt.regexen.validateUrlUnreserved = /[a-z0-9\-._~]/i, r.txt.regexen.validateUrlPctEncoded = /(?:%[0-9a-f]{2})/i, r.txt.regexen.validateUrlSubDelims = /[!$&'()*+,;=]/i, r.txt.regexen.validateUrlPchar = e("(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|[:|@])", "i"), r.txt.regexen.validateUrlScheme = /(?:[a-z][a-z0-9+\-.]*)/i, r.txt.regexen.validateUrlUserinfo = e("(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|:)*", "i"), r.txt.regexen.validateUrlDecOctet = /(?:[0-9]|(?:[1-9][0-9])|(?:1[0-9]{2})|(?:2[0-4][0-9])|(?:25[0-5]))/i, r.txt.regexen.validateUrlIpv4 = e(/(?:#{validateUrlDecOctet}(?:\.#{validateUrlDecOctet}){3})/i), r.txt.regexen.validateUrlIpv6 = /(?:\[[a-f0-9:\.]+\])/i, r.txt.regexen.validateUrlIp = e("(?:#{validateUrlIpv4}|#{validateUrlIpv6})", "i"), r.txt.regexen.validateUrlSubDomainSegment = /(?:[a-z0-9](?:[a-z0-9_\-]*[a-z0-9])?)/i, r.txt.regexen.validateUrlDomainSegment = /(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?)/i, r.txt.regexen.validateUrlDomainTld = /(?:[a-z](?:[a-z0-9\-]*[a-z0-9])?)/i, r.txt.regexen.validateUrlDomain = e(/(?:(?:#{validateUrlSubDomainSegment]}\.)*(?:#{validateUrlDomainSegment]}\.)#{validateUrlDomainTld})/i), r.txt.regexen.validateUrlHost = e("(?:#{validateUrlIp}|#{validateUrlDomain})", "i"), r.txt.regexen.validateUrlUnicodeSubDomainSegment = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9_\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i, r.txt.regexen.validateUrlUnicodeDomainSegment = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i, r.txt.regexen.validateUrlUnicodeDomainTld = /(?:(?:[a-z]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i, r.txt.regexen.validateUrlUnicodeDomain = e(/(?:(?:#{validateUrlUnicodeSubDomainSegment}\.)*(?:#{validateUrlUnicodeDomainSegment}\.)#{validateUrlUnicodeDomainTld})/i), r.txt.regexen.validateUrlUnicodeHost = e("(?:#{validateUrlIp}|#{validateUrlUnicodeDomain})", "i"), r.txt.regexen.validateUrlPort = /[0-9]{1,5}/, r.txt.regexen.validateUrlUnicodeAuthority = e("(?:(#{validateUrlUserinfo})@)?(#{validateUrlUnicodeHost})(?::(#{validateUrlPort}))?", "i"), r.txt.regexen.validateUrlAuthority = e("(?:(#{validateUrlUserinfo})@)?(#{validateUrlHost})(?::(#{validateUrlPort}))?", "i"), r.txt.regexen.validateUrlPath = e(/(\/#{validateUrlPchar}*)*/i), r.txt.regexen.validateUrlQuery = e(/(#{validateUrlPchar}|\/|\?)*/i), r.txt.regexen.validateUrlFragment = e(/(#{validateUrlPchar}|\/|\?)*/i), r.txt.regexen.validateUrlUnencoded = e("^(?:([^:/?#]+):\\/\\/)?([^/?#]*)([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$", "i");
    var h = "tweet-url list-slug",
        p = "tweet-url username",
        m = "tweet-url hashtag",
        f = "tweet-url cashtag",
        g = {
            urlClass: !0,
            listClass: !0,
            usernameClass: !0,
            hashtagClass: !0,
            cashtagClass: !0,
            usernameUrlBase: !0,
            listUrlBase: !0,
            hashtagUrlBase: !0,
            cashtagUrlBase: !0,
            usernameUrlBlock: !0,
            listUrlBlock: !0,
            hashtagUrlBlock: !0,
            linkUrlBlock: !0,
            usernameIncludeSymbol: !0,
            suppressLists: !0,
            suppressNoFollow: !0,
            targetBlank: !0,
            suppressDataScreenName: !0,
            urlEntities: !0,
            symbolTag: !0,
            textWithSymbolTag: !0,
            urlTarget: !0,
            invisibleTagAttrs: !0,
            linkAttributeBlock: !0,
            linkTextBlock: !0,
            htmlEscapeNonEntities: !0
        }, T = {
            disabled: !0,
            readonly: !0,
            multiple: !0,
            checked: !0
        };
    r.txt.tagAttrs = function (e) {
        var t = "";
        for (var i in e) {
            var s = e[i];
            T[i] && (s = s ? i : null), null != s && (t += " " + r.txt.htmlEscape(i) + '="' + r.txt.htmlEscape("" + s) + '"')
        }
        return t
    }, r.txt.linkToText = function (e, i, s, n) {
        n.suppressNoFollow || (s.rel = "nofollow"), n.linkAttributeBlock && n.linkAttributeBlock(e, s), n.linkTextBlock && (i = n.linkTextBlock(e, i));
        var o = {
            text: i,
            attr: r.txt.tagAttrs(s)
        };
        return t("<a#{attr}>#{text}</a>", o)
    }, r.txt.linkToTextWithSymbol = function (e, t, i, s, n) {
        var o = n.symbolTag ? "<" + n.symbolTag + ">" + t + "</" + n.symbolTag + ">" : t;
        i = r.txt.htmlEscape(i);
        var a = n.textWithSymbolTag ? "<" + n.textWithSymbolTag + ">" + i + "</" + n.textWithSymbolTag + ">" : i;
        return n.usernameIncludeSymbol || !t.match(r.txt.regexen.atSigns) ? r.txt.linkToText(e, o + a, s, n) : o + r.txt.linkToText(e, a, s, n)
    }, r.txt.linkToHashtag = function (e, t, i) {
        var n = t.substring(e.indices[0], e.indices[0] + 1),
            o = r.txt.htmlEscape(e.hashtag),
            a = s(i.htmlAttrs || {});
        return a.href = i.hashtagUrlBase + o, a.title = "#" + o, a["class"] = i.hashtagClass, o[0].match(r.txt.regexen.rtl_chars) && (a["class"] += " rtl"), i.targetBlank && (a.target = "_blank"), r.txt.linkToTextWithSymbol(e, n, o, a, i)
    }, r.txt.linkToCashtag = function (e, t, i) {
        var n = r.txt.htmlEscape(e.cashtag),
            o = s(i.htmlAttrs || {});
        return o.href = i.cashtagUrlBase + n, o.title = "$" + n, o["class"] = i.cashtagClass, i.targetBlank && (o.target = "_blank"), r.txt.linkToTextWithSymbol(e, "$", n, o, i)
    }, r.txt.linkToMentionAndList = function (e, t, i) {
        var n = t.substring(e.indices[0], e.indices[0] + 1),
            o = r.txt.htmlEscape(e.screenName),
            a = r.txt.htmlEscape(e.listSlug),
            c = e.listSlug && !i.suppressLists,
            l = s(i.htmlAttrs || {});
        return l["class"] = c ? i.listClass : i.usernameClass, l.href = c ? i.listUrlBase + o + a : i.usernameUrlBase + o, c || i.suppressDataScreenName || (l["data-screen-name"] = o), i.targetBlank && (l.target = "_blank"), r.txt.linkToTextWithSymbol(e, n, c ? o + a : o, l, i)
    }, r.txt.linkToUrl = function (e, t, i) {
        var n = e.url,
            o = n,
            a = r.txt.htmlEscape(o),
            c = i.urlEntities && i.urlEntities[n] || e;
        c.display_url && (a = r.txt.linkTextWithEntity(c, i));
        var l = s(i.htmlAttrs || {});
        return n.match(r.txt.regexen.urlHasProtocol) || (n = "http://" + n), l.href = n, i.targetBlank && (l.target = "_blank"), i.urlClass && (l["class"] = i.urlClass), i.urlTarget && (l.target = i.urlTarget), !i.title && c.display_url && (l.title = c.expanded_url), r.txt.linkToText(e, a, l, i)
    }, r.txt.linkTextWithEntity = function (e, i) {
        var s = e.display_url,
            n = e.expanded_url,
            o = s.replace(/…/g, "");
        if (-1 != n.indexOf(o)) {
            var a = n.indexOf(o),
                c = {
                    displayUrlSansEllipses: o,
                    beforeDisplayUrl: n.substr(0, a),
                    afterDisplayUrl: n.substr(a + o.length),
                    precedingEllipsis: s.match(/^…/) ? "…" : "",
                    followingEllipsis: s.match(/…$/) ? "…" : ""
                };
            for (var l in c) c.hasOwnProperty(l) && (c[l] = r.txt.htmlEscape(c[l]));
            return c.invisible = i.invisibleTagAttrs, t("<span class='tco-ellipsis'>#{precedingEllipsis}<span #{invisible}>&nbsp;</span></span><span #{invisible}>#{beforeDisplayUrl}</span><span class='js-display-url'>#{displayUrlSansEllipses}</span><span #{invisible}>#{afterDisplayUrl}</span><span class='tco-ellipsis'><span #{invisible}>&nbsp;</span>#{followingEllipsis}</span>", c)
        }
        return s
    }, r.txt.autoLinkEntities = function (e, t, i) {
        i = s(i || {}), i.hashtagClass = i.hashtagClass || m, i.hashtagUrlBase = i.hashtagUrlBase || "https://twitter.com/#!/search?q=%23", i.cashtagClass = i.cashtagClass || f, i.cashtagUrlBase = i.cashtagUrlBase || "https://twitter.com/#!/search?q=%24", i.listClass = i.listClass || h, i.usernameClass = i.usernameClass || p, i.usernameUrlBase = i.usernameUrlBase || "https://twitter.com/", i.listUrlBase = i.listUrlBase || "https://twitter.com/", i.htmlAttrs = r.txt.extractHtmlAttrsFromOptions(i), i.invisibleTagAttrs = i.invisibleTagAttrs || "style='position:absolute;left:-9999px;'";
        var n, o, a;
        if (i.urlEntities) {
            for (n = {}, o = 0, a = i.urlEntities.length; a > o; o++) n[i.urlEntities[o].url] = i.urlEntities[o];
            i.urlEntities = n
        }
        var c = "",
            l = 0;
        t.sort(function (e, t) {
            return e.indices[0] - t.indices[0]
        });
        for (var u = i.htmlEscapeNonEntities ? r.txt.htmlEscape : function (e) {
                return e
            }, o = 0; t.length > o; o++) {
            var d = t[o];
            c += u(e.substring(l, d.indices[0])), d.url ? c += r.txt.linkToUrl(d, e, i) : d.hashtag ? c += r.txt.linkToHashtag(d, e, i) : d.screenName ? c += r.txt.linkToMentionAndList(d, e, i) : d.cashtag && (c += r.txt.linkToCashtag(d, e, i)), l = d.indices[1]
        }
        return c += u(e.substring(l, e.length))
    }, r.txt.autoLinkWithJSON = function (e, t, i) {
        var s = [];
        for (var n in t) s = s.concat(t[n]);
        for (var o = 0; s.length > o; o++) entity = s[o], entity.screen_name ? entity.screenName = entity.screen_name : entity.text && (entity.hashtag = entity.text);
        return r.txt.modifyIndicesFromUnicodeToUTF16(e, s), r.txt.autoLinkEntities(e, s, i)
    }, r.txt.extractHtmlAttrsFromOptions = function (e) {
        var t = {};
        for (var i in e) {
            var s = e[i];
            g[i] || (T[i] && (s = s ? i : null), null != s && (t[i] = s))
        }
        return t
    }, r.txt.autoLink = function (e, t) {
        var i = r.txt.extractEntitiesWithIndices(e, {
            extractUrlsWithoutProtocol: !1
        });
        return r.txt.autoLinkEntities(e, i, t)
    }, r.txt.autoLinkUsernamesOrLists = function (e, t) {
        var i = r.txt.extractMentionsOrListsWithIndices(e);
        return r.txt.autoLinkEntities(e, i, t)
    }, r.txt.autoLinkHashtags = function (e, t) {
        var i = r.txt.extractHashtagsWithIndices(e);
        return r.txt.autoLinkEntities(e, i, t)
    }, r.txt.autoLinkCashtags = function (e, t) {
        var i = r.txt.extractCashtagsWithIndices(e);
        return r.txt.autoLinkEntities(e, i, t)
    }, r.txt.autoLinkUrlsCustom = function (e, t) {
        var i = r.txt.extractUrlsWithIndices(e, {
            extractUrlsWithoutProtocol: !1
        });
        return r.txt.autoLinkEntities(e, i, t)
    }, r.txt.removeOverlappingEntities = function (e) {
        e.sort(function (e, t) {
            return e.indices[0] - t.indices[0]
        });
        for (var t = e[0], i = 1; e.length > i; i++) t.indices[1] > e[i].indices[0] ? (e.splice(i, 1), i--) : t = e[i]
    }, r.txt.extractEntitiesWithIndices = function (e, t) {
        var i = r.txt.extractUrlsWithIndices(e, t).concat(r.txt.extractMentionsOrListsWithIndices(e)).concat(r.txt.extractHashtagsWithIndices(e, {
            checkUrlOverlap: !1
        })).concat(r.txt.extractCashtagsWithIndices(e));
        return 0 == i.length ? [] : (r.txt.removeOverlappingEntities(i), i)
    }, r.txt.extractMentions = function (e) {
        for (var t = [], i = r.txt.extractMentionsWithIndices(e), s = 0; i.length > s; s++) {
            var n = i[s].screenName;
            t.push(n)
        }
        return t
    }, r.txt.extractMentionsWithIndices = function (e) {
        for (var t, i = [], s = r.txt.extractMentionsOrListsWithIndices(e), n = 0; s.length > n; n++) t = s[n], "" == t.listSlug && i.push({
            screenName: t.screenName,
            indices: t.indices
        });
        return i
    }, r.txt.extractMentionsOrListsWithIndices = function (e) {
        if (!e || !e.match(r.txt.regexen.atSigns)) return [];
        var t = [];
        return e.replace(r.txt.regexen.validMentionOrList, function (e, i, s, n, o, a, c) {
            var l = c.slice(a + e.length);
            if (!l.match(r.txt.regexen.endMentionMatch)) {
                o = o || "";
                var u = a + i.length,
                    d = u + n.length + o.length + 1;
                t.push({
                    screenName: n,
                    listSlug: o,
                    indices: [u, d]
                })
            }
        }), t
    }, r.txt.extractReplies = function (e) {
        if (!e) return null;
        var t = e.match(r.txt.regexen.validReply);
        return !t || RegExp.rightContext.match(r.txt.regexen.endMentionMatch) ? null : t[1]
    }, r.txt.extractUrls = function (e, t) {
        for (var i = [], s = r.txt.extractUrlsWithIndices(e, t), n = 0; s.length > n; n++) i.push(s[n].url);
        return i
    }, r.txt.extractUrlsWithIndices = function (e, t) {
        if (t || (t = {
            extractUrlsWithoutProtocol: !0
        }), !e || (t.extractUrlsWithoutProtocol ? !e.match(/\./) : !e.match(/:/))) return [];
        for (var i = []; r.txt.regexen.extractUrl.exec(e);) {
            var s = RegExp.$2,
                n = RegExp.$3,
                o = RegExp.$4,
                a = RegExp.$5,
                c = RegExp.$7,
                l = r.txt.regexen.extractUrl.lastIndex,
                u = l - n.length;
            if (o) n.match(r.txt.regexen.validTcoUrl) && (n = RegExp.lastMatch, l = u + n.length), i.push({
                url: n,
                indices: [u, l]
            });
            else {
                if (!t.extractUrlsWithoutProtocol || s.match(r.txt.regexen.invalidUrlWithoutProtocolPrecedingChars)) continue;
                var d = null,
                    h = !1,
                    p = 0;
                if (a.replace(r.txt.regexen.validAsciiDomain, function (e) {
                    var t = a.indexOf(e, p);
                    p = t + e.length, d = {
                        url: e,
                        indices: [u + t, u + p]
                    }, h = e.match(r.txt.regexen.invalidShortDomain), h || i.push(d)
                }), null == d) continue;
                c && (h && i.push(d), d.url = n.replace(a, d.url), d.indices[1] = l)
            }
        }
        return i
    }, r.txt.extractHashtags = function (e) {
        for (var t = [], i = r.txt.extractHashtagsWithIndices(e), s = 0; i.length > s; s++) t.push(i[s].hashtag);
        return t
    }, r.txt.extractHashtagsWithIndices = function (e, t) {
        if (t || (t = {
            checkUrlOverlap: !0
        }), !e || !e.match(r.txt.regexen.hashSigns)) return [];
        var i = [];
        if (e.replace(r.txt.regexen.validHashtag, function (e, t, s, n, o, a) {
            var c = a.slice(o + e.length);
            if (!c.match(r.txt.regexen.endHashtagMatch)) {
                var l = o + t.length,
                    u = l + n.length + 1;
                i.push({
                    hashtag: n,
                    indices: [l, u]
                })
            }
        }), t.checkUrlOverlap) {
            var s = r.txt.extractUrlsWithIndices(e);
            if (s.length > 0) {
                var n = i.concat(s);
                r.txt.removeOverlappingEntities(n), i = [];
                for (var o = 0; n.length > o; o++) n[o].hashtag && i.push(n[o])
            }
        }
        return i
    }, r.txt.extractCashtags = function (e) {
        for (var t = [], i = r.txt.extractCashtagsWithIndices(e), s = 0; i.length > s; s++) t.push(i[s].cashtag);
        return t
    }, r.txt.extractCashtagsWithIndices = function (e) {
        if (!e || -1 == e.indexOf("$")) return [];
        var t = [];
        return e.replace(r.txt.regexen.validCashtag, function (e, i, s, n, r) {
            var o = r + i.length,
                a = o + n.length + 1;
            t.push({
                cashtag: n,
                indices: [o, a]
            })
        }), t
    }, r.txt.modifyIndicesFromUnicodeToUTF16 = function (e, t) {
        r.txt.convertUnicodeIndices(e, t, !1)
    }, r.txt.modifyIndicesFromUTF16ToUnicode = function (e, t) {
        r.txt.convertUnicodeIndices(e, t, !0)
    }, r.txt.getUnicodeTextLength = function (e) {
        return e.replace(r.txt.regexen.non_bmp_code_pairs, " ").length
    }, r.txt.convertUnicodeIndices = function (e, t, i) {
        if (0 != t.length) {
            var s = 0,
                n = 0;
            t.sort(function (e, t) {
                return e.indices[0] - t.indices[0]
            });
            for (var r = 0, o = t[0]; e.length > s;) {
                if (o.indices[0] == (i ? s : n)) {
                    var a = o.indices[1] - o.indices[0];
                    if (o.indices[0] = i ? n : s, o.indices[1] = o.indices[0] + a, r++, r == t.length) break;
                    o = t[r]
                }
                var c = e.charCodeAt(s);
                c >= 55296 && 56319 >= c && e.length - 1 > s && (c = e.charCodeAt(s + 1), c >= 56320 && 57343 >= c && s++), n++, s++
            }
        }
    }, r.txt.splitTags = function (e) {
        for (var t, i, s = e.split("<"), n = [], r = 0; s.length > r; r += 1)
            if (i = s[r]) {
                t = i.split(">");
                for (var o = 0; t.length > o; o += 1) n.push(t[o])
            } else n.push("");
        return n
    }, r.txt.hitHighlight = function (e, t, i) {
        var s = "em";
        if (t = t || [], i = i || {}, 0 === t.length) return e;
        var n, o, a, c, l, u, d, h = i.tag || s,
            p = ["<" + h + ">", "</" + h + ">"],
            m = r.txt.splitTags(e),
            f = "",
            g = 0,
            T = m[0],
            v = 0,
            y = 0,
            _ = !1,
            D = T,
            b = [];
        for (n = 0; t.length > n; n += 1)
            for (o = 0; t[n].length > o; o += 1) b.push(t[n][o]);
        for (a = 0; b.length > a; a += 1) {
            for (c = b[a], l = p[a % 2], u = !1; null != T && c >= v + T.length;) f += D.slice(y), _ && c === v + D.length && (f += l, u = !0), m[g + 1] && (f += "<" + m[g + 1] + ">"), v += D.length, y = 0, g += 2, T = m[g], D = T, _ = !1;
            u || null == T ? u || (u = !0, f += l) : (d = c - v, f += D.slice(y, d) + l, y = d, _ = 0 === a % 2 ? !0 : !1)
        }
        if (null != T)
            for (D.length > y && (f += D.slice(y)), a = g + 1; m.length > a; a += 1) f += 0 === a % 2 ? m[a] : "<" + m[a] + ">";
        return f
    };
    var v = 140,
        y = [a(65534), a(65279), a(65535), a(8234), a(8235), a(8236), a(8237), a(8238)];
    r.txt.getTweetLength = function (e, t) {
        t || (t = {
            short_url_length: 22,
            short_url_length_https: 23
        });
        var i = r.txt.getUnicodeTextLength(e),
            s = r.txt.extractUrlsWithIndices(e);
        r.txt.modifyIndicesFromUTF16ToUnicode(e, s);
        for (var n = 0; s.length > n; n++) i += s[n].indices[0] - s[n].indices[1], i += s[n].url.toLowerCase().match(r.txt.regexen.urlHasHttps) ? t.short_url_length_https : t.short_url_length;
        return i
    }, r.txt.isInvalidTweet = function (e) {
        if (!e) return "empty";
        if (r.txt.getTweetLength(e) > v) return "too_long";
        for (var t = 0; y.length > t; t++)
            if (e.indexOf(y[t]) >= 0) return "invalid_characters";
        return !1
    }, r.txt.isValidTweetText = function (e) {
        return !r.txt.isInvalidTweet(e)
    }, r.txt.isValidUsername = function (e) {
        if (!e) return !1;
        var t = r.txt.extractMentions(e);
        return 1 === t.length && t[0] === e.slice(1)
    };
    var _ = e(/^#{validMentionOrList}$/);
    if (r.txt.isValidList = function (e) {
        var t = e.match(_);
        return !(!t || "" != t[1] || !t[4])
    }, r.txt.isValidHashtag = function (e) {
        if (!e) return !1;
        var t = r.txt.extractHashtags(e);
        return 1 === t.length && t[0] === e.slice(1)
    }, r.txt.isValidUrl = function (e, t, i) {
        if (null == t && (t = !0), null == i && (i = !0), !e) return !1;
        var s = e.match(r.txt.regexen.validateUrlUnencoded);
        if (!s || s[0] !== e) return !1;
        var o = s[1],
            a = s[2],
            c = s[3],
            l = s[4],
            u = s[5];
        return (!i || n(o, r.txt.regexen.validateUrlScheme) && o.match(/^https?$/i)) && n(c, r.txt.regexen.validateUrlPath) && n(l, r.txt.regexen.validateUrlQuery, !0) && n(u, r.txt.regexen.validateUrlFragment, !0) ? t && n(a, r.txt.regexen.validateUrlUnicodeAuthority) || !t && n(a, r.txt.regexen.validateUrlAuthority) : !1
    }, "undefined" != typeof module && module.exports && (module.exports = r.txt), "undefined" != typeof window)
        if (window.twttr)
            for (var D in r) window.twttr[D] = r[D];
        else window.twttr = r
}(), TD.components.Base = klass(function () {
    this.$node = $.createElement("div").addClass("js-component")
}).methods({
    $find: function () {
        return this.$node.find.apply(this.$node, arguments)
    },
    publishEvent: function (e, t) {
        var i = {
            data: t,
            target: this
        };
        TD.storage.notification.notify(e, i)
    },
    bubbleEvent: function (e, t) {
        var i = {
            data: t,
            target: this
        };
        this.$node.trigger(e, [i])
    },
    destroy: function () {
        this.$node.remove()
    },
    show: function () {
        this.$node.show()
    },
    hide: function () {
        this.$node.hide()
    }
}), TD.components.Autocomplete = TD.components.Base.extend(function (e, t) {
    var i = {
        limit: 5,
        dmMode: !1
    };
    this.options = _.extend(i, t), this.$input = e, this.isCompletionsOpen = !1, this.userIsInteracting = !1, this.dropdownId = _.uniqueId("autocomplete"), this.$node = $.createElement("ul").addClass("lst lst-modal typeahead").insertAfter(this.$input), this.$selectedItem = null, this._registerEvents(), this.usernameRegex = i.dmMode ? this.constructor.dmUsername : this.constructor.username, $(document).on("dataTypeaheadSuggestions", this.updateDropdown.bind(this))
}).mixin(TD.mixins.caretHelper).statics({
    username: /^[+\/\.<>()|\\=_]?[@＠]([a-zA-Z0-9_]{1,20})$/,
    dmUsername: /^[@＠]?([a-zA-Z0-9_]{1,20})$/,
    hashtag: /^[#＃]([a-zA-Z0-9_]+)/,
    SELECT: "td-autocomplete-select",
    _htmlEscapeAndStrongifyMatches: function (e, t) {
        return TD.util.escape(e.replace(t, "<strong>$1</strong>")).replace(/&lt;(\/?strong)&gt;/g, "<$1>")
    }
}).methods({
    _registerEvents: function () {
        var e = this,
            t = "keydown";
        this.$input.bind(t, _.bind(this.keypress, this)), this.$input.bind("keyup click", _.bind(this.keyup, this)), this.blurHandler = function () {
            _.delay(function () {
                e.hide()
            }, 500)
        }, this.$input.bind("blur", this.blurHandler), this.$node.delegate("li", "mouseenter", function () {
            e.$node.find("li.s-selected").removeClass("s-selected"), $(this).addClass("s-selected")
        }).delegate("li", "click", _.bind(function (t) {
            e.$selectedItem = $(t.target).closest("li").addClass("s-selected"), e.$selectedItem.siblings(".s-selected").removeClass("s-selected"), this.$input.focus(), this.select()
        }, this))
    },
    _unregisterEvents: function () {
        var e = "keydown";
        this.$input.unbind(e), this.$input.unbind("keyup click keydown"), this.$input.unbind("bind", this.blurHandler)
    },
    keyup: function (e) {
        if (e.keyCode) {
            e.stopPropagation();
            var t = "",
                i = this.getCaret(),
                s = !1;
            if (t = this.getCurrentWord(i), t.match(this.usernameRegex) ? (t = RegExp.$1, this.autocompleteType = "username", s = !0) : t.match(this.constructor.hashtag) && (t = RegExp.$1, this.autocompleteType = "hashtag", s = !0), t.length && s) switch (e.keyCode) {
            case TD.constants.keyCodes.escape:
                this.hide(), e.stopPropagation();
                break;
            case TD.constants.keyCodes.upArrow:
            case TD.constants.keyCodes.downArrow:
                break;
            case TD.constants.keyCodes.tab:
            case TD.constants.keyCodes.enter:
                !e.shiftKey && this.$selectedItem && this.isCompletionsOpen ? this.select() : this.options.dmMode && !this.isCompletionsOpen && this.select();
                break;
            case TD.constants.keyCodes.spacebar:
                this.options.dmMode && this.set(this.$input.val());
                break;
            default:
                "hashtag" == this.autocompleteType ? this.lookUpHashtag(t) : this.lookUpUser(t)
            } else this.hide()
        }
    },
    keypress: function (e) {
        switch (e.keyCode) {
        case TD.constants.keyCodes.spacebar:
            if (!this.options.dmMode) break;
        case TD.constants.keyCodes.tab:
        case TD.constants.keyCodes.enter:
        case TD.constants.keyCodes.escape:
            this.isCompletionsOpen && (e.preventDefault(), e.stopPropagation());
            break;
        case TD.constants.keyCodes.upArrow:
            this.isCompletionsOpen && !e.shiftKey && (this.moveSelection("prev"), e.preventDefault(), e.stopPropagation());
            break;
        case TD.constants.keyCodes.downArrow:
            this.isCompletionsOpen && !e.shiftKey && (this.moveSelection("next"), e.preventDefault(), e.stopPropagation());
            break;
        default:
            this.$selectedItem = null, this.userIsInteracting = !1
        }
    },
    sanitize: function (e) {
        return e.replace(/ /g, "")
    },
    moveSelection: function (e) {
        this.userIsInteracting = !0;
        var t = "next" == e ? "li:first" : "li:last",
            i = this.$selectedItem || this.$node.find("li.s-selected");
        return i.length ? (i = i.removeClass("s-selected"), i = "next" === e ? i.nextAll("li:first") : i.prevAll("li:first"), this.$selectedItem = i.length ? i.addClass("s-selected") : this.$node.find(t).addClass("s-selected"), void 0) : (this.$selectedItem = this.$node.find(t).addClass("s-selected"), void 0)
    },
    select: function () {
        var e, t;
        "username" === this.autocompleteType ? (e = this.$selectedItem.find(".js-screenname").text(), this.options.dmMode || (e = "@" + e), t = this.$selectedItem.find("img").attr("src")) : e = this.$selectedItem.find(".js-hashtag").text(), this.set(e, t)
    },
    set: function (e, t) {
        var i = this.replaceCurrentWord(e);
        this.$input.val(i.value), this.setCaretPosition(i.cursor), this.$input.change(), this.$node.trigger(this.constructor.SELECT, [e, t]), this.hide()
    },
    show: function () {
        this.$node.show(), this.isCompletionsOpen = !0
    },
    hide: function () {
        this.$node.hide(), this.isCompletionsOpen = !1, this.userIsInteracting = !1, this.$node.trigger("dataTypeaheadQueryReset")
    },
    lookUpHashtag: function (e) {
        var e = this.sanitize(e),
            t = {
                datasources: ["topics"],
                query: "#" + e,
                onlyLocalData: !0,
                dropdownId: this.dropdownId
            };
        TD.decider.get("autocomplete_remote_sources") && (t.onlyLocalData = !1), this.$node.trigger("uiNeedsTypeaheadSuggestions", t)
    },
    lookUpUser: function (e) {
        var e = this.sanitize(e),
            t = {
                datasources: ["users"],
                query: e,
                onlyLocalData: !0,
                dropdownId: this.dropdownId
            };
        TD.decider.get("autocomplete_remote_sources") && (t.onlyLocalData = !1), this.$node.trigger("uiNeedsTypeaheadSuggestions", t)
    },
    updateDropdown: function (e, t) {
        if (!this.userIsInteracting && t.dropdownId === this.dropdownId) {
            var i, s, n = RegExp("(" + t.query.split("").join("|") + ")", "gi"),
                r = [];
            "hashtag" === this.autocompleteType && t.suggestions.topics ? (s = t.suggestions.topics.slice(0, this.options.limit), r = s.map(function (e) {
                return {
                    value: this.constructor._htmlEscapeAndStrongifyMatches(e.topic, n)
                }
            }, this), i = TD.ui.template.render("compose/autocomplete_hashtag", {
                results: r
            })) : "username" === this.autocompleteType && t.suggestions.users && (s = t.suggestions.users.slice(0, this.options.limit), r = s.map(function (e) {
                return {
                    id: e.id,
                    screenName: this.constructor._htmlEscapeAndStrongifyMatches(e.screen_name, n),
                    name: this.constructor._htmlEscapeAndStrongifyMatches(e.name, n),
                    pic: TD.util.transformTwitterAvatar(e.profile_image_url_https, "mini")
                }
            }, this), i = TD.ui.template.render("compose/autocomplete_twitter_user", {
                results: r
            })), this.$node.html(i), r.length ? (this.isCompletionsOpen || this.show(), this.moveSelection("next")) : this.isCompletionsOpen && this.hide()
        }
    },
    destroy: function () {
        this._unregisterEvents(), this.$node.remove()
    }
}), TD.components.Retweeters = TD.components.Base.extend(function (e) {
    function t(e) {
        var t, i = {
                stats: []
            };
        if (this.tweetSummary = e, _.isString(e.retweeters_count)) t = e.retweeters_count;
        else {
            var r = e.retweeters_count || 0;
            t = Math.max(r, s.length) + ""
        } if (this.tweetSummary.retweeters_count = t, "0" !== t && i.stats.push({
            count: TD.util.prettyNumber(t),
            label: TD.util.pluralise(TD.i("Retweet"), TD.i("Retweets"), t),
            type: "retweeters"
        }), "0" !== e.favoriters_count && i.stats.push({
            count: TD.util.prettyNumber(e.favoriters_count),
            label: TD.util.pluralise(TD.i("Favorite"), TD.i("Favorites"), e.favoriters_count),
            type: "favoriters"
        }), i.stats.length > 0) {
            var o = TD.ui.template.render("status/tweet_detail_socialstats", i);
            n.$node.html(o)
        } else n.destroy()
    }
    if (e instanceof TD.services.TwitterStatus && !(e instanceof TD.services.TwitterDirectMessage)) {
        this.tweet = e.getMainTweet();
        var i = TD.controller.clients.getClient(this.tweet.account.getKey()),
            s = [],
            n = this;
        i.getTweetSummary(this.tweet.id, t.bind(this), function () {
            n.destroy()
        })
    }
}), TD.components.RepliesTo = TD.components.Base.extend(function (e, t) {
    this.chirp = e.getMainTweet(), this.mainTweet = this.chirp.getMainTweet(), this.repliesTo = [], this.mediaPreviewSize = t, this.refreshPeriod = 60, this._boundHandleConversation = this._handleConversation.bind(this), this.subscriptions = {}, this.subscriptions[this.mainTweet.id] = $.subscribe("/tweets/conversation/" + this.mainTweet.id, this._boundHandleConversation), this.client = TD.controller.clients.getClient(this.chirp.account.getKey()), this.pollTaskId = TD.controller.scheduler.schedulePeriodicTask(this.refreshPeriod, function () {
        this.client.getConversation(this.mainTweet.id)
    }.bind(this), !0)
}).methods({
    _handleConversation: function (e) {
        var t = {};
        if (this.repliesTo = e.descendants.concat(this.repliesTo), this.repliesTo = this.repliesTo.filter(function (e) {
            var i = t[e.id];
            return t[e.id] = !0, !i
        }.bind(this)), this.repliesTo.forEach(function (e) {
            this.subscriptions[e.id] || (this.subscriptions[e.id] = $.subscribe("/tweets/conversation/" + e.id, this._boundHandleConversation))
        }.bind(this)), this.repliesTo.sort(TD.util.chirpAscSort), this.repliesTo.length > 0) {
            var i = _.map(this.repliesTo, function (e) {
                return e.render({
                    mediaPreviewSize: this.mediaPreviewSize,
                    isInConvo: !0
                })
            }.bind(this)).join(""),
                s = TD.ui.template.render("status/tweet_detail_repliesto", {
                    renderedChirps: i
                });
            this.$node.html(s)
        }
    },
    findChirp: function (e) {
        var t = null;
        return this.chirp.id === e ? t = this.chirp : this.mainTweet.id === e ? t = this.mainTweet : this.repliesTo && (t = _.detect(this.repliesTo, function (t) {
            return t.id === e
        })), t
    },
    destroy: function () {
        for (var e in this.subscriptions) $.unsubscribe(this.subscriptions[e]);
        TD.controller.scheduler.removePeriodicTask(this.pollTaskId), this.supr()
    }
}), TD.components.InReplyTo = TD.components.Base.extend(function (e, t, i) {
    var s = this;
    this.chirp = e, this.mainTweet = this.chirp.getMainTweet(), this.$container = t, this.$detailContentContainer = this.$container.find(".js-detail-container"), this.$detailContent = this.$detailContentContainer.find(".js-detail-content"), this.mediaPreviewSize = i, this.mainTweet.inReplyToID && (this.$node.html(TD.ui.template.render("status/tweet_detail_inreplyto")), this.$repliesContainer = this.$find(".js-replies-before"), this.$repliesText = this.$find(".in-reply-to").hide(), this.replies = null, _.defer(function () {
        s.bubbleEvent(TD.components.InReplyTo.BEGIN)
    }), this.subscription = $.subscribe("/tweets/conversation/" + this.mainTweet.id, _.bind(this._handleRelatedResults, this)), this.client = TD.controller.clients.getClient(this.chirp.account.getKey()), this.client.getConversation(this.mainTweet.id))
}).statics({
    BEGIN: "td-load-convo",
    END: "td-load-finish",
    INREPLYTO_PADDING: 20
}).methods({
    _handleRelatedResults: function (e) {
        this.replies = e.ancestors, _.isEmpty(this.replies) ? this._getTweet() : this._showReplies()
    },
    _getTweet: function () {
        var e = this;
        this.client.show(this.mainTweet.inReplyToID, function (t) {
            e.replies = e.replies || [], e.replies.push(t), e._showReplies()
        }, function () {
            e.bubbleEvent(TD.components.InReplyTo.END)
        })
    },
    _showReplies: function () {
        _.defer(_.bind(this._showRepliesInternal, this))
    },
    _showRepliesInternal: function () {
        var e, t, i, s, n, r, o;
        this.bubbleEvent(TD.components.InReplyTo.END), _.isEmpty(this.replies) || (this.replies.sort(TD.util.chirpAscSort), t = this.mainTweet.id, this.replies = _.filter(this.replies, function (e) {
            return e.id !== t
        }), i = _.map(this.replies, function (e) {
            return e.render({
                mediaPreviewSize: this.mediaPreviewSize,
                isInConvo: !0
            })
        }.bind(this)).join(""), s = this.$detailContentContainer.outerHeight(), n = this.$detailContent.outerHeight(), this.$repliesContainer.html(i), e = this.$node.outerHeight(), s > n && this.$detailContent.css("padding-bottom", s - n), 1 >= this.replies.length ? r = 0 : (o = this.$repliesContainer.children().last().outerHeight() + TD.components.InReplyTo.INREPLYTO_PADDING, r = e - o), this.$detailContentContainer.scrollTop(e), this.$detailContentContainer.animate({
            scrollTop: r
        }, {
            duration: "fast"
        }))
    },
    findChirp: function (e) {
        var t = null;
        return this.chirp.id === e ? t = this.chirp : this.mainTweet.id === e ? t = this.mainTweet : this.replies && (t = _.detect(this.replies, function (t) {
            return t.id === e
        })), t
    },
    destroy: function () {
        this.subscription && $.unsubscribe(this.subscription), this.supr()
    }
}), TD.components.BaseModal = TD.components.Base.extend(function () {
    this.$node = $(TD.ui.template.render("large_modal")), $(document).trigger("uiCloseModal"), this.$title = this.$find(".js-header-title"), this.$closeButton = this.$find(".js-dismiss"), this.$menuContainer = this.$find(".js-mdl-content"), this.$footer = this.$find("footer");
    var e = _.bind(this.destroy, this);
    this.$closeButton.bind("click", function () {
        e()
    }), this.$node.bind(TD.components.BaseModal.CLOSE_EVENT, e), this.boundCloseModal = this._handleCloseModal.bind(this), $(document).on("uiCloseModal", this.boundCloseModal);
    var t = _.bind(this.handleDragStart, this),
        i = _.bind(this.getDragDropBoundary, this);
    this.$node.draggable({
        boundary: i,
        handle: this.$find(".mdl-drag-handle")
    }), this.$node.on("start.draggable", t), $("div.ovl.scroll-v").on("click", function (t) {
        this === t.target && e()
    }), TD.util.isTouchDevice() && window.navigator.standalone && ($("div.ovl.scroll-v").on("touchmove", function (e) {
        e.preventDefault()
    }), $("div.ovl.scroll-v").on("touchmove", ".scroll-v", function (e) {
        e.stopPropagation()
    })), this.hasFocus = !1, this.focusId = _.uniqueId("focus"), this._boundHandleFocus = this.handleFocus.bind(this), $(document).on("uiFocus", this._boundHandleFocus), $(document).trigger("uiFocusRequest", {
        id: this.focusId
    })
}).statics({
    CLOSE_EVENT: "td-close"
}).methods({
    handleFocus: function (e, t) {
        this.hasFocus = t.id === this.focusId ? !0 : !1
    },
    getDragDropBoundary: function () {
        return this.$node.parent()
    },
    handleDragStart: function () {
        this.$node.css({
            position: "absolute",
            top: this.$node.offset().top,
            left: this.$node.offset().left
        }), this.$node.parent("#open-modal").addClass("is-dragging")
    },
    show: function () {
        this.supr()
    },
    _handleCloseModal: function () {
        this.destroy()
    },
    destroy: function () {
        this.$node.parent("#open-modal").removeClass("is-dragging"), $(document).off("uiFocus", this._boundHandleFocus), $(document).off("uiCloseModal", this.boundCloseModal), $(document).trigger("uiFocusRelease", {
            id: this.focusId
        }), this.supr()
    }
}), TD.components.NewFeaturesSplash = TD.components.BaseModal.extend(function () {
    this.$node.addClass("release-notes-modal"), this.$menuContainer.append(TD.ui.template.render("splash/whats_new")), this.$doneButton = this.$find(".js-done"), this.$doneButton.click(_.bind(this.destroy, this)), $("#splash-modal").empty().append(this.$node).show(), TD.components.NewFeaturesSplash.updateSeenVersion()
}).statics({
    FOR_VERSION: "3.0",
    shouldShow: function () {
        var e = TD.components.NewFeaturesSplash.FOR_VERSION,
            t = TD.settings.getPreviousSplashVersion();
        return "0" === t ? (TD.components.NewFeaturesSplash.updateSeenVersion(), !1) : 1 !== TD.util.versionComparator(e, t) ? !1 : -1 === TD.util.versionComparator(TD.version, e) ? !1 : !0
    },
    updateSeenVersion: function () {
        TD.settings.setPreviousSplashVersion(TD.version)
    }
}).methods({
    destroy: function () {
        this.supr(), $("#splash-modal").hide()
    }
}), TD.components.OpenColumn = TD.components.BaseModal.extend(function () {
    var e = this;
    this.$footer.append($(TD.ui.template.render("open_column_footer"))), this.$backButton = this.$find(".js-back"), this.$addButton = this.$find(".js-add-column"), this.history = [], this.menu = null, this.$backButton.bind("click", function (t) {
        t.stopPropagation(), e._previous()
    })
}).statics({
    GO_URL_REGEX: /^(add|profile)$/,
    GO_EVENT: "/go",
    instance: null
}).methods({
    canGo: function (e) {
        return TD.components.OpenColumn.GO_URL_REGEX.test(e)
    },
    go: function (e, t, i, s) {
        TD.components.OpenColumn.instance = this, s && (this.history = [s]), this.history.push([e, _.clone(t), i]);
        var n = t.shift();
        if (this.menu && this.menu.canGo && this.menu.canGo(e, t)) return this.history.pop(), this.history[this.history.length - 1] = fullUrl, this.menu.go(n, t, i), void 0;
        var r, o = !1,
            a = !1,
            c = !1;
        if ("add" === e) switch (n) {
        case "home":
            r = new TD.components.OpenColumnHome, o = !0;
            break;
        case "lists":
            r = new TD.components.OpenLists;
            break;
        case "trends":
            r = new TD.components.OpenTrends;
            break;
        default:
            TD.controller.columnManager.TWITTER_GENERIC[n] && (r = new TD.components.OpenTwitterGeneric(n))
        }
        this._show(n, r, o, a, c), r.go && r.go(n, t, i)
    },
    _show: function (e, t, i, s) {
        this.menu && this.menu.destroy(), this.menu = t, this.$menuContainer.append(t.$node), i || this.menu.setup(this.$addButton), this.$node.toggleClass("s-nonav", i), this.$node.toggleClass("s-narrow", s), this.$backButton.toggle(this.history.length > 1).toggleClass("hide", 0 === this.history.length), "home" === e ? this.$title.text(TD.i("Add Column")) : "profile" === e ? this.$title.text(TD.i("Account profile")) : this.$title.text(TD.controller.columnManager.MENU_TITLE[e] || "")
    },
    _previous: function () {
        this.history.pop();
        var e = this.history.pop();
        e instanceof Array ? this.go.apply(this, e) : (this.destroy(), $(e.target).trigger(e.type, [e.data]))
    },
    destroy: function () {
        this.menu && this.menu.destroy(), _.each(this.eventSubscriptions, function (e) {
            $.unsubscribe(e)
        }), this.$backButton.unbind(), $("#open-modal").hide(), TD.components.OpenColumn.instance = null, this.supr()
    }
}), TD.components.OpenColumnHome = TD.components.Base.extend(function () {
    var e = this,
        t = {};
    TD.storage.accountController.getPostingAccounts().forEach(function (e) {
        t[e.getType()] = !0
    });
    var i = TD.controller.columnManager.DISPLAY_ORDER_SINGLETONS.filter(function (e) {
        return _.isEmpty(TD.storage.columnController.getColumnsByType(e.type))
    }),
        s = TD.controller.columnManager.DISPLAY_ORDER.filter(function (e) {
            return t[e.service]
        });
    this.$node = $(TD.ui.template.render("open_column_home", {
        options: s,
        singletons: i,
        hasSingletons: i.length
    })), this.$launchers = this.$find(".js-item-launch"), this.$launchers.bind("click", function (t) {
        var i, s = $(t.currentTarget),
            n = s.data("action"),
            r = s.data("type");
        switch (n) {
        case "add":
            i = TD.controller.columnManager.makeColumnFor(r, "tweetdeck"), TD.controller.columnManager.addColumnToUI(i), e.bubbleEvent(TD.components.BaseModal.CLOSE_EVENT);
            break;
        case "open":
            e.publishEvent(TD.components.OpenColumn.GO_EVENT, TD.components.OpenColumnHome.URL_BASE + "/" + r)
        }
    })
}).statics({
    URL_BASE: "/add"
}), TD.components.SplitMenu = TD.components.Base.extend(function () {
    this.$node = $(TD.ui.template.render("open_split_menu")), this.menuItems = [], this.rightPillarComponent = null, this.$leftPinnedContainer = this.$find(".js-left-pinned"), this.$leftPillarContainer = this.$find(".js-left-column"), this.$rightPillarContainer = this.$find(".js-right-column")
}).methods({
    appendMenuItem: function (e) {
        this.menuItems.push(e), this.$leftPillarContainer.append(e.$node)
    },
    removeMenuItem: function (e) {
        e.destroy(), this.menuItems = _.without(this.menuItems, e)
    },
    appendPinnedMenuItem: function (e) {
        this.menuItems.push(e), this.$leftPillarContainer.addClass("s-with-pinned"), this.$leftPinnedContainer.html(e.$node)
    },
    appendMenuItemElement: function (e) {
        this.$leftPillarContainer.append(e)
    },
    setRightPillar: function (e) {
        this.rightPillarComponent && this.rightPillarComponent.destroy(), this.rightPillarComponent = e, this.$rightPillarContainer.html(e.$node)
    },
    destroy: function () {
        _.each(this.menuItems, function (e) {
            e.destroy()
        }), this.rightPillarComponent && this.rightPillarComponent.destroy(), this.supr()
    }
}), TD.components.OpenSplitMenu = TD.components.SplitMenu.extend(function () {
    this.$addButton = null
}).methods({
    setup: function (e) {
        this.$addButton = e, this.$addButton.hide(), this.$addButton.click(_.bind(this._handleAddClick, this))
    },
    setChirpPillar: function (e) {
        this.setRightPillar(e);
        var t = this;
        e instanceof TD.components.TemporaryColumn && _.defer(function () {
            e.populate(), t.$addButton.show(), t.$addButton.prop("disabled", !1)
        })
    },
    _handleAddClick: function () {
        this.$addButton.prop("disabled") || this.makeChirpColumnPermanent()
    },
    makeChirpColumnPermanent: function () {
        this.rightPillarComponent && (this.rightPillarComponent.makePermanent(), this.$addButton.prop("disabled", !0))
    },
    destroy: function () {
        this.$addButton.unbind("click"), this.$addButton.hide(), this.supr()
    }
}), TD.components.OpenTwitterGeneric = TD.components.OpenSplitMenu.extend(function (e) {
    if (this.type = e, this.showUserSearch = !TD.controller.columnManager.SELF_ACCOUNTS_ONLY[e], this.userSearch = null, this.helpText = TD.controller.columnManager.HELP_TEXT[e], this.placeHolder = new TD.components.OpenColumnPlaceholder(this.helpText), this.setChirpPillar(this.placeHolder), this.showUserSearch) {
        this.userSearch = new TD.components.TwitterUserSearch, this.appendPinnedMenuItem(this.userSearch);
        var t = this.userSearch.detachResultsContainer();
        this.appendMenuItemElement(t)
    }
    this.profileAccount = new TD.components.ProfileAccount, this.profileAccount.$node.hide(), this.appendMenuItem(this.profileAccount), this.selfAccounts = new TD.components.SelfAccounts("twitter"), this.appendMenuItem(this.selfAccounts), this.$node.bind(TD.components.MenuItemBase.BUBBLE_SELECT_EVENT, _.bind(this._handleSelect, this))
}).methods({
    go: function (e, t, i) {
        i.screenName ? (this.profileAccount.setUser(i.screenName), this.profileAccount.$node.show(), this.profileAccount.select()) : this.selfAccounts.selectDefault()
    },
    _handleSelect: function (e, t) {
        var i;
        if (t.target.account) i = new TD.components.TemporaryColumn, i.genericTwitter(this.type, t.target.account, void 0);
        else if (t.target.twitterUser) {
            i = new TD.components.TemporaryColumn;
            var s = this.userSearch.client.oauth.account;
            i.genericTwitter(this.type, s, t.target.twitterUser)
        }
        i && (this.setChirpPillar(i), e.stopPropagation())
    }
}), TD.components.OpenLists = TD.components.OpenSplitMenu.extend(function () {
    this.screenName = null, this.listsComponent = null, this.newListButton = null, this.helpText = TD.controller.columnManager.HELP_TEXT[TD.controller.columnManager.LISTS], this.placeHolder = new TD.components.OpenColumnPlaceholder(this.helpText), this.removePlaceholder = new TD.components.OpenColumnPlaceholder(""), this.setChirpPillar(this.placeHolder), this.$node.bind(TD.components.MenuItemBase.BUBBLE_SELECT_EVENT, _.bind(this._handleListSelect, this)), this.$node.bind(TD.components.Lists.LOADED, _.bind(this._handleListsLoaded, this))
}).methods({
    go: function (e, t, i) {
        i.screenName ? (this.screenName = i.screenName, this.listsComponent = new TD.components.Lists(this.screenName, i.slug), this.appendMenuItem(this.listsComponent)) : (this.newListButton = new TD.components.NewListButton, this.appendPinnedMenuItem(this.newListButton), this.listsComponent = new TD.components.Lists, this.appendMenuItem(this.listsComponent))
    },
    _handleListsLoaded: function (e, t) {
        if (t.target === this.listsComponent && 0 === t.data) {
            this.removeMenuItem(this.listsComponent);
            var i;
            i = this.screenName ? TD.i("This user has no public lists") : TD.i("You are not subscribed to any lists"), this.listsComponent = new TD.components.OpenColumnPlaceholder(i), this.setChirpPillar(this.removePlaceholder), this.appendMenuItem(this.listsComponent)
        }
    },
    _handleListSelect: function (e, t) {
        var i = t.target.list,
            s = new TD.components.TemporaryColumn;
        s.list(i), this.setChirpPillar(s), e.stopPropagation()
    }
}), TD.components.OpenTrends = TD.components.OpenSplitMenu.extend(function () {
    this.trends = new TD.components.Trends, this.appendMenuItem(this.trends), this.helpText = TD.controller.columnManager.HELP_TEXT[TD.controller.columnManager.TRENDS], this.placeHolder = new TD.components.OpenColumnPlaceholder(this.helpText), this.setChirpPillar(this.placeHolder), this.$node.bind(TD.components.MenuItemBase.BUBBLE_SELECT_EVENT, _.bind(this._handleTrendSelect, this))
}).methods({
    _handleTrendSelect: function (e, t) {
        var i = t.target.title,
            s = new TD.components.TemporaryColumn;
        s.search(i), this.setChirpPillar(s), e.stopPropagation()
    }
}), TD.components.OpenColumnPlaceholder = TD.components.Base.extend(function (e) {
    this.helperText = e, this.$node = $(TD.ui.template.render("open_column_temp_help", {
        helpText: e
    }))
}), TD.components.NewListButton = TD.components.Base.extend(function () {
    var e = this;
    this.$button = $.createElement("button").addClass("btn").text(TD.i("Create list")), this.$button.click(function () {
        e.bubbleEvent(TD.components.BaseModal.CLOSE_EVENT), new TD.components.ListDetails
    }), this.$node.append(this.$button), this.$node.addClass("sch-list padding-al")
}), TD.components.ListDetails = TD.components.BaseModal.extend(function (e) {
    this.theList = e, this.toAutoAdd = [];
    var t = TD.storage.accountController.getAccountsForService("twitter");
    this.$editForm = $(TD.ui.template.render("lists/edit_form", {
        accounts: t
    })), this.$menuContainer.append(this.$editForm), this.$footer.append($(TD.ui.template.render("lists/edit_footer"))), $("#lists-modal").empty().append(this.$node).show(), this.$account = $("#list-account"), this.$name = $("#list-name"), this.$description = $("#list-description"), this.$modePublic = this.$find('input:radio[value="public"]'), this.$modePrivate = this.$find('input:radio[value="private"]'), this.$saveButton = this.$find(".js-save"), this.$name.focus(), this.$saveButton.click(_.bind(this._handleSaveClick, this)), e ? (this.$title.text(TD.i("Edit list")), this.$account.val(TD.storage.Account.generateKeyFor("twitter", e.user.id)), this.$account.prop("disabled", !0), this.$name.val(e.name), this.$description.val(e.description), e.isPrivate ? this.$modePrivate.prop("checked", !0) : this.$modePublic.prop("checked", !0)) : this.$title.text(TD.i("Create list"))
}).methods({
    autoAddMember: function (e) {
        this.toAutoAdd.push(e)
    },
    _handleSaveClick: function () {
        var e = this.$account.val(),
            t = TD.controller.clients.getClient(e),
            i = this.$name.val(),
            s = this.$description.val(),
            n = this.$modePrivate.prop("checked"),
            r = _.bind(this._handleSaveSuccess, this),
            o = _.bind(this._handleSaveFailure, this);
        this.$saveButton.prop("disabled", !0), this.theList ? t.updateList(this.theList.id, i, s, n, r, o) : t.createList(i, s, n, r, o)
    },
    _handleSaveSuccess: function (e) {
        this.destroy(), new TD.components.ListMembers(e, this.toAutoAdd)
    },
    _handleSaveFailure: function () {
        this.$saveButton.prop("disabled", !1);
        var e = TD.i("Problem saving list. Please check the details and try again");
        TD.controller.progressIndicator.addMessage(e)
    },
    destroy: function () {
        this.supr(), $("#lists-modal").hide()
    }
}), TD.components.ListMembers = TD.components.BaseModal.extend(function (e, t) {
    var i = this;
    this.theList = e, this.membersIndex = {}, this.changed = !1, this.client = TD.controller.clients.getClient(e.account.getKey()), this.feedKey = TD.storage.Feed.generateKeyFor(this.theList.account.getKey(), "list", {
        listId: this.theList.id,
        ownerId: this.theList.user.id,
        slug: this.theList.id,
        screenName: this.theList.user.id
    }), this.splitMenu = new TD.components.SplitMenu, this.userSearch = new TD.components.TwitterUserSearch(e.user.account, 10, TD.components.ListMember), this.suggestedUsers = new TD.components.SuggestedUsers(e.user.account, 10, TD.components.ListMember, e.name), this.loadingPane = new TD.components.OpenColumnPlaceholder(TD.i("Loading list members...")), this.memberList = new TD.components.ListMemberList, this.$title.text(TD.i("{{{1}}} by {{2}}", {
        1: e.name,
        2: e.user.screenName
    })), this.$menuContainer.append(this.splitMenu.$node), this.$footer.append($(TD.ui.template.render("lists/edit_members_footer"))), this.splitMenu.appendPinnedMenuItem(this.userSearch), this.splitMenu.appendMenuItemElement(this.userSearch.detachResultsContainer()), this.splitMenu.appendMenuItem(this.suggestedUsers), this.splitMenu.setRightPillar(this.loadingPane), $("#lists-modal").empty().append(this.$node).show(), this.userSearch.searchInput.$inputBox.focus(), this.$memberCount = this.memberList.$find(".js-member-count"), this.$editButton = this.$find(".js-edit"), this.$deleteButton = this.$find(".js-delete"), this.$doneButton = this.$find(".js-done"), this.$addColumnOption = this.$find(".js-add-column-option"), this.$addColumnCheckbox = this.$addColumnOption.find(".js-add-column-checkbox"), 0 === TD.storage.columnController.getColumnsContainingFeed(this.feedKey).length && (this.$addColumnCheckbox.prop("checked", !0), this.$addColumnOption.removeClass("is-hidden")), this.$editButton.click(_.bind(this._editDetails, this)), this.$deleteButton.click(_.bind(this._deleteList, this)), this.$doneButton.click(_.bind(this._handleDone, this)), this.$node.bind(TD.components.ListMember.ADD_REMOVE_EVENT, _.bind(this._addRemoveMember, this)), this.$node.bind(TD.components.TwitterUserSearch.SEARCH_COMPLETE, function (e, t) {
        var s = t.target;
        i._checkResultsState(s), i.splitMenu.$leftPillarContainer.scrollTop(0)
    }), this._updateMemberCount();
    var s = this._addMembers(t);
    s.addBothWith(this, this._loadAllMembers), s.addCallback(function () {
        i.suggestedUsers.render(), i._checkResultsState(i.userSearch), i._checkResultsState(i.suggestedUsers)
    })
}).methods({
    _addMembers: function (e) {
        var t;
        if (_.isEmpty(e)) t = TD.core.defer.succeed();
        else {
            t = new TD.core.defer.Deferred;
            var i = _.pluck(e, "screenName");
            this.client.addUsersToList(this.theList.id, i, _.bind(t.callback, t), _.bind(t.errback, t))
        }
        return t
    },
    _loadAllMembers: function () {
        var e, t = this,
            i = function (e) {
                if (t._displayMembers(e.users, !1), e.next_cursor) {
                    var s = t._fetchMemberPage(e.next_cursor_str);
                    return s.addCallback(i), s
                }
            };
        return e = this._fetchMemberPage(-1), e.addCallback(i), e
    },
    _fetchMemberPage: function (e) {
        var t = new TD.core.defer.Deferred;
        return this.client.getListMembers(this.theList.id, e, _.bind(t.callback, t), _.bind(t.errback, t)), t
    },
    _displayMembers: function (e, t) {
        var i = this;
        t && e.reverse(), _.each(e, function (e) {
            if (!i.membersIndex[e.id]) {
                var s = new TD.components.ListMember(e);
                i.membersIndex[s.user.id] = s, t ? i.memberList.prepend(s) : i.memberList.append(s)
            }
        }), this.loadingPane && (this.loadingPane.destroy(), this.loadingPane = null, this.splitMenu.setRightPillar(this.memberList))
    },
    _updateMemberCount: function () {
        this.$memberCount.text(this.theList.memberCount)
    },
    _editDetails: function () {
        this.destroy(), new TD.components.ListDetails(this.theList)
    },
    _deleteList: function () {
        var e = this,
            t = _.uniqueId(),
            i = {
                id: t,
                title: TD.i("Deleting list!"),
                message: TD.i("Are you sure you want to delete this list?"),
                okLabel: TD.i("Delete"),
                cancelLabel: TD.i("Cancel")
            }, s = function (i, n) {
                n.id === t && ($(document).off("uiConfirmationAction", s), n.result && e.client.destroyList(e.theList.id, function () {
                    e.theList = null, e.destroy()
                }))
            };
        $(document).on("uiConfirmationAction", s).trigger("uiShowConfirmationDialog", i)
    },
    _addRemoveMember: function (e, t) {
        e.stopPropagation();
        var i = t.target;
        this.membersIndex[i.user.id] ? this.removeMember(i.user) : this.addMember(i.user)
    },
    addMember: function (e) {
        var t = this;
        this._changeUserState(e.id, TD.components.ListMember.STATE_WORKING), this.client.addUserToList(this.theList.id, e.screenName, function () {
            t._displayMembers([e], !0), t.theList.memberCount++, t._updateMemberCount(), t._changeUserState(e.id, TD.components.ListMember.STATE_MEMBER), t.changed = !0
        }, function () {
            t._changeUserState(e.id, TD.components.ListMember.STATE_NON_MEMBER);
            var i = TD.i("Problem adding {{userName}} to the list {{listName}}. Please try again", {
                userName: e.name,
                listName: t.theList.name
            });
            TD.controller.progressIndicator.addMessage(i)
        })
    },
    removeMember: function (e) {
        var t = this;
        this._changeUserState(e.id, TD.components.ListMember.STATE_WORKING), this.client.removeUserFromList(this.theList.id, e.screenName, function () {
            var i = t.membersIndex[e.id];
            i.destroy(), delete t.membersIndex[e.id], t.theList.memberCount--, t._updateMemberCount(), t._changeUserState(e.id, TD.components.ListMember.STATE_NON_MEMBER), t.changed = !0
        }, function () {
            t._changeUserState(e.id, TD.components.ListMember.STATE_MEMBER);
            var i = TD.i("Problem removing {{userName}} from the list {{listName}}. Please try again", {
                userName: e.name,
                listName: t.theList.name
            });
            TD.controller.progressIndicator.addMessage(i)
        })
    },
    _changeUserState: function (e, t) {
        this.membersIndex[e] && this.membersIndex[e].setState(t), t === TD.components.ListMember.STATE_MEMBER && (t = TD.components.ListMember.STATE_MEMBER_CHECKED);
        var i = this.userSearch.items.concat(this.suggestedUsers.items);
        _.each(i, function (i) {
            i.user.id == e && i.setState(t)
        })
    },
    _checkResultsState: function (e) {
        var t = this,
            i = e === this.suggestedUsers;
        _.each(e.items, function (e) {
            t.membersIndex[e.user.id] ? (e.setState(TD.components.ListMember.STATE_MEMBER_CHECKED), i && e.hide()) : (e.setState(TD.components.ListMember.STATE_NON_MEMBER), i && e.show())
        })
    },
    _handleDone: function () {
        if (this.$addColumnCheckbox.prop("checked")) {
            var e = new TD.components.TemporaryColumn;
            e.list(this.theList), e.makePermanent()
        }
        this.destroy()
    },
    destroy: function () {
        if (this.changed && this.theList) {
            TD.cache.lists.add(this.theList);
            var e = TD.controller.feedManager.getPoller(this.feedKey);
            e && (e.removeAll(), e.refresh())
        }
        $("#lists-modal").hide(), this.splitMenu.destroy(), this.userSearch.destroy(), this.suggestedUsers.destroy(), this.memberList.destroy(), this.loadingPane && this.loadingPane.destroy(), _.each(this.membersIndex, function (e) {
            e.destroy()
        }), this.supr()
    }
}), TD.components.ListMember = TD.components.Base.extend(function (e) {
    this.user = e, this.state = null;
    var t = {
        isTwitter: !0,
        fullname: e.name || e.screenName,
        username: e.screenName,
        profileImageURL: e.profileImageURL,
        description: e.description,
        isProtected: e.isProtected,
        isVerified: e.isVerified
    };
    this.$node = $(TD.ui.template.render("lists/member", t)), this.$addRemoveButton = this.$find(".js-add-remove"), this.$addRemoveButton.click(_.bind(this._handleAddRemoveClick, this)), this.setMember()
}).statics({
    ADD_REMOVE_EVENT: "td-add-remove",
    STATE_MEMBER: "member",
    STATE_MEMBER_CHECKED: "member-checked",
    STATE_NON_MEMBER: "non-member",
    STATE_WORKING: "working"
}).methods({
    _handleAddRemoveClick: function () {
        this.bubbleEvent(TD.components.ListMember.ADD_REMOVE_EVENT)
    },
    setState: function (e) {
        switch (e) {
        case TD.components.ListMember.STATE_MEMBER:
            this.setMember();
            break;
        case TD.components.ListMember.STATE_MEMBER_CHECKED:
            this.setMemberChecked();
            break;
        case TD.components.ListMember.STATE_NON_MEMBER:
            this.setNonMember();
            break;
        case TD.components.ListMember.STATE_WORKING:
            this.setWorking()
        }
    },
    setMember: function () {
        this.state = TD.components.ListMember.STATE_MEMBER, this.$addRemoveButton.removeClass("s-nonmember s-working s-checked").addClass("s-member"), this.$addRemoveButton.prop("disabled", !1)
    },
    setMemberChecked: function () {
        this.state = TD.components.ListMember.STATE_MEMBER_CHECKED, this.$addRemoveButton.removeClass("s-nonmember s-member s-working").addClass("s-checked"), this.$addRemoveButton.prop("disabled", !1)
    },
    setNonMember: function () {
        this.state = TD.components.ListMember.STATE_NON_MEMBER, this.$addRemoveButton.removeClass("s-member s-checked s-working").addClass("s-nonmember"), this.$addRemoveButton.prop("disabled", !1)
    },
    setWorking: function () {
        this.state = TD.components.ListMember.STATE_WORKING, this.$addRemoveButton.removeClass("s-member s-nonmember s-checked").addClass("s-working"), this.$addRemoveButton.prop("disabled", !0)
    }
}), TD.components.ListMemberList = TD.components.Base.extend(function () {
    this.$node = $(TD.ui.template.render("lists/member_list")), this.$list = this.$find(".js-member-list")
}).methods({
    append: function (e) {
        this.$list.append(e.$node)
    },
    prepend: function (e) {
        this.$list.prepend(e.$node)
    }
}), TD.components.TwitterProfileMenu = TD.components.Base.extend(function (e) {
    var t = TD.controller.columnManager.DISPLAY_ORDER_PROFILE;
    this.screenName = e, this.$node = $(TD.ui.template.render("open_column_profile", {
        options: t
    })), this.$launchers = this.$find(".js-item-launch"), this.$launchers.click(_.bind(this._handleItemClick, this))
}).statics({
    URL_BASE: "/add"
}).methods({
    _handleItemClick: function (e) {
        var t = $(e.currentTarget),
            i = t.data("action"),
            s = t.data("type"),
            n = TD.components.OpenColumnHome.URL_BASE + "/" + s;
        "open" === i && (this.screenName && (n += "?screenName=" + this.screenName), this.publishEvent(TD.components.OpenColumn.GO_EVENT, n))
    }
}), TD.components.Lists = TD.components.Base.extend(function (e, t) {
    var i, s = this,
        n = {}, r = TD.storage.clientController.client.getDefaultAccount();
    if (this.owners = n, this.screenName = e, i = e ? TD.i("@{{screenName}}'s lists", this) : TD.i("My lists"), this.$node = $(TD.ui.template.render("open_column_list_multi_group", {
        groups: [{
            title: i,
            className: "js-my-lists"
        }, {
            title: TD.i("Subscribed to"),
            className: "js-others-lists"
        }]
    })), this.$myLists = this.$find("ul.js-my-lists"), this.$otherLists = this.$find("ul.js-others-lists"), this.lists = [], this.listComponents = [], this.slug = t, this.listComparator = function (e, t) {
        var i, s, o = TD.components.Lists;
        return n[e.user.id] && !n[t.user.id] ? -1 : !n[e.user.id] && n[t.user.id] ? 1 : n[e.user.id] && n[t.user.id] ? (i = e.account.getKey() === r, s = t.account.getKey() === r, i === s ? o.ownerNameComparator(e, t) || o.nameComparator(e, t) : i ? -1 : 1) : o.nameComparator(e, t) || o.ownerNameComparator(e, t)
    }, e) {
        var o = TD.cache.twitterUsers.getByScreenName(e);
        o.addCallback(function (t) {
            n[t.id] = !0;
            var i = TD.controller.clients.getClientsByService("twitter"),
                r = _.find(i, function (t) {
                    return t.oauth.account.getUsername().toLowerCase() === e.toLowerCase() ? t : void 0
                });
            r ? (s._handleLists(TD.cache.lists.getListsFor(r.oauth.account.getKey())), s.bubbleEvent(TD.components.Lists.LOADED, s.lists.length)) : (r = TD.controller.clients.getPreferredClient("twitter"), r.getLists(e, function (e) {
                s._handleLists(e), s.bubbleEvent(TD.components.Lists.LOADED, s.lists.length)
            }))
        })
    } else {
        var a = TD.controller.clients.getClientsByService("twitter");
        _.each(a, function (e) {
            n[e.oauth.account.getUserID()] = !0
        }), _.each(a, function (e) {
            s._handleLists(TD.cache.lists.getListsFor(e.oauth.account.getKey()))
        }), this.bubbleEvent(TD.components.Lists.LOADED, s.lists.length)
    }
}).statics({
    LOADED: "td-lists-loaded",
    nameComparator: function (e, t) {
        var i = e.name.toLowerCase(),
            s = t.name.toLowerCase();
        return (i > s) - (s > i)
    },
    ownerNameComparator: function (e, t) {
        var i = e.user.name.toLowerCase(),
            s = t.user.name.toLowerCase();
        return (i > s) - (s > i)
    }
}).methods({
    _handleLists: function (e) {
        var t = this;
        if (_.isArray(e) && 0 !== e.length) {
            this.lists = this.lists.concat(e), this.lists.sort(this.listComparator);
            var i = {};
            this.lists = _.select(this.lists, function (e) {
                var t = !i[e.id];
                return i[e.id] = !0, t
            }), _.each(this.listComponents, function (e) {
                e.destroy()
            });
            var s;
            this.listComponents = _.map(this.lists, function (e) {
                var i = (new TD.components.MenuItem).list(e);
                return t.owners[e.user.id] ? (t.$myLists.append(i.$node), t.slug && e.slug.toLowerCase() === t.slug.toLowerCase() && e.user.screenName.toLowerCase() === t.screenName.toLowerCase() && (s = i)) : t.$otherLists.append(i.$node), i
            }), !s && this.screenName && this.listComponents.length > 0 && (s = this.listComponents[0]), s && _.defer(function () {
                s.select()
            })
        }
    }
}), TD.components.SearchInput = TD.components.Base.extend(function (e) {
    var t = this;
    this.promptText = _.isString(e) ? e : TD.i("Enter a #hashtag or keyword"), this.$node = $(TD.ui.template.render("add_column_search_input", {
        searchInputClassName: "js-add-column-search-input",
        searchInputPlaceholder: this.promptText
    })), this.$inputBox = this.$find(".js-add-column-search-input"), this.$searchButton = this.$find(".js-perform-search"), this.$spinner = this.$find(".js-spinner"), this.$clearButton = this.$find(".js-clear-search"), this.$node.submit(function (e) {
        t._search(), e.preventDefault()
    }), this.$clearButton.click(function (e) {
        t._clear(), e.preventDefault()
    }), this.$searchButton.click(function (e) {
        t._search(), e.preventDefault()
    }), this.boundCancelSearch = this.cancelSearch.bind(this), this.$inputBox.on("uiInputBlur", this.boundCancelSearch)
}).methods({
    cancelSearch: function () {
        this.$inputBox.val("").blur()
    },
    _search: function () {
        var e = $.trim(this.$inputBox.val());
        "" === e ? this._clear() : this.prevSearchTerm !== e && (this.prevSearchTerm = e, this.bubbleEvent("td-search", this.$inputBox.val()))
    },
    _clear: function () {
        this.$inputBox.val(""), this.prevSearchTerm = "", this.$inputBox.focus(), this.bubbleEvent("td-search-clear"), this.$clearButton.hide(), this.$searchButton.show()
    },
    showActivity: function () {
        this.$searchButton.hide(), this.$clearButton.hide(), this.$spinner.show()
    },
    hideActivity: function () {
        var e = "" !== this.$inputBox.val();
        this.$clearButton.toggle(e), this.$searchButton.toggle(!e), this.$spinner.hide()
    },
    destroy: function () {
        $(document).off("uiSearchBlur", this.boundCancelSearch), this.$inputBox.unbind(), this.$node.remove()
    }
}), TD.components.MenuItemBase = TD.components.Base.extend(function () {
    this.eventSubscriptions = [], this.selected = !1, this.eventSubscriptions.push($.subscribe(TD.components.MenuItemBase.GLOBAL_SELECT_EVENT, _.bind(this._handleSelectionEvent, this))), _.defer(_.bind(this._addClickHandler, this))
}).statics({
    GLOBAL_SELECT_EVENT: "/menuitem/select",
    BUBBLE_SELECT_EVENT: "td-menuitem-select",
    deselectAll: function () {
        var e = {
            target: null
        };
        TD.storage.notification.notify(this.GLOBAL_SELECT_EVENT, e)
    }
}).methods({
    _handleSelectionEvent: function (e) {
        this.selected = e.target === this, this.$node.toggleClass("selected", this.selected)
    },
    _addClickHandler: function () {
        var e = this;
        this.$node.bind("click", function () {
            e.selected || e.select()
        })
    },
    select: function () {
        this.publishEvent(TD.components.MenuItemBase.GLOBAL_SELECT_EVENT, null), this.bubbleEvent(TD.components.MenuItemBase.BUBBLE_SELECT_EVENT)
    },
    deselect: function () {
        this.selected = !1, this.$node.removeClass("selected")
    },
    destroy: function () {
        _.each(this.eventSubscriptions, function (e) {
            $.unsubscribe(e)
        }), this.$node.remove()
    }
}), TD.components.MenuItem = TD.components.MenuItemBase.extend(function () {
    this.type = null
}).statics({
    BASIC: "basic",
    SUBTITLE: "subtitle",
    PERSON: "person",
    LIST: "list"
}).methods({
    basic: function (e) {
        return this.type = TD.components.MenuItem.BASIC, this.title = e, this.$node = $(TD.ui.template.render("list_module_list_item", {
            title: this.title
        })), this
    },
    subtitle: function (e, t) {
        this.type = TD.components.MenuItem.SUBTITLE, this.title = e, this.subtitle = t;
        var i = {
            title: e,
            subtitle: t
        };
        return this.$node = $(TD.ui.template.render("list_module_subtitle_item", i)), this
    },
    selfAccount: function (e) {
        this.type = TD.components.MenuItem.PERSON, this.account = e;
        var t = e.getType(),
            i = {
                isTwitter: "twitter" === t,
                fullname: e.getName() || e.getUsername(),
                username: e.getUsername(),
                profileImageURL: e.getProfileImageURL()
            };
        return this.$node = $(TD.ui.template.render("list_module_account_item", i)), this
    },
    twitterUser: function (e) {
        this.type = TD.components.MenuItem.PERSON, this.twitterUser = e;
        var t = {
            isTwitter: !0,
            fullname: e.name || e.screenName,
            username: e.screenName,
            profileImageURL: e.profileImageURL
        };
        return this.$node = $(TD.ui.template.render("list_module_account_item", t)), this
    },
    list: function (e) {
        this.type = TD.components.MenuItem.LIST, this.list = e;
        var t = {
            title: e.name,
            by: TD.i("by {{1}}", {
                1: e.user.name
            }),
            description: e.description,
            subtitle: TD.i("{{1}} members", {
                1: e.memberCount
            }),
            miniProfileURL: e.user.miniProfileImageURL(),
            isPrivate: e.isPrivate
        };
        return this.$node = $(TD.ui.template.render("list_module_twitter_list_item", t)), this
    }
}), TD.components.SelfAccounts = TD.components.Base.extend(function (e) {
    var t = TD.storage.accountController.getPostingAccounts();
    this.titleText = TD.i("Your Accounts"), this.service = e, this.items = [], this.$node = $(TD.ui.template.render("open_column_list_with_header", {
        title: this.titleText
    })), this.$list = this.$find(".js-list-container");
    for (var i = 0; t.length > i; i++) {
        var s = t[i],
            n = s.getType();
        if (!this.service || n === this.service) {
            var r = (new TD.components.MenuItem).selfAccount(t[i]);
            this.items.push(r), this.$list.append(r.$node)
        }
    }
}).methods({
    selectDefault: function () {
        for (var e, t = TD.storage.accountController.getDefault(), i = t.getKey(), s = 0; this.items.length > s; s++)
            if (e = this.items[s], i === e.account.getKey()) {
                e.select();
                break
            }
    },
    destroy: function () {
        _.each(this.items, function (e) {
            e.destroy()
        }), this.$node.remove()
    }
}), TD.components.ProfileAccount = TD.components.Base.extend(function () {
    this.titleText = TD.i("Profile Account"), this.screenName = null, this.twitterUser = null, this.$node = $(TD.ui.template.render("open_column_list_with_header", {
        title: this.titleText
    })), this.$list = this.$find(".js-list-container"), this.menuItem = null
}).methods({
    setUser: function (e) {
        this.screenName = e;
        var t = TD.cache.twitterUsers.getByScreenName(this.screenName);
        t.addCallbackWith(this, this._renderUser)
    },
    _renderUser: function (e) {
        this.twitterUser = e, this.menuItem = (new TD.components.MenuItem).twitterUser(e), this.$list.append(this.menuItem.$node)
    },
    select: function () {
        this.menuItem.select()
    },
    destroy: function () {
        this.menuItem && this.menuItem.destroy(), this.$node.remove()
    }
}), TD.components.Trends = TD.components.Base.extend(function () {
    var e = this;
    this.woeid = 1, this.locationName = TD.i("Worldwide"), this.$node = $(TD.ui.template.render("list_module_trends", {
        locationName: this.locationName
    })), this.$trendList = this.$find(".js-trend-list"), this.trendComponents = [], this.trendLocations = null, this.$changeLocation = this.$find("#change-trends"), this.$changeLocation.bind("click", function () {
        e._showTrendLocations()
    }), this.account = TD.storage.accountController.getPreferredAccount("twitter"), this.client = TD.controller.clients.getClient(this.account.getKey()), e._showTrendsForLocation(this.woeid)
}).statics({
    CLICK_URL_BASE: "/open/search/tweets/"
}).methods({
    _showTrendLocations: function () {
        var e = this;
        $.isEmptyObject(e.trendLocations) ? this.account && this.client.getTrendLocations(_.bind(this._displayLocations, this)) : this._displayLocations(e.trendLocations.locations)
    },
    _showTrendsForLocation: function (e) {
        this.client.getTrends(e, _.bind(this._displayTrends, this))
    },
    _displayTrends: function (e) {
        var e = e.trends;
        e.locations;
        for (var t, i = 0; e.length > i; i++) e[i].promotedContent || (t = (new TD.components.MenuItem).basic(e[i].name), this.trendComponents.push(t), this.$trendList.append(t.$node))
    },
    _displayLocations: function () {},
    destroy: function () {
        _.each(this.trendComponents, function (e) {
            e.destroy()
        }), this.$trendList.unbind(), this.$changeLocation.unbind(), this.$node.remove()
    }
}), TD.components.TwitterUserSearch = TD.components.Base.extend(function (e, t, i) {
    e || (e = TD.storage.accountController.getPreferredAccount("twitter")), e && (this.listItemComponent = i, this.client = TD.controller.clients.getClient(e.getKey()), this.maxResults = t || TD.components.TwitterUserSearch.MAX_RESULTS, this.searchInput = new TD.components.SearchInput(TD.i("Enter a @name or full name")), this.items = [], this.resultsTitle = TD.i("Search results"), this.$searchResults = $(TD.ui.template.render("open_column_list_with_header", {
        title: this.resultsTitle
    })), this.$searchResults.hide(), this.$node = $(this.searchInput.$node), this.$node.append(this.$searchResults), this.$node.bind("td-search", _.bind(this._handleSearchSubmit, this)), this.$node.bind("td-search-clear", _.bind(this._handleSearchClear, this)), this.$searchResultsList = this.$find(".js-list-container"))
}).statics({
    SEARCH_COMPLETE: "td-search-complete",
    MAX_RESULTS: 4
}).methods({
    _handleSearchSubmit: function (e, t) {
        this.searchInput.showActivity();
        var i = t.data;
        this._search(i), e.stopPropagation()
    },
    _search: function (e) {
        e && this.client.userSearch(e, _.bind(this._handleUsers, this))
    },
    _handleSearchClear: function () {
        _.each(this.items, function (e) {
            e.destroy()
        }), this.$searchResults.hide()
    },
    _handleUsers: function (e) {
        this.searchInput.hideActivity();
        var t, i, s;
        for (e = _.first(e, this.maxResults), this.items = [], this.$searchResultsList.empty(), t = 0, i = e.length; i > t; t++) s = this.listItemComponent ? new this.listItemComponent(e[t]) : (new TD.components.MenuItem).twitterUser(e[t]), this.items.push(s), this.$searchResultsList.append(s.$node);
        this.$searchResults.show(), this.bubbleEvent(TD.components.TwitterUserSearch.SEARCH_COMPLETE)
    },
    detachResultsContainer: function () {
        return this.$searchResults.detach()
    },
    destroy: function () {
        _.each(this.items, function (e) {
            e.destroy()
        }), this.supr()
    }
}), TD.components.SuggestedUsers = TD.components.TwitterUserSearch.extend(function (e, t, i, s) {
    this.searchTerm = s, this._ready = !1, this._userData = null, this.resultsTitle = TD.i("Suggested"), $(".js-title", this.$searchResults).text(this.resultsTitle), this.$node = this.$searchResults, this.searchInput.$node.detach(), this._search(s)
}).methods({
    _handleUsers: function (e) {
        this._ready ? e && e.length > 0 && (this.supr(e), this._userData = null) : this._userData = e
    },
    render: function () {
        this._ready || (this._ready = !0, this._handleUsers(this._userData))
    }
}), TD.components.TemporaryColumn = TD.components.Base.extend(function () {
    this.type = void 0, this.service = void 0, this.accountKey = void 0, this.metaString = void 0, this.column = null, this.$actionButton = null
}).methods({
    _init: function (e, t, i, s, n) {
        this.type = e, this.service = t, this.accountKey = i, this.metaString = s, this.column = TD.controller.columnManager.makeColumnFor(e, t, i, s, n), this.column.visible = !0, this.column.temporary = !0, TD.controller.columnManager.add(this.column);
        var r = this.column.model,
            o = {
                columnkey: r.getKey(),
                columntitle: this.column.getTitleHTML(),
                columnclass: this.column.getIconClass(),
                isTemporary: !0
            };
        this.$node = $(TD.ui.template.render("column", o)), this.$actionButton = this.$find(".js-action-header-button")
    },
    populate: function () {
        TD.ui.columns.setupColumn(this.column), TD.controller.feedScheduler.addColumn(this.column, !1)
    },
    makePermanent: function () {
        var e = TD.controller.columnManager.makeColumnFor(this.type, this.service, this.accountKey, this.metaString, this.column.getSearchFilter());
        e.setFeeds(this.column.getFeeds()), TD.controller.columnManager.addColumnToUI(e)
    },
    home: function () {
        this._init("home", "tweetdeck")
    },
    me: function () {
        this._init("me", "tweetdeck")
    },
    inbox: function () {
        this._init("privateMe", "tweetdeck")
    },
    scheduled: function () {
        this._init("scheduled", "tweetdeck")
    },
    genericTwitter: function (e, t, i) {
        var s, n, r = "twitter",
            o = t.getKey(),
            a = i ? i.id : void 0;
        i ? (s = TD.controller.columnManager.NON_SELF_FEED_TYPE[e] || e, e === TD.controller.columnManager.MENTIONS && (a = "@" + i.screenName), TD.cache.names.addScreenName(i.id, i.screenName)) : (e === TD.controller.columnManager.MENTIONS && (n = new TD.vo.SearchFilter, n.action.fromJSONObject({
            showMentions: !0
        })), e === TD.controller.columnManager.FOLLOWERS && (n = new TD.vo.SearchFilter, n.action.fromJSONObject({
            showFollowers: !0
        })), s = TD.controller.columnManager.SELF_FEED_TYPE[e] || e), this._init(s, r, o, a, n)
    },
    search: function (e, t) {
        if (!t) {
            var i = TD.storage.accountController.getPreferredAccount("twitter");
            t = i.getKey()
        }
        this._init("search", "twitter", t, e)
    },
    list: function (e) {
        var t = this,
            i = e.user.account.getKey(),
            s = e.user.id + "/" + e.id;
        TD.cache.names.addScreenName(e.user.id, e.user.screenName), TD.cache.names.addListName(e.id, e.name), this._init("list", "twitter", i, s), e.isOwnList() && (this.$actionButton.text(TD.i("Edit")), this.$actionButton.removeClass("is-hidden"), this.$actionButton.click(function () {
            t.bubbleEvent(TD.components.BaseModal.CLOSE_EVENT), new TD.components.ListMembers(e)
        }))
    },
    destroy: function () {
        this.column && this.column.temporary && TD.controller.columnManager.removeFromAppLayer(this.column.model.getKey()), this.$node.remove()
    }
}), TD.components.ScheduledDatePicker = TD.components.Base.extend(function (e) {
    var t = this;
    this.$node = $(TD.ui.template.render("compose/schedule")), e.append(this.$node), this.$minutes = $("#scheduled-minute"), this.$hours = $("#scheduled-hour"), this.$datepicker = $("#datepicker"), this.$nextMonth = $("#next-month"), this.$prevMonth = $("#prev-month"), this.$removeDate = $(".js-remove", this.$node), this.$amToggle = $("#amPm"), this.$hours.bind("change", function () {
        t._refreshDate(), t.publishDateChanged()
    }), this.$minutes.bind("change", function () {
        t._refreshDate(), t.publishDateChanged()
    }), this.$datepicker = this.$datepicker.dateinput({
        onHide: function () {
            return !1
        },
        change: function () {
            t._refreshDate(), t.publishDateChanged()
        },
        min: -1
    }), t.datePickerData = this.$datepicker.data("dateinput").show(), this.$nextMonth.bind("click", function () {
        t.datePickerData.addMonth(1)
    }), this.$prevMonth.bind("click", function () {
        t.datePickerData.addMonth(-1)
    }), this.$removeDate.bind("click", function () {
        t.publishRemoval()
    }), this.$amToggle.bind("click", function () {
        var e = $(this),
            i = e.data("value");
        t._setAmPm(!i)
    }), this.$minutes.bind("change", function () {
        var e = $(this);
        e.val(("00" + e.val()).slice(-2))
    }), t.setDate(new Date)
}).methods({
    _refreshDate: function () {
        var e = this.datePickerData.getValue(),
            t = this.$amToggle.data("value"),
            i = Number(this.$hours.val()) % 12;
        t ? e.setHours(i + 12) : e.setHours(i), e.setMinutes(Number(this.$minutes.val())), this.date = e
    },
    _setAmPm: function (e) {
        e ? (this.$amToggle.text(TD.i("PM")), this.$amToggle.data("value", !0)) : (this.$amToggle.text(TD.i("AM")), this.$amToggle.data("value", !1)), this._refreshDate(), this.publishDateChanged()
    },
    setDate: function (e) {
        if (e) {
            var t = e.getHours() % 12 || 12,
                i = e.getHours() > 11,
                s = (i ? TD.i("PM") : TD.i("AM"), e.getMinutes());
            this._setAmPm(i), this.datePickerData.setValue(e.getFullYear(), e.getMonth(), e.getDate()), this.$hours.val(t), this.$minutes.val(("00" + s).slice(-2))
        }
        this.date = e, this.publishDateChanged()
    },
    getDate: function () {
        return this.date
    },
    publishDateChanged: function (e) {
        $.publish("/change/date", [void 0 !== e ? e : this.getDate()])
    },
    publishRemoval: function () {
        this.date = null, this.publishDateChanged(null), $.publish("/removed/date")
    }
}), TD.components.LocationPicker = TD.components.Base.extend(function (e) {
    var t, i = this;
    return this.$node = $(TD.ui.template.render("compose/locations")), e.append(this.$node), this.$locationButton = e.find("button"), this.$locationList = this.$find(".js-location-list"), this.$locationSearchHolder = this.$find(".js-location-search"), this.$locationSearchBox = this.$find("#location-search").keyup(function (e) {
        switch (e.keyCode) {
        case TD.constants.keyCodes.enter:
            i.getPlaces(i.position, i.$locationSearchBox.val());
            break;
        case TD.constants.keyCodes.escape:
            i.hide()
        }
    }), this.$node.on("click", ".js-location-item", function (e) {
        i.setLocation(e.currentTarget)
    }), this.$removeLocation = this.$find(".js-location-remove").click(function () {
        i.removeLocation()
    }), t = TD.controller.clients.getClientsByService("twitter"), t.length ? (this.client = t[0], TD.util.getCurrentLocation(6e3, _.bind(this.getPlaces, this)), void 0) : (this.removeLocation(), void 0)
}).statics({
    SELECT: "td-select",
    canHazGeolocation: function () {
        return !1
    }
}).methods({
    getPlaces: function (e, t) {
        var i = e ? e.coords : {};
        this.position = e, t = t || "", this.client.geoSearch(t, i.latitude, i.longitude, i.accuracy, null, _.bind(this.showTwitterPlaces, this), _.bind(this.removeLocation, this))
    },
    showTwitterPlaces: function (e) {
        if (e && e.length > 0) {
            this.places = e;
            var t = $(TD.ui.template.render("compose/location_list_item", this));
            this.$locationList.find(".js-location-item").remove(), t.insertAfter(this.$locationSearchHolder)
        }
    },
    setTwitterPlace: function (e, t) {
        this.twitterPlaceID = e, this.twitterPlaceName = t
    },
    setLocation: function (e) {
        var t, i, s = $(e).data("place-id");
        for (t = 0; this.places.length > t; t++)
            if (i = this.places[t], i.id == s) {
                this.setTwitterPlace(i.id, i.full_name), this.$locationButton.addClass("set-content"), $("b", this.$locationButton).text(i.name), this.$node.trigger(TD.components.LocationPicker.SELECT), this.hide();
                break
            }
    },
    hide: function () {
        this.$node.hide()
    },
    removeLocation: function () {
        this.setTwitterPlace(null, null), this.$locationButton.removeClass("set-content"), this.$node.trigger(TD.components.LocationPicker.SELECT), this.hide(), TD.storage.store.set(":CACHED_PLACES", null)
    }
}), TD.components.DetailView = TD.components.Base.extend(function (e, t) {
    this.initialised = !1, this.column = e, this.$column = t, this.$detailContainer = $(".js-column-detail", this.$column), this.$columnsContainer = $("#container"), this.$column.on("click", ".js-column-back", this._handleHeaderClick.bind(this)), this._render(), this.$detailContainer.html(this.$node), this.column.temporary || this.$node.trigger("uiCloseModal"), this.$holder = $(".js-detail-container", this.$column), this.$header = $(".js-column-header", this.$column), TD.ui.columns.refreshTitle(this.column)
}).statics({
    RETWEETER_COUNT: 8
}).methods({
    _render: function () {
        throw "DetailView._render not implemented"
    },
    _handleHeaderClick: function () {
        this.destroy()
    },
    changed: function () {},
    deleted: function (e) {
        e.id === this.chirp.id && this.destroy()
    },
    destroy: function (e) {
        var t = this.supr.bind(this);
        this.$column.off("click", ".js-column-back"), this.$column.trigger("uiDetailViewClosed", {
            column: this.column
        }), TD.ui.main.TRANSITION_END_EVENTS ? this.$column.one(TD.ui.main.TRANSITION_END_EVENTS, function () {
            e && e(), t()
        }) : (e && e(), this.supr())
    }
}), TD.components.TweetDetailView = TD.components.DetailView.extend(function () {}).statics({
    CARD_CONTAINER: ".js-cards-container",
    MEDIA_CONTAINER: ".js-tweet-media",
    TWEET_STAT: ".js-tweet-stat"
}).methods({
    _render: function () {
        this.$node = $(TD.ui.template.render("status/tweet_detail_wrapper", {
            headerClass: "js-detail-header",
            headerAction: "resetToTopColumn",
            headerLinkClass: "js-column-back"
        }))
    },
    showChirp: function (e, t) {
        if (this.parentChirp = t, this._showChirp(e), !e.cards && e.entities && e.entities.urls && e.entities.urls.length) {
            var i = TD.controller.clients.getClient(e.account.getKey());
            i.show(e.id, _.bind(this._showCardsForChirp, this), _.bind(this._chirpRetrievalError, this))
        } else this._showCardsForChirp(e)
    },
    _showCardsForChirp: function (e) {
        var t = TD.settings.getDisplaySensitiveMedia();
        if (e.cards) {
            e.cards.isPossiblySensitive = e.possiblySensitive && !t;
            var i = TD.ui.template.render("cards/card_layouts", e.cards);
            this.$find(TD.components.TweetDetailView.CARD_CONTAINER).html(i)
        }
        this.showMedia(e)
    },
    showMedia: function (e) {
        if (e.getMedia()) {
            var t = TD.settings.getDisplaySensitiveMedia(),
                i = e.possiblySensitive && !t;
            e.getMedia().forEach(function (e) {
                e.isPossiblySensitive = i
            });
            var s = TD.ui.template.render("status/tweet_detail_media", e);
            this.$find(TD.components.TweetDetailView.MEDIA_CONTAINER).html(s)
        }
    },
    _chirpRetrievalError: function () {},
    _showChirp: function (e) {
        this.chirp = e, this.$tweetDetail = $(TD.ui.template.render("status/tweet_detail", this.chirp.getMainTweet())), this.$find(".js-tweet-detail").html(this.$tweetDetail);
        var t = this.$find(".spn-loading"),
            i = this.$header,
            s = this.$tweetDetail.find(".js-translate-call-to-action"),
            n = this.column.getMediaPreviewSize();
        n !== TD.vo.Column.MEDIA_PREVIEW_OFF && (n = TD.vo.Column.MEDIA_PREVIEW_SIZE_SMALL), this.replies = new TD.components.InReplyTo(this.chirp, this.$detailContainer, n), this.retweeters = new TD.components.Retweeters(this.chirp, TD.components.DetailView.RETWEETER_COUNT), this.repliesTo = new TD.components.RepliesTo(this.chirp, n), this.$find(".js-inreplyto").replaceWith(this.replies.$node), this.$find(".js-tweet-stats").append(this.retweeters.$node), this.$find(".js-tweet-replies").append(this.repliesTo.$node), this._boundShowSocialProof = this.showSocialProof.bind(this), this.$column.on("click", TD.components.TweetDetailView.TWEET_STAT, this._boundShowSocialProof), this.replies.$node.bind(TD.components.InReplyTo.BEGIN, function () {
            t.show()
        }), this.replies.$node.bind(TD.components.InReplyTo.END, function () {
            i.addClass("gradient-top"), t.hide()
        }), s.on("click", function () {
            this.chirp.translate()
        }.bind(this)), this.initialised = !0, this.$tweetDetail.trigger("uiDetailViewActive", {
            $chirp: this.$tweetDetail,
            chirp: this.chirp,
            parentChirp: this.parentChirp
        })
    },
    showSocialProof: function (e) {
        var t = $(e.target).closest(TD.components.TweetDetailView.TWEET_STAT).data("type");
        this.$column.trigger("uiShowSocialProof", {
            type: t,
            tweetSummary: this.retweeters.tweetSummary,
            $chirp: this.$tweetDetail,
            chirp: this.chirp,
            parentChirp: this.parentChirp
        })
    },
    destroy: function () {
        this.$column.off("click", this._boundShowSocialProof);
        var e = function () {
            this.initialised && (this.replies.destroy(), this.retweeters.destroy(), this.repliesTo.destroy())
        }.bind(this);
        this.supr(e)
    },
    findChirp: function (e) {
        return this.initialised ? this.replies.findChirp(e) || this.repliesTo.findChirp(e) : void 0
    },
    getMostInteresting$Chirp: function () {
        return this.$tweetDetail
    }
}), TD.components.MessageDetailView = TD.components.DetailView.extend(function () {}).methods({
    _render: function () {
        this.$node = $(TD.ui.template.render("status/message_wrapper", {
            headerClass: "js-detail-header",
            headerAction: "resetToTopColumn",
            headerLinkClass: "js-column-back"
        }))
    },
    showChirp: function (e, t) {
        var i;
        this.chirp = e, this.parentChirp = t, this.replyBar = new TD.components.ReplyBar(this.chirp), i = this.chirp.renderThread(), this.$find(".js-message-box").replaceWith(this.replyBar.$node), this.$find(".js-message-detail").html(i), this.initialised = !0, this.chirp.markAsRead(), this.$node.trigger("uiDetailViewActive", {
            $chirp: this.getMostInteresting$Chirp(),
            chirp: this.chirp,
            parentChirp: this.parentChirp
        })
    },
    changed: function (e) {
        if (this.initialised && e.id === this.chirp.id) {
            var t = e.renderThread();
            this.$find(".js-message-detail").html(t)
        }
    },
    findChirp: function (e) {
        return this.initialised ? this.chirp.messageIndex[e] : void 0
    },
    getMostInteresting$Chirp: function () {
        return this.$find(".js-message-detail .js-stream-item").first()
    },
    destroy: function () {
        var e = function () {
            this.initialised && (this.replyBar.destroy(), this.chirp.markAsRead())
        }.bind(this);
        this.supr(e)
    }
}), TD.components.ReplyBar = TD.components.Base.extend(function (e) {
    if (e && e.postComment) {
        var t = TD.ui.template.render("text/strong", {
            text: e.account.getUsername()
        }),
            i = {
                from: TD.i("From {{{1}}}", {
                    1: t
                })
            };
        switch (this._boundHandleGlobalKeydown = this._handleGlobalKeydown.bind(this), this._boundSend = this.send.bind(this), this.$node = $(TD.ui.template.render("status/tweet_detail_replybar", i)), this.chirp = e, this.$inputBox = this.$find(".js-reply-tweetbox"), this.$charCount = this.$find(".js-reply-charcount"), this.$sendButton = this.$find(".js-send"), e.account.getType()) {
        case "twitter":
            this.charLimit = 140
        }
        this.$sendButton.bind("click", this._boundSend), this._reset()
    }
}).statics({
    ACTIVITY_EVENTS: "click change focus blur input keydown keypress keyup mousedown mouseup paste",
    RESET_EVENT: "td-reset",
    REPLYING_EVENT: "td-replying",
    OVER_CHAR_COUNT_CLASS: "over-char-count"
}).methods({
    _updateCharCount: function () {
        var e = TD.ui.compose.getTextLength(this.$inputBox.val()),
            t = this.charLimit - e;
        0 > t || t === this.charLimit ? this.$sendButton.prop("disabled", !0) : this.$sendButton.prop("disabled", !1), 0 > t ? this.$charCount.addClass(TD.components.ReplyBar.OVER_CHAR_COUNT_CLASS) : this.$charCount.removeClass(TD.components.ReplyBar.OVER_CHAR_COUNT_CLASS), this.$charCount.val(t)
    },
    _reset: function () {
        var e = "";
        if (this.chirp instanceof TD.services.TwitterStatus) {
            var t = this.chirp.getMainTweet();
            e = TD.i("Reply to @{{1}}", {
                1: t.user.screenName
            })
        } else this.chirp instanceof TD.services.TwitterMessageThread && (e = TD.i("Message @{{1}}", {
            1: this.chirp.correspondent.screenName
        }));
        this.$node.removeClass("s-replying"), this.$inputBox.val(e), this.$inputBox.blur().prop("disabled", !1), this.$sendButton.prop("disabled", !1), this.$inputBox.bind(TD.components.ReplyBar.ACTIVITY_EVENTS, _.bind(this._handleActivity, this)), this.bubbleEvent(TD.components.ReplyBar.RESET_EVENT, null), $(window).unbind("keydown", this._boundHandleGlobalKeydown)
    },
    _handleActivity: function () {
        var e = this;
        this.$inputBox.unbind(), e.bubbleEvent(TD.components.ReplyBar.REPLYING_EVENT, null), this.$node.addClass("s-replying");
        var t = "",
            i = [];
        this.chirp instanceof TD.services.TwitterStatus && (i = TD.util.getReplyUsers(this.chirp)), i.length > 0 && (t = i.join(" ") + " "), this.$inputBox.val(t), this._updateCharCount();
        var s = t.length,
            n = t.length;
        i.length > 0 && (s = i[0].length + 1), this.$inputBox.bind("keydown change", _.bind(this._handleKeydown, this)), _.defer(function () {
            e.$inputBox[0].setSelectionRange(s, n)
        }), this.$inputBox.bind("cut paste", _.bind(this._handleCutPaste, this)), this.$inputBox.bind("keyup", _.bind(this._updateCharCount, this))
    },
    _handleCutPaste: function () {
        _.defer(_.bind(this._updateCharCount, this))
    },
    _handleGlobalKeydown: function (e) {
        e.which === TD.constants.keyCodes.escape && this._reset()
    },
    _handleKeydown: function (e) {
        switch (this._updateCharCount(), e.charCode || e.keyCode) {
        case 10:
        case 13:
            (e.ctrlKey || e.metaKey) && (e.preventDefault(), this.send());
            break;
        case TD.constants.keyCodes.escape:
            this.$inputBox.blur(), $(window).bind("keydown", this._boundHandleGlobalKeydown)
        }
    },
    send: function () {
        var e = this.$inputBox.val(),
            t = this;
        e && (this.$sendButton.prop("disabled", !0), this.$inputBox.prop("disabled", !0), this.$inputBox.blur(), this.chirp.postComment(e, function () {
            t._reset()
        }, function () {
            t.$sendButton.prop("disabled", !1), t.$inputBox.prop("disabled", !1), t.$inputBox.focus()
        }))
    }
}), TD.components.MediaGallery = TD.components.BaseModal.extend(function (e, t, i) {
    var s = this;
    this.tweet = e, this.column = i, this.clickedLink = t, this.originalLinkHeight = 26, this.$node = $(TD.ui.template.render("media/media_gallery")), this.$closeButton = this.$find(".js-dismiss"), this.$prevButton = this.$find("#media-gallery-prev"), this.$nextButton = this.$find("#media-gallery-next"), this.$embed = this.$find(".js-mediaembed"), this.$tweet = this.$find(".med-tweet"), this.$mainframe = this.$find(".js-embeditem"), this._sizeMedia = this._sizeMedia.bind(this), this.sizeMediaInterval = setInterval(this._sizeMedia, 300), this.$closeButton.bind("click", function () {
        s.destroy()
    }), this.$prevButton.bind("click", function () {
        s._prev()
    }), this.$nextButton.bind("click", function () {
        s._next()
    }), this._loadTweet(), this.showInModal(), e.hasMedia() || e.cards ? (this.media = e.getMedia().concat(e.getCardsForGallery()), this._setupEmbeds()) : (TD.util.openURL(t), this.destroy())
}).statics({
    MEDIA_FLAG_NSFW: ".js-media-flag-nsfw",
    MEDIA_FLAGGED_NSFW: ".js-media-flagged-nsfw",
    HIDDEN_CLASS: "is-hidden"
}).methods({
    showInModal: function () {
        var e = $("#open-modal");
        e.append(this.$node).show()
    },
    _prev: function () {
        var e = _.indexOf(this.media, this.currentMedia);
        0 === e && (e = this.embeds.length), this.currentMedia = this.embeds[e - 1], this._renderEmbed()
    },
    _next: function () {
        var e = _.indexOf(this.media, this.currentMedia);
        e == this.media.length - 1 && (e = -1), this.currentMedia = this.media[e + 1], this._renderEmbed()
    },
    _setupEmbeds: function () {
        if (this.media && 0 !== this.media.length) {
            var e = this;
            this.currentMedia = this.media[0], this.clickedLink && _.each(this.media, function (t) {
                t.url === e.clickedLink && (e.currentMedia = t)
            }), this._renderEmbed()
        }
    },
    _loadTweet: function () {
        var e = this;
        this.$tweet.append(this.tweet.renderInMediaGallery()), this.$tweet.bind("click", function (t) {
            $.publish("chirp/click", [t, e.tweet, e.column])
        })
    },
    _sizeMedia: function () {
        var e = $("img", this.$mainframe),
            t = this.tweet.translation ? this.$tweet.height() + this.originalLinkHeight : this.originalLinkHeight;
        e.css({
            "max-width": this.$mainframe.width(),
            "max-height": this.$mainframe.height() - t + "px"
        })
    },
    _fadeIn: function () {
        this.$mainframe.addClass("is-loaded"), this.$embed.fadeTo("fast", 1)
    },
    _renderEmbed: function () {
        var e, t = this.currentMedia;
        if (t instanceof TD.services.TwitterCard && t.shouldDisable()) return TD.util.openURL(t.url), this.destroy(), void 0;
        e = t.renderGallery(), this.$embed.html(e), this.$embed.append(TD.ui.template.render("text/gallery_original_link", t)), this.$embed.append(TD.ui.template.render("text/gallery_flag_media", {
            flagged: t.flaggedNSFW
        }));
        var i = $("img", this.$embed);
        0 === i.length ? _.delay(function () {
            this._fadeIn(), this._sizeMedia()
        }.bind(this), 1e3) : i.load(function () {
            i.attr("data-maxwidth", i.width()), i.attr("data-maxheight", i.height()), this._sizeMedia(), this._fadeIn()
        }.bind(this)), this.$find(TD.components.MediaGallery.MEDIA_FLAG_NSFW).click(function () {
            var e;
            t.flaggedNSFW = !0, this.$find(TD.components.MediaGallery.MEDIA_FLAG_NSFW).addClass(TD.components.MediaGallery.HIDDEN_CLASS), this.$find(TD.components.MediaGallery.MEDIA_FLAGGED_NSFW).removeClass(TD.components.MediaGallery.HIDDEN_CLASS), e = TD.controller.clients.getClient(this.tweet.account.getKey()), e.flagTweet(this.tweet.id, function () {}, function () {
                var e = TD.i("Problem flagging media. Please try again");
                TD.controller.progressIndicator.addMessage(e), this.$find(TD.components.MediaGallery.MEDIA_FLAG_NSFW).removeClass(TD.components.MediaGallery.HIDDEN_CLASS), this.$find(TD.components.MediaGallery.MEDIA_FLAGGED_NSFW).addClass(TD.components.MediaGallery.HIDDEN_CLASS)
            })
        }.bind(this)), this.media.length > 1 ? (this.$prevButton.removeClass(TD.components.MediaGallery.HIDDEN_CLASS), this.$nextButton.removeClass(TD.components.MediaGallery.HIDDEN_CLASS), this.$mainframe.addClass("s-shorter"), this.$tweet.find(".js-media").show()) : (this.$prevButton.addClass(TD.components.MediaGallery.HIDDEN_CLASS), this.$nextButton.addClass(TD.components.MediaGallery.HIDDEN_CLASS), this.$tweet.find(".js-media").hide())
    },
    destroy: function () {
        $("#open-modal").hide(), clearInterval(this.sizeMediaInterval), this.supr()
    }
}), TD.components.AccountSelector = TD.components.Base.extend(function () {
    var e = this;
    this.$node = $.createElement("ul").addClass("accs cf js-account-selector"), this.cachedSelectedAccounts = [], this.accountIndex = {}, this.refreshPostingAccounts(), this.$node.on("click", ".js-account-item", function (t) {
        var i = $(t.currentTarget);
        t.stopPropagation(), t.shiftKey ? ($("li", e.$node).removeClass(TD.components.AccountSelector.SELECTED_CLASS), i.addClass(TD.components.AccountSelector.SELECTED_CLASS)) : i.toggleClass(TD.components.AccountSelector.SELECTED_CLASS), e.updateSelectedAccounts()
    }), this.subscription = $.subscribe("/storage/client/account_whitelist_changed", _.bind(this.refreshPostingAccounts, this))
}).statics({
    CHANGE: "td-accounts-change",
    SELECTED_CLASS: "acc-selected"
}).methods({
    refreshPostingAccounts: function () {
        var e, t, i, s, n = TD.storage.accountController.getPostingAccounts(),
            r = [];
        for (this.accountIndex = {}, e = 0; n.length > e; e++) t = n[e], i = t.getKey(), r.push(i), this.accountIndex[i] = {
            account: i,
            uid: i,
            type: "account",
            username: t.getUsername(),
            service: t.getType(),
            picture: t.getProfileImageURL()
        };
        var o = function (e, t, i) {
            var s = {
                accounts: [],
                show_acc_toggle: i
            };
            return s.accounts = _.map(e, function (e) {
                return t[e]
            }), s
        };
        r.length && (s = TD.ui.template.render("compose/accounts", o(r, this.accountIndex, !0)), this.$node.html(s))
    },
    getSelectedAccounts: function () {
        var e, t, i = [];
        if (this.cachedSelectedAccounts) return this.cachedSelectedAccounts.concat();
        e = $("." + TD.components.AccountSelector.SELECTED_CLASS, this.$node);
        for (var s = 0; e.length > s; s++) t = e[s].attributes["data-id"].value, i.push(this.accountIndex[t]);
        return this.cachedSelectedAccounts = i, i
    },
    selectAccounts: function (e) {
        var t, i = this.$node.find(".js-account-item");
        if (_.isArray(e) && (i.removeClass(TD.components.AccountSelector.SELECTED_CLASS), e && e.length)) {
            for (t = 0; e.length > t; t++) e[t] && i.filter("li[data-id='" + e[t] + "']").addClass(TD.components.AccountSelector.SELECTED_CLASS);
            this.updateSelectedAccounts()
        }
    },
    selectDefaultAccount: function () {
        var e = TD.storage.accountController.getDefault();
        e && this.selectAccounts([e.getKey()])
    },
    updateSelectedAccounts: function () {
        this.cachedSelectedAccounts = null, this.getSelectedAccounts(), this.$node.trigger(TD.components.AccountSelector.CHANGE)
    },
    destroy: function () {
        $.unsubscribe(this.subscription), this.$node.off("click", ".js-account-item"), this.supr()
    }
}), TD.components.FollowDialog = TD.components.BaseModal.extend(function (e) {
    var t = this;
    this.$node.removeClass("s-tall-fixed").addClass("s-fluid s-nonav cmp"), this.$find(".js-header-title").html(TD.i("Your relationship to {{>text/user_link_screenname}}", e)), this.$followFromAccountHolder = this.$find(".js-mdl-content"), this.$followFromAccountHolder.removeClass("horizontal-flow-container"), $("#actions-modal").html(this.$node);
    var i = TD.storage.accountController.getAccountsForService("twitter");
    $(".js-dismiss", this.$node).click(_.bind(this.destroy, this)), this.followAccounts = [], _.each(i, function (i) {
        if (i.getUserID() != e.id) {
            var s = new TD.components.FollowFrom(e, i);
            t.followAccounts.push(s), t.$followFromAccountHolder.append(s.$node)
        }
    }), $("#actions-modal").show()
}).methods({
    destroy: function (e) {
        this.$node.remove(), $("#actions-modal").hide(), e && e.preventDefault()
    }
}), TD.components.FollowFrom = TD.components.Base.extend(function (e, t, i) {
    var s = this;
    this.userToFollow = e, this.account = t, this.showAccountMenu = i, this.isSingleAccount = 1 === TD.storage.accountController.getAccountsForService("twitter").length, this.client = TD.controller.clients.getClient(t.getKey()), this.$node = $(TD.ui.template.render("actions/follow_from", this)), this.$followButton = this.$find(".js-follow-button").click(_.bind(this.handleClick, s)), this.$followButtonHolder = this.$find(".js-action-follow"), this.state = "stranger", i && (this.$profileMenuButton = this.$find(".js-profile-menu").click(_.bind(this._handleProfileMenuButtonClick, this))), t.getUserID() == e.id ? (this.state = "me", this.updateButtonState()) : this.client.showFriendship(t.getUserID(), e.id, null, _.bind(this.handleFollowInfoResponse, this), _.bind(this.handleFollowInfoError, this)), this.subscriptions = [$.subscribe("/user/" + this.userToFollow.screenName + "/block", _.bind(this._handleBlock, this)), $.subscribe("/user/" + this.userToFollow.screenName + "/blocked", _.bind(this._handleBlock, this))]
}).methods({
    _handleProfileMenuButtonClick: function (e) {
        this.profileMenu && this.profileMenu.$node || (this.profileMenu = new TD.components.ProfileMenu(this.$profileMenuButton, TD.components.DropDown.POSITION_LEFT, this.userToFollow), e.stopPropagation())
    },
    _handleBlock: function (e) {
        e.getKey() === this.account.getKey() && (this.state = "blocked", this.updateButtonState())
    },
    handleFollowInfoResponse: function (e) {
        this.state = e.relationship.source.blocking === !0 ? "blocked" : e.relationship.source.following === !0 ? "following" : "stranger", this.updateButtonState()
    },
    handleFollowInfoError: function () {
        this.following = !1, this.blocking = !1, this.updateButtonState()
    },
    handleClick: function () {
        var e = this.account;
        if (!this.$followButton.prop("disabled")) {
            switch (this.state) {
            case "me":
                TD.util.openURL("https://twitter.com/settings/profile");
                break;
            case "blocked":
                this.userToFollow.unblock(e, null, _.bind(this.unblockError, this)), this.state = "stranger";
                break;
            case "pending":
            case "following":
                this.userToFollow.unfollow(e, null, _.bind(this.unfollowError, this)), this.state = "stranger";
                break;
            case "stranger":
                this.userToFollow.follow(e, _.bind(this.followResponse, this), _.bind(this.followError, this)), this.state = "following"
            }
            this.updateButtonState()
        }
    },
    followError: function () {
        this.state = "stranger", this.updateButtonState()
    },
    unfollowError: function () {
        this.state = "following", this.updateButtonState()
    },
    unblockError: function () {
        this.state = "blocked", this.updateButtonState()
    },
    followResponse: function (e) {
        e.isProtected && (this.state = "pending", this.updateButtonState())
    },
    updateButtonState: function () {
        switch (this.$followButton.prop("disabled", !1), this.$followButtonHolder.removeClass("s-not-following s-following s-pending s-blocking"), this.state) {
        case "me":
            this.$followButtonHolder.addClass("s-thats-you");
            break;
        case "blocked":
            this.$followButtonHolder.addClass("s-blocking");
            break;
        case "pending":
            this.$followButtonHolder.addClass("s-pending");
            break;
        case "following":
            this.$followButtonHolder.addClass("s-following");
            break;
        case "stranger":
            this.$followButtonHolder.addClass("s-not-following")
        }
    },
    destroy: function () {
        _.each(this.subscriptions, function (e) {
            $.unsubscribe(e)
        }), this.supr()
    }
}), TD.components.AddToListsDialog = TD.components.BaseModal.extend(function (e) {
    var t = this,
        i = TD.storage.accountController.getAccountsForService("twitter");
    this.myLists = [], this.userToAdd = e, _.each(i, function (i) {
        var s = TD.controller.clients.getClient(i.getKey());
        _.each(TD.cache.lists.getListsFor(i.getKey()), function (e) {
            e.user.id == i.getUserID() && t.myLists.push(e)
        }), s.getListMemberships(e.screenName, !0, function (e) {
            _.each(e, function (e) {
                t.$find("#" + e.id).attr("checked", "checked")
            })
        })
    }), this.$node.removeClass("s-tall-fixed").addClass("s-fluid cmp"), this.$find(".js-header-title").text(TD.i("Your lists")).after(" " + TD.i("Include {{>text/user_link_screenname}} in:", e)), this.$find(".js-mdl-content").html(TD.ui.template.render("actions/add_to_list_dialog", this)).addClass("with-scroll scroll-v scroll-alt").toggleClass("scroll-styled-v", TD.globalRenderOptions.styledScrollbar), this.$listCheckboxes = this.$find(".js-mdl-content input").click(_.bind(this._changeSubscription, this)), this.$find(".mdl-buttonbar").html(TD.ui.template.render("actions/add_to_list_footer")), this.$createListButton = this.$find(".js-create-list"), $(".js-dismiss", this.$node).click(_.bind(this.destroy, this)), this.$createListButton.click(_.bind(this._createList, this)), $("#actions-modal").html(this.$node).show()
}).methods({
    _changeSubscription: function (e) {
        var t = $(e.target),
            i = t.attr("id"),
            s = "checked" === t.attr("checked"),
            n = t.attr("data-account"),
            r = TD.controller.clients.getClient(n),
            o = TD.storage.Feed.generateKeyFor(n, "list", {
                listId: i
            }),
            a = TD.controller.feedManager.getPoller(o),
            c = this;
        s ? r.addUserToList(i, this.userToAdd.screenName, function () {
            a && _.delay(function () {
                a.refresh(!0, !0)
            }, 1e3)
        }) : r.removeUserFromList(i, this.userToAdd.screenName, function () {
            a && a.removeWhere(function (e) {
                return c.userToAdd.id == e.user.id
            })
        })
    },
    _createList: function () {
        this.destroy();
        var e = new TD.components.ListDetails;
        e.autoAddMember(this.userToAdd)
    },
    destroy: function (e) {
        this.$node.remove(), $("#actions-modal").hide(), e && e.preventDefault()
    }
}), TD.components.ActionDialog = TD.components.BaseModal.extend(function (e) {
    var t = this;
    this.tweet = e, this.$node.removeClass("js-modal-panel s-tall-fixed").addClass("cmp s-fluid s-inreply l-no-txtarea"), this.$find(".mdl-inner").replaceWith($(TD.ui.template.render("actions/action_dialog", {
        isProtected: e.user.isProtected
    }))), this.$inreplyToHolder = this.$find(".js-inreply"), this.header = new TD.components.ActionHeader, this.header.$node.bind(TD.components.ActionHeader.CLOSE, function () {
        t.destroy()
    }), this.$find(".mdl-header").prepend(this.header.$node), this.$buttons = this.$find(".js-action-button"), this.$buttons.click(this._handleClick.bind(this)), this._boundRetweet = this._retweet.bind(this), $(document).on("uiSendRetweetAction", this._boundRetweet), this.displayTweet(e), this.header.accountSelector.selectAccounts([e.account.getKey()]), $("#actions-modal").html(this.$node).show()
}).methods({
    displayTweet: function (e) {
        var t = e;
        t && (t.withAvatar = !0, this.$inreplyToHolder.html(TD.ui.template.render("status/tweet_single", t)).show())
    },
    _quote: function () {
        var e = this.header.accountSelector.getSelectedAccounts(),
            t = e.map(function (e) {
                return e.account
            });
        TD.ui.compose.showComposeWindow(this.tweet.getMainTweet().getQuoteText(), t, void 0, void 0, void 0, !0), TD.ui.compose.selectAccounts(t)
    },
    _retweetFromAccount: function (e) {
        var t = TD.controller.clients.getClient(e.account),
            i = t.create();
        this.$buttons.prop("disabled", !0), i.Retweet(this.tweet.id), i.post(this._handleRetweeted.bind(this), this._handleRetweetFailure.bind(this))
    },
    _retweet: function () {
        var e = this.header.accountSelector.getSelectedAccounts();
        e.forEach(this._retweetFromAccount, this)
    },
    _handleClick: function (e) {
        var t = $(e.target),
            i = t.data("action");
        switch (i) {
        case "quote":
            this._quote(), this.destroy();
            break;
        case "retweet":
            this._retweet()
        }
    },
    _handleRetweeted: function () {
        this.tweet.setRetweeted(!0), this.destroy()
    },
    _handleRetweetFailure: function (e) {
        var t = TD.i("Failed: Retweet");
        e.errors && e.errors.forEach(function (e) {
            t += " - " + e.message
        }), TD.controller.progressIndicator.addMessage(t), this.$buttons.prop("disabled", !1)
    },
    destroy: function () {
        $(document).off("uiSendRetweetAction", this._boundRetweet), $("#actions-modal").hide(), this.header.destroy(), this.supr()
    }
}), TD.components.ActionHeader = TD.components.Base.extend(function () {
    var e = this;
    this.accountsVisible = !1, this.$node = $.createElement("div"), this.$node.append($(TD.ui.template.render("actions/action_header"))), this.accountSelector = new TD.components.AccountSelector, this.$node.append(this.accountSelector.$node), this.$composeUsernames = this.$find("h3"), this.$actionText = this.$find("span"), this.$showAccountsToggle = this.$find(".js-accounts-toggle"), this.$showAccountsToggle.click(_.bind(this.toggleAccountsVisibility, this)), this.accountSelector.$node.bind(TD.components.AccountSelector.CHANGE, function () {
        var t = _.map(e.accountSelector.getSelectedAccounts(), function (e) {
            return e.username
        }),
            i = TD.i("From {{accounts}}", {
                accounts: t.join(", ")
            });
        e.$composeUsernames.text(i)
    }), this.accountSelector.selectDefaultAccount(), this.toggleAccountsVisibility()
}).statics({
    CHANGE: "td-accounts-change",
    CLOSE: "td-dialog-close"
}).methods({
    toggleAccountsVisibility: function () {
        this.accountsVisible ? (this.$actionText.text(TD.i("Change")), this.accountSelector.hide()) : (this.$actionText.text(TD.i("Hide")), this.accountSelector.show()), this.accountsVisible = !this.accountsVisible
    },
    destroy: function () {
        this.accountSelector.destroy(), this.supr()
    }
}), TD.components.GlobalSettings = TD.components.BaseModal.extend(function () {
    var e = TD.storage.accountController.isEmpty() ? "accounts" : "general",
        t = {
            tabs: [{
                title: TD.i("General"),
                action: "general"
            }, {
                title: TD.i("Accounts"),
                action: "accounts"
            }, {
                title: TD.i("Services"),
                action: "services"
            }, {
                title: TD.i("Mute"),
                action: "filter"
            }]
        };
    this.$find(".js-header-title").text(TD.i("Settings")), this.$node.removeClass("s-tall-fixed").addClass("s-short s-nonav"), this.$find(".js-mdl-content").html(TD.ui.template.render("settings/global_settings_modal", t)), this.$optionList = this.$find(".js-setting-list li"), $("#settings-modal").append(this.$node), $(".js-dismiss", this.$node).click(_.bind(this.destroy, this)), $("a.list-link", this.$node).click(function (e) {
        var t = $(e.currentTarget),
            i = t.data("action");
        this.switchTab(i)
    }.bind(this)), this.switchTab(e), $("#settings-modal").show()
}).methods({
    switchTab: function (e) {
        if (e !== this.currentTabName) {
            switch (this.$optionList.removeClass("selected"), this.currentTab && this.currentTab.destroy(), e) {
            case "general":
                this.currentTab = new TD.components.GeneralSettings;
                break;
            case "accounts":
                this.currentTab = new TD.components.AccountSettings;
                break;
            case "services":
                this.currentTab = new TD.components.ServicesSettings;
                break;
            case "filter":
                this.currentTab = new TD.components.FilterSettings
            }
            this.currentTabName = e, this.$optionList.find("[data-action=" + e + "]").parent("li").addClass("selected")
        }
    },
    destroy: function (e) {
        this.currentTab && this.currentTab.destroy(), $("#settings-modal").hide(), e && e.preventDefault(), this.supr()
    }
}), TD.components.AccountSettings = TD.components.Base.extend(function () {
    this.$node = $(TD.ui.template.render("settings/global_setting_account")), $("#global-settings").append(this.$node), this.$accountHolder = $(".js-account-container"), this.$resetPasswordButton = $(".js-reset-password"), this.$resetPasswordButton.click(this.handleResetPassword.bind(this)), this.$resetPasswordErrorMessage = this.$find(".js-reset-error"), this.$resetPasswordSuccessMessage = this.$find(".js-reset-success"), this.$resetProgressSpinner = this.$find(".js-reset-progress"), this.boundRefreshAccounts = this.refreshAccounts.bind(this), this.subscriptions = [$.subscribe("/storage/account/new", this.boundRefreshAccounts), $.subscribe("/storage/account/blacklisted", this.boundRefreshAccounts), $.subscribe("/storage/client/default_account_changed", this.setDefaultAccount.bind(this))], this.refreshAccounts(), $(".js-add-account").on("click", this.handleAddAccount.bind(this)), this.$node.on("click", ".js-remove-account", this.handleRemoveAccount.bind(this)), this.$node.on("click", ".js-set-default", this.handleSetDefaultClick.bind(this))
}).methods({
    handleRemoveAccount: function (e) {
        var t = $(e.target),
            i = t.data("account"),
            s = _.uniqueId(),
            n = {
                id: s,
                title: TD.i("Removing account!"),
                message: TD.i("Are you sure you want to remove account '{{1}}' from TweetDeck?", {
                    1: TD.storage.accountController.get(i).getUsername()
                }),
                okLabel: TD.i("Remove"),
                cancelLabel: TD.i("Cancel")
            }, r = function (e, t) {
                t.id === s && ($(document).off("uiConfirmationAction", r), t.result && TD.controller.clients.removeClient(i))
            };
        $(document).on("uiConfirmationAction", r).trigger("uiShowConfirmationDialog", n)
    },
    handleAddAccount: function (e) {
        var t = $(e.target);
        TD.controller.clients.addClient(t.data("service"))
    },
    handleSetDefaultClick: function (e) {
        var t = $(e.target),
            i = t.data("account");
        i && TD.storage.accountController.setDefault(i)
    },
    refreshAccounts: function () {
        var e = TD.storage.accountController.getAccountsForService("twitter"),
            t = "";
        t += TD.ui.template.render("settings/global_setting_account_row", {
            accounts: e,
            isTwitter: !0
        }), this.$accountHolder.html(t), this.setDefaultAccount()
    },
    setDefaultAccount: function () {
        var e = TD.storage.accountController.getDefault();
        if (e) {
            var t = $(".js-is-default-account"),
                i = $(".js-set-default");
            t.addClass("is-hidden"), i.removeClass("is-hidden"), t.filter('[data-account="' + e.getKey() + '"]').removeClass("is-hidden"), i.filter('[data-account="' + e.getKey() + '"]').addClass("is-hidden")
        }
    },
    destroy: function () {
        this.$node.remove(), $(".js-remove-account").off("click"), $(".js-add-account").off("click"), $(".js-set-default").off("click"), _.each(this.subscriptions, function (e) {
            $.unsubscribe(e)
        })
    },
    handleResetPassword: function () {
        var e, t;
        this.$resetPasswordButton.prop("disabled", !0), this.$resetPasswordErrorMessage.addClass("is-hidden"), this.$resetProgressSpinner.removeClass("is-hidden"), t = TD.storage.store.getTweetdeckAccount(), e = TD.controller.clients.getTDClient().forgotPassword(t), e.addCallbackWith(this, function () {
            this.$resetPasswordSuccessMessage.removeClass("is-hidden"), this.$resetPasswordErrorMessage.addClass("is-hidden"), this.$resetProgressSpinner.addClass("is-hidden")
        }), e.addErrbackWith(this, function () {
            this.$resetPasswordErrorMessage.removeClass("is-hidden"), this.$resetProgressSpinner.addClass("is-hidden"), this.$resetPasswordButton.prop("disabled", !1)
        })
    }
}), TD.components.FilterSettings = TD.components.Base.extend(function () {
    this.$globalSettings = $("#global-settings"), this.$globalSettings.submit(_.bind(this.handleAddFilter, this)), this.$node = $(TD.ui.template.render("settings/global_setting_filter", {})), this.$globalSettings.append(this.$node), this.$filterHolder = $("#filter-results"), this.$node.on("click", ".js-remove-filter", _.bind(this.handleRemoveFilter, this)), this.$addFilterInput = $("#filter-input"), this.$addFilterInput.keyup(_.bind(this._validateFilter, this)), this.$filterTypes = $("#filter-types"), this.$filterTypes.change(_.bind(this.handleFilterTypeChange, this)), this.$addFilterButton = $("#add-filter"), this.$addFilterButton.click(_.bind(this.handleAddFilter, this)), this.handleFilterTypeChange(), this.refreshFilters()
}).methods({
    _validateFilter: function () {
        var e = this.$filterTypes.val(),
            t = this.$addFilterInput.val(),
            i = TD.controller.filterManager.validateFilter(e, t);
        return i ? this.$addFilterButton.removeAttr("disabled") : this.$addFilterButton.attr("disabled", "disabled"), i
    },
    handleAddFilter: function (e) {
        if (e.preventDefault(), this._validateFilter()) {
            var t = this.$filterTypes.val(),
                i = this.$addFilterInput.val();
            TD.controller.filterManager.addFilter(t, i), this.refreshFilters(), this.$addFilterInput.val("")
        }
    },
    handleRemoveFilter: function (e) {
        var t = $(e.target);
        TD.controller.filterManager.removeFilter(t.data("id")), this.refreshFilters()
    },
    handleFilterTypeChange: function () {
        var e, t = this.$filterTypes.val();
        switch (t) {
        case TD.vo.Filter.PHRASE:
            e = TD.i("eg iPad");
            break;
        case TD.vo.Filter.SENDER:
            e = TD.i("eg @JohnDoe123");
            break;
        case TD.vo.Filter.SOURCE:
            e = TD.i("eg TweetSpamApp")
        }
        this.$addFilterInput.attr("placeholder", e), this._validateFilter()
    },
    refreshFilters: function () {
        var e = TD.controller.filterManager.getAll(),
            t = "";
        _.each(e, function (e) {
            t += TD.ui.template.render("settings/global_setting_filter_row", e)
        }), this.$filterHolder.html(t), this._validateFilter()
    },
    destroy: function () {
        this.$node.off("click", ".js-remove-filter"), this.$globalSettings.unbind("submit"), this.$node.remove()
    }
}), TD.components.ServicesSettings = TD.components.Base.extend(function () {
    this.$node = $(TD.ui.template.render("settings/global_setting_services", {}));
    var e = TD.storage.accountController.getAccountsForService("bitly");
    e.length > 0 && (this.bitlyAccount = e[0]), $("#global-settings").append(this.$node), this.$bitlyForm = $("#bitly-form"), this.$bitlyUsername = $("#bitly-email"), this.$bitlyKey = $("#bitly-key"), this.$linkShorteners = $("#link-shortening"), this.$linkShorteners.change(_.bind(this.handleLinkShortenerChange, this)), this.setLinkShortener()
}).methods({
    handleLinkShortenerChange: function () {
        var e = this.$linkShorteners.val();
        e = e.split("-")[1], TD.settings.setLinkShortener(e), this.setLinkShortener()
    },
    setLinkShortener: function () {
        var e = TD.settings.getLinkShortener();
        this.$linkShorteners.val("link-" + e), "bitly" == e ? (this.$bitlyForm.show(), this.bitlyAccount && (this.$bitlyUsername.val(this.bitlyAccount.getUserID()), this.$bitlyKey.val(this.bitlyAccount.getOAuthToken()))) : this.$bitlyForm.hide()
    },
    commitBitlyChanges: function (e, t) {
        var i = this.$bitlyUsername.val(),
            s = this.$bitlyKey.val();
        return e && t && TD.storage.accountController.blacklistAccount(e), !e || t ? (e = new TD.storage.Account, e.setType("bitly"), e.setOAuthToken(s), e.setUserID(i), e.computeKey(), TD.storage.accountController.manage(e), void 0) : (e.setOAuthToken(s), void 0)
    },
    destroy: function () {
        var e = TD.settings.getLinkShortener();
        if ("bitly" == e) {
            var t = this.bitlyAccount,
                i = this.$bitlyUsername.val(),
                s = this.$bitlyKey.val();
            i && s && (!t || t.getUserID() == i && t.getOAuthToken() == s ? t || this.commitBitlyChanges() : this.commitBitlyChanges(t, t.getUserID() != i))
        }
        this.$node.remove()
    }
}), TD.components.GeneralSettings = TD.components.Base.extend(function () {
    var e = {
        version: TD.version,
        buildIDShort: TD.buildIDShort,
        appEnv: TD.util.getAppEnv()
    };
    TD.util.isWrapperApp() && deck.getWrapperVersion && (e.wrapperVersion = deck.getWrapperVersion()), this.$node = $(TD.ui.template.render("settings/global_setting_general", e)), $("#global-settings").append(this.$node), this.$streamingForm = this.$find(".js-streaming-form"), this.$streamingUpdates = $("#streaming-updates"), this.$streamingUpdates.change(this.handleStreamingChange.bind(this)), this.setStreaming(), this.$checkForUpdatesForm = this.$find(".js-check-updates-form"), this.$checkForUpdates = $("#check-for-updates"), this.$checkForUpdates.change(this.handleCheckForUpdatesChange.bind(this)), this.setCheckForUpdates(), this.$showStartupNotifications = $("#show-startup-notifications"), this.$showStartupNotifications.change(this.handleShowStartupNotificationsChange.bind(this)), this.setShowStartupNotifications(), this.$displaySensitiveMedia = $("#display-sensitive-media"), this.$displaySensitiveMedia.change(this.handleDisplaySensitiveMediaChange.bind(this)), this.setDisplaySensitiveMedia(), this.$columnSizeRadios = $(".js-column-size-radio"), this.$columnSizeRadios.change(this.handleColumnWidthChange.bind(this)), this.setColumnWidth(), this.$fontSizeRadioButtons = $(".js-font-size-radio"), this.$fontSizeRadioButtons.change(this.handleFontSizeChange.bind(this)), this.setFontSize(), this.$themeSwitcherRadios = $(".js-theme-radio"), this.$themeSwitcherRadios.change(this.handleThemeSwitcherChange.bind(this)), this.setTheme()
}).methods({
    handleStreamingChange: function () {
        var e = this.$streamingUpdates.prop("checked");
        TD.settings.setUseStream(e)
    },
    setStreaming: function () {
        this.$streamingUpdates.prop("checked", TD.settings.getUseStream())
    },
    handleCheckForUpdatesChange: function () {
        var e = this.$checkForUpdates.prop("checked");
        TD.settings.setCheckForUpdates(e), this.setStreaming()
    },
    setCheckForUpdates: function () {
        this.$checkForUpdatesForm.hide()
    },
    handleShowStartupNotificationsChange: function () {
        var e = this.$showStartupNotifications.prop("checked");
        TD.settings.setShowStartupNotifications(e)
    },
    setShowStartupNotifications: function () {
        this.$showStartupNotifications.prop("checked", TD.settings.getShowStartupNotifications())
    },
    handleDisplaySensitiveMediaChange: function () {
        var e = this.$displaySensitiveMedia.prop("checked");
        TD.settings.setDisplaySensitiveMedia(e)
    },
    setDisplaySensitiveMedia: function () {
        this.$displaySensitiveMedia.prop("checked", TD.settings.getDisplaySensitiveMedia())
    },
    setFontSize: function () {
        var e = TD.settings.getFontSize(),
            t = $('.js-font-size-radio[value="' + e + '"]');
        t.prop("checked", !0)
    },
    handleFontSizeChange: function (e) {
        var t;
        e.currentTarget.checked && (t = e.currentTarget.value, TD.settings.setFontSize(t))
    },
    setColumnWidth: function () {
        var e = TD.settings.getColumnWidth(),
            t = $('.js-column-size-radio[value="' + e + '"]');
        t.prop("checked", !0)
    },
    handleColumnWidthChange: function (e) {
        var t;
        e.currentTarget.checked && (t = e.currentTarget.value, TD.settings.setColumnWidth(t))
    },
    handleThemeSwitcherChange: function () {
        $(document).trigger("uiToggleTheme")
    },
    setTheme: function () {
        var e = TD.settings.getTheme(),
            t = $('.js-theme-radio[value="' + e + '"]');
        t.prop("checked", !0)
    }
}), TD.components.AccountSelector = TD.components.Base.extend(function () {
    var e = this;
    this.$node = $.createElement("ul").addClass("accs cf js-account-selector"), this.cachedSelectedAccounts = [], this.accountIndex = {}, this.refreshPostingAccounts(), this.$node.on("click", ".js-account-item", function (t) {
        var i = $(t.currentTarget);
        t.stopPropagation(), t.shiftKey ? ($("li", e.$node).removeClass(TD.components.AccountSelector.SELECTED_CLASS), i.addClass(TD.components.AccountSelector.SELECTED_CLASS)) : i.toggleClass(TD.components.AccountSelector.SELECTED_CLASS), e.updateSelectedAccounts()
    }), this.subscription = $.subscribe("/storage/client/account_whitelist_changed", _.bind(this.refreshPostingAccounts, this))
}).statics({
    CHANGE: "td-accounts-change",
    SELECTED_CLASS: "acc-selected"
}).methods({
    refreshPostingAccounts: function () {
        var e, t, i, s, n = TD.storage.accountController.getPostingAccounts(),
            r = [];
        for (this.accountIndex = {}, e = 0; n.length > e; e++) t = n[e], i = t.getKey(), r.push(i), this.accountIndex[i] = {
            account: i,
            uid: i,
            type: "account",
            username: t.getUsername(),
            service: t.getType(),
            picture: t.getProfileImageURL()
        };
        var o = function (e, t, i) {
            var s = {
                accounts: [],
                show_acc_toggle: i
            };
            return s.accounts = _.map(e, function (e) {
                return t[e]
            }), s
        };
        r.length && (s = TD.ui.template.render("compose/accounts", o(r, this.accountIndex, !0)), this.$node.html(s))
    },
    getSelectedAccounts: function () {
        var e, t, i = [];
        if (this.cachedSelectedAccounts) return this.cachedSelectedAccounts.concat();
        e = $("." + TD.components.AccountSelector.SELECTED_CLASS, this.$node);
        for (var s = 0; e.length > s; s++) t = e[s].attributes["data-id"].value, i.push(this.accountIndex[t]);
        return this.cachedSelectedAccounts = i, i
    },
    selectAccounts: function (e) {
        var t, i = this.$node.find(".js-account-item");
        if (_.isArray(e) && (i.removeClass(TD.components.AccountSelector.SELECTED_CLASS), e && e.length)) {
            for (t = 0; e.length > t; t++) e[t] && i.filter("li[data-id='" + e[t] + "']").addClass(TD.components.AccountSelector.SELECTED_CLASS);
            this.updateSelectedAccounts()
        }
    },
    selectDefaultAccount: function () {
        var e = TD.storage.accountController.getDefault();
        e && this.selectAccounts([e.getKey()])
    },
    updateSelectedAccounts: function () {
        this.cachedSelectedAccounts = null, this.getSelectedAccounts(), this.$node.trigger(TD.components.AccountSelector.CHANGE)
    },
    destroy: function () {
        $.unsubscribe(this.subscription), this.$node.off("click", ".js-account-item"), this.supr()
    }
}), TD.components.DropDown = TD.components.Base.extend(function (e) {
    this.$parent = e, this.$body = $("body"), this.$container = this.$parent.closest(TD.components.DropDown.CONTAINER_SELECTOR), 0 === this.$container.length && (this.$container = this.$body), this._handleCloseDropdown = _.bind(this._handleCloseDropdown, this), $(document).on("uiCloseDropdown", this._handleCloseDropdown), this._boundHandleGlobalClick = _.bind(this._handleGlobalClick, this)
}).statics({
    CLOSE: "td-dropdown-close",
    POSITION_RIGHT: "td-dropdown-right",
    POSITION_LEFT: "td-dropdown-left",
    CONTAINER_SELECTOR: ".js-dropdown-container",
    dropdown: null
}).methods({
    addToDisplay: function (e) {
        var t = TD.components.DropDown.dropdown;
        return t && (t.destroy(), TD.components.DropDown.dropdown = null, t.$parent[0] === this.$parent[0]) ? (this.destroy(), void 0) : (this.$parent.addClass("is-selected"), this.$node.insertAfter(this.$parent), this.$node.show(), this.setPosition(e), this.$body.on("click", "*", this._boundHandleGlobalClick), TD.components.DropDown.dropdown = this, void 0)
    },
    _handleGlobalClick: function (e) {
        this.$node && 0 === this.$find(e.currentTarget).length && 0 === this.$parent.find(e.currentTarget).length && this.destroy()
    },
    _handleCloseDropdown: function () {
        this.destroy()
    },
    destroy: function () {
        this.$node && (this.$parent.removeClass("is-selected"), $(document).off("uiCloseDropdown", this._handleCloseDropdown), this.$body.off("click", "*", this._boundHandleGlobalClick), this.bubbleEvent(TD.components.DropDown.CLOSE), this.$node.remove(), this.$node = null, TD.components.DropDown.dropdown = null)
    },
    setPosition: function (e) {
        var t, i, s, n, r;
        e === TD.components.DropDown.POSITION_RIGHT ? this.$node.addClass("pos-r") : e === TD.components.DropDown.POSITION_LEFT && this.$node.addClass("pos-l"), this.$container.length > 0 && !this.$node.hasClass("pos-t") && (t = this.$node.offset().top, i = this.$container.offset().top, r = this.$node.outerHeight(), s = t + r, n = i + this.$container.height(), s >= n && t - r > i && this.$node.addClass("pos-t")), TD.util.isTouchDevice() && e && this.moveToFront()
    },
    moveToFront: function () {
        if (!this.$node.hasClass("pos-t")) {
            var e = this.$container.scrollTop() + this.$node.offset().top,
                t = this.$node.offset().left,
                i = this.$node.width();
            this.$node.appendTo(this.$container), this.$node.offset({
                top: e,
                left: t
            }), this.$node.width(i), this.$node.show()
        }
    }
}), TD.components.ProfileMenu = TD.components.DropDown.extend(function (e, t, i, s, n) {
    this.user = i, this.chirp = s, this.isSingleAccount = 1 === TD.storage.accountController.getAccountsForService("twitter").length, this.showFollow = n || !this.isSingleAccount, this.isFlagged = this.chirp && this.chirp.getMedia().some(function (e) {
        return e.flaggedNSFW
    }), this.$node = this.chirp instanceof TD.services.TwitterDirectMessage ? $(TD.ui.template.render("menus/profile_directmessage", this)) : $(TD.ui.template.render("menus/profile", this)), this.actionsMenu = e.closest("ul"), this.setChirpMenuState(), this.$find("a").click(_.bind(this.handleClick, this)), this.addToDisplay(t)
}).methods({
    _handleFlagTweetSuccess: function () {
        var e = this.chirp.getMedia();
        e.forEach(function (e) {
            e.flaggedNSFW = !0
        }), TD.controller.progressIndicator.addMessage(TD.i("Success: Media flagged"))
    },
    _handleFlagTweetError: function () {
        TD.controller.progressIndicator.addMessage(TD.i("Error: Failed to flag media. Please try again."))
    },
    handleClick: function (e) {
        var t, i = $(e.target),
            s = i.data("action"),
            n = !0;
        switch (s) {
        case "mention":
            TD.ui.compose.mention(this.user.screenName, this.user.account.getKey());
            break;
        case "message":
            TD.ui.compose.directMessage(this.user.screenName, this.user.profileImageURL, this.user.account.getKey());
            break;
        case "lists":
            new TD.components.AddToListsDialog(this.user);
            break;
        case "flag-media":
            TD.controller.progressIndicator.addMessage(TD.i("Flagging media...")), t = TD.controller.clients.getClient(this.chirp.account.getKey()), t.flagTweet(this.chirp.id, this._handleFlagTweetSuccess.bind(this), this._handleFlagTweetError);
            break;
        case "block":
            $(document).trigger("uiBlockAction", {
                account: this.user.account,
                twitterUser: this.user
            });
            break;
        case "report-spam":
            $(document).trigger("uiReportAction", {
                account: this.user.account,
                twitterUser: this.user
            });
            break;
        case "followOrUnfollow":
            new TD.components.FollowDialog(this.user);
            break;
        case "follow":
            this.user.follow(this.user.account, null, null, !0);
            break;
        case "unfollow":
            this.user.unfollow(this.user.account, null, null, !0);
            break;
        case "reference-to":
            this.chirp.referenceTo();
            break;
        case "email":
            this.chirp.email();
            break;
        case "destroy":
            this.chirp.destroy();
            break;
        case "embed":
            $(document).trigger("uiShowEmbedTweet", {
                tweet: this.chirp.getMainTweet()
            });
            break;
        case "translate":
            this.chirp.translate();
            break;
        default:
            n = !1
        }
        n && (e.preventDefault(), e.stopPropagation()), this.destroy()
    },
    setChirpMenuState: function () {
        this.actionsMenu.addClass("is-visible")
    },
    destroy: function () {
        this.supr(), this.actionsMenu.removeClass("is-visible")
    }
}), TD.components.TopbarMenu = TD.components.DropDown.extend(function (e) {
    this.$node = $(TD.ui.template.render("menus/topbar_menu", {
        debug: Boolean(TD.config.debug_menu),
        tdAccount: TD.storage.store.getTweetdeckAccount()
    })), this.addToDisplay(), this.$find("a").on("click", this.handleClick.bind(this)), this.$node.on("click", this.handleNodeClick.bind(this)), this.boundParentClickHandler = this.handleParentClick.bind(this), e.on("click", this.boundParentClickHandler)
}).methods({
    handleClick: function (e) {
        var t = $(e.target),
            i = t.data("action"),
            s = !0;
        switch (i) {
        case "signOut":
            TD.controller.init.signOut();
            break;
        case "globalSettings":
            new TD.components.GlobalSettings;
            break;
        case "do_debug":
            TD.sync.ui.dispatch_ui_event(t.data("type"));
            break;
        case "fileabug":
            this.sendBugReport();
            break;
        case "keyboardShortcutList":
            $(document).trigger("uiShowKeyboardShortcutList");
            break;
        default:
            s = !1
        }
        s && e.preventDefault(), this.destroy()
    },
    handleParentClick: function (e) {
        e.stopPropagation(), this.destroy()
    },
    handleNodeClick: function (e) {
        e.stopPropagation()
    },
    sendBugReport: function () {
        var e, t, i = TD.config.fileabug;
        t = {
            tdAccount: TD.storage.store.getTweetdeckAccount(),
            userAgent: navigator.userAgent,
            version: TD.version,
            buildID: TD.gitrevshort
        }, e = TD.ui.template.render("emails/fileabug", t), TD.util.openEmail(i, "", e)
    },
    destroy: function () {
        this.$parent.off("click", this.boundParentClickHandler), this.supr()
    }
}), TD.vo.Column = function (e, t) {
    TD.sync.util.assert(e, "must provide sColumn to create aColumn"), this.model = e, TD.sync.util.assert(this.model.getKey(), "vo.Column will most likely fail if your column has no key"), this._feeds = [], this.filters = [], this.description = "", this.updateArray = [], this.updateIndex = {}, this.scribedImpressionIDs = new TD.cache.LRUQueue(200), this._animating = !1, this._animationQueue = [], this._isUpdating = !0, this.feedSubscriptions = {}, this.deleteSubscriptions = {}, this.visible = !0, this.visibility = {
        columnWidth: 0,
        visibleWidth: 0,
        visibleHeight: 0,
        visibleFraction: 0
    }, this.temporary = !1, this.chirpContainerSelector = ".js-chirp-container[data-column='" + this.model.getKey() + "']", this._$chirpContainer = null, this.detailViewComponent = null, this.feedsFetched = 0, this.isFirstFetch = !0, this.isFetchingOlderUpdates = !1, this.lastInfiniteScrollTime = null, this.isShowingLoadMore = !1, this.isExhausted = !1, this.CHIRP_BLOCK_SIZE = 20, this.sortFunction = "scheduled" === this.model.getType() ? TD.util.chirpAscSort : TD.util.chirpDescSort, this.loadFeeds(), this.loadFilters(), t && this.setFeeds(t), this.isFilterable() || this.updateSearchFilter(new TD.vo.SearchFilter), this.GLOBAL_TPM_ANIMATION_LIMIT = 2e3, this.COLUMN_TPM_ANIMATION_LIMIT = 120, this.COLUMN_MINIMALIST_TWEET_TPM_THRESHOLD = 750, this.doAnimate = !0, this.streamRate = 0;
    var i = this.updateStreamRate.bind(this);
    $(document).on("dataStreamRate", i), this.tpm = 0;
    var s = this.updateTpm.bind(this),
        n = "dataColumn" + this.model.getKey() + "Tpm";
    $(document).on(n, s), this.tpmCounter = new TD.util.TpmCounter(500, 5e3, n), this.STREAM_ITEM_CONTENT_SELECTOR = ".js-stream-item-content", this.STREAM_ITEM_SELECTOR = ".js-stream-item", this.INFINITE_SPINNER_SELECTOR = ".js-infinitespinner", $.subscribe("/storage/client/settings/display_sensitive_media", this.reloadTweets.bind(this))
}, TD.vo.Column.CHIRP_STAGGERING_INTERVAL = 400, TD.vo.Column.FADE_IN_CLASS = "column-opacity-transition", TD.vo.Column.MEDIA_PREVIEW_OFF = "off", TD.vo.Column.MEDIA_PREVIEW_SIZE_SMALL = "small", TD.vo.Column.MEDIA_PREVIEW_SIZE_MEDIUM = "medium", TD.vo.Column.MEDIA_PREVIEW_SIZE_LARGE = "large", TD.vo.Column.prototype.reset = function () {
    this.updateArray = [], this.updateIndex = {}, this.feedsFetched = 0, this.isFirstFetch = !0, this.isFetchingOlderUpdates = !1, this.lastInfiniteScrollTime = null, this.refreshSubscriptions()
}, TD.vo.Column.prototype.updateStreamRate = function (e, t) {
    this.streamRate = t.itemsPerMinute
}, TD.vo.Column.prototype.updateTpm = function (e, t) {
    this.tpm = t.itemsPerMinute
}, TD.vo.Column.prototype.loadFeeds = function () {
    if (this.model.managed) {
        var e = this.model.getFeedKeys();
        if (_.isUndefined(e)) return TD.sync.util.stateLog("loadFeeds() not loading feeds for", this, "given", this.model.state), void 0;
        this._feeds = [];
        for (var t = 0; e.length > t; t++) {
            var i = TD.storage.feedController.get(e[t]);
            this._feeds.push(i)
        }
        this.refreshSubscriptions()
    }
}, TD.vo.Column.prototype.getFeeds = function () {
    return this._feeds.concat()
}, TD.vo.Column.prototype.getFeedCount = function () {
    return this._feeds.length
}, TD.vo.Column.prototype.setFeeds = function (e) {
    this._feeds = e;
    for (var t = [], i = 0; this._feeds.length > i; i++) t.push(this._feeds[i].getKey());
    this.model.setFeedKeys(t), this.refreshSubscriptions(), this.model.managed && TD.storage.feedController.manageFeeds(this._feeds)
}, TD.vo.Column.prototype.addFeed = function (e) {
    for (var t, i = [], s = 0; this._feeds.length > s; s++) {
        if (t = _feeds[s].getKey(), t === e.getKey()) return;
        i.push(t)
    }
    this._feeds.push(e), i.push(e.getKey()), this.model.setFeedKeys(i), this.refreshSubscriptions(), this.model.managed && TD.storage.feedController.manageFeeds(this._feeds)
}, TD.vo.Column.prototype.addFeeds = function (e) {
    if (e && 0 !== e.length) {
        var t, i = [],
            s = {};
        for (e = this._feeds.concat(e), t = 0; e.length > t; t++) s[e[t].getKey()] || (s[e[t].getKey()] = !0, i.push(e[t]));
        this.setFeeds(i)
    }
}, TD.vo.Column.prototype.removeFeed = function (e) {
    for (var t, i = [], s = 0, n = this._feeds.length - 1; n >= 0; n--) t = this._feeds[n].getKey(), t === e.getKey() ? (this._feeds.splice(n, 1), s++) : i.push(t);
    return s > 0 && (this.model.setFeedKeys(i), this.refreshSubscriptions(), this.checkChirpIndex()), s
}, TD.vo.Column.prototype.findChirp = function (e) {
    var t = this.updateIndex[e];
    return !t && this.detailViewComponent && (t = this.detailViewComponent.findChirp(e)), t
}, TD.vo.Column.prototype.findMostInterestingChirp = function (e) {
    var t = this.findChirp(e);
    return t && t instanceof TD.services.TwitterAction && (t = t.getRelatedTweet() || t), t
}, TD.vo.Column.prototype.getChirpContainer = function () {
    return this._$chirpContainer && 0 !== this._$chirpContainer.length || (this._$chirpContainer = $(this.chirpContainerSelector)), this._$chirpContainer
}, TD.vo.Column.prototype.checkChirpIndex = function () {
    var e = this.model.getFeedKeys(),
        t = _.map(e, TD.controller.feedManager.getPoller),
        i = _.filter(this.updateArray, function (e) {
            return !_.find(t, function (t) {
                return t.chirpIndex[e.id]
            })
        });
    this.removeFromIndex(null, i, !0)
}, TD.vo.Column.prototype.refreshSubscriptions = function () {
    var e, t = {}, i = this.model.getFeedKeys(),
        s = this;
    if ("me" === this.model.getType()) {
        var n = !1,
            r = [];
        _.each(i, function (e) {
            var t = TD.storage.feedController.get(e);
            t && ("interactions" === t.getType() && (n = !0), "mentions" !== t.getType() && r.push(e))
        }), n && (i = r)
    }
    for (var o = 0; i.length > o; o++) e = i[o], t[e] = !0, this.feedSubscriptions[e] || (this.feedSubscriptions[e] = $.subscribe("/feed/" + e, function (e, t, i) {
        s.addToIndex(e, t, i)
    })), this.deleteSubscriptions[e] || (this.deleteSubscriptions[e] = $.subscribe("/delete/" + e, function (e, t) {
        s.removeFromIndex(e, t, !0)
    }));
    for (e in this.feedSubscriptions) t[e] || ($.unsubscribe(this.feedSubscriptions[e]), delete this.feedSubscriptions[e]);
    for (e in this.deleteSubscriptions) t[e] || ($.unsubscribe(this.deleteSubscriptions[e]), delete this.deleteSubscriptions[e])
}, TD.vo.Column.prototype.removeSubscriptions = function () {
    var e;
    for (e in this.feedSubscriptions) $.unsubscribe(this.feedSubscriptions[e]), delete this.feedSubscriptions[e];
    for (e in this.deleteSubscriptions) $.unsubscribe(this.deleteSubscriptions[e]), delete this.deleteSubscriptions[e]
}, TD.vo.Column.prototype.fetchUpdatesFromPoller = function (e) {
    if (!this.isFetchingOlderUpdates) {
        var t, i, s = this,
            n = this.updateArray.length,
            r = 0,
            o = !1,
            a = 0,
            c = function () {
                var e = s.getFeeds().map(function (e) {
                    var i = TD.controller.feedManager.getPoller(e.getKey()),
                        n = i.fetchOlderChirps(t);
                    return n.addCallback(function (t) {
                        var n;
                        return t = _.select(t, function (e) {
                            return !s.updateIndex[e.id]
                        }), s.lastInfiniteScrollTime = (new Date).getTime(), n = s.addItemsToIndex(t, !0, e, e.getLatestTime()), o = !i.isExhausted || o, r += n, t.length && (a = Math.max(a, t[t.length - 1].created.getTime())), t
                    }), n
                });
                return new TD.core.defer.DeferredList(e)
            }, l = function () {
                if (s.feedsFetched = 0, t = a, a = 0, 0 === r) {
                    if (o) return c();
                    s.isExhausted = !0
                }
            };
        return t = this.updateArray.length && !e ? this.updateArray[this.updateArray.length - 1].created.getTime() : Number.MAX_VALUE, this.isFetchingOlderUpdates = !0, this.addInfiniteScrollSpinner(), i = c(), i.addCallback(l), i.addCallback(function () {
            s.removeInfiniteScrollSpinner(), s.showLoadMoreButton(), s.isFetchingOlderUpdates = !1, s.truncate(n + s.CHIRP_BLOCK_SIZE)
        }), i
    }
}, TD.vo.Column.prototype.addToIndex = function (e, t, i) {
    var s;
    return this._isUpdating && (this.getChirpContainer().trigger("dataColumnFeedUpdated"), this.hideIsUpdatingMessage(), this._isUpdating = !1), 0 === t.length ? (0 === this.updateArray.length && this.temporary && this.showNoResultsMessage(), void 0) : (this.hideNoResultsMessage(), s = t.concat(), this.addItemsToIndex(s, this.updateArray.length, e.feed, i), this.isFirstFetch && (this.feedsFetched++, this.feedsFetched == this.getFeedCount() && (this.truncate(this.CHIRP_BLOCK_SIZE), this.feedsFetched = 0, this.isFirstFetch = !1)), this.showLoadMoreButton(), void 0)
}, TD.vo.Column.prototype.addItemsToIndex = function (e, t, i, s) {
    var n, r, o = [],
        a = this.updateArray.length ? this.updateArray[this.updateArray.length - 1].created.getTime() : 0,
        c = this.model.getClearedTimestamp(),
        l = [],
        u = 0;
    0 === this.updateArray.length && this.removeInfiniteScrollSpinner(), e.sort(this.sortFunction), n = e.length;
    for (var d = 0; n > d && (r = e[d], !t && a > r.created.getTime() || c >= r.created.getTime() || !(r.passFilters(this.filters) && (_.isUndefined(this.updateIndex[r.id]) || (this.removeFromIndex(null, [r], !1), this.detailViewComponent && this.detailViewComponent.changed(r)), this.updateIndex[r.id] = r, o.push(r), _.isUndefined(s) || (l = l.concat(r.getUnreadChirps(s))), o.length > this.CHIRP_BLOCK_SIZE))); d++);
    if (u = o.length) {
        for (var h = "", p = [], m = this.updateArray; o.length > 0 || m.length > 0;)
            if (0 === o.length) p = p.concat(m), m = [];
            else if (0 === m.length) p = p.concat(o), this.addToView(i, h, o), o = [];
        else {
            for (var f = [], g = m[0], T = o[0]; this.sortFunction(g, T) > 0 && o.length > 0;) r = o.shift(), f.push(r), o.length > 0 && (T = o[0]);
            f.length > 0 ? (this.addToView(i, h, f), p = p.concat(f)) : (r = m.shift(), p.push(r), r.passFilters(this.filters) && (h = r.id))
        }
        this.updateArray = p
    }
    return $.publish("/notifications/new", [{
        column: this,
        feed: i,
        items: l
    }]), this.isMessageColumn() && this.getChirpContainer().trigger("uiReadStateChange", {}), u
}, TD.vo.Column.prototype.removeFromIndex = function (e, t, i) {
    for (var s = 0; t.length > s; s++) {
        var n = t[s];
        this.removeChirp(n), i && this.detailViewComponent && this.detailViewComponent.deleted(n)
    }
}, TD.vo.Column.prototype.removeChirp = function (e) {
    var t = this.updateIndex[e.id];
    if (t) {
        for (var i = 0; this.updateArray.length > i; i++)
            if (e = this.updateArray[i], e === t) {
                this.updateArray.splice(i, 1);
                break
            }
        delete this.updateIndex[e.id], $('[data-key="' + e.id + '"]', this.getChirpContainer()).remove(), $(document).trigger("uiColumnChirpsChanged", {
            id: this.model.getKey()
        })
    }
}, TD.vo.Column.prototype.clear = function () {
    if (0 !== this.updateArray.length) {
        var e = this.updateArray[0].created.getTime();
        this.model.setClearedTimestamp(e), this.truncate(0)
    }
}, TD.vo.Column.prototype.truncate = function (e) {
    var t, i, s, n, r = -1,
        o = this.getFeeds();
    for (this.feedsFetched = 0, t = 0; o.length > t; t++) i = TD.controller.feedManager.getPoller(o[t].getKey()), i && (s = i.getRangeStartTime(), s > r && (r = s));
    for (n = null, t = this.updateArray.length - 1; t >= 0; t--)
        if (this.updateArray[t].created.getTime() >= r) {
            n = t;
            break
        }
    if (null !== n) {
        for (n = Math.min(e, n + 1), t = this.updateArray.length - 1; t >= n; t--) this.annihilateChirp("" + this.updateArray[t].id, this.getChirpContainer()), this.isExhausted = !1;
        this.updateArray.splice(n, Number.MAX_VALUE)
    }
}, TD.vo.Column.prototype.trimUpdates = function (e) {
    var t, i, s;
    if (this.lastInfiniteScrollTime) {
        if (t = (new Date).getTime() - this.lastInfiniteScrollTime, !(t > 1e4)) return;
        s = Math.floor((this.updateArray.length - 20) * (1 - t / 6e5)), this.maxUpdatesPerColumn = Math.max(20 + s, 20)
    }
    e = e || Math.max(this.maxUpdatesPerColumn || 20, 20), i = this.updateArray.splice(e, Math.max(this.updateArray.length - e, 0));
    for (var n = 0; i.length > n; n++) this.annihilateChirp("" + i[n].id, this.getChirpContainer())
}, TD.vo.Column.prototype.annihilateChirp = function (e, t) {
    this.findChirp(e), t.children('[data-key="' + e + '"]').remove(), delete this.updateIndex[e]
}, TD.vo.Column.prototype.addToView = function (e, t, i) {
    var s, n, r, o, a, c = this.getChirpContainer(),
        l = TD.controller.columnManager.isStreaming(this.model.getKey());
    0 !== i.length && (0 === this.updateArray.length ? (o = TD.util.getPreciseTime(), s = this.renderChirps(i), a = TD.util.getPreciseTime(), TD.util.logTimeToRenderColumn(a - o, i.length)) : (l && this.tpmCounter.incrementCounter(i.length), s = this.renderChirps(i)), n = $(s).filter(this.STREAM_ITEM_SELECTOR), r = 0 === c.children(this.STREAM_ITEM_SELECTOR).length, "" === t ? r ? (c.html(n), this.isShowingLoadMore = !1) : (!TD.ui.columns.isFrozen(this.model.getKey()) && TD.controller.columnManager.isStreaming(this.model.getKey()) && this.trimUpdates(100 - n.length), c.prepend(n)) : c.children('[data-key="' + t + '"]').after(n), r ? this._fadeInContent(c) : this._slideInChirps(n))
}, TD.vo.Column.prototype.getMediaPreviewSize = function () {
    var e, t = this.model.getMediaPreviewSize();
    return t || (this.isMessageColumn() && (t = TD.vo.Column.MEDIA_PREVIEW_OFF), e = this.getSearchFilter(), t = e.content.hasActiveMediaFilter() ? TD.vo.Column.MEDIA_PREVIEW_SIZE_LARGE : this.getColumnType() === TD.util.columnUtils.columnMetaTypes.INTERACTIONS ? TD.vo.Column.MEDIA_PREVIEW_SIZE_SMALL : TD.vo.Column.MEDIA_PREVIEW_SIZE_MEDIUM), t
}, TD.vo.Column.prototype.setMediaPreviewSize = function (e) {
    var t = this.getMediaPreviewSize();
    e !== t && this.model.setMediaPreviewSize(e), this.reloadTweets()
}, TD.vo.Column.prototype.renderChirps = function (e) {
    var t, i, s = [],
        n = this.tpm > this.COLUMN_MINIMALIST_TWEET_TPM_THRESHOLD,
        r = this.getMediaPreviewSize();
    for (i = 0; e.length > i; i++) t = e[i].render({
        isTemporaryColumn: this.temporary,
        mediaPreviewSize: r,
        isMinimalist: n
    }), s.push(t);
    return s.join("")
}, TD.vo.Column.prototype._fadeInContent = function (e) {
    var t = this;
    _.defer(function () {
        e.css("opacity", 1), TD.ui.main.TRANSITION_END_EVENTS ? e.one(TD.ui.main.TRANSITION_END_EVENTS, function () {
            e.removeClass(TD.vo.Column.FADE_IN_CLASS).removeAttr("style"), $(document).trigger("uiColumnChirpsChanged", {
                id: t.model.getKey()
            })
        }) : (e.removeClass(TD.vo.Column.FADE_IN_CLASS).removeAttr("style"), $(document).trigger("uiColumnChirpsChanged", {
            id: t.model.getKey()
        }))
    })
}, TD.vo.Column.prototype._slideInChirps = function (e) {
    var t, i, s = [],
        n = this.temporary && this.getChirpContainer().closest(".is-hidden").length;
    this.doAnimate = !n && this.streamRate < this.GLOBAL_TPM_ANIMATION_LIMIT && this.tpm < this.COLUMN_TPM_ANIMATION_LIMIT, e && (e.each(function () {
        s.push($(this).toggleClass("is-animating"))
    }), s.reverse(), this._animationQueue = this._animationQueue.concat(s)), this._animating || 0 === this._animationQueue.length || (i = TD.ui.columns.freezeScroll(this.model.getKey()), i ? (this.isFetchingOlderUpdates || this.getChirpContainer().trigger("uiReadStateChange", {
        read: !1
    }), _.each(this._animationQueue, function (e) {
        e.removeClass("is-animating")
    }), this._animationQueue = []) : TD.controller.columnManager.isStreaming(this.model.getKey()) ? (_.each(this._animationQueue, this._slideInChirp.bind(this)), this._animationQueue = []) : (this._animating = !0, t = this._animationQueue.shift(), this._slideInChirp(t), setTimeout(function () {
        this._animating = !1, this._slideInChirps()
    }.bind(this), TD.vo.Column.CHIRP_STAGGERING_INTERVAL)), this.isFetchingOlderUpdates || TD.ui.columns.unfreezeScroll(this.model.getKey()), $(document).trigger("uiColumnChirpsChanged", {
        id: this.model.getKey()
    }))
}, TD.vo.Column.prototype._slideInChirp = function (e) {
    var t, i = function () {
            e.removeClass("is-animating"), e.removeAttr("style"), $(document).trigger("uiColumnChirpsChanged", {
                id: this.model.getKey()
            })
        }.bind(this);
    this.doAnimate && TD.ui.main.TRANSITION_END_EVENTS ? (t = e.find(".js-stream-item-content").outerHeight(), e.css({
        opacity: 1,
        height: t + "px"
    }), e.one(TD.ui.main.TRANSITION_END_EVENTS, i)) : i()
}, TD.vo.Column.prototype.showLoadMoreButton = function () {}, TD.vo.Column.prototype.hideLoadMoreButton = function () {}, TD.vo.Column.prototype.addInfiniteScrollSpinner = function () {
    this.hideLoadMoreButton(), this.getChirpContainer().append(TD.ui.template.render("spinner_large"))
}, TD.vo.Column.prototype.removeInfiniteScrollSpinner = function () {
    $(this.INFINITE_SPINNER_SELECTOR, this.getChirpContainer()).remove()
}, TD.vo.Column.prototype.showIsUpdatingMessage = function () {
    this.$loadingMessage = $(TD.ui.template.render("column_loading_placeholder", {
        isUpdating: !0
    })), this.getChirpContainer().html(this.$loadingMessage)
}, TD.vo.Column.prototype.hideIsUpdatingMessage = function () {
    var e = this.getChirpContainer();
    e.css("opacity", 0), _.defer(function () {
        e.addClass(TD.vo.Column.FADE_IN_CLASS)
    }), e.find(".js-column-loading-placeholder").remove(), this.showLoadMoreButton()
}, TD.vo.Column.prototype.showNoResultsMessage = function () {
    var e = this.getChirpContainer();
    e.css("opacity", 1).removeClass(TD.vo.Column.FADE_IN_CLASS), this.$noResults = $(TD.ui.template.render("search_no_tweets_placeholder")), e.html(this.$noResults)
}, TD.vo.Column.prototype.hideNoResultsMessage = function () {
    this.$noResults && this.$noResults.remove()
}, TD.vo.Column.prototype.getTitleHTML = function () {
    return TD.util.columnUtils.getColumnTitleHTML(this)
}, TD.vo.Column.prototype.getDetailTitleHTML = function () {
    return TD.util.columnUtils.getColumnTitleHTML(this)
}, TD.vo.Column.prototype.getColumnType = function () {
    return TD.util.columnUtils.getColumnType(this)
}, TD.vo.Column.prototype.getIconClass = function () {
    return TD.util.columnUtils.getColumnIconClassByColumnType(this.getColumnType())
}, TD.vo.Column.prototype.isMessageColumn = function () {
    return TD.util.columnUtils.isMessageColumn(this)
}, TD.vo.Column.prototype.isSearchColumn = function () {
    return this.getColumnType() === TD.util.columnUtils.columnMetaTypes.SEARCH
}, TD.vo.Column.prototype.isActionsColumn = function () {
    return TD.util.columnUtils.actionColumnTypes.indexOf(this.getColumnType()) > -1
}, TD.vo.Column.prototype.isSingleActionTypeColumn = function () {
    return TD.util.columnUtils.singleActionColumnTypes.indexOf(this.getColumnType()) > -1
}, TD.vo.Column.prototype.isActivityColumn = function () {
    return this.getColumnType() === TD.util.columnUtils.columnMetaTypes.ACTIVITY
}, TD.vo.Column.prototype.isEmbeddable = function () {
    return _.include(TD.util.columnUtils.embeddableColumnTypes, this.getColumnType())
}, TD.vo.Column.prototype.isClearable = function () {
    var e = this.getColumnType();
    return e !== TD.util.columnUtils.columnMetaTypes.SCHEDULED
}, TD.vo.Column.prototype.isOwnList = function () {
    var e = !1;
    return _.find(this.getFeeds(), function (t) {
        if ("list" === t.getType()) {
            var i = t.getMetadata();
            e = TD.cache.lists.find(i.listId, i.screenName, i.slug, !0)
        }
        return Boolean(e)
    }), e
}, TD.vo.Column.prototype.updateMetadata = function (e) {
    var t, i = this.getFeeds()[0];
    this._isUpdating = !0, this.showIsUpdatingMessage(), e.term = null, t = TD.storage.feedController.getOrCreateFeed(i.getType(), i.getService(), i.getAccountKey(), e), this.getChirpContainer().trigger("dataColumnUpdatingFeed", {
        column: this,
        oldFeed: i,
        newFeed: t
    }), TD.controller.feedManager.replaceFeed(i, t, [this.model.getKey()])
}, TD.vo.Column.prototype.loadFilters = function () {
    var e = new TD.vo.SearchFilter(this.model.getFilters()),
        t = e.getFilters();
    _.isEqual(_.pluck(this.filters, "id"), _.pluck(t, "id")) || (this.filters = t, this.reloadTweets())
}, TD.vo.Column.prototype.isFilterable = function () {
    return -1 !== TD.util.columnUtils.filterableColumnTypes.indexOf(this.getColumnType())
}, TD.vo.Column.prototype.reloadTweets = function () {
    this._isUpdating || (this.truncate(0), this.fetchUpdatesFromPoller(!0), this.showLoadMoreButton())
}, TD.vo.Column.prototype.getBaseQuery = function () {
    var e = null,
        t = this.getFeeds();
    if (this.isSearchColumn() && t && t.length > 0) {
        var i = t[0].getMetadata();
        i && (e = i.baseQuery ? i.baseQuery : i.term)
    }
    return e
}, TD.vo.Column.prototype.updateSearchFilter = function (e) {
    var t, i, s, n, r;
    e && (this.isSearchColumn() ? this.updateSearchFeedFilter(e) : (s = this.getFeeds()[0], s && this.isActionsColumn() && !this.isActivityColumn() && (i = s.getType(), t = TD.util.columnUtils.inferFeedTypeFromActionFilter(e.action), t !== i && (r = _.clone(s.getMetadata()), n = TD.storage.feedController.getOrCreateFeed(t, s.getService(), s.getAccountKey(), r), this.getChirpContainer().trigger("dataColumnUpdatingFeed", {
        column: this,
        oldFeed: s,
        newFeed: n
    }), TD.controller.feedManager.replaceFeed(s, n, [this.model.getKey()]))), this.model.setFilters(e.toJSONObject()), this.getChirpContainer().trigger("dataColumnFiltersUpdated")))
}, TD.vo.Column.prototype.updateSearchFeedFilter = function (e) {
    var t = !1,
        i = this.getFeeds()[0],
        s = _.clone(i.getMetadata());
    s.baseQuery || (s.baseQuery = s.term), e.content && e.content.matching && e.content.matching !== s.baseQuery && (t = !0, s.baseQuery = e.content.matching);
    var n = new TD.vo.SearchFilter(s.searchFilterData);
    (t || n.getQueryString() !== e.getQueryString()) && (s.searchFilterData = e.toJSONObject(), this.updateMetadata(s))
}, TD.vo.Column.prototype.getSearchFilter = function () {
    var e, t;
    return this.isSearchColumn() ? (t = this.getFeeds()[0].getMetadata(), e = new TD.vo.SearchFilter(t.searchFilterData), e.content.matching || e.content.setMatching(t.baseQuery || t.term)) : e = new TD.vo.SearchFilter(this.model.getFilters()), e
}, TD.vo.Column.prototype.hasActiveSearchFilters = function () {
    var e = this.getSearchFilter(),
        t = this.hasActiveUserFilters() || this.hasActiveContentFilters() || this.hasActiveEngagementFilters() || this.hasActiveActionFilters() && !this.isSingleActionTypeColumn();
    return this.isSearchColumn() || (t = e.content.matching || t), Boolean(t)
}, TD.vo.Column.prototype.hasActiveContentFilters = function () {
    var e, t = this.getSearchFilter();
    return e = this.isSearchColumn() ? t.content.getQueryString() : t.content.matching || t.content.getQueryString(), Boolean(e)
}, TD.vo.Column.prototype.hasActiveUserFilters = function () {
    var e = this.getSearchFilter(),
        t = e.user.getQueryString();
    return Boolean(t)
}, TD.vo.Column.prototype.hasActiveActionFilters = function () {
    var e = this.getSearchFilter(),
        t = e.action.getFilters().length;
    return Boolean(t)
}, TD.vo.Column.prototype.hasActiveEngagementFilters = function () {
    var e = this.getSearchFilter(),
        t = e.engagement.getQueryString();
    return Boolean(t)
}, TD.vo.Column.prototype.hasFilterError = function () {
    var e, t = this.getSearchFilter();
    return e = this.getColumnType() === TD.util.columnUtils.columnMetaTypes.ACTIVITY ? t.action.getFilters().length === TD.vo.ActionFilter.MAX_ACTIVITY_FILTERS : t.action.getFilters().length === TD.vo.ActionFilter.MAX_INTERACTION_FILTERS
}, TD.vo.Column.prototype.markAllMessagesAsRead = function () {
    this.isMessageColumn() && this.updateArray.forEach(function (e) {
        e instanceof TD.services.TwitterMessageThread && e.markAsRead()
    })
}, TD.vo.Column.prototype.hasUnreadMessages = function () {
    var e = !1;
    return this.isMessageColumn() && (e = this.updateArray.some(function (e) {
        return e.unread
    })), e
}, TD.vo.Filter = function (e, t, i) {
    switch (this.type = e, this.value = t, this.positive = i, _.isString(t) && (this.value = t.toLowerCase()), this.type) {
    case TD.vo.Filter.PHRASE:
        this.exact = !1;
        break;
    case TD.vo.Filter.SENDER:
        this.exact = !0, this.fuzzy = !0, this.filterTarget = "parent";
        break;
    case TD.vo.Filter.SOURCE:
        this.exact = !0, this.fuzzy = !1;
        break;
    case TD.vo.Filter.FOLLOWERS:
        this.exact = !1, this.range = !0;
        break;
    case TD.vo.Filter.IS_RETWEET:
        this.exact = !0;
        break;
    case TD.vo.Filter.IS_FROM_VERIFIED:
        this.exact = !0, this.filterTarget = "parent";
        break;
    case TD.vo.Filter.CHIRP_TYPE:
        this.exact = !0, this.filterTarget = "parent"
    }
    this.id = this.generateLocalID()
}, TD.vo.Filter.PHRASE = "phrase", TD.vo.Filter.SENDER = "sender", TD.vo.Filter.SOURCE = "source", TD.vo.Filter.FOLLOWERS = "followers", TD.vo.Filter.IS_RETWEET = "is_retweet", TD.vo.Filter.IS_MENTION = "is_mention", TD.vo.Filter.IS_FAVORITE = "is_favorite", TD.vo.Filter.IS_FOLLOW = "is_follow", TD.vo.Filter.HAS_IMAGE = "has_image", TD.vo.Filter.HAS_VIDEO = "has_video", TD.vo.Filter.HAS_MEDIA = "has_media", TD.vo.Filter.HAS_LINK = "has_link", TD.vo.Filter.IS_FROM_VERIFIED = "verified", TD.vo.Filter.CHIRP_TYPE = "chirp_type", TD.vo.Filter.prototype.id = null, TD.vo.Filter.prototype.value = null, TD.vo.Filter.prototype.type = TD.vo.Filter.PHRASE, TD.vo.Filter.prototype.positive = !0, TD.vo.Filter.prototype.exact = !0, TD.vo.Filter.prototype.fuzzy = !1, TD.vo.Filter.prototype.range = !1, TD.vo.Filter.prototype.filterTarget = "child", TD.vo.Filter.prototype.generateLocalID = function () {
    return "filter" + TD.util.deterministicObjectHash(this.toBackendState())
}, TD.vo.Filter.prototype.pass = function (e) {
    var t = this;
    switch (e = this._getFilterTarget(e), text = e.getFilterableText(), text = text ? text.toLowerCase() : null, senders = e.getSenders(), senders = senders ? _.map(senders, function (e) {
        return e.toLowerCase()
    }) : null, source = e.getSource(), source = source ? source.toLowerCase() : null, this.type) {
    case TD.vo.Filter.PHRASE:
        return this._testString(text);
    case TD.vo.Filter.SENDER:
        return this.positive ? _.any(senders, function (e) {
            return t._testString(e)
        }) : _.every(senders, function (e) {
            return t._testString(e)
        });
    case TD.vo.Filter.SOURCE:
        return this._testString(source);
    case TD.vo.Filter.FOLLOWERS:
        return this._testNumber(followers);
    case TD.vo.Filter.IS_RETWEET:
        return this._testBoolean(e.isRetweetedStatus());
    case TD.vo.Filter.IS_FROM_VERIFIED:
        return this._testBoolean(e.isFromVerifiedUser());
    case TD.vo.Filter.HAS_IMAGE:
        return this._testBoolean(e.hasImage());
    case TD.vo.Filter.HAS_VIDEO:
        return this._testBoolean(e.hasVideo());
    case TD.vo.Filter.HAS_MEDIA:
        return this._testBoolean(e.hasImage() || e.hasVideo());
    case TD.vo.Filter.HAS_LINK:
        return this._testBoolean(e.hasLink());
    case TD.vo.Filter.CHIRP_TYPE:
        return this._testString(e.getChirpType())
    }
    return !0
}, TD.vo.Filter.prototype.getDisplayType = function () {
    switch (this.type) {
    case TD.vo.Filter.PHRASE:
        return "";
    case TD.vo.Filter.SENDER:
        return TD.i("user");
    case TD.vo.Filter.SOURCE:
        return TD.i("source");
    case TD.vo.Filter.FOLLOWERS:
        return TD.i("followers");
    case TD.vo.Filter.IS_RETWEET:
        return TD.i("retweets");
    case TD.vo.Filter.HAS_MEDIA:
        return TD.i("media");
    case TD.vo.Filter.HAS_LINK:
        return TD.i("links");
    case TD.vo.Filter.IS_FROM_VERIFIED:
        return TD.i("verified")
    }
    return ""
}, TD.vo.Filter.prototype._getFilterTarget = function (e) {
    return "parent" !== this.filterTarget && e.targetTweet ? e.targetTweet : e
}, TD.vo.Filter.prototype._testString = function (e) {
    if (!e || !this.value) return !0;
    if (this.exact) {
        if (e === this.value) return this.positive;
        if (this.fuzzy && "@" + e === this.value) return this.positive
    } else if (-1 !== e.indexOf(this.value)) return this.positive;
    return !this.positive
}, TD.vo.Filter.prototype._testNumber = function (e) {
    if (!_.isNumber(e) || !_.isNumber(this.value)) return !0;
    if (this.exact) {
        if (e === this.value) return this.positive
    } else if (this.range && e >= this.value) return this.positive;
    return !this.positive
}, TD.vo.Filter.prototype._testBoolean = function (e) {
    return _.isBoolean(e) && _.isBoolean(this.value) ? e === this.value ? this.positive : !this.positive : !0
}, TD.vo.Filter.prototype.toBackendState = function () {
    return {
        type: this.type,
        value: this.value,
        positive: this.positive,
        exact: this.exact,
        fuzzy: this.fuzzy,
        range: this.range
    }
}, TD.vo.Filter.prototype.fromBackendState = function (e) {
    this.type = e.type, this.value = e.value, this.positive = e.positive, this.exact = e.exact, this.fuzzy = e.fuzzy, this.range = e.range, this.id = this.generateLocalID()
}, TD.vo.SearchFilter = function (e) {
    this.fromJSONObject(e)
}, TD.vo.SearchFilter.prototype.action = null, TD.vo.SearchFilter.prototype.content = null, TD.vo.SearchFilter.prototype.engagement = null, TD.vo.SearchFilter.prototype.user = null, TD.vo.SearchFilter.prototype.toJSONObject = function () {
    var e = {
        action: this.action.toJSONObject(),
        content: this.content.toJSONObject(),
        engagement: this.engagement.toJSONObject(),
        user: this.user.toJSONObject()
    };
    return e
}, TD.vo.SearchFilter.prototype.fromJSONObject = function (e) {
    e = e || {}, this.action = new TD.vo.ActionFilter(e.action), this.content = new TD.vo.ContentFilter(e.content), this.engagement = new TD.vo.EngagementFilter(e.engagement), this.user = new TD.vo.UserFilter(e.user)
}, TD.vo.SearchFilter.prototype.getQueryString = function () {
    var e = [this.content.getQueryString(), this.engagement.getQueryString(), this.user.getQueryString()];
    return e.join(" ").trim()
}, TD.vo.SearchFilter.prototype.getFilters = function () {
    var e = this.action.getFilters();
    return e = e.concat(this.content.getFilters()), e = e.concat(this.engagement.getFilters()), e = e.concat(this.user.getFilters())
}, TD.vo.ActionFilter = function (e) {
    this.fromJSONObject(e)
}, TD.vo.ActionFilter.prototype.showMentions = !0, TD.vo.ActionFilter.prototype.showRetweets = !0, TD.vo.ActionFilter.prototype.showFavorites = !0, TD.vo.ActionFilter.prototype.showFollowers = !0, TD.vo.ActionFilter.prototype.showLists = !0, TD.vo.ActionFilter.MAX_INTERACTION_FILTERS = 6, TD.vo.ActionFilter.MAX_ACTIVITY_FILTERS = 4, TD.vo.ActionFilter.prototype.setShowMentions = function (e) {
    this.showMentions = Boolean(e)
}, TD.vo.ActionFilter.prototype.setShowRetweets = function (e) {
    this.showRetweets = Boolean(e)
}, TD.vo.ActionFilter.prototype.setShowFavorites = function (e) {
    this.showFavorites = Boolean(e)
}, TD.vo.ActionFilter.prototype.setShowFollowers = function (e) {
    this.showFollowers = Boolean(e)
}, TD.vo.ActionFilter.prototype.setShowLists = function (e) {
    this.showLists = Boolean(e)
}, TD.vo.ActionFilter.prototype.toJSONObject = function () {
    return {
        showMentions: this.showMentions,
        showRetweets: this.showRetweets,
        showFavorites: this.showFavorites,
        showFollowers: this.showFollowers,
        showLists: this.showLists
    }
}, TD.vo.ActionFilter.prototype.fromJSONObject = function (e) {
    e && (this.setShowMentions(e.showMentions), this.setShowRetweets(e.showRetweets), this.setShowFavorites(e.showFavorites), this.setShowFollowers(e.showFollowers), this.setShowLists(e.showLists))
}, TD.vo.ActionFilter.prototype.getSummaryText = function (e) {
    var t, i, s, n = [],
        r = e === TD.util.columnUtils.columnMetaTypes.ACTIVITY;
    s = r ? TD.vo.ActionFilter.MAX_ACTIVITY_FILTERS : TD.vo.ActionFilter.MAX_INTERACTION_FILTERS;
    var o = this.getFilters();
    return o.length === s ? t = TD.i("Filter error") : 0 === o.length ? t = r ? TD.i("All activity") : TD.i("All interactions") : 1 !== o.length || r ? (r || (this.showMentions && n.push(TD.i("mentions")), this.showRetweets && n.push(TD.i("retweets"))), this.showFavorites && n.push(TD.i("favorites")), this.showFollowers && n.push(TD.i("followers")), this.showLists && n.push(TD.i("lists")), i = n.pop(), o.length === s - 1 || this.showLists && o.length === s - 2 ? t = TD.i("{{actionType}} only", {
        actionType: i
    }) : (n = n.join(", "), t = TD.i("{{actionTypes}} and {{lastActionType}}", {
        actionTypes: n,
        lastActionType: i
    }))) : this.showMentions ? this.showRetweets ? this.showFavorites ? this.showFollowers ? this.showLists || (t = TD.i("All except lists")) : t = TD.i("All except followers") : t = TD.i("All except favorites") : t = TD.i("All except retweets") : t = TD.i("All except mentions"), t
}, TD.vo.ActionFilter.prototype.getFilters = function () {
    var e, t = [];
    return this.showMentions || (e = new TD.vo.Filter(TD.vo.Filter.CHIRP_TYPE, TD.services.TwitterAction.MENTION, !1), t.push(e)), this.showRetweets || (e = new TD.vo.Filter(TD.vo.Filter.CHIRP_TYPE, TD.services.TwitterAction.RETWEET, !1), t.push(e)), this.showFavorites || (e = new TD.vo.Filter(TD.vo.Filter.CHIRP_TYPE, TD.services.TwitterAction.FAVORITE, !1), t.push(e)), this.showFollowers || (e = new TD.vo.Filter(TD.vo.Filter.CHIRP_TYPE, TD.services.TwitterAction.FOLLOW, !1), t.push(e)), this.showLists || (e = new TD.vo.Filter(TD.vo.Filter.CHIRP_TYPE, TD.services.TwitterAction.LIST_CREATED, !1), t.push(e), e = new TD.vo.Filter(TD.vo.Filter.CHIRP_TYPE, TD.services.TwitterAction.LIST_MEMBER_ADDED, !1), t.push(e)), t
}, TD.vo.ContentFilter = function (e) {
    this.fromJSONObject(e)
}, TD.vo.ContentFilter.TYPE_ANYTHING = "anything", TD.vo.ContentFilter.TYPE_IMG = "img", TD.vo.ContentFilter.TYPE_VID = "vid", TD.vo.ContentFilter.TYPE_IMG_AND_VID = "img_vid", TD.vo.ContentFilter.TYPE_LINKS = "links", TD.vo.ContentFilter.LANG_ANY = "any", TD.vo.ContentFilter.prototype.matching = "", TD.vo.ContentFilter.prototype.excluding = "", TD.vo.ContentFilter.prototype.type = "anything", TD.vo.ContentFilter.prototype.lang = "any", TD.vo.ContentFilter.prototype.includeRTs = !0, TD.vo.ContentFilter.prototype.setMatching = function (e) {
    this.matching = e || ""
}, TD.vo.ContentFilter.prototype.setExcluding = function (e) {
    this.excluding = e || ""
}, TD.vo.ContentFilter.prototype.setType = function (e) {
    this.type = e || TD.vo.ContentFilter.TYPE_ANYTHING
}, TD.vo.ContentFilter.prototype.setLanguage = function (e) {
    this.lang = e || TD.vo.ContentFilter.LANG_ANY
}, TD.vo.ContentFilter.prototype.setIncludeRTs = function (e) {
    this.includeRTs = void 0 === e ? !0 : Boolean(e)
}, TD.vo.ContentFilter.prototype.toJSONObject = function () {
    return {
        matching: this.matching,
        excluding: this.excluding,
        type: this.type,
        lang: this.lang,
        includeRTs: this.includeRTs
    }
}, TD.vo.ContentFilter.prototype.fromJSONObject = function (e) {
    e && (this.setMatching(e.matching), this.setExcluding(e.excluding), this.setType(e.type), this.setLanguage(e.lang), this.setIncludeRTs(e.includeRTs))
}, TD.vo.ContentFilter.prototype.getQueryString = function () {
    var e = [];
    switch (this.type) {
    case TD.vo.ContentFilter.TYPE_IMG:
        e.push("(filter:images)");
        break;
    case TD.vo.ContentFilter.TYPE_VID:
        e.push("(filter:videos)");
        break;
    case TD.vo.ContentFilter.TYPE_IMG_AND_VID:
        e.push("(filter:images OR filter:videos)");
        break;
    case TD.vo.ContentFilter.TYPE_LINKS:
        e.push("filter:links")
    }
    return this.lang !== TD.vo.ContentFilter.LANG_ANY && e.push("lang:" + this.lang), this.includeRTs || e.push("exclude:nativeretweets exclude:retweets"), this.excluding && e.push(this.getExcludingQuery()), e.join(" ")
}, TD.vo.ContentFilter.prototype.getSummaryText = function () {
    var e, t = [];
    switch (this.type) {
    case TD.vo.ContentFilter.TYPE_IMG:
        t.push(TD.i("showing images"));
        break;
    case TD.vo.ContentFilter.TYPE_VID:
        t.push(TD.i("showing videos"));
        break;
    case TD.vo.ContentFilter.TYPE_IMG_AND_VID:
        t.push(TD.i("showing images and videos"));
        break;
    case TD.vo.ContentFilter.TYPE_LINKS:
        t.push(TD.i("showing links"))
    }
    if (this.matching && t.push(TD.i("matching ‘{{{matching}}}’", {
        matching: this.matching
    })), this.excluding && t.push(TD.i("excluding ‘{{{excluding}}}’", {
        excluding: this.excluding
    })), this.lang !== TD.vo.ContentFilter.LANG_ANY) {
        var i = TD.languages.getLanguageFromISOCode(this.lang);
        t.push(TD.i("written in {{{lang}}}", {
            lang: i.localized_name
        }))
    }
    return this.includeRTs || t.push(TD.i("retweets excluded")), e = 0 === t.length ? TD.i("any") : t.join(", ")
}, TD.vo.ContentFilter.prototype.getExcludingQuery = function () {
    if (!this.excluding) return "";
    var e = TD.services.TwitterSearchParser.extractPhrases(this.excluding, !0);
    return e = e.map(function (e) {
        return "-" + e
    }), e.join(" ")
}, TD.vo.ContentFilter.prototype.getFilters = function () {
    var e, t, i = [];
    switch (this.type) {
    case TD.vo.ContentFilter.TYPE_IMG:
        e = new TD.vo.Filter(TD.vo.Filter.HAS_IMAGE, !0, !0), i.push(e);
        break;
    case TD.vo.ContentFilter.TYPE_VID:
        e = new TD.vo.Filter(TD.vo.Filter.HAS_VIDEO, !0, !0), i.push(e);
        break;
    case TD.vo.ContentFilter.TYPE_IMG_AND_VID:
        e = new TD.vo.Filter(TD.vo.Filter.HAS_MEDIA, !0, !0), i.push(e);
        break;
    case TD.vo.ContentFilter.TYPE_LINKS:
        e = new TD.vo.Filter(TD.vo.Filter.HAS_LINK, !0, !0), i.push(e)
    }
    return this.matching && (t = TD.services.TwitterSearchParser.extractPhrases(this.matching, !1), t.forEach(function (t) {
        e = new TD.vo.Filter(TD.vo.Filter.PHRASE, t, !0), i.push(e)
    })), this.excluding && (t = TD.services.TwitterSearchParser.extractPhrases(this.excluding, !1), t.forEach(function (t) {
        e = new TD.vo.Filter(TD.vo.Filter.PHRASE, t, !1), i.push(e)
    })), this.includeRTs || (e = new TD.vo.Filter(TD.vo.Filter.IS_RETWEET, !1, !0), i.push(e)), i
}, TD.vo.ContentFilter.prototype.hasActiveMediaFilter = function () {
    return [TD.vo.ContentFilter.TYPE_IMG, TD.vo.ContentFilter.TYPE_VID, TD.vo.ContentFilter.TYPE_IMG_AND_VID].indexOf(this.type) > -1
}, TD.vo.EngagementFilter = function (e) {
    this.fromJSONObject(e)
}, TD.vo.EngagementFilter.prototype.minReplies = 0, TD.vo.EngagementFilter.prototype.minRetweets = 0, TD.vo.EngagementFilter.prototype.minFavorites = 0, TD.vo.EngagementFilter.prototype.setMinReplies = function (e) {
    this.minReplies = parseInt(e, 10)
}, TD.vo.EngagementFilter.prototype.setMinRetweets = function (e) {
    this.minRetweets = parseInt(e, 10)
}, TD.vo.EngagementFilter.prototype.setMinFavorites = function (e) {
    this.minFavorites = parseInt(e, 10)
}, TD.vo.EngagementFilter.prototype.toJSONObject = function () {
    return {
        minReplies: this.minReplies,
        minRetweets: this.minRetweets,
        minFavorites: this.minFavorites
    }
}, TD.vo.EngagementFilter.prototype.fromJSONObject = function (e) {
    e && (this.setMinReplies(e.minReplies), this.setMinRetweets(e.minRetweets), this.setMinFavorites(e.minFavorites))
}, TD.vo.EngagementFilter.prototype.getQueryString = function () {
    if (!TD.decider.get(TD.decider.ENGAGEMENT_FILTER)) return "";
    var e = [];
    return this.minReplies > 0 && e.push("min_replies:" + this.minReplies), this.minRetweets > 0 && e.push("min_retweets:" + this.minRetweets), this.minFavorites > 0 && e.push("min_faves:" + this.minFavorites), e.join(" ")
}, TD.vo.EngagementFilter.prototype.getSummaryText = function () {
    var e, t = [];
    switch (this.minReplies > 0 && t.push({
        count: this.minReplies,
        label: TD.i("replies")
    }), this.minRetweets > 0 && t.push({
        count: this.minRetweets,
        label: TD.i("retweets")
    }), this.minFavorites > 0 && t.push({
        count: this.minFavorites,
        label: TD.i("favorites")
    }), t.length) {
    case 0:
        e = TD.i("any");
        break;
    case 1:
        e = TD.i("at least {{#0}}{{count}} {{label}}{{/0}}", t);
        break;
    case 2:
        e = TD.i("at least {{#0}}{{count}} {{label}}{{/0}} and {{#1}}{{count}} {{label}}{{/1}}", t);
        break;
    case 3:
        e = TD.i("at least {{#0}}{{count}} {{label}}{{/0}}, {{#1}}{{count}} {{label}}{{/1}} and {{#2}}{{count}} {{label}}{{/2}}", t)
    }
    return e
}, TD.vo.EngagementFilter.prototype.getFilters = function () {
    return []
}, TD.vo.UserFilter = function (e) {
    this.fromJSONObject(e)
}, TD.vo.UserFilter.FROM_ALL = "all", TD.vo.UserFilter.FROM_USER = "user", TD.vo.UserFilter.FROM_VERIFIED = "verified", TD.vo.UserFilter.FROM_LIST = "list", TD.vo.UserFilter.prototype.from_type = null, TD.vo.UserFilter.prototype.from_name = null, TD.vo.UserFilter.prototype.mention_name = null, TD.vo.UserFilter.prototype.setFrom = function (e, t) {
    t && e !== TD.vo.UserFilter.FROM_VERIFIED && e !== TD.vo.UserFilter.FROM_ALL || (t = ""), this.from_type = e, this.from_name = TD.util.deMentionify(t)
}, TD.vo.UserFilter.prototype.setMentioned = function (e) {
    this.mention_name = e || "", this.mention_name = TD.util.deMentionify(this.mention_name)
}, TD.vo.UserFilter.prototype.toJSONObject = function () {
    return {
        from_type: this.from_type,
        from_name: this.from_name,
        mention_name: this.mention_name
    }
}, TD.vo.UserFilter.prototype.fromJSONObject = function (e) {
    e && (this.setFrom(e.from_type, e.from_name), this.setMentioned(e.mention_name))
}, TD.vo.UserFilter.prototype.getQueryString = function () {
    var e = [];
    switch (this.from_type) {
    case TD.vo.UserFilter.FROM_USER:
        e.push("from:" + this.from_name);
        break;
    case TD.vo.UserFilter.FROM_VERIFIED:
        e.push("filter:verified");
        break;
    case TD.vo.UserFilter.FROM_LIST:
        e.push("list:" + this.from_name)
    }
    return this.mention_name && e.push("@" + this.mention_name), e.join(" ")
}, TD.vo.UserFilter.prototype.getSummaryText = function () {
    var e, t = [];
    switch (this.from_type) {
    case TD.vo.UserFilter.FROM_USER:
        e = TD.storage.accountController.getAccountFromUsername(this.from_name).length > 0, e ? t.push(TD.i("by me (@{{{name}}})", {
            name: this.from_name
        })) : t.push(TD.i("by @{{{name}}}", {
            name: this.from_name
        }));
        break;
    case TD.vo.UserFilter.FROM_VERIFIED:
        t.push(TD.i("by verified users"));
        break;
    case TD.vo.UserFilter.FROM_LIST:
        t.push(TD.i("by members of @{{{name}}}", {
            name: this.from_name
        }))
    }
    return this.mention_name && (e = TD.storage.accountController.getAccountFromUsername(this.mention_name).length > 0, e ? t.push(TD.i("mentioning me (@{{{name}}})", {
        name: this.mention_name
    })) : t.push(TD.i("mentioning @{{{name}}}", {
        name: this.mention_name
    }))), 0 === t.length && t.push(TD.i("any")), t.join(", ")
}, TD.vo.UserFilter.prototype.getFilters = function () {
    var e, t = [];
    switch (this.mention_name && (e = new TD.vo.Filter(TD.vo.Filter.PHRASE, TD.util.atMentionify(this.mention_name), !0), t.push(e)), this.from_type) {
    case TD.vo.UserFilter.FROM_USER:
        e = new TD.vo.Filter(TD.vo.Filter.SENDER, this.from_name, !0), t.push(e);
        break;
    case TD.vo.UserFilter.FROM_VERIFIED:
        e = new TD.vo.Filter(TD.vo.Filter.IS_FROM_VERIFIED, !0, !0), t.push(e)
    }
    return t
}, TD.util.columnUtils = function () {
    var e = {};
    return e.storageColumnTypes = {
        OTHER: "other",
        HOME: "home",
        ME: "me",
        INBOX: "privateMe",
        SCHEDULED: "scheduled"
    }, e.feedTypes = {
        HOME: "home",
        USERTIMELINE: "usertimeline",
        INTERACTIONS: "interactions",
        MENTIONS: "mentions",
        SEARCH: "search",
        LIST: "list",
        DIRECT: "direct",
        USERTWEETS: "usertweets",
        FAVORITES: "favorites",
        NETWORKACTIVITY: "networkactivity"
    }, e.columnMetaTypes = {
        TIMELINE: "col_timeline",
        INTERACTIONS: "col_interactions",
        MENTIONS: "col_mentions",
        FOLLOWERS: "col_followers",
        SEARCH: "col_search",
        LIST: "col_list",
        MESSAGES: "col_messages",
        USERTWEETS: "col_usertweets",
        FAVORITES: "col_favorites",
        ACTIVITY: "col_activity",
        HOME: "col_home",
        ME: "col_me",
        INBOX: "col_inbox",
        SCHEDULED: "col_scheduled",
        UNKNOWN: "col_unknown"
    }, e.columnMetaTypeToScribeNamespace = {}, TD.util.extendObjectWith(e.columnMetaTypeToScribeNamespace, [
        [e.columnMetaTypes.TIMELINE, {
            page: "home",
            section: ""
        }],
        [e.columnMetaTypes.INTERACTIONS, {
            page: "connect",
            section: "activity"
        }],
        [e.columnMetaTypes.MENTIONS, {
            page: "connect",
            section: "mentions"
        }],
        [e.columnMetaTypes.SEARCH, {
            page: "search",
            section: "tweets"
        }],
        [e.columnMetaTypes.LIST, {
            page: "list",
            section: "tweets"
        }],
        [e.columnMetaTypes.USERTWEETS, {
            page: "profile_tweets",
            section: ""
        }],
        [e.columnMetaTypes.FAVORITES, {
            page: "favorites",
            section: ""
        }],
        [e.columnMetaTypes.ACTIVITY, {
            page: "network_activity",
            section: ""
        }],
        [e.columnMetaTypes.HOME, {
            page: "home",
            section: ""
        }],
        [e.columnMetaTypes.ME, {
            page: "connect",
            section: "mentions"
        }]
    ]), e.columnIconClasses = {
        TWITTER: "icon-twitter",
        HOME: "icon-home",
        INTERACTIONS: "icon-interactions",
        ACTIVITY: "icon-activity",
        MENTIONS: "icon-mention",
        FOLLOWERS: "icon-new-followers",
        MESSAGES: "icon-message",
        SEARCH: "icon-search",
        LIST: "icon-list",
        TWEETS: "icon-tweets",
        FAVORITES: "icon-favorite",
        SCHEDULED: "icon-scheduled",
        TRENDS: "icon-trends"
    }, e.columnMetaTypeToIconClass = {}, TD.util.extendObjectWith(e.columnMetaTypeToIconClass, [
        [e.columnMetaTypes.TIMELINE, e.columnIconClasses.HOME],
        [e.columnMetaTypes.INTERACTIONS, e.columnIconClasses.INTERACTIONS],
        [e.columnMetaTypes.MENTIONS, e.columnIconClasses.MENTIONS],
        [e.columnMetaTypes.FOLLOWERS, e.columnIconClasses.FOLLOWERS],
        [e.columnMetaTypes.SEARCH, e.columnIconClasses.SEARCH],
        [e.columnMetaTypes.LIST, e.columnIconClasses.LIST],
        [e.columnMetaTypes.MESSAGES, e.columnIconClasses.MESSAGES],
        [e.columnMetaTypes.USERTWEETS, e.columnIconClasses.TWEETS],
        [e.columnMetaTypes.FAVORITES, e.columnIconClasses.FAVORITES],
        [e.columnMetaTypes.ACTIVITY, e.columnIconClasses.ACTIVITY],
        [e.columnMetaTypes.HOME, e.columnIconClasses.HOME],
        [e.columnMetaTypes.ME, e.columnIconClasses.MENTIONS],
        [e.columnMetaTypes.INBOX, e.columnIconClasses.MESSAGES],
        [e.columnMetaTypes.SCHEDULED, e.columnIconClasses.SCHEDULED],
        [e.columnMetaTypes.UNKNOWN, e.columnIconClasses.TWITTER]
    ]), e.columnMetaTypeToTitleTemplateData = {}, TD.util.extendObjectWith(e.columnMetaTypeToTitleTemplateData, [
        [e.columnMetaTypes.TIMELINE, {
            title: TD.i("Timeline", null, !0),
            needsUserAttribution: !0
        }],
        [e.columnMetaTypes.INTERACTIONS, {
            title: TD.i("Interactions", null, !0),
            needsUserAttribution: !0
        }],
        [e.columnMetaTypes.MENTIONS, {
            title: TD.i("Mentions", null, !0),
            needsUserAttribution: !0
        }],
        [e.columnMetaTypes.FOLLOWERS, {
            title: TD.i("Followers", null, !0),
            needsUserAttribution: !0
        }],
        [e.columnMetaTypes.SEARCH, {
            needsUserAttribution: !0
        }],
        [e.columnMetaTypes.LIST, {
            needsUserAttribution: !0
        }],
        [e.columnMetaTypes.MESSAGES, {
            title: TD.i("Messages", null, !0),
            needsUserAttribution: !0
        }],
        [e.columnMetaTypes.USERTWEETS, {
            title: TD.i("Tweets", null, !0),
            needsUserAttribution: !0
        }],
        [e.columnMetaTypes.FAVORITES, {
            title: TD.i("Favorites", null, !0),
            needsUserAttribution: !0
        }],
        [e.columnMetaTypes.ACTIVITY, {
            title: TD.i("Activity", null, !0),
            needsUserAttribution: !0
        }],
        [e.columnMetaTypes.HOME, {
            title: TD.i("Home", null, !0)
        }],
        [e.columnMetaTypes.ME, {
            title: TD.i("Me", null, !0)
        }],
        [e.columnMetaTypes.INBOX, {
            title: TD.i("Inbox", null, !0)
        }],
        [e.columnMetaTypes.SCHEDULED, {
            title: TD.i("Scheduled", null, !0),
            needsUserAttribution: !0
        }],
        [e.columnMetaTypes.UNKNOWN, {
            title: TD.i("Custom Column", null, !0)
        }]
    ]), e.embeddableColumnTypes = [e.columnMetaTypes.FAVORITES, e.columnMetaTypes.USERTWEETS, e.columnMetaTypes.SEARCH, e.columnMetaTypes.LIST], e.filterableColumnTypes = [e.columnMetaTypes.TIMELINE, e.columnMetaTypes.INTERACTIONS, e.columnMetaTypes.MENTIONS, e.columnMetaTypes.FOLLOWERS, e.columnMetaTypes.SEARCH, e.columnMetaTypes.LIST, e.columnMetaTypes.MESSAGES, e.columnMetaTypes.USERTWEETS, e.columnMetaTypes.FAVORITES, e.columnMetaTypes.ACTIVITY, e.columnMetaTypes.HOME, e.columnMetaTypes.ME, e.columnMetaTypes.INBOX, e.columnMetaTypes.SCHEDULED], e.actionColumnTypes = [e.columnMetaTypes.INTERACTIONS, e.columnMetaTypes.MENTIONS, e.columnMetaTypes.ACTIVITY, e.columnMetaTypes.FOLLOWERS], e.singleActionColumnTypes = [e.columnMetaTypes.MENTIONS, e.columnMetaTypes.FOLLOWERS], e.mediaPreviewableColumnTypes = [e.columnMetaTypes.TIMELINE, e.columnMetaTypes.INTERACTIONS, e.columnMetaTypes.MENTIONS, e.columnMetaTypes.SEARCH, e.columnMetaTypes.LIST, e.columnMetaTypes.USERTWEETS, e.columnMetaTypes.FAVORITES, e.columnMetaTypes.ACTIVITY, e.columnMetaTypes.HOME, e.columnMetaTypes.ME], e.getColumnType = function (t) {
        var i = t.model.getType(),
            s = t.getFeeds();
        switch (i) {
        case e.storageColumnTypes.HOME:
            return e.columnMetaTypes.HOME;
        case e.storageColumnTypes.ME:
            return e.columnMetaTypes.ME;
        case e.storageColumnTypes.INBOX:
            return e.columnMetaTypes.INBOX;
        case e.storageColumnTypes.SCHEDULED:
            return e.columnMetaTypes.SCHEDULED;
        default:
            return 1 === s.length ? e._inferColumnTypeFromFeed(s[0], t) : e.columnMetaTypes.UNKNOWN
        }
    }, e.isMessageColumn = function (t) {
        var i = e.getColumnType(t);
        return i === e.columnMetaTypes.MESSAGES
    }, e._twitterFeedTypeToColumnMetaType = {}, TD.util.extendObjectWith(e._twitterFeedTypeToColumnMetaType, [
        [e.feedTypes.HOME, e.columnMetaTypes.TIMELINE],
        [e.feedTypes.USERTIMELINE, e.columnMetaTypes.TIMELINE],
        [e.feedTypes.INTERACTIONS, e.columnMetaTypes.INTERACTIONS],
        [e.feedTypes.MENTIONS, e.columnMetaTypes.MENTIONS],
        [e.feedTypes.SEARCH, e.columnMetaTypes.SEARCH],
        [e.feedTypes.LIST, e.columnMetaTypes.LIST],
        [e.feedTypes.DIRECT, e.columnMetaTypes.MESSAGES],
        [e.feedTypes.USERTWEETS, e.columnMetaTypes.USERTWEETS],
        [e.feedTypes.FAVORITES, e.columnMetaTypes.FAVORITES],
        [e.feedTypes.NETWORKACTIVITY, e.columnMetaTypes.ACTIVITY]
    ]), e._inferColumnTypeFromFeed = function (t, i) {
        var s, n, r, o = t.getService(),
            a = t.getType(),
            c = t.getMetadata(),
            l = e.columnMetaTypes.UNKNOWN;
        if ("twitter" === o) switch (l = e._twitterFeedTypeToColumnMetaType[a] || l, a) {
        case e.feedTypes.SEARCH:
            var u = twttr.txt.extractMentionsWithIndices(c.term);
            if (1 === u.length) {
                var d = u[0];
                0 === d.indices[0] && d.indices[1] === c.term.length && (l = e.columnMetaTypes.MENTIONS)
            }
            break;
        case e.feedTypes.INTERACTIONS:
            s = i.model.getFilters(), s && (n = new TD.vo.ActionFilter(s.action), r = TD.vo.ActionFilter.MAX_INTERACTION_FILTERS, n.getFilters().length === r - 1 && n.showFollowers && (l = e.columnMetaTypes.FOLLOWERS))
        }
        return l
    }, e.getColumnIconClassByColumnType = function (t) {
        return e.columnMetaTypeToIconClass[t]
    }, e.getColumnTitleHTML = function (t) {
        for (var i, s, n, r, o, a, c, l, u = !1, d = t.getColumnType(), h = t.getFeeds(), p = t.model.getTitle(), m = e.columnMetaTypeToTitleTemplateData[d], f = {}, g = 0; h.length > g; g++) {
            if (i = h[g], s = i.getType(), n = i.getMetadata()) switch (s) {
            case e.feedTypes.LIST:
                a = TD.cache.names.getScreenName(n.ownerId), l = TD.cache.names.getListName(n.listId, n.ownerId), l ? f.title = l : u = !0;
                break;
            case e.feedTypes.SEARCH:
                d === e.columnMetaTypes.MENTIONS ? a = n.term : c = n.baseQuery ? n.baseQuery : n.term, c && (f.title = c, -1 === c.indexOf('"') && (f.quote = !0));
                break;
            default:
                n.id ? (a = TD.cache.names.getScreenName(n.id), a || (u = !0)) : d === e.columnMetaTypes.SCHEDULED && (a = TD.i("All accounts")), f.title = m.title
            }
            a || (r = TD.storage.accountController.get(i.getAccountKey()), o = r.getType(), "tweetdeck" !== o && (a = r.getUsername(), "twitter" === o && (a = TD.util.atMentionify(a))))
        }
        return m.needsUserAttribution && (a ? (f.needsUserAttribution = m.needsUserAttribution, f.screenName = a) : u = !0), u ? TD.util.escape(p) : d === e.columnMetaTypes.UNKNOWN ? p ? TD.util.escape(p) : TD.ui.template.render("column_title", f) : TD.ui.template.render("column_title", f)
    }, e.inferFeedTypeFromActionFilter = function (e) {
        var t = this.feedTypes.INTERACTIONS;
        return e.getFilters().length === TD.vo.ActionFilter.MAX_INTERACTION_FILTERS - 1 && e.showMentions && (t = this.feedTypes.MENTIONS), t
    }, e
}(), TD.cache.lists = function () {
    function e(e) {
        var i = t[e] || {};
        return t[e] = i, i
    }
    var t = {}, i = {};
    return i.add = function (t) {
        var i = e(t.account.getKey());
        i[t.id] = t, TD.controller.feedManager.fixListFeeds(), TD.cache.names.updateScreenName(t.user.id, t.user.screenName), TD.cache.names.updateListName(t.id, t.name)
    }, i.unsubscribe = function (t) {
        var i = e(t.account.getKey());
        delete i[t.id]
    }, i.purge = function (e) {
        var i;
        if (_.each(t, function (t) {
            i = i || t[e], delete t[e]
        }), i) {
            var s = TD.storage.Feed.generateKeyFor(i.account.getKey(), "list", {
                listId: e
            });
            TD.controller.feedManager.deleteFeedsWhere(function (e) {
                return e.getKey() === s
            })
        }
    }, i.getListsFor = function (t) {
        return _.values(e(t))
    }, i.find = function (e, i, s, n, r) {
        var o, a = void 0,
            c = void 0;
        return i && s && (o = "@" + i.toLowerCase() + "/" + s.toLowerCase()), _.each(t, function (t, i) {
            r && r !== i || _.each(t, function (t) {
                (e && t.id === e || t.fullName.toLowerCase() === o) && (t.isOwnList() ? a = t : c = t)
            })
        }), n ? a : a || c
    }, i.getAll = function () {
        var e = {};
        return _.each(t, function (t) {
            _.extend(e, t)
        }), _.values(e)
    }, i
}(), TD.cache.LRUQueue = klass(function (e) {
    this.maxSize = e, this.length = 0, this._first = void 0, this._last = void 0, this._index = {}, this._lefts = {}, this._rights = {}
}).methods({
    enqueue: function (e, t) {
        this.dequeue(e), 0 == this.length ? this._first = this._last = e : (this._lefts[this._first] = e, this._rights[e] = this._first, this._first = e), this._index[e] = t, this.length++, this.prune()
    },
    dequeue: function (e) {
        if (!_.isUndefined(this._index[e])) {
            var t = this._lefts[e],
                i = this._rights[e];
            t ? this._rights[t] = i : this._first = i, i ? this._lefts[i] = t : this._last = t, delete this._index[e], delete this._rights[e], delete this._lefts[e], this.length--
        }
    },
    prune: function () {
        for (; this.maxSize && this.length > this.maxSize;) this.dequeue(this._last)
    },
    get: function (e) {
        return this._index[e]
    },
    take: function (e) {
        var t = [],
            i = this._first;
        e = Math.min(e, this.length);
        for (var s = 0; e > s; s++) t.push(this._index[i]), i = this._rights[i];
        return t
    }
}), TD.cache.names = function () {
    return self = {
        SECONDS_IN_ONE_WEEK: 604800,
        _cache: null
    }, self.init = function () {
        self._cache = TD.settings.getNameCache(), $.subscribe("/storage/client/column_order_changed", function () {
            self.prune(), self.commit()
        }), $.subscribe("/storage/column/feeds_changed", function (e, t, i) {
            var s = TD.storage.columnController.get(i.getKey());
            s && !s.temporary && self.commit()
        })
    }, self.getScreenName = function (e) {
        var t, i, s = TD.util.unixTime(new Date),
            n = TD.storage.Account.generateKeyFor("twitter", e),
            r = TD.storage.accountController.get(n);
        return r ? (i = TD.util.atMentionify(r.getUsername()), self.addScreenName(e, i)) : (t = self._cache.users[e], t && (i = t.name), (!t || s > t.timestamp + self.SECONDS_IN_ONE_WEEK) && self._fetchUser(e)), i
    }, self.getListName = function (e, t) {
        var i, s, n = TD.util.unixTime(new Date),
            r = TD.cache.lists.find(e, "", "");
        return r ? (i = r.name, self.addListName(e, i)) : (s = self._cache.lists[e], s && (i = s.name), (!s || n > s.timestamp + self.SECONDS_IN_ONE_WEEK) && self._fetchList(e, t)), i
    }, self.addScreenName = function (e, t) {
        if (self._cache) {
            var i = self._cache.users[e] || {}, s = TD.util.atMentionify(t),
                n = s !== i.name;
            i.name = s, i.timestamp = TD.util.unixTime(new Date), self._cache.users[e] = i, self.commit(), n && TD.storage.notification.notify("/cache/names/change")
        }
    }, self.addListName = function (e, t) {
        if (self._cache) {
            var i = self._cache.lists[e] || {}, s = t !== i.name;
            i.name = t, i.timestamp = TD.util.unixTime(new Date), self._cache.lists[e] = i, self.commit(), s && TD.storage.notification.notify("/cache/names/change")
        }
    }, self.updateScreenName = function (e, t) {
        if (self._cache) {
            var i = self._cache.users[e];
            i && self.addScreenName(e, t)
        }
    }, self.updateListName = function (e, t) {
        if (self._cache) {
            var i = self._cache.lists[e];
            i && self.addScreenName(e, t)
        }
    }, self._fetchUser = function (e) {
        var t = TD.cache.twitterUsers.getById(e);
        t.addCallback(function (t) {
            self.addScreenName(e, t.screenName)
        })
    }, self._fetchList = function (e, t) {
        var i = TD.storage.Account.generateKeyFor("twitter", t),
            s = TD.controller.clients.getClient(i);
        s = s || TD.controller.clients.getPreferredClient("twitter"), s.getList(e, null, null, function (t) {
            self.addListName(e, t.name)
        })
    }, self.commit = _.debounce(function () {
        TD.settings.setNameCache(self._getPrunedCache())
    }, 100), self.prune = function () {
        self._cache = self._getPrunedCache()
    }, self._getPrunedCache = function () {
        var e = {
            users: {},
            lists: {}
        }, t = TD.storage.feedController.getAll();
        return _.each(t, function (t) {
            var i = t.getMetadata();
            if (i) {
                var s = i.id || i.ownerId;
                s && self._cache.users[s] && (e.users[s] = self._cache.users[s]);
                var n = i.listId;
                n && self._cache.lists[n] && (e.lists[n] = self._cache.lists[n])
            }
        }), e
    }, self
}(), TD.cache.twitterUsers = function () {
    function e() {
        _.each(r.splice(o), function (e) {
            delete s[e.id], delete n[e.screenName.toLowerCase()]
        })
    }

    function t(e, t) {
        var i, r, o, a;
        return e || t ? (i = e ? s[e] : n[t.toLowerCase()], i ? a = TD.core.defer.succeed(i) : (r = TD.storage.accountController.getPreferredAccount("twitter"), o = TD.controller.clients.getClient(r.getKey()), a = new TD.core.defer.Deferred, o.showUser(e, t, function (e) {
            a.callback(e)
        }, function (i, s, n) {
            a.errback(new TD.core.defer.XMLHttpRequestError(i, n)), i && i.errors && i.errors.forEach(function (i) {
                i === o.ERRORS.SUSPENDED_USER && $.publish("/user/suspended", [e, t])
            })
        }))) : a = TD.core.defer.fail("Must provide user ID or screen name"), a
    }
    var i = {}, s = {}, n = {}, r = [],
        o = 500;
    return i.add = function (t) {
        var i = s[t.id];
        i ? delete n[i.screenName.toLowerCase()] : r.unshift(t), s[t.id] = t, n[t.screenName.toLowerCase()] = t, e()
    }, i.getById = function (e) {
        return t(e, null)
    }, i.getByScreenName = function (e) {
        return t(null, e)
    }, i
}(), TD.controller.clients = function () {
    var e = {}, t = function (e, t) {
            switch (e) {
            case "twitter":
                return new TD.services.TwitterClient(t);
            case "tweetdeck":
                return new TD.services.TweetDeckClient
            }
        };
    return {
        init: function () {
            $.subscribe("/storage/account/new", function () {
                TD.controller.clients.initialiseClients()
            }), TD.controller.clients.initialiseClients()
        },
        initialiseClients: function () {
            for (var i, s = TD.storage.accountController.getPostingAccounts(), n = 0; s.length > n; n++) i = e[s[n].getKey()], i || (i = t(s[n].getType(), s[n]), e[s[n].getKey()] = i);
            e.tweetdeck || (e.tweetdeck = new TD.services.TweetDeckClient), TD.controller.scheduler.schedulePeriodicTask(1200, TD.controller.clients.refreshRetweetBlockLists)
        },
        getClient: function (t) {
            return e[t]
        },
        getTDClient: function () {
            return e.tweetdeck
        },
        getClientsByService: function (t) {
            var i = [];
            for (var s in e) e[s].type == t && i.push(e[s]);
            return i
        },
        getPreferredClient: function (e) {
            var t = TD.storage.accountController.getPreferredAccount(e);
            return t ? this.getClient(t.getKey()) : void 0
        },
        addClient: function (e, t, i) {
            var s, n = this,
                r = function () {
                    TD.storage.accountController.manage(t), n.initialiseClients()
                }, o = this.getClientsByService(e).length > 0;
            t ? i ? (s = TD.controller.auth.create(e, t), s.start(t, r, o)) : r() : (t = new TD.storage.Account, t.setType(e), s = TD.controller.auth.create(e, t), s.start(t, r, o))
        },
        removeClient: function (t) {
            var i = TD.storage.accountController.get(t);
            e[t] && e[t].cleanUp && e[t].cleanUp(), delete e[t], TD.controller.feedManager.deleteFeedsWhere(function (e) {
                return e.getAccountKey() === t
            }), TD.storage.accountController.blacklistAccount(i)
        },
        refreshRetweetBlockLists: function () {
            if (TD.util.shouldStream()) {
                var e = TD.controller.clients.getClientsByService("twitter");
                _.each(e, function (e) {
                    e.populateRetweetBlockList()
                })
            }
        }
    }
}(), TD.controller.scheduler = function () {
    var e = {};
    return e.QUERY_INTERVAL = 10, e.SLEEP_THRESHOLD = 20, e._tickInterval, e._tasks = {}, e._lastTickTime = null, e.init = function () {
        this._tickInterval = setInterval(this._handleTick, 1e3 * this.QUERY_INTERVAL), e._lastTickTime = Date.now(), this._jQueryCleanupTaskId = TD.controller.scheduler.schedulePeriodicTask(600, function () {
            jQuery.fragments = {}
        }), TD.controller.feedScheduler.init()
    }, e._handleTick = function () {
        var t = Date.now(),
            i = (t - e._lastTickTime) / 1e3 - e.QUERY_INTERVAL;
        e._lastTickTime = t, i > e.SLEEP_THRESHOLD && $(document).trigger("dataAppWokenFromSleep", {
            lateness: i
        }), _.each(e._tasks, function (i) {
            var s = t - i.cycleStartTime;
            s > i.period && (e._fireTask(i), i.cycleStartTime = Date.now())
        })
    }, e._fireTask = function (e) {
        try {
            e.callback()
        } catch (t) {
            console.log("Error in periodic task:", e, "Error:", t)
        }
    }, e.schedulePeriodicTask = function (e, t, i) {
        var s = {
            id: _.uniqueId("sched_task_"),
            callback: t,
            period: 1e3 * e,
            cycleStartTime: Date.now()
        };
        return i && this._fireTask(s), this._tasks[s.id] = s, s.id
    }, e.updatePeriodicTask = function (e, t, i) {
        var s = this._tasks[e];
        s && (s.period = 1e3 * t, s.callback = i || s.callback)
    }, e.restartPeriodicTask = function (e) {
        var t = this._tasks[e];
        t && (t.cycleStartTime = Date.now())
    }, e.removePeriodicTask = function (e) {
        delete this._tasks[e]
    }, e
}(), TD.controller.feedScheduler = function () {
    var e = {};
    return e.DEFAULT_REFRESH_PERIOD = 45, e.THROTTLED_REFRESH_PERIOD = 120, e._activeColumns = {}, e._temporaryColumns = {}, e._taskIndex = {}, e.init = function () {
        this._refreshTaskId = TD.controller.scheduler.schedulePeriodicTask(45, this._trimColumns.bind(this), !1), this._streamingTaskId = TD.controller.scheduler.schedulePeriodicTask(120, this._startStreams.bind(this), !1), $.subscribe("/storage/column/feeds_changed", function (t, i, s) {
            var n = s.getKey(),
                r = TD.controller.columnManager.get(n);
            e.addColumn(r, !r.temporary)
        }), $.subscribe("/storage/column/change", function (t) {
            var i = t.getKey(),
                s = TD.controller.columnManager.get(i),
                n = s.model.getFeedKeys(),
                r = t.getFeedKeys();
            _.isEqual(n, r) || e.addColumn(s, !s.temporary)
        }), $(document).on("dataRateLimit", this._handleRateLimitData.bind(this)), $(document).on("dataUserStreamStatus", this._handleStreamStatus.bind(this)), $(document).on("dataAppWokenFromSleep", this._handleAppWoken.bind(this))
    }, e._getTask = function (e, t) {
        return this._taskIndex[e] ? this._taskIndex[e][t] : void 0
    }, e._setTask = function (e, t, i) {
        this._taskIndex[e] = this._taskIndex[e] || {}, this._taskIndex[e][t] = i
    }, e._handleRateLimitData = function (e, t) {
        var i = this._getTask(t.accountKey, t.feedType);
        i && (i.rateLimitData = t.rateLimitData, this._setPeriodicTask(i))
    }, e._handleStreamStatus = function (t, i) {
        var s = this._taskIndex[i.accountKey];
        _.each(s, e._setPeriodicTask.bind(this))
    }, e._handleAppWoken = function (e, t) {
        _.each(this._taskIndex, function (e) {
            _.each(e, function (e) {
                e.doTask(!0, !0), TD.controller.scheduler.restartPeriodicTask(e.taskId)
            })
        }), TD.controller.stats.appWokenFromSleep(t.lateness)
    }, e.addColumn = function (e, t) {
        var i, s = e.getFeeds(),
            n = e.model.getKey();
        this._activeColumns[n] && this.removeColumn(n), this._activeColumns[n] = e, e.temporary && (this._temporaryColumns[n] = e);
        for (var r = 0; s.length > r; r++) i = TD.controller.feedManager.addFeed(s[r]), i.publishChirpsOrFetch(), this._addFeed(s[r]);
        t && this._startStreams()
    }, e._addFeed = function (e) {
        var t, i = e.getAccountKey(),
            s = e.getType(),
            n = e.getKey();
        t = this._getTask(i, s) || {
            accountKey: i,
            feedType: s,
            feeds: {},
            taskId: null,
            rateLimitData: null,
            doTask: null
        }, t.doTask || (t.doTask = this._doTaskFactory(t)), this._setTask(i, s, t), t.feeds[n] = e, this._setPeriodicTask(t)
    }, e._setPeriodicTask = function (e) {
        var t = this._calculatePeriod(e);
        e.taskId ? TD.controller.scheduler.updatePeriodicTask(e.taskId, t) : e.taskId = TD.controller.scheduler.schedulePeriodicTask(t, e.doTask, !1)
    }, e._doTaskFactory = function (t) {
        return function (i, s) {
            var n = _.map(t.feeds, function (t, n) {
                return e._refreshFeed(n, i, s)
            });
            return TD.core.defer.gatherResults(n)
        }
    }, e._calculatePeriod = function (t) {
        var i, s, n, r, o, a, c, l = this.DEFAULT_REFRESH_PERIOD;
        return t.rateLimitData && (i = t.rateLimitData.rateLimitRemaining - 10, s = t.rateLimitData.rateLimitTotal, n = t.rateLimitData.rateLimitReset + 10, r = Date.now() / 1e3, o = n - r, c = _.filter(t.feeds, function (t) {
            var i = t.getKey(),
                s = Boolean(_.some(e._temporaryColumns, function (e) {
                    return -1 !== e.model.getFeedKeys().indexOf(i)
                }));
            return s || !TD.controller.feedManager.isStreaming(i)
        }), o > 0 && i > 0 && c.length > 0 ? (a = i / c.length, l = o / a, l = Math.min(l, o)) : l = 0 >= o ? this.DEFAULT_REFRESH_PERIOD : o), l = Math.round(l), l = Math.max(l, 10), l = Math.min(l, 900), TD.decider.get(TD.decider.THROTTLE_POLLING_PERIOD) && (l = Math.max(l, this.THROTTLED_REFRESH_PERIOD)), l
    }, e._refreshFeed = function (e, t, i) {
        var t = t || Boolean(_.some(this._temporaryColumns, function (t) {
            return -1 !== t.model.getFeedKeys().indexOf(e)
        })),
            s = TD.controller.feedManager.getPoller(e);
        return i && s.removeAll(), s.refresh(t, i)
    }, e.removeColumn = function (e) {
        delete this._activeColumns[e], delete this._temporaryColumns[e], this._rebuildTaskIndex(), TD.controller.feedManager.cleanupFeeds()
    }, e._rebuildTaskIndex = function () {
        _.each(this._taskIndex, function (e) {
            _.each(e, function (e) {
                e.feeds = {}
            })
        }), _.each(this._activeColumns, function (t) {
            _.each(t.getFeeds(), function (t) {
                e._addFeed(t)
            })
        }), _.each(this._taskIndex, function (e) {
            _.each(e, function (e) {
                _.isEmpty(e.feeds) && (TD.controller.scheduler.removePeriodicTask(e.taskId), e.taskId = null)
            })
        })
    }, e.refreshColumn = function (e) {
        var t, i = this._activeColumns[e];
        if (i) {
            t = i.getFeeds();
            for (var s = 0; t.length > s; s++) this._refreshFeed(t[s].getKey())
        }
    }, e.refreshAccountFeeds = function (e, t) {
        _.each(this._taskIndex[e], function (e) {
            e.doTask(t)
        })
    }, e._startStreams = function () {
        for (var e = TD.storage.accountController.getAccountsForService("twitter"), t = 0; e.length > t; t++) TD.controller.clients.getClient(e[t].getKey()).checkUserStream()
    }, e._trimColumns = function () {
        _.each(this._activeColumns, function (e) {
            e.trimUpdates()
        })
    }, e
}(), TD.controller.FeedPoller = function (e) {
    this.OPTIMUM_ARRAY_LENGTH = 200, this.CLEANUP_WAIT_PERIOD = 12e4, this.TWEET_ID_QUEUE_LENGTH = 500, this.feed = e, this.mark = "", this.chirpArray = [], this.chirpIndex = {}, this.seenTweetIDs = new TD.cache.LRUQueue(this.TWEET_ID_QUEUE_LENGTH), this.refreshLock = 0, this.REFRESH_LOCK_EXPIRY = 6e4, this.isExhausted = !1, this.lastInfiniteScrollTime = 0, this.shouldSetLatestTime = !1, this._checkNotifications = function () {
        if (this.shouldSetLatestTime = !1, "twitter" === this.feed.getService() && "direct" === this.feed.getType()) this.shouldSetLatestTime = !0;
        else {
            var t = TD.storage.columnController.getColumnsContainingFeed(e.getKey());
            this.shouldSetLatestTime = Boolean(_.find(t, function (e) {
                return e.getHasSound() || e.getHasNotification()
            }))
        }
    };
    var t = function (t, i, s) {
        ("has_notification" === t || "has_sound" === t) && s && _.include(s.getFeedKeys(), e.getKey()) && this._checkNotifications()
    };
    this.subscription = $.subscribe("/storage/column/column_flags_changed", _.bind(t, this)), this._checkNotifications(), this.reorderChirp = function (e) {
        var t = this.chirpIndex[e];
        t && (this.removeChirp(e), this.acceptChirps([t]))
    }, this.sortFunction = function (e, t) {
        return t.created.getTime() - e.created.getTime()
    }, this.removeChirp = function (e) {
        var t, i = this.chirpIndex[e];
        if (i) {
            for (var s = 0; this.chirpArray.length > s; s++)
                if (t = this.chirpArray[s], t === i) {
                    this.chirpArray.splice(s, 1);
                    break
                }
            delete this.chirpIndex[e], $.publish("/delete/" + this.feed.getKey(), [this, [i]])
        }
    }, this.removeWhere = function (e) {
        for (var t = _.filter(this.chirpArray, e), i = t.length; i--;) this.removeChirp(t[i].id)
    }, this.removeAll = function () {
        for (var e = this.chirpArray.length; e--;) this.removeChirp(this.chirpArray[e].id)
    }, this.getRangeStartTime = function () {
        var e;
        Number.MAX_VALUE;
        var t = this.feed;
        return this.isExhausted ? 0 : "twitter" === t.getService() && "direct" === t.getType() ? 0 : "tweetdeck" === t.getService() ? 0 : (e = this.getOldestChirp(), e ? e.created.getTime() : 0)
    }, this.acceptChirps = function (t) {
        var i;
        if (t) {
            i = this.addChirpsToMemCache(t), this.publishChirps(i);
            for (var s = 0, n = 0; i.length > n; n++) s = Math.max(s, i[n].created.getTime());
            this.shouldSetLatestTime && e.setLatestTime(Math.max(e.getLatestTime(), s))
        }
    }, this.refresh = function (e, t) {
        var i = this,
            s = this.feed;
        i.chirpArray;
        var n = (new Date).getTime();
        if (this.refreshLock && !(n > this.refreshLock + this.REFRESH_LOCK_EXPIRY)) return TD.core.defer.succeed();
        var r = TD.controller.clients.getClient(s.getAccountKey());
        if (!r) return TD.core.defer.fail();
        this.refreshLock = n;
        try {
            var o = new TD.core.defer.Deferred;
            return o.addCallback(function (e) {
                i.refreshLock = 0, i.acceptChirps(e)
            }), o.addErrback(function () {
                i.refreshLock = 0
            }), r.refreshFeed(this, !1, _.bind(o.callback, o), _.bind(o.errback, o), e, t), o
        } catch (a) {
            return console.log("Error refreshing", this, ":", a), this.refreshLock = 0, TD.core.defer.fail()
        }
    }, this.publishChirpsOrFetch = function () {
        this.chirpArray && this.chirpArray.length ? this.publishAll() : this.refresh()
    }, this.getOldestChirp = function () {
        return this.chirpArray[this.chirpArray.length - 1]
    }, this.addChirpsToMemCache = function (e) {
        var t, i, s, n, r, o, a = [],
            c = [];
        for (t = 0; e.length > t; t++) i = e[t], s = this.chirpIndex[i.id], n = this.isRepeatedRetweet(i), s ? s.update(i) && c.push(s) : n || (a.push(i), c.push(i), this.chirpIndex[i.id] = i);
        return a.sort(TD.util.chirpDescSort), this.chirpArray.length && a.length && (r = this.chirpArray[0].created.getTime(), o = a[a.length - 1].created.getTime()), this.chirpArray = a.concat(this.chirpArray), r && o && r > o && this.chirpArray.sort(TD.util.chirpDescSort), c
    }, this.isRepeatedRetweet = function (e) {
        var t, i, s = !1;
        return e instanceof TD.services.TwitterStatus && (t = e.getMainTweet().id, i = this.seenTweetIDs.get(t) || 0, s = e.isRetweetedStatus() && i > 0, this.seenTweetIDs.enqueue(t, i + 1)), s
    }, this.fetchOlderChirps = function (e) {
        this.lastInfiniteScrollTime = (new Date).getTime();
        var t = this,
            i = t.feed,
            s = new TD.core.defer.Deferred;
        if ("tweetdeck" === this.feed.getService() && (this.isExhausted = !0), e > this.getRangeStartTime()) s.callback(this.chirpArray);
        else {
            var n = TD.controller.clients.getClient(i.getAccountKey());
            n.refreshFeed(this, !0, function (e) {
                t.addChirpsToMemCache(e), 0 === e.length && (t.isExhausted = !0), s.callback(t.chirpArray)
            }, function (e) {
                s.errback(e)
            })
        }
        return s
    }, this.trimChirps = function () {
        if (!(this.chirpArray.length < this.OPTIMUM_ARRAY_LENGTH)) {
            var e = (new Date).getTime() - this.lastInfiniteScrollTime;
            if (!(this.CLEANUP_WAIT_PERIOD > e)) {
                for (var t = this.chirpArray.splice(this.OPTIMUM_ARRAY_LENGTH, Number.MAX_VALUE), i = 0; t.length > i; i++) delete this.chirpIndex[t[i].id];
                this.isExhausted = !1
            }
        }
    }, this.addChirps = function (e) {
        var t = this.addChirpsToMemCache(e);
        this.publishChirps(t)
    }, this.publishAll = function () {
        this.publishChirps(this.chirpArray)
    }, this.publishChirps = function (e) {
        $.publish("/feed/" + this.feed.getKey(), [this, e, this.feed.getLatestTime()])
    }, this.destroy = function () {
        var e = this.feed;
        this.chirpArray = [], this.chirpIndex = {}, $.unsubscribeAll("/feed/" + e.getKey()), $.unsubscribeAll("/delete/" + e.getKey()), $.unsubscribe(this.subscription)
    }
}, TD.controller.feedManager = function () {
    function e() {
        var e, t = TD.storage.accountController.getDefault(),
            i = t.getKey();
        "twitter" === t.getType() && (e = TD.storage.feedController.getAll(), e = _.filter(e, function (e) {
            return "search" === e.getType() && e.getAccountKey() !== i
        }), _.each(e, function (e) {
            var t = TD.storage.feedController.getOrCreateFeed(e.getType(), e.getService(), i, e.getMetadata());
            TD.controller.feedManager.replaceFeed(e, t)
        }))
    }

    function t(e, t) {
        var i, s = t && t.toLowerCase();
        i = t ? TD.i("User @{{screenName}} has been suspended", {
            screenName: t
        }) : TD.i("User has been suspended"), TD.controller.progressIndicator.addMessage(i), TD.controller.feedManager.deleteWhere(function (i) {
            var n = i.getMainUser && i.getMainUser();
            return n ? e && e == n.id || t && s === n.screenName.toLowerCase() : !1
        })
    }
    var i = {}, s = {};
    return i.init = function () {
        var i, n = TD.storage.feedController.getAll(),
            r = this;
        for (i = 0; n.length > i; i++) {
            var o = n[i];
            s[o.getKey()] = new TD.controller.FeedPoller(o)
        }
        TD.controller.scheduler.schedulePeriodicTask(120, TD.controller.feedManager.trimPollers), $.subscribe("/user/removeTweets", function (e, t, i) {
            r.deleteUserChirps(e, t, i)
        }), $.subscribe("/user/suspended", t), $.subscribe("/storage/client/default_account_changed", e)
    }, i.getPoller = function (e) {
        return s[e]
    }, i.trimPollers = function () {
        for (var e in s) s[e].trimChirps()
    }, i.addFeed = function (e) {
        var t = e.getKey(),
            i = s[t];
        return i ? i : (i = new TD.controller.FeedPoller(e), s[t] = i, i)
    }, i.removeFeed = function (e) {
        var t = e.getKey(),
            i = s[t];
        delete s[t], i.destroy(), "twitter" == e.getService() && (client = TD.controller.clients.getClient(e.getAccountKey()), client && client.checkUserStream())
    }, i.cleanupFeeds = function () {
        var e = TD.controller.columnManager.getAll(),
            t = {};
        for (var n in e)
            for (var r = e[n].getFeeds(), o = 0; r.length > o; o++) t[r[o].getKey()] = !0;
        for (var a in s)
            if (!t[a]) {
                var c = s[a].feed;
                i.removeFeed(c), TD.storage.feedController.remove(c.getKey())
            }
    }, i.deleteChirp = function (e) {
        i.deleteWhere(function (t) {
            if (t.id === e) return !0;
            if (t.getRelatedTweet) {
                var i = t.getRelatedTweet();
                return i && i.id === e
            }
            return !1
        })
    }, i.deleteWhere = function (e, t) {
        var i, n;
        for (var r in s) i = s[r], n = i.feed.getType(), t && "home" !== n && "networkactivity" !== n || i.removeWhere(e)
    }, i.deleteUserChirps = function (e, t, s) {
        e = e.toLowerCase();
        var n = function (i) {
            try {
                var s = i.getCreator && i.getCreator();
                return s && s.screenName.toLowerCase() === e && i.account.getUserID() == t
            } catch (n) {}
            return !1
        };
        i.deleteWhere(n, s)
    }, i.deleteFeedsWhere = function (e) {
        var t, i, s, n, r, o = TD.storage.clientController.client.getColumnOrder();
        for (n = 0; o.length > n; n++) {
            for (t = TD.controller.columnManager.get(o[n]), i = t.getFeeds(), r = i.length - 1; r >= 0; r--) s = i[r], e(s) && (TD.storage.feedController.remove(s), t.removeFeed(s));
            0 === t.getFeedCount() && TD.controller.columnManager.deleteColumn(t.model.getKey())
        }
    }, i.replaceFeed = function (e, t, s) {
        var n = TD.controller.columnManager.getAll();
        s && (n = _.filter(n, function (e) {
            return -1 !== s.indexOf(e.model.getKey())
        })), _.each(n, function (i) {
            i.removeFeed(e) > 0 && i.addFeed(t)
        }), i.cleanupFeeds()
    }, i.fixListFeeds = _.debounce(_.once(function () {
        var e = function (e, t) {
            var i = TD.storage.feedController.getOrCreateFeed(e.getType(), e.getService(), e.getAccountKey(), {
                listId: t.id,
                ownerId: t.user.id
            });
            TD.controller.feedManager.replaceFeed(e, i)
        }, t = [],
            i = TD.storage.feedController.getAll();
        i = _.filter(i, function (e) {
            var t = (e.getType(), e.getMetadata());
            return "list" !== e.getType() || t.listId && t.ownerId ? !1 : !0
        }), _.each(i, function (i) {
            var s = i.getMetadata(),
                n = TD.cache.lists.find(null, s.screenName, s.slug);
            n ? e(i, n) : t.push(i)
        }), _.each(t, function (t) {
            var i = TD.controller.clients.getClient(t.getAccountKey()),
                s = t.getMetadata(),
                n = function (i) {
                    e(t, i)
                }, r = function () {};
            i.getList(null, s.screenName, s.slug, n, r)
        })
    }), 5e3), i.isStreaming = function (e) {
        var t, i, s = this.getPoller(e),
            n = !1;
        return s && (t = s.feed, i = TD.controller.clients.getClient(t.getAccountKey()), n = i.feedIsStreaming(e)), n
    }, i
}(), TD.controller.progressIndicator = function () {
    function e() {
        s = $(".js-progress-indicator"), s.on("click", ".js-dismiss", i)
    }

    function t() {
        var t, c = null;
        if (s && s.length || e(), h) switch (h.state) {
        case o:
            c = TD.i("Failed: {{1}}", {
                1: h.message
            });
            break;
        case n:
            c = TD.i("Success: {{1}}", {
                1: h.message
            });
            break;
        case r:
        case a:
            c = h.message
        }
        if (c) {
            var l = TD.ui.template.render("topbar/alert_message", {
                message: c
            });
            s.html(l);
            var d = s.find(".js-status-message");
            t = u, u = d.height(), t !== u ? (t || d.css("bottom", -u), d.animate({
                bottom: 0
            }, 200)) : d.css("bottom", 0)
        } else i()
    }

    function i() {
        var e = s.find(".js-status-message");
        e.animate({
            bottom: -u
        }, 200, function () {
            s.empty(), h = null
        }), u = 0
    }
    var s, n = "complete",
        r = "working",
        o = "failed",
        a = "message",
        c = 7e3,
        l = 3e3,
        u = 0,
        d = {}, h = null;
    return d.addTask = function (e) {
        var i = _.uniqueId("msg_");
        return h = {
            key: i,
            message: e,
            state: r,
            timeout: null
        }, t(), i
    }, d.addMessage = function (e) {
        var i = _.uniqueId("msg_");
        return h = {
            key: i,
            message: e,
            state: a,
            timeout: null
        }, h.timeout = setTimeout(function () {
            d.deleteTask(i)
        }, c), t(), i
    }, d.deleteTask = function (e) {
        h && h.key === e && (h = null, t())
    }, d.taskComplete = function (e, i) {
        h && h.key === e && (h.state = n, h.message = i || h.message, h.timeout = setTimeout(function () {
            d.deleteTask(e)
        }, l), t())
    }, d.taskFailed = function (e, i) {
        h && h.key === e && (h.state = o, h.message = i || h.message, h.timeout = setTimeout(function () {
            d.deleteTask(e)
        }, c), t())
    }, d.changeMessage = function (e, i) {
        h && h.key === e && (h.message = i, t())
    }, d
}(), TD.controller.notifications = function () {
    var e, t, i, s = 500,
        n = {}, r = !1,
        o = [],
        a = {}, c = !1,
        l = window.webkitNotifications,
        u = !1,
        d = "growl",
        h = "webkit",
        p = "windows",
        m = function (n) {
            var r = n.feed,
                l = n.column,
                m = n.items;
            if (r.managed && (m = m.filter(function (e) {
                return e.passFilters(l.filters) && !e.isOwnChirp()
            }), 0 !== m.length)) {
                var T = [];
                if (l.model.getHasNotification() && u)
                    for (var v = 0; m.length > v; v++) {
                        var y = m[v],
                            D = a[y.id];
                        if (D) g(l.type) > g(D.columnType) && (D.columnKey = l.model.getKey(), D.columnTitle = l.getTitleHTML(), D.columnType = l.model.getType(), D.accountKey = y.account.getKey());
                        else {
                            var b = {
                                chirpID: y.messageThreadId || y.id,
                                accountKey: y.account.getKey(),
                                columnKey: l.model.getKey(),
                                columnTitle: l.getTitleHTML(),
                                columnType: l.model.getType()
                            };
                            switch (u) {
                            case d:
                            case h:
                                var w = y.getGrowlData();
                                if (!w) continue;
                                w.img = w.img || "/web/assets/logos/32.png", _.extend(b, w);
                                break;
                            case p:
                                if (b.html = y.renderNotification(), !b.html) continue
                            }
                            T.push(b), a[m[v].id] = b
                        }
                    }
                t ? e.port.postMessage({
                    updates: T
                }) : (c = c || l.model.getHasSound(), o = o.concat(T), !i && (o.length > 0 || c) && (i = setTimeout(f, s)))
            }
        }, f = function () {
            var e = u === d ? o.slice(0, 5) : o;
            i = null, c && ("win" === TD.util.getAppEnv() ? deck.playSound("tweet.wav") : document.getElementById("update-sound").play(), c = !1), 0 !== e.length && u && (u !== p ? (e.forEach(function (e) {
                var t;
                switch (u) {
                case d:
                    deck.doGrowl(e.title, e.text, e.img, e.chirpID, e.columnKey);
                    break;
                case h:
                    t = l.createNotification(e.img, e.title, e.text), t.onclose = n.reset, t.ondisplay = function () {
                        setTimeout(function () {
                            t.cancel()
                        }, 5e3)
                    }, t.onclick = function () {
                        $(document).trigger("uiShowDetailView", {
                            chirpId: e.chirpID,
                            columnKey: e.columnKey
                        }), TD.util.isChromeApp() && chrome.extension.getBackgroundPage().TD.bg.utils.showTDTab()
                    }, t.show()
                }
            }), c = !1, a = {}, o = []) : (t = webkitNotifications.createHTMLNotification("/web/templates/notification.html"), t.onclose = n.reset, t.show()))
        }, g = function (e) {
            switch (e) {
            case "privateMe":
                return 5;
            case "direct":
                return 4;
            case "me":
                return 3;
            case "mentions":
                return 2;
            case "home":
                return 1;
            case "search":
                return -1;
            default:
                return 0
            }
        }, T = function (t) {
            var i, s, n, r = TD.controller.columnManager.get(t.info.columnKey),
                o = !1,
                a = !0;
            switch (t.action) {
            case "url":
                TD.util.openURL(t.href), a = !1;
                break;
            case "user":
                n = _.last(t.href.split("/")), $(document).trigger("uiShowProfile", {
                    id: n
                });
                break;
            case "hashtag":
                $(document).trigger("uiPerformSearch", {
                    query: t.text
                });
                break;
            case "showColumn":
                o = !0;
                break;
            case "showChirp":
                o = !0, i = r.findMostInterestingChirp(t.info.chirpID), s = r.findChirp(t.info.chirpID), TD.ui.updates.showDetailView(r, i, s)
            }
            a && TD.util.isWrapperApp() && deck.showPrimaryWindow(), o && TD.ui.columns.scrollColumnToCenter(t.info.columnKey), e.port.postMessage("closeNotification")
        }, v = function () {
            return TD.util.isWrapperApp() ? !0 : 0 === l.checkPermission()
        };
    return n.init = function () {
        if (!TD.settings.getShowStartupNotifications()) {
            var e = (new Date).getTime();
            _.each(TD.storage.feedController.getAll(), function (t) {
                var i = TD.storage.columnController.getColumnsContainingFeed(t.getKey()),
                    s = Boolean(_.find(i, function (e) {
                        return e.getHasSound() || e.getHasNotification()
                    }));
                s && t.setLatestTime(e)
            })
        }
        TD.util.isWrapperApp() ? deck.showNotification ? (u = p, n.setUpWorker()) : u = d : l && n.getPermission(), $.subscribe("/notifications/new", m.bind(this))
    }, n.hasNotifications = function () {
        return u !== !1
    }, n.setUpWorker = function () {
        e = new SharedWorker("/web/scripts/unbundled/nfn_worker.js"), e.port.addEventListener("message", function (t) {
            "ready" === t.data ? (r = !0, e.port.postMessage({
                updates: o
            }), o = []) : t.data.action && T(t.data)
        }), e.port.start()
    }, n.reRender = function (t) {
        var i = a[t.id];
        if (i) {
            var s = t.renderNotification();
            i.html = s, r && e.port.postMessage({
                replaceID: t.id,
                accountKey: t.account.getKey(),
                html: s
            })
        }
    }, n.getPermission = function () {
        v() ? u = h : l.requestPermission(function () {
            v() && (u = h)
        })
    }, n.reset = function () {
        t = null, a = {}, c = !1
    }, n
}(), TD.controller.stats = function () {
    var e = {}, t = {
            INIT: "init",
            MAIN: "main_init",
            COLUMN_MANAGER: "column_manager_init",
            COLUMN_SCHEDULER: "column_scheduler_init",
            NOTIFICATIONS: "notifications_init",
            FILTER_MANAGER: "filter_manager_init",
            RENDER_TWEET: "render_tweet"
        }, i = "twid",
        s = "interval",
        n = "f",
        r = "oid",
        o = "tsn",
        a = "spam_uid",
        c = "token",
        l = "tw",
        u = 10,
        d = {};
    TD.util.extendObjectWith(d, [
        [TD.util.columnUtils.columnMetaTypes.MENTIONS, {
            legacyId: 2,
            namespace: {
                section: "twitter",
                component: "mention"
            }
        }],
        [TD.util.columnUtils.columnMetaTypes.FOLLOWERS, {
            legacyId: 3,
            namespace: {
                section: "twitter",
                component: "followers"
            }
        }],
        [TD.util.columnUtils.columnMetaTypes.TIMELINE, {
            legacyId: 3,
            namespace: {
                section: "twitter",
                component: "home"
            }
        }],
        [TD.util.columnUtils.columnMetaTypes.SEARCH, {
            legacyId: 4,
            namespace: {
                section: "twitter",
                component: "search"
            }
        }],
        [TD.util.columnUtils.columnMetaTypes.MESSAGES, {
            legacyId: 5,
            namespace: {
                section: "twitter",
                component: "inbox"
            }
        }],
        [TD.util.columnUtils.columnMetaTypes.FAVORITES, {
            legacyId: 8,
            namespace: {
                section: "twitter",
                component: "favorites"
            }
        }],
        [TD.util.columnUtils.columnMetaTypes.LIST, {
            legacyId: 22,
            namespace: {
                section: "twitter",
                component: "list"
            }
        }],
        [TD.util.columnUtils.columnMetaTypes.SCHEDULED, {
            legacyId: 28,
            namespace: {
                section: "tweetdeck",
                component: "scheduledupdates"
            }
        }],
        [TD.util.columnUtils.columnMetaTypes.USERTWEETS, {
            legacyId: 32,
            namespace: {
                section: "twitter",
                component: "usertweets"
            }
        }],
        [TD.util.columnUtils.columnMetaTypes.USERTIMELINE, {
            legacyId: 33,
            namespace: {
                section: "twitter",
                component: "usertimeline"
            }
        }],
        [TD.util.columnUtils.columnMetaTypes.HOME, {
            legacyId: 34,
            namespace: {
                section: "tweetdeck",
                component: "home"
            }
        }],
        [TD.util.columnUtils.columnMetaTypes.ME, {
            legacyId: 35,
            namespace: {
                section: "tweetdeck",
                component: "me"
            }
        }],
        [TD.util.columnUtils.columnMetaTypes.INBOX, {
            legacyId: 36,
            namespace: {
                section: "tweetdeck",
                component: "inbox"
            }
        }],
        [TD.util.columnUtils.columnMetaTypes.INTERACTIONS, {
            legacyId: 37,
            namespace: {
                section: "twitter",
                component: "interactions"
            }
        }],
        [TD.util.columnUtils.columnMetaTypes.ACTIVITY, {
            legacyId: 38,
            namespace: {
                section: "twitter",
                component: "networkactivity"
            }
        }]
    ]);
    var h, p, m, f, g, T = "Twitter-TweetDeck-{{{client_name}}}/{{{client_version}}} {{{platform}}}/{{{platform_version}}}",
        v = "deck",
        y = {}, D = {}, b = function (e, t) {
            e = e || {}, t = t || {}, e.client = v, t.user_agent = m, p || (p = w()[l]), t.user_id = p, g.scribe(e, t), TD.config.scribe_debug_level > 1 && console.log("Scribing:", e, t)
        }, w = function () {
            var e = TD.storage.accountController.getPreferredAccount("twitter"),
                t = {};
            return e && (t[l] = e.getUserID()), t
        };
    return e.generateScribeUserAgent = function (e, t, i, s) {
        var n = {
            client_name: e,
            client_version: t,
            platform: i,
            platform_version: s
        }, r = TD.ui.template.toHtml(T, n);
        return r
    }, e.flushScribeQueue = function () {
        f && f.flush(f.getBuffer())
    }, e.init = function () {
        var t = TD.util.getAppEnv();
        h = TD.config.client_name + "-" + t, m = e.generateScribeUserAgent(h, TD.version, t, "1");
        var i = {
            bufferEvents: !0,
            useAjax: !1,
            flushOnUnload: !0
        };
        f = new ScribeTransport(i), g = new ClientEvent(f), TD.config.scribe_debug_level > 0 && this.setupDebugMode(), TD.controller.scheduler.schedulePeriodicTask(900, e.impression, !0), TD.controller.scheduler.schedulePeriodicTask(60, TD.controller.stats.flushScribeQueue)
    }, e.setExperiments = function (e) {
        y = e
    }, e.getExperimentBucket = function (e) {
        var t = y[e];
        return t ? t.bucket : ""
    }, e.experimentImpression = function (e) {
        var t, i, s = y[e];
        s && (e = s.experiment_key, D[e] || (t = {
            page: "ddg",
            section: s.experiment_key,
            component: "",
            element: "",
            action: "experiment"
        }, i = {
            experiment_key: s.experiment_key,
            bucket: s.bucket,
            version: s.version
        }, b(t, i), D[e] = !0))
    }, e.setupDebugMode = function () {
        var e = !1,
            t = {}, i = function (i) {
                var s, n = "error" === i.validationLevel && "event_namespace" === i.parentFieldName,
                    r = "scribe error",
                    o = "";
                if (n && e) {
                    if (s = [i.fieldName, i.fieldValue].join(" "), t[s]) return;
                    t[s] = !0
                }
                "warning" === i.validationLevel && (r = "scribe warning"), n && (o = "Please add " + i.fieldName + " “" + i.fieldValue + "” to go/namespace"), console.error(r.toUpperCase(), o, i)
            };
        f.updateOptions({
            debug: !0,
            bufferEvents: !1,
            useAjax: !0,
            flushOnUnload: !0,
            debugHandler: function (e) {
                e.errors.forEach(i), e.warnings.forEach(i)
            }
        }), f.options.url = "https://twitter.com" + f.SCRIBE_API_ENDPOINT
    }, e.impression = function () {
        var e = {
            action: "impression",
            page: "main"
        }, t = w();
        t[s] = "900", t[n] = TD.controller.feather.latestFeatherId, b(e, t)
    }, e.favorite = function (e, t, s) {
        var n = {
            page: "column",
            section: "tweet",
            action: "favorite"
        }, o = {};
        o[r] = e, o[i] = t, o[l] = s, b(n, o)
    }, e.unfavorite = function (e, t, s) {
        var n = {
            page: "column",
            section: "tweet",
            action: "unfavorite"
        }, o = {};
        o[r] = e, o[i] = t, o[l] = s, b(n, o)
    }, e.retweet = function (e, t, s) {
        var n = {
            page: "column",
            section: "tweet",
            action: "retweet"
        }, o = {};
        o[r] = e, o[i] = t, o[l] = s, b(n, o)
    }, e.embedTweetDialogOpen = function (e) {
        var t = {
            page: "main",
            section: "embed_tweet_dialog",
            action: "open"
        }, s = {};
        s[i] = e, b(t, s)
    }, e.translate = function (e, t, s, n, o) {
        var a = {
            page: "column",
            section: "tweet",
            action: "translate"
        }, c = {};
        c[r] = e, c[i] = t, c[l] = s, c.dest_lang = n, c.src_lang = o, b(a, c)
    }, e.spam = function (e, t, i) {
        var s = {
            page: "column",
            section: "tweet",
            component: "screen_name",
            action: "report_as_spam"
        }, n = {};
        n[o] = e, n[a] = t, n[c] = TD.core.sha1(i + ""), b(s, n)
    }, e._genericColumnEvent = function (e, t) {
        var i = d[e],
            s = {
                page: "column",
                section: "unknown",
                component: "unknown",
                action: t
            };
        i && i.namespace ? _.extend(s, i.namespace) : console.log("Tracking: Unknown column type", e), b(s)
    }, e.addColumn = function (t) {
        e._genericColumnEvent(t, "add")
    }, e.removeColumn = function (t) {
        e._genericColumnEvent(t, "remove")
    }, e.postTweet = function (e, t, i) {
        var s = {
            page: "compose",
            action: "send_tweet"
        }, n = {
                with_image: Boolean(t),
                scheduled: Boolean(i)
            };
        e && (n[l] = e), b(s, n)
    }, e.postReply = function (e, t, i) {
        var s = {
            page: "compose",
            action: "send_reply"
        }, n = {
                with_image: Boolean(t),
                scheduled: Boolean(i)
            };
        e && (n[l] = e), b(s, n)
    }, e.postMessage = function (e, t, i) {
        var s = {
            page: "compose",
            action: "send_dm"
        }, n = {
                with_image: Boolean(t),
                scheduled: Boolean(i)
            };
        e && (n[l] = e), b(s, n)
    }, e.composeClearReply = function () {
        var e = {
            page: "compose",
            action: "clear_reply"
        };
        b(e)
    }, e.composeStackReply = function () {
        var e = {
            page: "compose",
            action: "stack_reply"
        };
        b(e)
    }, e.messageBannerImpression = function (e) {
        var t = {
            page: "main",
            section: "message_banner",
            action: "impression"
        }, i = {
                message_id: e
            };
        b(t, i)
    }, e.messageBannerDismiss = function (e) {
        var t = {
            page: "main",
            section: "message_banner",
            action: "dismiss"
        }, i = {
                message_id: e
            };
        b(t, i)
    }, e.messageBannerClick = function (e, t) {
        var i = {
            page: "main",
            section: "message_banner",
            action: "click"
        }, s = {
                message_id: e,
                button_id: t
            };
        b(i, s)
    }, e.searchboxFocus = function () {
        var e = {
            page: "main",
            component: "search_box",
            action: "focus_field"
        };
        b(e)
    }, e.searchboxPerformSearch = function () {
        var e = {
            page: "main",
            component: "search_box",
            action: "search"
        };
        b(e)
    }, e.typeaheadItemSelected = function (e, t, i) {
        var s = {
            page: "main",
            component: "search_box",
            element: "typeahead",
            action: "search"
        }, n = {
                queryLength: e,
                type: t,
                index: i
            };
        b(s, n)
    }, e.typeaheadRecentItemSelected = function (e, t, i) {
        var s = {
            page: "main",
            component: "search_box",
            element: "recent",
            action: "search"
        }, n = {
                queryLength: e,
                type: t,
                index: i
            };
        b(s, n)
    }, e.viewedTweetSocialProof = function (e) {
        var t = {
            page: "column",
            section: "social_proof",
            component: e,
            action: "impression"
        };
        switch (e) {
        case "retweeters":
            t.component = "retweeted_by";
            break;
        case "favoriters":
            t.component = "favorited_by";
            break;
        default:
            throw "Social proof type “" + e + "” not recognised"
        }
        b(t)
    }, e.setting = function (e, t) {
        var i = {
            page: "settings",
            section: e
        }, s = {
                section: {
                    condensed: "narrow",
                    "full-size": "wide"
                }
            };
        _.isBoolean(t) ? i.action = t ? "on" : "off" : (i.component = s.section[t] || t, i.action = "select"), b(i)
    }, e.apiErrorResponse = function (e, t, i) {
        var s = {
            page: "api",
            action: "request"
        }, n = {
                status_code: e
            };
        u > TD.util.random(0, 99) && (t && (n.event_info = t), i && (n.url = i), b(s, n))
    }, e.performance = function () {
        var e = {}, i = function () {
                return e[t.RENDER_TWEET] && e[t.INIT] && e[t.MAIN] && e[t.COLUMN_MANAGER] && e[t.COLUMN_SCHEDULER] && e[t.FILTER_MANAGER] && e[t.NOTIFICATIONS]
            };
        return {
            log: function (t, s) {
                e[t] = s, i() && (e = {})
            },
            keys: t
        }
    }(), e.advancedSearchSettings = function (e, t, i, s) {
        var n = {
            section: {},
            component: {
                action: "interactions"
            },
            element: {
                written_in: "language"
            }
        }, r = {
                page: "main",
                section: n.section[e] || e,
                component: n.component[t] || t,
                element: n.element[i] || i,
                action: "change"
            }, o = {
                value: s
            };
        b(r, o)
    }, e.actionFilterError = function () {
        var e = {
            page: "main",
            section: "column_options",
            component: "interactions",
            action: "validation_error"
        }, t = {
                error: "No interaction types selected"
            };
        b(e, t)
    }, e.columnActionClick = function (e, t) {
        var i = {
            page: "main",
            section: "column_options",
            element: e,
            action: "click"
        };
        t = t || {}, b(i, t)
    }, e.unknownStreamData = function (e) {
        var t = {
            page: "api",
            section: "userstream",
            action: "unrecognized_data"
        };
        b(t, e)
    }, e.navbarListsClick = function () {
        var e = {
            page: "main",
            section: "navbar",
            element: "lists",
            action: "click"
        };
        b(e)
    }, e.navbarAddColumnClick = function () {
        var e = {
            page: "main",
            section: "navbar",
            element: "add_column",
            action: "click"
        };
        b(e)
    }, e.navbarPageLeft = function () {
        var e = {
            page: "main",
            section: "navbar",
            component: "column_nav",
            element: "page_left",
            action: "click"
        };
        b(e)
    }, e.navbarReorderColumns = function () {
        var e = {
            page: "main",
            section: "navbar",
            component: "column_nav",
            action: "reorder"
        };
        b(e)
    }, e.navbarJumpToColumn = function () {
        var e = {
            page: "main",
            section: "navbar",
            component: "column_nav",
            element: "column_item",
            action: "click"
        };
        b(e)
    }, e.navbarPageRight = function () {
        var e = {
            page: "main",
            section: "navbar",
            component: "column_nav",
            element: "page_right",
            action: "click"
        };
        b(e)
    }, e.navbarSettingsClick = function () {
        var e = {
            page: "main",
            section: "navbar",
            element: "settings",
            action: "click"
        };
        b(e)
    }, e.navbarComposeClick = function () {
        var e = {
            page: "main",
            section: "navbar",
            element: "compose",
            action: "click"
        };
        b(e)
    }, e.tweetStreamImpression = function (e, t) {
        var i = {
            component: "stream",
            action: "results"
        }, s = {
                items: t
            }, n = TD.util.columnUtils.columnMetaTypeToScribeNamespace[e];
        n && t.length > 0 && (i = _.extend(i, n), b(i, s))
    }, e.appWokenFromSleep = function (e) {
        var t = {
            page: "main",
            action: "wake"
        }, i = {
                secondsSinceSleep: e
            };
        b(t, i)
    }, e.purgedServices = function (e) {
        e.forEach(function (e) {
            var t = {
                page: "main",
                section: "service",
                action: "remove"
            };
            b(t, {
                service: e
            })
        })
    }, e.purgedFeed = function (e) {
        var t = {
            page: "main",
            section: "feed",
            action: "remove"
        };
        b(t, e)
    }, e
}(), TD.controller.filterManager = function () {
    var e = {}, t = [],
        i = function () {
            var e = [];
            _.each(t, function (t) {
                e.push(t.toBackendState())
            }), TD.settings.setGlobalFilter(e)
        };
    return e.init = function () {
        var i = TD.settings.getGlobalFilter();
        _.each(i, function (e) {
            var i = new TD.vo.Filter;
            i.fromBackendState(e), t.push(i)
        }), e.reapplyAllFilters()
    }, e.reapplyAllFilters = function () {
        _.each(TD.controller.columnManager.getAll(), function (e) {
            e.reloadTweets()
        })
    }, e.pass = function (e, i) {
        var s, n;
        for (s = 0, n = t.length; n > s; s++)
            if (!t[s].pass(e)) return !1;
        if (i)
            for (s = 0, n = i.length; n > s; s++)
                if (!i[s].pass(e)) return !1;
        return !0
    }, e.getAll = function () {
        return t
    }, e.addFilter = function (s, n, r) {
        var o = new TD.vo.Filter(s, n, Boolean(r));
        return t.push(o), e.reapplyAllFilters(), i(), o
    }, e.validateFilter = function (e, i) {
        return e && i ? 0 == _.trim(i).length ? !1 : _.any(t, function (t) {
            return t.type === e && t.value === i
        }) ? !1 : !0 : !1
    }, e.removeFilter = function (s) {
        var n;
        _.each(t, function (e, t) {
            e.id === s && (n = t)
        }), t.splice(n, 1), e.reapplyAllFilters(), i()
    }, e
}(), TD.decider = function () {
    var e = function () {
        var e = {};
        this.DM_READ_STATE = "dm_read_state", this.ENGAGEMENT_FILTER = "engagement_filter", this.THROTTLE_POLLING_PERIOD = "throttle_polling_period", this.TRANSLATE_TWEET = "machine_translated_tweets", this.updateFromBackend = function (t) {
            e = t || {}
        }, this.get = function (t) {
            return e[t]
        }, this.getAll = function () {
            return _.clone(e)
        }
    };
    return new e
}(), TD.sync.util = function (e) {
    var t = {}, i = 0,
        s = 2,
        n = 4,
        r = 8;
    t.maybe_log = function (e, t) {
        var i = _.isUndefined(t) ? 1 : t;
        TD.config.debug_level >= i && console.log(e)
    }, t.NotJsonable = function (e) {
        _.extend(this, e), this.___ = "" + e
    }, t.NotJsonable.prototype = {};
    var o = function (e) {
        console.log(_.map(e, function (e) {
            if (_.isUndefined(e)) return void 0;
            try {
                return JSON.parse(JSON.stringify(e))
            } catch (i) {
                return new t.NotJsonable(e)
            }
        }))
    };
    return t.stateLog = function () {
        TD.config.debug_level >= s && o(_.toArray(arguments))
    }, t.verboseLog = function () {
        TD.config.debug_level >= n && o(_.toArray(arguments))
    }, t.warn = function () {
        TD.config.debug_level >= i && console.log.apply(console, _.toArray(arguments))
    }, t.trace = function (e, i) {
        t.maybe_log("TRACE: " + e + ": " + (i || ""), 1)
    }, t.printStacktrace = function () {
        if (TD.config.debug_menu) try {
            throw Error("stack trace or gtfo")
        } catch (e) {
            console.log(e.stack)
        }
    }, t.getStack = function () {
        try {
            throw Error("stack trace or gtfo")
        } catch (e) {
            return TD.util.isChromeApp() ? e.stack.split("\n").slice(2).join("\n") : ""
        }
    }, t.errmark = function (e, i) {
        return e || (e = i, i = "missing message"), console.log("---ERROR--->>>>>->>>>->>>->>->--" + i + "--<-<<--"), t.maybe_log(e), console.log(e.stack), e
    }, t.assert = function (e, i, s) {
        if (!e) throw console.log("------------------------------------------"), console.log(["ASSERT FAILURE", i, s]), t.printStacktrace(), console.log("------------------------------------------"), TD.sync.trace && TD.sync.trace.assert(i, s), "AssertionError"
    }, t.precondition = function (e, i, s) {
        if (!e) throw console.log("------------------------------------------"), console.log(["PRECONDITION FAILURE", i, s]), t.printStacktrace(), console.log("------------------------------------------"), TD.sync.trace && TD.sync.trace.assert("PRECONDITION " + i, s), "PreconditionAssertionError"
    }, t._break = function () {
        console.log("you might want to set a breakpoint here ;-)")
    }, t.warning = function (e) {
        data = _.toArray(arguments).slice(1), console.log(["WARNING", e, t.pformat(data)])
    }, t.error = function (e) {
        data = _.toArray(arguments).slice(1), console.log(["ERROR", e, t.pformat(data)])
    }, t.list_to_set = function (e) {
        var t = {};
        return _.each(e, function (e) {
            t[e] = !0
        }), t
    }, t.pprint = function (e) {
        return t.maybe_log(JSON.stringify(e, null, "  "), s), e
    }, t.pformat = function (e) {
        return JSON.stringify(e, null, "  ")
    }, t.repr = function (e) {
        return JSON.stringify(e)
    }, t.clone = function (e) {
        if (null === e || _.isUndefined(e)) return e;
        try {
            return JSON.parse(JSON.stringify(e))
        } catch (i) {
            return t.stateLog("util.clone couldn't parse object", e, i), ["<not jsonable>", e]
        }
    }, t.dictMap = function (e, t, i) {
        var s = {};
        return _.each(_.map(e, t, i), function (e) {
            s[e[0]] = e[1]
        }), s
    }, t.stall = function (t, i) {
        _.isUndefined(i) && (i = 0);
        var s = new e.Deferred;
        return _.delay(_.bind(s.callback, s), 1e3 * i, t), s
    }, t.autoRetry = function (e, t, i) {
        var s = e();
        return t.forEach(function (t) {
            s.addErrback(function (s) {
                if (!i || i(s)) {
                    var n = new TD.core.defer.Deferred;
                    return n.addCallback(e), setTimeout(function () {
                        n.callback()
                    }, t), n
                }
                return s
            })
        }), s
    }, t.makeThingScheduler = function (i, s, n, o, a) {
        var c = !1,
            l = !1;
        o = o || function () {
            return !0
        }, a = _.isUndefined(a) ? 1 : a;
        var u = [],
            d = function () {
                if (t.maybe_log(["_maybe_do_stuff", n, "want stuff done:", c, "am doing stuff:", l], r), !c) return t.maybe_log("not doing stuff; someone else did stuff before us", r), void 0;
                if (l) return t.maybe_log("am already doing stuff", r), void 0;
                l = !0, c = !1;
                var o = TD.controller.progressIndicator;
                if (s) var a = o.addTask(s);
                var h = e.maybeDeferred(i);
                h.addCallback(function (e) {
                    if (l = !1, s && o.deleteTask(a), c) d();
                    else {
                        var t = u;
                        u = [];
                        for (var i = 0; t.length > i; i++) try {
                            t[i].callback(e)
                        } catch (n) {
                            _.defer(_.bind(t[i].errback, t[i]), n)
                        }
                    }
                }), h.addErrback(function (e) {
                    t.errmark(e, 'do_stuff for "' + n + '" yielded error when calling; ' + i), l = !1, s && o.taskFailed(a);
                    var r = u;
                    u = [];
                    for (var c = 0; r.length > c; c++) try {
                        r[c].errback(e)
                    } catch (d) {
                        _.defer(_.bind(r[c].errback, r[c]), d)
                    }
                })
            };
        return function (i) {
            if (!o()) return t.maybe_log("not triggering (guarded): " + n, r), e.succeed();
            i = _.isUndefined(i) ? a : i, t.maybe_log('trigger func called "' + n + '"', r), c = !0;
            var s = new e.Deferred;
            return u.push(s), setTimeout(d, 1e3 * i), s
        }
    }, t
}(TD.core.defer), TD.storage.store = function (e, t) {
    var i = {};
    i._storage = null;
    var s = "TweetDeck",
        n = function (e) {
            return e ? e : i._storage ? i._storage : new i.MemoryStore
        };
    i.getTweetdeckAccount = function (t) {
        if (t = n(t)) {
            var i = t.getItem("tweetdeck_account");
            if (i) {
                if (i = JSON.parse(i), i.email) return i.email;
                e.stateLog("store.getTweetdeckAccount(): tdacct invalid", i)
            }
            return null
        }
    }, i.setTweetdeckAccount = function (t, i) {
        if (i = n(i), !i) throw Error("No storage given or configured");
        e.assert(t, "email must be given to set tweetdeck account");
        var s = {
            email: t
        };
        i.setItem("tweetdeck_account", JSON.stringify(s))
    }, t.isWrapperApp() && !TD.config.suppress_keychain && (i.getPasshash = function (e, t) {
        var s = null,
            n = i.getSecret(e, t);
        return n && (s = TD.core.sha1(n)), s
    }, i.getTweetdeckAccountAndPasshash = function (t) {
        if (t = n(t), !t) return null;
        var s = t.getItem("tweetdeck_account");
        if (s) {
            if (s = JSON.parse(s), s.email) {
                var r = i.getSecret(s.email, t);
                if (r && (s.passhash = TD.core.sha1(r)), s.passhash) return s
            }
            e.stateLog("store.getTweetdeckAccountAndPassword(): invalid", s)
        }
        return null
    }, i.setTweetdeckAccountAndPassword = function (t, s, r) {
        if (r = n(r), !r) throw Error("No storage given or configured");
        e.assert(t, "email must be given to set tweetdeck account"), i.storeSecret(t, s);
        var o = {
            email: t
        };
        r.setItem("tweetdeck_account", JSON.stringify(o))
    }, i.storeSecret = function (e, t) {
        var n = deck.storePassword(e, s, t);
        if ("windows" === deck.osname()) {
            var r = i.get("hoard");
            r[e] = n, i.set("hoard", r)
        }
    }, i.getSecret = function (t, n) {
        var r;
        if ("windows" === deck.osname()) {
            if (_.isUndefined(n)) e.assert(null !== i._storage, "can't read hoard: storage is not set up!"), r = i.get("hoard");
            else {
                var o = n.getItem("hoard");
                if (!o) return "";
                r = JSON.parse(o)
            }
            var a = r[t];
            return deck.getPassword(t, s, a)
        }
        return deck.getPassword(t, s)
    }, i.deleteSecrets = function (e) {
        if ("osx" === deck.osname()) _.each(e, function (e) {
            deck.deletePassword(e, s)
        });
        else {
            var t = i.get("hoard");
            _.each(e, function (e) {
                delete t[e]
            }), i.set("hoard", t)
        }
    }), i.init = function (e, t) {
        var s;
        e && TD.storage.storeUtils.localStorageOK && (i._storage = localStorage, console.log("Using localStorage")), !i._storage && TD.storage.storeUtils.sessionStorageOK && (i._storage = sessionStorage, console.log("Using sessionStorage")), i._storage || (i._storage = new i.MemoryStore, console.log("Using memory store")), s = i.getTweetdeckAccount(), t !== s && TD.storage.storeUtils.clearWebstorage()
    }, i.reset = function () {
        i._storage = null
    }, i.get = function (t) {
        e.assert(null !== i._storage, "can't read (" + t + ") storage is not set up!");
        var s = i._storage.getItem(t);
        try {
            return JSON.parse(s) || {}
        } catch (n) {
            return console.log("ERROR: failed to parse store key (" + t + ") value;"), console.log(s), console.log(n), s
        }
    }, i.set = function (e, t) {
        var s = JSON.stringify(t);
        try {
            i._storage.setItem(e, s)
        } catch (n) {
            if (n.code === DOMException.QUOTA_EXCEEDED_ERR) {
                try {
                    $(document).trigger("dataStorageFull")
                } catch (n) {}
                i._storage.setItem(e, s)
            }
        }
    }, i.nonCriticalSet = function (e, t) {
        i._storage.setItem(e, JSON.stringify(t))
    }, i.size = function () {
        return i._storage.length
    }, i.remove = function (e) {
        i._storage.removeItem(e)
    }, i.dumpAll = function () {
        _.each({
            local: localStorage,
            session: sessionStorage
        }, function (e, t) {
            console.log("--------------------------------", t, "storage");
            for (var i = e.length, s = 0; i > s; s++) {
                var n = e.key(s);
                console.log(n, ":");
                var r = e.getItem(n);
                try {
                    TD.sync.util.pprint(JSON.parse(r))
                } catch (o) {
                    console.log("Not JSON:", r)
                }
            }
        }), console.log("------------------------------------------")
    }, i.jsonDump = function () {
        var e = {};
        return _.each({
            local: localStorage,
            session: sessionStorage
        }, function (t, i) {
            console.log("--------------------------------", i, "storage"), e[i] = {};
            for (var s = t.length, n = 0; s > n; n++) {
                var r = t.key(n);
                console.log(r, ":");
                var o = t.getItem(r);
                e[i][r] = o
            }
        }), e
    }, i.dbgCapture = function (e) {
        var t = {};
        _.isUndefined(e) && (e = localStorage);
        for (var i = e.length, s = 0; i > s; s++) {
            var n = e.key(s);
            console.log(n, ":");
            var r = e.getItem(n);
            console.log(":", r), console.log("X", t), t[n] = r
        }
        return TD.core.base64.encode(JSON.stringify(t))
    }, i.dbgImport = function (e, t) {
        _.isUndefined(t) && (t = localStorage);
        var i = JSON.parse(TD.core.base64.decode(e));
        _.each(i, function (e, i) {
            t.setItem(i, e)
        })
    }, i.storageKeys = function (e) {
        for (var t = [], i = e.length, s = 0; i > s; s++) t.push(e.key(s));
        return t
    };
    var r = "__upgrade__";
    return i.stashUpgrade = function (e, t, i, s) {
        e.setItem(r, JSON.stringify({
            from: t,
            to: i,
            data: s
        }))
    }, i.getUpgradeState = function () {
        var e = i._storage.getItem(r);
        return null === e && i._storage === sessionStorage && (e = localStorage.getItem(r)), null === e ? null : JSON.parse(e)
    }, i.flushUpgradeState = function () {
        i._storage === sessionStorage && null !== localStorage.getItem(r) && localStorage.removeItem(r), null !== i._storage.getItem(r) && i._storage.removeItem(r)
    }, i.checkVersion = function (e) {
        var t = i._storage.getItem("__version__");
        if (null !== t && Number(t) !== e) throw Error("Wrong version number found in store (curr " + t + ")")
    }, i.recordVersion = function (e, t) {
        var s = t ? t : i._storage;
        s.setItem("__version__", e)
    }, i.MemoryStore = function () {
        this.data = {}, this.length = 0
    }, i.MemoryStore.prototype.clear = function () {
        this.data = {}, this.length = 0
    }, i.MemoryStore.prototype.getItem = function (e) {
        var t = this.data[e];
        return void 0 !== t ? t : null
    }, i.MemoryStore.prototype.key = function () {
        throw "MemoryStore.key not implemented"
    }, i.MemoryStore.prototype.removeItem = function (e) {
        null !== this.getItem(e) && (delete this.data[e], this.length--)
    }, i.MemoryStore.prototype.setItem = function (e, t) {
        null === this.getItem(e) && this.length++, this.data[e] = t
    }, i
}(TD.sync.util, TD.util), TD.storage.storeUtils = function () {
    var e = {};
    return e.localStorageOK = !1, e.sessionStorageOK = !1, e.init = function () {
        e.localStorageOK = window.localStorage && e._testStore(localStorage, !0), e.sessionStorageOK = window.sessionStorage && e._testStore(sessionStorage, !0), console.log("localStorage:", e.localStorageOK ? "OK" : "BROKEN"), console.log("sessionStorage:", e.sessionStorageOK ? "OK" : "BROKEN"), e._upgradeWebstorage()
    }, e.getSessionData = function () {
        var t = {
            email: null,
            staySignedIn: !0,
            sessionExists: !1,
            passhash: null
        };
        try {
            e.localStorageOK && (t = e._getSessionDataFromStore(localStorage)), !t.email && e.sessionStorageOK && (t = e._getSessionDataFromStore(sessionStorage), t.email && (t.staySignedIn = !1))
        } catch (i) {}
        return t
    }, e._getSessionDataFromStore = function (e) {
        var t, i = {
                email: null,
                staySignedIn: !0,
                sessionExists: !1,
                passhash: null
            };
        try {
            t = TD.storage.store.getTweetdeckAccount(e), t && (i.session = e.getItem("_session"), TD.sync.tdapi.setSession(i.session), i.email = t, i.sessionExists = TD.sync.tdapi.isLoggedIn(), TD.storage.store.getSecret && (i.passhash = TD.storage.store.getSecret(i.email, e)))
        } catch (s) {}
        return i
    }, e._upgradeWebstorage = function () {
        TD.sync.util.trace("upgrading web storage");
        try {
            e.localStorageOK && TD.storage.upgrade.doUpgrade(localStorage), e.sessionStorageOK && TD.storage.upgrade.doUpgrade(sessionStorage)
        } catch (t) {
            TD.sync.util.warn("ERROR in store upgrade:", t.message, t), e.clearWebstorage()
        }
    }, e._testStore = function (t, i) {
        for (var s = !1, n = !1, r = "__test__", o = "test", a = 1024; a > o.length;) o += o;
        try {
            t.setItem(r, o), s = t.getItem(r) === o, t.removeItem(r)
        } catch (c) {
            s = !1, n = c.code === DOMException.QUOTA_EXCEEDED_ERR, n && 0 === t.length && TD.sync.util.warn(c, "In Safari private browsing mode")
        }
        if (i && n) try {
            e.flushDataFromStore(t), s = e._testStore(t, !1)
        } catch (c) {
            s = !1
        }
        return s
    }, e.clearWebstorage = function (t) {
        TD.sync.util.trace("clearing web storage");
        try {
            e.flushDataFromStore(localStorage, t), e.flushDataFromStore(sessionStorage, t)
        } catch (i) {}
    }, e.flushDataFromStore = function (e, t) {
        var i = {};
        t = t || [], t.push("__version__"), t.forEach(function (t) {
            var s = e.getItem(t);
            s && (i[t] = s)
        }), e.clear(), _.each(i, function (t, i) {
            e.setItem(i, t)
        })
    }, e.hasAlreadyReloaded = function () {
        var t;
        return t = e.localStorageOK ? Boolean(localStorage.getItem("__hasAlreadyReloaded")) : !0
    }, e.setReloadedFlag = function () {
        e.localStorageOK && localStorage.setItem("__hasAlreadyReloaded", !0)
    }, e.removeReloadedFlag = function () {
        e.localStorageOK && localStorage.removeItem("__hasAlreadyReloaded")
    }, e
}(), TD.sync.trace = function (e) {
    var t = {}, i = [];
    return t.record = function () {
        var t = (new Date).toLocaleTimeString();
        i.push([t].concat(_.toArray(arguments))), TD.config.debug_trace && e.stateLog.apply(null, ["-------- TRACE: " + t].concat(_.toArray(arguments))), TD.config.debug_menu || i.length > 200 && i.splice(0, 100)
    }, t.request = function (e, i, s) {
        t.record("request", e, s.type, i, _.clone(s))
    }, t.response = function (e, i, s, n) {
        t.record("response", e, i, _.clone(s), _.clone(n))
    }, t.objInit = function (e, i, s) {
        t.record("obj init", e, _.clone(i), _.clone(s))
    }, t.manage = function (i, s) {
        t.record("manage", i, s, e.clone(s.getStateForLocalstorage()))
    }, t.update = function (e, i, s) {
        t.record("update", e, i, _.clone(s))
    }, t.push = function (i, s, n, r) {
        t.record("push", i, s, _.clone(n), e.clone(r))
    }, t.tsResults = function (e, i, s, n, r, o) {
        t.record("t+s results", e, _.clone(i), _.clone(s), _.clone(n), _.clone(r), o)
    }, t.tsResult = function (e, i, s, n, r, o) {
        t.record("t+s result", e, _.clone(i), _.clone(s), n, _.clone(r), o)
    }, t.conflicts = function (e, i, s, n, r) {
        t.record("conflicts", e, _.clone(i), _.clone(s), _.clone(n), r)
    }, t.conflict = function (e, i, s, n, r) {
        t.record("conflict", e, _.clone(i), _.clone(s), _.clone(n), r)
    }, t.assert = function (i, s) {
        t.record("ASSERT", i, s, e.getStack())
    }, t.clear = function () {
        i = []
    }, t.logDump = function () {
        var e = "-------------------------------------------------------------";
        console.log(e + " TRACE dump " + e), _.each(i, function (e) {
            console.log.call(console, e)
        }), console.log(e + "  END dump  " + e)
    }, t.logSummarise = function () {
        var t = "-------------------------------------------------------------";
        console.log(t + " TRACE dump " + t);
        var s = e.list_to_set(["obj init", "update"]);
        _.each(i, function (e) {
            s[e[1]] || console.log.call(console, e)
        }), console.log(t + "  END dump  " + t)
    }, t
}(TD.sync.util), TD.sync.tdapi = function (e, t, i, s) {
    var n = {}, r = null,
        o = null,
        a = function (e, t) {
            return "Basic " + s.encode(e + ":" + t)
        }, c = function () {
            if (!r) throw Error("Not Logged In");
            return "X-TD-Session " + r
        };
    n.getAccounts = function (e) {
        var t = "/verify_user?accounts=true";
        return e && (t = "/verify_user?all=true"), n.drequest(t, n.getReq())
    };
    var l = function (e) {
        return _.isUndefined(e.session) || (r = e.session), e
    }, u = function (e) {
            return r = null, e
        };
    n.login = function (e, t) {
        var i = "/login?session=true",
            s = {
                type: "GET",
                headers: {
                    Authorization: a(e, t)
                }
            }, r = n.drequest(i, s, {});
        return r.addCallback(l), r
    }, n.logout = function () {
        var e = n.drequest("/logout", n.getReq({
            method: "POST"
        }));
        return e.addCallback(u), e
    }, n.isLoggedIn = function () {
        return Boolean(r)
    }, n.setSession = function (e) {
        var t = null;
        e && (t = JSON.parse(e)), t && (r = t)
    }, n.saveSession = function () {
        TD.storage.store.set("_session", r)
    }, n.onAuthFail = function (e) {
        o = e
    }, n.createAccount = function (e, t) {
        var i = TD.util.iso8601(new Date),
            s = "/user" + TD.config.td_create_key + i,
            r = new window.jsSHA(s, "ASCII"),
            o = r.getHMAC(TD.config.td_create_secret, "ASCII", "SHA-256", "B64"),
            c = "/user?session=true&mail_list=False",
            u = {
                type: "PUT",
                headers: {
                    Authorization: a(e, t),
                    "x-td-sig": o,
                    "x-td-timestamp": i,
                    "x-td-create": TD.config.td_create_key
                }
            }, d = n.drequest(c, u);
        return d.addCallback(l), d
    }, n.Conflict = function (e) {
        this.body = e
    };
    var d = RegExp("^([^:]*): (.*)$"),
        h = function (e, t) {
            _.isUndefined(t) && (t = {});
            var i = e.getAllResponseHeaders(),
                s = i.split("\r\n");
            return 1 == s.length && (s = i.split("\n")), _.each(s, function (e) {
                var i = e.match(d);
                i && (t[i[1].toLowerCase()] = i[2])
            }), t
        };
    return n.drequest = function (s, r, a, l) {
        var u = _.uniqueId(r && r.reqid ? "[" + r.reqid + "]rq:" : "rq:");
        if (e.stateLog("drequest", u, s, r), (null === r || _.isUndefined(r)) && (r = n.getReq()), i.request(u, s, r), "/" == s.charAt(0) && (s = TD.config.api_root + s), !_.startsWith(s, "http://") && !_.startsWith(s, "https://")) return t.fail(Error("Malformed url"));
        var d = function (i, s) {
            var n = jQuery.ajax(i, s),
                r = new t.Deferred;
            return n.done(function (e, t, i) {
                r.callback(i)
            }), n.fail(function (i, s, n) {
                409 === i.status ? (e.assert("Conflict" === n, "409 should be Conflict"), r.callback(i)) : r.errback(new t.XMLHttpRequestError(i, n))
            }), r
        }, p = d(s, r);
        p.reqid = u;
        var m = function (e) {
            var t = e.req;
            if (401 === t.status && !l) {
                var i = h(t);
                if ("X-TD-Session" === i["www-authenticate"]) {
                    if (TD.storage.store.getTweetdeckAccountAndPasshash) {
                        var a = TD.storage.store.getTweetdeckAccountAndPasshash();
                        if (a && a.email && a.passhash) {
                            var u = n.login(a.email, a.passhash);
                            return u.addCallback(function () {
                                return n.saveSession(), r.headers.Authorization = c(), d(s, r)
                            }), u.addErrback(function () {
                                o && o()
                            }), u
                        }
                    }
                    if (o) throw o(), e
                }
            }
            throw e
        };
        p.addErrback(m);
        var f = function (t) {
            var o, c = function (t) {
                    if ("" === t) return t;
                    try {
                        return JSON.parse(t)
                    } catch (i) {
                        return _.isEmpty(t) || e.warn(["failed to json parse drequest response;", t, "for request", s, r]), t
                    }
                };
            return o = 409 === t.status ? new n.Conflict(c(t.responseText)) : c(t.responseText), a && h(t, a), a && a.date && TD.storage.notification.notify("/date", a.date), e.stateLog("drequest ret", u, s, o, t.getAllResponseHeaders().split("\n")), i.response(u, s, o, a), o
        };
        return p.addCallback(f, u), p
    }, n.requestWithBody = function (e, t, i, s, r, o, a) {
        var c = n.getReq({
            type: t,
            reqid: o,
            headers: r || {},
            data: JSON.stringify(i),
            contentType: "application/json"
        });
        return n.drequest(e, c, s, a)
    }, n.getReq = function (e) {
        var t = {
            type: "GET",
            headers: {}
        };
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        return t.headers.Authorization = c(), e && e.method && (t.type = e.method), t
    }, n
}(TD.sync.util, TD.core.defer, TD.sync.trace, TD.core.base64), TD.storage.notification = function (e) {
    var t = {}, i = [],
        s = function () {
            var e = i.splice(0, i.length);
            _.each(e, function (e) {
                if (e.topic) try {
                    jQuery.publish(e.topic, e.args)
                } catch (t) {
                    console.log("FAILURE publishing event", e, t)
                } else e.d && e.d.callback()
            })
        };
    return t.notify = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        i.push({
            topic: e,
            args: t
        }), _.defer(s)
    }, t.flush = function () {
        var t = new e.Deferred;
        return i.push({
            d: t
        }), _.defer(s), t
    }, t
}(TD.core.defer), TD.storage.StoredObj = function (e, t, i, s, n, r, o) {
    function a(e) {
        this.controller = e
    }
    return a.prototype.controller = null, a.prototype.managed = !1, a.prototype.stateCache = null, a.prototype.state = null, a.prototype.privateState = null, a.prototype.eventname = "/storage/object", a.prototype._init = function (i) {
        i || (i = {}), o.objInit(this, i), this.state = {}, this.privateState = {}, _.isEmpty(i) ? (this.deltaQ = [], this.stateCache = null) : (this.deltaQ = [new e.StoredDelta("init", i)], this.stateCache = _.clone(i)), t.verboseLog("StoredObj.init", this, i, this.deltaQ)
    }, a.prototype.getApiid = function () {
        var e = this.getPrivate("apiid");
        return t.assert(e, "missing apiid", this), e
    }, a.prototype.hasApiid = function () {
        return Boolean(this.getPrivate("apiid"))
    }, a.prototype.setApiid = function (e) {
        return o.update("set apiid", this, [e]), this.setPrivate("apiid", e)
    }, a.prototype.getKey = function () {
        return this.getPrivate("key")
    }, a.prototype.setKey = function (e) {
        return this.setPrivate("key", e)
    }, a.prototype._prepCache = function () {
        return null === this.stateCache && (t.assert(0 === this.deltaQ.length, "empty stateCache must coincide with empty ΔQ"), this.stateCache = _.clone(this.state)), this.stateCache
    }, a.prototype.set = function (i, s) {
        return o.update("set", this, [i, s]), t.assert("columns" !== i, "you should be setting column_order, not columns"), this._prepCache(), this.deltaQ.push(new e.StoredDelta("set", i, s)), this.stateCache[i] = s, r.notify(this.eventname + "/change", this), this.controller.triggerPush()
    }, a.prototype.setListPermutation = function (i, s) {
        TD.config.debug_checks && this.checkCache();
        var a = this.get(i);
        if (_.isEqual(s, a)) return o.update("set null list permutation", this, [i, a, s]), t.stateLog("ignoring request to change list at", i), n.succeed();
        o.update("set list permutation", this, [i, a, s]);
        var c = e.StoredDelta.listPermutator(i, a, s);
        return t.verboseLog("set list permutation", a, "→", s, "Δs:", c), this.deltaQ = this.deltaQ.concat(c), this.stateCache = e.StoredDelta.applyMultiple(this.deltaQ, this.state), TD.config.debug_checks && this.checkCache(), r.notify(this.eventname + "/change", this), this.controller.triggerPush()
    }, a.prototype.listPrepend = function (t, i) {
        o.update("list prepend", this, [t, i]);
        var s = this.get(t);
        return s || (s = []), this._prepCache(), this.deltaQ.push(new e.StoredDelta("linsert", t, i, 0)), this.stateCache[t] = [i].concat(s), r.notify(this.eventname + "/change", this), this.controller.triggerPush()
    }, a.prototype.listAppend = function (t, i) {
        o.update("list append", this, [t, i]);
        var s = this.get(t);
        return s || (s = []), this._prepCache(), this.deltaQ.push(new e.StoredDelta("linsert", t, i, s.length)), this.stateCache[t] = s.concat([i]), r.notify(this.eventname + "/change", this), this.controller.triggerPush()
    }, a.prototype.listTruncate = function (t, i) {
        o.update("list truncate", this, [t, i]);
        var s = this.get(t);
        return s || (s = []), this._prepCache(), this.deltaQ.push(new e.StoredDelta("ltrunc", t, i)), s.length > i && s.splice(i, s.length - i), this.stateCache[t] = s, r.notify(this.eventname + "/change", this), this.controller.triggerPush()
    }, a.prototype.listRemove = function (t, i) {
        o.update("list remove", this, [t, i]);
        var s = this.get(t) || [];
        return this._prepCache(), this.deltaQ.push(new e.StoredDelta("ldel", t, i)), this.stateCache[t] = _.without(s, i), r.notify(this.eventname + "/change", this), this.controller.triggerPush()
    }, a.prototype.dictSet = function (t, i, s) {
        o.update("dict set", this, [t, i, s]), this._prepCache();
        var n = _.clone(this.get(t));
        return this.deltaQ.push(new e.StoredDelta("hset", t, i, s)), n || (n = {}), n[i] = s, this.stateCache[t] = n, r.notify(this.eventname + "/change", this), this.controller.triggerPush()
    }, a.prototype.setPrivate = function (e, t) {
        return this.privateState[e] = t, n.succeed()
    }, a.prototype.getPrivate = function (e) {
        return this.privateState[e]
    }, a.prototype.immutableSet = function (e, i) {
        var s = this.state[e];
        if (i != s) throw t.warn("ERROR: attempt to change", e, "of", this, "from", s, "to", i), Error("attempt to modify immutable field " + e);
        return n.succeed()
    }, a.prototype.setValueIffDifferent = function (e, i, s, o) {
        var a = this.get(e);
        return _.isEqual(a, i) ? n.succeed(null) : (t.verboseLog(this, "setValueIffDifferent", e, "from", a, "to", i), s && r.notify(s, i, a, this), o && o(i, a), r.notify(this.eventname + "/change", this), this.set(e, i))
    }, a.prototype.get = function (e) {
        return null === this.stateCache ? this.state[e] : this.stateCache[e]
    }, a.prototype.latestDelta = function () {
        return _.isEmpty(this.deltaQ) ? null : this.deltaQ[this.deltaQ.length - 1].id
    }, a.prototype.getStateForBackend = function () {
        TD.config.debug_checks && (t.precondition(this.isDirty(), "don't call getStateForBackend unless isDirty"), this.checkCache());
        var e = _.clone(null !== this.stateCache ? this.stateCache : this.state);
        return !e.mtime && this.state.mtime && (e.mtime = this.state.mtime), {
            "Δid": this.latestDelta(),
            state: this.transformForRemote(e, this.privateState)
        }
    }, a.prototype.postProcessNewRemoteState = function () {}, a.prototype.newRemoteState = function (i) {
        o.update("new remote state", this, i), TD.config.debug_checks && (t.stateLog("checking cache"), this.checkCache()), t.verboseLog("transforming to local:", this, t.clone(i)), this.state = this.transformToLocal(i), 0 !== this.deltaQ.length ? (t.assert(null !== this.stateCache, "if we have Δs, we should have cache"), t.verboseLog("applying pending deltas", this, t.clone(this.deltaQ)), this.stateCache = e.StoredDelta.applyMultiple(this.deltaQ, this.state)) : t.assert(null === this.stateCache, "if no Δs, should have no cache"), this.postProcessNewRemoteState(), TD.config.debug_checks && (t.stateLog("checking cache"), this.checkCache()), r.notify(this.eventname + "/change", this)
    }, a.prototype.commit = function (i, s) {
        o.update("commit", this, [i + " : " + s]);
        var n = _.pluck(this.deltaQ, "id").indexOf(i);
        if (-1 === n) throw t.stateLog("asked to commit " + i + " but it doesn't exist in " + _.map(this.deltaQ, function (e) {
            return "" + e
        })), Error("invalid deltaId supplied");
        if (TD.config.debug_checks && this.checkCache(), n === this.deltaQ.length - 1) this.deltaQ = [], this.state = _.clone(this.stateCache), this.state.mtime = s, this.stateCache = null, TD.config.debug_checks && this.checkCache();
        else {
            var r = this.deltaQ.splice(0, n + 1),
                a = e.StoredDelta.applyMultiple(r, this.state);
            this.state = a, this.state.mtime = s, this.stateCache.mtime = s, TD.config.debug_checks && this.checkCache(), this.controller.triggerPush()
        }
    }, a.prototype.checkCache = function () {
        var i = e.StoredDelta.checkStateCache(this.state, this.deltaQ, this.stateCache);
        t.assert(i, "cache != state+Δs")
    }, a.prototype.checkInvariants = function () {
        this.hasApiid() || t.assert(_.isEmpty(this.state), 'must have no "state" if no apiid'), t.assert(this.state && _.isUndefined(this.state.apiid), "apiid in non-priv state, bad"), this.isDirty() ? (t.assert(!_.isEmpty(this.deltaQ), "deltaQ must be non-empty if dirty"), t.assert(null !== this.stateCache, "cache must be present if dirty"), this.checkCache(), this.hasApiid() && t.assert(null !== this.latestDelta(), "latestDelta() must not return null for Δid for dirty object")) : (t.assert(_.isEmpty(this.deltaQ), "deltaQ must be empty if not dirty"), t.assert(null === this.stateCache, "cache must be absent if not dirty"))
    }, a.prototype.isDirty = function () {
        return this.hasApiid() ? 0 !== this.deltaQ.length : (t.assert(0 !== this.deltaQ.length, "should be dirty if no apiid"), !0)
    }, a
}(TD.storage, TD.sync.util, TD.sync.tdapi, TD.util, TD.core.defer, TD.storage.notification, TD.sync.trace), TD.storage.StoredDelta = function (e) {
    function t(t) {
        this.type = t, e.assert(n[t] && i, "unknown type " + t), this.args = _.toArray(arguments).slice(1), this.id = "Δ" + (new Date).getTime() + _.uniqueId(":"), s(t, this.args), "init" === t && (e.verboseLog("initialisation delta", this.id, this.args[0]), "mtime" in this.args[0] && (e.warn("WARNING init Δ contains mtime!", e.clone(this.args[0])), e._break()))
    }
    var i = {
        init: 1,
        set: 2,
        del: 1,
        lmove: 3,
        ldel: 2,
        linsert: 3,
        ladd: 3,
        ltrunc: 2,
        hset: 3,
        other: 0
    }, s = function (t, s) {
            var n = i[t];
            switch (e.assert(s.length === n, "wrong no. args for " + t + ", expected " + n + " got " + s.length), t) {
            case "ltrunc":
                e.assert("number" == typeof s[1], "ltrunc: length must be number");
                break;
            case "linsert":
            case "ladd":
            case "ldel":
            case "lmove":
                e.assert("string" == typeof s[1], "list elements must be strings")
            }
        };
    t.prototype.toString = function () {
        return "StoredDelta[" + this.id + "](" + this.type + ": " + JSON.stringify(this.args) + ")"
    }, t.prototype.serialise = function () {
        return [this.type].concat(this.args)
    };
    var n = {
        init: function (t, i) {
            if (!_.isEqual(t, {})) {
                var s = e.clone(t),
                    n = e.clone(i);
                return delete s.mtime, delete n.mtime, _.isEqual(s, n) ? (e.warn("WARNING Δ init_state === state", e.clone(t), "init:", i.mtime, "state:", t.mtime), t) : (e.warn("WARNING discarding init_state", e.clone(i), "in favour of", e.clone(t)), void 0)
            }
            return _.clone(i)
        },
        set: function (e, t, i) {
            return e[t] = i, e
        },
        del: function (e, t) {
            return delete e[t], e
        },
        lmove: function (e, t, i, s) {
            var n = _.clone(e[t]),
                r = n.indexOf(i);
            return -1 != r ? (n.splice(r, 1), n.splice(r + s, 0, i), e[t] = n, e) : void 0
        },
        ldel: function (e, t, i) {
            var s;
            return s = _.isUndefined(e[t]) ? [] : _.without(e[t], i), e[t] = s, e
        },
        linsert: function (e, t, i, s) {
            var n;
            return n = _.isUndefined(e[t]) ? [] : _.clone(e[t]), n.splice(s, 0, i), e[t] = n, e
        },
        ladd: function (e, t, i, s) {
            if (_.include(e[t], i)) return e;
            var n;
            return n = _.isUndefined(e[t]) ? [] : _.clone(e[t]), n.splice(s, 0, i), e[t] = n, e
        },
        ltrunc: function (e, t, i) {
            var s;
            return s = _.isUndefined(e[t]) ? [] : e[t], s.length > i && s.splice(i, s.length - i), e[t] = s, e
        },
        hset: function (e, t, i, s) {
            var n = _.clone(e[t]);
            return n || (n = {}), n[i] = s, e[t] = n, e
        }
    };
    t.prototype.apply = function (t) {
        var i = _.clone(t),
            s = n[this.type],
            r = s.apply(this, [i].concat(this.args));
        return r ? r : (e.warn("WARNING: unable to apply Δ", "" + this, "to", e.clone(t)), _.clone(t))
    }, t.listPermutator = function (i, s, n) {
        var r = [],
            o = _.clone(s);
        if (e.verboseLog("StoredDelta.listPermutator", s, "→", n), s.length != _.union(s).length || n.length != _.union(n).length) throw e.stateLog("Duplicate error in listPermutator", {
            original: s,
            original_: _.union(s),
            target: n,
            targetu: _.union(n)
        }), new TypeError("lists must not contain duplicates");
        _.each(_.difference(s, n), function (e) {
            r.push(new t("ldel", i, e)), o.splice(o.indexOf(e), 1)
        });
        for (var a = 0; n.length > a; a++)
            if (o[a] != n[a]) {
                var c = n[a],
                    l = o.indexOf(c); - 1 === l ? (r.push(new t("ladd", i, c, a)), o.splice(a, 0, c)) : (r.push(new t("lmove", i, c, a - l)), o.splice(l, 1), o.splice(a, 0, c))
            }
        return r
    }, t.applyMultiple = function (e, t) {
        return _.reduce(e, function (e, t) {
            return t.apply(e)
        }, t)
    };
    var r = function (e, t) {
        function i() {
            return e.apply(this, t)
        }
        return i.prototype = e.prototype, new i
    };
    return t.deserialiseDeltas = function (e) {
        return _.map(e, function (e) {
            return r(t, e)
        })
    }, t.checkStateCache = function (i, s, n) {
        if (null === n && 0 === s.length) return !0;
        ccache = _.clone(n), delete ccache.mtime;
        var r = t.applyMultiple(s, _.clone(i));
        return delete r.mtime, _.isEqual(ccache, r) ? !0 : (e.stateLog("cache", n, "!= goal", r, "for", i, "+", s), !1)
    }, t
}(TD.sync.util, TD.sync.tdapi, TD.util, TD.core.defer, TD.storage.notification), TD.storage.SobjController = function (e, t, i, s, n, r) {
    var o = function () {
        this._objects = null, this._objectsByApiid = null, this.reqsinflight = null, this.apiEndpoint = null, this._moduleName = null
    };
    return o.prototype.toString = function () {
        return "<SobjController[" + (this._moduleName || "unknown") + "]>"
    }, o.prototype.triggerPush = function () {
        throw t.printStacktrace(), Error("NotImplemented")
    }, o.prototype.bindTrigger = function (i) {
        var s = t.makeThingScheduler,
            n = e.store.getTweetdeckAccount;
        this.triggerPush = s(_.bind(this.pushDirty, this), null, i, n)
    }, o.prototype.remove = function (e) {
        var t = this._objects[e];
        t && (t.managed = !1, t.hasApiid() && delete this._objectsByApiid[t.getApiid()]), delete this._objects[e]
    }, o.prototype.getAll = function () {
        return _.values(this._objects)
    }, o.prototype.getByApiid = function (e) {
        return t.assert(e, "must provide apiid; " + t.repr(e)), t.assert("undefined" != e, "huh? where did that come from?"), this._objectsByApiid[e]
    }, o.prototype.pushPreflight = function () {
        return n.succeed(null)
    }, o.prototype.pushDirty = function () {
        TD.config.debug_checks && this.checkInvariants();
        var e = _.uniqueId("pD:");
        r.push(this, "pushDirty", null, e);
        var t = this,
            i = this.pushPreflight();
        return i.addCallback(function () {
            var i = _.filter(t._objects, function (e) {
                return e.isDirty()
            });
            if (_.isEmpty(i)) return r.push(t, "(not dirty)", null, e), n.succeed();
            var s = t.pushObjects(i, e);
            return s.addCallback(function () {
                return t.pushDirty()
            }), s
        }), i
    }, o.prototype.prePushCheckInvariants = function () {}, o.prototype.pushObjects = function (e, s) {
        if (t.verboseLog("" + this + ".pushObjects()", this, e), s || (s = _.uniqueId("pO:")), r.push(this, "pushObjects", e, s), t.assert(this.apiEndpoint, "api endpoint must be set"), _.isEmpty(e)) return r.push(this, "(empty)", e, s), n.succeed([]);
        TD.config.debug_checks && this.prePushCheckInvariants(e);
        var o = _.map(e, function (e) {
            return e.getStateForBackend()
        }),
            a = _.pluck(o, "Δid"),
            c = _.pluck(o, "state");
        r.push(this, "objs+Δs", e, a, s), TD.config.debug_checks && (_.each(c, function (e) {
            t.assert(e.mtime || !e.id, "for a test and set request, we expect (require) either mtime (modify) or absence of id (create) for every object")
        }), _.isEmpty(this.reqsinflight) || (t.warn("WARNING! called pushObjects", e, "when already have requests in flight", t.clone(this.reqsinflight)), t._break()));
        var l = {}, u = i.requestWithBody(this.apiEndpoint, "POST", c, l, {
                "x-td-mtime-check": "partial"
            }, s);
        if (TD.config.debug_checks) {
            this.reqsinflight.push(u.reqid);
            var d = this;
            u.addBoth(function (e) {
                return d.reqsinflight = _.without(d.reqsinflight, u.reqid), e
            })
        }
        return u.addCallbackWith(this, this._processTSResults, e, a, l, s), u
    }, o.prototype._processTSResults = function (e, s, n, o, a) {
        r.tsResults(this, e, s, n, o, a), e instanceof i.Conflict && (r.conflicts(this, e.body, s, o, a), e = e.body), t.assert(e.length == s.length, "wrong number of responses/objects!"), t.assert(e.length == n.length, "wrong number of responses/deltas!"), t.verboseLog("objects", s, "deltas", n), _.each(n, function (e) {
            t.assert(null !== e, "Δid must not be null")
        });
        var c = o["x-td-mtime"];
        t.assert(c, "require x-td-mtime header in object PUT");
        for (var l, u = this, d = function (e, i) {
                t.verboseLog("_processTSResults:check_set_apiid", e, i), e.hasApiid() ? t.assert(e.getApiid() == i, "apiid mismatch") : (u._objectsByApiid[i] = e, e.setApiid(i))
            }, h = 0; e.length > h; h++) l = e[h], _.isString(l) ? (t.verboseLog("_processTSResults", s[h], e[h]), d(s[h], e[h]), s[h].commit(n[h], c)) : (r.conflict(this, l, s[h], o, a), t.verboseLog("_processTSResults: not an apiid:", l), s[h].newRemoteState(e[h]))
    }, o.prototype.pushObject = function (e, s) {
        t.verboseLog("" + this + ".pushObject()", this, e, s), r.push(this, "object", e);
        var n = e.getStateForBackend(),
            o = n["Δid"],
            a = n.state;
        t.assert(a.mtime, "for a test and set request, we expect (require) mtime");
        var c = {}, l = i.requestWithBody(s, "PUT", a, c, {
                "x-td-iff-mtime": a.mtime
            });
        return l.addCallbackWith(this, this._processTSResult, e, o, c), l
    }, o.prototype._processTSResult = function (e, s, n, o) {
        r.tsResult(this, e, s, n, o), t.verboseLog("object", s, "delta", n), t.assert(null !== n, "Δid must not be null");
        var a;
        if (e instanceof i.Conflict) t.verboseLog("_processTSResult: got a conflict:", e), a = s.newRemoteState(e.body);
        else {
            t.assert(_.isString(e), "don't know how to handle response");
            var c = o["x-td-mtime"];
            t.assert(c, "require x-td-mtime header in object PUT"), t.verboseLog("_processTSResult", s, e), a = s.commit(n, c)
        }
        return a
    }, o.prototype.checkInvariants = function () {
        var e = this;
        _.each(this._objects, function (i) {
            var s = i.checkInvariants;
            s && s.call(i), i.hasApiid() && t.assert(e._objectsByApiid[i.getApiid()], "all managed objects with apiid must be in _objectsByApiid")
        })
    }, o
}(TD.storage, TD.sync.util, TD.sync.tdapi, TD.storage.notification, TD.core.defer, TD.sync.trace), TD.storage.FeedController = function (e, t, i, s) {
    var n = function () {
        var i = this;
        this.apiEndpoint = "/feeds", this._moduleName = "feeds", this.reqsinflight = [], this.bindTrigger("feedctr"), i._objects = {}, i._objectsByApiid = {}, this.toString = function () {
            return "<FeedController>"
        }, this.init = function () {
            t.trace("feedController init"), TD.config.debug_checks && this.checkInvariants()
        }, this.reset = function () {
            this._objects = {}, this._objectsByApiid = {}
        }, this.updateFromBackend = function (i) {
            var n = this;
            t.stateLog("feedController.updateFromBackend:", i), _.each(i, function (t, i) {
                var r = n._objectsByApiid[i];
                r ? (r.newRemoteState(t), s.notify("/storage/feed/updated", r)) : (r = e.Feed.newFromBackendState(t), r.setApiid(i), n.manage(r), s.notify("/storage/feed/new", r))
            })
        }, this.get = function (e) {
            return this._objects[e]
        }, this.manage = function (e) {
            e.managed = !0;
            var s = this._objects[e.getKey()];
            return s && e === s ? i.triggerPush() : (s && (t.warn("WARNING replacing feed", s, "with", e, "please use feedController.getOrCreateFeed", [t.getStack().split("\n")]), s.getLatestTime() > e.getLatestTime() && t.warn("Warning: latestTime weirdness:", s.getLatestTime(), e.getLatestTime()), s.hasApiid() && e.setApiid(s.getApiid()), s.isDirty() && (_.isEmpty(s.deltaQ) || "init" != s.deltaQ[0].type) && t.assert(!s.isDirty(), "houston, we have a problem")), this._objects[e.getKey()] = e, e.hasApiid() && (this._objectsByApiid[e.getApiid()] = e), i.triggerPush())
        }, this.manageFeeds = function (e) {
            for (var t = 0; e.length > t; t++) i.manage(e[t])
        }, this._selfcheckapiids = function () {
            for (var e in this._objects) {
                var t = this._objects[e];
                t.apiid && _assert(t == i.getByApiid(t.apiid), "lookup failed")
            }
        }, i.isEmpty = function () {
            return _.isEmpty(this._objects)
        }, i.getOrCreateFeed = function (t, i, s, n, r) {
            var o, a, c, l;
            if ("search" !== t || n.term || n.baseQuery && n.searchFilterData && (o = "xq" + Math.floor(1e5 * Math.random()), a = new TD.vo.SearchFilter(n.searchFilterData), n.term = [n.baseQuery, a.getQueryString(), "-" + o].join(" ")), l = e.Feed.generateKeyFor(s, t, n), c = this._objects[l], "list" === t && (n.screenName = n.ownerId, n.slug = n.listId), !c) {
                var u = {
                    type: t,
                    service: i,
                    accountkey: s,
                    metadata: n,
                    apiid: r
                };
                c = new e.Feed(u)
            }
            return r && (c.apiid = r, this._objectsByApiid[r] = c), c
        }
    };
    return n.prototype = new e.SobjController, e.feedController = new n, n
}(TD.storage, TD.sync.util, TD.sync.tdapi, TD.storage.notification, TD.core.defer), TD.storage.ColumnController = function (e, t, i, s) {
    var n = function () {
        var i = this;
        this.apiEndpoint = "/columns", this._moduleName = "columns", this.reqsinflight = [], this.bindTrigger("colctr"), $.subscribe("/storage/account/new", function (e) {
            i.addToCombinedColumns(e)
        }), this._objects = {}, this._objectsByApiid = {}, this.toString = function () {
            return "<ColumnController>"
        }, this.init = function () {
            t.trace("columnController init"), TD.config.debug_checks && this.checkInvariants()
        }, this.reset = function () {
            this._objects = {}, this._objectsByApiid = {}
        }, this.updateFromBackend = function (i) {
            var n = this;
            t.stateLog("columnController.updateFromBackend:", i), _.each(i, function (t, i) {
                var r = n._objectsByApiid[i];
                r ? r.newRemoteState(t) : (r = e.Column.newFromBackendState(t), r.setApiid(i), n.manage(r), s.notify("/storage/column/new", r))
            })
        }, this.get = function (e) {
            return this._objects[e]
        }, this.getColumnsContainingFeed = function (e) {
            var t = [];
            return _.each(this._objects, function (i) {
                _.each(i.getFeedKeys(), function (s) {
                    s == e && t.push(i)
                })
            }), t
        }, this.getColumnsByType = function (e) {
            return _.filter(this._objects, function (t) {
                return t.getType() === e
            })
        }, this.manage = function (e) {
            return e.managed = !0, t.assert(e.getKey(), "columns must have valid keys to be managed!"), this._objects[e.getKey()] = e, e.hasApiid() && (this._objectsByApiid[e.getApiid()] = e), this.triggerPush()
        }, this.remove = function (e) {
            var t = this._objects[e];
            t && (t.managed = !1), delete this._objects[e]
        }, this.getAll = function () {
            return _.values(this._objects)
        }, this.getByApiid = function (e) {
            t.assert(e, "must provide apiid; " + t.repr(e)), t.assert("undefined" !== e, "huh? where did that come from?");
            var i = this._objectsByApiid[e];
            return i || (t.warn("WARNING: col ", e, " not found in cols_by_apiid ", _.keys(this._objectsByApiid)), t.stateLog("this._objects, apiids; ", t.pformat(_.map(this._objects, function (e, t) {
                return [t, e.getApiid()]
            })))), i
        }, this.isEmpty = function () {
            return _.isEmpty(this._objects)
        }, this._selfcheckapiids = function () {
            for (var e in this._objects) {
                var t = this._objects[e];
                t.hasApiid() && _assert(t == this.getByApiid(t.getApiid()), "lookup failed")
            }
        }, this.addToCombinedColumns = function (i) {
            t.stateLog("ADDING ACCOUNT TO COMBINED COLS", i);
            for (var s, n, r, o, a = e.clientController.client.getColumnOrder(), c = {
                    home: !0,
                    me: !0,
                    privateMe: !0
                }, l = function (e) {
                    return e.getKey()
                }, u = 0; a.length > u; u++)
                if (s = this.get(a[u])) {
                    if (n = s.getType(), c[n]) {
                        switch (r = null, n) {
                        case "me":
                            r = this.getMeFeeds([i]);
                            break;
                        case "privateMe":
                            r = this.getInboxFeeds([i])
                        }
                        r && (o = _.map(r, l), s.setFeedKeys(s.getFeedKeys().concat(o)), s.managed && e.feedController.manageFeeds(r))
                    }
                } else t.warn("Warning: Column not found!"), t._break()
        };
        var n = function (t, i) {
            var s = e.feedController;
            return s.getOrCreateFeed(t, i.getType(), i.getKey(), {})
        };
        this.getMeFeeds = function (e) {
            for (var t = [], i = 0; e.length > i; i++) "twitter" === e[i].getType() && t.push(n("mentions", e[i]));
            return t
        }, this.getInboxFeeds = function (e) {
            for (var t = [], i = 0; e.length > i; i++) "twitter" === e[i].getType() && t.push(n("direct", e[i]));
            return t
        }, this.prePushCheckInvariants = function (i) {
            _.each(i, function (i) {
                _.each(i.getFeedKeys(), function (i) {
                    t.assert(e.feedController.get(i), "feeds must exist + be managed in columns push; " + i), t.assert(e.feedController.get(i).hasApiid(), "feeds must all have apiid in columns push; " + i)
                })
            })
        }
    };
    return n.prototype = new e.SobjController, n.prototype.pushPreflight = function () {
        return e.feedController.triggerPush(.05)
    }, e.columnController = new n, n
}(TD.storage, TD.sync.util, TD.sync.tdapi, TD.storage.notification, TD.core.defer), TD.storage.AccountController = function (e, t, i, s, n) {
    var r = function () {
        var r = this;
        this._moduleName = "accounts", this.LAST_VERIFIED_STORAGE_KEY = "accounts_last_verified", this.reqsinflight = [], r.ACCEPTED_ACCOUNT_TYPES = {
            twitter: !0,
            bitly: !0
        }, this._objects = {};
        var o = {};
        r.blacklistAccount = function (i) {
            t.stateLog("blacklisting", i);
            var n = i.getKey();
            e.clientController.client.addToAccountBlacklist(n), this._objects[n] && r.remove(n), e.clientController.client.delFromAccountWhitelist(n), s.notify("/storage/account/blacklisted", i)
        }, r.whitelistAccounts = function (i) {
            t.stateLog("whitelisting", i), e.clientController.client ? _.each(i, function (t) {
                e.clientController.client.addToAccountWhitelist(t.getKey()), e.clientController.client.delFromAccountBlacklist(t.getKey())
            }) : t.warn("Can't update whitelist: client not initialised")
        }, r.isEmpty = function () {
            return _.isEmpty(this._objects)
        }, r.getDefault = function () {
            var t = e.clientController.client.getDefaultAccount();
            return t && this._objects[t] ? this._objects[t] : r.isEmpty() ? null : (r.setDefault(r.getAll()[0].getKey()), this._objects[e.clientController.client.getDefaultAccount()])
        }, r.setDefault = function (t) {
            e.clientController.client.setDefaultAccount(t)
        }, r.getAccountsForService = function (e) {
            return _.select(this._objects, function (t) {
                return t.getType() === e
            })
        }, r.getAccountFromUsername = function (e) {
            var t = r.getAccountsForService("twitter");
            return e = e.toLowerCase(), _.select(t, function (t) {
                return t.getUsername().toLowerCase() === e
            })
        }, r.getPreferredAccount = function (e) {
            var t = r.getDefault();
            return !t || e && t.getType() != e ? r.getAccountsForService(e)[0] : t
        }, this.init = function () {
            t.trace("accountController init"), jQuery.subscribe("/storage/client/change", function (e) {
                _.each(e.getAccountBlacklist(), function (e) {
                    r._objects[e] && r.remove(e)
                })
            })
        }, this.reset = function () {
            this._objects = {}
        }, this.triggerPush = function () {
            t.assert(!1, "triggerPush() should not be called on account controller")
        };
        var a = function (i, s) {
            var n = t.list_to_set(s.settings.account_whitelist || []),
                a = t.list_to_set(s.settings.account_blacklist || []),
                c = {}, l = i || [],
                u = [],
                d = [];
            return _.each(l, function (t) {
                var i = e.Account.generateKeyFor(t.service, t.uid);
                if (!a[i])
                    if (n[i]) {
                        if (!r.ACCEPTED_ACCOUNT_TYPES[t.service]) return;
                        c[t.service] = !0, u.push(t)
                    } else {
                        if (!r.ACCEPTED_ACCOUNT_TYPES[t.service]) return;
                        if (1e3 == t.uid) return;
                        if (!("bitly" === t.service || t.key && t.secret)) return;
                        if ("bitly" === t.service && !t.key) return;
                        d.push(t)
                    }
            }), _.each(r.getAll(), function (e) {
                a[e.getKey()] || (c[e.getType()] = !0)
            }), d.sort(r.accountComparator), d = _.select(d, function (t) {
                var i = e.Account.generateKeyFor(t.service, t.uid);
                return "twitter" !== t.service && c[t.service] || (c[t.service] = !0, r._objects[i]) ? !1 : !0
            }), o = _.map(d, function (t) {
                return e.Account.newFromBackendState(t)
            }), u
        };
        this.updateFromBackend = function (i, s) {
            t.stateLog("accountController.updateFromBackend:", i), i = a(i, s);
            var n = this;
            _.each(i, function (i) {
                var s = e.Account.generateKeyFor(i.service, i.uid),
                    r = n._objects[s];
                r ? (t.stateLog("updating existing", r, "with", i), r.newRemoteState(i)) : (t.stateLog("creating new Account with", i), r = e.Account.newFromBackendState(i), n.manage(r))
            })
        }, this.get = function (e) {
            return "tweetdeck" === e ? {
                getKey: function () {
                    return "tweetdeck"
                },
                getUserID: function () {
                    return "tweetdeck"
                },
                getType: function () {
                    return "tweetdeck"
                }
            } : this._objects[e]
        }, this.manage = function (e) {
            if (!e.getKey()) throw {
                name: "TypeError",
                message: "account must have its .key set"
            };
            return e.managed = !0, this._objects[e.getKey()] || s.notify("/storage/account/new", e), this._objects[e.getKey()] = e, this.whitelistAccounts([e]), this.saveLastVerifiedTimestamp(e), this.pushAccount(e)
        }, this.getLastVerifiedTimestamp = function (t) {
            var i = e.store.get(this.LAST_VERIFIED_STORAGE_KEY),
                s = i[t.getKey()] || 0,
                n = t.getUpdated() || 0;
            return Math.max(s, n)
        }, this.saveLastVerifiedTimestamp = function (t) {
            var i = e.store.get(this.LAST_VERIFIED_STORAGE_KEY),
                s = i[t.getKey()] || 0,
                n = t.getUpdated() || 0,
                r = Math.max(s, n);
            r !== s && (i[t.getKey()] = r, e.store.set(this.LAST_VERIFIED_STORAGE_KEY, i))
        }, this.removeLastVerifiedTimestamp = function (t) {
            var i = e.store.get(this.LAST_VERIFIED_STORAGE_KEY);
            delete i[t.getKey()], e.store.set(this.LAST_VERIFIED_STORAGE_KEY, i)
        }, r.remove = function (e) {
            var t = this._objects[e];
            t.managed = !1, delete this._objects[e], s.notify("/storage/account/removed", t), this.removeLastVerifiedTimestamp(t)
        }, r.getAll = function () {
            var e = _.values(this._objects);
            return e.sort(r.accountComparator), e
        }, r.getPostingAccounts = function () {
            return _.filter(r.getAll(), function (e) {
                return "bitly" !== e.getType()
            })
        }, r.accountComparator = function (e, t) {
            var i = e.getType ? e.getType() : e.service,
                s = t.getType ? t.getType() : t.service,
                n = e.getUserID ? e.getUserID() : e.uid,
                r = t.getUserID ? t.getUserID() : t.uid,
                o = "twitter" == i ? 2 : 1,
                a = "twitter" == s ? 2 : 1;
            return a > o ? 1 : o > a ? -1 : 2 == o && 2 == a ? n > r ? 1 : -1 : i > s ? 1 : -1
        }, r.getDefaults = function () {
            var e = r.getAll(),
                t = r.getDefault(),
                i = [],
                s = {};
            t && (s[t.getType()] = !0, i.push(t));
            for (var n = 0; e.length > n; n++) s[e[n].getType()] || (s[e[n].getType()] = !0, i.push(e[n]));
            return i
        }, r.loginTweetdeck = function (e, s, n) {
            t.stateLog("aC.loginTweetdeck()", e, s, n), null !== s && (n = TD.core.sha1(s));
            var r = i.login(e, n);
            return r.addCallback(function (t) {
                return {
                    tweetdeck_account: {
                        email: e,
                        password: n,
                        plaintext_password: s
                    },
                    data: t
                }
            }), r
        }, r.createTweetdeckAccount = function (e, s) {
            t.stateLog("aC.createTweetdeckAccount()", e, s);
            var n = TD.core.sha1(s),
                r = i.createAccount(e, n);
            return r.addErrback(t.errmark, "accountController.js:createTweetDeckAccount():->tdapi.createAccount()"), r.addCallback(function () {
                return {
                    tweetdeck_account: {
                        email: e,
                        password: n,
                        plaintext_password: s
                    },
                    data: {
                        accounts: []
                    }
                }
            }), r.addErrback(t.errmark, "accountController.js:createTweetDeckAccount()"), r
        }, r.pushAccounts = function () {
            return n.gatherResults(_.map(this._objects, function (e) {
                return r.pushAccount(e)
            }))
        }, r.pushAccount = function (e) {
            if (i.isLoggedIn()) {
                var t = e.getKey();
                if (t && this._objects[t]) {
                    var s = e.getStateForBackend(),
                        n = "/accounts/" + e.getType() + "/" + e.getUserID();
                    return i.requestWithBody(n, "POST", s)
                }
            }
        }, r.deleteAccount = function (e) {
            t.stateLog("sync.controller.deleteAccount:", e);
            var s = "/accounts/" + e.getType() + "/" + e.getUserID();
            return i.drequest(s, i.getReq({
                method: "DELETE"
            }))
        }, r.verifyStoredAccounts = function () {
            var e = !0,
                t = !1,
                i = [],
                s = Date.now() - TD.constants.time.oneDay,
                a = r.getAll(),
                c = function (e, t) {
                    var i = TD.controller.auth.create(e.getType(), e),
                        s = new n.Deferred;
                    return i.verifyAccount(_.bind(s.callback, s), _.bind(s.errback, s)), t && s.addErrback(function () {}), s.addCallback(function () {
                        TD.storage.accountController.manage(e)
                    }), s
                };
            return _.each(a, function (e) {
                (t || s > this.getLastVerifiedTimestamp(e) || !e.getProfileImageURL() || !e.getUsername() || !e.getName()) && i.push(c(e, !0))
            }.bind(this)), e && (_.each(o, function (e) {
                r.ACCEPTED_ACCOUNT_TYPES[e.getType()] && i.push(c(e, !1))
            }), o = []), new n.DeferredList(i)
        }
    };
    return r.prototype = new e.SobjController, e.accountController = new r, r
}(TD.storage, TD.sync.util, TD.sync.tdapi, TD.storage.notification, TD.core.defer), TD.storage.ClientController = function (e, t, i, s, n, r, o) {
    var a = function () {
        var i = this;
        this.apiEndpoint = "/clients", _.defer(function () {
            var s = t.makeThingScheduler,
                n = e.store.getTweetdeckAccount;
            i.triggerPush = s(_.bind(i.pushIfDirty, i), null, "clisync", n)
        }), this._moduleName = "clients", this.reqsinflight = [], this._objects = {}, this._objectsByApiid = this._objects, this.client = null, this.toString = function () {
            return "<ClientController>"
        }, this.init = function () {
            t.stateLog("client controller init start", this.client), t.trace("clientController init"), TD.config.sync_name in this._objects ? (this.client = this._objects[TD.config.sync_name], t.assert(this.client.getName(), "need name!"), t.stateLog("client controller new client:", this.client)) : t.stateLog("no initial client state; deferring client creation"), t.stateLog("clientController.init: client: ", this.client)
        }, this.reset = function () {
            this.client = null
        }, this.createNewClient = function () {
            t.stateLog("clientController.createNewClient()");
            var i = this,
                n = {
                    name: TD.config.sync_name,
                    columns: [],
                    settings: {}
                }, r = {}, o = s.requestWithBody("/clients", "POST", n, r);
            return o.addCallback(function () {
                t.stateLog("createNewClient resp headers; ", r);
                var s = r["x-td-mtime"];
                return t.assert(s, "require x-td-mtime header in client POST"), n.mtime = s, i.client = e.Client.newFromBackendState(n), t.assert(i.client.getName(), "Client should have name at this point"), i._objects[i.client.getName()] = i.client, t.stateLog("clientController.createNewClient with", i.client.state), i.triggerPush()
            }), o
        }, this.updateFromBackend = function (i) {
            null === this.client ? (this.client = e.Client.newFromBackendState(i), this._objects[this.client.getName()] = this.client, t.stateLog("client controller (ufb) new client:", this.client)) : this.client.newRemoteState(i)
        }, this.pushIfDirty = function () {
            if (TD.config.debug_checks && this.checkInvariants(), o.push(this, "dirty", null), this.client.isDirty()) {
                o.push(this, "dirty", this.client);
                var i = this,
                    s = e.columnController.triggerPush();
                return s.addCallback(function () {
                    return t.assert(i.client.isDirty(), "?!? push dirty, but not dirty"), i.pushObject(i.client, "/clients/" + i.client.getName())
                }), s.addCallback(function () {
                    return i.pushIfDirty()
                }), s
            }
            return o.push(this, "not dirty", null), r.succeed()
        }
    };
    return a.prototype = new e.SobjController, e.clientController = new a, a
}(TD.storage, TD.sync.util, TD.util, TD.sync.tdapi, TD.storage.notification, TD.core.defer, TD.sync.trace), TD.storage.Feed = function (e, t) {
    var i = function (e, t) {
        this._init(e), _.isUndefined(t) || (this.state = this.transformToLocal(t)), this.setKey(i.generateKeyFor(this.getAccountKey(), this.getType(), this.getMetadata()))
    };
    return i.prototype = new e.StoredObj(e.feedController), i.prototype.eventname = "/storage/feed", i.generateKeyFor = function (e, i, s) {
        s = s || {};
        var n = TD.util.deterministicObjectHash(s),
            r = [e, i, n];
        return t.assert(e, "accountkey not set in Feed.generateKey"), t.assert(i, "type not set in Feed.generateKey"), encodeURI(r.join(":"))
    }, i.prototype.getType = function () {
        return this.get("type")
    }, i.prototype.setType = function (e) {
        return this.immutableSet("type", e)
    }, i.prototype.getService = function () {
        return this.get("service")
    }, i.prototype.setService = function (e) {
        return this.immutableSet("service", e)
    }, i.prototype.getAccountKey = function () {
        return this.get("accountkey")
    }, i.prototype.setAccountKey = function (e) {
        return this.immutableSet("accountkey", e)
    }, i.prototype.getLatestTime = function () {
        var e = this.get("marks");
        if (!e || _.isEmpty(e)) return 0;
        var t = e[0];
        return t.last_notification || 0
    }, i.prototype.setLatestTime = function (e) {
        var t = this.get("marks");
        return !t || _.isEmpty(t) ? this.set("marks", [{
            last_notification: e
        }]) : (t[0].last_notification = e, this.set("marks", t))
    }, i.prototype.getMetadata = function () {
        return _.clone(this.get("metadata"))
    }, i.prototype.setMetadata = function (e) {
        return this.immutableSet("metadata", e)
    }, i.prototype.transformForRemote = function (i, s) {
        var n = e.accountController.get(i.accountkey);
        t.assert(n && n.getUserID(), "must have acct + uid for feed transform");
        var r = n.getUserID(),
            o = {
                type: i.type,
                service: i.service,
                account: {
                    userid: "" + r
                },
                metadata: JSON.stringify(i.metadata),
                marks: i.marks
            };
        return i.mtime && (o.mtime = i.mtime), s.apiid && (o.id = s.apiid), o
    }, i.prototype.reprocessNotificationMarks = function (e, t) {
        var i = null,
            s = null;
        if (t && t.marks && !_.isEmpty(t.marks) && (i = t.marks[0].last_notification, s = t.marks), e.marks && !_.isEmpty(e.marks)) {
            s = e.marks;
            var n = e.marks[0].last_notification;
            i && n ? i = Math.max(i, n) : n && (i = n)
        }
        return s ? s[0].last_notification = i : s = i ? [{
            last_notification: i
        }] : [], s
    }, i.prototype.transformToLocal = function (t) {
        var i = {
            type: t.type,
            service: t.service,
            accountkey: e.Account.generateKeyFor(t.service, t.account.userid),
            metadata: JSON.parse(t.metadata),
            mtime: t.mtime,
            marks: t.marks
        };
        return i
    }, i.newFromBackendState = function (e) {
        return new i(null, e)
    }, i
}(TD.storage, TD.sync.util, TD.sync.tdapi, TD.util), TD.storage.Column = function (e, t, i, s, n) {
    var r = function (e) {
        this._init(e), this.privateState.key || (this.privateState.key = "c" + (new Date).getTime() + _.uniqueId("s"))
    };
    r.prototype = new e.StoredObj(e.columnController), r.prototype.eventname = "/storage/column", r.prototype.getTitle = function () {
        var e = this.get("title");
        return _.isUndefined(e) ? "loading…" : e
    }, r.prototype.setTitle = function (e) {
        return this.set("title", e)
    }, r.prototype.getDescription = function () {
        return this.get("description")
    }, r.prototype.setDescription = function (e) {
        return this.set("description", e)
    }, r.prototype.getType = function () {
        return this.get("type")
    }, r.prototype.setType = function (e) {
        return this.set("type", e)
    }, r.prototype.getFilters = function () {
        return this.get("filters")
    }, r.prototype.setFilters = function (e) {
        return this.setValueIffDifferent("filters", e)
    }, r.prototype.getHasSound = function () {
        var e = this.get("settings");
        return Boolean(e && e.has_sound)
    }, r.prototype.setHasSound = function (e) {
        return e = Boolean(e), n.notify("/storage/column/column_flags_changed", "has_sound", e, this), this.dictSet("settings", "has_sound", e)
    }, r.prototype.getHasNotification = function () {
        var e = this.get("settings");
        return Boolean(e && e.has_notification)
    }, r.prototype.setHasNotification = function (e) {
        return e = Boolean(e), n.notify("/storage/column/column_flags_changed", "has_notification", e, this), this.dictSet("settings", "has_notification", e)
    }, r.prototype.getMediaPreviewSize = function () {
        var e = this.get("settings");
        return e ? e.media_preview_size : null
    }, r.prototype.setMediaPreviewSize = function (e) {
        return $(document).trigger("dataColumnSettings", {
            columnKey: this.getKey(),
            mediaPreviewSize: e
        }), this.dictSet("settings", "media_preview_size", e)
    }, r.prototype.getClearedTimestamp = function () {
        var e = this.get("settings");
        return e && e.cleared_timestamp ? e.cleared_timestamp : 0
    }, r.prototype.setClearedTimestamp = function (e) {
        return n.notify("/storage/column/column_marks_changed", "cleared_timestamp", e, this), this.dictSet("settings", "cleared_timestamp", e)
    }, r.prototype.getFeedKeys = function () {
        return this.get("feedkeys")
    }, r.prototype.setFeedKeys = function (e) {
        return this.setValueIffDifferent("feedkeys", _.isArray(e) ? _.uniq(e.sort(), !0) : e, "/storage/column/feeds_changed")
    };
    var o = ["mtime", "type", "title", "description", "settings", "position", "bookmarks", "filters"];
    return r.prototype.transformForRemote = function (i, s) {
        var n = function (i) {
            var s = e.feedController.get(i);
            return t.assert(s && s.hasApiid(), "feeds must have apiid when transforming column for remote"), s.getApiid()
        }, r = {};
        return _.each(o, function (e) {
            r[e] = i[e]
        }), r.feeds = _.map(i.feedkeys, n), i.mtime && (r.mtime = i.mtime), s.apiid && (r.id = s.apiid), r
    }, r.prototype.transformToLocal = function (i) {
        TD.config.debug_checks && _.each(i.feeds, function (s) {
            t.assert(e.feedController.getByApiid(s), "feed not found by apiid in " + t.pformat(i.feeds))
        });
        var s = {};
        return _.each(o, function (e) {
            s[e] = i[e]
        }), s.feedkeys = _.map(i.feeds, function (t) {
            return e.feedController.getByApiid(t).getKey()
        }), s.apiid = i.id, s
    }, r.newFromBackendState = function (e) {
        var t = new r;
        return t.newRemoteState(e), t
    }, r
}(TD.storage, TD.sync.util, TD.sync.tdapi, TD.util, TD.storage.notification), TD.storage.Account = function (e, t, i) {
    var s = function (i) {
        i ? (this.state = _.clone(i), this.privateState = {}) : (this.state = {}, this.privateState = {});
        var s = this,
            n = function () {
                s.controller.pushAccount(s)
            }, r = e.store.getTweetdeckAccount;
        this.triggerPush = t.makeThingScheduler(n, null, "account", r, .2)
    };
    s.prototype = new e.StoredObj(e.accountController), s.prototype.eventname = "/storage/account", s.generateKeyFor = function (e, t) {
        return "tweetdeck" === e ? "tweetdeck" : encodeURI(e + ":" + t)
    }, s.prototype.computeKey = function () {
        if (!this.getType() || !this.getUserID()) throw {
            name: "NotReadyError",
            message: "cannot computeKey on account; insufficient data"
        };
        this.setKey(s.generateKeyFor(this.getType(), this.getUserID()))
    }, s.prototype.set = function (e, t) {
        return this.state[e] = t, i.notify(this.eventname + "/change", this), this.triggerPush()
    }, s.prototype.checkInvariants = function () {
        t.assert(_.isEmpty(this.deltaQ), "Accounts must not have Δs"), t.assert(null === this.stateCache, "Accounts do not use stateCache")
    }, s.prototype.getUsername = function () {
        return this.get("username")
    }, s.prototype.setUsername = function (e) {
        return this.set("username", e)
    }, s.prototype.getName = function () {
        return this.get("name")
    }, s.prototype.setName = function (e) {
        return this.set("name", e)
    }, s.prototype.getUserID = function () {
        return this.get("userId")
    }, s.prototype.setUserID = function (e) {
        return this.set("userId", e)
    }, s.prototype.getType = function () {
        return this.get("type")
    }, s.prototype.setType = function (e) {
        return this.set("type", e)
    }, s.prototype.getOAuthToken = function () {
        return this.get("oauth_token")
    }, s.prototype.setOAuthToken = function (e) {
        return this.set("oauth_token", e)
    }, s.prototype.getTokenSecret = function () {
        return this.get("token_secret")
    }, s.prototype.setTokenSecret = function (e) {
        return this.set("token_secret", e)
    }, s.prototype.getProfileImageURL = function () {
        var e = this.get("profileImageURL");
        return e && TD.util.isRetina() && (e = e.replace(TD.services.TwitterUser.NORMAL_SUFFIX_REGEXP, TD.services.TwitterUser.BIGGER_SUFFIX)), e
    }, s.prototype.setProfileImageURL = function (e) {
        return this.set("profileImageURL", e)
    }, s.prototype.getIsPrivate = function () {
        return this.getPrivate("isPrivate")
    }, s.prototype.setIsPrivate = function (e) {
        return this.setPrivate("isPrivate", e)
    }, s.prototype.getUpdated = function () {
        return this.getPrivate("updated")
    }, s.prototype.setUpdated = function (e) {
        return this.setPrivate("updated", e)
    }, s.prototype.getStateForBackend = function () {
        var e = {
            secret: this.getTokenSecret(),
            screen_name: this.getUsername(),
            name: this.getName(),
            avatar: this.getProfileImageURL(),
            key: this.getOAuthToken()
        };
        return e
    };
    var n = {
        key: "oauth_token",
        token: "oauth_token",
        secret: "token_secret",
        screen_name: "username",
        service: "type",
        uid: "userId",
        avatar: "profileImageURL",
        name: "name"
    };
    return s.prototype.newRemoteState = function (e) {
        var i = this;
        t.stateLog(this, ".updateFromBackend(", e, ")"), _.each(n, function (t, s) {
            e[s] && i.set(t, e[s])
        })
    }, s.newFromBackendState = function (e) {
        var t = new s;
        return t.newRemoteState(e), t.computeKey(), t
    }, s.prototype.isSameUser = function (e) {
        return this.getUsername().toLowerCase() === e.toLowerCase()
    }, s
}(TD.storage, TD.sync.util, TD.storage.notification, TD.util, TD.core.base64), TD.storage.Client = function (e, t, i, s, n, r) {
    var o = 10,
        a = function (e) {
            t.trace("Client constructor:"), t.stateLog("Client constructor: ", e);
            var i = e && e.column_order;
            i && !_.isEqual(i, _.union(i)) && (t.warn("WARNING! removing duplicates in column_order", _.clone(i)), e.column_order = _.union(i)), t.assert(!e || !e.columns, '"columns" should not be in local client state'), this._init(e), this.managed = !0, TD.config.debug_checks && this.checkInvariants()
        };
    a.prototype = new e.StoredObj(e.clientController), a.prototype.eventname = "/storage/client", a.prototype.recent_searches_limit = o, a.prototype.getName = function () {
        return this.get("name")
    }, a.prototype.getApiid = function () {
        return this.get("name")
    }, a.prototype.hasApiid = function () {
        return !0
    }, a.prototype.getColumnOrder = function () {
        return _.clone(this.get("column_order") || [])
    }, a.prototype.setColumnOrder = function (e) {
        if (_.each(e, function (e) {
            t.precondition("string" == typeof e, "must provide string column keys")
        }), this.get("column_order"), !_.isEqual(e, _.union(e))) throw t.warn("ERROR: column_order contains duplicates:", e), Error("column_order must not contain duplicates");
        return n.notify("/storage/client/column_order_changed"), this.setListPermutation("column_order", e)
    }, a.prototype.removeColumn = function (e) {
        return n.notify("/storage/client/column_order_changed"), this.listRemove("column_order", e)
    }, a.prototype.appendColumn = function (e) {
        return n.notify("/storage/client/column_order_changed"), this.listAppend("column_order", e)
    }, a.prototype.getAccountBlacklist = function () {
        return _.clone(this.get("account_blacklist") || [])
    }, a.prototype.addToAccountBlacklist = function (t) {
        var i = this.get("account_blacklist") || [];
        if (_.include(i, t)) return r.succeed(null);
        var s = this.listAppend("account_blacklist", t);
        return n.notify("/storage/client/account_blacklist_changed", i, this.get("account_blacklist"), this), e.accountController.remove(t), s
    }, a.prototype.delFromAccountWhitelist = function (e) {
        var t = this.get("account_whitelist") || [];
        if (!_.include(t, e)) return r.succeed(null);
        var i = this.listRemove("account_whitelist", e),
            s = this.get("account_whitelist");
        return n.notify("/storage/client/account_whitelist_changed", t, s, this), $(document).trigger("dataAccountWhitelist", {
            accountKeys: s
        }), i
    }, a.prototype.addToAccountWhitelist = function (e) {
        var t = this.get("account_whitelist") || [];
        if (_.include(t, e)) return r.succeed(null);
        var i = this.listAppend("account_whitelist", e),
            s = this.get("account_whitelist");
        return n.notify("/storage/client/account_whitelist_changed", t, s, this), $(document).trigger("dataAccountWhitelist", {
            accountKeys: s
        }), i
    }, a.prototype.delFromAccountBlacklist = function (e) {
        var t = this.get("account_blacklist") || [];
        if (!_.include(t, e)) return r.succeed(null);
        var i = this.listRemove("account_blacklist", e);
        return n.notify("/storage/client/account_blacklist_changed", t, this.get("account_blacklist"), this), i
    }, a.prototype.getAccountWhitelist = function () {
        return _.clone(this.get("account_whitelist"))
    }, a.prototype.getDefaultAccount = function () {
        return this.get("default_account")
    }, a.prototype.addRecentSearch = function (e) {
        return r.gatherResults([this.listRemove("recent_searches", e), this.listPrepend("recent_searches", e), this.listTruncate("recent_searches", this.recent_searches_limit)])
    }, a.prototype.getRecentSearches = function () {
        return this.get("recent_searches") || []
    }, a.prototype.clearRecentSearches = function () {
        this.set("recent_searches", [])
    }, a.prototype.postProcessNewRemoteState = function () {
        var e = this.getColumnOrder(),
            i = _.union(e);
        _.isEqual(i, e) || (t.warn("WARNING! found duplicates in column order, collapsing", e), this.state.column_order = i)
    }, a.prototype.setDefaultAccount = function (e) {
        return t.assert(!_.isUndefined(e), "huh? you wanted to do what now?"), $(document).trigger("dataDefaultAccount", {
            accountKey: e
        }), this.setValueIffDifferent("default_account", e, "/storage/client/default_account_changed")
    };
    var c = ["account_blacklist", "account_whitelist", "default_account", "settings", "recent_searches"];
    return a.prototype.transformForRemote = function (i) {
        t.stateLog("Client.transformToLocal L", i);
        var s = {};
        _.each(c, function (e) {
            i[e] && (s[e] = i[e])
        });
        var n = {
            settings: s,
            name: i.name
        };
        return n.columns = _.map(i.column_order || [], function (i) {
            var s = e.columnController.get(i);
            return t.assert(s.hasApiid(), "Column " + i + " does not have apiid", s), s.getApiid()
        }), i.mtime && (n.mtime = i.mtime), t.stateLog("Client.transformToLocal R", n), n
    }, a.prototype.transformToLocal = function (i) {
        t.stateLog("Client.transformToLocal R", i);
        var s = {}, n = !1;
        s.column_order = _.filter(_.map(i.columns, function (s) {
            if (!s) return t.warn("WARNING: bogus data in rstate.columns!", t.pformat(i.columns)), null;
            var r = e.columnController.getByApiid(s);
            return r || (t.stateLog("allocating new empty local sColumn for", s), r = new e.Column, r.setApiid(s), e.columnController.manage(r), n = !0), r.getKey()
        }), Boolean), n && TD.sync.controller.ueberpull();
        var r = i.settings || {};
        return _.each(c, function (e) {
            r[e] && (s[e] = r[e])
        }), s.mtime = i.mtime, s.name = i.name, t.stateLog("Client.transformToLocal L", s), s
    }, a.prototype.setApiid = function () {
        t.assert(!1, "no-one should ever set apiid on Client")
    }, a.newFromBackendState = function (e) {
        var t = new a;
        return t.newRemoteState(e), t
    }, a
}(TD.storage, TD.sync.util, TD.sync.tdapi, TD.util, TD.storage.notification, TD.core.defer, TD.sync.trace), TD.settings = function (e, t) {
    function i(e, i) {
        var r = {};
        return t.notify(a + e, i), _.isEqual(i, s(e)) ? TD.core.defer.succeed() : (-1 === x.indexOf(e) && (_.isString(i) || _.isBoolean(i) || _.isNumber(i)) && TD.controller.stats.setting(e, i), r[e] = i, $(document).trigger("dataSettingsValues", r), n.dictSet("settings", e, i))
    }

    function s(e) {
        var t = n.get("settings"),
            i = void 0;
        return t && (i = t[e]), _.isUndefined(i) && (i = o[e]), (_.isArray(i) || _.isObject(i)) && (i = TD.sync.util.clone(i)), i
    }
    var n, r = {}, o = {}, a = "/storage/client/settings/",
        c = "use_stream",
        l = "use_notification_sound",
        u = "language",
        d = "check_for_updates",
        h = "use_narrow_columns",
        p = "column_width",
        m = "font_size",
        f = "theme",
        g = "scheduled_col_autoadded",
        T = "link_shortener",
        v = "use_jmp",
        y = "global_filter",
        D = "previous_splash_version",
        b = "show_startup_notifications",
        w = "name_cache",
        C = "seen_message_ids",
        S = "navbar_width",
        E = "compose_stay_open",
        k = "display_sensitive_media",
        x = [D];
    return r.linkShorteners = [{
        id: "twitter",
        title: "Twitter"
    }, {
        id: "bitly",
        title: "Bit.ly"
    }], r.init = function () {
        n = e.clientController.client
    }, o[c] = !0, r.getUseStream = function () {
        return Boolean(s(c))
    }, r.setUseStream = function (e) {
        return i(c, Boolean(e))
    }, o[l] = !0, r.getUseNotificationSound = function () {
        return Boolean(s(l))
    }, r.setUseNotificationSound = function (e) {
        return i(l, Boolean(e))
    }, r.getLanguage = function () {
        return s(u) + ""
    }, r.setLanguage = function (e) {
        return i(u, e + "")
    }, o[d] = !0, r.getCheckForUpdates = function () {
        return Boolean(s(d))
    }, r.setCheckForUpdates = function (e) {
        return i(d, Boolean(e))
    }, o[h] = !1, o[p] = "medium", r.getColumnWidth = function () {
        var e = s(h);
        return _.isBoolean(e) && (i(h, null), e) ? (r.setColumnWidth("narrow"), "narrow") : s(p)
    }, r.setColumnWidth = function (e) {
        return i(p, e)
    }, o[m] = "medium", r.getFontSize = function () {
        return s(m)
    }, r.setFontSize = function (e) {
        return i(m, e)
    }, o[f] = "light", r.getTheme = function () {
        return s(f)
    }, r.setTheme = function (e) {
        return i(f, e + "")
    }, o[T] = "twitter", r.getLinkShortener = function () {
        return s(T) + ""
    }, r.setLinkShortener = function (e) {
        return i(T, e + "")
    }, o[v] = !1, r.getUseJmp = function () {
        return Boolean(s(v))
    }, r.setUseJmp = function (e) {
        return i(v, Boolean(e))
    }, r.getGlobalFilter = function () {
        return s(y)
    }, r.setGlobalFilter = function (e) {
        return i(y, e)
    }, o[b] = !0, r.getShowStartupNotifications = function () {
        return Boolean(s(b))
    }, r.setShowStartupNotifications = function (e) {
        return i(b, Boolean(e))
    }, o[k] = !1, r.getDisplaySensitiveMedia = function () {
        return Boolean(s(k))
    }, r.setDisplaySensitiveMedia = function (e) {
        return i(k, Boolean(e))
    }, o[g] = !1, r.getScheduledColAdded = function () {
        return Boolean(s(g))
    }, r.setScheduledColAdded = function (e) {
        return i(g, Boolean(e))
    }, o[D] = "0", r.getPreviousSplashVersion = function () {
        return s(D)
    }, r.setPreviousSplashVersion = function (e) {
        return i(D, e + "")
    }, o[w] = {
        users: {},
        lists: {}
    }, r.getNameCache = function () {
        return s(w)
    }, r.setNameCache = function (e) {
        return i(w, e)
    }, o[C] = [], r.getIdsForSeenMessages = function () {
        return s(C)
    }, r.setIdsForSeenMessages = function (e) {
        return i(C, e)
    }, o[S] = "condensed", r.getNavbarWidth = function () {
        return s(S)
    }, r.setNavbarWidth = function (e) {
        return i(S, e)
    }, o[E] = !1, r.getComposeStayOpen = function () {
        return Boolean(s(E))
    }, r.setComposeStayOpen = function (e) {
        return i(E, Boolean(e))
    }, r
}(TD.storage, TD.storage.notification), TD.storage.upgrade = function (e) {
    var t = {};
    return t.CURRENT_VERSION = 4, t.getVersion = function (e) {
        var i = e.getItem("__version__");
        return null === i ? t.guessVersion(e) : Number(i)
    }, t.guessVersion = function (e) {
        var t = e.getItem("settings"),
            i = e.getItem("clients"),
            s = e.getItem("columns");
        if (i && !t && (i = JSON.parse(i), !_.isEmpty(i))) {
            var n = _.values(i)[0];
            if ("ΔQ" in n) return 2
        }
        return !i && t && s ? 0 : null
    }, t.doUpgrade = function (e) {
        fromVersion = t.getVersion(e), (!fromVersion || 4 > fromVersion) && t._upgradeAllToV4(e)
    }, t._upgradeAllToV4 = function (t) {
        console.log("Upgrading store to v4"), TD.storage.storeUtils.flushDataFromStore(t, TD.sync.controller.PERSISTENT_STORAGE_ITEMS), e.store.recordVersion(4, t)
    }, t
}(TD.storage, TD.config, TD.sync.util, TD.core.defer), TD.sync.controller = function (e, t, i) {
    var s = {};
    return s.PERSISTENT_STORAGE_ITEMS = ["tweetdeck_account", "_session", "__hasAlreadyReloaded", "hoard"], s.debugFlushAndReload = function () {
        TD.storage.storeUtils.clearWebstorage(), TD.util.isWrapperApp() && deck.tearDown(), window.location.reload()
    }, s.flushSyncDataAndReload = function () {
        TD.storage.storeUtils.setReloadedFlag(), TD.storage.storeUtils.clearWebstorage(s.PERSISTENT_STORAGE_ITEMS), TD.util.isWrapperApp() && deck.tearDown(), window.location.reload()
    }, s.debugInstallOldChromeData = function () {
        TD.storage.storeUtils.clearWebstorage();
        var e = /^[a-zA-Z0-9\+\/=]*$/,
            t = TD.debug.spoof_data;
        t.match(e) && (t = TD.core.base64.decode(t));
        var i = JSON.parse(t);
        _.each(i, function (e, t) {
            localStorage.setItem(t, e)
        })
    }, s.debugQueryRemote = function () {
        var t = s.fetchAllBackendData();
        return t.addCallback(e.pprint), t
    }, s.fetchAllBackendData = function () {
        var s = t.drequest("/accounts"),
            n = TD.storage.clientController,
            r = n.client && n.client.getName() || TD.config.sync_name,
            o = "/clients/" + r + "/all",
            a = t.drequest(o),
            c = !1;
        a.addErrback(function (i) {
            if (404 == i.number) {
                e.stateLog("Controller.fetchAllBackendData(): client didn't exist!");
                var s = n.createNewClient();
                return s.addCallback(function () {
                    return c = !0, t.drequest(o)
                }), s
            }
            return i
        });
        var l = new i.gatherResults([s, a]);
        return l.addCallback(function (e) {
            var t;
            return t = e[1], t.accounts = e[0], t.isNewClient = c, t
        }), l
    }, s.updateFromBackendData = function (e) {
        TD.storage.accountController.updateFromBackend(e.accounts, e.client), TD.storage.feedController.updateFromBackend(e.feeds), TD.storage.columnController.updateFromBackend(e.columns), TD.storage.clientController.updateFromBackend(e.client), TD.decider.updateFromBackend(e.decider), TD.controller.stats.setExperiments(e.ddg || {})
    }, s.ueberpull = function () {
        e.trace("überpull");
        var t = i.succeed();
        return t.addCallback(function () {
            return TD.storage.columnController.triggerPush(.05)
        }), t.addErrback(e.errmark, "d.Eb:triggerPush"), t.addCallback(function () {
            return s.fetchAllBackendData()
        }), t.addErrback(e.errmark, "d.Eb:fetchAllBackendData"), t.addCallback(function (e) {
            s.updateFromBackendData(e), $(document).trigger("dataMessages", {
                messages: e.messages
            })
        }), t.addErrback(e.errmark, "d.Eb:sync.controller.updateFromBackend"), t
    }, s.initFromTdLogin = function (t) {
        var n = i.succeed(t),
            r = !1;
        return n.addCallback(s.init), n.addErrback(function (t) {
            return e.warn("WARNING! sync.controller.init() failed", t), t
        }), n.addCallback(s.fetchAllBackendData), n.addErrback(function (t) {
            return e.warn("WARNING! sync.controller get all sunc data failed", t), t
        }), n.addCallback(function (e) {
            s.updateFromBackendData(e), r = e.isNewClient
        }), n.addErrback(function (t) {
            return e.warn("WARNING! sync.controller update all failed", t), t
        }), n.addCallback(function () {
            return {
                isNewClient: r
            }
        }), n
    }, s.debuggery = function () {
        jQuery.subscribe("/storage/object/change", function () {
            e.warn("ERROR; untyped StoredObj change notification", _.toArray(arguments)), e._break()
        })
    }, s.checkInvariants = function () {
        var e = [TD.storage.feedController, TD.storage.columnController, TD.storage.accountController, TD.storage.clientController];
        _.each(e, function (e) {
            var t = e.checkInvariants;
            t && t.call(e)
        })
    }, s.init = function (t) {
        e.trace("sync controller init"), s.store = t, s.debuggery(), TD.storage.feedController.init(t), TD.storage.columnController.init(t), TD.storage.accountController.init(t), TD.storage.clientController.init(t);
        var i = TD.config.sync_period;
        _.isUndefined(i) && (i = 600), s.loop = setInterval(s.ueberpull, 1e3 * i)
    }, s.reset = function () {
        s.loop && (clearInterval(s.loop), delete s.loop), TD.storage.columnController.reset(), TD.storage.feedController.reset(), TD.storage.accountController.reset(), TD.storage.clientController.reset()
    }, s
}(TD.sync.util, TD.sync.tdapi, TD.core.defer), TD.sync.ui = function (e, t) {
    var i = {};
    return i.dispatch_ui_event = function (i) {
        var s = {
            flushreload: e.debugFlushAndReload,
            dumptrace: TD.sync.trace.logDump,
            cleartrace: TD.sync.trace.clear,
            queryremote: e.debugQueryRemote,
            ueberpull: e.ueberpull,
            junk: function () {
                console.log("junk fondled")
            }
        }[i];
        if (s) {
            var n;
            try {
                n = t.maybeDeferred(s)
            } catch (r) {
                return console.log(r), void 0
            }
            n.addCallback(function (e, t) {
                util.stateLog('result for event "' + t + '": ', e)
            }, i), n.addErrback(function (e, t) {
                util.warn("ERROR for event", t, ": ", e), console.log(e.stack)
            }, i)
        } else alert('no handler for event "' + i + '"')
    }, i
}(TD.sync.controller, TD.core.defer), TD.ui.template = function () {
    function e(e) {
        var t;
        try {
            t = $.ajax(e, {
                async: !1,
                isLocal: "web" !== TD.util.getAppEnv()
            })
        } catch (i) {
            return null
        }
        return 200 !== t.status ? "" : _.trim(t.responseText)
    }

    function t(e) {
        e = e.replace(d, "/");
        var t = h[e];
        return void 0 === t && (t = u.getHogan(e), t = a.compile(t, p), h[e] = t), t
    }

    function i(e, i) {
        var s = this.partials[e];
        return i = i || {}, i[s.name] || (i[s.name] = t(s.name)), Hogan.Template.prototype.ep.call(this, e, i)
    }

    function s(e, t, i) {
        for (var s = Hogan.parse.call(this, e, t, i), r = "", o = 0; s.length > o; o++)
            if ("_v" === s[o].tag && 0 === s[o].n.indexOf("%TRANSLATION-HINT")) {
                var a = s.splice(o, 1)[0];
                o--, r = a.n.substring(a.n.indexOf("mode=") + "mode=".length)
            }
        return n(s, r, t, i)
    }

    function n(e, t, i, s) {
        for (var a = [], c = 0; e.length > c; c++)
            if ("#" === e[c].tag && "_i" === e[c].n) {
                var l = o(i.substring(e[c].i, e[c].end), t);
                "raw" === l.tag ? a.push(l) : Array.prototype.push.apply(a, Hogan.parse(Hogan.scan(l, s.delimiters), i, s))
            } else "#" === e[c].tag || "^" === e[c].tag || "<" === e[c].tag || "$" === e[c].tag ? (e[c].nodes = n(e[c].nodes, t, i, s), a.push(e[c])) : a.push(e[c]);
        return r(a)
    }

    function r(e) {
        if (0 === e.length) return e;
        for (var t = [e[0]], i = 1; e.length > i; i++) "_t" !== t[t.length - 1].tag || "\n" !== e[i].tag && "_t" !== e[i].tag ? t.push(e[i]) : t[t.length - 1].text += e[i].text || "\n";
        return t
    }

    function o(e, t) {
        var i;
        return i = "" !== t ? {
            text: e,
            mode: t
        } : e, TD.i(i, null, !0)
    }
    var a, c, l, u = {}, d = /\\/g,
        h = {}, p = {
            sectionTags: [{
                o: "_i",
                c: "i"
            }]
        };
    return l = function (e, t, s, n) {
        this.ep = i, Hogan.Template.call(this, e, t, s, n)
    }, l.prototype = Hogan.Template.prototype, c = function () {}, c.prototype = Hogan, a = new c, a.template = l, a.parse = s, u.getHogan = function (t) {
        var i = TD.mustaches[t + ".mustache"];
        return void 0 === i && (i = e("../mustaches/" + t + ".mustache"), "" === i && (i = t), TD.mustaches[t + ".mustache"] = i), i
    }, u.render = function (e, i, s) {
        var n, r = t(e),
            o = [];
        for (var a in TD.globalRenderOptions) i && void 0 === i[a] && (i[a] = TD.globalRenderOptions[a], o.push(a));
        return n = r.render(i, s), o.forEach(function (e) {
            delete i[e]
        }), n.trim()
    }, u.toHtml = function (e, t, i) {
        var s = a.compile(e, p);
        return s.render(t, i).trim()
    }, u
}(), TD.ui.startflow = function (e, t, i, s) {
    function n(e) {
        var t = $(e.currentTarget),
            i = t.data("action"),
            s = !0;
        switch (i) {
        case "signin":
            o();
            break;
        case "showRegister":
            y(L);
            break;
        case "login":
            y(R);
            break;
        case "forgotPassword":
            r();
            break;
        case "resetReload":
            TD.sync.controller.debugFlushAndReload();
            break;
        case "spoofData":
            TD.sync.controller.debugInstallOldChromeData();
            break;
        default:
            s = !1
        }
        s && e.preventDefault()
    }

    function r() {
        if (!k) {
            var e = $("#tdRegEmail", O).val();
            if (!e || !e.match(I)) return T(TD.i("That doesn't seem to be a valid email address. Remember: TweetDeck accounts are different from Twitter accounts."), [b]), void 0;
            var t = new TD.services.TweetDeckClient;
            k = !0, T(TD.i("Sending password reset instructions…"), [], !0);
            var i = t.forgotPassword(e);
            i.addCallback(function () {
                T(TD.i("We have sent an email to {{email}} with instructions to reset your password.", {
                    email: e
                }), [], !0), k = !1
            }), i.addErrback(function (t) {
                var i;
                i = t && 403 === t.number ? TD.i("We couldn't find a TweetDeck account associated with {{email}}.", {
                    email: e
                }) : TD.i("Sorry, something went wrong. It's not you, it's us. Please try again later."), T(i, [b]), k = !1
            }), u() && d(!1), $("#tdRegPassword", O).val("")
        }
    }

    function o() {
        var e = $("#tdRegEmail", O).val(),
            t = $("#tdRegPassword", O).val(),
            i = $("#tdRegRememberMe", O)[0].checked,
            s = A + TD.core.sha1(e.toLowerCase()),
            n = !0;
        if (Modernizr.localstorage && null != localStorage.getItem(s)) {
            var r = localStorage.getItem(s),
                o = (new Date).getTime();
            if (0 >= r - o) localStorage.removeItem(s);
            else {
                var c = TD.i("You have been temporarily locked out of your account. Please try again later."),
                    l = [];
                T(c, l), n = !1, d(!0)
            }
        }
        n && a(e, t, i)
    }

    function a(e, t, s) {
        if (e && "" !== t) {
            y(N);
            var n = i.accountController.loginTweetdeck(e, t);
            n.addCallbacks(c, l, [s])
        } else y(R), T(TD.i("Please check your email & password."), [w, b])
    }

    function c(e, t) {
        e.stay_signed_in = t, P.callback(e)
    }

    function l(e) {
        y(R);
        var t, i, n, r = [];
        if (401 === e.req.status) i = JSON.parse(e.req.responseText).error, i == TD.constants.TDApi.ERROR_ACCOUNT_DOESNT_EXIST ? (n = $("#tdRegEmail", O).val(), t = TD.i("We couldn't find a TweetDeck account associated with: {{{email}}}", {
            email: n
        }), r = [b]) : i == TD.constants.TDApi.ERROR_BAD_PASSWORD && (t = TD.i("Please check your password. Remember: TweetDeck accounts are different from Twitter accounts."), r = [w]);
        else if (429 === e.req.status) i = JSON.parse(e.req.responseText).error, i == TD.constants.TDApi.ERROR_RATE_LIMIT_EXCEEDED && (d(!0), t = TD.i("You have been temporarily locked out of your account. Please try again later."), r = []);
        else if (0 === e.req.status) t = TD.i("Unable to connect. Please check your network.");
        else try {
            i = JSON.parse(e.req.responseText).error, t = TD.i("Unable to sign in: {{{1}}}", {
                1: i
            })
        } catch (o) {
            t = TD.i("Sorry, something went wrong. It's not you, it's us. Please try again later."), console.log("An unknown error occurred at sign in"), console.log(e.req.responseText)
        }
        s.warn(e.message, e), T(t, r)
    }

    function u() {
        return null !== B
    }

    function d(e) {
        $("#tdRegEmail", O).prop("disabled", e), $("#tdRegPassword", O).prop("disabled", e), $("#tdRegRememberMe", O).prop("disabled", e), C.prop("disabled", e), e ? h() : (p(), v())
    }

    function h() {
        var e = $("#tdRegEmail", O).val(),
            t = A + TD.core.sha1(e.toLowerCase()),
            i = 3e5;
        if (Modernizr.localstorage) {
            var s = (new Date).getTime();
            if (null != localStorage.getItem(t)) {
                var n = localStorage.getItem(t);
                i = n - s
            }
            localStorage.setItem(t, i + s)
        }
        B = setTimeout(function () {
            d(!1)
        }, i)
    }

    function p() {
        var e = $("#tdRegEmail", O).val(),
            t = A + TD.core.sha1(e.toLowerCase());
        Modernizr.localstorage && null !== localStorage.getItem(t) && localStorage.removeItem(t), B = null
    }

    function m() {
        var e = $("#tdRegEmail", O).val(),
            t = $("#tdRegPassword", O).val(),
            i = $("#tdRegPasswordConfirm", O).val(),
            s = $("#tdRegRememberMe", O)[0].checked;
        if (!e || !e.match(I)) return T(TD.i("That doesn't seem to be a valid email address. Remember: TweetDeck accounts are different from Twitter accounts."), [b]), void 0;
        if (t !== i) return T(TD.i("Passwords must match!"), [w]), void 0;
        if (7 > t.length) return T(TD.i("Your password must be 7 characters or longer."), [w]), void 0;
        var n = f(e, t, s);
        n.addErrback(g), y(N)
    }

    function f(e, t, n) {
        var r = i.accountController.loginTweetdeck(e, t);
        return r.addCallback(c, n), r.addErrback(function () {
            s.trace("register//login failed//going to try to create account");
            var r = i.accountController.createTweetdeckAccount(e, t);
            return r.addCallback(function (e) {
                return e.created_account = !0, e
            }), r.addCallback(c, n), r
        }), r
    }

    function g(e) {
        var t;
        y(L), t = e && e.number && 401 === e.number ? TD.ui.template.render("text/already_registered") : TD.i("Registration unsuccessful. Please check your email & password"), e && s.warn(e.message, e), T(t, [w, b])
    }

    function T(e, t, i) {
        i ? D.removeClass(U).addClass(j) : D.removeClass(j).addClass(U), e && (D.html(e), D.show()), t && _.each(t, function (e) {
            e.addClass("s-error")
        })
    }

    function v() {
        w.removeClass("s-error"), b.removeClass("s-error"), D.hide()
    }

    function y(e) {
        switch (F = e, v(), e) {
        case R:
            E.fadeOut("fast"), $("#tdRegPasswordConfirm").prop("disabled", !0), C.prop("disabled", !1), O.addClass("s-login").removeClass("s-register is-loading");
            break;
        case L:
            u() && ($("#tdRegEmail", O).val(""), $("#tdRegPassword", O).val(""), $("#tdRegPasswordConfirm", O).val(""), $("#tdRegEmail", O).focus(), d(!1)), E.fadeOut("fast"), $("#tdRegPasswordConfirm").prop("disabled", !1), S.prop("disabled", !1), O.addClass("s-register").removeClass("s-login is-loading");
            break;
        case N:
            E.fadeIn("fast"), C.prop("disabled", !0), S.prop("disabled", !0)
        }
    }
    var D, b, w, C, S, E, k, x = {}, A = "TD.login.lockedAccounts.",
        I = /^[a-zA-Z0-9_\-\.+]+@[a-zA-Z0-9_\-\.]+\.[a-zA-Z]{2,4}$/,
        M = -1,
        R = 0,
        L = 1,
        N = 2,
        F = M,
        O = null,
        U = "srt-error-msg",
        j = "srt-success-msg",
        P = null,
        B = null;
    x.doLogin = function (t, i, s) {
        P = new e.Deferred;
        try {
            H(t, i), y(R), s && T(s)
        } catch (n) {
            var r = "Unable to initialise login UI. Please contact your friendly dev team for assistance.";
            $("body").html(r), console.log("login UI init error:", [n]), TD.util.isChromeApp() && console.log("stack trace:", [n.stack.split("\n")])
        }
        return P
    };
    var H = function (e, i) {
        var s = {
            email: e || "",
            spoofData: Boolean(TD.debug.spoof_data),
            debugMenu: Boolean(TD.config.debug_menu),
            version: TD.version,
            buildIDShort: TD.buildIDShort,
            appEnv: TD.util.getAppEnv()
        };
        TD.util.isWrapperApp() && deck.getWrapperVersion && (s.wrapperVersion = deck.getWrapperVersion());
        var r = t.render("startup/signin", s);
        $(".js-signin-ui").html(r), TD.util.isWrapperApp() && deck.closeLoadingScreen && deck.closeLoadingScreen(), O = $(".js-signin-form"), D = $(".js-start-message", O), b = $(".js-email"), w = $(".js-password"), C = $(".js-signin"), S = $(".js-register"), E = $(".js-loader"), $("#tdRegRememberMe", O)[0].checked = Boolean(i), $("#tdAccountForm").submit(function (e) {
            return F === R ? o() : m(), e.preventDefault(), !1
        }), $("a", O).on("click", n), O.on("keypress", function (e) {
            u() || 13 != e.keyCode || $("tdAccountForm").submit()
        })
    };
    return x
}(TD.core.defer, TD.ui.template, TD.storage, TD.sync.util), TD.net.StreamRequest = function (e, t) {
    var i = function () {
        console.log((new Date).toUTCString(), ">", t.getUsername(), ">", arguments)
    };
    this.receivedChars = 0, this.readChars = 0;
    var s, n, r, o, a, c = 100,
        l = this,
        u = !1,
        d = function (e, t) {
            var i = new XMLHttpRequest;
            return "withCredentials" in i ? i.open(e, t, !0) : i = null, i
        }, h = function (e) {
            i("Signer HTTP status:", e.xhr.status), 200 === e.xhr.status && (r = e.data.headers.Authorization, p())
        }, p = function () {
            return (a = d("GET", e)) ? (a.setRequestHeader("Authorization", r), a.setRequestHeader("X-User-Agent", "TweetDeck Chrome " + TD.version), a.send(), m(), void 0) : (T("CORS not supported", 0), void 0)
        }, m = function () {
            f(), a.readyState !== XMLHttpRequest.DONE && setTimeout(m, c)
        }, f = function () {
            switch (a.readyState) {
            case XMLHttpRequest.LOADING:
                var e, t = a.responseText.lastIndexOf("\r");
                if (u || (i("Stream HTTP status:", a.status), u = !0), l.receivedChars = a.responseText.length, t >= l.readChars) {
                    e = a.responseText.substring(l.readChars, t + 1), l.readChars += e.length;
                    try {
                        g(e)
                    } catch (s) {
                        console.log("Callback error:", s)
                    }
                }
                break;
            case XMLHttpRequest.DONE:
                T("Stream interrupted", a.status)
            }
        }, g = function (e) {
            s && s(e)
        }, T = function (e, t) {
            n && n(e, t)
        };
    this.onStreaming = {
        connect: function (e) {
            s = e
        },
        disconnect: function (e) {
            s === e && (s = null)
        }
    }, this.onFailure = {
        connect: function (e) {
            n = e
        },
        disconnect: function (e) {
            n === e && (n = null)
        }
    }, this.goStreaming = function () {
        var i = TD.net.ajax.signRequest(t, e, "GET");
        i.addCallback(h), i.addErrback(function () {
            T("Failed to sign request", 0)
        })
    }, this.deleteLater = function () {
        i("Closing stream connection"), o && (o.onreadystatechange = null), a && (a.onreadystatechange = null, a.abort()), g = null, T = null
    }
}, TD.net.util = function () {
    var e = {}, t = encodeURIComponent,
        i = /[!'()]/g,
        s = /\*/g;
    return encodeURIComponent = function (e) {
        return t(e).replace(i, escape).replace(s, "%2A")
    }, e.addURLParam = function (t, i, s) {
        var n = {};
        return n[i] = s, e.addURLParameters(t, n)
    }, e.addURLParameters = function (t, i) {
        var s = e.buildQueryString(i),
            n = t;
        return s ? (n += -1 === t.indexOf("?") ? "?" : "&", n + s) : t
    }, e.buildQueryString = function (e) {
        var t, i = [];
        if (e)
            for (var s in e) t = s + "=" + encodeURIComponent(e[s]), i.push(t);
        return i.join("&")
    }, e.formDecode = function (e) {
        var t, i = e.split("&"),
            s = {};
        for (var n in i) t = i[n].split("="), 2 == t.length && (s[decodeURIComponent(t[0])] = decodeURIComponent(t[1]));
        return s
    }, e.decodeURL = function (t) {
        var i = t.split("?");
        return i.length > 1 ? e.formDecode(i[1]) : {}
    }, e.formEncode = function (e) {
        var t = [];
        for (var i in e) t.push(i + "=" + encodeURIComponent(e[i]));
        return t.join("&")
    }, e.getQueryStringParams = function () {
        var e = window.location.href.split("?");
        if (e.length >= 2) {
            var t = e.slice(1).join("?");
            return this.formDecode(t)
        }
        return {}
    }, e
}(), TD.controller.init = function (e, t, i, s, n, r, o, a, c) {
    var l = {}, u = !1,
        d = !1,
        h = 2592e3;
    l.purgedServices = [], l.preload = function () {
        TD.util.isTouchDevice() && window.navigator.standalone && ($("head meta[name=viewport]").remove(), $("head").prepend('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">')), TD.util.isTouchDevice() && $("html").addClass("touch-device")
    }, l.start = function (t, n) {
        var r, c = TD.core.defer.succeed(),
            p = TD.util.getAppEnv();
        if ("chrome" === p && chrome.extension.getViews({
            type: "tab"
        }).length > 1) return s.warn("Duplicate Chrome App tab. Aborting init."), void 0;
        if (TD.util.isWrapperApp() && (TD.util.isUnsupportedWebWrapperVersion() ? (deck.closeLoadingScreen && deck.closeLoadingScreen(), window.location.assign("https://web.tweetdeck.com/web/deprecated.html?appenv=" + p)) : TD.controller.scheduler.schedulePeriodicTask(h, function () {
            window.location.reload(!0)
        })), "http:" === window.location.protocol || "https:" === window.location.protocol) {
            var g = window.location.protocol + "//" + window.location.host;
            g !== TD.config.api_root && (console.log("NOTE: overwriting api_root of", TD.config.api_root, "with", g), TD.config.api_root = g)
        }
        return c.addCallback(function () {
            var e;
            return "windows" === TD.util.getOSName() && $("html").addClass("os-windows"), TD.util.isChrome() && $("html").addClass("is-chrome"), r = TD.controller.feather.loadFeathers(!1), l.certCheck(), TD.storage.storeUtils.init(), e = TD.storage.storeUtils.getSessionData(), l.doLogin(e, n)
        }), c.addCallback(function (e) {
            return r.addBoth(function () {
                return e
            }), r
        }), u = !1, c.addCallback(function (e) {
            return u = e.created_account, e
        }), c.addCallback(m), d = !1, c.addCallback(function (e) {
            return d = e.isNewClient, e
        }), c.addCallback(e.notification.flush), c.addCallback(f), c.addCallback(function () {
            return a.gatherResults([e.feedController.triggerPush(.05), e.columnController.triggerPush(.05)])
        }), c.addCallback(function () {
            e.store.checkVersion(e.upgrade.CURRENT_VERSION)
        }), c.addCallback(f), c.addCallback(function () {
            if (u) {
                var t = e.clientController.client,
                    s = i.upgrade.CURRENT_VERSION;
                return console.log("freshly created account; no upgrades, recording v", s), t.dictSet("settings", "version", s)
            }
            return i.upgrade.doUpgrades()
        }), c.addCallback(function () {
            return d ? e.accountController.verifyStoredAccounts() : TD.core.defer.succeed()
        }), c.addCallback(function () {
            TD.storage.storeUtils.removeReloadedFlag()
        }), c.addErrback(function (e) {
            throw TD.storage.storeUtils.hasAlreadyReloaded() || TD.sync.controller.flushSyncDataAndReload(), e
        }), c.addCallback(y), c.addErrback(function (t) {
            if (s.warn(t, "controller.init.start failed, restarting", t.message), t.stackTrace) try {
                console.log(t.stackTrace.join("\n"))
            } catch (i) {
                console.log("Unable to get stackTrace to report error:", i)
            }
            return e.store.reset(), o.controller.reset(), l.start(null, t.message)
        }), c
    }, l.certCheck = function () {
        var e = TD.config.cert_reminder || "https://smfd-akc-08-sr1.devel.twitter.com:8443" === TD.config.api_root;
        e && n.isChromeApp() && jQuery.ajax(TD.config.api_root + "/time").fail(function () {
            chrome.tabs.create({
                selected: !0,
                url: TD.config.api_root + "/time"
            })
        })
    }, l.doLogin = function (i, n) {
        s.trace("init.doLogin()");
        var r = i.email,
            o = i.passhash,
            l = i.sessionExists,
            u = i.staySignedIn,
            d = null;
        if (r) {
            if (n) return t.startflow.doLogin(r, u, n);
            if (r && o) {
                var h = function () {
                    return e.accountController.loginTweetdeck(r, null, o)
                };
                d = TD.sync.util.autoRetry(h, [5e3, 1e4], p), d.addCallback(function (e) {
                    return e.stay_signed_in = u, e
                })
            } else if (l) {
                var m = function () {
                    return c.drequest("/verify_user", null, null, !0)
                };
                d = TD.sync.util.autoRetry(m, [5e3, 1e4], p), d.addCallback(function () {
                    var e = {
                        tweetdeck_account: {
                            email: r
                        },
                        stay_signed_in: u
                    };
                    return e
                })
            } else d = a.fail(!1);
            return d.addErrback(function (e) {
                var i;
                return s.warn("TD login of existing account/session failed", e), p(e) ? i = TD.i("Unable to connect. Please check your network.") : 401 == e.req.status || (i = TD.i("Sorry, something went wrong. It's not you, it's us. Please try again later.")), t.startflow.doLogin(r, u, i)
            }), d
        }
        return t.startflow.doLogin(null, u, n)
    };
    var p = function (e) {
        return 0 == e.req.status || 12007 == e.req.status
    }, m = function (t) {
            s.trace("init.initFromLogin()"), e.store.init(t.stay_signed_in, t.tweetdeck_account.email), c.saveSession(), c.onAuthFail(l.abort);
            var i = t.tweetdeck_account;
            return null !== i.plaintext_password && (e.store.setTweetdeckAccountAndPassword ? e.store.setTweetdeckAccountAndPassword(i.email, i.plaintext_password) : e.store.setTweetdeckAccount(i.email)), o.controller.initFromTdLogin(e.store)
        }, f = function () {
            s.trace("init.purgeDeprecatedAccounts()"), T("buzz"), T("foursquare"), T("facebook"), g(), l.purgedServices.length > 0 && TD.controller.stats.purgedServices(l.purgedServices), v(function (e) {
                var t = "twitter" === e.getService() && "sentdirect" === e.getType();
                return t && TD.controller.stats.purgedFeed({
                    service: e.getService(),
                    type: e.getType(),
                    message: "Purged sentdirect feed (no longer supported)"
                }), t
            }), v(function (t) {
                var i = _.isUndefined(e.accountController.get(t.getAccountKey()));
                return i && TD.controller.stats.purgedFeed({
                    service: t.getService(),
                    type: t.getType(),
                    accountKey: t.getAccountKey(),
                    message: "Purged feed due to bad account key"
                }), i
            })
        }, g = function () {
            e.columnController.getAll().forEach(function (e) {
                if (1 === e.getFeedKeys().length) switch (e.getType()) {
                case TD.util.columnUtils.storageColumnTypes.HOME:
                case TD.util.columnUtils.storageColumnTypes.INBOX:
                case TD.util.columnUtils.storageColumnTypes.ME:
                    e.setType(TD.util.columnUtils.storageColumnTypes.OTHER);
                    break;
                default:
                    return
                }
            })
        }, T = function (t) {
            var i = e.accountController.getAccountsForService(t);
            _.isEmpty(i) || (l.purgedServices.push(t), _.each(i, function (t) {
                e.accountController.blacklistAccount(t)
            })), v(function (e) {
                return e.getService() === t
            })
        }, v = function (t) {
            var i, s, n, r;
            if (i = _.filter(e.feedController.getAll(), t), s = _.map(i, function (t) {
                var i = t.getKey();
                return e.feedController.remove(i), i
            }), n = _.filter(e.columnController.getAll(), function (e) {
                var t = _.difference(e.getFeedKeys(), s);
                return e.setFeedKeys(t), _.isEmpty(t)
            }), r = _.map(n, function (e) {
                return e.getKey()
            }), !_.isEmpty(r)) {
                var o = e.clientController.client;
                o.setColumnOrder(_.difference(o.getColumnOrder(), r)), _.each(r, function (t) {
                    e.columnController.remove(t)
                })
            }
        }, y = function () {
            TD.util.fnPerformanceWrapper(D, null, i.stats.performance.keys.INIT)()
        }, D = function () {
            s.trace("init.initControllerAndUI()"), 
            TD.settings.init(), 
            $(document).trigger("uiNeedsSettings"), 
            i.clients.init(), 
            i.feedManager.init(), 
            i.stats.init(), 
            TD.cache.names.init(), 
            "web" === TD.util.getAppEnv() && delete TD.services.TwitterMedia.SERVICES.instagram, 
            TD.util.fnPerformanceWrapper(t.main.init, t.main, i.stats.performance.keys.MAIN)(), 
            TD.util.fnPerformanceWrapper(i.columnManager.init, i.columnManager, i.stats.performance.keys.COLUMN_MANAGER)(), 
            TD.util.fnPerformanceWrapper(i.scheduler.init, i.scheduler, i.stats.performance.keys.COLUMN_SCHEDULER)(), 
            TD.util.fnPerformanceWrapper(i.notifications.init, i.notifications, i.stats.performance.keys.NOTIFICATIONS)(), 
            TD.util.fnPerformanceWrapper(i.filterManager.init, i.filterManager.init, i.stats.performance.keys.FILTER_MANAGER)(), 
            e.accountController.isEmpty() ? (new TD.components.GlobalSettings, TD.components.NewFeaturesSplash.updateSeenVersion()) : TD.components.NewFeaturesSplash.shouldShow() && new TD.components.NewFeaturesSplash, TD.ready = !0, s.trace("init: TD.ready"), $(document).trigger("TD.ready"), d || setTimeout(function () {
                e.accountController.verifyStoredAccounts()
            }, 2e4), -1 !== TD.controller.init.purgedServices.indexOf("facebook") && $(document).trigger("dataFacebookAccountRemoved", {})
        };
    return l.signOut = function () {
        if (n.isWrapperApp() && "osx" === deck.osname()) {
            var t = e.store.getTweetdeckAccount();
            t && e.store.deleteSecrets([t]);
            var i = _.map(TD.storage.accountController.getAll(), function (e) {
                return e.getKey()
            });
            e.store.deleteSecrets(i)
        }
        TD.storage.storeUtils.clearWebstorage();
        var s = c.logout();
        return TD.util.isWrapperApp() && s.addBoth(function () {
            deck.tearDown()
        }), s.addBoth(function () {
            window.location.reload()
        }), s
    }, l.abort = function () {
        window.location.reload()
    }, l
}(TD.storage, TD.ui, TD.controller, TD.sync.util, TD.util, TD.net.util, TD.sync, TD.core.defer, TD.sync.tdapi), TD.controller.upgrade = function (e, t, i, s) {
    var n = {};
    return n.CURRENT_VERSION = 2, n.doUpgrades = function () {
        var t = null,
            r = e.clientController.client.get("settings");
        t = _.isUndefined(r) || _.isUndefined(r.version) ? 0 : Number(r.version);
        for (var o = function (t, i) {
            return e.clientController.client.dictSet("settings", "version", i)
        }, a = s.succeed(), c = 1; n.CURRENT_VERSION >= c; c++)
            if (c > t) {
                var l = "version_" + ("" + c);
                n.hasOwnProperty(l) && (console.log("performing upgrade to v", c, l), a.addCallback(n[l]), a.addCallback(o, c))
            }
        return a.addErrback(function (e) {
            throw i.warn("WARNING: controller.upgrade failed!!!"), console.log(e), e
        }), a
    }, n.version_1 = function () {
        e.columnController.getAll().forEach(function (e) {
            var t, i = TD.storage.feedController.get(e.getFeedKeys()[0]).getType();
            i === TD.util.columnUtils.feedTypes.MENTIONS && (t = new TD.vo.SearchFilter(e.getFilters()), t.action.fromJSONObject({
                showMentions: !0,
                showRetweets: !1,
                showFavorites: !1,
                showFollowers: !1,
                showLists: !1
            }), e.setFilters(t.toJSONObject()))
        })
    }, n.version_2 = function () {
        var t = TD.storage.clientController.client.get("settings").show_inline_media;
        t === !1 && e.columnController.getAll().forEach(function (e) {
            e.setMediaPreviewSize(TD.vo.Column.MEDIA_PREVIEW_OFF)
        })
    }, n
}(TD.storage, TD.config, TD.sync.util, TD.core.defer), TD.controller.columnManager = function (e, t) {
    var i = {}, s = {}, n = [];
    i.TIMELINE = "timeline", i.MENTIONS = "mentions", i.FOLLOWERS = "followers", i.SEARCH = "search", i.LISTS = "lists", i.MESSAGES = "messages", i.TRENDS = "trends", i.TWEETS = "tweets", i.FAVORITES = "favorites", i.HOME = "home", i.ME = "me", i.INBOX = "privateMe", i.SCHEDULED = "scheduled", i.NETWORKACTIVITY = "networkactivity", i.INTERACTIONS = "interactions", i.columnTypeToIconClass = {}, TD.util.extendObjectWith(i.columnTypeToIconClass, [
        [i.TIMELINE, TD.util.columnUtils.columnIconClasses.HOME],
        [i.INTERACTIONS, TD.util.columnUtils.columnIconClasses.INTERACTIONS],
        [i.MENTIONS, TD.util.columnUtils.columnIconClasses.MENTIONS],
        [i.FOLLOWERS, TD.util.columnUtils.columnIconClasses.FOLLOWERS],
        [i.SEARCH, TD.util.columnUtils.columnIconClasses.SEARCH],
        [i.LISTS, TD.util.columnUtils.columnIconClasses.LIST],
        [i.MESSAGES, TD.util.columnUtils.columnIconClasses.MESSAGES],
        [i.TWEETS, TD.util.columnUtils.columnIconClasses.TWEETS],
        [i.FAVORITES, TD.util.columnUtils.columnIconClasses.FAVORITES],
        [i.NETWORKACTIVITY, TD.util.columnUtils.columnIconClasses.ACTIVITY],
        [i.HOME, TD.util.columnUtils.columnIconClasses.HOME],
        [i.ME, TD.util.columnUtils.columnIconClasses.MENTIONS],
        [i.INBOX, TD.util.columnUtils.columnIconClasses.MESSAGES],
        [i.SCHEDULED, TD.util.columnUtils.columnIconClasses.SCHEDULED],
        [i.TRENDS, TD.util.columnUtils.columnIconClasses.TRENDS]
    ]), i.SELF_ACCOUNTS_ONLY = {}, i.SELF_ACCOUNTS_ONLY[i.MESSAGES] = !0, i.SELF_ACCOUNTS_ONLY[i.NETWORKACTIVITY] = !0, i.SELF_ACCOUNTS_ONLY[i.INTERACTIONS] = !0, i.TWITTER_GENERIC = {}, i.TWITTER_GENERIC[i.TIMELINE] = !0, i.TWITTER_GENERIC[i.MENTIONS] = !0, i.TWITTER_GENERIC[i.FOLLOWERS] = !0, i.TWITTER_GENERIC[i.MESSAGES] = !0, i.TWITTER_GENERIC[i.TWEETS] = !0, i.TWITTER_GENERIC[i.FAVORITES] = !0, i.TWITTER_GENERIC[i.NETWORKACTIVITY] = !0, i.TWITTER_GENERIC[i.INTERACTIONS] = !0, i.SELF_FEED_TYPE = {}, i.SELF_FEED_TYPE[i.TIMELINE] = "home", i.SELF_FEED_TYPE[i.MESSAGES] = "direct", i.SELF_FEED_TYPE[i.TWEETS] = "usertweets", i.SELF_FEED_TYPE[i.FOLLOWERS] = "interactions", i.NON_SELF_FEED_TYPE = {}, i.NON_SELF_FEED_TYPE[i.TIMELINE] = "usertimeline", i.NON_SELF_FEED_TYPE[i.TWEETS] = "usertweets", i.NON_SELF_FEED_TYPE[i.MENTIONS] = "search", i.MENU_TITLE = {}, i.MENU_TITLE[i.TIMELINE] = TD.i("Timeline"), i.MENU_TITLE[i.MENTIONS] = TD.i("Mentions"), i.MENU_TITLE[i.FOLLOWERS] = TD.i("Followers"), i.MENU_TITLE[i.SEARCH] = TD.i("Search"), i.MENU_TITLE[i.LISTS] = TD.i("Lists"), i.MENU_TITLE[i.MESSAGES] = TD.i("Messages"), i.MENU_TITLE[i.TRENDS] = TD.i("Trends"), i.MENU_TITLE[i.TWEETS] = TD.i("Tweets"), i.MENU_TITLE[i.FAVORITES] = TD.i("Favorites"), i.MENU_TITLE[i.HOME] = TD.i("Home"), i.MENU_TITLE[i.ME] = TD.i("Me"), i.MENU_TITLE[i.INBOX] = TD.i("Inbox"), i.MENU_TITLE[i.SCHEDULED] = TD.i("Scheduled"), i.MENU_TITLE[i.NETWORKACTIVITY] = TD.i("Activity"), i.MENU_TITLE[i.INTERACTIONS] = TD.i("Interactions"), i.DISPLAY_ORDER = [{
        type: i.TIMELINE,
        service: "twitter"
    }, {
        type: i.INTERACTIONS,
        service: "twitter"
    }, {
        type: i.MENTIONS,
        service: "twitter"
    }, {
        type: i.FOLLOWERS,
        service: "twitter"
    }, {
        type: i.MESSAGES,
        service: "twitter"
    }, {
        type: i.SEARCH,
        service: "twitter"
    }, {
        type: i.LISTS,
        service: "twitter"
    }, {
        type: i.TWEETS,
        service: "twitter"
    }, {
        type: i.FAVORITES,
        service: "twitter"
    }, {
        type: i.TRENDS,
        service: "twitter"
    }, {
        type: i.NETWORKACTIVITY,
        service: "twitter"
    }], i.DISPLAY_ORDER_SINGLETONS = [{
        type: i.ME
    }, {
        type: i.INBOX
    }, {
        type: i.SCHEDULED
    }], i.DISPLAY_ORDER_PROFILE = [{
        type: i.TWEETS,
        service: "twitter",
        profile: !0
    }, {
        type: i.MENTIONS,
        service: "twitter",
        profile: !0
    }, {
        type: i.LISTS,
        service: "twitter",
        profile: !0
    }, {
        type: i.TIMELINE,
        service: "twitter",
        profile: !0
    }, {
        type: i.FAVORITES,
        service: "twitter",
        profile: !0
    }];
    var r = i.DISPLAY_ORDER.concat(i.DISPLAY_ORDER_SINGLETONS).concat(i.DISPLAY_ORDER_PROFILE);
    _.each(r, function (e) {
        e.title = i.MENU_TITLE[e.type], e.columnIconClass = i.columnTypeToIconClass[e.type]
    }), i.HELP_TEXT = {}, i.HELP_TEXT[i.TIMELINE] = TD.i("Add a Timeline column for your own accounts, or search for a user and add theirs"), i.HELP_TEXT[i.MENTIONS] = TD.i("Add a Mentions column for your own accounts, or search for a user and add theirs"), i.HELP_TEXT[i.SEARCH] = TD.i("Add a column for a saved or recent Search, or enter a new search in the box"), i.HELP_TEXT[i.LISTS] = TD.i("Create a new list, or select an existing list to edit or add a column"), i.HELP_TEXT[i.MESSAGES] = TD.i("Add a Direct Messages column for your accounts"), i.HELP_TEXT[i.TRENDS] = TD.i("Add a column to monitor Tweets for any Trend"), i.HELP_TEXT[i.TWEETS] = TD.i("Add a column for Tweets sent from your own accounts, or search for a user and add theirs"), i.HELP_TEXT[i.FAVORITES] = TD.i("Add a Favorites column for your own accounts, or search for a user and add theirs"), i.HELP_TEXT[i.INTERACTIONS] = TD.i("Add a column to monitor your mentions, retweets, favourites, follows and list additions in real time"), i.HELP_TEXT[i.NETWORKACTIVITY] = TD.i("Add a column to view favourites, follows and list additions by your friends in real time"), i.STREAMING_FULL = "streaming_full", i.STREAMING_NONE = "streaming_none", i.STREAMING_PARTIAL = "streaming_partial", i.init = function () {
        o(), i.checkColumns(), $.subscribe("/storage/client/column_order_changed", o), $.subscribe("/storage/client/change", o), $.subscribe("/storage/column/feeds_changed", function (e, t, s) {
            var n = i.get(s.getKey());
            n && n.loadFeeds()
        }), $.subscribe("/storage/column/change", function (e) {
            var s = i.get(e.getKey());
            if (s) {
                var n = s.model.getFeedKeys(),
                    r = e.getFeedKeys();
                if (_.isEqual(n, r) || s.loadFeeds(), e.managed && e.hasApiid()) {
                    var s = i.getByApiid(e.getApiid());
                    TD.ui.columns.refreshTitle(s)
                }
                s.loadFilters()
            } else t.stateLog("loading new new column", e), o()
        }), $.subscribe("/cache/names/change", function () {
            _.each(i.getAll(), function (e) {
                TD.ui.columns.refreshTitle(e)
            })
        }), $.subscribe("/storage/account/new", function () {
            1 === TD.storage.accountController.getAll().length && i.checkColumns()
        })
    }, i.checkColumns = function () {
        var t = TD.storage.accountController.getPreferredAccount("twitter");
        0 === e.clientController.client.getColumnOrder().length && t && i.makeDefaultColumns(t)
    }, i.get = function (e) {
        return s[e]
    }, i.getByApiid = function (e) {
        return _.find(s, function (t) {
            return t.model.hasApiid() && t.model.getApiid() === e ? t : null
        })
    }, i.getAll = function () {
        return _.clone(s)
    }, i.getAllOrdered = function () {
        for (var e = this.getAll(), t = [], i = 0; n.length > i; i++) t.push(e[n[i]]);
        return t
    }, i.add = function (e) {
        s[e.model.getKey()] = e
    }, i.deleteColumn = function (t) {
        var i = s[t];
        i && !i.temporary && TD.controller.stats.removeColumn(i.getColumnType()), e.clientController.client.removeColumn(t)
    }, i.removeFromAppLayer = function (t) {
        var i = s[t];
        i && i.removeSubscriptions(), delete s[t], e.columnController.remove(t), TD.controller.feedScheduler.removeColumn(t), TD.ui.columns.removeColumn(t)
    }, i.move = function (e, t) {
        var s, r, a = n.indexOf(e),
            c = n.concat();
        if ("right" === t) r = Math.min(a + 1, n.length - 1);
        else {
            if ("left" !== t) return;
            r = Math.max(a - 1, 0)
        }
        s = n[r], c[r] = c[a], c[a] = s, TD.storage.clientController.client.setColumnOrder(c), o(), i.showColumn(e)
    };
    var o = function () {
        var t = e.clientController.client.getColumnOrder(),
            i = !_.isEqual(n, t);
        i && a(t), $(document).trigger("dataColumnsLoaded")
    }, a = function (s) {
            var r = _.difference(n, s),
                o = _.difference(s, n),
                a = [];
            _.each(r, function (e) {
                i.removeFromAppLayer(e), TD.ui.columns.removeColumn(e)
            }), _.each(o, function (n) {
                var r, o = i.get(n);
                if (!o) {
                    if (r = e.columnController.get(n), !r) return t.stateLog("WARNING: column not found for", n, "all columns:", e.columnController.getAll(), "in column_order", s), void 0;
                    o = new TD.vo.Column(r), i.add(o)
                }
                a.push(o)
            }), TD.ui.columns.addColumnsToView(a), TD.ui.columns.reorderColumns(s), n = s, $(document).trigger("dataColumnOrder", {
                columns: i.getAllOrdered()
            }), _.each(o, function (e) {
                var t = i.get(e);
                TD.controller.feedScheduler.addColumn(t, !0)
            })
        };
    return i.addColumnToUI = function (t) {
        var s, n = t.model.getKey();
        return t.reset(), i.add(t), e.feedController.manageFeeds(t.getFeeds()), e.columnController.manage(t.model), s = e.clientController.client.appendColumn(n), o(), _.defer(i.showColumn, n), TD.controller.stats.addColumn(t.getColumnType()), s
    }, i.makeColumnFor = function (t, s, n, r, o) {
        var a, c, l = {};
        if ("tweetdeck" == s) switch (t) {
        case "me":
            c = e.columnController.getMeFeeds(e.accountController.getAll()), a = i.makeColumn("me", c);
            break;
        case "privateMe":
            c = e.columnController.getInboxFeeds(e.accountController.getAll()), a = i.makeColumn("privateMe", c);
            break;
        case "scheduled":
            c = [e.feedController.getOrCreateFeed("scheduled", "tweetdeck", "tweetdeck", {})], a = i.makeColumn("scheduled", c)
        } else {
            switch (t) {
            case "usertimeline":
            case "favorites":
            case "usertweets":
                r && (l.id = parseInt(r, 10));
                break;
            case "search":
                var o = new TD.vo.SearchFilter;
                l.searchFilterData = o.toJSONObject(), l.baseQuery = r;
                break;
            case "list":
                var u = r.split("/");
                TD.sync.util.assert(2 === u.length, "List meta should contain both ownerId and listId", u), l.ownerId = u[0], l.listId = u[1];
                break;
            case "group":
            case "page":
                l.id = r
            }
            a || (a = i.makeOtherColumnAndFeeds(t, s, n, l, o))
        }
        return a.model.setTitle(TD.util.htmlToText(a.getTitleHTML())), a
    }, i.makeDefaultColumns = function (e) {
        var t = [];
        "twitter" === e.getType() && (t = ["home", "interactions", "direct", "networkactivity"]), _.each(t, function (t) {
            var s = i.makeColumnFor(t, e.getType(), e.getKey());
            i.addColumnToUI(s)
        })
    }, i.makeColumn = function (t, i, s) {
        var n = {
            type: t,
            feedkeys: [],
            settings: {}
        };
        ("me" === t || "privateMe" === t) && (n.settings.has_notification = !0, n.settings.has_sound = !0), s && (n.filters = s.toJSONObject());
        var r = new TD.vo.Column(new e.Column(n), i);
        return r
    }, i.makeOtherColumnAndFeeds = function (t, s, n, r, o) {
        var a = e.feedController,
            c = [];
        return c.push(a.getOrCreateFeed(t, s, n, r)), i.makeColumn("other", c, o)
    }, i.showColumn = function (e) {
        $(document).trigger("uiColumnFocus", {
            columnKey: e
        })
    }, i.isStreaming = function (e) {
        var t = i.getStreamingState(e);
        return t !== i.STREAMING_NONE
    }, i.getStreamingState = function (e) {
        var t, s = i.STREAMING_NONE,
            n = i.get(e),
            r = 0;
        return n && (t = n.model.getFeedKeys(), _.each(t, function (e) {
            TD.controller.feedManager.isStreaming(e) && r++
        }), s = 0 === r ? i.STREAMING_NONE : r === t.length ? i.STREAMING_FULL : i.STREAMING_PARTIAL), s
    }, i
}(TD.storage, TD.sync.util, TD.core.defer), TD.controller.auth = function () {
    var e = {}, t = {
            twitter: "TwitterAuth",
            bitly: "BitlyValidate"
        };
    return e.create = function (e, i) {
        return TD.sync.util.assert(t[e], 'bad name for auth "' + e + '"'), new TD.controller.auth[t[e]](i)
    }, e
}(), TD.controller.auth.AuthorisationProcessor = function () {
    this.start = function (e, t, i) {
        TD.util.isChromeApp() ? this.start_chrome(e, t, i) : TD.util.isWrapperApp() ? this.start_wrapper(e, t, i) : this.start_web(e, t, i)
    }, this.start_wrapper = function (e, t, i) {
        var s = deck.authenticateOn(this.getAuthURL(e, i)),
            n = this,
            r = function (i) {
                var r = n.getTokenFromURL(e.getType(), i);
                r && (r.access_token ? n.updateAccount(r.access_token, t) : n.updateAccount(r.oauth_token, r.oauth_token_secret, t), s.hide(), s.deleteLater())
            };
        s.loadedUrl.connect(r), s.show()
    }, this.start_web = function (e, t, i) {
        var s = window.open(this.getAuthURL(e, i), "mywindow", "width=800,height=450"),
            n = this,
            r = function () {
                var i, o;
                try {
                    s && s.location && s.location.href && (i = s.location.href)
                } catch (a) {
                    console.log(a)
                }
                return i && (o = n.getTokenFromURL(e.getType(), i)) ? (o.access_token ? n.updateAccount(o.access_token, t) : n.updateAccount(o.oauth_token, o.oauth_token_secret, t), s.close(), void 0) : (setTimeout(r, 100), void 0)
            };
        setTimeout(r, 500)
    }, this.getAuthURL = function (e, t) {
        var i = "oauth",
            s = e.getType(),
            n = {};
        if ("twitter" === s) {
            var r = Boolean(t),
                o = e.getUsername();
            r && (n.force_login = r), o && (n.screen_name = o)
        }
        return TD.net.util.addURLParameters(TD.config.api_root + "/" + i + "/authorize/" + s, n)
    }, this.getTokenFromURL = function (e, t) {
        var i, s;
        return (_.contains(t, "/oauth/success/" + e) || _.contains(t, "/oauth2/success/" + e)) && (s = t.split("?")[1], i = TD.net.util.formDecode(s)), i
    }, this.start_chrome = function (e, t, i) {
        var s, n, r = this;
        chrome.tabs.getSelected(null, function (e) {
            s = e.id
        }), n = {
            url: this.getAuthURL(e, i)
        }, chrome.tabs.create(n, function (i) {
            var n = i.id;
            chrome.tabs.onUpdated.addListener(function (i, o, a) {
                var c;
                i === n && a.url && "complete" == a.status && (c = r.getTokenFromURL(e.getType(), a.url), c && (c.access_token ? r.updateAccount(c.access_token, t) : r.updateAccount(c.oauth_token, c.oauth_token_secret, t), chrome.tabs.update(s, {
                    selected: !0
                }), chrome.tabs.remove(i)))
            })
        })
    }
}, TD.controller.auth.TwitterAuth = function (e) {
    var t = this;
    t.account = e, this.verifyAccount = function (e, i) {
        var s = t.account,
            n = TD.config.TWITTER_API_ROOT || "https://api.twitter.com/1.1/",
            r = n + "account/verify_credentials.json",
            o = TD.net.ajax.request(r, {
                account: s,
                isSigned: !0
            });
        o.addCallback(function (t) {
            var n = t.data,
                r = s.getUserID();
            r && r != n.id ? (console.log("Attempting to update wrong account:", s, "Using data:", n), TD.sync.util.printStacktrace(), i()) : (s.setUsername(n.screen_name), s.setName(n.name), s.setProfileImageURL(n.profile_image_url_https), s.setUserID(n.id), s.setIsPrivate(n["protected"]), s.setUpdated((new Date).getTime()), s.computeKey(), e(s))
        }), i && o.addErrback(i)
    }, this.updateAccount = function (e, i, s) {
        var n = t.account;
        n.setUsername(""), n.setUserID(""), n.setType("twitter"), n.setOAuthToken(e), n.setTokenSecret(i), this.verifyAccount(s)
    }
}, TD.controller.auth.BitlyValidate = function (e) {
    var t = this;
    t.account = e, this.updateAccount = function (e, t) {
        this.verifyAccount(t)
    }, this.verifyAccount = function (e, i) {
        var s = t.account,
            n = "https://api-ssl.bitly.com/v3/validate",
            r = {
                x_login: s.get("userId"),
                x_apiKey: s.get("oauth_token"),
                apiKey: "R_b8032856b71a14fabfe64f6845689ddf",
                login: "tweetdeckapi",
                format: "json"
            }, o = TD.net.ajax.jsonp(n, r);
        o.addCallback(function (t) {
            var n = t.data;
            return n.data && 1 == n.data.valid ? (s.setUpdated((new Date).getTime()), s.computeKey(), e(s), void 0) : (i(), void 0)
        }), o.addErrback(i)
    }
}, TD.controller.auth.TwitterAuth.prototype = new TD.controller.auth.AuthorisationProcessor, TD.services.ChirpBase = function (e) {
    this.account = e
}, TD.services.ChirpBase.kMEDIA_CLASS = "s-media", TD.services.ChirpBase.RETWEET_CLASS = "is-retweet", TD.services.ChirpBase.FAVORITE_CLASS = "is-favorite", TD.services.ChirpBase.UNREAD_CLASS = "is-unread", TD.services.ChirpBase.TWEET = "tweet", TD.services.ChirpBase.MESSAGE = "message", TD.services.ChirpBase.MESSAGE_THREAD = "message_thread", TD.services.ChirpBase.SCHEDULED_STATUS = "scheduled_status", TD.services.ChirpBase.SCHEDULED_GROUP = "scheduled_group", TD.services.ChirpBase.prototype.id = "", TD.services.ChirpBase.prototype.chirpType = "unknown", TD.services.ChirpBase.prototype.text = "", TD.services.ChirpBase.prototype.created = null, TD.services.ChirpBase.prototype.htmlText = "", TD.services.ChirpBase.prototype.creatorAccount = null, TD.services.ChirpBase.prototype.embeds = null, TD.services.ChirpBase.prototype._hasImage = null, TD.services.ChirpBase.prototype._hasVideo = null, TD.services.ChirpBase.prototype.fromJSONObject = function () {
    throw "fromJSONObject Not Implemented"
}, TD.services.ChirpBase.prototype.isOwnChirp = function () {
    throw "isOwnChirp Not Implemented"
}, TD.services.ChirpBase.prototype.destroy = function () {
    throw "destroy Not Implemented"
}, TD.services.ChirpBase.prototype.render = function () {
    throw "render Not Implemented"
}, TD.services.ChirpBase.prototype.renderNotification = function () {
    return null
}, TD.services.ChirpBase.prototype.getGrowlData = function () {
    return null
}, TD.services.ChirpBase.prototype.email = function () {
    throw "email Not Implemented"
}, TD.services.ChirpBase.prototype.postComment = function () {
    throw "postComment Not Implemented"
}, TD.services.ChirpBase.prototype.getChirpURL = function () {
    throw "getChirpURL Not Implemented"
}, TD.services.ChirpBase.prototype.toHTML = function (e) {
    return TD.util.transform(e)
}, TD.services.ChirpBase.prototype.isTranslatable = function () {
    return !1
}, TD.services.ChirpBase.prototype.translate = function () {
    throw "translate Not Implemented"
}, TD.services.ChirpBase.prototype.getChirpType = function () {
    return this.chirpType
}, TD.services.ChirpBase.prototype.getScribeItemData = function () {
    throw "getScribeItemData not implemented"
}, TD.services.ChirpBase.prototype._changed = function () {
    TD.controller.notifications.reRender(this)
}, TD.services.ChirpBase.prototype.getDOMChirps = function () {
    var e = "[data-key$='" + this.id + "'][data-account-key='" + this.account.getKey() + "']";
    return $(e)
}, TD.services.ChirpBase.prototype.update = function () {
    return !1
}, TD.services.ChirpBase.prototype.passFilters = function (e) {
    return TD.controller.filterManager.pass(this, e)
}, TD.services.ChirpBase.prototype._generateHTMLText = function () {
    this.htmlText = this.toHTML(this.text)
}, TD.services.ChirpBase.prototype.createdPretty = function () {
    return TD.util.prettyDate(this.created)
}, TD.services.ChirpBase.prototype.createdPrettyFull = function () {
    return TD.util.prettyTimeString(this.created)
}, TD.services.ChirpBase.prototype.reorder = function () {
    TD.controller.feedManager.reorderChirp(this.id)
}, TD.services.ChirpBase.prototype.getSinceId = function () {
    return this.id
}, TD.services.ChirpBase.prototype.getUnreadChirps = function (e) {
    return !this.isOwnChirp() && this.created.getTime() > e ? [this] : []
}, TD.services.ChirpBase.prototype.getFilterableText = function () {
    return this.text
}, TD.services.ChirpBase.prototype.getSenders = function () {
    return null
}, TD.services.ChirpBase.prototype.getSource = function () {
    return null
}, TD.services.ChirpBase.prototype.isRetweetedStatus = function () {
    return null
}, TD.services.ChirpBase.prototype.getMedia = function () {
    return this._media ? this._media : []
}, TD.services.ChirpBase.prototype.hasMedia = function () {
    return this.getMedia().length > 0
}, TD.services.ChirpBase.prototype.hasImage = function () {
    return null === this._hasImage && (this._hasImage = this.getMedia().some(function (e) {
        return !e.isVideo
    })), this._hasImage
}, TD.services.ChirpBase.prototype.hasVideo = function () {
    return null === this._hasVideo && (this._hasVideo = this.getMedia().some(function (e) {
        return e.isVideo
    })), this._hasVideo
}, TD.services.ChirpBase.prototype.hasLink = function () {
    return !1
}, TD.services.ChirpBase.prototype.isFromVerifiedUser = function () {
    return !1
}, TD.services.ChirpBase.msFudge = 0, TD.services.ChirpBase.prototype.fudgeCreatedTime = function (e) {
    var t = TD.services.ChirpBase.msFudge;
    e.setMilliseconds(t), t++, t %= 1e3, TD.services.ChirpBase.msFudge = t
}, TD.services.TwitterComposer = function (e) {
    this.message = {}, this.id = null, this.url = "statuses/update.json", this.isDm = !1, this.isRT = !1, this.isReply = !1, this.isScheduled = !1, this.client = e, this.retweetID = null
}, TD.services.TwitterComposer.prototype = {
    Retweet: function (e) {
        return this.url = "statuses/retweet/:id.json".replace(":id", e), this.isRT = !0, this.retweetID = e, this
    },
    DirectlyTo: function (e) {
        return this.url = "direct_messages/new.json", this.isDm = !0, this.message.screen_name = e, this
    },
    InReplyTo: function (e) {
        return e && (this.message.in_reply_to_status_id = e, this.isReply = !0), this.isDm = !1, this
    },
    WithMessage: function (e) {
        return this.isDm ? this.message.text = e : this.message.status = e, this
    },
    WithMedia: function (e) {
        this.file = e
    },
    toSchedulableObject: function () {
        var e = {}, t = {};
        e.service = "twitter", e.user = {
            id: this.client.oauth.account.getUserID()
        }, t.user = {
            name: this.client.oauth.account.getUsername(),
            avatar_url: this.client.oauth.account.getProfileImageURL()
        };
        var i = {};
        return this.isRT ? (i.type = "retweet", i.body = this.retweetID) : this.isDm ? (i.type = "direct_message", i.screen_name = this.message.screen_name, i.body = this.message.text) : (i.type = "tweet", i.body = this.message.status, this.message.in_reply_to_status_id && (i.in_reply_to_status_id = this.message.in_reply_to_status_id)), e.meta = t, e.update = i, e
    },
    post: function (e, t) {
        var i, s = function (i) {
                var s;
                i.error ? t && (i.errorMessage = i.error, t(i)) : (this.isDm ? (s = this.client.processDM(i), this.client.processMessages([s], !0)) : (s = this.client.processTweet(i), this.client.processMiscTweet(s)), e && e(s), this.scribeSuccess(s))
            }.bind(this);
        if (this.file) {
            var n = this.client.oauth.account;
            url = TD.config.api_root + "/oauth/media/twitter";
            var r = new FormData;
            _.each(this.message, function (e, t) {
                r.append(t, e)
            }), r.append("media[]", this.file), i = TD.net.ajax.upload(url, r, n), i.addCallback(function (e) {
                s(e.data)
            }), i.addErrback(t)
        } else this.client.makeTwitterCall(this.client.API_BASE_URL + this.url, this.message, "POST", null, s, t)
    },
    scribeSuccess: function (e) {
        var t = Boolean(this.file);
        this.isRT ? TD.controller.stats.retweet(e.retweetedStatus.user.id, e.retweetedStatus.id, e.account.getUserID()) : this.isDm ? TD.controller.stats.postMessage(this.client.oauth.account.getUserID(), t, this.isScheduled) : this.isReply ? TD.controller.stats.postReply(this.client.oauth.account.getUserID(), t, this.isScheduled) : TD.controller.stats.postTweet(this.client.oauth.account.getUserID(), t, this.isScheduled)
    }
}, TD.services.TwitterStatus = function (e) {
    this.account = e
}, TD.services.TwitterStatus.prototype = new TD.services.ChirpBase, TD.services.TwitterStatus.prototype.chirpType = TD.services.ChirpBase.TWEET, TD.services.TwitterStatus.prototype.user = null, TD.services.TwitterStatus.prototype.inReplyToID = "", TD.services.TwitterStatus.prototype.inReplyToUserID = "", TD.services.TwitterStatus.prototype.inReplyToScreenName = "", TD.services.TwitterStatus.prototype.isFavorite = !1, TD.services.TwitterStatus.prototype.isRetweeted = !1, TD.services.TwitterStatus.prototype.retweetCount = 0, TD.services.TwitterStatus.prototype.retweetedStatus = null, TD.services.TwitterStatus.prototype.entities = null, TD.services.TwitterStatus.prototype.source = "", TD.services.TwitterStatus.prototype.sourceNoHTML = "", TD.services.TwitterStatus.prototype.cards = null, TD.services.TwitterStatus.prototype._media = null, TD.services.TwitterStatus.prototype._filterableText = null, TD.services.TwitterStatus.prototype.fromJSONObject = function (e) {
    var t, i, s, n = this,
        r = !1;
    return this.id = e.id_str || e.id, e.user && (this.user = new TD.services.TwitterUser(this.account).fromJSONObject(e.user), this.creatorAccount = TD.storage.accountController.get(TD.storage.Account.generateKeyFor("twitter", this.user.id))), e.source && (s = $("<div>" + e.source + "</div>"), s.find("a").attr("rel", "url").attr("target", "_blank"), this.source = s.html(), this.sourceNoHTML = s.text()), this.inReplyToUserID = e.in_reply_to_user_id, this.inReplyToScreenName = e.in_reply_to_screen_name, this.isFavorite = e.favorited, this.isRetweeted = e.retweeted, this.retweetCount = e.retweet_count, this.currentUserRetweet = e.current_user_retweet, this.possiblySensitive = e.possibly_sensitive, this.inReplyToID = e.in_reply_to_status_id_str || e.in_reply_to_status_id, e.retweeted_status ? (this.text = e.retweeted_status.text, this.retweetedStatus = new TD.services.TwitterStatus(this.account).fromJSONObject(e.retweeted_status), e.retweeted_status.entities && (this.entities = e.retweeted_status.entities)) : (this.text = e.text, e.entities && (this.entities = e.entities)), this.entities = this.entities || {}, this._media = TD.services.TwitterMedia.getMediaFromEntities(this.entities), e.cards && (this.cards = {}, _.each(TD.services.TwitterCard.SUPPORTED_CARD_TYPES, function (i) {
        if (e.cards[i]) {
            for (n.cards[i] = [], t = 0; e.cards[i].length > t; t++) n.cards[i].push(new TD.services.TwitterCard(n.account).fromJSONObject(e.cards[i][t]));
            r = !0
        }
    }), r || (this.cards = null)), this.lang = e.lang, i = TD.util.parseDateString(e.created_at), this.fudgeCreatedTime(i), this.created = e.created = i, this._generateHTMLText(), this
}, TD.services.TwitterStatus.prototype.toHTML = function (e) {
    return TD.util.transform(e, this.entities)
}, TD.services.TwitterStatus.prototype.getMainUser = function () {
    return this.retweetedStatus ? this.retweetedStatus.user : this.user
}, TD.services.TwitterStatus.prototype.getCreator = function () {
    return this.user
}, TD.services.TwitterStatus.prototype.getMainTweet = function () {
    return this.retweetedStatus ? this.retweetedStatus : this
}, TD.services.TwitterStatus.prototype.hasLocationData = function () {
    var e = this.getMainTweet();
    return e.coordinates || e.place
}, TD.services.TwitterStatus.prototype.isOwnChirp = function () {
    return Boolean(this.creatorAccount)
}, TD.services.TwitterStatus.prototype.isRetweetedStatus = function () {
    return Boolean(this.retweetedStatus)
}, TD.services.TwitterStatus.prototype.isTranslatable = function () {
    var e = this.getMainTweet();
    return TD.decider.get(TD.decider.TRANSLATE_TWEET) && e.lang && e.lang !== TD.languages.getSystemLanguageCode(!0) && TD.languages.isSupportedTranslationSourceLanguage(e.lang) && TD.languages.isSystemLangSupportedDestinationLanguage() && !e.isOwnChirp() && !e.user.isProtected && !e.getTranslation()
}, TD.services.TwitterStatus.prototype.translate = function () {
    var e = TD.controller.clients.getClient(this.account.getKey()),
        t = this.getMainTweet().lang,
        i = TD.languages.getSupportedDestinationSystemLanguage(),
        s = function (e) {
            var t, s = this.getDOMChirps(),
                n = s.find(".js-translate-call-to-action"),
                r = s.find(".js-tweet-text"),
                o = s.find(".js-tweet-translation");
            this.lang = e.translated_lang || this.lang, n.remove(), e.translated_lang !== i && (e.htmltext = TD.util.transform(e.text, e.entities), e.localizedLanguageName = this.getLocalizedLanguageName(), o.length || (r.after(TD.ui.template.render("status/tweet_translation", e)), o = s.find(".js-tweet-translation")), t = o.find(".js-tweet-translation-text"), r.addClass("tweet-translation-original-text margin-bn"), t.html(e.htmltext), this.setTranslation(e))
        }.bind(this),
        n = function () {
            TD.controller.progressIndicator.addMessage(TD.i("Translation failed"))
        }.bind(this);
    e.translateTweet(this.getMainTweet().id, i, s, n), TD.controller.stats.translate(this.getMainUser().id, this.id, this.account.getUserID(), i, t)
}, TD.services.TwitterStatus.prototype.setTranslation = function (e) {
    this.getMainTweet().translation = e
}, TD.services.TwitterStatus.prototype.getTranslation = function () {
    return this.getMainTweet().translation
}, TD.services.TwitterStatus.prototype.getChirpURL = function () {
    var e = this.getMainTweet();
    return "https://twitter.com/" + e.user.screenName + "/status/" + e.id
}, TD.services.TwitterStatus.prototype.getLocalizedLanguageName = function () {
    var e = TD.languages.getLanguageFromISOCode(this.getMainTweet().lang);
    return e ? e.localized_name : ""
}, TD.services.TwitterStatus.prototype.destroy = function () {
    return this.isOwnChirp() ? (this._action("delete", function (e) {
        TD.controller.feedManager.deleteChirp(e.id)
    }), void 0) : (TD.controller.progressIndicator.addMessage(TD.i("You don't own this account - can't delete")), void 0)
}, TD.services.TwitterStatus.prototype.getQuoteText = function () {
    var e = {
        username: this.user.screenName,
        text: TD.util.removeHTMLCodes(this.text)
    };
    return TD.ui.template.toHtml("RT @{{username}}: {{{text}}}", e)
}, TD.services.TwitterStatus.prototype.renderMinimalist = function (e) {
    return e.isMinimalist = !0, this.render(e)
}, TD.services.TwitterStatus.prototype.render = function (e) {
    e = e || {};
    var t = TD.settings.getDisplaySensitiveMedia(),
        i = {
            tweet: this,
            withMediaPreview: e.mediaPreviewSize !== TD.vo.Column.MEDIA_PREVIEW_OFF,
            isMediaPreviewSmall: e.mediaPreviewSize === TD.vo.Column.MEDIA_PREVIEW_SIZE_SMALL,
            isMediaPreviewLarge: e.mediaPreviewSize === TD.vo.Column.MEDIA_PREVIEW_SIZE_LARGE,
            mediaPreviewSrc: function () {
                return this.getMediaSrcForPreviewSize(e.mediaPreviewSize)
            },
            thumbSizeClass: TD.services.TwitterMedia.thumbSizeClasses[e.mediaPreviewSize],
            isPossiblySensitive: this.possiblySensitive && !t,
            isMinimalist: Boolean(e.isMinimalist),
            withTweetActions: !0,
            withFooter: !0,
            withAvatar: !0,
            withLinebreaks: !0
        }, s = $.extend({}, i, e);
    return TD.ui.template.render("status/tweet_in_stream", s)
}, TD.services.TwitterStatus.prototype.renderInMediaGallery = function () {
    return TD.ui.template.render("status/tweet_in_box", {
        tweet: this,
        withTweetActions: !0,
        withTweetActionsVisible: !0,
        withFooter: !0,
        withAvatar: !0
    })
}, TD.services.TwitterStatus.prototype.renderNotification = function () {
    return TD.ui.template.render("status/tweet_in_box", {
        tweet: this,
        withAvatar: !0
    })
}, TD.services.TwitterStatus.prototype.getGrowlData = function () {
    var e = this.getMainTweet(),
        t = {};
    return e.sender ? t.title = e.sender.screenName + " > " + e.recipient.screenName : e.user && e.user.screenName && (t.title = e.user.screenName), t.img = e.getMainUser().profileImageURL, t.text = $("<div>" + e.htmlText + "</div>").text(), t
}, TD.services.TwitterStatus.prototype.favorite = function () {
    function e() {
        TD.controller.progressIndicator.taskFailed(i)
    }

    function t(t) {
        t.error ? e() : (r.setFavorite(!r.isFavorite), TD.controller.progressIndicator.taskComplete(i))
    }
    var i, s, n, r = this,
        o = r.getMainUser(),
        a = r.getMainTweet();
    this.isFavorite ? (n = TD.i("Unfavoriting"), TD.controller.clients.getClient(r.account.getKey()).unfavorite(r.id, t, e), s = TD.controller.stats.unfavorite) : (n = TD.i("Favoriting"), TD.controller.clients.getClient(r.account.getKey()).favorite(r.id, t, e), s = TD.controller.stats.favorite), i = TD.controller.progressIndicator.addTask(n), s(o.id, a.id, r.account.getUserID())
}, TD.services.TwitterStatus.prototype.email = function () {
    var e, t = TD.i("Tweet forwarded by @{{1}}", {
            1: this.account.getUsername()
        }),
        i = [];
    i.push(this.text), i.push(TD.i("Original Tweet: {{1}}", {
        1: this.getChirpURL()
    })), i.push(TD.i("Sent via TweetDeck")), e = i.join("\n\n"), TD.util.openEmail(null, t, e)
}, TD.services.TwitterStatus.prototype.reply = function () {
    TD.ui.compose.reply(this, this.account.getKey())
}, TD.services.TwitterStatus.prototype.retweet = function () {
    new TD.components.ActionDialog(this)
}, TD.services.TwitterStatus.prototype.referenceTo = function () {
    var e = this.account.getKey();
    TD.ui.compose.referenceTo(this.getChirpURL(), e)
}, TD.services.TwitterStatus.prototype._action = function (e, t) {
    function i() {
        TD.controller.progressIndicator.taskFailed(n)
    }

    function s(e) {
        e.error ? (TD.controller.progressIndicator.changeMessage(n, r + " - " + e.error), i()) : (TD.controller.progressIndicator.taskComplete(n), t && t(o))
    }
    var n, r, o = this,
        a = TD.controller.clients.getClient(this.account.getKey());
    switch (e) {
    case "delete":
        r = this.retweetedStatus ? TD.i("Undoing Retweet") : TD.i("Deleting"), a = TD.controller.clients.getClient(this.creatorAccount.getKey()), a.destroy(this.id, s, i);
        break;
    case "deleteDM":
        r = TD.i("Deleting"), this.creatorAccount && (a = TD.controller.clients.getClient(this.creatorAccount.getKey())), a.destroyDM(this.id, s, i)
    }
    n = TD.controller.progressIndicator.addTask(r)
}, TD.services.TwitterStatus.prototype._entitySort = function (e, t) {
    return t.indices[0] - e.indices[0]
}, TD.services.TwitterStatus.prototype.getFilterableText = function () {
    var e, t = "";
    return this._filterableText ? t = this._filterableText : 0 === this.entities.urls.length && 0 === this.entities.media.length ? t = this.text : (e = [this.text], e = e.concat(_.pluck(this.entities.urls, "expanded_url")), e = e.concat(_.pluck(this.entities.media, "expanded_url")), e = _.compact(e), t = e.join(" "), this._filterableText = t), t
}, TD.services.TwitterStatus.prototype.getSenders = function () {
    var e = [this.user.screenName];
    return this.isRetweetedStatus() && e.push(this.retweetedStatus.user.screenName), e
}, TD.services.TwitterStatus.prototype.getSource = function () {
    return this.sourceNoHTML
}, TD.services.TwitterStatus.prototype.setRetweeted = function (e) {
    this.isRetweeted = e, this.getDOMChirps().toggleClass(TD.services.ChirpBase.RETWEET_CLASS, e), this._changed()
}, TD.services.TwitterStatus.prototype.setFavorite = function (e) {
    this.isFavorite = e, this.getDOMChirps().toggleClass(TD.services.ChirpBase.FAVORITE_CLASS, e).find('a[rel="favorite"]').attr("title", TD.ui.template.render("text/favorite_action", this)), this._changed()
}, TD.services.TwitterStatus.prototype.isMention = function () {
    for (var e, t = this.account.getUserID() + "", i = this.account.getUsername().toLowerCase(), s = this.entities.user_mentions.length, n = 0; s > n; n++)
        if (e = this.entities.user_mentions[n], e.id_str) {
            if (e.id_str === t) return !0
        } else if (e.screen_name.toLowerCase() === i) return !0;
    return !1
}, TD.services.TwitterStatus.prototype.getMedia = function () {
    return this.retweetedStatus ? this.retweetedStatus.getMedia() : this._media || []
}, TD.services.TwitterStatus.prototype.getUniqueMedia = function () {
    var e = this.getMedia(),
        t = {}, i = [],
        s = this;
    return this.cards && _.each(TD.services.TwitterCard.SUPPORTED_CARD_TYPES, function (e) {
        var i = s.cards[e];
        i && _.each(i, function (e) {
            t[e.url] = !0
        })
    }), _.each(e, function (e) {
        t[e.shortUrl] || i.push(e)
    }), i
}, TD.services.TwitterStatus.prototype.getReplyUsers = function () {
    var e = this.getMainTweet(),
        t = {};
    this.account.getUsername().toLowerCase();
    var i = [e.user.screenName];
    return i = i.concat(twttr.txt.extractMentions(e.text)), this.retweetedStatus && i.push(this.user.screenName), i = i.filter(function (e) {
        var i = e.toLowerCase(),
            s = !t[i];
        return t[i] = !0, s
    }), i = i.map(TD.util.atMentionify)
}, TD.services.TwitterStatus.prototype.getCardsForGallery = function () {
    var e = this.getMedia(),
        t = {}, i = [],
        s = this;
    return _.each(e, function (e) {
        t[e.shortUrl] = !0
    }), this.cards && _.each(["photos", "players"], function (e) {
        var n = s.cards[e];
        n && _.each(n, function (e) {
            t[e.url] || i.push(e)
        })
    }), i
}, TD.services.TwitterStatus.prototype.hasLink = function () {
    var e = this.entities.media || [],
        t = this.entities.urls || [];
    return Boolean(e.length || t.length)
}, TD.services.TwitterStatus.prototype.isFromVerifiedUser = function () {
    return this.getMainTweet().user.isVerified
}, TD.services.TwitterStatus.prototype.hasImage = function () {
    return null === this._hasImage && (this._hasImage = TD.services.ChirpBase.prototype.hasImage.call(this) || TD.services.TwitterMedia.entitiesContainImage(this.entities)), this._hasImage
}, TD.services.TwitterStatus.prototype.hasVideo = function () {
    return null === this._hasVideo && (this._hasVideo = TD.services.ChirpBase.prototype.hasVideo.call(this) || TD.services.TwitterMedia.entitiesContainVideo(this.entities)), this._hasVideo
}, TD.services.TwitterStatus.prototype.getScribeItemData = function () {
    var e;
    return this.isRetweetedStatus() ? (e = this.getMainTweet().getScribeItemData(), e.retweeting_tweet_id = this.id) : (e = {
        item_type: 0,
        id: this.id
    }, this.cards && (this.cards.photos ? e.card_type = 2 : this.cards.players ? e.card_type = 3 : this.cards.summaries && (e.card_type = 4))), e
}, TD.services.TwitterCard = function (e) {
    this.account = e
}, TD.services.TwitterCard.prototype = {
    url: null,
    title: null,
    description: null,
    author: null,
    site: null,
    images: null,
    players: null
}, TD.services.TwitterCard.SUPPORTED_CARD_TYPES = ["summaries", "photos", "players"], TD.services.TwitterCard.prototype.fromJSONObject = function (e) {
    return this.url = e.url, this.title = e.title, this.description = e.description, e.author_user && (this.author = new TD.services.TwitterUser(this.account).fromJSONObject(e.author_user)), e.site_user && (this.site = new TD.services.TwitterUser(this.account).fromJSONObject(e.site_user)), e.images && (this.images = e.images), e.players && (this.players = e.players.filter(function (e) {
        return e.aspectRatio = 100 * (e.height / e.width), "text/html" === e.source_type
    })), this
}, TD.services.TwitterCard.prototype.shouldDisable = function () {
    return "win" === TD.util.getAppEnv() && this.players
}, TD.services.TwitterCard.prototype.renderGallery = function () {
    var e;
    return this.players ? e = TD.ui.template.render("cards/media_player_gallery", this) : (params = {
        url: this.url,
        imageSrc: this.images.web.image_url,
        thumbClass: TD.services.TwitterMedia.IMAGE_CLASS
    }, e = TD.ui.template.render("status/media_thumb", params)), e
}, TD.services.TwitterMedia = function () {}, TD.services.TwitterMedia.TWITPIC_RE = /(http:\/\/|www.)?twitpic.com\/\w+/, TD.services.TwitterMedia.YFROG_RE = /(http:\/\/|www.)?yfrog.com\/\w+/, TD.services.TwitterMedia.PLIXI_RE = /(http:\/\/|www.)?plixi.com\/p\/[0-9]+/, TD.services.TwitterMedia.LOCKERZ_RE = /(http:\/\/|www.)?lockerz.com\/s\/[0-9]+/, TD.services.TwitterMedia.INSTAGRAM_RE = /(http:\/\/|www.)?instagr.am\/p\/[\w-]+(\/)/, TD.services.TwitterMedia.YOUTUBE_LONG_RE = /(?:(?:https?\:\/\/)?(?:www\.)?)?youtube\.com\/watch[a-zA-Z0-9_\-\?\&\=\/]+/, TD.services.TwitterMedia.YOUTUBE_TINY_RE = /(http:\/\/|www.)?youtu\.be\/([a-zA-Z0-9_\-\?\&\=\/]+)/, TD.services.TwitterMedia.YOUTUBE_RE = RegExp(TD.services.TwitterMedia.YOUTUBE_LONG_RE.source + "|" + TD.services.TwitterMedia.YOUTUBE_TINY_RE.source), TD.services.TwitterMedia.YOUTUBE_STARTTIME = /(?:(\d+)[h])?(?:(\d+)[m])?(?:(\d+)[s])?/, TD.services.TwitterMedia.VIMEO_RE = /https?:\/\/(www\.|player\.)?vimeo\.com\/(.+)/i, TD.services.TwitterMedia.VINE_RE = /https?:\/\/(www\.)?vine\.co\/v\/(.+)/i, TD.services.TwitterMedia.FLICKR_RE = /https?:\/\/(www\.)?(flic.kr|flickr.com\/photos)\/(.+)/i, TD.services.TwitterMedia.IMGUR_RE = /https?:\/\/([a-z0-9]+\.)?imgur.com\/(.+)/i, TD.services.TwitterMedia.PHOTOZOU_RE = /https?:\/\/photozou\.jp\/photo\/(show|photo_only)\/(.+)/i, TD.services.TwitterMedia.FILTERABLE_VIDEO_SERVICES = [TD.services.TwitterMedia.VIMEO_RE, TD.services.TwitterMedia.VINE_RE], TD.services.TwitterMedia.FILTERABLE_IMAGE_SERVICES = [TD.services.TwitterMedia.FLICKR_RE, TD.services.TwitterMedia.IMGUR_RE, TD.services.TwitterMedia.PHOTOZOU_RE], TD.services.TwitterMedia.YOUTUBE_GALLERY_WIDTH = 640, TD.services.TwitterMedia.YOUTUBE_GALLERY_HEIGHT = 390, TD.services.TwitterMedia.MAX_THUMB_WIDTH = 90, TD.services.TwitterMedia.MAX_THUMB_HEIGHT = 65, TD.services.TwitterMedia.THUMBNAIL_CONTAINER_CLASS = "media-thumb-container", TD.services.TwitterMedia.THUMBNAIL_IMG_CLASS = "media-thumb-img", TD.services.TwitterMedia.thumbSizeClasses = {
    off: "",
    small: "media-size-small",
    medium: "media-size-medium",
    large: "media-size-large"
}, TD.services.TwitterMedia.IMAGE_CLASS = "media-img", TD.services.TwitterMedia.SERVICES = {
    twitpic: TD.services.TwitterMedia.TWITPIC_RE,
    yfrog: TD.services.TwitterMedia.YFROG_RE,
    lockerz: TD.services.TwitterMedia.LOCKERZ_RE,
    instagram: TD.services.TwitterMedia.INSTAGRAM_RE,
    youtube: TD.services.TwitterMedia.YOUTUBE_RE
}, TD.services.TwitterMedia.getMediaFromEntities = function (e) {
    var t = [],
        i = {};
    _.each(e.media, function (e) {
        t.push((new TD.services.TwitterMedia).fromMediaEntity(e))
    });
    var s = _.map(e.urls, function (e) {
        var t = e.expanded_url || e.url;
        return i[t] = e.url, _.startsWith(t, "http") || (t = "http://" + t), t
    });
    return _.each(s, function (e) {
        var s;
        for (var n in TD.services.TwitterMedia.SERVICES) 
            s = e.match(TD.services.TwitterMedia.SERVICES[n]), 
            s && s[0] == e && t.push((new TD.services.TwitterMedia).fromURL(n, i[e], e))
    }), t
}, TD.services.TwitterMedia.entitiesContainImage = function (e) {
    return TD.services.TwitterMedia.FILTERABLE_IMAGE_SERVICES.some(function (t) {
        return e.urls.some(function (e) {
            return t.test(e.expanded_url)
        })
    })
}, TD.services.TwitterMedia.entitiesContainVideo = function (e) {
    return TD.services.TwitterMedia.FILTERABLE_VIDEO_SERVICES.some(function (t) {
        return e.urls.some(function (e) {
            return t.test(e.expanded_url)
        })
    })
}, TD.services.TwitterMedia.prototype = {
    flaggedNSFW: !1,
    isVideo: !1
}, TD.services.TwitterMedia.prototype.fromMediaEntity = function (e) {
    return this.entity = e, this.service = "twitter", this.url = this.shortUrl = e.url, this.sizes = e.sizes, this
}, TD.services.TwitterMedia.prototype.fromURL = function (e, t, i) {
    if (this.url = i, this.shortUrl = t, this.service = e, "instagram" === this.service && _.endsWith(this.url, "/")) this.url = this.url.substring(0, this.url.length - 1);
    else if ("youtube" === this.service && (this.isVideo = !0, this.mediaId = this.url.match(TD.services.TwitterMedia.YOUTUBE_LONG_RE) ? TD.net.util.decodeURL(this.url).v : this.url.split("/").pop().split("?")[0], this.startTimeInUrl = TD.net.util.decodeURL(this.url).t, this.startTimeInUrl)) {
        var s = this.startTimeInUrl.match(TD.services.TwitterMedia.YOUTUBE_STARTTIME),
            n = s[1] ? parseInt(3600 * s[1], 10) : 0,
            r = s[2] ? parseInt(60 * s[2], 10) : 0,
            o = s[3] ? parseInt(s[3], 10) : 0;
        this.startTime = n + r + o
    }
    return this
}, TD.services.TwitterMedia.prototype.thumb = function () {
    switch (this.service) {
    case "twitter":
        return this.entity.media_url_https + ":thumb";
    case "twitpic":
        return "https://twitpic.com/show/thumb/" + this.url.split("/").pop();
    case "yfrog":
        return this.url.replace("http://", "https://") + ":small";
    case "lockerz":
        return "https://api.plixi.com/api/tpapi.svc/imagefromurl?size=thumbnail&url=" + this.url;
    case "instagram":
        return "https://instagr.am/p/" + this.url.split("/").pop() + "/media/?size=t";
    case "youtube":
        return "https://img.youtube.com/vi/" + this.mediaId + "/default.jpg"
    }
}, TD.services.TwitterMedia.prototype.small = function () {
    switch (this.service) {
    case "twitter":
        return this.entity.media_url_https + ":small";
    case "twitpic":
    case "yfrog":
    case "lockerz":
        return this.large();
    case "instagram":
        return "https://instagr.am/p/" + this.url.split("/").pop() + "/media/?size=m";
    case "youtube":
        return "https://img.youtube.com/vi/" + this.mediaId + "/mqdefault.jpg"
    }
}, TD.services.TwitterMedia.prototype.medium = function () {
    switch (this.service) {
    case "twitter":
        return this.entity.media_url_https;
    case "twitpic":
    case "yfrog":
    case "lockerz":
        return this.large();
    case "instagram":
        return "https://instagr.am/p/" + this.url.split("/").pop() + "/media/?size=l";
    case "youtube":
        return "https://img.youtube.com/vi/" + this.mediaId + "/mqdefault.jpg"
    }
}, TD.services.TwitterMedia.prototype.large = function () {
    switch (this.service) {
    case "twitter":
        return this.entity.media_url_https + ":large";
    case "twitpic":
        return "https://twitpic.com/show/full/" + this.url.split("/").pop();
    case "yfrog":
        return this.url.replace("http://", "https://") + ":iphone";
    case "lockerz":
        return "https://api.plixi.com/api/tpapi.svc/imagefromurl?size=medium&url=" + this.url;
    case "instagram":
        return "https://instagr.am/p/" + this.url.split("/").pop() + "/media/?size=l";
    case "youtube":
        return "https://img.youtube.com/vi/" + this.mediaId + "/hqdefault.jpg"
    }
}, TD.services.TwitterMedia.prototype.getMediaSrcForPreviewSize = function (e) {
    var t = TD.util.isRetina();
    switch (e) {
    case TD.vo.Column.MEDIA_PREVIEW_SIZE_SMALL:
        return t ? this.small() : this.thumb();
    case TD.vo.Column.MEDIA_PREVIEW_SIZE_MEDIUM:
        return t ? this.medium() : this.small();
    case TD.vo.Column.MEDIA_PREVIEW_SIZE_LARGE:
        return t ? this.large() : this.medium()
    }
}, TD.services.TwitterMedia.prototype.renderThumb = function (e) {
    var t = {
        url: this.url,
        imageSrc: this.thumb(),
        isVideo: this.isVideo,
        thumbSizeClass: TD.services.TwitterMedia.thumbSizeClasses[e]
    };
    return TD.ui.template.render("status/media_thumb", t)
}, TD.services.TwitterMedia.prototype.renderDetailView = function () {
    var e, t = "narrow" === TD.settings.getColumnWidth;
    return "youtube" !== this.service || t ? (e = {
        isPossiblySensitive: this.isPossiblySensitive,
        url: this.url,
        imageSrc: this.small(),
        isVideo: this.isVideo,
        thumbClass: TD.services.TwitterMedia.IMAGE_CLASS
    }, TD.ui.template.render("status/media_thumb", e)) : (e = {
        id: this.mediaId,
        startTime: this.startTime,
        width: "100%",
        height: "auto"
    }, TD.ui.template.render("media/youtube", e))
}, TD.services.TwitterMedia.prototype.renderGallery = function () {
    var e, t;
    if ("youtube" === this.service) {
        var t = {
            id: this.mediaId,
            startTime: this.startTime,
            width: TD.services.TwitterMedia.YOUTUBE_GALLERY_WIDTH,
            height: TD.services.TwitterMedia.YOUTUBE_GALLERY_HEIGHT
        };
        e = TD.ui.template.render("media/youtube", t)
    } else t = {
        url: this.url,
        imageSrc: this.large(),
        thumbClass: TD.services.TwitterMedia.IMAGE_CLASS
    }, e = TD.ui.template.render("status/media_thumb", t);
    return e
}, TD.services.TwitterDirectMessage = function (e) {
    this.account = e
}, TD.services.TwitterDirectMessage.prototype = new TD.services.TwitterStatus, TD.services.TwitterDirectMessage.prototype.chirpType = TD.services.ChirpBase.MESSAGE, TD.services.TwitterDirectMessage.prototype.messageThreadId = null, TD.services.TwitterDirectMessage.prototype.fromJSONObject = function (e) {
    return this.id = e.id_str || e.id + "", this.text = e.text, this.sender = new TD.services.TwitterUser(this.account).fromJSONObject(e.sender), this.recipient = new TD.services.TwitterUser(this.account).fromJSONObject(e.recipient), this.creatorAccount = TD.storage.accountController.get(TD.storage.Account.generateKeyFor("twitter", this.sender.id)), this.created = TD.util.parseDateString(e.created_at), this.createdDate = TD.util.prettyDate(this.created), this.entities = e.entities || {}, this.htmlText = TD.util.transform(this.text, this.entities), this.read = e.read || this.sender.isMe(), this
}, TD.services.TwitterDirectMessage.prototype.hasLocationData = function () {
    return !1
}, TD.services.TwitterDirectMessage.prototype.getMainUser = function () {
    return this.sender
}, TD.services.TwitterDirectMessage.prototype.isOwnChirp = function () {
    return Boolean(this.creatorAccount)
}, TD.services.TwitterDirectMessage.prototype.dm = function () {
    var e = this.sender;
    this.isOwnChirp() && (e = this.recipient), TD.ui.compose.directMessage(e.screenName, this.account.getKey())
}, TD.services.TwitterDirectMessage.prototype.getChirpURL = function () {
    return ""
}, TD.services.TwitterDirectMessage.prototype.destroy = function () {
    var e = this;
    this._action("deleteDM", function () {
        var t = TD.controller.clients.getClient(e.account.getKey());
        t.deleteMessage(e.id)
    })
}, TD.services.TwitterDirectMessage.prototype.render = function () {
    return TD.ui.template.render("status/message_in_stream", {
        message: this,
        withFooter: !0,
        withAvatar: !0
    })
}, TD.services.TwitterDirectMessage.prototype.renderNotification = function () {
    return TD.ui.template.render("status/message_in_box", {
        message: this,
        withAvatar: !0
    })
}, TD.services.TwitterDirectMessage.prototype.getSenders = function () {
    return [this.sender.screenName]
}, TD.services.TwitterDirectMessage.prototype.getCorrespondent = function () {
    var e = this.account.getUserID();
    return this.sender.id == e ? this.recipient : this.sender
}, TD.services.TwitterMessageThread = function (e, t) {
    this.account = e, this.correspondent = t, this.id = "messagethread-" + e.getUserID() + "-" + t.id, this.messages = [], this.messageIndex = {}
}, TD.services.TwitterMessageThread.prototype = new TD.services.ChirpBase, TD.services.TwitterMessageThread.prototype.chirpType = TD.services.ChirpBase.MESSAGE_THREAD, TD.services.TwitterMessageThread.prototype.correspondent = null, TD.services.TwitterMessageThread.prototype.unread = !1, TD.services.TwitterMessageThread.prototype.replied = !1, TD.services.TwitterMessageThread.prototype.messages = null, TD.services.TwitterMessageThread.prototype.messageIndex = null, TD.services.TwitterMessageThread.prototype.addMessages = function (e) {
    var t, i, s = !1,
        n = this.account.getUserID(),
        r = TD.config.internal_build || TD.decider.get(TD.decider.DM_READ_STATE);
    if (0 !== e.length) {
        for (t = 0, i = e.length; i > t; t++) {
            var o = e[t];
            if (!this.messageIndex[o.id]) {
                if (s = !0, o.recipient.id == n && o.sender.id == this.correspondent.id);
                else if (o.recipient.id != this.correspondent.id || o.sender.id != n) throw Error("Wrong thread!");
                o.messageThreadId = this.id, this.messages.push(o), this.messageIndex[o.id] = o, r && !o.read && (this.unread = !0)
            }
        }
        return this.messages.sort(TD.util.chirpDescSort), this.calculateAttributes(), s
    }
}, TD.services.TwitterMessageThread.prototype.removeMessage = function (e) {
    var t = this.messageIndex[e];
    return t ? (delete this.messageIndex[e], this.messages = _.select(this.messages, function (t) {
        return t.id !== e
    }), this.calculateAttributes(), this.getDOMChirps().trigger("uiReadStateChange", {}), !0) : !1
}, TD.services.TwitterMessageThread.prototype.getMainUser = function () {
    return this.correspondent
}, TD.services.TwitterMessageThread.prototype.calculateAttributes = function () {
    var e = this.account.getUserID();
    0 !== this.messages.length && (this.messages[0].sender.id == e && (this.replied = !0, this.unread = !1), this.created = this.messages[0].created, _.detect(this.messages, function (t) {
        return t.recipient.id == e
    }), this.messages.length > 0 && (this.text = this.messages[0].text, this.htmlText = this.messages[0].htmlText))
}, TD.services.TwitterMessageThread.prototype.render = function () {
    return TD.ui.template.render("status/message_thread", {
        chirp: this,
        withAvatar: !0
    })
}, TD.services.TwitterMessageThread.prototype.renderThread = function () {
    var e = [];
    return this.messages.forEach(function (t) {
        e.push(t.render())
    }), e.join("")
}, TD.services.TwitterMessageThread.prototype.update = function () {
    return !0
}, TD.services.TwitterMessageThread.prototype.isOwnChirp = function () {
    return !1
}, TD.services.TwitterMessageThread.prototype.getSinceId = function () {
    for (var e = 1, t = 0; this.messages.length > t; t++)
        if (!this.messages[t].isOwnChirp()) {
            e = this.messages[t].getSinceId();
            break
        }
    return e
}, TD.services.TwitterMessageThread.prototype.getUnreadChirps = function (e) {
    var t, i, s = [],
        n = TD.config.internal_build || TD.decider.get(TD.decider.DM_READ_STATE);
    if (n) {
        for (i = 0; this.messages.length > i; i++) t = this.messages[i], t.isOwnChirp() || (t.read || (t.unread = !0, s.push(t)), 0 === i && (this.replied = !1));
        this.replied && (s = [])
    } else
        for (i = 0; this.messages.length > i && (t = this.messages[i], !(e >= t.created.getTime())); i++) t.isOwnChirp() || (s.push(t), 0 === i && (this.unread = !0, this.replied = !1));
    return s
}, TD.services.TwitterMessageThread.prototype.postComment = function (e, t, i) {
    function s() {
        TD.controller.progressIndicator.taskComplete(r), t && t()
    }

    function n(e) {
        TD.controller.progressIndicator.taskFailed(r, e.errors[0].message), i && i()
    }
    var r, o = TD.controller.clients.getClient(this.account.getKey()),
        a = o.create();
    return e.length ? (a.DirectlyTo(this.correspondent.screenName), a.WithMessage(e), r = TD.controller.progressIndicator.addTask(TD.i("Sending...")), a.post(s, n), void 0) : (i(), void 0)
}, TD.services.TwitterMessageThread.prototype.markAsRead = function () {
    var e = TD.controller.clients.getClient(this.account.getKey()),
        t = TD.config.internal_build || TD.decider.get(TD.decider.DM_READ_STATE),
        i = !1;
    this.unread = !1, this.getDOMChirps().removeClass(TD.services.ChirpBase.UNREAD_CLASS).trigger("uiReadStateChange", {});
    var s = function () {}, n = function () {
            this.unread = !0, TD.controller.progressIndicator.addMessage(TD.i("Failed to mark message as read.")), this.getDOMChirps().addClass(TD.services.ChirpBase.UNREAD_CLASS), this._changed()
        };
    t && (i = this.messages.some(function (e) {
        return !e.read
    }), i && e.markMessagesAsRead(this.messages[0].id, this.correspondent.id, s, n.bind(this))), this._changed()
}, TD.services.TwitterMessageThread.prototype.getSenders = function () {
    return [this.correspondent.screenName]
}, TD.services.TwitterUser = function (e) {
    this.account = e
}, TD.services.TwitterUser.MINI_SUFFIX = "_mini", TD.services.TwitterUser.NORMAL_SUFFIX = "_normal", TD.services.TwitterUser.BIGGER_SUFFIX = "_bigger", TD.services.TwitterUser.REASONABLY_SMALL_SUFFIX = "_reasonably_small", TD.services.TwitterUser.NORMAL_SUFFIX_REGEXP = RegExp(TD.services.TwitterUser.NORMAL_SUFFIX + "(?!.*" + TD.services.TwitterUser.NORMAL_SUFFIX + ")"), TD.services.TwitterUser.BIGGER_SUFFIX_REGEXP = RegExp(TD.services.TwitterUser.BIGGER_SUFFIX + "(?!.*" + TD.services.TwitterUser.BIGGER_SUFFIX + ")"), TD.services.TwitterUser.prototype.fromJSONObject = function (e) {
    return this.id = e.id_str, this.screenName = e.screen_name, this.profileImageURL = e.profile_image_url_https, this.avatarSuffixRegex = TD.services.TwitterUser.NORMAL_SUFFIX_REGEXP, TD.util.isRetina() && (this.profileImageURL = this.profileImageURL.replace(this.avatarSuffixRegex, TD.services.TwitterUser.BIGGER_SUFFIX), this.avatarSuffixRegex = TD.services.TwitterUser.BIGGER_SUFFIX_REGEXP), this.name = e.name, this.location = e.location, this.description = e.description, this.entities = e.entities, this.friendsCount = e.friends_count, this.listedCount = e.listed_count, this.followersCount = e.followers_count, this.statusesCount = e.statuses_count, this.favoritesCount = e.favourites_count, this.listedCount = e.listed_count, this.url = e.url, this.isProtected = e["protected"], this.isVerified = e.verified, this.isTranslator = e.is_translator, this.following = e.following, this.lang = e.lang, this._profileBannerURL = e.profile_banner_url ? e.profile_banner_url + "/web" : null, TD.util.isRetina() && this._profileBannerURL && (this._profileBannerURL += "_retina"), e.status && (this.lastStatus = new TD.services.TwitterStatus(this.account).fromJSONObject(e.status), this.lastStatus.user = this), TD.cache.twitterUsers.add(this), this
}, TD.services.TwitterUser.prototype.isSameUser = function (e) {
    var t;
    return t = e instanceof TD.services.TwitterUser ? e.screenName.toLowerCase() : e.toLowerCase(), this.screenName.toLowerCase() === t
}, TD.services.TwitterUser.prototype.isMe = function () {
    return this.account.getUserID() == this.id
}, TD.services.TwitterUser.prototype.reasonablySmallProfileImageURL = function () {
    return this.profileImageURL.replace(this.avatarSuffixRegex, TD.services.TwitterUser.REASONABLY_SMALL_SUFFIX)
}, TD.services.TwitterUser.prototype.biggerProfileImageURL = function () {
    return TD.util.isRetina() ? this.reasonablySmallProfileImageURL() : this.profileImageURL.replace(this.avatarSuffixRegex, TD.services.TwitterUser.BIGGER_SUFFIX)
}, TD.services.TwitterUser.prototype.miniProfileImageURL = function () {
    return TD.util.isRetina() ? this.profileImageURL.replace(this.avatarSuffixRegex, TD.services.TwitterUser.NORMAL_SUFFIX) : this.profileImageURL.replace(this.avatarSuffixRegex, TD.services.TwitterUser.MINI_SUFFIX)
}, TD.services.TwitterUser.prototype.prettyFollowersCount = function () {
    return TD.util.prettyNumber(this.followersCount)
}, TD.services.TwitterUser.prototype.prettyFriendsCount = function () {
    return TD.util.prettyNumber(this.friendsCount)
}, TD.services.TwitterUser.prototype.prettyListedCount = function () {
    return TD.util.prettyNumber(this.listedCount)
}, TD.services.TwitterUser.prototype.prettyStatusesCount = function () {
    return TD.util.prettyNumber(this.statusesCount)
}, TD.services.TwitterUser.prototype.follow = function (e, t, i, s) {
    var n, r = TD.controller.clients.getClient(e.getKey()),
        o = this,
        a = function (e) {
            o.following = !0, s && (n = TD.i("Successfully followed @{{screenName}}", o), TD.controller.progressIndicator.addMessage(n)), t && t(e)
        }, c = function () {
            s && (n = TD.i("Unable to follow @{{screenName}}", o), TD.controller.progressIndicator.addMessage(n)), i && i()
        };
    r.followUser(this.screenName, a, c)
}, TD.services.TwitterUser.prototype.unfollow = function (e, t, i, s) {
    var n, r = TD.controller.clients.getClient(e.getKey()),
        o = this,
        a = function (i) {
            o.removeFromView(e, !0), o.following = !1, s && (n = TD.i("Successfully unfollowed @{{screenName}}", o), TD.controller.progressIndicator.addMessage(n)), t && t(i)
        }, c = function () {
            s && (n = TD.i("Unable to unfollow @{{screenName}}", o), TD.controller.progressIndicator.addMessage(n)), i && i()
        };
    r.unfollowUser(this.screenName, a, c)
}, TD.services.TwitterUser.prototype.unblock = function (e, t, i) {
    var s = TD.controller.clients.getClient(e.getKey());
    s.unblockUser(this.screenName, t, i), $.publish("/user/" + this.screenName + "/unblock", [this.account])
}, TD.services.TwitterUser.prototype.block = function (e, t, i, s) {
    var n, r = this,
        o = TD.controller.clients.getClient(e.getKey()),
        a = function () {
            TD.controller.progressIndicator.addMessage(n), r.following = !1, $.publish("/user/" + r.screenName + "/blocked", [r.account]), r.removeFromView(e, !1), t && TD.controller.stats.spam(r.screenName, r.id, r.account.getUserID())
        };
    $.publish("/user/" + this.screenName + "/block", [this.account]), t ? (o.blockAndReportUser(this.screenName, a, s), n = TD.i("Successfully blocked and reported @{{screenName}}", {
        screenName: this.screenName
    })) : (o.blockUser(this.screenName, a, s), n = TD.i("Successfully blocked @{{screenName}}", {
        screenName: this.screenName
    }))
}, TD.services.TwitterUser.prototype.removeFromView = function (e, t) {
    $.publish("/user/removeTweets", [this.screenName, e.getUserID(), t])
}, TD.services.TwitterUser.prototype.bio = function () {
    var e = this.entities && this.entities.description || {};
    return TD.util.transform(this.description, e)
}, TD.services.TwitterUser.prototype.htmlLocation = function () {
    var e = this.entities && this.entities.location || {};
    return TD.util.transform(this.location, e)
}, TD.services.TwitterUser.prototype.hasLocation = function () {
    return Boolean(this.htmlLocation())
}, TD.services.TwitterUser.prototype.getFollowerURL = function () {
    return "http://twitter.com/" + this.screenName + "/followers"
}, TD.services.TwitterUser.prototype.getFriendURL = function () {
    return "http://twitter.com/" + this.screenName + "/following"
}, TD.services.TwitterUser.prototype.getProfileURL = function () {
    return "http://twitter.com/" + this.screenName
}, TD.services.TwitterUser.prototype.getListedURL = function () {
    return "http://twitter.com/" + this.screenName + "/memberships"
}, TD.services.TwitterUser.prototype.getDisplayURL = function () {
    var e = this.entities;
    return e && e.url && e.url.urls && e.url.urls.length && e.url.urls[0].display_url ? e.url.urls[0].display_url : this.url
}, TD.services.TwitterUser.prototype.profileBannerURL = function () {
    return this._profileBannerURL || "/web/assets/global/backgrounds/td_profile_empty" + (TD.util.isRetina() ? "@2x.jpg" : ".jpg")
}, TD.services.TrendingTopic = function () {}, TD.services.TrendingTopic.prototype.name = "", TD.services.TrendingTopic.prototype.query = "", TD.services.TrendingTopic.prototype.url = "", TD.services.TrendingTopic.prototype.description = "", TD.services.TrendingTopic.prototype.attribution = "", TD.services.TrendingTopic.prototype.created = 0, TD.services.TrendingTopic.prototype.promotedContent = null, TD.services.TrendingTopic.prototype.events = null, TD.services.TrendingTopic.prototype.fromJSONObject = function (e) {
    return this.name = e.name, this.query = e.query, this.promotedContent = e.promoted_content, this.events = e.events, this.created = (new Date).getTime(), this.query = encodeURIComponent(this.name), this.url || (this.url = "http://search.twitter.com/search?q=" + this.query), this.promotedContent && this.promotedContent.description && (this.description = TD.util.escape(this.promotedContent.description)), this
}, TD.services.TrendLocation = function () {}, TD.services.TrendLocation.prototype.PLACE_TYPE_SUPERNAME = 19, TD.services.TrendLocation.prototype.PLACE_TYPE_COUNTRY = 12, TD.services.TrendLocation.prototype.PLACE_TYPE_TOWN = 7, TD.services.TrendLocation.prototype.placeType = null, TD.services.TrendLocation.prototype.name = "", TD.services.TrendLocation.prototype.woeid = -1, TD.services.TrendLocation.prototype.url = "", TD.services.TrendLocation.prototype.countryCode = "", TD.services.TrendLocation.prototype.country = "", TD.services.TrendLocation.prototype.label = "", TD.services.TrendLocation.prototype.sortString = "", TD.services.TrendLocation.prototype.isTown = !1, TD.services.TrendLocation.prototype.fromJSONObject = function (e) {
    switch (this.name = e.name, this.woeid = e.woeid, this.url = e.url, this.countryCode = e.countryCode, this.country = e.country, this.placeType = e.placeType, this.placeType.code) {
    case this.PLACE_TYPE_TOWN:
        this.label = "—" + this.name, this.sortString = this.country + this.name, this.isTown = !0;
        break;
    case this.PLACE_TYPE_SUPERNAME:
        this.label = this.name.toUpperCase(), this.sortString = "";
        break;
    default:
        this.label = this.name, this.sortString = this.name
    }
    return this
}, TD.services.TwitterList = function (e) {
    this.account = e
}, TD.services.TwitterList.prototype.fromJSONObject = function (e) {
    return this.id = e.id_str, this.name = e.name, this.description = e.description, this.slug = e.slug, this.fullName = e.full_name, this.memberCount = e.member_count, this.isPrivate = "private" === e.mode, this.user = new TD.services.TwitterUser(this.account).fromJSONObject(e.user), this
}, TD.services.TwitterList.prototype.isOwnList = function () {
    var e = TD.storage.Account.generateKeyFor("twitter", this.user.id),
        t = TD.storage.accountController.get(e);
    return Boolean(t)
}, TD.services.TwitterSearchParser = function (e) {
    this.query = e, this.terms = [], this.init()
}, TD.services.TwitterSearchParser.PUNCT = RegExp("[" + twttr.txt.regexen.punct.source + "]", "g"), TD.services.TwitterSearchParser.ALLOWED_CHARS = ["@", "#", '"', "-"], TD.services.TwitterSearchParser.isStreamable = function (e) {
    var t = e.match(TD.services.TwitterSearchParser.PUNCT),
        i = _.difference(t, TD.services.TwitterSearchParser.ALLOWED_CHARS);
    return 0 === i.length
}, TD.services.TwitterSearchParser.prototype.PHRASE = "phrase", TD.services.TwitterSearchParser.prototype.NEGATIVE_PHRASE = "negPhrase", TD.services.TwitterSearchParser.prototype.AND = "and", TD.services.TwitterSearchParser.prototype.OR = "or", TD.services.TwitterSearchParser.prototype.query = "", TD.services.TwitterSearchParser.prototype.trackQuery = "", TD.services.TwitterSearchParser.prototype.thePhrase = "", TD.services.TwitterSearchParser.prototype.type = "", TD.services.TwitterSearchParser.prototype.init = function () {
    if (!this.trackQuery) {
        var e, t;
        if (t = "string" == typeof this.query ? TD.services.TwitterSearchParser.extractPhrases(this.query, !1) : this.query, 0 === t.length);
        else if (1 === t.length) this.thePhrase = t[0].toLowerCase(), "-" === this.thePhrase.charAt(0) && -1 === this.thePhrase.indexOf(" ") ? (this.type = this.NEGATIVE_PHRASE, this.thePhrase = this.thePhrase.slice(1), this.trackQuery = "") : (this.type = this.PHRASE, this.trackQuery = this.thePhrase);
        else {
            var i, s = [
                    []
                ],
                n = !0;
            for (i = 0; t.length > i; i++) e = t[i], "OR" !== e ? "AND" !== e && (n ? _.last(s).push(e) : s.push([e]), n = !1) : (_.last(s).push(e), n = !0);
            if (s = _.reject(s, function (e) {
                return _.isEmpty(e)
            }), s.length > 1) {
                for (this.type = this.AND, i = 0; s.length > i; i++) {
                    var r = s[i];
                    r.length > 0 && this.terms.push(new TD.services.TwitterSearchParser(r))
                }
                this.trackQuery = this.calculateANDTrackQuery(s)
            } else
                for (this.type = this.OR, i = 0; s[0].length > i; i++) e = s[0][i], "OR" != e && (this.terms.push(new TD.services.TwitterSearchParser([e])), "-" != e.charAt(0) && (this.trackQuery && (this.trackQuery += ","), this.trackQuery += e))
        }
    }
}, TD.services.TwitterSearchParser.prototype.calculateANDTrackQuery = function (e) {
    for (var t = [""], i = 0; e.length > i; i++) {
        for (var s = e[i], n = [], r = 0; s.length > r; r++) {
            var o = s[r];
            if ("OR" != o)
                if ("-" == o.charAt(0)) n = t;
                else
                    for (var a = 0; t.length > a; a++) {
                        var c = t[a],
                            l = c ? c + " " : "";
                        l += o, n.push(l)
                    }
        }
        t = n
    }
    return t.join(",")
}, TD.services.TwitterSearchParser.extractPhrases = function (e, t) {
    for (var i, s = [], n = e.split('"'), r = 0; n.length > r; r++)
        if (n[r])
            if (1 == r % 2 && n.length - 1 > r) i = n[r].trim(), i && (t && (i = '"' + i + '"'), s.push(i));
            else
                for (var o = n[r].split(" "), a = 0; o.length > a; a++) i = o[a], i = i.trim(), i && s.push(i);
    return s
}, TD.services.TwitterSearchParser.prototype.match = function (e, t) {
    var i, s;
    switch (t || (e = e.toLowerCase()), this.type) {
    case this.PHRASE:
        return -1 !== e.indexOf(this.thePhrase);
    case this.NEGATIVE_PHRASE:
        return -1 === e.indexOf(this.thePhrase);
    case this.AND:
        for (i = 0; this.terms.length > i; i++)
            if (s = this.terms[i], !s.match(e, !0)) return !1;
        return !0;
    case this.OR:
        for (i = 0; this.terms.length > i; i++)
            if (s = this.terms[i], s.match(e, !0)) return !0;
        return !1;
    default:
        return !1
    }
}, TD.services.StreamEngine = klass(function (e, t) {
    this._account = e, this._callback = t, this._url = "", this._state = TD.services.StreamEngine.DISCONNECTED, this._stream = null, this._backoffLimit = 0, this._backoffTimeout = null, this._keepaliveTimeout = null, this._handleData = TD.util.bind(this._handleData, this), this._handleStreamInterruption = TD.util.bind(this._handleStreamInterruption, this), this.connect = _.debounce(this._connect, 50)
}).statics({
    BACKOFF_PERIOD_MIN: 2e4,
    BACKOFF_PERIOD_MAX: 24e4,
    BACKOFF_PERIOD_MAX_EXTENDED: 72e4,
    KEEPALIVE_PERIOD: 9e4,
    XHR_BYTE_LIMIT: 5e7,
    DISCONNECTED: "disconnected",
    CONNECTING: "connecting",
    STREAMING: "streaming",
    DEBUG: !1
}).methods({
    log: function () {
        TD.services.StreamEngine.DEBUG && (console.log((new Date).toUTCString(), ">", this._account.getUsername(), ">", arguments), TD.util.insertLogDivider())
    },
    _connect: function (e) {
        return e === this._url ? (this.log("Connect", e, "Already connecting/connected. Do nothing"), void 0) : (e ? (this.log("Connect", e), this.disconnect(), this._url = e, this._startNewStream()) : (this.log("Connect", e, "Nothing to stream. Disconnecting"), this.disconnect()), void 0)
    },
    disconnect: function () {
        this.log("Disconnect completely"), this._setState(TD.services.StreamEngine.DISCONNECTED), this._disconnectStream(), this._url = "", this._backoffLimit = 0
    },
    isStreaming: function () {
        var e = this._state === TD.services.StreamEngine.STREAMING;
        return this.log("isStreaming", e), e
    },
    _setState: function (e) {
        var t = this._state === TD.services.StreamEngine.STREAMING,
            i = e === TD.services.StreamEngine.STREAMING;
        this._state = e, t !== i && $(document).trigger("dataUserStreamStatus", {
            accountKey: this._account.getKey(),
            streaming: i
        })
    },
    _startNewStream: function () {
        this._disconnectStream(), this.log("Start stream"), this._setState(TD.services.StreamEngine.CONNECTING), this._stream = this._createStreamRequest(), this._stream.goStreaming()
    },
    _disconnectStream: function () {
        this._stream && (this.log("Disconnect stream"), this._stream.onStreaming.disconnect && (this._stream.onStreaming.disconnect(this._handleData), this._stream.onFailure.disconnect(this._handleStreamInterruption)), this._stream.deleteLater(), this._stream = null), clearTimeout(this._backoffTimeout), clearTimeout(this._keepaliveTimeout), this._backoffTimeout = null, this._keepaliveTimeout = null
    },
    _handleData: function (e) {
        var t = this;
        switch (this._state) {
        case TD.services.StreamEngine.DISCONNECTED:
            return;
        case TD.services.StreamEngine.CONNECTING:
            this._setState(TD.services.StreamEngine.STREAMING), this._backoffLimit = 0, this.log("Stream is functioning")
        }
        this._processDataString(e), clearTimeout(this._keepaliveTimeout), this._keepaliveTimeout = setTimeout(function () {
            t._handleStreamInterruption("Keepalive timeout", 0)
        }, TD.services.StreamEngine.KEEPALIVE_PERIOD), TD.util.isWrapperApp() || this._stream.receivedChars > TD.services.StreamEngine.XHR_BYTE_LIMIT && (this.log("Reached XHR byte limit, reconnecting"), this._startNewStream())
    },
    _processDataString: function (e) {
        var t, i, s = 0;
        if (e) {
            t = e.split("\r");
            for (var n = 0; t.length > n; n++) i = _.strip(t[n]), i.length && (s++, this._callback(JSON.parse(i)));
            $(document).trigger("dataReceivedStreamData", {
                numStreamItems: s
            })
        }
    },
    _handleStreamInterruption: function (e, t) {
        switch (this.log("Stream interrupted", e, t), this._state) {
        case TD.services.StreamEngine.DISCONNECTED:
            break;
        case TD.services.StreamEngine.CONNECTING:
            this._disconnectStream(), this._setBackoffTimeout(t);
            break;
        case TD.services.StreamEngine.STREAMING:
            this._startNewStream()
        }
    },
    _setBackoffTimeout: function (e) {
        var t = this;
        this._backoffLimit = Math.max(this._backoffLimit, TD.services.StreamEngine.BACKOFF_PERIOD_MIN), this._backoffLimit *= 2, this._backoffLimit = "420" == e + "" ? Math.min(this._backoffLimit, TD.services.StreamEngine.BACKOFF_PERIOD_MAX_EXTENDED) : Math.min(this._backoffLimit, TD.services.StreamEngine.BACKOFF_PERIOD_MAX);
        var i = this._backoffLimit / 2,
            s = i + Math.ceil(Math.random() * i);
        this.log("Set backoff timeout", "" + s / 1e3 + "s"), this._setState(TD.services.StreamEngine.CONNECTING), this._backoffTimeout = setTimeout(function () {
            t.log("Backoff complete, attempting reconnect"), t._startNewStream()
        }, s)
    },
    _createStreamRequest: function () {
        var e;
        return e = TD.util.isWrapperApp() ? deck.signedRequestFactory("GET", this._url, "", "", "", this._account.getOAuthToken(), this._account.getTokenSecret()) : new TD.net.StreamRequest(this._url, this._account), e.onStreaming.connect(this._handleData), e.onFailure.connect(this._handleStreamInterruption), e
    }
}), TD.services.TwitterAction = function (e) {
    this.account = e
}, TD.services.TwitterAction.FAVORITE = "favorite", TD.services.TwitterAction.RETWEET = "retweet", TD.services.TwitterAction.MENTION = "mention", TD.services.TwitterAction.REPLY = "reply", TD.services.TwitterAction.FOLLOW = "follow", TD.services.TwitterAction.LIST_MEMBER_ADDED = "list_member_added", TD.services.TwitterAction.LIST_CREATED = "list_created", TD.services.TwitterAction.UNFAVORITE = "unfavorite", TD.services.TwitterAction.LIST_MEMBER_REMOVED = "list_member_removed", TD.services.TwitterAction.LIST_DESTROYED = "list_destroyed", TD.services.TwitterAction.UNFOLLOW = "unfollow", TD.services.TwitterAction.processStreamAction = function (e, t) {
    var i = TD.services.TwitterAction._getActionConstructor(e.event);
    return new i(t).fromJSONObject(e, null, !0)
}, TD.services.TwitterAction.processRESTAction = function (e, t) {
    for (var i = TD.services.TwitterAction._getActionConstructor(e.action), s = e.sources, n = e.targets_size > 0 ? e.targets : [void 0], r = e.target_objects_size > 0 ? e.target_objects : [void 0], o = [], a = 0; s.length > a; a++)
        if (e.action !== TD.services.TwitterAction.RETWEET)
            for (var c = 0; n.length > c; c++)
                for (var l = 0; r.length > l; l++)(e.action !== TD.services.TwitterAction.LIST_MEMBER_ADDED || s[a].id === r[l].user.id) && o.push([e, s[a], n[c], r[l]]);
        else {
            if (r[0].user.id != t.getUserID()) continue;
            o.push([e, s[a], n[a], r[0]])
        }
    var u = _.map(o, function (s) {
        return new i(t).fromJSONObject(e, s, !1)
    });
    return u
}, TD.services.TwitterAction._getActionConstructor = function (e) {
    switch (e) {
    case TD.services.TwitterAction.MENTION:
    case TD.services.TwitterAction.REPLY:
        return TD.services.TwitterActionMention;
    case TD.services.TwitterAction.FAVORITE:
    case TD.services.TwitterAction.UNFAVORITE:
        return TD.services.TwitterActionFavorite;
    case TD.services.TwitterAction.RETWEET:
        return TD.services.TwitterActionRetweet;
    case TD.services.TwitterAction.FOLLOW:
    case TD.services.TwitterAction.UNFOLLOW:
        return TD.services.TwitterActionFollow;
    case TD.services.TwitterAction.LIST_MEMBER_ADDED:
    case TD.services.TwitterAction.LIST_MEMBER_REMOVED:
        return TD.services.TwitterActionListMemberAdded;
    case TD.services.TwitterAction.LIST_CREATED:
    case TD.services.TwitterAction.LIST_DESTROYED:
        return TD.services.TwitterActionListCreated;
    default:
        return TD.services.TwitterAction
    }
}, TD.services.TwitterAction.prototype = new TD.services.ChirpBase, TD.services.TwitterAction.prototype.getChirpType = function () {
    return this.action
}, TD.services.TwitterAction.prototype.action = null, TD.services.TwitterAction.prototype.maxPosition = null, TD.services.TwitterAction.prototype.minPosition = null, TD.services.TwitterAction.msFudge = 0, TD.services.TwitterAction.prototype.fromJSONObject = function (e, t, i) {
    return i ? this.fromStreamData(e) : this.fromRESTData.apply(this, t), this.created = TD.util.parseDateString(e.created_at), this.fudgeCreatedTime(this.created), this.maxPosition = e.max_position || "" + this.created.getTime(), this.minPosition = e.min_position || "" + this.created.getTime(), this.generateInternalID(), this.generateText(), this
}, TD.services.TwitterAction.prototype.fromRESTData = function () {
    throw "TwitterAction.fromRESTData not implemented"
}, TD.services.TwitterAction.prototype.fromStreamData = function () {
    throw "TwitterAction.fromStreamData not implemented"
}, TD.services.TwitterAction.prototype.generateInternalID = function () {
    throw "TwitterAction.generateInternalID not implemented"
}, TD.services.TwitterAction.prototype.generateText = function () {}, TD.services.TwitterAction.prototype.render = function () {
    throw "TwitterAction.render not implemented"
}, TD.services.TwitterAction.prototype.renderNotification = function () {
    throw "TwitterAction.renderNotification not implemented"
}, TD.services.TwitterAction.prototype.isAboutYou = function () {
    throw "TwitterAction.isAboutYou not implemented"
}, TD.services.TwitterAction.prototype.isOwnChirp = function () {
    throw "TwitterAction.isOwnChirp not implemented"
}, TD.services.TwitterAction.prototype.getChirpURL = function () {
    return "http://twitter.com/activity"
}, TD.services.TwitterAction.prototype.getCreator = function () {
    throw "TwitterAction.getCreator not implemented"
}, TD.services.TwitterAction.prototype.getRelatedTweet = function () {
    return null
}, TD.services.TwitterAction.prototype.getSenders = function () {
    return [this.getCreator().screenName]
}, TD.services.TwitterAction.prototype.isFromVerifiedUser = function () {
    return this.getCreator().isVerified
}, TD.services.TwitterAction.prototype.getTargetUsers = function () {
    throw "TwitterAction.getTargetUsers not implemented"
}, TD.services.TwitterActionOnTweet = function (e) {
    this.account = e
}, TD.services.TwitterActionOnTweet.prototype = new TD.services.TwitterAction, TD.services.TwitterActionOnTweet.prototype.sourceUser = null, TD.services.TwitterActionOnTweet.prototype.targetTweet = null, TD.services.TwitterActionOnTweet.prototype.generateInternalID = function () {
    this.id = [this.action, this.sourceUser.id, this.targetTweet.id].join("_")
}, TD.services.TwitterActionOnTweet.prototype.isAboutYou = function () {
    return this.targetTweet.user.id == this.account.getUserID()
}, TD.services.TwitterActionOnTweet.prototype.isOwnChirp = function () {
    return this.sourceUser.id == this.account.getUserID()
}, TD.services.TwitterActionOnTweet.prototype.getRelatedTweet = function () {
    return this.targetTweet
}, TD.services.TwitterActionOnTweet.prototype.getCreator = function () {
    return this.sourceUser
}, TD.services.TwitterActionOnTweet.prototype.render = function (e) {
    e = e || {};
    var t = TD.settings.getDisplaySensitiveMedia();
    return TD.ui.template.render("status/tweet_activity_in_stream", {
        chirp: this,
        icon: this.iconClass,
        withTweetActions: !0,
        withFooter: !0,
        withAvatar: !0,
        withMediaPreview: e.mediaPreviewSize !== TD.vo.Column.MEDIA_PREVIEW_OFF,
        isMediaPreviewSmall: e.mediaPreviewSize === TD.vo.Column.MEDIA_PREVIEW_SIZE_SMALL,
        isMediaPreviewLarge: e.mediaPreviewSize === TD.vo.Column.MEDIA_PREVIEW_SIZE_LARGE,
        mediaPreviewSrc: function () {
            return this.getMediaSrcForPreviewSize(e.mediaPreviewSize)
        },
        thumbSizeClass: TD.services.TwitterMedia.thumbSizeClasses[e.mediaPreviewSize],
        isPossiblySensitive: this.possiblySensitive && !t,
        withLinebreaks: !0
    })
}, TD.services.TwitterActionOnTweet.prototype.renderNotification = function () {
    return TD.ui.template.render("status/tweet_activity_in_box", {
        chirp: this,
        icon: this.iconClass,
        withAvatar: !0
    })
}, TD.services.TwitterActionOnTweet.prototype.getGrowlData = function () {
    return {
        title: this.text,
        img: this.targetTweet.user.profileImageURL,
        text: $("<div>" + this.targetTweet.htmlText + "</div>").text()
    }
}, TD.services.TwitterActionOnTweet.prototype.getMedia = function () {
    return this.getRelatedTweet().getMedia()
}, TD.services.TwitterActionOnTweet.prototype.getTargetUsers = function () {
    return [this.targetTweet.user]
}, TD.services.TwitterActionRetweet = function (e) {
    this.account = e
}, TD.services.TwitterActionRetweet.prototype = new TD.services.TwitterActionOnTweet, TD.services.TwitterActionRetweet.prototype.action = TD.services.TwitterAction.RETWEET, TD.services.TwitterActionRetweet.prototype.iconClass = "icon-retweeted", TD.services.TwitterActionRetweet.prototype.retweet = null, TD.services.TwitterActionRetweet.prototype.fromRESTData = function (e, t, i, s) {
    this.sourceUser = new TD.services.TwitterUser(this.account).fromJSONObject(t), this.retweet = new TD.services.TwitterStatus(this.account).fromJSONObject(i), this.targetTweet = new TD.services.TwitterStatus(this.account).fromJSONObject(s)
}, TD.services.TwitterActionRetweet.prototype.fromStreamData = function (e) {
    this.sourceUser = new TD.services.TwitterUser(this.account).fromJSONObject(e.source), this.retweet = new TD.services.TwitterStatus(this.account).fromJSONObject(e.target), this.targetTweet = this.retweet.retweetedStatus
}, TD.services.TwitterActionRetweet.prototype.fromRetweet = function (e) {
    return this.sourceUser = e.user, this.retweet = e, this.targetTweet = e.retweetedStatus, this.created = new Date(e.created), this.fudgeCreatedTime(this.created), this.generateInternalID(), this.generateText(), this.maxPosition = this.minPosition = "" + this.created.getTime(), this
}, TD.services.TwitterActionRetweet.prototype.generateText = function () {
    var e = TD.i("{{{user}}} retweeted", null, !0);
    this.text = TD.ui.template.toHtml(e, {
        user: this.sourceUser.name
    }), this.htmlText = TD.ui.template.toHtml(e, {
        user: TD.ui.template.render("text/user_link_fullname", this.sourceUser)
    })
}, TD.services.TwitterActionMention = function (e) {
    this.account = e
}, TD.services.TwitterActionMention.prototype = new TD.services.TwitterActionOnTweet, TD.services.TwitterActionMention.prototype.action = TD.services.TwitterAction.MENTION, TD.services.TwitterActionMention.prototype.iconClass = "icon-mentioned", TD.services.TwitterActionMention.prototype.fromRESTData = function (e, t, i, s) {
    this.targetTweet = "reply" === e.action ? new TD.services.TwitterStatus(this.account).fromJSONObject(i) : new TD.services.TwitterStatus(this.account).fromJSONObject(s), this.sourceUser = new TD.services.TwitterUser(this.account).fromJSONObject(t)
}, TD.services.TwitterActionMention.prototype.fromStreamData = function (e) {
    return this.sourceUser = e.user, this.targetTweet = e, this.created = new Date(e.created), this.fudgeCreatedTime(this.created), this.generateInternalID(), this.generateText(), this.maxPosition = this.minPosition = "" + this.created.getTime(), this
}, TD.services.TwitterActionMention.prototype.generateText = function () {
    var e = TD.i("{{{user}}} mentioned you", null, !0);
    this.text = TD.ui.template.toHtml(e, {
        user: this.sourceUser.name
    }), this.htmlText = TD.ui.template.toHtml(e, {
        user: TD.ui.template.render("text/user_link_fullname", this.sourceUser)
    })
}, TD.services.TwitterActionListCreated = function (e) {
    this.account = e
}, TD.services.TwitterActionListCreated.prototype = new TD.services.TwitterAction, TD.services.TwitterActionListCreated.prototype.action = TD.services.TwitterAction.LIST_CREATED, TD.services.TwitterActionListCreated.prototype.owner = null, TD.services.TwitterActionListCreated.prototype.list = null, TD.services.TwitterActionListCreated.prototype.fromRESTData = function (e, t, i) {
    this.owner = new TD.services.TwitterUser(this.account).fromJSONObject(t), this.list = new TD.services.TwitterList(this.account).fromJSONObject(i)
}, TD.services.TwitterActionListCreated.prototype.fromStreamData = function (e) {
    this.owner = new TD.services.TwitterUser(this.account).fromJSONObject(e.source), this.list = new TD.services.TwitterList(this.account).fromJSONObject(e.target_object)
}, TD.services.TwitterActionListCreated.prototype.generateInternalID = function () {
    this.id = [this.action, this.owner.id, this.list.id].join("_")
}, TD.services.TwitterActionListCreated.prototype.generateText = function () {
    var e = TD.i("{{{owner}}} created the list {{{list}}}.", null, !0);
    this.text = TD.ui.template.toHtml(e, {
        owner: this.owner.name,
        list: this.list.fullName
    }), this.htmlText = TD.ui.template.toHtml(e, {
        owner: TD.ui.template.render("text/user_link_fullname", this.owner),
        list: TD.ui.template.render("text/list_link", this.list)
    })
}, TD.services.TwitterActionListCreated.prototype.isOwnChirp = function () {
    return this.owner.id == this.account.getUserID()
}, TD.services.TwitterActionListCreated.prototype.isAboutYou = function () {
    return !1
}, TD.services.TwitterActionListCreated.prototype.getCreator = function () {
    return this.owner
}, TD.services.TwitterActionListCreated.prototype.getTargetUsers = function () {
    return []
}, TD.services.TwitterActionListCreated.prototype.render = function () {
    var e = {
        chirp: this
    };
    return TD.ui.template.render("status/list_activity", e)
}, TD.services.TwitterActionListCreated.prototype.renderNotification = function () {
    return this.render(null)
}, TD.services.TwitterActionListCreated.prototype.getGrowlData = function () {
    return {
        title: this.text,
        img: null,
        text: this.list.description
    }
}, TD.services.TwitterActionListMemberAdded = function (e) {
    this.account = e
}, TD.services.TwitterActionListMemberAdded.prototype = new TD.services.TwitterAction, TD.services.TwitterActionListMemberAdded.prototype.action = TD.services.TwitterAction.LIST_MEMBER_ADDED, TD.services.TwitterActionListMemberAdded.prototype.owner = null, TD.services.TwitterActionListMemberAdded.prototype.added = null, TD.services.TwitterActionListMemberAdded.prototype.list = null, TD.services.TwitterActionListMemberAdded.prototype.fromRESTData = function (e, t, i, s) {
    this.owner = new TD.services.TwitterUser(this.account).fromJSONObject(t), this.added = new TD.services.TwitterUser(this.account).fromJSONObject(i), this.list = new TD.services.TwitterList(this.account).fromJSONObject(s)
}, TD.services.TwitterActionListMemberAdded.prototype.fromStreamData = function (e) {
    this.owner = new TD.services.TwitterUser(this.account).fromJSONObject(e.source), this.added = new TD.services.TwitterUser(this.account).fromJSONObject(e.target), this.list = new TD.services.TwitterList(this.account).fromJSONObject(e.target_object)
}, TD.services.TwitterActionListMemberAdded.prototype.generateInternalID = function () {
    this.id = [this.action, this.owner.id, this.added.id, this.list.id].join("_")
}, TD.services.TwitterActionListMemberAdded.prototype.generateText = function () {
    var e;
    e = this.isAboutYou() ? TD.i("{{{owner}}} added you to the list {{{list}}}.", null, !0) : TD.i("{{{owner}}} added {{{added}}} to the list {{{list}}}.", null, !0), this.text = TD.ui.template.toHtml(e, {
        owner: this.owner.name,
        added: this.added.name,
        list: this.list.fullName
    }), this.htmlText = TD.ui.template.toHtml(e, {
        owner: TD.ui.template.render("text/user_link_fullname", this.owner),
        added: TD.ui.template.render("text/user_link_fullname", this.added),
        list: TD.ui.template.render("text/list_link", this.list)
    })
}, TD.services.TwitterActionListMemberAdded.prototype.isOwnChirp = function () {
    return this.owner.id == this.account.getUserID()
}, TD.services.TwitterActionListMemberAdded.prototype.isAboutYou = function () {
    return this.added.id == this.account.getUserID()
}, TD.services.TwitterActionListMemberAdded.prototype.getCreator = function () {
    return this.owner
}, TD.services.TwitterActionListMemberAdded.prototype.getTargetUsers = function () {
    return [this.added]
}, TD.services.TwitterActionListMemberAdded.prototype.render = function () {
    var e = {
        chirp: this
    };
    return TD.ui.template.render("status/list_activity", e)
}, TD.services.TwitterActionListMemberAdded.prototype.renderNotification = function () {
    return this.render(null)
}, TD.services.TwitterActionListMemberAdded.prototype.getGrowlData = function () {
    return {
        title: this.text,
        img: null,
        text: this.list.description
    }
}, TD.services.TwitterActionMultiListMemberAdded = function (e) {
    this.account = e
}, TD.services.TwitterActionMultiListMemberAdded.prototype = new TD.services.TwitterAction, TD.services.TwitterActionMultiListMemberAdded.prototype.action = "multi_list_member_added", TD.services.TwitterActionMultiListMemberAdded.prototype.owner = null, TD.services.TwitterActionMultiListMemberAdded.prototype.added = null, TD.services.TwitterActionMultiListMemberAdded.prototype.lists = null, TD.services.TwitterActionMultiListMemberAdded.prototype.fromRESTData = function (e) {
    this.owner = new TD.services.TwitterUser(this.account).fromJSONObject(e.sources[0]), this.added = _.map(e.targets, function (e) {
        return new TD.services.TwitterUser(this.account).fromJSONObject(e)
    }), this.lists = _.map(e.target_objects, function (e) {
        return new TD.services.TwitterList(this.account).fromJSONObject(e)
    })
}, TD.services.TwitterActionMultiListMemberAdded.prototype.generateInternalID = function () {
    var e = _.pluck(this.added, "id").sort().join("-"),
        t = _.pluck(this.lists, "id").sort().join("-");
    this.id = [this.action, this.owner.id, e, t].join("_")
}, TD.services.TwitterActionMultiListMemberAdded.prototype.generateText = function () {
    var e = TD.i("{{{owner}}} added {{{added}}} to the lists {{{lists}}}.", null, !0),
        t = [],
        i = [],
        s = [],
        n = [];
    _.each(this.added, function (e) {
        t.push(e.name), i.push(TD.ui.template.render("text/user_link_fullname", e))
    }), _.each(this.lists, function (e) {
        s.push(e.fullName), n.push(TD.ui.template.render("text/list_link", e))
    }), this.text = TD.ui.template.toHtml(e, {
        owner: this.owner.name,
        added: t.join(", "),
        lists: s.join(", ")
    }), this.htmlText = TD.ui.template.toHtml(e, {
        owner: TD.ui.template.render("text/user_link_fullname", this.owner),
        added: i.join(", "),
        lists: n.join(", ")
    })
}, TD.services.TwitterActionMultiListMemberAdded.prototype.isOwnChirp = function () {
    return !1
}, TD.services.TwitterActionMultiListMemberAdded.prototype.isAboutYou = function () {
    return !1
}, TD.services.TwitterActionMultiListMemberAdded.prototype.getCreator = function () {
    return this.owner
}, TD.services.TwitterActionMultiListMemberAdded.prototype.getTargetUsers = function () {
    return this.added
}, TD.services.TwitterActionMultiListMemberAdded.prototype.render = function () {
    var e = {
        chirp: this
    };
    return TD.ui.template.render("status/action_list", e)
}, TD.services.TwitterActionMultiListMemberAdded.prototype.renderNotification = function () {
    return this.render(null)
}, TD.services.TwitterActionMultiListMemberAdded.prototype.getGrowlData = function () {
    return {
        title: null,
        img: null,
        text: this.text
    }
}, TD.services.TwitterActionFavorite = function (e) {
    this.account = e
}, TD.services.TwitterActionFavorite.prototype = new TD.services.TwitterActionOnTweet, TD.services.TwitterActionFavorite.prototype.action = TD.services.TwitterAction.FAVORITE, TD.services.TwitterActionFavorite.prototype.iconClass = "icon-favorited", TD.services.TwitterActionFavorite.prototype.fromRESTData = function (e, t, i) {
    this.sourceUser = new TD.services.TwitterUser(this.account).fromJSONObject(t), this.targetTweet = new TD.services.TwitterStatus(this.account).fromJSONObject(i)
}, TD.services.TwitterActionFavorite.prototype.fromStreamData = function (e) {
    this.sourceUser = new TD.services.TwitterUser(this.account).fromJSONObject(e.source), this.targetTweet = new TD.services.TwitterStatus(this.account).fromJSONObject(e.target_object)
}, TD.services.TwitterActionFavorite.prototype.generateText = function () {
    var e;
    e = this.isAboutYou() ? TD.i("{{{user}}} favorited", null, !0) : TD.i("{{{user}}} favorited", null, !0), this.text = TD.ui.template.toHtml(e, {
        user: this.sourceUser.name
    }), this.htmlText = TD.ui.template.toHtml(e, {
        user: TD.ui.template.render("text/user_link_fullname", this.sourceUser)
    })
}, TD.services.TwitterActionFollow = function (e) {
    this.account = e
}, TD.services.TwitterActionFollow.prototype = new TD.services.TwitterAction, TD.services.TwitterActionFollow.prototype.action = TD.services.TwitterAction.FOLLOW, TD.services.TwitterActionFollow.prototype.following = null, TD.services.TwitterActionFollow.prototype.followed = null, TD.services.TwitterActionFollow.prototype.fromRESTData = function (e, t, i) {
    this.following = new TD.services.TwitterUser(this.account).fromJSONObject(t), this.followed = new TD.services.TwitterUser(this.account).fromJSONObject(i)
}, TD.services.TwitterActionFollow.prototype.fromStreamData = function (e) {
    this.following = new TD.services.TwitterUser(this.account).fromJSONObject(e.source), this.followed = new TD.services.TwitterUser(this.account).fromJSONObject(e.target)
}, TD.services.TwitterActionFollow.prototype.generateInternalID = function () {
    this.id = [this.action, this.following.id, this.followed.id].join("_")
}, TD.services.TwitterActionFollow.prototype.generateText = function () {
    var e;
    e = this.isAboutYou() ? TD.i("{{{user}}} followed you", null, !0) : TD.i("{{{user}}} followed", null, !0), this.text = TD.ui.template.toHtml(e, {
        user: this.following.name
    }), this.htmlText = TD.ui.template.toHtml(e, {
        user: TD.ui.template.render("text/user_link_fullname", this.following)
    })
}, TD.services.TwitterActionFollow.prototype.render = function () {
    return TD.ui.template.render("status/follow_activity_in_stream", {
        data: this,
        withUserMenu: !0,
        withUserBio: !0
    })
}, TD.services.TwitterActionFollow.prototype.renderNotification = function () {
    return TD.ui.template.render("status/follow_activity_in_box", {
        isAboutYou: this.isAboutYou(),
        data: this
    })
}, TD.services.TwitterActionFollow.prototype.isAboutYou = function () {
    return this.followed.id == this.account.getUserID()
}, TD.services.TwitterActionFollow.prototype.isOwnChirp = function () {
    return this.following.id == this.account.getUserID()
}, TD.services.TwitterActionFollow.prototype.getGrowlData = function () {
    var e = this.getRelatedUser();
    return {
        title: this.text,
        img: e.profileImageURL,
        text: "@" + e.screenName + "\n" + e.description
    }
}, TD.services.TwitterActionFollow.prototype.getTargetUsers = function () {
    return [this.followed]
}, TD.services.TwitterActionFollow.prototype.getRelatedUser = function () {
    return this.isAboutYou() ? this.following : this.followed
}, TD.services.TwitterActionFollow.prototype.getCreator = function () {
    return this.following
}, TD.services.TwitterActionFollow.prototype.getFilterableText = function () {
    return this.followed.screenName
}, TD.services.TwitterList = function (e) {
    this.account = e
}, TD.services.TwitterList.prototype.fromJSONObject = function (e) {
    return this.id = e.id_str, this.name = e.name, this.description = e.description, this.slug = e.slug, this.fullName = e.full_name, this.memberCount = e.member_count, this.isPrivate = "private" === e.mode, this.user = new TD.services.TwitterUser(this.account).fromJSONObject(e.user), this
}, TD.services.TwitterList.prototype.isOwnList = function () {
    var e = TD.storage.Account.generateKeyFor("twitter", this.user.id),
        t = TD.storage.accountController.get(e);
    return Boolean(t)
}, TD.services.TweetDeckClient = function () {
    var e = {}, t = TD.core.defer,
        i = TD.sync.tdapi;
    e.type = "tweetdeck", e.statusMenuTemplate = "", e.scheduledUpdates = [];
    var s = function () {
        for (var t = e.scheduledUpdates.length, i = 0; t > i; i++) TD.controller.feedManager.deleteChirp(e.scheduledUpdates[i].id);
        e.scheduledUpdates = []
    }, n = function (e) {
            var t = new TD.services.ScheduledStatus;
            return t.fromJSONObject(e), t
        }, r = function (e) {
            var t, i, s, r, o = {};
            for (t = 0, r = e.length; r > t; t++)
                if (i = n(e[t]), i.update) {
                    o[i.token] || (o[i.token] = new TD.services.ScheduledGroup(i.token));
                    try {
                        o[i.token].addUpdate(i)
                    } catch (a) {
                        console.log("Error processing scheduled update", i, a);
                        continue
                    }
                }
            return s = _.values(o), s = _.select(s, function (e) {
                return e.pendingCount || e.retryingCount || e.failedCount
            })
        }, o = function () {
            var e = TD.storage.columnController.getColumnsByType("scheduled"),
                t = e[0];
            if (t) TD.controller.feedScheduler.refreshColumn(t.getKey());
            else if (!TD.settings.getScheduledColAdded()) {
                var i = TD.controller.columnManager.makeColumnFor("scheduled", "tweetdeck");
                TD.controller.columnManager.addColumnToUI(i), TD.settings.setScheduledColAdded(!0)
            }
        }, a = function () {
            return i.isLoggedIn() ? i.drequest("/scheduled_update") : t.fail()
        };
    return e.removeScheduleGroup = function (e) {
        return i.isLoggedIn() ? i.drequest("/scheduled_update/" + e, i.getReq({
            method: "DELETE"
        })) : t.fail()
    }, e.scheduleGroup = function (s, n, r) {
        if (!i.isLoggedIn()) return t.fail();
        for (var a = TD.util.iso8601(n), c = 0; s.length > c; c++) s[c].timestamp = a;
        var l = i.requestWithBody("/scheduled_update", "POST", s);
        return r && l.addCallback(function () {
            return e.removeScheduleGroup(r)
        }), l.addCallback(o), l
    }, e.refreshFeed = function (t, n, r, o) {
        if (!i.isLoggedIn()) return o && o(), void 0;
        if (n) return [];
        var a = e.getScheduledUpdates();
        return a.addCallback(function (t) {
            return s(), e.scheduledUpdates = t, e.scheduledUpdates
        }), a.addCallback(r), o && a.addErrback(o), a
    }, e.getScheduledUpdates = function () {
        var e = a();
        return e.addCallback(function (e) {
            return e ? r(e) : void 0
        }), e
    }, e.forgotPassword = function (e) {
        var t = {
            type: "DELETE",
            headers: {
                Authorization: "Basic " + TD.core.base64.encode(e + ":junk")
            }
        };
        return i.drequest("/password", t)
    }, e.feedIsStreaming = function () {
        return !1
    }, e
}, TD.services.ScheduledStatus = function () {}, TD.services.ScheduledStatus.prototype.chirpType = TD.services.ChirpBase.SCHEDULED_STATUS, TD.services.ScheduledStatus.prototype.status = null, TD.services.ScheduledStatus.prototype.service = "", TD.services.ScheduledStatus.prototype.token = "", TD.services.ScheduledStatus.prototype.created = "", TD.services.ScheduledStatus.prototype.timestamp = "", TD.services.ScheduledStatus.prototype.uid = "", TD.services.ScheduledStatus.prototype.update = null, TD.services.ScheduledStatus.prototype.meta = null, TD.services.ScheduledStatus.prototype.resultID = null, TD.services.ScheduledStatus.prototype.profileUrl = "", TD.services.ScheduledStatus.prototype.isTwitter = !1, TD.services.ScheduledStatus.prototype.username = "", TD.services.ScheduledStatus.prototype.avatar = "", TD.services.ScheduledStatus.prototype.errorReason = "", TD.services.ScheduledStatus.prototype.fromJSONObject = function (e) {
    return this.status = e.status, this.service = e.service, this.token = e.token, this.created = e.created, this.timestamp = e.timestamp, this.uid = e.uid, this.update = e.update, this.meta = e.meta, this.resultID = e.result_id, this.username = e.meta.user.name, this.errorReason = e.reason, e.meta.user.avatar_url && (this.avatar = TD.util.transformTwitterAvatar(e.meta.user.avatar_url, "mini")), "twitter" === e.service && (this.isTwitter = !0), this._generateProfileUrl(), this
}, TD.services.ScheduledStatus.prototype._generateProfileUrl = function () {
    switch (this.service) {
    case "twitter":
        this.meta && this.meta.user && (this.profileUrl = "http://twitter.com/" + this.meta.user.name);
        break;
    case "facebook":
        this.profileUrl = "http://facebook.com/profile.php?id=" + this.uid;
        break;
    case "foursquare":
    case "foursquare2":
        this.profileUrl = "http://foursquare.com/user/" + this.uid
    }
}, TD.services.ScheduledGroup = function (e) {
    this.token = e, this.id = e, this.updates = [], this.errorReason = "", this.reasonText = null
}, TD.services.ScheduledGroup.prototype = new TD.services.ChirpBase, TD.services.ScheduledGroup.prototype.chirpType = TD.services.ChirpBase.SCHEDULED_GROUP, TD.services.ScheduledGroup.prototype.token = "", TD.services.ScheduledGroup.prototype.updates = null, TD.services.ScheduledGroup.prototype.time = null, TD.services.ScheduledGroup.prototype.pendingCount = 0, TD.services.ScheduledGroup.prototype.failedCount = 0, TD.services.ScheduledGroup.prototype.retryingCount = 0, TD.services.ScheduledGroup.prototype.avatarURL = null, TD.services.ScheduledGroup.prototype.service = null, TD.services.ScheduledGroup.prototype.title = "", TD.services.ScheduledGroup.prototype.location = "", TD.services.ScheduledGroup.prototype.latitude = 0 / 0, TD.services.ScheduledGroup.prototype.longitude = 0 / 0, TD.services.ScheduledGroup.prototype.mapURL = null, TD.services.ScheduledGroup.prototype.htmlText = "", TD.services.ScheduledGroup.prototype.twitterInReplyToStatusID = null, TD.services.ScheduledGroup.prototype.twitterDMTargetScreenName = null, TD.services.ScheduledGroup.prototype.twitterPlaceID = null, TD.services.ScheduledGroup.prototype.facebookWallPostTargetID = null, TD.services.ScheduledGroup.prototype.facebookPageID = null, TD.services.ScheduledGroup.prototype.foursquareVenueID = null, TD.services.ScheduledGroup.prototype.buzzRequest = null, TD.services.ScheduledGroup.prototype.addUpdate = function (e) {
    if (!this.time) {
        var t = e.timestamp; - 1 === t.indexOf("+") && (t += "+00:00"), this.time = TD.util.parseISO8601(t), this.created = this.time
    }
    switch (e.service) {
    case "twitter":
        this.twitterPlaceID = this.twitterPlaceID || e.update.place_id, this.twitterInReplyToStatusID = this.twitterInReplyToStatusID || e.update.in_reply_to_status_id, "direct_message" === e.update.type && (this.twitterDMTargetScreenName = this.twitterDMTargetScreenName || e.update.screen_name);
        break;
    case "facebook":
        this.facebookWallPostTargetID = this.facebookWallPostTargetID || e.update.target_id;
        break;
    case "fbpage":
        this.facebookPageID = this.facebookPageID || e.update.uid;
        break;
    case "foursquare":
        this.foursquareVenueID = this.foursquareVenueID || e.update.vid, this.foursquareVenueID = this.foursquareVenueID || e.update.venueId
    }
    if (!this.text)
        if ("twitter" === e.service && "direct_message" === e.update.type) this.text = e.update.body, this.title = TD.i("Direct message to {{1}}", {
            1: e.update.screen_name
        });
        else if ("facebook" === e.service || "fbpage" === e.service) this.text = e.update.message, "stream" === e.update.type && e.update.target_id && (this.title = e.meta && e.meta.target && e.meta.target.name ? TD.i("Wall post to {{1}}", {
        1: e.meta.target.name
    }) : TD.i("Wall post to {{1}}", {
        1: "#" + e.update.target_id
    }));
    else if ("foursquare" === e.service) this.text = e.update.shout, e.meta && e.meta.location ? this.title = TD.i("Check-in to {{1}}", {
        1: e.meta.location
    }) : this.foursquareVenueID && (this.title = TD.i("Check-in to {{1}}", {
        1: "#" + this.foursquareVenueID
    }));
    else if ("buzz" === e.service) {
        try {
            this.buzzRequest = JSON.parse(e.update.body)
        } catch (i) {
            var s = $(e.update.body).find("content").text();
            this.buzzRequest = {
                data: {
                    object: {
                        content: s
                    }
                }
            }
        }
        this.text = this.buzzRequest.data.object.content
    } else this.text = e.update.body;
    this.text && (this.htmlText = TD.util.transform(this.text)), !this.location && e.meta && (this.latitude = e.meta.geolat, this.longitude = e.meta.geolong, e.meta.location && (this.location = e.meta.location, this.mapURL = "http://maps.google.com/?q=" + encodeURIComponent(this.location)), this.latitude && this.longitude && (this.location || (this.location = this.latitude.toPrecision(6) + "," + this.longitude.toPrecision(6)), this.mapURL = "http://maps.google.com/?q=" + this.latitude + "," + this.longitude)), e.meta && e.meta.user && (this.avatarURL = e.meta.user.avatar_url), this.service = e.service, "pending" === e.status ? this.pendingCount++ : "retrying" === e.status ? this.retryingCount++ : "failed" === e.status && (this.errorReason = e.errorReason, this.failedCount++), this.updates.push(e)
}, TD.services.ScheduledGroup.prototype.render = function () {
    return this.errorReason && (this.reasonText = this.getErrorMessageFromReason(this.errorReason)), TD.ui.template.render("status/tweet_scheduled", {
        items: [this]
    })
}, TD.services.ScheduledGroup.prototype.edit = function () {
    TD.ui.compose.editScheduledUpdate(this)
}, TD.services.ScheduledGroup.prototype.destroy = function () {
    var e = this,
        t = _.uniqueId(),
        i = {
            id: t,
            title: TD.i("Deleting scheduled update!"),
            message: TD.i("Are you sure you want to delete this scheduled update?"),
            okLabel: TD.i("Delete"),
            cancelLabel: TD.i("Cancel")
        }, s = function (i, n) {
            if (n.id === t && ($(document).off("uiConfirmationAction", s), n.result)) {
                TD.controller.feedManager.deleteChirp(e.id);
                var r = TD.controller.clients.getTDClient().removeScheduleGroup(e.token);
                r.addBoth(function () {
                    var e = TD.storage.columnController.getColumnsByType("scheduled"),
                        t = e[0];
                    t && TD.controller.feedScheduler.refreshColumn(t.getKey())
                })
            }
        };
    $(document).on("uiConfirmationAction", s).trigger("uiShowConfirmationDialog", i)
}, TD.services.ScheduledGroup.prototype.prettyTime = function () {
    return TD.util.prettyTimeString(this.time)
}, TD.services.ScheduledGroup.prototype.isOwnChirp = function () {
    return !0
}, TD.services.ScheduledGroup.prototype.getErrorMessageFromReason = function (e) {
    var t = TD.i("Tweet not sent: ");
    switch (e) {
    case "duplicate":
        t += TD.i("You already tweeted that.");
        break;
    default:
        t += TD.i("Unknown error.")
    }
    return t
}, TD.services.ScheduledGroup.prototype.getSenders = function () {
    return _.pluck(this.updates, "username")
}, TD.services.TwitterClient = function (e) {
    var t = this;
    this.type = "twitter", this.STREAMING_BASE_URL = "https://userstream.twitter.com/1.1/user.json", this.streamEngine = new TD.services.StreamEngine(e, _.bind(this.processStreamData, this)), this.firstStreamConnect = !0, this.cachedStreamingQueries = {}, this.friends = {}, this.blocks = {}, this.retweetBlocks = {}, this.messageThreadCache = {}, this.publishQueue = {}, this.flushPending = !1, this.searches = [], this.FEED_TYPES = {
        home: "home",
        mentions: "mentions",
        direct: "direct",
        favorites: "favorites",
        list: "list",
        search: "search",
        usertweets: "usertweets",
        usertimeline: "usertimeline",
        interactions: "interactions",
        networkactivity: "networkactivity",
        useractivity: "useractivity"
    }, this.streamingFeeds = {}, this.STREAMING_FEED_TYPES = {
        home: !0,
        mentions: !0,
        direct: !0,
        favorites: !0,
        search: !0,
        interactions: !0,
        networkactivity: !0
    }, this.ACTIVITY_FEED_TYPES = {
        interactions: !0,
        networkactivity: !0,
        useractivity: !0
    }, this.ACTIVITY_EVENT_TYPES = {
        favorite: !0,
        follow: !0,
        list_member_added: !0,
        list_created: !0,
        retweet: !0
    }, this.DELETE_ACTIVITY_EVENT_TYPES = {
        unfavorite: !0,
        unfollow: !0,
        list_member_removed: !0,
        list_destroyed: !0
    }, this.STREAM_LIST_EVENTS = {
        list_created: !0,
        list_updated: !0,
        list_destroyed: !0,
        list_member_added: !0,
        list_member_removed: !0,
        list_user_subscribed: !0,
        list_user_unsubscribed: !0
    }, this.ERRORS = {
        AUTHENTICATION_FAILED: {
            twitterErrorCode: 32,
            message: TD.i("Could not authenticate you")
        },
        404: {
            twitterErrorCode: 34,
            message: TD.i("We could not complete your request because the tweet may be protected or deleted")
        },
        SUSPENDED_USER: {
            twitterErrorCode: 63,
            message: TD.i("This user has been suspended")
        },
        SUSPENDED_ACCOUNT: {
            twitterErrorCode: 64,
            message: TD.i("Your account is suspended and is not permitted to access this feature")
        },
        RATE_LIMITED: {
            twitterErrorCode: 88,
            message: TD.i("Sorry, you've made too many requests so Twitter has temporarily limited your access. Try again in a few minutes")
        },
        OVER_CAPACITY: {
            twitterErrorCode: 130,
            message: TD.i("Twitter is temporarily over capacity. Please try again later")
        },
        INTERNAL_ERROR: {
            twitterErrorCode: 131,
            message: TD.i("There's something wrong at Twitter. Please try again later")
        },
        USER_AUTHENTICATION_FAILED: {
            twitterErrorCode: 135,
            message: TD.i("Could not authenticate you")
        },
        NOT_FOLLOWING: {
            twitterErrorCode: 150,
            message: TD.i("You can't send a message to a user who is not following you")
        },
        DUPLICATE_MESSAGE: {
            twitterErrorCode: 151,
            message: TD.i("Whoops! You already said that...")
        },
        DUPLICATE_TWEET: {
            twitterErrorCode: 187,
            message: TD.i("You already tweeted that")
        },
        INVALID_SEARCH_QUERY: {
            twitterErrorCode: 195,
            message: TD.i("Invalid search query")
        },
        PROTECTED_TWEET: {
            message: TD.i("Sorry, we could not perform your retweet because the tweet is protected")
        },
        DUPLICATE_RETWEET: {
            message: TD.i("Whoops! You've already retweeted that...")
        },
        USER_DOES_NOT_EXIST: {
            message: TD.i("That user does not exist")
        },
        UNKNOWN: {
            message: TD.i("An unknown error occurred. Please try again shortly.")
        }
    }, this.streamWarningCodes = {
        FOLLOWS_OVER_LIMIT: "FOLLOWS_OVER_LIMIT"
    }, this.getError = function (e, t, i, s) {
        var n;
        return e.code ? 34 === e.code ? n = s.status && 0 === s.status.indexOf("DM") ? this.ERRORS.USER_DOES_NOT_EXIST : i.indexOf("show.json") > -1 ? this.ERRORS.USER_DOES_NOT_EXIST : this.ERRORS["404"] : 89 === e.code ? $(document).trigger("dataTwitterAccountAccessDenied", {
            account: this.oauth.account
        }) : 64 === e.code ? ($(document).trigger("dataTwitterAccountSuspended", {
            account: this.oauth.account
        }), n = this.ERRORS.SUSPENDED_ACCOUNT) : n = _.find(this.ERRORS, function (t) {
            return t.twitterErrorCode === e.code
        }) : 403 === t.status && (e.indexOf("retweet") > -1 ? n = this.ERRORS.DUPLICATE_RETWEET : e.indexOf("Share validations failed") > -1 && (n = this.ERRORS.PROTECTED_TWEET)), n || (n = this.ERRORS.UNKNOWN), TD.controller.stats.apiErrorResponse(t.status, e.code, i), n
    }, this.oauth = TD.controller.auth.create("twitter", e), this.getLists(null, function (e) {
        _.each(e, TD.cache.lists.add)
    }), this.getSavedSearches(function (e) {
        t.searches = e
    }), this.populateBlockList(), this.populateRetweetBlockList(), this.refreshFeed = function (e, i, s, n, r, o) {
        var a, c, l, u, d = 1,
            h = null,
            p = e.feed,
            m = p.getType(),
            f = p.getMetadata(),
            g = this.streamEngine.isStreaming(),
            T = this.ACTIVITY_FEED_TYPES[m],
            v = m === this.FEED_TYPES.usertweets,
            y = 0,
            _ = function (e, t, i) {
                return t > e.length - 1 ? e : e.substr(0, t) + i + e.substr(t + 1)
            };
        if (o) d = 1;
        else if (e.chirpArray && e.chirpArray.length)
            if (i)
                if (h = e.getOldestChirp().id, T) h = e.getOldestChirp().minPosition || "" + e.getOldestChirp().created.getTime(), h -= 1;
                else if ("string" == typeof h)
            for (var y = h.length - 1; y >= 0; y--) {
                if (a = h.charAt(y), "0" !== a) {
                    a = Number(a) - 1 + "", h = _(h, y, a);
                    break
                }
                h = _(h, y, 9)
            } else h--;
        else if (T) d = e.chirpArray[0].maxPosition || "" + e.chirpArray[0].created.getTime();
        else if (v) d = e.chirpArray[0].getSinceId();
        else
            for (u = e.chirpArray.length; 1 === d && u > y;) e.chirpArray[y].isOwnChirp() || (d = e.chirpArray[y].getSinceId()), y++;
        var D = t.STREAMING_FEED_TYPES[p.getType()];
        switch (p.getType()) {
        case "favorites":
            D = !f.id || f.id === this.oauth.account.getUserID();
            break;
        case "search":
            D = TD.services.TwitterSearchParser.isStreamable(f.term)
        }
        var b = r || !g || 1 === d;
        if (D && (this.streamingFeeds[p.getKey()] = p, !b)) return n(), this;
        switch (p.getType()) {
        case this.FEED_TYPES.home:
            t.getHomeTimeline(d, h, null, s, n);
            break;
        case this.FEED_TYPES.direct:
            t.getMessageTimelines(d, h, null, s, n);
            break;
        case this.FEED_TYPES.favorites:
            t.getFavoritesTimeline(d, f.id, h, null, s, n);
            break;
        case this.FEED_TYPES.list:
            t.getListTimeline(f.listId, f.screenName, f.slug, d, h, null, s, n);
            break;
        case this.FEED_TYPES.search:
            f.baseQuery && f.searchFilterData ? (c = new TD.vo.SearchFilter(f.searchFilterData), l = [f.baseQuery, c.getQueryString()].join(" ")) : l = f.term, t.getSearchTimeline(l, d, h, null, s, n);
            break;
        case this.FEED_TYPES.usertweets:
            t.getProfileTimeline(f.id, null, d, h, s, n);
            break;
        case this.FEED_TYPES.usertimeline:
            t.getUserTimeline(f.id, d, h, null, s, n);
            break;
        case this.FEED_TYPES.mentions:
            t.getMentionsTimeline(d, h, null, s, n);
            break;
        case this.FEED_TYPES.interactions:
            t.getInteractionsTimeline(d, h, null, s, n);
            break;
        case this.FEED_TYPES.networkactivity:
            t.getNetworkActivityTimeline(d, h, null, s, n);
            break;
        default:
            n()
        }
        return this
    }, this.feedIsStreaming = function (e) {
        return this.streamingFeeds[e] && this.streamEngine.isStreaming()
    }, this.create = function () {
        return new TD.services.TwitterComposer(this)
    }, this._checkUserStream = _.bind(this.checkUserStream, this), this.subscription = $.subscribe("/storage/client/settings/use_stream", this._checkUserStream)
}, TD.services.TwitterClient.prototype.API_BASE_URL = TD.config.TWITTER_API_ROOT || "https://api.twitter.com/1.1/", TD.services.TwitterClient.prototype.makeTwitterCall = function (e, t, i, s, n, r, o) {
    var a = this;
    t = t || {}, t.include_entities = 1, t.include_user_entities = 1, t.include_cards = 1, t.send_error_codes = 1;
    var c = TD.net.ajax.request(e, {
        params: t,
        account: this.oauth.account,
        method: i
    });
    return c.addCallback(function (e) {
        var t = e.data;
        if (s) try {
            t = s.call(a, t)
        } catch (i) {
            return console.log("Error processing Twitter data", t, i), r(i), void 0
        }
        n(t), this.processRateLimitData(o, e.xhr)
    }.bind(this)), c.addErrback(function (n) {
        var c, l = [],
            u = n.req || {};
        u.responseText && (c = JSON.parse(u.responseText), c && c.errors && ("string" == typeof c.errors ? l.push(a.getError(c.errors, u, e, t)) : _.each(c.errors, function (i) {
            l.push(a.getError(i, u, e, t))
        }))), $(document).trigger("dataTwitterApiError", {
            request: {
                url: e,
                params: t,
                method: i,
                processor: s
            },
            response: {
                xhr: u,
                ts: "",
                error: n.msg
            },
            errors: l
        }), r && (u.errors = l, r(u, "", n.msg, l)), this.processRateLimitData(o, u)
    }.bind(this)), c
}, TD.services.TwitterClient.prototype.processRateLimitData = function (e, t) {
    if (e) {
        var i = {
            rateLimitRemaining: parseInt(t.getResponseHeader("x-rate-limit-remaining"), 10),
            rateLimitTotal: parseInt(t.getResponseHeader("x-rate-limit-limit"), 10),
            rateLimitReset: parseInt(t.getResponseHeader("x-rate-limit-reset"), 10)
        };
        i.rateLimitTotal && i.rateLimitReset && $(document).trigger("dataRateLimit", {
            feedType: e,
            accountKey: this.oauth.account.getKey(),
            rateLimitData: i
        })
    }
}, TD.services.TwitterClient.prototype.processTweet = function (e) {
    return new TD.services.TwitterStatus(this.oauth.account).fromJSONObject(e)
}, TD.services.TwitterClient.prototype.processDM = function (e) {
    return new TD.services.TwitterDirectMessage(this.oauth.account).fromJSONObject(e)
}, TD.services.TwitterClient.prototype.processMessages = function (e, t) {
    var i = {}, s = [],
        n = this;
    return _.each(e, function (e) {
        var t = e.getCorrespondent(),
            s = n.messageThreadCache[t.id],
            r = i[t.id];
        s || (s = new TD.services.TwitterMessageThread(n.oauth.account, t), n.messageThreadCache[t.id] = s), r || (r = [], i[t.id] = r), r.push(e)
    }), _.each(i, function (e, t) {
        var i = n.messageThreadCache[t],
            r = i.addMessages(e);
        r && s.push(i)
    }), t && this.publishChirpsInternal("publish", "direct", s), s.sort(TD.util.chirpDescSort)
}, TD.services.TwitterClient.prototype.deleteMessage = function (e) {
    var t = [],
        i = [],
        s = this;
    _.each(this.messageThreadCache, function (s) {
        s.removeMessage(e) && (0 === s.messages.length ? i.push(s) : t.push(s))
    }), _.each(i, function (e) {
        delete s.messageThreadCache[e.id], TD.controller.feedManager.deleteChirp(e.id)
    }), this.publishChirpsInternal("publish", "direct", t)
}, TD.services.TwitterClient.prototype.processPlaces = function (e) {
    return e.result.places
}, TD.services.TwitterClient.prototype.processTimeline = function (e) {
    var t, i;
    if (!e.length) return [];
    for (t = e.length; t--;) i = e[t], i = i.sender ? this.processDM(i) : this.processTweet(i), e[t] = i;
    return e
}, TD.services.TwitterClient.prototype.processTrends = function (e) {
    for (var t, i = {
            locations: e[0].locations,
            trends: []
        }, s = e[0].trends, n = 0; s.length > n; n++) t = (new TD.services.TrendingTopic).fromJSONObject(s[n]), i.trends.push(t);
    return i
}, TD.services.TwitterClient.prototype.processTrendLocations = function (e) {
    function t(e, t) {
        var i = e.sortString,
            s = t.sortString;
        return s > i ? -1 : i > s ? 1 : 0
    }
    var i, s, n = [];
    for (s = 0; e.length > s; s++) i = (new TD.services.TrendLocation).fromJSONObject(e[s]), n.push(i);
    return n.sort(t)
}, TD.services.TwitterClient.prototype.processList = function (e) {
    return new TD.services.TwitterList(this.oauth.account).fromJSONObject(e)
}, TD.services.TwitterClient.prototype.processLists = function (e) {
    return _.map(e, _.bind(this.processList, this))
}, TD.services.TwitterClient.prototype.processUser = function (e) {
    return new TD.services.TwitterUser(this.oauth.account).fromJSONObject(e)
}, TD.services.TwitterClient.prototype.processUsers = function (e) {
    for (var t = [], i = 0; e.length > i; i++) t.push(this.processUser(e[i]));
    return t
}, TD.services.TwitterClient.prototype.processActions = function (e) {
    for (var t = [], i = 0; e.length > i; i++) {
        var s = e[i];
        if ("list_member_added" === s.action && s.targets_size > 1 && s.target_objects_size > 1) {
            var n = new TD.services.TwitterActionMultiListMemberAdded(this.oauth.account);
            n.fromJSONObject(s, [s], !1), t.push(n)
        } else t = t.concat(TD.services.TwitterAction.processRESTAction(s, this.oauth.account))
    }
    return t
}, TD.services.TwitterClient.prototype.showUser = function (e, t, i, s) {
    var n = {};
    e ? n.user_id = e : n.screen_name = t, this.makeTwitterCall(this.API_BASE_URL + "users/show.json", n, "GET", this.processUser, i, s)
}, TD.services.TwitterClient.prototype.getUsersByIds = function (e, t, i) {
    var s = {
        user_id: e.join(",")
    };
    this.makeTwitterCall(this.API_BASE_URL + "users/lookup.json", s, "POST", this.processUsers, t, i)
}, TD.services.TwitterClient.prototype.followUser = function (e, t, i) {
    this.makeTwitterCall(this.API_BASE_URL + "friendships/create.json", {
        screen_name: e
    }, "POST", this.processUser, t, i)
}, TD.services.TwitterClient.prototype.unfollowUser = function (e, t, i) {
    this.makeTwitterCall(this.API_BASE_URL + "friendships/destroy.json", {
        screen_name: e
    }, "POST", this.processUser, t, i)
}, TD.services.TwitterClient.prototype.typeaheadSearch = function (e, t, i) {
    var s = function (i) {
        t(i, e)
    };
    if (!e.query && !e.prefetch) throw Error("Typeahead API needs a query");
    this.makeTwitterCall(this.API_BASE_URL + "search/typeahead.json", {
        q: e.query,
        count: e.count || 10,
        prefetch: e.prefetch ? !0 : !1
    }, "GET", null, s, i)
}, TD.services.TwitterClient.prototype.userSearch = function (e, t, i) {
    var s = this,
        n = function (t) {
            var i, n, r = e.toLowerCase();
            for (t = s.processUsers(t), i = 0; t.length > i; i++)
                if (n = t[i], n.screenName.toLowerCase() == r && 0 !== i) {
                    t.splice(i, 1), t = [n].concat(t);
                    break
                }
            return t
        };
    this.makeTwitterCall(this.API_BASE_URL + "users/search.json", {
        q: e
    }, "GET", n, t, i)
}, TD.services.TwitterClient.prototype.getRetweetedBy = function (e, t, i, s, n) {
    var r = {
        count: t || 12,
        page: i || 1
    };
    this.makeTwitterCall(this.API_BASE_URL + "statuses/" + e + "/retweeted_by.json", r, "GET", this.processUsers, s, n)
}, TD.services.TwitterClient.prototype.showFriendship = function (e, t, i, s, n) {
    var r = {
        source_id: e
    };
    null !== t ? r.target_id = t : null !== i && (r.target_screen_name = i), this.makeTwitterCall(this.API_BASE_URL + "friendships/show.json", r, "GET", null, s, n)
}, TD.services.TwitterClient.prototype.showFriendshipForScreenName = function (e, t, i, s) {
    this.makeTwitterCall(this.API_BASE_URL + "friendships/show.json", {
        source_id: e,
        target_screen_name: t
    }, "GET", null, i, s)
}, TD.services.TwitterClient.prototype.blockUser = function (e, t, i) {
    this.makeTwitterCall(this.API_BASE_URL + "blocks/create.json", {
        screen_name: e
    }, "POST", this.processUser, t, i)
}, TD.services.TwitterClient.prototype.unblockUser = function (e, t, i) {
    this.makeTwitterCall(this.API_BASE_URL + "blocks/destroy.json", {
        screen_name: e
    }, "POST", this.processUser, t, i)
}, TD.services.TwitterClient.prototype.blockAndReportUser = function (e, t, i) {
    this.makeTwitterCall(this.API_BASE_URL + "users/report_spam.json", {
        screen_name: e
    }, "POST", this.processUser, t, i)
}, TD.services.TwitterClient.prototype.flagTweet = function (e, t, i) {
    this.makeTwitterCall(this.API_BASE_URL + "statuses/flag_possibly_sensitive.json", {
        id: e
    }, "POST", null, t, i)
}, TD.services.TwitterClient.prototype.getList = function (e, t, i, s, n) {
    var r = {};
    e ? r.list_id = e : (r.slug = i, r.owner_screen_name = t), this.makeTwitterCall(this.API_BASE_URL + "lists/show.json", r, "GET", this.processList, s, n)
}, TD.services.TwitterClient.prototype.createList = function (e, t, i, s, n) {
    var r = {
        name: e,
        description: t || "",
        mode: i ? "private" : "public"
    }, o = function (e) {
            TD.cache.lists.add(e), s(e)
        };
    this.makeTwitterCall(this.API_BASE_URL + "lists/create.json", r, "POST", this.processList, o, n)
}, TD.services.TwitterClient.prototype.updateList = function (e, t, i, s, n, r) {
    var o = {
        list_id: e,
        name: t,
        description: i || "",
        mode: s ? "private" : "public"
    }, a = function (e) {
            TD.cache.lists.add(e), n(e)
        };
    this.makeTwitterCall(this.API_BASE_URL + "lists/update.json", o, "POST", this.processList, a, r)
}, TD.services.TwitterClient.prototype.destroyList = function (e, t, i) {
    var s = function (e) {
        TD.cache.lists.purge(e.id), t(e)
    };
    this.makeTwitterCall(this.API_BASE_URL + "lists/destroy.json", {
        list_id: e
    }, "POST", this.processList, s, i)
}, TD.services.TwitterClient.prototype.getListMembers = function (e, t, i, s) {
    var n = this,
        r = function (e) {
            e.users = n.processUsers(e.users), i(e)
        };
    _.isUndefined(t) && (t = -1), this.makeTwitterCall(this.API_BASE_URL + "lists/members.json", {
        list_id: e,
        skip_status: 1,
        cursor: t
    }, "GET", null, r, s)
}, TD.services.TwitterClient.prototype.subscribeToList = function (e, t, i) {
    var s = function (e) {
        TD.cache.lists.add(e), t(e)
    };
    this.makeTwitterCall(this.API_BASE_URL + "lists/subscribers/create.json", {
        list_id: e
    }, "POST", !0, this.processList, s, i)
}, TD.services.TwitterClient.prototype.addUserToList = function (e, t, i, s) {
    var n = function (e) {
        TD.cache.lists.add(e), i(e)
    };
    this.makeTwitterCall(this.API_BASE_URL + "lists/members/create.json", {
        screen_name: t,
        list_id: e
    }, "POST", this.processList, n, s)
}, TD.services.TwitterClient.prototype.addUsersToList = function (e, t, i, s) {
    var n = function (e) {
        TD.cache.lists.add(e), i(e)
    };
    this.makeTwitterCall(this.API_BASE_URL + "lists/members/create_all.json", {
        screen_name: t.join(","),
        list_id: e
    }, "POST", this.processList, n, s)
}, TD.services.TwitterClient.prototype.removeUserFromList = function (e, t, i, s) {
    var n = function (e) {
        TD.cache.lists.add(e), i(e)
    };
    this.makeTwitterCall(this.API_BASE_URL + "lists/members/destroy.json", {
        screen_name: t,
        list_id: e
    }, "POST", this.processList, n, s)
}, TD.services.TwitterClient.prototype.getBlockIDs = function (e, t) {
    this.makeTwitterCall(this.API_BASE_URL + "blocks/ids.json", {
        stringify_ids: !0
    }, "GET", null, e, t)
}, TD.services.TwitterClient.prototype.getNoRetweetIDs = function (e, t) {
    this.makeTwitterCall(this.API_BASE_URL + "friendships/no_retweets/ids.json", null, "GET", null, e, t)
}, TD.services.TwitterClient.prototype.getTweetSummary = function (e, t, i) {
    var s = {};
    this.makeTwitterCall(this.API_BASE_URL + "statuses/" + e + "/activity/summary.json", s, "GET", null, t, i)
}, TD.services.TwitterClient.prototype.getEmbeddedTweet = function (e, t, i, s, n, r) {
    var o;
    if (!e) throw Error("getEmbeddedTweet: tweetID is a required parameter");
    o = {
        id: e,
        partner: "tweetdeck"
    }, t && (o.hide_thread = t), i && (o.hide_media = i), s && (o.maxwidth = s), this.makeTwitterCall(this.API_BASE_URL + "statuses/oembed.json", o, "GET", null, n, r)
}, TD.services.TwitterClient.prototype.translateTweet = function (e, t, i, s) {
    var n;
    if (!e) throw Error("translateTweet: tweetID is a required parameter");
    if (!t) throw Error("translateTweet: destLang is a required parameter");
    n = {
        id: e,
        dest: t
    }, this.makeTwitterCall(this.API_BASE_URL + "translations/show.json", n, "GET", null, i, s)
}, TD.services.TwitterClient.prototype.getFollowingFollowersOf = function (e, t, i) {
    var s;
    if (!e) throw Error("getFollowingFollowersOf: screenName is a required parameter");
    s = {
        screen_name: e
    }, this.makeTwitterCall("https://api.twitter.com/users/following_followers_of.json", s, "GET", null, t, i)
}, TD.services.TwitterClient.prototype.getHomeTimeline = function (e, t, i, s, n) {
    this.getTimeline("statuses/home_timeline.json", e, t, i, s, n, {}, this.FEED_TYPES.home)
}, TD.services.TwitterClient.prototype.getUserTimeline = function (e, t, i, s, n, r) {
    var o = {
        user_id: e
    };
    this.getTimeline("statuses/following_timeline.json", t, i, s, n, r, o, this.FEED_TYPES.usertimeline)
}, TD.services.TwitterClient.prototype.getMentionsTimeline = function (e, t, i, s, n) {
    this.getTimeline("statuses/mentions_timeline.json", e, t, i, s, n, {}, this.FEED_TYPES.mentions)
}, TD.services.TwitterClient.prototype.getInteractionsTimeline = function (e, t, i, s, n) {
    this.getActivityTimeline("activity/about_me.json", e, t, i, s, n, {}, this.FEED_TYPES.interactions)
}, TD.services.TwitterClient.prototype.getNetworkActivityTimeline = function (e, t, i, s, n) {
    this.getActivityTimeline("activity/by_friends.json", e, t, i, s, n, {}, this.FEED_TYPES.networkactivity)
}, TD.services.TwitterClient.prototype.getActivityTimeline = function (e, t, i, s, n, r, o) {
    o = o || {}, i && (o.max_id = i), Number(t) > 1 && (o.since_id = t), o.count = s || 200, o.skip_aggregation = !0, this.makeTwitterCall(this.API_BASE_URL + e, o, "GET", this.processActions, n, r)
}, TD.services.TwitterClient.prototype.getMessageTimelines = function (e, t, i, s, n) {
    function r(e) {
        a++, c++, l = l.concat(e), 2 === a && s(u.processMessages(l, !1))
    }

    function o() {
        a++, 2 === a && (c > 0 ? s(u.processMessages(l, !1)) : n.apply(null, arguments))
    }
    var a = 0,
        c = 0,
        l = [],
        u = this;
    1 == e && (this.messageThreadCache = {}), this.getDMTimeline(e, t, null, r, o), this.getSentDMTimeline(e, t, null, r, o)
}, TD.services.TwitterClient.prototype.getDMTimeline = function (e, t, i, s, n) {
    this.getTimeline("direct_messages.json", e, t, i, s, n, {}, this.FEED_TYPES.direct)
}, TD.services.TwitterClient.prototype.getSentDMTimeline = function (e, t, i, s, n) {
    this.getTimeline("direct_messages/sent.json", e, t, i, s, n)
}, TD.services.TwitterClient.prototype.getFavoritesTimeline = function (e, t, i, s, n, r) {
    var o = {};
    t && (o.user_id = t), this.getTimeline("favorites/list.json", e, i, s, n, r, o, this.FEED_TYPES.favorites)
}, TD.services.TwitterClient.prototype.getListTimeline = function (e, t, i, s, n, r, o, a) {
    var c = "lists/statuses.json",
        l = {
            include_rts: 1
        };
    e ? l.list_id = e : (l.owner_screen_name = t, l.slug = i), this.getTimeline(c, s, n, r, o, a, l, this.FEED_TYPES.list)
}, TD.services.TwitterClient.prototype.getProfileTimeline = function (e, t, i, s, n, r) {
    var o = "statuses/user_timeline.json",
        a = {
            include_rts: 1
        };
    e && e !== this.oauth.account.getUserID() && (a.user_id = e), this.getTimeline(o, i, s, t, n, r, a, this.FEED_TYPES.usertweets)
}, TD.services.TwitterClient.prototype.getSearchTimeline = function (e, t, i, s, n, r) {
    var o, a = {
            count: s || 200,
            q: e,
            result_type: "recent"
        }, c = this;
    o = c.API_BASE_URL + "search/tweets.json";
    var l = function (e) {
        return c.processTimeline(e.statuses)
    }, u = function (e) {
            e && e.errors && e.errors[0] === this.ERRORS.INVALID_SEARCH_QUERY ? n([]) : r.apply(null, arguments)
        }.bind(this);
    i && (a.max_id = i), t && 1 != t && (a.since_id = t), this.makeTwitterCall(o, a, "GET", l, n, u, this.FEED_TYPES.search)
}, TD.services.TwitterClient.prototype.getTimeline = function (e, t, i, s, n, r, o, a) {
    var c = {
        since_id: t || 1,
        count: s || 200,
        include_my_retweet: 1
    }, l = "";
    l = _.startsWith(e, "https://") ? e : this.API_BASE_URL + e, i && (c.max_id = i), o && _.extend(c, o), this.makeTwitterCall(l, c, "GET", this.processTimeline, n, r, a)
}, TD.services.TwitterClient.prototype.pendingConversation = {}, TD.services.TwitterClient.prototype.getConversation = function (e) {
    var t = this;
    if (!this.pendingConversation[e]) {
        var i = function (i) {
            delete t.pendingConversation[e];
            var s = {
                ancestors: [],
                descendants: []
            }, n = !1;
            i.forEach(function (t) {
                n ? s.descendants.push(t) : t.id === e ? n = !0 : s.ancestors.push(t)
            }), $.publish("/tweets/conversation/" + e, [s])
        }, s = function () {
                delete t.pendingConversation[e];
                var i = {
                    ancestors: [],
                    descendants: []
                };
                $.publish("/tweets/conversation/" + e, [i])
            };
        this.pendingConversation[e] = !0, this.makeTwitterCall(this.API_BASE_URL + "conversation/show.json", {
            id: e
        }, "GET", this.processTimeline, i, s)
    }
}, TD.services.TwitterClient.prototype.destroy = function (e, t, i) {
    this.makeTwitterCall(this.API_BASE_URL + "statuses/destroy/:id.json".replace(":id", e), {}, "POST", this.processTweet, t, i)
}, TD.services.TwitterClient.prototype.show = function (e, t, i) {
    this.makeTwitterCall(this.API_BASE_URL + "statuses/show.json", {
        id: e
    }, "GET", this.processTweet, t, i)
}, TD.services.TwitterClient.prototype.update = function (e, t, i, s, n, r, o) {
    var a = {
        status: e
    };
    a.in_reply_to_status_id = t, a.lat = i, a["long"] = s, a.place_id = n, this.makeTwitterCall(this.API_BASE_URL + "statuses/update.json", a, "POST", this.processTweet, r, o)
}, TD.services.TwitterClient.prototype.getLists = function (e, t, i) {
    var s = {};
    e && (s.screen_name = e), this.makeTwitterCall(this.API_BASE_URL + "lists/list.json", s, "GET", this.processLists, t, i)
}, TD.services.TwitterClient.prototype.getListMemberships = function (e, t, i, s) {
    var n = {}, r = this;
    e && (n.screen_name = e), t && (n.filter_to_owned_lists = 1);
    var o = function (e) {
        return r.processLists(e.lists)
    };
    this.makeTwitterCall(this.API_BASE_URL + "lists/memberships.json", n, "GET", o, i, s)
}, TD.services.TwitterClient.prototype.getSavedSearches = function (e, t) {
    var i = {};
    this.makeTwitterCall(this.API_BASE_URL + "saved_searches/list.json", i, "GET", null, e, t)
}, TD.services.TwitterClient.prototype.favorite = function (e, t, i) {
    var s = this,
        n = function (e) {
            s.updateFavoriteInternal(e, !0), t(e)
        };
    this.makeTwitterCall(this.API_BASE_URL + "favorites/create.json", {
        id: e
    }, "POST", this.processTweet, n, i)
}, TD.services.TwitterClient.prototype.unfavorite = function (e, t, i) {
    var s = this,
        n = function (e) {
            s.updateFavoriteInternal(e, !1), t(e)
        };
    this.makeTwitterCall(this.API_BASE_URL + "favorites/destroy.json", {
        id: e
    }, "POST", this.processTweet, n, i)
}, TD.services.TwitterClient.prototype.destroyDM = function (e, t, i) {
    this.makeTwitterCall(this.API_BASE_URL + "direct_messages/destroy.json", {
        id: e
    }, "POST", this.processDM, t, i)
}, TD.services.TwitterClient.prototype.markMessagesAsRead = function (e, t, i, s) {
    var n = {
        last_message_id: e
    };
    t && (n.sender_id = t), this.makeTwitterCall(this.API_BASE_URL + "direct_messages/read.json", n, "POST", null, i, s)
}, TD.services.TwitterClient.prototype.geoSearch = function (e, t, i, s, n, r, o) {
    var a = {};
    t && (a.lat = t), i && (a["long"] = i), s && (a.accuracy = s), e && (a.query = e), a.granularity = n || "neighborhood", this.makeTwitterCall(this.API_BASE_URL + "geo/search.json", a, "GET", this.processPlaces, r, o)
}, TD.services.TwitterClient.prototype.getTrends = function (e, t, i) {
    e = e || 1, this.makeTwitterCall(this.API_BASE_URL + "trends/place.json", {
        id: e
    }, "GET", this.processTrends, t, i)
}, TD.services.TwitterClient.prototype.getTrendLocations = function (e, t) {
    this.makeTwitterCall(this.API_BASE_URL + "trends/available.json", null, "GET", this.processTrendLocations, e, t)
}, TD.services.TwitterClient.prototype.updateFavoriteInternal = function (e, t) {
    e = e.retweetedStatus ? e.retweetedStatus : e, e.setFavorite(t);
    var i = t ? "publish" : "remove";
    this.publishChirpsInternal(i, "favorites", [e])
}, TD.services.TwitterClient.prototype.removeAction = function (e) {
    var t = TD.services.TwitterAction.processStreamAction(e, this.oauth.account);
    return t.isAboutYou() ? this.publishChirpsInternal("remove", "interactions", [t]) : t.isOwnChirp() || this.publishChirpsInternal("remove", "networkactivity", [t]), t
}, TD.services.TwitterClient.prototype.publishAction = function (e) {
    var t = TD.services.TwitterAction.processStreamAction(e, this.oauth.account),
        i = function (e) {
            return this.blocks[e.id]
        };
    this.blocks[t.getCreator().id] || _.some(t.getTargetUsers(), i, this) || (t.isAboutYou() ? this.publishChirpsInternal("publish", "interactions", [t]) : t.isOwnChirp() || this.publishChirpsInternal("publish", "networkactivity", [t]))
}, TD.services.TwitterClient.prototype.queueChirpsForDispatch = function (e, t) {
    var i = this;
    this.publishQueue[e] = (this.publishQueue[e] || []).concat(t), this.flushPending || (this.flushPending = !0, _.defer(function () {
        _.each(i.publishQueue, function (e, t) {
            var i = TD.controller.feedManager.getPoller(t);
            i && i.acceptChirps(e)
        }), i.publishQueue = {}, i.flushPending = !1
    }))
}, TD.services.TwitterClient.prototype.publishChirpsInternal = function (e, t, i, s) {
    var n, r;
    n = TD.storage.Feed.generateKeyFor(this.oauth.account.getKey(), t, s), "publish" == e ? this.queueChirpsForDispatch(n, i) : "remove" == e && (r = TD.controller.feedManager.getPoller(n), r && _.each(i, function (e) {
        r.removeChirp(e.id)
    }))
}, TD.services.TwitterClient.prototype.populateBlockList = function () {
    this.getBlockIDs(function (e) {
        var t, i = e.ids;
        for (this.blocks = {}, t = 0; i.length > t; t++) this.blocks[i[t]] = !0
    }.bind(this))
}, TD.services.TwitterClient.prototype.populateRetweetBlockList = function () {
    this.getNoRetweetIDs(function (e) {
        var t;
        for (this.retweetBlocks = {}, t = 0; e.length > t; t++) this.retweetBlocks[e[t]] = !0
    }.bind(this))
}, TD.services.TwitterClient.prototype.constructStreamingUrl = function () {
    var e = this,
        t = {}, i = !1,
        s = !0;
    _.each(this.streamingFeeds, function (n, r) {
        var o = n.getMetadata(),
            a = TD.controller.feedManager.getPoller(r);
        if (a)
            if (s = !1, n.managed && "search" == n.getType()) {
                var c = o.term,
                    l = c.toLowerCase(),
                    u = new TD.services.TwitterSearchParser(c);
                t[l] = u
            } else "home" == n.getType() && (i = !0);
            else delete e.streamingFeeds[r]
    });
    var n = [];
    for (var r in t) n.push(t[r].trackQuery);
    n = _.uniq(n.join(",").split(","));
    var o = n.join(","),
        a = {};
    o && (a.track = o), i || (a["with"] = "user");
    var c = !1;
    return _.each(TD.storage.feedController.getAll(), function (t) {
        "networkactivity" === t.getType() && "twitter" === t.getService() && e.oauth.account.getKey() === t.getAccountKey() && (c = !0)
    }), c && (a.include_followings_activity = !0), s ? null : TD.net.util.addURLParameters(this.STREAMING_BASE_URL, a)
}, TD.services.TwitterClient.prototype.checkUserStream = function () {
    TD.util.shouldStream() ? this.streamEngine.connect(this.constructStreamingUrl()) : this.streamEngine.disconnect()
}, TD.services.TwitterClient.prototype.processDeleteChirpEvent = function (e) {
    e["delete"].status ? TD.controller.feedManager.deleteChirp(e["delete"].status.id_str) : e["delete"].direct_message && this.deleteMessage(e["delete"].direct_message.id_str)
}, TD.services.TwitterClient.prototype.processStreamData = function (e) {
    if (e.friends) {
        for (var t = 0; e.friends.length > t; t++) this.friends[e.friends[t]] = !0;
        try {
            this.firstStreamConnect || TD.controller.feedScheduler.refreshAccountFeeds(this.oauth.account.getKey(), !0)
        } finally {
            this.firstStreamConnect = !1
        }
    } else if (e.warning) switch (e.warning.code) {
    case this.streamWarningCodes.FOLLOWS_OVER_LIMIT:
    } else if (e.event) this.processStreamEvent(e);
    else if (e.limit);
    else if (e["delete"]) this.processDeleteChirpEvent(e);
    else if (e.direct_message) {
        var i = this.processDM(e.direct_message);
        this.processMessages([i], !0)
    } else if (e.id_str && e.text) {
        var s = this.processTweet(e);
        this.processMiscTweet(s)
    } else TD.controller.stats.unknownStreamData(e)
}, TD.services.TwitterClient.prototype.processMiscTweet = function (e) {
    var t, i, s, n, r, o = this,
        a = Boolean(this.friends[e.user.id]),
        c = e.user.id == this.oauth.account.getUserID(),
        l = e.isMention(),
        u = Boolean(e.inReplyToID),
        d = Boolean(e.retweetedStatus),
        h = d && e.retweetedStatus.user.id == this.oauth.account.getUserID(),
        p = d && (e.retweetedStatus.user.following || this.friends[e.retweetedStatus.user.id]);
    if (s = e.entities && e.entities.user_mentions && e.entities.user_mentions.some(function (e) {
        return e.indices && 0 === e.indices[0] ? (r = e.id, !0) : void 0
    }), n = s && Boolean(this.friends[r]), !(this.blocks[e.user.id] || d && this.blocks[e.retweetedStatus.user.id] || d && this.retweetBlocks[e.user.id] && !h || (c && d && (e.setRetweeted(!0), e.retweetedStatus.setRetweeted(!0)), (c || a && (!s || n || l)) && (h || p || this.publishChirpsInternal("publish", "home", [e])), h ? (i = new TD.services.TwitterActionRetweet(this.oauth.account).fromRetweet(e), this.publishChirpsInternal("publish", "interactions", [i])) : l && !d && (this.publishChirpsInternal("publish", "mentions", [e]), t = new TD.services.TwitterActionMention(this.oauth.account).fromStreamData(e), this.publishChirpsInternal("publish", "interactions", [t])), _.each(this.streamingFeeds, function (t, i) {
        var s = t.getMetadata();
        if (t.managed && "search" == t.getType()) {
            var n = s.term,
                r = o.cachedStreamingQueries[n];
            r || (r = o.cachedStreamingQueries[n] = new TD.services.TwitterSearchParser(n)), r.match(e.getFilterableText()) && o.queueChirpsForDispatch(i, [e])
        }
    }), this.publishChirpsInternal("publish", "usertweets", [e], {
        id: parseInt(e.user.id, 10)
    }), c && this.publishChirpsInternal("publish", "usertweets", [e], {}), !u))) {
        var m = {
            ancestors: [],
            descendants: [e]
        };
        $.publish("/tweets/conversation/" + e.inReplyToID, [m])
    }
}, TD.services.TwitterClient.prototype.processStreamEvent = function (e) {
    var t, i, s = !1;
    if (this.STREAM_LIST_EVENTS[e.event] && (t = new TD.services.TwitterList(this.oauth.account).fromJSONObject(e.target_object)), e.source.id == this.oauth.account.getUserID()) switch (e.event) {
    case "favorite":
        s = e.source.id === e.target_object.user.id, i = this.processTweet(e.target_object), this.updateFavoriteInternal(i, !0);
        break;
    case "unfavorite":
        i = this.processTweet(e.target_object), this.updateFavoriteInternal(i, !1);
        break;
    case "follow":
        this.friends[e.target.id] = !0;
        break;
    case "unfollow":
        delete this.friends[e.target.id];
        break;
    case "block":
        this.blocks[e.target.id] = !0, delete this.friends[e.target.id];
        break;
    case "unblock":
        delete this.blocks[e.target.id];
        break;
    case "list_created":
    case "list_updated":
    case "list_member_added":
    case "list_member_removed":
    case "list_user_subscribed":
        TD.cache.lists.add(t);
        break;
    case "list_destroyed":
        TD.cache.lists.purge(t.id);
        break;
    case "list_user_unsubscribed":
        TD.cache.lists.unsubscribe(t)
    } else "favorite" === e.event && (e.target_object.favorited = !1, e.target_object.retweeted = !1);
    this.ACTIVITY_EVENT_TYPES[e.event] && !s ? this.publishAction(e) : this.DELETE_ACTIVITY_EVENT_TYPES[e.event] && this.removeAction(e)
}, TD.services.TwitterClient.prototype.cleanUp = function () {
    $.unsubscribe(this.subscription), this.streamEngine.disconnect()
}, TD.ui.main = function () {
    var e = {}, t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            msTransition: "MSTransitionEnd",
            transition: "transitionend"
        };
    e.TRANSITION_END_EVENTS = t[Modernizr.prefixed("transition")];
    var i = function () {
        $(".js-app-add-column").removeClass("is-hidden")
    }, s = function () {
            $(".js-app-add-column").addClass("is-hidden")
        };
    return e.init = function () {
        var t = $("body"),
            n = $(TD.ui.template.render("topbar/app_header", {
                searchInputClassName: "js-app-search-input app-search-input",
                searchInputPlaceholder: TD.i("Search")
            })),
            r = $(TD.ui.template.render("app_container", {
                useDockedCompose: Boolean(TD.config.use_docked_compose),
                isMac: "osx" === TD.util.getOSName()
            }));
        $(".js-app").append(n), $(".js-app").append(r), TD.util.isTouchDevice() && window.navigator.standalone && n.on("touchmove", function (e) {
            var t = $(e.target);
            0 === t.closest(".js-column-nav-scroller").length && e.preventDefault()
        }), $(".js-app-loading").hide(), TD.util.isWrapperApp() && deck.closeLoadingScreen && deck.closeLoadingScreen(), t.on("click", "a", function (e) {
            TD.util.maybeOpenClickExternally(e)
        }), TD.ui.columns.init(), TD.ui.updates.init(), TD.ui.compose.init(), TD.ui.openColumn.init(), TD.util.isTouchDevice() || t.tooltip({
            selector: ".js-show-tip",
            container: "body",
            delay: {
                show: 500
            },
            suppressFadeOut: !0
        }), t.on("click", "a", function (e) {
            var t = $(e.currentTarget),
                i = t.attr("rel"),
                s = !1;
            switch (i) {
            case "user":
                var n = t.data("user-name") || _.last(t.attr("href").split("/"));
                $(document).trigger("uiShowProfile", {
                    id: n
                }), s = !0;
                break;
            case "hashtag":
                $(document).trigger("uiPerformSearch", {
                    query: t.text()
                }), s = !0
            }
            s && e.preventDefault(), e.isDefaultPrevented() === !1 && (TD.util.openURL(t.attr("href")), e.preventDefault())
        }), t.on("click", "button", function (e) {
            e.preventDefault()
        }), t.on("submit", function (e) {
            e.preventDefault()
        }), $.subscribe("/storage/client/settings/column_width", e.updateColumnSize), e.updateColumnSize(), $.subscribe("/storage/client/settings/font_size", e.updateFontSize), e.updateFontSize();
        var o = _.debounce(function () {
            $(document).trigger("uiMainWindowResized")
        }, 50);
        $(window).on("resize", o), $(document).on("uiColumnNavSizeOverflow", i.bind(this)), $(document).on("uiColumnNavSizeNormal", s.bind(this))
    }, e.updateColumnSize = function () {
        var e = TD.settings.getColumnWidth(),
            t = $("html");
        switch (t.removeClass("is-narrow-columns is-wide-columns"), e) {
        case "narrow":
            t.addClass("is-narrow-columns");
            break;
        case "wide":
            t.addClass("is-wide-columns")
        }
        $(document).trigger("uiColumnWidthChange", {
            columnWidth: e
        })
    }, e.updateFontSize = function () {
        var e = TD.settings.getFontSize(),
            t = $("html");
        switch (t.removeClass("txt-base-smallest txt-base-small txt-base-large txt-base-largest"), e) {
        case "smallest":
            t.addClass("txt-base-smallest");
            break;
        case "small":
            t.addClass("txt-base-small");
            break;
        case "large":
            t.addClass("txt-base-large");
            break;
        case "largest":
            t.addClass("txt-base-largest")
        }
    }, e
}(), TD.ui.compose = function () {
    function e() {
        _.defer(f)
    }

    function t(e) {
        e.target.disabled || 13 !== e.which || i(e)
    }

    function i(e) {
        var t = $(e.target);
        t.attr("rel") || (t = $(e.target).parent());
        var i = t.attr("rel");
        if ("compose-modal" === e.target.id && (i = "dismiss"), i && (e.preventDefault(), !(t.prop("disabled") || t.hasClass("is-disabled") || mt && "account" !== i && "edit" !== i))) switch (i) {
        case "dismiss":
            l();
            break;
        case "send":
            o();
            break;
        case "message":
            ft ? Et() : Ct();
            break;
        case "enterSchedule":
            s();
            break;
        case "message":
        }
    }

    function s() {
        var e = $("#compose-schedule"),
            t = function (e) {
                var t, i;
                null === e ? (q.$node.hide(), nt.removeClass("set-content")) : (t = TD.util.prettyTime(e), i = TD.ui.template.toHtml("{{hours12}}:{{minutes}} {{amPm}} {{date}} {{month}}", t), nt.addClass("set-content"), $("b", nt).text(i)), z = e
            }, i = function () {
                lt.removeClass("js-show-tip is-disabled").attr("title", "")
            };
        lt.addClass("js-show-tip is-disabled").attr("title", TD.i("Scheduled Tweets cannot contain images")), q ? (q.$node.toggle(), z || q.setDate(new Date)) : ($.subscribe("/change/date", t), $.subscribe("/removed/date", i), q = new TD.components.ScheduledDatePicker(e))
    }

    function n(e) {
        r(e)
    }

    function r(e) {
        var t = I.val();
        t.length && (e = t + " " + e), I.val(e), Dt()
    }

    function o() {
        g(), v();
        var e = u(),
            t = [],
            i = 0,
            s = function () {
                if (t.length + i >= e.length) {
                    var s = I.val();
                    _.each(t, function (e) {
                        s = s.replace(e.long_url, e.url)
                    }), a(s)
                }
            }, n = function (e) {
                e ? t.push(e) : i++, s()
            }, r = function () {
                i++, s()
            };
        "bitly" === TD.settings.getLinkShortener() && e.length > 0 ? _.each(e, function (e) {
            var t = TD.services.bitly.shorten(e);
            t.addCallbacks(n, r)
        }) : a(I.val())
    }

    function a(e) {
        function t(o) {
            o.account;
            var a, c = TD.controller.clients.getClient(o.account),
                u = c.create();
            if (ft ? u = u.DirectlyTo(st).WithMessage(e) : ("" != i && u.InReplyTo && u.InReplyTo(i), u = u.WithMessage(e), dt && u.WithMedia(dt), u.WithLocation && W && u.WithLocation(W, K)), u.WithLocation && Y && Y.twitterPlaceID && u.WithLocation(Y.twitterPlaceID, Y.twitterPlaceName), z) {
                if (a = TD.i("Scheduling update"), !u.toSchedulableObject) return TD.controller.progressIndicator.taskFailed(V, a), void 0;
                var d = u.toSchedulableObject();
                if (!d) return TD.controller.progressIndicator.taskFailed(V, a), void 0;
                if (u.isScheduled = !0, n.push(d), r.push(u), s.length > 0) t(s.pop());
                else {
                    TD.controller.progressIndicator.changeMessage(V, a);
                    var h = G ? G.token : null,
                        p = TD.controller.clients.getTDClient().scheduleGroup(n, z, h);
                    p.addCallback(function () {
                        TD.controller.progressIndicator.taskComplete(V), G && TD.controller.feedManager.deleteChirp(G.id), G = null, l(), r.forEach(function (e) {
                            e.scribeSuccess()
                        })
                    }), p.addErrback(function (e) {
                        var t = a;
                        e.req && e.req.responseText && (t += ": " + e.req.responseText), TD.controller.progressIndicator.taskFailed(V, t), f(), y()
                    })
                }
            } else a = TD.i("Sending update to {{1}}", {
                1: _.capitalize(o.service)
            }), TD.controller.progressIndicator.changeMessage(V, a), u.post(function () {
                if (w(), s.length > 0) t(s.pop());
                else {
                    if (TD.controller.progressIndicator.taskComplete(V), G) {
                        var e = G.token,
                            i = TD.controller.clients.getTDClient().removeScheduleGroup(e);
                        i.addCallback(function () {
                            TD.controller.feedManager.deleteChirp(e)
                        })
                    }
                    G = null, l()
                }
            }, function (e) {
                e.errors ? e.errors.forEach(function (e) {
                    a += " - " + e.message
                }) : a += e && e.errorMessage ? " - " + e.errorMessage : " - " + TD.controller.clients.getPreferredClient("twitter").ERRORS.UNKNOWN.message, TD.controller.progressIndicator.taskFailed(V, a), f(), y()
            })
        }
        var i = B,
            s = U.getSelectedAccounts(),
            n = [],
            r = [];
        return ft && "" == st ? (TD.controller.progressIndicator.addMessage(TD.i("Message has no recipient!")), y(), void 0) : 0 === pt.getTextLength(e) ? (TD.controller.progressIndicator.addMessage(TD.i("Sorry, empty updates are not allowed")), y(), void 0) : P.is(":visible") && 0 > parseInt(P.val()) ? (y(), void 0) : (V && (TD.controller.progressIndicator.deleteTask(V), V = null), s.length > 0 ? (V = TD.controller.progressIndicator.addTask("Sending update"), t(s.pop())) : TD.controller.progressIndicator.addMessage(TD.i("Please select at least one account before sending")), void 0)
    }

    function c() {
        I.val(""), gt = {}, f(), B = void 0, H = void 0, M && (M.empty(), M = null), X.removeClass("s-inreply"), U.updateSelectedAccounts(), y(), w(), lt.removeClass("js-show-tip is-disabled").attr("title", ""), q && q.setDate(null), ft && Et(), G = null
    }

    function l() {
        var e = function () {
            c(), $(document).off("uiCloseModal", l), k.find("input").blur(), k.hide(), k.trigger("uiFocusRelease", {
                id: pt.focusId
            }), clearInterval(ht)
        };
        if (G) {
            var t = _.uniqueId(),
                i = {
                    id: t,
                    title: TD.i("Stop editing?"),
                    message: TD.i("If you close your edits now you will lose any changes made. Are you sure you want to stop editing?"),
                    okLabel: TD.i("Yes"),
                    cancelLabel: TD.i("No")
                }, s = function (i, n) {
                    n.id === t && ($(document).off("uiConfirmationAction", s), n.result && e())
                };
            $(document).on("uiConfirmationAction", s).trigger("uiShowConfirmationDialog", i)
        } else e();
        I.get(0).blur()
    }

    function u() {
        return d(twttr.txt.extractUrls(I.val()))
    }

    function d(e) {
        return _.filter(e, function (e) {
            return !e.match(/^https?:\/\/t.co\/\w+$/)
        })
    }

    function h(e) {
        var t = TD.i("Links will be shortened by bit.ly"),
            i = TD.i("Link will be shortened by bit.ly");
        return e > 1 ? t : i
    }

    function p() {
        var e = "bitly" === TD.settings.getLinkShortener(),
            t = u().length;
        t !== Z && (e && t > 0 ? (et.text(h(t)).show(), X.addClass("s-link-added")) : (et.hide(), X.removeClass("s-link-added")), Z = t)
    }

    function m() {
        var e = I.val().toLowerCase();
        "d " !== e && "dm " !== e && "m " !== e || ft || (I.val(""), Ct())
    }

    function f() {
        var e = 140,
            t = I.val(),
            i = pt.getTextLength(t),
            s = "over-char-count";
        if (!X.hasClass("s-sending")) {
            p();
            var n = Math.min(e - i, e);
            P.val(n), 0 > n ? (P.addClass(s), g()) : n === e ? (g(), P.removeClass(s)) : (P.removeClass(s), T())
        }
    }

    function g() {
        O.prop("disabled", "disabled")
    }

    function T() {
        O.prop("disabled", !1)
    }

    function v() {
        X.addClass("s-sending"), I.prop("disabled", "disabled"), g()
    }

    function y() {
        X.removeClass("s-sending"), I.prop("disabled", !1), T()
    }

    function D() {
        lt.click(function () {
            lt.hasClass("is-disabled") || $(document).trigger("uiComposeAddImageClick")
        }), ut.on("click", "a", function (e) {
            e.stopPropagation(), w()
        }), $("#compose-modal").on("uiComposeAddPhoto", b)
    }

    function b(e, t) {
        for (var i, s = 0; t.files.length > s; s++) dt = t.files[s], i = TD.ui.template.render("compose/media_bar"), ut.html(i).show(), X.addClass("s-photo-added"), nt.addClass("js-show-tip is-disabled").attr("title", TD.i("Tweets with images cannot be scheduled"))
    }

    function w() {
        dt = null, $(document).trigger("uiResetImageUpload"), ut.empty().hide(), X.removeClass("s-photo-added"), nt.removeClass("js-show-tip is-disabled").attr("title", "")
    }

    function C() {
        return "absolute" === X.css("position") && (parseInt(X.css("left"), 10) + X.outerWidth() / 2 > $("body").outerWidth() || parseInt(X.css("top"), 10) + X.outerHeight() / 3 > $("body").outerHeight())
    }

    function S() {
        k.removeClass(Tt), X.attr("style", "")
    }

    function E() {
        X.css({
            position: "absolute",
            top: X.offset().top,
            left: X.offset().left
        }), k.addClass(Tt)
    }
    var k, x, A, I, M, R, L, N, F, O, U, j, P, B, H, W, K, z, G, V, q, Y, Q, X, J, Z, et, tt, it, st, nt, rt, ot, at, ct, lt, ut, dt, ht, pt = {}, mt = !1,
        ft = !1,
        gt = {}, Tt = "is-dragging",
        vt = window.File && window.FormData,
        yt = 50,
        _t = 22;
    pt.init = function () {};
    var Dt = function () {
        I.get(0).focus()
    }, bt = function (e) {
            J.isCompletionsOpen ? e.stopPropagation() : I.get(0).blur()
        };
    pt.setUp = function () {
        if (k) return C() && S(), void 0;
        k = $("#compose-modal"), k.html(TD.ui.template.render("compose/compose", {
            isMac: "osx" === TD.util.getOSName()
        })), X = $(".js-compose", k), x = $("#composeBox"), A = $("#autocomplete-container"), R = $("h3", k), Q = $(".js-accounts-toggle", k), at = $("span", Q), I = $(".js-compose-input", k), L = $("#hiddenDiv"), N = $('button[rel="addLocation"]', k), F = $(".removeLocationButton", k), rt = $('button[rel="message"]', k), nt = $('button[rel="enterSchedule"]'), O = $('button[rel="send"]', k), j = $("#overlay"), P = $("#character-count"), et = $(".js-links-added"), lt = $('button[rel="addPhoto"]', k), ut = $(".js-media-added", k), tt = $(".js-inreply", k), it = $(".js-dm-recipient").bind("blur", function () {
            _.defer(function () {
                St(it.val())
            })
        }), ct = $(".js-drag-handle", X), I.bind("paste", e), X.draggable({
            boundary: k,
            handle: ct
        }), X.on("start.draggable", E), I.blur(function () {
            $(".cmp-input-container").removeClass("focus")
        }), I.focus(function () {
            $(".cmp-input-container").addClass("focus")
        }), k.focus(), k.on("click", i), O.on("keydown", t), J = new TD.components.Autocomplete(I), vt ? D() : lt.remove(), TD.components.LocationPicker.canHazGeolocation() || N.hide();
        var s = new TD.components.ActionHeader;
        k.find(".mdl-header").prepend(s.$node), U = s.accountSelector, U.$node.bind(TD.components.AccountSelector.CHANGE, function () {
            Dt()
        }), wt(), U.selectDefaultAccount(), I.on("uiInputBlur", bt), $(document).on("uiSendTweetAction", o), pt.hasFocus = !1, pt.focusId = _.uniqueId("focus"), pt._boundHandleFocus = pt.handleFocus.bind(this), $(document).on("uiFocus", pt._boundHandleFocus), $(document).on("uiComposeAddFile", pt.addFile)
    }, pt.handleFocus = function (e, t) {
        pt.hasFocus = t.id === pt.focusId ? !0 : !1
    }, pt.showComposeWindow = function (e, t, i, s, n, r) {
        if (TD.config.use_docked_compose) return $(document).trigger("uiComposeTweet", {
            type: "tweet",
            text: e,
            appendText: n,
            from: t,
            startCaret: i,
            endCaret: s,
            isEditAndRetweet: r
        }), void 0;
        if (!k || k.is(":hidden")) {
            var o, a;
            this.setUp(), k.show(), k.trigger("uiFocusRequest", {
                id: this.focusId
            }), ht = setInterval(function () {
                m(), f()
            }, yt), null !== e && void 0 !== e && (I.val(e), i = void 0 === i ? e.length : i, s = void 0 === s ? e.length : s, a = I[0], a.setSelectionRange ? (Dt(), a.selectionStart = i, a.selectionEnd = s) : a.createTextRange && (o = a.createTextRange(), o.collapse(!0), o.moveStart("character", i), o.moveEnd("character", s), o.select())), t ? U.selectAccounts(t) : U.selectDefaultAccount(), f(), Dt(), k.trigger("uiCloseModal"), $(document).on("uiCloseModal", l)
        } else k && Dt()
    }, pt.referenceTo = function (e, t) {
        TD.config.use_docked_compose ? this.showComposeWindow(void 0, [t], void 0, void 0, e + " ") : (this.setUp(), this.showComposeWindow("RE " + e + " ", [t]))
    }, pt.mention = function (e, t) {
        TD.config.use_docked_compose || this.setUp(), this.showComposeWindow("@" + e + " ", [t])
    }, pt.replyToTweet = function (e, t, i, s, n) {
        var r, o, a, c = e,
            l = e.getMainTweet();
        return !t && e && (r = TD.util.getReplyUsers(e), r.length && (t = r.join(" ") + " ", o = r[0].length + 1, a = t.length)), TD.config.use_docked_compose ? (r = e.getReplyUsers(), $(document).trigger("uiComposeTweet", {
            type: "reply",
            from: [i],
            inReplyTo: {
                id: l.id,
                htmlText: l.htmlText,
                user: {
                    screenName: l.user.screenName,
                    name: l.user.name,
                    profileImageUrl: l.user.profileImageURL
                }
            },
            mentions: r
        }), void 0) : (this.setUp(), this.showComposeWindow(t, [i], o, a), B = n || e.id, H = "@" + (s || e.user.screenName.toLowerCase()), c && (c.withAvatar = !0, X.addClass("s-inreply"), tt.html(TD.ui.template.render("status/tweet_single", e)).show(), M = $("#replyto")), void 0)
    }, pt.directMessage = function (e, t, i, s) {
        var r = i ? [i] : null;
        return TD.config.use_docked_compose ? ($(document).trigger("uiComposeTweet", {
            type: "message",
            text: s,
            from: r,
            messageRecipient: {
                screenName: e,
                avatar: t
            }
        }), void 0) : (this.setUp(), s = s || "", this.showComposeWindow("", r), n(s), ft && Et(), Ct(), e && (St(e, t), Dt()), void 0)
    }, pt.editScheduledUpdate = function (e) {
        var t, i, n, r, o, a, l, u = [],
            d = 0,
            h = _.uniqueId("scheduledUpdateError"),
            p = function () {
                var t, i = e.twitterInReplyToStatusID ? twttr.txt.extractMentions(e.text)[0] || "" : null;
                return TD.config.use_docked_compose ? (t = e.twitterDMTargetScreenName ? "message" : e.twitterInReplyToStatusID ? "reply" : "tweet", $(document).trigger("uiComposeTweet", {
                    type: t,
                    schedule: {
                        id: e.id,
                        time: e.time
                    },
                    text: e.text,
                    from: u,
                    to: {
                        screenName: e.twitterDMTargetScreenName
                    },
                    inReplyTo: {
                        tweetId: e.twitterInReplyToStatusID
                    }
                }), void 0) : (c(), e.twitterDMTargetScreenName ? pt.directMessage(e.twitterDMTargetScreenName, null, n, e.text) : e.twitterInReplyToStatusID ? pt.replyToTweet(null, e.text, null, i, e.twitterInReplyToStatusID) : pt.showComposeWindow(e.text), e.twitterPlaceID, U.selectAccounts(u), s(), q.setDate(e.created), G = e, void 0)
            };
        for (pt.setUp(), t = 0, i = e.updates.length; i > t; t++) r = !1, o = e.updates[t].service, n = TD.storage.Account.generateKeyFor(o, e.updates[t].uid), r = Boolean(TD.storage.accountController.get(n)), r ? u.push(n) : d++;
        if (d > 0) {
            a = TD.util.pluralise(TD.i("This scheduled update is associated with an account which has been removed from your TweetDeck. This account will therefore not be available during this edit unless you re-add it from the accounts panel."), TD.i("This scheduled update is associated with {{1}} accounts which have been removed from your TweetDeck. These accounts will therefore not be available during this edit unless you re-add them from the settings panel.", {
                1: d
            }), d), a += "\n\n", a += TD.i("Are you sure you want to continue editing?"), l = {
                id: h,
                title: TD.i("Warning!"),
                message: a,
                okLabel: TD.i("Continue"),
                cancelLabel: TD.i("Cancel")
            };
            var m = function (e, t) {
                t.id === h && ($(document).off("uiConfirmationAction", m), t.result && p())
            };
            $(document).on("uiConfirmationAction", m).trigger("uiShowConfirmationDialog", l)
        } else p()
    }, pt.selectAccounts = function (e) {
        U && U.selectAccounts(e)
    }, pt.displayLength = function (e) {
        if ("string" != typeof e) throw Error("displayLength() requires a single input of type string");
        var t = 0,
            i = 0,
            s = function (e, t) {
                var i = e.charCodeAt(t),
                    s = "",
                    n = "";
                if (i >= 55296 && 56319 >= i) {
                    if (t + 1 >= e.length) throw "High surrogate without following low surrogate";
                    if (s = e.charCodeAt(t + 1), 56320 > s || s > 57343) throw "High surrogate without following low surrogate";
                    return e.charAt(t) + e.charAt(t + 1)
                }
                if (i >= 56320 && 57343 >= i) {
                    if (0 === t) throw "Low surrogate without preceding high surrogate";
                    if (n = e.charCodeAt(t - 1), 55296 > n || n > 56319) throw "Low surrogate without preceding high surrogate";
                    return !1
                }
                return e.charAt(t)
            };
        for (t = 0, i = 0; e.length > t; t++) s(e, t) !== !1 && i++;
        return i
    }, pt.getTextLength = function (e) {
        for (var t = pt.displayLength(e), i = twttr.txt.extractUrls(e), s = 0; i.length > s; s++) t += _t - i[s].length, _.startsWith(i[s], "https://") && t++;
        return dt && (t = t + 1 + _t), t
    };
    var wt = function () {
        var e = !1;
        return function () {
            e ? (at.text(TD.i("Change")), U.hide()) : (at.text(TD.i("Hide")), U.show()), e = !e, Dt()
        }
    }(),
        Ct = function () {
            ft = !0, X.addClass("s-message-to"), O.text(TD.i("Send")), lt.hide(), N.hide(), w(), ot = new TD.components.Autocomplete(it, {
                dmMode: !0
            }), ot.$node.bind(TD.components.Autocomplete.SELECT, function (e, t, i) {
                St(t, i), Dt()
            }), it.focus()
        }, St = function (e, t) {
            e && (e = _.trim(e)), e !== st && (st = e, it.val(e || ""), t = t ? TD.util.transformTwitterAvatar(t, "mini") : "http://a1.twimg.com/sticky/default_profile_images/default_profile_6_mini.png", $(".js-msg-to-avatar").attr("src", t))
        }, Et = function () {
            ft = !1, X.removeClass("s-message-to"), O.text(TD.i("Tweet")), ot.destroy(), ot = null, St(null, null), vt && lt.show(), Dt()
        };
    return pt.resetAndCloseInput = l, pt
}(), TD.ui.openColumn = function () {
    function e(e, i) {
        var s = e.split("?"),
            n = s[0].split("/").slice(1),
            r = s[1] || "",
            o = TD.net.util.formDecode(r),
            a = n.shift();
        switch (a) {
        case "add":
            if ("search" !== n[0]) {
                var c = TD.components.OpenColumn.instance;
                c && !c.canGo(a, n) && (c.destroy(), c = null), c || (c = new TD.components.OpenColumn), c.go(a, n, o, i), t.append(c.$node).show()
            } else $(document).trigger("uiAppSearchFocus")
        }
    }
    var t, i = {};
    return i.init = function () {
        t = $("#open-modal"), $.subscribe(TD.components.OpenColumn.GO_EVENT, function (t) {
            e(t.data, t.history)
        })
    }, i.showOpenColumn = function () {
        e("/add/home")
    }, i.showTwitterProfile = function (t) {
        e("/profile/twitter/" + t)
    }, i.showLists = function () {
        e("/add/lists")
    }, i.showList = function (t, i) {
        e("/add/lists?screenName=" + TD.util.deMentionify(t) + "&slug=" + i)
    }, i
}(), TD.ui.updates = function () {
    function e(e, n, r, o) {
        var a, c, l, u, d, h, p, m = $(e.target),
            f = !1;
        if (!($(".js-stream-item", e.target).length > 0) && (m.attr("rel") || (m = m.closest("a,button")), n || (a = s.findParentArticle(m), r || (r = TD.controller.columnManager.get(a.column)), r && (o = r.findChirp(a.statusKey), n = r.findMostInterestingChirp(a.statusKey))), n)) {
            switch (c = m.attr("rel")) {
            case "list":
                TD.ui.openColumn.showList(m.data("screen-name"), m.data("slug"));
                break;
            case "actionsMenu":
            case "userActionsMenu":
                l = "" + m.data("user-id"), u = TD.cache.twitterUsers.getById(l), d = "actionsMenu" === c ? n : null, u.addCallback(function (e) {
                    var t = new TD.components.ProfileMenu(m, TD.components.DropDown.POSITION_LEFT, e, d, !0);
                    return t
                });
                break;
            case "mediaPreview":
                f = t(n, m.attr("href"), r);
                break;
            case "retweet":
            case "like":
            case "favorite":
            case "destroy":
            case "edit":
            case "reply":
            case "viewDetails":
            case "followStatus":
            case "dm":
            case "showSensitiveMedia":
            case "alwaysShowSensitiveMedia":
                i(c, n, o, r);
                break;
            case "globalSettings":
                new TD.components.GlobalSettings;
                break;
            case "tweet":
                h = m.attr("data-tweet-id"), p = TD.controller.clients.getClient(n.account.getKey()), p.show(h, function (e) {
                    i("viewDetails", e, o, r)
                }, function () {
                    TD.util.openURL(m.attr("href"))
                });
                break;
            default:
                f = !0
            }
            return f || (e.preventDefault(), e.stopPropagation()), !1
        }
    }

    function t(e, t, i) {
        return i.temporary ? (TD.util.openURL(t), !0) : (new TD.components.MediaGallery(e, t, i), !1)
    }

    function i(e, t, i, n) {
        var r;
        switch (e) {
        case "retweet":
        case "like":
        case "favorite":
        case "destroy":
        case "edit":
            e in t && t[e]();
            break;
        case "reply":
            t instanceof TD.services.TwitterMessageThread || t instanceof TD.services.TwitterDirectMessage ? TD.ui.compose.mention(t.getMainUser().screenName, t.account.getKey()) : TD.ui.compose.replyToTweet(t, "", t.account.getKey());
            break;
        case "viewDetails":
            s.showDetailView(n, t, i);
            break;
        case "followStatus":
            r = new TD.components.FollowDialog(t);
            break;
        case "dm":
            TD.ui.compose.directMessage(t.getMainUser().screenName, t.getMainUser().profileImageURL, t.getMainUser().account.getKey());
        case "showSensitiveMedia":
            s.showSensitiveMedia(t);
            break;
        case "alwaysShowSensitiveMedia":
            s.alwaysShowSensitiveMedia(t)
        }
    }
    var s = {
        currentlyDisplayedProfile: null
    };
    return s.init = function () {
        $(document).on("click", ".js-show-detail", function () {
            var e, t, i, n, r = window.getSelection(),
                o = 0 === r.rangeCount ? !1 : r.getRangeAt(0);
            return o && o.endOffset !== o.startOffset || (e = s.findParentArticle($(this)), t = TD.controller.columnManager.get(e.column), t && (i = t.findMostInterestingChirp(e.statusKey), n = t.findChirp(e.statusKey), s.showDetailView(t, i, n))), !1
        }), $("body").delegate(".js-stream-item a, .js-stream-item button", "click", e), $.subscribe("chirp/click", function (t, i, s) {
            e(t, i, s)
        }), $.subscribe("chirp/action", i), TD.controller.scheduler.schedulePeriodicTask(30, TD.ui.updates.refreshTimestamps)
    }, s.statusAction = function (e, t) {
        var i, s = TD.controller.columnManager.get(t.column);
        s && (i = s.findMostInterestingChirp(t.statusKey), i[e](t))
    }, s.refreshTimestamps = function () {
        var e = TD.util.prettyDate;
        $(".js-timestamp").each(function () {
            var t, i, s, n = $(this);
            t = n.attr("data-time"), s = new Date(Number(t)), i = e(s), $("a,span", n).text(i)
        })
    }, s.findParentArticle = function (e) {
        var t = e.closest(".js-stream-item");
        return {
            element: t,
            statusKey: t.attr("data-key"),
            column: t.closest(".js-chirp-container, .js-column").data("column")
        }
    }, s.showDetailView = function (e, t, i) {
        var s = e.model.getKey(),
            n = TD.ui.columns.getColumnElementByKey(s);
        TD.ui.columns.exitEditMode(s), e.detailViewComponent && e.detailViewComponent.destroy(), t instanceof TD.services.TwitterStatus ? e.detailViewComponent = new TD.components.TweetDetailView(e, n) : t instanceof TD.services.TwitterMessageThread && (e.detailViewComponent = new TD.components.MessageDetailView(e, n)), e.detailViewComponent.showChirp(t, i)
    }, s.showSensitiveMedia = function (e) {
        var t = e.getDOMChirps();
        t.find(".js-media-sensitive-overlay").remove(), t.find(".js-media-preview-container").removeClass("media-size-medium media-sensitive-detail"), t.find(".js-media-image-link").removeClass("is-invisible"), e.possiblySensitive = !1
    }, s.alwaysShowSensitiveMedia = function () {
        TD.settings.setDisplaySensitiveMedia(!0)
    }, s
}(), TD.globalRenderOptions = {
    styledScrollbar: TD.util.hasFixedScrollBars(),
    isTouchDevice: TD.util.isTouchDevice()
};
var TD, jQuery;
TD.net.ajax = function () {
    var e = {}, t = function (e, t, i) {
            var s = TD.config.api_root + "/oauth/" + t;
            return s += "/" + i.getType() + "/", s += encodeURIComponent(e)
        }, i = function (e, t) {
            e["x-td-oauth-key"] = t.getOAuthToken(), e["x-td-oauth-secret"] = t.getTokenSecret(), e["x-td-oauth-service"] = t.getType()
        }, s = function (e) {
            return "" === e ? null : jQuery.parseJSON(e)
        }, n = function (e, t, i, n, r) {
            var o, a, c = new TD.core.defer.Deferred,
                l = {
                    url: t,
                    global: !1,
                    type: e,
                    dataType: "text json",
                    converters: {
                        "text json": s
                    }
                };
            return r && _.extend(l, r), i && (l.beforeSend = function (e) {
                _.each(i, function (t, i) {
                    "content-type" !== i.toLowerCase() && e.setRequestHeader(i, t)
                })
            }), n && (l.data = n), a = i["Content-Type"] || i["content-type"], a && (l.contentType = a), o = jQuery.ajax(l), o.done(function (e, t, i) {
                c.callback({
                    data: e,
                    xhr: i
                })
            }), o.fail(function (e, t, i) {
                c.errback(new TD.core.defer.XMLHttpRequestError(e, i))
            }), c
        };
    return e.jsonp = function (e, t) {
        var i = n("GET", e, {}, t, {
            dataType: "jsonp",
            timeout: 1e4
        });
        return i
    }, e.upload = function (e, t, s) {
        var r, o = {};
        return i(o, s), r = n("POST", e, o, t, {
            timeout: 12e4,
            processData: !1,
            contentType: !1
        })
    }, e.signRequest = function (e, s, r, o, a) {
        var c, l, u, d = {};
        return a = a || {}, i(a, e), u = "GET" === r ? "echo" : "sign", l = t(s, u, e), c = n(r, l, a, o, d)
    }, e.request = function (s, r) {
        var o, a, r = r || {}, c = r.headers || {}, l = r.method || "GET",
            u = r.account,
            d = r.params || null;
        return "GET" !== l && TD.util.isWrapperApp() || r.params && (s = TD.net.util.addURLParameters(s, d), d = {}), TD.util.isChromeApp() ? "GET" === l ? (i(c, u), o = t(s, "sign", u), a = n(l, o, c)) : (a = e.signRequest(u, s, l, d, c), a.addCallback(function (e) {
            var t = e.data,
                i = t.headers || {};
            return c && c["Content-Type"] && (i["Content-Type"] = c["Content-Type"]), n(l, t.url, i, t.body)
        })) : (i(c, u), o = t(s, "proxy", u), a = n(l, o, c, d)), a
    }, e
}(),
function (e) {
    function t(e, t) {
        return 32 - new Date(e, t, 32).getDate()
    }

    function i(e, t) {
        for (e = "" + e, t = t || 2; t > e.length;) e = "0" + e;
        return e
    }

    function s(e, t, s) {
        var n = e.getDate(),
            r = e.getDay(),
            o = e.getMonth(),
            a = e.getFullYear(),
            c = {
                d: n,
                dd: i(n),
                ddd: d[s].shortDays[r],
                dddd: d[s].days[r],
                m: o + 1,
                mm: i(o + 1),
                mmm: d[s].shortMonths[o],
                mmmm: d[s].months[o],
                yy: (a + "").slice(2),
                yyyy: a
            }, l = t.replace(h, function (e) {
                return e in c ? c[e] : e.slice(1, e.length - 1)
            });
        return p.html(l).html()
    }

    function n(e) {
        return parseInt(e, 10)
    }

    function r(e, t) {
        return e.getFullYear() === t.getFullYear() && e.getMonth() == t.getMonth() && e.getDate() == t.getDate()
    }

    function o(e) {
        if (e) {
            if (e.constructor == Date) return e;
            if ("string" == typeof e) {
                var t = e.split("-");
                if (3 == t.length) return new Date(n(t[0]), n(t[1]) - 1, n(t[2]));
                if (!/^-?\d+$/.test(e)) return;
                e = n(e)
            }
            var i = new Date;
            return i.setDate(i.getDate() + e), i
        }
    }

    function a(i, a) {
        function c(t, n, r) {
            S = t, f = t.getFullYear(), g = t.getMonth(), T = t.getDate(), r = r || e.Event("api"), r.type = "change", A.trigger(r, [t]), r.isDefaultPrevented() || (i.val(s(t, n.format, n.lang)), i.data("date", t), y.hide(r))
        }

        function h(e) {
            e.type = "onShow", A.trigger(e)
        }
        var p, m, f, g, T, v, y = this,
            _ = new Date,
            D = a.css,
            b = d[a.lang],
            w = e("#" + D.root),
            C = w.find("#" + D.title),
            S = i.attr("data-value") || a.value || i.val(),
            E = i.attr("min") || a.min,
            k = i.attr("max") || a.max;
        if (0 === E && (E = "0"), S = o(S) || _, E = o(E || 365 * a.yearRange[0]), k = o(k || 365 * a.yearRange[1]), !b) throw "Dateinput: invalid language: " + a.lang;
        if ("date" == i.attr("type")) {
            var x = e("<input/>");
            e.each("class,disabled,id,maxlength,name,readonly,required,size,style,tabindex,title,value".split(","), function (e, t) {
                x.attr(t, i.attr(t))
            }), i.replaceWith(x), i = x
        }
        i.addClass(D.input);
        var A = i.add(y);
        if (!w.length) {
            if (w = e("<div><div><div/></div><div><div/><div/></div></div>").hide().css({
                position: "relative"
            }).attr("id", D.root), w.children().eq(0).attr("id", D.head).end().eq(1).attr("id", D.body).children().eq(0).attr("id", D.days).end().eq(1).attr("id", D.weeks).end().end().end(), C = w.find("#" + D.head).find("div").attr("id", D.title), a.selectors) {
                var I = e("<select/>").attr("id", D.month),
                    M = e("<select/>").attr("id", D.year);
                C.html(I.add(M))
            }
            for (var R = w.find("#" + D.days), L = 0; 7 > L; L++) R.append(e("<span/>").text(b.shortDays[(L + a.firstDay) % 7]));
            e("#calendar").append(w)
        }
        var N = w.find("#" + D.weeks);
        M = w.find("#" + D.year), I = w.find("#" + D.month), e.extend(y, {
            show: function (t) {
                if (!(i.attr("readonly") || i.attr("disabled") || v || (t = t || e.Event(), t.type = "onBeforeShow", A.trigger(t), t.isDefaultPrevented()))) {
                    e.each(l, function () {
                        this.hide()
                    }), v = !0, I.unbind("change").change(function () {
                        y.setValue(M.val(), e(this).val())
                    }), M.unbind("change").change(function () {
                        y.setValue(e(this).val(), I.val())
                    }), p = w.find("#" + D.prev).unbind("click").click(function () {
                        return p.hasClass(D.disabled) || y.addMonth(-1), !1
                    }), m = w.find("#" + D.next).unbind("click").click(function () {
                        return m.hasClass(D.disabled) || y.addMonth(), !1
                    }), y.setValue(S);
                    var s = i.offset();
                    return /iPad/i.test(navigator.userAgent) && (s.top -= e(window).scrollTop()), a.speed ? w.show(a.speed, function () {
                        h(t)
                    }) : (w.show(), h(t)), y
                }
            },
            setValue: function (i, s, o) {
                var l = n(s) >= -1 ? new Date(n(i), n(s), n(o || 1)) : i || S;
                if (E > l ? l = E : l > k && (l = k), i = l.getFullYear(), s = l.getMonth(), o = l.getDate(), -1 == s ? (s = 11, i--) : 12 == s && (s = 0, i++), !v) return c(l, a), y;
                g = s, f = i, T = o;
                var u, d = new Date(i, s, 1 - a.firstDay),
                    h = d.getDay(),
                    w = t(i, s),
                    x = t(i, s - 1);
                if (a.selectors) {
                    I.empty(), e.each(b.months, function (t, s) {
                        new Date(i, t + 1, -1) > E && k > new Date(i, t, 0) && I.append(e("<option/>").html(s).attr("value", t))
                    }), M.empty();
                    for (var A = _.getFullYear(), R = A + a.yearRange[0]; A + a.yearRange[1] > R; R++) new Date(R + 1, -1, 1) >= E && k > new Date(R, 0, 0) && M.append(e("<option/>").text(R));
                    I.val(s), M.val(i)
                } else C.html(b.months[s] + " " + i);
                N.empty(), p.add(m).removeClass(D.disabled);
                for (var L, F, $ = h ? 0 : -7;
                    (h ? 42 : 35) > $; $++) L = e("<a/>"), 0 === $ % 7 && (u = e("<div/>").addClass(D.week), N.append(u)), h > $ ? (L.addClass(D.off), F = x - h + $ + 1, l = new Date(i, s - 1, F)) : $ >= h + w ? (L.addClass(D.off), F = $ - w - h + 1, l = new Date(i, s + 1, F)) : (F = $ - h + 1, l = new Date(i, s, F), r(S, l) ? L.attr("id", D.current).addClass(D.focus) : r(_, l) && L.attr("id", D.today)), E && E > l && L.add(p).addClass(D.disabled), k && l > k && L.add(m).addClass(D.disabled), L.attr("href", "#" + F).text(F).data("date", l), u.append(L);
                return N.find("a").click(function (t) {
                    var i = e(this);
                    return i.hasClass(D.disabled) || (e("#" + D.current).removeAttr("id"), i.attr("id", D.current), c(i.data("date"), a, t)), !1
                }), D.sunday && N.find(D.week).each(function () {
                    var t = a.firstDay ? 7 - a.firstDay : 0;
                    e(this).children().slice(t, t + 1).addClass(D.sunday)
                }), y
            },
            setMin: function (e, t) {
                return E = o(e), t && E > S && y.setValue(E), y
            },
            setMax: function (e, t) {
                return k = o(e), t && S > k && y.setValue(k), y
            },
            today: function () {
                return y.setValue(_)
            },
            addDay: function (e) {
                return this.setValue(f, g, T + (e || 1))
            },
            addMonth: function (e) {
                return this.setValue(f, g + (e || 1), T)
            },
            addYear: function (e) {
                return this.setValue(f + (e || 1), g, T)
            },
            hide: function (t) {
                if (v) {
                    if (t = e.Event(), t.type = "onHide", A.trigger(t), e(document).unbind("click.d").unbind("keydown.d"), t.isDefaultPrevented()) return;
                    w.hide(), v = !1
                }
                return y
            },
            getConf: function () {
                return a
            },
            getInput: function () {
                return i
            },
            getCalendar: function () {
                return w
            },
            getValue: function (e) {
                return e ? s(S, e, a.lang) : S
            },
            isOpen: function () {
                return v
            }
        }), e.each(["onBeforeShow", "onShow", "change", "onHide"], function (t, i) {
            e.isFunction(a[i]) && e(y).bind(i, a[i]), y[i] = function (t) {
                return t && e(y).bind(i, t), y
            }
        }), i.bind("focus click", y.show).keydown(function (t) {
            var i = t.keyCode;
            return !v && e(u).index(i) >= 0 ? (y.show(t), t.preventDefault()) : t.shiftKey || t.ctrlKey || t.altKey || 9 == i ? !0 : t.preventDefault()
        }), o(i.val()) && c(S, a)
    }
    e.tools = e.tools || {
        version: "1.2.5"
    };
    var c, l = [],
        u = [75, 76, 38, 39, 74, 72, 40, 37],
        d = {};
    c = e.tools.dateinput = {
        conf: {
            format: "mm/dd/yy",
            selectors: !1,
            yearRange: [-5, 5],
            lang: "en",
            offset: [0, 0],
            speed: 0,
            firstDay: 0,
            min: void 0,
            max: void 0,
            trigger: !1,
            css: {
                prefix: "cal",
                input: "date",
                root: 0,
                head: 0,
                title: 0,
                prev: 0,
                next: 0,
                month: 0,
                year: 0,
                days: 0,
                body: 0,
                weeks: 0,
                today: 0,
                current: 0,
                week: 0,
                off: 0,
                sunday: 0,
                focus: 0,
                disabled: 0,
                trigger: 0
            }
        },
        localize: function (t, i) {
            e.each(i, function (e, t) {
                i[e] = t.split(",")
            }), d[t] = i
        }
    }, c.localize("en", {
        months: "January,February,March,April,May,June,July,August,September,October,November,December",
        shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",
        days: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",
        shortDays: "S,M,T,W,T,F,S"
    });
    var h = /d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*'/g,
        p = e("<a/>");
    e.expr[":"].date = function (t) {
        var i = t.getAttribute("type");
        return i && "date" == i || !! e(t).data("dateinput")
    }, e.fn.dateinput = function (t) {
        if (this.data("dateinput")) return this;
        t = e.extend(!0, {}, c.conf, t), e.each(t.css, function (e, i) {
            i || "prefix" == e || (t.css[e] = (t.css.prefix || "") + (i || e))
        });
        var i;
        return this.each(function () {
            var s = new a(e(this), t);
            l.push(s);
            var n = s.getInput().data("dateinput", s);
            i = i ? i.add(n) : n
        }), i ? i : this
    }
}(jQuery),
function (e) {
    e.createElement = function (t) {
        return e(document.createElement(t))
    }
}(jQuery), ! function (e) {
    "use strict";
    e(function () {
        e.support.transition = function () {
            var e = function () {
                var e, t = document.createElement("bootstrap"),
                    i = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    };
                for (e in i)
                    if (void 0 !== t.style[e]) return i[e]
            }();
            return e && {
                end: e
            }
        }()
    })
}(window.jQuery), ! function (e) {
    "use strict";
    var t = function (e, t) {
        this.init("tooltip", e, t)
    };
    t.prototype = {
        constructor: t,
        init: function (t, i, s) {
            var n, r, o, a, c;
            for (this.type = t, this.$element = e(i), this.options = this.getOptions(s), this.enabled = !0, o = this.options.trigger.split(" "), c = o.length; c--;) a = o[c], "click" == a ? this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)) : "manual" != a && (n = "hover" == a ? "mouseenter" : "focus", r = "hover" == a ? "mouseleave" : "blur", this.$element.on(n + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(r + "." + this.type, this.options.selector, e.proxy(this.leave, this)));
            this.options.selector ? this._options = e.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        },
        getOptions: function (t) {
            return t = e.extend({}, e.fn[this.type].defaults, t, this.$element.data()), t.delay && "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t
        },
        enter: function (t) {
            var i = e(t.currentTarget)[this.type](this._options).data(this.type);
            return i.options.delay && i.options.delay.show ? (clearTimeout(this.timeout), i.hoverState = "in", this.timeout = setTimeout(function () {
                "in" == i.hoverState && i.show()
            }, i.options.delay.show), void 0) : i.show()
        },
        leave: function (t) {
            var i = e(t.currentTarget)[this.type](this._options).data(this.type);
            return this.timeout && clearTimeout(this.timeout), i.options.delay && i.options.delay.hide ? (i.hoverState = "out", this.timeout = setTimeout(function () {
                "out" == i.hoverState && i.hide()
            }, i.options.delay.hide), void 0) : i.hide()
        },
        show: function () {
            var t, i, s, n, r, o, a = e.Event("show");
            if (this.hasContent() && this.enabled) {
                if (this.$element.trigger(a), a.isDefaultPrevented()) return;
                switch (t = this.tip(), this.setContent(), this.options.animation && t.addClass("fade"), r = this.getPlacement(), t.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }), this.options.container ? t.appendTo(this.options.container) : t.insertAfter(this.$element), i = this.getPosition(), s = t[0].offsetWidth, n = t[0].offsetHeight, this.elementOffset = this.$element.offset(), this.interval = setInterval(function () {
                    var e = this.$element.closest("body").length > 0,
                        t = this.$element.offset(),
                        i = this.elementOffset && (this.elementOffset.top != t.top || this.elementOffset.left != t.left);
                    (!e || i) && this.hide()
                }.bind(this), 500), r) {
                case "bottom":
                    o = {
                        top: i.top + i.height,
                        left: i.left + i.width / 2 - s / 2
                    };
                    break;
                case "top":
                    o = {
                        top: i.top - n,
                        left: i.left + i.width / 2 - s / 2
                    };
                    break;
                case "left":
                    o = {
                        top: i.top + i.height / 2 - n / 2,
                        left: i.left - s
                    };
                    break;
                case "right":
                    o = {
                        top: i.top + i.height / 2 - n / 2,
                        left: i.left + i.width
                    }
                }
                this.applyPlacement(o, r), this.$element.trigger("shown")
            }
        },
        applyPlacement: function (e, t) {
            var i, s, n, r, o = this.tip(),
                a = o[0].offsetWidth,
                c = o[0].offsetHeight;
            o.offset(e).addClass(t).addClass("in"), i = o[0].offsetWidth, s = o[0].offsetHeight, "top" == t && s != c && (e.top = e.top + c - s, r = !0), "bottom" == t || "top" == t ? (n = 0, 0 > e.left && (n = -2 * e.left, e.left = 0, o.offset(e), i = o[0].offsetWidth, s = o[0].offsetHeight), this.replaceArrow(n - a + i, i, "left")) : this.replaceArrow(s - c, s, "top"), r && o.offset(e)
        },
        replaceArrow: function (e, t, i) {
            this.arrow().css(i, e ? 50 * (1 - e / t) + "%" : "")
        },
        setContent: function () {
            var e = this.tip(),
                t = this.getTitle();
            e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
        },
        hide: function () {
            function t() {
                var t = setTimeout(function () {
                    i.off(e.support.transition.end).detach()
                }, 500);
                i.one(e.support.transition.end, function () {
                    clearTimeout(t), i.detach()
                })
            }
            var i = this.tip(),
                s = e.Event("hide");
            return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (i.removeClass("in"), !this.options.suppressFadeOut && e.support.transition && this.$tip.hasClass("fade") ? t() : i.detach(), this.elementOffset = null, clearInterval(this.interval), this.$element.trigger("hidden"), this)
        },
        fixTitle: function () {
            var e = this.$element;
            (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
        },
        hasContent: function () {
            return this.getTitle()
        },
        getPlacement: function () {
            var e = this.$element,
                t = e.attr("data-tooltip-position");
            return t || (t = "function" == typeof this.options.placement ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement), t
        },
        getPosition: function () {
            var t = this.$element[0];
            return e.extend({}, "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
                width: t.offsetWidth,
                height: t.offsetHeight
            }, this.$element.offset())
        },
        getTitle: function () {
            var e, t = this.$element,
                i = this.options;
            return e = t.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(t[0]) : i.title)
        },
        tip: function () {
            return this.$tip = this.$tip || e(this.options.template)
        },
        arrow: function () {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        },
        validate: function () {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function () {
            this.enabled = !0
        },
        disable: function () {
            this.enabled = !1
        },
        toggleEnabled: function () {
            this.enabled = !this.enabled
        },
        toggle: function (t) {
            var i = t ? e(t.currentTarget)[this.type](this._options).data(this.type) : this;
            i.tip().hasClass("in") ? i.hide() : i.show()
        },
        destroy: function () {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    };
    var i = e.fn.tooltip;
    e.fn.tooltip = function (i) {
        return this.each(function () {
            var s = e(this),
                n = s.data("tooltip"),
                r = "object" == typeof i && i;
            n || s.data("tooltip", n = new t(this, r)), "string" == typeof i && n[i]()
        })
    }, e.fn.tooltip.Constructor = t, e.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, e.fn.tooltip.noConflict = function () {
        return e.fn.tooltip = i, this
    }
}(window.jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, i, s, n) {
        return jQuery.easing[jQuery.easing.def](e, t, i, s, n)
    },
    easeInQuad: function (e, t, i, s, n) {
        return s * (t /= n) * t + i
    },
    easeOutQuad: function (e, t, i, s, n) {
        return -s * (t /= n) * (t - 2) + i
    },
    easeInOutQuad: function (e, t, i, s, n) {
        return 1 > (t /= n / 2) ? s / 2 * t * t + i : -s / 2 * (--t * (t - 2) - 1) + i
    },
    easeInCubic: function (e, t, i, s, n) {
        return s * (t /= n) * t * t + i
    },
    easeOutCubic: function (e, t, i, s, n) {
        return s * ((t = t / n - 1) * t * t + 1) + i
    },
    easeInOutCubic: function (e, t, i, s, n) {
        return 1 > (t /= n / 2) ? s / 2 * t * t * t + i : s / 2 * ((t -= 2) * t * t + 2) + i
    },
    easeInQuart: function (e, t, i, s, n) {
        return s * (t /= n) * t * t * t + i
    },
    easeOutQuart: function (e, t, i, s, n) {
        return -s * ((t = t / n - 1) * t * t * t - 1) + i
    },
    easeInOutQuart: function (e, t, i, s, n) {
        return 1 > (t /= n / 2) ? s / 2 * t * t * t * t + i : -s / 2 * ((t -= 2) * t * t * t - 2) + i
    },
    easeInQuint: function (e, t, i, s, n) {
        return s * (t /= n) * t * t * t * t + i
    },
    easeOutQuint: function (e, t, i, s, n) {
        return s * ((t = t / n - 1) * t * t * t * t + 1) + i
    },
    easeInOutQuint: function (e, t, i, s, n) {
        return 1 > (t /= n / 2) ? s / 2 * t * t * t * t * t + i : s / 2 * ((t -= 2) * t * t * t * t + 2) + i
    },
    easeInSine: function (e, t, i, s, n) {
        return -s * Math.cos(t / n * (Math.PI / 2)) + s + i
    },
    easeOutSine: function (e, t, i, s, n) {
        return s * Math.sin(t / n * (Math.PI / 2)) + i
    },
    easeInOutSine: function (e, t, i, s, n) {
        return -s / 2 * (Math.cos(Math.PI * t / n) - 1) + i
    },
    easeInExpo: function (e, t, i, s, n) {
        return 0 == t ? i : s * Math.pow(2, 10 * (t / n - 1)) + i
    },
    easeOutExpo: function (e, t, i, s, n) {
        return t == n ? i + s : s * (-Math.pow(2, -10 * t / n) + 1) + i
    },
    easeInOutExpo: function (e, t, i, s, n) {
        return 0 == t ? i : t == n ? i + s : 1 > (t /= n / 2) ? s / 2 * Math.pow(2, 10 * (t - 1)) + i : s / 2 * (-Math.pow(2, -10 * --t) + 2) + i
    },
    easeInCirc: function (e, t, i, s, n) {
        return -s * (Math.sqrt(1 - (t /= n) * t) - 1) + i
    },
    easeOutCirc: function (e, t, i, s, n) {
        return s * Math.sqrt(1 - (t = t / n - 1) * t) + i
    },
    easeInOutCirc: function (e, t, i, s, n) {
        return 1 > (t /= n / 2) ? -s / 2 * (Math.sqrt(1 - t * t) - 1) + i : s / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
    },
    easeInElastic: function (e, t, i, s, n) {
        var r = 1.70158,
            o = 0,
            a = s;
        if (0 == t) return i;
        if (1 == (t /= n)) return i + s;
        if (o || (o = .3 * n), Math.abs(s) > a) {
            a = s;
            var r = o / 4
        } else var r = o / (2 * Math.PI) * Math.asin(s / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - r) * 2 * Math.PI / o)) + i
    },
    easeOutElastic: function (e, t, i, s, n) {
        var r = 1.70158,
            o = 0,
            a = s;
        if (0 == t) return i;
        if (1 == (t /= n)) return i + s;
        if (o || (o = .3 * n), Math.abs(s) > a) {
            a = s;
            var r = o / 4
        } else var r = o / (2 * Math.PI) * Math.asin(s / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * n - r) * 2 * Math.PI / o) + s + i
    },
    easeInOutElastic: function (e, t, i, s, n) {
        var r = 1.70158,
            o = 0,
            a = s;
        if (0 == t) return i;
        if (2 == (t /= n / 2)) return i + s;
        if (o || (o = n * .3 * 1.5), Math.abs(s) > a) {
            a = s;
            var r = o / 4
        } else var r = o / (2 * Math.PI) * Math.asin(s / a);
        return 1 > t ? -.5 * a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - r) * 2 * Math.PI / o) + i : .5 * a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * n - r) * 2 * Math.PI / o) + s + i
    },
    easeInBack: function (e, t, i, s, n, r) {
        return void 0 == r && (r = 1.70158), s * (t /= n) * t * ((r + 1) * t - r) + i
    },
    easeOutBack: function (e, t, i, s, n, r) {
        return void 0 == r && (r = 1.70158), s * ((t = t / n - 1) * t * ((r + 1) * t + r) + 1) + i
    },
    easeInOutBack: function (e, t, i, s, n, r) {
        return void 0 == r && (r = 1.70158), 1 > (t /= n / 2) ? s / 2 * t * t * (((r *= 1.525) + 1) * t - r) + i : s / 2 * ((t -= 2) * t * (((r *= 1.525) + 1) * t + r) + 2) + i
    },
    easeInBounce: function (e, t, i, s, n) {
        return s - jQuery.easing.easeOutBounce(e, n - t, 0, s, n) + i
    },
    easeOutBounce: function (e, t, i, s, n) {
        return 1 / 2.75 > (t /= n) ? s * 7.5625 * t * t + i : 2 / 2.75 > t ? s * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : 2.5 / 2.75 > t ? s * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : s * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
    },
    easeInOutBounce: function (e, t, i, s, n) {
        return n / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, s, n) + i : .5 * jQuery.easing.easeOutBounce(e, 2 * t - n, 0, s, n) + .5 * s + i
    }
}),
function (e) {
    e.fn.draggable = function (t) {
        var i = {
            translateY: !0,
            translateX: !0,
            boundary: "body"
        };
        e(this).each(function () {
            function s() {
                h && 0 !== h.length || (h = "function" == typeof d.boundary ? d.boundary() : e(d.boundary))
            }

            function n() {
                return h[0].scrollHeight
            }

            function r() {
                return h[0].scrollWidth
            }

            function o(e, t, i) {
                var s, o, a, c, l, u, d, p, m, f, g, v, y, _, D;
                "x" === i ? (t = t.x, c = T.outerWidth(), s = T.offset().left, l = h.offset().left, u = h.outerWidth(), p = s > e.pageX, m = e.pageX > s + c, _ = "left", D = r()) : (t = t.y, c = T.outerHeight(), s = T.offset().top, l = h.offset().top, u = h.outerHeight(), p = s > e.pageY, m = e.pageY > s + c, _ = "top", D = n()), v = t > 0, y = 0 > t, o = parseInt(T.css(_), 10), f = l > s, a = o + c, g = s + c > l + u, p && v || m && y || f && y || g && v || (d = y ? 0 > o + t ? 0 : o + t : a + t > D ? D - c - 1 : o + t, T.css(_, d))
            }

            function a(e) {
                var t = {
                    y: e.pageY - f,
                    x: e.pageX - g
                }, i = !1;
                f = e.pageY, g = e.pageX, e.preventDefault(), d.translateY && (o(e, t, "y"), i = !0), d.translateX && (o(e, t, "x"), i = !0), i && T.trigger("drag.draggable", [t, {
                    y: e.pageY,
                    x: e.pageX
                }])
            }

            function c() {
                e(document).unbind("mousemove", l).unbind("mousemove", a).unbind("mouseup", c), v && T.trigger("drop.draggable").removeClass("draggable-dragging"), v = !1
            }

            function l(t) {
                v = !0, e(document).unbind("mousemove", l).bind("mousemove", a), f = t.pageY, g = t.pageX, s(), p = n(), m = r(), T.trigger("start.draggable", [t.offsetY, t.offsetX]).addClass("draggable-dragging")
            }

            function u(t) {
                t.preventDefault(), e(document).bind("mousemove", l).bind("mouseup", c)
            }
            var d, h, p, m, f, g, T = e(this),
                v = !1;
            d = T.data("draggable") ? e.extend({}, T.data("draggable").settings, t) : e.extend({}, i, t), void 0 === d.handle && (d.handle = T), "string" == typeof d.handle ? T.off("mousedown", d.handle, u).on("mousedown", d.handle, u) : d.handle.unbind("mousedown", u).bind("mousedown", u), T.data("draggable", {
                settings: d
            })
        })
    }
}(jQuery),
function (e) {
    var t = function (t) {
        function i() {
            var t = e(this).position().top + v.scrollTop(),
                i = e(this).position().left + v.scrollLeft(),
                s = e(this).innerWidth();
            p.top.unshift(t), p.left.unshift(i), e(this).css({
                position: "absolute",
                top: t,
                left: i,
                width: s
            })
        }

        function s(s) {
            p = {
                top: [],
                left: []
            }, e.fn.reverse = [].reverse, g = function () {
                var i = 0;
                return v.find(t.contentSelector).each(function () {
                    i += e(this).outerHeight()
                }), i
            }(), T = function () {
                var i = 0;
                return v.find(t.contentSelector).each(function () {
                    i += e(this).outerWidth()
                }), i
            }(), e(this).append(e("<" + t.tagName + "/>", {
                "class": "placeholder",
                height: e(this).height(),
                width: e(this).width()
            })), v.css("z-index", 2).find(t.selector).each(function (t) {
                e(this).data("draggable-index", t)
            }).reverse().each(i), h = e(s.target), h.css({
                "z-index": 10
            })
        }

        function n(e, i) {
            var s, n, r = h.data("draggable-index"),
                o = e.data("draggable-index"),
                a = e.outerHeight() - h.outerHeight(),
                c = e.outerWidth() - h.outerWidth(),
                l = parseInt(h.css("margin-left"), 10),
                u = parseInt(h.css("margin-top"), 10),
                d = parseInt(e.css("margin-right"), 10),
                m = parseInt(e.css("margin-bottom"), 10);
            switch (i) {
            case y:
                s = p.top[r] - a;
                break;
            case D:
                s = p.top[r], p.top[o] = s + e.outerHeight() + m + u;
                break;
            case b:
                n = p.left[r] - c;
                break;
            case w:
                n = p.left[r], p.left[o] = n + e.outerWidth() + d + l
            }
            "vertical" === t.orientation ? e.stop().animate({
                top: s
            }, "fast") : e.stop().animate({
                left: n
            }, "fast"), h.data("draggable-index", o), e.data("draggable-index", r)
        }

        function r(e) {
            var i, s, r, o, a, c = h.position().top,
                l = h.outerHeight(),
                u = h.position().left,
                d = h.outerWidth();
            if (i = e === y || e === b ? h.prev(t.selector) : h.next(t.selector), i.length) switch (s = i.position().top, r = i.outerHeight(), o = i.position().left, a = i.outerWidth(), e) {
            case y:
                s + r / 2 > c && (h.insertBefore(i), n(i, e));
                break;
            case D:
                c + l > s + r / 2 && (h.insertAfter(i), n(i, e));
                break;
            case b:
                o + a / 2 > u && (h.insertBefore(i), n(i, e));
                break;
            case w:
                u + d > o + a / 2 && (h.insertAfter(i), n(i, e))
            }
        }

        function o(e) {
            var i = (new Date).getTime() - f,
                s = v.scrollTop(),
                n = parseInt(h.css("top"), 10),
                o = n + h.outerHeight(),
                a = v.scrollLeft(),
                l = parseInt(h.css("left"), 10),
                u = l + h.outerWidth(),
                d = 1 + i / 1e3,
                p = Math.min(d * t.scroll_speed, 3 * t.scroll_speed);
            p = e === D || e === w ? p : -p, "vertical" === t.orientation ? 0 > s + p ? c() : s + p > g - v.innerHeight() ? c() : (v.scrollTop(v.scrollTop() + p), n + p > 0 && g > o + p && h.css({
                top: n + p
            }), r(e)) : 0 > a + p ? c() : a + p > T - v.innerWidth() ? c() : (v.scrollLeft(v.scrollLeft() + p), l + p > 0 && T > u + p && h.css({
                left: l + p
            }), r(e))
        }

        function a(e) {
            f = (new Date).getTime(), c(), m = setInterval(_.bind(o, this, e), C)
        }

        function c() {
            clearInterval(m), m = null
        }

        function l(e, i, s) {
            if (h) {
                var n, o, l, u = parseInt(h.css("top"), 10),
                    d = u + h.outerHeight(),
                    p = parseInt(h.css("left"), 10),
                    f = p + h.outerWidth(),
                    g = v.scrollTop() + v.innerHeight(),
                    T = v.scrollLeft() + v.innerWidth();
                if (i)
                    if ("vertical" === t.orientation) {
                        for (n = 0 > i.y ? y : D, o = i.y; 0 > o;) r(n), o += h.outerHeight();
                        for (o = i.y; o > 0;) r(n), o -= h.outerHeight()
                    } else {
                        for (n = 0 > i.x ? b : w, l = i.x; 0 > l;) r(n), l += h.outerWidth();
                        for (l = i.x; l > 0;) r(n), l -= h.outerWidth()
                    }
                s ? (s.y > v.offset().top || s.y < v.offset().top + v.outerHeight()) && c() : c(), m || ("vertical" === t.orientation ? d > g ? a(D) : v.scrollTop() > u ? a(y) : c() : f > T ? a(w) : v.scrollLeft() > p ? a(b) : c())
            }
        }

        function u() {
            e(this).find(".placeholder").remove(), v.css("height", "").find(t.selector).attr("style", ""), h.trigger("dropped.dragdroplist")
        }

        function d() {
            c(), "vertical" === t.orientation ? h.animate({
                top: p.top[h.data("draggable-index")]
            }, "fast", u.bind(this)) : h.animate({
                left: p.left[h.data("draggable-index")]
            }, "fast", u.bind(this)), h.trigger("drop.dragdroplist")
        }
        var h, p, m, f, g, T, v = t.$boundary,
            y = "up",
            D = "down",
            b = "left",
            w = "right",
            C = 30;
        return {
            handleDragStart: s,
            handleDrop: d,
            handleDrag: l
        }
    };
    e.fn.dragdroplist = function (i) {
        var s = {
            orientation: "vertical",
            tagName: "li",
            selector: ".draggable",
            contentSelector: "> *",
            scroll_speed: 8
        };
        return e(this).each(function () {
            var n, r, o = function (e) {
                    e.draggable({
                        translateX: "horizontal" === r.orientation,
                        translateY: "vertical" === r.orientation,
                        handle: r.handle ? r.handle : r.tagName,
                        boundary: r.$boundary
                    })
                };
            e(this).data("dragdroplist") || (r = e.extend({}, s, i), r.$boundary = r.$boundary || e(this), e(this).data("dragdroplist", {
                settings: r
            }), n = new t(r), e(this).find(r.tagName).each(function () {
                o(e(this))
            }), e(this).bind("start.draggable", n.handleDragStart).bind("drop.draggable", n.handleDrop).bind("drag.draggable", n.handleDrag)), e(this).on("itemadded.dragdroplist", function (t) {
                o(e(t.target))
            })
        }), e(this)
    }
}(jQuery),
function (e) {
    function t(t, i) {
        this.el = e(t), this.options = i || {}, this.x = !1 !== this.options.x || this.options.forceHorizontal, this.y = !1 !== this.options.y || this.options.forceVertical, this.autoHide = !1 !== this.options.autoHide, this.padding = void 0 == this.options.padding ? 2 : this.options.padding, this.position = this.options.position, this.inner = this.el.find(".antiscroll-inner"), this.inner.css({
            right: this.y ? -n() + "px" : 0,
            bottom: this.x ? -n() + "px" : 0
        }), this.refresh()
    }

    function i(t) {
        this.pane = t, this.pane.el.append(this.el), this.innerEl = this.pane.inner.get(0), this.dragging = !1, this.enter = !1, this.shown = !1, this.pane.el.mouseenter(e.proxy(this, "mouseenter")), this.pane.el.mouseleave(e.proxy(this, "mouseleave")), this.el.mousedown(e.proxy(this, "mousedown")), this.innerPaneScrollListener = e.proxy(this, "scroll"), this.pane.inner.scroll(this.innerPaneScrollListener), this.innerPaneMouseWheelListener = e.proxy(this, "mousewheel"), this.pane.inner.bind("mousewheel", this.innerPaneMouseWheelListener);
        var i = this.pane.options.initialDisplay;
        i !== !1 && (this.show(), this.pane.autoHide && (this.hiding = setTimeout(e.proxy(this, "hide"), parseInt(i, 10) || 3e3)))
    }

    function s(e, t) {
        function i() {}
        i.prototype = t.prototype, e.prototype = new i
    }

    function n() {
        if (void 0 === r) {
            var t = e('<div class="antiscroll-inner" style="width:50px;height:50px;overflow-y:scroll;position:absolute;top:-200px;left:-200px;"><div style="height:100px;width:100%"></div>');
            e("body").append(t);
            var i = e(t).innerWidth(),
                s = e("div", t).innerWidth();
            e(t).remove(), r = i - s
        }
        return r
    }
    e.fn.antiscroll = function (t) {
        return this.each(function () {
            e(this).data("antiscroll") && e(this).data("antiscroll").destroy(), e(this).data("antiscroll", new e.Antiscroll(this, t))
        })
    }, e.Antiscroll = t, t.prototype.refresh = function () {
        var e = this.inner.get(0).scrollWidth > this.el.width() + (this.y ? n() : 0),
            t = this.inner.get(0).scrollHeight > this.el.height() + (this.x ? n() : 0);
        this.x && (!this.horizontal && e ? this.horizontal = new i.Horizontal(this) : this.horizontal && !e ? (this.horizontal.destroy(), this.horizontal = null) : this.horizontal && this.horizontal.update()), this.y && (!this.vertical && t ? this.vertical = new i.Vertical(this) : this.vertical && !t ? (this.vertical.destroy(), this.vertical = null) : this.vertical && this.vertical.update())
    }, t.prototype.destroy = function () {
        return this.horizontal && (this.horizontal.destroy(), this.horizontal = null), this.vertical && (this.vertical.destroy(), this.vertical = null), this
    }, t.prototype.rebuild = function () {
        return this.destroy(), this.inner.attr("style", ""), t.call(this, this.el, this.options), this
    }, i.prototype.destroy = function () {
        return this.el.remove(), this.pane.inner.unbind("scroll", this.innerPaneScrollListener), this.pane.inner.unbind("mousewheel", this.innerPaneMouseWheelListener), this
    }, i.prototype.mouseenter = function () {
        this.enter = !0, this.show()
    }, i.prototype.mouseleave = function () {
        this.enter = !1, this.dragging || this.pane.autoHide && this.hide()
    }, i.prototype.scroll = function () {
        this.shown || (this.show(), !this.dragging && this.pane.autoHide && (this.hiding = setTimeout(e.proxy(this, "hide"), 1e3))), this.update()
    }, i.prototype.mousedown = function (t) {
        t.preventDefault(), this.dragging = !0, this.startPageY = t.pageY - parseInt(this.el.css("top"), 10), this.startPageX = t.pageX - parseInt(this.el.css("left"), 10), this.el[0].ownerDocument.onselectstart = function () {
            return !1
        };
        var i = (this.pane, e.proxy(this, "mousemove")),
            s = this;
        e(this.el[0].ownerDocument).mousemove(i).mouseup(function () {
            s.dragging = !1, this.onselectstart = null, e(this).unbind("mousemove", i), s.enter || s.hide()
        })
    }, i.prototype.show = function () {
        this.hiding && (clearTimeout(this.hiding), this.hiding = null), !this.shown && this.update() && (this.el.addClass("antiscroll-scrollbar-shown"), this.shown = !0)
    }, i.prototype.hide = function () {
        this.pane.autoHide !== !1 && this.shown && (this.el.removeClass("antiscroll-scrollbar-shown"), this.shown = !1)
    }, i.Horizontal = function (t) {
        var s = document;
        t.el.length > 0 && (s = t.el[0].ownerDocument), this.el = e('<div class="antiscroll-scrollbar antiscroll-scrollbar-horizontal">', s), i.call(this, t)
    }, s(i.Horizontal, i), i.Horizontal.prototype.update = function () {
        var e = this.pane.el.width(),
            t = e - 2 * this.pane.padding,
            i = this.pane.inner.get(0);
        return this.el.css("width", t * e / i.scrollWidth).css("left", t * i.scrollLeft / i.scrollWidth), i.scrollWidth > e
    }, i.Horizontal.prototype.mousemove = function (e) {
        var t = this.pane.el.width() - 2 * this.pane.padding,
            i = e.pageX - this.startPageX,
            s = this.el.width(),
            n = this.pane.inner.get(0),
            r = Math.min(Math.max(i, 0), t - s);
        n.scrollLeft = (n.scrollWidth - this.pane.el.width()) * r / (t - s)
    }, i.Horizontal.prototype.mousewheel = function (e, t, i) {
        return 0 > i && 0 == this.pane.inner.get(0).scrollLeft || i > 0 && this.innerEl.scrollLeft + Math.ceil(this.pane.el.width()) == this.innerEl.scrollWidth ? (e.preventDefault(), !1) : void 0
    }, i.Vertical = function (t) {
        var s = document;
        t.el.length > 0 && (s = t.el[0].ownerDocument), this.el = e('<div class="antiscroll-scrollbar antiscroll-scrollbar-vertical">', s), this.el.addClass("left" === t.position ? "antiscroll-scrollbar-position-left" : "antiscroll-scrollbar-position-right"), i.call(this, t)
    }, s(i.Vertical, i), i.Vertical.prototype.update = function () {
        var e = this.pane.el.height(),
            t = e - 2 * this.pane.padding,
            i = this.innerEl,
            s = t * e / i.scrollHeight;
        s = 20 > s ? 20 : s;
        var n = t * i.scrollTop / i.scrollHeight;
        if (n + s > t) {
            var r = n + s - t;
            n = n - r - 3
        }
        return this.el.css("height", s).css("top", n), i.scrollHeight > e
    }, i.Vertical.prototype.mousemove = function (e) {
        var t = this.pane.el.height(),
            i = t - 2 * this.pane.padding,
            s = e.pageY - this.startPageY,
            n = this.el.height(),
            r = this.innerEl,
            o = Math.min(Math.max(s, 0), i - n);
        r.scrollTop = (r.scrollHeight - t) * o / (i - n)
    }, i.Vertical.prototype.mousewheel = function (e, t, i, s) {
        return s > 0 && 0 == this.innerEl.scrollTop || 0 > s && this.innerEl.scrollTop + Math.ceil(this.pane.el.height()) == this.innerEl.scrollHeight ? (e.preventDefault(), !1) : void 0
    };
    var r
}(jQuery), TD.debug = function () {
    var e = {};
    return e.spoof_data = null, e
}(), TD.minWrapperVersionMac = "2.8.0", TD.minWrapperVersionWin = "2.8.0";
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-4790629-1"]), _gaq.push(["_trackPageview"]),
function () {
    var e = document.createElement("script");
    e.type = "text/javascript", e.src = "https://ssl.google-analytics.com/ga.js", e.setAttribute("async", "true");
    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(e, t)
}();
var require = {
    baseUrl: "/web",
    paths: {
        flight: "scripts/lib/bower_components/flight",
        data: "scripts/swift/app/data",
        ui: "scripts/swift/app/ui",
        page: "scripts/swift/app/page",
        util: "scripts/swift/app/util",
        tracking: "scripts/swift/app/tracking",
        td: "scripts"
    }
};