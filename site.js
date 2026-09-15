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
