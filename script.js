function (t) {
  if (m.onClick && m.onClick(t), H(t)) {
    t.preventDefault();
    var e = p;
    if ("boolean" != typeof p && b) {
      var n = f({}, i.state),
        r = (n.key, d(n, ["key"]));
      e = Object(l.shallowCompare)(f({}, s), r)
    }
    u(g, {
      state: s,
      replace: e
    })
  }
}