# Xiang Xiang Singapore Queue Links

A single-page site listing every Xiang Xiang Hunan Cuisine 湘香湖南菜 outlet in Singapore with a one-tap **"Join the queue"** button that opens that outlet's queue page on [inline.app](https://inline.app) — the same page its in-store QR code opens.

Sister site to [Din Tai Fung Singapore Queue Links](https://dtf.danielquek.com/).

Live at: **https://xiangxiang.danielquek.com/** (Cloudflare Pages project `xiang-xiang`, Git-connected to this repo, production branch `master`, no build command, root output — same setup as dtf.danielquek.com. Also at https://xiang-xiang.pages.dev/.)

## The list

22 outlets. **15 have a verified queue link; 7 are still wanted** (see below).

Queue link pattern:

```
https://inline.app/-NSEoNHckiJCKJnKNzD4:inline-live-3/<branch-id>/waiting
```

| Outlet | Region | Queue link |
|---|---|---|
| Sengkang Grand Mall | North-East | ✅ verified (also decoded from the in-store QR photo) |
| NEX | North-East | ✅ verified |
| Seletar Mall | North-East | ✅ verified |
| AMK Hub | North-East | ✅ verified |
| Bugis | Central | ✅ verified |
| 313@somerset | Central | ✅ verified |
| One Holland Village | Central | ✅ verified |
| VivoCity | South | ✅ verified |
| Bedok Mall | East | ✅ verified |
| Parkway Parade | East | ✅ verified |
| Causeway Point | North | ✅ verified |
| Northpoint City | North | ✅ verified |
| Westgate | West | ✅ verified |
| Jurong Point | West | ✅ verified |
| Hillion Mall | West | ✅ verified |
| Chinatown | Central | ❌ wanted |
| Suntec City | Central | ❌ wanted |
| Pasir Ris Mall | East | ❌ wanted |
| Mandai Zoo | North | ❌ wanted |
| Compass One | North-East | ❌ wanted |
| Hougang Mall | North-East | ❌ wanted |
| Lot One | West | ❌ wanted |

## How the links were verified

- The Sengkang Grand Mall queue link was decoded from a photo of the outlet's in-store queue QR sign.
- All 15 branch IDs were then extracted branch-by-branch from Xiang Xiang's own inline booking pages, and every constructed `/waiting` link was visited live on **3 November 2026**: all 15 loaded as the correct branch's queue page (showing "queuing unavailable/closed" at that pre-opening hour, as expected). No queue was joined and no booking was made during verification.

## Contribute a missing queue link

The 7 "wanted" outlets are not on Xiang Xiang's inline booking list, so their queue links can only come from the QR signs at their entrances:

1. At the outlet, find the "Scan QR code to get queue number" sign near the entrance.
2. Scan it and copy the inline.app link it opens — or take a clear photo of the QR sign.
3. Open an issue in this repo (the site's "Contribute this queue link" buttons pre-fill one per outlet): paste the link, or attach the photo and we'll decode the QR.

Please don't include booking confirmations, phone numbers or anything personal — just the public queue link or the QR photo. Every contributed link is checked live before it is added.

## Tech

Single static `index.html` — no build step, no backend, no tracking. Search, region filters, saved outlets (localStorage), copy-link, directions and call buttons all run in the browser. Deploy by serving the repo root (e.g. Cloudflare Pages with no build command).

## Disclaimer

Unofficial shortcut list, not affiliated with Xiang Xiang Hunan Cuisine or inline.app. Addresses and phone numbers are from public listings.
