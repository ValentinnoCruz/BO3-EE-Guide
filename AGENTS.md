# Guide conventions

- Keep all maps consistent with the approved minimal, image-first layout: large uncropped screenshots above instructions, compact section navigation, restrained section colors and relevant emojis.
- Place related parts, crafting instructions, upgrades, and phases under one shared topic dropdown. For example, all shield subsections belong under one Shield banner, and all gas-mask subsections under one Gas Mask banner. Apply this to every future guide and update.
- Use nested dropdowns for subsections; do not scatter multiple subsections of the same feature across sibling banners. A top-level section that already represents a single topic can serve as its shared dropdown.
- Preserve step IDs and saved progress when reorganizing content. Topic checkboxes must include all descendant steps, show partial completion, and work with search and expand/collapse controls.
- Use relevant emoji and readable accent colors for headings, with neutral instruction text.
- Keep screenshots embedded and available offline.
- Keep index.html lightweight: it loads standalone guide files through relative iframe URLs. Verify both standalone and chooser views; do not embed duplicate guide templates.

- Represent mutually exclusive spawn locations as image tabs under one objective, with one completion checkbox. Preserve legacy step IDs as progress aliases when consolidating them.
- Maintain shared presentation in `ui/guide-ui.css` and `ui/guide-ui.js`; run `python ui/build.py` to embed them and validate chooser routes. Standalone guides must remain self-contained.

- Keep the “Guide by Lofijedi” attribution on the chooser, guides, screenshot overlays, and enlarged-image views. Retain all original screenshot/source credits separately.

- Display the original step/reference codes (for example SET-01 and SH-R1), including individual alternative-location codes, and visible main-section numbers. Never hide these during a redesign.
- Preserve readable alternating backgrounds for step cards and subsection banners, including mobile layouts.
- Every physical target mentioned by an instruction needs a matching, labeled location screenshot: switches/fuse boxes, marked doors/crates, grapple points, item spawns, crafting stations and aiming targets. Use action-image tabs for multiple actions; use alternative-location tabs with one checkbox for mutually exclusive spawns. Include a wider landmark view when a close-up alone does not establish where to stand. Do not use an unrelated or generic screenshot as a substitute. Keep all new images embedded offline and retain their source credits.

- Use side-by-side references for visual comparisons or fixed interaction orders. Keep alternative spawns in tabs. Put action-specific instructions with their matching screenshot, keep shared rules separate, and compact repeated care rounds into one recipe with original per-round checkboxes. Preserve original IDs and search behavior when grouping cards.

- Keep the sidebar and guide pane in the initial HTML. Do not reconstruct the old layout before displaying the current UI. Preserve saved progress keys and the legacy chooser import when changing navigation.
