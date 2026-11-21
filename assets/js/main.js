(function () {
  // mobile menu
  var btn = document.querySelector('.menu-btn');
  var links = document.getElementById('links');
  btn.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { links.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  // lightbox
  var lb = document.getElementById('lb');
  var lbImg = lb.querySelector('img');
  var lbCap = lb.querySelector('figcaption');
  function closeLb() { lb.hidden = true; document.body.style.overflow = ''; }
  document.querySelectorAll('.g').forEach(function (g) {
    g.addEventListener('click', function () {
      lbImg.src = g.dataset.full;
      lbImg.alt = g.querySelector('img').alt;
      lbCap.textContent = g.dataset.cap || '';
      lb.hidden = false;
      document.body.style.overflow = 'hidden';
    });
  });
  lb.addEventListener('click', function (e) { if (e.target !== lbImg) closeLb(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lb.hidden) closeLb(); });

  // reveal on scroll
  var items = document.querySelectorAll('.card, .tech > div, .pubs li, .g, .timeline li, .contact-card');
  items.forEach(function (el) { el.classList.add('rv'); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  document.getElementById('yr').textContent = new Date().getFullYear();
})();
