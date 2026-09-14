# BO3 Easter Egg Visual Guide

Interactive visual Easter Egg guides for **Call of Duty: Black Ops III Zombies**.

## Current maps
- Shadows of Evil
- The Giant
- Der Eisendrache
- Zetsubou No Shima
- Gorod Krovi
- Revelations

## Current features
- minimal dark UI with restrained section colors and relevant emojis
- large screenshots above instructions
- alternative spawn locations shown as image tabs under one objective
- section navigation, next unfinished objective, and hide-completed option
- map chooser
- collapsible sections with related parts, upgrades, and phases grouped under one topic dropdown
- persistent progress checkboxes
- whole-section, whole-topic, and whole-phase completion checkboxes
- zebra-shaded phases/subsections
- search
- embedded visual step screenshots that work offline
- in-page screenshot lightbox
- responsive layout

## Files
- `index.html` — combined chooser
- `shadows-of-evil.html`
- `the-giant.html`
- `der-eisendrache.html`
- `zetsubou-no-shima.html`
- `gorod-krovi.html`
- `revelations.html`

## Offline use
Open `index.html` in a browser to choose a map, or open any standalone guide directly. Screenshots are embedded in each HTML file, including the combined chooser; no assets folder, server, or internet connection is required. External source/reference links still require internet access.

The original handoff contained broken screenshot URLs. Available replacements from the credited visual guides are included. Six screenshots without a matching source image are explicitly marked unavailable; their instructions remain intact.

## Zetsubou No Shima
117 checklist steps cover setup, Pack-a-Punch, buildables, trials, the Skull, KT-4/Masamune, the three cogs, boss fight, plants, and optional rewards. Includes 101 embedded screenshot references and credited source links. Plant care and solo/co-op differences have separate instructions.

## The Giant
Power, all three teleporter links, Fly Trap and Annihilator, the hidden perk machine, three song jars, all eight radios, and visual secrets. Related steps stay under shared dropdowns; screenshots and progress tracking work offline.

## Gorod Krovi
Dragon Network, Pack-a-Punch, shield and upgrades, Dragon Strike, Gauntlet egg trials, six trophies, all six challenges, both bosses, and optional rewards. Includes an offline valve solver and saved bomb-order notes within the relevant dropdowns. Clear run notes when starting a new match.

## Revelations
Complete solo/co-op main quest, shield and Keeper parts, Apothicon Servant upgrade, all three reels, egg and rune location references, seven relic targets, both arena visits, masks, free perk, music, chalk trading, time trials and the optional wisp. All related phases share a dropdown; screenshots are embedded for offline use.

## Shared guide UI
All six maps use the same image-first presentation. Edit `ui/guide-ui.css` or `ui/guide-ui.js`, then run `python ui/build.py` to embed the update into every standalone file and refresh the combined chooser. These source files are not required to view the guides offline.

Consolidated location objectives retain the original progress keys as aliases. An existing check on any alternative marks its objective complete; later changes keep its legacy keys synchronized. Original location instructions and screenshots remain in their respective tabs.

Current objective totals: Shadows of Evil 125, The Giant 39, Der Eisendrache 183, Zetsubou No Shima 103, Gorod Krovi 109, Revelations 136. Counts in older map descriptions refer to the original individual reference cards.

## Zombies Chronicles collection
The chooser has a separate, collapsible Zombies Chronicles section. Its eight maps are listed in their original release order: Nacht der Untoten, Verrückt, Shi No Numa, Kino der Toten, Ascension, Shangri-La, Moon, and Origins. Entries are marked **Guide coming soon** until a complete guide is added; the six original BO3 guides remain available in their own collection.

Map lineup reference: [Treyarch — Zombies Chronicles](https://www.treyarch.com/studio-culture/2017/05/zombies-chronicles).
