/* Keep six complete news entries visible, including after text wraps. */
document.addEventListener("DOMContentLoaded", function () {
  const panel = document.querySelector(".news-scroll");
  if (!panel) return;

  const list = panel.querySelector("ul");
  if (!list) return;

  function sizeNews() {
    const entries = list.children;
    if (!entries.length) return;
    const last = entries[Math.min(6, entries.length) - 1];
    const border = getComputedStyle(panel);
    const height = last.getBoundingClientRect().bottom - list.getBoundingClientRect().top
      + parseFloat(border.borderTopWidth) + parseFloat(border.borderBottomWidth);
    panel.style.maxHeight = Math.ceil(height) + "px";
  }

  sizeNews();
  window.addEventListener("resize", sizeNews);
  if ("ResizeObserver" in window) new ResizeObserver(sizeNews).observe(list);
  if (document.fonts) document.fonts.ready.then(sizeNews);
});

/* Count visits on the published site only; previews never contact the service. */
if (window.location.hostname === "hujiang94.github.io") {
  const counter = document.createElement("script");
  counter.async = true;
  counter.src = "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
  document.head.appendChild(counter);
}
