!function (T) {
    "use strict";
    var Z = "ht", y = T[Z], e = Math, I = e.max, U = e.min, z = e.abs, V = e.atan2, i = (e.cos, e.sin, e.ceil),
        E = y.Default, C = E.getInternal(), q = y.List, Y = C.Mat, j = C.getNodeRect, $ = C.intersectionLineRect,
        g = E.getDistance, S = E.setEdgeType, k = "left", r = "right", F = "top", W = "bottom", c = "edge.type",
        M = "edge.gap", R = "edge.center", G = "edge.extend", t = function (T, S) {
            return j(T, S).width
        }, B = function (n, s) {
            return j(n, s).height
        }, L = function (P, o) {
            return C.getEdgeAgentPosition(P, o._40I, o.s("edge.source.position"), o.s("edge.source.offset.x"), o.s("edge.source.offset.y"), o.s("edge.source.anchor.x"), o.s("edge.source.anchor.y"))
        }, p = function (A, N) {
            return C.getEdgeAgentPosition(A, N._41I, N.s("edge.target.position"), N.s("edge.target.offset.x"), N.s("edge.target.offset.y"), N.s("edge.target.anchor.x"), N.s("edge.target.anchor.y"))
        }, P = function (i, z) {
            var Y = i.s(c), A = i.getEdgeGroup();
            if (A) {
                var X = 0;
                if (A.eachSiblingEdge(function (e) {
                    z.isVisible(e) && e.s(c) == Y && X++
                }), X > 1) return i.s(M) * (X - 1) / 2
            }
            return 0
        }, x = function (l, N) {
            var j = l.s(c), P = l.isLooped();
            if (!l.getEdgeGroup()) return P ? l.s(M) : 0;
            var F, G = 0, z = 0, n = 0;
            return l.getEdgeGroup().getSiblings().each(function (V) {
                V.each(function (J) {
                    if (J._40I === l._40I && J.s(c) == j && N.isVisible(J)) {
                        var x = J.s(M);
                        F ? (z += n / 2 + x / 2, n = x) : (F = J, n = x), J === l && (G = z)
                    }
                })
            }), P ? z - G + n : G - z / 2
        }, O = function (u, v) {
            var U = v.s("edge.corner.radius");
            return E.toRoundedCorner(u, U)
        };
    C.addMethod(y.Style, {
        "edge.ripple.elevation": -20,
        "edge.ripple.size": 1,
        "edge.ripple.both": !1,
        "edge.ripple.straight": !1,
        "edge.ripple.length": -1,
        "edge.corner.radius": -1,
        "edge.ortho": .5,
        "edge.flex": 20,
        "edge.extend": 20
    }, !0), S("boundary", function (e, Q, c, H) {
        H || (Q = -Q);
        var N, Z = L(c, e), O = p(c, e), X = j(c, e._40I), U = j(c, e._41I), s = new Y(V(O.y - Z.y, O.x - Z.x)),
            y = g(Z, O), F = Z.x, w = Z.y;
        return N = s.tf(0, Q), Z = {x: N.x + F, y: N.y + w}, N = s.tf(y, Q), O = {
            x: N.x + F,
            y: N.y + w
        }, N = $(Z, O, X), N && (Z = {x: N[0], y: N[1]}), N = $(Z, O, U), N && (O = {
            x: N[0],
            y: N[1]
        }), {points: new q([Z, O])}
    }), S("ripple", function (l, n, j, a) {
        a || (n = -n);
        var H = L(j, l), s = p(j, l), P = g(H, s), z = U(l.s("edge.offset"), P / 2), r = l.s("edge.ripple.size"),
            Z = l.s("edge.ripple.length"), F = l.s("edge.ripple.both"), x = l.s(R), E = l.s("edge.ripple.elevation"),
            y = new q, C = l.s("edge.ripple.straight") ? null : new q, b = new Y(V(s.y - H.y, s.x - H.x));
        a || (E = -E), P -= 2 * z, Z > 0 && (r = i(P / Z));
        var M = P / r;
        C && C.add(1);
        for (var k = 0; r > k; k++) C && C.add(3), 0 === k ? y.add({x: z + M * k, y: x ? 0 : n}) : y.add({
            x: z + M * k,
            y: n
        }), y.add({x: z + M * k + M / 2, y: E + n}), F && (E = -E);
        for (y.add({x: z + P, y: x ? 0 : n}), k = 0; k < y.size(); k++) {
            var Q = b.tf(y.get(k));
            Q.x += H.x, Q.y += H.y, y.set(k, Q)
        }
        return {points: y, segments: C}
    }), S("h.v", function (F, z, o) {
        z = x(F, o);
        var Y = new q, r = F.s(R), n = L(o, F), w = n.x, s = n.y, $ = p(o, F), Z = $.x, g = $.y, Q = 0, u = 0,
            i = Z - w, e = g - s;
        return r || (Q = t(o, F._40I) / 2, u = B(o, F._41I) / 2), i >= 0 && 0 >= e ? (Y.add({
            x: w + Q,
            y: s + z
        }), Y.add({x: Z + z, y: s + z}), Y.add({x: Z + z, y: g + u})) : 0 >= i && e >= 0 ? (Y.add({
            x: w - Q,
            y: s + z
        }), Y.add({x: Z + z, y: s + z}), Y.add({x: Z + z, y: g - u})) : i >= 0 && e >= 0 ? (Y.add({
            x: w + Q,
            y: s + z
        }), Y.add({x: Z - z, y: s + z}), Y.add({x: Z - z, y: g - u})) : (Y.add({x: w - Q, y: s + z}), Y.add({
            x: Z - z,
            y: s + z
        }), Y.add({x: Z - z, y: g + u})), O(Y, F)
    }), S("v.h", function (A, Z, k) {
        Z = x(A, k);
        var X = new q, g = A.s(R), i = L(k, A), J = i.x, r = i.y, T = p(k, A), f = T.x, w = T.y, o = 0, y = 0,
            $ = f - J, N = w - r;
        return g || (o = t(k, A._41I) / 2, y = B(k, A._40I) / 2), $ >= 0 && 0 >= N ? (X.add({
            x: J + Z,
            y: r - y
        }), X.add({x: J + Z, y: w + Z}), X.add({x: f - o, y: w + Z})) : 0 >= $ && N >= 0 ? (X.add({
            x: J + Z,
            y: r + y
        }), X.add({x: J + Z, y: w + Z}), X.add({x: f + o, y: w + Z})) : $ >= 0 && N >= 0 ? (X.add({
            x: J - Z,
            y: r + y
        }), X.add({x: J - Z, y: w + Z}), X.add({x: f - o, y: w + Z})) : (X.add({x: J - Z, y: r - y}), X.add({
            x: J - Z,
            y: w + Z
        }), X.add({x: f + o, y: w + Z})), O(X, A)
    }), S("ortho", function (N, X, K) {
        var r = new q, x = N.s(R), e = N.s("edge.ortho"), u = N._40I, J = N._41I, Y = L(K, N), w = Y.x, P = Y.y,
            i = p(K, N), G = i.x, I = i.y, s = G - w, j = I - P, v = x ? 0 : t(K, u) / 2, C = x ? 0 : B(K, u) / 2,
            V = x ? 0 : t(K, J) / 2, y = x ? 0 : B(K, J) / 2, E = (s - (v + V) * (s > 0 ? 1 : -1)) * e,
            S = (j - (C + y) * (j > 0 ? 1 : -1)) * e;
        return z(s) < z(j) ? s >= 0 && 0 >= j ? (r.add({x: w + X, y: P - C}), r.add({
            x: w + X,
            y: P + S + X - C
        }), r.add({x: G + X, y: P + S + X - C}), r.add({x: G + X, y: I + y})) : 0 >= s && j >= 0 ? (r.add({
            x: w + X,
            y: P + C
        }), r.add({x: w + X, y: P + S + X + C}), r.add({x: G + X, y: P + S + X + C}), r.add({
            x: G + X,
            y: I - y
        })) : s >= 0 && j >= 0 ? (r.add({x: w + X, y: P + C}), r.add({x: w + X, y: P + S - X + C}), r.add({
            x: G + X,
            y: P + S - X + C
        }), r.add({x: G + X, y: I - y})) : (r.add({x: w + X, y: P - C}), r.add({
            x: w + X,
            y: P + S - X - C
        }), r.add({x: G + X, y: P + S - X - C}), r.add({x: G + X, y: I + y})) : s >= 0 && 0 >= j ? (r.add({
            x: w + v,
            y: P + X
        }), r.add({x: w + E + X + v, y: P + X}), r.add({x: w + E + X + v, y: I + X}), r.add({
            x: G - V,
            y: I + X
        })) : 0 >= s && j >= 0 ? (r.add({x: w - v, y: P + X}), r.add({
            x: w + E + X - v,
            y: P + X
        }), r.add({x: w + E + X - v, y: I + X}), r.add({x: G + V, y: I + X})) : s >= 0 && j >= 0 ? (r.add({
            x: w + v,
            y: P + X
        }), r.add({x: w + E - X + v, y: P + X}), r.add({x: w + E - X + v, y: I + X}), r.add({
            x: G - V,
            y: I + X
        })) : (r.add({x: w - v, y: P + X}), r.add({x: w + E - X - v, y: P + X}), r.add({
            x: w + E - X - v,
            y: I + X
        }), r.add({x: G + V, y: I + X})), O(r, N)
    }), S("flex", function (F, c, X) {
        var K = new q, S = F.s("edge.flex") + P(F, X), M = F.s(R), u = F._40I, E = F._41I, r = L(X, F), J = r.x,
            Z = r.y, $ = p(X, F), h = $.x, D = $.y, N = h - J, m = D - Z, C = M ? 0 : t(X, u) / 2,
            G = M ? 0 : B(X, u) / 2, I = M ? 0 : t(X, E) / 2, T = M ? 0 : B(X, E) / 2, j = N > 0 ? S : -S,
            d = m > 0 ? S : -S;
        return z(N) < z(m) ? N >= 0 && 0 >= m ? (K.add({x: J + c, y: Z - G}), K.add({
            x: J + c,
            y: Z + d + c - G
        }), K.add({x: h + c, y: D - d + c + T}), K.add({x: h + c, y: D + T})) : 0 >= N && m >= 0 ? (K.add({
            x: J + c,
            y: Z + G
        }), K.add({x: J + c, y: Z + d + c + G}), K.add({x: h + c, y: D - d + c - T}), K.add({
            x: h + c,
            y: D - T
        })) : N >= 0 && m >= 0 ? (K.add({x: J + c, y: Z + G}), K.add({x: J + c, y: Z + d - c + G}), K.add({
            x: h + c,
            y: D - d - c - T
        }), K.add({x: h + c, y: D - T})) : (K.add({x: J + c, y: Z - G}), K.add({
            x: J + c,
            y: Z + d - c - G
        }), K.add({x: h + c, y: D - d - c + T}), K.add({x: h + c, y: D + T})) : N >= 0 && 0 >= m ? (K.add({
            x: J + C,
            y: Z + c
        }), K.add({x: J + j + c + C, y: Z + c}), K.add({x: h - j + c - I, y: D + c}), K.add({
            x: h - I,
            y: D + c
        })) : 0 >= N && m >= 0 ? (K.add({x: J - C, y: Z + c}), K.add({
            x: J + j + c - C,
            y: Z + c
        }), K.add({x: h - j + c + I, y: D + c}), K.add({x: h + I, y: D + c})) : N >= 0 && m >= 0 ? (K.add({
            x: J + C,
            y: Z + c
        }), K.add({x: J + j - c + C, y: Z + c}), K.add({x: h - j - c - I, y: D + c}), K.add({
            x: h - I,
            y: D + c
        })) : (K.add({x: J - C, y: Z + c}), K.add({x: J + j - c - C, y: Z + c}), K.add({
            x: h - j - c + I,
            y: D + c
        }), K.add({x: h + I, y: D + c})), O(K, F)
    }), S("extend.east", function (X, c, S) {
        var W = new q, f = X.s(G) + P(X, S), d = X.s(R), E = L(S, X), $ = E.x + (d ? 0 : t(S, X._40I) / 2), o = E.y,
            Y = p(S, X), Q = Y.x + (d ? 0 : t(S, X._41I) / 2), h = Y.y, l = I($, Q) + f;
        return o > h ? (W.add({x: $, y: o + c}), W.add({x: l + c, y: o + c}), W.add({x: l + c, y: h - c}), W.add({
            x: Q,
            y: h - c
        })) : (W.add({x: $, y: o - c}), W.add({x: l + c, y: o - c}), W.add({x: l + c, y: h + c}), W.add({
            x: Q,
            y: h + c
        })), O(W, X)
    }), S("extend.west", function (E, J, S) {
        var n = new q, o = E.s(G) + P(E, S), I = E.s(R), r = L(S, E), e = r.x - (I ? 0 : t(S, E._40I) / 2), i = r.y,
            X = p(S, E), x = X.x - (I ? 0 : t(S, E._41I) / 2), u = X.y, c = U(e, x) - o;
        return i > u ? (n.add({x: e, y: i + J}), n.add({x: c - J, y: i + J}), n.add({x: c - J, y: u - J}), n.add({
            x: x,
            y: u - J
        })) : (n.add({x: e, y: i - J}), n.add({x: c - J, y: i - J}), n.add({x: c - J, y: u + J}), n.add({
            x: x,
            y: u + J
        })), O(n, E)
    }), S("extend.north", function ($, H, j) {
        var C = new q, F = $.s(G) + P($, j), c = $.s(R), I = L(j, $), d = I.x, Z = I.y - (c ? 0 : B(j, $._40I) / 2),
            n = p(j, $), K = n.x, W = n.y - (c ? 0 : B(j, $._41I) / 2), X = U(Z, W) - F;
        return d > K ? (C.add({y: Z, x: d + H}), C.add({y: X - H, x: d + H}), C.add({y: X - H, x: K - H}), C.add({
            y: W,
            x: K - H
        })) : (C.add({y: Z, x: d - H}), C.add({y: X - H, x: d - H}), C.add({y: X - H, x: K + H}), C.add({
            y: W,
            x: K + H
        })), O(C, $)
    }), S("extend.south", function (j, N, Y) {
        var M = new q, y = j.s(G) + P(j, Y), f = j.s(R), V = L(Y, j), H = V.x, o = V.y + (f ? 0 : B(Y, j._40I) / 2),
            D = p(Y, j), Q = D.x, z = D.y + (f ? 0 : B(Y, j._41I) / 2), E = I(o, z) + y;
        return H > Q ? (M.add({y: o, x: H + N}), M.add({y: E + N, x: H + N}), M.add({y: E + N, x: Q - N}), M.add({
            y: z,
            x: Q - N
        })) : (M.add({y: o, x: H - N}), M.add({y: E + N, x: H - N}), M.add({y: E + N, x: Q + N}), M.add({
            y: z,
            x: Q + N
        })), O(M, j)
    });
    var m = function (N, x, C, K, e) {
        if (K.sort(function (z, u) {
            var T = z.getSourceAgent() === x ? z.getTargetAgent() : z.getSourceAgent(),
                L = u.getSourceAgent() === x ? u.getTargetAgent() : u.getSourceAgent(), Y = T.p(), p = L.p();
            if (C === k || C === r) {
                if (Y.y > p.y) return 1;
                if (Y.y < p.y) return -1
            } else {
                if (Y.x > p.x) return 1;
                if (Y.x < p.x) return -1
            }
            return E.sortFunc(z.getId(), u.getId())
        }), e) {
            for (var t, v, O, Y = N.getSourceAgent(), L = N.getTargetAgent(), Z = 0; Z < K.size(); Z++) {
                var c = K.get(Z);
                c.getSourceAgent() === Y && c.getTargetAgent() === L || c.getTargetAgent() === Y && c.getSourceAgent() === L ? (v || (v = new q), v.add(c, 0)) : v ? (O || (O = new q), O.add(c)) : (t || (t = new q), t.add(c))
            }
            K.clear(), t && K.addAll(t), v && K.addAll(v), O && K.addAll(O)
        }
        var h = K.indexOf(N), w = K.size(), p = N.s(M);
        return {side: C, index: h, size: w, offset: -p * (w - 1) / 2 + p * h}
    }, f = function (U, h, P, R, M) {
        var a = h.s(c);
        return m(h, P, R, P.getAgentEdges().toList(function (C) {
            return U.isVisible(C) && C.s(c) === a
        }), M)
    }, D = function (p, E) {
        var X = p.getSourceAgent() === E ? p.getTargetAgent() : p.getSourceAgent(), C = E.p(), N = X.p(), s = N.x - C.x,
            u = N.y - C.y;
        return s > 0 && z(u) <= s ? r : 0 > s && z(u) <= -s ? k : u > 0 && z(s) <= u ? W : F
    }, A = function (k, a, s) {
        var f = a.s(c), P = D(a, s);
        return m(a, s, P, s.getAgentEdges().toList(function (a) {
            return k.isVisible(a) && a.s(c) === f && D(a, s) === P
        }))
    }, b = function (t, y) {
        var g = t.getSourceAgent() === y, H = g ? t.getTargetAgent() : t.getSourceAgent(), E = y.p(), d = H.p();
        return g ? E.y > d.y ? F : W : E.x < d.x ? r : k
    }, K = function ($, g, y) {
        var j = g.s(c), L = b(g, y);
        return m(g, y, L, y.getAgentEdges().toList(function (q) {
            return $.isVisible(q) && q.s(c) === j && b(q, y) === L
        }), L === r || L === W)
    }, s = function (P, G) {
        var w = P.getSourceAgent() === G, M = w ? P.getTargetAgent() : P.getSourceAgent(), e = G.p(), R = M.p();
        return w ? e.x < R.x ? r : k : e.y > R.y ? F : W
    }, Q = function (Q, t, S) {
        var R = t.s(c), N = s(t, S);
        return m(t, S, N, S.getAgentEdges().toList(function (j) {
            return Q.isVisible(j) && j.s(c) === R && s(j, S) === N
        }), N === r || N === W)
    }, o = function (P, E, C) {
        var g = P.getSourceAgent(), c = P.getTargetAgent(), h = g.getId() > c.getId(), U = h ? c : g, p = h ? g : c,
            V = U.p(), Y = p.p(), i = C(E, P, U), e = C(E, P, p), f = P.s(R), A = f ? 0 : t(E, U) / 2,
            d = f ? 0 : t(E, p) / 2, u = f ? 0 : B(E, U) / 2, s = f ? 0 : B(E, p) / 2, l = i.offset, L = e.offset,
            _ = i.side, H = e.side, S = new q;
        return _ === F ? (S.add({x: V.x + l, y: V.y - u}), S.add({x: V.x + l, y: Y.y + L}), H === k ? S.add({
            x: Y.x - d,
            y: Y.y + L
        }) : S.add({x: Y.x + d, y: Y.y + L})) : _ === W ? (S.add({x: V.x + l, y: V.y + u}), S.add({
            x: V.x + l,
            y: Y.y + L
        }), H === k ? S.add({x: Y.x - d, y: Y.y + L}) : S.add({x: Y.x + d, y: Y.y + L})) : _ === k ? (S.add({
            x: V.x - A,
            y: V.y + l
        }), S.add({x: Y.x + L, y: V.y + l}), H === W ? S.add({x: Y.x + L, y: Y.y + s}) : S.add({
            x: Y.x + L,
            y: Y.y - s
        })) : _ === r && (S.add({x: V.x + A, y: V.y + l}), S.add({x: Y.x + L, y: V.y + l}), H === W ? S.add({
            x: Y.x + L,
            y: Y.y + s
        }) : S.add({x: Y.x + L, y: Y.y - s})), h && S.reverse(), O(S, P)
    };
    S("ortho2", function (X, V, Z) {
        var G, E, l = X.s(R), a = X.s("edge.ortho"), P = X.getSourceAgent(), y = X.getTargetAgent(),
            m = P.getId() > y.getId(), L = m ? y : P, n = m ? P : y, _ = L.p(), s = n.p(), M = A(Z, X, L),
            Y = A(Z, X, n), f = l ? 0 : t(Z, L) / 2, b = l ? 0 : B(Z, L) / 2, g = l ? 0 : t(Z, n) / 2,
            T = l ? 0 : B(Z, n) / 2, u = new q, K = M.offset, e = Y.offset, I = M.side;
        return I === r ? (G = s.y > _.y ? -K : K, E = _.x + f + (s.x - g - _.x - f) * a, u.add({
            x: _.x + f,
            y: _.y + K
        }), u.add({x: E + G, y: _.y + K}), u.add({x: E + G, y: s.y + e}), u.add({
            x: s.x - g,
            y: s.y + e
        })) : I === k ? (G = s.y > _.y ? -K : K, E = _.x - f - (_.x - f - s.x - g) * a, u.add({
            x: _.x - f,
            y: _.y + K
        }), u.add({x: E - G, y: _.y + K}), u.add({x: E - G, y: s.y + e}), u.add({
            x: s.x + g,
            y: s.y + e
        })) : I === W ? (G = s.x > _.x ? -K : K, E = _.y + b + (s.y - T - _.y - b) * a, u.add({
            x: _.x + K,
            y: _.y + b
        }), u.add({x: _.x + K, y: E + G}), u.add({x: s.x + e, y: E + G}), u.add({
            x: s.x + e,
            y: s.y - T
        })) : I === F && (G = s.x > _.x ? -K : K, E = _.y - b - (_.y - b - s.y - T) * a, u.add({
            x: _.x + K,
            y: _.y - b
        }), u.add({x: _.x + K, y: E - G}), u.add({x: s.x + e, y: E - G}), u.add({
            x: s.x + e,
            y: s.y + T
        })), m && u.reverse(), O(u, X)
    }, !0), S("flex2", function (s, N, j) {
        var i, $ = s.getSourceAgent(), D = s.getTargetAgent(), f = $.getId() > D.getId(), g = f ? D : $, Z = f ? $ : D,
            a = g.p(), U = Z.p(), z = A(j, s, g), m = A(j, s, Z), h = s.s(R),
            X = s.s("edge.flex") + (z.size - 1) / 2 * s.s(M), L = h ? 0 : t(j, g) / 2, y = h ? 0 : B(j, g) / 2,
            I = h ? 0 : t(j, Z) / 2, Q = h ? 0 : B(j, Z) / 2, c = new q, o = z.offset, E = m.offset, J = z.side;
        return J === r ? (i = U.y > a.y ? -o : o, c.add({x: a.x + L, y: a.y + o}), c.add({
            x: a.x + L + X + i,
            y: a.y + o
        }), c.add({x: U.x - I - X + i, y: U.y + E}), c.add({
            x: U.x - I,
            y: U.y + E
        })) : J === k ? (i = U.y > a.y ? -o : o, c.add({x: a.x - L, y: a.y + o}), c.add({
            x: a.x - L - X - i,
            y: a.y + o
        }), c.add({x: U.x + I + X - i, y: U.y + E}), c.add({
            x: U.x + I,
            y: U.y + E
        })) : J === W ? (i = U.x > a.x ? -o : o, c.add({x: a.x + o, y: a.y + y}), c.add({
            x: a.x + o,
            y: a.y + y + X + i
        }), c.add({x: U.x + E, y: U.y - Q - X + i}), c.add({
            x: U.x + E,
            y: U.y - Q
        })) : J === F && (i = U.x > a.x ? -o : o, c.add({x: a.x + o, y: a.y - y}), c.add({
            x: a.x + o,
            y: a.y - y - X - i
        }), c.add({x: U.x + E, y: U.y + Q + X - i}), c.add({x: U.x + E, y: U.y + Q})), f && c.reverse(), O(c, s)
    }, !0), S("extend.north2", function (b, h, l) {
        var V = b.getSourceAgent(), W = b.getTargetAgent(), y = V.getId() > W.getId(), t = y ? W : V, K = y ? V : W,
            c = t.p(), m = K.p(), J = f(l, b, t, F), k = f(l, b, K, F, !0), Y = b.s(R), L = Y ? 0 : B(l, t) / 2,
            $ = Y ? 0 : B(l, K) / 2, Q = J.offset, P = k.offset, H = b.s(G) + (J.size - 1) / 2 * b.s(M),
            o = U(c.y - L, m.y - $) - H + (c.x < m.x ? Q : -Q), A = new q;
        return A.add({x: c.x + Q, y: c.y - L}), A.add({x: c.x + Q, y: o}), A.add({x: m.x + P, y: o}), A.add({
            x: m.x + P,
            y: m.y - $
        }), y && A.reverse(), O(A, b)
    }, !0), S("extend.south2", function (Z, n, E) {
        var F = Z.getSourceAgent(), S = Z.getTargetAgent(), H = F.getId() > S.getId(), w = H ? S : F, j = H ? F : S,
            p = w.p(), g = j.p(), Y = f(E, Z, w, W), N = f(E, Z, j, W, !0), D = Z.s(R), C = D ? 0 : B(E, w) / 2,
            V = D ? 0 : B(E, j) / 2, x = Y.offset, t = N.offset, k = Z.s(G) + (Y.size - 1) / 2 * Z.s(M),
            y = I(p.y + C, g.y + V) + k + (p.x > g.x ? x : -x), d = new q;
        return d.add({x: p.x + x, y: p.y + C}), d.add({x: p.x + x, y: y}), d.add({x: g.x + t, y: y}), d.add({
            x: g.x + t,
            y: g.y + V
        }), H && d.reverse(), O(d, Z)
    }, !0), S("extend.west2", function (c, C, P) {
        var N = c.getSourceAgent(), x = c.getTargetAgent(), d = N.getId() > x.getId(), u = d ? x : N, X = d ? N : x,
            T = u.p(), V = X.p(), v = f(P, c, u, F), S = f(P, c, X, F, !0), k = c.s(R), J = k ? 0 : t(P, u) / 2,
            h = k ? 0 : t(P, X) / 2, B = v.offset, y = S.offset, g = c.s(G) + (v.size - 1) / 2 * c.s(M),
            l = U(T.x - J, V.x - h) - g + (T.y < V.y ? B : -B), s = new q;
        return s.add({x: T.x - J, y: T.y + B}), s.add({x: l, y: T.y + B}), s.add({x: l, y: V.y + y}), s.add({
            x: V.x - h,
            y: V.y + y
        }), d && s.reverse(), O(s, c)
    }, !0), S("extend.east2", function (D, H, k) {
        var y = D.getSourceAgent(), j = D.getTargetAgent(), P = y.getId() > j.getId(), T = P ? j : y, h = P ? y : j,
            E = T.p(), g = h.p(), S = f(k, D, T, F), s = f(k, D, h, F, !0), e = D.s(R), Y = e ? 0 : t(k, T) / 2,
            A = e ? 0 : t(k, h) / 2, J = S.offset, l = s.offset, r = D.s(G) + (S.size - 1) / 2 * D.s(M),
            U = I(E.x + Y, g.x + A) + r + (E.y > g.y ? J : -J), Z = new q;
        return Z.add({x: E.x + Y, y: E.y + J}), Z.add({x: U, y: E.y + J}), Z.add({x: U, y: g.y + l}), Z.add({
            x: g.x + A,
            y: g.y + l
        }), P && Z.reverse(), O(Z, D)
    }, !0), S("v.h2", function (b, m, B) {
        return o(b, B, K)
    }, !0), S("h.v2", function (U, g, e) {
        return o(U, e, Q)
    }, !0)
}("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : (0, eval)("this"), Object);