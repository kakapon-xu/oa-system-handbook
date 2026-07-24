/* handbook.js — GitHub-style handbook tiny helper */
(function () {
  var path = location.pathname;
  var file = (path.split('/').pop() || 'index.html').toLowerCase();
  var isModules = path.indexOf('/modules/') !== -1;
  document.querySelectorAll('a.gh-sb-item').forEach(function (a) {
    var href = (a.getAttribute('href') || '').toLowerCase();
    if (href.endsWith('/' + file) || href === file) a.classList.add('active');
  });
  if (isModules) {
    document.querySelectorAll('a.gh-sb-item').forEach(function (a) {
      var h = (a.getAttribute('href') || '').toLowerCase();
      if (h.endsWith('modules.html') || h === 'modules.html') {
        var g = a.closest('.gh-sb-group');
        if (g) {
          var head = g.querySelector('.gh-sb-group-header');
          if (head) head.classList.add('parent-active');
        }
      }
    });
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var el = document.querySelector(a.getAttribute('href'));
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
  });
})();
