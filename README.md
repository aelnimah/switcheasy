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

All editable content lives in `config.js`:

- `banks` — the institution picker (name, logo path, brand color for the fake OAuth re-theme).
- `personas` — the three scenarios (newcomer / switcher / small business), each with its own transaction list. Mark a transaction `killerShot: true` to trigger the fake browser-automation sequence on Screen 6 (only one per persona is recommended for pacing).
- `timings` — every animation/timing value in the app (scan speed, terminal pacing, cursor speed, etc.), in milliseconds.
- `agentLogLines(tx)` — the terminal "voice" per transaction. Edit the copy here without touching the animation engine in `index.html`.

Bank/institution logos live in `assets/logos/`. If a logo file is missing or fails to load, the app falls back to a lettered avatar tile automatically — it will never show a broken image icon.

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
