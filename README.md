# Jiang Hu's homepage

Website: [hujiang94.github.io](https://hujiang94.github.io/)

Edit the `.jemdoc` sources and `MENU`, then compile the maintained pages:

```sh
python3 build.py
```

The compiler is bundled in this repository; Python 3 is the only build dependency.
Commit both the sources and the generated HTML before pushing to GitHub Pages.
The news list stays in reverse chronological order in `index.jemdoc`; the first
six entries are visible and older entries remain available by scrolling.
Keep teaching records on the Teaching page, outside the News list.

Add paper announcements to News only after acceptance; new preprints belong in the publication list.

The maintained pages display English page-view and site-view counters in the footer,
using [Busuanzi](https://ibruce.info/2015/04/04/busuanzi/). The service loads only on
`hujiang94.github.io`, so local previews do not add visits. Counts are maintained by
that third-party service across visitors; repeated page loads count as additional
views. Tracking was added in November 2026 and cannot reconstruct earlier visits.
If the service is blocked or unavailable, the counters may show a dash. The footer
is defined in `mysite.conf`; its script loader is in `site.js`.
