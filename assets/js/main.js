(function () {
  // mobile menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  // lightbox for gallery photos
  var lb = document.getElementById('lb');
  var lbImg = lb.querySelector('img');
  var lbCap = lb.querySelector('figcaption');
  function closeLb() { lb.hidden = true; document.body.style.overflow = ''; }
  document.querySelectorAll('.gallery a').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      lbImg.src = a.getAttribute('href');
      lbImg.alt = a.querySelector('img').alt;
      lbCap.textContent = a.dataset.cap || '';
      lb.hidden = false;
      document.body.style.overflow = 'hidden';
    });
  });
  lb.addEventListener('click', function (e) { if (e.target !== lbImg) closeLb(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lb.hidden) closeLb(); });

  document.getElementById('yr').textContent = new Date().getFullYear();
})();

// header turns solid once the page is scrolled past the top
(function () {
  var h = document.querySelector('.site-header');
  function onScroll() { h.classList.toggle('solid', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
