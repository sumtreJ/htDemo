!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.g = t()
}(this, function () {
    "use strict";
    ht.Default.setEdgeType("flowEdge", function (e, t, o, n) {
        var i = e.getSourceAgent(), a = e.getTargetAgent(), s = i.getRect(), r = a.getRect(),
            l = e.s("edge.source.anchor.x"), d = e.s("edge.source.anchor.y"), c = e.s("edge.target.anchor.x"),
            _ = e.s("edge.target.anchor.y"), u = {x: s.x + s.width * l, y: s.y + s.height * d},
            h = {x: r.x + r.width * c, y: r.y + r.height * _}, E = (Math.abs(h.y - u.y), Math.abs(h.x - u.x)), f = [];
        f.push(u), f.push({x: u.x + 12, y: u.y}), f.push({
            x: u.x + Math.max(40, E / 2),
            y: u.y
        }), f.push({x: h.x - Math.max(40, E / 2), y: h.y}), f.push({x: h.x - 12, y: h.y}), f.push(h);
        var g = [].concat(f).splice(1, 4);
        return e._ps = {points: g, segments: [1, 2, 4, 2]}, {
            points: new ht.List(f),
            segments: new ht.List([1, 2, 4, 2])
        }
    }), ht.Default.setImage("edge.arrow", {
        width: 10,
        height: 10,
        comps: [{
            type: "shape",
            background: "rgb(156,156,156)",
            borderColor: "rgb(156,156,156)",
            closePath: !0,
            points: [0, 0, 10, 5, 0, 10]
        }]
    });
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, s = (function () {
        function d(e) {
            this.value = e
        }

        function e(i) {
            var a, s;

            function r(e, t) {
                try {
                    var o = i[e](t), n = o.value;
                    n instanceof d ? Promise.resolve(n.value).then(function (e) {
                        r("next", e)
                    }, function (e) {
                        r("throw", e)
                    }) : l(o.done ? "return" : "normal", o.value)
                } catch (e) {
                    l("throw", e)
                }
            }

            function l(e, t) {
                switch (e) {
                    case"return":
                        a.resolve({value: t, done: !0});
                        break;
                    case"throw":
                        a.reject(t);
                        break;
                    default:
                        a.resolve({value: t, done: !1})
                }
                (a = a.next) ? r(a.key, a.arg) : s = null
            }

            this._invoke = function (n, i) {
                return new Promise(function (e, t) {
                    var o = {key: n, arg: i, resolve: e, reject: t, next: null};
                    s ? s = s.next = o : (a = s = o, r(n, i))
                })
            }, "function" != typeof i.return && (this.return = void 0)
        }

        "function" == typeof Symbol && Symbol.asyncIterator && (e.prototype[Symbol.asyncIterator] = function () {
            return this
        }), e.prototype.next = function (e) {
            return this._invoke("next", e)
        }, e.prototype.throw = function (e) {
            return this._invoke("throw", e)
        }, e.prototype.return = function (e) {
            return this._invoke("return", e)
        }
    }(), function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }), r = function () {
        function n(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        return function (e, t, o) {
            return t && n(e.prototype, t), o && n(e, o), e
        }
    }(), i = function e(t, o, n) {
        null === t && (t = Function.prototype);
        var i = Object.getOwnPropertyDescriptor(t, o);
        if (void 0 === i) {
            var a = Object.getPrototypeOf(t);
            return null === a ? void 0 : e(a, o, n)
        }
        if ("value" in i) return i.value;
        var s = i.get;
        return void 0 !== s ? s.call(n) : void 0
    }, t = function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }, l = function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }, d = function (e) {
        function a(e, t, o, n) {
            s(this, a);
            var i = l(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e, t, o, n));
            return i.setDividerBackground("#e6e9ed"), i
        }

        return t(a, e), a
    }(ht.widget.SplitView), n = [
        {
        name: "组1",
        icon: "symbols/label2.json",
        points: {in: [{type: "func"}, {type: "data"}, {type: "app"}]},
        children: [{
            name: "ETL_GRAPH_RUN",
            titleColor: "rgba(66,66,199,0.9)",
            icon: "symbols/label2.json",
            points: {
                in: [{
                    type: "ID",
                    rule: "hahah!"
                }, {type: "GRAPH_RUN_KEY"}, {type: "GRAPH_KEY"}, {type: "CREATE_TIME"}, {type: "GRAPH_INST_STATUS"}, {type: "VERSION"}, {type: "ENTER_VALUE"}]
            }
        }, {
            name: "ETL_WORKFLOW",
            titleColor: "rgba(166,66,66,0.9)",
            icon: "symbols/label2.json",
            points: {in: [{type: "OID"}, {type: "WORKFLOW_KEY"}, {type: "SERVER_ID"}, {type: "SCHEDULER_ID"}, {type: "SCHEDULER_VERSION"}, {type: "EMAIL_ID"}, {type: "EMAIL_VERSION"}, {type: "IS_SERVICE"}]}
        }, {
            name: "PS-SMART 分类",
            icon: "symbols/label2.json",
            points: {in: [{type: "func"}], out: [{type: "func"}, {type: "data"}]}
        }, {name: "读数据表", icon: "symbols/label2.json", points: {out: [{type: "func"}]}}, {
            name: "随机分类",
            icon: "symbols/label2.json",
            points: {in: [{type: "func"}], out: [{type: "func"}]}
        }]
    }, {
        name: "组2",
        icon: "symbols/label2.json",
        children: [{
            name: "流程1",
            icon: "symbols/label2.json",
            points: {out: [{type: "func"}, {type: "data"}]}
        }, {
            name: "流程2",
            icon: "symbols/label2.json",
            points: {in: [{type: "func"}, {type: "data"}], out: [{type: "func"}, {type: "data"}]}
        }, {
            name: "流程3",
            icon: "symbols/label2.json",
            points: {
                in: [{type: "func"}, {type: "data"}, {type: "app"}],
                out: [{type: "func"}, {type: "data"}, {type: "app"}]
            }
        }, {
            name: "流程4",
            icon: "symbols/label2.json",
            points: {in: [{type: "func"}, {type: "data"}], out: [{type: "func"}, {type: "data"}]}
        }, {name: "流程5", icon: "symbols/label2.json", points: {in: [{type: "func"}, {type: "data"}]}}]
    }, {name: "组3", icon: "symbols/label2.json", children: []}], c = function () {
        function t(e) {
            s(this, t), this._img = e
        }

        return r(t, [{
            key: "toCanvas", value: function (e) {
                return (e = e || this._img) ? ht.Default.toCanvas(e) : null
            }
        }]), t
    }(), _ = function (e) {
        function o(e) {
            s(this, o);
            var t = l(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this));
            return t.editor = e, t.loadData(), t
        }

        return t(o, e), r(o, [{
            key: "loadData", value: function () {
                var t = this;
                n.forEach(function (e) {
                    t.createTreeData(e)
                }), this.expandAll()
            }
        }, {
            key: "createTreeData", value: function (e, t) {
                var o = this, n = new ht.Data;
                n.setName(e.name), n.a(e), t && n.setParent(t), e.children && e.children.forEach(function (e) {
                    o.createTreeData(e, n)
                }), this.dm().add(n)
            }
        }, {
            key: "getIcon", value: function (e) {
                return 0 < e.getChildren().size() ? "symbols/node.json" : "symbols/text.json"
            }
        }, {
            key: "handleDragAndDrop", value: function (e, t) {
                var o = this.editor.gv;
                if ("prepare" !== t) {
                    if (this._dragging) if (this.updateDraggingPosition(e), "begin" === t) document.body.appendChild(this._dragging); else if ("end" === t) {
                        if (ht.Default.containedInView(e, o)) {
                            var n = o.model.creatCombine(this._target.getAttrObject());
                            n.p(o.lp(e)), console.log(n), o.sm().cs()
                        }
                        document.body.removeChild(this._dragging), this._dragging = null, this._target = null
                    }
                } else {
                    var i = this.getDataAt(e);
                    if (i) {
                        var a = new c("label");
                        this._target = i, this._dragging = a.toCanvas()
                    }
                }
            }
        }, {
            key: "updateDraggingPosition", value: function (e) {
                var t = this._dragging, o = t.style, n = t.width, i = t.height, a = ht.Default.getClientPoint(e);
                o.left = a.x - n / 2 + "px", o.top = a.y - i / 2 + "px"
            }
        }]), o
    }(ht.widget.TreeView);
    ht.Default.setImage("port", {
        dataBindings: [{attr: "borderColor", valueType: "String"}, {
            attr: "borderWidth",
            valueType: "String"
        }],
        width: 150,
        height: 25,
        comps: [{
            type: "shape",
            background: "rgba(49,168,81,0.70)",
            borderWidth: {func: "attr@borderWidth", value: 1},
            borderColor: {func: "attr@borderColor", value: "rgb(66,66,66)"},
            gradient: "linear.north",
            gradientColor: "rgb(61,61,61)",
            rotation: 3.14159,
            closePath: !0,
            points: [0, 12.5024, 5.50781, 2, 150, 2.00038, 145, 12.50278, 150, 23.00038, 5.50776, 23]
        }]
    }), ht.Default.setImage("arrow", {
        dataBindings: [{attr: "color", valueType: "String"}],
        width: 9,
        height: 9,
        comps: [{
            type: "shape",
            background: {func: "attr@color", value: "rgb(62,237,100)"},
            borderWidth: 1,
            borderColor: "rgb(66,66,66)",
            rotation: 1.5708,
            closePath: !0,
            points: [.99999, 4.4287, 3.73894, .99999, 7.99999, 1.00012, 7.99999, 1.00012, 4.13925, 2.67873, 4.13925, 4.4287, 4.13925, 6.17867, 7.99999, 7.99999, 7.99999, 7.99999, 3.73894, 7.99986],
            segments: [1, 2, 2, 4, 4, 2]
        }]
    }), ht.Default.setImage("arrow2", {
        dataBindings: [{attr: "color", valueType: "String"}],
        width: 9,
        height: 9,
        comps: [{
            type: "shape",
            background: {func: "attr@color", value: "rgb(62,237,100)"},
            borderColor: "rgb(66,66,66)",
            rotation: 1.5708,
            closePath: !0,
            points: [0, 4.42872, 3.73894, .99999, 8.99998, -2e-5, 8.99998, -2e-5, 5.47645, 2.67873, 5.47645, 4.4287, 5.47645, 6.17867, 9.00002, 8.99998, 9.00002, 8.99998, 3.73894, 7.99986],
            segments: [1, 2, 2, 4, 4, 2]
        }]
    });
    var u = {titleWidth: 150, titleHeight: 30, portWidth: 150, portHeight: 25, maxRowCount: 6}, h = "towardeast",
        o = function () {
            function i(e, t) {
                s(this, i);
                var o = this;
                if (o.option = {}, Object.assign(o.option, e), o.gv = t, o.dm = t.dm(), o.ctx = t.getCanvas().getContext("2d"), o.portNodes = [], o.size = {}, Object.assign(o.size, u), o.creatBlock(), o.creatTitleNode(), o.option.points && o.option.points.in && o.option.points.in.forEach(function (e, t) {
                    e.node = o.creatInput(e, t)
                }), o.creatSwitchNode(), o.creatScrollNodes(), o.setScroll(0), o.option.position) {
                    var n = Object.assign(o.option.position);
                    o.block.setPosition(n)
                }
                return o._enableAnimation = !0, o._completion = !0, o.block
            }

            return r(i, [{
                key: "creatBlock", value: function () {
                    var t = this, e = t.dm, o = t.block = new ht.Block;
                    o.combine = t, o.setStyle("border.color", "rgb(184,184,184)"), o.setStyle("border.type", "roundRect"), o.setStyle("pixelPerfect", !1), e.add(o), t.block.setWidth = function (e) {
                        t.setWidth(e)
                    }, t.block.setHeight = function (e) {
                        t.setHeight(e)
                    }, t.block.setRotation = function () {
                    }
                }
            }, {
                key: "setWidth", value: function (t) {
                    var e = this, o = e.size, n = e.titleNode.getPosition();
                    o.titleWidth = t, o.portWidth = t, e.portNodes.forEach(function (e) {
                        e.setWidth(t)
                    }), e.titleNode.setWidth(t), e.switchNode.setPosition(n.x + t / 2 - 15, n.y), e.setScroll(e._scroll), e.option.width = t, e.setTitleWidth()
                }
            }, {
                key: "setHeight", value: function (e) {
                    var t = this, o = t.size, n = Math.round((e - o.titleHeight) / (o.portHeight + 2));
                    n = (n = n < 1 ? 1 : n) > t.portNodes.length ? t.portNodes.length : n, t.size.maxRowCount = n, t._enableAnimation = !1, t.setScroll(0), t._enableAnimation = !0, t.option.height = t.block.getHeight()
                }
            }, {
                key: "setTitleWidth", value: function () {
                    var e = this, t = e.size.titleWidth - 35, o = e.ctx, n = e.titleNode, i = e.option.name;
                    if (o.font = "12px arial", o.measureText(i).width > t) {
                        for (e.block.setToolTip(e.option.name), i = i.substring(0, i.length - 1); 0 < i.length && o.measureText(i).width > t;) i = i.substring(0, i.length - 1);
                        n.setStyle("label", i + "...")
                    } else n.setStyle("label", i)
                }
            }, {
                key: "creatTitleNode", value: function () {
                    var e = this, t = e.dm, o = e.block, n = e.titleNode = new ht.Node;
                    n.setImage("label"), n.combine = e, n.setWidth(e.size.titleWidth), n.setHeight(e.size.titleHeight), e.setTitleWidth(), n.setStyle("label.color", "#EEE"), n.setStyle("label.position", 16), n.setStyle("label.offset.x", 10), t.add(n), o.addChild(n)
                }
            }, {
                key: "creatSwitchNode", value: function () {
                    var e = this, t = e.dm, o = (e.block, e.switchNode = new ht.Node);
                    o.setPosition(e.size.titleWidth / 2 - 15, 0), o.setSize(16, 16), o.setImage("arrow"), o.setHost(e.titleNode), o.s({
                        pixelPerfect: !1,
                        "2d.movable": !1,
                        "2d.selectable": !1
                    }), (o.combine = e)._foldState = "unfold", o.onclicked = function () {
                        e.switchFold()
                    }, e.block.addChild(o), t.add(o)
                }
            }, {
                key: "creatScrollNode", value: function () {
                    var e = new ht.Node;
                    return e.setSize(25, 9), e.setImage("arrow2"), e.a("color", "rgba(233,233,233,0.5)"), e.s({
                        pixelPerfect: !1,
                        "2d.movable": !1,
                        "2d.selectable": !1
                    }), e.combine = this, e.setHost(this.titleNode), this.dm.add(e), e
                }
            }, {
                key: "creatScrollNodes", value: function () {
                    if (!(this.portNodes.length <= this.size.maxRowCount)) {
                        var e = this, t = (e.dm, e.block, e.titleNode.getPosition()),
                            o = e.upNode = e.creatScrollNode(), n = e.downNode = e.creatScrollNode(), i = e.size,
                            a = (i.titleWidth, i.titleHeight), s = i.portHeight, r = i.maxRowCount;
                        o.setPosition(t.x, t.y + a / 2 + 6), n.setPosition(t.x, t.y + a / 2 + (s + 2) * r + 8), n.setRotation(Math.PI), o.onclicked = function () {
                            e.scrollUp()
                        }, n.onclicked = function () {
                            e.scrollDown()
                        }
                    }
                }
            }, {
                key: "creatInput", value: function (e, t) {
                    var o = this, n = e.type, i = e.rule, a = new ht.Node;
                    a.combine = o, a.setImage("port"), a.setWidth(o.size.portWidth), a.setHeight(o.size.portHeight), a.setPosition({
                        x: (o.size.portWidth - o.size.titleWidth) / 2,
                        y: (o.size.portHeight * (2 * t + 1) + o.size.titleHeight) / 2 + 2
                    }), a.setStyle("label", n), a.setStyle("label.color", "#EEE"), a.setStyle("label.position", 17), a.setStyle("2d.selectable", !1), a.a({
                        points: {
                            in: [{
                                type: n,
                                rule: i
                            }]
                        }, index: t, type: n
                    }), a.onDblClicked = function (e) {
                        o.focus(a)
                    }, o.block.addChild(a), o.dm.add(a), o.portNodes.push(a)
                }
            }, {
                key: "fold", value: function () {
                    var e = this, t = e.titleNode.getPosition();
                    e.portNodes.forEach(function (e) {
                        e.setPosition(t)
                    }), e.block.removeChild(e.titleNode), e.block.addChild(e.titleNode), e.switchNode.setRotation(Math.PI), e.upNode && (e.upNode.s("2d.visible", !1), e.downNode.s("2d.visible", !1)), e._foldState = "fold"
                }
            }, {
                key: "unfold", value: function () {
                    var o = this, n = o.titleNode.getPosition(), i = n.x, a = n.y;
                    o.upNode || o.portNodes.forEach(function (e, t) {
                        a = n.y + (o.size.portHeight * (2 * t + 1) + o.size.titleHeight) / 2 + 2, e.setPosition({
                            x: i,
                            y: a
                        })
                    }), o.switchNode.setRotation(0), o._enableAnimation = !1, o.setScroll(o._scroll), o._enableAnimation = !0, o._foldState = "unfold"
                }
            }, {
                key: "isFold", value: function () {
                    return "unfold" !== this._foldState
                }
            }, {
                key: "switchFold", value: function () {
                    "unfold" === this._foldState ? this.fold() : this.unfold(), this.dm.getSelectionModel().setSelection()
                }
            }, {
                key: "remove", value: function () {
                    var e = this;
                    e.dm.remove(e.switchNode), e.upNode && (e.dm.remove(e.upNode), e.dm.remove(e.downNode))
                }
            }, {
                key: "unfocus", value: function () {
                    var e = this;
                    e.block.setStyle("border.color", "rgb(184,184,184)"), e.block.setStyle("border.width", 2), e._animating && (window.clearInterval(e._animating), e._animating = null, e._animatingNode && (e._animatingNode.a("borderColor", "rgb(66,66,66)"), e._animatingNode.a("borderWidth", 1), e._animatingNode = null))
                }
            }, {
                key: "focus", value: function (n) {
                    var e = this, t = e.gv;
                    if (e.dm.getSelectionModel().setSelection(), e.dm.each(function (e) {
                        e instanceof ht.Block ? (e.combine.fold(), e.combine.unfocus()) : e instanceof ht.Edge && e.s("flow", !1)
                    }), e.unfold(), n) {
                        var o = n.getEdges();
                        o && o.each(function (e) {
                            e.s({flow: !0, "flow.count": 3, "flow.element.count": 1});
                            var t = e.getSource(), o = e.getTarget();
                            t === n ? (o.combine.unfold(), o.combine.setScroll(o.combine.portNodes.indexOf(o))) : (t.combine.unfold(), t.combine.setScroll(t.combine.portNodes.indexOf(t)))
                        });
                        var i = 0;
                        n.a("borderColor", "rgba(255, 115, 24, 0.9)"), n.a("borderWidth", 3), e._animating = window.setInterval(function () {
                            0 === i ? (n.a("borderColor", "rgba(255, 115, 24, 0.9)"), i = 1) : (n.a("borderColor", "rgb(66,66,66)"), i = 0)
                        }, 300), e._animatingNode = n
                    } else {
                        e.portNodes.forEach(function (t) {
                            var e = t.getEdges();
                            e && e.each(function (e) {
                                e.s({
                                    flow: !0,
                                    "flow.count": 3,
                                    "flow.element.count": 1
                                }), e.getSource() === t ? e.getTarget().combine.unfold() : e.getSource().combine.unfold()
                            })
                        });
                        var a = 0;
                        e.block.setStyle("border.width", 4), e._animating = window.setInterval(function () {
                            0 === a ? (e.block.setStyle("border.color", "rgb(184,184,184)"), a = 1) : (e.block.setStyle("border.color", "rgba(255, 115, 24, 0.9)"), a = 0)
                        }, 300)
                    }
                    t._animating = !0
                }
            }, {
                key: "setAnimation", value: function (t, e, o, n) {
                    var i = this.gv;
                    if (i._scrolling = !0, this._enableAnimation) {
                        var a = t.getAnimation();
                        a ? (t.setAnimation(null), a.pos.from = t.getPosition().y, a.pos.to = o, a.height.from = t.getHeight(), a.height.to = e, t.setAnimation(a)) : t.setAnimation({
                            pos: {
                                from: t.getPosition().y,
                                to: o,
                                frames: 20,
                                easing: "Quad.easeOut",
                                onUpdate: function (e) {
                                    t.setPosition(this.getPosition().x, e)
                                }
                            },
                            height: {
                                from: t.getHeight(),
                                to: e,
                                easing: "Quad.easeOut",
                                frames: 20,
                                next: "label",
                                onUpdate: function (e) {
                                    t.setHeight(e)
                                }
                            },
                            start: ["pos", "height"]
                        })
                    } else t.setHeight(e), t.setPosition(t.getPosition().x, o);
                    setTimeout(function () {
                        i._scrolling = !1
                    }, 500)
                }
            }, {
                key: "setScroll", value: function (e) {
                    var t = this;
                    if (!(t.portNodes.length < t.size.maxRowCount)) {
                        e < 0 && (e = 0), e > t.portNodes.length - t.size.maxRowCount && (e = t.portNodes.length - t.size.maxRowCount), t._scroll = e;
                        var o = t.titleNode.getPosition(), n = t.size, i = n.portHeight, a = n.titleHeight,
                            s = n.maxRowCount;
                        t.portNodes.forEach(function (e) {
                        });
                        for (var r = !1, l = !1, d = 0, c = 0; c < e; c++) t.portNodes[c].s("label", ""), t.setAnimation(t.portNodes[c], 0, o.y + a / 2, ""), d = 9, r = !0;
                        for (var _ = e; _ < e + s; _++) {
                            var u = _ - e;
                            t.portNodes[_].s("label", t.portNodes[_].a("type")), t.setAnimation(t.portNodes[_], i, d + o.y + (i * (2 * u + 1) + a) / 2 + 2, t.portNodes[_].a("type"))
                        }
                        for (var h = o.y + (i * (2 * s) + a) / 2 + 2, E = e + s; E < t.portNodes.length; E++) 0 === t.portNodes[E].getHeight() ? t.portNodes[E].setPosition(o.x, d + h + i / 2) : t.setAnimation(t.portNodes[E], 0, d + h + i / 2, ""), t.portNodes[E].s("label", ""), l = !0;
                        t.upNode || t.creatScrollNodes(), t.upNode && (t.upNode.s("2d.visible", r), t.downNode.s("2d.visible", l), t.setAnimation(t.downNode, t.downNode.getHeight(), h + d + i / 2 - 3, ""))
                    }
                }
            }, {
                key: "scrollUp", value: function () {
                    this.setScroll(this._scroll - 1)
                }
            }, {
                key: "scrollDown", value: function () {
                    this.setScroll(this._scroll + 1)
                }
            }, {
                key: "onWheel", value: function (e) {
                    0 < e ? this.scrollUp() : this.scrollDown()
                }
            }]), i
        }();
    var S = {
        rectPadding: 1,
        color: "#32D3EB",
        background: "#fff",
        radius: 5,
        checkSize: ht.Default.isTouchable ? 50 : 5,
        sorptionColor: "rgba(49,210,235,0.55)",
        sorptionSize: 6,
        sorptionActiveSize: ht.Default.isTouchable ? 50 : 10
    }, E = function (e) {
        function n(e) {
            return s(this, n), l(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e))
        }

        return t(n, e), r(n, [{
            key: "setUp", value: function () {
                i(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "setUp", this).call(this);
                var t = this.gv, o = this;
                this.createEditCanvas(), t.setEditInteractor(this), this.oldGetSelectWidth = t.getSelectWidth, t.getSelectWidth = function (e) {
                    return e instanceof ht.Edge ? 1 : 0
                }, this.oldIV = t.invalidate, t.invalidate = function (e) {
                    setTimeout(function () {
                        o.draw()
                    }), o.oldIV.call(t, e)
                }
            }
        }, {
            key: "tearDown", value: function () {
                i(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "tearDown", this).call(this), this.gv.getView().removeChild(this._canvas), this.gv.invalidate = this.oldIV, this.gv.getSelectWidth = this.oldGetSelectWidth
            }
        }, {
            key: "createEditCanvas", value: function () {
                var e, t, o, n, i, a, s = ht.Default.createCanvas();
                this._canvas = s, this.setCanvasSize(), this.gv.getView().appendChild(s), s.style.position = "absolute", this._g = ((a = s.getContext("2d")).save(), e = e || 0, t = t || 0, o = o || 1, i = i || ht.Default.devicePixelRatio, a.translate(e * i, t * i), 1 != (o *= i) && a.scale(o, o), n && (a.beginPath(), a.rect(n.x, n.y, n.width, n.height), a.clip(), a.clearRect(n.x, n.y, n.width, n.height)), a), function (e, t) {
                    for (var o = ["imageSmoothingEnabled", "webkitImageSmoothingEnabled", "mozImageSmoothingEnabled", "oImageSmoothingEnabled", "msImageSmoothingEnabled"], n = void 0, i = 0, a = o.length; i < a && !((n = o[i]) in e); i++) ;
                    e[n] = t
                }(s, !1), window.addEventListener("resize", this.setCanvasSize.bind(this))
            }
        }, {
            key: "setCanvasSize", value: function () {
                var e = this, t = this.gv;
                setTimeout(function () {
                    ht.Default.setCanvas(e._canvas, t.getWidth(), t.getHeight())
                }, 0)
            }
        }, {
            key: "handle_mousemove", value: function (e) {
                this.editing || this.checkHover(e)
            }
        }, {
            key: "checkHover", value: function (e) {
                var t = this.gv, o = t.lp(e), n = this.toCheckRect(o), i = t.dm().toDatas(function (e) {
                    return e instanceof ht.Node && e.a("points")
                });
                if (!t.isAnimating()) {
                    i.reverse();
                    for (var a = 0, s = i.size(); a < s; a++) {
                        var r = i.get(a), l = r.getRect();
                        if (ht.Default.intersection(n, l)) return this._hoverNode = r, this.draw(), this.checkInOut(r, o)
                    }
                    this._hoverNode && (this._hoverNode = null, this.gv.setCursor("default"), this.draw())
                }
            }
        }, {
            key: "checkInOut", value: function (e, t) {
                var o = e.a("points");
                if (o && o.in) {
                    var n = S.checkSize + S.radius, i = o.in.length, a = e.getRect(), s = a.height / (i + 1),
                        r = a.y + s, l = e.getSourceEdges(), d = [];
                    l && l.each(function (e) {
                        d.push(e.a("outIndex"))
                    });
                    for (var c = 0, _ = o.in.length; c < _; c++) {
                        var u = {x: a.x + a.width, y: r};
                        if (ht.Default.getDistance(t, u) <= n) return this.gv.setCursor("crosshair"), {
                            index: c,
                            type: o.in[c].type,
                            node: e
                        };
                        r += s
                    }
                    this.gv.setCursor("default")
                }
            }
        }, {
            key: "checkInIn", value: function (e) {
                for (var d = this, c = this.getTargetNodes(), _ = this.gv.lp(e), t = function (e, t) {
                    var o = c.get(e), n = o.getTargetEdges(), i = [];
                    n && n.each(function (e) {
                        i.push(e.a("inIndex"))
                    });
                    for (var a = d.getNodeInPoints(o), s = 0, r = a.length; s < r; s++) if (ht.Default.getDistance(_, a[s]) < S.sorptionActiveSize / d.gv.getZoom()) {
                        var l = {node: o, index: s};
                        return {v: d.editInfo.hoverTargetInfo = l}
                    }
                }, o = 0, n = c.size(); o < n; o++) {
                    var i = t(o);
                    if ("object" === (void 0 === i ? "undefined" : a(i))) return i.v
                }
                this.editInfo.hoverTargetInfo = null
            }
        }, {
            key: "getTargetNodes", value: function () {
                var e = this.editInfo, n = (e.editingNode, e.tempEdge, e.tempTarget);
                return this.dm.toDatas(function (e) {
                    if (e instanceof ht.Node && e !== n) {
                        if (!e.a("points") || !e.a("points").in) return !1;
                        var t = e.a("points").in, o = e.getTargetEdges();
                        o && o.size();
                        return t.length
                    }
                })
            }
        }, {
            key: "handle_touchmove", value: function (e) {
                this.handle_mousemove(e)
            }
        }, {
            key: "handle_mousedown", value: function (e) {
                var t = this.checkHover(e);
                if (t) {
                    this.editing = !0;
                    var o = t.node, n = t.type, i = t.index, a = new ht.Node, s = new ht.Edge(o, a);
                    a.p(this.gv.lp(e)), a.setSize(0, 0), o.a("points").in && o.a("points").in[0].rule && s.setToolTip("规则：" + o.a("points").in[0].rule), s.a("outIndex", i), s.s({
                        "edge.type": "flowEdge",
                        "edge.offset": 0,
                        "edge.source.anchor.x": 1,
                        "edge.source.anchor.y": 1 * (i + 1) / (o.a("points").in.length + 1),
                        "edge.target.anchor.x": 0,
                        "edge.target.anchor.y": 0
                    }), s.addStyleIcon("edge.arrow", {
                        position: 19,
                        width: 10,
                        height: 10,
                        offsetX: -5,
                        names: ["edge.arrow"]
                    }), this.editInfo = {
                        editingNode: o,
                        tempEdge: s,
                        tempTarget: a,
                        type: n,
                        index: i
                    }, this.dm.add(s), this.dm.add(a), this.startDragging(e), this.draw()
                }
            }
        }, {
            key: "handle_touchstart", value: function (e) {
                this.handle_mousedown(e)
            }
        }, {
            key: "handle_mouseup", value: function (e) {
            }
        }, {
            key: "handle_touchend", value: function (e) {
                this.handle_mouseup(e)
            }
        }, {
            key: "handleWindowMouseUp", value: function (e) {
                var t = this.checkInIn(e), o = this.editInfo, n = o.tempEdge, i = o.tempTarget;
                if (t) {
                    var a = t.index, s = t.node;
                    n.setTarget(s), n.a("inIndex", a), n.s({"edge.target.anchor.y": 1 * (a + 1) / (s.a("points").in.length + 1)})
                } else this.dm.remove(n);
                this.dm.remove(i), this.editing = !1, this._hoverNode = null, this.editInfo = null, this.gv.setCursor("default")
            }
        }, {
            key: "handleWindowTouchEnd", value: function (e) {
                this.handleWindowMouseUp(e)
            }
        }, {
            key: "handleWindowMouseMove", value: function (e) {
                var t = this.editInfo.tempTarget, o = this.gv;
                t.p(o.lp(e)), this.checkInIn(e), this.draw()
            }
        }, {
            key: "handleWindowTouchMove", value: function (e) {
                this.handleWindowMouseMove(e)
            }
        }, {
            key: "toCheckRect", value: function (e) {
                var t = S.checkSize;
                return {x: e.x - t, y: e.y - t, width: 2 * t, height: 2 * t}
            }
        }, {
            key: "drawNodeCtrlPoints", value: function (t, e) {
                var o = this.gv, n = e.getRect(), i = S.rectPadding, a = e.a("points");
                S.rectPadding && (n.x -= i, n.y -= i, n.width += 2 * i, n.height += 2 * i);
                var s, r, l, d, c, _ = (r = n, l = (s = o).tx(), d = s.ty(), c = s._zoom, {
                    x: r.x * c + l,
                    y: r.y * c + d,
                    width: r.width * c,
                    height: r.height * c
                });
                if (t.strokeStyle = S.color, t.save(), t.shadowColor = S.color, t.shadowBlur = 5, t.beginPath(), t.rect(_.x, _.y, _.width, _.height), t.stroke(), t.restore(), t.fillStyle = S.background, a && a.in) {
                    var u = a.in.length, h = _.height / (u + 1), E = _.y + h;
                    a.in.forEach(function (e) {
                        t.beginPath(), t.arc(_.x, E, S.radius, 0, 2 * Math.PI), t.fill(), t.stroke(), E += h
                    })
                }
                if (a && a.in) {
                    var f = a.in.length, g = _.height / (f + 1), I = _.y + g;
                    a.in.forEach(function (e) {
                        t.beginPath(), t.arc(_.x + _.width, I, S.radius, 0, 2 * Math.PI), t.fill(), t.stroke(), I += g
                    })
                }
            }
        }, {
            key: "draw", value: function () {
                var d = this;
                if (this.gv.isAnimating()) this._clearOnce || (this._g.clearRect(0, 0, this._canvas.width, this._canvas.height), this._clearOnce = !0); else {
                    var c = this._g, e = this._canvas, t = this.gv, o = t.getWidth(), n = t.getHeight(),
                        i = ht.Default.getInternal();
                    e.width === o && e.height === n || i.setCanvas(e, o, n), this._clearOnce = !1, c.clearRect(0, 0, e.width, e.height);
                    var a = t.sm().getSelection().toArray();
                    c.save();
                    var s = ht.Default.devicePixelRatio;
                    if (c.scale(s, s), this._hoverNode && a.indexOf(this._hoverNode) < 0 && a.push(this._hoverNode), a.forEach(function (e) {
                        e instanceof ht.Node && d.drawNodeCtrlPoints(c, e)
                    }), this.editing) {
                        var r = this.getTargetNodes(), _ = this.editInfo.hoverTargetInfo;
                        r.each(function (l) {
                            var e = d.getNodeInPoints(l), t = l.getTargetEdges(), o = [];
                            t && t.each(function (e) {
                                o.push(e.a("inIndex"))
                            }), e.forEach(function (e, t) {
                                var o, n, i, a, s;
                                o = d.gv, n = e, i = o.tx(), a = o.ty(), s = o._zoom, e = {
                                    x: n.x * s + i,
                                    y: n.y * s + a
                                }, c.beginPath(), c.arc(e.x, e.y, S.radius, 0, 2 * Math.PI), c.fill(), c.stroke();
                                var r = _ && _.node === l && _.index === t ? S.sorptionActiveSize : S.sorptionSize;
                                c.save(), c.beginPath(), c.strokeStyle = S.sorptionColor, c.lineWidth = r, c.arc(e.x, e.y, S.radius + r / 2, 0, 2 * Math.PI), c.stroke(), c.restore()
                            })
                        })
                    }
                    c.restore()
                }
            }
        }, {
            key: "getNodeInPoints", value: function (e) {
                var t = e.a("points").in, o = e.getRect(), n = t.length, i = o.height / (n + 1), a = o.y + i, s = [];
                return t.forEach(function (e) {
                    s.push({x: o.x, y: a}), a += i
                }), s
            }
        }, {
            key: "editing", get: function () {
                return this._editing
            }, set: function (e) {
                this._editing = e, this.gv._editing = e
            }
        }, {
            key: "dm", get: function () {
                return this.gv.dm()
            }
        }]), n
    }(ht.graph.Interactor), f = function () {
        function t(e) {
            s(this, t);
            this.gv = e, this.dm = e.dm(), this.initGv()
        }

        return r(t, [{
            key: "initGv", value: function () {
                var a = this.gv, n = this;
                a._defaultInteractor = new ht.graph.DefaultInteractor(a), a._editInteractor = new ht.graph.XEditInteractor(a);
                var e = new ht.List([new E(a), new ht.graph.SelectInteractor(a), a._editInteractor, new ht.graph.MoveInteractor(a), a._defaultInteractor, new ht.graph.TouchInteractor(a)]);
                a.setInteractors(e), a._editInteractor.handle_DOMMouseScroll = function () {
                }, a._editInteractor.handle_mousewheel = function () {
                }, a._defaultInteractor.handle_mousewheel = function (t) {
                    var e = a.lp(t), o = a.getDatasInRect({x: e.x, y: e.y, width: 1, height: 1}, !0, !1), n = !1;
                    o.each(function (e) {
                        !n && e.combine && (e.combine.onWheel(t.wheelDelta), n = !0)
                    }), n || this.gv.handleScroll(t, t.wheelDelta)
                }, a.setPointEditableFunc(function () {
                    return !1
                }), a._defaultInteractor.handle_DOMMouseScroll = function (t) {
                    var e = a.lp(t), o = a.getDatasInRect({x: e.x, y: e.y, width: 1, height: 1}, !0, !1), n = !1;
                    o.each(function (e) {
                        !n && e.combine && (e.combine.onWheel(-t.detail), n = !0)
                    }), n || 2 === t.axis && this.gv.handleScroll(t, -t.detail)
                }, a.setHelperEditableFunc(function (e, t) {
                    return !1
                }), a.dm().enableAnimation(), a.getView().style.backgroundColor = "#222", a.setRotationEditableFunc(function () {
                    return !1
                }), a.onDataClicked = function (e, t) {
                    var o = a.lp(t);
                    a.getDatasInRect({x: o.x, y: o.y, width: 1, height: 1}, !0, !1).each(function (e) {
                        e instanceof ht.Node && e.onclicked && (e.onclicked(), n.dm.getSelectionModel().setSelection())
                    })
                }, a.onDataDoubleClicked = function (e, t) {
                    var o = a.lp(t);
                    if (e instanceof ht.Block && e.combine.isFold()) e.combine.focus(); else {
                        var n = a.getDatasInRect({x: o.x, y: o.y, width: 1, height: 1}, !0, !1), i = !1;
                        n.each(function (e) {
                            e.onDblClicked && (e.onDblClicked(), i = !0)
                        }), !i && e instanceof ht.Block && e.combine.focus()
                    }
                }, a.isAnimating = function () {
                    return this._animating || this._moving || this._scrolling
                }, a.onBackgroundDoubleClicked = function (t) {
                    a.dm().each(function (e) {
                        e instanceof ht.Block ? (t.ctrlKey ? e.combine.unfold() : e.combine.fold(), e.combine.unfocus()) : e instanceof ht.Edge && e.s("flow", !1)
                    }), a._animating = !1
                }, a.dm().onRemoved = function (e) {
                    e instanceof ht.Block && e.combine.remove()
                }, a.enableFlow(60), a.enableToolTip()
            }
        }, {
            key: "creatCombine", value: function (e) {
                return new o(e, this.gv)
            }
        }, {
            key: "load", value: function (e) {
                var t = this, o = t.gv, s = t.dm;
                s.clear(), "string" == typeof e && (e = JSON.parse(e));
                var r = {};
                e.combines.forEach(function (e) {
                    r[e.id] = t.creatCombine(e).combine
                }), e.links.forEach(function (n) {
                    var i = r[n.n1].portNodes[n.p1], a = r[n.n2].portNodes[n.p2], e = new ht.Edge(i, a);
                    s.add(e), i.a("points").in && i.a("points").in[0].rule && e.setToolTip("规则：" + i.a("points").in[0].rule), e.s({
                        "edge.type": "flowEdge",
                        "edge.offset": 0,
                        "edge.source.anchor.x": 1,
                        "edge.source.anchor.y": .5,
                        "edge.target.anchor.x": 0,
                        "edge.target.anchor.y": .5
                    }), e.addStyleIcon("edge.arrow", {
                        position: 19,
                        width: 10,
                        height: 10,
                        offsetX: -5,
                        names: ["edge.arrow"]
                    }), e.onDblClicked = function (e) {
                        var t = i.combine, o = a.combine;
                        t.unfold(), o.unfold(), t.setScroll(n.p1), o.setScroll(n.p2)
                    }
                }), o.dm().each(function (e) {
                    e instanceof ht.Block ? (e.combine.fold(), e.combine.unfocus()) : e instanceof ht.Edge && e.s("flow", !1)
                })
            }
        }, {
            key: "save", value: function () {
                this.dm.getDatas();
                var o = [], a = [];
                return this.dm.getDatas().each(function (e) {
                    if (e instanceof ht.Block) {
                        var t = e.combine.option;
                        t.id = e.getId(), t.position = e.getPosition(), o.push(t)
                    }
                }), this.dm.getDatas().each(function (e) {
                    if (e instanceof ht.Edge) {
                        var t = e.getSource().combine.option.id, o = e.getSource().a("index"),
                            n = e.getTarget().combine.option.id, i = e.getTarget().a("index");
                        a.push({n1: t, p1: o, n2: n, p2: i})
                    }
                }), {combines: o, links: a}
            }
        }, {
            key: "layout", value: function (e) {
                var o = this, n = {};
                o.dm.clear(), e.returnInfo.nodes.forEach(function (e) {
                    var t = new ht.Node;
                    t.setSize(u.titleWidth, u.portHeight * (u.maxRowCount + 4)), t.setName(e.name), n[e.oid] = t, o.dm.add(t)
                }), e.returnInfo.edges.forEach(function (e) {
                    n[e.srcEntityId] && n[e.desEntityId] && (e = new ht.Edge(n[e.srcEntityId], n[e.desEntityId]), o.dm.add(e))
                });
                var t = new ht.layout.AutoLayout(o.gv);
                return t.setAnimate(!1), t.layout(h), o.dm.clear(), n
            }
        }, {
            key: "layoutDagre", value: function (e) {
                var o = {}, t = u.titleWidth, n = u.portHeight * (u.maxRowCount + 4);
                this.dm.clear();
                var i = new dagre.graphlib.Graph;
                return i.setGraph({rankdir: "LR", ranksep: 2 * t}), i.setDefaultEdgeLabel(function () {
                    return {}
                }), e.returnInfo.nodes.forEach(function (e) {
                    i.setNode(e.oid, {label: e.oid, width: t, height: n}), o[e.oid] = !0
                }), e.returnInfo.edges.forEach(function (e) {
                    o[e.srcEntityId] && o[e.desEntityId] && i.setEdge(e.srcEntityId, e.desEntityId)
                }), dagre.layout(i), i.nodes().forEach(function (e) {
                    var t = i.node(e);
                    o[t.label] = {x: t.x, y: t.y}
                }), o
            }
        }, {
            key: "layoutDracula", value: function (e) {
                var o = {};
                this.dm.clear();
                var n = new Dracula.Graph, t = u.titleWidth, i = u.portHeight * (u.maxRowCount + 4);
                return e.returnInfo.nodes.forEach(function (e) {
                    n.setNode(e.oid, {label: e.oid, width: t, height: i})
                }), e.returnInfo.edges.forEach(function (e) {
                    o[e.srcEntityId] && o[e.desEntityId] && n.setEdge(e.srcEntityId, e.desEntityId)
                }), new Dracula.Layout.Spring(n).layout(), n.nodes().forEach(function (e) {
                    var t = n.node(e);
                    o[t.label] = {x: t.x, y: t.y}
                }), o
            }
        }, {
            key: "importData", value: function (e) {
                "string" == typeof e && (e = JSON.parse(e));
                var o = this.layoutDagre(e), n = {}, i = {combines: [], links: []};
                e.returnInfo.nodes.forEach(function (e) {
                    var t = {
                        name: e.name,
                        id: e.oid,
                        icon: "symbols/label2.json",
                        position: o[e.oid],
                        points: {in: []}
                    };
                    e.columns.forEach(function (e) {
                        t.points.in.push({type: e})
                    }), i.combines.push(t), n[e.oid] = e
                }), e.returnInfo.edges.forEach(function (e) {
                    if (n[e.srcEntityId]) if (n[e.desEntityId]) if (n[e.srcEntityId].columns.indexOf(e.metaRelDetails[0].srcColumn) < 0) console.log("no find label: " + e.srcEntityId + ": " + e.metaRelDetails[0].srcColumn); else if (n[e.desEntityId].columns.indexOf(e.metaRelDetails[0].desColumn) < 0) console.log("no find label: " + e.desEntityId + ": " + e.metaRelDetails[0].desColumn); else {
                        var t = {
                            n1: e.srcEntityId,
                            n2: e.desEntityId,
                            p1: n[e.srcEntityId].columns.indexOf(e.metaRelDetails[0].srcColumn),
                            p2: n[e.desEntityId].columns.indexOf(e.metaRelDetails[0].desColumn)
                        };
                        i.links.push(t)
                    } else console.log("no find node: " + e.desEntityId); else console.log("no find node: " + e.srcEntityId)
                }), this.load(i)
            }
        }]), t
    }(), g = {
        returnInfo: {
            edges: [
                {
                id: "DB61BCBB79B24C11B1954EE6F97851FB",
                relationType: 0,
                processId: "89041868",
                desEntityCode: "G_GA_BUSINES_TAR",
                srcEntityId: "88682354",
                systemId: "0",
                srcEntityCode: "G_GA_BUSINESS_DC_HZ",
                metaRelDetails: [{
                    srcColumn: "PART24",
                    desColumn: "PART24",
                    calcRule: "fc7caf78-40ae-41cc-9904-b6b33d675a74"
                }, {
                    srcColumn: "DAY_ID",
                    desColumn: "DAY_ID",
                    calcRule: "ee1fc16b-2a78-4491-b1e5-85d102bf2172"
                }, {
                    srcColumn: "AREA_NO",
                    desColumn: "AREA_NO",
                    calcRule: "ccb58c6d-6d07-4560-8ef6-970d996542d2"
                }, {
                    srcColumn: "AREA_NAME",
                    desColumn: "AREA_NAME",
                    calcRule: "f8608d2e-b257-45fc-918d-4599cf661e2b"
                }, {
                    srcColumn: "USER_ORG_NAME",
                    desColumn: "USER_ORG_NAME",
                    calcRule: "907fee3a-5549-411e-8e0b-eac3b0969ce9"
                }, {
                    srcColumn: "USER_NAME",
                    desColumn: "USER_NAME",
                    calcRule: "de8dc6f5-7269-4aa7-ad0f-7dceb3b673f7"
                }, {srcColumn: "LOGIN_ID", desColumn: "LOGIN_ID", calcRule: "cdabf7b9-598b-455b-b2ab-8f2e9d9a3174"}],
                desEntityId: "89041919"
            }, {
                id: "A35B16B872F741C5809D8C400651F231",
                relationType: 0,
                processId: "89041868",
                desEntityCode: "G_GA_BUSINES_TAR",
                srcEntityId: "88682981",
                systemId: "0",
                srcEntityCode: "G_GA_BUSINESS_DC_QD_D",
                metaRelDetails: [{
                    srcColumn: "BUSINESS_ID",
                    desColumn: "BUSINESS_ID",
                    calcRule: "50cbc95d-0388-4aa4-b2e0-a271702fa2f2"
                }, {
                    srcColumn: "BUSINESS_NAME",
                    desColumn: "BUSINESS_NAME",
                    calcRule: "522bf0ec-979c-4fe3-bd4b-6aac4472a280"
                }, {
                    srcColumn: "YJ_34_EXPECT_INC",
                    desColumn: "YJ_34_EXPECT_INC",
                    calcRule: "73e645a4-c3f8-4895-93dc-c997d90d5875"
                }, {
                    srcColumn: "YJ_34_EXPECT_DEV",
                    desColumn: "YJ_34_EXPECT_DEV",
                    calcRule: "be8b55f5-dea3-4d0b-a293-b15fb6a9a188"
                }, {
                    srcColumn: "DC_UPDATE_DATE",
                    desColumn: "DC_UPDATE_DATE",
                    calcRule: "83ba8a01-d47c-4dda-b1fb-fe96d0a4aa2d"
                }, {
                    srcColumn: "DC_ADD_EXPECT_INC",
                    desColumn: "DC_ADD_EXPECT_INC",
                    calcRule: "d56290bf-0a80-4c4b-980d-114bf620766f"
                }],
                desEntityId: "89041919"
            }, {
                id: "A15D1505EF674511A396A6809B2C6E2F",
                relationType: 0,
                processId: "89023071",
                desEntityCode: "G_GA_BUSINESS_DC_QD_D",
                srcEntityId: "88681483",
                systemId: "0",
                srcEntityCode: "CI_BUSINESS_BASE_INFO_NEW",
                metaRelDetails: [{
                    srcColumn: "BUSINESS_NAME",
                    desColumn: "BUSINESS_NAME",
                    calcRule: "95217ca6-4760-4a54-bba0-e09ae0acc928"
                }, {
                    srcColumn: "BUSINESS_ID",
                    desColumn: "BUSINESS_ID",
                    calcRule: "f994552f-2a97-46ae-9de7-549af3e34748"
                }],
                desEntityId: "88682981"
            }, {
                id: "B8C53F0FDBF9491993E769BF08C2AD27",
                relationType: 0,
                processId: "89023071",
                desEntityCode: "G_GA_BUSINESS_DC_QD_D",
                srcEntityId: "88682306",
                systemId: "0",
                srcEntityCode: "CI_BUSINESS_DEMAND",
                metaRelDetails: [{
                    srcColumn: "EXPECT_INC",
                    desColumn: "YJ_34_EXPECT_INC",
                    calcRule: "9ba042c6-195d-4fae-b5bd-72e6f8896001"
                }, {
                    srcColumn: "BUSINESS_ID",
                    desColumn: "YJ_34_EXPECT_INC",
                    calcRule: "9ba042c6-195d-4fae-b5bd-72e6f8896001"
                }, {
                    srcColumn: "EXPECT_DEV",
                    desColumn: "YJ_34_EXPECT_DEV",
                    calcRule: "2da80632-ab01-428a-b49c-b5c1fdacbc3a"
                }, {
                    srcColumn: "BUSINESS_ID",
                    desColumn: "YJ_34_EXPECT_DEV",
                    calcRule: "2da80632-ab01-428a-b49c-b5c1fdacbc3a"
                }],
                desEntityId: "88682981"
            }, {
                id: "ED3F383826B14A9F850C6BB1664ADA1F",
                relationType: 0,
                processId: "89023071",
                desEntityCode: "G_GA_BUSINESS_DC_QD_D",
                srcEntityId: "88682571",
                systemId: "0",
                srcEntityCode: "CI_BUS_STAGE_STATE_LOG",
                metaRelDetails: [{
                    srcColumn: "UPDATE_DATE",
                    desColumn: "DC_UPDATE_DATE",
                    calcRule: "d08d6826-5da1-49f4-b627-4406d8d6fae0"
                }],
                desEntityId: "88682981"
            }, {
                id: "C9F14BFD6E194ABF92E0C5E69D8554C7",
                relationType: 0,
                processId: "89023071",
                desEntityCode: "G_GA_BUSINESS_DC_QD_D",
                srcEntityId: "88682478",
                systemId: "0",
                srcEntityCode: "CI_BUS_LAND_PRODUCT",
                metaRelDetails: [{
                    srcColumn: "EXPECT_INC",
                    desColumn: "DC_ADD_EXPECT_INC",
                    calcRule: "942a5cc8-e629-40a6-8020-6ebe436a2085"
                }],
                desEntityId: "88682981"
            }, {
                id: "399902D631A647E191B9544AC513F6E0",
                relationType: 0,
                processId: "89023065",
                desEntityCode: "G_GA_BUSINESS_DC_HZ",
                srcEntityId: null,
                systemId: "0",
                srcEntityCode: null,
                metaRelDetails: [{
                    desColumn: "PART24",
                    calcRule: "\n经过聚合表达式:${V_PART24}\n存入目标表:G_GA.G_GA_BUSINESS_DC_HZ字段:PART24\n*******************\n"
                }],
                desEntityId: "88682354"
            }, {
                id: "1303838DEE9C42BF8FEE51FD6EADD40D",
                relationType: 0,
                processId: "89023065",
                desEntityCode: "G_GA_BUSINESS_DC_HZ",
                srcEntityId: null,
                systemId: "0",
                srcEntityCode: null,
                metaRelDetails: [{
                    desColumn: "DAY_ID",
                    calcRule: "\n经过聚合表达式:${V_DAY_ID}\n存入目标表:G_GA.G_GA_BUSINESS_DC_HZ字段:DAY_ID\n*******************\n"
                }],
                desEntityId: "88682354"
            }, {
                id: "C872A7A3A6454FDCA560C9617F4A6612",
                relationType: 0,
                processId: "89023065",
                desEntityCode: "G_GA_BUSINESS_DC_HZ",
                srcEntityId: null,
                systemId: "0",
                srcEntityCode: null,
                metaRelDetails: [{
                    desColumn: "AREA_NO",
                    calcRule: "\n经过聚合表达式:${V_AREA_NO}\n存入目标表:G_GA.G_GA_BUSINESS_DC_HZ字段:AREA_NO\n*******************\n"
                }],
                desEntityId: "88682354"
            }, {
                id: "43AC7631B1094E55839EFD43CC5BCFD8",
                relationType: 0,
                processId: "89023065",
                desEntityCode: "G_GA_BUSINESS_DC_HZ",
                srcEntityId: null,
                systemId: "0",
                srcEntityCode: null,
                metaRelDetails: [{
                    desColumn: "AREA_NAME",
                    calcRule: "\n经过聚合表达式:${V_AREA_NAME}\n存入目标表:G_GA.G_GA_BUSINESS_DC_HZ字段:AREA_NAME\n*******************\n"
                }],
                desEntityId: "88682354"
            }, {
                id: "91CDD8698F6142ADB98A34F59E6C0C54",
                relationType: 0,
                processId: "89023065",
                desEntityCode: "G_GA_BUSINESS_DC_HZ",
                srcEntityId: "88681934",
                systemId: "0",
                srcEntityCode: "ORG_ORGANIZATION_MOD",
                metaRelDetails: [{
                    srcColumn: "NAME",
                    desColumn: "USER_ORG_NAME",
                    calcRule: "16137cb0-e604-47f3-99b5-e499ad37560b"
                }],
                desEntityId: "88682354"
            }, {
                id: "C7C8B78C556F433BA25F13D6A5C63CA5",
                relationType: 0,
                processId: "89023065",
                desEntityCode: "G_GA_BUSINESS_DC_HZ",
                srcEntityId: "88682191",
                systemId: "0",
                srcEntityCode: "PURE_USER",
                metaRelDetails: [{
                    srcColumn: "USER_NAME",
                    desColumn: "USER_NAME",
                    calcRule: "a9baeede-db3e-44e2-93e7-9cdfa64a89c0"
                }],
                desEntityId: "88682354"
            }, {
                id: "CD805B2F8AF64D40915616BE27CD13F8",
                relationType: 0,
                processId: "89023065",
                desEntityCode: "G_GA_BUSINESS_DC_HZ",
                srcEntityId: "88681483",
                systemId: "0",
                srcEntityCode: "CI_BUSINESS_BASE_INFO_NEW",
                metaRelDetails: [{
                    srcColumn: "LOGIN_ID",
                    desColumn: "LOGIN_ID",
                    calcRule: "559dce15-e79c-4f0e-9fd1-6b21ae0878d1"
                }],
                desEntityId: "88682354"
            }],
            nodes: [{
                oid: "88682354",
                name: "表描述：达产业务量和收入清单",
                columns: ["ACCT_DATE", "PART24", "DAY_ID", "AREA_NO", "AREA_NAME", "USER_ORG_NAME", "USER_NAME", "LOGIN_ID", "BUSINESS_ID", "BUSINESS_NAME", "ALL_CZ", "ALL_INC", "GW_CZ", "GW_INC", "YD_CZ", "YD_INC", "GW_ICT_CZ", "GW_ICT_INC", "GW_IDC_CZ", "GW_IDC_INC", "GW_SJWY_CZ", "GW_SJTX_INC", "GW_SJWY_SDH_CZ", "GW_SJWY_SDH_INC", "GW_SJWY_MSTP_CZ", "GW_SJWY_MSTP_INC", "GW_SJWY_CZGL_CZ", "GW_SJWY_CZGL_INC", "GW_SJWY_QT_CZ", "GW_SJWY_QT_INC", "GW_KD_CZ", "GW_KD_INC", "GW_KD_LANZ_CZ", "GW_KD_LANZ_INC", "GW_KD_1L00_CZ", "GW_KD_1L00_INC", "GW_KD_ADSL_CZ", "GW_KD_ADSL_INC", "GW_KD_FTTH_CZ", "GW_KD_FTTH_INC", "GW_KD_QT_CZ", "GW_KD_QT_INC", "GW_GH_CZ", "GW_GH_INC", "GW_GH_QT_CZ", "GW_GH_QT_INC", "YD_4G_CZ", "YD_4G_INC", "YD_4GSJ_CZ", "YD_4GSJ_INC", "YD_4GSWK_CZ", "YD_4GSWK_INC", "YD_3G_CZ", "YD_3G_INC", "YD_3GSJ_CZ", "YD_3GSJ_INC", "YD_3GSWK_CZ", "YD_3GSWK_INC", "YD_2G_CZ", "YD_2G_INC", "ACCT_MONTH"]
            }, {
                oid: "89041919",
                name: "G_GA_BUSINES_TAR",
                columns: ["PART24", "DAY_ID", "AREA_NO", "AREA_NAME", "USER_ORG_NAME", "USER_NAME", "LOGIN_ID", "BUSINESS_ID", "BUSINESS_NAME", "YJ_34_EXPECT_INC", "YJ_34_EXPECT_DEV", "DC_UPDATE_DATE", "DC_ADD_EXPECT_INC"]
            }, {
                oid: "88682306",
                name: "商机创建-项目需求信息",
                columns: ["BUSINESS_ID", "SVC_TYPE_ONE", "SVC_TYPE_SECOND", "EXPECT_DEV", "EXPECT_END_TIME", "EXPECT_INC", "IS_OK", "HOPE_END_TIME", "CREATE_TIME", "UPDATE_TIME", "STATUS", "OPERATOR", "REMARK5", "BRAND", "HIS_BUSINESS_ID"]
            }, {
                oid: "88682981",
                name: "表描述：#达产阶段清单#",
                columns: ["ACCT_DATE", "CUST_NAME", "CUST_NO", "BUSINESS_NAME", "BUSINESS_ID", "BUSINESS_DESC", "HETONG_ACT_INC", "YJ_34_EXPECT_INC", "YJ_34_EXPECT_DEV", "DC_UPDATE_DATE", "DC_ADD_EXPECT_INC", "DC_EXPECT_INC", "DC_ADD_34_EXPECT_DEV", "DC_34_EXPECT_DEV", "LOGIN_ID", "ZC_LOGIN_ID", "XM_LOGIN_ID", "AREA_NO", "LOGIN_ID_DEPT", "XM_LOGIN_ID_DEPT", "ZC_LOGIN_ID_DEPT"]
            }, {
                oid: "88681934",
                name: "ORG_ORGANIZATION_MOD",
                columns: ["ID", "NAME", "PARENT_ID", "AREACODE", "REMARK", "ORG_TYPE", "ORGRANK", "STATE", "INSERT_TIME", "ORD", "GRADE", "LAT", "LNG", "PA_FLAG", "LEAFNODE_FLAG", "HALL_FLAG", "BLOCK", "ORG_CATEGORY", "AREA_ID", "COUNTRY_ID", "CENTER_ID", "ORGRANK_NAME", "JNAME", "IF_HIS", "PRO_TYPE", "DELFLAG"]
            }, {
                oid: "88682571",
                name: "阶段状态时间",
                columns: ["BUSINESS_ID", "STAGE_STATE", "UPDATE_DATE", "UPDATER", "HIS_BUSINESS_ID"]
            }, {
                oid: "88682478",
                name: "CI_BUS_LAND_PRODUCT",
                columns: ["BUSINESS_ID", "SVC_TYPE_ONE", "SVC_TYPE_SECOND", "ACCT_MONTH", "EXPECT_DEV", "EXPECT_INC", "OPERATOR", "OPERATE_DATE", "INCOME_NO", "HIS_BUSINESS_ID"]
            }, {
                oid: "88681483",
                name: "CI_BUSINESS_BASE_INFO_NEW",
                columns: ["BUSINESS_ID", "BUSINESS_NAME", "CUST_NAME", "CUST_NO", "CUST_TYPE", "INDUSTRY_FIRST", "INDUSTRY_SECOND", "INDUSTRY_THIRD", "CUST_ADDRESS", "BUSINESS_SDD", "BUSINESS_BUSCODE", "SUCCESS_RATE", "HETONG_CON_INC", "EXPECT_INC", "PROJECT_LEVEL", "TOUZI_CON_INC", "MESSAGE_LEVEL", "IS_TENDER", "BID_TIME", "OPEN_TIME", "LOGIN_ID", "CREATE_DATE", "UPDATE_DATE", "OPERATOR", "BUSSINESS_STATUS", "BUSSINESS_STATUS_STEP", "BUSSINESS_STEP_STATUS", "BUSINESS_DESC", "EXPECT_CONTRACT_TIME", "STATE", "DEPT_LOGIN_ID", "BUS_LOGIN_ID", "ZC_LOGIN_LEADER", "ZC_LOGIN_ID", "XM_LOGIN_ID", "HETONG_NO", "HETONG_DATE", "HETONG_BEGIN", "HETONG_END", "HETONG_ACT_INC", "PRO_WORK_QK", "PRO_END", "STEP_STAGE_REMARKS", "AREA_NO", "IF_HIS", "INFO_DESC", "PROJECT_DESC", "IF_CUST_GROUP", "INFO_SERV_TYPE", "HIS_BUSINESS_ID", "HIS_DATE", "BUS_EVALUTE", "BUS_ITEM", "BUS_EXPLAIN", "PRO_EVALUTE", "PRO_ITEM", "PRO_EXPLAIN", "XMLEADER_NAME", "XMLEADER_JOB", "HETONG_TYPE", "HETONG_INCOME", "CUST_GROUP", "CITY_DEPT_COM", "PRO_DEPT_COM", "PRO_DEPT_LEADER", "IS_HALL", "IS_PRO", "PRO_ZC_LOGIN_ID", "PRO_XMLOGIN_ID", "PRO_ZC_TYPE", "HETONG_PRO", "HETONG_TJ_INC", "PENDING_CODE", "HETONG_BEGIN_TIME", "IS_UP", "INDUSTRY_TYPE", "IF_ZC", "IF_ZF", "ZF_PERSON", "HETONG_YEAR_LIMIT", "INFO_SERV_TYPE_SECOND", "INFO_SERV_TYPE_THIRD", "ZC_LOGIN_TIME", "CONTACT_NAME", "CONTACT_TELEPHONE"]
            }, {
                oid: "88682191",
                name: "用户",
                columns: ["USER_ID", "LOGIN_ID", "PASSWORD", "USER_NAME", "ADMIN", "SEX", "EMAIL", "MOBILE", "TELEPHONE", "STATE", "PWD_STATE", "MEMO", "REG_DATE", "UPDATE_DATE", "LAST_TIME", "HR_ID", "GROUP_NAME", "GROUPNAME", "DATA_AREA", "SALARY_CALC", "WORK_STATION", "CREATE_USER_ID", "CREATE_USER_ORG", "DATA_SOURCES", "USER_ORG", "USER_AREA_ID", "IS_RECEIVE", "RECEIVE_RANK", "PASSWORD_MODIFY_DATE", "PASSWORD_ERROR_COUNT", "PASSWORD_ENCRYPTION", "SSOID", "IMEI", "UUID", "OA_ID"]
            }]
        }, returnStatus: 200, returnStatusStr: "成功", returnStatuslog: ""
    };
    return new (function () {
        function e() {
            s(this, e), this.initUI()
        }

        return r(e, [{
            key: "initUI", value: function () {
                var e = this.borderPane = new ht.widget.BorderPane, t = this.tree = new _(this),
                    o = this.gv = new ht.graph.GraphView, n = this.leftSplitView = new d(t, o, "h", 240);
                e.setCenterView(n), window.gv = o, t.getView().style.backgroundColor = "#d7d9db", t.setSelectBackground("rgba(51,153,255, 0.7)"), t.setRowHeight(32), o.model = this.model = new f(o), o.model.importData(g), o.fitContent(!0), e.addToDOM()
            }
        }]), e
    }())
});
