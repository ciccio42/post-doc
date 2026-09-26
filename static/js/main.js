(function () {
  "use strict";

  // Render math formulas with KaTeX (falls back to the plain HTML already
  // in the markup if the CDN script fails to load, e.g. offline).
  if (window.katex) {
    document.querySelectorAll(".formula-katex").forEach(function (el) {
      var tex = el.getAttribute("data-tex");
      if (!tex) return;
      try {
        katex.render(tex, el, {
          throwOnError: false,
          displayMode: el.classList.contains("formula-display"),
        });
      } catch (e) {
        /* keep the fallback markup already in the element */
      }
    });
  }

  // Mobile nav toggle
  var burger = document.querySelector(".nav-burger");
  var links = document.querySelector(".nav-links");
  if (burger && links) {
    burger.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Scroll-spy: highlight the nav link for the section in view
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var navAnchors = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
  if (sections.length && navAnchors.length && "IntersectionObserver" in window) {
    var byId = {};
    navAnchors.forEach(function (a) {
      var id = a.getAttribute("href").replace("#", "");
      byId[id] = a;
    });
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = byId[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            navAnchors.forEach(function (a) { a.classList.remove("is-active"); });
            link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { observer.observe(s); });
  }

  // Scroll-to-top button
  var topBtn = document.querySelector(".scroll-top-btn");
  if (topBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 600) {
        topBtn.classList.add("is-visible");
      } else {
        topBtn.classList.remove("is-visible");
      }
    });
    topBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Init Bulma carousels if present
  if (window.bulmaCarousel) {
    window.bulmaCarousel.attach(".carousel", {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
      autoplay: true,
      autoplaySpeed: 5000,
      pagination: true,
    });
  }
})();
