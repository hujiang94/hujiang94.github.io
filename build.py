#!/usr/bin/env python3
"""Build the maintained website pages with the bundled Jemdoc compiler."""
from pathlib import Path
import subprocess
import sys

ROOT = Path(__file__).resolve().parent
PAGES = ("index", "research", "publications", "presentations", "softwares",
         "teaching", "conferences")

if __name__ == "__main__":
    subprocess.run(
        [sys.executable, str(ROOT / "jemdoc.py"), "-c", "mysite.conf",
         *(page + ".jemdoc" for page in PAGES)], cwd=ROOT, check=True)
    print("Built " + ", ".join(page + ".html" for page in PAGES))
