# SwitchEasy

A recording-ready demo of an agentic AI that migrates a bank client's recurring
payments to TD. Built for a TD Innovation Challenge pitch — plain HTML/CSS/JS,
no build step, no backend, no real automation. Every "connection" and
"migration" in this app is simulated.

## Live URL

Once GitHub Pages is enabled (see below), the app is served at:

```
https://<your-github-username>.github.io/switcheasy
```

## Enabling GitHub Pages

1. Push this repo to GitHub (root must contain `index.html`, `config.js`, `assets/`).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Set **Branch** to `main` (or your default branch) and folder to `/ (root)`.
5. Save. GitHub Pages will build and publish within a minute or two — no build step required since this is static HTML/CSS/JS.

## Editing the demo

The flow: landing → welcome → pick old institution → connect (read-only) →
scan → review → **access plan** (the agent analyzes how each biller
authenticates and groups them — one Google sign-in can unlock several
accounts, Rogers & Fido share a Rogers ID, CRA needs its own) → credentials
one group at a time → a single consent → the agent runs (terminal +
browser-automation "killer shot" on the Rogers portal) → draw-to-sign the
direct-deposit form → done, with a downloadable PDF carrying the drawn
signature.

All editable content lives in `config.js`:

- `banks` — the institution picker (name, logo path, brand color for the fake OAuth re-theme).
- `credentialGroups` — the sign-ins the agent can ask for (Google, Rogers, TELUS, CRA, Square), with brand colors and copy.
- `accessInfo` — how each access type is explained on the access-plan screen.
- `personas` — the three scenarios (newcomer / switcher / small business), each with its own transaction list. Each transaction's `access` field points at a credential group (or `none` / `signature`). Mark a transaction `killerShot: true` to trigger the fake browser-automation sequence during the agent run (only one per persona is recommended for pacing).
- `timings` — every animation/timing value in the app (scan speed, terminal pacing, cursor speed, etc.), in milliseconds.
- `agentLogLines(tx)` — the terminal "voice" per transaction. Edit the copy here without touching the animation engine in `index.html`.

### Dropping in real logos (PNGs)

Every image is optional — add a PNG at the right path and it appears
automatically; if the file is missing the app falls back to the emoji (for
billers/personas) or a lettered tile (for banks). It never shows a broken
image icon.

| Path | Used for |
|---|---|
| `assets/logos/switcheasy.png` | app mark in the chrome bar and on the landing page (falls back to `td.svg`) |
| `assets/logos/rbc.png`, `scotiabank.png`, `bmo.png`, `cibc.png` | bank tiles + the fake OAuth header (falls back to the bundled `.svg`, then a letter) |
| `assets/personas/newcomer.png`, `switcher.png`, `smallbiz.png` | the three landing cards |
| `assets/billers/rogers.png`, `fido.png`, `netflix.png`, `spotify.png`, `goodlife.png`, `hydro-one.png`, `toronto-hydro.png`, `td-insurance.png`, `manulife.png`, `telus.png`, `cra.png`, `landlord.png`, `td-payroll.png`, `google.png`, `sysco.png`, `lease.png`, `wagepoint.png`, `square.png`, `enbridge.png`, `wsib.png`, `payroll.png` | every biller row, credential card, checklist chip and summary; `rogers.png` also appears in the fake portal header |

Square-ish PNGs with transparent backgrounds around 128–256 px work best —
they're rendered inside a 40 px tile at 72 % scale, so anything crisp at
~30 px is fine. The exact path for each biller is its `logo` field in
`config.js`, so you can rename/repoint freely.

## iPad recording workflow

1. Open the live URL in **Safari** on the iPad, in landscape.
2. Tap the **Aa** menu in the address bar → **Hide Toolbar** to remove Safari's chrome from the recording.
3. Open **Control Centre** and start a **Screen Recording**.
4. Run through the full flow: choose a scenario → connect → watch it scan → review → watch the agent run (including the killer-shot sequence) → sign off → done.
5. Do **2–3 full takes** — the flow is deterministic, so takes are consistent and you can pick the cleanest one.
6. Stop the recording, then trim/crop to **16:9** in the Photos app before dropping it into PowerPoint.
7. Use the **Restart** button (top right of the chrome bar) between takes to reset to Screen 0 instantly.

## Presenter HUD (rehearsal only)

**Triple-tap** the TD logo in the top-left corner to toggle a small overlay showing the current screen name and a "skip →" link to jump ahead. It's invisible by default and meant only for rehearsing — don't leave it on during the real recording.

## Notes

- No backend, no real APIs. The only network calls are Google Fonts and jsPDF (loaded from cdnjs, used only for the Direct Deposit PDF on the final screen) — both degrade gracefully if offline.
- Respects `prefers-reduced-motion`.
- Designed desktop-first for iPad Safari landscape at ~1180×820 usable area; works from 1024px width up.
