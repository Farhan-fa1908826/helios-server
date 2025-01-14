(window.Modernizr = (function (a, b, c) {
  function y(a) {
    j.cssText = a;
  }
  function z(a, b) {
    return y(m.join(a + ";") + (b || ""));
  }
  function A(a, b) {
    return typeof a === b;
  }
  function B(a, b) {
    return !!~("" + a).indexOf(b);
  }
  function C(a, b, d) {
    for (var e in a) {
      var f = b[a[e]];
      if (f !== c)
        return d === !1 ? a[e] : A(f, "function") ? f.bind(d || b) : f;
    }
    return !1;
  }
  var d = "2.6.2",
    e = {},
    f = !0,
    g = b.documentElement,
    h = "modernizr",
    i = b.createElement(h),
    j = i.style,
    k,
    l = {}.toString,
    m = " -webkit- -moz- -o- -ms- ".split(" "),
    n = { svg: "http://www.w3.org/2000/svg" },
    o = {},
    p = {},
    q = {},
    r = [],
    s = r.slice,
    t,
    u = function (a, c, d, e) {
      var f,
        i,
        j,
        k,
        l = b.createElement("div"),
        m = b.body,
        n = m || b.createElement("body");
      if (parseInt(d, 10))
        while (d--)
          (j = b.createElement("div")),
            (j.id = e ? e[d] : h + (d + 1)),
            l.appendChild(j);
      return (
        (f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join("")),
        (l.id = h),
        ((m ? l : n).innerHTML += f),
        n.appendChild(l),
        m ||
          ((n.style.background = ""),
          (n.style.overflow = "hidden"),
          (k = g.style.overflow),
          (g.style.overflow = "hidden"),
          g.appendChild(n)),
        (i = c(l, a)),
        m
          ? l.parentNode.removeChild(l)
          : (n.parentNode.removeChild(n), (g.style.overflow = k)),
        !!i
      );
    },
    v = function (b) {
      var c = a.matchMedia || a.msMatchMedia;
      if (c) return c(b).matches;
      var d;
      return (
        u(
          "@media " + b + " { #" + h + " { position: absolute; } }",
          function (b) {
            d =
              (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)[
                "position"
              ] == "absolute";
          }
        ),
        d
      );
    },
    w = {}.hasOwnProperty,
    x;
  !A(w, "undefined") && !A(w.call, "undefined")
    ? (x = function (a, b) {
        return w.call(a, b);
      })
    : (x = function (a, b) {
        return b in a && A(a.constructor.prototype[b], "undefined");
      }),
    Function.prototype.bind ||
      (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function") throw new TypeError();
        var d = s.call(arguments, 1),
          e = function () {
            if (this instanceof e) {
              var a = function () {};
              a.prototype = c.prototype;
              var f = new a(),
                g = c.apply(f, d.concat(s.call(arguments)));
              return Object(g) === g ? g : f;
            }
            return c.apply(b, d.concat(s.call(arguments)));
          };
        return e;
      }),
    (o.touch = function () {
      var c;
      return (
        "ontouchstart" in a || (a.DocumentTouch && b instanceof DocumentTouch)
          ? (c = !0)
          : u(
              [
                "@media (",
                m.join("touch-enabled),("),
                h,
                ")",
                "{#modernizr{top:9px;position:absolute}}",
              ].join(""),
              function (a) {
                c = a.offsetTop === 9;
              }
            ),
        c
      );
    }),
    (o.svg = function () {
      return (
        !!b.createElementNS && !!b.createElementNS(n.svg, "svg").createSVGRect
      );
    }),
    (o.inlinesvg = function () {
      var a = b.createElement("div");
      return (
        (a.innerHTML = "<svg/>"),
        (a.firstChild && a.firstChild.namespaceURI) == n.svg
      );
    }),
    (o.svgclippaths = function () {
      return (
        !!b.createElementNS &&
        /SVGClipPath/.test(l.call(b.createElementNS(n.svg, "clipPath")))
      );
    });
  for (var D in o)
    x(o, D) &&
      ((t = D.toLowerCase()), (e[t] = o[D]()), r.push((e[t] ? "" : "no-") + t));
  return (
    (e.addTest = function (a, b) {
      if (typeof a == "object") for (var d in a) x(a, d) && e.addTest(d, a[d]);
      else {
        a = a.toLowerCase();
        if (e[a] !== c) return e;
        (b = typeof b == "function" ? b() : b),
          typeof f != "undefined" &&
            f &&
            (g.className += " " + (b ? "" : "no-") + a),
          (e[a] = b);
      }
      return e;
    }),
    y(""),
    (i = k = null),
    (function (a, b) {
      function k(a, b) {
        var c = a.createElement("p"),
          d = a.getElementsByTagName("head")[0] || a.documentElement;
        return (
          (c.innerHTML = "x<style>" + b + "</style>"),
          d.insertBefore(c.lastChild, d.firstChild)
        );
      }
      function l() {
        var a = r.elements;
        return typeof a == "string" ? a.split(" ") : a;
      }
      function m(a) {
        var b = i[a[g]];
        return b || ((b = {}), h++, (a[g] = h), (i[h] = b)), b;
      }
      function n(a, c, f) {
        c || (c = b);
        if (j) return c.createElement(a);
        f || (f = m(c));
        var g;
        return (
          f.cache[a]
            ? (g = f.cache[a].cloneNode())
            : e.test(a)
            ? (g = (f.cache[a] = f.createElem(a)).cloneNode())
            : (g = f.createElem(a)),
          g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
        );
      }
      function o(a, c) {
        a || (a = b);
        if (j) return a.createDocumentFragment();
        c = c || m(a);
        var d = c.frag.cloneNode(),
          e = 0,
          f = l(),
          g = f.length;
        for (; e < g; e++) d.createElement(f[e]);
        return d;
      }
      function p(a, b) {
        b.cache ||
          ((b.cache = {}),
          (b.createElem = a.createElement),
          (b.createFrag = a.createDocumentFragment),
          (b.frag = b.createFrag())),
          (a.createElement = function (c) {
            return r.shivMethods ? n(c, a, b) : b.createElem(c);
          }),
          (a.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
              l()
                .join()
                .replace(/\w+/g, function (a) {
                  return (
                    b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                  );
                }) +
              ");return n}"
          )(r, b.frag));
      }
      function q(a) {
        a || (a = b);
        var c = m(a);
        return (
          r.shivCSS &&
            !f &&
            !c.hasCSS &&
            (c.hasCSS = !!k(
              a,
              "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}"
            )),
          j || p(a, c),
          a
        );
      }
      var c = a.html5 || {},
        d =
          /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        e =
          /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        f,
        g = "_html5shiv",
        h = 0,
        i = {},
        j;
      (function () {
        try {
          var a = b.createElement("a");
          (a.innerHTML = "<xyz></xyz>"),
            (f = "hidden" in a),
            (j =
              a.childNodes.length == 1 ||
              (function () {
                b.createElement("a");
                var a = b.createDocumentFragment();
                return (
                  typeof a.cloneNode == "undefined" ||
                  typeof a.createDocumentFragment == "undefined" ||
                  typeof a.createElement == "undefined"
                );
              })());
        } catch (c) {
          (f = !0), (j = !0);
        }
      })();
      var r = {
        elements:
          c.elements ||
          "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
        shivCSS: c.shivCSS !== !1,
        supportsUnknownElements: j,
        shivMethods: c.shivMethods !== !1,
        type: "default",
        shivDocument: q,
        createElement: n,
        createDocumentFragment: o,
      };
      (a.html5 = r), q(b);
    })(this, b),
    (e._version = d),
    (e._prefixes = m),
    (e.mq = v),
    (e.testStyles = u),
    (g.className =
      g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
      (f ? " js " + r.join(" ") : "")),
    e
  );
})(this, this.document)),
  (function (a, b, c) {
    function d(a) {
      return "[object Function]" == o.call(a);
    }
    function e(a) {
      return "string" == typeof a;
    }
    function f() {}
    function g(a) {
      return !a || "loaded" == a || "complete" == a || "uninitialized" == a;
    }
    function h() {
      var a = p.shift();
      (q = 1),
        a
          ? a.t
            ? m(function () {
                ("c" == a.t
                  ? B.injectCss
                  : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
              }, 0)
            : (a(), h())
          : (q = 0);
    }
    function i(a, c, d, e, f, i, j) {
      function k(b) {
        if (
          !o &&
          g(l.readyState) &&
          ((u.r = o = 1),
          !q && h(),
          (l.onload = l.onreadystatechange = null),
          b)
        ) {
          "img" != a &&
            m(function () {
              t.removeChild(l);
            }, 50);
          for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload();
        }
      }
      var j = j || B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = { t: d, s: c, e: f, a: i, x: j };
      1 === y[c] && ((r = 1), (y[c] = [])),
        "object" == a ? (l.data = c) : ((l.src = c), (l.type = a)),
        (l.width = l.height = "0"),
        (l.onerror =
          l.onload =
          l.onreadystatechange =
            function () {
              k.call(this, r);
            }),
        p.splice(e, 0, u),
        "img" != a &&
          (r || 2 === y[c]
            ? (t.insertBefore(l, s ? null : n), m(k, j))
            : y[c].push(l));
    }
    function j(a, b, c, d, f) {
      return (
        (q = 0),
        (b = b || "j"),
        e(a)
          ? i("c" == b ? v : u, a, b, this.i++, c, d, f)
          : (p.splice(this.i++, 0, a), 1 == p.length && h()),
        this
      );
    }
    function k() {
      var a = B;
      return (a.loader = { load: j, i: 0 }), a;
    }
    var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = "MozAppearance" in l.style,
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && "[object Opera]" == o.call(a.opera),
      l = !!b.attachEvent && !l,
      u = r ? "object" : l ? "script" : "img",
      v = l ? "script" : u,
      w =
        Array.isArray ||
        function (a) {
          return "[object Array]" == o.call(a);
        },
      x = [],
      y = {},
      z = {
        timeout: function (a, b) {
          return b.length && (a.timeout = b[0]), a;
        },
      },
      A,
      B;
    (B = function (a) {
      function b(a) {
        var a = a.split("!"),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = { url: c, origUrl: c, prefixes: a },
          e,
          f,
          g;
        for (f = 0; f < d; f++)
          (g = a[f].split("=")), (e = z[g.shift()]) && (c = e(c, g));
        for (f = 0; f < b; f++) c = x[f](c);
        return c;
      }
      function g(a, e, f, g, h) {
        var i = b(a),
          j = i.autoCallback;
        i.url.split(".").pop().split("?").shift(),
          i.bypass ||
            (e &&
              (e = d(e)
                ? e
                : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]),
            i.instead
              ? i.instead(a, e, f, g, h)
              : (y[i.url] ? (i.noexec = !0) : (y[i.url] = 1),
                f.load(
                  i.url,
                  i.forceCSS ||
                    (!i.forceJS &&
                      "css" == i.url.split(".").pop().split("?").shift())
                    ? "c"
                    : c,
                  i.noexec,
                  i.attrs,
                  i.timeout
                ),
                (d(e) || d(j)) &&
                  f.load(function () {
                    k(),
                      e && e(i.origUrl, h, g),
                      j && j(i.origUrl, h, g),
                      (y[i.url] = 2);
                  })));
      }
      function h(a, b) {
        function c(a, c) {
          if (a) {
            if (e(a))
              c ||
                (j = function () {
                  var a = [].slice.call(arguments);
                  k.apply(this, a), l();
                }),
                g(a, j, b, 0, h);
            else if (Object(a) === a)
              for (n in ((m = (function () {
                var b = 0,
                  c;
                for (c in a) a.hasOwnProperty(c) && b++;
                return b;
              })()),
              a))
                a.hasOwnProperty(n) &&
                  (!c &&
                    !--m &&
                    (d(j)
                      ? (j = function () {
                          var a = [].slice.call(arguments);
                          k.apply(this, a), l();
                        })
                      : (j[n] = (function (a) {
                          return function () {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b), l();
                          };
                        })(k[n]))),
                  g(a[n], j, b, n, h));
          } else !c && l();
        }
        var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m,
          n;
        c(h ? a.yep : a.nope, !!i), i && c(i);
      }
      var i,
        j,
        l = this.yepnope.loader;
      if (e(a)) g(a, 0, l, 0);
      else if (w(a))
        for (i = 0; i < a.length; i++)
          (j = a[i]),
            e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
      else Object(a) === a && h(a, l);
    }),
      (B.addPrefix = function (a, b) {
        z[a] = b;
      }),
      (B.addFilter = function (a) {
        x.push(a);
      }),
      (B.errorTimeout = 1e4),
      null == b.readyState &&
        b.addEventListener &&
        ((b.readyState = "loading"),
        b.addEventListener(
          "DOMContentLoaded",
          (A = function () {
            b.removeEventListener("DOMContentLoaded", A, 0),
              (b.readyState = "complete");
          }),
          0
        )),
      (a.yepnope = k()),
      (a.yepnope.executeStack = h),
      (a.yepnope.injectJs = function (a, c, d, e, i, j) {
        var k = b.createElement("script"),
          l,
          o,
          e = e || B.errorTimeout;
        k.src = a;
        for (o in d) k.setAttribute(o, d[o]);
        (c = j ? h : c || f),
          (k.onreadystatechange = k.onload =
            function () {
              !l &&
                g(k.readyState) &&
                ((l = 1), c(), (k.onload = k.onreadystatechange = null));
            }),
          m(function () {
            l || ((l = 1), c(1));
          }, e),
          i ? k.onload() : n.parentNode.insertBefore(k, n);
      }),
      (a.yepnope.injectCss = function (a, c, d, e, g, i) {
        var e = b.createElement("link"),
          j,
          c = i ? h : c || f;
        (e.href = a), (e.rel = "stylesheet"), (e.type = "text/css");
        for (j in d) e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0));
      });
  })(this, document),
  (Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0));
  }),
  Modernizr.addTest("ie8compat", function () {
    return (
      !window.addEventListener &&
      document.documentMode &&
      document.documentMode === 7
    );
  });
(function (A, w) {
  function ma() {
    if (!c.isReady) {
      try {
        s.documentElement.doScroll("left");
      } catch (a) {
        setTimeout(ma, 1);
        return;
      }
      c.ready();
    }
  }
  function Qa(a, b) {
    b.src
      ? c.ajax({ url: b.src, async: false, dataType: "script" })
      : c.globalEval(b.text || b.textContent || b.innerHTML || "");
    b.parentNode && b.parentNode.removeChild(b);
  }
  function X(a, b, d, f, e, j) {
    var i = a.length;
    if (typeof b === "object") {
      for (var o in b) X(a, o, b[o], f, e, d);
      return a;
    }
    if (d !== w) {
      f = !j && f && c.isFunction(d);
      for (o = 0; o < i; o++)
        e(a[o], b, f ? d.call(a[o], o, e(a[o], b)) : d, j);
      return a;
    }
    return i ? e(a[0], b) : w;
  }
  function J() {
    return new Date().getTime();
  }
  function Y() {
    return false;
  }
  function Z() {
    return true;
  }
  function na(a, b, d) {
    d[0].type = a;
    return c.event.handle.apply(b, d);
  }
  function oa(a) {
    var b,
      d = [],
      f = [],
      e = arguments,
      j,
      i,
      o,
      k,
      n,
      r;
    i = c.data(this, "events");
    if (
      !(
        a.liveFired === this ||
        !i ||
        !i.live ||
        (a.button && a.type === "click")
      )
    ) {
      a.liveFired = this;
      var u = i.live.slice(0);
      for (k = 0; k < u.length; k++) {
        i = u[k];
        i.origType.replace(O, "") === a.type
          ? f.push(i.selector)
          : u.splice(k--, 1);
      }
      j = c(a.target).closest(f, a.currentTarget);
      n = 0;
      for (r = j.length; n < r; n++)
        for (k = 0; k < u.length; k++) {
          i = u[k];
          if (j[n].selector === i.selector) {
            o = j[n].elem;
            f = null;
            if (i.preType === "mouseenter" || i.preType === "mouseleave")
              f = c(a.relatedTarget).closest(i.selector)[0];
            if (!f || f !== o) d.push({ elem: o, handleObj: i });
          }
        }
      n = 0;
      for (r = d.length; n < r; n++) {
        j = d[n];
        a.currentTarget = j.elem;
        a.data = j.handleObj.data;
        a.handleObj = j.handleObj;
        if (j.handleObj.origHandler.apply(j.elem, e) === false) {
          b = false;
          break;
        }
      }
      return b;
    }
  }
  function pa(a, b) {
    return (
      "live." +
      (a && a !== "*" ? a + "." : "") +
      b.replace(/\./g, "`").replace(/ /g, "&")
    );
  }
  function qa(a) {
    return !a || !a.parentNode || a.parentNode.nodeType === 11;
  }
  function ra(a, b) {
    var d = 0;
    b.each(function () {
      if (this.nodeName === (a[d] && a[d].nodeName)) {
        var f = c.data(a[d++]),
          e = c.data(this, f);
        if ((f = f && f.events)) {
          delete e.handle;
          e.events = {};
          for (var j in f)
            for (var i in f[j]) c.event.add(this, j, f[j][i], f[j][i].data);
        }
      }
    });
  }
  function sa(a, b, d) {
    var f, e, j;
    b = b && b[0] ? b[0].ownerDocument || b[0] : s;
    if (
      a.length === 1 &&
      typeof a[0] === "string" &&
      a[0].length < 512 &&
      b === s &&
      !ta.test(a[0]) &&
      (c.support.checkClone || !ua.test(a[0]))
    ) {
      e = true;
      if ((j = c.fragments[a[0]])) if (j !== 1) f = j;
    }
    if (!f) {
      f = b.createDocumentFragment();
      c.clean(a, b, f, d);
    }
    if (e) c.fragments[a[0]] = j ? f : 1;
    return { fragment: f, cacheable: e };
  }
  function K(a, b) {
    var d = {};
    c.each(va.concat.apply([], va.slice(0, b)), function () {
      d[this] = a;
    });
    return d;
  }
  function wa(a) {
    return "scrollTo" in a && a.document
      ? a
      : a.nodeType === 9
      ? a.defaultView || a.parentWindow
      : false;
  }
  var c = function (a, b) {
      return new c.fn.init(a, b);
    },
    Ra = A.jQuery,
    Sa = A.$,
    s = A.document,
    T,
    Ta = /^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,
    Ua = /^.[^:#\[\.,]*$/,
    Va = /\S/,
    Wa = /^(\s|\u00A0)+|(\s|\u00A0)+$/g,
    Xa = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
    P = navigator.userAgent,
    xa = false,
    Q = [],
    L,
    $ = Object.prototype.toString,
    aa = Object.prototype.hasOwnProperty,
    ba = Array.prototype.push,
    R = Array.prototype.slice,
    ya = Array.prototype.indexOf;
  c.fn = c.prototype = {
    init: function (a, b) {
      var d, f;
      if (!a) return this;
      if (a.nodeType) {
        this.context = this[0] = a;
        this.length = 1;
        return this;
      }
      if (a === "body" && !b) {
        this.context = s;
        this[0] = s.body;
        this.selector = "body";
        this.length = 1;
        return this;
      }
      if (typeof a === "string")
        if ((d = Ta.exec(a)) && (d[1] || !b))
          if (d[1]) {
            f = b ? b.ownerDocument || b : s;
            if ((a = Xa.exec(a)))
              if (c.isPlainObject(b)) {
                a = [s.createElement(a[1])];
                c.fn.attr.call(a, b, true);
              } else a = [f.createElement(a[1])];
            else {
              a = sa([d[1]], [f]);
              a = (a.cacheable ? a.fragment.cloneNode(true) : a.fragment)
                .childNodes;
            }
            return c.merge(this, a);
          } else {
            if ((b = s.getElementById(d[2]))) {
              if (b.id !== d[2]) return T.find(a);
              this.length = 1;
              this[0] = b;
            }
            this.context = s;
            this.selector = a;
            return this;
          }
        else if (!b && /^\w+$/.test(a)) {
          this.selector = a;
          this.context = s;
          a = s.getElementsByTagName(a);
          return c.merge(this, a);
        } else return !b || b.jquery ? (b || T).find(a) : c(b).find(a);
      else if (c.isFunction(a)) return T.ready(a);
      if (a.selector !== w) {
        this.selector = a.selector;
        this.context = a.context;
      }
      return c.makeArray(a, this);
    },
    selector: "",
    jquery: "1.4.2",
    length: 0,
    size: function () {
      return this.length;
    },
    toArray: function () {
      return R.call(this, 0);
    },
    get: function (a) {
      return a == null ? this.toArray() : a < 0 ? this.slice(a)[0] : this[a];
    },
    pushStack: function (a, b, d) {
      var f = c();
      c.isArray(a) ? ba.apply(f, a) : c.merge(f, a);
      f.prevObject = this;
      f.context = this.context;
      if (b === "find")
        f.selector = this.selector + (this.selector ? " " : "") + d;
      else if (b) f.selector = this.selector + "." + b + "(" + d + ")";
      return f;
    },
    each: function (a, b) {
      return c.each(this, a, b);
    },
    ready: function (a) {
      c.bindReady();
      if (c.isReady) a.call(s, c);
      else Q && Q.push(a);
      return this;
    },
    eq: function (a) {
      return a === -1 ? this.slice(a) : this.slice(a, +a + 1);
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    slice: function () {
      return this.pushStack(
        R.apply(this, arguments),
        "slice",
        R.call(arguments).join(",")
      );
    },
    map: function (a) {
      return this.pushStack(
        c.map(this, function (b, d) {
          return a.call(b, d, b);
        })
      );
    },
    end: function () {
      return this.prevObject || c(null);
    },
    push: ba,
    sort: [].sort,
    splice: [].splice,
  };
  c.fn.init.prototype = c.fn;
  c.extend = c.fn.extend = function () {
    var a = arguments[0] || {},
      b = 1,
      d = arguments.length,
      f = false,
      e,
      j,
      i,
      o;
    if (typeof a === "boolean") {
      f = a;
      a = arguments[1] || {};
      b = 2;
    }
    if (typeof a !== "object" && !c.isFunction(a)) a = {};
    if (d === b) {
      a = this;
      --b;
    }
    for (; b < d; b++)
      if ((e = arguments[b]) != null)
        for (j in e) {
          i = a[j];
          o = e[j];
          if (a !== o)
            if (f && o && (c.isPlainObject(o) || c.isArray(o))) {
              i =
                i && (c.isPlainObject(i) || c.isArray(i))
                  ? i
                  : c.isArray(o)
                  ? []
                  : {};
              a[j] = c.extend(f, i, o);
            } else if (o !== w) a[j] = o;
        }
    return a;
  };
  c.extend({
    noConflict: function (a) {
      A.$ = Sa;
      if (a) A.jQuery = Ra;
      return c;
    },
    isReady: false,
    ready: function () {
      if (!c.isReady) {
        if (!s.body) return setTimeout(c.ready, 13);
        c.isReady = true;
        if (Q) {
          for (var a, b = 0; (a = Q[b++]); ) a.call(s, c);
          Q = null;
        }
        c.fn.triggerHandler && c(s).triggerHandler("ready");
      }
    },
    bindReady: function () {
      if (!xa) {
        xa = true;
        if (s.readyState === "complete") return c.ready();
        if (s.addEventListener) {
          s.addEventListener("DOMContentLoaded", L, false);
          A.addEventListener("load", c.ready, false);
        } else if (s.attachEvent) {
          s.attachEvent("onreadystatechange", L);
          A.attachEvent("onload", c.ready);
          var a = false;
          try {
            a = A.frameElement == null;
          } catch (b) {}
          s.documentElement.doScroll && a && ma();
        }
      }
    },
    isFunction: function (a) {
      return $.call(a) === "[object Function]";
    },
    isArray: function (a) {
      return $.call(a) === "[object Array]";
    },
    isPlainObject: function (a) {
      if (!a || $.call(a) !== "[object Object]" || a.nodeType || a.setInterval)
        return false;
      if (
        a.constructor &&
        !aa.call(a, "constructor") &&
        !aa.call(a.constructor.prototype, "isPrototypeOf")
      )
        return false;
      var b;
      for (b in a);
      return b === w || aa.call(a, b);
    },
    isEmptyObject: function (a) {
      for (var b in a) return false;
      return true;
    },
    error: function (a) {
      throw a;
    },
    parseJSON: function (a) {
      if (typeof a !== "string" || !a) return null;
      a = c.trim(a);
      if (
        /^[\],:{}\s]*$/.test(
          a
            .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
            .replace(
              /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
              "]"
            )
            .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
        )
      )
        return A.JSON && A.JSON.parse
          ? A.JSON.parse(a)
          : new Function("return " + a)();
      else c.error("Invalid JSON: " + a);
    },
    noop: function () {},
    globalEval: function (a) {
      if (a && Va.test(a)) {
        var b = s.getElementsByTagName("head")[0] || s.documentElement,
          d = s.createElement("script");
        d.type = "text/javascript";
        if (c.support.scriptEval) d.appendChild(s.createTextNode(a));
        else d.text = a;
        b.insertBefore(d, b.firstChild);
        b.removeChild(d);
      }
    },
    nodeName: function (a, b) {
      return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase();
    },
    each: function (a, b, d) {
      var f,
        e = 0,
        j = a.length,
        i = j === w || c.isFunction(a);
      if (d)
        if (i)
          for (f in a) {
            if (b.apply(a[f], d) === false) break;
          }
        else
          for (; e < j; ) {
            if (b.apply(a[e++], d) === false) break;
          }
      else if (i)
        for (f in a) {
          if (b.call(a[f], f, a[f]) === false) break;
        }
      else for (d = a[0]; e < j && b.call(d, e, d) !== false; d = a[++e]);
      return a;
    },
    trim: function (a) {
      return (a || "").replace(Wa, "");
    },
    makeArray: function (a, b) {
      b = b || [];
      if (a != null)
        a.length == null ||
        typeof a === "string" ||
        c.isFunction(a) ||
        (typeof a !== "function" && a.setInterval)
          ? ba.call(b, a)
          : c.merge(b, a);
      return b;
    },
    inArray: function (a, b) {
      if (b.indexOf) return b.indexOf(a);
      for (var d = 0, f = b.length; d < f; d++) if (b[d] === a) return d;
      return -1;
    },
    merge: function (a, b) {
      var d = a.length,
        f = 0;
      if (typeof b.length === "number")
        for (var e = b.length; f < e; f++) a[d++] = b[f];
      else for (; b[f] !== w; ) a[d++] = b[f++];
      a.length = d;
      return a;
    },
    grep: function (a, b, d) {
      for (var f = [], e = 0, j = a.length; e < j; e++)
        !d !== !b(a[e], e) && f.push(a[e]);
      return f;
    },
    map: function (a, b, d) {
      for (var f = [], e, j = 0, i = a.length; j < i; j++) {
        e = b(a[j], j, d);
        if (e != null) f[f.length] = e;
      }
      return f.concat.apply([], f);
    },
    guid: 1,
    proxy: function (a, b, d) {
      if (arguments.length === 2)
        if (typeof b === "string") {
          d = a;
          a = d[b];
          b = w;
        } else if (b && !c.isFunction(b)) {
          d = b;
          b = w;
        }
      if (!b && a)
        b = function () {
          return a.apply(d || this, arguments);
        };
      if (a) b.guid = a.guid = a.guid || b.guid || c.guid++;
      return b;
    },
    uaMatch: function (a) {
      a = a.toLowerCase();
      a =
        /(webkit)[ \/]([\w.]+)/.exec(a) ||
        /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a) ||
        /(msie) ([\w.]+)/.exec(a) ||
        (!/compatible/.test(a) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)) ||
        [];
      return { browser: a[1] || "", version: a[2] || "0" };
    },
    browser: {},
  });
  P = c.uaMatch(P);
  if (P.browser) {
    c.browser[P.browser] = true;
    c.browser.version = P.version;
  }
  if (c.browser.webkit) c.browser.safari = true;
  if (ya)
    c.inArray = function (a, b) {
      return ya.call(b, a);
    };
  T = c(s);
  if (s.addEventListener)
    L = function () {
      s.removeEventListener("DOMContentLoaded", L, false);
      c.ready();
    };
  else if (s.attachEvent)
    L = function () {
      if (s.readyState === "complete") {
        s.detachEvent("onreadystatechange", L);
        c.ready();
      }
    };
  (function () {
    c.support = {};
    var a = s.documentElement,
      b = s.createElement("script"),
      d = s.createElement("div"),
      f = "script" + J();
    d.style.display = "none";
    d.innerHTML =
      "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
    var e = d.getElementsByTagName("*"),
      j = d.getElementsByTagName("a")[0];
    if (!(!e || !e.length || !j)) {
      c.support = {
        leadingWhitespace: d.firstChild.nodeType === 3,
        tbody: !d.getElementsByTagName("tbody").length,
        htmlSerialize: !!d.getElementsByTagName("link").length,
        style: /red/.test(j.getAttribute("style")),
        hrefNormalized: j.getAttribute("href") === "/a",
        opacity: /^0.55$/.test(j.style.opacity),
        cssFloat: !!j.style.cssFloat,
        checkOn: d.getElementsByTagName("input")[0].value === "on",
        optSelected: s
          .createElement("select")
          .appendChild(s.createElement("option")).selected,
        parentNode:
          d.removeChild(d.appendChild(s.createElement("div"))).parentNode ===
          null,
        deleteExpando: true,
        checkClone: false,
        scriptEval: false,
        noCloneEvent: true,
        boxModel: null,
      };
      b.type = "text/javascript";
      try {
        b.appendChild(s.createTextNode("window." + f + "=1;"));
      } catch (i) {}
      a.insertBefore(b, a.firstChild);
      if (A[f]) {
        c.support.scriptEval = true;
        delete A[f];
      }
      try {
        delete b.test;
      } catch (o) {
        c.support.deleteExpando = false;
      }
      a.removeChild(b);
      if (d.attachEvent && d.fireEvent) {
        d.attachEvent("onclick", function k() {
          c.support.noCloneEvent = false;
          d.detachEvent("onclick", k);
        });
        d.cloneNode(true).fireEvent("onclick");
      }
      d = s.createElement("div");
      d.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
      a = s.createDocumentFragment();
      a.appendChild(d.firstChild);
      c.support.checkClone = a
        .cloneNode(true)
        .cloneNode(true).lastChild.checked;
      c(function () {
        var k = s.createElement("div");
        k.style.width = k.style.paddingLeft = "1px";
        s.body.appendChild(k);
        c.boxModel = c.support.boxModel = k.offsetWidth === 2;
        s.body.removeChild(k).style.display = "none";
      });
      a = function (k) {
        var n = s.createElement("div");
        k = "on" + k;
        var r = k in n;
        if (!r) {
          n.setAttribute(k, "return;");
          r = typeof n[k] === "function";
        }
        return r;
      };
      c.support.submitBubbles = a("submit");
      c.support.changeBubbles = a("change");
      a = b = d = e = j = null;
    }
  })();
  c.props = {
    for: "htmlFor",
    class: "className",
    readonly: "readOnly",
    maxlength: "maxLength",
    cellspacing: "cellSpacing",
    rowspan: "rowSpan",
    colspan: "colSpan",
    tabindex: "tabIndex",
    usemap: "useMap",
    frameborder: "frameBorder",
  };
  var G = "jQuery" + J(),
    Ya = 0,
    za = {};
  c.extend({
    cache: {},
    expando: G,
    noData: { embed: true, object: true, applet: true },
    data: function (a, b, d) {
      if (!(a.nodeName && c.noData[a.nodeName.toLowerCase()])) {
        a = a == A ? za : a;
        var f = a[G],
          e = c.cache;
        if (!f && typeof b === "string" && d === w) return null;
        f || (f = ++Ya);
        if (typeof b === "object") {
          a[G] = f;
          e[f] = c.extend(true, {}, b);
        } else if (!e[f]) {
          a[G] = f;
          e[f] = {};
        }
        a = e[f];
        if (d !== w) a[b] = d;
        return typeof b === "string" ? a[b] : a;
      }
    },
    removeData: function (a, b) {
      if (!(a.nodeName && c.noData[a.nodeName.toLowerCase()])) {
        a = a == A ? za : a;
        var d = a[G],
          f = c.cache,
          e = f[d];
        if (b) {
          if (e) {
            delete e[b];
            c.isEmptyObject(e) && c.removeData(a);
          }
        } else {
          if (c.support.deleteExpando) delete a[c.expando];
          else a.removeAttribute && a.removeAttribute(c.expando);
          delete f[d];
        }
      }
    },
  });
  c.fn.extend({
    data: function (a, b) {
      if (typeof a === "undefined" && this.length) return c.data(this[0]);
      else if (typeof a === "object")
        return this.each(function () {
          c.data(this, a);
        });
      var d = a.split(".");
      d[1] = d[1] ? "." + d[1] : "";
      if (b === w) {
        var f = this.triggerHandler("getData" + d[1] + "!", [d[0]]);
        if (f === w && this.length) f = c.data(this[0], a);
        return f === w && d[1] ? this.data(d[0]) : f;
      } else
        return this.trigger("setData" + d[1] + "!", [d[0], b]).each(
          function () {
            c.data(this, a, b);
          }
        );
    },
    removeData: function (a) {
      return this.each(function () {
        c.removeData(this, a);
      });
    },
  });
  c.extend({
    queue: function (a, b, d) {
      if (a) {
        b = (b || "fx") + "queue";
        var f = c.data(a, b);
        if (!d) return f || [];
        if (!f || c.isArray(d)) f = c.data(a, b, c.makeArray(d));
        else f.push(d);
        return f;
      }
    },
    dequeue: function (a, b) {
      b = b || "fx";
      var d = c.queue(a, b),
        f = d.shift();
      if (f === "inprogress") f = d.shift();
      if (f) {
        b === "fx" && d.unshift("inprogress");
        f.call(a, function () {
          c.dequeue(a, b);
        });
      }
    },
  });
  c.fn.extend({
    queue: function (a, b) {
      if (typeof a !== "string") {
        b = a;
        a = "fx";
      }
      if (b === w) return c.queue(this[0], a);
      return this.each(function () {
        var d = c.queue(this, a, b);
        a === "fx" && d[0] !== "inprogress" && c.dequeue(this, a);
      });
    },
    dequeue: function (a) {
      return this.each(function () {
        c.dequeue(this, a);
      });
    },
    delay: function (a, b) {
      a = c.fx ? c.fx.speeds[a] || a : a;
      b = b || "fx";
      return this.queue(b, function () {
        var d = this;
        setTimeout(function () {
          c.dequeue(d, b);
        }, a);
      });
    },
    clearQueue: function (a) {
      return this.queue(a || "fx", []);
    },
  });
  var Aa = /[\n\t]/g,
    ca = /\s+/,
    Za = /\r/g,
    $a = /href|src|style/,
    ab = /(button|input)/i,
    bb = /(button|input|object|select|textarea)/i,
    cb = /^(a|area)$/i,
    Ba = /radio|checkbox/;
  c.fn.extend({
    attr: function (a, b) {
      return X(this, a, b, true, c.attr);
    },
    removeAttr: function (a) {
      return this.each(function () {
        c.attr(this, a, "");
        this.nodeType === 1 && this.removeAttribute(a);
      });
    },
    addClass: function (a) {
      if (c.isFunction(a))
        return this.each(function (n) {
          var r = c(this);
          r.addClass(a.call(this, n, r.attr("class")));
        });
      if (a && typeof a === "string")
        for (var b = (a || "").split(ca), d = 0, f = this.length; d < f; d++) {
          var e = this[d];
          if (e.nodeType === 1)
            if (e.className) {
              for (
                var j = " " + e.className + " ",
                  i = e.className,
                  o = 0,
                  k = b.length;
                o < k;
                o++
              )
                if (j.indexOf(" " + b[o] + " ") < 0) i += " " + b[o];
              e.className = c.trim(i);
            } else e.className = a;
        }
      return this;
    },
    removeClass: function (a) {
      if (c.isFunction(a))
        return this.each(function (k) {
          var n = c(this);
          n.removeClass(a.call(this, k, n.attr("class")));
        });
      if ((a && typeof a === "string") || a === w)
        for (var b = (a || "").split(ca), d = 0, f = this.length; d < f; d++) {
          var e = this[d];
          if (e.nodeType === 1 && e.className)
            if (a) {
              for (
                var j = (" " + e.className + " ").replace(Aa, " "),
                  i = 0,
                  o = b.length;
                i < o;
                i++
              )
                j = j.replace(" " + b[i] + " ", " ");
              e.className = c.trim(j);
            } else e.className = "";
        }
      return this;
    },
    toggleClass: function (a, b) {
      var d = typeof a,
        f = typeof b === "boolean";
      if (c.isFunction(a))
        return this.each(function (e) {
          var j = c(this);
          j.toggleClass(a.call(this, e, j.attr("class"), b), b);
        });
      return this.each(function () {
        if (d === "string")
          for (
            var e, j = 0, i = c(this), o = b, k = a.split(ca);
            (e = k[j++]);

          ) {
            o = f ? o : !i.hasClass(e);
            i[o ? "addClass" : "removeClass"](e);
          }
        else if (d === "undefined" || d === "boolean") {
          this.className && c.data(this, "__className__", this.className);
          this.className =
            this.className || a === false
              ? ""
              : c.data(this, "__className__") || "";
        }
      });
    },
    hasClass: function (a) {
      a = " " + a + " ";
      for (var b = 0, d = this.length; b < d; b++)
        if ((" " + this[b].className + " ").replace(Aa, " ").indexOf(a) > -1)
          return true;
      return false;
    },
    val: function (a) {
      if (a === w) {
        var b = this[0];
        if (b) {
          if (c.nodeName(b, "option"))
            return (b.attributes.value || {}).specified ? b.value : b.text;
          if (c.nodeName(b, "select")) {
            var d = b.selectedIndex,
              f = [],
              e = b.options;
            b = b.type === "select-one";
            if (d < 0) return null;
            var j = b ? d : 0;
            for (d = b ? d + 1 : e.length; j < d; j++) {
              var i = e[j];
              if (i.selected) {
                a = c(i).val();
                if (b) return a;
                f.push(a);
              }
            }
            return f;
          }
          if (Ba.test(b.type) && !c.support.checkOn)
            return b.getAttribute("value") === null ? "on" : b.value;
          return (b.value || "").replace(Za, "");
        }
        return w;
      }
      var o = c.isFunction(a);
      return this.each(function (k) {
        var n = c(this),
          r = a;
        if (this.nodeType === 1) {
          if (o) r = a.call(this, k, n.val());
          if (typeof r === "number") r += "";
          if (c.isArray(r) && Ba.test(this.type))
            this.checked = c.inArray(n.val(), r) >= 0;
          else if (c.nodeName(this, "select")) {
            var u = c.makeArray(r);
            c("option", this).each(function () {
              this.selected = c.inArray(c(this).val(), u) >= 0;
            });
            if (!u.length) this.selectedIndex = -1;
          } else this.value = r;
        }
      });
    },
  });
  c.extend({
    attrFn: {
      val: true,
      css: true,
      html: true,
      text: true,
      data: true,
      width: true,
      height: true,
      offset: true,
    },
    attr: function (a, b, d, f) {
      if (!a || a.nodeType === 3 || a.nodeType === 8) return w;
      if (f && b in c.attrFn) return c(a)[b](d);
      f = a.nodeType !== 1 || !c.isXMLDoc(a);
      var e = d !== w;
      b = (f && c.props[b]) || b;
      if (a.nodeType === 1) {
        var j = $a.test(b);
        if (b in a && f && !j) {
          if (e) {
            b === "type" &&
              ab.test(a.nodeName) &&
              a.parentNode &&
              c.error("type property can't be changed");
            a[b] = d;
          }
          if (c.nodeName(a, "form") && a.getAttributeNode(b))
            return a.getAttributeNode(b).nodeValue;
          if (b === "tabIndex")
            return (b = a.getAttributeNode("tabIndex")) && b.specified
              ? b.value
              : bb.test(a.nodeName) || (cb.test(a.nodeName) && a.href)
              ? 0
              : w;
          return a[b];
        }
        if (!c.support.style && f && b === "style") {
          if (e) a.style.cssText = "" + d;
          return a.style.cssText;
        }
        e && a.setAttribute(b, "" + d);
        a =
          !c.support.hrefNormalized && f && j
            ? a.getAttribute(b, 2)
            : a.getAttribute(b);
        return a === null ? w : a;
      }
      return c.style(a, b, d);
    },
  });
  var O = /\.(.*)$/,
    db = function (a) {
      return a.replace(/[^\w\s\.\|`]/g, function (b) {
        return "\\" + b;
      });
    };
  c.event = {
    add: function (a, b, d, f) {
      if (!(a.nodeType === 3 || a.nodeType === 8)) {
        if (a.setInterval && a !== A && !a.frameElement) a = A;
        var e, j;
        if (d.handler) {
          e = d;
          d = e.handler;
        }
        if (!d.guid) d.guid = c.guid++;
        if ((j = c.data(a))) {
          var i = (j.events = j.events || {}),
            o = j.handle;
          if (!o)
            j.handle = o = function () {
              return typeof c !== "undefined" && !c.event.triggered
                ? c.event.handle.apply(o.elem, arguments)
                : w;
            };
          o.elem = a;
          b = b.split(" ");
          for (var k, n = 0, r; (k = b[n++]); ) {
            j = e ? c.extend({}, e) : { handler: d, data: f };
            if (k.indexOf(".") > -1) {
              r = k.split(".");
              k = r.shift();
              j.namespace = r.slice(0).sort().join(".");
            } else {
              r = [];
              j.namespace = "";
            }
            j.type = k;
            j.guid = d.guid;
            var u = i[k],
              z = c.event.special[k] || {};
            if (!u) {
              u = i[k] = [];
              if (!z.setup || z.setup.call(a, f, r, o) === false)
                if (a.addEventListener) a.addEventListener(k, o, false);
                else a.attachEvent && a.attachEvent("on" + k, o);
            }
            if (z.add) {
              z.add.call(a, j);
              if (!j.handler.guid) j.handler.guid = d.guid;
            }
            u.push(j);
            c.event.global[k] = true;
          }
          a = null;
        }
      }
    },
    global: {},
    remove: function (a, b, d, f) {
      if (!(a.nodeType === 3 || a.nodeType === 8)) {
        var e,
          j = 0,
          i,
          o,
          k,
          n,
          r,
          u,
          z = c.data(a),
          C = z && z.events;
        if (z && C) {
          if (b && b.type) {
            d = b.handler;
            b = b.type;
          }
          if (!b || (typeof b === "string" && b.charAt(0) === ".")) {
            b = b || "";
            for (e in C) c.event.remove(a, e + b);
          } else {
            for (b = b.split(" "); (e = b[j++]); ) {
              n = e;
              i = e.indexOf(".") < 0;
              o = [];
              if (!i) {
                o = e.split(".");
                e = o.shift();
                k = new RegExp(
                  "(^|\\.)" +
                    c.map(o.slice(0).sort(), db).join("\\.(?:.*\\.)?") +
                    "(\\.|$)"
                );
              }
              if ((r = C[e]))
                if (d) {
                  n = c.event.special[e] || {};
                  for (B = f || 0; B < r.length; B++) {
                    u = r[B];
                    if (d.guid === u.guid) {
                      if (i || k.test(u.namespace)) {
                        f == null && r.splice(B--, 1);
                        n.remove && n.remove.call(a, u);
                      }
                      if (f != null) break;
                    }
                  }
                  if (r.length === 0 || (f != null && r.length === 1)) {
                    if (!n.teardown || n.teardown.call(a, o) === false)
                      Ca(a, e, z.handle);
                    delete C[e];
                  }
                } else
                  for (var B = 0; B < r.length; B++) {
                    u = r[B];
                    if (i || k.test(u.namespace)) {
                      c.event.remove(a, n, u.handler, B);
                      r.splice(B--, 1);
                    }
                  }
            }
            if (c.isEmptyObject(C)) {
              if ((b = z.handle)) b.elem = null;
              delete z.events;
              delete z.handle;
              c.isEmptyObject(z) && c.removeData(a);
            }
          }
        }
      }
    },
    trigger: function (a, b, d, f) {
      var e = a.type || a;
      if (!f) {
        a =
          typeof a === "object"
            ? a[G]
              ? a
              : c.extend(c.Event(e), a)
            : c.Event(e);
        if (e.indexOf("!") >= 0) {
          a.type = e = e.slice(0, -1);
          a.exclusive = true;
        }
        if (!d) {
          a.stopPropagation();
          c.event.global[e] &&
            c.each(c.cache, function () {
              this.events &&
                this.events[e] &&
                c.event.trigger(a, b, this.handle.elem);
            });
        }
        if (!d || d.nodeType === 3 || d.nodeType === 8) return w;
        a.result = w;
        a.target = d;
        b = c.makeArray(b);
        b.unshift(a);
      }
      a.currentTarget = d;
      (f = c.data(d, "handle")) && f.apply(d, b);
      f = d.parentNode || d.ownerDocument;
      try {
        if (!(d && d.nodeName && c.noData[d.nodeName.toLowerCase()]))
          if (d["on" + e] && d["on" + e].apply(d, b) === false)
            a.result = false;
      } catch (j) {}
      if (!a.isPropagationStopped() && f) c.event.trigger(a, b, f, true);
      else if (!a.isDefaultPrevented()) {
        f = a.target;
        var i,
          o = c.nodeName(f, "a") && e === "click",
          k = c.event.special[e] || {};
        if (
          (!k._default || k._default.call(d, a) === false) &&
          !o &&
          !(f && f.nodeName && c.noData[f.nodeName.toLowerCase()])
        ) {
          try {
            if (f[e]) {
              if ((i = f["on" + e])) f["on" + e] = null;
              c.event.triggered = true;
              f[e]();
            }
          } catch (n) {}
          if (i) f["on" + e] = i;
          c.event.triggered = false;
        }
      }
    },
    handle: function (a) {
      var b, d, f, e;
      a = arguments[0] = c.event.fix(a || A.event);
      a.currentTarget = this;
      b = a.type.indexOf(".") < 0 && !a.exclusive;
      if (!b) {
        d = a.type.split(".");
        a.type = d.shift();
        f = new RegExp(
          "(^|\\.)" + d.slice(0).sort().join("\\.(?:.*\\.)?") + "(\\.|$)"
        );
      }
      e = c.data(this, "events");
      d = e[a.type];
      if (e && d) {
        d = d.slice(0);
        e = 0;
        for (var j = d.length; e < j; e++) {
          var i = d[e];
          if (b || f.test(i.namespace)) {
            a.handler = i.handler;
            a.data = i.data;
            a.handleObj = i;
            i = i.handler.apply(this, arguments);
            if (i !== w) {
              a.result = i;
              if (i === false) {
                a.preventDefault();
                a.stopPropagation();
              }
            }
            if (a.isImmediatePropagationStopped()) break;
          }
        }
      }
      return a.result;
    },
    props:
      "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(
        " "
      ),
    fix: function (a) {
      if (a[G]) return a;
      var b = a;
      a = c.Event(b);
      for (var d = this.props.length, f; d; ) {
        f = this.props[--d];
        a[f] = b[f];
      }
      if (!a.target) a.target = a.srcElement || s;
      if (a.target.nodeType === 3) a.target = a.target.parentNode;
      if (!a.relatedTarget && a.fromElement)
        a.relatedTarget =
          a.fromElement === a.target ? a.toElement : a.fromElement;
      if (a.pageX == null && a.clientX != null) {
        b = s.documentElement;
        d = s.body;
        a.pageX =
          a.clientX +
          ((b && b.scrollLeft) || (d && d.scrollLeft) || 0) -
          ((b && b.clientLeft) || (d && d.clientLeft) || 0);
        a.pageY =
          a.clientY +
          ((b && b.scrollTop) || (d && d.scrollTop) || 0) -
          ((b && b.clientTop) || (d && d.clientTop) || 0);
      }
      if (!a.which && (a.charCode || a.charCode === 0 ? a.charCode : a.keyCode))
        a.which = a.charCode || a.keyCode;
      if (!a.metaKey && a.ctrlKey) a.metaKey = a.ctrlKey;
      if (!a.which && a.button !== w)
        a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0;
      return a;
    },
    guid: 1e8,
    proxy: c.proxy,
    special: {
      ready: { setup: c.bindReady, teardown: c.noop },
      live: {
        add: function (a) {
          c.event.add(this, a.origType, c.extend({}, a, { handler: oa }));
        },
        remove: function (a) {
          var b = true,
            d = a.origType.replace(O, "");
          c.each(c.data(this, "events").live || [], function () {
            if (d === this.origType.replace(O, "")) return (b = false);
          });
          b && c.event.remove(this, a.origType, oa);
        },
      },
      beforeunload: {
        setup: function (a, b, d) {
          if (this.setInterval) this.onbeforeunload = d;
          return false;
        },
        teardown: function (a, b) {
          if (this.onbeforeunload === b) this.onbeforeunload = null;
        },
      },
    },
  };
  var Ca = s.removeEventListener
    ? function (a, b, d) {
        a.removeEventListener(b, d, false);
      }
    : function (a, b, d) {
        a.detachEvent("on" + b, d);
      };
  c.Event = function (a) {
    if (!this.preventDefault) return new c.Event(a);
    if (a && a.type) {
      this.originalEvent = a;
      this.type = a.type;
    } else this.type = a;
    this.timeStamp = J();
    this[G] = true;
  };
  c.Event.prototype = {
    preventDefault: function () {
      this.isDefaultPrevented = Z;
      var a = this.originalEvent;
      if (a) {
        a.preventDefault && a.preventDefault();
        a.returnValue = false;
      }
    },
    stopPropagation: function () {
      this.isPropagationStopped = Z;
      var a = this.originalEvent;
      if (a) {
        a.stopPropagation && a.stopPropagation();
        a.cancelBubble = true;
      }
    },
    stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = Z;
      this.stopPropagation();
    },
    isDefaultPrevented: Y,
    isPropagationStopped: Y,
    isImmediatePropagationStopped: Y,
  };
  var Da = function (a) {
      var b = a.relatedTarget;
      try {
        for (; b && b !== this; ) b = b.parentNode;
        if (b !== this) {
          a.type = a.data;
          c.event.handle.apply(this, arguments);
        }
      } catch (d) {}
    },
    Ea = function (a) {
      a.type = a.data;
      c.event.handle.apply(this, arguments);
    };
  c.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (a, b) {
    c.event.special[a] = {
      setup: function (d) {
        c.event.add(this, b, d && d.selector ? Ea : Da, a);
      },
      teardown: function (d) {
        c.event.remove(this, b, d && d.selector ? Ea : Da);
      },
    };
  });
  if (!c.support.submitBubbles)
    c.event.special.submit = {
      setup: function () {
        if (this.nodeName.toLowerCase() !== "form") {
          c.event.add(this, "click.specialSubmit", function (a) {
            var b = a.target,
              d = b.type;
            if (
              (d === "submit" || d === "image") &&
              c(b).closest("form").length
            )
              return na("submit", this, arguments);
          });
          c.event.add(this, "keypress.specialSubmit", function (a) {
            var b = a.target,
              d = b.type;
            if (
              (d === "text" || d === "password") &&
              c(b).closest("form").length &&
              a.keyCode === 13
            )
              return na("submit", this, arguments);
          });
        } else return false;
      },
      teardown: function () {
        c.event.remove(this, ".specialSubmit");
      },
    };
  if (!c.support.changeBubbles) {
    var da = /textarea|input|select/i,
      ea,
      Fa = function (a) {
        var b = a.type,
          d = a.value;
        if (b === "radio" || b === "checkbox") d = a.checked;
        else if (b === "select-multiple")
          d =
            a.selectedIndex > -1
              ? c
                  .map(a.options, function (f) {
                    return f.selected;
                  })
                  .join("-")
              : "";
        else if (a.nodeName.toLowerCase() === "select") d = a.selectedIndex;
        return d;
      },
      fa = function (a, b) {
        var d = a.target,
          f,
          e;
        if (!(!da.test(d.nodeName) || d.readOnly)) {
          f = c.data(d, "_change_data");
          e = Fa(d);
          if (a.type !== "focusout" || d.type !== "radio")
            c.data(d, "_change_data", e);
          if (!(f === w || e === f))
            if (f != null || e) {
              a.type = "change";
              return c.event.trigger(a, b, d);
            }
        }
      };
    c.event.special.change = {
      filters: {
        focusout: fa,
        click: function (a) {
          var b = a.target,
            d = b.type;
          if (
            d === "radio" ||
            d === "checkbox" ||
            b.nodeName.toLowerCase() === "select"
          )
            return fa.call(this, a);
        },
        keydown: function (a) {
          var b = a.target,
            d = b.type;
          if (
            (a.keyCode === 13 && b.nodeName.toLowerCase() !== "textarea") ||
            (a.keyCode === 32 && (d === "checkbox" || d === "radio")) ||
            d === "select-multiple"
          )
            return fa.call(this, a);
        },
        beforeactivate: function (a) {
          a = a.target;
          c.data(a, "_change_data", Fa(a));
        },
      },
      setup: function () {
        if (this.type === "file") return false;
        for (var a in ea) c.event.add(this, a + ".specialChange", ea[a]);
        return da.test(this.nodeName);
      },
      teardown: function () {
        c.event.remove(this, ".specialChange");
        return da.test(this.nodeName);
      },
    };
    ea = c.event.special.change.filters;
  }
  s.addEventListener &&
    c.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
      function d(f) {
        f = c.event.fix(f);
        f.type = b;
        return c.event.handle.call(this, f);
      }
      c.event.special[b] = {
        setup: function () {
          this.addEventListener(a, d, true);
        },
        teardown: function () {
          this.removeEventListener(a, d, true);
        },
      };
    });
  c.each(["bind", "one"], function (a, b) {
    c.fn[b] = function (d, f, e) {
      if (typeof d === "object") {
        for (var j in d) this[b](j, f, d[j], e);
        return this;
      }
      if (c.isFunction(f)) {
        e = f;
        f = w;
      }
      var i =
        b === "one"
          ? c.proxy(e, function (k) {
              c(this).unbind(k, i);
              return e.apply(this, arguments);
            })
          : e;
      if (d === "unload" && b !== "one") this.one(d, f, e);
      else {
        j = 0;
        for (var o = this.length; j < o; j++) c.event.add(this[j], d, i, f);
      }
      return this;
    };
  });
  c.fn.extend({
    unbind: function (a, b) {
      if (typeof a === "object" && !a.preventDefault)
        for (var d in a) this.unbind(d, a[d]);
      else {
        d = 0;
        for (var f = this.length; d < f; d++) c.event.remove(this[d], a, b);
      }
      return this;
    },
    delegate: function (a, b, d, f) {
      return this.live(b, d, f, a);
    },
    undelegate: function (a, b, d) {
      return arguments.length === 0
        ? this.unbind("live")
        : this.die(b, null, d, a);
    },
    trigger: function (a, b) {
      return this.each(function () {
        c.event.trigger(a, b, this);
      });
    },
    triggerHandler: function (a, b) {
      if (this[0]) {
        a = c.Event(a);
        a.preventDefault();
        a.stopPropagation();
        c.event.trigger(a, b, this[0]);
        return a.result;
      }
    },
    toggle: function (a) {
      for (var b = arguments, d = 1; d < b.length; ) c.proxy(a, b[d++]);
      return this.click(
        c.proxy(a, function (f) {
          var e = (c.data(this, "lastToggle" + a.guid) || 0) % d;
          c.data(this, "lastToggle" + a.guid, e + 1);
          f.preventDefault();
          return b[e].apply(this, arguments) || false;
        })
      );
    },
    hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    },
  });
  var Ga = {
    focus: "focusin",
    blur: "focusout",
    mouseenter: "mouseover",
    mouseleave: "mouseout",
  };
  c.each(["live", "die"], function (a, b) {
    c.fn[b] = function (d, f, e, j) {
      var i,
        o = 0,
        k,
        n,
        r = j || this.selector,
        u = j ? this : c(this.context);
      if (c.isFunction(f)) {
        e = f;
        f = w;
      }
      for (d = (d || "").split(" "); (i = d[o++]) != null; ) {
        j = O.exec(i);
        k = "";
        if (j) {
          k = j[0];
          i = i.replace(O, "");
        }
        if (i === "hover") d.push("mouseenter" + k, "mouseleave" + k);
        else {
          n = i;
          if (i === "focus" || i === "blur") {
            d.push(Ga[i] + k);
            i += k;
          } else i = (Ga[i] || i) + k;
          b === "live"
            ? u.each(function () {
                c.event.add(this, pa(i, r), {
                  data: f,
                  selector: r,
                  handler: e,
                  origType: i,
                  origHandler: e,
                  preType: n,
                });
              })
            : u.unbind(pa(i, r), e);
        }
      }
      return this;
    };
  });
  c.each(
    "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(
      " "
    ),
    function (a, b) {
      c.fn[b] = function (d) {
        return d ? this.bind(b, d) : this.trigger(b);
      };
      if (c.attrFn) c.attrFn[b] = true;
    }
  );
  A.attachEvent &&
    !A.addEventListener &&
    A.attachEvent("onunload", function () {
      for (var a in c.cache)
        if (c.cache[a].handle)
          try {
            c.event.remove(c.cache[a].handle.elem);
          } catch (b) {}
    });
  (function () {
    function a(g) {
      for (var h = "", l, m = 0; g[m]; m++) {
        l = g[m];
        if (l.nodeType === 3 || l.nodeType === 4) h += l.nodeValue;
        else if (l.nodeType !== 8) h += a(l.childNodes);
      }
      return h;
    }
    function b(g, h, l, m, q, p) {
      q = 0;
      for (var v = m.length; q < v; q++) {
        var t = m[q];
        if (t) {
          t = t[g];
          for (var y = false; t; ) {
            if (t.sizcache === l) {
              y = m[t.sizset];
              break;
            }
            if (t.nodeType === 1 && !p) {
              t.sizcache = l;
              t.sizset = q;
            }
            if (t.nodeName.toLowerCase() === h) {
              y = t;
              break;
            }
            t = t[g];
          }
          m[q] = y;
        }
      }
    }
    function d(g, h, l, m, q, p) {
      q = 0;
      for (var v = m.length; q < v; q++) {
        var t = m[q];
        if (t) {
          t = t[g];
          for (var y = false; t; ) {
            if (t.sizcache === l) {
              y = m[t.sizset];
              break;
            }
            if (t.nodeType === 1) {
              if (!p) {
                t.sizcache = l;
                t.sizset = q;
              }
              if (typeof h !== "string") {
                if (t === h) {
                  y = true;
                  break;
                }
              } else if (k.filter(h, [t]).length > 0) {
                y = t;
                break;
              }
            }
            t = t[g];
          }
          m[q] = y;
        }
      }
    }
    var f =
        /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
      e = 0,
      j = Object.prototype.toString,
      i = false,
      o = true;
    [0, 0].sort(function () {
      o = false;
      return 0;
    });
    var k = function (g, h, l, m) {
      l = l || [];
      var q = (h = h || s);
      if (h.nodeType !== 1 && h.nodeType !== 9) return [];
      if (!g || typeof g !== "string") return l;
      for (
        var p = [], v, t, y, S, H = true, M = x(h), I = g;
        (f.exec(""), (v = f.exec(I))) !== null;

      ) {
        I = v[3];
        p.push(v[1]);
        if (v[2]) {
          S = v[3];
          break;
        }
      }
      if (p.length > 1 && r.exec(g))
        if (p.length === 2 && n.relative[p[0]]) t = ga(p[0] + p[1], h);
        else
          for (t = n.relative[p[0]] ? [h] : k(p.shift(), h); p.length; ) {
            g = p.shift();
            if (n.relative[g]) g += p.shift();
            t = ga(g, t);
          }
      else {
        if (
          !m &&
          p.length > 1 &&
          h.nodeType === 9 &&
          !M &&
          n.match.ID.test(p[0]) &&
          !n.match.ID.test(p[p.length - 1])
        ) {
          v = k.find(p.shift(), h, M);
          h = v.expr ? k.filter(v.expr, v.set)[0] : v.set[0];
        }
        if (h) {
          v = m
            ? { expr: p.pop(), set: z(m) }
            : k.find(
                p.pop(),
                p.length === 1 && (p[0] === "~" || p[0] === "+") && h.parentNode
                  ? h.parentNode
                  : h,
                M
              );
          t = v.expr ? k.filter(v.expr, v.set) : v.set;
          if (p.length > 0) y = z(t);
          else H = false;
          for (; p.length; ) {
            var D = p.pop();
            v = D;
            if (n.relative[D]) v = p.pop();
            else D = "";
            if (v == null) v = h;
            n.relative[D](y, v, M);
          }
        } else y = [];
      }
      y || (y = t);
      y || k.error(D || g);
      if (j.call(y) === "[object Array]")
        if (H)
          if (h && h.nodeType === 1)
            for (g = 0; y[g] != null; g++) {
              if (
                y[g] &&
                (y[g] === true || (y[g].nodeType === 1 && E(h, y[g])))
              )
                l.push(t[g]);
            }
          else
            for (g = 0; y[g] != null; g++)
              y[g] && y[g].nodeType === 1 && l.push(t[g]);
        else l.push.apply(l, y);
      else z(y, l);
      if (S) {
        k(S, q, l, m);
        k.uniqueSort(l);
      }
      return l;
    };
    k.uniqueSort = function (g) {
      if (B) {
        i = o;
        g.sort(B);
        if (i)
          for (var h = 1; h < g.length; h++)
            g[h] === g[h - 1] && g.splice(h--, 1);
      }
      return g;
    };
    k.matches = function (g, h) {
      return k(g, null, null, h);
    };
    k.find = function (g, h, l) {
      var m, q;
      if (!g) return [];
      for (var p = 0, v = n.order.length; p < v; p++) {
        var t = n.order[p];
        if ((q = n.leftMatch[t].exec(g))) {
          var y = q[1];
          q.splice(1, 1);
          if (y.substr(y.length - 1) !== "\\") {
            q[1] = (q[1] || "").replace(/\\/g, "");
            m = n.find[t](q, h, l);
            if (m != null) {
              g = g.replace(n.match[t], "");
              break;
            }
          }
        }
      }
      m || (m = h.getElementsByTagName("*"));
      return { set: m, expr: g };
    };
    k.filter = function (g, h, l, m) {
      for (
        var q = g, p = [], v = h, t, y, S = h && h[0] && x(h[0]);
        g && h.length;

      ) {
        for (var H in n.filter)
          if ((t = n.leftMatch[H].exec(g)) != null && t[2]) {
            var M = n.filter[H],
              I,
              D;
            D = t[1];
            y = false;
            t.splice(1, 1);
            if (D.substr(D.length - 1) !== "\\") {
              if (v === p) p = [];
              if (n.preFilter[H])
                if ((t = n.preFilter[H](t, v, l, p, m, S))) {
                  if (t === true) continue;
                } else y = I = true;
              if (t)
                for (var U = 0; (D = v[U]) != null; U++)
                  if (D) {
                    I = M(D, t, U, v);
                    var Ha = m ^ !!I;
                    if (l && I != null)
                      if (Ha) y = true;
                      else v[U] = false;
                    else if (Ha) {
                      p.push(D);
                      y = true;
                    }
                  }
              if (I !== w) {
                l || (v = p);
                g = g.replace(n.match[H], "");
                if (!y) return [];
                break;
              }
            }
          }
        if (g === q)
          if (y == null) k.error(g);
          else break;
        q = g;
      }
      return v;
    };
    k.error = function (g) {
      throw "Syntax error, unrecognized expression: " + g;
    };
    var n = (k.selectors = {
        order: ["ID", "NAME", "TAG"],
        match: {
          ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
          CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
          NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
          ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
          TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
          CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
          POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
          PSEUDO:
            /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/,
        },
        leftMatch: {},
        attrMap: { class: "className", for: "htmlFor" },
        attrHandle: {
          href: function (g) {
            return g.getAttribute("href");
          },
        },
        relative: {
          "+": function (g, h) {
            var l = typeof h === "string",
              m = l && !/\W/.test(h);
            l = l && !m;
            if (m) h = h.toLowerCase();
            m = 0;
            for (var q = g.length, p; m < q; m++)
              if ((p = g[m])) {
                for (; (p = p.previousSibling) && p.nodeType !== 1; );
                g[m] =
                  l || (p && p.nodeName.toLowerCase() === h)
                    ? p || false
                    : p === h;
              }
            l && k.filter(h, g, true);
          },
          ">": function (g, h) {
            var l = typeof h === "string";
            if (l && !/\W/.test(h)) {
              h = h.toLowerCase();
              for (var m = 0, q = g.length; m < q; m++) {
                var p = g[m];
                if (p) {
                  l = p.parentNode;
                  g[m] = l.nodeName.toLowerCase() === h ? l : false;
                }
              }
            } else {
              m = 0;
              for (q = g.length; m < q; m++)
                if ((p = g[m])) g[m] = l ? p.parentNode : p.parentNode === h;
              l && k.filter(h, g, true);
            }
          },
          "": function (g, h, l) {
            var m = e++,
              q = d;
            if (typeof h === "string" && !/\W/.test(h)) {
              var p = (h = h.toLowerCase());
              q = b;
            }
            q("parentNode", h, m, g, p, l);
          },
          "~": function (g, h, l) {
            var m = e++,
              q = d;
            if (typeof h === "string" && !/\W/.test(h)) {
              var p = (h = h.toLowerCase());
              q = b;
            }
            q("previousSibling", h, m, g, p, l);
          },
        },
        find: {
          ID: function (g, h, l) {
            if (typeof h.getElementById !== "undefined" && !l)
              return (g = h.getElementById(g[1])) ? [g] : [];
          },
          NAME: function (g, h) {
            if (typeof h.getElementsByName !== "undefined") {
              var l = [];
              h = h.getElementsByName(g[1]);
              for (var m = 0, q = h.length; m < q; m++)
                h[m].getAttribute("name") === g[1] && l.push(h[m]);
              return l.length === 0 ? null : l;
            }
          },
          TAG: function (g, h) {
            return h.getElementsByTagName(g[1]);
          },
        },
        preFilter: {
          CLASS: function (g, h, l, m, q, p) {
            g = " " + g[1].replace(/\\/g, "") + " ";
            if (p) return g;
            p = 0;
            for (var v; (v = h[p]) != null; p++)
              if (v)
                if (
                  q ^
                  (v.className &&
                    (" " + v.className + " ")
                      .replace(/[\t\n]/g, " ")
                      .indexOf(g) >= 0)
                )
                  l || m.push(v);
                else if (l) h[p] = false;
            return false;
          },
          ID: function (g) {
            return g[1].replace(/\\/g, "");
          },
          TAG: function (g) {
            return g[1].toLowerCase();
          },
          CHILD: function (g) {
            if (g[1] === "nth") {
              var h = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(
                (g[2] === "even" && "2n") ||
                  (g[2] === "odd" && "2n+1") ||
                  (!/\D/.test(g[2]) && "0n+" + g[2]) ||
                  g[2]
              );
              g[2] = h[1] + (h[2] || 1) - 0;
              g[3] = h[3] - 0;
            }
            g[0] = e++;
            return g;
          },
          ATTR: function (g, h, l, m, q, p) {
            h = g[1].replace(/\\/g, "");
            if (!p && n.attrMap[h]) g[1] = n.attrMap[h];
            if (g[2] === "~=") g[4] = " " + g[4] + " ";
            return g;
          },
          PSEUDO: function (g, h, l, m, q) {
            if (g[1] === "not")
              if ((f.exec(g[3]) || "").length > 1 || /^\w/.test(g[3]))
                g[3] = k(g[3], null, null, h);
              else {
                g = k.filter(g[3], h, l, true ^ q);
                l || m.push.apply(m, g);
                return false;
              }
            else if (n.match.POS.test(g[0]) || n.match.CHILD.test(g[0]))
              return true;
            return g;
          },
          POS: function (g) {
            g.unshift(true);
            return g;
          },
        },
        filters: {
          enabled: function (g) {
            return g.disabled === false && g.type !== "hidden";
          },
          disabled: function (g) {
            return g.disabled === true;
          },
          checked: function (g) {
            return g.checked === true;
          },
          selected: function (g) {
            return g.selected === true;
          },
          parent: function (g) {
            return !!g.firstChild;
          },
          empty: function (g) {
            return !g.firstChild;
          },
          has: function (g, h, l) {
            return !!k(l[3], g).length;
          },
          header: function (g) {
            return /h\d/i.test(g.nodeName);
          },
          text: function (g) {
            return "text" === g.type;
          },
          radio: function (g) {
            return "radio" === g.type;
          },
          checkbox: function (g) {
            return "checkbox" === g.type;
          },
          file: function (g) {
            return "file" === g.type;
          },
          password: function (g) {
            return "password" === g.type;
          },
          submit: function (g) {
            return "submit" === g.type;
          },
          image: function (g) {
            return "image" === g.type;
          },
          reset: function (g) {
            return "reset" === g.type;
          },
          button: function (g) {
            return "button" === g.type || g.nodeName.toLowerCase() === "button";
          },
          input: function (g) {
            return /input|select|textarea|button/i.test(g.nodeName);
          },
        },
        setFilters: {
          first: function (g, h) {
            return h === 0;
          },
          last: function (g, h, l, m) {
            return h === m.length - 1;
          },
          even: function (g, h) {
            return h % 2 === 0;
          },
          odd: function (g, h) {
            return h % 2 === 1;
          },
          lt: function (g, h, l) {
            return h < l[3] - 0;
          },
          gt: function (g, h, l) {
            return h > l[3] - 0;
          },
          nth: function (g, h, l) {
            return l[3] - 0 === h;
          },
          eq: function (g, h, l) {
            return l[3] - 0 === h;
          },
        },
        filter: {
          PSEUDO: function (g, h, l, m) {
            var q = h[1],
              p = n.filters[q];
            if (p) return p(g, l, h, m);
            else if (q === "contains")
              return (
                (g.textContent || g.innerText || a([g]) || "").indexOf(h[3]) >=
                0
              );
            else if (q === "not") {
              h = h[3];
              l = 0;
              for (m = h.length; l < m; l++) if (h[l] === g) return false;
              return true;
            } else k.error("Syntax error, unrecognized expression: " + q);
          },
          CHILD: function (g, h) {
            var l = h[1],
              m = g;
            switch (l) {
              case "only":
              case "first":
                for (; (m = m.previousSibling); )
                  if (m.nodeType === 1) return false;
                if (l === "first") return true;
                m = g;
              case "last":
                for (; (m = m.nextSibling); )
                  if (m.nodeType === 1) return false;
                return true;
              case "nth":
                l = h[2];
                var q = h[3];
                if (l === 1 && q === 0) return true;
                h = h[0];
                var p = g.parentNode;
                if (p && (p.sizcache !== h || !g.nodeIndex)) {
                  var v = 0;
                  for (m = p.firstChild; m; m = m.nextSibling)
                    if (m.nodeType === 1) m.nodeIndex = ++v;
                  p.sizcache = h;
                }
                g = g.nodeIndex - q;
                return l === 0 ? g === 0 : g % l === 0 && g / l >= 0;
            }
          },
          ID: function (g, h) {
            return g.nodeType === 1 && g.getAttribute("id") === h;
          },
          TAG: function (g, h) {
            return (
              (h === "*" && g.nodeType === 1) || g.nodeName.toLowerCase() === h
            );
          },
          CLASS: function (g, h) {
            return (
              (" " + (g.className || g.getAttribute("class")) + " ").indexOf(
                h
              ) > -1
            );
          },
          ATTR: function (g, h) {
            var l = h[1];
            g = n.attrHandle[l]
              ? n.attrHandle[l](g)
              : g[l] != null
              ? g[l]
              : g.getAttribute(l);
            l = g + "";
            var m = h[2];
            h = h[4];
            return g == null
              ? m === "!="
              : m === "="
              ? l === h
              : m === "*="
              ? l.indexOf(h) >= 0
              : m === "~="
              ? (" " + l + " ").indexOf(h) >= 0
              : !h
              ? l && g !== false
              : m === "!="
              ? l !== h
              : m === "^="
              ? l.indexOf(h) === 0
              : m === "$="
              ? l.substr(l.length - h.length) === h
              : m === "|="
              ? l === h || l.substr(0, h.length + 1) === h + "-"
              : false;
          },
          POS: function (g, h, l, m) {
            var q = n.setFilters[h[2]];
            if (q) return q(g, l, h, m);
          },
        },
      }),
      r = n.match.POS;
    for (var u in n.match) {
      n.match[u] = new RegExp(
        n.match[u].source + /(?![^\[]*\])(?![^\(]*\))/.source
      );
      n.leftMatch[u] = new RegExp(
        /(^(?:.|\r|\n)*?)/.source +
          n.match[u].source.replace(/\\(\d+)/g, function (g, h) {
            return "\\" + (h - 0 + 1);
          })
      );
    }
    var z = function (g, h) {
      g = Array.prototype.slice.call(g, 0);
      if (h) {
        h.push.apply(h, g);
        return h;
      }
      return g;
    };
    try {
      Array.prototype.slice.call(s.documentElement.childNodes, 0);
    } catch (C) {
      z = function (g, h) {
        h = h || [];
        if (j.call(g) === "[object Array]") Array.prototype.push.apply(h, g);
        else if (typeof g.length === "number")
          for (var l = 0, m = g.length; l < m; l++) h.push(g[l]);
        else for (l = 0; g[l]; l++) h.push(g[l]);
        return h;
      };
    }
    var B;
    if (s.documentElement.compareDocumentPosition)
      B = function (g, h) {
        if (!g.compareDocumentPosition || !h.compareDocumentPosition) {
          if (g == h) i = true;
          return g.compareDocumentPosition ? -1 : 1;
        }
        g = g.compareDocumentPosition(h) & 4 ? -1 : g === h ? 0 : 1;
        if (g === 0) i = true;
        return g;
      };
    else if ("sourceIndex" in s.documentElement)
      B = function (g, h) {
        if (!g.sourceIndex || !h.sourceIndex) {
          if (g == h) i = true;
          return g.sourceIndex ? -1 : 1;
        }
        g = g.sourceIndex - h.sourceIndex;
        if (g === 0) i = true;
        return g;
      };
    else if (s.createRange)
      B = function (g, h) {
        if (!g.ownerDocument || !h.ownerDocument) {
          if (g == h) i = true;
          return g.ownerDocument ? -1 : 1;
        }
        var l = g.ownerDocument.createRange(),
          m = h.ownerDocument.createRange();
        l.setStart(g, 0);
        l.setEnd(g, 0);
        m.setStart(h, 0);
        m.setEnd(h, 0);
        g = l.compareBoundaryPoints(Range.START_TO_END, m);
        if (g === 0) i = true;
        return g;
      };
    (function () {
      var g = s.createElement("div"),
        h = "script" + new Date().getTime();
      g.innerHTML = "<a name='" + h + "'/>";
      var l = s.documentElement;
      l.insertBefore(g, l.firstChild);
      if (s.getElementById(h)) {
        n.find.ID = function (m, q, p) {
          if (typeof q.getElementById !== "undefined" && !p)
            return (q = q.getElementById(m[1]))
              ? q.id === m[1] ||
                (typeof q.getAttributeNode !== "undefined" &&
                  q.getAttributeNode("id").nodeValue === m[1])
                ? [q]
                : w
              : [];
        };
        n.filter.ID = function (m, q) {
          var p =
            typeof m.getAttributeNode !== "undefined" &&
            m.getAttributeNode("id");
          return m.nodeType === 1 && p && p.nodeValue === q;
        };
      }
      l.removeChild(g);
      l = g = null;
    })();
    (function () {
      var g = s.createElement("div");
      g.appendChild(s.createComment(""));
      if (g.getElementsByTagName("*").length > 0)
        n.find.TAG = function (h, l) {
          l = l.getElementsByTagName(h[1]);
          if (h[1] === "*") {
            h = [];
            for (var m = 0; l[m]; m++) l[m].nodeType === 1 && h.push(l[m]);
            l = h;
          }
          return l;
        };
      g.innerHTML = "<a href='#'></a>";
      if (
        g.firstChild &&
        typeof g.firstChild.getAttribute !== "undefined" &&
        g.firstChild.getAttribute("href") !== "#"
      )
        n.attrHandle.href = function (h) {
          return h.getAttribute("href", 2);
        };
      g = null;
    })();
    s.querySelectorAll &&
      (function () {
        var g = k,
          h = s.createElement("div");
        h.innerHTML = "<p class='TEST'></p>";
        if (!(h.querySelectorAll && h.querySelectorAll(".TEST").length === 0)) {
          k = function (m, q, p, v) {
            q = q || s;
            if (!v && q.nodeType === 9 && !x(q))
              try {
                return z(q.querySelectorAll(m), p);
              } catch (t) {}
            return g(m, q, p, v);
          };
          for (var l in g) k[l] = g[l];
          h = null;
        }
      })();
    (function () {
      var g = s.createElement("div");
      g.innerHTML = "<div class='test e'></div><div class='test'></div>";
      if (
        !(
          !g.getElementsByClassName ||
          g.getElementsByClassName("e").length === 0
        )
      ) {
        g.lastChild.className = "e";
        if (g.getElementsByClassName("e").length !== 1) {
          n.order.splice(1, 0, "CLASS");
          n.find.CLASS = function (h, l, m) {
            if (typeof l.getElementsByClassName !== "undefined" && !m)
              return l.getElementsByClassName(h[1]);
          };
          g = null;
        }
      }
    })();
    var E = s.compareDocumentPosition
        ? function (g, h) {
            return !!(g.compareDocumentPosition(h) & 16);
          }
        : function (g, h) {
            return g !== h && (g.contains ? g.contains(h) : true);
          },
      x = function (g) {
        return (g = (g ? g.ownerDocument || g : 0).documentElement)
          ? g.nodeName !== "HTML"
          : false;
      },
      ga = function (g, h) {
        var l = [],
          m = "",
          q;
        for (h = h.nodeType ? [h] : h; (q = n.match.PSEUDO.exec(g)); ) {
          m += q[0];
          g = g.replace(n.match.PSEUDO, "");
        }
        g = n.relative[g] ? g + "*" : g;
        q = 0;
        for (var p = h.length; q < p; q++) k(g, h[q], l);
        return k.filter(m, l);
      };
    c.find = k;
    c.expr = k.selectors;
    c.expr[":"] = c.expr.filters;
    c.unique = k.uniqueSort;
    c.text = a;
    c.isXMLDoc = x;
    c.contains = E;
  })();
  var eb = /Until$/,
    fb = /^(?:parents|prevUntil|prevAll)/,
    gb = /,/;
  R = Array.prototype.slice;
  var Ia = function (a, b, d) {
    if (c.isFunction(b))
      return c.grep(a, function (e, j) {
        return !!b.call(e, j, e) === d;
      });
    else if (b.nodeType)
      return c.grep(a, function (e) {
        return (e === b) === d;
      });
    else if (typeof b === "string") {
      var f = c.grep(a, function (e) {
        return e.nodeType === 1;
      });
      if (Ua.test(b)) return c.filter(b, f, !d);
      else b = c.filter(b, f);
    }
    return c.grep(a, function (e) {
      return c.inArray(e, b) >= 0 === d;
    });
  };
  c.fn.extend({
    find: function (a) {
      for (
        var b = this.pushStack("", "find", a), d = 0, f = 0, e = this.length;
        f < e;
        f++
      ) {
        d = b.length;
        c.find(a, this[f], b);
        if (f > 0)
          for (var j = d; j < b.length; j++)
            for (var i = 0; i < d; i++)
              if (b[i] === b[j]) {
                b.splice(j--, 1);
                break;
              }
      }
      return b;
    },
    has: function (a) {
      var b = c(a);
      return this.filter(function () {
        for (var d = 0, f = b.length; d < f; d++)
          if (c.contains(this, b[d])) return true;
      });
    },
    not: function (a) {
      return this.pushStack(Ia(this, a, false), "not", a);
    },
    filter: function (a) {
      return this.pushStack(Ia(this, a, true), "filter", a);
    },
    is: function (a) {
      return !!a && c.filter(a, this).length > 0;
    },
    closest: function (a, b) {
      if (c.isArray(a)) {
        var d = [],
          f = this[0],
          e,
          j = {},
          i;
        if (f && a.length) {
          e = 0;
          for (var o = a.length; e < o; e++) {
            i = a[e];
            j[i] ||
              (j[i] = c.expr.match.POS.test(i) ? c(i, b || this.context) : i);
          }
          for (; f && f.ownerDocument && f !== b; ) {
            for (i in j) {
              e = j[i];
              if (e.jquery ? e.index(f) > -1 : c(f).is(e)) {
                d.push({ selector: i, elem: f });
                delete j[i];
              }
            }
            f = f.parentNode;
          }
        }
        return d;
      }
      var k = c.expr.match.POS.test(a) ? c(a, b || this.context) : null;
      return this.map(function (n, r) {
        for (; r && r.ownerDocument && r !== b; ) {
          if (k ? k.index(r) > -1 : c(r).is(a)) return r;
          r = r.parentNode;
        }
        return null;
      });
    },
    index: function (a) {
      if (!a || typeof a === "string")
        return c.inArray(this[0], a ? c(a) : this.parent().children());
      return c.inArray(a.jquery ? a[0] : a, this);
    },
    add: function (a, b) {
      a = typeof a === "string" ? c(a, b || this.context) : c.makeArray(a);
      b = c.merge(this.get(), a);
      return this.pushStack(qa(a[0]) || qa(b[0]) ? b : c.unique(b));
    },
    andSelf: function () {
      return this.add(this.prevObject);
    },
  });
  c.each(
    {
      parent: function (a) {
        return (a = a.parentNode) && a.nodeType !== 11 ? a : null;
      },
      parents: function (a) {
        return c.dir(a, "parentNode");
      },
      parentsUntil: function (a, b, d) {
        return c.dir(a, "parentNode", d);
      },
      next: function (a) {
        return c.nth(a, 2, "nextSibling");
      },
      prev: function (a) {
        return c.nth(a, 2, "previousSibling");
      },
      nextAll: function (a) {
        return c.dir(a, "nextSibling");
      },
      prevAll: function (a) {
        return c.dir(a, "previousSibling");
      },
      nextUntil: function (a, b, d) {
        return c.dir(a, "nextSibling", d);
      },
      prevUntil: function (a, b, d) {
        return c.dir(a, "previousSibling", d);
      },
      siblings: function (a) {
        return c.sibling(a.parentNode.firstChild, a);
      },
      children: function (a) {
        return c.sibling(a.firstChild);
      },
      contents: function (a) {
        return c.nodeName(a, "iframe")
          ? a.contentDocument || a.contentWindow.document
          : c.makeArray(a.childNodes);
      },
    },
    function (a, b) {
      c.fn[a] = function (d, f) {
        var e = c.map(this, b, d);
        eb.test(a) || (f = d);
        if (f && typeof f === "string") e = c.filter(f, e);
        e = this.length > 1 ? c.unique(e) : e;
        if ((this.length > 1 || gb.test(f)) && fb.test(a)) e = e.reverse();
        return this.pushStack(e, a, R.call(arguments).join(","));
      };
    }
  );
  c.extend({
    filter: function (a, b, d) {
      if (d) a = ":not(" + a + ")";
      return c.find.matches(a, b);
    },
    dir: function (a, b, d) {
      var f = [];
      for (
        a = a[b];
        a && a.nodeType !== 9 && (d === w || a.nodeType !== 1 || !c(a).is(d));

      ) {
        a.nodeType === 1 && f.push(a);
        a = a[b];
      }
      return f;
    },
    nth: function (a, b, d) {
      b = b || 1;
      for (var f = 0; a; a = a[d]) if (a.nodeType === 1 && ++f === b) break;
      return a;
    },
    sibling: function (a, b) {
      for (var d = []; a; a = a.nextSibling)
        a.nodeType === 1 && a !== b && d.push(a);
      return d;
    },
  });
  var Ja = / jQuery\d+="(?:\d+|null)"/g,
    V = /^\s+/,
    Ka = /(<([\w:]+)[^>]*?)\/>/g,
    hb = /^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,
    La = /<([\w:]+)/,
    ib = /<tbody/i,
    jb = /<|&#?\w+;/,
    ta = /<script|<object|<embed|<option|<style/i,
    ua = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ma = function (a, b, d) {
      return hb.test(d) ? a : b + "></" + d + ">";
    },
    F = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      area: [1, "<map>", "</map>"],
      _default: [0, "", ""],
    };
  F.optgroup = F.option;
  F.tbody = F.tfoot = F.colgroup = F.caption = F.thead;
  F.th = F.td;
  if (!c.support.htmlSerialize) F._default = [1, "div<div>", "</div>"];
  c.fn.extend({
    text: function (a) {
      if (c.isFunction(a))
        return this.each(function (b) {
          var d = c(this);
          d.text(a.call(this, b, d.text()));
        });
      if (typeof a !== "object" && a !== w)
        return this.empty().append(
          ((this[0] && this[0].ownerDocument) || s).createTextNode(a)
        );
      return c.text(this);
    },
    wrapAll: function (a) {
      if (c.isFunction(a))
        return this.each(function (d) {
          c(this).wrapAll(a.call(this, d));
        });
      if (this[0]) {
        var b = c(a, this[0].ownerDocument).eq(0).clone(true);
        this[0].parentNode && b.insertBefore(this[0]);
        b.map(function () {
          for (var d = this; d.firstChild && d.firstChild.nodeType === 1; )
            d = d.firstChild;
          return d;
        }).append(this);
      }
      return this;
    },
    wrapInner: function (a) {
      if (c.isFunction(a))
        return this.each(function (b) {
          c(this).wrapInner(a.call(this, b));
        });
      return this.each(function () {
        var b = c(this),
          d = b.contents();
        d.length ? d.wrapAll(a) : b.append(a);
      });
    },
    wrap: function (a) {
      return this.each(function () {
        c(this).wrapAll(a);
      });
    },
    unwrap: function () {
      return this.parent()
        .each(function () {
          c.nodeName(this, "body") || c(this).replaceWith(this.childNodes);
        })
        .end();
    },
    append: function () {
      return this.domManip(arguments, true, function (a) {
        this.nodeType === 1 && this.appendChild(a);
      });
    },
    prepend: function () {
      return this.domManip(arguments, true, function (a) {
        this.nodeType === 1 && this.insertBefore(a, this.firstChild);
      });
    },
    before: function () {
      if (this[0] && this[0].parentNode)
        return this.domManip(arguments, false, function (b) {
          this.parentNode.insertBefore(b, this);
        });
      else if (arguments.length) {
        var a = c(arguments[0]);
        a.push.apply(a, this.toArray());
        return this.pushStack(a, "before", arguments);
      }
    },
    after: function () {
      if (this[0] && this[0].parentNode)
        return this.domManip(arguments, false, function (b) {
          this.parentNode.insertBefore(b, this.nextSibling);
        });
      else if (arguments.length) {
        var a = this.pushStack(this, "after", arguments);
        a.push.apply(a, c(arguments[0]).toArray());
        return a;
      }
    },
    remove: function (a, b) {
      for (var d = 0, f; (f = this[d]) != null; d++)
        if (!a || c.filter(a, [f]).length) {
          if (!b && f.nodeType === 1) {
            c.cleanData(f.getElementsByTagName("*"));
            c.cleanData([f]);
          }
          f.parentNode && f.parentNode.removeChild(f);
        }
      return this;
    },
    empty: function () {
      for (var a = 0, b; (b = this[a]) != null; a++)
        for (
          b.nodeType === 1 && c.cleanData(b.getElementsByTagName("*"));
          b.firstChild;

        )
          b.removeChild(b.firstChild);
      return this;
    },
    clone: function (a) {
      var b = this.map(function () {
        if (!c.support.noCloneEvent && !c.isXMLDoc(this)) {
          var d = this.outerHTML,
            f = this.ownerDocument;
          if (!d) {
            d = f.createElement("div");
            d.appendChild(this.cloneNode(true));
            d = d.innerHTML;
          }
          return c.clean(
            [
              d
                .replace(Ja, "")
                .replace(/=([^="'>\s]+\/)>/g, '="$1">')
                .replace(V, ""),
            ],
            f
          )[0];
        } else return this.cloneNode(true);
      });
      if (a === true) {
        ra(this, b);
        ra(this.find("*"), b.find("*"));
      }
      return b;
    },
    html: function (a) {
      if (a === w)
        return this[0] && this[0].nodeType === 1
          ? this[0].innerHTML.replace(Ja, "")
          : null;
      else if (
        typeof a === "string" &&
        !ta.test(a) &&
        (c.support.leadingWhitespace || !V.test(a)) &&
        !F[(La.exec(a) || ["", ""])[1].toLowerCase()]
      ) {
        a = a.replace(Ka, Ma);
        try {
          for (var b = 0, d = this.length; b < d; b++)
            if (this[b].nodeType === 1) {
              c.cleanData(this[b].getElementsByTagName("*"));
              this[b].innerHTML = a;
            }
        } catch (f) {
          this.empty().append(a);
        }
      } else
        c.isFunction(a)
          ? this.each(function (e) {
              var j = c(this),
                i = j.html();
              j.empty().append(function () {
                return a.call(this, e, i);
              });
            })
          : this.empty().append(a);
      return this;
    },
    replaceWith: function (a) {
      if (this[0] && this[0].parentNode) {
        if (c.isFunction(a))
          return this.each(function (b) {
            var d = c(this),
              f = d.html();
            d.replaceWith(a.call(this, b, f));
          });
        if (typeof a !== "string") a = c(a).detach();
        return this.each(function () {
          var b = this.nextSibling,
            d = this.parentNode;
          c(this).remove();
          b ? c(b).before(a) : c(d).append(a);
        });
      } else
        return this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith", a);
    },
    detach: function (a) {
      return this.remove(a, true);
    },
    domManip: function (a, b, d) {
      function f(u) {
        return c.nodeName(u, "table")
          ? u.getElementsByTagName("tbody")[0] ||
              u.appendChild(u.ownerDocument.createElement("tbody"))
          : u;
      }
      var e,
        j,
        i = a[0],
        o = [],
        k;
      if (
        !c.support.checkClone &&
        arguments.length === 3 &&
        typeof i === "string" &&
        ua.test(i)
      )
        return this.each(function () {
          c(this).domManip(a, b, d, true);
        });
      if (c.isFunction(i))
        return this.each(function (u) {
          var z = c(this);
          a[0] = i.call(this, u, b ? z.html() : w);
          z.domManip(a, b, d);
        });
      if (this[0]) {
        e = i && i.parentNode;
        e =
          c.support.parentNode &&
          e &&
          e.nodeType === 11 &&
          e.childNodes.length === this.length
            ? { fragment: e }
            : sa(a, this, o);
        k = e.fragment;
        if (
          (j = k.childNodes.length === 1 ? (k = k.firstChild) : k.firstChild)
        ) {
          b = b && c.nodeName(j, "tr");
          for (var n = 0, r = this.length; n < r; n++)
            d.call(
              b ? f(this[n], j) : this[n],
              n > 0 || e.cacheable || this.length > 1 ? k.cloneNode(true) : k
            );
        }
        o.length && c.each(o, Qa);
      }
      return this;
    },
  });
  c.fragments = {};
  c.each(
    {
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith",
    },
    function (a, b) {
      c.fn[a] = function (d) {
        var f = [];
        d = c(d);
        var e = this.length === 1 && this[0].parentNode;
        if (
          e &&
          e.nodeType === 11 &&
          e.childNodes.length === 1 &&
          d.length === 1
        ) {
          d[b](this[0]);
          return this;
        } else {
          e = 0;
          for (var j = d.length; e < j; e++) {
            var i = (e > 0 ? this.clone(true) : this).get();
            c.fn[b].apply(c(d[e]), i);
            f = f.concat(i);
          }
          return this.pushStack(f, a, d.selector);
        }
      };
    }
  );
  c.extend({
    clean: function (a, b, d, f) {
      b = b || s;
      if (typeof b.createElement === "undefined")
        b = b.ownerDocument || (b[0] && b[0].ownerDocument) || s;
      for (var e = [], j = 0, i; (i = a[j]) != null; j++) {
        if (typeof i === "number") i += "";
        if (i) {
          if (typeof i === "string" && !jb.test(i)) i = b.createTextNode(i);
          else if (typeof i === "string") {
            i = i.replace(Ka, Ma);
            var o = (La.exec(i) || ["", ""])[1].toLowerCase(),
              k = F[o] || F._default,
              n = k[0],
              r = b.createElement("div");
            for (r.innerHTML = k[1] + i + k[2]; n--; ) r = r.lastChild;
            if (!c.support.tbody) {
              n = ib.test(i);
              o =
                o === "table" && !n
                  ? r.firstChild && r.firstChild.childNodes
                  : k[1] === "<table>" && !n
                  ? r.childNodes
                  : [];
              for (k = o.length - 1; k >= 0; --k)
                c.nodeName(o[k], "tbody") &&
                  !o[k].childNodes.length &&
                  o[k].parentNode.removeChild(o[k]);
            }
            !c.support.leadingWhitespace &&
              V.test(i) &&
              r.insertBefore(b.createTextNode(V.exec(i)[0]), r.firstChild);
            i = r.childNodes;
          }
          if (i.nodeType) e.push(i);
          else e = c.merge(e, i);
        }
      }
      if (d)
        for (j = 0; e[j]; j++)
          if (
            f &&
            c.nodeName(e[j], "script") &&
            (!e[j].type || e[j].type.toLowerCase() === "text/javascript")
          )
            f.push(e[j].parentNode ? e[j].parentNode.removeChild(e[j]) : e[j]);
          else {
            e[j].nodeType === 1 &&
              e.splice.apply(
                e,
                [j + 1, 0].concat(
                  c.makeArray(e[j].getElementsByTagName("script"))
                )
              );
            d.appendChild(e[j]);
          }
      return e;
    },
    cleanData: function (a) {
      for (
        var b,
          d,
          f = c.cache,
          e = c.event.special,
          j = c.support.deleteExpando,
          i = 0,
          o;
        (o = a[i]) != null;
        i++
      )
        if ((d = o[c.expando])) {
          b = f[d];
          if (b.events)
            for (var k in b.events)
              e[k] ? c.event.remove(o, k) : Ca(o, k, b.handle);
          if (j) delete o[c.expando];
          else o.removeAttribute && o.removeAttribute(c.expando);
          delete f[d];
        }
    },
  });
  var kb = /z-?index|font-?weight|opacity|zoom|line-?height/i,
    Na = /alpha\([^)]*\)/,
    Oa = /opacity=([^)]*)/,
    ha = /float/i,
    ia = /-([a-z])/gi,
    lb = /([A-Z])/g,
    mb = /^-?\d+(?:px)?$/i,
    nb = /^-?\d/,
    ob = { position: "absolute", visibility: "hidden", display: "block" },
    pb = ["Left", "Right"],
    qb = ["Top", "Bottom"],
    rb = s.defaultView && s.defaultView.getComputedStyle,
    Pa = c.support.cssFloat ? "cssFloat" : "styleFloat",
    ja = function (a, b) {
      return b.toUpperCase();
    };
  c.fn.css = function (a, b) {
    return X(this, a, b, true, function (d, f, e) {
      if (e === w) return c.curCSS(d, f);
      if (typeof e === "number" && !kb.test(f)) e += "px";
      c.style(d, f, e);
    });
  };
  c.extend({
    style: function (a, b, d) {
      if (!a || a.nodeType === 3 || a.nodeType === 8) return w;
      if ((b === "width" || b === "height") && parseFloat(d) < 0) d = w;
      var f = a.style || a,
        e = d !== w;
      if (!c.support.opacity && b === "opacity") {
        if (e) {
          f.zoom = 1;
          b =
            parseInt(d, 10) + "" === "NaN"
              ? ""
              : "alpha(opacity=" + d * 100 + ")";
          a = f.filter || c.curCSS(a, "filter") || "";
          f.filter = Na.test(a) ? a.replace(Na, b) : b;
        }
        return f.filter && f.filter.indexOf("opacity=") >= 0
          ? parseFloat(Oa.exec(f.filter)[1]) / 100 + ""
          : "";
      }
      if (ha.test(b)) b = Pa;
      b = b.replace(ia, ja);
      if (e) f[b] = d;
      return f[b];
    },
    css: function (a, b, d, f) {
      if (b === "width" || b === "height") {
        var e,
          j = b === "width" ? pb : qb;
        function i() {
          e = b === "width" ? a.offsetWidth : a.offsetHeight;
          f !== "border" &&
            c.each(j, function () {
              f || (e -= parseFloat(c.curCSS(a, "padding" + this, true)) || 0);
              if (f === "margin")
                e += parseFloat(c.curCSS(a, "margin" + this, true)) || 0;
              else
                e -=
                  parseFloat(c.curCSS(a, "border" + this + "Width", true)) || 0;
            });
        }
        a.offsetWidth !== 0 ? i() : c.swap(a, ob, i);
        return Math.max(0, Math.round(e));
      }
      return c.curCSS(a, b, d);
    },
    curCSS: function (a, b, d) {
      var f,
        e = a.style;
      if (!c.support.opacity && b === "opacity" && a.currentStyle) {
        f = Oa.test(a.currentStyle.filter || "")
          ? parseFloat(RegExp.$1) / 100 + ""
          : "";
        return f === "" ? "1" : f;
      }
      if (ha.test(b)) b = Pa;
      if (!d && e && e[b]) f = e[b];
      else if (rb) {
        if (ha.test(b)) b = "float";
        b = b.replace(lb, "-$1").toLowerCase();
        e = a.ownerDocument.defaultView;
        if (!e) return null;
        if ((a = e.getComputedStyle(a, null))) f = a.getPropertyValue(b);
        if (b === "opacity" && f === "") f = "1";
      } else if (a.currentStyle) {
        d = b.replace(ia, ja);
        f = a.currentStyle[b] || a.currentStyle[d];
        if (!mb.test(f) && nb.test(f)) {
          b = e.left;
          var j = a.runtimeStyle.left;
          a.runtimeStyle.left = a.currentStyle.left;
          e.left = d === "fontSize" ? "1em" : f || 0;
          f = e.pixelLeft + "px";
          e.left = b;
          a.runtimeStyle.left = j;
        }
      }
      return f;
    },
    swap: function (a, b, d) {
      var f = {};
      for (var e in b) {
        f[e] = a.style[e];
        a.style[e] = b[e];
      }
      d.call(a);
      for (e in b) a.style[e] = f[e];
    },
  });
  if (c.expr && c.expr.filters) {
    c.expr.filters.hidden = function (a) {
      var b = a.offsetWidth,
        d = a.offsetHeight,
        f = a.nodeName.toLowerCase() === "tr";
      return b === 0 && d === 0 && !f
        ? true
        : b > 0 && d > 0 && !f
        ? false
        : c.curCSS(a, "display") === "none";
    };
    c.expr.filters.visible = function (a) {
      return !c.expr.filters.hidden(a);
    };
  }
  var sb = J(),
    tb = /<script(.|\s)*?\/script>/gi,
    ub = /select|textarea/i,
    vb =
      /color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,
    N = /=\?(&|$)/,
    ka = /\?/,
    wb = /(\?|&)_=.*?(&|$)/,
    xb = /^(\w+:)?\/\/([^\/?#]+)/,
    yb = /%20/g,
    zb = c.fn.load;
  c.fn.extend({
    load: function (a, b, d) {
      if (typeof a !== "string") return zb.call(this, a);
      else if (!this.length) return this;
      var f = a.indexOf(" ");
      if (f >= 0) {
        var e = a.slice(f, a.length);
        a = a.slice(0, f);
      }
      f = "GET";
      if (b)
        if (c.isFunction(b)) {
          d = b;
          b = null;
        } else if (typeof b === "object") {
          b = c.param(b, c.ajaxSettings.traditional);
          f = "POST";
        }
      var j = this;
      c.ajax({
        url: a,
        type: f,
        dataType: "html",
        data: b,
        complete: function (i, o) {
          if (o === "success" || o === "notmodified")
            j.html(
              e
                ? c("<div />").append(i.responseText.replace(tb, "")).find(e)
                : i.responseText
            );
          d && j.each(d, [i.responseText, o, i]);
        },
      });
      return this;
    },
    serialize: function () {
      return c.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        return this.elements ? c.makeArray(this.elements) : this;
      })
        .filter(function () {
          return (
            this.name &&
            !this.disabled &&
            (this.checked || ub.test(this.nodeName) || vb.test(this.type))
          );
        })
        .map(function (a, b) {
          a = c(this).val();
          return a == null
            ? null
            : c.isArray(a)
            ? c.map(a, function (d) {
                return { name: b.name, value: d };
              })
            : { name: b.name, value: a };
        })
        .get();
    },
  });
  c.each(
    "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
    function (a, b) {
      c.fn[b] = function (d) {
        return this.bind(b, d);
      };
    }
  );
  c.extend({
    get: function (a, b, d, f) {
      if (c.isFunction(b)) {
        f = f || d;
        d = b;
        b = null;
      }
      return c.ajax({ type: "GET", url: a, data: b, success: d, dataType: f });
    },
    getScript: function (a, b) {
      return c.get(a, null, b, "script");
    },
    getJSON: function (a, b, d) {
      return c.get(a, b, d, "json");
    },
    post: function (a, b, d, f) {
      if (c.isFunction(b)) {
        f = f || d;
        d = b;
        b = {};
      }
      return c.ajax({ type: "POST", url: a, data: b, success: d, dataType: f });
    },
    ajaxSetup: function (a) {
      c.extend(c.ajaxSettings, a);
    },
    ajaxSettings: {
      url: location.href,
      global: true,
      type: "GET",
      contentType: "application/x-www-form-urlencoded",
      processData: true,
      async: true,
      xhr:
        A.XMLHttpRequest &&
        (A.location.protocol !== "file:" || !A.ActiveXObject)
          ? function () {
              return new A.XMLHttpRequest();
            }
          : function () {
              try {
                return new A.ActiveXObject("Microsoft.XMLHTTP");
              } catch (a) {}
            },
      accepts: {
        xml: "application/xml, text/xml",
        html: "text/html",
        script: "text/javascript, application/javascript",
        json: "application/json, text/javascript",
        text: "text/plain",
        _default: "*/*",
      },
    },
    lastModified: {},
    etag: {},
    ajax: function (a) {
      function b() {
        e.success && e.success.call(k, o, i, x);
        e.global && f("ajaxSuccess", [x, e]);
      }
      function d() {
        e.complete && e.complete.call(k, x, i);
        e.global && f("ajaxComplete", [x, e]);
        e.global && !--c.active && c.event.trigger("ajaxStop");
      }
      function f(q, p) {
        (e.context ? c(e.context) : c.event).trigger(q, p);
      }
      var e = c.extend(true, {}, c.ajaxSettings, a),
        j,
        i,
        o,
        k = (a && a.context) || e,
        n = e.type.toUpperCase();
      if (e.data && e.processData && typeof e.data !== "string")
        e.data = c.param(e.data, e.traditional);
      if (e.dataType === "jsonp") {
        if (n === "GET")
          N.test(e.url) ||
            (e.url +=
              (ka.test(e.url) ? "&" : "?") + (e.jsonp || "callback") + "=?");
        else if (!e.data || !N.test(e.data))
          e.data =
            (e.data ? e.data + "&" : "") + (e.jsonp || "callback") + "=?";
        e.dataType = "json";
      }
      if (
        e.dataType === "json" &&
        ((e.data && N.test(e.data)) || N.test(e.url))
      ) {
        j = e.jsonpCallback || "jsonp" + sb++;
        if (e.data) e.data = (e.data + "").replace(N, "=" + j + "$1");
        e.url = e.url.replace(N, "=" + j + "$1");
        e.dataType = "script";
        A[j] =
          A[j] ||
          function (q) {
            o = q;
            b();
            d();
            A[j] = w;
            try {
              delete A[j];
            } catch (p) {}
            z && z.removeChild(C);
          };
      }
      if (e.dataType === "script" && e.cache === null) e.cache = false;
      if (e.cache === false && n === "GET") {
        var r = J(),
          u = e.url.replace(wb, "$1_=" + r + "$2");
        e.url =
          u + (u === e.url ? (ka.test(e.url) ? "&" : "?") + "_=" + r : "");
      }
      if (e.data && n === "GET") e.url += (ka.test(e.url) ? "&" : "?") + e.data;
      e.global && !c.active++ && c.event.trigger("ajaxStart");
      r =
        (r = xb.exec(e.url)) &&
        ((r[1] && r[1] !== location.protocol) || r[2] !== location.host);
      if (e.dataType === "script" && n === "GET" && r) {
        var z = s.getElementsByTagName("head")[0] || s.documentElement,
          C = s.createElement("script");
        C.src = e.url;
        if (e.scriptCharset) C.charset = e.scriptCharset;
        if (!j) {
          var B = false;
          C.onload = C.onreadystatechange = function () {
            if (
              !B &&
              (!this.readyState ||
                this.readyState === "loaded" ||
                this.readyState === "complete")
            ) {
              B = true;
              b();
              d();
              C.onload = C.onreadystatechange = null;
              z && C.parentNode && z.removeChild(C);
            }
          };
        }
        z.insertBefore(C, z.firstChild);
        return w;
      }
      var E = false,
        x = e.xhr();
      if (x) {
        e.username
          ? x.open(n, e.url, e.async, e.username, e.password)
          : x.open(n, e.url, e.async);
        try {
          if (e.data || (a && a.contentType))
            x.setRequestHeader("Content-Type", e.contentType);
          if (e.ifModified) {
            c.lastModified[e.url] &&
              x.setRequestHeader("If-Modified-Since", c.lastModified[e.url]);
            c.etag[e.url] && x.setRequestHeader("If-None-Match", c.etag[e.url]);
          }
          r || x.setRequestHeader("X-Requested-With", "XMLHttpRequest");
          x.setRequestHeader(
            "Accept",
            e.dataType && e.accepts[e.dataType]
              ? e.accepts[e.dataType] + ", */*"
              : e.accepts._default
          );
        } catch (ga) {}
        if (e.beforeSend && e.beforeSend.call(k, x, e) === false) {
          e.global && !--c.active && c.event.trigger("ajaxStop");
          x.abort();
          return false;
        }
        e.global && f("ajaxSend", [x, e]);
        var g = (x.onreadystatechange = function (q) {
          if (!x || x.readyState === 0 || q === "abort") {
            E || d();
            E = true;
            if (x) x.onreadystatechange = c.noop;
          } else if (!E && x && (x.readyState === 4 || q === "timeout")) {
            E = true;
            x.onreadystatechange = c.noop;
            i =
              q === "timeout"
                ? "timeout"
                : !c.httpSuccess(x)
                ? "error"
                : e.ifModified && c.httpNotModified(x, e.url)
                ? "notmodified"
                : "success";
            var p;
            if (i === "success")
              try {
                o = c.httpData(x, e.dataType, e);
              } catch (v) {
                i = "parsererror";
                p = v;
              }
            if (i === "success" || i === "notmodified") j || b();
            else c.handleError(e, x, i, p);
            d();
            q === "timeout" && x.abort();
            if (e.async) x = null;
          }
        });
        try {
          var h = x.abort;
          x.abort = function () {
            x && h.call(x);
            g("abort");
          };
        } catch (l) {}
        e.async &&
          e.timeout > 0 &&
          setTimeout(function () {
            x && !E && g("timeout");
          }, e.timeout);
        try {
          x.send(n === "POST" || n === "PUT" || n === "DELETE" ? e.data : null);
        } catch (m) {
          c.handleError(e, x, null, m);
          d();
        }
        e.async || g();
        return x;
      }
    },
    handleError: function (a, b, d, f) {
      if (a.error) a.error.call(a.context || a, b, d, f);
      if (a.global)
        (a.context ? c(a.context) : c.event).trigger("ajaxError", [b, a, f]);
    },
    active: 0,
    httpSuccess: function (a) {
      try {
        return (
          (!a.status && location.protocol === "file:") ||
          (a.status >= 200 && a.status < 300) ||
          a.status === 304 ||
          a.status === 1223 ||
          a.status === 0
        );
      } catch (b) {}
      return false;
    },
    httpNotModified: function (a, b) {
      var d = a.getResponseHeader("Last-Modified"),
        f = a.getResponseHeader("Etag");
      if (d) c.lastModified[b] = d;
      if (f) c.etag[b] = f;
      return a.status === 304 || a.status === 0;
    },
    httpData: function (a, b, d) {
      var f = a.getResponseHeader("content-type") || "",
        e = b === "xml" || (!b && f.indexOf("xml") >= 0);
      a = e ? a.responseXML : a.responseText;
      e &&
        a.documentElement.nodeName === "parsererror" &&
        c.error("parsererror");
      if (d && d.dataFilter) a = d.dataFilter(a, b);
      if (typeof a === "string")
        if (b === "json" || (!b && f.indexOf("json") >= 0)) a = c.parseJSON(a);
        else if (b === "script" || (!b && f.indexOf("javascript") >= 0))
          c.globalEval(a);
      return a;
    },
    param: function (a, b) {
      function d(i, o) {
        if (c.isArray(o))
          c.each(o, function (k, n) {
            b || /\[\]$/.test(i)
              ? f(i, n)
              : d(
                  i +
                    "[" +
                    (typeof n === "object" || c.isArray(n) ? k : "") +
                    "]",
                  n
                );
          });
        else
          !b && o != null && typeof o === "object"
            ? c.each(o, function (k, n) {
                d(i + "[" + k + "]", n);
              })
            : f(i, o);
      }
      function f(i, o) {
        o = c.isFunction(o) ? o() : o;
        e[e.length] = encodeURIComponent(i) + "=" + encodeURIComponent(o);
      }
      var e = [];
      if (b === w) b = c.ajaxSettings.traditional;
      if (c.isArray(a) || a.jquery)
        c.each(a, function () {
          f(this.name, this.value);
        });
      else for (var j in a) d(j, a[j]);
      return e.join("&").replace(yb, "+");
    },
  });
  var la = {},
    Ab = /toggle|show|hide/,
    Bb = /^([+-]=)?([\d+-.]+)(.*)$/,
    W,
    va = [
      ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
      ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
      ["opacity"],
    ];
  c.fn.extend({
    show: function (a, b) {
      if (a || a === 0) return this.animate(K("show", 3), a, b);
      else {
        a = 0;
        for (b = this.length; a < b; a++) {
          var d = c.data(this[a], "olddisplay");
          this[a].style.display = d || "";
          if (c.css(this[a], "display") === "none") {
            d = this[a].nodeName;
            var f;
            if (la[d]) f = la[d];
            else {
              var e = c("<" + d + " />").appendTo("body");
              f = e.css("display");
              if (f === "none") f = "block";
              e.remove();
              la[d] = f;
            }
            c.data(this[a], "olddisplay", f);
          }
        }
        a = 0;
        for (b = this.length; a < b; a++)
          this[a].style.display = c.data(this[a], "olddisplay") || "";
        return this;
      }
    },
    hide: function (a, b) {
      if (a || a === 0) return this.animate(K("hide", 3), a, b);
      else {
        a = 0;
        for (b = this.length; a < b; a++) {
          var d = c.data(this[a], "olddisplay");
          !d &&
            d !== "none" &&
            c.data(this[a], "olddisplay", c.css(this[a], "display"));
        }
        a = 0;
        for (b = this.length; a < b; a++) this[a].style.display = "none";
        return this;
      }
    },
    _toggle: c.fn.toggle,
    toggle: function (a, b) {
      var d = typeof a === "boolean";
      if (c.isFunction(a) && c.isFunction(b))
        this._toggle.apply(this, arguments);
      else
        a == null || d
          ? this.each(function () {
              var f = d ? a : c(this).is(":hidden");
              c(this)[f ? "show" : "hide"]();
            })
          : this.animate(K("toggle", 3), a, b);
      return this;
    },
    fadeTo: function (a, b, d) {
      return this.filter(":hidden")
        .css("opacity", 0)
        .show()
        .end()
        .animate({ opacity: b }, a, d);
    },
    animate: function (a, b, d, f) {
      var e = c.speed(b, d, f);
      if (c.isEmptyObject(a)) return this.each(e.complete);
      return this[e.queue === false ? "each" : "queue"](function () {
        var j = c.extend({}, e),
          i,
          o = this.nodeType === 1 && c(this).is(":hidden"),
          k = this;
        for (i in a) {
          var n = i.replace(ia, ja);
          if (i !== n) {
            a[n] = a[i];
            delete a[i];
            i = n;
          }
          if ((a[i] === "hide" && o) || (a[i] === "show" && !o))
            return j.complete.call(this);
          if ((i === "height" || i === "width") && this.style) {
            j.display = c.css(this, "display");
            j.overflow = this.style.overflow;
          }
          if (c.isArray(a[i])) {
            (j.specialEasing = j.specialEasing || {})[i] = a[i][1];
            a[i] = a[i][0];
          }
        }
        if (j.overflow != null) this.style.overflow = "hidden";
        j.curAnim = c.extend({}, a);
        c.each(a, function (r, u) {
          var z = new c.fx(k, j, r);
          if (Ab.test(u)) z[u === "toggle" ? (o ? "show" : "hide") : u](a);
          else {
            var C = Bb.exec(u),
              B = z.cur(true) || 0;
            if (C) {
              u = parseFloat(C[2]);
              var E = C[3] || "px";
              if (E !== "px") {
                k.style[r] = (u || 1) + E;
                B = ((u || 1) / z.cur(true)) * B;
                k.style[r] = B + E;
              }
              if (C[1]) u = (C[1] === "-=" ? -1 : 1) * u + B;
              z.custom(B, u, E);
            } else z.custom(B, u, "");
          }
        });
        return true;
      });
    },
    stop: function (a, b) {
      var d = c.timers;
      a && this.queue([]);
      this.each(function () {
        for (var f = d.length - 1; f >= 0; f--)
          if (d[f].elem === this) {
            b && d[f](true);
            d.splice(f, 1);
          }
      });
      b || this.dequeue();
      return this;
    },
  });
  c.each(
    {
      slideDown: K("show", 1),
      slideUp: K("hide", 1),
      slideToggle: K("toggle", 1),
      fadeIn: { opacity: "show" },
      fadeOut: { opacity: "hide" },
    },
    function (a, b) {
      c.fn[a] = function (d, f) {
        return this.animate(b, d, f);
      };
    }
  );
  c.extend({
    speed: function (a, b, d) {
      var f =
        a && typeof a === "object"
          ? a
          : {
              complete: d || (!d && b) || (c.isFunction(a) && a),
              duration: a,
              easing: (d && b) || (b && !c.isFunction(b) && b),
            };
      f.duration = c.fx.off
        ? 0
        : typeof f.duration === "number"
        ? f.duration
        : c.fx.speeds[f.duration] || c.fx.speeds._default;
      f.old = f.complete;
      f.complete = function () {
        f.queue !== false && c(this).dequeue();
        c.isFunction(f.old) && f.old.call(this);
      };
      return f;
    },
    easing: {
      linear: function (a, b, d, f) {
        return d + f * a;
      },
      swing: function (a, b, d, f) {
        return (-Math.cos(a * Math.PI) / 2 + 0.5) * f + d;
      },
    },
    timers: [],
    fx: function (a, b, d) {
      this.options = b;
      this.elem = a;
      this.prop = d;
      if (!b.orig) b.orig = {};
    },
  });
  c.fx.prototype = {
    update: function () {
      this.options.step && this.options.step.call(this.elem, this.now, this);
      (c.fx.step[this.prop] || c.fx.step._default)(this);
      if ((this.prop === "height" || this.prop === "width") && this.elem.style)
        this.elem.style.display = "block";
    },
    cur: function (a) {
      if (
        this.elem[this.prop] != null &&
        (!this.elem.style || this.elem.style[this.prop] == null)
      )
        return this.elem[this.prop];
      return (a = parseFloat(c.css(this.elem, this.prop, a))) && a > -1e4
        ? a
        : parseFloat(c.curCSS(this.elem, this.prop)) || 0;
    },
    custom: function (a, b, d) {
      function f(j) {
        return e.step(j);
      }
      this.startTime = J();
      this.start = a;
      this.end = b;
      this.unit = d || this.unit || "px";
      this.now = this.start;
      this.pos = this.state = 0;
      var e = this;
      f.elem = this.elem;
      if (f() && c.timers.push(f) && !W) W = setInterval(c.fx.tick, 13);
    },
    show: function () {
      this.options.orig[this.prop] = c.style(this.elem, this.prop);
      this.options.show = true;
      this.custom(
        this.prop === "width" || this.prop === "height" ? 1 : 0,
        this.cur()
      );
      c(this.elem).show();
    },
    hide: function () {
      this.options.orig[this.prop] = c.style(this.elem, this.prop);
      this.options.hide = true;
      this.custom(this.cur(), 0);
    },
    step: function (a) {
      var b = J(),
        d = true;
      if (a || b >= this.options.duration + this.startTime) {
        this.now = this.end;
        this.pos = this.state = 1;
        this.update();
        this.options.curAnim[this.prop] = true;
        for (var f in this.options.curAnim)
          if (this.options.curAnim[f] !== true) d = false;
        if (d) {
          if (this.options.display != null) {
            this.elem.style.overflow = this.options.overflow;
            a = c.data(this.elem, "olddisplay");
            this.elem.style.display = a ? a : this.options.display;
            if (c.css(this.elem, "display") === "none")
              this.elem.style.display = "block";
          }
          this.options.hide && c(this.elem).hide();
          if (this.options.hide || this.options.show)
            for (var e in this.options.curAnim)
              c.style(this.elem, e, this.options.orig[e]);
          this.options.complete.call(this.elem);
        }
        return false;
      } else {
        e = b - this.startTime;
        this.state = e / this.options.duration;
        a = this.options.easing || (c.easing.swing ? "swing" : "linear");
        this.pos = c.easing[
          (this.options.specialEasing &&
            this.options.specialEasing[this.prop]) ||
            a
        ](this.state, e, 0, 1, this.options.duration);
        this.now = this.start + (this.end - this.start) * this.pos;
        this.update();
      }
      return true;
    },
  };
  c.extend(c.fx, {
    tick: function () {
      for (var a = c.timers, b = 0; b < a.length; b++)
        a[b]() || a.splice(b--, 1);
      a.length || c.fx.stop();
    },
    stop: function () {
      clearInterval(W);
      W = null;
    },
    speeds: { slow: 600, fast: 200, _default: 400 },
    step: {
      opacity: function (a) {
        c.style(a.elem, "opacity", a.now);
      },
      _default: function (a) {
        if (a.elem.style && a.elem.style[a.prop] != null)
          a.elem.style[a.prop] =
            (a.prop === "width" || a.prop === "height"
              ? Math.max(0, a.now)
              : a.now) + a.unit;
        else a.elem[a.prop] = a.now;
      },
    },
  });
  if (c.expr && c.expr.filters)
    c.expr.filters.animated = function (a) {
      return c.grep(c.timers, function (b) {
        return a === b.elem;
      }).length;
    };
  c.fn.offset =
    "getBoundingClientRect" in s.documentElement
      ? function (a) {
          var b = this[0];
          if (a)
            return this.each(function (e) {
              c.offset.setOffset(this, a, e);
            });
          if (!b || !b.ownerDocument) return null;
          if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
          var d = b.getBoundingClientRect(),
            f = b.ownerDocument;
          b = f.body;
          f = f.documentElement;
          return {
            top:
              d.top +
              (self.pageYOffset ||
                (c.support.boxModel && f.scrollTop) ||
                b.scrollTop) -
              (f.clientTop || b.clientTop || 0),
            left:
              d.left +
              (self.pageXOffset ||
                (c.support.boxModel && f.scrollLeft) ||
                b.scrollLeft) -
              (f.clientLeft || b.clientLeft || 0),
          };
        }
      : function (a) {
          var b = this[0];
          if (a)
            return this.each(function (r) {
              c.offset.setOffset(this, a, r);
            });
          if (!b || !b.ownerDocument) return null;
          if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
          c.offset.initialize();
          var d = b.offsetParent,
            f = b,
            e = b.ownerDocument,
            j,
            i = e.documentElement,
            o = e.body;
          f = (e = e.defaultView)
            ? e.getComputedStyle(b, null)
            : b.currentStyle;
          for (
            var k = b.offsetTop, n = b.offsetLeft;
            (b = b.parentNode) && b !== o && b !== i;

          ) {
            if (c.offset.supportsFixedPosition && f.position === "fixed") break;
            j = e ? e.getComputedStyle(b, null) : b.currentStyle;
            k -= b.scrollTop;
            n -= b.scrollLeft;
            if (b === d) {
              k += b.offsetTop;
              n += b.offsetLeft;
              if (
                c.offset.doesNotAddBorder &&
                !(
                  c.offset.doesAddBorderForTableAndCells &&
                  /^t(able|d|h)$/i.test(b.nodeName)
                )
              ) {
                k += parseFloat(j.borderTopWidth) || 0;
                n += parseFloat(j.borderLeftWidth) || 0;
              }
              f = d;
              d = b.offsetParent;
            }
            if (
              c.offset.subtractsBorderForOverflowNotVisible &&
              j.overflow !== "visible"
            ) {
              k += parseFloat(j.borderTopWidth) || 0;
              n += parseFloat(j.borderLeftWidth) || 0;
            }
            f = j;
          }
          if (f.position === "relative" || f.position === "static") {
            k += o.offsetTop;
            n += o.offsetLeft;
          }
          if (c.offset.supportsFixedPosition && f.position === "fixed") {
            k += Math.max(i.scrollTop, o.scrollTop);
            n += Math.max(i.scrollLeft, o.scrollLeft);
          }
          return { top: k, left: n };
        };
  c.offset = {
    initialize: function () {
      var a = s.body,
        b = s.createElement("div"),
        d,
        f,
        e,
        j = parseFloat(c.curCSS(a, "marginTop", true)) || 0;
      c.extend(b.style, {
        position: "absolute",
        top: 0,
        left: 0,
        margin: 0,
        border: 0,
        width: "1px",
        height: "1px",
        visibility: "hidden",
      });
      b.innerHTML =
        "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
      a.insertBefore(b, a.firstChild);
      d = b.firstChild;
      f = d.firstChild;
      e = d.nextSibling.firstChild.firstChild;
      this.doesNotAddBorder = f.offsetTop !== 5;
      this.doesAddBorderForTableAndCells = e.offsetTop === 5;
      f.style.position = "fixed";
      f.style.top = "20px";
      this.supportsFixedPosition = f.offsetTop === 20 || f.offsetTop === 15;
      f.style.position = f.style.top = "";
      d.style.overflow = "hidden";
      d.style.position = "relative";
      this.subtractsBorderForOverflowNotVisible = f.offsetTop === -5;
      this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== j;
      a.removeChild(b);
      c.offset.initialize = c.noop;
    },
    bodyOffset: function (a) {
      var b = a.offsetTop,
        d = a.offsetLeft;
      c.offset.initialize();
      if (c.offset.doesNotIncludeMarginInBodyOffset) {
        b += parseFloat(c.curCSS(a, "marginTop", true)) || 0;
        d += parseFloat(c.curCSS(a, "marginLeft", true)) || 0;
      }
      return { top: b, left: d };
    },
    setOffset: function (a, b, d) {
      if (/static/.test(c.curCSS(a, "position"))) a.style.position = "relative";
      var f = c(a),
        e = f.offset(),
        j = parseInt(c.curCSS(a, "top", true), 10) || 0,
        i = parseInt(c.curCSS(a, "left", true), 10) || 0;
      if (c.isFunction(b)) b = b.call(a, d, e);
      d = { top: b.top - e.top + j, left: b.left - e.left + i };
      "using" in b ? b.using.call(a, d) : f.css(d);
    },
  };
  c.fn.extend({
    position: function () {
      if (!this[0]) return null;
      var a = this[0],
        b = this.offsetParent(),
        d = this.offset(),
        f = /^body|html$/i.test(b[0].nodeName)
          ? { top: 0, left: 0 }
          : b.offset();
      d.top -= parseFloat(c.curCSS(a, "marginTop", true)) || 0;
      d.left -= parseFloat(c.curCSS(a, "marginLeft", true)) || 0;
      f.top += parseFloat(c.curCSS(b[0], "borderTopWidth", true)) || 0;
      f.left += parseFloat(c.curCSS(b[0], "borderLeftWidth", true)) || 0;
      return { top: d.top - f.top, left: d.left - f.left };
    },
    offsetParent: function () {
      return this.map(function () {
        for (
          var a = this.offsetParent || s.body;
          a &&
          !/^body|html$/i.test(a.nodeName) &&
          c.css(a, "position") === "static";

        )
          a = a.offsetParent;
        return a;
      });
    },
  });
  c.each(["Left", "Top"], function (a, b) {
    var d = "scroll" + b;
    c.fn[d] = function (f) {
      var e = this[0],
        j;
      if (!e) return null;
      if (f !== w)
        return this.each(function () {
          if ((j = wa(this)))
            j.scrollTo(!a ? f : c(j).scrollLeft(), a ? f : c(j).scrollTop());
          else this[d] = f;
        });
      else
        return (j = wa(e))
          ? "pageXOffset" in j
            ? j[a ? "pageYOffset" : "pageXOffset"]
            : (c.support.boxModel && j.document.documentElement[d]) ||
              j.document.body[d]
          : e[d];
    };
  });
  c.each(["Height", "Width"], function (a, b) {
    var d = b.toLowerCase();
    c.fn["inner" + b] = function () {
      return this[0] ? c.css(this[0], d, false, "padding") : null;
    };
    c.fn["outer" + b] = function (f) {
      return this[0] ? c.css(this[0], d, false, f ? "margin" : "border") : null;
    };
    c.fn[d] = function (f) {
      var e = this[0];
      if (!e) return f == null ? null : this;
      if (c.isFunction(f))
        return this.each(function (j) {
          var i = c(this);
          i[d](f.call(this, j, i[d]()));
        });
      return "scrollTo" in e && e.document
        ? (e.document.compatMode === "CSS1Compat" &&
            e.document.documentElement["client" + b]) ||
            e.document.body["client" + b]
        : e.nodeType === 9
        ? Math.max(
            e.documentElement["client" + b],
            e.body["scroll" + b],
            e.documentElement["scroll" + b],
            e.body["offset" + b],
            e.documentElement["offset" + b]
          )
        : f === w
        ? c.css(e, d)
        : this.css(d, typeof f === "string" ? f : f + "px");
    };
  });
  A.jQuery = A.$ = c;
})(window);
jQuery.ui ||
  (function (c) {
    c.ui = {
      version: "1.8.1",
      plugin: {
        add: function (a, b, d) {
          a = c.ui[a].prototype;
          for (var e in d) {
            a.plugins[e] = a.plugins[e] || [];
            a.plugins[e].push([b, d[e]]);
          }
        },
        call: function (a, b, d) {
          if ((b = a.plugins[b]) && a.element[0].parentNode)
            for (var e = 0; e < b.length; e++)
              a.options[b[e][0]] && b[e][1].apply(a.element, d);
        },
      },
      contains: function (a, b) {
        return document.compareDocumentPosition
          ? a.compareDocumentPosition(b) & 16
          : a !== b && a.contains(b);
      },
      hasScroll: function (a, b) {
        if (c(a).css("overflow") == "hidden") return false;
        b = b && b == "left" ? "scrollLeft" : "scrollTop";
        var d = false;
        if (a[b] > 0) return true;
        a[b] = 1;
        d = a[b] > 0;
        a[b] = 0;
        return d;
      },
      isOverAxis: function (a, b, d) {
        return a > b && a < b + d;
      },
      isOver: function (a, b, d, e, f, g) {
        return c.ui.isOverAxis(a, d, f) && c.ui.isOverAxis(b, e, g);
      },
      keyCode: {
        ALT: 18,
        BACKSPACE: 8,
        CAPS_LOCK: 20,
        COMMA: 188,
        CONTROL: 17,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        INSERT: 45,
        LEFT: 37,
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SHIFT: 16,
        SPACE: 32,
        TAB: 9,
        UP: 38,
      },
    };
    c.fn.extend({
      _focus: c.fn.focus,
      focus: function (a, b) {
        return typeof a === "number"
          ? this.each(function () {
              var d = this;
              setTimeout(function () {
                c(d).focus();
                b && b.call(d);
              }, a);
            })
          : this._focus.apply(this, arguments);
      },
      enableSelection: function () {
        return this.attr("unselectable", "off").css("MozUserSelect", "");
      },
      disableSelection: function () {
        return this.attr("unselectable", "on").css("MozUserSelect", "none");
      },
      scrollParent: function () {
        var a;
        a =
          (c.browser.msie && /(static|relative)/.test(this.css("position"))) ||
          /absolute/.test(this.css("position"))
            ? this.parents()
                .filter(function () {
                  return (
                    /(relative|absolute|fixed)/.test(
                      c.curCSS(this, "position", 1)
                    ) &&
                    /(auto|scroll)/.test(
                      c.curCSS(this, "overflow", 1) +
                        c.curCSS(this, "overflow-y", 1) +
                        c.curCSS(this, "overflow-x", 1)
                    )
                  );
                })
                .eq(0)
            : this.parents()
                .filter(function () {
                  return /(auto|scroll)/.test(
                    c.curCSS(this, "overflow", 1) +
                      c.curCSS(this, "overflow-y", 1) +
                      c.curCSS(this, "overflow-x", 1)
                  );
                })
                .eq(0);
        return /fixed/.test(this.css("position")) || !a.length
          ? c(document)
          : a;
      },
      zIndex: function (a) {
        if (a !== undefined) return this.css("zIndex", a);
        if (this.length) {
          a = c(this[0]);
          for (var b; a.length && a[0] !== document; ) {
            b = a.css("position");
            if (b == "absolute" || b == "relative" || b == "fixed") {
              b = parseInt(a.css("zIndex"));
              if (!isNaN(b) && b != 0) return b;
            }
            a = a.parent();
          }
        }
        return 0;
      },
    });
    c.extend(c.expr[":"], {
      data: function (a, b, d) {
        return !!c.data(a, d[3]);
      },
      focusable: function (a) {
        var b = a.nodeName.toLowerCase(),
          d = c.attr(a, "tabindex");
        return (
          (/input|select|textarea|button|object/.test(b)
            ? !a.disabled
            : "a" == b || "area" == b
            ? a.href || !isNaN(d)
            : !isNaN(d)) &&
          !c(a)["area" == b ? "parents" : "closest"](":hidden").length
        );
      },
      tabbable: function (a) {
        var b = c.attr(a, "tabindex");
        return (isNaN(b) || b >= 0) && c(a).is(":focusable");
      },
    });
  })(jQuery);
(function (b) {
  var j = b.fn.remove;
  b.fn.remove = function (a, c) {
    return this.each(function () {
      if (!c)
        if (!a || b.filter(a, [this]).length)
          b("*", this)
            .add(this)
            .each(function () {
              b(this).triggerHandler("remove");
            });
      return j.call(b(this), a, c);
    });
  };
  b.widget = function (a, c, d) {
    var e = a.split(".")[0],
      f;
    a = a.split(".")[1];
    f = e + "-" + a;
    if (!d) {
      d = c;
      c = b.Widget;
    }
    b.expr[":"][f] = function (h) {
      return !!b.data(h, a);
    };
    b[e] = b[e] || {};
    b[e][a] = function (h, g) {
      arguments.length && this._createWidget(h, g);
    };
    c = new c();
    c.options = b.extend({}, c.options);
    b[e][a].prototype = b.extend(
      true,
      c,
      {
        namespace: e,
        widgetName: a,
        widgetEventPrefix: b[e][a].prototype.widgetEventPrefix || a,
        widgetBaseClass: f,
      },
      d
    );
    b.widget.bridge(a, b[e][a]);
  };
  b.widget.bridge = function (a, c) {
    b.fn[a] = function (d) {
      var e = typeof d === "string",
        f = Array.prototype.slice.call(arguments, 1),
        h = this;
      d = !e && f.length ? b.extend.apply(null, [true, d].concat(f)) : d;
      if (e && d.substring(0, 1) === "_") return h;
      e
        ? this.each(function () {
            var g = b.data(this, a),
              i = g && b.isFunction(g[d]) ? g[d].apply(g, f) : g;
            if (i !== g && i !== undefined) {
              h = i;
              return false;
            }
          })
        : this.each(function () {
            var g = b.data(this, a);
            if (g) {
              d && g.option(d);
              g._init();
            } else b.data(this, a, new c(d, this));
          });
      return h;
    };
  };
  b.Widget = function (a, c) {
    arguments.length && this._createWidget(a, c);
  };
  b.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    options: { disabled: false },
    _createWidget: function (a, c) {
      this.element = b(c).data(this.widgetName, this);
      this.options = b.extend(
        true,
        {},
        this.options,
        b.metadata && b.metadata.get(c)[this.widgetName],
        a
      );
      var d = this;
      this.element.bind("remove." + this.widgetName, function () {
        d.destroy();
      });
      this._create();
      this._init();
    },
    _create: function () {},
    _init: function () {},
    destroy: function () {
      this.element.unbind("." + this.widgetName).removeData(this.widgetName);
      this.widget()
        .unbind("." + this.widgetName)
        .removeAttr("aria-disabled")
        .removeClass(this.widgetBaseClass + "-disabled ui-state-disabled");
    },
    widget: function () {
      return this.element;
    },
    option: function (a, c) {
      var d = a,
        e = this;
      if (arguments.length === 0) return b.extend({}, e.options);
      if (typeof a === "string") {
        if (c === undefined) return this.options[a];
        d = {};
        d[a] = c;
      }
      b.each(d, function (f, h) {
        e._setOption(f, h);
      });
      return e;
    },
    _setOption: function (a, c) {
      this.options[a] = c;
      if (a === "disabled")
        this.widget()
          [c ? "addClass" : "removeClass"](
            this.widgetBaseClass + "-disabled ui-state-disabled"
          )
          .attr("aria-disabled", c);
      return this;
    },
    enable: function () {
      return this._setOption("disabled", false);
    },
    disable: function () {
      return this._setOption("disabled", true);
    },
    _trigger: function (a, c, d) {
      var e = this.options[a];
      c = b.Event(c);
      c.type = (
        a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a
      ).toLowerCase();
      d = d || {};
      if (c.originalEvent) {
        a = b.event.props.length;
        for (var f; a; ) {
          f = b.event.props[--a];
          c[f] = c.originalEvent[f];
        }
      }
      this.element.trigger(c, d);
      return !(
        (b.isFunction(e) && e.call(this.element[0], c, d) === false) ||
        c.isDefaultPrevented()
      );
    },
  };
})(jQuery);
(function (c) {
  c.widget("ui.mouse", {
    options: { cancel: ":input,option", distance: 1, delay: 0 },
    _mouseInit: function () {
      var a = this;
      this.element
        .bind("mousedown." + this.widgetName, function (b) {
          return a._mouseDown(b);
        })
        .bind("click." + this.widgetName, function (b) {
          if (a._preventClickEvent) {
            a._preventClickEvent = false;
            b.stopImmediatePropagation();
            return false;
          }
        });
      this.started = false;
    },
    _mouseDestroy: function () {
      this.element.unbind("." + this.widgetName);
    },
    _mouseDown: function (a) {
      a.originalEvent = a.originalEvent || {};
      if (!a.originalEvent.mouseHandled) {
        this._mouseStarted && this._mouseUp(a);
        this._mouseDownEvent = a;
        var b = this,
          e = a.which == 1,
          f =
            typeof this.options.cancel == "string"
              ? c(a.target).parents().add(a.target).filter(this.options.cancel)
                  .length
              : false;
        if (!e || f || !this._mouseCapture(a)) return true;
        this.mouseDelayMet = !this.options.delay;
        if (!this.mouseDelayMet)
          this._mouseDelayTimer = setTimeout(function () {
            b.mouseDelayMet = true;
          }, this.options.delay);
        if (this._mouseDistanceMet(a) && this._mouseDelayMet(a)) {
          this._mouseStarted = this._mouseStart(a) !== false;
          if (!this._mouseStarted) {
            a.preventDefault();
            return true;
          }
        }
        this._mouseMoveDelegate = function (d) {
          return b._mouseMove(d);
        };
        this._mouseUpDelegate = function (d) {
          return b._mouseUp(d);
        };
        c(document)
          .bind("mousemove." + this.widgetName, this._mouseMoveDelegate)
          .bind("mouseup." + this.widgetName, this._mouseUpDelegate);
        c.browser.safari || a.preventDefault();
        return (a.originalEvent.mouseHandled = true);
      }
    },
    _mouseMove: function (a) {
      if (c.browser.msie && !a.button) return this._mouseUp(a);
      if (this._mouseStarted) {
        this._mouseDrag(a);
        return a.preventDefault();
      }
      if (this._mouseDistanceMet(a) && this._mouseDelayMet(a))
        (this._mouseStarted =
          this._mouseStart(this._mouseDownEvent, a) !== false)
          ? this._mouseDrag(a)
          : this._mouseUp(a);
      return !this._mouseStarted;
    },
    _mouseUp: function (a) {
      c(document)
        .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
        .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
      if (this._mouseStarted) {
        this._mouseStarted = false;
        this._preventClickEvent = a.target == this._mouseDownEvent.target;
        this._mouseStop(a);
      }
      return false;
    },
    _mouseDistanceMet: function (a) {
      return (
        Math.max(
          Math.abs(this._mouseDownEvent.pageX - a.pageX),
          Math.abs(this._mouseDownEvent.pageY - a.pageY)
        ) >= this.options.distance
      );
    },
    _mouseDelayMet: function () {
      return this.mouseDelayMet;
    },
    _mouseStart: function () {},
    _mouseDrag: function () {},
    _mouseStop: function () {},
    _mouseCapture: function () {
      return true;
    },
  });
})(jQuery);
(function (c) {
  c.ui = c.ui || {};
  var m = /left|center|right/,
    n = /top|center|bottom/,
    p = c.fn.position,
    q = c.fn.offset;
  c.fn.position = function (a) {
    if (!a || !a.of) return p.apply(this, arguments);
    a = c.extend({}, a);
    var b = c(a.of),
      d = (a.collision || "flip").split(" "),
      e = a.offset ? a.offset.split(" ") : [0, 0],
      g,
      h,
      i;
    if (a.of.nodeType === 9) {
      g = b.width();
      h = b.height();
      i = { top: 0, left: 0 };
    } else if (a.of.scrollTo && a.of.document) {
      g = b.width();
      h = b.height();
      i = { top: b.scrollTop(), left: b.scrollLeft() };
    } else if (a.of.preventDefault) {
      a.at = "left top";
      g = h = 0;
      i = { top: a.of.pageY, left: a.of.pageX };
    } else {
      g = b.outerWidth();
      h = b.outerHeight();
      i = b.offset();
    }
    c.each(["my", "at"], function () {
      var f = (a[this] || "").split(" ");
      if (f.length === 1)
        f = m.test(f[0])
          ? f.concat(["center"])
          : n.test(f[0])
          ? ["center"].concat(f)
          : ["center", "center"];
      f[0] = m.test(f[0]) ? f[0] : "center";
      f[1] = n.test(f[1]) ? f[1] : "center";
      a[this] = f;
    });
    if (d.length === 1) d[1] = d[0];
    e[0] = parseInt(e[0], 10) || 0;
    if (e.length === 1) e[1] = e[0];
    e[1] = parseInt(e[1], 10) || 0;
    if (a.at[0] === "right") i.left += g;
    else if (a.at[0] === "center") i.left += g / 2;
    if (a.at[1] === "bottom") i.top += h;
    else if (a.at[1] === "center") i.top += h / 2;
    i.left += e[0];
    i.top += e[1];
    return this.each(function () {
      var f = c(this),
        k = f.outerWidth(),
        l = f.outerHeight(),
        j = c.extend({}, i);
      if (a.my[0] === "right") j.left -= k;
      else if (a.my[0] === "center") j.left -= k / 2;
      if (a.my[1] === "bottom") j.top -= l;
      else if (a.my[1] === "center") j.top -= l / 2;
      j.left = parseInt(j.left);
      j.top = parseInt(j.top);
      c.each(["left", "top"], function (o, r) {
        c.ui.position[d[o]] &&
          c.ui.position[d[o]][r](j, {
            targetWidth: g,
            targetHeight: h,
            elemWidth: k,
            elemHeight: l,
            offset: e,
            my: a.my,
            at: a.at,
          });
      });
      c.fn.bgiframe && f.bgiframe();
      f.offset(c.extend(j, { using: a.using }));
    });
  };
  c.ui.position = {
    fit: {
      left: function (a, b) {
        var d = c(window);
        b = a.left + b.elemWidth - d.width() - d.scrollLeft();
        a.left = b > 0 ? a.left - b : Math.max(0, a.left);
      },
      top: function (a, b) {
        var d = c(window);
        b = a.top + b.elemHeight - d.height() - d.scrollTop();
        a.top = b > 0 ? a.top - b : Math.max(0, a.top);
      },
    },
    flip: {
      left: function (a, b) {
        if (b.at[0] !== "center") {
          var d = c(window);
          d = a.left + b.elemWidth - d.width() - d.scrollLeft();
          var e =
              b.my[0] === "left"
                ? -b.elemWidth
                : b.my[0] === "right"
                ? b.elemWidth
                : 0,
            g = -2 * b.offset[0];
          a.left +=
            a.left < 0
              ? e + b.targetWidth + g
              : d > 0
              ? e - b.targetWidth + g
              : 0;
        }
      },
      top: function (a, b) {
        if (b.at[1] !== "center") {
          var d = c(window);
          d = a.top + b.elemHeight - d.height() - d.scrollTop();
          var e =
              b.my[1] === "top"
                ? -b.elemHeight
                : b.my[1] === "bottom"
                ? b.elemHeight
                : 0,
            g = b.at[1] === "top" ? b.targetHeight : -b.targetHeight,
            h = -2 * b.offset[1];
          a.top += a.top < 0 ? e + b.targetHeight + h : d > 0 ? e + g + h : 0;
        }
      },
    },
  };
  if (!c.offset.setOffset) {
    c.offset.setOffset = function (a, b) {
      if (/static/.test(c.curCSS(a, "position"))) a.style.position = "relative";
      var d = c(a),
        e = d.offset(),
        g = parseInt(c.curCSS(a, "top", true), 10) || 0,
        h = parseInt(c.curCSS(a, "left", true), 10) || 0;
      e = { top: b.top - e.top + g, left: b.left - e.left + h };
      "using" in b ? b.using.call(a, e) : d.css(e);
    };
    c.fn.offset = function (a) {
      var b = this[0];
      if (!b || !b.ownerDocument) return null;
      if (a)
        return this.each(function () {
          c.offset.setOffset(this, a);
        });
      return q.call(this);
    };
  }
})(jQuery);
(function (d) {
  d.widget("ui.draggable", d.ui.mouse, {
    widgetEventPrefix: "drag",
    options: {
      addClasses: true,
      appendTo: "parent",
      axis: false,
      connectToSortable: false,
      containment: false,
      cursor: "auto",
      cursorAt: false,
      grid: false,
      handle: false,
      helper: "original",
      iframeFix: false,
      opacity: false,
      refreshPositions: false,
      revert: false,
      revertDuration: 500,
      scope: "default",
      scroll: true,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: false,
      snapMode: "both",
      snapTolerance: 20,
      stack: false,
      zIndex: false,
    },
    _create: function () {
      if (
        this.options.helper == "original" &&
        !/^(?:r|a|f)/.test(this.element.css("position"))
      )
        this.element[0].style.position = "relative";
      this.options.addClasses && this.element.addClass("ui-draggable");
      this.options.disabled && this.element.addClass("ui-draggable-disabled");
      this._mouseInit();
    },
    destroy: function () {
      if (this.element.data("draggable")) {
        this.element
          .removeData("draggable")
          .unbind(".draggable")
          .removeClass(
            "ui-draggable ui-draggable-dragging ui-draggable-disabled"
          );
        this._mouseDestroy();
        return this;
      }
    },
    _mouseCapture: function (a) {
      var b = this.options;
      if (this.helper || b.disabled || d(a.target).is(".ui-resizable-handle"))
        return false;
      this.handle = this._getHandle(a);
      if (!this.handle) return false;
      return true;
    },
    _mouseStart: function (a) {
      var b = this.options;
      this.helper = this._createHelper(a);
      this._cacheHelperProportions();
      if (d.ui.ddmanager) d.ui.ddmanager.current = this;
      this._cacheMargins();
      this.cssPosition = this.helper.css("position");
      this.scrollParent = this.helper.scrollParent();
      this.offset = this.positionAbs = this.element.offset();
      this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left,
      };
      d.extend(this.offset, {
        click: {
          left: a.pageX - this.offset.left,
          top: a.pageY - this.offset.top,
        },
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset(),
      });
      this.originalPosition = this.position = this._generatePosition(a);
      this.originalPageX = a.pageX;
      this.originalPageY = a.pageY;
      b.cursorAt && this._adjustOffsetFromHelper(b.cursorAt);
      b.containment && this._setContainment();
      if (this._trigger("start", a) === false) {
        this._clear();
        return false;
      }
      this._cacheHelperProportions();
      d.ui.ddmanager &&
        !b.dropBehaviour &&
        d.ui.ddmanager.prepareOffsets(this, a);
      this.helper.addClass("ui-draggable-dragging");
      this._mouseDrag(a, true);
      return true;
    },
    _mouseDrag: function (a, b) {
      this.position = this._generatePosition(a);
      this.positionAbs = this._convertPositionTo("absolute");
      if (!b) {
        b = this._uiHash();
        if (this._trigger("drag", a, b) === false) {
          this._mouseUp({});
          return false;
        }
        this.position = b.position;
      }
      if (!this.options.axis || this.options.axis != "y")
        this.helper[0].style.left = this.position.left + "px";
      if (!this.options.axis || this.options.axis != "x")
        this.helper[0].style.top = this.position.top + "px";
      d.ui.ddmanager && d.ui.ddmanager.drag(this, a);
      return false;
    },
    _mouseStop: function (a) {
      var b = false;
      if (d.ui.ddmanager && !this.options.dropBehaviour)
        b = d.ui.ddmanager.drop(this, a);
      if (this.dropped) {
        b = this.dropped;
        this.dropped = false;
      }
      if (!this.element[0] || !this.element[0].parentNode) return false;
      if (
        (this.options.revert == "invalid" && !b) ||
        (this.options.revert == "valid" && b) ||
        this.options.revert === true ||
        (d.isFunction(this.options.revert) &&
          this.options.revert.call(this.element, b))
      ) {
        var c = this;
        d(this.helper).animate(
          this.originalPosition,
          parseInt(this.options.revertDuration, 10),
          function () {
            c._trigger("stop", a) !== false && c._clear();
          }
        );
      } else this._trigger("stop", a) !== false && this._clear();
      return false;
    },
    cancel: function () {
      this.helper.is(".ui-draggable-dragging")
        ? this._mouseUp({})
        : this._clear();
      return this;
    },
    _getHandle: function (a) {
      var b =
        !this.options.handle || !d(this.options.handle, this.element).length
          ? true
          : false;
      d(this.options.handle, this.element)
        .find("*")
        .andSelf()
        .each(function () {
          if (this == a.target) b = true;
        });
      return b;
    },
    _createHelper: function (a) {
      var b = this.options;
      a = d.isFunction(b.helper)
        ? d(b.helper.apply(this.element[0], [a]))
        : b.helper == "clone"
        ? this.element.clone()
        : this.element;
      a.parents("body").length ||
        a.appendTo(
          b.appendTo == "parent" ? this.element[0].parentNode : b.appendTo
        );
      a[0] != this.element[0] &&
        !/(fixed|absolute)/.test(a.css("position")) &&
        a.css("position", "absolute");
      return a;
    },
    _adjustOffsetFromHelper: function (a) {
      if (typeof a == "string") a = a.split(" ");
      if (d.isArray(a)) a = { left: +a[0], top: +a[1] || 0 };
      if ("left" in a) this.offset.click.left = a.left + this.margins.left;
      if ("right" in a)
        this.offset.click.left =
          this.helperProportions.width - a.right + this.margins.left;
      if ("top" in a) this.offset.click.top = a.top + this.margins.top;
      if ("bottom" in a)
        this.offset.click.top =
          this.helperProportions.height - a.bottom + this.margins.top;
    },
    _getParentOffset: function () {
      this.offsetParent = this.helper.offsetParent();
      var a = this.offsetParent.offset();
      if (
        this.cssPosition == "absolute" &&
        this.scrollParent[0] != document &&
        d.ui.contains(this.scrollParent[0], this.offsetParent[0])
      ) {
        a.left += this.scrollParent.scrollLeft();
        a.top += this.scrollParent.scrollTop();
      }
      if (
        this.offsetParent[0] == document.body ||
        (this.offsetParent[0].tagName &&
          this.offsetParent[0].tagName.toLowerCase() == "html" &&
          d.browser.msie)
      )
        a = { top: 0, left: 0 };
      return {
        top:
          a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left:
          a.left +
          (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
      };
    },
    _getRelativeOffset: function () {
      if (this.cssPosition == "relative") {
        var a = this.element.position();
        return {
          top:
            a.top -
            (parseInt(this.helper.css("top"), 10) || 0) +
            this.scrollParent.scrollTop(),
          left:
            a.left -
            (parseInt(this.helper.css("left"), 10) || 0) +
            this.scrollParent.scrollLeft(),
        };
      } else return { top: 0, left: 0 };
    },
    _cacheMargins: function () {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
      };
    },
    _cacheHelperProportions: function () {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight(),
      };
    },
    _setContainment: function () {
      var a = this.options;
      if (a.containment == "parent") a.containment = this.helper[0].parentNode;
      if (a.containment == "document" || a.containment == "window")
        this.containment = [
          0 - this.offset.relative.left - this.offset.parent.left,
          0 - this.offset.relative.top - this.offset.parent.top,
          d(a.containment == "document" ? document : window).width() -
            this.helperProportions.width -
            this.margins.left,
          (d(a.containment == "document" ? document : window).height() ||
            document.body.parentNode.scrollHeight) -
            this.helperProportions.height -
            this.margins.top,
        ];
      if (
        !/^(document|window|parent)$/.test(a.containment) &&
        a.containment.constructor != Array
      ) {
        var b = d(a.containment)[0];
        if (b) {
          a = d(a.containment).offset();
          var c = d(b).css("overflow") != "hidden";
          this.containment = [
            a.left +
              (parseInt(d(b).css("borderLeftWidth"), 10) || 0) +
              (parseInt(d(b).css("paddingLeft"), 10) || 0) -
              this.margins.left,
            a.top +
              (parseInt(d(b).css("borderTopWidth"), 10) || 0) +
              (parseInt(d(b).css("paddingTop"), 10) || 0) -
              this.margins.top,
            a.left +
              (c ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) -
              (parseInt(d(b).css("borderLeftWidth"), 10) || 0) -
              (parseInt(d(b).css("paddingRight"), 10) || 0) -
              this.helperProportions.width -
              this.margins.left,
            a.top +
              (c ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) -
              (parseInt(d(b).css("borderTopWidth"), 10) || 0) -
              (parseInt(d(b).css("paddingBottom"), 10) || 0) -
              this.helperProportions.height -
              this.margins.top,
          ];
        }
      } else if (a.containment.constructor == Array)
        this.containment = a.containment;
    },
    _convertPositionTo: function (a, b) {
      if (!b) b = this.position;
      a = a == "absolute" ? 1 : -1;
      var c =
          this.cssPosition == "absolute" &&
          !(
            this.scrollParent[0] != document &&
            d.ui.contains(this.scrollParent[0], this.offsetParent[0])
          )
            ? this.offsetParent
            : this.scrollParent,
        f = /(html|body)/i.test(c[0].tagName);
      return {
        top:
          b.top +
          this.offset.relative.top * a +
          this.offset.parent.top * a -
          (d.browser.safari &&
          d.browser.version < 526 &&
          this.cssPosition == "fixed"
            ? 0
            : (this.cssPosition == "fixed"
                ? -this.scrollParent.scrollTop()
                : f
                ? 0
                : c.scrollTop()) * a),
        left:
          b.left +
          this.offset.relative.left * a +
          this.offset.parent.left * a -
          (d.browser.safari &&
          d.browser.version < 526 &&
          this.cssPosition == "fixed"
            ? 0
            : (this.cssPosition == "fixed"
                ? -this.scrollParent.scrollLeft()
                : f
                ? 0
                : c.scrollLeft()) * a),
      };
    },
    _generatePosition: function (a) {
      var b = this.options,
        c =
          this.cssPosition == "absolute" &&
          !(
            this.scrollParent[0] != document &&
            d.ui.contains(this.scrollParent[0], this.offsetParent[0])
          )
            ? this.offsetParent
            : this.scrollParent,
        f = /(html|body)/i.test(c[0].tagName),
        e = a.pageX,
        g = a.pageY;
      if (this.originalPosition) {
        if (this.containment) {
          if (a.pageX - this.offset.click.left < this.containment[0])
            e = this.containment[0] + this.offset.click.left;
          if (a.pageY - this.offset.click.top < this.containment[1])
            g = this.containment[1] + this.offset.click.top;
          if (a.pageX - this.offset.click.left > this.containment[2])
            e = this.containment[2] + this.offset.click.left;
          if (a.pageY - this.offset.click.top > this.containment[3])
            g = this.containment[3] + this.offset.click.top;
        }
        if (b.grid) {
          g =
            this.originalPageY +
            Math.round((g - this.originalPageY) / b.grid[1]) * b.grid[1];
          g = this.containment
            ? !(
                g - this.offset.click.top < this.containment[1] ||
                g - this.offset.click.top > this.containment[3]
              )
              ? g
              : !(g - this.offset.click.top < this.containment[1])
              ? g - b.grid[1]
              : g + b.grid[1]
            : g;
          e =
            this.originalPageX +
            Math.round((e - this.originalPageX) / b.grid[0]) * b.grid[0];
          e = this.containment
            ? !(
                e - this.offset.click.left < this.containment[0] ||
                e - this.offset.click.left > this.containment[2]
              )
              ? e
              : !(e - this.offset.click.left < this.containment[0])
              ? e - b.grid[0]
              : e + b.grid[0]
            : e;
        }
      }
      return {
        top:
          g -
          this.offset.click.top -
          this.offset.relative.top -
          this.offset.parent.top +
          (d.browser.safari &&
          d.browser.version < 526 &&
          this.cssPosition == "fixed"
            ? 0
            : this.cssPosition == "fixed"
            ? -this.scrollParent.scrollTop()
            : f
            ? 0
            : c.scrollTop()),
        left:
          e -
          this.offset.click.left -
          this.offset.relative.left -
          this.offset.parent.left +
          (d.browser.safari &&
          d.browser.version < 526 &&
          this.cssPosition == "fixed"
            ? 0
            : this.cssPosition == "fixed"
            ? -this.scrollParent.scrollLeft()
            : f
            ? 0
            : c.scrollLeft()),
      };
    },
    _clear: function () {
      this.helper.removeClass("ui-draggable-dragging");
      this.helper[0] != this.element[0] &&
        !this.cancelHelperRemoval &&
        this.helper.remove();
      this.helper = null;
      this.cancelHelperRemoval = false;
    },
    _trigger: function (a, b, c) {
      c = c || this._uiHash();
      d.ui.plugin.call(this, a, [b, c]);
      if (a == "drag") this.positionAbs = this._convertPositionTo("absolute");
      return d.Widget.prototype._trigger.call(this, a, b, c);
    },
    plugins: {},
    _uiHash: function () {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs,
      };
    },
  });
  d.extend(d.ui.draggable, { version: "1.8.1" });
  d.ui.plugin.add("draggable", "connectToSortable", {
    start: function (a, b) {
      var c = d(this).data("draggable"),
        f = c.options,
        e = d.extend({}, b, { item: c.element });
      c.sortables = [];
      d(f.connectToSortable).each(function () {
        var g = d.data(this, "sortable");
        if (g && !g.options.disabled) {
          c.sortables.push({ instance: g, shouldRevert: g.options.revert });
          g._refreshItems();
          g._trigger("activate", a, e);
        }
      });
    },
    stop: function (a, b) {
      var c = d(this).data("draggable"),
        f = d.extend({}, b, { item: c.element });
      d.each(c.sortables, function () {
        if (this.instance.isOver) {
          this.instance.isOver = 0;
          c.cancelHelperRemoval = true;
          this.instance.cancelHelperRemoval = false;
          if (this.shouldRevert) this.instance.options.revert = true;
          this.instance._mouseStop(a);
          this.instance.options.helper = this.instance.options._helper;
          c.options.helper == "original" &&
            this.instance.currentItem.css({ top: "auto", left: "auto" });
        } else {
          this.instance.cancelHelperRemoval = false;
          this.instance._trigger("deactivate", a, f);
        }
      });
    },
    drag: function (a, b) {
      var c = d(this).data("draggable"),
        f = this;
      d.each(c.sortables, function () {
        this.instance.positionAbs = c.positionAbs;
        this.instance.helperProportions = c.helperProportions;
        this.instance.offset.click = c.offset.click;
        if (this.instance._intersectsWith(this.instance.containerCache)) {
          if (!this.instance.isOver) {
            this.instance.isOver = 1;
            this.instance.currentItem = d(f)
              .clone()
              .appendTo(this.instance.element)
              .data("sortable-item", true);
            this.instance.options._helper = this.instance.options.helper;
            this.instance.options.helper = function () {
              return b.helper[0];
            };
            a.target = this.instance.currentItem[0];
            this.instance._mouseCapture(a, true);
            this.instance._mouseStart(a, true, true);
            this.instance.offset.click.top = c.offset.click.top;
            this.instance.offset.click.left = c.offset.click.left;
            this.instance.offset.parent.left -=
              c.offset.parent.left - this.instance.offset.parent.left;
            this.instance.offset.parent.top -=
              c.offset.parent.top - this.instance.offset.parent.top;
            c._trigger("toSortable", a);
            c.dropped = this.instance.element;
            c.currentItem = c.element;
            this.instance.fromOutside = c;
          }
          this.instance.currentItem && this.instance._mouseDrag(a);
        } else if (this.instance.isOver) {
          this.instance.isOver = 0;
          this.instance.cancelHelperRemoval = true;
          this.instance.options.revert = false;
          this.instance._trigger(
            "out",
            a,
            this.instance._uiHash(this.instance)
          );
          this.instance._mouseStop(a, true);
          this.instance.options.helper = this.instance.options._helper;
          this.instance.currentItem.remove();
          this.instance.placeholder && this.instance.placeholder.remove();
          c._trigger("fromSortable", a);
          c.dropped = false;
        }
      });
    },
  });
  d.ui.plugin.add("draggable", "cursor", {
    start: function () {
      var a = d("body"),
        b = d(this).data("draggable").options;
      if (a.css("cursor")) b._cursor = a.css("cursor");
      a.css("cursor", b.cursor);
    },
    stop: function () {
      var a = d(this).data("draggable").options;
      a._cursor && d("body").css("cursor", a._cursor);
    },
  });
  d.ui.plugin.add("draggable", "iframeFix", {
    start: function () {
      var a = d(this).data("draggable").options;
      d(a.iframeFix === true ? "iframe" : a.iframeFix).each(function () {
        d(
          '<div class="ui-draggable-iframeFix" style="background: #fff;"></div>'
        )
          .css({
            width: this.offsetWidth + "px",
            height: this.offsetHeight + "px",
            position: "absolute",
            opacity: "0.001",
            zIndex: 1e3,
          })
          .css(d(this).offset())
          .appendTo("body");
      });
    },
    stop: function () {
      d("div.ui-draggable-iframeFix").each(function () {
        this.parentNode.removeChild(this);
      });
    },
  });
  d.ui.plugin.add("draggable", "opacity", {
    start: function (a, b) {
      a = d(b.helper);
      b = d(this).data("draggable").options;
      if (a.css("opacity")) b._opacity = a.css("opacity");
      a.css("opacity", b.opacity);
    },
    stop: function (a, b) {
      a = d(this).data("draggable").options;
      a._opacity && d(b.helper).css("opacity", a._opacity);
    },
  });
  d.ui.plugin.add("draggable", "scroll", {
    start: function () {
      var a = d(this).data("draggable");
      if (a.scrollParent[0] != document && a.scrollParent[0].tagName != "HTML")
        a.overflowOffset = a.scrollParent.offset();
    },
    drag: function (a) {
      var b = d(this).data("draggable"),
        c = b.options,
        f = false;
      if (
        b.scrollParent[0] != document &&
        b.scrollParent[0].tagName != "HTML"
      ) {
        if (!c.axis || c.axis != "x")
          if (
            b.overflowOffset.top + b.scrollParent[0].offsetHeight - a.pageY <
            c.scrollSensitivity
          )
            b.scrollParent[0].scrollTop = f =
              b.scrollParent[0].scrollTop + c.scrollSpeed;
          else if (a.pageY - b.overflowOffset.top < c.scrollSensitivity)
            b.scrollParent[0].scrollTop = f =
              b.scrollParent[0].scrollTop - c.scrollSpeed;
        if (!c.axis || c.axis != "y")
          if (
            b.overflowOffset.left + b.scrollParent[0].offsetWidth - a.pageX <
            c.scrollSensitivity
          )
            b.scrollParent[0].scrollLeft = f =
              b.scrollParent[0].scrollLeft + c.scrollSpeed;
          else if (a.pageX - b.overflowOffset.left < c.scrollSensitivity)
            b.scrollParent[0].scrollLeft = f =
              b.scrollParent[0].scrollLeft - c.scrollSpeed;
      } else {
        if (!c.axis || c.axis != "x")
          if (a.pageY - d(document).scrollTop() < c.scrollSensitivity)
            f = d(document).scrollTop(d(document).scrollTop() - c.scrollSpeed);
          else if (
            d(window).height() - (a.pageY - d(document).scrollTop()) <
            c.scrollSensitivity
          )
            f = d(document).scrollTop(d(document).scrollTop() + c.scrollSpeed);
        if (!c.axis || c.axis != "y")
          if (a.pageX - d(document).scrollLeft() < c.scrollSensitivity)
            f = d(document).scrollLeft(
              d(document).scrollLeft() - c.scrollSpeed
            );
          else if (
            d(window).width() - (a.pageX - d(document).scrollLeft()) <
            c.scrollSensitivity
          )
            f = d(document).scrollLeft(
              d(document).scrollLeft() + c.scrollSpeed
            );
      }
      f !== false &&
        d.ui.ddmanager &&
        !c.dropBehaviour &&
        d.ui.ddmanager.prepareOffsets(b, a);
    },
  });
  d.ui.plugin.add("draggable", "snap", {
    start: function () {
      var a = d(this).data("draggable"),
        b = a.options;
      a.snapElements = [];
      d(
        b.snap.constructor != String
          ? b.snap.items || ":data(draggable)"
          : b.snap
      ).each(function () {
        var c = d(this),
          f = c.offset();
        this != a.element[0] &&
          a.snapElements.push({
            item: this,
            width: c.outerWidth(),
            height: c.outerHeight(),
            top: f.top,
            left: f.left,
          });
      });
    },
    drag: function (a, b) {
      for (
        var c = d(this).data("draggable"),
          f = c.options,
          e = f.snapTolerance,
          g = b.offset.left,
          n = g + c.helperProportions.width,
          m = b.offset.top,
          o = m + c.helperProportions.height,
          h = c.snapElements.length - 1;
        h >= 0;
        h--
      ) {
        var i = c.snapElements[h].left,
          k = i + c.snapElements[h].width,
          j = c.snapElements[h].top,
          l = j + c.snapElements[h].height;
        if (
          (i - e < g && g < k + e && j - e < m && m < l + e) ||
          (i - e < g && g < k + e && j - e < o && o < l + e) ||
          (i - e < n && n < k + e && j - e < m && m < l + e) ||
          (i - e < n && n < k + e && j - e < o && o < l + e)
        ) {
          if (f.snapMode != "inner") {
            var p = Math.abs(j - o) <= e,
              q = Math.abs(l - m) <= e,
              r = Math.abs(i - n) <= e,
              s = Math.abs(k - g) <= e;
            if (p)
              b.position.top =
                c._convertPositionTo("relative", {
                  top: j - c.helperProportions.height,
                  left: 0,
                }).top - c.margins.top;
            if (q)
              b.position.top =
                c._convertPositionTo("relative", { top: l, left: 0 }).top -
                c.margins.top;
            if (r)
              b.position.left =
                c._convertPositionTo("relative", {
                  top: 0,
                  left: i - c.helperProportions.width,
                }).left - c.margins.left;
            if (s)
              b.position.left =
                c._convertPositionTo("relative", { top: 0, left: k }).left -
                c.margins.left;
          }
          var t = p || q || r || s;
          if (f.snapMode != "outer") {
            p = Math.abs(j - m) <= e;
            q = Math.abs(l - o) <= e;
            r = Math.abs(i - g) <= e;
            s = Math.abs(k - n) <= e;
            if (p)
              b.position.top =
                c._convertPositionTo("relative", { top: j, left: 0 }).top -
                c.margins.top;
            if (q)
              b.position.top =
                c._convertPositionTo("relative", {
                  top: l - c.helperProportions.height,
                  left: 0,
                }).top - c.margins.top;
            if (r)
              b.position.left =
                c._convertPositionTo("relative", { top: 0, left: i }).left -
                c.margins.left;
            if (s)
              b.position.left =
                c._convertPositionTo("relative", {
                  top: 0,
                  left: k - c.helperProportions.width,
                }).left - c.margins.left;
          }
          if (!c.snapElements[h].snapping && (p || q || r || s || t))
            c.options.snap.snap &&
              c.options.snap.snap.call(
                c.element,
                a,
                d.extend(c._uiHash(), { snapItem: c.snapElements[h].item })
              );
          c.snapElements[h].snapping = p || q || r || s || t;
        } else {
          c.snapElements[h].snapping &&
            c.options.snap.release &&
            c.options.snap.release.call(
              c.element,
              a,
              d.extend(c._uiHash(), { snapItem: c.snapElements[h].item })
            );
          c.snapElements[h].snapping = false;
        }
      }
    },
  });
  d.ui.plugin.add("draggable", "stack", {
    start: function () {
      var a = d(this).data("draggable").options;
      a = d.makeArray(d(a.stack)).sort(function (c, f) {
        return (
          (parseInt(d(c).css("zIndex"), 10) || 0) -
          (parseInt(d(f).css("zIndex"), 10) || 0)
        );
      });
      if (a.length) {
        var b = parseInt(a[0].style.zIndex) || 0;
        d(a).each(function (c) {
          this.style.zIndex = b + c;
        });
        this[0].style.zIndex = b + a.length;
      }
    },
  });
  d.ui.plugin.add("draggable", "zIndex", {
    start: function (a, b) {
      a = d(b.helper);
      b = d(this).data("draggable").options;
      if (a.css("zIndex")) b._zIndex = a.css("zIndex");
      a.css("zIndex", b.zIndex);
    },
    stop: function (a, b) {
      a = d(this).data("draggable").options;
      a._zIndex && d(b.helper).css("zIndex", a._zIndex);
    },
  });
})(jQuery);
(function (d) {
  d.widget("ui.droppable", {
    widgetEventPrefix: "drop",
    options: {
      accept: "*",
      activeClass: false,
      addClasses: true,
      greedy: false,
      hoverClass: false,
      scope: "default",
      tolerance: "intersect",
    },
    _create: function () {
      var a = this.options,
        b = a.accept;
      this.isover = 0;
      this.isout = 1;
      this.accept = d.isFunction(b)
        ? b
        : function (c) {
            return c.is(b);
          };
      this.proportions = {
        width: this.element[0].offsetWidth,
        height: this.element[0].offsetHeight,
      };
      d.ui.ddmanager.droppables[a.scope] =
        d.ui.ddmanager.droppables[a.scope] || [];
      d.ui.ddmanager.droppables[a.scope].push(this);
      a.addClasses && this.element.addClass("ui-droppable");
    },
    destroy: function () {
      for (
        var a = d.ui.ddmanager.droppables[this.options.scope], b = 0;
        b < a.length;
        b++
      )
        a[b] == this && a.splice(b, 1);
      this.element
        .removeClass("ui-droppable ui-droppable-disabled")
        .removeData("droppable")
        .unbind(".droppable");
      return this;
    },
    _setOption: function (a, b) {
      if (a == "accept")
        this.accept = d.isFunction(b)
          ? b
          : function (c) {
              return c.is(b);
            };
      d.Widget.prototype._setOption.apply(this, arguments);
    },
    _activate: function (a) {
      var b = d.ui.ddmanager.current;
      this.options.activeClass &&
        this.element.addClass(this.options.activeClass);
      b && this._trigger("activate", a, this.ui(b));
    },
    _deactivate: function (a) {
      var b = d.ui.ddmanager.current;
      this.options.activeClass &&
        this.element.removeClass(this.options.activeClass);
      b && this._trigger("deactivate", a, this.ui(b));
    },
    _over: function (a) {
      var b = d.ui.ddmanager.current;
      if (!(!b || (b.currentItem || b.element)[0] == this.element[0]))
        if (this.accept.call(this.element[0], b.currentItem || b.element)) {
          this.options.hoverClass &&
            this.element.addClass(this.options.hoverClass);
          this._trigger("over", a, this.ui(b));
        }
    },
    _out: function (a) {
      var b = d.ui.ddmanager.current;
      if (!(!b || (b.currentItem || b.element)[0] == this.element[0]))
        if (this.accept.call(this.element[0], b.currentItem || b.element)) {
          this.options.hoverClass &&
            this.element.removeClass(this.options.hoverClass);
          this._trigger("out", a, this.ui(b));
        }
    },
    _drop: function (a, b) {
      var c = b || d.ui.ddmanager.current;
      if (!c || (c.currentItem || c.element)[0] == this.element[0])
        return false;
      var e = false;
      this.element
        .find(":data(droppable)")
        .not(".ui-draggable-dragging")
        .each(function () {
          var g = d.data(this, "droppable");
          if (
            g.options.greedy &&
            !g.options.disabled &&
            g.options.scope == c.options.scope &&
            g.accept.call(g.element[0], c.currentItem || c.element) &&
            d.ui.intersect(
              c,
              d.extend(g, { offset: g.element.offset() }),
              g.options.tolerance
            )
          ) {
            e = true;
            return false;
          }
        });
      if (e) return false;
      if (this.accept.call(this.element[0], c.currentItem || c.element)) {
        this.options.activeClass &&
          this.element.removeClass(this.options.activeClass);
        this.options.hoverClass &&
          this.element.removeClass(this.options.hoverClass);
        this._trigger("drop", a, this.ui(c));
        return this.element;
      }
      return false;
    },
    ui: function (a) {
      return {
        draggable: a.currentItem || a.element,
        helper: a.helper,
        position: a.position,
        offset: a.positionAbs,
      };
    },
  });
  d.extend(d.ui.droppable, { version: "1.8.1" });
  d.ui.intersect = function (a, b, c) {
    if (!b.offset) return false;
    var e = (a.positionAbs || a.position.absolute).left,
      g = e + a.helperProportions.width,
      f = (a.positionAbs || a.position.absolute).top,
      h = f + a.helperProportions.height,
      i = b.offset.left,
      k = i + b.proportions.width,
      j = b.offset.top,
      l = j + b.proportions.height;
    switch (c) {
      case "fit":
        return i < e && g < k && j < f && h < l;
      case "intersect":
        return (
          i < e + a.helperProportions.width / 2 &&
          g - a.helperProportions.width / 2 < k &&
          j < f + a.helperProportions.height / 2 &&
          h - a.helperProportions.height / 2 < l
        );
      case "pointer":
        return d.ui.isOver(
          (a.positionAbs || a.position.absolute).top +
            (a.clickOffset || a.offset.click).top,
          (a.positionAbs || a.position.absolute).left +
            (a.clickOffset || a.offset.click).left,
          j,
          i,
          b.proportions.height,
          b.proportions.width
        );
      case "touch":
        return (
          ((f >= j && f <= l) || (h >= j && h <= l) || (f < j && h > l)) &&
          ((e >= i && e <= k) || (g >= i && g <= k) || (e < i && g > k))
        );
      default:
        return false;
    }
  };
  d.ui.ddmanager = {
    current: null,
    droppables: { default: [] },
    prepareOffsets: function (a, b) {
      var c = d.ui.ddmanager.droppables[a.options.scope] || [],
        e = b ? b.type : null,
        g = (a.currentItem || a.element).find(":data(droppable)").andSelf(),
        f = 0;
      a: for (; f < c.length; f++)
        if (
          !(
            c[f].options.disabled ||
            (a &&
              !c[f].accept.call(c[f].element[0], a.currentItem || a.element))
          )
        ) {
          for (var h = 0; h < g.length; h++)
            if (g[h] == c[f].element[0]) {
              c[f].proportions.height = 0;
              continue a;
            }
          c[f].visible = c[f].element.css("display") != "none";
          if (c[f].visible) {
            c[f].offset = c[f].element.offset();
            c[f].proportions = {
              width: c[f].element[0].offsetWidth,
              height: c[f].element[0].offsetHeight,
            };
            e == "mousedown" && c[f]._activate.call(c[f], b);
          }
        }
    },
    drop: function (a, b) {
      var c = false;
      d.each(d.ui.ddmanager.droppables[a.options.scope] || [], function () {
        if (this.options) {
          if (
            !this.options.disabled &&
            this.visible &&
            d.ui.intersect(a, this, this.options.tolerance)
          )
            c = c || this._drop.call(this, b);
          if (
            !this.options.disabled &&
            this.visible &&
            this.accept.call(this.element[0], a.currentItem || a.element)
          ) {
            this.isout = 1;
            this.isover = 0;
            this._deactivate.call(this, b);
          }
        }
      });
      return c;
    },
    drag: function (a, b) {
      a.options.refreshPositions && d.ui.ddmanager.prepareOffsets(a, b);
      d.each(d.ui.ddmanager.droppables[a.options.scope] || [], function () {
        if (!(this.options.disabled || this.greedyChild || !this.visible)) {
          var c = d.ui.intersect(a, this, this.options.tolerance);
          if (
            (c =
              !c && this.isover == 1
                ? "isout"
                : c && this.isover == 0
                ? "isover"
                : null)
          ) {
            var e;
            if (this.options.greedy) {
              var g = this.element.parents(":data(droppable):eq(0)");
              if (g.length) {
                e = d.data(g[0], "droppable");
                e.greedyChild = c == "isover" ? 1 : 0;
              }
            }
            if (e && c == "isover") {
              e.isover = 0;
              e.isout = 1;
              e._out.call(e, b);
            }
            this[c] = 1;
            this[c == "isout" ? "isover" : "isout"] = 0;
            this[c == "isover" ? "_over" : "_out"].call(this, b);
            if (e && c == "isout") {
              e.isout = 0;
              e.isover = 1;
              e._over.call(e, b);
            }
          }
        }
      });
    },
  };
})(jQuery);
(function (d) {
  d.widget("ui.resizable", d.ui.mouse, {
    widgetEventPrefix: "resize",
    options: {
      alsoResize: false,
      animate: false,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: false,
      autoHide: false,
      containment: false,
      ghost: false,
      grid: false,
      handles: "e,s,se",
      helper: false,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 1e3,
    },
    _create: function () {
      var b = this,
        a = this.options;
      this.element.addClass("ui-resizable");
      d.extend(this, {
        _aspectRatio: !!a.aspectRatio,
        aspectRatio: a.aspectRatio,
        originalElement: this.element,
        _proportionallyResizeElements: [],
        _helper:
          a.helper || a.ghost || a.animate
            ? a.helper || "ui-resizable-helper"
            : null,
      });
      if (
        this.element[0].nodeName.match(
          /canvas|textarea|input|select|button|img/i
        )
      ) {
        /relative/.test(this.element.css("position")) &&
          d.browser.opera &&
          this.element.css({ position: "relative", top: "auto", left: "auto" });
        this.element.wrap(
          d('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
            position: this.element.css("position"),
            width: this.element.outerWidth(),
            height: this.element.outerHeight(),
            top: this.element.css("top"),
            left: this.element.css("left"),
          })
        );
        this.element = this.element
          .parent()
          .data("resizable", this.element.data("resizable"));
        this.elementIsWrapper = true;
        this.element.css({
          marginLeft: this.originalElement.css("marginLeft"),
          marginTop: this.originalElement.css("marginTop"),
          marginRight: this.originalElement.css("marginRight"),
          marginBottom: this.originalElement.css("marginBottom"),
        });
        this.originalElement.css({
          marginLeft: 0,
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0,
        });
        this.originalResizeStyle = this.originalElement.css("resize");
        this.originalElement.css("resize", "none");
        this._proportionallyResizeElements.push(
          this.originalElement.css({
            position: "static",
            zoom: 1,
            display: "block",
          })
        );
        this.originalElement.css({
          margin: this.originalElement.css("margin"),
        });
        this._proportionallyResize();
      }
      this.handles =
        a.handles ||
        (!d(".ui-resizable-handle", this.element).length
          ? "e,s,se"
          : {
              n: ".ui-resizable-n",
              e: ".ui-resizable-e",
              s: ".ui-resizable-s",
              w: ".ui-resizable-w",
              se: ".ui-resizable-se",
              sw: ".ui-resizable-sw",
              ne: ".ui-resizable-ne",
              nw: ".ui-resizable-nw",
            });
      if (this.handles.constructor == String) {
        if (this.handles == "all") this.handles = "n,e,s,w,se,sw,ne,nw";
        var c = this.handles.split(",");
        this.handles = {};
        for (var e = 0; e < c.length; e++) {
          var g = d.trim(c[e]),
            f = d(
              '<div class="ui-resizable-handle ' +
                ("ui-resizable-" + g) +
                '"></div>'
            );
          /sw|se|ne|nw/.test(g) && f.css({ zIndex: ++a.zIndex });
          "se" == g && f.addClass("ui-icon ui-icon-gripsmall-diagonal-se");
          this.handles[g] = ".ui-resizable-" + g;
          this.element.append(f);
        }
      }
      this._renderAxis = function (h) {
        h = h || this.element;
        for (var i in this.handles) {
          if (this.handles[i].constructor == String)
            this.handles[i] = d(this.handles[i], this.element).show();
          if (
            this.elementIsWrapper &&
            this.originalElement[0].nodeName.match(
              /textarea|input|select|button/i
            )
          ) {
            var j = d(this.handles[i], this.element),
              l = 0;
            l = /sw|ne|nw|se|n|s/.test(i) ? j.outerHeight() : j.outerWidth();
            j = [
              "padding",
              /ne|nw|n/.test(i)
                ? "Top"
                : /se|sw|s/.test(i)
                ? "Bottom"
                : /^e$/.test(i)
                ? "Right"
                : "Left",
            ].join("");
            h.css(j, l);
            this._proportionallyResize();
          }
          d(this.handles[i]);
        }
      };
      this._renderAxis(this.element);
      this._handles = d(
        ".ui-resizable-handle",
        this.element
      ).disableSelection();
      this._handles.mouseover(function () {
        if (!b.resizing) {
          if (this.className)
            var h = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
          b.axis = h && h[1] ? h[1] : "se";
        }
      });
      if (a.autoHide) {
        this._handles.hide();
        d(this.element)
          .addClass("ui-resizable-autohide")
          .hover(
            function () {
              d(this).removeClass("ui-resizable-autohide");
              b._handles.show();
            },
            function () {
              if (!b.resizing) {
                d(this).addClass("ui-resizable-autohide");
                b._handles.hide();
              }
            }
          );
      }
      this._mouseInit();
    },
    destroy: function () {
      this._mouseDestroy();
      var b = function (c) {
        d(c)
          .removeClass(
            "ui-resizable ui-resizable-disabled ui-resizable-resizing"
          )
          .removeData("resizable")
          .unbind(".resizable")
          .find(".ui-resizable-handle")
          .remove();
      };
      if (this.elementIsWrapper) {
        b(this.element);
        var a = this.element;
        a.after(
          this.originalElement.css({
            position: a.css("position"),
            width: a.outerWidth(),
            height: a.outerHeight(),
            top: a.css("top"),
            left: a.css("left"),
          })
        ).remove();
      }
      this.originalElement.css("resize", this.originalResizeStyle);
      b(this.originalElement);
      return this;
    },
    _mouseCapture: function (b) {
      var a = false;
      for (var c in this.handles)
        if (d(this.handles[c])[0] == b.target) a = true;
      return !this.options.disabled && a;
    },
    _mouseStart: function (b) {
      var a = this.options,
        c = this.element.position(),
        e = this.element;
      this.resizing = true;
      this.documentScroll = {
        top: d(document).scrollTop(),
        left: d(document).scrollLeft(),
      };
      if (e.is(".ui-draggable") || /absolute/.test(e.css("position")))
        e.css({ position: "absolute", top: c.top, left: c.left });
      d.browser.opera &&
        /relative/.test(e.css("position")) &&
        e.css({ position: "relative", top: "auto", left: "auto" });
      this._renderProxy();
      c = m(this.helper.css("left"));
      var g = m(this.helper.css("top"));
      if (a.containment) {
        c += d(a.containment).scrollLeft() || 0;
        g += d(a.containment).scrollTop() || 0;
      }
      this.offset = this.helper.offset();
      this.position = { left: c, top: g };
      this.size = this._helper
        ? { width: e.outerWidth(), height: e.outerHeight() }
        : { width: e.width(), height: e.height() };
      this.originalSize = this._helper
        ? { width: e.outerWidth(), height: e.outerHeight() }
        : { width: e.width(), height: e.height() };
      this.originalPosition = { left: c, top: g };
      this.sizeDiff = {
        width: e.outerWidth() - e.width(),
        height: e.outerHeight() - e.height(),
      };
      this.originalMousePosition = { left: b.pageX, top: b.pageY };
      this.aspectRatio =
        typeof a.aspectRatio == "number"
          ? a.aspectRatio
          : this.originalSize.width / this.originalSize.height || 1;
      a = d(".ui-resizable-" + this.axis).css("cursor");
      d("body").css("cursor", a == "auto" ? this.axis + "-resize" : a);
      e.addClass("ui-resizable-resizing");
      this._propagate("start", b);
      return true;
    },
    _mouseDrag: function (b) {
      var a = this.helper,
        c = this.originalMousePosition,
        e = this._change[this.axis];
      if (!e) return false;
      c = e.apply(this, [b, b.pageX - c.left || 0, b.pageY - c.top || 0]);
      if (this._aspectRatio || b.shiftKey) c = this._updateRatio(c, b);
      c = this._respectSize(c, b);
      this._propagate("resize", b);
      a.css({
        top: this.position.top + "px",
        left: this.position.left + "px",
        width: this.size.width + "px",
        height: this.size.height + "px",
      });
      !this._helper &&
        this._proportionallyResizeElements.length &&
        this._proportionallyResize();
      this._updateCache(c);
      this._trigger("resize", b, this.ui());
      return false;
    },
    _mouseStop: function (b) {
      this.resizing = false;
      var a = this.options,
        c = this;
      if (this._helper) {
        var e = this._proportionallyResizeElements,
          g = e.length && /textarea/i.test(e[0].nodeName);
        e = g && d.ui.hasScroll(e[0], "left") ? 0 : c.sizeDiff.height;
        g = {
          width: c.size.width - (g ? 0 : c.sizeDiff.width),
          height: c.size.height - e,
        };
        e =
          parseInt(c.element.css("left"), 10) +
            (c.position.left - c.originalPosition.left) || null;
        var f =
          parseInt(c.element.css("top"), 10) +
            (c.position.top - c.originalPosition.top) || null;
        a.animate || this.element.css(d.extend(g, { top: f, left: e }));
        c.helper.height(c.size.height);
        c.helper.width(c.size.width);
        this._helper && !a.animate && this._proportionallyResize();
      }
      d("body").css("cursor", "auto");
      this.element.removeClass("ui-resizable-resizing");
      this._propagate("stop", b);
      this._helper && this.helper.remove();
      return false;
    },
    _updateCache: function (b) {
      this.offset = this.helper.offset();
      if (k(b.left)) this.position.left = b.left;
      if (k(b.top)) this.position.top = b.top;
      if (k(b.height)) this.size.height = b.height;
      if (k(b.width)) this.size.width = b.width;
    },
    _updateRatio: function (b) {
      var a = this.position,
        c = this.size,
        e = this.axis;
      if (b.height) b.width = c.height * this.aspectRatio;
      else if (b.width) b.height = c.width / this.aspectRatio;
      if (e == "sw") {
        b.left = a.left + (c.width - b.width);
        b.top = null;
      }
      if (e == "nw") {
        b.top = a.top + (c.height - b.height);
        b.left = a.left + (c.width - b.width);
      }
      return b;
    },
    _respectSize: function (b) {
      var a = this.options,
        c = this.axis,
        e = k(b.width) && a.maxWidth && a.maxWidth < b.width,
        g = k(b.height) && a.maxHeight && a.maxHeight < b.height,
        f = k(b.width) && a.minWidth && a.minWidth > b.width,
        h = k(b.height) && a.minHeight && a.minHeight > b.height;
      if (f) b.width = a.minWidth;
      if (h) b.height = a.minHeight;
      if (e) b.width = a.maxWidth;
      if (g) b.height = a.maxHeight;
      var i = this.originalPosition.left + this.originalSize.width,
        j = this.position.top + this.size.height,
        l = /sw|nw|w/.test(c);
      c = /nw|ne|n/.test(c);
      if (f && l) b.left = i - a.minWidth;
      if (e && l) b.left = i - a.maxWidth;
      if (h && c) b.top = j - a.minHeight;
      if (g && c) b.top = j - a.maxHeight;
      if ((a = !b.width && !b.height) && !b.left && b.top) b.top = null;
      else if (a && !b.top && b.left) b.left = null;
      return b;
    },
    _proportionallyResize: function () {
      if (this._proportionallyResizeElements.length)
        for (
          var b = this.helper || this.element, a = 0;
          a < this._proportionallyResizeElements.length;
          a++
        ) {
          var c = this._proportionallyResizeElements[a];
          if (!this.borderDif) {
            var e = [
                c.css("borderTopWidth"),
                c.css("borderRightWidth"),
                c.css("borderBottomWidth"),
                c.css("borderLeftWidth"),
              ],
              g = [
                c.css("paddingTop"),
                c.css("paddingRight"),
                c.css("paddingBottom"),
                c.css("paddingLeft"),
              ];
            this.borderDif = d.map(e, function (f, h) {
              f = parseInt(f, 10) || 0;
              h = parseInt(g[h], 10) || 0;
              return f + h;
            });
          }
          (d.browser.msie &&
            (d(b).is(":hidden") || d(b).parents(":hidden").length)) ||
            c.css({
              height: b.height() - this.borderDif[0] - this.borderDif[2] || 0,
              width: b.width() - this.borderDif[1] - this.borderDif[3] || 0,
            });
        }
    },
    _renderProxy: function () {
      var b = this.options;
      this.elementOffset = this.element.offset();
      if (this._helper) {
        this.helper = this.helper || d('<div style="overflow:hidden;"></div>');
        var a = d.browser.msie && d.browser.version < 7,
          c = a ? 1 : 0;
        a = a ? 2 : -1;
        this.helper
          .addClass(this._helper)
          .css({
            width: this.element.outerWidth() + a,
            height: this.element.outerHeight() + a,
            position: "absolute",
            left: this.elementOffset.left - c + "px",
            top: this.elementOffset.top - c + "px",
            zIndex: ++b.zIndex,
          });
        this.helper.appendTo("body").disableSelection();
      } else this.helper = this.element;
    },
    _change: {
      e: function (b, a) {
        return { width: this.originalSize.width + a };
      },
      w: function (b, a) {
        return {
          left: this.originalPosition.left + a,
          width: this.originalSize.width - a,
        };
      },
      n: function (b, a, c) {
        return {
          top: this.originalPosition.top + c,
          height: this.originalSize.height - c,
        };
      },
      s: function (b, a, c) {
        return { height: this.originalSize.height + c };
      },
      se: function (b, a, c) {
        return d.extend(
          this._change.s.apply(this, arguments),
          this._change.e.apply(this, [b, a, c])
        );
      },
      sw: function (b, a, c) {
        return d.extend(
          this._change.s.apply(this, arguments),
          this._change.w.apply(this, [b, a, c])
        );
      },
      ne: function (b, a, c) {
        return d.extend(
          this._change.n.apply(this, arguments),
          this._change.e.apply(this, [b, a, c])
        );
      },
      nw: function (b, a, c) {
        return d.extend(
          this._change.n.apply(this, arguments),
          this._change.w.apply(this, [b, a, c])
        );
      },
    },
    _propagate: function (b, a) {
      d.ui.plugin.call(this, b, [a, this.ui()]);
      b != "resize" && this._trigger(b, a, this.ui());
    },
    plugins: {},
    ui: function () {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition,
      };
    },
  });
  d.extend(d.ui.resizable, { version: "1.8.1" });
  d.ui.plugin.add("resizable", "alsoResize", {
    start: function () {
      var b = d(this).data("resizable").options,
        a = function (c) {
          d(c).each(function () {
            d(this).data("resizable-alsoresize", {
              width: parseInt(d(this).width(), 10),
              height: parseInt(d(this).height(), 10),
              left: parseInt(d(this).css("left"), 10),
              top: parseInt(d(this).css("top"), 10),
            });
          });
        };
      if (typeof b.alsoResize == "object" && !b.alsoResize.parentNode)
        if (b.alsoResize.length) {
          b.alsoResize = b.alsoResize[0];
          a(b.alsoResize);
        } else
          d.each(b.alsoResize, function (c) {
            a(c);
          });
      else a(b.alsoResize);
    },
    resize: function () {
      var b = d(this).data("resizable"),
        a = b.options,
        c = b.originalSize,
        e = b.originalPosition,
        g = {
          height: b.size.height - c.height || 0,
          width: b.size.width - c.width || 0,
          top: b.position.top - e.top || 0,
          left: b.position.left - e.left || 0,
        },
        f = function (h, i) {
          d(h).each(function () {
            var j = d(this),
              l = d(this).data("resizable-alsoresize"),
              p = {};
            d.each(
              (i && i.length ? i : ["width", "height", "top", "left"]) || [
                "width",
                "height",
                "top",
                "left",
              ],
              function (n, o) {
                if ((n = (l[o] || 0) + (g[o] || 0)) && n >= 0) p[o] = n || null;
              }
            );
            if (/relative/.test(j.css("position")) && d.browser.opera) {
              b._revertToRelativePosition = true;
              j.css({ position: "absolute", top: "auto", left: "auto" });
            }
            j.css(p);
          });
        };
      typeof a.alsoResize == "object" && !a.alsoResize.nodeType
        ? d.each(a.alsoResize, function (h, i) {
            f(h, i);
          })
        : f(a.alsoResize);
    },
    stop: function () {
      var b = d(this).data("resizable");
      if (b._revertToRelativePosition && d.browser.opera) {
        b._revertToRelativePosition = false;
        el.css({ position: "relative" });
      }
      d(this).removeData("resizable-alsoresize-start");
    },
  });
  d.ui.plugin.add("resizable", "animate", {
    stop: function (b) {
      var a = d(this).data("resizable"),
        c = a.options,
        e = a._proportionallyResizeElements,
        g = e.length && /textarea/i.test(e[0].nodeName),
        f = g && d.ui.hasScroll(e[0], "left") ? 0 : a.sizeDiff.height;
      g = {
        width: a.size.width - (g ? 0 : a.sizeDiff.width),
        height: a.size.height - f,
      };
      f =
        parseInt(a.element.css("left"), 10) +
          (a.position.left - a.originalPosition.left) || null;
      var h =
        parseInt(a.element.css("top"), 10) +
          (a.position.top - a.originalPosition.top) || null;
      a.element.animate(d.extend(g, h && f ? { top: h, left: f } : {}), {
        duration: c.animateDuration,
        easing: c.animateEasing,
        step: function () {
          var i = {
            width: parseInt(a.element.css("width"), 10),
            height: parseInt(a.element.css("height"), 10),
            top: parseInt(a.element.css("top"), 10),
            left: parseInt(a.element.css("left"), 10),
          };
          e && e.length && d(e[0]).css({ width: i.width, height: i.height });
          a._updateCache(i);
          a._propagate("resize", b);
        },
      });
    },
  });
  d.ui.plugin.add("resizable", "containment", {
    start: function () {
      var b = d(this).data("resizable"),
        a = b.element,
        c = b.options.containment;
      if (
        (a =
          c instanceof d ? c.get(0) : /parent/.test(c) ? a.parent().get(0) : c)
      ) {
        b.containerElement = d(a);
        if (/document/.test(c) || c == document) {
          b.containerOffset = { left: 0, top: 0 };
          b.containerPosition = { left: 0, top: 0 };
          b.parentData = {
            element: d(document),
            left: 0,
            top: 0,
            width: d(document).width(),
            height:
              d(document).height() || document.body.parentNode.scrollHeight,
          };
        } else {
          var e = d(a),
            g = [];
          d(["Top", "Right", "Left", "Bottom"]).each(function (i, j) {
            g[i] = m(e.css("padding" + j));
          });
          b.containerOffset = e.offset();
          b.containerPosition = e.position();
          b.containerSize = {
            height: e.innerHeight() - g[3],
            width: e.innerWidth() - g[1],
          };
          c = b.containerOffset;
          var f = b.containerSize.height,
            h = b.containerSize.width;
          h = d.ui.hasScroll(a, "left") ? a.scrollWidth : h;
          f = d.ui.hasScroll(a) ? a.scrollHeight : f;
          b.parentData = {
            element: a,
            left: c.left,
            top: c.top,
            width: h,
            height: f,
          };
        }
      }
    },
    resize: function (b) {
      var a = d(this).data("resizable"),
        c = a.options,
        e = a.containerOffset,
        g = a.position;
      b = a._aspectRatio || b.shiftKey;
      var f = { top: 0, left: 0 },
        h = a.containerElement;
      if (h[0] != document && /static/.test(h.css("position"))) f = e;
      if (g.left < (a._helper ? e.left : 0)) {
        a.size.width += a._helper
          ? a.position.left - e.left
          : a.position.left - f.left;
        if (b) a.size.height = a.size.width / c.aspectRatio;
        a.position.left = c.helper ? e.left : 0;
      }
      if (g.top < (a._helper ? e.top : 0)) {
        a.size.height += a._helper ? a.position.top - e.top : a.position.top;
        if (b) a.size.width = a.size.height * c.aspectRatio;
        a.position.top = a._helper ? e.top : 0;
      }
      a.offset.left = a.parentData.left + a.position.left;
      a.offset.top = a.parentData.top + a.position.top;
      c = Math.abs(
        (a._helper ? a.offset.left - f.left : a.offset.left - f.left) +
          a.sizeDiff.width
      );
      e = Math.abs(
        (a._helper ? a.offset.top - f.top : a.offset.top - e.top) +
          a.sizeDiff.height
      );
      g = a.containerElement.get(0) == a.element.parent().get(0);
      f = /relative|absolute/.test(a.containerElement.css("position"));
      if (g && f) c -= a.parentData.left;
      if (c + a.size.width >= a.parentData.width) {
        a.size.width = a.parentData.width - c;
        if (b) a.size.height = a.size.width / a.aspectRatio;
      }
      if (e + a.size.height >= a.parentData.height) {
        a.size.height = a.parentData.height - e;
        if (b) a.size.width = a.size.height * a.aspectRatio;
      }
    },
    stop: function () {
      var b = d(this).data("resizable"),
        a = b.options,
        c = b.containerOffset,
        e = b.containerPosition,
        g = b.containerElement,
        f = d(b.helper),
        h = f.offset(),
        i = f.outerWidth() - b.sizeDiff.width;
      f = f.outerHeight() - b.sizeDiff.height;
      b._helper &&
        !a.animate &&
        /relative/.test(g.css("position")) &&
        d(this).css({ left: h.left - e.left - c.left, width: i, height: f });
      b._helper &&
        !a.animate &&
        /static/.test(g.css("position")) &&
        d(this).css({ left: h.left - e.left - c.left, width: i, height: f });
    },
  });
  d.ui.plugin.add("resizable", "ghost", {
    start: function () {
      var b = d(this).data("resizable"),
        a = b.options,
        c = b.size;
      b.ghost = b.originalElement.clone();
      b.ghost
        .css({
          opacity: 0.25,
          display: "block",
          position: "relative",
          height: c.height,
          width: c.width,
          margin: 0,
          left: 0,
          top: 0,
        })
        .addClass("ui-resizable-ghost")
        .addClass(typeof a.ghost == "string" ? a.ghost : "");
      b.ghost.appendTo(b.helper);
    },
    resize: function () {
      var b = d(this).data("resizable");
      b.ghost &&
        b.ghost.css({
          position: "relative",
          height: b.size.height,
          width: b.size.width,
        });
    },
    stop: function () {
      var b = d(this).data("resizable");
      b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0));
    },
  });
  d.ui.plugin.add("resizable", "grid", {
    resize: function () {
      var b = d(this).data("resizable"),
        a = b.options,
        c = b.size,
        e = b.originalSize,
        g = b.originalPosition,
        f = b.axis;
      a.grid = typeof a.grid == "number" ? [a.grid, a.grid] : a.grid;
      var h =
        Math.round((c.width - e.width) / (a.grid[0] || 1)) * (a.grid[0] || 1);
      a =
        Math.round((c.height - e.height) / (a.grid[1] || 1)) * (a.grid[1] || 1);
      if (/^(se|s|e)$/.test(f)) {
        b.size.width = e.width + h;
        b.size.height = e.height + a;
      } else if (/^(ne)$/.test(f)) {
        b.size.width = e.width + h;
        b.size.height = e.height + a;
        b.position.top = g.top - a;
      } else {
        if (/^(sw)$/.test(f)) {
          b.size.width = e.width + h;
          b.size.height = e.height + a;
        } else {
          b.size.width = e.width + h;
          b.size.height = e.height + a;
          b.position.top = g.top - a;
        }
        b.position.left = g.left - h;
      }
    },
  });
  var m = function (b) {
      return parseInt(b, 10) || 0;
    },
    k = function (b) {
      return !isNaN(parseInt(b, 10));
    };
})(jQuery);
(function (e) {
  e.widget("ui.selectable", e.ui.mouse, {
    options: {
      appendTo: "body",
      autoRefresh: true,
      distance: 0,
      filter: "*",
      tolerance: "touch",
    },
    _create: function () {
      var d = this;
      this.element.addClass("ui-selectable");
      this.dragged = false;
      var f;
      this.refresh = function () {
        f = e(d.options.filter, d.element[0]);
        f.each(function () {
          var c = e(this),
            b = c.offset();
          e.data(this, "selectable-item", {
            element: this,
            $element: c,
            left: b.left,
            top: b.top,
            right: b.left + c.outerWidth(),
            bottom: b.top + c.outerHeight(),
            startselected: false,
            selected: c.hasClass("ui-selected"),
            selecting: c.hasClass("ui-selecting"),
            unselecting: c.hasClass("ui-unselecting"),
          });
        });
      };
      this.refresh();
      this.selectees = f.addClass("ui-selectee");
      this._mouseInit();
      this.helper = e(document.createElement("div"))
        .css({ border: "1px dotted black" })
        .addClass("ui-selectable-helper");
    },
    destroy: function () {
      this.selectees.removeClass("ui-selectee").removeData("selectable-item");
      this.element
        .removeClass("ui-selectable ui-selectable-disabled")
        .removeData("selectable")
        .unbind(".selectable");
      this._mouseDestroy();
      return this;
    },
    _mouseStart: function (d) {
      var f = this;
      this.opos = [d.pageX, d.pageY];
      if (!this.options.disabled) {
        var c = this.options;
        this.selectees = e(c.filter, this.element[0]);
        this._trigger("start", d);
        e(c.appendTo).append(this.helper);
        this.helper.css({
          "z-index": 100,
          position: "absolute",
          left: d.clientX,
          top: d.clientY,
          width: 0,
          height: 0,
        });
        c.autoRefresh && this.refresh();
        this.selectees.filter(".ui-selected").each(function () {
          var b = e.data(this, "selectable-item");
          b.startselected = true;
          if (!d.metaKey) {
            b.$element.removeClass("ui-selected");
            b.selected = false;
            b.$element.addClass("ui-unselecting");
            b.unselecting = true;
            f._trigger("unselecting", d, { unselecting: b.element });
          }
        });
        e(d.target)
          .parents()
          .andSelf()
          .each(function () {
            var b = e.data(this, "selectable-item");
            if (b) {
              b.$element.removeClass("ui-unselecting").addClass("ui-selecting");
              b.unselecting = false;
              b.selecting = true;
              b.selected = true;
              f._trigger("selecting", d, { selecting: b.element });
              return false;
            }
          });
      }
    },
    _mouseDrag: function (d) {
      var f = this;
      this.dragged = true;
      if (!this.options.disabled) {
        var c = this.options,
          b = this.opos[0],
          g = this.opos[1],
          h = d.pageX,
          i = d.pageY;
        if (b > h) {
          var j = h;
          h = b;
          b = j;
        }
        if (g > i) {
          j = i;
          i = g;
          g = j;
        }
        this.helper.css({ left: b, top: g, width: h - b, height: i - g });
        this.selectees.each(function () {
          var a = e.data(this, "selectable-item");
          if (!(!a || a.element == f.element[0])) {
            var k = false;
            if (c.tolerance == "touch")
              k = !(a.left > h || a.right < b || a.top > i || a.bottom < g);
            else if (c.tolerance == "fit")
              k = a.left > b && a.right < h && a.top > g && a.bottom < i;
            if (k) {
              if (a.selected) {
                a.$element.removeClass("ui-selected");
                a.selected = false;
              }
              if (a.unselecting) {
                a.$element.removeClass("ui-unselecting");
                a.unselecting = false;
              }
              if (!a.selecting) {
                a.$element.addClass("ui-selecting");
                a.selecting = true;
                f._trigger("selecting", d, { selecting: a.element });
              }
            } else {
              if (a.selecting)
                if (d.metaKey && a.startselected) {
                  a.$element.removeClass("ui-selecting");
                  a.selecting = false;
                  a.$element.addClass("ui-selected");
                  a.selected = true;
                } else {
                  a.$element.removeClass("ui-selecting");
                  a.selecting = false;
                  if (a.startselected) {
                    a.$element.addClass("ui-unselecting");
                    a.unselecting = true;
                  }
                  f._trigger("unselecting", d, { unselecting: a.element });
                }
              if (a.selected)
                if (!d.metaKey && !a.startselected) {
                  a.$element.removeClass("ui-selected");
                  a.selected = false;
                  a.$element.addClass("ui-unselecting");
                  a.unselecting = true;
                  f._trigger("unselecting", d, { unselecting: a.element });
                }
            }
          }
        });
        return false;
      }
    },
    _mouseStop: function (d) {
      var f = this;
      this.dragged = false;
      e(".ui-unselecting", this.element[0]).each(function () {
        var c = e.data(this, "selectable-item");
        c.$element.removeClass("ui-unselecting");
        c.unselecting = false;
        c.startselected = false;
        f._trigger("unselected", d, { unselected: c.element });
      });
      e(".ui-selecting", this.element[0]).each(function () {
        var c = e.data(this, "selectable-item");
        c.$element.removeClass("ui-selecting").addClass("ui-selected");
        c.selecting = false;
        c.selected = true;
        c.startselected = true;
        f._trigger("selected", d, { selected: c.element });
      });
      this._trigger("stop", d);
      this.helper.remove();
      return false;
    },
  });
  e.extend(e.ui.selectable, { version: "1.8.1" });
})(jQuery);
(function (d) {
  d.widget("ui.sortable", d.ui.mouse, {
    widgetEventPrefix: "sort",
    options: {
      appendTo: "parent",
      axis: false,
      connectWith: false,
      containment: false,
      cursor: "auto",
      cursorAt: false,
      dropOnEmpty: true,
      forcePlaceholderSize: false,
      forceHelperSize: false,
      grid: false,
      handle: false,
      helper: "original",
      items: "> *",
      opacity: false,
      placeholder: false,
      revert: false,
      scroll: true,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: "default",
      tolerance: "intersect",
      zIndex: 1e3,
    },
    _create: function () {
      this.containerCache = {};
      this.element.addClass("ui-sortable");
      this.refresh();
      this.floating = this.items.length
        ? /left|right/.test(this.items[0].item.css("float"))
        : false;
      this.offset = this.element.offset();
      this._mouseInit();
    },
    destroy: function () {
      this.element
        .removeClass("ui-sortable ui-sortable-disabled")
        .removeData("sortable")
        .unbind(".sortable");
      this._mouseDestroy();
      for (var a = this.items.length - 1; a >= 0; a--)
        this.items[a].item.removeData("sortable-item");
      return this;
    },
    _setOption: function (a, b) {
      if (a === "disabled") {
        this.options[a] = b;
        this.widget()[b ? "addClass" : "removeClass"]("ui-sortable-disabled");
      } else d.Widget.prototype._setOption.apply(self, arguments);
    },
    _mouseCapture: function (a, b) {
      if (this.reverting) return false;
      if (this.options.disabled || this.options.type == "static") return false;
      this._refreshItems(a);
      var c = null,
        e = this;
      d(a.target)
        .parents()
        .each(function () {
          if (d.data(this, "sortable-item") == e) {
            c = d(this);
            return false;
          }
        });
      if (d.data(a.target, "sortable-item") == e) c = d(a.target);
      if (!c) return false;
      if (this.options.handle && !b) {
        var f = false;
        d(this.options.handle, c)
          .find("*")
          .andSelf()
          .each(function () {
            if (this == a.target) f = true;
          });
        if (!f) return false;
      }
      this.currentItem = c;
      this._removeCurrentsFromItems();
      return true;
    },
    _mouseStart: function (a, b, c) {
      b = this.options;
      var e = this;
      this.currentContainer = this;
      this.refreshPositions();
      this.helper = this._createHelper(a);
      this._cacheHelperProportions();
      this._cacheMargins();
      this.scrollParent = this.helper.scrollParent();
      this.offset = this.currentItem.offset();
      this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left,
      };
      this.helper.css("position", "absolute");
      this.cssPosition = this.helper.css("position");
      d.extend(this.offset, {
        click: {
          left: a.pageX - this.offset.left,
          top: a.pageY - this.offset.top,
        },
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset(),
      });
      this.originalPosition = this._generatePosition(a);
      this.originalPageX = a.pageX;
      this.originalPageY = a.pageY;
      b.cursorAt && this._adjustOffsetFromHelper(b.cursorAt);
      this.domPosition = {
        prev: this.currentItem.prev()[0],
        parent: this.currentItem.parent()[0],
      };
      this.helper[0] != this.currentItem[0] && this.currentItem.hide();
      this._createPlaceholder();
      b.containment && this._setContainment();
      if (b.cursor) {
        if (d("body").css("cursor"))
          this._storedCursor = d("body").css("cursor");
        d("body").css("cursor", b.cursor);
      }
      if (b.opacity) {
        if (this.helper.css("opacity"))
          this._storedOpacity = this.helper.css("opacity");
        this.helper.css("opacity", b.opacity);
      }
      if (b.zIndex) {
        if (this.helper.css("zIndex"))
          this._storedZIndex = this.helper.css("zIndex");
        this.helper.css("zIndex", b.zIndex);
      }
      if (
        this.scrollParent[0] != document &&
        this.scrollParent[0].tagName != "HTML"
      )
        this.overflowOffset = this.scrollParent.offset();
      this._trigger("start", a, this._uiHash());
      this._preserveHelperProportions || this._cacheHelperProportions();
      if (!c)
        for (c = this.containers.length - 1; c >= 0; c--)
          this.containers[c]._trigger("activate", a, e._uiHash(this));
      if (d.ui.ddmanager) d.ui.ddmanager.current = this;
      d.ui.ddmanager &&
        !b.dropBehaviour &&
        d.ui.ddmanager.prepareOffsets(this, a);
      this.dragging = true;
      this.helper.addClass("ui-sortable-helper");
      this._mouseDrag(a);
      return true;
    },
    _mouseDrag: function (a) {
      this.position = this._generatePosition(a);
      this.positionAbs = this._convertPositionTo("absolute");
      if (!this.lastPositionAbs) this.lastPositionAbs = this.positionAbs;
      if (this.options.scroll) {
        var b = this.options,
          c = false;
        if (
          this.scrollParent[0] != document &&
          this.scrollParent[0].tagName != "HTML"
        ) {
          if (
            this.overflowOffset.top +
              this.scrollParent[0].offsetHeight -
              a.pageY <
            b.scrollSensitivity
          )
            this.scrollParent[0].scrollTop = c =
              this.scrollParent[0].scrollTop + b.scrollSpeed;
          else if (a.pageY - this.overflowOffset.top < b.scrollSensitivity)
            this.scrollParent[0].scrollTop = c =
              this.scrollParent[0].scrollTop - b.scrollSpeed;
          if (
            this.overflowOffset.left +
              this.scrollParent[0].offsetWidth -
              a.pageX <
            b.scrollSensitivity
          )
            this.scrollParent[0].scrollLeft = c =
              this.scrollParent[0].scrollLeft + b.scrollSpeed;
          else if (a.pageX - this.overflowOffset.left < b.scrollSensitivity)
            this.scrollParent[0].scrollLeft = c =
              this.scrollParent[0].scrollLeft - b.scrollSpeed;
        } else {
          if (a.pageY - d(document).scrollTop() < b.scrollSensitivity)
            c = d(document).scrollTop(d(document).scrollTop() - b.scrollSpeed);
          else if (
            d(window).height() - (a.pageY - d(document).scrollTop()) <
            b.scrollSensitivity
          )
            c = d(document).scrollTop(d(document).scrollTop() + b.scrollSpeed);
          if (a.pageX - d(document).scrollLeft() < b.scrollSensitivity)
            c = d(document).scrollLeft(
              d(document).scrollLeft() - b.scrollSpeed
            );
          else if (
            d(window).width() - (a.pageX - d(document).scrollLeft()) <
            b.scrollSensitivity
          )
            c = d(document).scrollLeft(
              d(document).scrollLeft() + b.scrollSpeed
            );
        }
        c !== false &&
          d.ui.ddmanager &&
          !b.dropBehaviour &&
          d.ui.ddmanager.prepareOffsets(this, a);
      }
      this.positionAbs = this._convertPositionTo("absolute");
      if (!this.options.axis || this.options.axis != "y")
        this.helper[0].style.left = this.position.left + "px";
      if (!this.options.axis || this.options.axis != "x")
        this.helper[0].style.top = this.position.top + "px";
      for (b = this.items.length - 1; b >= 0; b--) {
        c = this.items[b];
        var e = c.item[0],
          f = this._intersectsWithPointer(c);
        if (f)
          if (
            e != this.currentItem[0] &&
            this.placeholder[f == 1 ? "next" : "prev"]()[0] != e &&
            !d.ui.contains(this.placeholder[0], e) &&
            (this.options.type == "semi-dynamic"
              ? !d.ui.contains(this.element[0], e)
              : true)
          ) {
            this.direction = f == 1 ? "down" : "up";
            if (
              this.options.tolerance == "pointer" ||
              this._intersectsWithSides(c)
            )
              this._rearrange(a, c);
            else break;
            this._trigger("change", a, this._uiHash());
            break;
          }
      }
      this._contactContainers(a);
      d.ui.ddmanager && d.ui.ddmanager.drag(this, a);
      this._trigger("sort", a, this._uiHash());
      this.lastPositionAbs = this.positionAbs;
      return false;
    },
    _mouseStop: function (a, b) {
      if (a) {
        d.ui.ddmanager &&
          !this.options.dropBehaviour &&
          d.ui.ddmanager.drop(this, a);
        if (this.options.revert) {
          var c = this;
          b = c.placeholder.offset();
          c.reverting = true;
          d(this.helper).animate(
            {
              left:
                b.left -
                this.offset.parent.left -
                c.margins.left +
                (this.offsetParent[0] == document.body
                  ? 0
                  : this.offsetParent[0].scrollLeft),
              top:
                b.top -
                this.offset.parent.top -
                c.margins.top +
                (this.offsetParent[0] == document.body
                  ? 0
                  : this.offsetParent[0].scrollTop),
            },
            parseInt(this.options.revert, 10) || 500,
            function () {
              c._clear(a);
            }
          );
        } else this._clear(a, b);
        return false;
      }
    },
    cancel: function () {
      var a = this;
      if (this.dragging) {
        this._mouseUp();
        this.options.helper == "original"
          ? this.currentItem
              .css(this._storedCSS)
              .removeClass("ui-sortable-helper")
          : this.currentItem.show();
        for (var b = this.containers.length - 1; b >= 0; b--) {
          this.containers[b]._trigger("deactivate", null, a._uiHash(this));
          if (this.containers[b].containerCache.over) {
            this.containers[b]._trigger("out", null, a._uiHash(this));
            this.containers[b].containerCache.over = 0;
          }
        }
      }
      this.placeholder[0].parentNode &&
        this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
      this.options.helper != "original" &&
        this.helper &&
        this.helper[0].parentNode &&
        this.helper.remove();
      d.extend(this, {
        helper: null,
        dragging: false,
        reverting: false,
        _noFinalSort: null,
      });
      this.domPosition.prev
        ? d(this.domPosition.prev).after(this.currentItem)
        : d(this.domPosition.parent).prepend(this.currentItem);
      return this;
    },
    serialize: function (a) {
      var b = this._getItemsAsjQuery(a && a.connected),
        c = [];
      a = a || {};
      d(b).each(function () {
        var e = (d(a.item || this).attr(a.attribute || "id") || "").match(
          a.expression || /(.+)[-=_](.+)/
        );
        if (e)
          c.push(
            (a.key || e[1] + "[]") + "=" + (a.key && a.expression ? e[1] : e[2])
          );
      });
      return c.join("&");
    },
    toArray: function (a) {
      var b = this._getItemsAsjQuery(a && a.connected),
        c = [];
      a = a || {};
      b.each(function () {
        c.push(d(a.item || this).attr(a.attribute || "id") || "");
      });
      return c;
    },
    _intersectsWith: function (a) {
      var b = this.positionAbs.left,
        c = b + this.helperProportions.width,
        e = this.positionAbs.top,
        f = e + this.helperProportions.height,
        g = a.left,
        h = g + a.width,
        i = a.top,
        k = i + a.height,
        j = this.offset.click.top,
        l = this.offset.click.left;
      j = e + j > i && e + j < k && b + l > g && b + l < h;
      return this.options.tolerance == "pointer" ||
        this.options.forcePointerForContainers ||
        (this.options.tolerance != "pointer" &&
          this.helperProportions[this.floating ? "width" : "height"] >
            a[this.floating ? "width" : "height"])
        ? j
        : g < b + this.helperProportions.width / 2 &&
            c - this.helperProportions.width / 2 < h &&
            i < e + this.helperProportions.height / 2 &&
            f - this.helperProportions.height / 2 < k;
    },
    _intersectsWithPointer: function (a) {
      var b = d.ui.isOverAxis(
        this.positionAbs.top + this.offset.click.top,
        a.top,
        a.height
      );
      a = d.ui.isOverAxis(
        this.positionAbs.left + this.offset.click.left,
        a.left,
        a.width
      );
      b = b && a;
      a = this._getDragVerticalDirection();
      var c = this._getDragHorizontalDirection();
      if (!b) return false;
      return this.floating
        ? (c && c == "right") || a == "down"
          ? 2
          : 1
        : a && (a == "down" ? 2 : 1);
    },
    _intersectsWithSides: function (a) {
      var b = d.ui.isOverAxis(
        this.positionAbs.top + this.offset.click.top,
        a.top + a.height / 2,
        a.height
      );
      a = d.ui.isOverAxis(
        this.positionAbs.left + this.offset.click.left,
        a.left + a.width / 2,
        a.width
      );
      var c = this._getDragVerticalDirection(),
        e = this._getDragHorizontalDirection();
      return this.floating && e
        ? (e == "right" && a) || (e == "left" && !a)
        : c && ((c == "down" && b) || (c == "up" && !b));
    },
    _getDragVerticalDirection: function () {
      var a = this.positionAbs.top - this.lastPositionAbs.top;
      return a != 0 && (a > 0 ? "down" : "up");
    },
    _getDragHorizontalDirection: function () {
      var a = this.positionAbs.left - this.lastPositionAbs.left;
      return a != 0 && (a > 0 ? "right" : "left");
    },
    refresh: function (a) {
      this._refreshItems(a);
      this.refreshPositions();
      return this;
    },
    _connectWith: function () {
      var a = this.options;
      return a.connectWith.constructor == String
        ? [a.connectWith]
        : a.connectWith;
    },
    _getItemsAsjQuery: function (a) {
      var b = [],
        c = [],
        e = this._connectWith();
      if (e && a)
        for (a = e.length - 1; a >= 0; a--)
          for (var f = d(e[a]), g = f.length - 1; g >= 0; g--) {
            var h = d.data(f[g], "sortable");
            if (h && h != this && !h.options.disabled)
              c.push([
                d.isFunction(h.options.items)
                  ? h.options.items.call(h.element)
                  : d(h.options.items, h.element)
                      .not(".ui-sortable-helper")
                      .not(".ui-sortable-placeholder"),
                h,
              ]);
          }
      c.push([
        d.isFunction(this.options.items)
          ? this.options.items.call(this.element, null, {
              options: this.options,
              item: this.currentItem,
            })
          : d(this.options.items, this.element)
              .not(".ui-sortable-helper")
              .not(".ui-sortable-placeholder"),
        this,
      ]);
      for (a = c.length - 1; a >= 0; a--)
        c[a][0].each(function () {
          b.push(this);
        });
      return d(b);
    },
    _removeCurrentsFromItems: function () {
      for (
        var a = this.currentItem.find(":data(sortable-item)"), b = 0;
        b < this.items.length;
        b++
      )
        for (var c = 0; c < a.length; c++)
          a[c] == this.items[b].item[0] && this.items.splice(b, 1);
    },
    _refreshItems: function (a) {
      this.items = [];
      this.containers = [this];
      var b = this.items,
        c = [
          [
            d.isFunction(this.options.items)
              ? this.options.items.call(this.element[0], a, {
                  item: this.currentItem,
                })
              : d(this.options.items, this.element),
            this,
          ],
        ],
        e = this._connectWith();
      if (e)
        for (var f = e.length - 1; f >= 0; f--)
          for (var g = d(e[f]), h = g.length - 1; h >= 0; h--) {
            var i = d.data(g[h], "sortable");
            if (i && i != this && !i.options.disabled) {
              c.push([
                d.isFunction(i.options.items)
                  ? i.options.items.call(i.element[0], a, {
                      item: this.currentItem,
                    })
                  : d(i.options.items, i.element),
                i,
              ]);
              this.containers.push(i);
            }
          }
      for (f = c.length - 1; f >= 0; f--) {
        a = c[f][1];
        e = c[f][0];
        h = 0;
        for (g = e.length; h < g; h++) {
          i = d(e[h]);
          i.data("sortable-item", a);
          b.push({
            item: i,
            instance: a,
            width: 0,
            height: 0,
            left: 0,
            top: 0,
          });
        }
      }
    },
    refreshPositions: function (a) {
      if (this.offsetParent && this.helper)
        this.offset.parent = this._getParentOffset();
      for (var b = this.items.length - 1; b >= 0; b--) {
        var c = this.items[b],
          e = this.options.toleranceElement
            ? d(this.options.toleranceElement, c.item)
            : c.item;
        if (!a) {
          c.width = e.outerWidth();
          c.height = e.outerHeight();
        }
        e = e.offset();
        c.left = e.left;
        c.top = e.top;
      }
      if (this.options.custom && this.options.custom.refreshContainers)
        this.options.custom.refreshContainers.call(this);
      else
        for (b = this.containers.length - 1; b >= 0; b--) {
          e = this.containers[b].element.offset();
          this.containers[b].containerCache.left = e.left;
          this.containers[b].containerCache.top = e.top;
          this.containers[b].containerCache.width =
            this.containers[b].element.outerWidth();
          this.containers[b].containerCache.height =
            this.containers[b].element.outerHeight();
        }
      return this;
    },
    _createPlaceholder: function (a) {
      var b = a || this,
        c = b.options;
      if (!c.placeholder || c.placeholder.constructor == String) {
        var e = c.placeholder;
        c.placeholder = {
          element: function () {
            var f = d(document.createElement(b.currentItem[0].nodeName))
              .addClass(
                e || b.currentItem[0].className + " ui-sortable-placeholder"
              )
              .removeClass("ui-sortable-helper")[0];
            if (!e) f.style.visibility = "hidden";
            return f;
          },
          update: function (f, g) {
            if (!(e && !c.forcePlaceholderSize)) {
              g.height() ||
                g.height(
                  b.currentItem.innerHeight() -
                    parseInt(b.currentItem.css("paddingTop") || 0, 10) -
                    parseInt(b.currentItem.css("paddingBottom") || 0, 10)
                );
              g.width() ||
                g.width(
                  b.currentItem.innerWidth() -
                    parseInt(b.currentItem.css("paddingLeft") || 0, 10) -
                    parseInt(b.currentItem.css("paddingRight") || 0, 10)
                );
            }
          },
        };
      }
      b.placeholder = d(c.placeholder.element.call(b.element, b.currentItem));
      b.currentItem.after(b.placeholder);
      c.placeholder.update(b, b.placeholder);
    },
    _contactContainers: function (a) {
      for (var b = null, c = null, e = this.containers.length - 1; e >= 0; e--)
        if (!d.ui.contains(this.currentItem[0], this.containers[e].element[0]))
          if (this._intersectsWith(this.containers[e].containerCache)) {
            if (
              !(b && d.ui.contains(this.containers[e].element[0], b.element[0]))
            ) {
              b = this.containers[e];
              c = e;
            }
          } else if (this.containers[e].containerCache.over) {
            this.containers[e]._trigger("out", a, this._uiHash(this));
            this.containers[e].containerCache.over = 0;
          }
      if (b)
        if (this.containers.length === 1) {
          this.containers[c]._trigger("over", a, this._uiHash(this));
          this.containers[c].containerCache.over = 1;
        } else if (this.currentContainer != this.containers[c]) {
          b = 1e4;
          e = null;
          for (
            var f =
                this.positionAbs[this.containers[c].floating ? "left" : "top"],
              g = this.items.length - 1;
            g >= 0;
            g--
          )
            if (
              d.ui.contains(
                this.containers[c].element[0],
                this.items[g].item[0]
              )
            ) {
              var h =
                this.items[g][this.containers[c].floating ? "left" : "top"];
              if (Math.abs(h - f) < b) {
                b = Math.abs(h - f);
                e = this.items[g];
              }
            }
          if (e || this.options.dropOnEmpty) {
            this.currentContainer = this.containers[c];
            e
              ? this._rearrange(a, e, null, true)
              : this._rearrange(a, null, this.containers[c].element, true);
            this._trigger("change", a, this._uiHash());
            this.containers[c]._trigger("change", a, this._uiHash(this));
            this.options.placeholder.update(
              this.currentContainer,
              this.placeholder
            );
            this.containers[c]._trigger("over", a, this._uiHash(this));
            this.containers[c].containerCache.over = 1;
          }
        }
    },
    _createHelper: function (a) {
      var b = this.options;
      a = d.isFunction(b.helper)
        ? d(b.helper.apply(this.element[0], [a, this.currentItem]))
        : b.helper == "clone"
        ? this.currentItem.clone()
        : this.currentItem;
      a.parents("body").length ||
        d(
          b.appendTo != "parent" ? b.appendTo : this.currentItem[0].parentNode
        )[0].appendChild(a[0]);
      if (a[0] == this.currentItem[0])
        this._storedCSS = {
          width: this.currentItem[0].style.width,
          height: this.currentItem[0].style.height,
          position: this.currentItem.css("position"),
          top: this.currentItem.css("top"),
          left: this.currentItem.css("left"),
        };
      if (a[0].style.width == "" || b.forceHelperSize)
        a.width(this.currentItem.width());
      if (a[0].style.height == "" || b.forceHelperSize)
        a.height(this.currentItem.height());
      return a;
    },
    _adjustOffsetFromHelper: function (a) {
      if (typeof a == "string") a = a.split(" ");
      if (d.isArray(a)) a = { left: +a[0], top: +a[1] || 0 };
      if ("left" in a) this.offset.click.left = a.left + this.margins.left;
      if ("right" in a)
        this.offset.click.left =
          this.helperProportions.width - a.right + this.margins.left;
      if ("top" in a) this.offset.click.top = a.top + this.margins.top;
      if ("bottom" in a)
        this.offset.click.top =
          this.helperProportions.height - a.bottom + this.margins.top;
    },
    _getParentOffset: function () {
      this.offsetParent = this.helper.offsetParent();
      var a = this.offsetParent.offset();
      if (
        this.cssPosition == "absolute" &&
        this.scrollParent[0] != document &&
        d.ui.contains(this.scrollParent[0], this.offsetParent[0])
      ) {
        a.left += this.scrollParent.scrollLeft();
        a.top += this.scrollParent.scrollTop();
      }
      if (
        this.offsetParent[0] == document.body ||
        (this.offsetParent[0].tagName &&
          this.offsetParent[0].tagName.toLowerCase() == "html" &&
          d.browser.msie)
      )
        a = { top: 0, left: 0 };
      return {
        top:
          a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left:
          a.left +
          (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
      };
    },
    _getRelativeOffset: function () {
      if (this.cssPosition == "relative") {
        var a = this.currentItem.position();
        return {
          top:
            a.top -
            (parseInt(this.helper.css("top"), 10) || 0) +
            this.scrollParent.scrollTop(),
          left:
            a.left -
            (parseInt(this.helper.css("left"), 10) || 0) +
            this.scrollParent.scrollLeft(),
        };
      } else return { top: 0, left: 0 };
    },
    _cacheMargins: function () {
      this.margins = {
        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
        top: parseInt(this.currentItem.css("marginTop"), 10) || 0,
      };
    },
    _cacheHelperProportions: function () {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight(),
      };
    },
    _setContainment: function () {
      var a = this.options;
      if (a.containment == "parent") a.containment = this.helper[0].parentNode;
      if (a.containment == "document" || a.containment == "window")
        this.containment = [
          0 - this.offset.relative.left - this.offset.parent.left,
          0 - this.offset.relative.top - this.offset.parent.top,
          d(a.containment == "document" ? document : window).width() -
            this.helperProportions.width -
            this.margins.left,
          (d(a.containment == "document" ? document : window).height() ||
            document.body.parentNode.scrollHeight) -
            this.helperProportions.height -
            this.margins.top,
        ];
      if (!/^(document|window|parent)$/.test(a.containment)) {
        var b = d(a.containment)[0];
        a = d(a.containment).offset();
        var c = d(b).css("overflow") != "hidden";
        this.containment = [
          a.left +
            (parseInt(d(b).css("borderLeftWidth"), 10) || 0) +
            (parseInt(d(b).css("paddingLeft"), 10) || 0) -
            this.margins.left,
          a.top +
            (parseInt(d(b).css("borderTopWidth"), 10) || 0) +
            (parseInt(d(b).css("paddingTop"), 10) || 0) -
            this.margins.top,
          a.left +
            (c ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) -
            (parseInt(d(b).css("borderLeftWidth"), 10) || 0) -
            (parseInt(d(b).css("paddingRight"), 10) || 0) -
            this.helperProportions.width -
            this.margins.left,
          a.top +
            (c ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) -
            (parseInt(d(b).css("borderTopWidth"), 10) || 0) -
            (parseInt(d(b).css("paddingBottom"), 10) || 0) -
            this.helperProportions.height -
            this.margins.top,
        ];
      }
    },
    _convertPositionTo: function (a, b) {
      if (!b) b = this.position;
      a = a == "absolute" ? 1 : -1;
      var c =
          this.cssPosition == "absolute" &&
          !(
            this.scrollParent[0] != document &&
            d.ui.contains(this.scrollParent[0], this.offsetParent[0])
          )
            ? this.offsetParent
            : this.scrollParent,
        e = /(html|body)/i.test(c[0].tagName);
      return {
        top:
          b.top +
          this.offset.relative.top * a +
          this.offset.parent.top * a -
          (d.browser.safari && this.cssPosition == "fixed"
            ? 0
            : (this.cssPosition == "fixed"
                ? -this.scrollParent.scrollTop()
                : e
                ? 0
                : c.scrollTop()) * a),
        left:
          b.left +
          this.offset.relative.left * a +
          this.offset.parent.left * a -
          (d.browser.safari && this.cssPosition == "fixed"
            ? 0
            : (this.cssPosition == "fixed"
                ? -this.scrollParent.scrollLeft()
                : e
                ? 0
                : c.scrollLeft()) * a),
      };
    },
    _generatePosition: function (a) {
      var b = this.options,
        c =
          this.cssPosition == "absolute" &&
          !(
            this.scrollParent[0] != document &&
            d.ui.contains(this.scrollParent[0], this.offsetParent[0])
          )
            ? this.offsetParent
            : this.scrollParent,
        e = /(html|body)/i.test(c[0].tagName);
      if (
        this.cssPosition == "relative" &&
        !(
          this.scrollParent[0] != document &&
          this.scrollParent[0] != this.offsetParent[0]
        )
      )
        this.offset.relative = this._getRelativeOffset();
      var f = a.pageX,
        g = a.pageY;
      if (this.originalPosition) {
        if (this.containment) {
          if (a.pageX - this.offset.click.left < this.containment[0])
            f = this.containment[0] + this.offset.click.left;
          if (a.pageY - this.offset.click.top < this.containment[1])
            g = this.containment[1] + this.offset.click.top;
          if (a.pageX - this.offset.click.left > this.containment[2])
            f = this.containment[2] + this.offset.click.left;
          if (a.pageY - this.offset.click.top > this.containment[3])
            g = this.containment[3] + this.offset.click.top;
        }
        if (b.grid) {
          g =
            this.originalPageY +
            Math.round((g - this.originalPageY) / b.grid[1]) * b.grid[1];
          g = this.containment
            ? !(
                g - this.offset.click.top < this.containment[1] ||
                g - this.offset.click.top > this.containment[3]
              )
              ? g
              : !(g - this.offset.click.top < this.containment[1])
              ? g - b.grid[1]
              : g + b.grid[1]
            : g;
          f =
            this.originalPageX +
            Math.round((f - this.originalPageX) / b.grid[0]) * b.grid[0];
          f = this.containment
            ? !(
                f - this.offset.click.left < this.containment[0] ||
                f - this.offset.click.left > this.containment[2]
              )
              ? f
              : !(f - this.offset.click.left < this.containment[0])
              ? f - b.grid[0]
              : f + b.grid[0]
            : f;
        }
      }
      return {
        top:
          g -
          this.offset.click.top -
          this.offset.relative.top -
          this.offset.parent.top +
          (d.browser.safari && this.cssPosition == "fixed"
            ? 0
            : this.cssPosition == "fixed"
            ? -this.scrollParent.scrollTop()
            : e
            ? 0
            : c.scrollTop()),
        left:
          f -
          this.offset.click.left -
          this.offset.relative.left -
          this.offset.parent.left +
          (d.browser.safari && this.cssPosition == "fixed"
            ? 0
            : this.cssPosition == "fixed"
            ? -this.scrollParent.scrollLeft()
            : e
            ? 0
            : c.scrollLeft()),
      };
    },
    _rearrange: function (a, b, c, e) {
      c
        ? c[0].appendChild(this.placeholder[0])
        : b.item[0].parentNode.insertBefore(
            this.placeholder[0],
            this.direction == "down" ? b.item[0] : b.item[0].nextSibling
          );
      this.counter = this.counter ? ++this.counter : 1;
      var f = this,
        g = this.counter;
      window.setTimeout(function () {
        g == f.counter && f.refreshPositions(!e);
      }, 0);
    },
    _clear: function (a, b) {
      this.reverting = false;
      var c = [];
      !this._noFinalSort &&
        this.currentItem[0].parentNode &&
        this.placeholder.before(this.currentItem);
      this._noFinalSort = null;
      if (this.helper[0] == this.currentItem[0]) {
        for (var e in this._storedCSS)
          if (this._storedCSS[e] == "auto" || this._storedCSS[e] == "static")
            this._storedCSS[e] = "";
        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
      } else this.currentItem.show();
      this.fromOutside &&
        !b &&
        c.push(function (f) {
          this._trigger("receive", f, this._uiHash(this.fromOutside));
        });
      if (
        (this.fromOutside ||
          this.domPosition.prev !=
            this.currentItem.prev().not(".ui-sortable-helper")[0] ||
          this.domPosition.parent != this.currentItem.parent()[0]) &&
        !b
      )
        c.push(function (f) {
          this._trigger("update", f, this._uiHash());
        });
      if (!d.ui.contains(this.element[0], this.currentItem[0])) {
        b ||
          c.push(function (f) {
            this._trigger("remove", f, this._uiHash());
          });
        for (e = this.containers.length - 1; e >= 0; e--)
          if (
            d.ui.contains(this.containers[e].element[0], this.currentItem[0]) &&
            !b
          ) {
            c.push(
              function (f) {
                return function (g) {
                  f._trigger("receive", g, this._uiHash(this));
                };
              }.call(this, this.containers[e])
            );
            c.push(
              function (f) {
                return function (g) {
                  f._trigger("update", g, this._uiHash(this));
                };
              }.call(this, this.containers[e])
            );
          }
      }
      for (e = this.containers.length - 1; e >= 0; e--) {
        b ||
          c.push(
            function (f) {
              return function (g) {
                f._trigger("deactivate", g, this._uiHash(this));
              };
            }.call(this, this.containers[e])
          );
        if (this.containers[e].containerCache.over) {
          c.push(
            function (f) {
              return function (g) {
                f._trigger("out", g, this._uiHash(this));
              };
            }.call(this, this.containers[e])
          );
          this.containers[e].containerCache.over = 0;
        }
      }
      this._storedCursor && d("body").css("cursor", this._storedCursor);
      this._storedOpacity && this.helper.css("opacity", this._storedOpacity);
      if (this._storedZIndex)
        this.helper.css(
          "zIndex",
          this._storedZIndex == "auto" ? "" : this._storedZIndex
        );
      this.dragging = false;
      if (this.cancelHelperRemoval) {
        if (!b) {
          this._trigger("beforeStop", a, this._uiHash());
          for (e = 0; e < c.length; e++) c[e].call(this, a);
          this._trigger("stop", a, this._uiHash());
        }
        return false;
      }
      b || this._trigger("beforeStop", a, this._uiHash());
      this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
      this.helper[0] != this.currentItem[0] && this.helper.remove();
      this.helper = null;
      if (!b) {
        for (e = 0; e < c.length; e++) c[e].call(this, a);
        this._trigger("stop", a, this._uiHash());
      }
      this.fromOutside = false;
      return true;
    },
    _trigger: function () {
      d.Widget.prototype._trigger.apply(this, arguments) === false &&
        this.cancel();
    },
    _uiHash: function (a) {
      var b = a || this;
      return {
        helper: b.helper,
        placeholder: b.placeholder || d([]),
        position: b.position,
        originalPosition: b.originalPosition,
        offset: b.positionAbs,
        item: b.currentItem,
        sender: a ? a.element : null,
      };
    },
  });
  d.extend(d.ui.sortable, { version: "1.8.1" });
})(jQuery);
(function (c) {
  c.widget("ui.accordion", {
    options: {
      active: 0,
      animated: "slide",
      autoHeight: true,
      clearStyle: false,
      collapsible: false,
      event: "click",
      fillSpace: false,
      header: "> li > :first-child,> :not(li):even",
      icons: {
        header: "ui-icon-triangle-1-e",
        headerSelected: "ui-icon-triangle-1-s",
      },
      navigation: false,
      navigationFilter: function () {
        return this.href.toLowerCase() == location.href.toLowerCase();
      },
    },
    _create: function () {
      var a = this.options,
        b = this;
      this.running = 0;
      this.element.addClass("ui-accordion ui-widget ui-helper-reset");
      this.element[0].nodeName == "UL" &&
        this.element.children("li").addClass("ui-accordion-li-fix");
      this.headers = this.element
        .find(a.header)
        .addClass(
          "ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"
        )
        .bind("mouseenter.accordion", function () {
          c(this).addClass("ui-state-hover");
        })
        .bind("mouseleave.accordion", function () {
          c(this).removeClass("ui-state-hover");
        })
        .bind("focus.accordion", function () {
          c(this).addClass("ui-state-focus");
        })
        .bind("blur.accordion", function () {
          c(this).removeClass("ui-state-focus");
        });
      this.headers
        .next()
        .addClass(
          "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
        );
      if (a.navigation) {
        var d = this.element.find("a").filter(a.navigationFilter);
        if (d.length) {
          var f = d.closest(".ui-accordion-header");
          this.active = f.length
            ? f
            : d.closest(".ui-accordion-content").prev();
        }
      }
      this.active = this._findActive(this.active || a.active)
        .toggleClass("ui-state-default")
        .toggleClass("ui-state-active")
        .toggleClass("ui-corner-all")
        .toggleClass("ui-corner-top");
      this.active.next().addClass("ui-accordion-content-active");
      this._createIcons();
      this.resize();
      this.element.attr("role", "tablist");
      this.headers
        .attr("role", "tab")
        .bind("keydown", function (g) {
          return b._keydown(g);
        })
        .next()
        .attr("role", "tabpanel");
      this.headers
        .not(this.active || "")
        .attr("aria-expanded", "false")
        .attr("tabIndex", "-1")
        .next()
        .hide();
      this.active.length
        ? this.active.attr("aria-expanded", "true").attr("tabIndex", "0")
        : this.headers.eq(0).attr("tabIndex", "0");
      c.browser.safari || this.headers.find("a").attr("tabIndex", "-1");
      a.event &&
        this.headers.bind(a.event + ".accordion", function (g) {
          b._clickHandler.call(b, g, this);
          g.preventDefault();
        });
    },
    _createIcons: function () {
      var a = this.options;
      if (a.icons) {
        c("<span/>")
          .addClass("ui-icon " + a.icons.header)
          .prependTo(this.headers);
        this.active
          .find(".ui-icon")
          .toggleClass(a.icons.header)
          .toggleClass(a.icons.headerSelected);
        this.element.addClass("ui-accordion-icons");
      }
    },
    _destroyIcons: function () {
      this.headers.children(".ui-icon").remove();
      this.element.removeClass("ui-accordion-icons");
    },
    destroy: function () {
      var a = this.options;
      this.element
        .removeClass("ui-accordion ui-widget ui-helper-reset")
        .removeAttr("role")
        .unbind(".accordion")
        .removeData("accordion");
      this.headers
        .unbind(".accordion")
        .removeClass(
          "ui-accordion-header ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-corner-top"
        )
        .removeAttr("role")
        .removeAttr("aria-expanded")
        .removeAttr("tabIndex");
      this.headers.find("a").removeAttr("tabIndex");
      this._destroyIcons();
      var b = this.headers
        .next()
        .css("display", "")
        .removeAttr("role")
        .removeClass(
          "ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active"
        );
      if (a.autoHeight || a.fillHeight) b.css("height", "");
      return this;
    },
    _setOption: function (a, b) {
      c.Widget.prototype._setOption.apply(this, arguments);
      a == "active" && this.activate(b);
      if (a == "icons") {
        this._destroyIcons();
        b && this._createIcons();
      }
    },
    _keydown: function (a) {
      var b = c.ui.keyCode;
      if (!(this.options.disabled || a.altKey || a.ctrlKey)) {
        var d = this.headers.length,
          f = this.headers.index(a.target),
          g = false;
        switch (a.keyCode) {
          case b.RIGHT:
          case b.DOWN:
            g = this.headers[(f + 1) % d];
            break;
          case b.LEFT:
          case b.UP:
            g = this.headers[(f - 1 + d) % d];
            break;
          case b.SPACE:
          case b.ENTER:
            this._clickHandler({ target: a.target }, a.target);
            a.preventDefault();
        }
        if (g) {
          c(a.target).attr("tabIndex", "-1");
          c(g).attr("tabIndex", "0");
          g.focus();
          return false;
        }
        return true;
      }
    },
    resize: function () {
      var a = this.options,
        b;
      if (a.fillSpace) {
        if (c.browser.msie) {
          var d = this.element.parent().css("overflow");
          this.element.parent().css("overflow", "hidden");
        }
        b = this.element.parent().height();
        c.browser.msie && this.element.parent().css("overflow", d);
        this.headers.each(function () {
          b -= c(this).outerHeight(true);
        });
        this.headers
          .next()
          .each(function () {
            c(this).height(
              Math.max(0, b - c(this).innerHeight() + c(this).height())
            );
          })
          .css("overflow", "auto");
      } else if (a.autoHeight) {
        b = 0;
        this.headers
          .next()
          .each(function () {
            b = Math.max(b, c(this).height());
          })
          .height(b);
      }
      return this;
    },
    activate: function (a) {
      this.options.active = a;
      a = this._findActive(a)[0];
      this._clickHandler({ target: a }, a);
      return this;
    },
    _findActive: function (a) {
      return a
        ? typeof a == "number"
          ? this.headers.filter(":eq(" + a + ")")
          : this.headers.not(this.headers.not(a))
        : a === false
        ? c([])
        : this.headers.filter(":eq(0)");
    },
    _clickHandler: function (a, b) {
      var d = this.options;
      if (!d.disabled)
        if (a.target) {
          a = c(a.currentTarget || b);
          b = a[0] == this.active[0];
          d.active =
            d.collapsible && b
              ? false
              : c(".ui-accordion-header", this.element).index(a);
          if (!(this.running || (!d.collapsible && b))) {
            this.active
              .removeClass("ui-state-active ui-corner-top")
              .addClass("ui-state-default ui-corner-all")
              .find(".ui-icon")
              .removeClass(d.icons.headerSelected)
              .addClass(d.icons.header);
            if (!b) {
              a.removeClass("ui-state-default ui-corner-all")
                .addClass("ui-state-active ui-corner-top")
                .find(".ui-icon")
                .removeClass(d.icons.header)
                .addClass(d.icons.headerSelected);
              a.next().addClass("ui-accordion-content-active");
            }
            e = a.next();
            f = this.active.next();
            g = {
              options: d,
              newHeader: b && d.collapsible ? c([]) : a,
              oldHeader: this.active,
              newContent: b && d.collapsible ? c([]) : e,
              oldContent: f,
            };
            d = this.headers.index(this.active[0]) > this.headers.index(a[0]);
            this.active = b ? c([]) : a;
            this._toggle(e, f, g, b, d);
          }
        } else if (d.collapsible) {
          this.active
            .removeClass("ui-state-active ui-corner-top")
            .addClass("ui-state-default ui-corner-all")
            .find(".ui-icon")
            .removeClass(d.icons.headerSelected)
            .addClass(d.icons.header);
          this.active.next().addClass("ui-accordion-content-active");
          var f = this.active.next(),
            g = {
              options: d,
              newHeader: c([]),
              oldHeader: d.active,
              newContent: c([]),
              oldContent: f,
            },
            e = (this.active = c([]));
          this._toggle(e, f, g);
        }
    },
    _toggle: function (a, b, d, f, g) {
      var e = this.options,
        k = this;
      this.toShow = a;
      this.toHide = b;
      this.data = d;
      var i = function () {
        if (k) return k._completed.apply(k, arguments);
      };
      this._trigger("changestart", null, this.data);
      this.running = b.size() === 0 ? a.size() : b.size();
      if (e.animated) {
        d = {};
        d =
          e.collapsible && f
            ? {
                toShow: c([]),
                toHide: b,
                complete: i,
                down: g,
                autoHeight: e.autoHeight || e.fillSpace,
              }
            : {
                toShow: a,
                toHide: b,
                complete: i,
                down: g,
                autoHeight: e.autoHeight || e.fillSpace,
              };
        if (!e.proxied) e.proxied = e.animated;
        if (!e.proxiedDuration) e.proxiedDuration = e.duration;
        e.animated = c.isFunction(e.proxied) ? e.proxied(d) : e.proxied;
        e.duration = c.isFunction(e.proxiedDuration)
          ? e.proxiedDuration(d)
          : e.proxiedDuration;
        f = c.ui.accordion.animations;
        var h = e.duration,
          j = e.animated;
        if (j && !f[j] && !c.easing[j]) j = "slide";
        f[j] ||
          (f[j] = function (l) {
            this.slide(l, { easing: j, duration: h || 700 });
          });
        f[j](d);
      } else {
        if (e.collapsible && f) a.toggle();
        else {
          b.hide();
          a.show();
        }
        i(true);
      }
      b.prev().attr("aria-expanded", "false").attr("tabIndex", "-1").blur();
      a.prev().attr("aria-expanded", "true").attr("tabIndex", "0").focus();
    },
    _completed: function (a) {
      var b = this.options;
      this.running = a ? 0 : --this.running;
      if (!this.running) {
        b.clearStyle &&
          this.toShow.add(this.toHide).css({ height: "", overflow: "" });
        this.toHide.removeClass("ui-accordion-content-active");
        this._trigger("change", null, this.data);
      }
    },
  });
  c.extend(c.ui.accordion, {
    version: "1.8.1",
    animations: {
      slide: function (a, b) {
        a = c.extend({ easing: "swing", duration: 300 }, a, b);
        if (a.toHide.size())
          if (a.toShow.size()) {
            var d = a.toShow.css("overflow"),
              f = 0,
              g = {},
              e = {},
              k;
            b = a.toShow;
            k = b[0].style.width;
            b.width(
              parseInt(b.parent().width(), 10) -
                parseInt(b.css("paddingLeft"), 10) -
                parseInt(b.css("paddingRight"), 10) -
                (parseInt(b.css("borderLeftWidth"), 10) || 0) -
                (parseInt(b.css("borderRightWidth"), 10) || 0)
            );
            c.each(["height", "paddingTop", "paddingBottom"], function (i, h) {
              e[h] = "hide";
              i = ("" + c.css(a.toShow[0], h)).match(/^([\d+-.]+)(.*)$/);
              g[h] = { value: i[1], unit: i[2] || "px" };
            });
            a.toShow.css({ height: 0, overflow: "hidden" }).show();
            a.toHide
              .filter(":hidden")
              .each(a.complete)
              .end()
              .filter(":visible")
              .animate(e, {
                step: function (i, h) {
                  if (h.prop == "height")
                    f =
                      h.end - h.start === 0
                        ? 0
                        : (h.now - h.start) / (h.end - h.start);
                  a.toShow[0].style[h.prop] =
                    f * g[h.prop].value + g[h.prop].unit;
                },
                duration: a.duration,
                easing: a.easing,
                complete: function () {
                  a.autoHeight || a.toShow.css("height", "");
                  a.toShow.css("width", k);
                  a.toShow.css({ overflow: d });
                  a.complete();
                },
              });
          } else a.toHide.animate({ height: "hide" }, a);
        else a.toShow.animate({ height: "show" }, a);
      },
      bounceslide: function (a) {
        this.slide(a, {
          easing: a.down ? "easeOutBounce" : "swing",
          duration: a.down ? 1e3 : 200,
        });
      },
    },
  });
})(jQuery);
(function (e) {
  e.widget("ui.autocomplete", {
    options: { minLength: 1, delay: 300 },
    _create: function () {
      var a = this,
        b = this.element[0].ownerDocument;
      this.element
        .addClass("ui-autocomplete-input")
        .attr("autocomplete", "off")
        .attr({
          role: "textbox",
          "aria-autocomplete": "list",
          "aria-haspopup": "true",
        })
        .bind("keydown.autocomplete", function (c) {
          var d = e.ui.keyCode;
          switch (c.keyCode) {
            case d.PAGE_UP:
              a._move("previousPage", c);
              break;
            case d.PAGE_DOWN:
              a._move("nextPage", c);
              break;
            case d.UP:
              a._move("previous", c);
              c.preventDefault();
              break;
            case d.DOWN:
              a._move("next", c);
              c.preventDefault();
              break;
            case d.ENTER:
              a.menu.active && c.preventDefault();
            case d.TAB:
              if (!a.menu.active) return;
              a.menu.select(c);
              break;
            case d.ESCAPE:
              a.element.val(a.term);
              a.close(c);
              break;
            case d.LEFT:
            case d.RIGHT:
            case d.SHIFT:
            case d.CONTROL:
            case d.ALT:
              break;
            default:
              clearTimeout(a.searching);
              a.searching = setTimeout(function () {
                a.search(null, c);
              }, a.options.delay);
              break;
          }
        })
        .bind("focus.autocomplete", function () {
          a.selectedItem = null;
          a.previous = a.element.val();
        })
        .bind("blur.autocomplete", function (c) {
          clearTimeout(a.searching);
          a.closing = setTimeout(function () {
            a.close(c);
            a._change(c);
          }, 150);
        });
      this._initSource();
      this.response = function () {
        return a._response.apply(a, arguments);
      };
      this.menu = e("<ul></ul>")
        .addClass("ui-autocomplete")
        .appendTo("body", b)
        .menu({
          focus: function (c, d) {
            d = d.item.data("item.autocomplete");
            false !== a._trigger("focus", null, { item: d }) &&
              /^key/.test(c.originalEvent.type) &&
              a.element.val(d.value);
          },
          selected: function (c, d) {
            d = d.item.data("item.autocomplete");
            false !== a._trigger("select", c, { item: d }) &&
              a.element.val(d.value);
            a.close(c);
            c = a.previous;
            if (a.element[0] !== b.activeElement) {
              a.element.focus();
              a.previous = c;
            }
            a.selectedItem = d;
          },
          blur: function () {
            a.menu.element.is(":visible") && a.element.val(a.term);
          },
        })
        .zIndex(this.element.zIndex() + 1)
        .css({ top: 0, left: 0 })
        .hide()
        .data("menu");
      e.fn.bgiframe && this.menu.element.bgiframe();
    },
    destroy: function () {
      this.element
        .removeClass("ui-autocomplete-input")
        .removeAttr("autocomplete")
        .removeAttr("role")
        .removeAttr("aria-autocomplete")
        .removeAttr("aria-haspopup");
      this.menu.element.remove();
      e.Widget.prototype.destroy.call(this);
    },
    _setOption: function (a) {
      e.Widget.prototype._setOption.apply(this, arguments);
      a === "source" && this._initSource();
    },
    _initSource: function () {
      var a, b;
      if (e.isArray(this.options.source)) {
        a = this.options.source;
        this.source = function (c, d) {
          d(e.ui.autocomplete.filter(a, c.term));
        };
      } else if (typeof this.options.source === "string") {
        b = this.options.source;
        this.source = function (c, d) {
          e.getJSON(b, c, d);
        };
      } else this.source = this.options.source;
    },
    search: function (a, b) {
      a = a != null ? a : this.element.val();
      if (a.length < this.options.minLength) return this.close(b);
      clearTimeout(this.closing);
      if (this._trigger("search") !== false) return this._search(a);
    },
    _search: function (a) {
      this.term = this.element.addClass("ui-autocomplete-loading").val();
      this.source({ term: a }, this.response);
    },
    _response: function (a) {
      if (a.length) {
        a = this._normalize(a);
        this._suggest(a);
        this._trigger("open");
      } else this.close();
      this.element.removeClass("ui-autocomplete-loading");
    },
    close: function (a) {
      clearTimeout(this.closing);
      if (this.menu.element.is(":visible")) {
        this._trigger("close", a);
        this.menu.element.hide();
        this.menu.deactivate();
      }
    },
    _change: function (a) {
      this.previous !== this.element.val() &&
        this._trigger("change", a, { item: this.selectedItem });
    },
    _normalize: function (a) {
      if (a.length && a[0].label && a[0].value) return a;
      return e.map(a, function (b) {
        if (typeof b === "string") return { label: b, value: b };
        return e.extend(
          { label: b.label || b.value, value: b.value || b.label },
          b
        );
      });
    },
    _suggest: function (a) {
      var b = this.menu.element.empty().zIndex(this.element.zIndex() + 1),
        c;
      this._renderMenu(b, a);
      this.menu.deactivate();
      this.menu.refresh();
      this.menu.element
        .show()
        .position({
          my: "left top",
          at: "left bottom",
          of: this.element,
          collision: "none",
        });
      a = b.width("").width();
      c = this.element.width();
      b.width(Math.max(a, c));
    },
    _renderMenu: function (a, b) {
      var c = this;
      e.each(b, function (d, f) {
        c._renderItem(a, f);
      });
    },
    _renderItem: function (a, b) {
      return e("<li></li>")
        .data("item.autocomplete", b)
        .append("<a>" + b.label + "</a>")
        .appendTo(a);
    },
    _move: function (a, b) {
      if (this.menu.element.is(":visible"))
        if (
          (this.menu.first() && /^previous/.test(a)) ||
          (this.menu.last() && /^next/.test(a))
        ) {
          this.element.val(this.term);
          this.menu.deactivate();
        } else this.menu[a](b);
      else this.search(null, b);
    },
    widget: function () {
      return this.menu.element;
    },
  });
  e.extend(e.ui.autocomplete, {
    escapeRegex: function (a) {
      return a.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1");
    },
    filter: function (a, b) {
      var c = new RegExp(e.ui.autocomplete.escapeRegex(b), "i");
      return e.grep(a, function (d) {
        return c.test(d.label || d.value || d);
      });
    },
  });
})(jQuery);
(function (e) {
  e.widget("ui.menu", {
    _create: function () {
      var a = this;
      this.element
        .addClass("ui-menu ui-widget ui-widget-content ui-corner-all")
        .attr({
          role: "listbox",
          "aria-activedescendant": "ui-active-menuitem",
        })
        .click(function (b) {
          if (e(b.target).closest(".ui-menu-item a").length) {
            b.preventDefault();
            a.select(b);
          }
        });
      this.refresh();
    },
    refresh: function () {
      var a = this;
      this.element
        .children("li:not(.ui-menu-item):has(a)")
        .addClass("ui-menu-item")
        .attr("role", "menuitem")
        .children("a")
        .addClass("ui-corner-all")
        .attr("tabindex", -1)
        .mouseenter(function (b) {
          a.activate(b, e(this).parent());
        })
        .mouseleave(function () {
          a.deactivate();
        });
    },
    activate: function (a, b) {
      this.deactivate();
      if (this.hasScroll()) {
        var c = b.offset().top - this.element.offset().top,
          d = this.element.attr("scrollTop"),
          f = this.element.height();
        if (c < 0) this.element.attr("scrollTop", d + c);
        else c > f && this.element.attr("scrollTop", d + c - f + b.height());
      }
      this.active = b
        .eq(0)
        .children("a")
        .addClass("ui-state-hover")
        .attr("id", "ui-active-menuitem")
        .end();
      this._trigger("focus", a, { item: b });
    },
    deactivate: function () {
      if (this.active) {
        this.active
          .children("a")
          .removeClass("ui-state-hover")
          .removeAttr("id");
        this._trigger("blur");
        this.active = null;
      }
    },
    next: function (a) {
      this.move("next", ".ui-menu-item:first", a);
    },
    previous: function (a) {
      this.move("prev", ".ui-menu-item:last", a);
    },
    first: function () {
      return this.active && !this.active.prev().length;
    },
    last: function () {
      return this.active && !this.active.next().length;
    },
    move: function (a, b, c) {
      if (this.active) {
        a = this.active[a + "All"](".ui-menu-item").eq(0);
        a.length
          ? this.activate(c, a)
          : this.activate(c, this.element.children(b));
      } else this.activate(c, this.element.children(b));
    },
    nextPage: function (a) {
      if (this.hasScroll())
        if (!this.active || this.last())
          this.activate(a, this.element.children(":first"));
        else {
          var b = this.active.offset().top,
            c = this.element.height(),
            d = this.element.children("li").filter(function () {
              var f = e(this).offset().top - b - c + e(this).height();
              return f < 10 && f > -10;
            });
          d.length || (d = this.element.children(":last"));
          this.activate(a, d);
        }
      else
        this.activate(
          a,
          this.element.children(
            !this.active || this.last() ? ":first" : ":last"
          )
        );
    },
    previousPage: function (a) {
      if (this.hasScroll())
        if (!this.active || this.first())
          this.activate(a, this.element.children(":last"));
        else {
          var b = this.active.offset().top,
            c = this.element.height();
          result = this.element.children("li").filter(function () {
            var d = e(this).offset().top - b + c - e(this).height();
            return d < 10 && d > -10;
          });
          result.length || (result = this.element.children(":first"));
          this.activate(a, result);
        }
      else
        this.activate(
          a,
          this.element.children(
            !this.active || this.first() ? ":last" : ":first"
          )
        );
    },
    hasScroll: function () {
      return this.element.height() < this.element.attr("scrollHeight");
    },
    select: function (a) {
      this._trigger("selected", a, { item: this.active });
    },
  });
})(jQuery);
(function (a) {
  var g,
    i = function (b) {
      a(":ui-button", b.target.form).each(function () {
        var c = a(this).data("button");
        setTimeout(function () {
          c.refresh();
        }, 1);
      });
    },
    h = function (b) {
      var c = b.name,
        d = b.form,
        e = a([]);
      if (c)
        e = d
          ? a(d).find("[name='" + c + "']")
          : a("[name='" + c + "']", b.ownerDocument).filter(function () {
              return !this.form;
            });
      return e;
    };
  a.widget("ui.button", {
    options: {
      text: true,
      label: null,
      icons: { primary: null, secondary: null },
    },
    _create: function () {
      this.element
        .closest("form")
        .unbind("reset.button")
        .bind("reset.button", i);
      this._determineButtonType();
      this.hasTitle = !!this.buttonElement.attr("title");
      var b = this,
        c = this.options,
        d = this.type === "checkbox" || this.type === "radio",
        e = "ui-state-hover" + (!d ? " ui-state-active" : "");
      if (c.label === null) c.label = this.buttonElement.html();
      if (this.element.is(":disabled")) c.disabled = true;
      this.buttonElement
        .addClass("ui-button ui-widget ui-state-default ui-corner-all")
        .attr("role", "button")
        .bind("mouseenter.button", function () {
          if (!c.disabled) {
            a(this).addClass("ui-state-hover");
            this === g && a(this).addClass("ui-state-active");
          }
        })
        .bind("mouseleave.button", function () {
          c.disabled || a(this).removeClass(e);
        })
        .bind("focus.button", function () {
          a(this).addClass("ui-state-focus");
        })
        .bind("blur.button", function () {
          a(this).removeClass("ui-state-focus");
        });
      d &&
        this.element.bind("change.button", function () {
          b.refresh();
        });
      if (this.type === "checkbox")
        this.buttonElement.bind("click.button", function () {
          if (c.disabled) return false;
          a(this).toggleClass("ui-state-active");
          b.buttonElement.attr("aria-pressed", b.element[0].checked);
        });
      else if (this.type === "radio")
        this.buttonElement.bind("click.button", function () {
          if (c.disabled) return false;
          a(this).addClass("ui-state-active");
          b.buttonElement.attr("aria-pressed", true);
          var f = b.element[0];
          h(f)
            .not(f)
            .map(function () {
              return a(this).button("widget")[0];
            })
            .removeClass("ui-state-active")
            .attr("aria-pressed", false);
        });
      else {
        this.buttonElement
          .bind("mousedown.button", function () {
            if (c.disabled) return false;
            a(this).addClass("ui-state-active");
            g = this;
            a(document).one("mouseup", function () {
              g = null;
            });
          })
          .bind("mouseup.button", function () {
            if (c.disabled) return false;
            a(this).removeClass("ui-state-active");
          })
          .bind("keydown.button", function (f) {
            if (c.disabled) return false;
            if (
              f.keyCode == a.ui.keyCode.SPACE ||
              f.keyCode == a.ui.keyCode.ENTER
            )
              a(this).addClass("ui-state-active");
          })
          .bind("keyup.button", function () {
            a(this).removeClass("ui-state-active");
          });
        this.buttonElement.is("a") &&
          this.buttonElement.keyup(function (f) {
            f.keyCode === a.ui.keyCode.SPACE && a(this).click();
          });
      }
      this._setOption("disabled", c.disabled);
    },
    _determineButtonType: function () {
      this.type = this.element.is(":checkbox")
        ? "checkbox"
        : this.element.is(":radio")
        ? "radio"
        : this.element.is("input")
        ? "input"
        : "button";
      if (this.type === "checkbox" || this.type === "radio") {
        this.buttonElement = this.element
          .parents()
          .last()
          .find("[for=" + this.element.attr("id") + "]");
        this.element.addClass("ui-helper-hidden-accessible");
        var b = this.element.is(":checked");
        b && this.buttonElement.addClass("ui-state-active");
        this.buttonElement.attr("aria-pressed", b);
      } else this.buttonElement = this.element;
    },
    widget: function () {
      return this.buttonElement;
    },
    destroy: function () {
      this.element.removeClass("ui-helper-hidden-accessible");
      this.buttonElement
        .removeClass(
          "ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon ui-button-text-only"
        )
        .removeAttr("role")
        .removeAttr("aria-pressed")
        .html(this.buttonElement.find(".ui-button-text").html());
      this.hasTitle || this.buttonElement.removeAttr("title");
      a.Widget.prototype.destroy.call(this);
    },
    _setOption: function (b, c) {
      a.Widget.prototype._setOption.apply(this, arguments);
      if (b === "disabled")
        c
          ? this.element.attr("disabled", true)
          : this.element.removeAttr("disabled");
      this._resetButton();
    },
    refresh: function () {
      var b = this.element.is(":disabled");
      b !== this.options.disabled && this._setOption("disabled", b);
      if (this.type === "radio")
        h(this.element[0]).each(function () {
          a(this).is(":checked")
            ? a(this)
                .button("widget")
                .addClass("ui-state-active")
                .attr("aria-pressed", true)
            : a(this)
                .button("widget")
                .removeClass("ui-state-active")
                .attr("aria-pressed", false);
        });
      else if (this.type === "checkbox")
        this.element.is(":checked")
          ? this.buttonElement
              .addClass("ui-state-active")
              .attr("aria-pressed", true)
          : this.buttonElement
              .removeClass("ui-state-active")
              .attr("aria-pressed", false);
    },
    _resetButton: function () {
      if (this.type === "input")
        this.options.label && this.element.val(this.options.label);
      else {
        var b = this.buttonElement,
          c = a("<span></span>")
            .addClass("ui-button-text")
            .html(this.options.label)
            .appendTo(b.empty())
            .text(),
          d = this.options.icons,
          e = d.primary && d.secondary;
        if (d.primary || d.secondary) {
          b.addClass("ui-button-text-icon" + (e ? "s" : ""));
          d.primary &&
            b.prepend(
              "<span class='ui-button-icon-primary ui-icon " +
                d.primary +
                "'></span>"
            );
          d.secondary &&
            b.append(
              "<span class='ui-button-icon-secondary ui-icon " +
                d.secondary +
                "'></span>"
            );
          if (!this.options.text) {
            b.addClass(
              e ? "ui-button-icons-only" : "ui-button-icon-only"
            ).removeClass("ui-button-text-icons ui-button-text-icon");
            this.hasTitle || b.attr("title", c);
          }
        } else b.addClass("ui-button-text-only");
      }
    },
  });
  a.widget("ui.buttonset", {
    _create: function () {
      this.element.addClass("ui-buttonset");
      this._init();
    },
    _init: function () {
      this.refresh();
    },
    _setOption: function (b, c) {
      b === "disabled" && this.buttons.button("option", b, c);
      a.Widget.prototype._setOption.apply(this, arguments);
    },
    refresh: function () {
      this.buttons = this.element
        .find(":button, :submit, :reset, :checkbox, :radio, a, :data(button)")
        .filter(":ui-button")
        .button("refresh")
        .end()
        .not(":ui-button")
        .button()
        .end()
        .map(function () {
          return a(this).button("widget")[0];
        })
        .removeClass("ui-corner-all ui-corner-left ui-corner-right")
        .filter(":first")
        .addClass("ui-corner-left")
        .end()
        .filter(":last")
        .addClass("ui-corner-right")
        .end()
        .end();
    },
    destroy: function () {
      this.element.removeClass("ui-buttonset");
      this.buttons
        .map(function () {
          return a(this).button("widget")[0];
        })
        .removeClass("ui-corner-left ui-corner-right")
        .end()
        .button("destroy");
      a.Widget.prototype.destroy.call(this);
    },
  });
})(jQuery);
(function (c) {
  c.widget("ui.dialog", {
    options: {
      autoOpen: true,
      buttons: {},
      closeOnEscape: true,
      closeText: "close",
      dialogClass: "",
      draggable: true,
      hide: null,
      height: "auto",
      maxHeight: false,
      maxWidth: false,
      minHeight: 150,
      minWidth: 150,
      modal: false,
      position: "center",
      resizable: true,
      show: null,
      stack: true,
      title: "",
      width: 300,
      zIndex: 1e3,
    },
    _create: function () {
      this.originalTitle = this.element.attr("title");
      var a = this,
        b = a.options,
        d = b.title || a.originalTitle || "&#160;",
        e = c.ui.dialog.getTitleId(a.element),
        g = (a.uiDialog = c("<div></div>"))
          .appendTo(document.body)
          .hide()
          .addClass(
            "ui-dialog ui-widget ui-widget-content ui-corner-all " +
              b.dialogClass
          )
          .css({ zIndex: b.zIndex })
          .attr("tabIndex", -1)
          .css("outline", 0)
          .keydown(function (i) {
            if (
              b.closeOnEscape &&
              i.keyCode &&
              i.keyCode === c.ui.keyCode.ESCAPE
            ) {
              a.close(i);
              i.preventDefault();
            }
          })
          .attr({ role: "dialog", "aria-labelledby": e })
          .mousedown(function (i) {
            a.moveToTop(false, i);
          });
      a.element
        .show()
        .removeAttr("title")
        .addClass("ui-dialog-content ui-widget-content")
        .appendTo(g);
      var f = (a.uiDialogTitlebar = c("<div></div>"))
          .addClass(
            "ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"
          )
          .prependTo(g),
        h = c('<a href="#"></a>')
          .addClass("ui-dialog-titlebar-close ui-corner-all")
          .attr("role", "button")
          .hover(
            function () {
              h.addClass("ui-state-hover");
            },
            function () {
              h.removeClass("ui-state-hover");
            }
          )
          .focus(function () {
            h.addClass("ui-state-focus");
          })
          .blur(function () {
            h.removeClass("ui-state-focus");
          })
          .click(function (i) {
            a.close(i);
            return false;
          })
          .appendTo(f);
      (a.uiDialogTitlebarCloseText = c("<span></span>"))
        .addClass("ui-icon ui-icon-closethick")
        .text(b.closeText)
        .appendTo(h);
      c("<span></span>")
        .addClass("ui-dialog-title")
        .attr("id", e)
        .html(d)
        .prependTo(f);
      if (c.isFunction(b.beforeclose) && !c.isFunction(b.beforeClose))
        b.beforeClose = b.beforeclose;
      f.find("*").add(f).disableSelection();
      b.draggable && c.fn.draggable && a._makeDraggable();
      b.resizable && c.fn.resizable && a._makeResizable();
      a._createButtons(b.buttons);
      a._isOpen = false;
      c.fn.bgiframe && g.bgiframe();
    },
    _init: function () {
      this.options.autoOpen && this.open();
    },
    destroy: function () {
      var a = this;
      a.overlay && a.overlay.destroy();
      a.uiDialog.hide();
      a.element
        .unbind(".dialog")
        .removeData("dialog")
        .removeClass("ui-dialog-content ui-widget-content")
        .hide()
        .appendTo("body");
      a.uiDialog.remove();
      a.originalTitle && a.element.attr("title", a.originalTitle);
      return a;
    },
    widget: function () {
      return this.uiDialog;
    },
    close: function (a) {
      var b = this,
        d;
      if (false !== b._trigger("beforeClose", a)) {
        b.overlay && b.overlay.destroy();
        b.uiDialog.unbind("keypress.ui-dialog");
        b._isOpen = false;
        if (b.options.hide)
          b.uiDialog.hide(b.options.hide, function () {
            b._trigger("close", a);
          });
        else {
          b.uiDialog.hide();
          b._trigger("close", a);
        }
        c.ui.dialog.overlay.resize();
        if (b.options.modal) {
          d = 0;
          c(".ui-dialog").each(function () {
            if (this !== b.uiDialog[0]) d = Math.max(d, c(this).css("z-index"));
          });
          c.ui.dialog.maxZ = d;
        }
        return b;
      }
    },
    isOpen: function () {
      return this._isOpen;
    },
    moveToTop: function (a, b) {
      var d = this,
        e = d.options;
      if ((e.modal && !a) || (!e.stack && !e.modal))
        return d._trigger("focus", b);
      if (e.zIndex > c.ui.dialog.maxZ) c.ui.dialog.maxZ = e.zIndex;
      if (d.overlay) {
        c.ui.dialog.maxZ += 1;
        d.overlay.$el.css(
          "z-index",
          (c.ui.dialog.overlay.maxZ = c.ui.dialog.maxZ)
        );
      }
      a = {
        scrollTop: d.element.attr("scrollTop"),
        scrollLeft: d.element.attr("scrollLeft"),
      };
      c.ui.dialog.maxZ += 1;
      d.uiDialog.css("z-index", c.ui.dialog.maxZ);
      d.element.attr(a);
      d._trigger("focus", b);
      return d;
    },
    open: function () {
      if (!this._isOpen) {
        var a = this,
          b = a.options,
          d = a.uiDialog;
        a.overlay = b.modal ? new c.ui.dialog.overlay(a) : null;
        d.next().length && d.appendTo("body");
        a._size();
        a._position(b.position);
        d.show(b.show);
        a.moveToTop(true);
        b.modal &&
          d.bind("keypress.ui-dialog", function (e) {
            if (e.keyCode === c.ui.keyCode.TAB) {
              var g = c(":tabbable", this),
                f = g.filter(":first");
              g = g.filter(":last");
              if (e.target === g[0] && !e.shiftKey) {
                f.focus(1);
                return false;
              } else if (e.target === f[0] && e.shiftKey) {
                g.focus(1);
                return false;
              }
            }
          });
        c([])
          .add(d.find(".ui-dialog-content :tabbable:first"))
          .add(d.find(".ui-dialog-buttonpane :tabbable:first"))
          .add(d)
          .filter(":first")
          .focus();
        a._trigger("open");
        a._isOpen = true;
        return a;
      }
    },
    _createButtons: function (a) {
      var b = this,
        d = false,
        e = c("<div></div>").addClass(
          "ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"
        );
      b.uiDialog.find(".ui-dialog-buttonpane").remove();
      typeof a === "object" &&
        a !== null &&
        c.each(a, function () {
          return !(d = true);
        });
      if (d) {
        c.each(a, function (g, f) {
          g = c('<button type="button"></button>')
            .text(g)
            .click(function () {
              f.apply(b.element[0], arguments);
            })
            .appendTo(e);
          c.fn.button && g.button();
        });
        e.appendTo(b.uiDialog);
      }
    },
    _makeDraggable: function () {
      function a(f) {
        return { position: f.position, offset: f.offset };
      }
      var b = this,
        d = b.options,
        e = c(document),
        g;
      b.uiDialog.draggable({
        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
        handle: ".ui-dialog-titlebar",
        containment: "document",
        start: function (f, h) {
          g = d.height === "auto" ? "auto" : c(this).height();
          c(this).height(c(this).height()).addClass("ui-dialog-dragging");
          b._trigger("dragStart", f, a(h));
        },
        drag: function (f, h) {
          b._trigger("drag", f, a(h));
        },
        stop: function (f, h) {
          d.position = [
            h.position.left - e.scrollLeft(),
            h.position.top - e.scrollTop(),
          ];
          c(this).removeClass("ui-dialog-dragging").height(g);
          b._trigger("dragStop", f, a(h));
          c.ui.dialog.overlay.resize();
        },
      });
    },
    _makeResizable: function (a) {
      function b(f) {
        return {
          originalPosition: f.originalPosition,
          originalSize: f.originalSize,
          position: f.position,
          size: f.size,
        };
      }
      a = a === undefined ? this.options.resizable : a;
      var d = this,
        e = d.options,
        g = d.uiDialog.css("position");
      a = typeof a === "string" ? a : "n,e,s,w,se,sw,ne,nw";
      d.uiDialog
        .resizable({
          cancel: ".ui-dialog-content",
          containment: "document",
          alsoResize: d.element,
          maxWidth: e.maxWidth,
          maxHeight: e.maxHeight,
          minWidth: e.minWidth,
          minHeight: d._minHeight(),
          handles: a,
          start: function (f, h) {
            c(this).addClass("ui-dialog-resizing");
            d._trigger("resizeStart", f, b(h));
          },
          resize: function (f, h) {
            d._trigger("resize", f, b(h));
          },
          stop: function (f, h) {
            c(this).removeClass("ui-dialog-resizing");
            e.height = c(this).height();
            e.width = c(this).width();
            d._trigger("resizeStop", f, b(h));
            c.ui.dialog.overlay.resize();
          },
        })
        .css("position", g)
        .find(".ui-resizable-se")
        .addClass("ui-icon ui-icon-grip-diagonal-se");
    },
    _minHeight: function () {
      var a = this.options;
      return a.height === "auto"
        ? a.minHeight
        : Math.min(a.minHeight, a.height);
    },
    _position: function (a) {
      var b = [],
        d = [0, 0];
      a = a || c.ui.dialog.prototype.options.position;
      if (typeof a === "string" || (typeof a === "object" && "0" in a)) {
        b = a.split ? a.split(" ") : [a[0], a[1]];
        if (b.length === 1) b[1] = b[0];
        c.each(["left", "top"], function (e, g) {
          if (+b[e] === b[e]) {
            d[e] = b[e];
            b[e] = g;
          }
        });
      } else if (typeof a === "object") {
        if ("left" in a) {
          b[0] = "left";
          d[0] = a.left;
        } else if ("right" in a) {
          b[0] = "right";
          d[0] = -a.right;
        }
        if ("top" in a) {
          b[1] = "top";
          d[1] = a.top;
        } else if ("bottom" in a) {
          b[1] = "bottom";
          d[1] = -a.bottom;
        }
      }
      (a = this.uiDialog.is(":visible")) || this.uiDialog.show();
      this.uiDialog.css({ top: 0, left: 0 }).position({
        my: b.join(" "),
        at: b.join(" "),
        offset: d.join(" "),
        of: window,
        collision: "fit",
        using: function (e) {
          var g = c(this).css(e).offset().top;
          g < 0 && c(this).css("top", e.top - g);
        },
      });
      a || this.uiDialog.hide();
    },
    _setOption: function (a, b) {
      var d = this,
        e = d.uiDialog,
        g = e.is(":data(resizable)"),
        f = false;
      switch (a) {
        case "beforeclose":
          a = "beforeClose";
          break;
        case "buttons":
          d._createButtons(b);
          break;
        case "closeText":
          d.uiDialogTitlebarCloseText.text("" + b);
          break;
        case "dialogClass":
          e.removeClass(d.options.dialogClass).addClass(
            "ui-dialog ui-widget ui-widget-content ui-corner-all " + b
          );
          break;
        case "disabled":
          b
            ? e.addClass("ui-dialog-disabled")
            : e.removeClass("ui-dialog-disabled");
          break;
        case "draggable":
          b ? d._makeDraggable() : e.draggable("destroy");
          break;
        case "height":
          f = true;
          break;
        case "maxHeight":
          g && e.resizable("option", "maxHeight", b);
          f = true;
          break;
        case "maxWidth":
          g && e.resizable("option", "maxWidth", b);
          f = true;
          break;
        case "minHeight":
          g && e.resizable("option", "minHeight", b);
          f = true;
          break;
        case "minWidth":
          g && e.resizable("option", "minWidth", b);
          f = true;
          break;
        case "position":
          d._position(b);
          break;
        case "resizable":
          g && !b && e.resizable("destroy");
          g && typeof b === "string" && e.resizable("option", "handles", b);
          !g && b !== false && d._makeResizable(b);
          break;
        case "title":
          c(".ui-dialog-title", d.uiDialogTitlebar).html("" + (b || "&#160;"));
          break;
        case "width":
          f = true;
          break;
      }
      c.Widget.prototype._setOption.apply(d, arguments);
      f && d._size();
    },
    _size: function () {
      var a = this.options,
        b;
      this.element.css({ width: "auto", minHeight: 0, height: 0 });
      b = this.uiDialog.css({ height: "auto", width: a.width }).height();
      this.element
        .css(
          a.height === "auto"
            ? { minHeight: Math.max(a.minHeight - b, 0), height: "auto" }
            : { minHeight: 0, height: Math.max(a.height - b, 0) }
        )
        .show();
      this.uiDialog.is(":data(resizable)") &&
        this.uiDialog.resizable("option", "minHeight", this._minHeight());
    },
  });
  c.extend(c.ui.dialog, {
    version: "1.8.1",
    uuid: 0,
    maxZ: 0,
    getTitleId: function (a) {
      a = a.attr("id");
      if (!a) {
        this.uuid += 1;
        a = this.uuid;
      }
      return "ui-dialog-title-" + a;
    },
    overlay: function (a) {
      this.$el = c.ui.dialog.overlay.create(a);
    },
  });
  c.extend(c.ui.dialog.overlay, {
    instances: [],
    oldInstances: [],
    maxZ: 0,
    events: c
      .map(
        "focus,mousedown,mouseup,keydown,keypress,click".split(","),
        function (a) {
          return a + ".dialog-overlay";
        }
      )
      .join(" "),
    create: function (a) {
      if (this.instances.length === 0) {
        setTimeout(function () {
          c.ui.dialog.overlay.instances.length &&
            c(document).bind(c.ui.dialog.overlay.events, function (d) {
              return c(d.target).zIndex() >= c.ui.dialog.overlay.maxZ;
            });
        }, 1);
        c(document).bind("keydown.dialog-overlay", function (d) {
          if (
            a.options.closeOnEscape &&
            d.keyCode &&
            d.keyCode === c.ui.keyCode.ESCAPE
          ) {
            a.close(d);
            d.preventDefault();
          }
        });
        c(window).bind("resize.dialog-overlay", c.ui.dialog.overlay.resize);
      }
      var b = (
        this.oldInstances.pop() ||
        c("<div></div>").addClass("ui-widget-overlay")
      )
        .appendTo(document.body)
        .css({ width: this.width(), height: this.height() });
      c.fn.bgiframe && b.bgiframe();
      this.instances.push(b);
      return b;
    },
    destroy: function (a) {
      this.oldInstances.push(
        this.instances.splice(c.inArray(a, this.instances), 1)[0]
      );
      this.instances.length === 0 &&
        c([document, window]).unbind(".dialog-overlay");
      a.remove();
      var b = 0;
      c.each(this.instances, function () {
        b = Math.max(b, this.css("z-index"));
      });
      this.maxZ = b;
    },
    height: function () {
      var a, b;
      if (c.browser.msie && c.browser.version < 7) {
        a = Math.max(
          document.documentElement.scrollHeight,
          document.body.scrollHeight
        );
        b = Math.max(
          document.documentElement.offsetHeight,
          document.body.offsetHeight
        );
        return a < b ? c(window).height() + "px" : a + "px";
      } else return c(document).height() + "px";
    },
    width: function () {
      var a, b;
      if (c.browser.msie && c.browser.version < 7) {
        a = Math.max(
          document.documentElement.scrollWidth,
          document.body.scrollWidth
        );
        b = Math.max(
          document.documentElement.offsetWidth,
          document.body.offsetWidth
        );
        return a < b ? c(window).width() + "px" : a + "px";
      } else return c(document).width() + "px";
    },
    resize: function () {
      var a = c([]);
      c.each(c.ui.dialog.overlay.instances, function () {
        a = a.add(this);
      });
      a.css({ width: 0, height: 0 }).css({
        width: c.ui.dialog.overlay.width(),
        height: c.ui.dialog.overlay.height(),
      });
    },
  });
  c.extend(c.ui.dialog.overlay.prototype, {
    destroy: function () {
      c.ui.dialog.overlay.destroy(this.$el);
    },
  });
})(jQuery);
(function (d) {
  d.widget("ui.slider", d.ui.mouse, {
    widgetEventPrefix: "slide",
    options: {
      animate: false,
      distance: 0,
      max: 100,
      min: 0,
      orientation: "horizontal",
      range: false,
      step: 1,
      value: 0,
      values: null,
    },
    _create: function () {
      var b = this,
        a = this.options;
      this._mouseSliding = this._keySliding = false;
      this._animateOff = true;
      this._handleIndex = null;
      this._detectOrientation();
      this._mouseInit();
      this.element.addClass(
        "ui-slider ui-slider-" +
          this.orientation +
          " ui-widget ui-widget-content ui-corner-all"
      );
      a.disabled && this.element.addClass("ui-slider-disabled ui-disabled");
      this.range = d([]);
      if (a.range) {
        if (a.range === true) {
          this.range = d("<div></div>");
          if (!a.values) a.values = [this._valueMin(), this._valueMin()];
          if (a.values.length && a.values.length !== 2)
            a.values = [a.values[0], a.values[0]];
        } else this.range = d("<div></div>");
        this.range.appendTo(this.element).addClass("ui-slider-range");
        if (a.range === "min" || a.range === "max")
          this.range.addClass("ui-slider-range-" + a.range);
        this.range.addClass("ui-widget-header");
      }
      d(".ui-slider-handle", this.element).length === 0 &&
        d("<a href='#'></a>")
          .appendTo(this.element)
          .addClass("ui-slider-handle");
      if (a.values && a.values.length)
        for (; d(".ui-slider-handle", this.element).length < a.values.length; )
          d("<a href='#'></a>")
            .appendTo(this.element)
            .addClass("ui-slider-handle");
      this.handles = d(".ui-slider-handle", this.element).addClass(
        "ui-state-default ui-corner-all"
      );
      this.handle = this.handles.eq(0);
      this.handles
        .add(this.range)
        .filter("a")
        .click(function (c) {
          c.preventDefault();
        })
        .hover(
          function () {
            a.disabled || d(this).addClass("ui-state-hover");
          },
          function () {
            d(this).removeClass("ui-state-hover");
          }
        )
        .focus(function () {
          if (a.disabled) d(this).blur();
          else {
            d(".ui-slider .ui-state-focus").removeClass("ui-state-focus");
            d(this).addClass("ui-state-focus");
          }
        })
        .blur(function () {
          d(this).removeClass("ui-state-focus");
        });
      this.handles.each(function (c) {
        d(this).data("index.ui-slider-handle", c);
      });
      this.handles
        .keydown(function (c) {
          var e = true,
            f = d(this).data("index.ui-slider-handle"),
            g,
            h,
            i;
          if (!b.options.disabled) {
            switch (c.keyCode) {
              case d.ui.keyCode.HOME:
              case d.ui.keyCode.END:
              case d.ui.keyCode.PAGE_UP:
              case d.ui.keyCode.PAGE_DOWN:
              case d.ui.keyCode.UP:
              case d.ui.keyCode.RIGHT:
              case d.ui.keyCode.DOWN:
              case d.ui.keyCode.LEFT:
                e = false;
                if (!b._keySliding) {
                  b._keySliding = true;
                  d(this).addClass("ui-state-active");
                  g = b._start(c, f);
                  if (g === false) return;
                }
                break;
            }
            i = b.options.step;
            g =
              b.options.values && b.options.values.length
                ? (h = b.values(f))
                : (h = b.value());
            switch (c.keyCode) {
              case d.ui.keyCode.HOME:
                h = b._valueMin();
                break;
              case d.ui.keyCode.END:
                h = b._valueMax();
                break;
              case d.ui.keyCode.PAGE_UP:
                h = g + (b._valueMax() - b._valueMin()) / 5;
                break;
              case d.ui.keyCode.PAGE_DOWN:
                h = g - (b._valueMax() - b._valueMin()) / 5;
                break;
              case d.ui.keyCode.UP:
              case d.ui.keyCode.RIGHT:
                if (g === b._valueMax()) return;
                h = g + i;
                break;
              case d.ui.keyCode.DOWN:
              case d.ui.keyCode.LEFT:
                if (g === b._valueMin()) return;
                h = g - i;
                break;
            }
            b._slide(c, f, h);
            return e;
          }
        })
        .keyup(function (c) {
          var e = d(this).data("index.ui-slider-handle");
          if (b._keySliding) {
            b._keySliding = false;
            b._stop(c, e);
            b._change(c, e);
            d(this).removeClass("ui-state-active");
          }
        });
      this._refreshValue();
      this._animateOff = false;
    },
    destroy: function () {
      this.handles.remove();
      this.range.remove();
      this.element
        .removeClass(
          "ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"
        )
        .removeData("slider")
        .unbind(".slider");
      this._mouseDestroy();
      return this;
    },
    _mouseCapture: function (b) {
      var a = this.options,
        c,
        e,
        f,
        g,
        h,
        i;
      if (a.disabled) return false;
      this.elementSize = {
        width: this.element.outerWidth(),
        height: this.element.outerHeight(),
      };
      this.elementOffset = this.element.offset();
      c = { x: b.pageX, y: b.pageY };
      e = this._normValueFromMouse(c);
      f = this._valueMax() - this._valueMin() + 1;
      h = this;
      this.handles.each(function (j) {
        var k = Math.abs(e - h.values(j));
        if (f > k) {
          f = k;
          g = d(this);
          i = j;
        }
      });
      if (a.range === true && this.values(1) === a.min) {
        i += 1;
        g = d(this.handles[i]);
      }
      if (this._start(b, i) === false) return false;
      this._mouseSliding = true;
      h._handleIndex = i;
      g.addClass("ui-state-active").focus();
      a = g.offset();
      this._clickOffset = !d(b.target)
        .parents()
        .andSelf()
        .is(".ui-slider-handle")
        ? { left: 0, top: 0 }
        : {
            left: b.pageX - a.left - g.width() / 2,
            top:
              b.pageY -
              a.top -
              g.height() / 2 -
              (parseInt(g.css("borderTopWidth"), 10) || 0) -
              (parseInt(g.css("borderBottomWidth"), 10) || 0) +
              (parseInt(g.css("marginTop"), 10) || 0),
          };
      e = this._normValueFromMouse(c);
      this._slide(b, i, e);
      return (this._animateOff = true);
    },
    _mouseStart: function () {
      return true;
    },
    _mouseDrag: function (b) {
      var a = this._normValueFromMouse({ x: b.pageX, y: b.pageY });
      this._slide(b, this._handleIndex, a);
      return false;
    },
    _mouseStop: function (b) {
      this.handles.removeClass("ui-state-active");
      this._mouseSliding = false;
      this._stop(b, this._handleIndex);
      this._change(b, this._handleIndex);
      this._clickOffset = this._handleIndex = null;
      return (this._animateOff = false);
    },
    _detectOrientation: function () {
      this.orientation =
        this.options.orientation === "vertical" ? "vertical" : "horizontal";
    },
    _normValueFromMouse: function (b) {
      var a;
      if (this.orientation === "horizontal") {
        a = this.elementSize.width;
        b =
          b.x -
          this.elementOffset.left -
          (this._clickOffset ? this._clickOffset.left : 0);
      } else {
        a = this.elementSize.height;
        b =
          b.y -
          this.elementOffset.top -
          (this._clickOffset ? this._clickOffset.top : 0);
      }
      a = b / a;
      if (a > 1) a = 1;
      if (a < 0) a = 0;
      if (this.orientation === "vertical") a = 1 - a;
      b = this._valueMax() - this._valueMin();
      return this._trimAlignValue(this._valueMin() + a * b);
    },
    _start: function (b, a) {
      var c = { handle: this.handles[a], value: this.value() };
      if (this.options.values && this.options.values.length) {
        c.value = this.values(a);
        c.values = this.values();
      }
      return this._trigger("start", b, c);
    },
    _slide: function (b, a, c) {
      var e;
      if (this.options.values && this.options.values.length) {
        e = this.values(a ? 0 : 1);
        if (
          this.options.values.length === 2 &&
          this.options.range === true &&
          ((a === 0 && c > e) || (a === 1 && c < e))
        )
          c = e;
        if (c !== this.values(a)) {
          e = this.values();
          e[a] = c;
          b = this._trigger("slide", b, {
            handle: this.handles[a],
            value: c,
            values: e,
          });
          this.values(a ? 0 : 1);
          b !== false && this.values(a, c, true);
        }
      } else if (c !== this.value()) {
        b = this._trigger("slide", b, { handle: this.handles[a], value: c });
        b !== false && this.value(c);
      }
    },
    _stop: function (b, a) {
      var c = { handle: this.handles[a], value: this.value() };
      if (this.options.values && this.options.values.length) {
        c.value = this.values(a);
        c.values = this.values();
      }
      this._trigger("stop", b, c);
    },
    _change: function (b, a) {
      if (!this._keySliding && !this._mouseSliding) {
        var c = { handle: this.handles[a], value: this.value() };
        if (this.options.values && this.options.values.length) {
          c.value = this.values(a);
          c.values = this.values();
        }
        this._trigger("change", b, c);
      }
    },
    value: function (b) {
      if (arguments.length) {
        this.options.value = this._trimAlignValue(b);
        this._refreshValue();
        this._change(null, 0);
      }
      return this._value();
    },
    values: function (b, a) {
      var c, e, f;
      if (arguments.length > 1) {
        this.options.values[b] = this._trimAlignValue(a);
        this._refreshValue();
        this._change(null, b);
      }
      if (arguments.length)
        if (d.isArray(arguments[0])) {
          c = this.options.values;
          e = arguments[0];
          for (f = 0; f < c.length; f += 1) {
            c[f] = this._trimAlignValue(e[f]);
            this._change(null, f);
          }
          this._refreshValue();
        } else
          return this.options.values && this.options.values.length
            ? this._values(b)
            : this.value();
      else return this._values();
    },
    _setOption: function (b, a) {
      var c,
        e = 0;
      if (d.isArray(this.options.values)) e = this.options.values.length;
      d.Widget.prototype._setOption.apply(this, arguments);
      switch (b) {
        case "disabled":
          if (a) {
            this.handles.filter(".ui-state-focus").blur();
            this.handles.removeClass("ui-state-hover");
            this.handles.attr("disabled", "disabled");
            this.element.addClass("ui-disabled");
          } else {
            this.handles.removeAttr("disabled");
            this.element.removeClass("ui-disabled");
          }
          break;
        case "orientation":
          this._detectOrientation();
          this.element
            .removeClass("ui-slider-horizontal ui-slider-vertical")
            .addClass("ui-slider-" + this.orientation);
          this._refreshValue();
          break;
        case "value":
          this._animateOff = true;
          this._refreshValue();
          this._change(null, 0);
          this._animateOff = false;
          break;
        case "values":
          this._animateOff = true;
          this._refreshValue();
          for (c = 0; c < e; c += 1) this._change(null, c);
          this._animateOff = false;
          break;
      }
    },
    _value: function () {
      var b = this.options.value;
      return (b = this._trimAlignValue(b));
    },
    _values: function (b) {
      var a, c;
      if (arguments.length) {
        a = this.options.values[b];
        return (a = this._trimAlignValue(a));
      } else {
        a = this.options.values.slice();
        for (c = 0; c < a.length; c += 1) a[c] = this._trimAlignValue(a[c]);
        return a;
      }
    },
    _trimAlignValue: function (b) {
      if (b < this._valueMin()) return this._valueMin();
      if (b > this._valueMax()) return this._valueMax();
      var a = this.options.step,
        c = b % a;
      b = b - c;
      if (c >= a / 2) b += a;
      return parseFloat(b.toFixed(5));
    },
    _valueMin: function () {
      return this.options.min;
    },
    _valueMax: function () {
      return this.options.max;
    },
    _refreshValue: function () {
      var b = this.options.range,
        a = this.options,
        c = this,
        e = !this._animateOff ? a.animate : false,
        f,
        g = {},
        h,
        i,
        j,
        k;
      if (this.options.values && this.options.values.length)
        this.handles.each(function (l) {
          f =
            ((c.values(l) - c._valueMin()) / (c._valueMax() - c._valueMin())) *
            100;
          g[c.orientation === "horizontal" ? "left" : "bottom"] = f + "%";
          d(this).stop(1, 1)[e ? "animate" : "css"](g, a.animate);
          if (c.options.range === true)
            if (c.orientation === "horizontal") {
              if (l === 0)
                c.range
                  .stop(1, 1)
                  [e ? "animate" : "css"]({ left: f + "%" }, a.animate);
              if (l === 1)
                c.range[e ? "animate" : "css"](
                  { width: f - h + "%" },
                  { queue: false, duration: a.animate }
                );
            } else {
              if (l === 0)
                c.range
                  .stop(1, 1)
                  [e ? "animate" : "css"]({ bottom: f + "%" }, a.animate);
              if (l === 1)
                c.range[e ? "animate" : "css"](
                  { height: f - h + "%" },
                  { queue: false, duration: a.animate }
                );
            }
          h = f;
        });
      else {
        i = this.value();
        j = this._valueMin();
        k = this._valueMax();
        f = k !== j ? ((i - j) / (k - j)) * 100 : 0;
        g[c.orientation === "horizontal" ? "left" : "bottom"] = f + "%";
        this.handle.stop(1, 1)[e ? "animate" : "css"](g, a.animate);
        if (b === "min" && this.orientation === "horizontal")
          this.range
            .stop(1, 1)
            [e ? "animate" : "css"]({ width: f + "%" }, a.animate);
        if (b === "max" && this.orientation === "horizontal")
          this.range[e ? "animate" : "css"](
            { width: 100 - f + "%" },
            { queue: false, duration: a.animate }
          );
        if (b === "min" && this.orientation === "vertical")
          this.range
            .stop(1, 1)
            [e ? "animate" : "css"]({ height: f + "%" }, a.animate);
        if (b === "max" && this.orientation === "vertical")
          this.range[e ? "animate" : "css"](
            { height: 100 - f + "%" },
            { queue: false, duration: a.animate }
          );
      }
    },
  });
  d.extend(d.ui.slider, { version: "1.8.1" });
})(jQuery);
(function (d) {
  var s = 0,
    u = 0;
  d.widget("ui.tabs", {
    options: {
      add: null,
      ajaxOptions: null,
      cache: false,
      cookie: null,
      collapsible: false,
      disable: null,
      disabled: [],
      enable: null,
      event: "click",
      fx: null,
      idPrefix: "ui-tabs-",
      load: null,
      panelTemplate: "<div></div>",
      remove: null,
      select: null,
      show: null,
      spinner: "<em>Loading&#8230;</em>",
      tabTemplate: '<li><a href="#{href}"><span>#{label}</span></a></li>',
    },
    _create: function () {
      this._tabify(true);
    },
    _setOption: function (c, e) {
      if (c == "selected")
        (this.options.collapsible && e == this.options.selected) ||
          this.select(e);
      else {
        this.options[c] = e;
        this._tabify();
      }
    },
    _tabId: function (c) {
      return (
        (c.title &&
          c.title.replace(/\s/g, "_").replace(/[^A-Za-z0-9\-_:\.]/g, "")) ||
        this.options.idPrefix + ++s
      );
    },
    _sanitizeSelector: function (c) {
      return c.replace(/:/g, "\\:");
    },
    _cookie: function () {
      var c =
        this.cookie ||
        (this.cookie = this.options.cookie.name || "ui-tabs-" + ++u);
      return d.cookie.apply(null, [c].concat(d.makeArray(arguments)));
    },
    _ui: function (c, e) {
      return { tab: c, panel: e, index: this.anchors.index(c) };
    },
    _cleanup: function () {
      this.lis
        .filter(".ui-state-processing")
        .removeClass("ui-state-processing")
        .find("span:data(label.tabs)")
        .each(function () {
          var c = d(this);
          c.html(c.data("label.tabs")).removeData("label.tabs");
        });
    },
    _tabify: function (c) {
      function e(g, f) {
        g.css({ display: "" });
        !d.support.opacity && f.opacity && g[0].style.removeAttribute("filter");
      }
      this.list = this.element.find("ol,ul").eq(0);
      this.lis = d("li:has(a[href])", this.list);
      this.anchors = this.lis.map(function () {
        return d("a", this)[0];
      });
      this.panels = d([]);
      var a = this,
        b = this.options,
        h = /^#.+/;
      this.anchors.each(function (g, f) {
        var j = d(f).attr("href"),
          l = j.split("#")[0],
          p;
        if (
          l &&
          (l === location.toString().split("#")[0] ||
            ((p = d("base")[0]) && l === p.href))
        ) {
          j = f.hash;
          f.href = j;
        }
        if (h.test(j)) a.panels = a.panels.add(a._sanitizeSelector(j));
        else if (j != "#") {
          d.data(f, "href.tabs", j);
          d.data(f, "load.tabs", j.replace(/#.*$/, ""));
          j = a._tabId(f);
          f.href = "#" + j;
          f = d("#" + j);
          if (!f.length) {
            f = d(b.panelTemplate)
              .attr("id", j)
              .addClass("ui-tabs-panel ui-widget-content ui-corner-bottom")
              .insertAfter(a.panels[g - 1] || a.list);
            f.data("destroy.tabs", true);
          }
          a.panels = a.panels.add(f);
        } else b.disabled.push(g);
      });
      if (c) {
        this.element.addClass(
          "ui-tabs ui-widget ui-widget-content ui-corner-all"
        );
        this.list.addClass(
          "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
        );
        this.lis.addClass("ui-state-default ui-corner-top");
        this.panels.addClass(
          "ui-tabs-panel ui-widget-content ui-corner-bottom"
        );
        if (b.selected === undefined) {
          location.hash &&
            this.anchors.each(function (g, f) {
              if (f.hash == location.hash) {
                b.selected = g;
                return false;
              }
            });
          if (typeof b.selected != "number" && b.cookie)
            b.selected = parseInt(a._cookie(), 10);
          if (
            typeof b.selected != "number" &&
            this.lis.filter(".ui-tabs-selected").length
          )
            b.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"));
          b.selected = b.selected || (this.lis.length ? 0 : -1);
        } else if (b.selected === null) b.selected = -1;
        b.selected =
          (b.selected >= 0 && this.anchors[b.selected]) || b.selected < 0
            ? b.selected
            : 0;
        b.disabled = d
          .unique(
            b.disabled.concat(
              d.map(this.lis.filter(".ui-state-disabled"), function (g) {
                return a.lis.index(g);
              })
            )
          )
          .sort();
        d.inArray(b.selected, b.disabled) != -1 &&
          b.disabled.splice(d.inArray(b.selected, b.disabled), 1);
        this.panels.addClass("ui-tabs-hide");
        this.lis.removeClass("ui-tabs-selected ui-state-active");
        if (b.selected >= 0 && this.anchors.length) {
          this.panels.eq(b.selected).removeClass("ui-tabs-hide");
          this.lis.eq(b.selected).addClass("ui-tabs-selected ui-state-active");
          a.element.queue("tabs", function () {
            a._trigger(
              "show",
              null,
              a._ui(a.anchors[b.selected], a.panels[b.selected])
            );
          });
          this.load(b.selected);
        }
        d(window).bind("unload", function () {
          a.lis.add(a.anchors).unbind(".tabs");
          a.lis = a.anchors = a.panels = null;
        });
      } else b.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"));
      this.element[b.collapsible ? "addClass" : "removeClass"](
        "ui-tabs-collapsible"
      );
      b.cookie && this._cookie(b.selected, b.cookie);
      c = 0;
      for (var i; (i = this.lis[c]); c++)
        d(i)[
          d.inArray(c, b.disabled) != -1 && !d(i).hasClass("ui-tabs-selected")
            ? "addClass"
            : "removeClass"
        ]("ui-state-disabled");
      b.cache === false && this.anchors.removeData("cache.tabs");
      this.lis.add(this.anchors).unbind(".tabs");
      if (b.event != "mouseover") {
        var k = function (g, f) {
            f.is(":not(.ui-state-disabled)") && f.addClass("ui-state-" + g);
          },
          n = function (g, f) {
            f.removeClass("ui-state-" + g);
          };
        this.lis.bind("mouseover.tabs", function () {
          k("hover", d(this));
        });
        this.lis.bind("mouseout.tabs", function () {
          n("hover", d(this));
        });
        this.anchors.bind("focus.tabs", function () {
          k("focus", d(this).closest("li"));
        });
        this.anchors.bind("blur.tabs", function () {
          n("focus", d(this).closest("li"));
        });
      }
      var m, o;
      if (b.fx)
        if (d.isArray(b.fx)) {
          m = b.fx[0];
          o = b.fx[1];
        } else m = o = b.fx;
      var q = o
          ? function (g, f) {
              d(g).closest("li").addClass("ui-tabs-selected ui-state-active");
              f.hide()
                .removeClass("ui-tabs-hide")
                .animate(o, o.duration || "normal", function () {
                  e(f, o);
                  a._trigger("show", null, a._ui(g, f[0]));
                });
            }
          : function (g, f) {
              d(g).closest("li").addClass("ui-tabs-selected ui-state-active");
              f.removeClass("ui-tabs-hide");
              a._trigger("show", null, a._ui(g, f[0]));
            },
        r = m
          ? function (g, f) {
              f.animate(m, m.duration || "normal", function () {
                a.lis.removeClass("ui-tabs-selected ui-state-active");
                f.addClass("ui-tabs-hide");
                e(f, m);
                a.element.dequeue("tabs");
              });
            }
          : function (g, f) {
              a.lis.removeClass("ui-tabs-selected ui-state-active");
              f.addClass("ui-tabs-hide");
              a.element.dequeue("tabs");
            };
      this.anchors.bind(b.event + ".tabs", function () {
        var g = this,
          f = d(this).closest("li"),
          j = a.panels.filter(":not(.ui-tabs-hide)"),
          l = d(a._sanitizeSelector(this.hash));
        if (
          (f.hasClass("ui-tabs-selected") && !b.collapsible) ||
          f.hasClass("ui-state-disabled") ||
          f.hasClass("ui-state-processing") ||
          a._trigger("select", null, a._ui(this, l[0])) === false
        ) {
          this.blur();
          return false;
        }
        b.selected = a.anchors.index(this);
        a.abort();
        if (b.collapsible)
          if (f.hasClass("ui-tabs-selected")) {
            b.selected = -1;
            b.cookie && a._cookie(b.selected, b.cookie);
            a.element
              .queue("tabs", function () {
                r(g, j);
              })
              .dequeue("tabs");
            this.blur();
            return false;
          } else if (!j.length) {
            b.cookie && a._cookie(b.selected, b.cookie);
            a.element.queue("tabs", function () {
              q(g, l);
            });
            a.load(a.anchors.index(this));
            this.blur();
            return false;
          }
        b.cookie && a._cookie(b.selected, b.cookie);
        if (l.length) {
          j.length &&
            a.element.queue("tabs", function () {
              r(g, j);
            });
          a.element.queue("tabs", function () {
            q(g, l);
          });
          a.load(a.anchors.index(this));
        } else throw "jQuery UI Tabs: Mismatching fragment identifier.";
        d.browser.msie && this.blur();
      });
      this.anchors.bind("click.tabs", function () {
        return false;
      });
    },
    destroy: function () {
      var c = this.options;
      this.abort();
      this.element
        .unbind(".tabs")
        .removeClass(
          "ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"
        )
        .removeData("tabs");
      this.list.removeClass(
        "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
      );
      this.anchors.each(function () {
        var e = d.data(this, "href.tabs");
        if (e) this.href = e;
        var a = d(this).unbind(".tabs");
        d.each(["href", "load", "cache"], function (b, h) {
          a.removeData(h + ".tabs");
        });
      });
      this.lis
        .unbind(".tabs")
        .add(this.panels)
        .each(function () {
          d.data(this, "destroy.tabs")
            ? d(this).remove()
            : d(this).removeClass(
                "ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"
              );
        });
      c.cookie && this._cookie(null, c.cookie);
      return this;
    },
    add: function (c, e, a) {
      if (a === undefined) a = this.anchors.length;
      var b = this,
        h = this.options;
      e = d(h.tabTemplate.replace(/#\{href\}/g, c).replace(/#\{label\}/g, e));
      c = !c.indexOf("#") ? c.replace("#", "") : this._tabId(d("a", e)[0]);
      e.addClass("ui-state-default ui-corner-top").data("destroy.tabs", true);
      var i = d("#" + c);
      i.length ||
        (i = d(h.panelTemplate).attr("id", c).data("destroy.tabs", true));
      i.addClass(
        "ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"
      );
      if (a >= this.lis.length) {
        e.appendTo(this.list);
        i.appendTo(this.list[0].parentNode);
      } else {
        e.insertBefore(this.lis[a]);
        i.insertBefore(this.panels[a]);
      }
      h.disabled = d.map(h.disabled, function (k) {
        return k >= a ? ++k : k;
      });
      this._tabify();
      if (this.anchors.length == 1) {
        h.selected = 0;
        e.addClass("ui-tabs-selected ui-state-active");
        i.removeClass("ui-tabs-hide");
        this.element.queue("tabs", function () {
          b._trigger("show", null, b._ui(b.anchors[0], b.panels[0]));
        });
        this.load(0);
      }
      this._trigger("add", null, this._ui(this.anchors[a], this.panels[a]));
      return this;
    },
    remove: function (c) {
      var e = this.options,
        a = this.lis.eq(c).remove(),
        b = this.panels.eq(c).remove();
      if (a.hasClass("ui-tabs-selected") && this.anchors.length > 1)
        this.select(c + (c + 1 < this.anchors.length ? 1 : -1));
      e.disabled = d.map(
        d.grep(e.disabled, function (h) {
          return h != c;
        }),
        function (h) {
          return h >= c ? --h : h;
        }
      );
      this._tabify();
      this._trigger("remove", null, this._ui(a.find("a")[0], b[0]));
      return this;
    },
    enable: function (c) {
      var e = this.options;
      if (d.inArray(c, e.disabled) != -1) {
        this.lis.eq(c).removeClass("ui-state-disabled");
        e.disabled = d.grep(e.disabled, function (a) {
          return a != c;
        });
        this._trigger(
          "enable",
          null,
          this._ui(this.anchors[c], this.panels[c])
        );
        return this;
      }
    },
    disable: function (c) {
      var e = this.options;
      if (c != e.selected) {
        this.lis.eq(c).addClass("ui-state-disabled");
        e.disabled.push(c);
        e.disabled.sort();
        this._trigger(
          "disable",
          null,
          this._ui(this.anchors[c], this.panels[c])
        );
      }
      return this;
    },
    select: function (c) {
      if (typeof c == "string")
        c = this.anchors.index(this.anchors.filter("[href$=" + c + "]"));
      else if (c === null) c = -1;
      if (c == -1 && this.options.collapsible) c = this.options.selected;
      this.anchors.eq(c).trigger(this.options.event + ".tabs");
      return this;
    },
    load: function (c) {
      var e = this,
        a = this.options,
        b = this.anchors.eq(c)[0],
        h = d.data(b, "load.tabs");
      this.abort();
      if (
        !h ||
        (this.element.queue("tabs").length !== 0 && d.data(b, "cache.tabs"))
      )
        this.element.dequeue("tabs");
      else {
        this.lis.eq(c).addClass("ui-state-processing");
        if (a.spinner) {
          var i = d("span", b);
          i.data("label.tabs", i.html()).html(a.spinner);
        }
        this.xhr = d.ajax(
          d.extend({}, a.ajaxOptions, {
            url: h,
            success: function (k, n) {
              d(e._sanitizeSelector(b.hash)).html(k);
              e._cleanup();
              a.cache && d.data(b, "cache.tabs", true);
              e._trigger("load", null, e._ui(e.anchors[c], e.panels[c]));
              try {
                a.ajaxOptions.success(k, n);
              } catch (m) {}
            },
            error: function (k, n) {
              e._cleanup();
              e._trigger("load", null, e._ui(e.anchors[c], e.panels[c]));
              try {
                a.ajaxOptions.error(k, n, c, b);
              } catch (m) {}
            },
          })
        );
        e.element.dequeue("tabs");
        return this;
      }
    },
    abort: function () {
      this.element.queue([]);
      this.panels.stop(false, true);
      this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2));
      if (this.xhr) {
        this.xhr.abort();
        delete this.xhr;
      }
      this._cleanup();
      return this;
    },
    url: function (c, e) {
      this.anchors.eq(c).removeData("cache.tabs").data("load.tabs", e);
      return this;
    },
    length: function () {
      return this.anchors.length;
    },
  });
  d.extend(d.ui.tabs, { version: "1.8.1" });
  d.extend(d.ui.tabs.prototype, {
    rotation: null,
    rotate: function (c, e) {
      var a = this,
        b = this.options,
        h =
          a._rotate ||
          (a._rotate = function (i) {
            clearTimeout(a.rotation);
            a.rotation = setTimeout(function () {
              var k = b.selected;
              a.select(++k < a.anchors.length ? k : 0);
            }, c);
            i && i.stopPropagation();
          });
      e =
        a._unrotate ||
        (a._unrotate = !e
          ? function (i) {
              i.clientX && a.rotate(null);
            }
          : function () {
              t = b.selected;
              h();
            });
      if (c) {
        this.element.bind("tabsshow", h);
        this.anchors.bind(b.event + ".tabs", e);
        h();
      } else {
        clearTimeout(a.rotation);
        this.element.unbind("tabsshow", h);
        this.anchors.unbind(b.event + ".tabs", e);
        delete this._rotate;
        delete this._unrotate;
      }
      return this;
    },
  });
})(jQuery);
(function (d) {
  function J() {
    this.debug = false;
    this._curInst = null;
    this._keyEvent = false;
    this._disabledInputs = [];
    this._inDialog = this._datepickerShowing = false;
    this._mainDivId = "ui-datepicker-div";
    this._inlineClass = "ui-datepicker-inline";
    this._appendClass = "ui-datepicker-append";
    this._triggerClass = "ui-datepicker-trigger";
    this._dialogClass = "ui-datepicker-dialog";
    this._disableClass = "ui-datepicker-disabled";
    this._unselectableClass = "ui-datepicker-unselectable";
    this._currentClass = "ui-datepicker-current-day";
    this._dayOverClass = "ui-datepicker-days-cell-over";
    this.regional = [];
    this.regional[""] = {
      closeText: "Done",
      prevText: "Prev",
      nextText: "Next",
      currentText: "Today",
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      monthNamesShort: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      dayNames: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      weekHeader: "Wk",
      dateFormat: "mm/dd/yy",
      firstDay: 0,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: "",
    };
    this._defaults = {
      showOn: "focus",
      showAnim: "show",
      showOptions: {},
      defaultDate: null,
      appendText: "",
      buttonText: "...",
      buttonImage: "",
      buttonImageOnly: false,
      hideIfNoPrevNext: false,
      navigationAsDateFormat: false,
      gotoCurrent: false,
      changeMonth: false,
      changeYear: false,
      yearRange: "c-10:c+10",
      showOtherMonths: false,
      selectOtherMonths: false,
      showWeek: false,
      calculateWeek: this.iso8601Week,
      shortYearCutoff: "+10",
      minDate: null,
      maxDate: null,
      duration: "_default",
      beforeShowDay: null,
      beforeShow: null,
      onSelect: null,
      onChangeMonthYear: null,
      onClose: null,
      numberOfMonths: 1,
      showCurrentAtPos: 0,
      stepMonths: 1,
      stepBigMonths: 12,
      altField: "",
      altFormat: "",
      constrainInput: true,
      showButtonPanel: false,
      autoSize: false,
    };
    d.extend(this._defaults, this.regional[""]);
    this.dpDiv = d(
      '<div id="' +
        this._mainDivId +
        '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-helper-hidden-accessible"></div>'
    );
  }
  function E(a, b) {
    d.extend(a, b);
    for (var c in b) if (b[c] == null || b[c] == undefined) a[c] = b[c];
    return a;
  }
  d.extend(d.ui, { datepicker: { version: "1.8.1" } });
  var y = new Date().getTime();
  d.extend(J.prototype, {
    markerClassName: "hasDatepicker",
    log: function () {
      this.debug && console.log.apply("", arguments);
    },
    _widgetDatepicker: function () {
      return this.dpDiv;
    },
    setDefaults: function (a) {
      E(this._defaults, a || {});
      return this;
    },
    _attachDatepicker: function (a, b) {
      var c = null;
      for (var e in this._defaults) {
        var f = a.getAttribute("date:" + e);
        if (f) {
          c = c || {};
          try {
            c[e] = eval(f);
          } catch (h) {
            c[e] = f;
          }
        }
      }
      e = a.nodeName.toLowerCase();
      f = e == "div" || e == "span";
      if (!a.id) a.id = "dp" + ++this.uuid;
      var i = this._newInst(d(a), f);
      i.settings = d.extend({}, b || {}, c || {});
      if (e == "input") this._connectDatepicker(a, i);
      else f && this._inlineDatepicker(a, i);
    },
    _newInst: function (a, b) {
      return {
        id: a[0].id.replace(/([^A-Za-z0-9_])/g, "\\\\$1"),
        input: a,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: b,
        dpDiv: !b
          ? this.dpDiv
          : d(
              '<div class="' +
                this._inlineClass +
                ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'
            ),
      };
    },
    _connectDatepicker: function (a, b) {
      var c = d(a);
      b.append = d([]);
      b.trigger = d([]);
      if (!c.hasClass(this.markerClassName)) {
        this._attachments(c, b);
        c.addClass(this.markerClassName)
          .keydown(this._doKeyDown)
          .keypress(this._doKeyPress)
          .keyup(this._doKeyUp)
          .bind("setData.datepicker", function (e, f, h) {
            b.settings[f] = h;
          })
          .bind("getData.datepicker", function (e, f) {
            return this._get(b, f);
          });
        this._autoSize(b);
        d.data(a, "datepicker", b);
      }
    },
    _attachments: function (a, b) {
      var c = this._get(b, "appendText"),
        e = this._get(b, "isRTL");
      b.append && b.append.remove();
      if (c) {
        b.append = d(
          '<span class="' + this._appendClass + '">' + c + "</span>"
        );
        a[e ? "before" : "after"](b.append);
      }
      a.unbind("focus", this._showDatepicker);
      b.trigger && b.trigger.remove();
      c = this._get(b, "showOn");
      if (c == "focus" || c == "both") a.focus(this._showDatepicker);
      if (c == "button" || c == "both") {
        c = this._get(b, "buttonText");
        var f = this._get(b, "buttonImage");
        b.trigger = d(
          this._get(b, "buttonImageOnly")
            ? d("<img/>")
                .addClass(this._triggerClass)
                .attr({ src: f, alt: c, title: c })
            : d('<button type="button"></button>')
                .addClass(this._triggerClass)
                .html(
                  f == "" ? c : d("<img/>").attr({ src: f, alt: c, title: c })
                )
        );
        a[e ? "before" : "after"](b.trigger);
        b.trigger.click(function () {
          d.datepicker._datepickerShowing && d.datepicker._lastInput == a[0]
            ? d.datepicker._hideDatepicker()
            : d.datepicker._showDatepicker(a[0]);
          return false;
        });
      }
    },
    _autoSize: function (a) {
      if (this._get(a, "autoSize") && !a.inline) {
        var b = new Date(2009, 11, 20),
          c = this._get(a, "dateFormat");
        if (c.match(/[DM]/)) {
          var e = function (f) {
            for (var h = 0, i = 0, g = 0; g < f.length; g++)
              if (f[g].length > h) {
                h = f[g].length;
                i = g;
              }
            return i;
          };
          b.setMonth(
            e(this._get(a, c.match(/MM/) ? "monthNames" : "monthNamesShort"))
          );
          b.setDate(
            e(this._get(a, c.match(/DD/) ? "dayNames" : "dayNamesShort")) +
              20 -
              b.getDay()
          );
        }
        a.input.attr("size", this._formatDate(a, b).length);
      }
    },
    _inlineDatepicker: function (a, b) {
      var c = d(a);
      if (!c.hasClass(this.markerClassName)) {
        c.addClass(this.markerClassName)
          .append(b.dpDiv)
          .bind("setData.datepicker", function (e, f, h) {
            b.settings[f] = h;
          })
          .bind("getData.datepicker", function (e, f) {
            return this._get(b, f);
          });
        d.data(a, "datepicker", b);
        this._setDate(b, this._getDefaultDate(b), true);
        this._updateDatepicker(b);
        this._updateAlternate(b);
      }
    },
    _dialogDatepicker: function (a, b, c, e, f) {
      a = this._dialogInst;
      if (!a) {
        a = "dp" + ++this.uuid;
        this._dialogInput = d(
          '<input type="text" id="' +
            a +
            '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'
        );
        this._dialogInput.keydown(this._doKeyDown);
        d("body").append(this._dialogInput);
        a = this._dialogInst = this._newInst(this._dialogInput, false);
        a.settings = {};
        d.data(this._dialogInput[0], "datepicker", a);
      }
      E(a.settings, e || {});
      b = b && b.constructor == Date ? this._formatDate(a, b) : b;
      this._dialogInput.val(b);
      this._pos = f ? (f.length ? f : [f.pageX, f.pageY]) : null;
      if (!this._pos)
        this._pos = [
          document.documentElement.clientWidth / 2 -
            100 +
            (document.documentElement.scrollLeft || document.body.scrollLeft),
          document.documentElement.clientHeight / 2 -
            150 +
            (document.documentElement.scrollTop || document.body.scrollTop),
        ];
      this._dialogInput
        .css("left", this._pos[0] + 20 + "px")
        .css("top", this._pos[1] + "px");
      a.settings.onSelect = c;
      this._inDialog = true;
      this.dpDiv.addClass(this._dialogClass);
      this._showDatepicker(this._dialogInput[0]);
      d.blockUI && d.blockUI(this.dpDiv);
      d.data(this._dialogInput[0], "datepicker", a);
      return this;
    },
    _destroyDatepicker: function (a) {
      var b = d(a),
        c = d.data(a, "datepicker");
      if (b.hasClass(this.markerClassName)) {
        var e = a.nodeName.toLowerCase();
        d.removeData(a, "datepicker");
        if (e == "input") {
          c.append.remove();
          c.trigger.remove();
          b.removeClass(this.markerClassName)
            .unbind("focus", this._showDatepicker)
            .unbind("keydown", this._doKeyDown)
            .unbind("keypress", this._doKeyPress)
            .unbind("keyup", this._doKeyUp);
        } else if (e == "div" || e == "span")
          b.removeClass(this.markerClassName).empty();
      }
    },
    _enableDatepicker: function (a) {
      var b = d(a),
        c = d.data(a, "datepicker");
      if (b.hasClass(this.markerClassName)) {
        var e = a.nodeName.toLowerCase();
        if (e == "input") {
          a.disabled = false;
          c.trigger
            .filter("button")
            .each(function () {
              this.disabled = false;
            })
            .end()
            .filter("img")
            .css({ opacity: "1.0", cursor: "" });
        } else if (e == "div" || e == "span")
          b.children("." + this._inlineClass)
            .children()
            .removeClass("ui-state-disabled");
        this._disabledInputs = d.map(this._disabledInputs, function (f) {
          return f == a ? null : f;
        });
      }
    },
    _disableDatepicker: function (a) {
      var b = d(a),
        c = d.data(a, "datepicker");
      if (b.hasClass(this.markerClassName)) {
        var e = a.nodeName.toLowerCase();
        if (e == "input") {
          a.disabled = true;
          c.trigger
            .filter("button")
            .each(function () {
              this.disabled = true;
            })
            .end()
            .filter("img")
            .css({ opacity: "0.5", cursor: "default" });
        } else if (e == "div" || e == "span")
          b.children("." + this._inlineClass)
            .children()
            .addClass("ui-state-disabled");
        this._disabledInputs = d.map(this._disabledInputs, function (f) {
          return f == a ? null : f;
        });
        this._disabledInputs[this._disabledInputs.length] = a;
      }
    },
    _isDisabledDatepicker: function (a) {
      if (!a) return false;
      for (var b = 0; b < this._disabledInputs.length; b++)
        if (this._disabledInputs[b] == a) return true;
      return false;
    },
    _getInst: function (a) {
      try {
        return d.data(a, "datepicker");
      } catch (b) {
        throw "Missing instance data for this datepicker";
      }
    },
    _optionDatepicker: function (a, b, c) {
      var e = this._getInst(a);
      if (arguments.length == 2 && typeof b == "string")
        return b == "defaults"
          ? d.extend({}, d.datepicker._defaults)
          : e
          ? b == "all"
            ? d.extend({}, e.settings)
            : this._get(e, b)
          : null;
      var f = b || {};
      if (typeof b == "string") {
        f = {};
        f[b] = c;
      }
      if (e) {
        this._curInst == e && this._hideDatepicker();
        var h = this._getDateDatepicker(a, true);
        E(e.settings, f);
        this._attachments(d(a), e);
        this._autoSize(e);
        this._setDateDatepicker(a, h);
        this._updateDatepicker(e);
      }
    },
    _changeDatepicker: function (a, b, c) {
      this._optionDatepicker(a, b, c);
    },
    _refreshDatepicker: function (a) {
      (a = this._getInst(a)) && this._updateDatepicker(a);
    },
    _setDateDatepicker: function (a, b) {
      if ((a = this._getInst(a))) {
        this._setDate(a, b);
        this._updateDatepicker(a);
        this._updateAlternate(a);
      }
    },
    _getDateDatepicker: function (a, b) {
      (a = this._getInst(a)) && !a.inline && this._setDateFromField(a, b);
      return a ? this._getDate(a) : null;
    },
    _doKeyDown: function (a) {
      var b = d.datepicker._getInst(a.target),
        c = true,
        e = b.dpDiv.is(".ui-datepicker-rtl");
      b._keyEvent = true;
      if (d.datepicker._datepickerShowing)
        switch (a.keyCode) {
          case 9:
            d.datepicker._hideDatepicker();
            c = false;
            break;
          case 13:
            c = d("td." + d.datepicker._dayOverClass, b.dpDiv).add(
              d("td." + d.datepicker._currentClass, b.dpDiv)
            );
            c[0]
              ? d.datepicker._selectDay(
                  a.target,
                  b.selectedMonth,
                  b.selectedYear,
                  c[0]
                )
              : d.datepicker._hideDatepicker();
            return false;
          case 27:
            d.datepicker._hideDatepicker();
            break;
          case 33:
            d.datepicker._adjustDate(
              a.target,
              a.ctrlKey
                ? -d.datepicker._get(b, "stepBigMonths")
                : -d.datepicker._get(b, "stepMonths"),
              "M"
            );
            break;
          case 34:
            d.datepicker._adjustDate(
              a.target,
              a.ctrlKey
                ? +d.datepicker._get(b, "stepBigMonths")
                : +d.datepicker._get(b, "stepMonths"),
              "M"
            );
            break;
          case 35:
            if (a.ctrlKey || a.metaKey) d.datepicker._clearDate(a.target);
            c = a.ctrlKey || a.metaKey;
            break;
          case 36:
            if (a.ctrlKey || a.metaKey) d.datepicker._gotoToday(a.target);
            c = a.ctrlKey || a.metaKey;
            break;
          case 37:
            if (a.ctrlKey || a.metaKey)
              d.datepicker._adjustDate(a.target, e ? +1 : -1, "D");
            c = a.ctrlKey || a.metaKey;
            if (a.originalEvent.altKey)
              d.datepicker._adjustDate(
                a.target,
                a.ctrlKey
                  ? -d.datepicker._get(b, "stepBigMonths")
                  : -d.datepicker._get(b, "stepMonths"),
                "M"
              );
            break;
          case 38:
            if (a.ctrlKey || a.metaKey)
              d.datepicker._adjustDate(a.target, -7, "D");
            c = a.ctrlKey || a.metaKey;
            break;
          case 39:
            if (a.ctrlKey || a.metaKey)
              d.datepicker._adjustDate(a.target, e ? -1 : +1, "D");
            c = a.ctrlKey || a.metaKey;
            if (a.originalEvent.altKey)
              d.datepicker._adjustDate(
                a.target,
                a.ctrlKey
                  ? +d.datepicker._get(b, "stepBigMonths")
                  : +d.datepicker._get(b, "stepMonths"),
                "M"
              );
            break;
          case 40:
            if (a.ctrlKey || a.metaKey)
              d.datepicker._adjustDate(a.target, +7, "D");
            c = a.ctrlKey || a.metaKey;
            break;
          default:
            c = false;
        }
      else if (a.keyCode == 36 && a.ctrlKey) d.datepicker._showDatepicker(this);
      else c = false;
      if (c) {
        a.preventDefault();
        a.stopPropagation();
      }
    },
    _doKeyPress: function (a) {
      var b = d.datepicker._getInst(a.target);
      if (d.datepicker._get(b, "constrainInput")) {
        b = d.datepicker._possibleChars(d.datepicker._get(b, "dateFormat"));
        var c = String.fromCharCode(
          a.charCode == undefined ? a.keyCode : a.charCode
        );
        return a.ctrlKey || c < " " || !b || b.indexOf(c) > -1;
      }
    },
    _doKeyUp: function (a) {
      a = d.datepicker._getInst(a.target);
      if (a.input.val() != a.lastVal)
        try {
          if (
            d.datepicker.parseDate(
              d.datepicker._get(a, "dateFormat"),
              a.input ? a.input.val() : null,
              d.datepicker._getFormatConfig(a)
            )
          ) {
            d.datepicker._setDateFromField(a);
            d.datepicker._updateAlternate(a);
            d.datepicker._updateDatepicker(a);
          }
        } catch (b) {
          d.datepicker.log(b);
        }
      return true;
    },
    _showDatepicker: function (a) {
      a = a.target || a;
      if (a.nodeName.toLowerCase() != "input") a = d("input", a.parentNode)[0];
      if (
        !(d.datepicker._isDisabledDatepicker(a) || d.datepicker._lastInput == a)
      ) {
        var b = d.datepicker._getInst(a);
        d.datepicker._curInst &&
          d.datepicker._curInst != b &&
          d.datepicker._curInst.dpDiv.stop(true, true);
        var c = d.datepicker._get(b, "beforeShow");
        E(b.settings, c ? c.apply(a, [a, b]) : {});
        b.lastVal = null;
        d.datepicker._lastInput = a;
        d.datepicker._setDateFromField(b);
        if (d.datepicker._inDialog) a.value = "";
        if (!d.datepicker._pos) {
          d.datepicker._pos = d.datepicker._findPos(a);
          d.datepicker._pos[1] += a.offsetHeight;
        }
        var e = false;
        d(a)
          .parents()
          .each(function () {
            e |= d(this).css("position") == "fixed";
            return !e;
          });
        if (e && d.browser.opera) {
          d.datepicker._pos[0] -= document.documentElement.scrollLeft;
          d.datepicker._pos[1] -= document.documentElement.scrollTop;
        }
        c = { left: d.datepicker._pos[0], top: d.datepicker._pos[1] };
        d.datepicker._pos = null;
        b.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" });
        d.datepicker._updateDatepicker(b);
        c = d.datepicker._checkOffset(b, c, e);
        b.dpDiv.css({
          position:
            d.datepicker._inDialog && d.blockUI
              ? "static"
              : e
              ? "fixed"
              : "absolute",
          display: "none",
          left: c.left + "px",
          top: c.top + "px",
        });
        if (!b.inline) {
          c = d.datepicker._get(b, "showAnim");
          var f = d.datepicker._get(b, "duration"),
            h = function () {
              d.datepicker._datepickerShowing = true;
              var i = d.datepicker._getBorders(b.dpDiv);
              b.dpDiv
                .find("iframe.ui-datepicker-cover")
                .css({
                  left: -i[0],
                  top: -i[1],
                  width: b.dpDiv.outerWidth(),
                  height: b.dpDiv.outerHeight(),
                });
            };
          b.dpDiv.zIndex(d(a).zIndex() + 1);
          d.effects && d.effects[c]
            ? b.dpDiv.show(c, d.datepicker._get(b, "showOptions"), f, h)
            : b.dpDiv[c || "show"](c ? f : null, h);
          if (!c || !f) h();
          b.input.is(":visible") && !b.input.is(":disabled") && b.input.focus();
          d.datepicker._curInst = b;
        }
      }
    },
    _updateDatepicker: function (a) {
      var b = this,
        c = d.datepicker._getBorders(a.dpDiv);
      a.dpDiv
        .empty()
        .append(this._generateHTML(a))
        .find("iframe.ui-datepicker-cover")
        .css({
          left: -c[0],
          top: -c[1],
          width: a.dpDiv.outerWidth(),
          height: a.dpDiv.outerHeight(),
        })
        .end()
        .find(
          "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"
        )
        .bind("mouseout", function () {
          d(this).removeClass("ui-state-hover");
          this.className.indexOf("ui-datepicker-prev") != -1 &&
            d(this).removeClass("ui-datepicker-prev-hover");
          this.className.indexOf("ui-datepicker-next") != -1 &&
            d(this).removeClass("ui-datepicker-next-hover");
        })
        .bind("mouseover", function () {
          if (
            !b._isDisabledDatepicker(
              a.inline ? a.dpDiv.parent()[0] : a.input[0]
            )
          ) {
            d(this)
              .parents(".ui-datepicker-calendar")
              .find("a")
              .removeClass("ui-state-hover");
            d(this).addClass("ui-state-hover");
            this.className.indexOf("ui-datepicker-prev") != -1 &&
              d(this).addClass("ui-datepicker-prev-hover");
            this.className.indexOf("ui-datepicker-next") != -1 &&
              d(this).addClass("ui-datepicker-next-hover");
          }
        })
        .end()
        .find("." + this._dayOverClass + " a")
        .trigger("mouseover")
        .end();
      c = this._getNumberOfMonths(a);
      var e = c[1];
      e > 1
        ? a.dpDiv
            .addClass("ui-datepicker-multi-" + e)
            .css("width", 17 * e + "em")
        : a.dpDiv
            .removeClass(
              "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
            )
            .width("");
      a.dpDiv[(c[0] != 1 || c[1] != 1 ? "add" : "remove") + "Class"](
        "ui-datepicker-multi"
      );
      a.dpDiv[(this._get(a, "isRTL") ? "add" : "remove") + "Class"](
        "ui-datepicker-rtl"
      );
      a == d.datepicker._curInst &&
        d.datepicker._datepickerShowing &&
        a.input &&
        a.input.is(":visible") &&
        !a.input.is(":disabled") &&
        a.input.focus();
    },
    _getBorders: function (a) {
      var b = function (c) {
        return { thin: 1, medium: 2, thick: 3 }[c] || c;
      };
      return [
        parseFloat(b(a.css("border-left-width"))),
        parseFloat(b(a.css("border-top-width"))),
      ];
    },
    _checkOffset: function (a, b, c) {
      var e = a.dpDiv.outerWidth(),
        f = a.dpDiv.outerHeight(),
        h = a.input ? a.input.outerWidth() : 0,
        i = a.input ? a.input.outerHeight() : 0,
        g = document.documentElement.clientWidth + d(document).scrollLeft(),
        k = document.documentElement.clientHeight + d(document).scrollTop();
      b.left -= this._get(a, "isRTL") ? e - h : 0;
      b.left -=
        c && b.left == a.input.offset().left ? d(document).scrollLeft() : 0;
      b.top -=
        c && b.top == a.input.offset().top + i ? d(document).scrollTop() : 0;
      b.left -= Math.min(
        b.left,
        b.left + e > g && g > e ? Math.abs(b.left + e - g) : 0
      );
      b.top -= Math.min(b.top, b.top + f > k && k > f ? Math.abs(f + i) : 0);
      return b;
    },
    _findPos: function (a) {
      for (
        var b = this._get(this._getInst(a), "isRTL");
        a && (a.type == "hidden" || a.nodeType != 1);

      )
        a = a[b ? "previousSibling" : "nextSibling"];
      a = d(a).offset();
      return [a.left, a.top];
    },
    _hideDatepicker: function (a) {
      var b = this._curInst;
      if (!(!b || (a && b != d.data(a, "datepicker"))))
        if (this._datepickerShowing) {
          a = this._get(b, "showAnim");
          var c = this._get(b, "duration"),
            e = function () {
              d.datepicker._tidyDialog(b);
              this._curInst = null;
            };
          d.effects && d.effects[a]
            ? b.dpDiv.hide(a, d.datepicker._get(b, "showOptions"), c, e)
            : b.dpDiv[
                a == "slideDown"
                  ? "slideUp"
                  : a == "fadeIn"
                  ? "fadeOut"
                  : "hide"
              ](a ? c : null, e);
          a || e();
          if ((a = this._get(b, "onClose")))
            a.apply(b.input ? b.input[0] : null, [
              b.input ? b.input.val() : "",
              b,
            ]);
          this._datepickerShowing = false;
          this._lastInput = null;
          if (this._inDialog) {
            this._dialogInput.css({
              position: "absolute",
              left: "0",
              top: "-100px",
            });
            if (d.blockUI) {
              d.unblockUI();
              d("body").append(this.dpDiv);
            }
          }
          this._inDialog = false;
        }
    },
    _tidyDialog: function (a) {
      a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
    },
    _checkExternalClick: function (a) {
      if (d.datepicker._curInst) {
        a = d(a.target);
        a[0].id != d.datepicker._mainDivId &&
          a.parents("#" + d.datepicker._mainDivId).length == 0 &&
          !a.hasClass(d.datepicker.markerClassName) &&
          !a.hasClass(d.datepicker._triggerClass) &&
          d.datepicker._datepickerShowing &&
          !(d.datepicker._inDialog && d.blockUI) &&
          d.datepicker._hideDatepicker();
      }
    },
    _adjustDate: function (a, b, c) {
      a = d(a);
      var e = this._getInst(a[0]);
      if (!this._isDisabledDatepicker(a[0])) {
        this._adjustInstDate(
          e,
          b + (c == "M" ? this._get(e, "showCurrentAtPos") : 0),
          c
        );
        this._updateDatepicker(e);
      }
    },
    _gotoToday: function (a) {
      a = d(a);
      var b = this._getInst(a[0]);
      if (this._get(b, "gotoCurrent") && b.currentDay) {
        b.selectedDay = b.currentDay;
        b.drawMonth = b.selectedMonth = b.currentMonth;
        b.drawYear = b.selectedYear = b.currentYear;
      } else {
        var c = new Date();
        b.selectedDay = c.getDate();
        b.drawMonth = b.selectedMonth = c.getMonth();
        b.drawYear = b.selectedYear = c.getFullYear();
      }
      this._notifyChange(b);
      this._adjustDate(a);
    },
    _selectMonthYear: function (a, b, c) {
      a = d(a);
      var e = this._getInst(a[0]);
      e._selectingMonthYear = false;
      e["selected" + (c == "M" ? "Month" : "Year")] = e[
        "draw" + (c == "M" ? "Month" : "Year")
      ] = parseInt(b.options[b.selectedIndex].value, 10);
      this._notifyChange(e);
      this._adjustDate(a);
    },
    _clickMonthYear: function (a) {
      a = this._getInst(d(a)[0]);
      a.input && a._selectingMonthYear && !d.browser.msie && a.input.focus();
      a._selectingMonthYear = !a._selectingMonthYear;
    },
    _selectDay: function (a, b, c, e) {
      var f = d(a);
      if (
        !(
          d(e).hasClass(this._unselectableClass) ||
          this._isDisabledDatepicker(f[0])
        )
      ) {
        f = this._getInst(f[0]);
        f.selectedDay = f.currentDay = d("a", e).html();
        f.selectedMonth = f.currentMonth = b;
        f.selectedYear = f.currentYear = c;
        this._selectDate(
          a,
          this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)
        );
      }
    },
    _clearDate: function (a) {
      a = d(a);
      this._getInst(a[0]);
      this._selectDate(a, "");
    },
    _selectDate: function (a, b) {
      a = this._getInst(d(a)[0]);
      b = b != null ? b : this._formatDate(a);
      a.input && a.input.val(b);
      this._updateAlternate(a);
      var c = this._get(a, "onSelect");
      if (c) c.apply(a.input ? a.input[0] : null, [b, a]);
      else a.input && a.input.trigger("change");
      if (a.inline) this._updateDatepicker(a);
      else {
        this._hideDatepicker();
        this._lastInput = a.input[0];
        typeof a.input[0] != "object" && a.input.focus();
        this._lastInput = null;
      }
    },
    _updateAlternate: function (a) {
      var b = this._get(a, "altField");
      if (b) {
        var c = this._get(a, "altFormat") || this._get(a, "dateFormat"),
          e = this._getDate(a),
          f = this.formatDate(c, e, this._getFormatConfig(a));
        d(b).each(function () {
          d(this).val(f);
        });
      }
    },
    noWeekends: function (a) {
      a = a.getDay();
      return [a > 0 && a < 6, ""];
    },
    iso8601Week: function (a) {
      a = new Date(a.getTime());
      a.setDate(a.getDate() + 4 - (a.getDay() || 7));
      var b = a.getTime();
      a.setMonth(0);
      a.setDate(1);
      return Math.floor(Math.round((b - a) / 864e5) / 7) + 1;
    },
    parseDate: function (a, b, c) {
      if (a == null || b == null) throw "Invalid arguments";
      b = typeof b == "object" ? b.toString() : b + "";
      if (b == "") return null;
      for (
        var e =
            (c ? c.shortYearCutoff : null) || this._defaults.shortYearCutoff,
          f = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
          h = (c ? c.dayNames : null) || this._defaults.dayNames,
          i = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
          g = (c ? c.monthNames : null) || this._defaults.monthNames,
          k = (c = -1),
          l = -1,
          u = -1,
          j = false,
          o = function (p) {
            (p = z + 1 < a.length && a.charAt(z + 1) == p) && z++;
            return p;
          },
          m = function (p) {
            o(p);
            p = new RegExp(
              "^\\d{1," +
                (p == "@"
                  ? 14
                  : p == "!"
                  ? 20
                  : p == "y"
                  ? 4
                  : p == "o"
                  ? 3
                  : 2) +
                "}"
            );
            p = b.substring(s).match(p);
            if (!p) throw "Missing number at position " + s;
            s += p[0].length;
            return parseInt(p[0], 10);
          },
          n = function (p, w, G) {
            p = o(p) ? G : w;
            for (w = 0; w < p.length; w++)
              if (b.substr(s, p[w].length) == p[w]) {
                s += p[w].length;
                return w + 1;
              }
            throw "Unknown name at position " + s;
          },
          r = function () {
            if (b.charAt(s) != a.charAt(z))
              throw "Unexpected literal at position " + s;
            s++;
          },
          s = 0,
          z = 0;
        z < a.length;
        z++
      )
        if (j)
          if (a.charAt(z) == "'" && !o("'")) j = false;
          else r();
        else
          switch (a.charAt(z)) {
            case "d":
              l = m("d");
              break;
            case "D":
              n("D", f, h);
              break;
            case "o":
              u = m("o");
              break;
            case "m":
              k = m("m");
              break;
            case "M":
              k = n("M", i, g);
              break;
            case "y":
              c = m("y");
              break;
            case "@":
              var v = new Date(m("@"));
              c = v.getFullYear();
              k = v.getMonth() + 1;
              l = v.getDate();
              break;
            case "!":
              v = new Date((m("!") - this._ticksTo1970) / 1e4);
              c = v.getFullYear();
              k = v.getMonth() + 1;
              l = v.getDate();
              break;
            case "'":
              if (o("'")) r();
              else j = true;
              break;
            default:
              r();
          }
      if (c == -1) c = new Date().getFullYear();
      else if (c < 100)
        c +=
          new Date().getFullYear() -
          (new Date().getFullYear() % 100) +
          (c <= e ? 0 : -100);
      if (u > -1) {
        k = 1;
        l = u;
        do {
          e = this._getDaysInMonth(c, k - 1);
          if (l <= e) break;
          k++;
          l -= e;
        } while (1);
      }
      v = this._daylightSavingAdjust(new Date(c, k - 1, l));
      if (v.getFullYear() != c || v.getMonth() + 1 != k || v.getDate() != l)
        throw "Invalid date";
      return v;
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970:
      (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) *
      24 *
      60 *
      60 *
      1e7,
    formatDate: function (a, b, c) {
      if (!b) return "";
      var e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
        f = (c ? c.dayNames : null) || this._defaults.dayNames,
        h = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort;
      c = (c ? c.monthNames : null) || this._defaults.monthNames;
      var i = function (o) {
          (o = j + 1 < a.length && a.charAt(j + 1) == o) && j++;
          return o;
        },
        g = function (o, m, n) {
          m = "" + m;
          if (i(o)) for (; m.length < n; ) m = "0" + m;
          return m;
        },
        k = function (o, m, n, r) {
          return i(o) ? r[m] : n[m];
        },
        l = "",
        u = false;
      if (b)
        for (var j = 0; j < a.length; j++)
          if (u)
            if (a.charAt(j) == "'" && !i("'")) u = false;
            else l += a.charAt(j);
          else
            switch (a.charAt(j)) {
              case "d":
                l += g("d", b.getDate(), 2);
                break;
              case "D":
                l += k("D", b.getDay(), e, f);
                break;
              case "o":
                l += g(
                  "o",
                  (b.getTime() - new Date(b.getFullYear(), 0, 0).getTime()) /
                    864e5,
                  3
                );
                break;
              case "m":
                l += g("m", b.getMonth() + 1, 2);
                break;
              case "M":
                l += k("M", b.getMonth(), h, c);
                break;
              case "y":
                l += i("y")
                  ? b.getFullYear()
                  : (b.getYear() % 100 < 10 ? "0" : "") + (b.getYear() % 100);
                break;
              case "@":
                l += b.getTime();
                break;
              case "!":
                l += b.getTime() * 1e4 + this._ticksTo1970;
                break;
              case "'":
                if (i("'")) l += "'";
                else u = true;
                break;
              default:
                l += a.charAt(j);
            }
      return l;
    },
    _possibleChars: function (a) {
      for (
        var b = "",
          c = false,
          e = function (h) {
            (h = f + 1 < a.length && a.charAt(f + 1) == h) && f++;
            return h;
          },
          f = 0;
        f < a.length;
        f++
      )
        if (c)
          if (a.charAt(f) == "'" && !e("'")) c = false;
          else b += a.charAt(f);
        else
          switch (a.charAt(f)) {
            case "d":
            case "m":
            case "y":
            case "@":
              b += "0123456789";
              break;
            case "D":
            case "M":
              return null;
            case "'":
              if (e("'")) b += "'";
              else c = true;
              break;
            default:
              b += a.charAt(f);
          }
      return b;
    },
    _get: function (a, b) {
      return a.settings[b] !== undefined ? a.settings[b] : this._defaults[b];
    },
    _setDateFromField: function (a, b) {
      if (a.input.val() != a.lastVal) {
        var c = this._get(a, "dateFormat"),
          e = (a.lastVal = a.input ? a.input.val() : null),
          f,
          h;
        f = h = this._getDefaultDate(a);
        var i = this._getFormatConfig(a);
        try {
          f = this.parseDate(c, e, i) || h;
        } catch (g) {
          this.log(g);
          e = b ? "" : e;
        }
        a.selectedDay = f.getDate();
        a.drawMonth = a.selectedMonth = f.getMonth();
        a.drawYear = a.selectedYear = f.getFullYear();
        a.currentDay = e ? f.getDate() : 0;
        a.currentMonth = e ? f.getMonth() : 0;
        a.currentYear = e ? f.getFullYear() : 0;
        this._adjustInstDate(a);
      }
    },
    _getDefaultDate: function (a) {
      return this._restrictMinMax(
        a,
        this._determineDate(a, this._get(a, "defaultDate"), new Date())
      );
    },
    _determineDate: function (a, b, c) {
      var e = function (h) {
          var i = new Date();
          i.setDate(i.getDate() + h);
          return i;
        },
        f = function (h) {
          try {
            return d.datepicker.parseDate(
              d.datepicker._get(a, "dateFormat"),
              h,
              d.datepicker._getFormatConfig(a)
            );
          } catch (i) {}
          var g =
              (h.toLowerCase().match(/^c/) ? d.datepicker._getDate(a) : null) ||
              new Date(),
            k = g.getFullYear(),
            l = g.getMonth();
          g = g.getDate();
          for (
            var u = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, j = u.exec(h);
            j;

          ) {
            switch (j[2] || "d") {
              case "d":
              case "D":
                g += parseInt(j[1], 10);
                break;
              case "w":
              case "W":
                g += parseInt(j[1], 10) * 7;
                break;
              case "m":
              case "M":
                l += parseInt(j[1], 10);
                g = Math.min(g, d.datepicker._getDaysInMonth(k, l));
                break;
              case "y":
              case "Y":
                k += parseInt(j[1], 10);
                g = Math.min(g, d.datepicker._getDaysInMonth(k, l));
                break;
            }
            j = u.exec(h);
          }
          return new Date(k, l, g);
        };
      if (
        (b =
          (b =
            b == null
              ? c
              : typeof b == "string"
              ? f(b)
              : typeof b == "number"
              ? isNaN(b)
                ? c
                : e(b)
              : b) && b.toString() == "Invalid Date"
            ? c
            : b)
      ) {
        b.setHours(0);
        b.setMinutes(0);
        b.setSeconds(0);
        b.setMilliseconds(0);
      }
      return this._daylightSavingAdjust(b);
    },
    _daylightSavingAdjust: function (a) {
      if (!a) return null;
      a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0);
      return a;
    },
    _setDate: function (a, b, c) {
      var e = !b,
        f = a.selectedMonth,
        h = a.selectedYear;
      b = this._restrictMinMax(a, this._determineDate(a, b, new Date()));
      a.selectedDay = a.currentDay = b.getDate();
      a.drawMonth = a.selectedMonth = a.currentMonth = b.getMonth();
      a.drawYear = a.selectedYear = a.currentYear = b.getFullYear();
      if ((f != a.selectedMonth || h != a.selectedYear) && !c)
        this._notifyChange(a);
      this._adjustInstDate(a);
      if (a.input) a.input.val(e ? "" : this._formatDate(a));
    },
    _getDate: function (a) {
      return !a.currentYear || (a.input && a.input.val() == "")
        ? null
        : this._daylightSavingAdjust(
            new Date(a.currentYear, a.currentMonth, a.currentDay)
          );
    },
    _generateHTML: function (a) {
      var b = new Date();
      b = this._daylightSavingAdjust(
        new Date(b.getFullYear(), b.getMonth(), b.getDate())
      );
      var c = this._get(a, "isRTL"),
        e = this._get(a, "showButtonPanel"),
        f = this._get(a, "hideIfNoPrevNext"),
        h = this._get(a, "navigationAsDateFormat"),
        i = this._getNumberOfMonths(a),
        g = this._get(a, "showCurrentAtPos"),
        k = this._get(a, "stepMonths"),
        l = i[0] != 1 || i[1] != 1,
        u = this._daylightSavingAdjust(
          !a.currentDay
            ? new Date(9999, 9, 9)
            : new Date(a.currentYear, a.currentMonth, a.currentDay)
        ),
        j = this._getMinMaxDate(a, "min"),
        o = this._getMinMaxDate(a, "max");
      g = a.drawMonth - g;
      var m = a.drawYear;
      if (g < 0) {
        g += 12;
        m--;
      }
      if (o) {
        var n = this._daylightSavingAdjust(
          new Date(o.getFullYear(), o.getMonth() - i[0] * i[1] + 1, o.getDate())
        );
        for (
          n = j && n < j ? j : n;
          this._daylightSavingAdjust(new Date(m, g, 1)) > n;

        ) {
          g--;
          if (g < 0) {
            g = 11;
            m--;
          }
        }
      }
      a.drawMonth = g;
      a.drawYear = m;
      n = this._get(a, "prevText");
      n = !h
        ? n
        : this.formatDate(
            n,
            this._daylightSavingAdjust(new Date(m, g - k, 1)),
            this._getFormatConfig(a)
          );
      n = this._canAdjustMonth(a, -1, m, g)
        ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' +
          y +
          ".datepicker._adjustDate('#" +
          a.id +
          "', -" +
          k +
          ", 'M');\" title=\"" +
          n +
          '"><span class="ui-icon ui-icon-circle-triangle-' +
          (c ? "e" : "w") +
          '">' +
          n +
          "</span></a>"
        : f
        ? ""
        : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' +
          n +
          '"><span class="ui-icon ui-icon-circle-triangle-' +
          (c ? "e" : "w") +
          '">' +
          n +
          "</span></a>";
      var r = this._get(a, "nextText");
      r = !h
        ? r
        : this.formatDate(
            r,
            this._daylightSavingAdjust(new Date(m, g + k, 1)),
            this._getFormatConfig(a)
          );
      f = this._canAdjustMonth(a, +1, m, g)
        ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' +
          y +
          ".datepicker._adjustDate('#" +
          a.id +
          "', +" +
          k +
          ", 'M');\" title=\"" +
          r +
          '"><span class="ui-icon ui-icon-circle-triangle-' +
          (c ? "w" : "e") +
          '">' +
          r +
          "</span></a>"
        : f
        ? ""
        : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' +
          r +
          '"><span class="ui-icon ui-icon-circle-triangle-' +
          (c ? "w" : "e") +
          '">' +
          r +
          "</span></a>";
      k = this._get(a, "currentText");
      r = this._get(a, "gotoCurrent") && a.currentDay ? u : b;
      k = !h ? k : this.formatDate(k, r, this._getFormatConfig(a));
      h = !a.inline
        ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' +
          y +
          '.datepicker._hideDatepicker();">' +
          this._get(a, "closeText") +
          "</button>"
        : "";
      e = e
        ? '<div class="ui-datepicker-buttonpane ui-widget-content">' +
          (c ? h : "") +
          (this._isInRange(a, r)
            ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' +
              y +
              ".datepicker._gotoToday('#" +
              a.id +
              "');\">" +
              k +
              "</button>"
            : "") +
          (c ? "" : h) +
          "</div>"
        : "";
      h = parseInt(this._get(a, "firstDay"), 10);
      h = isNaN(h) ? 0 : h;
      k = this._get(a, "showWeek");
      r = this._get(a, "dayNames");
      this._get(a, "dayNamesShort");
      var s = this._get(a, "dayNamesMin"),
        z = this._get(a, "monthNames"),
        v = this._get(a, "monthNamesShort"),
        p = this._get(a, "beforeShowDay"),
        w = this._get(a, "showOtherMonths"),
        G = this._get(a, "selectOtherMonths");
      this._get(a, "calculateWeek");
      for (var K = this._getDefaultDate(a), H = "", C = 0; C < i[0]; C++) {
        for (var L = "", D = 0; D < i[1]; D++) {
          var M = this._daylightSavingAdjust(new Date(m, g, a.selectedDay)),
            t = " ui-corner-all",
            x = "";
          if (l) {
            x += '<div class="ui-datepicker-group';
            if (i[1] > 1)
              switch (D) {
                case 0:
                  x += " ui-datepicker-group-first";
                  t = " ui-corner-" + (c ? "right" : "left");
                  break;
                case i[1] - 1:
                  x += " ui-datepicker-group-last";
                  t = " ui-corner-" + (c ? "left" : "right");
                  break;
                default:
                  x += " ui-datepicker-group-middle";
                  t = "";
                  break;
              }
            x += '">';
          }
          x +=
            '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' +
            t +
            '">' +
            (/all|left/.test(t) && C == 0 ? (c ? f : n) : "") +
            (/all|right/.test(t) && C == 0 ? (c ? n : f) : "") +
            this._generateMonthYearHeader(a, g, m, j, o, C > 0 || D > 0, z, v) +
            '</div><table class="ui-datepicker-calendar"><thead><tr>';
          var A = k
            ? '<th class="ui-datepicker-week-col">' +
              this._get(a, "weekHeader") +
              "</th>"
            : "";
          for (t = 0; t < 7; t++) {
            var q = (t + h) % 7;
            A +=
              "<th" +
              ((t + h + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") +
              '><span title="' +
              r[q] +
              '">' +
              s[q] +
              "</span></th>";
          }
          x += A + "</tr></thead><tbody>";
          A = this._getDaysInMonth(m, g);
          if (m == a.selectedYear && g == a.selectedMonth)
            a.selectedDay = Math.min(a.selectedDay, A);
          t = (this._getFirstDayOfMonth(m, g) - h + 7) % 7;
          A = l ? 6 : Math.ceil((t + A) / 7);
          q = this._daylightSavingAdjust(new Date(m, g, 1 - t));
          for (var N = 0; N < A; N++) {
            x += "<tr>";
            var O = !k
              ? ""
              : '<td class="ui-datepicker-week-col">' +
                this._get(a, "calculateWeek")(q) +
                "</td>";
            for (t = 0; t < 7; t++) {
              var F = p
                  ? p.apply(a.input ? a.input[0] : null, [q])
                  : [true, ""],
                B = q.getMonth() != g,
                I = (B && !G) || !F[0] || (j && q < j) || (o && q > o);
              O +=
                '<td class="' +
                ((t + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") +
                (B ? " ui-datepicker-other-month" : "") +
                ((q.getTime() == M.getTime() &&
                  g == a.selectedMonth &&
                  a._keyEvent) ||
                (K.getTime() == q.getTime() && K.getTime() == M.getTime())
                  ? " " + this._dayOverClass
                  : "") +
                (I
                  ? " " + this._unselectableClass + " ui-state-disabled"
                  : "") +
                (B && !w
                  ? ""
                  : " " +
                    F[1] +
                    (q.getTime() == u.getTime()
                      ? " " + this._currentClass
                      : "") +
                    (q.getTime() == b.getTime()
                      ? " ui-datepicker-today"
                      : "")) +
                '"' +
                ((!B || w) && F[2] ? ' title="' + F[2] + '"' : "") +
                (I
                  ? ""
                  : ' onclick="DP_jQuery_' +
                    y +
                    ".datepicker._selectDay('#" +
                    a.id +
                    "'," +
                    q.getMonth() +
                    "," +
                    q.getFullYear() +
                    ', this);return false;"') +
                ">" +
                (B && !w
                  ? "&#xa0;"
                  : I
                  ? '<span class="ui-state-default">' + q.getDate() + "</span>"
                  : '<a class="ui-state-default' +
                    (q.getTime() == b.getTime() ? " ui-state-highlight" : "") +
                    (q.getTime() == u.getTime() ? " ui-state-active" : "") +
                    (B ? " ui-priority-secondary" : "") +
                    '" href="#">' +
                    q.getDate() +
                    "</a>") +
                "</td>";
              q.setDate(q.getDate() + 1);
              q = this._daylightSavingAdjust(q);
            }
            x += O + "</tr>";
          }
          g++;
          if (g > 11) {
            g = 0;
            m++;
          }
          x +=
            "</tbody></table>" +
            (l
              ? "</div>" +
                (i[0] > 0 && D == i[1] - 1
                  ? '<div class="ui-datepicker-row-break"></div>'
                  : "")
              : "");
          L += x;
        }
        H += L;
      }
      H +=
        e +
        (d.browser.msie && parseInt(d.browser.version, 10) < 7 && !a.inline
          ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>'
          : "");
      a._keyEvent = false;
      return H;
    },
    _generateMonthYearHeader: function (a, b, c, e, f, h, i, g) {
      var k = this._get(a, "changeMonth"),
        l = this._get(a, "changeYear"),
        u = this._get(a, "showMonthAfterYear"),
        j = '<div class="ui-datepicker-title">',
        o = "";
      if (h || !k) o += '<span class="ui-datepicker-month">' + i[b] + "</span>";
      else {
        i = e && e.getFullYear() == c;
        var m = f && f.getFullYear() == c;
        o +=
          '<select class="ui-datepicker-month" onchange="DP_jQuery_' +
          y +
          ".datepicker._selectMonthYear('#" +
          a.id +
          "', this, 'M');\" onclick=\"DP_jQuery_" +
          y +
          ".datepicker._clickMonthYear('#" +
          a.id +
          "');\">";
        for (var n = 0; n < 12; n++)
          if ((!i || n >= e.getMonth()) && (!m || n <= f.getMonth()))
            o +=
              '<option value="' +
              n +
              '"' +
              (n == b ? ' selected="selected"' : "") +
              ">" +
              g[n] +
              "</option>";
        o += "</select>";
      }
      u || (j += o + (h || !(k && l) ? "&#xa0;" : ""));
      if (h || !l) j += '<span class="ui-datepicker-year">' + c + "</span>";
      else {
        g = this._get(a, "yearRange").split(":");
        var r = new Date().getFullYear();
        i = function (s) {
          s = s.match(/c[+-].*/)
            ? c + parseInt(s.substring(1), 10)
            : s.match(/[+-].*/)
            ? r + parseInt(s, 10)
            : parseInt(s, 10);
          return isNaN(s) ? r : s;
        };
        b = i(g[0]);
        g = Math.max(b, i(g[1] || ""));
        b = e ? Math.max(b, e.getFullYear()) : b;
        g = f ? Math.min(g, f.getFullYear()) : g;
        for (
          j +=
            '<select class="ui-datepicker-year" onchange="DP_jQuery_' +
            y +
            ".datepicker._selectMonthYear('#" +
            a.id +
            "', this, 'Y');\" onclick=\"DP_jQuery_" +
            y +
            ".datepicker._clickMonthYear('#" +
            a.id +
            "');\">";
          b <= g;
          b++
        )
          j +=
            '<option value="' +
            b +
            '"' +
            (b == c ? ' selected="selected"' : "") +
            ">" +
            b +
            "</option>";
        j += "</select>";
      }
      j += this._get(a, "yearSuffix");
      if (u) j += (h || !(k && l) ? "&#xa0;" : "") + o;
      j += "</div>";
      return j;
    },
    _adjustInstDate: function (a, b, c) {
      var e = a.drawYear + (c == "Y" ? b : 0),
        f = a.drawMonth + (c == "M" ? b : 0);
      b =
        Math.min(a.selectedDay, this._getDaysInMonth(e, f)) +
        (c == "D" ? b : 0);
      e = this._restrictMinMax(
        a,
        this._daylightSavingAdjust(new Date(e, f, b))
      );
      a.selectedDay = e.getDate();
      a.drawMonth = a.selectedMonth = e.getMonth();
      a.drawYear = a.selectedYear = e.getFullYear();
      if (c == "M" || c == "Y") this._notifyChange(a);
    },
    _restrictMinMax: function (a, b) {
      var c = this._getMinMaxDate(a, "min");
      a = this._getMinMaxDate(a, "max");
      b = c && b < c ? c : b;
      return (b = a && b > a ? a : b);
    },
    _notifyChange: function (a) {
      var b = this._get(a, "onChangeMonthYear");
      if (b)
        b.apply(a.input ? a.input[0] : null, [
          a.selectedYear,
          a.selectedMonth + 1,
          a,
        ]);
    },
    _getNumberOfMonths: function (a) {
      a = this._get(a, "numberOfMonths");
      return a == null ? [1, 1] : typeof a == "number" ? [1, a] : a;
    },
    _getMinMaxDate: function (a, b) {
      return this._determineDate(a, this._get(a, b + "Date"), null);
    },
    _getDaysInMonth: function (a, b) {
      return 32 - new Date(a, b, 32).getDate();
    },
    _getFirstDayOfMonth: function (a, b) {
      return new Date(a, b, 1).getDay();
    },
    _canAdjustMonth: function (a, b, c, e) {
      var f = this._getNumberOfMonths(a);
      c = this._daylightSavingAdjust(
        new Date(c, e + (b < 0 ? b : f[0] * f[1]), 1)
      );
      b < 0 && c.setDate(this._getDaysInMonth(c.getFullYear(), c.getMonth()));
      return this._isInRange(a, c);
    },
    _isInRange: function (a, b) {
      var c = this._getMinMaxDate(a, "min");
      a = this._getMinMaxDate(a, "max");
      return (
        (!c || b.getTime() >= c.getTime()) && (!a || b.getTime() <= a.getTime())
      );
    },
    _getFormatConfig: function (a) {
      var b = this._get(a, "shortYearCutoff");
      b =
        typeof b != "string"
          ? b
          : (new Date().getFullYear() % 100) + parseInt(b, 10);
      return {
        shortYearCutoff: b,
        dayNamesShort: this._get(a, "dayNamesShort"),
        dayNames: this._get(a, "dayNames"),
        monthNamesShort: this._get(a, "monthNamesShort"),
        monthNames: this._get(a, "monthNames"),
      };
    },
    _formatDate: function (a, b, c, e) {
      if (!b) {
        a.currentDay = a.selectedDay;
        a.currentMonth = a.selectedMonth;
        a.currentYear = a.selectedYear;
      }
      b = b
        ? typeof b == "object"
          ? b
          : this._daylightSavingAdjust(new Date(e, c, b))
        : this._daylightSavingAdjust(
            new Date(a.currentYear, a.currentMonth, a.currentDay)
          );
      return this.formatDate(
        this._get(a, "dateFormat"),
        b,
        this._getFormatConfig(a)
      );
    },
  });
  d.fn.datepicker = function (a) {
    if (!d.datepicker.initialized) {
      d(document)
        .mousedown(d.datepicker._checkExternalClick)
        .find("body")
        .append(d.datepicker.dpDiv);
      d.datepicker.initialized = true;
    }
    var b = Array.prototype.slice.call(arguments, 1);
    if (
      typeof a == "string" &&
      (a == "isDisabled" || a == "getDate" || a == "widget")
    )
      return d.datepicker["_" + a + "Datepicker"].apply(
        d.datepicker,
        [this[0]].concat(b)
      );
    if (
      a == "option" &&
      arguments.length == 2 &&
      typeof arguments[1] == "string"
    )
      return d.datepicker["_" + a + "Datepicker"].apply(
        d.datepicker,
        [this[0]].concat(b)
      );
    return this.each(function () {
      typeof a == "string"
        ? d.datepicker["_" + a + "Datepicker"].apply(
            d.datepicker,
            [this].concat(b)
          )
        : d.datepicker._attachDatepicker(this, a);
    });
  };
  d.datepicker = new J();
  d.datepicker.initialized = false;
  d.datepicker.uuid = new Date().getTime();
  d.datepicker.version = "1.8.1";
  window["DP_jQuery_" + y] = d;
})(jQuery);
(function (b) {
  b.widget("ui.progressbar", {
    options: { value: 0 },
    _create: function () {
      this.element
        .addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all")
        .attr({
          role: "progressbar",
          "aria-valuemin": this._valueMin(),
          "aria-valuemax": this._valueMax(),
          "aria-valuenow": this._value(),
        });
      this.valueDiv = b(
        "<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>"
      ).appendTo(this.element);
      this._refreshValue();
    },
    destroy: function () {
      this.element
        .removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all")
        .removeAttr("role")
        .removeAttr("aria-valuemin")
        .removeAttr("aria-valuemax")
        .removeAttr("aria-valuenow");
      this.valueDiv.remove();
      b.Widget.prototype.destroy.apply(this, arguments);
    },
    value: function (a) {
      if (a === undefined) return this._value();
      this._setOption("value", a);
      return this;
    },
    _setOption: function (a, c) {
      switch (a) {
        case "value":
          this.options.value = c;
          this._refreshValue();
          this._trigger("change");
          break;
      }
      b.Widget.prototype._setOption.apply(this, arguments);
    },
    _value: function () {
      var a = this.options.value;
      if (typeof a !== "number") a = 0;
      if (a < this._valueMin()) a = this._valueMin();
      if (a > this._valueMax()) a = this._valueMax();
      return a;
    },
    _valueMin: function () {
      return 0;
    },
    _valueMax: function () {
      return 100;
    },
    _refreshValue: function () {
      var a = this.value();
      this.valueDiv[a === this._valueMax() ? "addClass" : "removeClass"](
        "ui-corner-right"
      ).width(a + "%");
      this.element.attr("aria-valuenow", a);
    },
  });
  b.extend(b.ui.progressbar, { version: "1.8.1" });
})(jQuery);
jQuery.effects ||
  (function (f) {
    function k(c) {
      var a;
      if (c && c.constructor == Array && c.length == 3) return c;
      if (
        (a =
          /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(
            c
          ))
      )
        return [parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3], 10)];
      if (
        (a =
          /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(
            c
          ))
      )
        return [
          parseFloat(a[1]) * 2.55,
          parseFloat(a[2]) * 2.55,
          parseFloat(a[3]) * 2.55,
        ];
      if ((a = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c)))
        return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)];
      if ((a = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c)))
        return [
          parseInt(a[1] + a[1], 16),
          parseInt(a[2] + a[2], 16),
          parseInt(a[3] + a[3], 16),
        ];
      if (/rgba\(0, 0, 0, 0\)/.exec(c)) return l.transparent;
      return l[f.trim(c).toLowerCase()];
    }
    function q(c, a) {
      var b;
      do {
        b = f.curCSS(c, a);
        if ((b != "" && b != "transparent") || f.nodeName(c, "body")) break;
        a = "backgroundColor";
      } while ((c = c.parentNode));
      return k(b);
    }
    function m() {
      var c = document.defaultView
          ? document.defaultView.getComputedStyle(this, null)
          : this.currentStyle,
        a = {},
        b,
        d;
      if (c && c.length && c[0] && c[c[0]])
        for (var e = c.length; e--; ) {
          b = c[e];
          if (typeof c[b] == "string") {
            d = b.replace(/\-(\w)/g, function (g, h) {
              return h.toUpperCase();
            });
            a[d] = c[b];
          }
        }
      else for (b in c) if (typeof c[b] === "string") a[b] = c[b];
      return a;
    }
    function n(c) {
      var a, b;
      for (a in c) {
        b = c[a];
        if (
          b == null ||
          f.isFunction(b) ||
          a in r ||
          /scrollbar/.test(a) ||
          (!/color/i.test(a) && isNaN(parseFloat(b)))
        )
          delete c[a];
      }
      return c;
    }
    function s(c, a) {
      var b = { _: 0 },
        d;
      for (d in a) if (c[d] != a[d]) b[d] = a[d];
      return b;
    }
    function j(c, a, b, d) {
      if (typeof c == "object") {
        d = a;
        b = null;
        a = c;
        c = a.effect;
      }
      if (f.isFunction(a)) {
        d = a;
        b = null;
        a = {};
      }
      if (f.isFunction(b)) {
        d = b;
        b = null;
      }
      if (typeof a == "number" || f.fx.speeds[a]) {
        d = b;
        b = a;
        a = {};
      }
      a = a || {};
      b = b || a.duration;
      b = f.fx.off
        ? 0
        : typeof b == "number"
        ? b
        : f.fx.speeds[b] || f.fx.speeds._default;
      d = d || a.complete;
      return [c, a, b, d];
    }
    f.effects = {};
    f.each(
      [
        "backgroundColor",
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor",
        "color",
        "outlineColor",
      ],
      function (c, a) {
        f.fx.step[a] = function (b) {
          if (!b.colorInit) {
            b.start = q(b.elem, a);
            b.end = k(b.end);
            b.colorInit = true;
          }
          b.elem.style[a] =
            "rgb(" +
            Math.max(
              Math.min(
                parseInt(b.pos * (b.end[0] - b.start[0]) + b.start[0], 10),
                255
              ),
              0
            ) +
            "," +
            Math.max(
              Math.min(
                parseInt(b.pos * (b.end[1] - b.start[1]) + b.start[1], 10),
                255
              ),
              0
            ) +
            "," +
            Math.max(
              Math.min(
                parseInt(b.pos * (b.end[2] - b.start[2]) + b.start[2], 10),
                255
              ),
              0
            ) +
            ")";
        };
      }
    );
    var l = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0],
        transparent: [255, 255, 255],
      },
      o = ["add", "remove", "toggle"],
      r = {
        border: 1,
        borderBottom: 1,
        borderColor: 1,
        borderLeft: 1,
        borderRight: 1,
        borderTop: 1,
        borderWidth: 1,
        margin: 1,
        padding: 1,
      };
    f.effects.animateClass = function (c, a, b, d) {
      if (f.isFunction(b)) {
        d = b;
        b = null;
      }
      return this.each(function () {
        var e = f(this),
          g = e.attr("style") || " ",
          h = n(m.call(this)),
          p,
          t = e.attr("className");
        f.each(o, function (u, i) {
          c[i] && e[i + "Class"](c[i]);
        });
        p = n(m.call(this));
        e.attr("className", t);
        e.animate(s(h, p), a, b, function () {
          f.each(o, function (u, i) {
            c[i] && e[i + "Class"](c[i]);
          });
          if (typeof e.attr("style") == "object") {
            e.attr("style").cssText = "";
            e.attr("style").cssText = g;
          } else e.attr("style", g);
          d && d.apply(this, arguments);
        });
      });
    };
    f.fn.extend({
      _addClass: f.fn.addClass,
      addClass: function (c, a, b, d) {
        return a
          ? f.effects.animateClass.apply(this, [{ add: c }, a, b, d])
          : this._addClass(c);
      },
      _removeClass: f.fn.removeClass,
      removeClass: function (c, a, b, d) {
        return a
          ? f.effects.animateClass.apply(this, [{ remove: c }, a, b, d])
          : this._removeClass(c);
      },
      _toggleClass: f.fn.toggleClass,
      toggleClass: function (c, a, b, d, e) {
        return typeof a == "boolean" || a === undefined
          ? b
            ? f.effects.animateClass.apply(this, [
                a ? { add: c } : { remove: c },
                b,
                d,
                e,
              ])
            : this._toggleClass(c, a)
          : f.effects.animateClass.apply(this, [{ toggle: c }, a, b, d]);
      },
      switchClass: function (c, a, b, d, e) {
        return f.effects.animateClass.apply(this, [
          { add: a, remove: c },
          b,
          d,
          e,
        ]);
      },
    });
    f.extend(f.effects, {
      version: "1.8.1",
      save: function (c, a) {
        for (var b = 0; b < a.length; b++)
          a[b] !== null && c.data("ec.storage." + a[b], c[0].style[a[b]]);
      },
      restore: function (c, a) {
        for (var b = 0; b < a.length; b++)
          a[b] !== null && c.css(a[b], c.data("ec.storage." + a[b]));
      },
      setMode: function (c, a) {
        if (a == "toggle") a = c.is(":hidden") ? "show" : "hide";
        return a;
      },
      getBaseline: function (c, a) {
        var b;
        switch (c[0]) {
          case "top":
            b = 0;
            break;
          case "middle":
            b = 0.5;
            break;
          case "bottom":
            b = 1;
            break;
          default:
            b = c[0] / a.height;
        }
        switch (c[1]) {
          case "left":
            c = 0;
            break;
          case "center":
            c = 0.5;
            break;
          case "right":
            c = 1;
            break;
          default:
            c = c[1] / a.width;
        }
        return { x: c, y: b };
      },
      createWrapper: function (c) {
        if (c.parent().is(".ui-effects-wrapper")) return c.parent();
        var a = {
            width: c.outerWidth(true),
            height: c.outerHeight(true),
            float: c.css("float"),
          },
          b = f("<div></div>")
            .addClass("ui-effects-wrapper")
            .css({
              fontSize: "100%",
              background: "transparent",
              border: "none",
              margin: 0,
              padding: 0,
            });
        c.wrap(b);
        b = c.parent();
        if (c.css("position") == "static") {
          b.css({ position: "relative" });
          c.css({ position: "relative" });
        } else {
          f.extend(a, {
            position: c.css("position"),
            zIndex: c.css("z-index"),
          });
          f.each(["top", "left", "bottom", "right"], function (d, e) {
            a[e] = c.css(e);
            if (isNaN(parseInt(a[e], 10))) a[e] = "auto";
          });
          c.css({ position: "relative", top: 0, left: 0 });
        }
        return b.css(a).show();
      },
      removeWrapper: function (c) {
        if (c.parent().is(".ui-effects-wrapper"))
          return c.parent().replaceWith(c);
        return c;
      },
      setTransition: function (c, a, b, d) {
        d = d || {};
        f.each(a, function (e, g) {
          unit = c.cssUnit(g);
          if (unit[0] > 0) d[g] = unit[0] * b + unit[1];
        });
        return d;
      },
    });
    f.fn.extend({
      effect: function (c) {
        var a = j.apply(this, arguments);
        a = { options: a[1], duration: a[2], callback: a[3] };
        var b = f.effects[c];
        return b && !f.fx.off ? b.call(this, a) : this;
      },
      _show: f.fn.show,
      show: function (c) {
        if (!c || typeof c == "number" || f.fx.speeds[c])
          return this._show.apply(this, arguments);
        else {
          var a = j.apply(this, arguments);
          a[1].mode = "show";
          return this.effect.apply(this, a);
        }
      },
      _hide: f.fn.hide,
      hide: function (c) {
        if (!c || typeof c == "number" || f.fx.speeds[c])
          return this._hide.apply(this, arguments);
        else {
          var a = j.apply(this, arguments);
          a[1].mode = "hide";
          return this.effect.apply(this, a);
        }
      },
      __toggle: f.fn.toggle,
      toggle: function (c) {
        if (
          !c ||
          typeof c == "number" ||
          f.fx.speeds[c] ||
          typeof c == "boolean" ||
          f.isFunction(c)
        )
          return this.__toggle.apply(this, arguments);
        else {
          var a = j.apply(this, arguments);
          a[1].mode = "toggle";
          return this.effect.apply(this, a);
        }
      },
      cssUnit: function (c) {
        var a = this.css(c),
          b = [];
        f.each(["em", "px", "%", "pt"], function (d, e) {
          if (a.indexOf(e) > 0) b = [parseFloat(a), e];
        });
        return b;
      },
    });
    f.easing.jswing = f.easing.swing;
    f.extend(f.easing, {
      def: "easeOutQuad",
      swing: function (c, a, b, d, e) {
        return f.easing[f.easing.def](c, a, b, d, e);
      },
      easeInQuad: function (c, a, b, d, e) {
        return d * (a /= e) * a + b;
      },
      easeOutQuad: function (c, a, b, d, e) {
        return -d * (a /= e) * (a - 2) + b;
      },
      easeInOutQuad: function (c, a, b, d, e) {
        if ((a /= e / 2) < 1) return (d / 2) * a * a + b;
        return (-d / 2) * (--a * (a - 2) - 1) + b;
      },
      easeInCubic: function (c, a, b, d, e) {
        return d * (a /= e) * a * a + b;
      },
      easeOutCubic: function (c, a, b, d, e) {
        return d * ((a = a / e - 1) * a * a + 1) + b;
      },
      easeInOutCubic: function (c, a, b, d, e) {
        if ((a /= e / 2) < 1) return (d / 2) * a * a * a + b;
        return (d / 2) * ((a -= 2) * a * a + 2) + b;
      },
      easeInQuart: function (c, a, b, d, e) {
        return d * (a /= e) * a * a * a + b;
      },
      easeOutQuart: function (c, a, b, d, e) {
        return -d * ((a = a / e - 1) * a * a * a - 1) + b;
      },
      easeInOutQuart: function (c, a, b, d, e) {
        if ((a /= e / 2) < 1) return (d / 2) * a * a * a * a + b;
        return (-d / 2) * ((a -= 2) * a * a * a - 2) + b;
      },
      easeInQuint: function (c, a, b, d, e) {
        return d * (a /= e) * a * a * a * a + b;
      },
      easeOutQuint: function (c, a, b, d, e) {
        return d * ((a = a / e - 1) * a * a * a * a + 1) + b;
      },
      easeInOutQuint: function (c, a, b, d, e) {
        if ((a /= e / 2) < 1) return (d / 2) * a * a * a * a * a + b;
        return (d / 2) * ((a -= 2) * a * a * a * a + 2) + b;
      },
      easeInSine: function (c, a, b, d, e) {
        return -d * Math.cos((a / e) * (Math.PI / 2)) + d + b;
      },
      easeOutSine: function (c, a, b, d, e) {
        return d * Math.sin((a / e) * (Math.PI / 2)) + b;
      },
      easeInOutSine: function (c, a, b, d, e) {
        return (-d / 2) * (Math.cos((Math.PI * a) / e) - 1) + b;
      },
      easeInExpo: function (c, a, b, d, e) {
        return a == 0 ? b : d * Math.pow(2, 10 * (a / e - 1)) + b;
      },
      easeOutExpo: function (c, a, b, d, e) {
        return a == e ? b + d : d * (-Math.pow(2, (-10 * a) / e) + 1) + b;
      },
      easeInOutExpo: function (c, a, b, d, e) {
        if (a == 0) return b;
        if (a == e) return b + d;
        if ((a /= e / 2) < 1) return (d / 2) * Math.pow(2, 10 * (a - 1)) + b;
        return (d / 2) * (-Math.pow(2, -10 * --a) + 2) + b;
      },
      easeInCirc: function (c, a, b, d, e) {
        return -d * (Math.sqrt(1 - (a /= e) * a) - 1) + b;
      },
      easeOutCirc: function (c, a, b, d, e) {
        return d * Math.sqrt(1 - (a = a / e - 1) * a) + b;
      },
      easeInOutCirc: function (c, a, b, d, e) {
        if ((a /= e / 2) < 1) return (-d / 2) * (Math.sqrt(1 - a * a) - 1) + b;
        return (d / 2) * (Math.sqrt(1 - (a -= 2) * a) + 1) + b;
      },
      easeInElastic: function (c, a, b, d, e) {
        c = 1.70158;
        var g = 0,
          h = d;
        if (a == 0) return b;
        if ((a /= e) == 1) return b + d;
        g || (g = e * 0.3);
        if (h < Math.abs(d)) {
          h = d;
          c = g / 4;
        } else c = (g / (2 * Math.PI)) * Math.asin(d / h);
        return (
          -(
            h *
            Math.pow(2, 10 * (a -= 1)) *
            Math.sin(((a * e - c) * 2 * Math.PI) / g)
          ) + b
        );
      },
      easeOutElastic: function (c, a, b, d, e) {
        c = 1.70158;
        var g = 0,
          h = d;
        if (a == 0) return b;
        if ((a /= e) == 1) return b + d;
        g || (g = e * 0.3);
        if (h < Math.abs(d)) {
          h = d;
          c = g / 4;
        } else c = (g / (2 * Math.PI)) * Math.asin(d / h);
        return (
          h * Math.pow(2, -10 * a) * Math.sin(((a * e - c) * 2 * Math.PI) / g) +
          d +
          b
        );
      },
      easeInOutElastic: function (c, a, b, d, e) {
        c = 1.70158;
        var g = 0,
          h = d;
        if (a == 0) return b;
        if ((a /= e / 2) == 2) return b + d;
        g || (g = e * 0.3 * 1.5);
        if (h < Math.abs(d)) {
          h = d;
          c = g / 4;
        } else c = (g / (2 * Math.PI)) * Math.asin(d / h);
        if (a < 1)
          return (
            -0.5 *
              h *
              Math.pow(2, 10 * (a -= 1)) *
              Math.sin(((a * e - c) * 2 * Math.PI) / g) +
            b
          );
        return (
          h *
            Math.pow(2, -10 * (a -= 1)) *
            Math.sin(((a * e - c) * 2 * Math.PI) / g) *
            0.5 +
          d +
          b
        );
      },
      easeInBack: function (c, a, b, d, e, g) {
        if (g == undefined) g = 1.70158;
        return d * (a /= e) * a * ((g + 1) * a - g) + b;
      },
      easeOutBack: function (c, a, b, d, e, g) {
        if (g == undefined) g = 1.70158;
        return d * ((a = a / e - 1) * a * ((g + 1) * a + g) + 1) + b;
      },
      easeInOutBack: function (c, a, b, d, e, g) {
        if (g == undefined) g = 1.70158;
        if ((a /= e / 2) < 1)
          return (d / 2) * a * a * (((g *= 1.525) + 1) * a - g) + b;
        return (d / 2) * ((a -= 2) * a * (((g *= 1.525) + 1) * a + g) + 2) + b;
      },
      easeInBounce: function (c, a, b, d, e) {
        return d - f.easing.easeOutBounce(c, e - a, 0, d, e) + b;
      },
      easeOutBounce: function (c, a, b, d, e) {
        return (a /= e) < 1 / 2.75
          ? d * 7.5625 * a * a + b
          : a < 2 / 2.75
          ? d * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + b
          : a < 2.5 / 2.75
          ? d * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + b
          : d * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + b;
      },
      easeInOutBounce: function (c, a, b, d, e) {
        if (a < e / 2)
          return f.easing.easeInBounce(c, a * 2, 0, d, e) * 0.5 + b;
        return (
          f.easing.easeOutBounce(c, a * 2 - e, 0, d, e) * 0.5 + d * 0.5 + b
        );
      },
    });
  })(jQuery);
(function (b) {
  b.effects.blind = function (c) {
    return this.queue(function () {
      var a = b(this),
        g = ["position", "top", "left"],
        f = b.effects.setMode(a, c.options.mode || "hide"),
        d = c.options.direction || "vertical";
      b.effects.save(a, g);
      a.show();
      var e = b.effects.createWrapper(a).css({ overflow: "hidden" }),
        h = d == "vertical" ? "height" : "width";
      d = d == "vertical" ? e.height() : e.width();
      f == "show" && e.css(h, 0);
      var i = {};
      i[h] = f == "show" ? d : 0;
      e.animate(i, c.duration, c.options.easing, function () {
        f == "hide" && a.hide();
        b.effects.restore(a, g);
        b.effects.removeWrapper(a);
        c.callback && c.callback.apply(a[0], arguments);
        a.dequeue();
      });
    });
  };
})(jQuery);
(function (e) {
  e.effects.bounce = function (b) {
    return this.queue(function () {
      var a = e(this),
        l = ["position", "top", "left"],
        h = e.effects.setMode(a, b.options.mode || "effect"),
        d = b.options.direction || "up",
        c = b.options.distance || 20,
        m = b.options.times || 5,
        i = b.duration || 250;
      /show|hide/.test(h) && l.push("opacity");
      e.effects.save(a, l);
      a.show();
      e.effects.createWrapper(a);
      var f = d == "up" || d == "down" ? "top" : "left";
      d = d == "up" || d == "left" ? "pos" : "neg";
      c =
        b.options.distance ||
        (f == "top"
          ? a.outerHeight({ margin: true }) / 3
          : a.outerWidth({ margin: true }) / 3);
      if (h == "show") a.css("opacity", 0).css(f, d == "pos" ? -c : c);
      if (h == "hide") c /= m * 2;
      h != "hide" && m--;
      if (h == "show") {
        var g = { opacity: 1 };
        g[f] = (d == "pos" ? "+=" : "-=") + c;
        a.animate(g, i / 2, b.options.easing);
        c /= 2;
        m--;
      }
      for (g = 0; g < m; g++) {
        var j = {},
          k = {};
        j[f] = (d == "pos" ? "-=" : "+=") + c;
        k[f] = (d == "pos" ? "+=" : "-=") + c;
        a.animate(j, i / 2, b.options.easing).animate(
          k,
          i / 2,
          b.options.easing
        );
        c = h == "hide" ? c * 2 : c / 2;
      }
      if (h == "hide") {
        g = { opacity: 0 };
        g[f] = (d == "pos" ? "-=" : "+=") + c;
        a.animate(g, i / 2, b.options.easing, function () {
          a.hide();
          e.effects.restore(a, l);
          e.effects.removeWrapper(a);
          b.callback && b.callback.apply(this, arguments);
        });
      } else {
        j = {};
        k = {};
        j[f] = (d == "pos" ? "-=" : "+=") + c;
        k[f] = (d == "pos" ? "+=" : "-=") + c;
        a.animate(j, i / 2, b.options.easing).animate(
          k,
          i / 2,
          b.options.easing,
          function () {
            e.effects.restore(a, l);
            e.effects.removeWrapper(a);
            b.callback && b.callback.apply(this, arguments);
          }
        );
      }
      a.queue("fx", function () {
        a.dequeue();
      });
      a.dequeue();
    });
  };
})(jQuery);
(function (b) {
  b.effects.clip = function (e) {
    return this.queue(function () {
      var a = b(this),
        i = ["position", "top", "left", "height", "width"],
        f = b.effects.setMode(a, e.options.mode || "hide"),
        c = e.options.direction || "vertical";
      b.effects.save(a, i);
      a.show();
      var d = b.effects.createWrapper(a).css({ overflow: "hidden" });
      d = a[0].tagName == "IMG" ? d : a;
      var g = {
        size: c == "vertical" ? "height" : "width",
        position: c == "vertical" ? "top" : "left",
      };
      c = c == "vertical" ? d.height() : d.width();
      if (f == "show") {
        d.css(g.size, 0);
        d.css(g.position, c / 2);
      }
      var h = {};
      h[g.size] = f == "show" ? c : 0;
      h[g.position] = f == "show" ? 0 : c / 2;
      d.animate(h, {
        queue: false,
        duration: e.duration,
        easing: e.options.easing,
        complete: function () {
          f == "hide" && a.hide();
          b.effects.restore(a, i);
          b.effects.removeWrapper(a);
          e.callback && e.callback.apply(a[0], arguments);
          a.dequeue();
        },
      });
    });
  };
})(jQuery);
(function (c) {
  c.effects.drop = function (d) {
    return this.queue(function () {
      var a = c(this),
        h = ["position", "top", "left", "opacity"],
        e = c.effects.setMode(a, d.options.mode || "hide"),
        b = d.options.direction || "left";
      c.effects.save(a, h);
      a.show();
      c.effects.createWrapper(a);
      var f = b == "up" || b == "down" ? "top" : "left";
      b = b == "up" || b == "left" ? "pos" : "neg";
      var g =
        d.options.distance ||
        (f == "top"
          ? a.outerHeight({ margin: true }) / 2
          : a.outerWidth({ margin: true }) / 2);
      if (e == "show") a.css("opacity", 0).css(f, b == "pos" ? -g : g);
      var i = { opacity: e == "show" ? 1 : 0 };
      i[f] =
        (e == "show" ? (b == "pos" ? "+=" : "-=") : b == "pos" ? "-=" : "+=") +
        g;
      a.animate(i, {
        queue: false,
        duration: d.duration,
        easing: d.options.easing,
        complete: function () {
          e == "hide" && a.hide();
          c.effects.restore(a, h);
          c.effects.removeWrapper(a);
          d.callback && d.callback.apply(this, arguments);
          a.dequeue();
        },
      });
    });
  };
})(jQuery);
(function (j) {
  j.effects.explode = function (a) {
    return this.queue(function () {
      var c = a.options.pieces ? Math.round(Math.sqrt(a.options.pieces)) : 3,
        d = a.options.pieces ? Math.round(Math.sqrt(a.options.pieces)) : 3;
      a.options.mode =
        a.options.mode == "toggle"
          ? j(this).is(":visible")
            ? "hide"
            : "show"
          : a.options.mode;
      var b = j(this).show().css("visibility", "hidden"),
        g = b.offset();
      g.top -= parseInt(b.css("marginTop"), 10) || 0;
      g.left -= parseInt(b.css("marginLeft"), 10) || 0;
      for (
        var h = b.outerWidth(true), i = b.outerHeight(true), e = 0;
        e < c;
        e++
      )
        for (var f = 0; f < d; f++)
          b.clone()
            .appendTo("body")
            .wrap("<div></div>")
            .css({
              position: "absolute",
              visibility: "visible",
              left: -f * (h / d),
              top: -e * (i / c),
            })
            .parent()
            .addClass("ui-effects-explode")
            .css({
              position: "absolute",
              overflow: "hidden",
              width: h / d,
              height: i / c,
              left:
                g.left +
                f * (h / d) +
                (a.options.mode == "show"
                  ? (f - Math.floor(d / 2)) * (h / d)
                  : 0),
              top:
                g.top +
                e * (i / c) +
                (a.options.mode == "show"
                  ? (e - Math.floor(c / 2)) * (i / c)
                  : 0),
              opacity: a.options.mode == "show" ? 0 : 1,
            })
            .animate(
              {
                left:
                  g.left +
                  f * (h / d) +
                  (a.options.mode == "show"
                    ? 0
                    : (f - Math.floor(d / 2)) * (h / d)),
                top:
                  g.top +
                  e * (i / c) +
                  (a.options.mode == "show"
                    ? 0
                    : (e - Math.floor(c / 2)) * (i / c)),
                opacity: a.options.mode == "show" ? 1 : 0,
              },
              a.duration || 500
            );
      setTimeout(function () {
        a.options.mode == "show"
          ? b.css({ visibility: "visible" })
          : b.css({ visibility: "visible" }).hide();
        a.callback && a.callback.apply(b[0]);
        b.dequeue();
        j("div.ui-effects-explode").remove();
      }, a.duration || 500);
    });
  };
})(jQuery);
(function (c) {
  c.effects.fold = function (a) {
    return this.queue(function () {
      var b = c(this),
        j = ["position", "top", "left"],
        d = c.effects.setMode(b, a.options.mode || "hide"),
        g = a.options.size || 15,
        h = !!a.options.horizFirst,
        k = a.duration ? a.duration / 2 : c.fx.speeds._default / 2;
      c.effects.save(b, j);
      b.show();
      var e = c.effects.createWrapper(b).css({ overflow: "hidden" }),
        f = (d == "show") != h,
        l = f ? ["width", "height"] : ["height", "width"];
      f = f ? [e.width(), e.height()] : [e.height(), e.width()];
      var i = /([0-9]+)%/.exec(g);
      if (i) g = (parseInt(i[1], 10) / 100) * f[d == "hide" ? 0 : 1];
      if (d == "show")
        e.css(h ? { height: 0, width: g } : { height: g, width: 0 });
      h = {};
      i = {};
      h[l[0]] = d == "show" ? f[0] : g;
      i[l[1]] = d == "show" ? f[1] : 0;
      e.animate(h, k, a.options.easing).animate(
        i,
        k,
        a.options.easing,
        function () {
          d == "hide" && b.hide();
          c.effects.restore(b, j);
          c.effects.removeWrapper(b);
          a.callback && a.callback.apply(b[0], arguments);
          b.dequeue();
        }
      );
    });
  };
})(jQuery);
(function (b) {
  b.effects.highlight = function (c) {
    return this.queue(function () {
      var a = b(this),
        e = ["backgroundImage", "backgroundColor", "opacity"],
        d = b.effects.setMode(a, c.options.mode || "show"),
        f = { backgroundColor: a.css("backgroundColor") };
      if (d == "hide") f.opacity = 0;
      b.effects.save(a, e);
      a.show()
        .css({
          backgroundImage: "none",
          backgroundColor: c.options.color || "#ffff99",
        })
        .animate(f, {
          queue: false,
          duration: c.duration,
          easing: c.options.easing,
          complete: function () {
            d == "hide" && a.hide();
            b.effects.restore(a, e);
            d == "show" &&
              !b.support.opacity &&
              this.style.removeAttribute("filter");
            c.callback && c.callback.apply(this, arguments);
            a.dequeue();
          },
        });
    });
  };
})(jQuery);
(function (d) {
  d.effects.pulsate = function (a) {
    return this.queue(function () {
      var b = d(this),
        c = d.effects.setMode(b, a.options.mode || "show");
      times = (a.options.times || 5) * 2 - 1;
      duration = a.duration ? a.duration / 2 : d.fx.speeds._default / 2;
      isVisible = b.is(":visible");
      animateTo = 0;
      if (!isVisible) {
        b.css("opacity", 0).show();
        animateTo = 1;
      }
      if ((c == "hide" && isVisible) || (c == "show" && !isVisible)) times--;
      for (c = 0; c < times; c++) {
        b.animate({ opacity: animateTo }, duration, a.options.easing);
        animateTo = (animateTo + 1) % 2;
      }
      b.animate(
        { opacity: animateTo },
        duration,
        a.options.easing,
        function () {
          animateTo == 0 && b.hide();
          a.callback && a.callback.apply(this, arguments);
        }
      );
      b.queue("fx", function () {
        b.dequeue();
      }).dequeue();
    });
  };
})(jQuery);
(function (c) {
  c.effects.puff = function (b) {
    return this.queue(function () {
      var a = c(this),
        e = c.effects.setMode(a, b.options.mode || "hide"),
        g = parseInt(b.options.percent, 10) || 150,
        h = g / 100,
        i = { height: a.height(), width: a.width() };
      c.extend(b.options, {
        fade: true,
        mode: e,
        percent: e == "hide" ? g : 100,
        from: e == "hide" ? i : { height: i.height * h, width: i.width * h },
      });
      a.effect("scale", b.options, b.duration, b.callback);
      a.dequeue();
    });
  };
  c.effects.scale = function (b) {
    return this.queue(function () {
      var a = c(this),
        e = c.extend(true, {}, b.options),
        g = c.effects.setMode(a, b.options.mode || "effect"),
        h =
          parseInt(b.options.percent, 10) ||
          (parseInt(b.options.percent, 10) == 0 ? 0 : g == "hide" ? 0 : 100),
        i = b.options.direction || "both",
        f = b.options.origin;
      if (g != "effect") {
        e.origin = f || ["middle", "center"];
        e.restore = true;
      }
      f = { height: a.height(), width: a.width() };
      a.from = b.options.from || (g == "show" ? { height: 0, width: 0 } : f);
      h = {
        y: i != "horizontal" ? h / 100 : 1,
        x: i != "vertical" ? h / 100 : 1,
      };
      a.to = { height: f.height * h.y, width: f.width * h.x };
      if (b.options.fade) {
        if (g == "show") {
          a.from.opacity = 0;
          a.to.opacity = 1;
        }
        if (g == "hide") {
          a.from.opacity = 1;
          a.to.opacity = 0;
        }
      }
      e.from = a.from;
      e.to = a.to;
      e.mode = g;
      a.effect("size", e, b.duration, b.callback);
      a.dequeue();
    });
  };
  c.effects.size = function (b) {
    return this.queue(function () {
      var a = c(this),
        e = [
          "position",
          "top",
          "left",
          "width",
          "height",
          "overflow",
          "opacity",
        ],
        g = ["position", "top", "left", "overflow", "opacity"],
        h = ["width", "height", "overflow"],
        i = ["fontSize"],
        f = [
          "borderTopWidth",
          "borderBottomWidth",
          "paddingTop",
          "paddingBottom",
        ],
        k = [
          "borderLeftWidth",
          "borderRightWidth",
          "paddingLeft",
          "paddingRight",
        ],
        p = c.effects.setMode(a, b.options.mode || "effect"),
        n = b.options.restore || false,
        m = b.options.scale || "both",
        l = b.options.origin,
        j = { height: a.height(), width: a.width() };
      a.from = b.options.from || j;
      a.to = b.options.to || j;
      if (l) {
        l = c.effects.getBaseline(l, j);
        a.from.top = (j.height - a.from.height) * l.y;
        a.from.left = (j.width - a.from.width) * l.x;
        a.to.top = (j.height - a.to.height) * l.y;
        a.to.left = (j.width - a.to.width) * l.x;
      }
      var d = {
        from: { y: a.from.height / j.height, x: a.from.width / j.width },
        to: { y: a.to.height / j.height, x: a.to.width / j.width },
      };
      if (m == "box" || m == "both") {
        if (d.from.y != d.to.y) {
          e = e.concat(f);
          a.from = c.effects.setTransition(a, f, d.from.y, a.from);
          a.to = c.effects.setTransition(a, f, d.to.y, a.to);
        }
        if (d.from.x != d.to.x) {
          e = e.concat(k);
          a.from = c.effects.setTransition(a, k, d.from.x, a.from);
          a.to = c.effects.setTransition(a, k, d.to.x, a.to);
        }
      }
      if (m == "content" || m == "both")
        if (d.from.y != d.to.y) {
          e = e.concat(i);
          a.from = c.effects.setTransition(a, i, d.from.y, a.from);
          a.to = c.effects.setTransition(a, i, d.to.y, a.to);
        }
      c.effects.save(a, n ? e : g);
      a.show();
      c.effects.createWrapper(a);
      a.css("overflow", "hidden").css(a.from);
      if (m == "content" || m == "both") {
        f = f.concat(["marginTop", "marginBottom"]).concat(i);
        k = k.concat(["marginLeft", "marginRight"]);
        h = e.concat(f).concat(k);
        a.find("*[width]").each(function () {
          child = c(this);
          n && c.effects.save(child, h);
          var o = { height: child.height(), width: child.width() };
          child.from = {
            height: o.height * d.from.y,
            width: o.width * d.from.x,
          };
          child.to = { height: o.height * d.to.y, width: o.width * d.to.x };
          if (d.from.y != d.to.y) {
            child.from = c.effects.setTransition(
              child,
              f,
              d.from.y,
              child.from
            );
            child.to = c.effects.setTransition(child, f, d.to.y, child.to);
          }
          if (d.from.x != d.to.x) {
            child.from = c.effects.setTransition(
              child,
              k,
              d.from.x,
              child.from
            );
            child.to = c.effects.setTransition(child, k, d.to.x, child.to);
          }
          child.css(child.from);
          child.animate(child.to, b.duration, b.options.easing, function () {
            n && c.effects.restore(child, h);
          });
        });
      }
      a.animate(a.to, {
        queue: false,
        duration: b.duration,
        easing: b.options.easing,
        complete: function () {
          a.to.opacity === 0 && a.css("opacity", a.from.opacity);
          p == "hide" && a.hide();
          c.effects.restore(a, n ? e : g);
          c.effects.removeWrapper(a);
          b.callback && b.callback.apply(this, arguments);
          a.dequeue();
        },
      });
    });
  };
})(jQuery);
(function (d) {
  d.effects.shake = function (a) {
    return this.queue(function () {
      var b = d(this),
        j = ["position", "top", "left"];
      d.effects.setMode(b, a.options.mode || "effect");
      var c = a.options.direction || "left",
        e = a.options.distance || 20,
        l = a.options.times || 3,
        f = a.duration || a.options.duration || 140;
      d.effects.save(b, j);
      b.show();
      d.effects.createWrapper(b);
      var g = c == "up" || c == "down" ? "top" : "left",
        h = c == "up" || c == "left" ? "pos" : "neg";
      c = {};
      var i = {},
        k = {};
      c[g] = (h == "pos" ? "-=" : "+=") + e;
      i[g] = (h == "pos" ? "+=" : "-=") + e * 2;
      k[g] = (h == "pos" ? "-=" : "+=") + e * 2;
      b.animate(c, f, a.options.easing);
      for (e = 1; e < l; e++)
        b.animate(i, f, a.options.easing).animate(k, f, a.options.easing);
      b.animate(i, f, a.options.easing).animate(
        c,
        f / 2,
        a.options.easing,
        function () {
          d.effects.restore(b, j);
          d.effects.removeWrapper(b);
          a.callback && a.callback.apply(this, arguments);
        }
      );
      b.queue("fx", function () {
        b.dequeue();
      });
      b.dequeue();
    });
  };
})(jQuery);
(function (c) {
  c.effects.slide = function (d) {
    return this.queue(function () {
      var a = c(this),
        h = ["position", "top", "left"],
        e = c.effects.setMode(a, d.options.mode || "show"),
        b = d.options.direction || "left";
      c.effects.save(a, h);
      a.show();
      c.effects.createWrapper(a).css({ overflow: "hidden" });
      var f = b == "up" || b == "down" ? "top" : "left";
      b = b == "up" || b == "left" ? "pos" : "neg";
      var g =
        d.options.distance ||
        (f == "top"
          ? a.outerHeight({ margin: true })
          : a.outerWidth({ margin: true }));
      if (e == "show") a.css(f, b == "pos" ? -g : g);
      var i = {};
      i[f] =
        (e == "show" ? (b == "pos" ? "+=" : "-=") : b == "pos" ? "-=" : "+=") +
        g;
      a.animate(i, {
        queue: false,
        duration: d.duration,
        easing: d.options.easing,
        complete: function () {
          e == "hide" && a.hide();
          c.effects.restore(a, h);
          c.effects.removeWrapper(a);
          d.callback && d.callback.apply(this, arguments);
          a.dequeue();
        },
      });
    });
  };
})(jQuery);
(function (e) {
  e.effects.transfer = function (a) {
    return this.queue(function () {
      var b = e(this),
        c = e(a.options.to),
        d = c.offset();
      c = {
        top: d.top,
        left: d.left,
        height: c.innerHeight(),
        width: c.innerWidth(),
      };
      d = b.offset();
      var f = e('<div class="ui-effects-transfer"></div>')
        .appendTo(document.body)
        .addClass(a.options.className)
        .css({
          top: d.top,
          left: d.left,
          height: b.innerHeight(),
          width: b.innerWidth(),
          position: "absolute",
        })
        .animate(c, a.duration, a.options.easing, function () {
          f.remove();
          a.callback && a.callback.apply(b[0], arguments);
          b.dequeue();
        });
    });
  };
})(jQuery);
$(function () {
  $(".datepicker").datepicker({ dateFormat: "yy-mm-dd" });
});
(function ($) {
  function toIntegersAtLease(n) {
    return n < 10 ? "0" + n : n;
  }
  Date.prototype.toJSON = function (date) {
    return (
      date.getUTCFullYear() +
      "-" +
      toIntegersAtLease(date.getUTCMonth() + 1) +
      "-" +
      toIntegersAtLease(date.getUTCDate())
    );
  };
  var escapeable = /["\\\x00-\x1f\x7f-\x9f]/g;
  var meta = {
    "\b": "\\b",
    "	": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    '"': '\\"',
    "\\": "\\\\",
  };
  $.quoteString = function (string) {
    if (escapeable.test(string)) {
      return (
        '"' +
        string.replace(escapeable, function (a) {
          var c = meta[a];
          if (typeof c === "string") {
            return c;
          }
          c = a.charCodeAt();
          return (
            "\\u00" + Math.floor(c / 16).toString(16) + (c % 16).toString(16)
          );
        }) +
        '"'
      );
    }
    return '"' + string + '"';
  };
  $.toJSON = function (o) {
    var type = typeof o;
    if (type == "undefined") return "null";
    else if (type == "number" || type == "boolean") return o + "";
    else if (o === null) return "null";
    if (type == "string") {
      return $.quoteString(o);
    }
    if (type == "object" && typeof o.toJSONObject == "function")
      return $.toJSON(o.toJSONObject());
    if (type != "function" && typeof o.length == "number") {
      var ret = [];
      for (var i = 0; i < o.length; i++) {
        ret.push($.toJSON(o[i]));
      }
      return "[" + ret.join(", ") + "]";
    }
    if (type == "function") {
      throw new TypeError(
        "Unable to convert object of type 'function' to json."
      );
    }
    ret = [];
    for (var k in o) {
      var name;
      var type = typeof k;
      if (type == "number") name = '"' + k + '"';
      else if (type == "string") name = $.quoteString(k);
      else continue;
      val = $.toJSON(o[k]);
      if (typeof val != "string") {
        continue;
      }
      ret.push(name + ": " + val);
    }
    return "{" + ret.join(", ") + "}";
  };
  $.evalJSON = function (src) {
    return eval("(" + src + ")");
  };
  $.secureEvalJSON = function (src) {
    var filtered = src;
    filtered = filtered.replace(/\\["\\\/bfnrtu]/g, "@");
    filtered = filtered.replace(
      /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
      "]"
    );
    filtered = filtered.replace(/(?:^|:|,)(?:\s*\[)+/g, "");
    if (/^[\],:{}\s]*$/.test(filtered)) return eval("(" + src + ")");
    else throw new SyntaxError("Error parsing JSON, source is not valid.");
  };
})(jQuery);
var libFuncName = null;
if (
  typeof jQuery == "undefined" &&
  typeof Zepto == "undefined" &&
  typeof $ == "function"
)
  libFuncName = $;
else if (typeof jQuery == "function") libFuncName = jQuery;
else {
  if (typeof Zepto != "function") throw new TypeError();
  libFuncName = Zepto;
}
(function (e, t, n, r) {
  "use strict";
  e("head").append('<meta class="foundation-mq-small">'),
    e("head").append('<meta class="foundation-mq-medium">'),
    e("head").append('<meta class="foundation-mq-large">'),
    (t.matchMedia =
      t.matchMedia ||
      (function (e, t) {
        var n,
          r = e.documentElement,
          i = r.firstElementChild || r.firstChild,
          s = e.createElement("body"),
          o = e.createElement("div");
        return (
          (o.id = "mq-test-1"),
          (o.style.cssText = "position:absolute;top:-100em"),
          (s.style.background = "none"),
          s.appendChild(o),
          function (e) {
            return (
              (o.innerHTML =
                '&shy;<style media="' +
                e +
                '"> #mq-test-1 { width: 42px; }</style>'),
              r.insertBefore(s, i),
              (n = o.offsetWidth === 42),
              r.removeChild(s),
              { matches: n, media: e }
            );
          }
        );
      })(n)),
    Array.prototype.filter ||
      (Array.prototype.filter = function (e) {
        if (this == null) throw new TypeError();
        var t = Object(this),
          n = t.length >>> 0;
        if (typeof e != "function") return;
        var r = [],
          i = arguments[1];
        for (var s = 0; s < n; s++)
          if (s in t) {
            var o = t[s];
            e && e.call(i, o, s, t) && r.push(o);
          }
        return r;
      }),
    Function.prototype.bind ||
      (Function.prototype.bind = function (e) {
        if (typeof this != "function")
          throw new TypeError(
            "Function.prototype.bind - what is trying to be bound is not callable"
          );
        var t = Array.prototype.slice.call(arguments, 1),
          n = this,
          r = function () {},
          i = function () {
            return n.apply(
              this instanceof r && e ? this : e,
              t.concat(Array.prototype.slice.call(arguments))
            );
          };
        return (r.prototype = this.prototype), (i.prototype = new r()), i;
      }),
    Array.prototype.indexOf ||
      (Array.prototype.indexOf = function (e) {
        if (this == null) throw new TypeError();
        var t = Object(this),
          n = t.length >>> 0;
        if (n === 0) return -1;
        var r = 0;
        arguments.length > 1 &&
          ((r = Number(arguments[1])),
          r != r
            ? (r = 0)
            : r != 0 &&
              r != Infinity &&
              r != -Infinity &&
              (r = (r > 0 || -1) * Math.floor(Math.abs(r))));
        if (r >= n) return -1;
        var i = r >= 0 ? r : Math.max(n - Math.abs(r), 0);
        for (; i < n; i++) if (i in t && t[i] === e) return i;
        return -1;
      }),
    (e.fn.stop =
      e.fn.stop ||
      function () {
        return this;
      }),
    (t.Foundation = {
      name: "Foundation",
      version: "4.3.2",
      cache: {},
      media_queries: {
        small: e(".foundation-mq-small").css("font-family").replace(/\'/g, ""),
        medium: e(".foundation-mq-medium")
          .css("font-family")
          .replace(/\'/g, ""),
        large: e(".foundation-mq-large").css("font-family").replace(/\'/g, ""),
      },
      stylesheet: e("<style></style>").appendTo("head")[0].sheet,
      init: function (t, n, r, i, s, o) {
        var u,
          a = [t, r, i, s],
          f = [],
          o = o || !1;
        o && (this.nc = o),
          (this.rtl = /rtl/i.test(e("html").attr("dir"))),
          (this.scope = t || this.scope);
        if (n && typeof n == "string" && !/reflow/i.test(n)) {
          if (/off/i.test(n)) return this.off();
          u = n.split(" ");
          if (u.length > 0)
            for (var l = u.length - 1; l >= 0; l--)
              f.push(this.init_lib(u[l], a));
        } else {
          /reflow/i.test(n) && (a[1] = "reflow");
          for (var c in this.libs) f.push(this.init_lib(c, a));
        }
        return typeof n == "function" && a.unshift(n), this.response_obj(f, a);
      },
      response_obj: function (e, t) {
        for (var n = 0, r = t.length; n < r; n++)
          if (typeof t[n] == "function")
            return t[n]({
              errors: e.filter(function (e) {
                if (typeof e == "string") return e;
              }),
            });
        return e;
      },
      init_lib: function (e, t) {
        return this.trap(
          function () {
            return this.libs.hasOwnProperty(e)
              ? (this.patch(this.libs[e]),
                this.libs[e].init.apply(this.libs[e], t))
              : function () {};
          }.bind(this),
          e
        );
      },
      trap: function (e, t) {
        if (!this.nc)
          try {
            return e();
          } catch (n) {
            return this.error({
              name: t,
              message: "could not be initialized",
              more: n.name + " " + n.message,
            });
          }
        return e();
      },
      patch: function (e) {
        this.fix_outer(e), (e.scope = this.scope), (e.rtl = this.rtl);
      },
      inherit: function (e, t) {
        var n = t.split(" ");
        for (var r = n.length - 1; r >= 0; r--)
          this.lib_methods.hasOwnProperty(n[r]) &&
            (this.libs[e.name][n[r]] = this.lib_methods[n[r]]);
      },
      random_str: function (e) {
        var t =
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
            ""
          );
        e || (e = Math.floor(Math.random() * t.length));
        var n = "";
        for (var r = 0; r < e; r++)
          n += t[Math.floor(Math.random() * t.length)];
        return n;
      },
      libs: {},
      lib_methods: {
        set_data: function (e, t) {
          var n = [this.name, +new Date(), Foundation.random_str(5)].join("-");
          return (
            (Foundation.cache[n] = t), e.attr("data-" + this.name + "-id", n), t
          );
        },
        get_data: function (e) {
          return Foundation.cache[e.attr("data-" + this.name + "-id")];
        },
        remove_data: function (t) {
          t
            ? (delete Foundation.cache[t.attr("data-" + this.name + "-id")],
              t.attr("data-" + this.name + "-id", ""))
            : e("[data-" + this.name + "-id]").each(function () {
                delete Foundation.cache[
                  e(this).attr("data-" + this.name + "-id")
                ],
                  e(this).attr("data-" + this.name + "-id", "");
              });
        },
        throttle: function (e, t) {
          var n = null;
          return function () {
            var r = this,
              i = arguments;
            clearTimeout(n),
              (n = setTimeout(function () {
                e.apply(r, i);
              }, t));
          };
        },
        data_options: function (t) {
          function u(e) {
            return (
              !isNaN(e - 0) && e !== null && e !== "" && e !== !1 && e !== !0
            );
          }
          function a(t) {
            return typeof t == "string" ? e.trim(t) : t;
          }
          var n = {},
            r,
            i,
            s = (t.attr("data-options") || ":").split(";"),
            o = s.length;
          for (r = o - 1; r >= 0; r--)
            (i = s[r].split(":")),
              /true/i.test(i[1]) && (i[1] = !0),
              /false/i.test(i[1]) && (i[1] = !1),
              u(i[1]) && (i[1] = parseInt(i[1], 10)),
              i.length === 2 && i[0].length > 0 && (n[a(i[0])] = a(i[1]));
          return n;
        },
        delay: function (e, t) {
          return setTimeout(e, t);
        },
        scrollTo: function (n, r, i) {
          if (i < 0) return;
          var s = r - e(t).scrollTop(),
            o = (s / i) * 10;
          this.scrollToTimerCache = setTimeout(
            function () {
              isNaN(parseInt(o, 10)) ||
                (t.scrollTo(0, e(t).scrollTop() + o),
                this.scrollTo(n, r, i - 10));
            }.bind(this),
            10
          );
        },
        scrollLeft: function (e) {
          if (!e.length) return;
          return "scrollLeft" in e[0] ? e[0].scrollLeft : e[0].pageXOffset;
        },
        empty: function (e) {
          if (e.length && e.length > 0) return !1;
          if (e.length && e.length === 0) return !0;
          for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
          return !0;
        },
        addCustomRule: function (e, t) {
          if (t === r)
            Foundation.stylesheet.insertRule(
              e,
              Foundation.stylesheet.cssRules.length
            );
          else {
            var n = Foundation.media_queries[t];
            n !== r &&
              Foundation.stylesheet.insertRule(
                "@media " + Foundation.media_queries[t] + "{ " + e + " }"
              );
          }
        },
      },
      fix_outer: function (e) {
        (e.outerHeight = function (e, t) {
          return typeof Zepto == "function"
            ? e.height()
            : typeof t != "undefined"
            ? e.outerHeight(t)
            : e.outerHeight();
        }),
          (e.outerWidth = function (e, t) {
            return typeof Zepto == "function"
              ? e.width()
              : typeof t != "undefined"
              ? e.outerWidth(t)
              : e.outerWidth();
          });
      },
      error: function (e) {
        return e.name + " " + e.message + "; " + e.more;
      },
      off: function () {
        return e(this.scope).off(".fndtn"), e(t).off(".fndtn"), !0;
      },
      zj: e,
    }),
    (e.fn.foundation = function () {
      var e = Array.prototype.slice.call(arguments, 0);
      return this.each(function () {
        return Foundation.init.apply(Foundation, [this].concat(e)), this;
      });
    });
})(libFuncName, this, this.document),
  (function (e, t, n, r) {
    "use strict";
    Foundation.libs.alerts = {
      name: "alerts",
      version: "4.3.2",
      settings: { animation: "fadeOut", speed: 300, callback: function () {} },
      init: function (t, n, r) {
        return (
          (this.scope = t || this.scope),
          Foundation.inherit(this, "data_options"),
          typeof n == "object" && e.extend(!0, this.settings, n),
          typeof n != "string"
            ? (this.settings.init || this.events(), this.settings.init)
            : this[n].call(this, r)
        );
      },
      events: function () {
        var t = this;
        e(this.scope).on(
          "click.fndtn.alerts",
          "[data-alert] a.close",
          function (n) {
            var r = e(this).closest("[data-alert]"),
              i = e.extend({}, t.settings, t.data_options(r));
            n.preventDefault(),
              r[i.animation](i.speed, function () {
                e(this).remove(), i.callback();
              });
          }
        ),
          (this.settings.init = !0);
      },
      off: function () {
        e(this.scope).off(".fndtn.alerts");
      },
      reflow: function () {},
    };
  })(Foundation.zj, this, this.document),
  (function (e, t, n, r) {
    "use strict";
    Foundation.libs.clearing = {
      name: "clearing",
      version: "4.3.2",
      settings: {
        templates: {
          viewing:
            '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><img src="//:0"><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>',
        },
        close_selectors: ".clearing-close",
        init: !1,
        locked: !1,
      },
      init: function (t, n, r) {
        var i = this;
        return (
          Foundation.inherit(
            this,
            "set_data get_data remove_data throttle data_options"
          ),
          typeof n == "object" && (r = e.extend(!0, this.settings, n)),
          typeof n != "string"
            ? (e(this.scope)
                .find("ul[data-clearing]")
                .each(function () {
                  var t = e(this),
                    n = n || {},
                    r = t.find("li"),
                    s = i.get_data(t);
                  !s &&
                    r.length > 0 &&
                    ((n.$parent = t.parent()),
                    i.set_data(
                      t,
                      e.extend({}, i.settings, n, i.data_options(t))
                    ),
                    i.assemble(t.find("li")),
                    i.settings.init || i.events().swipe_events());
                }),
              this.settings.init)
            : this[n].call(this, r)
        );
      },
      events: function () {
        var n = this;
        return (
          e(this.scope)
            .on(
              "click.fndtn.clearing",
              "ul[data-clearing] li",
              function (t, r, i) {
                var r = r || e(this),
                  i = i || r,
                  s = r.next("li"),
                  o = n.get_data(r.parent()),
                  u = e(t.target);
                t.preventDefault(),
                  o || n.init(),
                  i.hasClass("visible") &&
                    r[0] === i[0] &&
                    s.length > 0 &&
                    n.is_open(r) &&
                    ((i = s), (u = i.find("img"))),
                  n.open(u, r, i),
                  n.update_paddles(i);
              }
            )
            .on(
              "click.fndtn.clearing",
              ".clearing-main-next",
              function (e) {
                this.nav(e, "next");
              }.bind(this)
            )
            .on(
              "click.fndtn.clearing",
              ".clearing-main-prev",
              function (e) {
                this.nav(e, "prev");
              }.bind(this)
            )
            .on(
              "click.fndtn.clearing",
              this.settings.close_selectors,
              function (e) {
                Foundation.libs.clearing.close(e, this);
              }
            )
            .on(
              "keydown.fndtn.clearing",
              function (e) {
                this.keydown(e);
              }.bind(this)
            ),
          e(t).on(
            "resize.fndtn.clearing",
            function () {
              this.resize();
            }.bind(this)
          ),
          (this.settings.init = !0),
          this
        );
      },
      swipe_events: function () {
        var t = this;
        e(this.scope)
          .on("touchstart.fndtn.clearing", ".visible-img", function (t) {
            t.touches || (t = t.originalEvent);
            var n = {
              start_page_x: t.touches[0].pageX,
              start_page_y: t.touches[0].pageY,
              start_time: new Date().getTime(),
              delta_x: 0,
              is_scrolling: r,
            };
            e(this).data("swipe-transition", n), t.stopPropagation();
          })
          .on("touchmove.fndtn.clearing", ".visible-img", function (n) {
            n.touches || (n = n.originalEvent);
            if (n.touches.length > 1 || (n.scale && n.scale !== 1)) return;
            var r = e(this).data("swipe-transition");
            typeof r == "undefined" && (r = {}),
              (r.delta_x = n.touches[0].pageX - r.start_page_x),
              typeof r.is_scrolling == "undefined" &&
                (r.is_scrolling = !!(
                  r.is_scrolling ||
                  Math.abs(r.delta_x) <
                    Math.abs(n.touches[0].pageY - r.start_page_y)
                ));
            if (!r.is_scrolling && !r.active) {
              n.preventDefault();
              var i = r.delta_x < 0 ? "next" : "prev";
              (r.active = !0), t.nav(n, i);
            }
          })
          .on("touchend.fndtn.clearing", ".visible-img", function (t) {
            e(this).data("swipe-transition", {}), t.stopPropagation();
          });
      },
      assemble: function (t) {
        var n = t.parent();
        n.after('<div id="foundationClearingHolder"></div>');
        var r = e("#foundationClearingHolder"),
          i = this.get_data(n),
          s = n.detach(),
          o = {
            grid: '<div class="carousel">' + this.outerHTML(s[0]) + "</div>",
            viewing: i.templates.viewing,
          },
          u =
            '<div class="clearing-assembled"><div>' +
            o.viewing +
            o.grid +
            "</div></div>";
        return r.after(u).remove();
      },
      open: function (e, t, n) {
        var r = n.closest(".clearing-assembled"),
          i = r.find("div").first(),
          s = i.find(".visible-img"),
          o = s.find("img").not(e);
        this.locked() ||
          (o.attr("src", this.load(e)).css("visibility", "hidden"),
          this.loaded(
            o,
            function () {
              o.css("visibility", "visible"),
                r.addClass("clearing-blackout"),
                i.addClass("clearing-container"),
                s.show(),
                this.fix_height(n)
                  .caption(s.find(".clearing-caption"), e)
                  .center(o)
                  .shift(t, n, function () {
                    n.siblings().removeClass("visible"), n.addClass("visible");
                  });
            }.bind(this)
          ));
      },
      close: function (t, n) {
        t.preventDefault();
        var r = (function (e) {
            return /blackout/.test(e.selector)
              ? e
              : e.closest(".clearing-blackout");
          })(e(n)),
          i,
          s;
        return (
          n === t.target &&
            r &&
            ((i = r.find("div").first()),
            (s = i.find(".visible-img")),
            (this.settings.prev_index = 0),
            r
              .find("ul[data-clearing]")
              .attr("style", "")
              .closest(".clearing-blackout")
              .removeClass("clearing-blackout"),
            i.removeClass("clearing-container"),
            s.hide()),
          !1
        );
      },
      is_open: function (e) {
        return e.parent().prop("style").length > 0;
      },
      keydown: function (t) {
        var n = e(".clearing-blackout").find("ul[data-clearing]");
        t.which === 39 && this.go(n, "next"),
          t.which === 37 && this.go(n, "prev"),
          t.which === 27 && e("a.clearing-close").trigger("click");
      },
      nav: function (t, n) {
        var r = e(".clearing-blackout").find("ul[data-clearing]");
        t.preventDefault(), this.go(r, n);
      },
      resize: function () {
        var t = e(".clearing-blackout .visible-img").find("img");
        t.length && this.center(t);
      },
      fix_height: function (t) {
        var n = t.parent().children(),
          r = this;
        return (
          n
            .each(function () {
              var t = e(this),
                n = t.find("img");
              t.height() > r.outerHeight(n) && t.addClass("fix-height");
            })
            .closest("ul")
            .width(n.length * 100 + "%"),
          this
        );
      },
      update_paddles: function (e) {
        var t = e.closest(".carousel").siblings(".visible-img");
        e.next().length > 0
          ? t.find(".clearing-main-next").removeClass("disabled")
          : t.find(".clearing-main-next").addClass("disabled"),
          e.prev().length > 0
            ? t.find(".clearing-main-prev").removeClass("disabled")
            : t.find(".clearing-main-prev").addClass("disabled");
      },
      center: function (e) {
        return (
          this.rtl
            ? e.css({
                marginRight: -(this.outerWidth(e) / 2),
                marginTop: -(this.outerHeight(e) / 2),
              })
            : e.css({
                marginLeft: -(this.outerWidth(e) / 2),
                marginTop: -(this.outerHeight(e) / 2),
              }),
          this
        );
      },
      load: function (e) {
        if (e[0].nodeName === "A") var t = e.attr("href");
        else var t = e.parent().attr("href");
        return this.preload(e), t ? t : e.attr("src");
      },
      preload: function (e) {
        this.img(e.closest("li").next()).img(e.closest("li").prev());
      },
      loaded: function (e, t) {
        function n() {
          t();
        }
        function r() {
          this.one("load", n);
          if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
            var e = this.attr("src"),
              t = e.match(/\?/) ? "&" : "?";
            (t += "random=" + new Date().getTime()), this.attr("src", e + t);
          }
        }
        if (!e.attr("src")) {
          n();
          return;
        }
        e[0].complete || e[0].readyState === 4 ? n() : r.call(e);
      },
      img: function (e) {
        if (e.length) {
          var t = new Image(),
            n = e.find("a");
          n.length
            ? (t.src = n.attr("href"))
            : (t.src = e.find("img").attr("src"));
        }
        return this;
      },
      caption: function (e, t) {
        var n = t.data("caption");
        return n ? e.html(n).show() : e.text("").hide(), this;
      },
      go: function (e, t) {
        var n = e.find(".visible"),
          r = n[t]();
        r.length && r.find("img").trigger("click", [n, r]);
      },
      shift: function (e, t, n) {
        var r = t.parent(),
          i = this.settings.prev_index || t.index(),
          s = this.direction(r, e, t),
          o = parseInt(r.css("left"), 10),
          u = this.outerWidth(t),
          a;
        t.index() !== i && !/skip/.test(s)
          ? /left/.test(s)
            ? (this.lock(), r.animate({ left: o + u }, 300, this.unlock()))
            : /right/.test(s) &&
              (this.lock(), r.animate({ left: o - u }, 300, this.unlock()))
          : /skip/.test(s) &&
            ((a = t.index() - this.settings.up_count),
            this.lock(),
            a > 0
              ? r.animate({ left: -(a * u) }, 300, this.unlock())
              : r.animate({ left: 0 }, 300, this.unlock())),
          n();
      },
      direction: function (t, n, r) {
        var i = t.find("li"),
          s = this.outerWidth(i) + this.outerWidth(i) / 4,
          o = Math.floor(this.outerWidth(e(".clearing-container")) / s) - 1,
          u = i.index(r),
          a;
        return (
          (this.settings.up_count = o),
          this.adjacent(this.settings.prev_index, u)
            ? u > o && u > this.settings.prev_index
              ? (a = "right")
              : u > o - 1 && u <= this.settings.prev_index
              ? (a = "left")
              : (a = !1)
            : (a = "skip"),
          (this.settings.prev_index = u),
          a
        );
      },
      adjacent: function (e, t) {
        for (var n = t + 1; n >= t - 1; n--) if (n === e) return !0;
        return !1;
      },
      lock: function () {
        this.settings.locked = !0;
      },
      unlock: function () {
        this.settings.locked = !1;
      },
      locked: function () {
        return this.settings.locked;
      },
      outerHTML: function (e) {
        return e.outerHTML || new XMLSerializer().serializeToString(e);
      },
      off: function () {
        e(this.scope).off(".fndtn.clearing"),
          e(t).off(".fndtn.clearing"),
          this.remove_data(),
          (this.settings.init = !1);
      },
      reflow: function () {
        this.init();
      },
    };
  })(Foundation.zj, this, this.document),
  (function (e, t, n) {
    function i(e) {
      return e;
    }
    function s(e) {
      return decodeURIComponent(e.replace(r, " "));
    }
    var r = /\+/g,
      o = (e.cookie = function (r, u, a) {
        if (u !== n) {
          (a = e.extend({}, o.defaults, a)), u === null && (a.expires = -1);
          if (typeof a.expires == "number") {
            var f = a.expires,
              l = (a.expires = new Date());
            l.setDate(l.getDate() + f);
          }
          return (
            (u = o.json ? JSON.stringify(u) : String(u)),
            (t.cookie = [
              encodeURIComponent(r),
              "=",
              o.raw ? u : encodeURIComponent(u),
              a.expires ? "; expires=" + a.expires.toUTCString() : "",
              a.path ? "; path=" + a.path : "",
              a.domain ? "; domain=" + a.domain : "",
              a.secure ? "; secure" : "",
            ].join(""))
          );
        }
        var c = o.raw ? i : s,
          h = t.cookie.split("; ");
        for (var p = 0, d = h.length; p < d; p++) {
          var v = h[p].split("=");
          if (c(v.shift()) === r) {
            var m = c(v.join("="));
            return o.json ? JSON.parse(m) : m;
          }
        }
        return null;
      });
    (o.defaults = {}),
      (e.removeCookie = function (t, n) {
        return e.cookie(t) !== null ? (e.cookie(t, null, n), !0) : !1;
      });
  })(Foundation.zj, document),
  (function (e, t, n, r) {
    "use strict";
    Foundation.libs.dropdown = {
      name: "dropdown",
      version: "4.3.2",
      settings: {
        activeClass: "open",
        is_hover: !1,
        opened: function () {},
        closed: function () {},
      },
      init: function (t, n, r) {
        return (
          (this.scope = t || this.scope),
          Foundation.inherit(this, "throttle scrollLeft data_options"),
          typeof n == "object" && e.extend(!0, this.settings, n),
          typeof n != "string"
            ? (this.settings.init || this.events(), this.settings.init)
            : this[n].call(this, r)
        );
      },
      events: function () {
        var r = this;
        e(this.scope)
          .on("click.fndtn.dropdown", "[data-dropdown]", function (t) {
            var n = e.extend({}, r.settings, r.data_options(e(this)));
            t.preventDefault(), n.is_hover || r.toggle(e(this));
          })
          .on("mouseenter", "[data-dropdown]", function (t) {
            var n = e.extend({}, r.settings, r.data_options(e(this)));
            n.is_hover && r.toggle(e(this));
          })
          .on("mouseleave", "[data-dropdown-content]", function (t) {
            var n = e('[data-dropdown="' + e(this).attr("id") + '"]'),
              i = e.extend({}, r.settings, r.data_options(n));
            i.is_hover && r.close.call(r, e(this));
          })
          .on(
            "opened.fndtn.dropdown",
            "[data-dropdown-content]",
            this.settings.opened
          )
          .on(
            "closed.fndtn.dropdown",
            "[data-dropdown-content]",
            this.settings.closed
          ),
          e(n).on("click.fndtn.dropdown", function (t) {
            var n = e(t.target).closest("[data-dropdown-content]");
            if (
              e(t.target).data("dropdown") ||
              e(t.target).parent().data("dropdown")
            )
              return;
            if (
              !e(t.target).data("revealId") &&
              n.length > 0 &&
              (e(t.target).is("[data-dropdown-content]") ||
                e.contains(n.first()[0], t.target))
            ) {
              t.stopPropagation();
              return;
            }
            r.close.call(r, e("[data-dropdown-content]"));
          }),
          e(t)
            .on(
              "resize.fndtn.dropdown",
              r.throttle(function () {
                r.resize.call(r);
              }, 50)
            )
            .trigger("resize"),
          (this.settings.init = !0);
      },
      close: function (t) {
        var n = this;
        t.each(function () {
          e(this).hasClass(n.settings.activeClass) &&
            (e(this)
              .css(Foundation.rtl ? "right" : "left", "-99999px")
              .removeClass(n.settings.activeClass),
            e(this).trigger("closed"));
        });
      },
      open: function (e, t) {
        this.css(e.addClass(this.settings.activeClass), t), e.trigger("opened");
      },
      toggle: function (t) {
        var n = e("#" + t.data("dropdown"));
        if (n.length === 0) return;
        this.close.call(this, e("[data-dropdown-content]").not(n)),
          n.hasClass(this.settings.activeClass)
            ? this.close.call(this, n)
            : (this.close.call(this, e("[data-dropdown-content]")),
              this.open.call(this, n, t));
      },
      resize: function () {
        var t = e("[data-dropdown-content].open"),
          n = e("[data-dropdown='" + t.attr("id") + "']");
        t.length && n.length && this.css(t, n);
      },
      css: function (n, r) {
        var i = n.offsetParent(),
          s = r.offset();
        (s.top -= i.offset().top), (s.left -= i.offset().left);
        if (this.small())
          n.css({
            position: "absolute",
            width: "95%",
            "max-width": "none",
            top: s.top + this.outerHeight(r),
          }),
            n.css(Foundation.rtl ? "right" : "left", "2.5%");
        else {
          if (
            !Foundation.rtl &&
            e(t).width() > this.outerWidth(n) + r.offset().left &&
            !this.data_options(r).align_right
          ) {
            var o = s.left;
            n.hasClass("right") && n.removeClass("right");
          } else {
            n.hasClass("right") || n.addClass("right");
            var o = s.left - (this.outerWidth(n) - this.outerWidth(r));
          }
          n.attr("style", "").css({
            position: "absolute",
            top: s.top + this.outerHeight(r),
            left: o,
          });
        }
        return n;
      },
      small: function () {
        return e(t).width() < 768 || e("html").hasClass("lt-ie9");
      },
      off: function () {
        e(this.scope).off(".fndtn.dropdown"),
          e("html, body").off(".fndtn.dropdown"),
          e(t).off(".fndtn.dropdown"),
          e("[data-dropdown-content]").off(".fndtn.dropdown"),
          (this.settings.init = !1);
      },
      reflow: function () {},
    };
  })(Foundation.zj, this, this.document),
  (function (e, t, n, r) {
    "use strict";
    Foundation.libs.forms = {
      name: "forms",
      version: "4.3.2",
      cache: {},
      settings: { disable_class: "no-custom", last_combo: null },
      init: function (t, n, r) {
        return (
          typeof n == "object" && e.extend(!0, this.settings, n),
          typeof n != "string"
            ? (this.settings.init || this.events(),
              this.assemble(),
              this.settings.init)
            : this[n].call(this, r)
        );
      },
      assemble: function () {
        var t = this;
        e('form.custom input[type="radio"],[type="checkbox"]', e(this.scope))
          .not('[data-customforms="disabled"]')
          .not("." + this.settings.disable_class)
          .each(function (e, n) {
            t.set_custom_markup(n);
          })
          .change(function () {
            t.set_custom_markup(this);
          }),
          e("form.custom select", e(this.scope))
            .not('[data-customforms="disabled"]')
            .not("." + this.settings.disable_class)
            .not("[multiple=multiple]")
            .each(this.append_custom_select);
      },
      events: function () {
        var r = this;
        e(this.scope)
          .on(
            "click.fndtn.forms",
            "form.custom span.custom.checkbox",
            function (t) {
              t.preventDefault(),
                t.stopPropagation(),
                r.toggle_checkbox(e(this));
            }
          )
          .on(
            "click.fndtn.forms",
            "form.custom span.custom.radio",
            function (t) {
              t.preventDefault(), t.stopPropagation(), r.toggle_radio(e(this));
            }
          )
          .on("change.fndtn.forms", "form.custom select", function (t, n) {
            if (e(this).is('[data-customforms="disabled"]')) return;
            r.refresh_custom_select(e(this), n);
          })
          .on("click.fndtn.forms", "form.custom label", function (t) {
            if (e(t.target).is("label")) {
              var n = e("#" + r.escape(e(this).attr("for"))).not(
                  '[data-customforms="disabled"]'
                ),
                i,
                s;
              n.length !== 0 &&
                (n.attr("type") === "checkbox"
                  ? (t.preventDefault(),
                    (i = e(this).find("span.custom.checkbox")),
                    i.length === 0 &&
                      (i = n
                        .add(this)
                        .siblings("span.custom.checkbox")
                        .first()),
                    r.toggle_checkbox(i))
                  : n.attr("type") === "radio" &&
                    (t.preventDefault(),
                    (s = e(this).find("span.custom.radio")),
                    s.length === 0 &&
                      (s = n.add(this).siblings("span.custom.radio").first()),
                    r.toggle_radio(s)));
            }
          })
          .on(
            "mousedown.fndtn.forms",
            "form.custom div.custom.dropdown",
            function () {
              return !1;
            }
          )
          .on(
            "click.fndtn.forms",
            "form.custom div.custom.dropdown a.current, form.custom div.custom.dropdown a.selector",
            function (t) {
              var n = e(this),
                s = n.closest("div.custom.dropdown"),
                o = i(s, "select");
              s.hasClass("open") || e(r.scope).trigger("click"),
                t.preventDefault();
              if (!1 === o.is(":disabled"))
                return (
                  s.toggleClass("open"),
                  s.hasClass("open")
                    ? e(r.scope).on(
                        "click.fndtn.forms.customdropdown",
                        function () {
                          s.removeClass("open"),
                            e(r.scope).off(".fndtn.forms.customdropdown");
                        }
                      )
                    : e(r.scope).on(".fndtn.forms.customdropdown"),
                  !1
                );
            }
          )
          .on(
            "click.fndtn.forms touchend.fndtn.forms",
            "form.custom div.custom.dropdown li",
            function (t) {
              var r = e(this),
                s = r.closest("div.custom.dropdown"),
                o = i(s, "select"),
                u = 0;
              t.preventDefault(), t.stopPropagation();
              if (!e(this).hasClass("disabled")) {
                e("div.dropdown").not(s).removeClass("open");
                var a = r.closest("ul").find("li.selected");
                a.removeClass("selected"),
                  r.addClass("selected"),
                  s.removeClass("open").find("a.current").text(r.text()),
                  r
                    .closest("ul")
                    .find("li")
                    .each(function (e) {
                      r[0] === this && (u = e);
                    }),
                  (o[0].selectedIndex = u),
                  o.data("prevalue", a.html());
                if (typeof n.createEvent != "undefined") {
                  var f = n.createEvent("HTMLEvents");
                  f.initEvent("change", !0, !0), o[0].dispatchEvent(f);
                } else o[0].fireEvent("onchange");
              }
            }
          ),
          e(t).on("keydown", function (t) {
            var r = n.activeElement,
              s = Foundation.libs.forms,
              o = e(".custom.dropdown"),
              u = i(o, "select"),
              a = e("input,select,textarea,button");
            if (o.length > 0 && o.hasClass("open")) {
              t.preventDefault(),
                t.which === 9 &&
                  (e(a[e(a).index(u) + 1]).focus(), o.removeClass("open")),
                t.which === 13 && o.find("li.selected").trigger("click"),
                t.which === 27 && o.removeClass("open");
              if (t.which >= 65 && t.which <= 90) {
                var f = s.go_to(o, t.which),
                  l = o.find("li.selected");
                f &&
                  (l.removeClass("selected"),
                  s.scrollTo(f.addClass("selected"), 300));
              }
              if (t.which === 38) {
                var l = o.find("li.selected"),
                  c = l.prev(":not(.disabled)");
                c.length > 0 &&
                  ((c.parent()[0].scrollTop =
                    c.parent().scrollTop() - s.outerHeight(c)),
                  l.removeClass("selected"),
                  c.addClass("selected"));
              } else if (t.which === 40) {
                var l = o.find("li.selected"),
                  f = l.next(":not(.disabled)");
                f.length > 0 &&
                  ((f.parent()[0].scrollTop =
                    f.parent().scrollTop() + s.outerHeight(f)),
                  l.removeClass("selected"),
                  f.addClass("selected"));
              }
            }
          }),
          e(t).on("keyup", function (t) {
            var r = n.activeElement,
              i = e(".custom.dropdown");
            r === i.find(".current")[0] && i.find(".selector").focus().click();
          }),
          (this.settings.init = !0);
      },
      go_to: function (e, t) {
        var n = e.find("li"),
          r = n.length;
        if (r > 0)
          for (var i = 0; i < r; i++) {
            var s = n.eq(i).text().charAt(0).toLowerCase();
            if (s === String.fromCharCode(t).toLowerCase()) return n.eq(i);
          }
      },
      scrollTo: function (e, t) {
        if (t < 0) return;
        var n = e.parent(),
          r = this.outerHeight(e),
          i = r * e.index() - n.scrollTop(),
          s = (i / t) * 10;
        this.scrollToTimerCache = setTimeout(
          function () {
            isNaN(parseInt(s, 10)) ||
              ((n[0].scrollTop = n.scrollTop() + s), this.scrollTo(e, t - 10));
          }.bind(this),
          10
        );
      },
      set_custom_markup: function (t) {
        var n = e(t),
          r = n.attr("type"),
          i = n.next("span.custom." + r);
        n.parent().hasClass("switch") || n.addClass("hidden-field"),
          i.length === 0 &&
            (i = e('<span class="custom ' + r + '"></span>').insertAfter(n)),
          i.toggleClass("checked", n.is(":checked")),
          i.toggleClass("disabled", n.is(":disabled"));
      },
      append_custom_select: function (t, n) {
        var r = Foundation.libs.forms,
          i = e(n),
          s = i.next("div.custom.dropdown"),
          o = s.find("ul"),
          u = s.find(".current"),
          a = s.find(".selector"),
          f = i.find("option"),
          l = f.filter(":selected"),
          c = i.attr("class") ? i.attr("class").split(" ") : [],
          h = 0,
          p = "",
          d,
          v = !1;
        if (s.length === 0) {
          var m = i.hasClass("small")
            ? "small"
            : i.hasClass("medium")
            ? "medium"
            : i.hasClass("large")
            ? "large"
            : i.hasClass("expand")
            ? "expand"
            : "";
          (s = e(
            '<div class="' +
              ["custom", "dropdown", m]
                .concat(c)
                .filter(function (e, t, n) {
                  return e === "" ? !1 : n.indexOf(e) === t;
                })
                .join(" ") +
              '"><a href="#" class="selector"></a><ul /></div>'
          )),
            (a = s.find(".selector")),
            (o = s.find("ul")),
            (p = f
              .map(function () {
                var t = e(this).attr("class") ? e(this).attr("class") : "";
                return "<li class='" + t + "'>" + e(this).html() + "</li>";
              })
              .get()
              .join("")),
            o.append(p),
            (v = s
              .prepend(
                '<a href="#" class="current">' + (l.html() || "") + "</a>"
              )
              .find(".current")),
            i.after(s).addClass("hidden-field");
        } else
          (p = f
            .map(function () {
              return "<li>" + e(this).html() + "</li>";
            })
            .get()
            .join("")),
            o.html("").append(p);
        r.assign_id(i, s),
          s.toggleClass("disabled", i.is(":disabled")),
          (d = o.find("li")),
          (r.cache[s.data("id")] = d.length),
          f.each(function (t) {
            this.selected &&
              (d.eq(t).addClass("selected"), v && v.html(e(this).html())),
              e(this).is(":disabled") && d.eq(t).addClass("disabled");
          });
        if (!s.is(".small, .medium, .large, .expand")) {
          s.addClass("open");
          var r = Foundation.libs.forms;
          r.hidden_fix.adjust(o),
            (h = r.outerWidth(d) > h ? r.outerWidth(d) : h),
            Foundation.libs.forms.hidden_fix.reset(),
            s.removeClass("open");
        }
      },
      assign_id: function (e, t) {
        var n = [+new Date(), Foundation.random_str(5)].join("-");
        e.attr("data-id", n), t.attr("data-id", n);
      },
      refresh_custom_select: function (t, n) {
        var r = this,
          i = 0,
          s = t.next(),
          o = t.find("option"),
          u = s.find("ul"),
          a = s.find("li");
        if (o.length !== this.cache[s.data("id")] || n) {
          u.html("");
          var f = "";
          o.each(function () {
            var t = e(this),
              n = t.html(),
              r = this.selected;
            (f +=
              '<li class="' +
              (r ? " selected " : "") +
              (t.is(":disabled") ? " disabled " : "") +
              '">' +
              n +
              "</li>"),
              r && s.find(".current").html(n);
          }),
            u.html(f),
            s.removeAttr("style"),
            u.removeAttr("style"),
            s.find("li").each(function () {
              s.addClass("open"),
                r.outerWidth(e(this)) > i && (i = r.outerWidth(e(this))),
                s.removeClass("open");
            }),
            (a = s.find("li")),
            (this.cache[s.data("id")] = a.length);
        }
      },
      refresh_custom_selection: function (t) {
        var n = e("option:selected", t).text();
        e("a.current", t.next()).text(n);
      },
      toggle_checkbox: function (e) {
        var t = e.prev(),
          n = t[0];
        !1 === t.is(":disabled") &&
          ((n.checked = n.checked ? !1 : !0),
          e.toggleClass("checked"),
          t.trigger("change"));
      },
      toggle_radio: function (e) {
        var t = e.prev(),
          n = t.closest("form.custom"),
          r = t[0];
        !1 === t.is(":disabled") &&
          (n
            .find(
              'input[type="radio"][name="' + this.escape(t.attr("name")) + '"]'
            )
            .next()
            .not(e)
            .removeClass("checked"),
          e.hasClass("checked") || e.toggleClass("checked"),
          (r.checked = e.hasClass("checked")),
          t.trigger("change"));
      },
      escape: function (e) {
        return e ? e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : "";
      },
      hidden_fix: {
        tmp: [],
        hidden: null,
        adjust: function (t) {
          var n = this;
          (n.hidden = t.parents()),
            (n.hidden = n.hidden.add(t).filter(":hidden")),
            n.hidden.each(function () {
              var t = e(this);
              n.tmp.push(t.attr("style")),
                t.css({ visibility: "hidden", display: "block" });
            });
        },
        reset: function () {
          var t = this;
          t.hidden.each(function (n) {
            var i = e(this),
              s = t.tmp[n];
            s === r ? i.removeAttr("style") : i.attr("style", s);
          }),
            (t.tmp = []),
            (t.hidden = null);
        },
      },
      off: function () {
        e(this.scope).off(".fndtn.forms");
      },
      reflow: function () {},
    };
    var i = function (t, n) {
      var t = t.prev();
      while (t.length) {
        if (t.is(n)) return t;
        t = t.prev();
      }
      return e();
    };
  })(Foundation.zj, this, this.document),
  (function (e, t, n, r) {
    "use strict";
    var i = i || !1;
    Foundation.libs.joyride = {
      name: "joyride",
      version: "4.3.2",
      defaults: {
        expose: !1,
        modal: !1,
        tipLocation: "bottom",
        nubPosition: "auto",
        scrollSpeed: 300,
        timer: 0,
        startTimerOnClick: !0,
        startOffset: 0,
        nextButton: !0,
        tipAnimation: "fade",
        pauseAfter: [],
        exposed: [],
        tipAnimationFadeSpeed: 300,
        cookieMonster: !1,
        cookieName: "joyride",
        cookieDomain: !1,
        cookieExpires: 365,
        tipContainer: "body",
        postRideCallback: function () {},
        postStepCallback: function () {},
        preStepCallback: function () {},
        preRideCallback: function () {},
        postExposeCallback: function () {},
        template: {
          link: '<a href="#close" class="joyride-close-tip">&times;</a>',
          timer:
            '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
          tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
          wrapper: '<div class="joyride-content-wrapper"></div>',
          button: '<a href="#" class="small button joyride-next-tip"></a>',
          modal: '<div class="joyride-modal-bg"></div>',
          expose: '<div class="joyride-expose-wrapper"></div>',
          exposeCover: '<div class="joyride-expose-cover"></div>',
        },
        exposeAddClass: "",
      },
      settings: {},
      init: function (t, n, r) {
        return (
          (this.scope = t || this.scope),
          Foundation.inherit(
            this,
            "throttle data_options scrollTo scrollLeft delay"
          ),
          typeof n == "object"
            ? e.extend(!0, this.settings, this.defaults, n)
            : e.extend(!0, this.settings, this.defaults, r),
          typeof n != "string"
            ? (this.settings.init || this.events(), this.settings.init)
            : this[n].call(this, r)
        );
      },
      events: function () {
        var n = this;
        e(this.scope)
          .on(
            "click.joyride",
            ".joyride-next-tip, .joyride-modal-bg",
            function (e) {
              e.preventDefault(),
                this.settings.$li.next().length < 1
                  ? this.end()
                  : this.settings.timer > 0
                  ? (clearTimeout(this.settings.automate),
                    this.hide(),
                    this.show(),
                    this.startTimer())
                  : (this.hide(), this.show());
            }.bind(this)
          )
          .on(
            "click.joyride",
            ".joyride-close-tip",
            function (e) {
              e.preventDefault(), this.end();
            }.bind(this)
          ),
          e(t).on(
            "resize.fndtn.joyride",
            n.throttle(function () {
              if (e("[data-joyride]").length > 0 && n.settings.$next_tip) {
                if (n.settings.exposed.length > 0) {
                  var t = e(n.settings.exposed);
                  t.each(function () {
                    var t = e(this);
                    n.un_expose(t), n.expose(t);
                  });
                }
                n.is_phone() ? n.pos_phone() : n.pos_default(!1, !0);
              }
            }, 100)
          ),
          (this.settings.init = !0);
      },
      start: function () {
        var t = this,
          n = e(this.scope).find("[data-joyride]"),
          r = [
            "timer",
            "scrollSpeed",
            "startOffset",
            "tipAnimationFadeSpeed",
            "cookieExpires",
          ],
          i = r.length;
        this.settings.init || this.events(),
          (this.settings.$content_el = n),
          (this.settings.$body = e(this.settings.tipContainer)),
          (this.settings.body_offset = e(
            this.settings.tipContainer
          ).position()),
          (this.settings.$tip_content = this.settings.$content_el.find("> li")),
          (this.settings.paused = !1),
          (this.settings.attempts = 0),
          (this.settings.tipLocationPatterns = {
            top: ["bottom"],
            bottom: [],
            left: ["right", "top", "bottom"],
            right: ["left", "top", "bottom"],
          }),
          typeof e.cookie != "function" && (this.settings.cookieMonster = !1);
        if (
          !this.settings.cookieMonster ||
          (this.settings.cookieMonster &&
            e.cookie(this.settings.cookieName) === null)
        )
          this.settings.$tip_content.each(function (n) {
            var s = e(this);
            e.extend(!0, t.settings, t.data_options(s));
            for (var o = i - 1; o >= 0; o--)
              t.settings[r[o]] = parseInt(t.settings[r[o]], 10);
            t.create({ $li: s, index: n });
          }),
            !this.settings.startTimerOnClick && this.settings.timer > 0
              ? (this.show("init"), this.startTimer())
              : this.show("init");
      },
      resume: function () {
        this.set_li(), this.show();
      },
      tip_template: function (t) {
        var n, r;
        return (
          (t.tip_class = t.tip_class || ""),
          (n = e(this.settings.template.tip).addClass(t.tip_class)),
          (r =
            e.trim(e(t.li).html()) +
            this.button_text(t.button_text) +
            this.settings.template.link +
            this.timer_instance(t.index)),
          n.append(e(this.settings.template.wrapper)),
          n.first().attr("data-index", t.index),
          e(".joyride-content-wrapper", n).append(r),
          n[0]
        );
      },
      timer_instance: function (t) {
        var n;
        return (
          (t === 0 &&
            this.settings.startTimerOnClick &&
            this.settings.timer > 0) ||
          this.settings.timer === 0
            ? (n = "")
            : (n = this.outerHTML(e(this.settings.template.timer)[0])),
          n
        );
      },
      button_text: function (t) {
        return (
          this.settings.nextButton
            ? ((t = e.trim(t) || "Next"),
              (t = this.outerHTML(
                e(this.settings.template.button).append(t)[0]
              )))
            : (t = ""),
          t
        );
      },
      create: function (t) {
        var n = t.$li.attr("data-button") || t.$li.attr("data-text"),
          r = t.$li.attr("class"),
          i = e(
            this.tip_template({
              tip_class: r,
              index: t.index,
              button_text: n,
              li: t.$li,
            })
          );
        e(this.settings.tipContainer).append(i);
      },
      show: function (t) {
        var n = null;
        this.settings.$li === r ||
        e.inArray(this.settings.$li.index(), this.settings.pauseAfter) === -1
          ? (this.settings.paused
              ? (this.settings.paused = !1)
              : this.set_li(t),
            (this.settings.attempts = 0),
            this.settings.$li.length && this.settings.$target.length > 0
              ? (t &&
                  (this.settings.preRideCallback(
                    this.settings.$li.index(),
                    this.settings.$next_tip
                  ),
                  this.settings.modal && this.show_modal()),
                this.settings.preStepCallback(
                  this.settings.$li.index(),
                  this.settings.$next_tip
                ),
                this.settings.modal && this.settings.expose && this.expose(),
                (this.settings.tipSettings = e.extend(
                  this.settings,
                  this.data_options(this.settings.$li)
                )),
                (this.settings.timer = parseInt(this.settings.timer, 10)),
                (this.settings.tipSettings.tipLocationPattern =
                  this.settings.tipLocationPatterns[
                    this.settings.tipSettings.tipLocation
                  ]),
                /body/i.test(this.settings.$target.selector) ||
                  this.scroll_to(),
                this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0),
                (n = this.settings.$next_tip.find(".joyride-timer-indicator")),
                /pop/i.test(this.settings.tipAnimation)
                  ? (n.width(0),
                    this.settings.timer > 0
                      ? (this.settings.$next_tip.show(),
                        this.delay(
                          function () {
                            n.animate(
                              { width: n.parent().width() },
                              this.settings.timer,
                              "linear"
                            );
                          }.bind(this),
                          this.settings.tipAnimationFadeSpeed
                        ))
                      : this.settings.$next_tip.show())
                  : /fade/i.test(this.settings.tipAnimation) &&
                    (n.width(0),
                    this.settings.timer > 0
                      ? (this.settings.$next_tip
                          .fadeIn(this.settings.tipAnimationFadeSpeed)
                          .show(),
                        this.delay(
                          function () {
                            n.animate(
                              { width: n.parent().width() },
                              this.settings.timer,
                              "linear"
                            );
                          }.bind(this),
                          this.settings.tipAnimationFadeSpeed
                        ))
                      : this.settings.$next_tip.fadeIn(
                          this.settings.tipAnimationFadeSpeed
                        )),
                (this.settings.$current_tip = this.settings.$next_tip))
              : this.settings.$li && this.settings.$target.length < 1
              ? this.show()
              : this.end())
          : (this.settings.paused = !0);
      },
      is_phone: function () {
        return i
          ? i.mq("only screen and (max-width: 767px)") ||
              e(".lt-ie9").length > 0
          : e(t).width() < 767;
      },
      hide: function () {
        this.settings.modal && this.settings.expose && this.un_expose(),
          this.settings.modal || e(".joyride-modal-bg").hide(),
          this.settings.$current_tip.css("visibility", "hidden"),
          setTimeout(
            e.proxy(function () {
              this.hide(), this.css("visibility", "visible");
            }, this.settings.$current_tip),
            0
          ),
          this.settings.postStepCallback(
            this.settings.$li.index(),
            this.settings.$current_tip
          );
      },
      set_li: function (e) {
        e
          ? ((this.settings.$li = this.settings.$tip_content.eq(
              this.settings.startOffset
            )),
            this.set_next_tip(),
            (this.settings.$current_tip = this.settings.$next_tip))
          : ((this.settings.$li = this.settings.$li.next()),
            this.set_next_tip()),
          this.set_target();
      },
      set_next_tip: function () {
        (this.settings.$next_tip = e(
          ".joyride-tip-guide[data-index='" + this.settings.$li.index() + "']"
        )),
          this.settings.$next_tip.data("closed", "");
      },
      set_target: function () {
        var t = this.settings.$li.attr("data-class"),
          r = this.settings.$li.attr("data-id"),
          i = function () {
            return r
              ? e(n.getElementById(r))
              : t
              ? e("." + t).first()
              : e("body");
          };
        this.settings.$target = i();
      },
      scroll_to: function () {
        var n, r;
        (n = e(t).height() / 2),
          (r = Math.ceil(
            this.settings.$target.offset().top -
              n +
              this.outerHeight(this.settings.$next_tip)
          )),
          r > 0 && this.scrollTo(e("html, body"), r, this.settings.scrollSpeed);
      },
      paused: function () {
        return (
          e.inArray(this.settings.$li.index() + 1, this.settings.pauseAfter) ===
          -1
        );
      },
      restart: function () {
        this.hide(), (this.settings.$li = r), this.show("init");
      },
      pos_default: function (n, r) {
        var i = Math.ceil(e(t).height() / 2),
          s = this.settings.$next_tip.offset(),
          o = this.settings.$next_tip.find(".joyride-nub"),
          u = Math.ceil(this.outerWidth(o) / 2),
          a = Math.ceil(this.outerHeight(o) / 2),
          f = n || !1;
        f &&
          (this.settings.$next_tip.css("visibility", "hidden"),
          this.settings.$next_tip.show()),
          typeof r == "undefined" && (r = !1);
        if (!/body/i.test(this.settings.$target.selector)) {
          if (this.bottom()) {
            var l = this.settings.$target.offset().left;
            Foundation.rtl &&
              (l =
                this.settings.$target.offset().width -
                this.settings.$next_tip.width() +
                l),
              this.settings.$next_tip.css({
                top:
                  this.settings.$target.offset().top +
                  a +
                  this.outerHeight(this.settings.$target),
                left: l,
              }),
              this.nub_position(
                o,
                this.settings.tipSettings.nubPosition,
                "top"
              );
          } else if (this.top()) {
            var l = this.settings.$target.offset().left;
            Foundation.rtl &&
              (l =
                this.settings.$target.offset().width -
                this.settings.$next_tip.width() +
                l),
              this.settings.$next_tip.css({
                top:
                  this.settings.$target.offset().top -
                  this.outerHeight(this.settings.$next_tip) -
                  a,
                left: l,
              }),
              this.nub_position(
                o,
                this.settings.tipSettings.nubPosition,
                "bottom"
              );
          } else
            this.right()
              ? (this.settings.$next_tip.css({
                  top: this.settings.$target.offset().top,
                  left:
                    this.outerWidth(this.settings.$target) +
                    this.settings.$target.offset().left +
                    u,
                }),
                this.nub_position(
                  o,
                  this.settings.tipSettings.nubPosition,
                  "left"
                ))
              : this.left() &&
                (this.settings.$next_tip.css({
                  top: this.settings.$target.offset().top,
                  left:
                    this.settings.$target.offset().left -
                    this.outerWidth(this.settings.$next_tip) -
                    u,
                }),
                this.nub_position(
                  o,
                  this.settings.tipSettings.nubPosition,
                  "right"
                ));
          !this.visible(this.corners(this.settings.$next_tip)) &&
            this.settings.attempts <
              this.settings.tipSettings.tipLocationPattern.length &&
            (o
              .removeClass("bottom")
              .removeClass("top")
              .removeClass("right")
              .removeClass("left"),
            (this.settings.tipSettings.tipLocation =
              this.settings.tipSettings.tipLocationPattern[
                this.settings.attempts
              ]),
            this.settings.attempts++,
            this.pos_default());
        } else this.settings.$li.length && this.pos_modal(o);
        f &&
          (this.settings.$next_tip.hide(),
          this.settings.$next_tip.css("visibility", "visible"));
      },
      pos_phone: function (t) {
        var n = this.outerHeight(this.settings.$next_tip),
          r = this.settings.$next_tip.offset(),
          i = this.outerHeight(this.settings.$target),
          s = e(".joyride-nub", this.settings.$next_tip),
          o = Math.ceil(this.outerHeight(s) / 2),
          u = t || !1;
        s
          .removeClass("bottom")
          .removeClass("top")
          .removeClass("right")
          .removeClass("left"),
          u &&
            (this.settings.$next_tip.css("visibility", "hidden"),
            this.settings.$next_tip.show()),
          /body/i.test(this.settings.$target.selector)
            ? this.settings.$li.length && this.pos_modal(s)
            : this.top()
            ? (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top - n - o,
              }),
              s.addClass("bottom"))
            : (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top + i + o,
              }),
              s.addClass("top")),
          u &&
            (this.settings.$next_tip.hide(),
            this.settings.$next_tip.css("visibility", "visible"));
      },
      pos_modal: function (e) {
        this.center(), e.hide(), this.show_modal();
      },
      show_modal: function () {
        if (!this.settings.$next_tip.data("closed")) {
          var t = e(".joyride-modal-bg");
          t.length < 1 && e("body").append(this.settings.template.modal).show(),
            /pop/i.test(this.settings.tipAnimation)
              ? t.show()
              : t.fadeIn(this.settings.tipAnimationFadeSpeed);
        }
      },
      expose: function () {
        var n,
          r,
          i,
          s,
          o,
          u = "expose-" + Math.floor(Math.random() * 1e4);
        if (arguments.length > 0 && arguments[0] instanceof e) i = arguments[0];
        else {
          if (
            !this.settings.$target ||
            !!/body/i.test(this.settings.$target.selector)
          )
            return !1;
          i = this.settings.$target;
        }
        if (i.length < 1)
          return t.console && console.error("element not valid", i), !1;
        (n = e(this.settings.template.expose)),
          this.settings.$body.append(n),
          n.css({
            top: i.offset().top,
            left: i.offset().left,
            width: this.outerWidth(i, !0),
            height: this.outerHeight(i, !0),
          }),
          (r = e(this.settings.template.exposeCover)),
          (s = { zIndex: i.css("z-index"), position: i.css("position") }),
          (o = i.attr("class") == null ? "" : i.attr("class")),
          i.css("z-index", parseInt(n.css("z-index")) + 1),
          s.position == "static" && i.css("position", "relative"),
          i.data("expose-css", s),
          i.data("orig-class", o),
          i.attr("class", o + " " + this.settings.exposeAddClass),
          r.css({
            top: i.offset().top,
            left: i.offset().left,
            width: this.outerWidth(i, !0),
            height: this.outerHeight(i, !0),
          }),
          this.settings.$body.append(r),
          n.addClass(u),
          r.addClass(u),
          i.data("expose", u),
          this.settings.postExposeCallback(
            this.settings.$li.index(),
            this.settings.$next_tip,
            i
          ),
          this.add_exposed(i);
      },
      un_expose: function () {
        var n,
          r,
          i,
          s,
          o,
          u = !1;
        if (arguments.length > 0 && arguments[0] instanceof e) r = arguments[0];
        else {
          if (
            !this.settings.$target ||
            !!/body/i.test(this.settings.$target.selector)
          )
            return !1;
          r = this.settings.$target;
        }
        if (r.length < 1)
          return t.console && console.error("element not valid", r), !1;
        (n = r.data("expose")),
          (i = e("." + n)),
          arguments.length > 1 && (u = arguments[1]),
          u === !0
            ? e(".joyride-expose-wrapper,.joyride-expose-cover").remove()
            : i.remove(),
          (s = r.data("expose-css")),
          s.zIndex == "auto"
            ? r.css("z-index", "")
            : r.css("z-index", s.zIndex),
          s.position != r.css("position") &&
            (s.position == "static"
              ? r.css("position", "")
              : r.css("position", s.position)),
          (o = r.data("orig-class")),
          r.attr("class", o),
          r.removeData("orig-classes"),
          r.removeData("expose"),
          r.removeData("expose-z-index"),
          this.remove_exposed(r);
      },
      add_exposed: function (t) {
        (this.settings.exposed = this.settings.exposed || []),
          t instanceof e || typeof t == "object"
            ? this.settings.exposed.push(t[0])
            : typeof t == "string" && this.settings.exposed.push(t);
      },
      remove_exposed: function (t) {
        var n, r;
        t instanceof e ? (n = t[0]) : typeof t == "string" && (n = t),
          (this.settings.exposed = this.settings.exposed || []),
          (r = this.settings.exposed.length);
        for (var i = 0; i < r; i++)
          if (this.settings.exposed[i] == n) {
            this.settings.exposed.splice(i, 1);
            return;
          }
      },
      center: function () {
        var n = e(t);
        return (
          this.settings.$next_tip.css({
            top:
              (n.height() - this.outerHeight(this.settings.$next_tip)) / 2 +
              n.scrollTop(),
            left:
              (n.width() - this.outerWidth(this.settings.$next_tip)) / 2 +
              this.scrollLeft(n),
          }),
          !0
        );
      },
      bottom: function () {
        return /bottom/i.test(this.settings.tipSettings.tipLocation);
      },
      top: function () {
        return /top/i.test(this.settings.tipSettings.tipLocation);
      },
      right: function () {
        return /right/i.test(this.settings.tipSettings.tipLocation);
      },
      left: function () {
        return /left/i.test(this.settings.tipSettings.tipLocation);
      },
      corners: function (n) {
        var r = e(t),
          i = r.height() / 2,
          s = Math.ceil(
            this.settings.$target.offset().top -
              i +
              this.settings.$next_tip.outerHeight()
          ),
          o = r.width() + this.scrollLeft(r),
          u = r.height() + s,
          a = r.height() + r.scrollTop(),
          f = r.scrollTop();
        return (
          s < f && (s < 0 ? (f = 0) : (f = s)),
          u > a && (a = u),
          [
            n.offset().top < f,
            o < n.offset().left + n.outerWidth(),
            a < n.offset().top + n.outerHeight(),
            this.scrollLeft(r) > n.offset().left,
          ]
        );
      },
      visible: function (e) {
        var t = e.length;
        while (t--) if (e[t]) return !1;
        return !0;
      },
      nub_position: function (e, t, n) {
        t === "auto" ? e.addClass(n) : e.addClass(t);
      },
      startTimer: function () {
        this.settings.$li.length
          ? (this.settings.automate = setTimeout(
              function () {
                this.hide(), this.show(), this.startTimer();
              }.bind(this),
              this.settings.timer
            ))
          : clearTimeout(this.settings.automate);
      },
      end: function () {
        this.settings.cookieMonster &&
          e.cookie(this.settings.cookieName, "ridden", {
            expires: this.settings.cookieExpires,
            domain: this.settings.cookieDomain,
          }),
          this.settings.timer > 0 && clearTimeout(this.settings.automate),
          this.settings.modal && this.settings.expose && this.un_expose(),
          this.settings.$next_tip.data("closed", !0),
          e(".joyride-modal-bg").hide(),
          this.settings.$current_tip.hide(),
          this.settings.postStepCallback(
            this.settings.$li.index(),
            this.settings.$current_tip
          ),
          this.settings.postRideCallback(
            this.settings.$li.index(),
            this.settings.$current_tip
          ),
          e(".joyride-tip-guide").remove();
      },
      outerHTML: function (e) {
        return e.outerHTML || new XMLSerializer().serializeToString(e);
      },
      off: function () {
        e(this.scope).off(".joyride"),
          e(t).off(".joyride"),
          e(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(
            ".joyride"
          ),
          e(".joyride-tip-guide, .joyride-modal-bg").remove(),
          clearTimeout(this.settings.automate),
          (this.settings = {});
      },
      reflow: function () {},
    };
  })(Foundation.zj, this, this.document),
  (function (e, t, n, r) {
    "use strict";
    Foundation.libs.magellan = {
      name: "magellan",
      version: "4.3.2",
      settings: { activeClass: "active", threshold: 0 },
      init: function (t, n, r) {
        return (
          (this.scope = t || this.scope),
          Foundation.inherit(this, "data_options"),
          typeof n == "object" && e.extend(!0, this.settings, n),
          typeof n != "string"
            ? (this.settings.init ||
                ((this.fixed_magellan = e("[data-magellan-expedition]")),
                this.set_threshold(),
                (this.last_destination = e(
                  "[data-magellan-destination]"
                ).last()),
                this.events()),
              this.settings.init)
            : this[n].call(this, r)
        );
      },
      events: function () {
        var n = this;
        e(this.scope).on(
          "arrival.fndtn.magellan",
          "[data-magellan-arrival]",
          function (t) {
            var r = e(this),
              i = r.closest("[data-magellan-expedition]"),
              s =
                i.attr("data-magellan-active-class") || n.settings.activeClass;
            r
              .closest("[data-magellan-expedition]")
              .find("[data-magellan-arrival]")
              .not(r)
              .removeClass(s),
              r.addClass(s);
          }
        ),
          this.fixed_magellan
            .on("update-position.fndtn.magellan", function () {
              var t = e(this);
            })
            .trigger("update-position"),
          e(t)
            .on(
              "resize.fndtn.magellan",
              function () {
                this.fixed_magellan.trigger("update-position");
              }.bind(this)
            )
            .on("scroll.fndtn.magellan", function () {
              var r = e(t).scrollTop();
              n.fixed_magellan.each(function () {
                var t = e(this);
                typeof t.data("magellan-top-offset") == "undefined" &&
                  t.data("magellan-top-offset", t.offset().top),
                  typeof t.data("magellan-fixed-position") == "undefined" &&
                    t.data("magellan-fixed-position", !1);
                var i =
                    r + n.settings.threshold > t.data("magellan-top-offset"),
                  s = t.attr("data-magellan-top-offset");
                t.data("magellan-fixed-position") != i &&
                  (t.data("magellan-fixed-position", i),
                  i
                    ? (t.addClass("fixed"),
                      t.css({ position: "fixed", top: 0 }))
                    : (t.removeClass("fixed"),
                      t.css({ position: "", top: "" })),
                  i &&
                    typeof s != "undefined" &&
                    s != 0 &&
                    t.css({ position: "fixed", top: s + "px" }));
              });
            }),
          this.last_destination.length > 0 &&
            e(t).on("scroll.fndtn.magellan", function (r) {
              var i = e(t).scrollTop(),
                s = i + e(t).height(),
                o = Math.ceil(n.last_destination.offset().top);
              e("[data-magellan-destination]").each(function () {
                var t = e(this),
                  r = t.attr("data-magellan-destination"),
                  u = t.offset().top - i;
                u <= n.settings.threshold &&
                  e("[data-magellan-arrival='" + r + "']").trigger("arrival"),
                  s >= e(n.scope).height() &&
                    o > i &&
                    o < s &&
                    e("[data-magellan-arrival]").last().trigger("arrival");
              });
            }),
          (this.settings.init = !0);
      },
      set_threshold: function () {
        typeof this.settings.threshold != "number" &&
          (this.settings.threshold =
            this.fixed_magellan.length > 0
              ? this.outerHeight(this.fixed_magellan, !0)
              : 0);
      },
      off: function () {
        e(this.scope).off(".fndtn.magellan"), e(t).off(".fndtn.magellan");
      },
      reflow: function () {},
    };
  })(Foundation.zj, this, this.document),
  (function (e, t, n, r) {
    "use strict";
    var i = function () {},
      s = function (i, s) {
        if (i.hasClass(s.slides_container_class)) return this;
        var f = this,
          l,
          c = i,
          h,
          p,
          d,
          v = 0,
          m,
          g,
          y = !1,
          b = !1;
        c.children().first().addClass(s.active_slide_class),
          (f.update_slide_number = function (t) {
            s.slide_number &&
              (h.find("span:first").text(parseInt(t) + 1),
              h.find("span:last").text(c.children().length)),
              s.bullets &&
                (p.children().removeClass(s.bullets_active_class),
                e(p.children().get(t)).addClass(s.bullets_active_class));
          }),
          (f.update_active_link = function (t) {
            var n = e(
              'a[data-orbit-link="' +
                c.children().eq(t).attr("data-orbit-slide") +
                '"]'
            );
            n
              .parents("ul")
              .find("[data-orbit-link]")
              .removeClass(s.bullets_active_class),
              n.addClass(s.bullets_active_class);
          }),
          (f.build_markup = function () {
            c.wrap('<div class="' + s.container_class + '"></div>'),
              (l = c.parent()),
              c.addClass(s.slides_container_class),
              s.navigation_arrows &&
                (l.append(
                  e('<a href="#"><span></span></a>').addClass(s.prev_class)
                ),
                l.append(
                  e('<a href="#"><span></span></a>').addClass(s.next_class)
                )),
              s.timer &&
                ((d = e("<div>").addClass(s.timer_container_class)),
                d.append("<span>"),
                d.append(e("<div>").addClass(s.timer_progress_class)),
                d.addClass(s.timer_paused_class),
                l.append(d)),
              s.slide_number &&
                ((h = e("<div>").addClass(s.slide_number_class)),
                h.append(
                  "<span></span> " + s.slide_number_text + " <span></span>"
                ),
                l.append(h)),
              s.bullets &&
                ((p = e("<ol>").addClass(s.bullets_container_class)),
                l.append(p),
                c.children().each(function (t, n) {
                  var r = e("<li>").attr("data-orbit-slide", t);
                  p.append(r);
                })),
              s.stack_on_small && l.addClass(s.stack_on_small_class),
              f.update_slide_number(0),
              f.update_active_link(0);
          }),
          (f._goto = function (t, n) {
            if (t === v) return !1;
            typeof g == "object" && g.restart();
            var r = c.children(),
              i = "next";
            (y = !0),
              t < v && (i = "prev"),
              t >= r.length ? (t = 0) : t < 0 && (t = r.length - 1);
            var o = e(r.get(v)),
              u = e(r.get(t));
            o.css("zIndex", 2),
              o.removeClass(s.active_slide_class),
              u.css("zIndex", 4).addClass(s.active_slide_class),
              c.trigger("orbit:before-slide-change"),
              s.before_slide_change(),
              f.update_active_link(t);
            var a = function () {
              var e = function () {
                (v = t),
                  (y = !1),
                  n === !0 && ((g = f.create_timer()), g.start()),
                  f.update_slide_number(v),
                  c.trigger("orbit:after-slide-change", [
                    { slide_number: v, total_slides: r.length },
                  ]),
                  s.after_slide_change(v, r.length);
              };
              c.height() != u.height() && s.variable_height
                ? c.animate({ height: u.height() }, 250, "linear", e)
                : e();
            };
            if (r.length === 1) return a(), !1;
            var l = function () {
              i === "next" && m.next(o, u, a), i === "prev" && m.prev(o, u, a);
            };
            u.height() > c.height() && s.variable_height
              ? c.animate({ height: u.height() }, 250, "linear", l)
              : l();
          }),
          (f.next = function (e) {
            e.stopImmediatePropagation(), e.preventDefault(), f._goto(v + 1);
          }),
          (f.prev = function (e) {
            e.stopImmediatePropagation(), e.preventDefault(), f._goto(v - 1);
          }),
          (f.link_custom = function (t) {
            t.preventDefault();
            var n = e(this).attr("data-orbit-link");
            if (typeof n == "string" && (n = e.trim(n)) != "") {
              var r = l.find("[data-orbit-slide=" + n + "]");
              r.index() != -1 && f._goto(r.index());
            }
          }),
          (f.link_bullet = function (t) {
            var n = e(this).attr("data-orbit-slide");
            typeof n == "string" &&
              (n = e.trim(n)) != "" &&
              f._goto(parseInt(n));
          }),
          (f.timer_callback = function () {
            f._goto(v + 1, !0);
          }),
          (f.compute_dimensions = function () {
            var t = e(c.children().get(v)),
              n = t.height();
            s.variable_height ||
              c.children().each(function () {
                e(this).height() > n && (n = e(this).height());
              }),
              c.height(n);
          }),
          (f.create_timer = function () {
            var e = new o(
              l.find("." + s.timer_container_class),
              s,
              f.timer_callback
            );
            return e;
          }),
          (f.stop_timer = function () {
            typeof g == "object" && g.stop();
          }),
          (f.toggle_timer = function () {
            var e = l.find("." + s.timer_container_class);
            e.hasClass(s.timer_paused_class)
              ? (typeof g == "undefined" && (g = f.create_timer()), g.start())
              : typeof g == "object" && g.stop();
          }),
          (f.init = function () {
            f.build_markup(),
              s.timer && ((g = f.create_timer()), g.start()),
              (m = new a(s, c)),
              s.animation === "slide" && (m = new u(s, c)),
              l.on("click", "." + s.next_class, f.next),
              l.on("click", "." + s.prev_class, f.prev),
              l.on("click", "[data-orbit-slide]", f.link_bullet),
              l.on("click", f.toggle_timer),
              s.swipe &&
                l
                  .on("touchstart.fndtn.orbit", function (e) {
                    e.touches || (e = e.originalEvent);
                    var t = {
                      start_page_x: e.touches[0].pageX,
                      start_page_y: e.touches[0].pageY,
                      start_time: new Date().getTime(),
                      delta_x: 0,
                      is_scrolling: r,
                    };
                    l.data("swipe-transition", t), e.stopPropagation();
                  })
                  .on("touchmove.fndtn.orbit", function (e) {
                    e.touches || (e = e.originalEvent);
                    if (e.touches.length > 1 || (e.scale && e.scale !== 1))
                      return;
                    var t = l.data("swipe-transition");
                    typeof t == "undefined" && (t = {}),
                      (t.delta_x = e.touches[0].pageX - t.start_page_x),
                      typeof t.is_scrolling == "undefined" &&
                        (t.is_scrolling = !!(
                          t.is_scrolling ||
                          Math.abs(t.delta_x) <
                            Math.abs(e.touches[0].pageY - t.start_page_y)
                        ));
                    if (!t.is_scrolling && !t.active) {
                      e.preventDefault();
                      var n = t.delta_x < 0 ? v + 1 : v - 1;
                      (t.active = !0), f._goto(n);
                    }
                  })
                  .on("touchend.fndtn.orbit", function (e) {
                    l.data("swipe-transition", {}), e.stopPropagation();
                  }),
              l
                .on("mouseenter.fndtn.orbit", function (e) {
                  s.timer && s.pause_on_hover && f.stop_timer();
                })
                .on("mouseleave.fndtn.orbit", function (e) {
                  s.timer && s.resume_on_mouseout && g.start();
                }),
              e(n).on("click", "[data-orbit-link]", f.link_custom),
              e(t).on("resize", f.compute_dimensions),
              e(t).on("load", f.compute_dimensions),
              e(t).on("load", function () {
                l.prev(".preloader").css("display", "none");
              }),
              c.trigger("orbit:ready");
          }),
          f.init();
      },
      o = function (e, t, n) {
        var r = this,
          i = t.timer_speed,
          s = e.find("." + t.timer_progress_class),
          o,
          u,
          a = -1;
        (this.update_progress = function (e) {
          var t = s.clone();
          t.attr("style", ""),
            t.css("width", e + "%"),
            s.replaceWith(t),
            (s = t);
        }),
          (this.restart = function () {
            clearTimeout(u),
              e.addClass(t.timer_paused_class),
              (a = -1),
              r.update_progress(0);
          }),
          (this.start = function () {
            if (!e.hasClass(t.timer_paused_class)) return !0;
            (a = a === -1 ? i : a),
              e.removeClass(t.timer_paused_class),
              (o = new Date().getTime()),
              s.animate({ width: "100%" }, a, "linear"),
              (u = setTimeout(function () {
                r.restart(), n();
              }, a)),
              e.trigger("orbit:timer-started");
          }),
          (this.stop = function () {
            if (e.hasClass(t.timer_paused_class)) return !0;
            clearTimeout(u), e.addClass(t.timer_paused_class);
            var n = new Date().getTime();
            a -= n - o;
            var s = 100 - (a / i) * 100;
            r.update_progress(s), e.trigger("orbit:timer-stopped");
          });
      },
      u = function (t, n) {
        var r = t.animation_speed,
          i = e("html[dir=rtl]").length === 1,
          s = i ? "marginRight" : "marginLeft",
          o = {};
        (o[s] = "0%"),
          (this.next = function (e, t, n) {
            t.animate(o, r, "linear", function () {
              e.css(s, "100%"), n();
            });
          }),
          (this.prev = function (e, t, n) {
            t.css(s, "-100%"),
              t.animate(o, r, "linear", function () {
                e.css(s, "100%"), n();
              });
          });
      },
      a = function (t, n) {
        var r = t.animation_speed,
          i = e("html[dir=rtl]").length === 1,
          s = i ? "marginRight" : "marginLeft";
        (this.next = function (e, t, n) {
          t.css({ margin: "0%", opacity: "0.01" }),
            t.animate({ opacity: "1" }, r, "linear", function () {
              e.css("margin", "100%"), n();
            });
        }),
          (this.prev = function (e, t, n) {
            t.css({ margin: "0%", opacity: "0.01" }),
              t.animate({ opacity: "1" }, r, "linear", function () {
                e.css("margin", "100%"), n();
              });
          });
      };
    (Foundation.libs = Foundation.libs || {}),
      (Foundation.libs.orbit = {
        name: "orbit",
        version: "4.3.2",
        settings: {
          animation: "slide",
          timer_speed: 1e4,
          pause_on_hover: !0,
          resume_on_mouseout: !1,
          animation_speed: 500,
          stack_on_small: !1,
          navigation_arrows: !0,
          slide_number: !0,
          slide_number_text: "of",
          container_class: "orbit-container",
          stack_on_small_class: "orbit-stack-on-small",
          next_class: "orbit-next",
          prev_class: "orbit-prev",
          timer_container_class: "orbit-timer",
          timer_paused_class: "paused",
          timer_progress_class: "orbit-progress",
          slides_container_class: "orbit-slides-container",
          bullets_container_class: "orbit-bullets",
          bullets_active_class: "active",
          slide_number_class: "orbit-slide-number",
          caption_class: "orbit-caption",
          active_slide_class: "active",
          orbit_transition_class: "orbit-transitioning",
          bullets: !0,
          timer: !0,
          variable_height: !1,
          swipe: !0,
          before_slide_change: i,
          after_slide_change: i,
        },
        init: function (t, n, r) {
          var i = this;
          Foundation.inherit(i, "data_options"),
            typeof n == "object" && e.extend(!0, i.settings, n);
          if (e(t).is("[data-orbit]")) {
            var o = e(t),
              u = i.data_options(o);
            new s(o, e.extend({}, i.settings, u));
          }
          e("[data-orbit]", t).each(function (t, n) {
            var r = e(n),
              o = i.data_options(r);
            new s(r, e.extend({}, i.settings, o));
          });
        },
      });
  })(Foundation.zj, this, this.document),
  (function (e, t, n, r) {
    "use strict";
    Foundation.libs.reveal = {
      name: "reveal",
      version: "4.3.2",
      locked: !1,
      settings: {
        animation: "fadeAndPop",
        animationSpeed: 250,
        closeOnBackgroundClick: !0,
        closeOnEsc: !0,
        dismissModalClass: "close-reveal-modal",
        bgClass: "reveal-modal-bg",
        open: function () {},
        opened: function () {},
        close: function () {},
        closed: function () {},
        bg: e(".reveal-modal-bg"),
        css: {
          open: { opacity: 0, visibility: "visible", display: "block" },
          close: { opacity: 1, visibility: "hidden", display: "none" },
        },
      },
      init: function (t, n, r) {
        return (
          Foundation.inherit(this, "data_options delay"),
          typeof n == "object"
            ? e.extend(!0, this.settings, n)
            : typeof r != "undefined" && e.extend(!0, this.settings, r),
          typeof n != "string"
            ? (this.events(), this.settings.init)
            : this[n].call(this, r)
        );
      },
      events: function () {
        var t = this;
        return (
          e(this.scope)
            .off(".fndtn.reveal")
            .on("click.fndtn.reveal", "[data-reveal-id]", function (n) {
              n.preventDefault();
              if (!t.locked) {
                var r = e(this),
                  i = r.data("reveal-ajax");
                t.locked = !0;
                if (typeof i == "undefined") t.open.call(t, r);
                else {
                  var s = i === !0 ? r.attr("href") : i;
                  t.open.call(t, r, { url: s });
                }
              }
            })
            .on(
              "click.fndtn.reveal touchend",
              this.close_targets(),
              function (n) {
                n.preventDefault();
                if (!t.locked) {
                  var r = e.extend(
                      {},
                      t.settings,
                      t.data_options(e(".reveal-modal.open"))
                    ),
                    i = e(n.target)[0] === e("." + r.bgClass)[0];
                  if (i && !r.closeOnBackgroundClick) return;
                  (t.locked = !0),
                    t.close.call(
                      t,
                      i
                        ? e(".reveal-modal.open")
                        : e(this).closest(".reveal-modal")
                    );
                }
              }
            ),
          e(this.scope).hasClass("reveal-modal")
            ? e(this.scope)
                .on("open.fndtn.reveal", this.settings.open)
                .on("opened.fndtn.reveal", this.settings.opened)
                .on("opened.fndtn.reveal", this.open_video)
                .on("close.fndtn.reveal", this.settings.close)
                .on("closed.fndtn.reveal", this.settings.closed)
                .on("closed.fndtn.reveal", this.close_video)
            : e(this.scope)
                .on("open.fndtn.reveal", ".reveal-modal", this.settings.open)
                .on(
                  "opened.fndtn.reveal",
                  ".reveal-modal",
                  this.settings.opened
                )
                .on("opened.fndtn.reveal", ".reveal-modal", this.open_video)
                .on("close.fndtn.reveal", ".reveal-modal", this.settings.close)
                .on(
                  "closed.fndtn.reveal",
                  ".reveal-modal",
                  this.settings.closed
                )
                .on("closed.fndtn.reveal", ".reveal-modal", this.close_video),
          e("body").bind("keyup.reveal", function (n) {
            var r = e(".reveal-modal.open"),
              i = e.extend({}, t.settings, t.data_options(r));
            n.which === 27 && i.closeOnEsc && r.foundation("reveal", "close");
          }),
          !0
        );
      },
      open: function (t, n) {
        if (t)
          if (typeof t.selector != "undefined")
            var r = e("#" + t.data("reveal-id"));
          else {
            var r = e(this.scope);
            n = t;
          }
        else var r = e(this.scope);
        if (!r.hasClass("open")) {
          var i = e(".reveal-modal.open");
          typeof r.data("css-top") == "undefined" &&
            r
              .data("css-top", parseInt(r.css("top"), 10))
              .data("offset", this.cache_offset(r)),
            r.trigger("open"),
            i.length < 1 && this.toggle_bg();
          if (typeof n == "undefined" || !n.url)
            this.hide(i, this.settings.css.close),
              this.show(r, this.settings.css.open);
          else {
            var s = this,
              o = typeof n.success != "undefined" ? n.success : null;
            e.extend(n, {
              success: function (t, n, u) {
                e.isFunction(o) && o(t, n, u),
                  r.html(t),
                  e(r).foundation("section", "reflow"),
                  s.hide(i, s.settings.css.close),
                  s.show(r, s.settings.css.open);
              },
            }),
              e.ajax(n);
          }
        }
      },
      close: function (t) {
        var t = t && t.length ? t : e(this.scope),
          n = e(".reveal-modal.open");
        n.length > 0 &&
          ((this.locked = !0),
          t.trigger("close"),
          this.toggle_bg(),
          this.hide(n, this.settings.css.close));
      },
      close_targets: function () {
        var e = "." + this.settings.dismissModalClass;
        return this.settings.closeOnBackgroundClick
          ? e + ", ." + this.settings.bgClass
          : e;
      },
      toggle_bg: function () {
        e("." + this.settings.bgClass).length === 0 &&
          (this.settings.bg = e("<div />", {
            class: this.settings.bgClass,
          }).appendTo("body")),
          this.settings.bg.filter(":visible").length > 0
            ? this.hide(this.settings.bg)
            : this.show(this.settings.bg);
      },
      show: function (n, r) {
        if (r) {
          if (n.parent("body").length === 0) {
            var i = n.wrap('<div style="display: none;" />').parent();
            n.on("closed.fndtn.reveal.wrapped", function () {
              n.detach().appendTo(i),
                n.unwrap().unbind("closed.fndtn.reveal.wrapped");
            }),
              n.detach().appendTo("body");
          }
          if (/pop/i.test(this.settings.animation)) {
            r.top = e(t).scrollTop() - n.data("offset") + "px";
            var s = {
              top: e(t).scrollTop() + n.data("css-top") + "px",
              opacity: 1,
            };
            return this.delay(
              function () {
                return n
                  .css(r)
                  .animate(
                    s,
                    this.settings.animationSpeed,
                    "linear",
                    function () {
                      (this.locked = !1), n.trigger("opened");
                    }.bind(this)
                  )
                  .addClass("open");
              }.bind(this),
              this.settings.animationSpeed / 2
            );
          }
          if (/fade/i.test(this.settings.animation)) {
            var s = { opacity: 1 };
            return this.delay(
              function () {
                return n
                  .css(r)
                  .animate(
                    s,
                    this.settings.animationSpeed,
                    "linear",
                    function () {
                      (this.locked = !1), n.trigger("opened");
                    }.bind(this)
                  )
                  .addClass("open");
              }.bind(this),
              this.settings.animationSpeed / 2
            );
          }
          return n
            .css(r)
            .show()
            .css({ opacity: 1 })
            .addClass("open")
            .trigger("opened");
        }
        return /fade/i.test(this.settings.animation)
          ? n.fadeIn(this.settings.animationSpeed / 2)
          : n.show();
      },
      hide: function (n, r) {
        if (r) {
          if (/pop/i.test(this.settings.animation)) {
            var i = {
              top: -e(t).scrollTop() - n.data("offset") + "px",
              opacity: 0,
            };
            return this.delay(
              function () {
                return n
                  .animate(
                    i,
                    this.settings.animationSpeed,
                    "linear",
                    function () {
                      (this.locked = !1), n.css(r).trigger("closed");
                    }.bind(this)
                  )
                  .removeClass("open");
              }.bind(this),
              this.settings.animationSpeed / 2
            );
          }
          if (/fade/i.test(this.settings.animation)) {
            var i = { opacity: 0 };
            return this.delay(
              function () {
                return n
                  .animate(
                    i,
                    this.settings.animationSpeed,
                    "linear",
                    function () {
                      (this.locked = !1), n.css(r).trigger("closed");
                    }.bind(this)
                  )
                  .removeClass("open");
              }.bind(this),
              this.settings.animationSpeed / 2
            );
          }
          return n.hide().css(r).removeClass("open").trigger("closed");
        }
        return /fade/i.test(this.settings.animation)
          ? n.fadeOut(this.settings.animationSpeed / 2)
          : n.hide();
      },
      close_video: function (t) {
        var n = e(this).find(".flex-video"),
          r = n.find("iframe");
        r.length > 0 &&
          (r.attr("data-src", r[0].src),
          r.attr("src", "about:blank"),
          n.hide());
      },
      open_video: function (t) {
        var n = e(this).find(".flex-video"),
          i = n.find("iframe");
        if (i.length > 0) {
          var s = i.attr("data-src");
          if (typeof s == "string") i[0].src = i.attr("data-src");
          else {
            var o = i[0].src;
            (i[0].src = r), (i[0].src = o);
          }
          n.show();
        }
      },
      cache_offset: function (e) {
        var t = e.show().height() + parseInt(e.css("top"), 10);
        return e.hide(), t;
      },
      off: function () {
        e(this.scope).off(".fndtn.reveal");
      },
      reflow: function () {},
    };
  })(Foundation.zj, this, this.document),
  (function (e, t, n) {
    "use strict";
    (Foundation.libs.section = {
      name: "section",
      version: "4.3.2",
      settings: {
        deep_linking: !1,
        small_breakpoint: 768,
        one_up: !0,
        multi_expand: !1,
        section_selector: "[data-section]",
        region_selector: "section, .section, [data-section-region]",
        title_selector: ".title, [data-section-title]",
        resized_data_attr: "data-section-resized",
        small_style_data_attr: "data-section-small-style",
        content_selector: ".content, [data-section-content]",
        nav_selector:
          '[data-section="vertical-nav"], [data-section="horizontal-nav"]',
        active_class: "active",
        callback: function () {},
      },
      init: function (t, n, r) {
        var i = this;
        return (
          Foundation.inherit(
            this,
            "throttle data_options position_right offset_right"
          ),
          typeof n == "object" && e.extend(!0, i.settings, n),
          typeof n != "string" ? (this.events(), !0) : this[n].call(this, r)
        );
      },
      events: function () {
        var r = this,
          i = [],
          s = r.settings.section_selector,
          o = r.settings.region_selector.split(","),
          u = r.settings.title_selector.split(",");
        for (var a = 0, f = o.length; a < f; a++) {
          var l = o[a];
          for (var c = 0, h = u.length; c < h; c++) {
            var p = s + ">" + l + ">" + u[c];
            i.push(p + " a"), i.push(p);
          }
        }
        e(r.scope).on("click.fndtn.section", i.join(","), function (t) {
          var n = e(this).closest(r.settings.title_selector);
          r.close_navs(n),
            n.siblings(r.settings.content_selector).length > 0 &&
              r.toggle_active.call(n[0], t);
        }),
          e(t)
            .on(
              "resize.fndtn.section",
              r.throttle(function () {
                r.resize();
              }, 30)
            )
            .on("hashchange.fndtn.section", r.set_active_from_hash),
          e(n).on("click.fndtn.section", function (t) {
            if (t.isPropagationStopped && t.isPropagationStopped()) return;
            if (t.target === n) return;
            r.close_navs(e(t.target).closest(r.settings.title_selector));
          }),
          e(t).triggerHandler("resize.fndtn.section"),
          e(t).triggerHandler("hashchange.fndtn.section");
      },
      close_navs: function (t) {
        var n = Foundation.libs.section,
          r = e(n.settings.nav_selector).filter(function () {
            return !e.extend({}, n.settings, n.data_options(e(this))).one_up;
          });
        if (t.length > 0) {
          var i = t.parent().parent();
          if (n.is_horizontal_nav(i) || n.is_vertical_nav(i))
            r = r.filter(function () {
              return this !== i[0];
            });
        }
        r.children(n.settings.region_selector).removeClass(
          n.settings.active_class
        );
      },
      toggle_active: function (t) {
        var n = e(this),
          r = Foundation.libs.section,
          i = n.parent(),
          s = n.siblings(r.settings.content_selector),
          o = i.parent(),
          u = e.extend({}, r.settings, r.data_options(o)),
          a = o
            .children(r.settings.region_selector)
            .filter("." + r.settings.active_class);
        !u.deep_linking && s.length > 0 && t.preventDefault(),
          t.stopPropagation();
        if (!i.hasClass(r.settings.active_class)) {
          if (
            !r.is_accordion(o) ||
            (r.is_accordion(o) && !r.settings.multi_expand)
          )
            a.removeClass(r.settings.active_class),
              a.trigger("closed.fndtn.section");
          i.addClass(r.settings.active_class),
            r.resize(
              i
                .find(r.settings.section_selector)
                .not("[" + r.settings.resized_data_attr + "]"),
              !0
            ),
            i.trigger("opened.fndtn.section");
        } else if (
          (i.hasClass(r.settings.active_class) && r.is_accordion(o)) ||
          (!u.one_up &&
            (r.small(o) ||
              r.is_vertical_nav(o) ||
              r.is_horizontal_nav(o) ||
              r.is_accordion(o)))
        )
          i.removeClass(r.settings.active_class),
            i.trigger("closed.fndtn.section");
        u.callback(o);
      },
      check_resize_timer: null,
      resize: function (t, n) {
        var r = Foundation.libs.section,
          i = e(r.settings.section_selector),
          s = r.small(i),
          o = function (e, t) {
            return (
              !r.is_accordion(e) &&
              !e.is("[" + r.settings.resized_data_attr + "]") &&
              (!s || r.is_horizontal_tabs(e)) &&
              t === (e.css("display") === "none" || !e.parent().is(":visible"))
            );
          };
        (t = t || e(r.settings.section_selector)),
          clearTimeout(r.check_resize_timer),
          s || t.removeAttr(r.settings.small_style_data_attr),
          t
            .filter(function () {
              return o(e(this), !1);
            })
            .each(function () {
              var t = e(this),
                i = t.children(r.settings.region_selector),
                s = i.children(r.settings.title_selector),
                o = i.children(r.settings.content_selector),
                u = 0;
              if (
                n &&
                t
                  .children(r.settings.region_selector)
                  .filter("." + r.settings.active_class).length == 0
              ) {
                var a = e.extend({}, r.settings, r.data_options(t));
                !a.deep_linking &&
                  (a.one_up ||
                    (!r.is_horizontal_nav(t) &&
                      !r.is_vertical_nav(t) &&
                      !r.is_accordion(t))) &&
                  i
                    .filter(":visible")
                    .first()
                    .addClass(r.settings.active_class);
              }
              if (r.is_horizontal_tabs(t) || r.is_auto(t)) {
                var f = 0;
                s.each(function () {
                  var t = e(this);
                  if (t.is(":visible")) {
                    t.css(r.rtl ? "right" : "left", f);
                    var n = parseInt(
                      t.css("border-" + (r.rtl ? "left" : "right") + "-width"),
                      10
                    );
                    n.toString() === "Nan" && (n = 0),
                      (f += r.outerWidth(t) - n),
                      (u = Math.max(u, r.outerHeight(t)));
                  }
                }),
                  s.css("height", u),
                  i.each(function () {
                    var t = e(this),
                      n = t.children(r.settings.content_selector),
                      i = parseInt(n.css("border-top-width"), 10);
                    i.toString() === "Nan" && (i = 0),
                      t.css("padding-top", u - i);
                  }),
                  t.css("min-height", u);
              } else if (r.is_horizontal_nav(t)) {
                var l = !0;
                s.each(function () {
                  u = Math.max(u, r.outerHeight(e(this)));
                }),
                  i.each(function () {
                    var n = e(this);
                    n.css(
                      "margin-left",
                      "-" +
                        (l ? t : n.children(r.settings.title_selector)).css(
                          "border-left-width"
                        )
                    ),
                      (l = !1);
                  }),
                  i.css("margin-top", "-" + t.css("border-top-width")),
                  s.css("height", u),
                  o.css("top", u),
                  t.css("min-height", u);
              } else if (r.is_vertical_tabs(t)) {
                var c = 0;
                s.each(function () {
                  var t = e(this);
                  if (t.is(":visible")) {
                    t.css("top", c);
                    var n = parseInt(t.css("border-top-width"), 10);
                    n.toString() === "Nan" && (n = 0),
                      (c += r.outerHeight(t) - n);
                  }
                }),
                  o.css("min-height", c + 1);
              } else if (r.is_vertical_nav(t)) {
                var h = 0,
                  p = !0;
                s.each(function () {
                  h = Math.max(h, r.outerWidth(e(this)));
                }),
                  i.each(function () {
                    var n = e(this);
                    n.css(
                      "margin-top",
                      "-" +
                        (p ? t : n.children(r.settings.title_selector)).css(
                          "border-top-width"
                        )
                    ),
                      (p = !1);
                  }),
                  s.css("width", h),
                  o.css(r.rtl ? "right" : "left", h),
                  t.css("width", h);
              }
              t.attr(r.settings.resized_data_attr, !0);
            }),
          e(r.settings.section_selector).filter(function () {
            return o(e(this), !0);
          }).length > 0 &&
            (r.check_resize_timer = setTimeout(function () {
              r.resize(
                t.filter(function () {
                  return o(e(this), !1);
                }),
                !0
              );
            }, 700)),
          s && t.attr(r.settings.small_style_data_attr, !0);
      },
      is_vertical_nav: function (e) {
        return /vertical-nav/i.test(e.data("section"));
      },
      is_horizontal_nav: function (e) {
        return /horizontal-nav/i.test(e.data("section"));
      },
      is_accordion: function (e) {
        return /accordion/i.test(e.data("section"));
      },
      is_horizontal_tabs: function (e) {
        return /^tabs$/i.test(e.data("section"));
      },
      is_vertical_tabs: function (e) {
        return /vertical-tabs/i.test(e.data("section"));
      },
      is_auto: function (e) {
        var t = e.data("section");
        return t === "" || /auto/i.test(t);
      },
      set_active_from_hash: function () {
        var n = Foundation.libs.section,
          r = t.location.hash.substring(1),
          i = e(n.settings.section_selector),
          s;
        i.each(function () {
          var t = e(this),
            i = t.children(n.settings.region_selector);
          i.each(function () {
            var i = e(this),
              o = i.children(n.settings.content_selector).data("slug");
            if (new RegExp(o, "i").test(r)) return (s = t), !1;
          });
          if (s != null) return !1;
        }),
          s != null &&
            i.each(function () {
              if (s == e(this)) {
                var t = e(this),
                  i = e.extend({}, n.settings, n.data_options(t)),
                  o = t.children(n.settings.region_selector),
                  u = i.deep_linking && r.length > 0,
                  a = !1;
                o.each(function () {
                  var t = e(this);
                  if (a) t.removeClass(n.settings.active_class);
                  else if (u) {
                    var i = t
                      .children(n.settings.content_selector)
                      .data("slug");
                    i && new RegExp(i, "i").test(r)
                      ? (t.hasClass(n.settings.active_class) ||
                          t.addClass(n.settings.active_class),
                        (a = !0))
                      : t.removeClass(n.settings.active_class);
                  } else t.hasClass(n.settings.active_class) && (a = !0);
                }),
                  !a &&
                    (i.one_up ||
                      (!n.is_horizontal_nav(t) &&
                        !n.is_vertical_nav(t) &&
                        !n.is_accordion(t))) &&
                    o
                      .filter(":visible")
                      .first()
                      .addClass(n.settings.active_class);
              }
            });
      },
      reflow: function () {
        var t = Foundation.libs.section;
        e(t.settings.section_selector).removeAttr(t.settings.resized_data_attr),
          t.throttle(function () {
            t.resize();
          }, 30)();
      },
      small: function (t) {
        var n = e.extend({}, this.settings, this.data_options(t));
        return this.is_horizontal_tabs(t)
          ? !1
          : t && this.is_accordion(t)
          ? !0
          : e("html").hasClass("lt-ie9")
          ? !0
          : e("html").hasClass("ie8compat")
          ? !0
          : e(this.scope).width() < n.small_breakpoint;
      },
      off: function () {
        e(this.scope).off(".fndtn.section"),
          e(t).off(".fndtn.section"),
          e(n).off(".fndtn.section");
      },
    }),
      (e.fn.reflow_section = function (e) {
        var t = this,
          n = Foundation.libs.section;
        return (
          t.removeAttr(n.settings.resized_data_attr),
          n.throttle(function () {
            n.resize(t, e);
          }, 30)(),
          this
        );
      });
  })(Foundation.zj, window, document),
  (function (e, t, n, r) {
    "use strict";
    Foundation.libs.tooltips = {
      name: "tooltips",
      version: "4.3.2",
      settings: {
        selector: ".has-tip",
        additionalInheritableClasses: [],
        tooltipClass: ".tooltip",
        touchCloseText: "tap to close",
        appendTo: "body",
        "disable-for-touch": !1,
        tipTemplate: function (e, t) {
          return (
            '<span data-selector="' +
            e +
            '" class="' +
            Foundation.libs.tooltips.settings.tooltipClass.substring(1) +
            '">' +
            t +
            '<span class="nub"></span></span>'
          );
        },
      },
      cache: {},
      init: function (t, n, r) {
        Foundation.inherit(this, "data_options");
        var i = this;
        typeof n == "object"
          ? e.extend(!0, this.settings, n)
          : typeof r != "undefined" && e.extend(!0, this.settings, r);
        if (typeof n == "string") return this[n].call(this, r);
        Modernizr.touch
          ? e(this.scope)
              .on(
                "click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip",
                "[data-tooltip]",
                function (t) {
                  var n = e.extend({}, i.settings, i.data_options(e(this)));
                  n["disable-for-touch"] ||
                    (t.preventDefault(),
                    e(n.tooltipClass).hide(),
                    i.showOrCreateTip(e(this)));
                }
              )
              .on(
                "click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip",
                this.settings.tooltipClass,
                function (t) {
                  t.preventDefault(), e(this).fadeOut(150);
                }
              )
          : e(this.scope).on(
              "mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip",
              "[data-tooltip]",
              function (t) {
                var n = e(this);
                /enter|over/i.test(t.type)
                  ? i.showOrCreateTip(n)
                  : (t.type === "mouseout" || t.type === "mouseleave") &&
                    i.hide(n);
              }
            );
      },
      showOrCreateTip: function (e) {
        var t = this.getTip(e);
        return t && t.length > 0 ? this.show(e) : this.create(e);
      },
      getTip: function (t) {
        var n = this.selector(t),
          r = null;
        return (
          n &&
            (r = e(
              'span[data-selector="' + n + '"]' + this.settings.tooltipClass
            )),
          typeof r == "object" ? r : !1
        );
      },
      selector: function (e) {
        var t = e.attr("id"),
          n = e.attr("data-tooltip") || e.attr("data-selector");
        return (
          ((t && t.length < 1) || !t) &&
            typeof n != "string" &&
            ((n = "tooltip" + Math.random().toString(36).substring(7)),
            e.attr("data-selector", n)),
          t && t.length > 0 ? t : n
        );
      },
      create: function (t) {
        var n = e(
            this.settings.tipTemplate(
              this.selector(t),
              e("<div></div>").html(t.attr("title")).html()
            )
          ),
          r = this.inheritable_classes(t);
        n.addClass(r).appendTo(this.settings.appendTo),
          Modernizr.touch &&
            n.append(
              '<span class="tap-to-close">' +
                this.settings.touchCloseText +
                "</span>"
            ),
          t.removeAttr("title").attr("title", ""),
          this.show(t);
      },
      reposition: function (n, r, i) {
        var s, o, u, a, f, l;
        r.css("visibility", "hidden").show(),
          (s = n.data("width")),
          (o = r.children(".nub")),
          (u = this.outerHeight(o)),
          (a = this.outerHeight(o)),
          (l = function (e, t, n, r, i, s) {
            return e
              .css({
                top: t ? t : "auto",
                bottom: r ? r : "auto",
                left: i ? i : "auto",
                right: n ? n : "auto",
                width: s ? s : "auto",
              })
              .end();
          }),
          l(
            r,
            n.offset().top + this.outerHeight(n) + 10,
            "auto",
            "auto",
            n.offset().left,
            s
          );
        if (e(t).width() < 767)
          l(
            r,
            n.offset().top + this.outerHeight(n) + 10,
            "auto",
            "auto",
            12.5,
            e(this.scope).width()
          ),
            r.addClass("tip-override"),
            l(o, -u, "auto", "auto", n.offset().left);
        else {
          var c = n.offset().left;
          Foundation.rtl &&
            (c = n.offset().left + n.offset().width - this.outerWidth(r)),
            l(
              r,
              n.offset().top + this.outerHeight(n) + 10,
              "auto",
              "auto",
              c,
              s
            ),
            r.removeClass("tip-override"),
            i && i.indexOf("tip-top") > -1
              ? l(
                  r,
                  n.offset().top - this.outerHeight(r),
                  "auto",
                  "auto",
                  c,
                  s
                ).removeClass("tip-override")
              : i && i.indexOf("tip-left") > -1
              ? l(
                  r,
                  n.offset().top + this.outerHeight(n) / 2 - u * 2.5,
                  "auto",
                  "auto",
                  n.offset().left - this.outerWidth(r) - u,
                  s
                ).removeClass("tip-override")
              : i &&
                i.indexOf("tip-right") > -1 &&
                l(
                  r,
                  n.offset().top + this.outerHeight(n) / 2 - u * 2.5,
                  "auto",
                  "auto",
                  n.offset().left + this.outerWidth(n) + u,
                  s
                ).removeClass("tip-override");
        }
        r.css("visibility", "visible").hide();
      },
      inheritable_classes: function (t) {
        var n = [
            "tip-top",
            "tip-left",
            "tip-bottom",
            "tip-right",
            "noradius",
          ].concat(this.settings.additionalInheritableClasses),
          r = t.attr("class"),
          i = r
            ? e
                .map(r.split(" "), function (t, r) {
                  if (e.inArray(t, n) !== -1) return t;
                })
                .join(" ")
            : "";
        return e.trim(i);
      },
      show: function (e) {
        var t = this.getTip(e);
        this.reposition(e, t, e.attr("class")), t.fadeIn(150);
      },
      hide: function (e) {
        var t = this.getTip(e);
        t.fadeOut(150);
      },
      reload: function () {
        var t = e(this);
        return t.data("fndtn-tooltips")
          ? t.foundationTooltips("destroy").foundationTooltips("init")
          : t.foundationTooltips("init");
      },
      off: function () {
        e(this.scope).off(".fndtn.tooltip"),
          e(this.settings.tooltipClass)
            .each(function (t) {
              e("[data-tooltip]").get(t).attr("title", e(this).text());
            })
            .remove();
      },
      reflow: function () {},
    };
  })(Foundation.zj, this, this.document),
  (function (e, t, n, r) {
    "use strict";
    Foundation.libs.topbar = {
      name: "topbar",
      version: "4.3.2",
      settings: {
        index: 0,
        stickyClass: "sticky",
        custom_back_text: !0,
        back_text: "Back",
        is_hover: !0,
        mobile_show_parent_link: !1,
        scrolltop: !0,
        init: !1,
      },
      init: function (n, r, i) {
        Foundation.inherit(this, "data_options addCustomRule");
        var s = this;
        return (
          typeof r == "object"
            ? e.extend(!0, this.settings, r)
            : typeof i != "undefined" && e.extend(!0, this.settings, i),
          typeof r != "string"
            ? (e(".top-bar, [data-topbar]").each(function () {
                e.extend(!0, s.settings, s.data_options(e(this))),
                  (s.settings.$w = e(t)),
                  (s.settings.$topbar = e(this)),
                  (s.settings.$section = s.settings.$topbar.find("section")),
                  (s.settings.$titlebar = s.settings.$topbar
                    .children("ul")
                    .first()),
                  s.settings.$topbar.data("index", 0);
                var n = s.settings.$topbar.parent();
                n.hasClass("fixed") || n.hasClass(s.settings.stickyClass)
                  ? (s.settings.$topbar.data("height", s.outerHeight(n)),
                    s.settings.$topbar.data("stickyoffset", n.offset().top))
                  : s.settings.$topbar.data(
                      "height",
                      s.outerHeight(s.settings.$topbar)
                    );
                var r = e("<div class='top-bar-js-breakpoint'/>").insertAfter(
                  s.settings.$topbar
                );
                (s.settings.breakPoint = r.width()),
                  r.remove(),
                  s.assemble(),
                  s.settings.is_hover &&
                    s.settings.$topbar
                      .find(".has-dropdown")
                      .addClass("not-click"),
                  s.addCustomRule(
                    ".f-topbar-fixed { padding-top: " +
                      s.settings.$topbar.data("height") +
                      "px }"
                  ),
                  s.settings.$topbar.parent().hasClass("fixed") &&
                    e("body").addClass("f-topbar-fixed");
              }),
              s.settings.init || this.events(),
              this.settings.init)
            : this[r].call(this, i)
        );
      },
      toggle: function () {
        var n = this,
          r = e(".top-bar, [data-topbar]"),
          i = r.find("section, .section");
        n.breakpoint() &&
          (n.rtl
            ? (i.css({ right: "0%" }), i.find(">.name").css({ right: "100%" }))
            : (i.css({ left: "0%" }), i.find(">.name").css({ left: "100%" })),
          i.find("li.moved").removeClass("moved"),
          r.data("index", 0),
          r.toggleClass("expanded").css("height", "")),
          n.settings.scrolltop
            ? r.hasClass("expanded")
              ? r.parent().hasClass("fixed") &&
                (n.settings.scrolltop
                  ? (r.parent().removeClass("fixed"),
                    r.addClass("fixed"),
                    e("body").removeClass("f-topbar-fixed"),
                    t.scrollTo(0, 0))
                  : r.parent().removeClass("expanded"))
              : r.hasClass("fixed") &&
                (r.parent().addClass("fixed"),
                r.removeClass("fixed"),
                e("body").addClass("f-topbar-fixed"))
            : (r.parent().hasClass(n.settings.stickyClass) &&
                r.parent().addClass("fixed"),
              r.parent().hasClass("fixed") &&
                (r.hasClass("expanded")
                  ? (r.addClass("fixed"), r.parent().addClass("expanded"))
                  : (r.removeClass("fixed"),
                    r.parent().removeClass("expanded"),
                    n.updateStickyPositioning())));
      },
      timer: null,
      events: function () {
        var r = this;
        e(this.scope)
          .off(".fndtn.topbar")
          .on(
            "click.fndtn.topbar",
            ".top-bar .toggle-topbar, [data-topbar] .toggle-topbar",
            function (e) {
              e.preventDefault(), r.toggle();
            }
          )
          .on("click.fndtn.topbar", ".top-bar li.has-dropdown", function (t) {
            var n = e(this),
              i = e(t.target),
              s = n.closest("[data-topbar], .top-bar"),
              o = s.data("topbar");
            if (i.data("revealId")) {
              r.toggle();
              return;
            }
            if (r.breakpoint()) return;
            if (r.settings.is_hover && !Modernizr.touch) return;
            t.stopImmediatePropagation(),
              i[0].nodeName === "A" &&
                i.parent().hasClass("has-dropdown") &&
                t.preventDefault(),
              n.hasClass("hover")
                ? (n.removeClass("hover").find("li").removeClass("hover"),
                  n.parents("li.hover").removeClass("hover"))
                : n.addClass("hover");
          })
          .on(
            "click.fndtn.topbar",
            ".top-bar .has-dropdown>a, [data-topbar] .has-dropdown>a",
            function (n) {
              if (r.breakpoint() && e(t).width() != r.settings.breakPoint) {
                n.preventDefault();
                var i = e(this),
                  s = i.closest(".top-bar, [data-topbar]"),
                  o = s.find("section, .section"),
                  u = i.next(".dropdown").outerHeight(),
                  a = i.closest("li");
                s.data("index", s.data("index") + 1),
                  a.addClass("moved"),
                  r.rtl
                    ? (o.css({ right: -(100 * s.data("index")) + "%" }),
                      o
                        .find(">.name")
                        .css({ right: 100 * s.data("index") + "%" }))
                    : (o.css({ left: -(100 * s.data("index")) + "%" }),
                      o
                        .find(">.name")
                        .css({ left: 100 * s.data("index") + "%" })),
                  s.css(
                    "height",
                    r.outerHeight(i.siblings("ul"), !0) +
                      r.settings.$topbar.data("height")
                  );
              }
            }
          ),
          e(t).on(
            "resize.fndtn.topbar",
            function () {
              if (typeof r.settings.$topbar == "undefined") return;
              var t = r.settings.$topbar.parent(
                  "." + this.settings.stickyClass
                ),
                i;
              if (!r.breakpoint()) {
                var s = r.settings.$topbar.hasClass("expanded");
                e(".top-bar, [data-topbar]")
                  .css("height", "")
                  .removeClass("expanded")
                  .find("li")
                  .removeClass("hover"),
                  s && r.toggle();
              }
              t.length > 0 &&
                (t.hasClass("fixed")
                  ? (t.removeClass("fixed"),
                    (i = t.offset().top),
                    e(n.body).hasClass("f-topbar-fixed") &&
                      (i -= r.settings.$topbar.data("height")),
                    r.settings.$topbar.data("stickyoffset", i),
                    t.addClass("fixed"))
                  : ((i = t.offset().top),
                    r.settings.$topbar.data("stickyoffset", i)));
            }.bind(this)
          ),
          e("body").on("click.fndtn.topbar", function (t) {
            var n = e(t.target).closest("li").closest("li.hover");
            if (n.length > 0) return;
            e(".top-bar li, [data-topbar] li").removeClass("hover");
          }),
          e(this.scope).on(
            "click.fndtn",
            ".top-bar .has-dropdown .back, [data-topbar] .has-dropdown .back",
            function (t) {
              t.preventDefault();
              var n = e(this),
                i = n.closest(".top-bar, [data-topbar]"),
                s = i.find("section, .section"),
                o = n.closest("li.moved"),
                u = o.parent();
              i.data("index", i.data("index") - 1),
                r.rtl
                  ? (s.css({ right: -(100 * i.data("index")) + "%" }),
                    s
                      .find(">.name")
                      .css({ right: 100 * i.data("index") + "%" }))
                  : (s.css({ left: -(100 * i.data("index")) + "%" }),
                    s
                      .find(">.name")
                      .css({ left: 100 * i.data("index") + "%" })),
                i.data("index") === 0
                  ? i.css("height", "")
                  : i.css(
                      "height",
                      r.outerHeight(u, !0) + r.settings.$topbar.data("height")
                    ),
                setTimeout(function () {
                  o.removeClass("moved");
                }, 300);
            }
          );
      },
      breakpoint: function () {
        return (
          e(n).width() <= this.settings.breakPoint ||
          e("html").hasClass("lt-ie9")
        );
      },
      assemble: function () {
        var t = this;
        this.settings.$section.detach(),
          this.settings.$section.find(".has-dropdown>a").each(function () {
            var n = e(this),
              r = n.siblings(".dropdown"),
              i = n.attr("href");
            if (t.settings.mobile_show_parent_link && i && i.length > 1)
              var s = e(
                '<li class="title back js-generated"><h5><a href="#"></a></h5></li><li><a class="parent-link js-generated" href="' +
                  i +
                  '">' +
                  n.text() +
                  "</a></li>"
              );
            else
              var s = e(
                '<li class="title back js-generated"><h5><a href="#"></a></h5></li>'
              );
            t.settings.custom_back_text == 1
              ? s.find("h5>a").html(t.settings.back_text)
              : s.find("h5>a").html("&laquo; " + n.html()),
              r.prepend(s);
          }),
          this.settings.$section.appendTo(this.settings.$topbar),
          this.sticky();
      },
      height: function (t) {
        var n = 0,
          r = this;
        return (
          t.find("> li").each(function () {
            n += r.outerHeight(e(this), !0);
          }),
          n
        );
      },
      sticky: function () {
        var n = e(t),
          r = this;
        n.scroll(function () {
          r.updateStickyPositioning();
        });
      },
      updateStickyPositioning: function () {
        var n = "." + this.settings.stickyClass,
          r = e(t);
        if (e(n).length > 0) {
          var i = this.settings.$topbar.data("stickyoffset");
          e(n).hasClass("expanded") ||
            (r.scrollTop() > i
              ? e(n).hasClass("fixed") ||
                (e(n).addClass("fixed"), e("body").addClass("f-topbar-fixed"))
              : r.scrollTop() <= i &&
                e(n).hasClass("fixed") &&
                (e(n).removeClass("fixed"),
                e("body").removeClass("f-topbar-fixed")));
        }
      },
      off: function () {
        e(this.scope).off(".fndtn.topbar"), e(t).off(".fndtn.topbar");
      },
      reflow: function () {},
    };
  })(Foundation.zj, this, this.document),
  (function (e, t, n, r) {
    "use strict";
    Foundation.libs.interchange = {
      name: "interchange",
      version: "4.2.4",
      cache: {},
      images_loaded: !1,
      settings: {
        load_attr: "interchange",
        named_queries: {
          default: "only screen and (min-width: 1px)",
          small: "only screen and (min-width: 768px)",
          medium: "only screen and (min-width: 1280px)",
          large: "only screen and (min-width: 1440px)",
          landscape: "only screen and (orientation: landscape)",
          portrait: "only screen and (orientation: portrait)",
          retina:
            "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)",
        },
        directives: {
          replace: function (e, t) {
            if (/IMG/.test(e[0].nodeName)) {
              var n = e[0].src;
              if (new RegExp(t, "i").test(n)) return;
              return (e[0].src = t), e.trigger("replace", [e[0].src, n]);
            }
          },
        },
      },
      init: function (t, n, r) {
        return (
          Foundation.inherit(this, "throttle"),
          typeof n == "object" && e.extend(!0, this.settings, n),
          this.events(),
          this.images(),
          typeof n != "string" ? this.settings.init : this[n].call(this, r)
        );
      },
      events: function () {
        var n = this;
        e(t).on(
          "resize.fndtn.interchange",
          n.throttle(function () {
            n.resize.call(n);
          }, 50)
        );
      },
      resize: function () {
        var t = this.cache;
        if (!this.images_loaded) {
          setTimeout(e.proxy(this.resize, this), 50);
          return;
        }
        for (var n in t)
          if (t.hasOwnProperty(n)) {
            var r = this.results(n, t[n]);
            r && this.settings.directives[r.scenario[1]](r.el, r.scenario[0]);
          }
      },
      results: function (t, n) {
        var r = n.length;
        if (r > 0) {
          var i = e('[data-uuid="' + t + '"]');
          for (var s = r - 1; s >= 0; s--) {
            var o,
              u = n[s][2];
            this.settings.named_queries.hasOwnProperty(u)
              ? (o = matchMedia(this.settings.named_queries[u]))
              : (o = matchMedia(u));
            if (o.matches) return { el: i, scenario: n[s] };
          }
        }
        return !1;
      },
      images: function (e) {
        return typeof this.cached_images == "undefined" || e
          ? this.update_images()
          : this.cached_images;
      },
      update_images: function () {
        var t = n.getElementsByTagName("img"),
          r = t.length,
          i = 0,
          s = "data-" + this.settings.load_attr;
        (this.cached_images = []), (this.images_loaded = !1);
        for (var o = r - 1; o >= 0; o--)
          this.loaded(
            e(t[o]),
            function (e) {
              i++;
              if (e) {
                var t = e.getAttribute(s) || "";
                t.length > 0 && this.cached_images.push(e);
              }
              i === r && ((this.images_loaded = !0), this.enhance());
            }.bind(this)
          );
        return "deferred";
      },
      loaded: function (e, t) {
        function n() {
          t(e[0]);
        }
        function r() {
          this.one("load", n);
          if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
            var e = this.attr("src"),
              t = e.match(/\?/) ? "&" : "?";
            (t += "random=" + new Date().getTime()), this.attr("src", e + t);
          }
        }
        if (!e.attr("src")) {
          n();
          return;
        }
        e[0].complete || e[0].readyState === 4 ? n() : r.call(e);
      },
      enhance: function () {
        var n = this.images().length;
        for (var r = n - 1; r >= 0; r--) this._object(e(this.images()[r]));
        return e(t).trigger("resize");
      },
      parse_params: function (e, t, n) {
        return [this.trim(e), this.convert_directive(t), this.trim(n)];
      },
      convert_directive: function (e) {
        var t = this.trim(e);
        return t.length > 0 ? t : "replace";
      },
      _object: function (e) {
        var t = this.parse_data_attr(e),
          n = [],
          r = t.length;
        if (r > 0)
          for (var i = r - 1; i >= 0; i--) {
            var s = t[i].split(/\((.*?)(\))$/);
            if (s.length > 1) {
              var o = s[0].split(","),
                u = this.parse_params(o[0], o[1], s[1]);
              n.push(u);
            }
          }
        return this.store(e, n);
      },
      uuid: function (e) {
        function n() {
          return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1);
        }
        var t = e || "-";
        return n() + n() + t + n() + t + n() + t + n() + t + n() + n() + n();
      },
      store: function (e, t) {
        var n = this.uuid(),
          r = e.data("uuid");
        return r
          ? this.cache[r]
          : (e.attr("data-uuid", n), (this.cache[n] = t));
      },
      trim: function (t) {
        return typeof t == "string" ? e.trim(t) : t;
      },
      parse_data_attr: function (e) {
        var t = e.data(this.settings.load_attr).split(/\[(.*?)\]/),
          n = t.length,
          r = [];
        for (var i = n - 1; i >= 0; i--)
          t[i].replace(/[\W\d]+/, "").length > 4 && r.push(t[i]);
        return r;
      },
      reflow: function () {
        this.images(!0);
      },
    };
  })(Foundation.zj, this, this.document),
  (function (e) {
    "use strict";
    function t(e, t, n) {
      if (e.addEventListener) return e.addEventListener(t, n, !1);
      if (e.attachEvent) return e.attachEvent("on" + t, n);
    }
    function n(e, t) {
      var n, r;
      for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return !0;
      return !1;
    }
    function r(e, t) {
      var n;
      e.createTextRange
        ? ((n = e.createTextRange()), n.move("character", t), n.select())
        : e.selectionStart && (e.focus(), e.setSelectionRange(t, t));
    }
    function i(e, t) {
      try {
        return (e.type = t), !0;
      } catch (n) {
        return !1;
      }
    }
    e.Placeholders = {
      Utils: { addEventListener: t, inArray: n, moveCaret: r, changeType: i },
    };
  })(this),
  (function (e) {
    "use strict";
    function M() {}
    function _(e) {
      var t;
      return e.value === e.getAttribute(a) && e.getAttribute(f) === "true"
        ? (e.setAttribute(f, "false"),
          (e.value = ""),
          (e.className = e.className.replace(s, "")),
          (t = e.getAttribute(l)),
          t && (e.type = t),
          !0)
        : !1;
    }
    function D(e) {
      var t,
        n = e.getAttribute(a);
      return e.value === "" && n
        ? (e.setAttribute(f, "true"),
          (e.value = n),
          (e.className += " " + i),
          (t = e.getAttribute(l)),
          t
            ? (e.type = "text")
            : e.type === "password" &&
              b.changeType(e, "text") &&
              e.setAttribute(l, "password"),
          !0)
        : !1;
    }
    function P(e, t) {
      var n, r, i, s, f;
      if (e && e.getAttribute(a)) t(e);
      else {
        (n = e ? e.getElementsByTagName("input") : o),
          (r = e ? e.getElementsByTagName("textarea") : u);
        for (f = 0, s = n.length + r.length; f < s; f++)
          (i = f < n.length ? n[f] : r[f - n.length]), t(i);
      }
    }
    function H(e) {
      P(e, _);
    }
    function B(e) {
      P(e, D);
    }
    function j(e) {
      return function () {
        w && e.value === e.getAttribute(a) && e.getAttribute(f) === "true"
          ? b.moveCaret(e, 0)
          : _(e);
      };
    }
    function F(e) {
      return function () {
        D(e);
      };
    }
    function I(e) {
      return function (t) {
        S = e.value;
        if (
          e.getAttribute(f) === "true" &&
          S === e.getAttribute(a) &&
          b.inArray(n, t.keyCode)
        )
          return t.preventDefault && t.preventDefault(), !1;
      };
    }
    function q(e) {
      return function () {
        var t;
        e.getAttribute(f) === "true" &&
          e.value !== S &&
          ((e.className = e.className.replace(s, "")),
          (e.value = e.value.replace(e.getAttribute(a), "")),
          e.setAttribute(f, !1),
          (t = e.getAttribute(l)),
          t && (e.type = t)),
          e.value === "" && (e.blur(), b.moveCaret(e, 0));
      };
    }
    function R(e) {
      return function () {
        e === document.activeElement &&
          e.value === e.getAttribute(a) &&
          e.getAttribute(f) === "true" &&
          b.moveCaret(e, 0);
      };
    }
    function U(e) {
      return function () {
        H(e);
      };
    }
    function z(e) {
      e.form &&
        ((k = e.form),
        k.getAttribute(c) ||
          (b.addEventListener(k, "submit", U(k)), k.setAttribute(c, "true"))),
        b.addEventListener(e, "focus", j(e)),
        b.addEventListener(e, "blur", F(e)),
        w &&
          (b.addEventListener(e, "keydown", I(e)),
          b.addEventListener(e, "keyup", q(e)),
          b.addEventListener(e, "click", R(e))),
        e.setAttribute(h, "true"),
        e.setAttribute(a, N),
        D(e);
    }
    var t = [
        "text",
        "search",
        "url",
        "tel",
        "email",
        "password",
        "number",
        "textarea",
      ],
      n = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
      r = "#ccc",
      i = "placeholdersjs",
      s = new RegExp("(?:^|\\s)" + i + "(?!\\S)"),
      o,
      u,
      a = "data-placeholder-value",
      f = "data-placeholder-active",
      l = "data-placeholder-type",
      c = "data-placeholder-submit",
      h = "data-placeholder-bound",
      p = "data-placeholder-focus",
      d = "data-placeholder-live",
      v = document.createElement("input"),
      m = document.getElementsByTagName("head")[0],
      g = document.documentElement,
      y = e.Placeholders,
      b = y.Utils,
      w,
      E,
      S,
      x,
      T,
      N,
      C,
      k,
      L,
      A,
      O;
    y.nativeSupport = v.placeholder !== void 0;
    if (!y.nativeSupport) {
      (o = document.getElementsByTagName("input")),
        (u = document.getElementsByTagName("textarea")),
        (w = g.getAttribute(p) === "false"),
        (E = g.getAttribute(d) !== "false"),
        (x = document.createElement("style")),
        (x.type = "text/css"),
        (T = document.createTextNode("." + i + " { color:" + r + "; }")),
        x.styleSheet ? (x.styleSheet.cssText = T.nodeValue) : x.appendChild(T),
        m.insertBefore(x, m.firstChild);
      for (O = 0, A = o.length + u.length; O < A; O++)
        (L = O < o.length ? o[O] : u[O - o.length]),
          (N = L.attributes.placeholder),
          N && ((N = N.nodeValue), N && b.inArray(t, L.type) && z(L));
      C = setInterval(function () {
        for (O = 0, A = o.length + u.length; O < A; O++) {
          (L = O < o.length ? o[O] : u[O - o.length]),
            (N = L.attributes.placeholder);
          if (N) {
            N = N.nodeValue;
            if (N && b.inArray(t, L.type)) {
              L.getAttribute(h) || z(L);
              if (
                N !== L.getAttribute(a) ||
                (L.type === "password" && !L.getAttribute(l))
              )
                L.type === "password" &&
                  !L.getAttribute(l) &&
                  b.changeType(L, "text") &&
                  L.setAttribute(l, "password"),
                  L.value === L.getAttribute(a) && (L.value = N),
                  L.setAttribute(a, N);
            }
          }
        }
        E || clearInterval(C);
      }, 100);
    }
    (y.disable = y.nativeSupport ? M : H), (y.enable = y.nativeSupport ? M : B);
  })(this),
  (function (e, t, n, r) {
    "use strict";
    Foundation.libs.abide = {
      name: "abide",
      version: "4.3.2",
      settings: {
        live_validate: !0,
        focus_on_invalid: !0,
        timeout: 1e3,
        patterns: {
          alpha: /[a-zA-Z]+/,
          alpha_numeric: /[a-zA-Z0-9]+/,
          integer: /-?\d+/,
          number: /-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?/,
          password:
            /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
          card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
          cvv: /^([0-9]){3,4}$/,
          email:
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          url: /(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?/,
          domain:
            /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,
          datetime:
            /([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))/,
          date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/,
          time: /(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}/,
          dateISO: /\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/,
          month_day_year:
            /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/,
          color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
        },
      },
      timer: null,
      init: function (t, n, r) {
        typeof n == "object" && e.extend(!0, this.settings, n);
        if (typeof n == "string") return this[n].call(this, r);
        this.settings.init || this.events();
      },
      events: function () {
        var t = this,
          n = e("form[data-abide]", this.scope).attr(
            "novalidate",
            "novalidate"
          );
        n.on("submit validate", function (n) {
          return t.validate(e(this).find("input, textarea, select").get(), n);
        }),
          (this.settings.init = !0);
        if (!this.settings.live_validate) return;
        n.find("input, textarea, select")
          .on("blur change", function (e) {
            t.validate([this], e);
          })
          .on("keydown", function (e) {
            clearTimeout(t.timer),
              (t.timer = setTimeout(
                function () {
                  t.validate([this], e);
                }.bind(this),
                t.settings.timeout
              ));
          });
      },
      validate: function (t, n) {
        var r = this.parse_patterns(t),
          i = r.length,
          s = e(t[0]).closest("form");
        for (var o = 0; o < i; o++)
          if (!r[o] && /submit/.test(n.type))
            return (
              this.settings.focus_on_invalid && t[o].focus(),
              s.trigger("invalid"),
              e(t[o]).closest("form").attr("data-invalid", ""),
              !1
            );
        return (
          /submit/.test(n.type) && s.trigger("valid"),
          s.removeAttr("data-invalid"),
          !0
        );
      },
      parse_patterns: function (e) {
        var t = e.length,
          n = [];
        for (var r = t - 1; r >= 0; r--) n.push(this.pattern(e[r]));
        return this.check_validation_and_apply_styles(n);
      },
      pattern: function (e) {
        var t = e.getAttribute("type"),
          n = typeof e.getAttribute("required") == "string";
        if (this.settings.patterns.hasOwnProperty(t))
          return [e, this.settings.patterns[t], n];
        var r = e.getAttribute("pattern") || "";
        return this.settings.patterns.hasOwnProperty(r) && r.length > 0
          ? [e, this.settings.patterns[r], n]
          : r.length > 0
          ? [e, new RegExp(r), n]
          : ((r = /.*/), [e, r, n]);
      },
      check_validation_and_apply_styles: function (t) {
        var n = t.length,
          r = [];
        for (var i = n - 1; i >= 0; i--) {
          var s = t[i][0],
            o = t[i][2],
            u = s.value,
            a = s.type === "radio",
            f = o ? s.value.length > 0 : !0;
          a && o
            ? r.push(this.valid_radio(s, o))
            : (t[i][1].test(u) && f) || (!o && s.value.length < 1)
            ? (e(s).removeAttr("data-invalid").parent().removeClass("error"),
              r.push(!0))
            : (e(s).attr("data-invalid", "").parent().addClass("error"),
              r.push(!1));
        }
        return r;
      },
      valid_radio: function (t, r) {
        var i = t.getAttribute("name"),
          s = n.getElementsByName(i),
          o = s.length,
          u = !1;
        for (var a = 0; a < o; a++) s[a].checked && (u = !0);
        for (var a = 0; a < o; a++)
          u
            ? e(s[a]).removeAttr("data-invalid").parent().removeClass("error")
            : e(s[a]).attr("data-invalid", "").parent().addClass("error");
        return u;
      },
    };
  })(Foundation.zj, this, this.document);
