/* Shared behaviour: footer year, compact menu, publication filters. Everything degrades without JS. */
(function () {
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- Compact navigation menu (narrow screens) ---------- */
  var btn = document.querySelector('.menu-btn');
  var list = document.getElementById('nav-links');
  if (btn && list) {
    var close = function (returnFocus) {
      list.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      if (returnFocus) btn.focus();
    };
    btn.addEventListener('click', function () {
      var open = !list.classList.contains('open');
      list.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
      if (open) { var first = list.querySelector('a'); if (first) first.focus(); }
    });
    list.addEventListener('click', function (e) { if (e.target.closest('a')) close(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && list.classList.contains('open')) close(true);
    });
    document.addEventListener('click', function (e) {
      if (list.classList.contains('open') && !e.target.closest('.topbar')) close(false);
    });
    window.matchMedia('(min-width: 700px)').addEventListener('change', function () { close(false); });
  }

  /* ---------- Publication topic filters ---------- */
  var bar = document.querySelector('.filters');
  if (bar) {
    var items = Array.prototype.slice.call(document.querySelectorAll('#publications li[data-topics]'));
    var status = document.querySelector('.filter-status');
    var groups = Array.prototype.slice.call(document.querySelectorAll('#publications .pub-year'));
    bar.hidden = false;
    bar.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-filter]');
      if (!b) return;
      var f = b.getAttribute('data-filter');
      bar.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      var shown = 0;
      items.forEach(function (li) {
        var match = f === 'all' || (' ' + li.getAttribute('data-topics') + ' ').indexOf(' ' + f + ' ') > -1;
        li.hidden = !match;
        if (match) shown++;
      });
      groups.forEach(function (g) { g.hidden = !g.querySelector('li[data-topics]:not([hidden])'); });
      if (status) status.textContent = f === 'all' ? '' : 'Showing ' + shown + ' of ' + items.length + ' publications: ' + b.textContent.trim() + '.';
    });
  }
})();
