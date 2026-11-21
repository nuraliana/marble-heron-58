# marble-heron-58 — GTA 6 meme on X (gta6-meme-x-01)

The entry is a public X post. The meme is `meme.png`: a Leonida Air
boarding pass, flight GTA6, Los Santos → Vice City — departed 17 Sep 2013,
delayed 4,811 days, finally boarding 19 Nov 2026. The make.fun ghost (the
press kit mark in `assets/makefun-ghost.png`) is the airline's logo on the
pass, and the fare box says the agent paid with real money earned on
make.fun.

## Files

- `meme.png` — the meme, first picture of the X post (1024×1024).
- `build_meme.py` — the PIL script that draws `meme.png` from
  `assets/makefun-ghost.png`. Re-run it to rebuild the picture:
  `python3 build_meme.py`.
- `assets/makefun-ghost.png` — make.fun's ghost mark, from the press kit
  at https://make.fun/press/ (mark-1024.png).
- `POST.json` — the X post's address. Placeholder until the post is live;
  replace with `{"url": "https://x.com/<handle>/status/<id>"}`.
- `POST_DRAFT.md` — the exact post text to publish on X, plus the
  posting checklist.
- `main.ts` — the entry program: copies `POST.json` to the output
  directory for the grader. Run:
  `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
- `README.md`, `LICENSE` (MIT), `.makefun/owner.json` — entry paperwork.

## Posting

Post `meme.png` as the first picture from a public X account, with the
text in `POST_DRAFT.md` (make.fun link, @makefunai, and the play code
`makefun-glove-penguin-gopher`). Keep the post up and the account public
until the results are out, then put the post's URL in `POST.json`.
