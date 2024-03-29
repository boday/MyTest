var _glMain,
    glMain = (function () {
        "use strict";
        function t() {
            (this._resizeList = []),
                (this._resizeTimer = null),
                (this._world = null),
                (this._enterFrameList = []),
                (this.isHalf = !1),
                (this._fps = 0),
                (this._setCount = 0),
                (this.isFirstView = !0),
                (this.isFirstScroll = !0),
                (this._sceneTimer = { value: 0 }),
                (this.isTop = !1),
                (this.isBottomChange = !0),
                (this.isTest = !1);
        }
        return (
            (t.prototype.init = function () {
                this.setUA();
            }),
            (t.prototype.setUAComp = function () {
                "/" == window.location.pathname ? (this.isTop = !0) : (this.isTop = !1),
                    "/contact_inquiry/" == window.location.pathname || "/contact_info/" == window.location.pathname || "/demo/" == window.location.pathname ? (this.isBottomChange = !1) : (this.isBottomChange = !0),
                    (this._spHeight = Math.max(window.innerWidth, window.innerHeight)),
                    window.addEventListener("resize", function () {
                        _glMain.onResize();
                    }),
                    (this.isGLReady = !1),
                    (this._parts = new glPartsMng()),
                    setTimeout(function () {
                        _glMain._parts.firstLoad();
                    }, 500),
                    (this._scroll = new glScroll()),
                    this._scroll.contentsStart(),
                    this._scroll.pageStart(),
                    this.animationStart(),
                    (this._top = new glTop()),
                    setTimeout(function () {
                        $CmnPjax.glReady(), $CmnPjax.glScrollStart();
                    }, 200);
            }),
            (t.prototype.partsLoadComp = function () {
                this.createWorld();
            }),
            (t.prototype.createWorld = function () {
                (this._videoMng = new glVideoMng()), this._videoMng.init();
            }),
            (t.prototype.setupVideo = function () {
                (this._world = new glWorld()), this._world.init();
            }),
            (t.prototype.setupWorld = function () {
                this.contentsStart();
            }),
            (t.prototype.contentsStart = function () {
                var t;
                (this.isGLReady = !0),
                    this.onResize(),
                    this._world.contentsStart(),
                    this.isTop
                        ? _glMain._world._objMng.setFirstView()
                        : (this._world._objMng.setUnderStart(),
                          setTimeout(function () {
                              _glMain._world._objMng.changeForm();
                          }, 400)),
                    (this._glCov = document.querySelector(".gl-loader")),
                    "none" != this._glCov.style.display &&
                        ((t = this),
                        gsap.to(this._glCov, 1.2, {
                            delay: 1.5,
                            opacity: 0,
                            ease: Power3.easeOut,
                            onComplete: function () {
                                t._glCov.style.display = "none";
                            },
                        }));
            }),
            (t.prototype.pageStart = function (t) {
                if (null != t && null != t) {
                    if ("top" == t)
                        return (
                            (this.isTop = !0),
                            "/contact_inquiry/" == window.location.pathname || "/contact_info/" == window.location.pathname || "/demo/" == window.location.pathname ? (this.isBottomChange = !1) : (this.isBottomChange = !0),
                            void (this.isFirstView ? this.firstStart() : this.pageStart2nd())
                        );
                    if ("under" == t)
                        return (
                            (this.isTop = !1),
                            "/contact_inquiry/" == window.location.pathname || "/contact_info/" == window.location.pathname || "/demo/" == window.location.pathname ? (this.isBottomChange = !1) : (this.isBottomChange = !0),
                            void (this.isFirstView ? this.underStart() : this.pageStart2nd())
                        );
                }
                "/" == window.location.pathname ? (this.isTop = !0) : (this.isTop = !1),
                    "/contact_inquiry/" == window.location.pathname || "/contact_info/" == window.location.pathname || "/demo/" == window.location.pathname ? (this.isBottomChange = !1) : (this.isBottomChange = !0),
                    this.isTop ? (this.isFirstView ? this.firstStart() : this.pageStart2nd()) : this.isFirstView ? this.underStart() : this.pageStart2nd();
            }),
            (t.prototype.pageStart2nd = function () {
                this.isTop ? (this.topStart(), this.isGLReady && this._world._objMng.cylinderToBox()) : this.isGLReady && this._world._objMng.boxToCylinder(), this.isGLReady && this._scroll.pageStart();
            }),
            (t.prototype.pageEnd = function () {
                this._top.pageEnd(), this.isGLReady && (this._scroll.pageEnd(), this._world.pageEnd());
            }),
            (t.prototype.scrollStart = function () {
                this.isFirstScroll && (this.isFirstScroll = !1);
            }),
            (t.prototype.firstStart = function () {
                this._top.firstStart(), this.isGLReady && (this._scroll.firstStart(), this._world._objMng.firstStart());
                var t = this;
                gsap.killTweensOf(this._sceneTimer),
                    gsap.to(this._sceneTimer, {
                        duration: 0.5,
                        value: 1,
                        onComplete: function () {
                            t.setFirstView();
                        },
                    });
            }),
            (t.prototype.setFirstView = function () {
                (this.isFirstView = !1), this._top.setFirstView(), this.isGLReady && (this._scroll.setFirstView(), this._world._objMng.setFirstView()), this.topStart();
            }),
            (t.prototype.underStart = function () {
                (this.isFirstView = !1),
                    this.isGLReady &&
                        (this._world._objMng.setUnderStart(),
                        this._scroll.setUnderStart(),
                        setTimeout(function () {
                            _glMain._world._objMng.changeForm();
                        }, 550));
            }),
            (t.prototype.topStart = function () {
                this._top.topStart();
            }),
            (t.prototype.addEnterFrame = function (t, e) {
                e = { _target: t, _function: e };
                this._enterFrameList.push(e);
            }),
            (t.prototype.removeEnterFrame = function (t) {
                this.isFrameLock = !0;
                for (var e = this._enterFrameList.length, i = -1, s = 0; s < e; s++)
                    if (this._enterFrameList[s]._target === t) {
                        i = s;
                        break;
                    }
                -1 !== i && this._enterFrameList.splice(i, 1), (this.isFrameLock = !1);
            }),
            (t.prototype.animationStart = function () {
                void 0 !== window.requestAnimationFrame ? _glMain.animationType1() : _glMain.animationType2();
            }),
            (t.prototype.animationType1 = function () {
                this.animationLoop(),
                    (this._anim = requestAnimationFrame(function () {
                        _glMain.animationType1();
                    }));
            }),
            (t.prototype.animationType2 = function () {
                this.animationLoop(),
                    (this._anim = setTimeout(function () {
                        _glMain.animationType2b();
                    }, 20));
            }),
            (t.prototype.animationType2b = function () {
                _glMain.animationType2();
            }),
            (t.prototype.animationLoop = function () {
                if (!this.isFrameLock)
                    if (this.isHalf && (this._fps++, 1 < this._fps)) this._fps = 0;
                    else for (var t = this._enterFrameList.length, e = 0; e < t; e++) void 0 !== this._enterFrameList[e] && this._enterFrameList[e]._target[this._enterFrameList[e]._function]();
            }),
            (t.prototype.setUA = function () {
                var t = document.createElement("canvas").getContext("experimental-webgl");
                (this._device = "PC"), (this._version = 0), (this._webGL = !!window.WebGLRenderingContext && !!t);
                var e = Math.min(window.screen.width, window.screen.height),
                    t = e / Math.max(window.screen.width, window.screen.height);
                (this._device = e < 600 ? "SP" : 0.68 <= t && t <= 0.76 ? "TB" : "PC"), this._webGL, _glMain.setUAComp();
            }),
            (t.prototype.addResize = function (t) {
                this._resizeList.push(t);
            }),
            (t.prototype.removeResize = function (t) {
                for (var e = [], i = 0; i < this._resizeList.length; i++) this._resizeList[i] !== t && e.push(this._resizeList[i]);
                for (this._resizeList = [], i = 0; i < e.length; i++) this._resizeList.push(e[i]);
            }),
            (t.prototype.onResize = function () {
                this.onResizeFunc(), this._resizeTimer && (clearTimeout(this._resizeTimer), (this._resizeTimer = null));
                var t = this;
                this._resizeTimer = setTimeout(function () {
                    t.onResizeFunc();
                }, 1e3);
            }),
            (t.prototype.onResizeFunc = function () {
                for (var t = 0; t < this._resizeList.length; t++) this._resizeList[t].onResize();
            }),
            t
        );
    })();
window.addEventListener("load", function () {
    (_glMain = new glMain()).init(), (window.onunload = function () {});
});
var glModelObj = (function () {
        "use strict";
        function t(t) {
            (this._parent = t), (this._bc = new glBeacon()), (this._transBC = new glBeacon()), (this._formType = 0), (this._formTurn = 1), (this._formSpeed = { a: 1, b: 0 }), (this._yMax = 100), (this._yMin = -100);
        }
        return (
            (t.prototype.init = function () {
                (this._g = _glMain._parts.getModel("cube003_h_box_tri.obj")), (this._g2 = _glMain._parts.getModel("cube003_h_cylinder_tri2.obj")), (this._posList1 = []);
                for (var t = 0; t < this._g.attributes.position.array.length; t++) this._posList1.push(this._g.attributes.position.array[t]);
                this._posList2 = [];
                for (t = 0; t < this._g2.attributes.position.array.length; t++) this._posList2.push(this._g2.attributes.position.array[t]);
                for (var e = [], i = [], t = 0; t < this._g2.attributes.position.array.length; t += 3) e.push(this._g2.attributes.position.array[t + 1]), i.push(this._g2.attributes.position.array[t + 1] + 0.7 * Math.random());
                e.sort(function (t, e) {
                    return t < e ? -1 : e < t ? 1 : 0;
                }),
                    (this._yMin = Math.floor(e[0]) - 1.5),
                    (this._yMax = Math.ceil(e[e.length - 1]) + 1.5);
                var s = new Float32Array(i);
                this._g.addAttribute("yPos", new THREE.BufferAttribute(s, 1)),
                    (this._shader = {
                        vertexShader: _glMain._parts.getShader("shader/obj_vtx.js"),
                        fragmentShader: _glMain._parts.getShader("shader/obj_frg.js"),
                        uniforms: { texture: { value: null }, noise: { value: _glMain._world._noise._render.texture }, alpha: { value: 1 }, yLimit: { value: this._yMax }, yLimit2: { value: this._yMin }, isShow: { value: 1 } },
                        transparent: !0,
                        flatShading: !0,
                        wireframe: !1,
                    }),
                    (this._m = new THREE.ShaderMaterial(this._shader)),
                    (this._mesh = new THREE.Mesh(this._g, this._m)),
                    (this._mesh.scale.x = 500),
                    (this._mesh.scale.y = this._mesh.scale.z = this._mesh.scale.x),
                    this._parent._root._root.add(this._mesh);
            }),
            (t.prototype.contentsStart = function () {
                (this._mesh.visible = !1), this._bc.clear(), this._bc.set(this, "enterFrame");
            }),
            (t.prototype.enterFrame = function () {}),
            (t.prototype.changeForm = function (t) {
                (this._mesh.visible = !0),
                    (this._formType = t),
                    gsap.killTweensOf(this._formSpeed),
                    (this._formSpeed.a = 1),
                    (this._formSpeed.b = 0),
                    this._transBC.clear(),
                    1 == this._formType
                        ? (gsap.killTweensOf(this._shader.uniforms.alpha), (this._shader.uniforms.alpha.value = 1), this._transBC.set(this, "transFrame1"), gsap.to(this._formSpeed, { duration: 0.6, a: 0.9, b: 0.1, ease: Power3.easeIn }))
                        : 0 == this._formType && (this._transBC.set(this, "transFrame2"), gsap.to(this._formSpeed, { duration: 0.6, a: 0.8, b: 0.2, ease: Power3.easeIn }));
                var e = (-179.9 * this._formTurn * Math.PI) / 180,
                    i = this;
                gsap.killTweensOf(this._mesh.rotation),
                    gsap.to(this._mesh.rotation, {
                        duration: 1.4,
                        y: e,
                        ease: Power3.easeInOut,
                        onComplete: function () {
                            e < (-358 * Math.PI) / 180 && (i._mesh.rotation.y = 0);
                        },
                    }),
                    this._formTurn++,
                    3 <= this._formTurn && (this._formTurn = 1);
            }),
            (t.prototype.transFrame1 = function () {
                for (var t = this._g.attributes.position.array, e = this._posList2, i = 0; i < t.length; i += 3)
                    (t[i] = t[i] * this._formSpeed.a + e[i] * this._formSpeed.b), (t[i + 1] = t[i + 1] * this._formSpeed.a + e[i + 1] * this._formSpeed.b), (t[i + 2] = t[i + 2] * this._formSpeed.a + e[i + 2] * this._formSpeed.b);
                if (((this._g.attributes.position.needsUpdate = !0), this._g.computeVertexNormals(), Math.abs(t[t.length - 1] - e[e.length - 1]) < 0.001)) {
                    for (i = 0; i < t.length; i += 3) (t[i] = e[i]), (t[i + 1] = e[i + 1]), (t[i + 2] = e[i + 2]);
                    (this._g.attributes.position.needsUpdate = !0), this._g.computeVertexNormals(), this._transBC.clear();
                }
            }),
            (t.prototype.transFrame2 = function () {
                for (var t = this._g.attributes.position.array, e = this._posList1, i = 0; i < t.length; i += 3)
                    (t[i] = t[i] * this._formSpeed.a + e[i] * this._formSpeed.b), (t[i + 1] = t[i + 1] * this._formSpeed.a + e[i + 1] * this._formSpeed.b), (t[i + 2] = t[i + 2] * this._formSpeed.a + e[i + 2] * this._formSpeed.b);
                if (((this._g.attributes.position.needsUpdate = !0), this._g.computeVertexNormals(), Math.abs(t[t.length - 1] - e[e.length - 1]) < 0.001)) {
                    for (i = 0; i < t.length; i += 3) (t[i] = e[i]), (t[i + 1] = e[i + 1]), (t[i + 2] = e[i + 2]);
                    (this._g.attributes.position.needsUpdate = !0), this._g.computeVertexNormals(), this._transBC.clear();
                    var s = this;
                    gsap.killTweensOf(this._shader.uniforms.alpha),
                        gsap.to(this._shader.uniforms.alpha, {
                            delay: 0.9,
                            duration: 0.2,
                            value: 0,
                            onComplete: function () {
                                s._mesh.visible = !1;
                            },
                        });
                }
            }),
            (t.prototype.hide = function () {
                this._shader.uniforms.isShow.value = 0;
                var t = this;
                gsap.killTweensOf(this._shader.uniforms.yLimit),
                    gsap.to(this._shader.uniforms.yLimit, {
                        duration: 2.8,
                        delay: 0,
                        value: this._yMin,
                        onComplete: function () {
                            t._mesh.visible = !1;
                        },
                    }),
                    gsap.killTweensOf(this._shader.uniforms.yLimit2),
                    gsap.to(this._shader.uniforms.yLimit2, { duration: 2.8, delay: 0, value: this._yMax });
            }),
            (t.prototype.show = function () {
                (this._shader.uniforms.isShow.value = 1),
                    (this._mesh.visible = !0),
                    gsap.killTweensOf(this._shader.uniforms.yLimit),
                    gsap.to(this._shader.uniforms.yLimit, { duration: 2.8, value: this._yMax }),
                    gsap.killTweensOf(this._shader.uniforms.yLimit2),
                    gsap.to(this._shader.uniforms.yLimit2, { duration: 2.8, value: this._yMin });
            }),
            t
        );
    })(),
    glModelObj2 = (function () {
        "use strict";
        function t(t) {
            (this._parent = t), (this._bc = new glBeacon()), (this._transBC = new glBeacon()), (this._formType = 0), (this._formTurn = 1), (this._formSpeed = { a: 1, b: 0 }), (this._yMax = 100), (this._yMin = -100);
        }
        return (
            (t.prototype.init = function () {
                this._g = _glMain._parts.getModel("change_cylinder4_h.obj");
                for (var t = [], e = [], i = 0; i < this._g.attributes.position.array.length; i += 3) t.push(this._g.attributes.position.array[i + 1]), e.push(this._g.attributes.position.array[i + 1] + 0.7 * Math.random());
                t.sort(function (t, e) {
                    return t < e ? -1 : e < t ? 1 : 0;
                }),
                    (this._yMin = Math.floor(t[0]) - 1.5),
                    (this._yMax = Math.ceil(t[t.length - 1]) + 1.5);
                var s = new Float32Array(e);
                this._g.addAttribute("yPos", new THREE.BufferAttribute(s, 1)),
                    (this._shader = {
                        vertexShader: _glMain._parts.getShader("shader/obj2_vtx.js"),
                        fragmentShader: _glMain._parts.getShader("shader/obj2_frg.js"),
                        uniforms: {
                            texture: { value: null },
                            noise: { value: _glMain._world._noise._render.texture },
                            alpha: { value: 0.95 },
                            yLimit: { value: new THREE.Vector2(this._yMin, this._yMax) },
                            isShow: { value: 0 },
                            grade: { value: _glMain._parts.getTex("grade_b.png") },
                            gradeY: { value: -6 },
                            gradeCount: { value: 0 },
                        },
                        transparent: !0,
                        flatShading: !1,
                        wireframe: !1,
                    }),
                    (this._m = new THREE.ShaderMaterial(this._shader)),
                    (this._mesh = new THREE.Mesh(this._g, this._m)),
                    (this._mesh.scale.x = 500),
                    (this._mesh.scale.y = this._mesh.scale.z = this._mesh.scale.x),
                    this._parent._root._root.add(this._mesh);
            }),
            (t.prototype.contentsStart = function () {
                var t = this;
                setTimeout(function () {
                    t._parent._root._root.remove(t._mesh);
                }, 30);
            }),
            (t.prototype.enterFrame = function () {
                (this._mesh.rotation.y = this._parent._modelObj1._mesh.rotation.y), (this._shader.uniforms.gradeCount.value += 0.002);
            }),
            (t.prototype.hide = function () {
                this._shader.uniforms.isShow.value = 0;
                var t = this;
                gsap.killTweensOf(this._shader.uniforms.yLimit.value),
                    gsap.to(this._shader.uniforms.yLimit.value, {
                        duration: 2.8,
                        delay: 0,
                        x: this._yMin,
                        y: this._yMax,
                        onComplete: function () {
                            (t._mesh.visible = !1), t._parent._root._root.remove(t._mesh), t._bc.clear(), gsap.killTweensOf(t._shader.uniforms.gradeY), (t._shader.uniforms.gradeY.value = 1);
                        },
                    });
            }),
            (t.prototype.show = function () {
                this._parent._root._root.add(this._mesh),
                    this._bc.clear(),
                    this._bc.set(this, "enterFrame"),
                    (this._shader.uniforms.isShow.value = 1),
                    (this._mesh.visible = !0),
                    gsap.killTweensOf(this._shader.uniforms.yLimit.value),
                    gsap.to(this._shader.uniforms.yLimit.value, { duration: 2.8, x: this._yMax, y: this._yMin }),
                    this.colorAnim();
            }),
            (t.prototype.colorAnim = function () {
                var t = this;
                gsap.killTweensOf(this._shader.uniforms.gradeY),
                    gsap.to(this._shader.uniforms.gradeY, {
                        duration: 4,
                        delay: 2,
                        value: 1,
                        onComplete: function () {
                            (t._shader.uniforms.gradeY.value = -6), t.colorAnim();
                        },
                    });
            }),
            t
        );
    })(),
    glModelObj3 = (function () {
        "use strict";
        function t(t) {
            (this._parent = t), (this._bc = new glBeacon()), (this._transBC = new glBeacon()), (this._formType = 0), (this._formTurn = 1), (this._formSpeed = { a: 1, b: 0 }), (this._yMax = 100), (this._yMin = -100);
        }
        return (
            (t.prototype.init = function () {
                this._g = _glMain._parts.getModel("change_cylinder4_h.obj");
                for (var t = [], e = [], i = 0; i < this._g.attributes.position.array.length; i += 3) t.push(this._g.attributes.position.array[i + 1]), e.push(this._g.attributes.position.array[i + 1] + 0.7 * Math.random());
                t.sort(function (t, e) {
                    return t < e ? -1 : e < t ? 1 : 0;
                }),
                    (this._yMin = Math.floor(t[0]) - 1.5),
                    (this._yMax = Math.ceil(t[t.length - 1]) + 1.5);
                var s = new Float32Array(e);
                this._g.addAttribute("yPos", new THREE.BufferAttribute(s, 1)),
                    (this._tex = _glMain._parts.getTex("line_tex.png")),
                    (this._tex.wrapS = THREE.RepeatWrapping),
                    (this._tex.wrapT = THREE.RepeatWrapping),
                    (this._tex2 = _glMain._parts.getTex("line_tex2.png")),
                    (this._tex2.wrapS = THREE.RepeatWrapping),
                    (this._tex2.wrapT = THREE.RepeatWrapping),
                    (this._shader = {
                        vertexShader: _glMain._parts.getShader("shader/obj3_vtx.js"),
                        fragmentShader: _glMain._parts.getShader("shader/obj3_frg.js"),
                        uniforms: {
                            texture: { value: this._tex },
                            texture2: { value: this._tex2 },
                            alpha: { value: 0.8 },
                            yLimit: { value: new THREE.Vector2(this._yMin, this._yMax) },
                            isShow: { value: 0 },
                            shiftX: { value: 0 },
                            grade: { value: _glMain._parts.getTex("grade_b.png") },
                            gradeY: { value: -6 },
                            gradeCount: { value: 0 },
                        },
                        transparent: !0,
                        flatShading: !1,
                        wireframe: !1,
                        depthWrite: !1,
                    }),
                    (this._m = new THREE.ShaderMaterial(this._shader)),
                    (this._mesh = new THREE.Mesh(this._g, this._m)),
                    (this._mesh.scale.x = 500),
                    (this._mesh.scale.y = this._mesh.scale.z = this._mesh.scale.x),
                    this._parent._root._root.add(this._mesh),
                    (this._shader2 = {
                        vertexShader: _glMain._parts.getShader("shader/obj3_vtx.js"),
                        fragmentShader: _glMain._parts.getShader("shader/obj3_frg.js"),
                        uniforms: {
                            texture: { value: this._tex },
                            texture2: { value: this._tex2 },
                            alpha: { value: 0.15 },
                            yLimit: { value: new THREE.Vector2(this._yMin, this._yMax) },
                            isShow: { value: 0 },
                            shiftX: { value: 0 },
                            grade: { value: _glMain._parts.getTex("grade_b.png") },
                            gradeY: { value: -6 },
                            gradeCount: { value: 0 },
                        },
                        transparent: !0,
                        flatShading: !1,
                        wireframe: !1,
                        side: THREE.BackSide,
                    }),
                    (this._m2 = new THREE.ShaderMaterial(this._shader2)),
                    (this._mesh2 = new THREE.Mesh(this._g, this._m2)),
                    (this._mesh2.scale.x = 500),
                    (this._mesh2.scale.y = this._mesh2.scale.z = this._mesh2.scale.x),
                    this._parent._root._root.add(this._mesh2);
            }),
            (t.prototype.contentsStart = function () {
                var t = this;
                setTimeout(function () {
                    t._parent._root._root.remove(t._mesh), t._parent._root._root.remove(t._mesh2);
                }, 30);
            }),
            (t.prototype.enterFrame = function () {
                (this._mesh.rotation.y = this._parent._modelObj1._mesh.rotation.y),
                    (this._shader.uniforms.shiftX.value -= 5e-4),
                    (this._shader.uniforms.gradeCount.value += 0.002),
                    (this._mesh2.rotation.y = this._parent._modelObj1._mesh.rotation.y),
                    (this._shader2.uniforms.shiftX.value -= 5e-4),
                    (this._shader2.uniforms.gradeCount.value += 0.002);
            }),
            (t.prototype.hide = function () {
                this._shader.uniforms.isShow.value = 0;
                var t = this;
                gsap.killTweensOf(this._shader.uniforms.yLimit.value),
                    gsap.to(this._shader.uniforms.yLimit.value, {
                        duration: 2.8,
                        delay: 0,
                        x: this._yMin,
                        y: this._yMax,
                        onComplete: function () {
                            (t._mesh.visible = !1),
                                t._parent._root._root.remove(t._mesh),
                                t._bc.clear(),
                                (t._shader.uniforms.shiftX.value = 0),
                                gsap.killTweensOf(t._shader.uniforms.gradeY),
                                (t._shader.uniforms.gradeY.value = -6),
                                gsap.killTweensOf(t._shader2.uniforms.gradeY),
                                (t._shader2.uniforms.gradeY.value = -6);
                        },
                    }),
                    gsap.killTweensOf(this._shader2.uniforms.yLimit.value),
                    gsap.to(this._shader2.uniforms.yLimit.value, {
                        duration: 2.8,
                        delay: 0,
                        x: this._yMin,
                        y: this._yMax,
                        onComplete: function () {
                            (t._mesh2.visible = !1), t._parent._root._root.remove(t._mesh2), (t._shader2.uniforms.shiftX.value = 0);
                        },
                    });
            }),
            (t.prototype.show = function () {
                this._parent._root._root.add(this._mesh),
                    this._bc.clear(),
                    this._bc.set(this, "enterFrame"),
                    (this._shader.uniforms.isShow.value = 1),
                    (this._mesh.visible = !0),
                    gsap.killTweensOf(this._shader.uniforms.yLimit.value),
                    gsap.to(this._shader.uniforms.yLimit.value, { duration: 2.8, x: this._yMax, y: this._yMin }),
                    this._parent._root._root.add(this._mesh2),
                    (this._mesh2.visible = !0),
                    gsap.killTweensOf(this._shader2.uniforms.yLimit.value),
                    gsap.to(this._shader2.uniforms.yLimit.value, { duration: 2.8, x: this._yMax, y: this._yMin }),
                    this.colorAnim();
            }),
            (t.prototype.colorAnim = function () {
                var t = this;
                gsap.killTweensOf(this._shader.uniforms.gradeY),
                    gsap.to(this._shader.uniforms.gradeY, { duration: 7, value: 1, onComplete: function () {} }),
                    gsap.killTweensOf(this._shader2.uniforms.gradeY),
                    gsap.to(this._shader2.uniforms.gradeY, {
                        duration: 7,
                        value: 1,
                        onComplete: function () {
                            (t._shader.uniforms.gradeY.value = -6), (t._shader2.uniforms.gradeY.value = -6), t.colorAnim();
                        },
                    });
            }),
            t
        );
    })(),
    glModelObj4 = (function () {
        "use strict";
        function t(t) {
            (this._parent = t), (this._bc = new glBeacon()), (this._transBC = new glBeacon()), (this._formType = 0), (this._formTurn = 1), (this._formSpeed = { a: 1, b: 0 }), (this._yMax = 100), (this._yMin = -100);
        }
        return (
            (t.prototype.init = function () {
                this._g = _glMain._parts.getModel("change_cylinder4_h.obj");
                for (var t = [], e = [], i = 0; i < this._g.attributes.position.array.length; i += 3) t.push(this._g.attributes.position.array[i + 1]), e.push(this._g.attributes.position.array[i + 1] + 0.7 * Math.random());
                t.sort(function (t, e) {
                    return t < e ? -1 : e < t ? 1 : 0;
                }),
                    (this._yMin = Math.floor(t[0]) - 1.5),
                    (this._yMax = Math.ceil(t[t.length - 1]) + 1.5);
                var s = new Float32Array(e);
                this._g.addAttribute("yPos", new THREE.BufferAttribute(s, 1)),
                    (this._tex = _glMain._parts.getTex("line_h_tex.png")),
                    (this._tex.wrapS = THREE.RepeatWrapping),
                    (this._tex.wrapT = THREE.RepeatWrapping),
                    (this._tex2 = _glMain._parts.getTex("line_h_tex2.png")),
                    (this._tex2.wrapS = THREE.RepeatWrapping),
                    (this._tex2.wrapT = THREE.RepeatWrapping),
                    (this._shader = {
                        vertexShader: _glMain._parts.getShader("shader/obj4_vtx.js"),
                        fragmentShader: _glMain._parts.getShader("shader/obj4_frg.js"),
                        uniforms: {
                            texture: { value: this._tex },
                            texture2: { value: this._tex2 },
                            alpha: { value: 0.9 },
                            yLimit: { value: new THREE.Vector2(this._yMin, this._yMax) },
                            isShow: { value: 0 },
                            shiftX: { value: 0 },
                            grade: { value: _glMain._parts.getTex("grade_b.png") },
                            gradeY: { value: -6 },
                            gradeCount: { value: 0 },
                        },
                        transparent: !0,
                        flatShading: !1,
                        wireframe: !1,
                        depthWrite: !1,
                    }),
                    (this._m = new THREE.ShaderMaterial(this._shader)),
                    (this._mesh = new THREE.Mesh(this._g, this._m)),
                    (this._mesh.scale.x = 500),
                    (this._mesh.scale.y = this._mesh.scale.z = this._mesh.scale.x),
                    this._parent._root._root.add(this._mesh),
                    (this._shader2 = {
                        vertexShader: _glMain._parts.getShader("shader/obj4_vtx.js"),
                        fragmentShader: _glMain._parts.getShader("shader/obj4_frg.js"),
                        uniforms: {
                            texture: { value: this._tex },
                            texture2: { value: this._tex2 },
                            alpha: { value: 0.15 },
                            yLimit: { value: new THREE.Vector2(this._yMin, this._yMax) },
                            isShow: { value: 0 },
                            shiftX: { value: 0 },
                            grade: { value: _glMain._parts.getTex("grade_b.png") },
                            gradeY: { value: -6 },
                            gradeCount: { value: 0 },
                        },
                        transparent: !0,
                        flatShading: !1,
                        wireframe: !1,
                        side: THREE.BackSide,
                        depthWrite: !1,
                    }),
                    (this._m2 = new THREE.ShaderMaterial(this._shader2)),
                    (this._mesh2 = new THREE.Mesh(this._g, this._m2)),
                    (this._mesh2.scale.x = 500),
                    (this._mesh2.scale.y = this._mesh2.scale.z = this._mesh2.scale.x),
                    this._parent._root._root.add(this._mesh2);
            }),
            (t.prototype.contentsStart = function () {
                var t = this;
                setTimeout(function () {
                    t._parent._root._root.remove(t._mesh), t._parent._root._root.remove(t._mesh2);
                }, 30);
            }),
            (t.prototype.enterFrame = function () {
                (this._mesh.rotation.y = this._parent._modelObj1._mesh.rotation.y),
                    (this._shader.uniforms.shiftX.value -= 5e-4),
                    (this._shader.uniforms.gradeCount.value += 0.002),
                    (this._mesh2.rotation.y = this._parent._modelObj1._mesh.rotation.y),
                    (this._shader2.uniforms.shiftX.value -= 5e-4),
                    (this._shader2.uniforms.gradeCount.value += 0.002);
            }),
            (t.prototype.hide = function () {
                this._shader.uniforms.isShow.value = 0;
                var t = this;
                gsap.killTweensOf(this._shader.uniforms.yLimit.value),
                    gsap.to(this._shader.uniforms.yLimit.value, {
                        duration: 2.8,
                        delay: 0,
                        x: this._yMin,
                        y: this._yMax,
                        onComplete: function () {
                            (t._mesh.visible = !1),
                                t._parent._root._root.remove(t._mesh),
                                t._bc.clear(),
                                (t._shader.uniforms.shiftX.value = 0),
                                gsap.killTweensOf(t._shader.uniforms.gradeY),
                                (t._shader.uniforms.gradeY.value = -6),
                                gsap.killTweensOf(t._shader2.uniforms.gradeY),
                                (t._shader2.uniforms.gradeY.value = -6);
                        },
                    }),
                    gsap.killTweensOf(this._shader2.uniforms.yLimit.value),
                    gsap.to(this._shader2.uniforms.yLimit.value, {
                        duration: 2.8,
                        delay: 0,
                        x: this._yMin,
                        y: this._yMax,
                        onComplete: function () {
                            (t._mesh2.visible = !1), t._parent._root._root.remove(t._mesh2), (t._shader2.uniforms.shiftX.value = 0);
                        },
                    });
            }),
            (t.prototype.show = function () {
                this._parent._root._root.add(this._mesh),
                    this._bc.clear(),
                    this._bc.set(this, "enterFrame"),
                    (this._shader.uniforms.isShow.value = 1),
                    (this._mesh.visible = !0),
                    gsap.killTweensOf(this._shader.uniforms.yLimit.value),
                    gsap.to(this._shader.uniforms.yLimit.value, { duration: 2.8, x: this._yMax, y: this._yMin }),
                    this._parent._root._root.add(this._mesh2),
                    (this._mesh2.visible = !0),
                    gsap.killTweensOf(this._shader2.uniforms.yLimit.value),
                    gsap.to(this._shader2.uniforms.yLimit.value, { duration: 2.8, x: this._yMax, y: this._yMin }),
                    this.colorAnim();
            }),
            (t.prototype.colorAnim = function () {
                var t = this;
                gsap.killTweensOf(this._shader.uniforms.gradeY),
                    gsap.to(this._shader.uniforms.gradeY, { duration: 6, value: 1, onComplete: function () {} }),
                    gsap.killTweensOf(this._shader2.uniforms.gradeY),
                    gsap.to(this._shader2.uniforms.gradeY, {
                        duration: 6,
                        value: 1,
                        onComplete: function () {
                            (t._shader.uniforms.gradeY.value = -6), (t._shader2.uniforms.gradeY.value = -6), t.colorAnim();
                        },
                    });
            }),
            t
        );
    })(),
    glModelObj5 = (function () {
        "use strict";
        function t(t) {
            (this._parent = t), (this._bc = new glBeacon()), (this._transBC = new glBeacon()), (this._formType = 0), (this._formTurn = 1), (this._formSpeed = { a: 1, b: 0 }), (this._yMax = 100), (this._yMin = -100);
        }
        return (
            (t.prototype.init = function () {
                this._g = _glMain._parts.getModel("change_cylinder_b_3.obj");
                for (var t = _glMain._parts.getModel("change_cylinder_b_3_trans.obj"), e = [], i = [], s = [], r = 0; r < this._g.attributes.position.array.length; r += 3)
                    e.push(this._g.attributes.position.array[r + 1]),
                        i.push(this._g.attributes.position.array[r + 1] + 0.7 * Math.random()),
                        s.push(t.attributes.position.array[r]),
                        s.push(t.attributes.position.array[r + 1]),
                        s.push(t.attributes.position.array[r + 2]);
                e.sort(function (t, e) {
                    return t < e ? -1 : e < t ? 1 : 0;
                }),
                    (this._yMin = Math.floor(e[0]) - 1.5),
                    (this._yMax = Math.ceil(e[e.length - 1]) + 1.5);
                var o = new Float32Array(i),
                    a = new Float32Array(s);
                this._g.addAttribute("yPos", new THREE.BufferAttribute(o, 1)),
                    this._g.addAttribute("trgPos", new THREE.BufferAttribute(a, 3)),
                    (this._shader = {
                        vertexShader: _glMain._parts.getShader("shader/obj5_vtx.js"),
                        fragmentShader: _glMain._parts.getShader("shader/obj5_frg.js"),
                        uniforms: {
                            alpha: { value: 1 },
                            noise: { value: _glMain._world._noise._render.texture },
                            yLimit: { value: new THREE.Vector2(this._yMin, this._yMax) },
                            isShow: { value: 0 },
                            grade: { value: _glMain._parts.getTex("grade_b.png") },
                            gradeY: { value: -6 },
                            gradeCount: { value: 0 },
                            transform: { value: this._yMin },
                        },
                        transparent: !0,
                        flatShading: !0,
                        wireframe: !1,
                    }),
                    (this._m = new THREE.ShaderMaterial(this._shader)),
                    (this._mesh = new THREE.Mesh(this._g, this._m)),
                    (this._mesh.scale.x = 500),
                    (this._mesh.scale.y = this._mesh.scale.z = this._mesh.scale.x),
                    this._parent._root._root.add(this._mesh);
            }),
            (t.prototype.contentsStart = function () {
                var t = this;
                setTimeout(function () {
                    t._parent._root._root.remove(t._mesh);
                }, 30);
            }),
            (t.prototype.enterFrame = function () {
                (this._mesh.rotation.y = this._parent._modelObj1._mesh.rotation.y), (this._shader.uniforms.gradeCount.value += 0.002);
            }),
            (t.prototype.hide = function () {
                this._shader.uniforms.isShow.value = 0;
                var t = this;
                gsap.killTweensOf(this._shader.uniforms.yLimit.value),
                    gsap.to(this._shader.uniforms.yLimit.value, {
                        duration: 2.8,
                        delay: 0,
                        x: this._yMin,
                        y: this._yMax,
                        onComplete: function () {
                            (t._mesh.visible = !1),
                                t._parent._root._root.remove(t._mesh),
                                t._bc.clear(),
                                gsap.killTweensOf(t._shader.uniforms.gradeY),
                                (t._shader.uniforms.gradeY.value = -6),
                                gsap.killTweensOf(t._shader.uniforms.transform),
                                (t._shader.uniforms.transform.value = t._yMin);
                        },
                    });
            }),
            (t.prototype.show = function () {
                this._parent._root._root.add(this._mesh),
                    this._bc.clear(),
                    this._bc.set(this, "enterFrame"),
                    (this._shader.uniforms.isShow.value = 1),
                    (this._mesh.visible = !0),
                    gsap.killTweensOf(this._shader.uniforms.yLimit.value),
                    gsap.to(this._shader.uniforms.yLimit.value, { duration: 2.8, x: this._yMax, y: this._yMin }),
                    this.posAnim(),
                    this.colorAnim();
            }),
            (t.prototype.posAnim = function () {
                var t = this;
                gsap.killTweensOf(this._shader.uniforms.transform),
                    gsap.to(this._shader.uniforms.transform, {
                        duration: 5.5,
                        value: this._yMax,
                        onComplete: function () {
                            (t._shader.uniforms.transform.value = t._yMin), t.posAnim();
                        },
                    });
            }),
            (t.prototype.colorAnim = function () {
                var t = this;
                gsap.killTweensOf(this._shader.uniforms.gradeY),
                    gsap.to(this._shader.uniforms.gradeY, {
                        duration: 5.5,
                        value: 1,
                        onComplete: function () {
                            (t._shader.uniforms.gradeY.value = -6), t.colorAnim();
                        },
                    });
            }),
            t
        );
    })(),
    glNoiseSet = (function () {
        "use strict";
        function t() {}
        return (
            (t.prototype.init = function () {
                (this._playBC = new glBeacon()),
                    (this.isRender = !0),
                    (this._width = 512),
                    (this._height = 512),
                    (this._nSpeed = 0),
                    (this._speedBC = new glBeacon()),
                    (this._sepR = 3),
                    (this._sepG = 4),
                    (this._sepRtrg = 0),
                    (this._sepBC = new glBeacon()),
                    this.setViewPort(),
                    (this._cam = new THREE.OrthographicCamera(this._viewPort.left, this._viewPort.right, this._viewPort.top, this._viewPort.bottom, this._viewPort.near, this._viewPort.far)),
                    this._cam.position.set(0, 0, 100),
                    (this._scene = new THREE.Scene()),
                    (this._render = new THREE.WebGLRenderTarget(this._width, this._height, { magFilter: THREE.LinearFilter, minFilter: THREE.LinearFilter, wrapS: THREE.MirroredRepeatWrapping, wrapT: THREE.MirroredRepeatWrapping })),
                    (this._count = 0),
                    (this._cSpeed = 0.01);
                var t = new THREE.PlaneGeometry(this._width, this._height);
                this._shader = {
                    vertexShader: _glMain._parts.getShader("shader/planeBase_vtx.js"),
                    fragmentShader: _glMain._parts.getShader("shader/noise_frg.js"),
                    uniforms: { texture: { value: null }, cr: { value: this._sepR }, cg: { value: this._sepG }, cb: { value: 0 } },
                };
                var e = new THREE.ShaderMaterial(this._shader);
                (this._mesh = new THREE.Mesh(t, e)), (this._mesh.position.z = 10), this._scene.add(this._mesh);
            }),
            (t.prototype.contentsStart = function () {
                _glMain.removeEnterFrame(this), _glMain.addEnterFrame(this, "enterFrame");
            }),
            (t.prototype.enterFrame = function () {
                this.isRender ? (_glMain._world._render.render(this._scene, this._cam, this._render), (this._count += this._cSpeed), (this._shader.uniforms.cb.value = this._count), (this.isRender = !1)) : (this.isRender = !0);
            }),
            (t.prototype.setViewPort = function () {
                this._viewPort = {};
                var t = this._width,
                    e = this._height,
                    t = t / e;
                this._viewPort = { viewSize: e, aspectRatio: t, left: (-t * e) / 2, right: (t * e) / 2, top: e / 2, bottom: -e / 2, near: 0, far: 1e4 };
            }),
            t
        );
    })(),
    glObjMng = (function () {
        "use strict";
        function t(t) {
            (this._parent = t), (this._formType = 0), (this._timer = { count: 0 }), (this._wait = { count: 0 }), (this.isChange = !1);
        }
        return (
            (t.prototype.init = function () {
                (this._root = new glObjRoot()),
                    (this._modelObj1 = new glModelObj(this)),
                    this._modelObj1.init(),
                    (this._baseBox = new glBaseBox(this)),
                    this._baseBox.init(),
                    (this._baseBoxS = new glBaseBoxS(this)),
                    this._baseBoxS.init(),
                    (this._modelObj2 = new glModelObj2(this)),
                    this._modelObj2.init(),
                    (this._modelObj3 = new glModelObj3(this)),
                    this._modelObj3.init(),
                    (this._modelObj4 = new glModelObj4(this)),
                    this._modelObj4.init(),
                    (this._modelObj5 = new glModelObj5(this)),
                    this._modelObj5.init(),
                    (this._modelList = [this._modelObj2, this._modelObj3, this._modelObj4, this._modelObj5]),
                    (this._modelList = this.shufle(this._modelList)),
                    (this._modelCount = 0),
                    this._parent.setupDisplay();
            }),
            (t.prototype.shufle = function (t) {
                for (var e = t.length - 1; 0 < e; e--) {
                    var i = Math.floor(Math.random() * (e + 1)),
                        s = t[e];
                    (t[e] = t[i]), (t[i] = s);
                }
                return t;
            }),
            (t.prototype.contentsStart = function () {
                this._root.contentsStart(),
                    this._modelObj1.contentsStart(),
                    this._modelObj2.contentsStart(),
                    this._modelObj3.contentsStart(),
                    this._modelObj4.contentsStart(),
                    this._modelObj5.contentsStart(),
                    this._baseBox.contentsStart(),
                    this._baseBoxS.contentsStart();
            }),
            (t.prototype.firstStart = function () {
                this._baseBox.firstStart(), this._baseBoxS.firstStart(), this._root.firstStart();
            }),
            (t.prototype.setFirstView = function () {
                _glMain._videoMng.playVid(), this._root.setFirstView(), this._baseBox.setFirstView(), this._baseBoxS.setFirstView();
            }),
            (t.prototype.setUnderStart = function () {
                _glMain._videoMng.playVid(), this._root.setUnderStart(), this._baseBox.setUnderStart(), this._baseBoxS.setUnderStart();
            }),
            (t.prototype.pageEnd = function () {
                this._root.pageEnd();
            }),
            (t.prototype.changeForm = function () {
                this.isChange = !0;
                var t = this;
                0 == this._formType
                    ? ((this._formType = 1),
                      this._modelObj1.changeForm(this._formType),
                      this._baseBox.changeForm(this._formType),
                      this._baseBoxS.changeForm(this._formType),
                      this._root.changeForm(this._formType),
                      (this._currentObj = this._modelObj1),
                      gsap.killTweensOf(this._timer),
                      (this._timer.count = 0),
                      gsap.to(this._timer, {
                          duration: 0.6,
                          count: 1,
                          onComplete: function () {
                              t.changeCylinder();
                          },
                      }))
                    : 1 == this._formType && this.changeCylinder(),
                    gsap.killTweensOf(this._wait),
                    (this._wait.count = 0),
                    gsap.to(this._wait, {
                        duration: 1,
                        count: 1,
                        onComplete: function () {
                            t.changeComp();
                        },
                    });
            }),
            (t.prototype.backBox = function () {
                var t = this;
                gsap.killTweensOf(this._timer),
                    (this._timer.count = 0),
                    gsap.to(this._timer, {
                        duration: 1,
                        count: 1,
                        onComplete: function () {
                            (t._formType = 0),
                                t._modelObj1.changeForm(t._formType),
                                t._baseBox.changeForm(t._formType),
                                t._baseBoxS.changeForm(t._formType),
                                t._root.changeForm(t._formType),
                                _glMain._scroll.isUp || _glMain._scroll.isBottom || t.boxToCylinder();
                        },
                    });
            }),
            (t.prototype.changeBaseBoxTex = function () {
                _glMain._videoMng.changeBaseBoxTex(), this._baseBox.changeTex(), this._baseBoxS.changeTex();
            }),
            (t.prototype.changeCylinder = function () {
                this._currentObj.hide(), (this._currentObj = this._modelList[this._modelCount]), this._currentObj.show();
                for (var t = 0; t < this._modelList.length; t++) t != this._modelCount && this._modelList[t].hide();
                this._modelCount++, this._modelCount >= this._modelList.length && (this._modelCount = 0);
            }),
            (t.prototype.cylinderToBox = function () {
                if (1 == this._formType) {
                    for (var t = 0; t < this._modelList.length; t++) t != this._modelCount && this._modelList[t].hide();
                    (this._matType = 0), (this._currentObj = this._modelObj1), this._modelObj1.show(), this.backBox();
                }
            }),
            (t.prototype.boxToCylinder = function () {
                0 == this._formType ? this.changeForm() : this.changeCylinder();
            }),
            (t.prototype.changeComp = function () {
                this.isChange = !1;
            }),
            t
        );
    })(),
    glObjRoot = (function () {
        "use strict";
        function t() {
            (this.isStageFix = !1),
                (this._stageX = 0),
                (this._bc = new glBeacon()),
                (this._stage = new THREE.Object3D()),
                (this._stage.scale.x = 1),
                (this._stage.scale.y = this._stage.scale.z = this._stage.scale.x),
                (this._stage.rotation.y = (180 * Math.PI) / 180),
                _glMain._world._dummy._scene.add(this._stage),
                (this._root = new THREE.Object3D()),
                (this._min = 0.85),
                (this._max = 1.47),
                (this._root.scale.x = this._max),
                (this._root.scale.y = this._root.scale.z = this._root.scale.x),
                this._stage.add(this._root),
                (this._shiftX = 1),
                (this._stageRZ = { value: (10 * Math.PI) / 180 });
        }
        return (
            (t.prototype.contentsStart = function () {
                this._bc.clear(), this._bc.set(this, "enterFrame");
            }),
            (t.prototype.firstStart = function () {
                this.setStageX(), gsap.set(this._stage.position, { x: this._stageX });
            }),
            (t.prototype.setFirstView = function () {
                (this.isStageFix = !0),
                    gsap.killTweensOf(this._stage.scale),
                    gsap.killTweensOf(this._stage.rotation),
                    gsap.killTweensOf(this._stage.position),
                    gsap.killTweensOf(this._stageRZ),
                    gsap.set(this._stage.scale, { x: 1, y: 1, z: 1 }),
                    gsap.set(this._stage.rotation, { y: 0, z: this._stageRZ.value }),
                    this.setStageX(),
                    gsap.set(this._stage.position, { x: this._stageX });
            }),
            (t.prototype.setUnderStart = function () {
                (this.isStageFix = !0),
                    gsap.killTweensOf(this._stage.scale),
                    gsap.killTweensOf(this._stage.rotation),
                    gsap.killTweensOf(this._stage.position),
                    gsap.killTweensOf(this._stageRZ),
                    gsap.set(this._stage.scale, { x: 1, y: 1, z: 1 }),
                    gsap.set(this._stage.rotation, { y: 0, z: this._stageRZ.value }),
                    this.setStageX(),
                    gsap.set(this._stage.position, { x: this._stageX });
            }),
            (t.prototype.changeForm = function (t) {
                gsap.killTweensOf(this._root.scale),
                    gsap.killTweensOf(this._stageRZ),
                    1 == t
                        ? ((this._shiftX = 0.5),
                          Math.random() < 0.5 ? gsap.to(this._stageRZ, { duration: 0.8, value: (-15 * Math.PI) / 180, ease: Power3.easeIn }) : gsap.to(this._stageRZ, { duration: 0.8, value: (15 * Math.PI) / 180, ease: Power3.easeIn }),
                          gsap.to(this._root.scale, { duration: 1.4, x: this._min, y: this._min, z: this._min, ease: Power3.easeInOut }))
                        : 0 == t &&
                          (_glMain._scroll.isBottom ? (this._shiftX = 0.5) : (this._shiftX = 1),
                          gsap.to(this._stageRZ, { duration: 0.8, value: (10 * Math.PI) / 180 }),
                          gsap.to(this._root.scale, { duration: 1.4, x: this._max, y: this._max, z: this._max, ease: Power3.easeInOut })),
                    this.setStageX();
            }),
            (t.prototype.pageEnd = function () {
                _glMain._scroll.isBottom ? (this._shiftX = 0.5) : (this._shiftX = 1), this.setStageX();
            }),
            (t.prototype.enterFrame = function () {
                var t;
                _glMain.isFirstView ||
                    ((this._root.rotation.y += _glMain._scroll._rotSpeed),
                    (this._stage.rotation.x = 0.99 * this._stage.rotation.x + 0.4 * _glMain._scroll._mpY * 0.01),
                    (this._stage.rotation.z = 0.99 * this._stage.rotation.z + 0.01 * (this._stageRZ.value + 0.1 * _glMain._scroll._mpX)),
                    this.isStageFix && ((t = this._stageX + 160 * _glMain._scroll._mpX), (this._stage.position.x = 0.99 * this._stage.position.x + 0.01 * t)));
            }),
            (t.prototype.setStageX = function () {
                800 < window.innerWidth ? (this._stageX = 0.46 * window.innerWidth * this._shiftX) : (this._stageX = 0.2 * window.innerWidth * this._shiftX);
            }),
            (t.prototype.onResize = function () {
                this.setStageX(), (this._stage.position.x = this._stageX);
            }),
            t
        );
    })(),
    glPartsMng = (function () {
        "use strict";
        function t() {
            (this._itemCount = 0), (this._listCount = 0), (this._imgNum = 0), (this._imgLoadedNum = 0), (this._pipeline = 4), (this._imgMap = {}), (this._texMap = {}), (this._modelMap = {}), (this._shaderMap = {}), this.init();
        }
        return (
            (t.prototype.init = function () {
                (this._firstItem = []),
                    _glMain._webGL &&
                        ((this._trgTex = [
                            "/cms_dir/wp-content/themes/rdc/assets/gl/image/red.png",
                            "/cms_dir/wp-content/themes/rdc/assets/gl/image/startBaloon1025.png",
                            "/cms_dir/wp-content/themes/rdc/assets/gl/image/bg.png",
                            "/cms_dir/wp-content/themes/rdc/assets/gl/image/cloud.png",
                            "/cms_dir/wp-content/themes/rdc/assets/gl/image/line_tex.png",
                            "/cms_dir/wp-content/themes/rdc/assets/gl/image/line_tex2.png",
                            "/cms_dir/wp-content/themes/rdc/assets/gl/image/line_h_tex.png",
                            "/cms_dir/wp-content/themes/rdc/assets/gl/image/line_h_tex2.png",
                            "/cms_dir/wp-content/themes/rdc/assets/gl/image/grade.png",
                            "/cms_dir/wp-content/themes/rdc/assets/gl/image/grade_g.png",
                            "/cms_dir/wp-content/themes/rdc/assets/gl/image/grade_b.png",
                            "/cms_dir/wp-content/themes/rdc/assets/gl/image/box/dummy_a01.png",
                            "/cms_dir/wp-content/themes/rdc/assets/gl/image/box/dummy_a02_2.png",
                            "/cms_dir/wp-content/themes/rdc/assets/gl/image/box/dummy_a03.png",
                            "/cms_dir/wp-content/themes/rdc/assets/gl/image/box/dummy_a04.png",
                            "/cms_dir/wp-content/themes/rdc/assets/gl/image/box/dummy_b01_1.png",
                            "/cms_dir/wp-content/themes/rdc/assets/gl/image/box/dummy_b02.png",
                            "/cms_dir/wp-content/themes/rdc/assets/gl/image/box/dummy_b03.png",
                            "/cms_dir/wp-content/themes/rdc/assets/gl/image/box/dummy_b04.png",
                        ]),
                        (this._firstItem = [
                            { _type: "texture", _list: this._trgTex },
                            {
                                _type: "shader",
                                _list: [
                                    "/cms_dir/wp-content/themes/rdc/assets/gl/shader/planeBase_vtx.js",
                                    "/cms_dir/wp-content/themes/rdc/assets/gl/shader/noise_frg.js",
                                    "/cms_dir/wp-content/themes/rdc/assets/gl/shader/display_frg.js",
                                    "/cms_dir/wp-content/themes/rdc/assets/gl/shader/grade_box_frg.js",
                                    "/cms_dir/wp-content/themes/rdc/assets/gl/shader/obj_vtx.js",
                                    "/cms_dir/wp-content/themes/rdc/assets/gl/shader/obj_frg.js",
                                    "/cms_dir/wp-content/themes/rdc/assets/gl/shader/obj2_vtx.js",
                                    "/cms_dir/wp-content/themes/rdc/assets/gl/shader/obj2_frg.js",
                                    "/cms_dir/wp-content/themes/rdc/assets/gl/shader/obj3_vtx.js",
                                    "/cms_dir/wp-content/themes/rdc/assets/gl/shader/obj3_frg.js",
                                    "/cms_dir/wp-content/themes/rdc/assets/gl/shader/obj4_vtx.js",
                                    "/cms_dir/wp-content/themes/rdc/assets/gl/shader/obj4_frg.js",
                                    "/cms_dir/wp-content/themes/rdc/assets/gl/shader/obj5_vtx.js",
                                    "/cms_dir/wp-content/themes/rdc/assets/gl/shader/obj5_frg.js",
                                    "/cms_dir/wp-content/themes/rdc/assets/gl/shader/baseBox_vtx.js",
                                    "/cms_dir/wp-content/themes/rdc/assets/gl/shader/baseBox_frg.js",
                                    "/cms_dir/wp-content/themes/rdc/assets/gl/shader/baseBoxS_frg.js",
                                ],
                            },
                            {
                                _type: "model",
                                _list: [
                                    "/cms_dir/wp-content/themes/rdc/assets/gl/model/cube003_h_cylinder_tri2.obj",
                                    "/cms_dir/wp-content/themes/rdc/assets/gl/model/cube003_h_box_tri.obj",
                                    "/cms_dir/wp-content/themes/rdc/assets/gl/model/change_cylinder4_h.obj",
                                    "/cms_dir/wp-content/themes/rdc/assets/gl/model/change_cylinder_b_3.obj",
                                    "/cms_dir/wp-content/themes/rdc/assets/gl/model/change_cylinder_b_3_trans.obj",
                                ],
                            },
                        ]));
            }),
            (t.prototype.addTexPath = function (t) {
                for (var e = 0; e < t.length; e++) this._trgTex.push(t[e]);
            }),
            (t.prototype.firstLoad = function () {
                for (var t = 0; t < this._pipeline; t++) this.pipelineLoad();
            }),
            (t.prototype.pipelineLoad = function () {
                var t,
                    e,
                    i,
                    s,
                    r,
                    o = this;
                this._itemCount >= this._firstItem.length ||
                    ((i = (e = this._firstItem[this._itemCount])._list[this._listCount]),
                    (s = this._listCount),
                    "texture" === e._type
                        ? (t = new THREE.TextureLoader()).load(i, function (t) {
                              o.loadTextureEnd(t, e, s);
                          })
                        : "image" === e._type
                        ? (((r = new Image()).onload = function () {
                              o.loadImageEnd(this, e, s);
                          }),
                          (r.src = i))
                        : "model" === e._type
                        ? (t = new THREE.OBJLoader()).load(
                              i,
                              function (t) {
                                  o.loadModelEnd(t, e, s);
                              },
                              function () {},
                              function () {}
                          )
                        : "shader" === e._type &&
                          ((t = new XMLHttpRequest()).open("GET", i + "?v=" + Math.ceil(1e3 * Math.random()), !0),
                          (t.onreadystatechange = function () {
                              4 == t.readyState && 200 == t.status && o.loadShsderEnd(t.responseText, e, s);
                          }),
                          t.send(null)),
                    this._imgNum++,
                    this._listCount++,
                    this._listCount >= e._list.length && ((this._listCount = 0), this._itemCount++));
            }),
            (t.prototype.loadTextureEnd = function (t, e, i) {
                (t.needsUpdate = !0), (t.minFilter = THREE.LinearFilter), (t.magFilter = THREE.LinearFilter);
                i = e._list[i];
                (this._texMap[i] = t), this.fLoadCompCheck();
            }),
            (t.prototype.loadImageEnd = function (t, e, i) {
                i = e._list[i];
                (this._imgMap[i] = t), this.fLoadCompCheck();
            }),
            (t.prototype.loadModelEnd = function (t, e, i) {
                (t = t.children[0].geometry), (i = e._list[i]);
                (this._modelMap[i] = t), this.fLoadCompCheck();
            }),
            (t.prototype.loadShsderEnd = function (t, e, i) {
                i = e._list[i];
                (this._shaderMap[i] = t), this.fLoadCompCheck();
            }),
            (t.prototype.fLoadCompCheck = function () {
                this.pipelineLoad(), this._imgLoadedNum++, this._imgLoadedNum >= this._imgNum && _glMain.partsLoadComp();
            }),
            (t.prototype.getTex = function (t) {
                var e,
                    i = null;
                for (e in this._texMap) e.match(t) && (i = this._texMap[e]);
                return i;
            }),
            (t.prototype.getModel = function (t) {
                var e,
                    i = null;
                for (e in this._modelMap) e.match(t) && (i = this._modelMap[e]);
                return i;
            }),
            (t.prototype.getImage = function (t) {
                var e,
                    i = null;
                for (e in this._imgMap) e.match(t) && (i = this._imgMap[e]);
                return i;
            }),
            (t.prototype.getShader = function (t) {
                var e,
                    i = null;
                for (e in this._shaderMap) e.match(t) && (i = this._shaderMap[e]);
                return i;
            }),
            t
        );
    })(),
    glScroll = (function () {
        "use strict";
        function t() {
            this.isStart = !1;
        }
        return (
            (t.prototype.contentsStart = function () {
                (this.isUp = !0),
                    (this.isBottom = !1),
                    (this._noise = document.querySelector(".gl-noise")),
                    (this._noise.style.opacity = 0),
                    (this._cover = document.querySelector(".gl-cover")),
                    (this._cover.style.opacity = 1),
                    (this._scrollY = 0),
                    (this._oldScrollY = 0),
                    (this._dis = 0),
                    (this._rotSpeed = -0.005),
                    (this._scrollSpeed = -0.005),
                    (this._highLight = 0.7),
                    (this._lowLight = 0.3);
                var e = this;
                (this._mouseX = -1e3),
                    (this._mouseY = -1e3),
                    (this._mpX = 0),
                    (this._mpY = 0),
                    window.addEventListener("mousemove", function (t) {
                        e.mouseMove(t);
                    }),
                    _glMain.removeEnterFrame(this),
                    _glMain.addEnterFrame(this, "enterFrame"),
                    (this._pageH = 0),
                    _glMain.addResize(this),
                    this.onResize();
            }),
            (t.prototype.firstStart = function () {
                gsap.killTweensOf(this._cover), gsap.to(this._cover, { duration: 0.6, opacity: 0 });
            }),
            (t.prototype.setFirstView = function () {
                gsap.killTweensOf(this._cover), gsap.to(this._cover, { duration: 0.3, opacity: this._lowLight }), gsap.killTweensOf(this._noise), gsap.to(this._noise, { duration: 1, opacity: 0.04 });
            }),
            (t.prototype.setUnderStart = function () {
                gsap.killTweensOf(this._cover),
                    gsap.to(this._cover, {
                        duration: 1,
                        delay: 0.7,
                        opacity: this._highLight,
                        onComplete: function () {
                            _glMain.scrollStart();
                        },
                    }),
                    gsap.killTweensOf(this._noise),
                    gsap.to(this._noise, { duration: 1, opacity: 0.04 });
            }),
            (t.prototype.pageStart = function () {
                this.isStart ||
                    ((this.isStart = !0),
                    gsap.killTweensOf(this._cover),
                    _glMain.isTop ? gsap.to(this._cover, { duration: 0.6, opacity: this._lowLight }) : gsap.to(this._cover, { duration: 0.6, opacity: this._highLight }),
                    (this._scrollY = 0),
                    (this._oldScrollY = 0),
                    (this._dis = 0),
                    _glMain.removeEnterFrame(this),
                    _glMain.addEnterFrame(this, "enterFrame"));
            }),
            (t.prototype.pageEnd = function () {
                (this.isStart = !1), (this.isBottom = !1), (this.isUp = !0), _glMain.removeEnterFrame(this), gsap.killTweensOf(this._cover), gsap.to(this._cover, { duration: 0.4, opacity: 1 });
            }),
            (t.prototype.mouseMove = function (t) {
                (this._mouseX = t.clientX - 0.5 * window.innerWidth), (this._mouseY = t.clientY - 0.5 * window.innerHeight), (this._mpX = this._mouseX / (0.5 * window.innerWidth)), (this._mpY = this._mouseY / (0.5 * window.innerHeight));
            }),
            (t.prototype.enterFrame = function () {
                "scrollingElement" in document ? (this._scrollY = document.scrollingElement.scrollTop) : (this._scrollY = document.body.scrollTop),
                    _glMain.isGLReady &&
                        (300 < this._scrollY
                            ? this.isUp &&
                              ((this.isUp = !1),
                              _glMain.isTop
                                  ? (gsap.killTweensOf(this._cover), gsap.to(this._cover, { duration: 0.6, opacity: this._highLight }), this.isBottom || _glMain._world._objMng.boxToCylinder())
                                  : gsap.set(this._cover, { opacity: this._highLight }))
                            : this.isUp ||
                              ((this.isUp = !0),
                              _glMain.isTop
                                  ? (gsap.killTweensOf(this._cover), gsap.to(this._cover, { duration: 0.6, opacity: this._lowLight }), this.isBottom || _glMain._world._objMng.cylinderToBox())
                                  : gsap.set(this._cover, { opacity: this._highLight })));
                var t = document.body.scrollHeight - (window.innerHeight + this._scrollY);
                _glMain.isGLReady &&
                    !this.isUp &&
                    _glMain.isBottomChange &&
                    (t < 2.1 * window.innerHeight ? this.isBottom || ((this.isBottom = !0), _glMain._world._objMng.cylinderToBox()) : this.isBottom && ((this.isBottom = !1), _glMain._world._objMng.boxToCylinder())),
                    (this._dis = this._scrollY - this._oldScrollY);
                200 <= this._dis ? (this._dis = 200) : this._dis <= -200 && (this._dis = -200), (this._rotSpeed = 0.95 * this._rotSpeed + 0.05 * (-5e-4 * this._dis + this._scrollSpeed)), (this._oldScrollY = this._scrollY);
            }),
            (t.prototype.onResize = function () {
                this._pageH = document.body.clientHeight;
            }),
            t
        );
    })(),
    glTop = (function () {
        "use strict";
        function t() {
            (this._wrapper = document.querySelector(".gl-top")),
                (this._scaleWrapp = document.querySelector(".gl-top-til")),
                (this._title = document.querySelector(".gl-top-til-in")),
                (this._spScroll = document.querySelector(".gl-top-scroll-sp")),
                (this.isVisibleScroll = !1),
                (this._ja = document.querySelector(".gl-top-ja")),
                (this._en = document.querySelector(".gl-top-en")),
                gsap.set(this._title, { display: "none", opacity: 0, x: -160 }),
                gsap.set(this._ja, { display: "none", opacity: 0, x: -160 }),
                gsap.set(this._en, { display: "none", opacity: 0, x: -160 }),
                (this._titleList = [
                    document.querySelector("#gl-top-typeMask0"),
                    document.querySelector("#gl-top-typeMask1"),
                    document.querySelector("#gl-top-typeMask2"),
                    document.querySelector("#gl-top-typeMask3"),
                    document.querySelector("#gl-top-typeMask4"),
                    document.querySelector("#gl-top-typeMask5"),
                    document.querySelector("#gl-top-typeMask6"),
                    document.querySelector("#gl-top-typeMask7"),
                    document.querySelector("#gl-top-typeMask8"),
                    document.querySelector("#gl-top-typeMask9"),
                ]),
                (this._titleList = this.shufleList(this._titleList)),
                (this._timer = { count: 0 }),
                (this._titleCount = 0),
                "PC" == _glMain._device && (this._wrapper.style.position = "fixed"),
                (this._fixList = [document.querySelector("#gl-top-fixMask0"), document.querySelector("#gl-top-fixMask1"), document.querySelector("#gl-top-fixMask2"), document.querySelector("#gl-top-fixMask3")]),
                (this._fixList = this.shufleList(this._fixList)),
                (this._fixCount = 0);
        }
        return (
            (t.prototype.shufleList = function (t) {
                for (var e = t.length - 1; 0 < e; e--) {
                    var i = Math.floor(Math.random() * (e + 1)),
                        s = t[e];
                    (t[e] = t[i]), (t[i] = s);
                }
                return t;
            }),
            (t.prototype.firstStart = function () {}),
            (t.prototype.setFirstView = function () {}),
            (t.prototype.topStart = function () {
                this.onResize(), gsap.killTweensOf(this._wrapper), (this._wrapper.style.display = "block"), (this._wrapper.style.opacity = 1);
                for (var t = (this._titleCount = 0); t < this._titleList.length; t++) {
                    var e = this._titleList[t];
                    gsap.killTweensOf(e), (e.style.width = "0%");
                }
                this.titleAnim(1.6),
                    gsap.killTweensOf(this._title),
                    gsap.killTweensOf(this._ja),
                    gsap.killTweensOf(this._en),
                    gsap.set(this._title, { display: "block", opacity: 0, x: -160 }),
                    gsap.set(this._ja, { display: "block", opacity: 0, x: -160 }),
                    gsap.set(this._en, { display: "block", opacity: 0, x: -160 }),
                    gsap.to(this._title, {
                        duration: 1.2,
                        delay: 0.4,
                        x: 0,
                        opacity: 1,
                        ease: Power2.easeOut,
                        onComplete: function () {
                            _glMain.scrollStart();
                        },
                    }),
                    gsap.to(this._ja, { duration: 0.8, delay: 0.5, x: 0, opacity: 1, ease: Power2.easeOut }),
                    gsap.to(this._en, { duration: 0.8, delay: 0.6, x: 0, opacity: 1, ease: Power2.easeOut });
                this.isVisibleScroll = !0;
                var i = window.innerHeight - 120;
                gsap.killTweensOf(this._spScroll),
                    gsap.set(this._spScroll, { opacity: 0, top: i + "px" }),
                    gsap.to(this._spScroll, { duration: 0.7, delay: 1.1, opacity: 1, ease: Power2.easeOut }),
                    "fixed" == this._wrapper.style.position && ((this._sy = 0), gsap.set(this._wrapper, { y: this._sy }), _glMain.removeEnterFrame(this), _glMain.addEnterFrame(this, "scrollFrame")),
                    this.dummyResize();
            }),
            (t.prototype.scrollFrame = function () {
                (this._sy = 0.85 * this._sy + 1.1 * _glMain._scroll._scrollY * 0.15), gsap.set(this._wrapper, { y: -Math.floor(this._sy) });
            }),
            (t.prototype.titleAnim = function (t) {
                var e = this,
                    i = this._titleList[this._titleCount];
                gsap.killTweensOf(i),
                    gsap.set(i, { x: -80, opacity: 0, display: "block" }),
                    gsap.to(i, {
                        duration: 0.35,
                        delay: t,
                        opacity: 1,
                        x: 0,
                        width: "100%",
                        ease: Power2.easeOut,
                        onComplete: function () {
                            e.titleAnimCheck();
                        },
                    });
            }),
            (t.prototype.titleAnimCheck = function () {
                var t = this;
                gsap.killTweensOf(this._timer), (this._timer.count = 0);
                gsap.to(this._timer, {
                    duration: 0.5,
                    count: 1,
                    onComplete: function () {
                        t.titleAnimNext();
                    },
                });
            }),
            (t.prototype.titleAnimNext = function () {
                var t = this._titleList[this._titleCount];
                gsap.killTweensOf(t),
                    (t.style.width = "0%"),
                    (t.style.display = "none"),
                    this._titleCount++,
                    this._titleCount >= this._titleList.length && (this._titleCount = 0),
                    0 != this._titleCount && 5 != this._titleCount ? this.titleAnim(0) : this.fixTitleAnim();
            }),
            (t.prototype.fixTitleAnim = function () {
                var t = this,
                    e = this._fixList[this._fixCount];
                gsap.killTweensOf(e),
                    gsap.set(e, { x: -80, opacity: 0, display: "block" }),
                    gsap.to(e, {
                        duration: 0.35,
                        opacity: 1,
                        x: 0,
                        width: "100%",
                        ease: Power2.easeOut,
                        onComplete: function () {
                            t.fixTitleAnimCheck();
                        },
                    });
            }),
            (t.prototype.fixTitleAnimCheck = function () {
                var t = this;
                gsap.killTweensOf(this._timer),
                    (this._timer.count = 0),
                    gsap.to(this._timer, {
                        duration: 5,
                        count: 1,
                        onComplete: function () {
                            t.fixTitleAnimNext();
                        },
                    });
            }),
            (t.prototype.fixTitleAnimNext = function () {
                var t = this._fixList[this._fixCount];
                gsap.killTweensOf(t), (t.style.width = "0%"), (t.style.display = "none"), this._fixCount++, this._fixCount >= this._fixList.length && (this._fixCount = 0), this.titleAnim(0);
            }),
            (t.prototype.pageEnd = function () {
                _glMain.removeEnterFrame(this);
                var t = this;
                gsap.killTweensOf(this._title), gsap.killTweensOf(this._ja), gsap.killTweensOf(this._en), gsap.killTweensOf(this._wrapper), gsap.killTweensOf(this._timer);
                for (var e = (this._timer.count = 0); e < this._titleList.length; e++) {
                    var i = this._titleList[e];
                    gsap.killTweensOf(i), (i.style.width = "0%");
                }
                for (e = 0; e < this._fixList.length; e++) {
                    i = this._fixList[e];
                    gsap.killTweensOf(i), (i.style.width = "0%");
                }
                gsap.to(this._wrapper, {
                    duration: 0.4,
                    opacity: 0,
                    ease: Power3.easeOut,
                    onComplete: function () {
                        t._wrapper.style.display = "none";
                    },
                });
            }),
            (t.prototype.dummyResize = function () {
                var t = document.querySelector(".p-topKV");
                null != t && null != t && (this._wrapper.clientHeight > window.innerHeight ? (t.style.height = this._wrapper.clientHeight + "px") : (t.style.height = "100vh"), (t.style.minHeight = "100vh"));
            }),
            (t.prototype.onResize = function () {
                var t;
                gsap.set(this._spScroll, { top: window.innerHeight - 120 + "px" }),
                    "SP" != _glMain._device
                        ? window.innerWidth < 800
                            ? ((t = 500 < window.innerHeight ? (0.75 * window.innerWidth) / 686 : ((0.8 * window.innerWidth) / 686) * 0.3), gsap.set(this._scaleWrapp, { scale: t }))
                            : window.innerHeight <= 500
                            ? ((t = ((0.8 * window.innerWidth) / 686) * 0.3), gsap.set(this._scaleWrapp, { scale: t }))
                            : 1700 < window.innerWidth
                            ? gsap.set(this._scaleWrapp, { scale: 1 })
                            : gsap.set(this._scaleWrapp, { scale: 0.8 })
                        : window.innerHeight > window.innerWidth
                        ? ((t = (0.8 * window.innerWidth) / 686), gsap.set(this._scaleWrapp, { scale: t }), (this._spScroll.style.visibility = "visible"))
                        : ((t = ((0.8 * window.innerWidth) / 686) * 0.3), gsap.set(this._scaleWrapp, { scale: t }), (this._spScroll.style.visibility = "hidden")),
                    this.dummyResize();
            }),
            t
        );
    })();
!(function (t, e) {
    function i(t) {
        return -1 != o.indexOf(t);
    }
    function s(t) {
        var e = t.split("."),
            i = {};
        return (
            (i.str = t),
            (i.float = parseFloat(t) || 0),
            (i.major = (0 < e.length && parseInt(e[0])) || 0),
            (i.minor = (1 < e.length && parseInt(e[1])) || 0),
            (i.build = (2 < e.length && parseInt(e[2])) || 0),
            (i.revision = (3 < e.length && parseInt(e[3])) || 0),
            i
        );
    }
    var r = { _detects: ["mobile", "tablet", "pc", "windows", "mac", "linux", "ios", "android", "edge", "ie", "safari", "webkit", "chrome", "firefox", "opera", "webview"] },
        o = (r.userAgent = t.navigator.userAgent.toLowerCase());
    try {
        r.mobile = i("iphone") || i("ipod") || (i("android") && i("mobile")) || (i("windows") && i("phone")) || (i("firefox") && i("mobile")) || i("blackberry");
    } catch (t) {}
    try {
        r.tablet = i("ipad") || (i("android") && !i("mobile")) || (i("windows") && i("touch") && !i("tablet pc")) || (i("firefox") && i("tablet")) || i("kindle") || i("silk") || i("playbook");
    } catch (t) {}
    try {
        r.pc =
            !i("iphone") &&
            !i("ipod") &&
            !i("ipad") &&
            !i("android") &&
            (!i("windows") || (!i("phone") && (!i("touch") || i("tablet pc")))) &&
            (!i("firefox") || (!i("mobile") && !i("tablet"))) &&
            !i("blackberry") &&
            !i("kindle") &&
            !i("silk") &&
            !i("playbook");
    } catch (t) {}
    try {
        (r.windows = i("windows")), r.windows && ((r.windows = new Boolean(!0)), o.match(/nt ([\d.]+)/g) && (r.windows.version = s(RegExp.$1)));
    } catch (t) {}
    try {
        (r.mac = i("mac os x") && !i("iphone") && !i("ipad") && !i("ipod")), r.mac && ((r.mac = new Boolean(!0)), o.match(/ mac os x ([\d_\.]+)/g) && (r.mac.version = s(RegExp.$1.replace(/_/g, "."))));
    } catch (t) {}
    try {
        r.linux = i("linux") && !i("android");
    } catch (t) {}
    try {
        (r.ios = i("iphone") || i("ipad") || i("ipod")), r.ios && ((r.ios = new Boolean(!0)), o.match(/ os ([\d_]+)/g) && (r.ios.version = s(RegExp.$1.replace(/_/g, "."))));
    } catch (t) {}
    try {
        (r.android = i("android")), r.android && ((r.android = new Boolean(!0)), o.match(/android ([\d\.]+)/g) && (r.android.version = s(RegExp.$1)));
    } catch (t) {}
    try {
        (r.edge = i("edge")), r.edge && ((r.edge = new Boolean(!0)), o.match(/edge\/([\d.]+)/g) && (r.edge.version = s(RegExp.$1)));
    } catch (t) {}
    try {
        (r.ie = i("trident") || i("msie")), r.ie && ((r.ie = new Boolean(!0)), o.match(/(msie|rv:?)\s?([\d.]+)/g) && (r.ie.version = s(RegExp.$2)));
    } catch (t) {}
    try {
        (r.safari = i("safari") && !i("android") && !i("edge") && !i("opera") && !i("opr") && !i("chrome")), r.safari && ((r.safari = new Boolean(!0)), o.match(/version\/([\d.]+)/g) && (r.safari.version = s(RegExp.$1)));
    } catch (t) {}
    try {
        r.webkit = i("applewebkit") && !i("safari") && !i("android") && !i("edge") && !i("opera") && !i("opr") && !i("chrome");
    } catch (t) {}
    try {
        (r.chrome = i("chrome") && !i("edge") && !i("opera") && !i("opr")), r.chrome && ((r.chrome = new Boolean(!0)), o.match(/chrome\/([\d.]+)/g) && (r.chrome.version = s(RegExp.$1)));
    } catch (t) {}
    try {
        (r.firefox = i("firefox") && !i("edge")), r.firefox && ((r.firefox = new Boolean(!0)), o.match(/firefox\/([\d.]+)/g) && (r.firefox.version = s(RegExp.$1)));
    } catch (t) {}
    try {
        (r.opera = i("opera") || i("opr")), r.opera && ((r.opera = new Boolean(!0)), o.match(/(opera|opr)\/([\d.]+)/g) && (r.opera.version = s(RegExp.$2)));
    } catch (t) {}
    try {
        r.webview = (i("iphone") || i("ipad") || i("ipod")) && (!i("safari") || i("crios") || i("fxios") || i("opios") || i("twitter") || i("fbav") || i("line"));
    } catch (t) {}
    r._classPrefix = "";
    for (var a, n = (e = e.documentElement).className, h = r._detects.length, _ = 0; _ < h; _++) n += r[(a = r._detects[_])] ? " " + a : " no-" + a;
    (e.className = n), (t.glUseragnt = r);
})(window, document);
var glVideoMng = (function () {
        "use strict";
        function t() {}
        return (
            (t.prototype.init = function () {
                (this.isFirst = !0), (this._loadCount = 0), (this.isCheckStart = !1);
                var t = this;
                (this._srcList = ["/cms_dir/wp-content/themes/rdc/assets/gl/video/210708_tex1.mp4", "/cms_dir/wp-content/themes/rdc/assets/gl/video/210708_tex2_2.mp4"]),
                    (this._vList = []),
                    (this._texList = []),
                    Math.random() < 0.7 ? (this._current = 1) : (this._current = 0);
                for (var e = 0; e < this._srcList.length; e++) {
                    var i = document.createElement("video");
                    (i.width = 512),
                        (i.height = 512),
                        (i.muted = !0),
                        this._vList.push(i),
                        (i.preload = "auto"),
                        (i.loop = !0),
                        (i.autoplay = !1),
                        (i.playsInline = !0),
                        (i.src = this._srcList[e]),
                        (i.oncanplaythrough = function () {
                            t.loadCheck();
                        }),
                        i.load();
                    i = new THREE.VideoTexture(i);
                    (i.minFilter = THREE.LinearFilter), (i.magFilter = THREE.LinearFilter), (i.format = THREE.RGBFormat), this._texList.push(i);
                }
                (this._startTimeList = [0, 9, 20]), (this._startTime = this._startTimeList[Math.floor(Math.random() * this._startTimeList.length)]);
            }),
            (t.prototype.loadCheck = function () {
                this.isFirst && (this._loadCount++, this._loadCount >= this._srcList.length && ((this.isFirst = !1), _glMain.setupVideo()));
            }),
            (t.prototype.playVid = function () {
                (this._vList[this._current].currentTime = this._startTime), this._vList[this._current].play(), this.isCheckStart || ((this.isCheckStart = !0), this.focusCheckStart());
            }),
            (t.prototype.getTex = function () {
                return this._texList[this._current];
            }),
            (t.prototype.stopVid = function () {
                this._vList[this._current].pause();
            }),
            (t.prototype.reset = function () {
                this._vList[this._current].pause(), (this._vList[this._current].currentTime = 0);
            }),
            (t.prototype.getCurrentTime = function () {
                return this._vLst[this._current].currentTime;
            }),
            (t.prototype.changeBaseBoxTex = function () {
                this.reset(), this._current++, this._current >= this._vList.length && (this._current = 0), this.playVid();
            }),
            (t.prototype.focusCheckStart = function () {
                var t = this;
                (this.hidden = ""),
                    (this.visibilityChange = ""),
                    void 0 !== document.hidden
                        ? ((this.hidden = "hidden"), (this.visibilityChange = "visibilitychange"))
                        : void 0 !== document.mozHidden
                        ? ((this.hidden = "mozHidden"), (this.visibilityChange = "mozvisibilitychange"))
                        : void 0 !== document.msHidden
                        ? ((this.hidden = "msHidden"), (this.visibilityChange = "msvisibilitychange"))
                        : void 0 !== document.webkitHidden && ((this.hidden = "webkitHidden"), (this.visibilityChange = "webkitvisibilitychange")),
                    document.addEventListener(this.visibilityChange, function () {
                        t.focusCheck(!document[t.hidden]);
                    });
            }),
            (t.prototype.focusCheck = function (t) {
                t ? this._vList[this._current].play() : this._vList[this._current].pause();
            }),
            t
        );
    })(),
    glWorld = (function () {
        "use strict";
        function t() {
            (this._world = document.getElementById("glworld")),
                (this._width = 0),
                (this._height = 0),
                (this._render = null),
                (this._scene = null),
                (this._cam = null),
                (this._fov = 50),
                (this._far = 1e4),
                (this._near = 0.1),
                (this.isFirstResize = !0);
        }
        return (
            (t.prototype.init = function () {
                var t;
                (this._width = this._world.clientWidth),
                    (this._height = this._world.clientHeight),
                    this.setViewPort(),
                    (this._cam = new THREE.OrthographicCamera(this._viewPort.left, this._viewPort.right, this._viewPort.top, this._viewPort.bottom, this._viewPort.near, this._viewPort.far)),
                    this._cam.position.set(0, 0, 1e3),
                    (this._scene = new THREE.Scene()),
                    (this._render = new THREE.WebGLRenderer({ antialias: !1, alpha: !1 })),
                    this._render.setClearColor(16777215, 1),
                    1 < window.devicePixelRatio ? ((t = Math.min(window.devicePixelRatio, 1.25)), this._render.setPixelRatio(t)) : this._render.setPixelRatio(1),
                    this._render.setSize(this._width, this._height),
                    this._world.appendChild(this._render.domElement),
                    (this._noise = new glNoiseSet(this)),
                    this._noise.init(),
                    (this._display = new glDisplay(this)),
                    this._display.init(),
                    (this._grade = new glGrade()),
                    this._grade.init(),
                    (this._dummy = new glDummyScene()),
                    this._dummy.init(),
                    (this._objMng = new glObjMng(this)),
                    this._objMng.init();
            }),
            (t.prototype.setupDisplay = function () {
                _glMain.addResize(this), this.onResize(), _glMain.setupWorld();
            }),
            (t.prototype.contentsStart = function () {
                this.playAnimation(), this._noise.contentsStart(), this._dummy.contentsStart(), this._display.contentsStart(), this._objMng.contentsStart(), this._grade.start();
            }),
            (t.prototype.playAnimation = function () {
                _glMain.removeEnterFrame(this), _glMain.addEnterFrame(this, "enterFrame");
            }),
            (t.prototype.enterFrame = function () {
                this._render.render(this._scene, this._cam);
            }),
            (t.prototype.pageStart = function () {}),
            (t.prototype.pageEnd = function () {
                this._objMng.pageEnd();
            }),
            (t.prototype.setViewPort = function () {
                this._viewPort = {};
                var t = this._width,
                    e = this._height,
                    t = t / e;
                this._viewPort = { viewSize: e, aspectRatio: t, left: (-t * e) / 2, right: (t * e) / 2, top: e / 2, bottom: -e / 2, near: 0, far: 1e4 };
            }),
            (t.prototype.onResize = function () {
                if ("PC" != _glMain._device) {
                    if (!this.isFirstResize && this._width == window.innerWidth) return;
                    this.isFirstResize = !1;
                }
                800 < window.innerWidth
                    ? ((this._width = this._world.clientWidth), (this._height = window.innerHeight), (this._cam.position.y = 0))
                    : ((this._width = this._world.clientWidth), (this._height = Math.ceil(1.35 * window.innerHeight)), (this._cam.position.y = 0.5 * -(this._height - window.innerHeight))),
                    this.setViewPort(),
                    (this._cam.left = this._viewPort.left),
                    (this._cam.right = this._viewPort.right),
                    (this._cam.top = this._viewPort.top),
                    (this._cam.bottom = this._viewPort.bottom),
                    this._cam.updateProjectionMatrix(),
                    this._render.setSize(this._width, this._height),
                    this._display.onResize(),
                    this._objMng._root.onResize(),
                    _glMain._top.onResize();
            }),
            t
        );
    })();
THREE.OBJLoader = (function () {
    var V = /^[og]\s*(.+)?/,
        A = /^mtllib /,
        U = /^usemtl /;
    function W() {
        var t = {
            objects: [],
            object: {},
            vertices: [],
            normals: [],
            uvs: [],
            materialLibraries: [],
            startObject: function (t, e) {
                if (this.object && !1 === this.object.fromDeclaration) return (this.object.name = t), void (this.object.fromDeclaration = !1 !== e);
                var i = this.object && "function" == typeof this.object.currentMaterial ? this.object.currentMaterial() : void 0;
                this.object && "function" == typeof this.object._finalize && this.object._finalize(!0),
                    (this.object = {
                        name: t || "",
                        fromDeclaration: !1 !== e,
                        geometry: { vertices: [], normals: [], uvs: [] },
                        materials: [],
                        smooth: !0,
                        startMaterial: function (t, e) {
                            var i = this._finalize(!1);
                            i && (i.inherited || i.groupCount <= 0) && this.materials.splice(i.index, 1);
                            i = {
                                index: this.materials.length,
                                name: t || "",
                                mtllib: Array.isArray(e) && 0 < e.length ? e[e.length - 1] : "",
                                smooth: (void 0 !== i ? i : this).smooth,
                                groupStart: void 0 !== i ? i.groupEnd : 0,
                                groupEnd: -1,
                                groupCount: -1,
                                inherited: !1,
                                clone: function (t) {
                                    t = { index: "number" == typeof t ? t : this.index, name: this.name, mtllib: this.mtllib, smooth: this.smooth, groupStart: 0, groupEnd: -1, groupCount: -1, inherited: !1 };
                                    return (t.clone = this.clone.bind(t)), t;
                                },
                            };
                            return this.materials.push(i), i;
                        },
                        currentMaterial: function () {
                            if (0 < this.materials.length) return this.materials[this.materials.length - 1];
                        },
                        _finalize: function (t) {
                            var e = this.currentMaterial();
                            if ((e && -1 === e.groupEnd && ((e.groupEnd = this.geometry.vertices.length / 3), (e.groupCount = e.groupEnd - e.groupStart), (e.inherited = !1)), t && 1 < this.materials.length))
                                for (var i = this.materials.length - 1; 0 <= i; i--) this.materials[i].groupCount <= 0 && this.materials.splice(i, 1);
                            return t && 0 === this.materials.length && this.materials.push({ name: "", smooth: this.smooth }), e;
                        },
                    }),
                    i && i.name && "function" == typeof i.clone && (((i = i.clone(0)).inherited = !0), this.object.materials.push(i)),
                    this.objects.push(this.object);
            },
            finalize: function () {
                this.object && "function" == typeof this.object._finalize && this.object._finalize(!0);
            },
            parseVertexIndex: function (t, e) {
                t = parseInt(t, 10);
                return 3 * (0 <= t ? t - 1 : t + e / 3);
            },
            parseNormalIndex: function (t, e) {
                t = parseInt(t, 10);
                return 3 * (0 <= t ? t - 1 : t + e / 3);
            },
            parseUVIndex: function (t, e) {
                t = parseInt(t, 10);
                return 2 * (0 <= t ? t - 1 : t + e / 2);
            },
            addVertex: function (t, e, i) {
                var s = this.vertices,
                    r = this.object.geometry.vertices;
                r.push(s[t + 0], s[t + 1], s[t + 2]), r.push(s[e + 0], s[e + 1], s[e + 2]), r.push(s[i + 0], s[i + 1], s[i + 2]);
            },
            addVertexLine: function (t) {
                var e = this.vertices;
                this.object.geometry.vertices.push(e[t + 0], e[t + 1], e[t + 2]);
            },
            addNormal: function (t, e, i) {
                var s = this.normals,
                    r = this.object.geometry.normals;
                r.push(s[t + 0], s[t + 1], s[t + 2]), r.push(s[e + 0], s[e + 1], s[e + 2]), r.push(s[i + 0], s[i + 1], s[i + 2]);
            },
            addUV: function (t, e, i) {
                var s = this.uvs,
                    r = this.object.geometry.uvs;
                r.push(s[t + 0], s[t + 1]), r.push(s[e + 0], s[e + 1]), r.push(s[i + 0], s[i + 1]);
            },
            addUVLine: function (t) {
                var e = this.uvs;
                this.object.geometry.uvs.push(e[t + 0], e[t + 1]);
            },
            addFace: function (t, e, i, s, r, o, a, n, h) {
                var _,
                    l = this.vertices.length,
                    t = this.parseVertexIndex(t, l),
                    e = this.parseVertexIndex(e, l),
                    l = this.parseVertexIndex(i, l);
                this.addVertex(t, e, l),
                    void 0 !== s && ((_ = this.uvs.length), (t = this.parseUVIndex(s, _)), (e = this.parseUVIndex(r, _)), (l = this.parseUVIndex(o, _)), this.addUV(t, e, l)),
                    void 0 !== a && ((_ = this.normals.length), (t = this.parseNormalIndex(a, _)), (e = a === n ? t : this.parseNormalIndex(n, _)), (l = a === h ? t : this.parseNormalIndex(h, _)), this.addNormal(t, e, l));
            },
            addLineGeometry: function (t, e) {
                this.object.geometry.type = "Line";
                for (var i = this.vertices.length, s = this.uvs.length, r = 0, o = t.length; r < o; r++) this.addVertexLine(this.parseVertexIndex(t[r], i));
                for (var a = 0, o = e.length; a < o; a++) this.addUVLine(this.parseUVIndex(e[a], s));
            },
        };
        return t.startObject("", !1), t;
    }
    function t(t) {
        (this.manager = void 0 !== t ? t : THREE.DefaultLoadingManager), (this.materials = null);
    }
    return (
        (t.prototype = {
            constructor: t,
            load: function (t, e, i, s) {
                var r = this,
                    o = new THREE.FileLoader(r.manager);
                o.setPath(this.path),
                    o.load(
                        t,
                        function (t) {
                            e(r.parse(t));
                        },
                        i,
                        s
                    );
            },
            setPath: function (t) {
                this.path = t;
            },
            setMaterials: function (t) {
                return (this.materials = t), this;
            },
            parse: function (t) {
                var e = new W();
                -1 !== t.indexOf("\r\n") && (t = t.replace(/\r\n/g, "\n")), -1 !== t.indexOf("\\\n") && (t = t.replace(/\\\n/g, ""));
                for (var i, s, r = t.split("\n"), o = "", a = [], n = "function" == typeof "".trimLeft, h = 0, _ = r.length; h < _; h++)
                    if (((o = r[h]), (o = n ? o.trimLeft() : o.trim()), (s = o.length), 0 !== s && "#" !== (i = o.charAt(0))))
                        if ("v" === i) {
                            var l = o.split(/\s+/);
                            switch (l[0]) {
                                case "v":
                                    e.vertices.push(parseFloat(l[1]), parseFloat(l[2]), parseFloat(l[3]));
                                    break;
                                case "vn":
                                    e.normals.push(parseFloat(l[1]), parseFloat(l[2]), parseFloat(l[3]));
                                    break;
                                case "vt":
                                    e.uvs.push(parseFloat(l[1]), parseFloat(l[2]));
                            }
                        } else if ("f" === i) {
                            for (var p = o.substr(1).trim().split(/\s+/), d = [], c = 0, u = p.length; c < u; c++) {
                                var m = p[c];
                                0 < m.length && ((m = m.split("/")), d.push(m));
                            }
                            for (var g = d[0], c = 1, u = d.length - 1; c < u; c++) {
                                var f = d[c],
                                    y = d[c + 1];
                                e.addFace(g[0], f[0], y[0], g[1], f[1], y[1], g[2], f[2], y[2]);
                            }
                        } else if ("l" === i) {
                            var v = o.substring(1).trim().split(" "),
                                w = [],
                                x = [];
                            if (-1 === o.indexOf("/")) w = v;
                            else
                                for (var b = 0, M = v.length; b < M; b++) {
                                    var T = v[b].split("/");
                                    "" !== T[0] && w.push(T[0]), "" !== T[1] && x.push(T[1]);
                                }
                            e.addLineGeometry(w, x);
                        } else if (null !== (a = V.exec(o))) {
                            var E = (" " + a[0].substr(1).trim()).substr(1);
                            e.startObject(E);
                        } else if (U.test(o)) e.object.startMaterial(o.substring(7).trim(), e.materialLibraries);
                        else if (A.test(o)) e.materialLibraries.push(o.substring(7).trim());
                        else if ("s" === i)
                            1 < (a = o.split(" ")).length ? ((E = a[1].trim().toLowerCase()), (e.object.smooth = "0" !== E && "off" !== E)) : (e.object.smooth = !0), (P = e.object.currentMaterial()) && (P.smooth = e.object.smooth);
                        else if ("\0" !== o) throw new Error("Unexpected line: '" + o + "'");
                e.finalize();
                var S = new THREE.Group();
                S.materialLibraries = [].concat(e.materialLibraries);
                for (h = 0, _ = e.objects.length; h < _; h++) {
                    var R = e.objects[h],
                        G = R.geometry,
                        L = R.materials,
                        j = "Line" === G.type;
                    if (0 !== G.vertices.length) {
                        var C = new THREE.BufferGeometry();
                        C.addAttribute("position", new THREE.BufferAttribute(new Float32Array(G.vertices), 3)),
                            0 < G.normals.length ? C.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(G.normals), 3)) : C.computeVertexNormals(),
                            0 < G.uvs.length && C.addAttribute("uv", new THREE.BufferAttribute(new Float32Array(G.uvs), 2));
                        for (var F, O = [], k = 0, H = L.length; k < H; k++) {
                            var z,
                                B = L[k],
                                P = void 0;
                            null !== this.materials && ((P = this.materials.create(B.name)), !j || !P || P instanceof THREE.LineBasicMaterial || ((z = new THREE.LineBasicMaterial()).copy(P), (P = z))),
                                P || ((P = new (j ? THREE.LineBasicMaterial : THREE.MeshPhongMaterial)()).name = B.name),
                                (P.flatShading = !B.smooth),
                                O.push(P);
                        }
                        if (1 < O.length) {
                            for (k = 0, H = L.length; k < H; k++) {
                                B = L[k];
                                C.addGroup(B.groupStart, B.groupCount, k);
                            }
                            F = new (j ? THREE.LineSegments : THREE.Mesh)(C, O);
                        } else F = new (j ? THREE.LineSegments : THREE.Mesh)(C, O[0]);
                        (F.name = R.name), S.add(F);
                    }
                }
                return S;
            },
        }),
        t
    );
})();
var glBaseBox = (function () {
        "use strict";
        function t(t) {
            (this._parent = t), (this._gradeTime = null);
        }
        return (
            (t.prototype.init = function () {
                (this._group = new THREE.Object3D()), this._parent._root._root.add(this._group), (this._sideG = new THREE.PlaneGeometry(100, 100, 4, 1));
                for (var t = 0; t < this._sideG.faceVertexUvs[0].length; t += 2)
                    (this._sideG.faceVertexUvs[0][t][0].x = 0),
                        (this._sideG.faceVertexUvs[0][t][0].y = 1),
                        (this._sideG.faceVertexUvs[0][t][1].x = 0),
                        (this._sideG.faceVertexUvs[0][t][1].y = 0),
                        (this._sideG.faceVertexUvs[0][t][2].x = 1),
                        (this._sideG.faceVertexUvs[0][t][2].y = 1),
                        (this._sideG.faceVertexUvs[0][t + 1][0].x = 0),
                        (this._sideG.faceVertexUvs[0][t + 1][0].y = 0),
                        (this._sideG.faceVertexUvs[0][t + 1][1].x = 1),
                        (this._sideG.faceVertexUvs[0][t + 1][1].y = 0),
                        (this._sideG.faceVertexUvs[0][t + 1][2].x = 1),
                        (this._sideG.faceVertexUvs[0][t + 1][2].y = 1);
                var e = 0.806;
                (this._sideG.vertices[0].x = -e),
                    (this._sideG.vertices[0].y = e),
                    (this._sideG.vertices[0].z = e),
                    (this._sideG.vertices[1].x = e),
                    (this._sideG.vertices[1].y = e),
                    (this._sideG.vertices[1].z = e),
                    (this._sideG.vertices[2].x = e),
                    (this._sideG.vertices[2].y = e),
                    (this._sideG.vertices[2].z = -e),
                    (this._sideG.vertices[3].x = -e),
                    (this._sideG.vertices[3].y = e),
                    (this._sideG.vertices[3].z = -e),
                    (this._sideG.vertices[4].x = -e),
                    (this._sideG.vertices[4].y = e),
                    (this._sideG.vertices[4].z = e),
                    (this._sideG.vertices[5].x = -e),
                    (this._sideG.vertices[5].y = -e),
                    (this._sideG.vertices[5].z = e),
                    (this._sideG.vertices[6].x = e),
                    (this._sideG.vertices[6].y = -e),
                    (this._sideG.vertices[6].z = e),
                    (this._sideG.vertices[7].x = e),
                    (this._sideG.vertices[7].y = -e),
                    (this._sideG.vertices[7].z = -e),
                    (this._sideG.vertices[8].x = -e),
                    (this._sideG.vertices[8].y = -e),
                    (this._sideG.vertices[8].z = -e),
                    (this._sideG.vertices[9].x = -e),
                    (this._sideG.vertices[9].y = -e),
                    (this._sideG.vertices[9].z = e),
                    (this._sideG.verticesNeedUpdate = !0),
                    this._sideG.computeFaceNormals(),
                    this._sideG.computeVertexNormals(),
                    (this._sss = 500),
                    (this._shader = {
                        vertexShader: _glMain._parts.getShader("shader/baseBox_vtx.js"),
                        fragmentShader: _glMain._parts.getShader("shader/baseBox_frg.js"),
                        uniforms: {
                            texture: { value: null },
                            redTexture: { value: _glMain._parts.getTex("red.png") },
                            grade: { value: null },
                            alpha: { value: 0 },
                            gradeShift: { value: 0 },
                            lPos1: { value: new THREE.Vector3(0.5, 1, 0.8) },
                            isRed: { value: 0 },
                        },
                        transparent: !0,
                        flatShading: !0,
                        wireframe: !1,
                    }),
                    (this._m = new THREE.ShaderMaterial(this._shader)),
                    (this._side = new THREE.Mesh(this._sideG, this._m)),
                    (this._side.scale.x = this._sss),
                    (this._side.scale.y = this._side.scale.z = this._side.scale.x),
                    this._group.add(this._side),
                    (this._topG = new THREE.PlaneGeometry(100, 100, 1, 1)),
                    (this._topG.vertices[0].x = -e),
                    (this._topG.vertices[0].y = e),
                    (this._topG.vertices[0].z = -e),
                    (this._topG.vertices[1].x = e),
                    (this._topG.vertices[1].y = e),
                    (this._topG.vertices[1].z = -e),
                    (this._topG.vertices[2].x = -e),
                    (this._topG.vertices[2].y = e),
                    (this._topG.vertices[2].z = e),
                    (this._topG.vertices[3].x = e),
                    (this._topG.vertices[3].y = e),
                    (this._topG.vertices[3].z = e),
                    (this._topG.verticesNeedUpdate = !0),
                    this._topG.computeFaceNormals(),
                    this._topG.computeVertexNormals(),
                    (this._top = new THREE.Mesh(this._topG, this._m)),
                    (this._top.scale.x = this._sss),
                    (this._top.scale.y = this._top.scale.z = this._top.scale.x),
                    this._group.add(this._top),
                    (this._bottomG = new THREE.PlaneGeometry(100, 100, 1, 1)),
                    (this._bottomG.vertices[0].x = e),
                    (this._bottomG.vertices[0].y = -e),
                    (this._bottomG.vertices[0].z = -e),
                    (this._bottomG.vertices[1].x = -e),
                    (this._bottomG.vertices[1].y = -e),
                    (this._bottomG.vertices[1].z = -e),
                    (this._bottomG.vertices[2].x = e),
                    (this._bottomG.vertices[2].y = -e),
                    (this._bottomG.vertices[2].z = e),
                    (this._bottomG.vertices[3].x = -e),
                    (this._bottomG.vertices[3].y = -e),
                    (this._bottomG.vertices[3].z = e),
                    (this._bottomG.verticesNeedUpdate = !0),
                    this._bottomG.computeFaceNormals(),
                    this._bottomG.computeVertexNormals(),
                    (this._bottom = new THREE.Mesh(this._bottomG, this._m)),
                    (this._bottom.scale.x = this._sss),
                    (this._bottom.scale.y = this._bottom.scale.z = this._bottom.scale.x),
                    this._group.add(this._bottom),
                    _glMain.addResize(this),
                    this.onResize();
            }),
            (t.prototype.onResize = function () {
                (this._sss = 500),
                    window.innerWidth < 800 && ((this._sss = 504), window.innerWidth < 500 && ((this._sss = 508), 800 < window.innerHeight && (this._sss = 510))),
                    (this._side.scale.x = this._sss),
                    (this._side.scale.y = this._side.scale.z = this._side.scale.x),
                    (this._top.scale.x = this._sss),
                    (this._top.scale.y = this._top.scale.z = this._top.scale.x),
                    (this._bottom.scale.x = this._sss),
                    (this._bottom.scale.y = this._bottom.scale.z = this._bottom.scale.x);
            }),
            (t.prototype.contentsStart = function () {
                (this._group.visible = !1), (this._shader.uniforms.texture.value = _glMain._videoMng.getTex());
            }),
            (t.prototype.firstStart = function () {}),
            (t.prototype.setFirstView = function () {
                (this._group.visible = !0),
                    gsap.killTweensOf(this._shader.uniforms.alpha),
                    gsap.to(this._shader.uniforms.alpha, { duration: 1.5, value: 1, ease: Power3.easeOut }),
                    (this._shader.uniforms.grade.value = _glMain._world._grade._render.texture),
                    _glMain._world._grade.start();
            }),
            (t.prototype.setUnderStart = function () {
                (this._group.visible = !1),
                    gsap.killTweensOf(this._shader.uniforms.alpha),
                    gsap.to(this._shader.uniforms.alpha, {
                        duration: 0.6,
                        delay: 0.5,
                        value: 0,
                        ease: Power3.easeOut,
                        onComplete: function () {
                            _glMain._world._grade.start();
                        },
                    }),
                    (this._shader.uniforms.grade.value = _glMain._world._grade._render.texture);
            }),
            (t.prototype.changeTex = function () {
                this._shader.uniforms.texture.value = _glMain._videoMng.getTex();
            }),
            (t.prototype.changeForm = function (t) {
                var e = this;
                1 == t
                    ? (gsap.killTweensOf(this._shader.uniforms.alpha),
                      gsap.to(this._shader.uniforms.alpha, {
                          duration: 0.4,
                          value: 0,
                          onComplete: function () {
                              (e._group.visible = !1), _glMain._world._grade.stop();
                          },
                      }))
                    : 0 == t && ((this._group.visible = !0), gsap.killTweensOf(this._shader.uniforms.alpha), gsap.to(this._shader.uniforms.alpha, { duration: 0.7, delay: 1.3, value: 1, ease: Power3.easeIn }), _glMain._world._grade.start());
            }),
            t
        );
    })(),
    glBaseBoxS = (function () {
        "use strict";
        function t(t) {
            (this._parent = t), (this._texNum = 0);
        }
        return (
            (t.prototype.init = function () {
                (this._scale = 70),
                    (this._leng1 = 454),
                    (this._group = new THREE.Object3D()),
                    (this._group.position.x = 18 - this._leng1),
                    (this._group.position.y = 18 - this._leng1),
                    (this._group.position.z = -this._leng1),
                    this._parent._root._root.add(this._group),
                    (this._sideG = new THREE.PlaneGeometry(100, 100, 4, 1));
                for (var t = 0; t < this._sideG.faceVertexUvs[0].length; t += 2)
                    (this._sideG.faceVertexUvs[0][t][0].x = 0),
                        (this._sideG.faceVertexUvs[0][t][0].y = 1),
                        (this._sideG.faceVertexUvs[0][t][1].x = 0),
                        (this._sideG.faceVertexUvs[0][t][1].y = 0),
                        (this._sideG.faceVertexUvs[0][t][2].x = 1),
                        (this._sideG.faceVertexUvs[0][t][2].y = 1),
                        (this._sideG.faceVertexUvs[0][t + 1][0].x = 0),
                        (this._sideG.faceVertexUvs[0][t + 1][0].y = 0),
                        (this._sideG.faceVertexUvs[0][t + 1][1].x = 1),
                        (this._sideG.faceVertexUvs[0][t + 1][1].y = 0),
                        (this._sideG.faceVertexUvs[0][t + 1][2].x = 1),
                        (this._sideG.faceVertexUvs[0][t + 1][2].y = 1);
                var e = 0.808;
                (this._sideG.vertices[0].x = -e),
                    (this._sideG.vertices[0].y = e),
                    (this._sideG.vertices[0].z = e),
                    (this._sideG.vertices[1].x = e),
                    (this._sideG.vertices[1].y = e),
                    (this._sideG.vertices[1].z = e),
                    (this._sideG.vertices[2].x = e),
                    (this._sideG.vertices[2].y = e),
                    (this._sideG.vertices[2].z = -e),
                    (this._sideG.vertices[3].x = -e),
                    (this._sideG.vertices[3].y = e),
                    (this._sideG.vertices[3].z = -e),
                    (this._sideG.vertices[4].x = -e),
                    (this._sideG.vertices[4].y = e),
                    (this._sideG.vertices[4].z = e),
                    (this._sideG.vertices[5].x = -e),
                    (this._sideG.vertices[5].y = -e),
                    (this._sideG.vertices[5].z = e),
                    (this._sideG.vertices[6].x = e),
                    (this._sideG.vertices[6].y = -e),
                    (this._sideG.vertices[6].z = e),
                    (this._sideG.vertices[7].x = e),
                    (this._sideG.vertices[7].y = -e),
                    (this._sideG.vertices[7].z = -e),
                    (this._sideG.vertices[8].x = -e),
                    (this._sideG.vertices[8].y = -e),
                    (this._sideG.vertices[8].z = -e),
                    (this._sideG.vertices[9].x = -e),
                    (this._sideG.vertices[9].y = -e),
                    (this._sideG.vertices[9].z = e),
                    (this._sideG.verticesNeedUpdate = !0),
                    this._sideG.computeFaceNormals(),
                    this._sideG.computeVertexNormals(),
                    (this._shader = {
                        vertexShader: _glMain._parts.getShader("shader/baseBox_vtx.js"),
                        fragmentShader: _glMain._parts.getShader("shader/baseBoxS_frg.js"),
                        uniforms: {
                            texture: { value: null },
                            redTexture: { value: _glMain._parts.getTex("red.png") },
                            grade: { value: null },
                            alpha: { value: 0 },
                            gradeShift: { value: 0 },
                            lPos1: { value: new THREE.Vector3(0.5, 1, 0.8) },
                            isRed: { value: 0 },
                        },
                        transparent: !0,
                        flatShading: !0,
                        wireframe: !1,
                    }),
                    (this._m = new THREE.ShaderMaterial(this._shader)),
                    (this._side = new THREE.Mesh(this._sideG, this._m)),
                    (this._side.scale.x = this._scale),
                    (this._side.scale.y = this._side.scale.z = this._side.scale.x),
                    this._group.add(this._side),
                    (this._topG = new THREE.PlaneGeometry(100, 100, 1, 1)),
                    (this._topG.vertices[0].x = -e),
                    (this._topG.vertices[0].y = e),
                    (this._topG.vertices[0].z = -e),
                    (this._topG.vertices[1].x = e),
                    (this._topG.vertices[1].y = e),
                    (this._topG.vertices[1].z = -e),
                    (this._topG.vertices[2].x = -e),
                    (this._topG.vertices[2].y = e),
                    (this._topG.vertices[2].z = e),
                    (this._topG.vertices[3].x = e),
                    (this._topG.vertices[3].y = e),
                    (this._topG.vertices[3].z = e),
                    (this._topG.verticesNeedUpdate = !0),
                    this._topG.computeFaceNormals(),
                    this._topG.computeVertexNormals(),
                    (this._top = new THREE.Mesh(this._topG, this._m)),
                    (this._top.scale.x = this._scale),
                    (this._top.scale.y = this._top.scale.z = this._top.scale.x),
                    this._group.add(this._top),
                    (this._bottomG = new THREE.PlaneGeometry(100, 100, 1, 1)),
                    (this._bottomG.vertices[0].x = e),
                    (this._bottomG.vertices[0].y = -e),
                    (this._bottomG.vertices[0].z = -e),
                    (this._bottomG.vertices[1].x = -e),
                    (this._bottomG.vertices[1].y = -e),
                    (this._bottomG.vertices[1].z = -e),
                    (this._bottomG.vertices[2].x = e),
                    (this._bottomG.vertices[2].y = -e),
                    (this._bottomG.vertices[2].z = e),
                    (this._bottomG.vertices[3].x = -e),
                    (this._bottomG.vertices[3].y = -e),
                    (this._bottomG.vertices[3].z = e),
                    (this._bottomG.verticesNeedUpdate = !0),
                    this._bottomG.computeFaceNormals(),
                    this._bottomG.computeVertexNormals(),
                    (this._bottom = new THREE.Mesh(this._bottomG, this._m)),
                    (this._bottom.scale.x = this._scale),
                    (this._bottom.scale.y = this._bottom.scale.z = this._bottom.scale.x),
                    this._group.add(this._bottom);
            }),
            (t.prototype.contentsStart = function () {
                (this._side.visible = !1), (this._top.visible = !1), (this._bottom.visible = !1), (this._shader.uniforms.texture.value = _glMain._videoMng.getTex()), _glMain.removeEnterFrame(this), _glMain.addEnterFrame(this, "enterFrame");
            }),
            (t.prototype.firstStart = function () {}),
            (t.prototype.setFirstView = function () {
                gsap.killTweensOf(this._group.position),
                    gsap.to(this._group.position, { duration: 1, x: -this._leng1, y: -this._leng1 }),
                    (this._side.visible = !0),
                    (this._top.visible = !0),
                    (this._bottom.visible = !0),
                    gsap.killTweensOf(this._shader.uniforms.alpha),
                    gsap.to(this._shader.uniforms.alpha, { duration: 1.5, value: 1, ease: Power3.easeOut }),
                    (this._shader.uniforms.grade.value = _glMain._world._grade._render.texture);
            }),
            (t.prototype.setUnderStart = function () {
                gsap.killTweensOf(this._group.position),
                    gsap.to(this._group.position, { duration: 1, x: -this._leng1, y: -this._leng1 }),
                    (this._side.visible = !1),
                    (this._top.visible = !1),
                    (this._bottom.visible = !1),
                    gsap.killTweensOf(this._shader.uniforms.alpha),
                    gsap.to(this._shader.uniforms.alpha, { duration: 0.6, delay: 0.5, value: 0, ease: Power3.easeOut });
            }),
            (t.prototype.enterFrame = function () {
                _glMain.isFirstView || ((this._group.rotation.y -= 0.01), (this._group.rotation.z -= 0.02));
            }),
            (t.prototype.changeTex = function () {
                this._shader.uniforms.texture.value = _glMain._videoMng.getTex();
            }),
            (t.prototype.changeForm = function (t) {
                var e = this;
                1 == t
                    ? (gsap.killTweensOf(this._shader.uniforms.alpha),
                      gsap.to(this._shader.uniforms.alpha, {
                          duration: 0.6,
                          value: 0,
                          ease: Power3.easeOut,
                          onComplete: function () {
                              e._group.visible = !1;
                          },
                      }),
                      gsap.killTweensOf(this._group.scale),
                      gsap.to(this._group.scale, { duration: 1, x: 0.2, y: 0.2, z: 0.2, ease: Power3.easeOut }))
                    : 0 == t &&
                      ((this._group.visible = !0),
                      gsap.killTweensOf(this._shader.uniforms.alpha),
                      gsap.to(this._shader.uniforms.alpha, { duration: 0.7, delay: 1.3, value: 1, ease: Power3.easeIn }),
                      gsap.killTweensOf(this._group.scale),
                      gsap.to(this._group.scale, { duration: 0.7, delay: 1.3, x: 1, y: 1, z: 1, ease: Power3.easeInOut }));
            }),
            t
        );
    })(),
    glBeacon = (function () {
        function t() {
            this._trg, (this._funcName = "");
        }
        return (
            (t.prototype.set = function (t, e) {
                (null != this._trg && null != this._trg) || ((this._trg = t), (this._funcName = e), _glMain.addEnterFrame(this, "onEnterFrame"));
            }),
            (t.prototype.onEnterFrame = function () {
                this._trg[this._funcName]();
            }),
            (t.prototype.clear = function () {
                null != this._trg && null != this._trg && (_glMain.removeEnterFrame(this), (this._trg = null), (this._funcName = ""));
            }),
            t
        );
    })(),
    glDisplay = (function () {
        "use strict";
        function t(t) {
            this._parent = t;
        }
        return (
            (t.prototype.init = function () {
                (this._g = new THREE.PlaneBufferGeometry(100, 100, 1, 1)),
                    (this._shader = {
                        vertexShader: _glMain._parts.getShader("shader/planeBase_vtx.js"),
                        fragmentShader: _glMain._parts.getShader("shader/display_frg.js"),
                        uniforms: { texture: { value: null }, noise: { value: null }, alpha: { value: 1 }, tilt: { value: 0.003 }, time: { value: 0 }, strength: { value: 0 } },
                        transparent: !0,
                    }),
                    (this._m = new THREE.ShaderMaterial(this._shader)),
                    (this._mesh = new THREE.Mesh(this._g, this._m)),
                    this._parent._scene.add(this._mesh);
            }),
            (t.prototype.contentsStart = function () {
                (this._shader.uniforms.noise.value = this._parent._noise._render.texture), (this._shader.uniforms.texture.value = this._parent._dummy._render.texture);
            }),
            (t.prototype.wave = function (t) {
                var e = this;
                _glMain.removeEnterFrame(this),
                    _glMain.addEnterFrame(this, "enterFrame"),
                    gsap.killTweensOf(this._shader.uniforms.strength),
                    t
                        ? gsap.to(this._shader.uniforms.strength, { duration: 0.6, value: 0.0011 })
                        : gsap.to(this._shader.uniforms.strength, {
                              duration: 0.6,
                              value: 0,
                              onComplete: function () {
                                  _glMain.removeEnterFrame(e);
                              },
                          });
            }),
            (t.prototype.enterFrame = function () {
                this._shader.uniforms.time.value += 0.04;
            }),
            (t.prototype.onResize = function () {
                var t = this._g.attributes.position.array;
                (t[0] = 0.5 * -this._parent._width),
                    (t[1] = 0.5 * this._parent._height),
                    (t[3] = 0.5 * this._parent._width),
                    (t[4] = 0.5 * this._parent._height),
                    (t[6] = 0.5 * -this._parent._width),
                    (t[7] = 0.5 * -this._parent._height),
                    (t[9] = 0.5 * this._parent._width),
                    (t[10] = 0.5 * -this._parent._height),
                    (this._g.attributes.position.needsUpdate = !0);
            }),
            t
        );
    })(),
    glDummyScene = (function () {
        "use strict";
        function t() {
            (this._width = 0), (this._height = 0), (this._render = null), (this._scene = null), (this._cam = null), (this._fov = 64), (this._far = 14e3), (this._near = 0.1);
        }
        return (
            (t.prototype.init = function () {
                (this._camBC = new glBeacon()),
                    (this._baseZ = 2500),
                    (this._cZ = this._baseZ),
                    (this._width = _glMain._world._width),
                    (this._height = _glMain._world._height),
                    (this._centerY = 0),
                    (this._cam = new THREE.PerspectiveCamera(this._fov, this._width / this._height, this._near, this._far)),
                    (this._cam.position.x = 0),
                    (this._cam.position.y = 0),
                    (this._cam.position.z = 2e3),
                    (this._scene = new THREE.Scene()),
                    (this._render = new THREE.WebGLRenderTarget(this._width, this._height, {
                        magFilter: THREE.LinearFilter,
                        minFilter: THREE.LinearFilter,
                        wrapS: THREE.ClampToEdgeWrapping,
                        wrapT: THREE.ClampToEdgeWrapping,
                        format: THREE.RGBAFormat,
                    })),
                    (this._bg = new glDummyBg(this)),
                    this._bg.init(),
                    _glMain.addResize(this),
                    this.onResize();
            }),
            (t.prototype.contentsStart = function () {
                _glMain.removeEnterFrame(this), _glMain.addEnterFrame(this, "enterFrame");
            }),
            (t.prototype.enterFrame = function () {
                _glMain._world._render.render(this._scene, this._cam, this._render);
            }),
            (t.prototype.onResize = function () {
                (this._width = _glMain._world._width),
                    (this._height = _glMain._world._height),
                    this._render.setSize(this._width, this._height),
                    (this._cam.aspect = this._width / this._height),
                    this._cam.updateProjectionMatrix(),
                    this._bg.onResize(),
                    1e3 <= window.innerWidth ? (this._cam.position.z = 2e3) : window.innerWidth < 1e3 && 700 <= window.innerWidth ? (this._cam.position.z = 3400) : (this._cam.position.z = 3900);
            }),
            t
        );
    })(),
    glDummyBg = (function () {
        "use strict";
        function t(t) {
            this._parent = t;
        }
        return (
            (t.prototype.init = function () {
                (this._g = new THREE.PlaneGeometry(4e3, 4e3, 1, 1)),
                    (this._m = new THREE.MeshBasicMaterial({ transparent: !0, map: _glMain._parts.getTex("bg.png") })),
                    (this._mesh = new THREE.Mesh(this._g, this._m)),
                    (this._mesh.position.z = -5e3),
                    (this._mesh.scale.x = this._mesh.scale.y = 5),
                    this._parent._scene.add(this._mesh);
            }),
            (t.prototype.onResize = function () {
                var t = 1920 / window.innerWidth,
                    e = 1080 / window.innerHeight;
                window.innerWidth <= 2e3 ? t < e && (this._mesh.scale.x = this._mesh.scale.y = 5 * e) : (this._mesh.scale.x = this._mesh.scale.y = t < e ? 5 * e * 1.2 : 5.2);
            }),
            t
        );
    })(),
    glGrade = (function () {
        "use strict";
        function t() {
            this._timer = { count: 0 };
        }
        return (
            (t.prototype.init = function () {
                (this._width = 512),
                    (this._height = 512),
                    this.setViewPort(),
                    (this._cam = new THREE.OrthographicCamera(this._viewPort.left, this._viewPort.right, this._viewPort.top, this._viewPort.bottom, this._viewPort.near, this._viewPort.far)),
                    this._cam.position.set(0, 0, 100),
                    (this._scene = new THREE.Scene()),
                    (this._render = new THREE.WebGLRenderTarget(this._width, this._height, { magFilter: THREE.LinearFilter, minFilter: THREE.LinearFilter, wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping })),
                    (this._colG = new THREE.PlaneGeometry(512, 512, 1, 1)),
                    (this._shader = {
                        vertexShader: _glMain._parts.getShader("shader/planeBase_vtx.js"),
                        fragmentShader: _glMain._parts.getShader("shader/grade_box_frg.js"),
                        uniforms: { texture: { value: _glMain._parts.getTex("grade.png") }, alpha: { value: 1 }, count: { value: 0 } },
                        transparent: !0,
                    }),
                    (this._colM = new THREE.ShaderMaterial(this._shader)),
                    (this._col = new THREE.Mesh(this._colG, this._colM)),
                    (this._col.position.z = 2),
                    this._scene.add(this._col),
                    (this._grayG = new THREE.PlaneGeometry(1400, 512, 1, 1)),
                    (this._grayM = new THREE.MeshBasicMaterial({ transparent: !0, map: _glMain._parts.getTex("grade_g.png") })),
                    (this._gray = new THREE.Mesh(this._grayG, this._grayM)),
                    (this._gray.position.z = 4),
                    this._scene.add(this._gray),
                    (this._gray2 = new THREE.Mesh(this._grayG, this._grayM)),
                    (this._gray2.position.x = -960),
                    (this._gray2.position.z = 4),
                    this._scene.add(this._gray2);
            }),
            (t.prototype.start = function () {
                _glMain.removeEnterFrame(this), _glMain.addEnterFrame(this, "enterFrame"), this.animCount();
            }),
            (t.prototype.animCount = function () {
                var t = this;
                gsap.killTweensOf(this._timer),
                    (this._timer.count = 0),
                    gsap.to(this._timer, {
                        duration: 1.5,
                        count: 1,
                        onComplete: function () {
                            t.setAnim();
                        },
                    });
            }),
            (t.prototype.setAnim = function () {
                var t = this;
                gsap.killTweensOf(this._gray.position),
                    gsap.to(this._gray.position, { duration: 3.2, x: 960, ease: Power3.easeInOut }),
                    gsap.killTweensOf(this._gray2.position),
                    gsap.to(this._gray2.position, {
                        duration: 5.5,
                        delay: 0,
                        x: 0,
                        ease: Power3.easeInOut,
                        onComplete: function () {
                            (t._gray.position.x = 0), (t._gray2.position.x = -960), t.animCount();
                        },
                    });
            }),
            (t.prototype.enterFrame = function () {
                _glMain._world._render.render(this._scene, this._cam, this._render), (this._shader.uniforms.count.value += 0.002);
            }),
            (t.prototype.stop = function () {
                _glMain.removeEnterFrame(this),
                    gsap.killTweensOf(this._timer),
                    (this._timer.count = 0),
                    gsap.killTweensOf(this._gray.position),
                    gsap.killTweensOf(this._gray2.position),
                    (this._gray.position.x = 0),
                    (this._gray2.position.x = -960),
                    (this._shader.uniforms.count.value = 0);
            }),
            (t.prototype.setViewPort = function () {
                this._viewPort = {};
                var t = this._width,
                    e = this._height,
                    t = t / e;
                this._viewPort = { viewSize: e, aspectRatio: t, left: (-t * e) / 2, right: (t * e) / 2, top: e / 2, bottom: -e / 2, near: 0, far: 1e4 };
            }),
            t
        );
    })();
