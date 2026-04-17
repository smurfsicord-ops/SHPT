(function() {
  'use strict';

  // Header scroll shadow
  var header = document.getElementById('SiteHeader');
  if (header) {
    window.addEventListener('scroll', function() {
      header.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  // Mobile menu
  var mmBtn = document.getElementById('MobileMenuBtn');
  var mmClose = document.getElementById('MobileMenuClose');
  var mobileNav = document.getElementById('MobileNav');
  function openMobile() { if(mobileNav) { mobileNav.classList.add('open'); document.body.style.overflow = 'hidden'; if(mmBtn) mmBtn.setAttribute('aria-expanded','true'); } }
  function closeMobile() { if(mobileNav) { mobileNav.classList.remove('open'); document.body.style.overflow = ''; if(mmBtn) mmBtn.setAttribute('aria-expanded','false'); } }
  if (mmBtn) mmBtn.addEventListener('click', openMobile);
  if (mmClose) mmClose.addEventListener('click', closeMobile);

  // Cart drawer
  var cartBtn = document.getElementById('CartBtn');
  var cartClose = document.getElementById('CartPanelClose');
  var cartOverlay = document.getElementById('CartOverlay');
  var cartPanel = document.getElementById('CartPanel');
  function openCart() { if(cartPanel && cartOverlay) { cartPanel.classList.add('open'); cartOverlay.classList.add('open'); document.body.style.overflow = 'hidden'; } }
  function closeCart() { if(cartPanel && cartOverlay) { cartPanel.classList.remove('open'); cartOverlay.classList.remove('open'); document.body.style.overflow = ''; } }
  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (cartClose) cartClose.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') { closeCart(); closeMobile(); } });

  // FAQ accordion
  document.querySelectorAll('.faq-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = btn.closest('.faq-item');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function(i) { i.classList.remove('open'); i.querySelector('.faq-btn').setAttribute('aria-expanded','false'); });
      if (!isOpen) { item.classList.add('open'); btn.setAttribute('aria-expanded','true'); }
    });
  });

  // Fade-up scroll reveal
  var fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length) {
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
      fadeEls.forEach(function(el) { observer.observe(el); });
    } else {
      fadeEls.forEach(function(el) { el.classList.add('visible'); });
    }
  }

  // Variant selector
  document.querySelectorAll('.variant-selector').forEach(function(sel) {
    sel.querySelectorAll('.variant-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        sel.querySelectorAll('.variant-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
      });
    });
  });

  // Quantity controls
  document.querySelectorAll('.qty-wrap').forEach(function(wrap) {
    var input = wrap.querySelector('.qty-input');
    wrap.querySelectorAll('.qty-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var v = parseInt(input.value) || 1;
        if (btn.dataset.action === 'minus') v = Math.max(1, v - 1);
        if (btn.dataset.action === 'plus') v++;
        input.value = v;
      });
    });
  });

  // Product gallery thumbnails
  document.querySelectorAll('.product-gallery').forEach(function(gal) {
    var mainImg = gal.querySelector('.js-main-img');
    gal.querySelectorAll('.product-thumb').forEach(function(thumb) {
      thumb.addEventListener('click', function() {
        if (mainImg && thumb.dataset.src) {
          mainImg.src = thumb.dataset.src;
          gal.querySelectorAll('.product-thumb').forEach(function(t) { t.classList.remove('active'); });
          thumb.classList.add('active');
        }
      });
    });
  });

  // Add to cart animation
  document.querySelectorAll('.js-add-to-cart').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      if (btn.classList.contains('loading')) return;
      var original = btn.innerHTML;
      btn.classList.add('loading');
      btn.innerHTML = '<span class="btn-spinner"></span>';
      setTimeout(function() {
        btn.innerHTML = '&#10003; Ajouté !';
        btn.style.background = 'var(--color-success)';
        setTimeout(function() {
          btn.innerHTML = original;
          btn.style.background = '';
          btn.classList.remove('loading');
        }, 2000);
      }, 800);
    });
  });

})();
