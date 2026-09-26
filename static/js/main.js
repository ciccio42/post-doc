(function () {
  // Render formulas with KaTeX (falls back to the plain-HTML version if KaTeX is unavailable)
  function renderFormulas() {
    if (!window.katex) return;
    document.querySelectorAll(".formula-katex").forEach(function (el) {
      try {
        window.katex.render(el.getAttribute("data-tex"), el, {
          displayMode: el.classList.contains("formula-display"),
          throwOnError: false
        });
      } catch (e) { /* keep fallback */ }
    });
  }

  // Mobile navigation toggle
  var burger = document.querySelector(".nav-burger");
  var links = document.querySelector(".nav-links");
  if (burger && links) {
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Scroll-spy: highlight the nav link of the section in view
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var navAnchors = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
  var scrollBtn = document.querySelector(".scroll-top-btn");

  function onScroll() {
    var y = window.scrollY + 90;
    var current = null;
    sections.forEach(function (s) { if (s.offsetTop <= y) current = s.id; });
    navAnchors.forEach(function (a) {
      a.classList.toggle("is-active", a.getAttribute("href") === "#" + current);
    });
    if (scrollBtn) scrollBtn.classList.toggle("is-visible", window.scrollY > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (scrollBtn) {
    scrollBtn.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  }

  if (document.readyState === "complete") renderFormulas();
  else window.addEventListener("load", renderFormulas);
})();
