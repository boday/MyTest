!(function (e) {
    function t(t) {
        for (var n, s, a = t[0], l = t[1], c = t[2], h = 0, d = []; h < a.length; h++) (s = a[h]), Object.prototype.hasOwnProperty.call(o, s) && o[s] && d.push(o[s][0]), (o[s] = 0);
        for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
        for (u && u(t); d.length; ) d.shift()();
        return r.push.apply(r, c || []), i();
    }
    function i() {
        for (var e, t = 0; t < r.length; t++) {
            for (var i = r[t], n = !0, a = 1; a < i.length; a++) {
                var l = i[a];
                0 !== o[l] && (n = !1);
            }
            n && (r.splice(t--, 1), (e = s((s.s = i[0]))));
        }
        return e;
    }
    var n = {},
        o = { 1: 0 },
        r = [];
    function s(t) {
        if (n[t]) return n[t].exports;
        var i = (n[t] = { i: t, l: !1, exports: {} });
        return e[t].call(i.exports, i, i.exports, s), (i.l = !0), i.exports;
    }
    (s.m = e),
        (s.c = n),
        (s.d = function (e, t, i) {
            s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
        }),
        (s.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (s.t = function (e, t) {
            if ((1 & t && (e = s(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if ((s.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var n in e)
                    s.d(
                        i,
                        n,
                        function (t) {
                            return e[t];
                        }.bind(null, n)
                    );
            return i;
        }),
        (s.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return s.d(t, "a", t), t;
        }),
        (s.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (s.p = "");
    var a = (l = window.webpackJsonp = window.webpackJsonp || []).push.bind(l);
    l.push = t;
    for (var l = l.slice(), c = 0; c < l.length; c++) t(l[c]);
    var u = a;
    r.push([176, 0]), i();
})({
    176: function (e, t, i) {
        i(177), (e.exports = i(450));
    },
    450: function (e, t, i) {
        "use strict";
        i.r(t), i(363);
        (t = i(162)), (t = i.n(t));
        var n = i(11),
            o = i.n(n),
            r = ((window.gEvent = new o.a()), (window.gRICOH = []), (window.gRICOH.isEnableTouch = !1), (window.gRICOH.isReadyYT = !1), (window.gRICOH.isLoaded = !1), (window.YT = null), document.getElementsByTagName("html")[0]),
            s = navigator.userAgent.toLowerCase();
        function a(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        /iphone|ipad|macintosh|ipod/.test(s) && "ontouchend" in document
            ? (r.classList.add("ricoh-mobile"), (gRICOH.isDevice = "mobile"), (gRICOH.isAndroid = !1))
            : /android/.test(s) && "ontouchend" in document
            ? (r.classList.add("ricoh-mobile"), (gRICOH.isDevice = "mobile"), (gRICOH.isAndroid = !0))
            : (r.classList.add("ricoh-pc"), (gRICOH.isDevice = "pc"), (gRICOH.isAndroid = !1)),
            void 0 !== window.ontouchstart && 0 < navigator.maxTouchPoints && (gRICOH.isEnableTouch = !0);
        s = new ((function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.$MAX_WIDTH = 900), (this.$PAGE_MODULE = {}), (this.$COMMON_PAGE_MODULE = null);
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "addPageModule",
                        value: function (e, t) {
                            this.$PAGE_MODULE[e] = new t();
                        },
                    },
                    {
                        key: "getClientHeight",
                        value: function () {
                            return document.documentElement.clientHeight || document.body.clientHeight;
                        },
                    },
                    {
                        key: "getScrollTop",
                        value: function () {
                            return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
                        },
                    },
                    {
                        key: "getScrollHeight",
                        value: function () {
                            return document.documentElement.scrollHeight || document.body.scrollHeight;
                        },
                    },
                    {
                        key: "getScrollThreshold",
                        value: function () {
                            return 0.8 * window.innerHeight;
                        },
                    },
                    {
                        key: "getOffset",
                        value: function (e) {
                            var t = null;
                            return (
                                "string" == typeof e ? (t = document.querySelector(e).getBoundingClientRect()) : void 0 !== e && (t = e.getBoundingClientRect()),
                                t ? { orig: t, offset: { top: t.top + this.getScrollTop(), left: t.left } } : null
                            );
                        },
                    },
                    {
                        key: "getMatchMedia",
                        value: function () {
                            return window.matchMedia("(max-width: " + this.$MAX_WIDTH + "px)").matches;
                        },
                    },
                    {
                        key: "isDevice",
                        value: function () {
                            return this.getMatchMedia() ? "sp" : "pc";
                        },
                    },
                    {
                        key: "scrollToY",
                        value: function (e, t) {
                            gsap.to(window, { duration: t, scrollTo: { y: e, autoKill: !1 } });
                        },
                    },
                    {
                        key: "getHref",
                        value: function (e) {
                            if (e) return e.getAttribute && "string" == typeof e.getAttribute("xlink:href") ? e.getAttribute("xlink:href") : "string" == typeof e.href ? e.href : void 0;
                        },
                    },
                    {
                        key: "byteCount",
                        value: function (e) {
                            for (var t = 0, i = 0; i < e.length; i++) {
                                var n = e.charAt(i);
                                this.isZenkaku(n) ? (t += 2) : (t += 1.3);
                            }
                            return t;
                        },
                    },
                    {
                        key: "isZenkaku",
                        value: function (e) {
                            return !e.match(/^[\u0020-\u007e]+$/);
                        },
                    },
                    {
                        key: "byteAjust",
                        value: function (e, t) {
                            for (var i = 0, n = "", o = 0; o < e.length; o++) {
                                var r = e.charAt(o);
                                if ((this.isZenkaku(r) ? (i += 2) : (i += 1.3), t < i)) break;
                                n += e.charAt(o);
                            }
                            return n + "…";
                        },
                    },
                    {
                        key: "getCurrentState",
                        value: function () {
                            return "/" === location.pathname ? "top" : null;
                        },
                    },
                    {
                        key: "random",
                        value: function (e, t) {
                            return Math.random() * (t - e) + e;
                        },
                    },
                    {
                        key: "randomInt",
                        value: function (e, t) {
                            return Math.floor(Math.random() * (t - e + 1)) + e;
                        },
                    },
                    {
                        key: "range",
                        value: function (e) {
                            return this.random(-e, e);
                        },
                    },
                    {
                        key: "randomArr",
                        value: function (e) {
                            return e[this.randomInt(0, e.length - 1)];
                        },
                    },
                    {
                        key: "hit",
                        value: function (e) {
                            return 0 == this.randomInt(0, e - 1);
                        },
                    },
                    {
                        key: "random2",
                        value: function (e, t) {
                            return (t = Math.random() * (t - e) + e), 0.5 < Math.random() && (t *= -1), t;
                        },
                    },
                    {
                        key: "getOffsetTop",
                        value: function (e) {
                            for (var t = e.offsetTop, i = e.offsetParent; i && i != document.body; ) (t += i.offsetTop), (i = i.offsetParent);
                            return { top: t, parent: i };
                        },
                    },
                ]) && a(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })())();
        var l = (Object.freeze(s), s);
        function c(e) {
            return 1 < (e = document.querySelectorAll(e)).length ? Array.prototype.slice.call(e, 0) : e[0];
        }
        var u,
            h = i(22),
            d = i(0);
        function f(e) {
            return ((u = u || document.createElement("div")).innerHTML = e), (e = u.children[0]), u.removeChild(e), e;
        }
        function p(e) {
            var t = "background-image: url('" + e.image + "')";
            return f(
                '<li class="p-topCaseStudy-list__item">  <a class="p-topCaseStudy-list__box" href="' +
                    e.link +
                    '">    <div class="p-topCaseStudy-list__image">      <span style="' +
                    t +
                    '"></span>    </div>    <div class="p-topCaseStudy-list__info">      <div class="p-topCaseStudy-list__date">' +
                    e.date +
                    '</div>      <p class="p-topCaseStudy-list__title">' +
                    e.title +
                    '</p>      <div class="p-topCaseStudy-list__category">' +
                    e.category +
                    '</div>      <div class="p-topCaseStudy-list__tags">' +
                    (function (e, t, i) {
                        for (var n = "", o = 0; o < e.length; o++) (n += "<" + t), (n += ">" + e[o] + "</" + t + ">");
                        return n;
                    })(e.tags, "span") +
                    '</div>    </div>  <div class="p-topCaseStudy-list__num2">CASE ' +
                    e.num +
                    "</div>  </a></li>"
            );
        }
        function v(e) {
            return (v =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function y(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        function m(e, t) {
            return (m =
                Object.setPrototypeOf ||
                function (e, t) {
                    return (e.__proto__ = t), e;
                })(e, t);
        }
        function b(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function g(e) {
            return (g = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
        }
        function w(e, t, i) {
            return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i), e;
        }
        var k = (function () {
            var e = o,
                t = n;
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && m(e, t);
            var i = (function (e) {
                var t = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var i,
                        n = g(e);
                    (i = t ? ((i = g(this).constructor), Reflect.construct(n, arguments, i)) : n.apply(this, arguments)), (n = this);
                    if (i && ("object" === v(i) || "function" == typeof i)) return i;
                    if (void 0 !== i) throw new TypeError("Derived constructors may only return object or undefined");
                    return b(n);
                };
            })(o);
            function o(e) {
                var t;
                if (!(this instanceof o)) throw new TypeError("Cannot call a class as a function");
                return (
                    w(b((t = i.call(this))), "$target", void 0),
                    w(b(t), "_touch", void 0),
                    w(b(t), "_start", function () {
                        window.addEventListener(o.TOUCH_MOVE, t._onTouchMove, { passive: !1 }), window.addEventListener(o.TOUCH_CANCEL, t._onTouchCancel);
                    }),
                    w(b(t), "_stop", function () {
                        window.removeEventListener(o.TOUCH_MOVE, t._onTouchMove), window.removeEventListener(o.TOUCH_CANCEL, t._onTouchCancel);
                    }),
                    w(b(t), "_onTouchStartEnd", function (e) {
                        var i = e.touches.length,
                            n = e.touches;
                        1 === i ? (t._start(), (t._touch = n[0]), t.emit(o.TOUCH_START, t._touch, e)) : (t._stop(), t._touch && t.emit(o.TOUCH_END, t._touch, e), (t._touch = null));
                    }),
                    w(b(t), "_onTouchMove", function (e) {
                        var i = e.changedTouches;
                        (t._touch = i[0]), t.emit(o.TOUCH_MOVE, t._touch, e);
                    }),
                    w(b(t), "_onTouchCancel", function () {
                        t._stop(), (t._touch = null);
                    }),
                    (t.$target = e),
                    t.$target.addEventListener(o.TOUCH_START, t._onTouchStartEnd),
                    window.addEventListener(o.TOUCH_END, t._onTouchStartEnd),
                    t
                );
            }
            return (
                (e = o),
                (t = [
                    {
                        key: "destroy",
                        value: function () {
                            this._stop(), this.$target.removeEventListener(o.TOUCH_START, this._onTouchStartEnd), window.removeEventListener(o.TOUCH_END, this._onTouchStartEnd), (this.$target = null), (this._touch = null);
                        },
                    },
                ]) && y(e.prototype, t),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                o
            );
        })();
        function E(e) {
            for (var t, i, n = e.length; n; ) (i = Math.floor(Math.random() * n--)), (t = e[n]), (e[n] = e[i]), (e[i] = t);
            return e;
        }
        w(k, "TOUCH_START", "touchstart"), w(k, "TOUCH_END", "touchend"), w(k, "TOUCH_MOVE", "touchmove"), w(k, "TOUCH_CANCEL", "touchcancel");
        var S = [],
            O = [];
        function _(e, t, i) {
            var n = {
                callback: t,
                listener: function (e) {
                    var i = e.relatedTarget,
                        n = e.currentTarget;
                    (i && n.contains(i)) || t(e);
                },
            };
            S.push(n), e.addEventListener("mouseover", n.listener, i);
        }
        function C(e, t, i) {
            var n,
                o = S.findIndex(function (e) {
                    return e.callback === t;
                });
            -1 !== o && ((n = S[o]), S.splice(o, 1), e.removeEventListener("mouseover", n.listener, i));
        }
        function x(e, t, i) {
            var n = {
                callback: t,
                listener: function (e) {
                    var i = e.relatedTarget,
                        n = e.currentTarget;
                    (i && n.contains(i)) || t(e);
                },
            };
            O.push(n), e.addEventListener("mouseout", n.listener, i);
        }
        function T(e, t, i) {
            var n,
                o = O.findIndex(function (e) {
                    return e.callback === t;
                });
            -1 !== o && ((n = O[o]), O.splice(o, 1), e.removeEventListener("mouseout", n.listener, i));
        }
        function P(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
            return n;
        }
        function L(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        function M(e, t, i) {
            return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i), e;
        }
        var R = (function () {
                function e() {
                    var t = this;
                    if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                    M(this, "$list", void 0),
                        M(this, "$prev", void 0),
                        M(this, "$next", void 0),
                        M(this, "$container", void 0),
                        M(this, "positionMax", void 0),
                        M(this, "position", void 0),
                        M(this, "targetPosition", void 0),
                        M(this, "tween", void 0),
                        M(this, "touch1", void 0),
                        M(this, "touchX", void 0),
                        M(this, "touchY", void 0),
                        M(this, "judging", void 0),
                        M(this, "swiping", void 0),
                        M(this, "onPrev", function () {
                            --t.targetPosition, t.doTween();
                        }),
                        M(this, "onNext", function () {
                            t.targetPosition++, t.doTween();
                        }),
                        M(this, "updatePosition", function () {
                            var i = (t.position * e.itemWidth) % t.positionMax;
                            i < 0 && (i += t.positionMax), h.a.set(t.$list, { x: -i - e.baseWidth });
                        }),
                        M(this, "onTouchStart", function (e, i) {
                            t.touch1.on(k.TOUCH_END, t.onTouchEnd), t.touch1.on(k.TOUCH_MOVE, t.onTouchMove), (t.touchStartX = t.touchPrevX = e.clientX), (t.touchStartY = e.clientY), (t.judging = !0), (t.swiping = !1);
                        }),
                        M(this, "onTouchEnd", function (e, i) {
                            t.swiping && ((t.targetPosition = Math.round(t.position)), t.doTween()), (t.judging = !1), (t.swiping = !1), t.touch1.off(k.TOUCH_END, t.onTouchEnd), t.touch1.off(k.TOUCH_MOVE, t.onTouchMove);
                        }),
                        M(this, "onTouchMove", function (e, i) {
                            var n, o;
                            t.judging
                                ? ((n = e.clientX - t.touchStartX),
                                  (o = e.clientY - t.touchStartY),
                                  30 < Math.sqrt(n * n + o * o) && (Math.abs(n) > Math.abs(o) && (t.cancelTween(), (t.swiping = !0), t.calcPosition(e.clientX)), (t.judging = !1)))
                                : t.swiping && t.calcPosition(e.clientX),
                                i.cancelable && t.swiping && event.preventDefault(),
                                (t.touchPrevX = e.clientX);
                        }),
                        M(this, "calcPosition", function (i) {
                            (t.position -= (1.3333333 * (i - t.touchPrevX)) / e.itemWidth), t.updatePosition();
                        }),
                        M(this, "_onMouseEnter", function (e) {
                            t.$container.classList.add("p-topCaseStudy--isActive");
                        }),
                        M(this, "_onMouseLeave", function (e) {
                            t.$container.classList.remove("p-topCaseStudy--isActive");
                        });
                }
                var t, i, n;
                return (
                    (t = e),
                    (n = [
                        {
                            key: "setDataList",
                            value: function (t) {
                                (e.dataList = t), (e.dataNum = t.length);
                            },
                        },
                    ]),
                    (i = [
                        {
                            key: "start",
                            value: function (e, t, i, n) {
                                (this.$list = e),
                                    (this.$prev = t),
                                    (this.$next = i),
                                    (this.$container = n),
                                    this.$prev.addEventListener("click", this.onPrev),
                                    this.$next.addEventListener("click", this.onNext),
                                    (this.touch1 = new k(this.$list)),
                                    this.touch1.on(k.TOUCH_START, this.onTouchStart),
                                    (this.position = 0),
                                    (this.targetPosition = 0);
                            },
                        },
                        {
                            key: "stop",
                            value: function () {
                                this.removeItems(),
                                    this.$prev.removeEventListener("click", this.onPrev),
                                    this.$next.removeEventListener("click", this.onNext),
                                    this.touch1.off(k.TOUCH_START, this.onTouchStart),
                                    this.touch1.off(k.TOUCH_END, this.onTouchEnd),
                                    this.touch1.off(k.TOUCH_MOVE, this.onTouchMove),
                                    this.touch1.destroy(),
                                    (this.touch1 = null),
                                    (this.$list = null),
                                    (this.$prev = null),
                                    (this.$next = null),
                                    (this.$container = null),
                                    (this.tween = null);
                            },
                        },
                        {
                            key: "measureWidth",
                            value: function (t) {
                                t = t ? ((i = 180), 900) : ((i = 480), 1920);
                                var i = ((e.itemWidth = i), (e.baseWidth = i * e.dataNum), Math.ceil(t / e.baseWidth));
                                (e.repeat = 3 * i), (this.positionMax = i * e.baseWidth);
                            },
                        },
                        {
                            key: "addItems",
                            value: function (t) {
                                for (
                                    var i = t ? 30 : 100,
                                        n = e.dataNum,
                                        o =
                                            ((t = (function (e) {
                                                return (
                                                    (function (e) {
                                                        if (Array.isArray(e)) return P(e);
                                                    })(e) ||
                                                    (function (e) {
                                                        if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
                                                    })(e) ||
                                                    (function (e, t) {
                                                        if (e) {
                                                            if ("string" == typeof e) return P(e, t);
                                                            var i = Object.prototype.toString.call(e).slice(8, -1);
                                                            return "Map" === (i = "Object" === i && e.constructor ? e.constructor.name : i) || "Set" === i
                                                                ? Array.from(e)
                                                                : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                                                                ? P(e, t)
                                                                : void 0;
                                                        }
                                                    })(e) ||
                                                    (function () {
                                                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                                    })()
                                                );
                                            })(Array(n)).map(function (e, t) {
                                                return t / (n - 1);
                                            })),
                                            Math.ceil(n / 2)),
                                        r = E(t.slice(0, o)),
                                        s = E(t.slice(o)),
                                        a = 0;
                                    a < e.repeat;
                                    a++
                                )
                                    for (var l = 0; l < e.dataNum; l++) {
                                        var c = p(e.dataList[l]),
                                            u = (l % 2 == 0 ? r : s)[(u = Math.floor(l / 2))];
                                        _((u = ((c.style.marginTop = u * i + "px"), c.querySelector("a.p-topCaseStudy-list__box"))), this._onMouseEnter), x(u, this._onMouseLeave), this.$list.appendChild(c);
                                    }
                            },
                        },
                        {
                            key: "removeItems",
                            value: function () {
                                for (var e = 0; e < this.$list.children.length; e++) {
                                    var t = this.$list.children[e].querySelector("a.p-topCaseStudy-list__box");
                                    C(t, this._onMouseEnter), T(t, this._onMouseLeave);
                                }
                                this.$list.innerHTML = "";
                            },
                        },
                        {
                            key: "cancelTween",
                            value: function () {
                                this.tween && this.tween.kill();
                            },
                        },
                        {
                            key: "doTween",
                            value: function () {
                                this.cancelTween(), (this.tween = h.a.to(this, 0.8, { position: this.targetPosition, ease: d.b.easeOut }).eventCallback("onUpdate", this.updatePosition).eventCallback("onComplete", this.onTweenComplete));
                            },
                        },
                    ]) && L(t.prototype, i),
                    n && L(t, n),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    e
                );
            })(),
            j = (M(R, "itemWidth", void 0), M(R, "baseWidth", void 0), M(R, "repeat", 0), M(R, "dataList", void 0), M(R, "dataNum", void 0), i(2));
        function A(e) {
            return (A =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function D(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        function I(e, t) {
            return (I =
                Object.setPrototypeOf ||
                function (e, t) {
                    return (e.__proto__ = t), e;
                })(e, t);
        }
        function q(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function N(e) {
            return (N = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
        }
        function B(e, t, i) {
            return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i), e;
        }
        var U = new ((function (e) {
            var t = n;
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && I(t, e);
            var i = (function (e) {
                var t = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var i,
                        n = N(e);
                    (i = t ? ((i = N(this).constructor), Reflect.construct(n, arguments, i)) : n.apply(this, arguments)), (n = this);
                    if (i && ("object" === A(i) || "function" == typeof i)) return i;
                    if (void 0 !== i) throw new TypeError("Derived constructors may only return object or undefined");
                    return q(n);
                };
            })(n);
            function n() {
                var e;
                if (!(this instanceof n)) throw new TypeError("Cannot call a class as a function");
                return (
                    B(q((e = i.call(this))), "_y", 0),
                    B(q(e), "_onAlternativeScroll", function () {
                        var t = -1 * j.a.getProperty(e.inner, "y");
                        e._y !== t && e.emit("scroll", t), (e._y = t);
                    }),
                    (e.name = "AlternativeScroll"),
                    (e.ispc = "pc" === window.gRICOH.isDevice),
                    e.frame,
                    e.inner,
                    e.body,
                    (e.updateTimer = 0),
                    e.tmpInnerHeight,
                    (e.tmpSt = 0),
                    e.bindResize,
                    e.bindScroll,
                    (e.isEnabled = !0),
                    e.ispc ? (e.isEnabled = !0) : (e.isEnabled = !1),
                    (e.ticking = !1),
                    e.init(),
                    e
                );
            }
            return (
                (t = n),
                (e = [
                    {
                        key: "init",
                        value: function () {
                            (this.state = l.getCurrentState()), (history.scrollRestoration = "manual"), window.scrollTo(0, 0), (this.body = document.body), this.isEnabled ? this.initPC() : this.initSP(), this.fixed(!0);
                        },
                    },
                    {
                        key: "initPC",
                        value: function () {
                            (this.frame = document.getElementById("l-scroll-frame")),
                                (this.inner = document.getElementById("l-scroll-inner")),
                                j.a.set(this.frame, { position: "fixed", left: 0, top: 0, width: "100%", height: "100%", overflow: "hidden", backfaceVisibility: "hidden" }),
                                j.a.set(this.inner, { position: "absolute", left: 0, top: 0, width: "100%", className: "+=is-xstart" });
                            var e = this.body.scrollHeight;
                            this.tmpInnerHeight = e;
                        },
                    },
                    { key: "initSP", value: function () {} },
                    {
                        key: "loadedStart",
                        value: function () {
                            this.isEnabled && (this.addListner(), this.startTimer());
                        },
                    },
                    {
                        key: "fixed",
                        value: function (e) {
                            e
                                ? ((this.body.style.overflowX = "hidden"), (this.body.style.overflowY = "scroll"), (this.body.style.position = "fixed"), (this.body.style.height = "auto"))
                                : ((this.body.style.overflowX = "auto"), (this.body.style.overflowY = "scroll"), (this.body.style.position = "relative"), this.pageUpdate());
                        },
                    },
                    {
                        key: "addListner",
                        value: function () {
                            (this.bindResize = this.onResize.bind(this)),
                                window.addEventListener("resize", this.bindResize, { passive: !0 }),
                                (this.bindScroll = this.onScroll.bind(this)),
                                window.addEventListener("scroll", this.bindScroll, { passive: !0 });
                        },
                    },
                    {
                        key: "removeListner",
                        value: function () {
                            window.removeEventListener("resize", this.bindResize, { passive: !0 }), (this.bindResize = null), window.removeEventListener("scroll", this.bindScroll, { passive: !0 }), (this.bindScroll = null);
                        },
                    },
                    {
                        key: "startTimer",
                        value: function () {
                            window.cancelAnimationFrame(this.updateTimer), this.onTick();
                        },
                    },
                    {
                        key: "onTick",
                        value: function () {
                            var e = this.inner.clientHeight;
                            this.tmpInnerHeight !== e && this.pageUpdate(), (this.updateTimer = window.requestAnimationFrame(this.onTick.bind(this)));
                        },
                    },
                    {
                        key: "stopTimer",
                        value: function () {
                            window.cancelAnimationFrame(this.updateTimer);
                        },
                    },
                    {
                        key: "xStopScroll",
                        value: function () {
                            this.ispc &&
                                ((this.isEnabled = !1),
                                (this.tmpSt = void 0 !== window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop),
                                j.a.killTweensOf(this.inner),
                                (this.body.style.overflowX = "hidden"),
                                (this.body.style.overflowY = "scroll"),
                                (this.stopScrollTimer = requestAnimationFrame(this.xStopScrollComp.bind(this))),
                                j.a.set(this.inner, { className: "-=is-xstart" }),
                                this.stopTimer());
                        },
                    },
                    {
                        key: "xStopScrollComp",
                        value: function () {
                            this.body.style.position = "fixed";
                        },
                    },
                    {
                        key: "xStartScroll",
                        value: function (e) {
                            cancelAnimationFrame(this.stopScrollTimer),
                                e && (window.scrollTo(0, 0), this.ispc && j.a.set(this.inner, { force3D: !0, y: 0 }).eventCallback("onUpdate", this._onAlternativeScroll)),
                                this.ispc &&
                                    ((this.body.style.overflowX = "hidden"),
                                    (this.body.style.overflowY = "scroll"),
                                    (this.body.style.position = "relative"),
                                    j.a.set(this.inner, { className: "+=is-xstart" }),
                                    (this.isEnabled = !0),
                                    this.pageUpdate(),
                                    e || window.scrollTo(0, this.tmpSt),
                                    this.startTimer());
                        },
                    },
                    {
                        key: "onScroll",
                        value: function () {
                            this.isEnabled && (this.ticking || (requestAnimationFrame(this.scrollProcess.bind(this)), (this.ticking = !0)));
                        },
                    },
                    {
                        key: "scrollProcess",
                        value: function () {
                            var e = void 0 !== window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop;
                            j.a.killTweensOf(this.inner), j.a.to(this.inner, { duration: 0.8, force3D: !0, y: -e, delay: 0, ease: d.e.easeOut }).eventCallback("onUpdate", this._onAlternativeScroll), (this.ticking = !1);
                        },
                    },
                    {
                        key: "getScroll",
                        value: function () {
                            return this._y;
                        },
                    },
                    {
                        key: "onResize",
                        value: function () {
                            this.pageUpdate();
                        },
                    },
                    {
                        key: "pageUpdate",
                        value: function () {
                            this.ispc && this.isEnabled && this.inner && ((this.tmpInnerHeight = this.inner.clientHeight), (this.body.style.height = this.tmpInnerHeight + "px"));
                        },
                    },
                    { key: "reset", value: function () {} },
                    { key: "update", value: function () {} },
                    { key: "destroy", value: function () {} },
                ]) && D(t.prototype, e),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                n
            );
        })(o.a))();
        function z(e) {
            return (z =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function H(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        function $(e, t) {
            return ($ =
                Object.setPrototypeOf ||
                function (e, t) {
                    return (e.__proto__ = t), e;
                })(e, t);
        }
        function W(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function X(e) {
            return (X = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
        }
        function F(e, t, i) {
            return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i), e;
        }
        var Y = new ((function (e) {
            var t = n;
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && $(t, e);
            var i = (function (e) {
                var t = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var i,
                        n = X(e);
                    (i = t ? ((i = X(this).constructor), Reflect.construct(n, arguments, i)) : n.apply(this, arguments)), (n = this);
                    if (i && ("object" === z(i) || "function" == typeof i)) return i;
                    if (void 0 !== i) throw new TypeError("Derived constructors may only return object or undefined");
                    return W(n);
                };
            })(n);
            function n() {
                var e,
                    t = this,
                    o = n;
                if (!(t instanceof o)) throw new TypeError("Cannot call a class as a function");
                for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++) s[a] = arguments[a];
                return (
                    F(W((e = i.call.apply(i, [this].concat(s)))), "width", void 0),
                    F(W(e), "height", void 0),
                    F(W(e), "_onResize", function () {
                        var t = e.width,
                            i = e.height;
                        (e.width = window.innerWidth), (e.height = window.innerHeight), (t = e.width !== t), (i = e.height !== i);
                        t && e.emit("width", e.width), i && e.emit("height", e.height), (t || i) && e.emit("resize", e.width, e.height);
                    }),
                    e
                );
            }
            return (
                (t = n),
                (e = [
                    {
                        key: "start",
                        value: function () {
                            (this.width = 0), (this.height = 0), this._onResize(), window.addEventListener("resize", this._onResize);
                        },
                    },
                    {
                        key: "stop",
                        value: function () {
                            window.removeEventListener("resize", this._onResize);
                        },
                    },
                ]) && H(t.prototype, e),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                n
            );
        })(o.a))();
        function V(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        function G(e, t, i) {
            return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i), e;
        }
        var K = (function () {
            function e() {
                var t = this;
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                G(this, "$icon", void 0),
                    G(this, "$container", void 0),
                    G(this, "isActive", void 0),
                    G(this, "x", 0),
                    G(this, "y", 0),
                    G(this, "targetX", 0),
                    G(this, "targetY", 0),
                    G(this, "baseX", 0),
                    G(this, "baseY", 0),
                    G(this, "scrollMin", void 0),
                    G(this, "scrollMax", void 0),
                    G(this, "_onRAF", function () {
                        (t.x += 0.1 * (t.targetX - t.x)), (t.y += 0.1 * (t.targetY - t.y)), h.a.set(t.$icon, { x: t.x, y: t.y });
                    }),
                    G(this, "_onMouseMove", function (e) {
                        (t.targetX = e.pageX - t.baseX), (t.targetY = e.pageY - t.baseY);
                    }),
                    G(this, "_onResize", function () {
                        var e = t.$container.getBoundingClientRect(),
                            i = U.getScroll(),
                            n = e.left;
                        i = e.top + i;
                        (t.baseX = n + 55), (t.baseY = i + 55), (t.scrollMin = i - Y.height), (t.scrollMax = i + e.height);
                    }),
                    G(this, "_onScroll", function () {
                        var e = U.getScroll();
                        t.scrollMin <= e && e <= t.scrollMax ? t.active() : t.inactive();
                    });
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "start",
                        value: function (e, t) {
                            (this.$icon = e), (this.$container = t), Y.on("resize", this._onResize), U.on("scroll", this._onScroll), this._onResize(), this._onScroll();
                        },
                    },
                    {
                        key: "stop",
                        value: function () {
                            this.inactive(), Y.off("resize", this._onResize), U.off("scroll", this._onScroll), (this.$icon = null), (this.$container = null);
                        },
                    },
                    {
                        key: "active",
                        value: function () {
                            this.isActive || ((this.isActive = !0), h.a.ticker.add(this._onRAF), window.addEventListener("mousemove", this._onMouseMove));
                        },
                    },
                    {
                        key: "inactive",
                        value: function () {
                            this.isActive && ((this.isActive = !1), h.a.ticker.remove(this._onRAF), window.removeEventListener("mousemove", this._onMouseMove));
                        },
                    },
                ]) && V(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function J(e) {
            return (J =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function Z(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        function Q(e, t) {
            return (Q =
                Object.setPrototypeOf ||
                function (e, t) {
                    return (e.__proto__ = t), e;
                })(e, t);
        }
        function ee(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function te(e) {
            return (te = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
        }
        function ie(e, t, i) {
            return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i), e;
        }
        var ne = matchMedia("(min-width: 900.1px) and (max-width: 1200px)"),
            oe = matchMedia("(max-width: 900px)"),
            re = new ((function (e) {
                var t = n;
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Q(t, e);
                var i = (function (e) {
                    var t = (function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    })();
                    return function () {
                        var i,
                            n = te(e);
                        (i = t ? ((i = te(this).constructor), Reflect.construct(n, arguments, i)) : n.apply(this, arguments)), (n = this);
                        if (i && ("object" === J(i) || "function" == typeof i)) return i;
                        if (void 0 !== i) throw new TypeError("Derived constructors may only return object or undefined");
                        return ee(n);
                    };
                })(n);
                function n() {
                    var e,
                        t = this,
                        o = n;
                    if (!(t instanceof o)) throw new TypeError("Cannot call a class as a function");
                    for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++) s[a] = arguments[a];
                    return (
                        ie(ee((e = i.call.apply(i, [this].concat(s)))), "media", void 0),
                        ie(ee(e), "narrow", void 0),
                        ie(ee(e), "_onResize", function () {
                            var t = e.media,
                                i = e.narrow;
                            oe.matches ? ((e.media = "narrow"), (e.narrow = !0)) : (ne.matches ? (e.media = "medium") : (e.media = "wide"), (e.narrow = !1)),
                                e.media !== t && e.emit("media", e.media),
                                e.narrow !== i && e.emit("narrow", e.narrow);
                        }),
                        e
                    );
                }
                return (
                    (t = n),
                    (e = [
                        {
                            key: "start",
                            value: function () {
                                (this.media = "unknown"), this._onResize(), window.addEventListener("resize", this._onResize);
                            },
                        },
                        {
                            key: "stop",
                            value: function () {
                                window.removeEventListener("resize", this._onResize);
                            },
                        },
                    ]) && Z(t.prototype, e),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    n
                );
            })(o.a))();
        function se(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        function ae(e, t, i) {
            return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i), e;
        }
        var le = (function () {
            function e() {
                var t = this;
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                ae(this, "dataList", void 0),
                    ae(this, "caseStudy", void 0),
                    ae(this, "viewDetail", void 0),
                    ae(this, "_onMediaNarrow", function () {
                        t.caseStudy.measureWidth(re.narrow), t.caseStudy.removeItems(), t.caseStudy.addItems(re.narrow), t.caseStudy.updatePosition();
                    }),
                    (this.name = "topCaseStudy"),
                    (this.dataList = []);
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            (this.dataList = JSON.parse(document.getElementById("json-casestudy").textContent)), R.setDataList(this.dataList), this.caseStudy || ((this.caseStudy = new R()), (this.viewDetail = new K()));
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            var e = c(".p-topCaseStudy");
                            this.caseStudy.start(c(".p-topCaseStudy-list"), c(".p-topCaseStudy-navi__prev"), c(".p-topCaseStudy-navi__next"), e),
                                this.viewDetail.start(c(".p-topCaseStudy .c-topCommon-link"), e),
                                re.on("narrow", this._onMediaNarrow),
                                this._onMediaNarrow();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.caseStudy.stop(), this.viewDetail.stop(), re.off("narrow", this._onMediaNarrow);
                        },
                    },
                ]) && se(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function ce(e) {
            return (ce =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function ue(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        function he(e, t) {
            return (he =
                Object.setPrototypeOf ||
                function (e, t) {
                    return (e.__proto__ = t), e;
                })(e, t);
        }
        function de(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function fe(e) {
            return (fe = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
        }
        function pe(e, t, i) {
            return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i), e;
        }
        var ve = new ((function (e) {
            var t = n;
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && he(t, e);
            var i = (function (e) {
                var t = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var i,
                        n = fe(e);
                    (i = t ? ((i = fe(this).constructor), Reflect.construct(n, arguments, i)) : n.apply(this, arguments)), (n = this);
                    if (i && ("object" === ce(i) || "function" == typeof i)) return i;
                    if (void 0 !== i) throw new TypeError("Derived constructors may only return object or undefined");
                    return de(n);
                };
            })(n);
            function n() {
                var e,
                    t = this,
                    o = n;
                if (!(t instanceof o)) throw new TypeError("Cannot call a class as a function");
                for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++) s[a] = arguments[a];
                return (
                    pe(de((e = i.call.apply(i, [this].concat(s)))), "scroll", void 0),
                    pe(de(e), "_onAlternativeScroll", function () {
                        (e.scroll = U.getScroll()), e.emit("scroll", e.scroll);
                    }),
                    pe(de(e), "_onNativeScroll", function (t) {
                        var i = e.scroll;
                        (e.scroll = document.documentElement.scrollTop), e.scroll !== i && e.emit("scroll", e.scroll);
                    }),
                    e
                );
            }
            return (
                (t = n),
                (e = [
                    {
                        key: "start",
                        value: function () {
                            (this.scroll = -1), U.isEnabled ? (U.on("scroll", this._onAlternativeScroll), this._onAlternativeScroll()) : (window.addEventListener("scroll", this._onNativeScroll), this._onNativeScroll());
                        },
                    },
                    {
                        key: "stop",
                        value: function () {
                            U.isEnabled ? U.off("scroll", this._onAlternativeScroll) : window.removeEventListener("scroll", this._onNativeScroll);
                        },
                    },
                ]) && ue(t.prototype, e),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                n
            );
        })(o.a))();
        function ye(e, t) {
            0 === t.indexOf("+=") ? e.classList.add(t.slice(2)) : 0 === t.indexOf("-=") ? e.classList.remove(t.slice(2)) : (e.className = t);
        }
        function me(e) {
            return (me =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function be(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        function ge(e, t) {
            return (ge =
                Object.setPrototypeOf ||
                function (e, t) {
                    return (e.__proto__ = t), e;
                })(e, t);
        }
        function we(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function ke(e) {
            return (ke = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
        }
        function Ee(e, t, i) {
            return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i), e;
        }
        var Se = (function (e) {
            var t = n;
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && ge(t, e);
            var i = (function (e) {
                var t = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var i,
                        n = ke(e);
                    (i = t ? ((i = ke(this).constructor), Reflect.construct(n, arguments, i)) : n.apply(this, arguments)), (n = this);
                    if (i && ("object" === me(i) || "function" == typeof i)) return i;
                    if (void 0 !== i) throw new TypeError("Derived constructors may only return object or undefined");
                    return we(n);
                };
            })(n);
            function n(e) {
                var t;
                if (!(this instanceof n)) throw new TypeError("Cannot call a class as a function");
                return (
                    Ee(we((t = i.call(this))), "params", void 0),
                    Ee(we(t), "$container", void 0),
                    Ee(we(t), "$parallax", void 0),
                    Ee(we(t), "$classes", void 0),
                    Ee(we(t), "parallaxCenter", void 0),
                    Ee(we(t), "classCenter", void 0),
                    Ee(we(t), "_onResize", function () {
                        var e,
                            i = t.$container.getBoundingClientRect(),
                            n = i.top + ve.scroll;
                        t.params.parallax && ((e = t.params.parallax.origin), (t.parallaxCenter = n - Y.height * (1 - e[0]) + i.height * e[1])),
                            t.params.class && ((e = t.params.class.origin), (t.classCenter = n - Y.height * (1 - e[0]) + i.height * e[1])),
                            t._onScroll();
                    }),
                    Ee(we(t), "_onScroll", function () {
                        var e,
                            i,
                            n = 1;
                        "medium" === re.media ? (n = 0.75) : "narrow" === re.media && (n = 0.5),
                            t.params.parallax &&
                                ((e = t.parallaxCenter - ve.scroll),
                                Math.abs(e) <= 2 * Y.height &&
                                    t.$parallax.forEach(function (i, o) {
                                        var r = (o = t.params.parallax.targets[o])[1] * n;
                                        o = o[2];
                                        h.a.set(i, { y: o && e < 0 ? 0 : e * r });
                                    })),
                            t.params.class &&
                                !t.params.class.complete &&
                                ((i = t.classCenter - ve.scroll) <= 0
                                    ? t.params.class.complete ||
                                      ((t.params.class.complete = !0),
                                      t.$classes.forEach(function (e, i) {
                                          ye(e, t.params.class.targets[i][2]);
                                      }),
                                      t.emit("onClass", i))
                                    : t.params.class.complete &&
                                      ((t.params.class.complete = !1),
                                      t.$classes.forEach(function (e, i) {
                                          ye(e, t.params.class.targets[i][1]);
                                      }),
                                      t.emit("offClass", i)));
                    }),
                    (t.params = e),
                    t
                );
            }
            return (
                (t = n),
                (e = [
                    {
                        key: "start",
                        value: function () {
                            var e = this;
                            (this.$container = c(this.params.container)),
                                (this.$parallax = []),
                                this.params.parallax &&
                                    this.params.parallax.targets.forEach(function (t) {
                                        e.$parallax.push(c(t[0]));
                                    }),
                                (this.$classes = []),
                                this.params.class &&
                                    ((this.params.class.complete = !1),
                                    this.params.class.targets.forEach(function (t) {
                                        var i = c(t[0]);
                                        ye(i, t[1]), e.$classes.push(i);
                                    })),
                                Y.on("resize", this._onResize),
                                ve.on("scroll", this._onScroll),
                                this._onResize(),
                                this._onScroll();
                        },
                    },
                    {
                        key: "stop",
                        value: function () {
                            Y.off("resize", this._onResize), ve.off("scroll", this._onScroll);
                        },
                    },
                ]) && be(t.prototype, e),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                n
            );
        })(o.a);
        function Oe(e) {
            return (Oe =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function _e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        function Ce(e, t) {
            return (Ce =
                Object.setPrototypeOf ||
                function (e, t) {
                    return (e.__proto__ = t), e;
                })(e, t);
        }
        function xe(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function Te(e) {
            return (Te = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
        }
        function Pe(e, t, i) {
            return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i), e;
        }
        var Le = (function (e) {
            var t = n;
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ce(t, e);
            var i = (function (e) {
                var t = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var i,
                        n = Te(e);
                    (i = t ? ((i = Te(this).constructor), Reflect.construct(n, arguments, i)) : n.apply(this, arguments)), (n = this);
                    if (i && ("object" === Oe(i) || "function" == typeof i)) return i;
                    if (void 0 !== i) throw new TypeError("Derived constructors may only return object or undefined");
                    return xe(n);
                };
            })(n);
            function n(e) {
                var t;
                if (!(this instanceof n)) throw new TypeError("Cannot call a class as a function");
                return (
                    Pe(xe((t = i.call(this))), "className", void 0),
                    Pe(xe(t), "$elements", void 0),
                    Pe(xe(t), "_onMouseEnter", function (e) {
                        var i = e.currentTarget;
                        i.classList.remove(t.className),
                            setTimeout(function () {
                                i.classList.add(t.className);
                            }, (1e3 / 60) * 2);
                    }),
                    (t.className = e),
                    t
                );
            }
            return (
                (t = n),
                (e = [
                    {
                        key: "start",
                        value: function (e) {
                            var t = this;
                            (this.$elements = e),
                                this.$elements.forEach(function (e) {
                                    _(e, t._onMouseEnter);
                                });
                        },
                    },
                    {
                        key: "stop",
                        value: function () {
                            var e = this;
                            this.$elements.forEach(function (t) {
                                C(t, e._onMouseEnter);
                            }),
                                (this.$elements = null);
                        },
                    },
                ]) && _e(t.prototype, e),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                n
            );
        })(o.a);
        function Me(e, t, i, n, o, r, s) {
            try {
                var a = e[r](s),
                    l = a.value;
            } catch (e) {
                return void i(e);
            }
            a.done ? t(l) : Promise.resolve(l).then(n, o);
        }
        function Re(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
            return n;
        }
        function je(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        function Ae(e, t, i) {
            return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i), e;
        }
        var De = [
                { container: ".p-topAboutUs", class: { origin: [0.3, 0], targets: [[".p-topAboutUs", "+=c-topCommon--hidden", "-=c-topCommon--hidden"]] } },
                {
                    container: ".p-topWhatWeDo",
                    parallax: {
                        origin: [0.5, 0.5],
                        targets: [
                            [".p-topWhatWeDo-figure", 0.3],
                            [".p-topWhatWeDo .c-topCommon-type", 0.2],
                        ],
                    },
                    class: { origin: [0.3, 0], targets: [[".p-topWhatWeDo", "+=c-topCommon--hidden", "-=c-topCommon--hidden"]] },
                },
                {
                    container: ".p-topService",
                    parallax: {
                        origin: [0.5, 0.5],
                        targets: [
                            [".p-topService-image__image1", 0.5],
                            [".p-topService-image__image2", 0.4],
                            [".p-topService-board", 0.3],
                            [".p-topService .c-topCommon-type", 0.2],
                        ],
                    },
                    class: { origin: [0.3, 0], targets: [[".p-topService", "+=c-topCommon--hidden", "-=c-topCommon--hidden"]] },
                },
                {
                    container: ".p-topProduct",
                    parallax: {
                        origin: [0.5, 0.5],
                        targets: [
                            [".p-topProduct-image__left", 0.5],
                            [".p-topProduct-image__right", 0.4],
                            [".p-topProduct-board", 0.3],
                            [".p-topProduct .c-topCommon-type", 0.2],
                        ],
                    },
                    class: { origin: [0.3, 0], targets: [[".p-topProduct", "+=c-topCommon--hidden", "-=c-topCommon--hidden"]] },
                },
                {
                    container: ".p-topCaseStudy",
                    parallax: {
                        origin: [0.5, 0.5],
                        targets: [
                            [".p-topCaseStudy-list", 0.3],
                            [".p-topCaseStudy-board", 0.2],
                        ],
                    },
                },
            ],
            Ie = (function () {
                function e() {
                    if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                    Ae(this, "scrollEffectList", void 0),
                        Ae(this, "hover", void 0),
                        Ae(this, "_onOnClass", function () {
                            var e = c(".p-topAboutUs-catchphrase__en span"),
                                t = E(
                                    (function (e) {
                                        return (
                                            (function (e) {
                                                if (Array.isArray(e)) return Re(e);
                                            })(e) ||
                                            (function (e) {
                                                if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
                                            })(e) ||
                                            (function (e, t) {
                                                if (e) {
                                                    if ("string" == typeof e) return Re(e, t);
                                                    var i = Object.prototype.toString.call(e).slice(8, -1);
                                                    return "Map" === (i = "Object" === i && e.constructor ? e.constructor.name : i) || "Set" === i
                                                        ? Array.from(e)
                                                        : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                                                        ? Re(e, t)
                                                        : void 0;
                                                }
                                            })(e) ||
                                            (function () {
                                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                            })()
                                        );
                                    })(Array(7)).map(function (e, t) {
                                        return 0.1 * t;
                                    })
                                );
                            e.forEach(function (e, i) {
                                j.a.to(e, 1.6, { alpha: 1, delay: t[i % 7] + 0.2, ease: d.f.easeIn });
                            });
                        }),
                        Ae(this, "_onOffClass", function () {
                            c(".p-topAboutUs-catchphrase__en span").forEach(function (e) {
                                j.a.killTweensOf(e), j.a.set(e, { alpha: 0 });
                            });
                        }),
                        (this.name = "topCommon");
                }
                var t, i, n, o;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "init",
                            value:
                                ((n = regeneratorRuntime.mark(function e() {
                                    var t,
                                        i,
                                        n,
                                        o,
                                        r = this;
                                    return regeneratorRuntime.wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (
                                                            ((o = function () {
                                                                if (n.classList.contains("wf-active")) return j.a.ticker.remove(o), t.resolve();
                                                            }),
                                                            (t = (function () {
                                                                var e = {};
                                                                return (
                                                                    (e.promise = new Promise(function (t, i) {
                                                                        (e.resolve = t), (e.reject = i);
                                                                    })),
                                                                    e
                                                                );
                                                            })()),
                                                            this.hover ||
                                                                ((this.hover = new Le("c-top-hover--active")),
                                                                (this.scrollEffectList = []),
                                                                De.forEach(function (e) {
                                                                    r.scrollEffectList.push(new Se(e));
                                                                })),
                                                            ((i = c(".p-topAboutUs-catchphrase__en")).innerHTML = (function (e, t, i) {
                                                                for (var n = "", o = e.textContent.length, r = 0; r < o; r++) {
                                                                    var s = e.textContent[r];
                                                                    " " === s ? (n += " ") : ((n += "<" + t), (n += ">" + s + "</" + t + ">"));
                                                                }
                                                                return n;
                                                            })(i, "span")),
                                                            (n = c("html")).classList.contains("wf-active"))
                                                        )
                                                            return e.abrupt("return", t.resolve());
                                                        e.next = 8;
                                                        break;
                                                    case 8:
                                                        return j.a.ticker.add(o), e.abrupt("return", t.promise);
                                                    case 10:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                })),
                                (o = function () {
                                    var e = this,
                                        t = arguments;
                                    return new Promise(function (i, o) {
                                        var r = n.apply(e, t);
                                        function s(e) {
                                            Me(r, i, o, s, a, "next", e);
                                        }
                                        function a(e) {
                                            Me(r, i, o, s, a, "throw", e);
                                        }
                                        s(void 0);
                                    });
                                }),
                                function () {
                                    return o.apply(this, arguments);
                                }),
                        },
                        {
                            key: "start",
                            value: function () {
                                var e = this;
                                ve.start(),
                                    re.start(),
                                    Y.start(),
                                    this.hover.start(c(".c-top-hover")),
                                    this.scrollEffectList.forEach(function (t, i) {
                                        0 === i && (t.on("onClass", e._onOnClass), t.on("offClass", e._onOffClass)), t.start();
                                    }),
                                    c(".p-topAboutUs-catchphrase__en span").forEach(function (e) {
                                        j.a.set(e, { alpha: 0 });
                                    });
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                var e = this;
                                ve.stop(),
                                    re.stop(),
                                    Y.stop(),
                                    this.hover.stop(),
                                    this.scrollEffectList.forEach(function (t, i) {
                                        0 === i && (t.off("onClass", e._onOnClass), t.off("offClass", e._onOffClass)), t.stop();
                                    });
                            },
                        },
                    ]) && je(t.prototype, i),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    e
                );
            })();
        function qe(e) {
            return f('<a class="c-tagLanes__tag" href="' + e.link + '">  <span class="c-tagLanes__text"># ' + e.text + '</span>  <div class="c-tagLanes__image"><img src="' + e.image + '" alt=""></div></a>');
        }
        function Ne(e) {
            return (Ne =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function Be(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        function Ue(e, t) {
            return (Ue =
                Object.setPrototypeOf ||
                function (e, t) {
                    return (e.__proto__ = t), e;
                })(e, t);
        }
        function ze(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function He(e) {
            return (He = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
        }
        function $e(e, t, i) {
            return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i), e;
        }
        var We = (function (e) {
            var t = o;
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ue(t, e);
            var i,
                n = (function (e) {
                    var t = (function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    })();
                    return function () {
                        var i,
                            n = He(e);
                        (i = t ? ((i = He(this).constructor), Reflect.construct(n, arguments, i)) : n.apply(this, arguments)), (n = this);
                        if (i && ("object" === Ne(i) || "function" == typeof i)) return i;
                        if (void 0 !== i) throw new TypeError("Derived constructors may only return object or undefined");
                        return ze(n);
                    };
                })(o);
            function o() {
                var e;
                if (!(this instanceof o)) throw new TypeError("Cannot call a class as a function");
                return (
                    $e(ze((e = n.call(this))), "$container", void 0),
                    $e(ze(e), "$lanes", void 0),
                    $e(ze(e), "$lane", void 0),
                    $e(ze(e), "_onMouseEnter", function (t) {
                        e.$container.classList.add("c-tagLanes--isActive");
                    }),
                    $e(ze(e), "_onMouseLeave", function (t) {
                        e.$container.classList.remove("c-tagLanes--isActive");
                    }),
                    o.list || (o.list = []),
                    o.list.push(ze(e)),
                    e
                );
            }
            return (
                (t = o),
                (e = [
                    {
                        key: "setLaneNum",
                        value: function (e) {
                            o.laneNum = e;
                        },
                    },
                    {
                        key: "setTagList",
                        value: function (e) {
                            (o.dataList = e), (o.dataNum = e.length);
                        },
                    },
                    {
                        key: "startLoop",
                        value: function () {
                            o.raf = requestAnimationFrame(o.onRAF);
                        },
                    },
                    {
                        key: "stopLoop",
                        value: function () {
                            cancelAnimationFrame(o.raf);
                        },
                    },
                ]),
                (i = [
                    {
                        key: "start",
                        value: function (e, t) {
                            (this.$container = e),
                                (this.$lanes = t),
                                (e = f('<li class="c-tagLanes__lane">  <div class="c-tagLanes__laneContainer"></div></li>')),
                                this.$lanes.appendChild(e),
                                (this.$lane = e.querySelector(".c-tagLanes__laneContainer"));
                        },
                    },
                    {
                        key: "stop",
                        value: function () {
                            this.removeItems();
                        },
                    },
                    {
                        key: "addItems",
                        value: function (e, t) {
                            for (var i = 0; i < t; i++)
                                for (var n = 0; n < e.length; n++) {
                                    var o = qe(e[n]);
                                    _(o, this._onMouseEnter), x(o, this._onMouseLeave), this.$lane.appendChild(o);
                                }
                        },
                    },
                    {
                        key: "removeItems",
                        value: function () {
                            for (var e = 0; e < this.$lane.children.length; e++) {
                                var t = this.$lane.children[e];
                                C(t, this._onMouseEnter), T(t, this._onMouseLeave);
                            }
                            this.$lane.innerHTML = "";
                        },
                    },
                ]) && Be(t.prototype, i),
                e && Be(t, e),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                o
            );
        })(o.a);
        function Xe(e) {
            return (Xe =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function Fe(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        function Ye(e, t) {
            return (Ye =
                Object.setPrototypeOf ||
                function (e, t) {
                    return (e.__proto__ = t), e;
                })(e, t);
        }
        function Ve(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function Ge(e) {
            return (Ge = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
        }
        function Ke(e, t, i) {
            return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i), e;
        }
        $e(We, "list", void 0),
            $e(We, "baseWidth", void 0),
            $e(We, "repeat", 0),
            $e(We, "dataList", void 0),
            $e(We, "dataNum", void 0),
            $e(We, "laneNum", 0),
            $e(We, "loopWidth", void 0),
            $e(We, "loopProgress", 0),
            $e(We, "raf", void 0),
            $e(We, "onRAF", function () {
                for (var e = 0; e < We.laneNum; e++) {
                    var t = We.list[e],
                        i = (We.loopProgress + (We.loopWidth * Math.floor(e / 2)) / Math.ceil(We.laneNum / 2)) % We.loopWidth;
                    e % 2 == 1 && (i = We.loopWidth - i), h.a.set(t.$lane, { x: -i });
                }
                (We.loopProgress += 0.5), We.loopProgress > We.loopWidth && (We.loopProgress %= We.loopWidth), (We.raf = requestAnimationFrame(We.onRAF));
            });
        var Je = (function (e) {
            var t = n;
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ye(t, e);
            var i = (function (e) {
                var t = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var i,
                        n = Ge(e);
                    (i = t ? ((i = Ge(this).constructor), Reflect.construct(n, arguments, i)) : n.apply(this, arguments)), (n = this);
                    if (i && ("object" === Xe(i) || "function" == typeof i)) return i;
                    if (void 0 !== i) throw new TypeError("Derived constructors may only return object or undefined");
                    return Ve(n);
                };
            })(n);
            function n(e) {
                var t;
                if (!(this instanceof n)) throw new TypeError("Cannot call a class as a function");
                Ke(Ve((t = i.call(this))), "laneNum", void 0),
                    Ke(Ve(t), "laneList", void 0),
                    Ke(Ve(t), "dataList", void 0),
                    Ke(Ve(t), "dataNum", void 0),
                    Ke(Ve(t), "$container", void 0),
                    Ke(Ve(t), "$lanes", void 0),
                    Ke(Ve(t), "baseWidth", void 0),
                    Ke(Ve(t), "repeat", void 0),
                    Ke(Ve(t), "loopWidth", void 0),
                    Ke(Ve(t), "loopProgress", 0),
                    Ke(Ve(t), "_onRAF", function () {
                        for (var e = 0; e < t.laneNum; e++) {
                            var i = t.laneList[e],
                                n = (t.loopProgress + (t.loopWidth * Math.floor(e / 2)) / Math.ceil(t.laneNum / 2)) % t.loopWidth;
                            e % 2 == 1 && (n = t.loopWidth - n), j.a.set(i.$lane, { x: -n });
                        }
                        (t.loopProgress += 0.5), t.loopProgress > t.loopWidth && (t.loopProgress %= t.loopWidth);
                    }),
                    (t.laneNum = e),
                    (t.laneList = []);
                for (var o = 0; o < t.laneNum; o++) t.laneList[o] = new We();
                return t;
            }
            return (
                (t = n),
                (e = [
                    {
                        key: "start",
                        value: function (e, t) {
                            var i = t.querySelector(".c-tagLanes__lanes");
                            (this.$container = t), (this.$lanes = i), (this.dataList = e), (this.dataNum = this.dataList.length);
                            for (var n = 0; n < this.laneNum; n++) this.laneList[n].start(t, i);
                            j.a.ticker.add(this._onRAF);
                        },
                    },
                    {
                        key: "stop",
                        value: function () {
                            for (var e = 0; e < this.laneNum; e++) this.laneList[e].stop();
                            j.a.ticker.remove(this._onRAF);
                        },
                    },
                    {
                        key: "measureWidth",
                        value: function (e) {
                            var t = this.laneList[0];
                            t.removeItems();
                            for (var i = 0; i < this.dataNum; i++) {
                                var n = qe(this.dataList[i]);
                                t.$lane.appendChild(n);
                            }
                            for (var o = 0, r = 0, s = 0; s < this.dataNum; s++) {
                                var a,
                                    l = t.$lane.children[s];
                                0 === s && ((a = window.getComputedStyle(l)), (r = parseFloat(a.marginLeft) + parseFloat(a.marginRight))), (o += l.clientWidth + r);
                            }
                            (this.baseWidth = o), (e = Math.ceil((e ? 900 : 1920) / this.baseWidth)), (this.repeat = 2 * e), (this.loopWidth = e * this.baseWidth), (t.$lane.innerHTML = "");
                        },
                    },
                    {
                        key: "resetTags",
                        value: function () {
                            for (var e = 0; e < this.laneNum; e++) {
                                var t = this.laneList[e];
                                t.removeItems(), t.addItems(this.dataList, this.repeat);
                            }
                        },
                    },
                ]) && Fe(t.prototype, e),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                n
            );
        })(o.a);
        function Ze(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        function Qe(e, t, i) {
            return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i), e;
        }
        var et = (function () {
            function e() {
                var t = this;
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                Qe(this, "dataList", void 0),
                    Qe(this, "tagLanes", void 0),
                    Qe(this, "viewDetail", void 0),
                    Qe(this, "_onMediaNarrow", function () {
                        t.tagLanes.measureWidth(re.narrow), t.tagLanes.resetTags();
                    }),
                    (this.name = "topSolution"),
                    (this.dataList = []);
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            (this.dataList = JSON.parse(document.getElementById("json-solution").textContent)), this.tagLanes || ((this.tagLanes = new Je(4)), (this.viewDetail = new K()));
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            var e = c(".c-tagLanes");
                            this.tagLanes.start(this.dataList, e), this.viewDetail.start(c(".p-topSolution .c-topCommon-link"), e), re.on("narrow", this._onMediaNarrow), this._onMediaNarrow();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.tagLanes.stop(), this.viewDetail.stop(), re.off("narrow", this._onMediaNarrow);
                        },
                    },
                ]) && Ze(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function tt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        function it(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        r = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "TopIndex"), (this.modules = { topCommon: new Ie(), topSolution: new et(), topCaseStudy: new le() });
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            var e,
                                t = [];
                            for (e in this.modules) t.push(this.modules[e].init());
                            return Promise.all(t).then(this.initComp.bind(this)), t.length;
                        },
                    },
                    {
                        key: "initComp",
                        value: function () {
                            gEvent.emit("MODULE_READY");
                        },
                    },
                    {
                        key: "beforeStart",
                        value: function () {
                            gEvent.emit("MODULE_BEFORE_START");
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            for (var e in (gEvent.emit("MODULE_START"), this.modules)) this.modules[e].start();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            for (var e in this.modules) this.modules[e].destroy();
                        },
                    },
                ]) && tt(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        var nt = (function () {
                function e() {
                    if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                    this.name = "KV";
                }
                var t, i;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "init",
                            value: function () {
                                return (this.el = document.getElementById("c-kv")), this.el, Promise.resolve();
                            },
                        },
                        {
                            key: "start",
                            value: function () {
                                this.el && this.start2();
                            },
                        },
                        { key: "start1", value: function () {} },
                        {
                            key: "start2",
                            value: function () {
                                var e = l.randomInt(1, 6);
                                this.el.classList.add("c-kv--clip".concat(e));
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                delete this.el;
                            },
                        },
                    ]) && it(t.prototype, i),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    e
                );
            })(),
            ot = i(163);
        function rt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var st = new ((function () {
                function e() {
                    if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                    (this.name = "ResizeWatch"), this.init();
                }
                var t, i;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "init",
                            value: function () {
                                return (this.ro = new ot.a(this.resizeCallback.bind(this))), this.ro.observe(document.body), (this.ticking = !1), (this.observers = {}), this.update();
                            },
                        },
                        {
                            key: "resizeCallback",
                            value: function (e, t) {
                                this.onResize();
                            },
                        },
                        {
                            key: "registerObserver",
                            value: function (e, t) {
                                return (this.observers[e] = t);
                            },
                        },
                        {
                            key: "cancelObserver",
                            value: function (e) {
                                var t = this.observers;
                                return delete t[e], t;
                            },
                        },
                        {
                            key: "callObservers",
                            value: function () {
                                var e,
                                    t = this.observers;
                                for (e in t) t[e]();
                                return [];
                            },
                        },
                        {
                            key: "requestTick",
                            value: function () {
                                if (!this.ticking) return requestAnimationFrame(this.update.bind(this)), (this.ticking = !0);
                            },
                        },
                        {
                            key: "onResize",
                            value: function () {
                                return this.requestTick();
                            },
                        },
                        {
                            key: "update",
                            value: function () {
                                return this.callObservers(), (this.ticking = !1);
                            },
                        },
                    ]) && rt(t.prototype, i),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    e
                );
            })())(),
            at = i(452);
        function lt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var ct = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                this.name = "ScrollTable";
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            return (
                                (this.isStart = !1),
                                (this.el = document.getElementById("c-scrollTable")),
                                this.el &&
                                    ((this.bar = this.el.querySelector(".c-scrollTable__bar")),
                                    (this.swiper = new at.a(this.el, { direction: "horizontal", slidesPerView: "auto", grabCursor: !0, freeMode: !0, freeModeMomentumBounce: !1, scrollbar: { el: this.bar }, mousewheel: !0 }))),
                                Promise.resolve()
                            );
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            this.isStart = !0;
                        },
                    },
                    { key: "resize", value: function () {} },
                    {
                        key: "destroy",
                        value: function () {
                            this.el && this.swiper.destroy(), delete this.el, delete this.bar;
                        },
                    },
                ]) && lt(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function ut(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var ht = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                this.name = "RelatedCase";
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            return (
                                (this.el = document.getElementById("related_case")),
                                (this.list = document.querySelectorAll("#related_case > ul > li")),
                                0 < this.list.length && (this.resize(), st.registerObserver(this.name, this.resize.bind(this))),
                                Promise.resolve()
                            );
                        },
                    },
                    { key: "start", value: function () {} },
                    {
                        key: "resize",
                        value: function () {
                            var e = this;
                            "pc" === l.isDevice()
                                ? ((this.center = this.el.clientWidth / 2),
                                  this.list &&
                                      this.list.forEach(function (t, i) {
                                          var n = t.querySelector(".c-imgBox"),
                                              o = 0,
                                              r =
                                                  0 === (t = t.offsetLeft)
                                                      ? ((o = l.randomArr([-10, -15, -20])), l.randomArr([-15, -22, -30]))
                                                      : t < e.center
                                                      ? ((o = l.randomArr([0, 5, 10, 15, 20, -5, -10, -15, -20])), l.randomArr([0, 5, 10, 15, 20, -5, -10, -15, -20]))
                                                      : ((o = l.randomArr([10, 15, 20])), l.randomArr([15, 30, 40]));
                                          j.a.set(n, { x: o, y: r });
                                      }))
                                : this.list &&
                                  this.list.forEach(function (e, t) {
                                      (e = e.querySelector(".c-imgBox")), j.a.set(e, { clearProps: "all" });
                                  });
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            0 < this.list.length &&
                                (st.cancelObserver(this.name),
                                this.list.forEach(function (e, t) {
                                    (e = e.querySelector(".c-imgBox")), j.a.set(e, { clearProps: "all" });
                                })),
                                delete this.list,
                                delete this.el;
                        },
                    },
                ]) && ut(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function dt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        s = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "AboutIndex"), (this.modules = { KV: new nt(), ScrollTable: new ct(), RelatedCase: new ht() });
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            var e,
                                t = [];
                            for (e in this.modules) t.push(this.modules[e].init());
                            return Promise.all(t).then(this.initComp.bind(this)), t.length;
                        },
                    },
                    {
                        key: "initComp",
                        value: function () {
                            gEvent.emit("MODULE_READY");
                        },
                    },
                    {
                        key: "beforeStart",
                        value: function () {
                            gEvent.emit("MODULE_BEFORE_START");
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            for (var e in (gEvent.emit("MODULE_START"), this.modules)) this.modules[e].start();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            for (var e in this.modules) this.modules[e].destroy();
                        },
                    },
                ]) && dt(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        var ft = i(72);
        function pt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var vt = (function () {
            function e(t) {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "ModalTag"), (this.type = t);
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            var e = this;
                            (this.state = l.getCurrentState()),
                                (this.isStart = !1),
                                (this.isOpenModal = !1),
                                (this.modal = document.getElementById("c-modalTag--".concat(this.type))),
                                (this.tagList = this.modal.querySelector(".c-tagList")),
                                (this.bindOpen = this.open.bind(this)),
                                (this.btnOpens = document.querySelectorAll(".open-modalTag")),
                                this.btnOpens.forEach(function (t, i) {
                                    t.addEventListener("click", e.bindOpen);
                                }),
                                (this.bindClose = this.close.bind(this)),
                                (this.btnClose1 = this.modal.querySelector(".c-tagList__close")),
                                (this.btnClose2 = this.modal.querySelector(".c-tagList__bottom")),
                                this.btnClose1.addEventListener("click", this.bindClose),
                                this.btnClose2.addEventListener("click", this.bindClose);
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            this.isStart = !0;
                        },
                    },
                    {
                        key: "update",
                        value: function () {
                            this.isStart = !0;
                        },
                    },
                    {
                        key: "open",
                        value: function () {
                            this.isOpenModal ||
                                ((this.isOpenModal = !0),
                                j.a.fromTo(this.modal, { display: "block", opacity: 0 }, { duration: 0.6, opacity: 1, ease: d.e.easeOut }),
                                j.a.fromTo(this.tagList, { y: 100 }, { duration: 0.6, y: 0, ease: d.e.easeOut }),
                                U.xStopScroll(),
                                this.resize(),
                                st.registerObserver(this.name, this.resize.bind(this)),
                                (this.ps = new ft.a(this.modal, { wheelSpeed: 1, wheelPropagation: !0, minScrollbarLength: 10, suppressScrollX: !0 })),
                                (this.modal.scrollTop = 0));
                        },
                    },
                    {
                        key: "close",
                        value: function () {
                            this.isOpenModal &&
                                (U.xStartScroll(),
                                st.cancelObserver(this.name),
                                j.a.killTweensOf([this.modal, this.tagList]),
                                j.a.to(this.modal, { display: "none", duration: 0.6, opacity: 0, ease: d.e.easeOut, onComplete: this.closeComp.bind(this) }));
                        },
                    },
                    {
                        key: "closeComp",
                        value: function () {
                            (this.isOpenModal = !1), this.ps && (this.ps.destroy(), (this.ps = null));
                        },
                    },
                    {
                        key: "resize",
                        value: function () {
                            var e = window.innerHeight;
                            this.tagList.clientHeight + 280 < e ? this.modal.classList.add("c-modalTag--center") : this.modal.classList.remove("c-modalTag--center"), this.ps && this.ps.update();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            var e = this;
                            this.close(),
                                this.ps && (this.ps.destroy(), (this.ps = null)),
                                delete this.state,
                                delete this.isStart,
                                delete this.isOpenModal,
                                delete this.modal,
                                delete this.tagList,
                                this.btnOpens.forEach(function (t, i) {
                                    t.removeEventListener("click", e.bindOpen);
                                }),
                                delete this.bindOpen,
                                delete this.btnOpens,
                                this.btnClose1.removeEventListener("click", this.bindClose),
                                this.btnClose2.removeEventListener("click", this.bindClose),
                                delete this.bindClose,
                                delete this.btnClose1,
                                delete this.btnClose2;
                        },
                    },
                ]) && pt(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function yt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        function mt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        o = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "CaseIndex"), (this.modules = { ModalTag: new vt("case"), KV: new nt() });
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            var e,
                                t = [];
                            for (e in this.modules) t.push(this.modules[e].init());
                            return Promise.all(t).then(this.initComp.bind(this)), t.length;
                        },
                    },
                    {
                        key: "initComp",
                        value: function () {
                            gEvent.emit("MODULE_READY");
                        },
                    },
                    {
                        key: "beforeStart",
                        value: function () {
                            gEvent.emit("MODULE_BEFORE_START");
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            for (var e in (gEvent.emit("MODULE_START"), this.modules)) this.modules[e].start();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            for (var e in this.modules) this.modules[e].destroy();
                        },
                    },
                ]) && yt(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        var bt = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "EmbedVideo"), (this.isStart = !1), (this.isPlayed = []), (this.players = []), (this.covers = []), (this.bindClick = []), (this.timer = null);
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            return (this.embeds = document.querySelectorAll(".c-embed")), 0 < this.embeds.length && this.isReady(), Promise.resolve();
                        },
                    },
                    {
                        key: "isReady",
                        value: function () {
                            window.gRICOH.isReadyYT ? this.createYT() : (this.timer = setTimeout(this.isReady.bind(this), 50));
                        },
                    },
                    {
                        key: "createYT",
                        value: function () {
                            var e = this;
                            this.embeds.forEach(function (t, i) {
                                var n;
                                t.querySelector("iframe") &&
                                    (((n = t.querySelector("iframe")).src = n.getAttribute("data-src")),
                                    (n = n.id),
                                    (n = new YT.Player(n, { events: { onReady: e.onReady.bind(e), onStateChange: e.onStateChange.bind(e) } })),
                                    e.players.push(n),
                                    (n = t.querySelector(".c-embed__wrapCover")),
                                    (t = e.firstVideo.bind(e, i)),
                                    n.addEventListener("click", t),
                                    e.covers.push(n),
                                    e.bindClick.push(t),
                                    e.isPlayed.push(!1));
                            });
                        },
                    },
                    { key: "onReady", value: function (e) {} },
                    { key: "onStateChange", value: function (e) {} },
                    {
                        key: "firstVideo",
                        value: function (e) {
                            this.isPlayed[e] || ((this.isPlayed[e] = !0), j.a.to(this.covers[e], { duration: 0.6, opacity: 0, display: "none", ease: d.a.easeOut, onComplete: this.firstVideoComp.bind(this, e) })),
                                this.players[e].playVideo();
                        },
                    },
                    {
                        key: "firstVideoComp",
                        value: function (e) {
                            this.covers[e].addEventListener("click", this.bindClick[e]);
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            this.isStart = !0;
                        },
                    },
                    { key: "resize", value: function () {} },
                    {
                        key: "destroy",
                        value: function () {
                            var e = this;
                            clearTimeout(this.timer),
                                this.covers.forEach(function (t, i) {
                                    t.removeEventListener("click", e.bindClick[i]);
                                }),
                                this.players.forEach(function (e, t) {
                                    e.destroy();
                                }),
                                (this.isStart = !1),
                                (this.isPlayed = []),
                                (this.players = []),
                                (this.covers = []),
                                (this.bindClick = []),
                                (this.timer = null);
                        },
                    },
                ]) && mt(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function gt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var wt = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "CaseDetail"), (this.modules = { ModalTag: new vt("case"), KV: new nt(), RelatedCase: new ht(), EmbedVideo: new bt() });
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            var e,
                                t = [];
                            for (e in this.modules) t.push(this.modules[e].init());
                            return Promise.all(t).then(this.initComp.bind(this)), t.length;
                        },
                    },
                    {
                        key: "initComp",
                        value: function () {
                            gEvent.emit("MODULE_READY");
                        },
                    },
                    {
                        key: "beforeStart",
                        value: function () {
                            gEvent.emit("MODULE_BEFORE_START");
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            for (var e in (gEvent.emit("MODULE_START"), this.modules)) this.modules[e].start();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            for (var e in this.modules) this.modules[e].destroy();
                        },
                    },
                ]) && gt(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function kt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var Et = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "CaseSearch"), (this.modules = {});
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            var e,
                                t = [];
                            for (e in this.modules) t.push(this.modules[e].init());
                            return Promise.all(t).then(this.initComp.bind(this)), t.length;
                        },
                    },
                    {
                        key: "initComp",
                        value: function () {
                            gEvent.emit("MODULE_READY");
                        },
                    },
                    {
                        key: "beforeStart",
                        value: function () {
                            gEvent.emit("MODULE_BEFORE_START");
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            for (var e in (gEvent.emit("MODULE_START"), this.modules)) this.modules[e].start();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            for (var e in this.modules) this.modules[e].destroy();
                        },
                    },
                ]) && kt(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function St(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var Ot = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "SolutionIndex"), (this.modules = { ModalTag: new vt("solution"), KV: new nt() });
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            var e,
                                t = [];
                            for (e in this.modules) t.push(this.modules[e].init());
                            return Promise.all(t).then(this.initComp.bind(this)), t.length;
                        },
                    },
                    {
                        key: "initComp",
                        value: function () {
                            gEvent.emit("MODULE_READY");
                        },
                    },
                    {
                        key: "beforeStart",
                        value: function () {
                            gEvent.emit("MODULE_BEFORE_START");
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            for (var e in (gEvent.emit("MODULE_START"), this.modules)) this.modules[e].start();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            for (var e in this.modules) this.modules[e].destroy();
                        },
                    },
                ]) && St(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function _t(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var Ct = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                this.name = "KV2";
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            (this.data = JSON.parse(document.getElementById("json-kvtitle").textContent)), (this.el = document.getElementById("c-kv2")), (this.titleList = this.el.querySelector(".c-kv2__titleMain"));
                            var e = "";
                            return (
                                this.data.forEach(function (t, i) {
                                    e += "<li><h1>".concat(t, "</h1></li>");
                                }),
                                (this.titleList.innerHTML = e),
                                Promise.resolve()
                            );
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            this.start2();
                        },
                    },
                    { key: "start1", value: function () {} },
                    {
                        key: "start2",
                        value: function () {
                            var e = l.randomInt(1, 6);
                            this.el.classList.add("c-kv2--clip".concat(e));
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            delete this.el;
                        },
                    },
                ]) && _t(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function xt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var Tt = (function () {
            function e(t) {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "Carousel3"), (this.id = t), (this.isStart = !1), (this.size = { pc: { w: 400 }, sp: { w: 200 } });
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            return (
                                (this.el = document.getElementById(this.id)),
                                this.el &&
                                    ((this.ul = this.el.querySelectorAll("ul")),
                                    (this.li = this.el.querySelectorAll("li")),
                                    (this.counter = 0),
                                    (this.max = this.li.length / this.ul.length),
                                    this.resize(),
                                    st.registerObserver(this.name + "_" + this.id, this.resize.bind(this))),
                                Promise.resolve()
                            );
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            this.el && (this.isStart = !0);
                        },
                    },
                    {
                        key: "slideNext",
                        value: function () {
                            var e;
                            this.isStart && ((e = (this.counter + 1) % this.max), (this.counter = e), this.slide(e, e - 1));
                        },
                    },
                    {
                        key: "slidePrev",
                        value: function () {
                            var e;
                            this.isStart && ((e = (this.counter - 1) % this.max), (this.counter = e), this.slide(e, 1 + e));
                        },
                    },
                    {
                        key: "slide",
                        value: function (e, t) {
                            var i = this;
                            this.ul.forEach(function (n, o) {
                                j.a.killTweensOf(n), j.a.fromTo(n, { x: t * i.moveX }, { duration: 0.7, x: e * i.moveX, ease: d.a.easeOut });
                            });
                        },
                    },
                    {
                        key: "resize",
                        value: function () {
                            var e,
                                t = this,
                                i = window.innerWidth,
                                n = 0,
                                o = ((e = "pc" === l.isDevice() ? 0.5 * (i - (n = this.size.pc.w)) : 0.5 * (i - (n = this.size.sp.w))), n * this.max);
                            (this.moveX = n),
                                this.ul.forEach(function (e, i) {
                                    (e.style.width = "".concat(o, "px")), j.a.killTweensOf(e), j.a.set(e, { x: t.counter * t.moveX });
                                }),
                                (this.ul[0].style.left = "".concat(e, "px")),
                                (this.ul[1].style.left = "".concat(e - o, "px")),
                                (this.ul[2].style.left = "".concat(e + o, "px")),
                                this.li.forEach(function (e, t) {
                                    e.style.width = "".concat(n, "px");
                                });
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            st.cancelObserver(this.name + "_" + this.id), delete this.moveX, delete this.el, delete this.ul, delete this.li, delete this.counter, delete this.max;
                        },
                    },
                ]) && xt(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function Pt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var Lt = (function () {
            function e(t, i) {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "QA" + i), (this.el = t), (this.id = i), (this.isStart = !1), (this.limit = 5), this.init();
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            var e = this;
                            return (
                                (this.binds = []),
                                (this.wraps = []),
                                (this.answers = []),
                                (this.isOpens = []),
                                this.el &&
                                    ((this.qas = this.el.querySelectorAll(".c-qa__listBox")),
                                    this.qas.forEach(function (t, i) {
                                        (e.isOpens[i] = !1),
                                            (e.binds[i] = e.toggle.bind(e, i)),
                                            (e.wraps[i] = t.querySelector(".is-wrap")),
                                            (e.answers[i] = t.querySelector(".c-qa__listBox__a")),
                                            t.querySelector(".c-qa__listBox__q").addEventListener("click", e.binds[i]);
                                    }),
                                    (this.page = 0),
                                    (this.bindMore = this.more.bind(this)),
                                    (this.btnMore = this.el.querySelector(".c-qa__more")),
                                    (this.list = this.el.querySelectorAll(".c-qa__list > li")),
                                    (this.max = this.list.length),
                                    this.btnMore.addEventListener("click", this.bindMore),
                                    this.more(),
                                    this.resize(),
                                    st.registerObserver(this.name, this.resize.bind(this))),
                                Promise.resolve()
                            );
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            this.isStart = !0;
                        },
                    },
                    {
                        key: "toggle",
                        value: function (e) {
                            var t;
                            this.isOpens[e]
                                ? (this.qas[e].classList.remove("is-open"), (this.isOpens[e] = !1), (this.answers[e].style.height = "0px"))
                                : (this.qas[e].classList.add("is-open"), (this.isOpens[e] = !0), (t = this.wraps[e].clientHeight), (this.answers[e].style.height = "".concat(t, "px")));
                        },
                    },
                    {
                        key: "more",
                        value: function () {
                            var e = this.page * this.limit,
                                t = this.limit + this.page * this.limit;
                            t >= this.max && ((t = this.max), (this.btnMore.style.display = "none"));
                            for (var i = e; i < t; i++) this.list[i].style.display = "block";
                            this.page++;
                        },
                    },
                    {
                        key: "resize",
                        value: function () {
                            var e = this;
                            this.qas.forEach(function (t, i) {
                                var n;
                                e.isOpens[i] && ((n = e.wraps[i].clientHeight), (e.answers[i].style.height = "".concat(n, "px")));
                            });
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            var e = this;
                            st.cancelObserver(this.name),
                                this.qas.forEach(function (t, i) {
                                    t.querySelector(".c-qa__listBox__q").removeEventListener("click", e.binds[i]);
                                }),
                                delete this.qas,
                                delete this.binds,
                                delete this.wraps,
                                delete this.answers,
                                delete this.isOpens,
                                this.btnMore.removeEventListener("click", this.bindMore),
                                delete this.bindMore,
                                delete this.btnMore,
                                delete this.list,
                                delete this.page,
                                delete this.max,
                                delete this.name,
                                delete this.el,
                                delete this.id,
                                delete this.isStart;
                        },
                    },
                ]) && Pt(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function Mt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var Rt = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "QASet"), (this.isStart = !1), (this.cals = []);
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            var e = this;
                            return (
                                (this.els = document.querySelectorAll(".c-qa")),
                                0 < this.els.length &&
                                    this.els.forEach(function (t, i) {
                                        e.cals.push(new Lt(t, i));
                                    }),
                                Promise.resolve()
                            );
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            0 < this.cals.length &&
                                ((this.isStart = !0),
                                this.cals.forEach(function (e, t) {
                                    e.start();
                                }));
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            0 < this.cals.length &&
                                this.cals.forEach(function (e, t) {
                                    e.destroy();
                                }),
                                (this.els = null),
                                (this.cals = []);
                        },
                    },
                ]) && Mt(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function jt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        function At(e, t, i) {
            return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i), e;
        }
        var Dt = (function () {
            function e() {
                var t = this;
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                At(this, "dataList", void 0),
                    At(this, "tagLanes", void 0),
                    At(this, "viewDetail", void 0),
                    At(this, "_onMediaNarrow", function () {
                        t.tagLanes.measureWidth(re.narrow), t.tagLanes.resetTags();
                    }),
                    (this.name = "DetailTagLanes");
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            this.tagLanes || ((this.tagLanes = new Je(2)), (this.viewDetail = new K())), (this.dataList = []), (this.dataList = JSON.parse(document.getElementById("json-solution").textContent));
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            var e = c(".c-solutionTags");
                            this.tagLanes.start(this.dataList, e), this.viewDetail.start(c(".c-solutionTags .c-topCommon-link"), e), re.on("narrow", this._onMediaNarrow), this._onMediaNarrow();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.tagLanes.stop(), this.viewDetail.stop(), re.off("narrow", this._onMediaNarrow);
                        },
                    },
                ]) && jt(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function It(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var qt = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "SolutionDetail"), (this.modules = { KV2: new Ct(), RelatedCase: new ht(), EmbedVideo: new bt(), QASet: new Rt(), Carousel3: new Tt("c-problem__wrap"), CaseDetailTagLanes: new Dt() });
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            var e,
                                t = [];
                            for (e in this.modules) t.push(this.modules[e].init());
                            return Promise.all(t).then(this.initComp.bind(this)), t.length;
                        },
                    },
                    {
                        key: "initComp",
                        value: function () {
                            gEvent.emit("MODULE_READY");
                        },
                    },
                    {
                        key: "beforeStart",
                        value: function () {
                            gEvent.emit("MODULE_BEFORE_START");
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            for (var e in (gEvent.emit("MODULE_START"), re.start(), Y.start(), this.modules)) this.modules[e].start();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            for (var e in (re.stop(), Y.stop(), this.modules)) this.modules[e].destroy();
                        },
                    },
                ]) && It(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function Nt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var Bt = (function () {
                function e() {
                    if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                    (this.name = "SolutionSearch"), (this.modules = {});
                }
                var t, i;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "init",
                            value: function () {
                                var e,
                                    t = [];
                                for (e in this.modules) t.push(this.modules[e].init());
                                return Promise.all(t).then(this.initComp.bind(this)), t.length;
                            },
                        },
                        {
                            key: "initComp",
                            value: function () {
                                gEvent.emit("MODULE_READY");
                            },
                        },
                        {
                            key: "beforeStart",
                            value: function () {
                                gEvent.emit("MODULE_BEFORE_START");
                            },
                        },
                        {
                            key: "start",
                            value: function () {
                                for (var e in (gEvent.emit("MODULE_START"), this.modules)) this.modules[e].start();
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                for (var e in this.modules) this.modules[e].destroy();
                            },
                        },
                    ]) && Nt(t.prototype, i),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    e
                );
            })(),
            Ut = i(71);
        function zt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        j.a.registerPlugin(Ut.a);
        var Ht = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                this.name = "AnchorScroll";
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            var e = this;
                            (this.btns = document.querySelectorAll(".anchor-scroll")),
                                (this.binds = []),
                                0 < this.btns.length &&
                                    this.btns.forEach(function (t, i) {
                                        (e.binds[i] = e.goScroll.bind(e, t.getAttribute("data-id"))), t.addEventListener("click", e.binds[i]);
                                    });
                        },
                    },
                    { key: "start", value: function () {} },
                    {
                        key: "goScroll",
                        value: function (e, t) {
                            t && t.preventDefault(), (t = document.getElementById(e)), (e = l.getOffsetTop(t)), j.a.to(window, { duration: 0.7, scrollTo: { y: e.top, autoKill: !1 }, ease: d.a.easeOut });
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            var e = this;
                            0 < this.btns.length &&
                                this.btns.forEach(function (t, i) {
                                    t.removeEventListener("click", e.binds[i]);
                                }),
                                delete this.btns,
                                delete this.binds;
                        },
                    },
                ]) && zt(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function $t(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var Wt = (function () {
            function e(t, i) {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "CarouselChild_" + i), (this.el = t), (this.id = i), (this.isStart = !1), (this.size = { pc: { ratioW: 1100 / 1680, margin: 90 / 1680 }, sp: { ratioW: 650 / 750, margin: 50 / 750 } }), this.init();
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            if (this.el) {
                                var e;
                                (this.isSliding = !1),
                                    (this.wrap = this.el.querySelector(".carousel-set__wrap")),
                                    (this.slideWrap = this.wrap.querySelector(".carousel-set__wrapInner")),
                                    (this.ul = this.wrap.querySelectorAll("ul")),
                                    (this.li = this.wrap.querySelectorAll("li")),
                                    (this.counter = 0),
                                    (this.max = this.li.length / this.ul.length),
                                    (this.btnL = this.el.querySelector(".carousel-set__btnL")),
                                    (this.btnR = this.el.querySelector(".carousel-set__btnR")),
                                    (this.bindPrev = this.slidePrev.bind(this)),
                                    (this.bindNext = this.slideNext.bind(this)),
                                    this.btnL.addEventListener("click", this.bindPrev),
                                    this.btnR.addEventListener("click", this.bindNext),
                                    (e =
                                        ((e = this.el.getAttribute("data-sub")) && (this.subs = document.getElementById(e).querySelectorAll(".carousel-sub__wrap")),
                                        gRICOH.isEnableTouch &&
                                            ((this.touchStartX = 0),
                                            (this.startTime = 0),
                                            (this.touchMoveX = 0),
                                            (this.bindSwipe = this.swipe.bind(this)),
                                            this.wrap.addEventListener("touchstart", this.bindSwipe),
                                            this.wrap.addEventListener("touchmove", this.bindSwipe),
                                            this.wrap.addEventListener("touchend", this.bindSwipe),
                                            this.wrap.addEventListener("touchcancel", this.bindSwipe)),
                                        this.el.getAttribute("data-ui"))) &&
                                        ((this.ui = document.getElementById(e)),
                                        this.ui.querySelectorAll(".carousel-sub__wrap"),
                                        (this.uiCounter = this.ui.querySelector(".carousel-ui__counter")),
                                        (this.ui.querySelector(".carousel-ui__max").textContent = this.addZero(this.max)),
                                        (this.uiBtnL = this.ui.querySelector(".carousel-set__btnL")),
                                        (this.uiBtnR = this.ui.querySelector(".carousel-set__btnR")),
                                        this.uiBtnL.addEventListener("click", this.bindPrev),
                                        this.uiBtnR.addEventListener("click", this.bindNext));
                                for (var t = 0; t < this.max; t++) {
                                    var i = l.randomInt(1, 6);
                                    i = "c-car--clip".concat(i);
                                    this.li[t].classList.add(i), this.li[t + this.max].classList.add(i), this.li[t + 2 * this.max].classList.add(i);
                                }
                                this.resize(), st.registerObserver(this.name, this.resize.bind(this));
                            }
                            return Promise.resolve();
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            this.el && (this.isStart = !0);
                        },
                    },
                    {
                        key: "swipe",
                        value: function (e) {
                            var t;
                            if (this.isStart)
                                return this.max < 2 || this.isSliding
                                    ? e.preventDefault()
                                    : void ("touchstart" === e.type
                                          ? ((this.touchStartX = e.touches[0].pageX), (this.startTime = Date.now()))
                                          : "touchmove" === e.type
                                          ? ((this.touchMoveX = e.changedTouches[0].pageX - this.touchStartX), (t = this.moveX * this.counter + this.touchMoveX), j.a.set(this.slideWrap, { x: t }))
                                          : "touchend" === e.type
                                          ? ((this.touchMoveX = e.changedTouches[0].pageX - this.touchStartX),
                                            (10 < Math.abs(this.touchMoveX) && Date.now() - this.startTime <= 200) || Math.abs(this.touchMoveX) > this.moveX / 2.5 ? this.swipeMove(this.touchMoveX < 0) : this.swipeNone())
                                          : this.swipeNone());
                        },
                    },
                    {
                        key: "swipeMove",
                        value: function (e) {
                            this.isSliding = !0;
                            var t = e ? this.getSlideNo("next", !0) : this.getSlideNo("prev", !0);
                            j.a.to(this.slideWrap, { duration: 0.5, x: t.next * this.moveX, onComplete: this.swipeMoveComp.bind(this) }),
                                Math.abs(t.next) === this.max ? (this.counter = 0) : (this.counter = t.next),
                                this.updateSub(t.next, t.start);
                        },
                    },
                    {
                        key: "swipeMoveComp",
                        value: function () {
                            j.a.set(this.slideWrap, { x: this.counter * this.moveX }), (this.isSliding = !1);
                        },
                    },
                    {
                        key: "swipeNone",
                        value: function () {
                            j.a.to(this.slideWrap, { duration: 0.4, x: this.counter * this.moveX }), (this.isSliding = !1);
                        },
                    },
                    {
                        key: "slidePrev",
                        value: function () {
                            var e;
                            this.isStart && ((e = this.getSlideNo("prev", !0)), this.slide(e.next, e.start));
                        },
                    },
                    {
                        key: "slideNext",
                        value: function () {
                            var e;
                            this.isStart && ((e = this.getSlideNo("next", !0)), this.slide(e.next, e.start));
                        },
                    },
                    {
                        key: "slide",
                        value: function (e, t) {
                            (this.isSliding = !0),
                                j.a.fromTo(this.slideWrap, { x: t * this.moveX }, { duration: 0.7, x: e * this.moveX, ease: d.e.easeOut, onComplete: this.slideComp.bind(this) }),
                                Math.abs(e) === this.max ? (this.counter = 0) : (this.counter = e),
                                this.updateSub(e, t);
                        },
                    },
                    {
                        key: "slideComp",
                        value: function () {
                            j.a.set(this.slideWrap, { x: this.counter * this.moveX }), (this.isSliding = !1);
                        },
                    },
                    {
                        key: "getSlideNo",
                        value: function (e, t) {
                            var i, n;
                            return (
                                !0 === t
                                    ? (i = "prev" === e ? ((n = this.counter), this.counter + 1) : ((n = this.counter), this.counter - 1))
                                    : "prev" === e
                                    ? (n = (i = (this.counter + 1) % this.max) - 1)
                                    : "next" === e && ((i = this.counter - 1), (n = (i = Math.abs(i) === this.max ? 0 : i) + 1)),
                                { next: i, start: n }
                            );
                        },
                    },
                    {
                        key: "updateSub",
                        value: function (e, t) {
                            this.subs && this.subSlide(e, t), this.uiCounter && ((e = this.counter <= (e = 0) ? -1 * this.counter + 1 : this.max - this.counter + 1), (this.uiCounter.textContent = this.addZero(e)));
                        },
                    },
                    {
                        key: "subSlide",
                        value: function (e, t) {
                            e <= 0 ? (e *= -1) === this.max && (e = 0) : (e = this.max - e), t <= 0 ? (t *= -1) : (t = this.max - t);
                            var i = this.subs[t];
                            j.a.to(i, { overwrite: !0, duration: 0.4, opacity: 0, ease: d.e.easeOut, onComplete: this.subSlideComp.bind(this, e, t) });
                        },
                    },
                    {
                        key: "subSlideComp",
                        value: function (e, t) {
                            (this.subs[t].style.display = "none"), (t = this.subs[e]), j.a.fromTo(t, { display: "block", opacity: 0 }, { duration: 0.3, opacity: 1, ease: d.e.easeOut });
                        },
                    },
                    {
                        key: "resize",
                        value: function () {
                            var e = window.innerWidth,
                                t = 0,
                                i = 0,
                                n = 0,
                                o = 0;
                            "pc" === l.isDevice()
                                ? ((i = this.size.pc.ratioW * e),
                                  (n = this.size.pc.margin * e),
                                  (o = 0.5 * (e - i)),
                                  (t = (i + n) * this.max),
                                  (this.btnL.style.left = "".concat(o - 50, "px")),
                                  (this.btnR.style.right = "".concat(o - 50, "px")))
                                : ((i = this.size.sp.ratioW * e),
                                  (n = this.size.sp.margin * e),
                                  (o = 0.5 * (e - i)),
                                  (t = (i + n) * this.max),
                                  (this.btnL.style.left = "".concat(o - 20, "px")),
                                  (this.btnR.style.right = "".concat(o - 20, "px"))),
                                this.ui && (this.ui.style.width = "".concat(i, "px")),
                                (this.moveX = i + n),
                                j.a.killTweensOf(this.slideWrap),
                                j.a.set(this.slideWrap, { x: this.counter * this.moveX }),
                                (this.isSliding = !1),
                                this.ul.forEach(function (e, i) {
                                    e.style.width = "".concat(t, "px");
                                }),
                                (this.ul[0].style.left = "".concat(o, "px")),
                                (this.ul[1].style.left = "".concat(o - t, "px")),
                                (this.ul[2].style.left = "".concat(o + t, "px")),
                                this.li.forEach(function (e, t) {
                                    (e.style.width = "".concat(i, "px")), (e.style.marginRight = "".concat(n, "px"));
                                });
                        },
                    },
                    {
                        key: "addZero",
                        value: function (e) {
                            return e < 10 ? "0" + e : e;
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            st.cancelObserver(this.name),
                                this.btnL.removeEventListener("click", this.bindPrev),
                                this.btnR.removeEventListener("click", this.bindNext),
                                gRICOH.isEnableTouch &&
                                    (this.wrap.removeEventListener("touchstart", this.bindSwipe),
                                    this.wrap.removeEventListener("touchmove", this.bindSwipe),
                                    this.wrap.removeEventListener("touchend", this.bindSwipe),
                                    this.wrap.removeEventListener("touchcancel", this.bindSwipe),
                                    delete this.bindSwipe,
                                    delete this.touchStartX,
                                    delete this.startTime,
                                    delete this.touchMoveX),
                                this.uiBtnL && (this.uiBtnL.removeEventListener("click", this.bindPrev), delete this.uiBtnL),
                                this.uiBtnR && (this.uiBtnR.removeEventListener("click", this.bindNext), delete this.uiBtnR),
                                delete this.bindPrev,
                                delete this.bindNext,
                                delete this.isSliding,
                                delete this.moveX,
                                delete this.el,
                                delete this.ul,
                                delete this.li,
                                delete this.counter,
                                delete this.max,
                                delete this.btnL,
                                delete this.btnR,
                                delete this.subs,
                                delete this.ui,
                                delete this.uiCounter,
                                delete this.slideWrap,
                                delete this.wrap;
                        },
                    },
                ]) && $t(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function Xt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var Ft = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "CarouselSet"), (this.isStart = !1), (this.cals = []);
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            var e = this;
                            return (
                                (this.els = document.querySelectorAll(".carousel-set")),
                                0 < this.els.length &&
                                    this.els.forEach(function (t, i) {
                                        e.cals.push(new Wt(t, i));
                                    }),
                                Promise.resolve()
                            );
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            0 < this.cals.length &&
                                ((this.isStart = !0),
                                this.cals.forEach(function (e, t) {
                                    e.start();
                                }));
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            0 < this.cals.length &&
                                this.cals.forEach(function (e, t) {
                                    e.destroy();
                                }),
                                (this.els = null),
                                (this.cals = []);
                        },
                    },
                ]) && Xt(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function Yt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        function Vt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        Ut = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "ServiceIndex"), (this.modules = { AnchorScroll: new Ht(), CarouselSet: new Ft() });
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            var e,
                                t = [];
                            for (e in this.modules) t.push(this.modules[e].init());
                            return Promise.all(t).then(this.initComp.bind(this)), t.length;
                        },
                    },
                    {
                        key: "initComp",
                        value: function () {
                            gEvent.emit("MODULE_READY");
                        },
                    },
                    {
                        key: "beforeStart",
                        value: function () {
                            gEvent.emit("MODULE_BEFORE_START");
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            for (var e in (gEvent.emit("MODULE_START"), this.modules)) this.modules[e].start();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            for (var e in this.modules) this.modules[e].destroy();
                        },
                    },
                ]) && Yt(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        var Gt = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                this.name = "KV3";
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            return (this.el = document.getElementById("c-kv3")), Promise.resolve();
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            this.start2();
                        },
                    },
                    { key: "start1", value: function () {} },
                    {
                        key: "start2",
                        value: function () {
                            var e = l.randomInt(1, 6);
                            this.el.classList.add("c-kv3--show"), this.el.classList.add("c-kv3--clip".concat(e));
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            delete this.el;
                        },
                    },
                ]) && Vt(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function Kt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var Jt = (function () {
            function e(t, i, n) {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "Carousel2"), (this.id = t), (this.btns = i), (this.numbers = n), (this.isStart = !1), (this.size = { pc: { ratioW: 580 / 1680, margin: 280 / 1680 }, sp: { ratioW: 650 / 750, margin: 100 / 750 } });
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            return (
                                (this.el = document.getElementById(this.id)),
                                this.el &&
                                    ((this.isSliding = !1),
                                    (this.slideWrap = this.el.querySelector(".c-carousel2__wrapInner")),
                                    (this.ul = this.el.querySelectorAll("ul")),
                                    (this.li = this.el.querySelectorAll("li")),
                                    (this.counter = 0),
                                    (this.max = this.li.length / this.ul.length),
                                    (this.uiCount = document.getElementById(this.numbers[0])),
                                    (document.getElementById(this.numbers[1]).textContent = this.addZero(this.max)),
                                    (this.btnL = document.getElementById(this.btns[0])),
                                    (this.btnR = document.getElementById(this.btns[1])),
                                    (this.bindPrev = this.slidePrev.bind(this)),
                                    (this.bindNext = this.slideNext.bind(this)),
                                    this.btnL.addEventListener("click", this.bindPrev),
                                    this.btnR.addEventListener("click", this.bindNext),
                                    this.el.classList.add("is-current".concat(this.counter + 1)),
                                    gRICOH.isEnableTouch &&
                                        ((this.touchStartX = 0),
                                        (this.startTime = 0),
                                        (this.touchMoveX = 0),
                                        (this.bindSwipe = this.swipe.bind(this)),
                                        this.el.addEventListener("touchstart", this.bindSwipe),
                                        this.el.addEventListener("touchmove", this.bindSwipe),
                                        this.el.addEventListener("touchend", this.bindSwipe),
                                        this.el.addEventListener("touchcancel", this.bindSwipe)),
                                    this.resize(),
                                    st.registerObserver(this.name + "_" + this.id, this.resize.bind(this))),
                                Promise.resolve()
                            );
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            this.el && (this.isStart = !0);
                        },
                    },
                    {
                        key: "swipe",
                        value: function (e) {
                            var t;
                            if (this.isStart)
                                return this.max < 2 || this.isSliding
                                    ? e.preventDefault()
                                    : void ("touchstart" === e.type
                                          ? ((this.touchStartX = e.touches[0].pageX), (this.startTime = Date.now()))
                                          : "touchmove" === e.type
                                          ? ((this.touchMoveX = e.changedTouches[0].pageX - this.touchStartX), (t = this.moveX * this.counter + this.touchMoveX), j.a.set(this.slideWrap, { x: t }))
                                          : "touchend" === e.type
                                          ? ((this.touchMoveX = e.changedTouches[0].pageX - this.touchStartX),
                                            (10 < Math.abs(this.touchMoveX) && Date.now() - this.startTime <= 200) || Math.abs(this.touchMoveX) > this.moveX / 2.5 ? this.swipeMove(this.touchMoveX < 0) : this.swipeNone())
                                          : this.swipeNone());
                        },
                    },
                    {
                        key: "swipeMove",
                        value: function (e) {
                            this.isSliding = !0;
                            var t = e ? this.getSlideNo("next", !0) : this.getSlideNo("prev", !0);
                            j.a.to(this.slideWrap, { duration: 0.5, x: t.next * this.moveX, onComplete: this.swipeMoveComp.bind(this) }), Math.abs(t.next) === this.max ? (this.counter = 0) : (this.counter = t.next), this.updateNo();
                        },
                    },
                    {
                        key: "swipeMoveComp",
                        value: function () {
                            j.a.set(this.slideWrap, { x: this.counter * this.moveX }), (this.isSliding = !1);
                        },
                    },
                    {
                        key: "swipeNone",
                        value: function () {
                            j.a.to(this.slideWrap, { duration: 0.4, x: this.counter * this.moveX }), (this.isSliding = !1);
                        },
                    },
                    {
                        key: "slidePrev",
                        value: function () {
                            var e;
                            this.isStart && ((e = this.max - Math.abs(this.counter) + 1) > this.max && (e = 1), this.el.classList.remove("is-current".concat(e)), (e = this.getSlideNo("prev", !0)), this.slide(e.next, e.start));
                        },
                    },
                    {
                        key: "slideNext",
                        value: function () {
                            var e;
                            this.isStart &&
                                ((e = this.counter <= (e = 0) ? -1 * this.counter + 1 : this.max - this.counter + 1), this.el.classList.remove("is-current".concat(e)), (e = this.getSlideNo("next", !0)), this.slide(e.next, e.start));
                        },
                    },
                    {
                        key: "slide",
                        value: function (e, t) {
                            (this.isSliding = !0),
                                j.a.killTweensOf(this.slideWrap),
                                j.a.fromTo(this.slideWrap, { x: t * this.moveX }, { duration: 0.7, x: e * this.moveX, ease: d.a.easeOut, onComplete: this.slideComp.bind(this) }),
                                Math.abs(e) === this.max ? (this.counter = 0) : (this.counter = e),
                                this.updateNo();
                        },
                    },
                    {
                        key: "slideComp",
                        value: function () {
                            j.a.set(this.slideWrap, { x: this.counter * this.moveX }), (this.isSliding = !1);
                        },
                    },
                    {
                        key: "getSlideNo",
                        value: function (e, t) {
                            var i, n;
                            return (
                                !0 === t
                                    ? (i = "prev" === e ? ((n = this.counter), this.counter + 1) : ((n = this.counter), this.counter - 1))
                                    : "prev" === e
                                    ? (n = (i = (this.counter + 1) % this.max) - 1)
                                    : "next" === e && ((i = this.counter - 1), (n = (i = Math.abs(i) === this.max ? 0 : i) + 1)),
                                { next: i, start: n }
                            );
                        },
                    },
                    {
                        key: "updateNo",
                        value: function () {
                            var e = this.counter <= 0 ? -1 * this.counter + 1 : this.max - this.counter + 1;
                            (this.uiCount.textContent = this.addZero(e)), this.el.classList.add("is-current".concat(e));
                        },
                    },
                    {
                        key: "resize",
                        value: function () {
                            var e = window.innerWidth,
                                t = 0,
                                i = 0,
                                n = 0,
                                o = 0;
                            "pc" === l.isDevice()
                                ? ((i = this.size.pc.ratioW * e),
                                  (n = this.size.pc.margin * e),
                                  (o = 0.5 * (e - i - 40)),
                                  (t = (i + n) * this.max),
                                  (this.btnL.style.left = "".concat(o - 50, "px")),
                                  (this.btnR.style.right = "".concat(o - 50, "px")))
                                : ((i = this.size.sp.ratioW * e),
                                  (n = this.size.sp.margin * e),
                                  (o = 0.5 * (e - i)),
                                  (t = (i + n) * this.max),
                                  (this.btnL.style.left = "".concat(o - 25, "px")),
                                  (this.btnR.style.right = "".concat(o - 25, "px"))),
                                (this.moveX = i + n),
                                (this.isSliding = !1),
                                j.a.killTweensOf(this.slideWrap),
                                j.a.set(this.slideWrap, { x: this.counter * this.moveX }),
                                this.ul.forEach(function (e, i) {
                                    e.style.width = "".concat(t, "px");
                                }),
                                (this.ul[0].style.left = "".concat(o, "px")),
                                (this.ul[1].style.left = "".concat(o - t, "px")),
                                (this.ul[2].style.left = "".concat(o + t, "px")),
                                this.li.forEach(function (e, t) {
                                    (e.style.width = "".concat(i, "px")), (e.style.marginRight = "".concat(n, "px"));
                                });
                        },
                    },
                    {
                        key: "addZero",
                        value: function (e) {
                            return e < 10 ? "0" + e : e;
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.el &&
                                (st.cancelObserver(this.name + "_" + this.id),
                                this.btnL.removeEventListener("click", this.bindNext),
                                this.btnR.removeEventListener("click", this.bindPrev),
                                gRICOH.isEnableTouch &&
                                    (this.el.removeEventListener("touchstart", this.bindSwipe),
                                    this.el.removeEventListener("touchmove", this.bindSwipe),
                                    this.el.removeEventListener("touchend", this.bindSwipe),
                                    this.el.removeEventListener("touchcancel", this.bindSwipe),
                                    delete this.bindSwipe,
                                    delete this.touchStartX,
                                    delete this.startTime,
                                    delete this.touchMoveX)),
                                delete this.bindNext,
                                delete this.bindPrev,
                                delete this.isSliding,
                                delete this.moveX,
                                delete this.el,
                                delete this.ul,
                                delete this.li,
                                delete this.counter,
                                delete this.max,
                                delete this.uiCount,
                                delete this.btnL,
                                delete this.btnR,
                                delete this.slideWrap;
                        },
                    },
                ]) && Kt(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function Zt(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var Qt = (function () {
            function e(t, i) {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "MoreBlockChild" + i), (this.el = t), (this.id = i), (this.isStart = !1), this.init();
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            return (
                                (this.more = null),
                                (this.moreWrap = null),
                                (this.btn = null),
                                (this.close = null),
                                (this.bind = null),
                                (this.isOpen = !1),
                                this.el &&
                                    ((this.bind = this.toggle.bind(this)),
                                    (this.more = this.el.querySelector(".more-block__wrap")),
                                    (this.moreWrap = this.more.querySelector(".is-wrap")),
                                    (this.btn = this.el.querySelector(".is-btn")),
                                    (this.close = this.el.querySelector(".is-close")),
                                    this.btn.addEventListener("click", this.bind),
                                    this.close.addEventListener("click", this.bind),
                                    this.resize(),
                                    st.registerObserver(this.name, this.resize.bind(this))),
                                Promise.resolve()
                            );
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            this.isStart = !0;
                        },
                    },
                    {
                        key: "toggle",
                        value: function (e) {
                            var t;
                            this.isOpen
                                ? (this.el.classList.remove("is-open"), (this.isOpen = !1), (this.more.style.height = "0px"))
                                : (this.el.classList.add("is-open"), (this.isOpen = !0), (t = this.moreWrap.clientHeight), (this.more.style.height = "".concat(t, "px")));
                        },
                    },
                    {
                        key: "resize",
                        value: function () {
                            var e;
                            this.isOpen && ((e = this.moreWrap.clientHeight), (this.more.style.height = "".concat(e, "px")));
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            st.cancelObserver(this.name),
                                this.btn.removeEventListener("click", this.bind),
                                this.close.removeEventListener("click", this.bind),
                                delete this.more,
                                delete this.moreWrap,
                                delete this.btn,
                                delete this.close,
                                delete this.bind,
                                delete this.isOpen;
                        },
                    },
                ]) && Zt(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function ei(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var ti = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "MoreBlockSet"), (this.isStart = !1), (this.cals = []);
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            var e = this;
                            return (
                                (this.els = document.querySelectorAll(".more-block")),
                                0 < this.els.length &&
                                    this.els.forEach(function (t, i) {
                                        e.cals.push(new Qt(t, i));
                                    }),
                                Promise.resolve()
                            );
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            0 < this.cals.length &&
                                ((this.isStart = !0),
                                this.cals.forEach(function (e, t) {
                                    e.start();
                                }));
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            0 < this.cals.length &&
                                this.cals.forEach(function (e, t) {
                                    e.destroy();
                                }),
                                (this.els = null),
                                (this.cals = []);
                        },
                    },
                ]) && ei(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function ii(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var ni = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "ServiceDetail"),
                    (this.modules = {
                        KV3: new Gt(),
                        RelatedCase: new ht(),
                        MoreBlockSet: new ti(),
                        QASet: new Rt(),
                        AnchorScroll: new Ht(),
                        EmbedVideo: new bt(),
                        Carousel2: new Jt("c-carousel2__wrap", ["c-uiCal__btnL", "c-uiCal__btnR"], ["c-uiCal__numberCount", "c-uiCal__numberMax"]),
                    });
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            var e,
                                t = [];
                            for (e in this.modules) t.push(this.modules[e].init());
                            return Promise.all(t).then(this.initComp.bind(this)), t.length;
                        },
                    },
                    {
                        key: "initComp",
                        value: function () {
                            gEvent.emit("MODULE_READY");
                        },
                    },
                    {
                        key: "beforeStart",
                        value: function () {
                            gEvent.emit("MODULE_BEFORE_START");
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            for (var e in (gEvent.emit("MODULE_START"), this.modules)) this.modules[e].start();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            for (var e in this.modules) this.modules[e].destroy();
                        },
                    },
                ]) && ii(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function oi(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var ri = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "ProductIndex"), (this.modules = { AnchorScroll: new Ht(), CarouselSet: new Ft() });
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            var e,
                                t = [];
                            for (e in this.modules) t.push(this.modules[e].init());
                            return Promise.all(t).then(this.initComp.bind(this)), t.length;
                        },
                    },
                    {
                        key: "initComp",
                        value: function () {
                            gEvent.emit("MODULE_READY");
                        },
                    },
                    {
                        key: "beforeStart",
                        value: function () {
                            gEvent.emit("MODULE_BEFORE_START");
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            for (var e in (gEvent.emit("MODULE_START"), this.modules)) this.modules[e].start();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            for (var e in this.modules) this.modules[e].destroy();
                        },
                    },
                ]) && oi(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function si(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var ai = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "ModalPlayer"), (this.size = { video: { h: 9, w: 16 } });
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            var e = this;
                            (this.state = l.getCurrentState()),
                                (this.isStart = !1),
                                (this.isOpenModal = !1),
                                (this.binds = []),
                                (this.bindClose = null),
                                (this.modal = document.getElementById("c-modalPlayer")),
                                (this.frame = this.modal.querySelector(".c-modalPlayer__wrap")),
                                (this.movie = this.modal.querySelector(".c-modalPlayer__wrapPlayer")),
                                (this.btnOpens = document.querySelectorAll(".open-modalPlayer")),
                                this.btnOpens.forEach(function (t, i) {
                                    (e.binds[i] = e.open.bind(e, t, i)), t.addEventListener("click", e.binds[i]);
                                }),
                                (this.bindClose = this.close.bind(this)),
                                (this.btnClose = this.modal.querySelector(".c-btnClose")),
                                this.btnClose.addEventListener("click", this.bindClose),
                                (this.btnBg = this.modal.querySelector(".c-modalPlayer__bg")),
                                this.btnBg.addEventListener("click", this.bindClose);
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            this.isStart = !0;
                        },
                    },
                    {
                        key: "update",
                        value: function () {
                            this.isStart = !0;
                        },
                    },
                    {
                        key: "open",
                        value: function (e, t) {
                            this.isOpenModal ||
                                ((this.isOpenModal = !0),
                                (e =
                                    '<iframe width="560" height="315" src="' +
                                    e.getAttribute("data-iframe") +
                                    '" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'),
                                (this.movie.innerHTML = e),
                                (e = window.document.createEvent("UIEvents")).initUIEvent("resize", !0, !1, window, 0),
                                window.dispatchEvent(e),
                                this.resize(),
                                this.modal.classList.add("c-modalPlayer--show"),
                                U.xStopScroll(),
                                this.resize(),
                                st.registerObserver(this.name, this.resize.bind(this)));
                        },
                    },
                    {
                        key: "close",
                        value: function () {
                            this.isOpenModal && (U.xStartScroll(), st.cancelObserver(this.name), this.modal.classList.remove("c-modalPlayer--show"), this.closeComp());
                        },
                    },
                    {
                        key: "closeComp",
                        value: function () {
                            (this.isOpenModal = !1), this.movie.querySelector("iframe").remove(), this.update();
                        },
                    },
                    {
                        key: "resize",
                        value: function () {
                            var e = window.innerWidth,
                                t = window.innerHeight,
                                i = Math.max(this.size.video.w / (0.9 * e), this.size.video.h / (200 < 0.9 * t ? 0.9 * t : 200)),
                                n = this.size.video.w / i,
                                o = ((e = (e - n) / 2), (t = (t - (i = this.size.video.h / i)) / 2), this.frame.style);
                            (o.position = "absolute"), (o.left = "".concat(e, "px")), (o.top = "".concat(t, "px")), (o.width = "".concat(n, "px")), (o.height = "".concat(i, "px"));
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            var e = this;
                            st.cancelObserver(this.name),
                                this.btnOpens.forEach(function (t, i) {
                                    t.removeEventListener("click", e.binds[i]);
                                }),
                                (this.binds = []),
                                (this.btnOpens = []),
                                this.btnClose.removeEventListener("click", this.bindClose),
                                this.btnBg.removeEventListener("click", this.bindClose),
                                delete this.bindClose,
                                delete this.btnClose,
                                delete this.movie,
                                delete this.modal;
                        },
                    },
                ]) && si(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function li(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var ci = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                this.name = "FeatureList";
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            return (
                                (this.features = document.querySelectorAll(".c-featureP")),
                                this.features &&
                                    this.features.forEach(function (e, t) {
                                        var i = l.randomInt(1, 6);
                                        e.classList.add("c-featureP--clip".concat(i));
                                    }),
                                Promise.resolve()
                            );
                        },
                    },
                    { key: "start", value: function () {} },
                    {
                        key: "destroy",
                        value: function () {
                            delete this.features;
                        },
                    },
                ]) && li(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function ui(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var hi = (function () {
                function e() {
                    if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                    (this.name = "ProductDetail"),
                        (this.modules = {
                            KV: new nt(),
                            ScrollTable: new ct(),
                            QASet: new Rt(),
                            ModalPlayer: new ai(),
                            EmbedVideo: new bt(),
                            FeatureList: new ci(),
                            RelatedCase: new ht(),
                            CarouselSet: new Ft(),
                            Carousel2: new Jt("c-carousel2__wrap", ["c-uiCal__btnL", "c-uiCal__btnR"], ["c-uiCal__numberCount", "c-uiCal__numberMax"]),
                            AnchorScroll: new Ht(),
                        });
                }
                var t, i;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "init",
                            value: function () {
                                var e,
                                    t = [];
                                for (e in this.modules) t.push(this.modules[e].init());
                                return Promise.all(t).then(this.initComp.bind(this)), t.length;
                            },
                        },
                        {
                            key: "initComp",
                            value: function () {
                                gEvent.emit("MODULE_READY");
                            },
                        },
                        {
                            key: "beforeStart",
                            value: function () {
                                gEvent.emit("MODULE_BEFORE_START");
                            },
                        },
                        {
                            key: "start",
                            value: function () {
                                for (var e in (gEvent.emit("MODULE_START"), this.modules)) this.modules[e].start();
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                for (var e in this.modules) this.modules[e].destroy();
                            },
                        },
                    ]) && ui(t.prototype, i),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    e
                );
            })(),
            di = i(51),
            fi = i.n(di),
            pi = ((di = i(106)), i.n(di)),
            vi = ((di = i(57)), i.n(di)),
            yi = {
                name: "CmnHistoryApi",
                max: 200,
                list: [location.href],
                enable: history.pushState && void 0 !== history.state,
                add: function (e) {
                    (e = e || location.href), this.list.push(e);
                },
                changeState: function (e) {
                    (e = e || location.href), history.pushState({ url: e }, null, e), this.add(e);
                },
                replaceState: function (e) {
                    (e = e || location.href), history.replaceState({ url: e }, document.title, e), (this.list[this.list.length - 1] = e);
                },
                get: function (e) {
                    return void 0 === e ? (e = this.list.length - 1) : e < 0 && (e = this.list.length + e), this.list[e];
                },
                del: function (e) {
                    return void 0 === e ? this.list.pop() : this.list.splice(e, 1);
                },
                getList: function () {
                    return this.list;
                },
            };
        function mi(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var bi = (function () {
            function e(t, i) {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "ContactForm"), (this.vNames = t), (this.referrerID = i);
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            (this.isValidated = !1),
                                (this.isConfirm = !1),
                                (this.isSend = !1),
                                (this.isError = !1),
                                (this.errMsgs = {}),
                                (this.formResult = {}),
                                (this.formValue = {}),
                                (this.tagScript = null),
                                1 < yi.getList().length &&
                                    ((this.tagScript = document.createElement("script")), (this.tagScript.src = "/cms_dir/wp-content/plugins/contact-form-7/includes/js/index.js?ver=5.4.2"), document.body.appendChild(this.tagScript)),
                                (this.bindConfirm = this.onConfirm.bind(this)),
                                (this.btnConfirm = document.getElementById("btn-confirm")),
                                this.btnConfirm.addEventListener("click", this.bindConfirm),
                                (this.bindSend = this.onSend.bind(this)),
                                (this.btnSend = document.getElementById("btn-send")),
                                this.btnSend.addEventListener("click", this.bindSend),
                                (this.bindBack = this.onBack.bind(this)),
                                (this.btnBack = document.getElementById("btn-back")),
                                this.btnBack.addEventListener("click", this.bindBack),
                                (this.inputPostal = document.querySelector(".postal-search")),
                                this.inputPostal && ((this.bindCheckPostal = this.onCheckPostal.bind(this)), this.inputPostal.addEventListener("keyup", this.bindCheckPostal));
                            var e =
                                ((e = document.querySelector(".wpcf7")).addEventListener("wpcf7mailsent", this.onCF7Comp, !1),
                                e.addEventListener("wpcf7invalid", this.onCF7Invalid, !1),
                                e.addEventListener("wpcf7spam", this.onCF7Spam, !1),
                                yi.get(-2));
                            document.getElementById(this.referrerID) && void 0 !== e && (document.getElementById(this.referrerID).value = e.split("://")[1].replace("rdc.ricoh.co.jp", ""));
                        },
                    },
                    { key: "start", value: function () {} },
                    {
                        key: "onConfirm",
                        value: function (e) {
                            var t = this;
                            if ((e.preventDefault(), !this.isConfirm)) {
                                for (var i in ((this.isConfirm = !0), this.hideErrors(), this.vNames))
                                    !(function (e) {
                                        if ("string" == typeof e) {
                                            var i = "",
                                                n = "",
                                                o = document.getElementById("usr-".concat(e));
                                            "text" === t.vNames[e].type || "textarea" === t.vNames[e].type
                                                ? ((i = o.value), (n = o.value))
                                                : "radio" === t.vNames[e].type || "checkbox" === t.vNames[e].type
                                                ? ((i = []),
                                                  (n = ""),
                                                  o.querySelectorAll("input[type=".concat(t.vNames[e].type, "]")).forEach(function (e, t) {
                                                      e.checked && (i.push(t), n && (n += ", "), (n += e.value));
                                                  }))
                                                : "select" === t.vNames[e].type && ((i = o.selectedIndex), (n = o.value)),
                                                (t.formResult[e] = n),
                                                (t.formValue[e] = i),
                                                t.validate(t.vNames[e], e, i);
                                        }
                                    })(i);
                                this.isError ? this.onFails() : this.onPasses();
                            }
                        },
                    },
                    {
                        key: "validate",
                        value: function (e, t, i) {
                            if (e.rule)
                                for (var n in e.rule) {
                                    if ("required" === (n = e.rule[n])) {
                                        if (vi.a.isEmpty(i, { ignore_whitespace: !0 })) {
                                            (this.isError = !0), (this.errMsgs[t] = "".concat(e.name, "を入力してください。"));
                                            break;
                                        }
                                    } else if ("required_arr" === n) {
                                        if (0 === i.length) {
                                            (this.isError = !0), (this.errMsgs[t] = "".concat(e.name, "を選択してください。"));
                                            break;
                                        }
                                    } else if ("required_select" === n && 0 === i) {
                                        (this.isError = !0), (this.errMsgs[t] = "".concat(e.name, "を選択してください。"));
                                        break;
                                    }
                                    if (-1 < n.indexOf("max:")) {
                                        var o = n.split(":");
                                        if (!vi.a.isLength(i, { min: 0, max: o[1] })) {
                                            (this.isError = !0), (this.errMsgs[t] = "".concat(e.name, "を").concat(o[1], "文字以下で入力してください。"));
                                            break;
                                        }
                                    }
                                    if ("email" === n && !vi.a.isEmail(i)) {
                                        (this.isError = !0), (this.errMsgs[t] = "メールアドレスが正しくありません");
                                        break;
                                    }
                                    if (-1 < n.indexOf("equal:") && ((o = n.split(":")), (n = document.getElementById("usr-".concat(o[1]))), !vi.a.equals(i, n.value))) {
                                        (this.isError = !0), (this.errMsgs[t] = "メールアドレスが一致していません");
                                        break;
                                    }
                                }
                        },
                    },
                    {
                        key: "hideErrors",
                        value: function () {
                            for (var e in ((this.isError = !1), (this.errMsgs = {}), (document.getElementById("err-lead").style.display = "none"), this.vNames))
                                "string" == typeof e && ((document.getElementById("err-".concat(e)).textContent = ""), (document.getElementById("err-".concat(e)).style.display = "none"));
                        },
                    },
                    {
                        key: "onFails",
                        value: function () {
                            for (var e in ((this.isConfirm = !1), (this.isValidated = !1), (document.getElementById("err-lead").style.display = "block"), this.errMsgs))
                                "string" == typeof e && ((document.getElementById("err-".concat(e)).textContent = this.errMsgs[e]), (document.getElementById("err-".concat(e)).style.display = "block"));
                            this.pageTop();
                        },
                    },
                    {
                        key: "onPasses",
                        value: function () {
                            for (var e in ((this.isConfirm = !0), (this.isValidated = !0), this.vNames))
                                if ("string" == typeof e) {
                                    var t = ((t = document.getElementById("conf-".concat(e))) && (t.textContent = pi()(this.formResult[e])), document.getElementById("wp-".concat(e)));
                                    if ("text" === this.vNames[e].type || "textarea" === this.vNames[e].type) document.getElementById("wp-".concat(e)).value = pi()(this.formValue[e]);
                                    else if ("radio" === this.vNames[e].type || "checkbox" === this.vNames[e].type)
                                        for (var i = t.querySelectorAll("input[type=".concat(this.vNames[e].type, "]")), n = this.formValue[e], o = 0; o < n.length; o++) i[n[o]].checked = !0;
                                    else "select" === this.vNames[e].type && (t.selectedIndex = this.formValue[e]);
                                }
                            this.pageTop(), gsap.set(document.getElementById("c-form"), { display: "none" }), gsap.set(document.getElementById("c-conf"), { display: "block" });
                        },
                    },
                    {
                        key: "onBack",
                        value: function (e) {
                            e.preventDefault(),
                                this.isValidated &&
                                    ((this.isConfirm = !1),
                                    (this.isValidated = !1),
                                    this.hideErrors(),
                                    this.pageTop(),
                                    gsap.set(document.getElementById("c-conf"), { display: "none" }),
                                    gsap.set(document.getElementById("c-form"), { display: "block" }));
                        },
                    },
                    {
                        key: "onSend",
                        value: function (e) {
                            e.preventDefault(),
                                this.isSend ||
                                    ((this.isSend = !0),
                                    document.getElementById("wp-submit").click(),
                                    this.pageTop(),
                                    gsap.set(document.getElementById("c-conf"), { display: "none" }),
                                    gsap.set(document.getElementById("c-complete"), { display: "block" }));
                        },
                    },
                    {
                        key: "onCheckPostal",
                        value: function (e) {
                            var t = this.inputPostal.value;
                            (t = (t = t.replace(/[０-９]/g, function (e) {
                                return String.fromCharCode(e.charCodeAt(0) - 65248);
                            })).match(/\d/g)) &&
                                7 === t.length &&
                                ((t = t.join("")), fi.a.ajax({ url: "https://zipcloud.ibsnet.co.jp/api/search?zipcode=" + t, type: "GET", dataType: "jsonp" }).done(this.callbackPostal.bind(this)));
                        },
                    },
                    {
                        key: "callbackPostal",
                        value: function (e) {
                            if (200 === e.status && null !== e.results) {
                                for (var t = document.querySelector(".postal-search__pref").options, i = e.results[0].address1, n = 0; n < t.length; n++) t[n].value == i && (t[n].selected = !0);
                                document.querySelector(".postal-search__address").value = e.results[0].address2 + e.results[0].address3;
                            }
                        },
                    },
                    { key: "onCF7Comp", value: function (e) {} },
                    { key: "onCF7Invalid", value: function (e) {} },
                    {
                        key: "onCF7Spam",
                        value: function (e) {
                            document.getElementById("js-err-spam").style.display = "block";
                        },
                    },
                    {
                        key: "pageTop",
                        value: function () {
                            var e = 0;
                            document.getElementById("p-contact2__wrap") && (e = l.getOffset("#p-contact2__wrap").offset.top - 100), gsap.to(window, { duration: 0.6, scrollTo: { y: e, autoKill: !1 } });
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            var e = document.querySelector(".wpcf7");
                            e.removeEventListener("wpcf7mailsent", this.onCF7Comp, !1),
                                e.removeEventListener("wpcf7invalid", this.onCF7Invalid, !1),
                                e.removeEventListener("wpcf7spam", this.onCF7Spam, !1),
                                this.tagScript && document.body.removeChild(this.tagScript),
                                delete this.tagScript,
                                this.btnConfirm.removeEventListener("click", this.bindConfirm),
                                delete this.bindConfirm,
                                delete this.btnConfirm,
                                this.btnSend.removeEventListener("click", this.bindSend),
                                delete this.bindSend,
                                delete this.btnSend,
                                this.btnBack.removeEventListener("click", this.bindBack),
                                delete this.bindBack,
                                delete this.btnBack,
                                this.inputPostal && (this.inputPostal.removeEventListener("keyup", this.bindCheckPostal), delete this.bindCheckPostal, delete this.inputPostal),
                                delete this.isValidated,
                                delete this.isConfirm,
                                delete this.isSend,
                                delete this.isError,
                                delete this.errMsgs,
                                delete this.formResult,
                                delete this.formValue;
                        },
                    },
                ]) && mi(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function gi(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        function wi(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        di = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "ContactInfo"),
                    (this.modules = {
                        ContactForm: new bi(
                            {
                                lastname11: { name: "お名前（姓）", rule: ["required", "max:150"], type: "text" },
                                firstname11: { name: "お名前（名）", rule: ["required", "max:150"], type: "text" },
                                masterCompanyName1: { name: "法人名", rule: ["required", "max:250"], type: "text" },
                                emailAddress: { name: "メールアドレス", rule: ["required", "email", "max:250"], type: "text" },
                                singleLineText: { name: "メールアドレス（確認）", rule: ["required", "email", "max:250", "equal:emailAddress"], type: "text" },
                                address111: { name: "住所（都道府県）", rule: ["required_select"], type: "select" },
                                consent: { name: "同意する", rule: ["required_arr"], type: "checkbox" },
                            },
                            "fe14210"
                        ),
                        ModalPlayer: new ai(),
                    });
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            var e,
                                t = [];
                            for (e in this.modules) t.push(this.modules[e].init());
                            return Promise.all(t).then(this.initComp.bind(this)), t.length;
                        },
                    },
                    {
                        key: "initComp",
                        value: function () {
                            gEvent.emit("MODULE_READY");
                        },
                    },
                    {
                        key: "beforeStart",
                        value: function () {
                            gEvent.emit("MODULE_BEFORE_START");
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            for (var e in (gEvent.emit("MODULE_START"), this.modules)) this.modules[e].start();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            for (var e in this.modules) this.modules[e].destroy();
                        },
                    },
                ]) && gi(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        var ki = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "ContactInquiry"),
                    (this.modules = {
                        ContactForm: new bi(
                            {
                                "inquiry-purpose": { name: "目的", rule: ["required_arr"], type: "radio" },
                                lastname11: { name: "お名前（姓）", rule: ["required", "max:150"], type: "text" },
                                firstname11: { name: "お名前（名）", rule: ["required", "max:150"], type: "text" },
                                masterCompanyName1: { name: "法人名", rule: ["required", "max:250"], type: "text" },
                                businessphone11: { name: "電話番号", rule: ["required", "max:30"], type: "text" },
                                emailAddress: { name: "メールアドレス", rule: ["required", "email", "max:250"], type: "text" },
                                singleLineText: { name: "メールアドレス（確認）", rule: ["required", "email", "max:250", "equal:emailAddress"], type: "text" },
                                postalCode1: { name: "郵便番号", rule: ["max:8"], type: "text" },
                                address111: { name: "住所（都道府県）", rule: ["required_select"], type: "select" },
                                address211: { name: "住所（市区町村以下）", rule: ["required"], type: "text" },
                                address311: { name: "住所（ビル名）", rule: ["max:250"], type: "text" },
                                paragraphText: { name: "お問い合わせ詳細", rule: ["required", "max:10000"], type: "textarea" },
                                schedule: { name: "導入予定時期", rule: null, type: "select" },
                                position: { name: "お客様の立場", rule: null, type: "select" },
                                position_other: { name: "お客様の立場 その他", rule: null, type: "text" },
                                interest: { name: "お客様のご関心", rule: null, type: "select" },
                                interest_other: { name: "お客様のご関心 その他", rule: null, type: "text" },
                                consent: { name: "同意する", rule: ["required_arr"], type: "checkbox" },
                            },
                            "fe13927"
                        ),
                    });
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            var e,
                                t = [];
                            for (e in this.modules) t.push(this.modules[e].init());
                            return Promise.all(t).then(this.initComp.bind(this)), t.length;
                        },
                    },
                    {
                        key: "initComp",
                        value: function () {
                            gEvent.emit("MODULE_READY");
                        },
                    },
                    {
                        key: "beforeStart",
                        value: function () {
                            gEvent.emit("MODULE_BEFORE_START");
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            for (var e in (gEvent.emit("MODULE_START"), this.modules)) this.modules[e].start();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            for (var e in this.modules) this.modules[e].destroy();
                        },
                    },
                ]) && wi(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function Ei(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var Si = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "ContactVr"),
                    (this.modules = {
                        ContactForm: new bi(
                            {
                                lastname11: { name: "お名前（姓）", rule: ["required", "max:150"], type: "text" },
                                firstname11: { name: "お名前（名）", rule: ["required", "max:150"], type: "text" },
                                masterCompanyName1: { name: "法人名", rule: ["required", "max:250"], type: "text" },
                                businessphone11: { name: "電話番号", rule: ["required", "max:30"], type: "text" },
                                emailAddress: { name: "メールアドレス", rule: ["required", "email", "max:250"], type: "text" },
                                singleLineText: { name: "メールアドレス（確認）", rule: ["required", "email", "max:250", "equal:emailAddress"], type: "text" },
                                participant: { name: "参加人数", rule: null, type: "select" },
                                paragraphText: { name: "お問い合わせ詳細", rule: ["required", "max:10000"], type: "textarea" },
                                consent: { name: "同意する", rule: ["required_arr"], type: "checkbox" },
                            },
                            "fe15392"
                        ),
                    });
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            var e,
                                t = [];
                            for (e in this.modules) t.push(this.modules[e].init());
                            return Promise.all(t).then(this.initComp.bind(this)), t.length;
                        },
                    },
                    {
                        key: "initComp",
                        value: function () {
                            gEvent.emit("MODULE_READY");
                        },
                    },
                    {
                        key: "beforeStart",
                        value: function () {
                            gEvent.emit("MODULE_BEFORE_START");
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            for (var e in (gEvent.emit("MODULE_START"), this.modules)) this.modules[e].start();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            for (var e in this.modules) this.modules[e].destroy();
                        },
                    },
                ]) && Ei(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function Oi(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var _i = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "CpInquiry"),
                    (this.modules = {
                        ContactForm: new bi(
                            {
                                name_sei: { name: "お名前（姓）", rule: ["required", "max:150"], type: "text" },
                                name_mei: { name: "お名前（名）", rule: ["required", "max:150"], type: "text" },
                                name_sei_furi: { name: "フリガナ（姓）", rule: ["required", "max:150"], type: "text" },
                                name_mei_furi: { name: "フリガナ（名）", rule: ["required", "max:150"], type: "text" },
                                company: { name: "法人名", rule: ["required", "max:250"], type: "text" },
                                division: { name: "所属名", rule: ["max:250"], type: "text" },
                                jobTitle: { name: "役職", rule: ["max:250"], type: "text" },
                                tel: { name: "電話番号", rule: ["required", "max:30"], type: "text" },
                                email: { name: "メールアドレス", rule: ["required", "email", "max:250"], type: "text" },
                                email_kaku: { name: "メールアドレス（確認）", rule: ["required", "email", "max:250", "equal:email"], type: "text" },
                                inquiry_class: { name: "お問い合わせ内容", rule: ["required", "max:10000"], type: "textarea" },
                                Consent: { name: "同意する", rule: ["required_arr"], type: "checkbox" },
                            },
                            "fe13927"
                        ),
                    });
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            var e,
                                t = [];
                            for (e in this.modules) t.push(this.modules[e].init());
                            return Promise.all(t).then(this.initComp.bind(this)), t.length;
                        },
                    },
                    {
                        key: "initComp",
                        value: function () {
                            gEvent.emit("MODULE_READY");
                        },
                    },
                    {
                        key: "beforeStart",
                        value: function () {
                            gEvent.emit("MODULE_BEFORE_START");
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            for (var e in (gEvent.emit("MODULE_START"), this.modules)) this.modules[e].start();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            for (var e in this.modules) this.modules[e].destroy();
                        },
                    },
                ]) && Oi(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function Ci(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var xi = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "CpInquiry"),
                    (this.modules = {
                        ContactForm: new bi(
                            {
                                mokuteki: { name: "導入目的", rule: ["required_arr"], type: "radio" },
                                jiki: { name: "導入予定時期", rule: null, type: "select" },
                                lastName11: { name: "お名前（姓）", rule: ["required", "max:150"], type: "text" },
                                firstName11: { name: "お名前（名）", rule: ["required", "max:150"], type: "text" },
                                masterCompanyName1: { name: "法人名", rule: ["required", "max:250"], type: "text" },
                                masterDeptName1: { name: "部署名", rule: ["max:250"], type: "text" },
                                businessphone11: { name: "電話番号", rule: ["required", "max:30"], type: "text" },
                                emailAddress: { name: "メールアドレス", rule: ["required", "email", "max:250"], type: "text" },
                                singleLineText: { name: "メールアドレス（確認）", rule: ["required", "email", "max:250", "equal:emailAddress"], type: "text" },
                                consent: { name: "同意する", rule: ["required_arr"], type: "checkbox" },
                            },
                            ""
                        ),
                    });
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            var e,
                                t = [];
                            for (e in this.modules) t.push(this.modules[e].init());
                            return Promise.all(t).then(this.initComp.bind(this)), t.length;
                        },
                    },
                    {
                        key: "initComp",
                        value: function () {
                            gEvent.emit("MODULE_READY");
                        },
                    },
                    {
                        key: "beforeStart",
                        value: function () {
                            gEvent.emit("MODULE_BEFORE_START");
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            for (var e in (gEvent.emit("MODULE_START"), this.modules)) this.modules[e].start();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            for (var e in this.modules) this.modules[e].destroy();
                        },
                    },
                ]) && Ci(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function Ti(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var Pi = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "CommonPage"), (this.modules = {});
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            var e,
                                t = [];
                            for (e in this.modules) t.push(this.modules[e].init());
                            return Promise.all(t).then(this.initComp.bind(this)), t.length;
                        },
                    },
                    {
                        key: "initComp",
                        value: function () {
                            gEvent.emit("MODULE_READY");
                        },
                    },
                    {
                        key: "beforeStart",
                        value: function () {
                            gEvent.emit("MODULE_BEFORE_START");
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            for (var e in (gEvent.emit("MODULE_START"), this.modules)) this.modules[e].start();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            for (var e in this.modules) this.modules[e].destroy();
                        },
                    },
                ]) && Ti(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function Li(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        l.addPageModule("top", r),
            l.addPageModule("common", Pi),
            l.addPageModule("about-index", s),
            l.addPageModule("case-index", o),
            l.addPageModule("case-detail", wt),
            l.addPageModule("case-search", Et),
            l.addPageModule("solution-index", Ot),
            l.addPageModule("solution-detail", qt),
            l.addPageModule("solution-search", Bt),
            l.addPageModule("service-index", Ut),
            l.addPageModule("service-detail", ni),
            l.addPageModule("product-index", ri),
            l.addPageModule("product-detail", hi),
            l.addPageModule("contact-info", di),
            l.addPageModule("contact-case", di),
            l.addPageModule("contact-kamiapp", di),
            l.addPageModule("contact-vrsolution", di),
            l.addPageModule("contact-360snap", di),
            l.addPageModule("contact-dmb", di),
            l.addPageModule("contact-eventphoto", di),
            l.addPageModule("contact-ugokustamp", di),
            l.addPageModule("contact-vrseminar", di),
            l.addPageModule("contact-inquiry", ki),
            l.addPageModule("contact-vr", Si),
            l.addPageModule("cp-inquiry", _i),
            l.addPageModule("cp-dl", xi);
        var Mi = (function () {
            function e(t, i) {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.imgUrls = t), (this.callback = i), (this.imgCount = t.length), (this.counter = 0), (this.items = []), this.load();
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "load",
                        value: function () {
                            var e = this;
                            this.imgUrls.forEach(function (t, i) {
                                var n = new Image();
                                n.addEventListener("load", e.loaded.bind(e), !1), n.addEventListener("error", e.error.bind(e), !1), (n.src = t), e.items.push({ img: n, index: i });
                            });
                        },
                    },
                    {
                        key: "loaded",
                        value: function (e) {
                            this.counter++, this.imgCount === this.counter && this.callback(this.items);
                        },
                    },
                    { key: "error", value: function (e) {} },
                ]) && Li(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function Ri(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var ji = new ((function () {
                function e() {
                    if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                    (this.name = "CmnTransition"), (this.wrapperID = "l-scroll-frame");
                }
                var t, i;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "init",
                            value: function (e) {
                                this.cover = document.getElementById("c-loading");
                                var t = this.transitonOut();
                                Promise.all([e, t]).then(this.transitonOutEnd.bind(this)).then(this.transitonIn.bind(this)).then(this.transitonInEnd.bind(this));
                            },
                        },
                        {
                            key: "transitonOut",
                            value: function () {
                                var e = this;
                                return (
                                    gEvent.emit("T_OUT"),
                                    new Promise(function (t, i) {
                                        j.a.to(document.getElementById(e.wrapperID), { duration: 0.6, opacity: 0, ease: d.e.easeOut }),
                                            j.a.fromTo(
                                                e.cover,
                                                { display: "flex", visibility: "visible", opacity: 0 },
                                                {
                                                    delay: 0.1,
                                                    duration: 0.6,
                                                    opacity: 1,
                                                    ease: d.e.easeOut,
                                                    onComplete: function () {
                                                        t();
                                                    },
                                                }
                                            );
                                    })
                                );
                            },
                        },
                        {
                            key: "transitonOutEnd",
                            value: function (e) {
                                return (
                                    gEvent.emit("T_OUT_END"),
                                    new Promise(function (e, t) {
                                        requestAnimationFrame(function () {
                                            e();
                                        });
                                    })
                                );
                            },
                        },
                        {
                            key: "transitonIn",
                            value: function () {
                                var e = this;
                                return (
                                    gEvent.emit("T_IN"),
                                    new Promise(function (t, i) {
                                        j.a.to(e.cover, {
                                            duration: 0.6,
                                            opacity: 0,
                                            ease: d.e.easeOut,
                                            onComplete: function () {
                                                t();
                                            },
                                        });
                                    })
                                );
                            },
                        },
                        {
                            key: "transitonInEnd",
                            value: function () {
                                j.a.set(this.cover, { visibility: "hidden", display: "none" }), j.a.to(document.getElementById(this.wrapperID), { duration: 0.6, opacity: 1, ease: d.e.easeOut }), gEvent.emit("T_IN_END");
                            },
                        },
                    ]) && Ri(t.prototype, i),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    e
                );
            })())(),
            Ai = ((r = i(164)), i.n(r));
        function Di(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var Ii = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "Gnav"),
                    (this.breadcrumb = {
                        about: ["About us", "わたしたちについて"],
                        demo: ["VR Solution", "VRデモお申し込み"],
                        contact_info: ["Document request ", "資料ダウンロード"],
                        contact_kamiapp: ["Document request ", "資料ダウンロード"],
                        contact_inquiry: ["Contact", "お問い合わせ"],
                        service: ["Service", "サービス"],
                        product: ["Product", "商品"],
                        solution: ["Solution", "導入シーン"],
                        case: ["Case Study", "事例紹介"],
                        search: ["Search", "検索結果"],
                        "solution-search": ["Search", "検索結果"],
                        "case-search": ["Search", "検索結果"],
                    }),
                    this.init();
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            (this.isStart = !1),
                                (this.isOpenNav = !1),
                                (this.isBc = !1),
                                (this.header = document.getElementById("c-header")),
                                (this.nav = document.getElementById("c-nav")),
                                (this.navPages = this.nav.querySelector(".c-nav__wrapCon--black > nav")),
                                (this.bc = this.header.querySelector(".c-header__bc")),
                                (this.bcList = this.header.querySelectorAll(".c-header__bc > li")),
                                (this.btnToggle = document.getElementById("c-navTrigger")),
                                this.btnToggle.addEventListener("click", this.toggle.bind(this)),
                                (this.page = document.getElementById("l-scroll-frame"));
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            (this.state = l.getCurrentState()),
                                (this.isStart = !0),
                                this.header.classList.add("c-header--show"),
                                j.a.fromTo(this.header, { visibility: "visible", opacity: 0 }, { duration: 0.6, opacity: 1, ease: d.e.easeOut }),
                                this.setting();
                        },
                    },
                    {
                        key: "update",
                        value: function () {
                            (this.state = l.getCurrentState()), (this.isStart = !0), this.setting();
                        },
                    },
                    {
                        key: "setting",
                        value: function () {
                            this.bcSetting(), "top" === this.state ? this.topSetting() : this.underSetting();
                        },
                    },
                    {
                        key: "bcSetting",
                        value: function () {
                            var e = location.pathname.split("/")[1];
                            (this.isBc = !1), e && this.breadcrumb[e] && ((this.isBc = !0), (this.bcList[0].textContent = this.breadcrumb[e][0]), (this.bcList[1].textContent = this.breadcrumb[e][1]));
                        },
                    },
                    {
                        key: "bcShow",
                        value: function () {
                            this.isBc && j.a.fromTo(this.bc, { visibility: "visible", opacity: 0, y: 30 }, { delay: 0.1, duration: 0.6, opacity: 1, y: 0, ease: d.e.easeOut });
                        },
                    },
                    {
                        key: "bcHide",
                        value: function () {
                            j.a.to(this.bc, { duration: 0.6, opacity: 0, y: 30, ease: d.e.easeOut });
                        },
                    },
                    {
                        key: "urlAnchor",
                        value: function () {
                            var e = new Ai.a(location.search).query(!0);
                            this.gotoAnchor(e.anchor);
                        },
                    },
                    {
                        key: "topSetting",
                        value: function () {
                            this.bcHide(), this.urlAnchor();
                        },
                    },
                    {
                        key: "underSetting",
                        value: function () {
                            this.bcShow(), this.urlAnchor();
                        },
                    },
                    {
                        key: "toggle",
                        value: function (e) {
                            e.preventDefault(), this.isOpenNav ? this.closeNav() : ((this.isOpenNav = !0), this.openNav());
                        },
                    },
                    {
                        key: "gotoAnchor",
                        value: function (e) {
                            (e = document.getElementById(e)) && ((e = l.getOffsetTop(e).top), j.a.to(window, 0.6, { scrollTo: { y: e, autoKill: !1 }, ease: d.e.easeOut }));
                        },
                    },
                    {
                        key: "openNav",
                        value: function () {
                            this.header.classList.add("c-header--opennav"),
                                j.a.fromTo(this.nav, { display: "block", opacity: 0 }, { duration: 0.7, opacity: 1, ease: d.e.easeOut }),
                                U.xStopScroll(),
                                this.resize(),
                                st.registerObserver(this.name, this.resize.bind(this)),
                                (this.ps = new ft.a(this.nav, { wheelSpeed: 1, wheelPropagation: !0, minScrollbarLength: 10, suppressScrollX: !0 })),
                                (this.nav.scrollTop = 0);
                        },
                    },
                    {
                        key: "closeNav",
                        value: function () {
                            this.isOpenNav &&
                                (U.xStartScroll(),
                                st.cancelObserver(this.name),
                                this.ps.destroy(),
                                (this.ps = null),
                                j.a.to(this.nav, { duration: 0.7, opacity: 0, ease: d.e.easeOut, onComplete: this.closeNavComp.bind(this) }),
                                this.header.classList.remove("c-header--opennav"));
                        },
                    },
                    {
                        key: "closeNavComp",
                        value: function () {
                            (this.isOpenNav = !1), (this.nav.style.display = "none");
                        },
                    },
                    {
                        key: "resize",
                        value: function () {
                            var e = window.innerHeight,
                                t = this.navPages.clientHeight + 180;
                            "pc" === l.isDevice() ? (this.nav.querySelector(".c-nav__wrap").style.height = t < e ? "" : "".concat(t, "px")) : (this.nav.querySelector(".c-nav__wrap").style.height = "auto"), this.ps && this.ps.update();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.closeNav(), this.bcHide();
                        },
                    },
                ]) && Di(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function qi(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        i(161);
        var Ni = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "Gside"), (this.defaults = { contact: { url: "/contact_inquiry/", target: "_self" }, download: { url: "/contact_info/", target: "_self" } }), this.init();
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            (this.state = l.getCurrentState()),
                                (this.isStart = !1),
                                (this.isShow = !1),
                                (this.isBottom = !1),
                                (this.posBottom = 0),
                                (this.el = document.getElementById("c-side")),
                                (this.fkv = document.getElementById("c-fkv")),
                                (this.btnChat = this.el.querySelector(".c-side__chat")),
                                (this.btnContact = this.el.querySelector(".c-side__contact")),
                                (this.btnDownload = this.el.querySelector(".c-side__download")),
                                (this.observer = new IntersectionObserver(this.stopScroll.bind(this), { root: null, rootMargin: "0px 0px", threshold: 0 })),
                                this.observer.observe(this.fkv),
                                this.setUrl(),
                                this.btnChat.addEventListener("click", this.openChat.bind(this));
                        },
                    },
                    {
                        key: "openChat",
                        value: function (e) {
                            e.preventDefault(), document.getElementById("ricoh-smartchat-launcher").click();
                        },
                    },
                    {
                        key: "setUrl",
                        value: function () {
                            var e;
                            (this.jsonTag = document.getElementById("json-contact-url")),
                                (this.data = {}),
                                this.jsonTag
                                    ? ((e = JSON.parse(this.jsonTag.textContent)),
                                      (this.data = {
                                          contact: { url: e.contact || this.defaults.contact, target: e.contact ? "_blank" : "_self" },
                                          download: { url: e.download || this.defaults.download, target: e.download ? "_blank" : "_self" },
                                      }))
                                    : (this.data = Object.assign({}, this.defaults)),
                                (this.btnContact.href = this.data.contact.url),
                                (this.btnContact.target = this.data.contact.target),
                                (this.btnDownload.href = this.data.download.url),
                                (this.btnDownload.target = this.data.download.target);
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            (this.isStart = !0), this.setting();
                        },
                    },
                    {
                        key: "stopScroll",
                        value: function (e) {
                            var t = this;
                            e.forEach(function (e, i) {
                                e.target, e.isIntersecting ? t.isBottom || ((t.isBottom = !0), t.el.classList.add("c-side--hide")) : t.isBottom && ((t.isBottom = !1), t.el.classList.remove("c-side--hide"));
                            });
                        },
                    },
                    {
                        key: "setting",
                        value: function () {
                            "top" === this.state ? this.topSetting() : this.underSetting();
                        },
                    },
                    {
                        key: "topSetting",
                        value: function () {
                            (this.topKV = document.getElementById("p-topKV")),
                                (this.observerTop = new IntersectionObserver(this.scroll.bind(this), { root: null, rootMargin: "-20% 0px", threshold: 0 })),
                                this.observerTop.observe(this.topKV);
                        },
                    },
                    {
                        key: "scroll",
                        value: function (e) {
                            var t = this;
                            e.forEach(function (e, i) {
                                e.target, e.isIntersecting ? t.hide() : t.show();
                            });
                        },
                    },
                    {
                        key: "underSetting",
                        value: function () {
                            this.el.classList.add("c-side--show");
                        },
                    },
                    {
                        key: "show",
                        value: function () {
                            this.isShow || ((this.isShow = !0), this.el.classList.add("c-side--show"));
                        },
                    },
                    {
                        key: "hide",
                        value: function () {
                            this.isShow && ((this.isShow = !1), this.el.classList.remove("c-side--show"));
                        },
                    },
                    {
                        key: "update",
                        value: function () {
                            (this.state = l.getCurrentState()), (this.isStart = !0), this.setUrl(), this.setting();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.el.classList.remove("c-side--show"), this.observerTop && (this.observerTop.unobserve(this.topKV), this.observerTop.disconnect()), delete this.observerTop, delete this.topKV;
                        },
                    },
                ]) && qi(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function Bi(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var Ui = (function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "FooterKV"), (this.size = { video: { h: 9, w: 16 }, pc: { frameH: 680 }, sp: { frameH: 340 } }), this.init();
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            (this.state = l.getCurrentState()),
                                (this.isStart = !1),
                                (this.el = document.getElementById("c-fkv")),
                                (this.copy = this.el.querySelector(".c-fkv__titleCopy")),
                                (this.frame = this.el.querySelector(".c-fkv__bg")),
                                (this.video = this.el.querySelector("video")),
                                (this.video.muted = !0),
                                (this.video.loop = !0),
                                (this.video.src = this.video.getAttribute("data-src")),
                                (this.pageTop = this.el.querySelector(".c-pagetop")),
                                this.pageTop.addEventListener("click", this.toTop.bind(this)),
                                (this.observer = new IntersectionObserver(this.scroll.bind(this), { root: null, rootMargin: "0px 0px", threshold: 0 })),
                                this.observer.observe(this.el),
                                this.observer.observe(this.copy),
                                this.resize(),
                                st.registerObserver(this.name, this.resize.bind(this));
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            this.isStart = !0;
                        },
                    },
                    { key: "videoEvent", value: function (e) {} },
                    {
                        key: "scroll",
                        value: function (e) {
                            var t = this;
                            e.forEach(function (e, i) {
                                var n = e.target;
                                "c-fkv" === n.id ? t.showFooter(e.isIntersecting) : "c-fkv__titleCopy" === n.id && t.showCopy(e.isIntersecting);
                            });
                        },
                    },
                    {
                        key: "showFooter",
                        value: function (e) {
                            e ? (this.el.classList.add("c-fkv--show"), this.video.play()) : (this.el.classList.remove("c-fkv--show"), this.video.pause());
                        },
                    },
                    {
                        key: "showCopy",
                        value: function (e) {
                            e ? this.el.classList.add("c-fkv--showCopy") : this.el.classList.remove("c-fkv--showCopy");
                        },
                    },
                    {
                        key: "toTop",
                        value: function () {
                            l.scrollToY(0, 0.6);
                        },
                    },
                    {
                        key: "resize",
                        value: function () {
                            var e = ("pc" === l.isDevice() ? this.size.pc : this.size.sp).frameH,
                                t = window.innerWidth,
                                i = e,
                                n = ((i = Math.min(this.size.video.w / t, this.size.video.h / i)), this.size.video.w / i),
                                o = ((t = (t - n) / 2), (e = (e - (i = this.size.video.h / i)) / 2), this.frame.style);
                            (o.position = "absolute"), (o.left = "".concat(t, "px")), (o.top = "".concat(e, "px")), (o.width = "".concat(n, "px")), (o.height = "".concat(i, "px"));
                        },
                    },
                    { key: "update", value: function () {} },
                    {
                        key: "destroy",
                        value: function () {
                            this.el.classList.remove("c-fkv--show"), this.video.pause();
                        },
                    },
                ]) && Bi(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })();
        function zi(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        function Hi(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        new ((function () {
            function e() {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                (this.name = "CmnPjax"),
                    ((window.$CmnPjax = this).isLinking = !1),
                    (this.isTransition = !1),
                    (this.wrapID = "c-pageData"),
                    (this.wrapClass = ".c-pageData__wrap"),
                    (this.currentHTML = document.documentElement.innerHTML),
                    (this.currentModule = null),
                    (this.oldPage = null),
                    (this.newPage = null),
                    (this.namespace = this.namespaceNext = document.querySelector(this.wrapClass).getAttribute("data-namespace")),
                    (document.getElementById("l-scroll-frame").style.visibility = "hidden"),
                    yi.enable,
                    gEvent.once("LOADING_HIDE", this.loadingHide.bind(this)),
                    gEvent.once("LOADING_HIDE_COMP", this.loadingHideComp.bind(this)),
                    gEvent.once("DOM_LOAD", this.init.bind(this)),
                    gEvent.once("WIN_LOAD", this.loaded.bind(this)),
                    this.loading();
            }
            var t, i;
            return (
                (t = e),
                (i = [
                    {
                        key: "loading",
                        value: function () {
                            (this.currentModule = this.getModule(this.namespaceNext)), this.currentModule ? this.currentModule.init() : gEvent.emit("MODULE_READY");
                        },
                    },
                    {
                        key: "loadingHide",
                        value: function () {
                            this.currentModule && this.currentModule.beforeStart();
                        },
                    },
                    {
                        key: "loadingHideComp",
                        value: function () {
                            this.currentModule && this.currentModule.start(), "top" !== l.getCurrentState() ? _glMain.pageStart("under") : _glMain.pageStart("top");
                        },
                    },
                    {
                        key: "init",
                        value: function () {
                            (this.commonClass = { Gnav: new Ii(), Gside: new Ni(), FooterKV: new Ui(), AlternativeScroll: U }),
                                document.addEventListener("click", this.onLink.bind(this), !0),
                                window.addEventListener("popstate", this.onPopState.bind(this)),
                                gEvent.on("T_OUT", this.onTransionOut.bind(this)),
                                gEvent.on("T_OUT_END", this.onTransionOutEnd.bind(this)),
                                gEvent.on("T_IN", this.onTransionIn.bind(this)),
                                gEvent.on("T_IN_END", this.onTransionInEnd.bind(this)),
                                (document.body.style.opacity = 1);
                        },
                    },
                    {
                        key: "loaded",
                        value: function () {
                            this.changeState(location.href, !0), gEvent.emit("PJAX_READY"), this.commonClass.AlternativeScroll.loadedStart();
                        },
                    },
                    {
                        key: "update",
                        value: function () {
                            for (var e in this.commonClass) this.commonClass[e].update();
                        },
                    },
                    { key: "topSetting", value: function () {} },
                    {
                        key: "initJS",
                        value: function () {
                            (this.namespace = this.namespaceNext), (this.currentModule = this.getModule(this.namespace)), this.currentModule && this.currentModule.init();
                        },
                    },
                    {
                        key: "destroyJS",
                        value: function () {
                            this.currentModule && this.currentModule.destroy();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            for (var e in this.commonClass) this.commonClass[e].destroy();
                        },
                    },
                    {
                        key: "glReady",
                        value: function () {
                            gEvent.emit("GL_READY");
                        },
                    },
                    {
                        key: "glScrollStart",
                        value: function () {
                            this.commonClass.AlternativeScroll.fixed(!1),
                                this.commonClass.Gnav.start(),
                                this.commonClass.Gside.start(),
                                j.a.fromTo(document.getElementById("l-scroll-frame"), { visibility: "visible", opacity: 0 }, { duration: 0.6, opacity: 1, ease: d.e.easeOut }),
                                gEvent.emit("GL_SCROLL_START");
                        },
                    },
                    {
                        key: "onTransionOut",
                        value: function () {
                            _glMain.pageEnd(), this.destroyJS(), this.destroy();
                        },
                    },
                    {
                        key: "onTransionOutEnd",
                        value: function () {
                            window.scrollTo(0, 0),
                                document.getElementById(this.wrapID).removeChild(this.oldPage),
                                (this.newPage.style.visibility = "visible"),
                                (this.newPage.style.height = ""),
                                j.a.set(document.body, { className: "-=page-".concat(this.namespace) }),
                                j.a.set(document.body, { className: "+=page-".concat(this.namespaceNext) });
                        },
                    },
                    {
                        key: "onTransionIn",
                        value: function () {
                            this.initJS(), this.currentModule && j.a.delayedCall(0.32, this.currentModule.beforeStart.bind(this.currentModule)), this.commonClass.AlternativeScroll.xStartScroll(!0);
                        },
                    },
                    {
                        key: "onTransionInEnd",
                        value: function () {
                            (this.isTransition = !1),
                                this.currentModule && this.currentModule.start(),
                                "top" !== l.getCurrentState() ? _glMain.pageStart("under") : _glMain.pageStart("top"),
                                this.update(),
                                location.href !== yi.get() && location.pathname !== yi.get() && this.changeState(location.href);
                        },
                    },
                    {
                        key: "onLink",
                        value: function (e) {
                            if (this.isTransition) return e.preventDefault();
                            this.isLinking = !0;
                            for (var t = e.target; t && !this.getHref(t); ) t = t.parentNode;
                            var i = this.getHref(t);
                            return !t || !i || this.checkMyself(t, i) || this.checkExternal(t, i)
                                ? (this.isLinking = !1)
                                : location.href.replace(/\/$/, "") === t.href
                                ? (e.preventDefault(), e.stopPropagation(), (this.isLinking = !1))
                                : (e.stopPropagation(), e.preventDefault(), this.changeState(i), void (this.isLinking = !1));
                        },
                    },
                    {
                        key: "checkExternal",
                        value: function (e, t) {
                            return (
                                !(!e.target || "_blank" !== e.target) ||
                                (/\.(xlsx?|docx?|pptx?|pdf|jpe?g|png|gif|svg)/.test(t.toLowerCase())
                                    ? (e.setAttribute("target", "_blank"), !0)
                                    : -1 < t.indexOf("/wp-admin") || -1 < t.indexOf("/wp-login") || !!e.classList.contains("no-pjax") || location.protocol !== e.protocol || location.hostname !== e.hostname || void 0)
                            );
                        },
                    },
                    {
                        key: "checkMyself",
                        value: function (e, t) {
                            var i = location.protocol + "//" + location.hostname + location.pathname + location.search;
                            if (0 === t.replace(i, "").indexOf("#")) return !0;
                        },
                    },
                    {
                        key: "goto",
                        value: function (e) {
                            this.isTransition = !0;
                            var t = fi.a.when(this.loadURL(e));
                            ji.init(t),
                                t.done(this.newPageLoaded.bind(this)),
                                t.fail(function (t) {
                                    location.href = e;
                                });
                        },
                    },
                    {
                        key: "loadURL",
                        value: function (e) {
                            var t = fi.a.Deferred(),
                                i = this;
                            return (
                                fi.a
                                    .ajax({ type: "GET", url: e, timeout: 1e4, cache: !0 })
                                    .done(function (e, n, o) {
                                        (e = i.newPageReady(e)), t.resolve(e);
                                    })
                                    .fail(function (e, i, n) {
                                        t.reject("HTTP error: " + i);
                                    }),
                                t.promise()
                            );
                        },
                    },
                    {
                        key: "newPageReady",
                        value: function (e) {
                            this.currentHTML = e;
                            var t = document.createElement("div"),
                                i = (e = (t.innerHTML = e).match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0]).match(/<meta name="description" content="([^<]*)">/i),
                                n = e.match(/<meta property="og:title" content="([^<]*)"( \/)?>/i),
                                o = e.match(/<meta property="og:url" content="([^<]*)"( \/)?>/i),
                                r =
                                    ((e = e.match(/<meta property="og:image" content="([^<]*)"( \/)?>/i)),
                                    (n =
                                        ((document.title = t.querySelector("title").textContent),
                                        null !== i && document.querySelector("meta[name='description']").setAttribute("content", i[1]),
                                        null !== n && document.querySelector("meta[property='og:title']").setAttribute("content", n[1]),
                                        null !== i && document.querySelector("meta[property='og:description']").setAttribute("content", i[1]),
                                        null !== o && document.querySelector("meta[property='og:url']").setAttribute("content", o[1]),
                                        null !== e && document.querySelector("meta[property='og:image']").setAttribute("content", e[1]),
                                        t.querySelector(this.wrapClass))),
                                    (this.namespaceNext = n.getAttribute("data-namespace")),
                                    n.getElementsByTagName("script"));
                            this.loadScripts = [];
                            for (var s = r.length - 1; 0 <= s; s--) "application/json" !== r[s].getAttribute("type") && (this.loadScripts.unshift(r[s].cloneNode(!0)), r[s].remove());
                            (n.style.visibility = "hidden"), (n.style.height = 0), document.getElementById(this.wrapID).appendChild(n);
                            for (var a = document.getElementById("add-script"); a.firstChild; ) a.removeChild(a.firstChild);
                            return (this.loadScriptCounter = 0), this.loadScriptOrder(), n;
                        },
                    },
                    {
                        key: "loadScriptOrder",
                        value: function () {
                            var e, t;
                            this.loadScripts.length > this.loadScriptCounter &&
                                ((t = (e = this.loadScripts[this.loadScriptCounter]).getAttribute("type")),
                                this.loadScriptCounter++,
                                (null !== t && "text/javascript" !== t) ||
                                    (e.src
                                        ? ((t = document.createElement("script")).addEventListener("load", this.loadScriptOrder.bind(this)), (t.src = e.src), (t.load = function () {}), document.getElementById("add-script").appendChild(t))
                                        : (((t = document.createElement("script")).innerHTML = e.textContent), document.getElementById("add-script").appendChild(t))),
                                this.loadScriptOrder());
                        },
                    },
                    {
                        key: "newPageLoaded",
                        value: function (e) {
                            (this.oldPage = document.querySelector(this.wrapClass)), (this.newPage = e);
                        },
                    },
                    {
                        key: "getModule",
                        value: function (e) {
                            return e in l.$PAGE_MODULE ? l.$PAGE_MODULE[e] : l.$PAGE_MODULE.common;
                        },
                    },
                    {
                        key: "changeState",
                        value: function (e, t) {
                            t ? yi.replaceState(e) : (yi.changeState(e), this.goto(e));
                        },
                    },
                    {
                        key: "addState",
                        value: function (e, t) {
                            yi.changeState(e);
                        },
                    },
                    {
                        key: "onPopState",
                        value: function (e) {
                            e.state && (e.preventDefault(), this.isTransition || ((e = e.state.url), yi.add(e), this.goto(e)));
                        },
                    },
                    {
                        key: "setCache",
                        value: function (e, t) {
                            this.cache[e] = t;
                        },
                    },
                    {
                        key: "getCache",
                        value: function (e) {
                            return this.cache[e];
                        },
                    },
                    {
                        key: "getHref",
                        value: function (e) {
                            if (e) return e.getAttribute && "string" == typeof e.getAttribute("xlink:href") ? e.getAttribute("xlink:href") : "string" == typeof e.href && e.getAttribute("href") ? e.href : void 0;
                        },
                    },
                ]) && zi(t.prototype, i),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
            );
        })())(),
            new ((function () {
                function e() {
                    if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                    (this.name = "CmnLoading"), (this.isModuleReady = !1), (this.isPjaxReady = !1), (this.isGlReady = !1), (this.isEnd = !1), this.init();
                }
                var t, i;
                return (
                    (t = e),
                    (i = [
                        {
                            key: "init",
                            value: function () {
                                (this.el = document.getElementById("c-loading")),
                                    gEvent.once("PJAX_READY", this.onPjaxReady.bind(this)),
                                    gEvent.once("MODULE_READY", this.onModuleReady.bind(this)),
                                    gEvent.once("GL_READY", this.onGlReady.bind(this));
                            },
                        },
                        {
                            key: "onModuleReady",
                            value: function () {
                                (this.isModuleReady = !0), this.checkReady();
                            },
                        },
                        {
                            key: "onPjaxReady",
                            value: function () {
                                (this.isPjaxReady = !0), this.checkReady();
                            },
                        },
                        {
                            key: "onGlReady",
                            value: function () {
                                (this.isGlReady = !0), this.checkReady();
                            },
                        },
                        {
                            key: "checkReady",
                            value: function () {
                                this.isModuleReady && this.isPjaxReady && this.isGlReady && this.ready();
                            },
                        },
                        {
                            key: "ready",
                            value: function () {
                                this.hide();
                            },
                        },
                        {
                            key: "hide",
                            value: function () {
                                this.isEnd || (j.a.to(this.el, { duration: 1, opacity: 0, display: "none", ease: d.a.easeOut, onComplete: this.hideComp.bind(this) }), gEvent.emit("LOADING_HIDE"));
                            },
                        },
                        {
                            key: "hideComp",
                            value: function () {
                                this.isEnd || ((this.isEnd = !0), gEvent.emit("LOADING_HIDE_COMP"), requestAnimationFrame(this.destroy.bind(this)));
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                for (var e in this) delete this[e];
                            },
                        },
                    ]) && Hi(t.prototype, i),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    e
                );
            })())(),
            t()();
        var $i = ["/cms_dir/wp-content/themes/rdc/assets/img/common/ogp.png"];
        new Promise(function (e, t) {
            new Mi($i, e);
        }).then(function (e) {
            (gRICOH.isLoaded = !0), gEvent.emit("IMG_PRELOAD");
        }),
            document.addEventListener(
                "DOMContentLoaded",
                function () {
                    var e = document.createElement("script"),
                        t = ((e.src = "https://www.youtube.com/iframe_api"), document.getElementsByTagName("script")[0]);
                    t.parentNode.insertBefore(e, t), gEvent.emit("DOM_LOAD");
                },
                !1
            ),
            window.addEventListener(
                "load",
                function () {
                    gEvent.emit("WIN_LOAD");
                },
                !1
            ),
            window.addEventListener("unload", function () {}, !1),
            (window.onYouTubeIframeAPIReady = function () {
                window.gRICOH.isReadyYT = !0;
            });
    },
});
