(function () {
  'use strict';

  var bar = document.getElementById('progress');
  if (bar) {
    var onScroll = function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  var nav = document.querySelector('nav');
  var toggle = document.querySelector('.nav-toggle');
  if (nav && toggle) {
    var setOpen = function (open) {
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    };
    toggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('open'));
    });
    nav.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  document.querySelectorAll('pre').forEach(function (pre) {
    var btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.type = 'button';
    btn.textContent = 'copy';
    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(pre.textContent.replace(/\s*copy\s*$/, '').trim()).then(function () {
        btn.textContent = 'copied!';
        btn.classList.add('copied');
        setTimeout(function () { btn.textContent = 'copy'; btn.classList.remove('copied'); }, 2000);
      });
    });
    pre.appendChild(btn);
  });
})();
