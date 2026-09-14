# Guide conventions

- Keep all maps consistent with the approved minimal, image-first layout: large uncropped screenshots above instructions, compact section navigation, restrained section colors and relevant emojis.
- Place related parts, crafting instructions, upgrades, and phases under one shared topic dropdown. For example, all shield subsections belong under one Shield banner, and all gas-mask subsections under one Gas Mask banner. Apply this to every future guide and update.
- Use nested dropdowns for subsections; do not scatter multiple subsections of the same feature across sibling banners. A top-level section that already represents a single topic can serve as its shared dropdown.
- Preserve step IDs and saved progress when reorganizing content. Topic checkboxes must include all descendant steps, show partial completion, and work with search and expand/collapse controls.
- Use relevant emoji and readable accent colors for headings, with neutral instruction text.
- Keep screenshots embedded and available offline.
- Rebuild all corresponding templates in index.html whenever standalone guides change, and verify both standalone and chooser views.

- Represent mutually exclusive spawn locations as image tabs under one objective, with one completion checkbox. Preserve legacy step IDs as progress aliases when consolidating them.
- Maintain shared presentation in `ui/guide-ui.css` and `ui/guide-ui.js`; run `python ui/build.py` to embed them and rebuild every chooser template. Standalone guides must remain self-contained.
