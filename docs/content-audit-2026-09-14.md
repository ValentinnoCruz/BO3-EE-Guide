# Guide accuracy review — 14 September 2026

## User-selected video follow-up — 15 September 2026

Reviewed the relevant captions from the user's [Der Eisendrache video](https://www.youtube.com/watch?v=v3v_IKfgf4U). It instructs Protect for the safe code around 6:46, Destroy before Simon Says around 7:39, then the green button once both orbs glow around 9:21–9:46. It does not instruct another switch to Protect. `MQ-19` and the quick route now follow that sequence. This supersedes the earlier unresolved editorial wording below; it is caption-based confirmation of the selected walkthrough, not an independent gameplay test.

The user's [Revelations video](https://www.youtube.com/watch?v=0YH6npBuHVg) was checked through its captions for the disputed mask requirements. It covers the main quest and does not list the Apothicon Mask kill counts. It has been added as a main-quest reference, but the spider/parasite count qualification remains. A mask-specific reference is still needed to resolve that question.

## Implementation update

The five supported corrections below have now been applied to the standalone guides and rebuilt chooser: Buzz Cut 22:00, Dragon Strike in the Wings checklist, two PaP interactions, five BRM tiles, and 12 shield strikes total. The original findings below remain as the audit record.

The follow-up review also changed the Apothicon Mask Margwa instruction to three kills spanning at least two types, following the linked community testing report, and explains that Panzer objectives belong to the Helmet of the King. Spider and parasite cards now flag the conflicting 5/15 counts and direct players to the completion cue. DE `MQ-19` and the quick route no longer assert that the extra Protect switch is proven mandatory.

**In-game verification remains pending.** No game session was run, and the linked gameplay videos were not independently watched end-to-end. The report author's findings were reviewed; that is not equivalent to reproducing them.

### Targeted playtest record

- Death Ray: record platform, game version and lobby mode. After both Simon Says terminals succeed in Destroy, record the selector position, green-button availability and whether pressing it brings down the rocket without switching. Repeat in another clean run. Do not confuse this with Protect for the earlier safe-code step.
- Apothicon Mask counts: use a clean run and count qualifying spider and parasite kills separately, with player and targets in the acid during gas. Avoid incidental kills. Record each category cue, whether it occurs at 5 or 15, and final mannequin availability; repeat to distinguish missed qualifying kills from a threshold difference.
- Margwa/Panzer: in a separate controlled run, complete other mask categories, kill three qualifying Margwas across two types, and avoid Panzer kills. Record the unlock. This checks the published report without mixing its conditions with the separate Margwa Mask or Helmet of the King.

These checks require gameplay access or recorded runs; browser tests can verify the wording and navigation but cannot resolve the game mechanics.

Reviewed the six current standalone guides, their quick routes and topic summaries, and the supplied `Revelations.txt`. This is a reference-based editorial review, not an in-game playtest or certification of every screenshot. The findings below distinguish supported corrections from conflicting claims. The guide pages and layout were not changed during this review.

## Findings to address first

| Map / reference | Finding | Recommended change |
| --- | --- | --- |
| Revelations `TIME-03` | The guide says finish round 15 before **19:00**. Two references give **22:00**. | Change the title and instruction to 22:00. Keep the requirement to finish the round. [Gameranx](https://gameranx.com/features/id/73105/article/black-ops-3-revelations-how-to-unlock-bonus-melee-weapons/), [Guías COD Zombies](https://guiascodzombies.com/black-ops-iii/revelations/armas-melee-rev/). |
| Gorod Krovi `WEAR-01` | Dragon Wings lists the Gauntlet and three dragon departure sites but omits Dragon Strike. | Add obtaining the ordinary Dragon Strike to this local checklist. It appears elsewhere, but players opening only this optional section can miss it. [Dragon Wings requirements](https://callofduty.fandom.com/wiki/Dragon_Wings), [creator's correction following testing](https://www.youtube.com/watch?v=40THGKG8qWs). |
| Der Eisendrache `PAP-01`–`PAP-04` | The first three cards tell the reader to interact at all three locations; the fourth correctly says the machine forms after the second interaction. | Present three possible locations with **two interactions total**, then use the assembled machine at the remaining location. [MMMR Kennedy](https://mmmrkennedy.com/games/BO3/der_eisendrache/der_eisendrache_guide). |
| Der Eisendrache `SE-BRM2` | Says six required BRM panels. The BRM uses five; the separate tile triggers the Death Machine / rocket test. One source itself inconsistently says five and then six. | Change the BRM count to five and clearly distinguish the separate tile. [BRM reference](https://nazizombies.fandom.com/wiki/BRM), [five-panel walkthrough](https://luckyy.uk/blog/how-to-unlock-the-secret-brm-wall-buy-on-der-eisendrache/). |
| Shadows of Evil `SE-SH1`–`SE-SH2` | One strike followed by “repeat 12 times” reads as 13, although the final sentence says the 12th success upgrades it. | Say **12 consecutive successful strikes total, including the first**. [MMMR Kennedy](https://mmmrkennedy.com/games/BO3/shadows_of_evil/shadows_of_evil_guide). |

## Claims needing more careful wording or testing

| Map / reference | Evidence and assessment |
| --- | --- |
| Zetsubou `SE-GB1` and Golden Bucket summary | Current checklist lists four plant types. The newer reference includes the basic **unwatered** plant as a fifth; an older Steam guide lists only four. Add the basic plant as a conservative preparation step, but do not call the exact prerequisite independently proven by this review. [Five-plant route](https://www.nazizombies.com/maps/zetsubou-no-shima), [older four-plant route](https://steamcommunity.com/sharedfiles/filedetails/?id=688651133). |
| Der Eisendrache `MQ-19` and quick route | The emphatic requirement to switch back to Protect before the green button is disputed: [Zombies Codex](https://www.zombiescodex.com/black-ops-3/der-eisendrache/) includes it, while [MMMR Kennedy](https://mmmrkennedy.com/games/BO3/der_eisendrache/der_eisendrache_guide) proceeds directly from Destroy / both terminals to the button. Do not describe this extra switch as conclusively verified. Test it before making it mandatory. |
| Der Eisendrache `MQ-00` | Add the practical warning that extra completed bows can be requested during the Keeper ritual, even when the player-count minimum was already met. Preserve the ranked/local distinction. [MMMR Kennedy](https://mmmrkennedy.com/games/BO3/der_eisendrache/der_eisendrache_guide). |
| Revelations `MASK-A2`, `MASK-A3` | Current five-spider/five-parasite counts match [COD:ZG](https://www.codzombiesguides.com/side-quests/black-ops-3/revelations/hats-and-masks/); [Call of Duty Wiki](https://callofduty.fandom.com/wiki/Revelations_%28map%29/Hats_and_Helmets) lists 15 each. Keep these marked disputed and make the category completion cue / unlocked mannequin the completion check. Do not silently replace one disputed number with another. |
| Revelations `MASK-A6` | “All three Margwa types” is stricter than necessary according to a published gameplay test: three kills spanning at least two types suffice. This is an optimization to the existing successful route, not a missing third-type step. [Testing report with footage links](https://www.reddit.com/r/CODZombies/comments/61szo6/the_truth_about_the_apothicon_god_mask_steps/). |
| Revelations `MASK-T1` | Two separate Panzers are a workable route; wording should not imply they are the only route. Both weak-point conditions can reportedly be completed on one. [Helmet reference](https://callofduty.fandom.com/wiki/Revelations_%28map%29/Hats_and_Helmets). |

## Coverage by map

“No additional discrepancy identified” means none was established in this review; it does not mean every timing, damage multiplier, rare interaction or screenshot was reproduced in-game.

| Map | Areas reviewed | Result |
| --- | --- | --- |
| Shadows of Evil | Beast interactions, rituals, sword and upgrade, buildables, flags, boss/finale, equipment upgrades and secrets | Main route is supported. Four players are required for the full ending. Keep the existing immediate flag-retry advice: the sources conflict, but [COD:ZG](https://www.codzombiesguides.com/main-quests/black-ops-3/shadows-of-evil/) explicitly supports retrying immediately. Shield wording needs clarification. |
| The Giant | Power, teleporter links, Fly Trap, Annihilator, hidden perk, music, radio and scenery entries | No material quest error identified. The hidden perk is a purchasable machine, not a free perk; current text handles this correctly. [Quest reference](https://www.codzombiesguides.com/main-quests/black-ops-3/the-giant/), [Phil's guide](https://steamcommunity.com/sharedfiles/filedetails/?id=587512788). |
| Der Eisendrache | Setup, shield/Ragnaroks, all four bows, wisps/time travel, Keeper and side unlocks | Main progression and Wolf painting order agree with the visual reference. Address the PaP/BRM issues and qualify the Death Ray claim above. [Visual guide](https://mmmrkennedy.com/games/BO3/der_eisendrache/der_eisendrache_guide). |
| Zetsubou No Shima | Power, trials, buildables, Skull, KT-4/Masamune, three cogs, boss, plants and side activities | Core route is supported. Anywhere But Here!, team trials, three-round plant care and solo/co-op zipline distinctions are present. Golden Bucket preparation deserves clarification. The finer Spider Bait unlock prerequisites remain a playtest item. [Quest reference](https://www.codzombiesguides.com/main-quests/black-ops-3/zetsubou-no-shima/), [FreeMetal](https://steamcommunity.com/sharedfiles/filedetails/?id=693187248). |
| Gorod Krovi | Network, shield/egg/Dragon Strike, valve instructions, trophies, challenges, bosses and rewards | Core route is supported. Bomb order is correctly match-specific; escorts are distinguished from kill objectives. Dragon Wings has the omission above. This review did not independently reproduce every generated valve solution in-game. [Quest reference](https://www.codzombiesguides.com/main-quests/black-ops-3/gorod-krovi/), [FreeMetal](https://steamcommunity.com/sharedfiles/filedetails/?id=724585259). |
| Revelations | Setup/buildables, weapons, entire quest, masks, chalk, music, time trials and wisp | Main route matches the comparison reference. Correct the Buzz Cut timer and qualify mask claims. [Quest reference](https://www.codzombiesguides.com/main-quests/black-ops-3/revelations/), [FreeMetal reference](https://steamsolo.com/guide/guide-for-revelations-2020-updated-call-of-duty-black-ops-iii/). |

## Old Revelations guide compared with the current guide

The current guide retains the old guide's complete main progression; there is no missing major quest phase. The old notes are useful personal landmarks, but should not replace the current guide wholesale.

| Old notes | Current guide / conclusion |
| --- | --- |
| Graves 2, 3, 1, 4 | Already present, including the visual order strip. |
| Shield and Keeper parts | Already covered with individual alternative locations. |
| Engine listed at Shi No Numa | Old location name is incorrect; current Verruckt entry is correct. |
| Three audio reels | All retained, with the Nacht → Kino → Origins playback route. |
| Nine Arnie holes “IN ORDER” | Current clockwise route is a tracking aid. Do not label one absolute hole order mandatory. |
| Redo the failed three-hole group | Useful clarification to add explicitly; current warning focuses on staying inside until each Margwa wave is finished. |
| Chalk listed around reel-three preparation | Current optional placement is appropriate; it is not a reel prerequisite. |
| Ray Gun emphasis for DE bone | Keep the current conventional upgraded-gun instruction; a Ray Gun is not mandatory. |
| Four eggs, but also “only spawns with number of players” | Current four-total / one-carried-at-a-time instructions avoid this ambiguity. |
| Egg placer supplies the kills | **Already present** in all four `HATCH` notes; not an omission. Strengthen “should” to “must” for clarity. |
| Extra egg landmarks, including Nacht and Quick Revive | Not established as additional egg spawns here. Some notes may overlap existing viewpoints or rune locations; do not add unverified search stops. |
| Rune order, first arena, seven relics and final boss | All retained. Current arena notes already say the terrain order varies. “MG32” in the old notes is corrected to MG42. |
| Key glitches: no reviving / buy two guns with Mule Kick | Keep as unverified personal workarounds. Current portal warning and cautious recovery advice are preferable. |

The main-quest distinctions above were compared against [COD:ZG's Revelations walkthrough](https://www.codzombiesguides.com/main-quests/black-ops-3/revelations/).

For optional upgrades, the old Arnie notes omit the kills and imply Crate Power plus three throws are required. The current kills-then-window route is better supported. [Arnie walkthrough](https://luckyy.uk/blog/how-to-upgrade-lil-arnies-on-revelations-bo3-zombies/).

The old Apothicon-mask Panzer requirement should not be imported: the [published gameplay test](https://www.reddit.com/r/CODZombies/comments/61szo6/the_truth_about_the_apothicon_god_mask_steps/) explicitly reports success without it. Its “flying guys” description also confuses Furies with Parasites. Exact mask totals remain the unresolved issue described above.

## Next content pass

Apply the five supported corrections first, then improve the qualified wording. Update any duplicated quick-route, topic-summary and screenshot-tab instructions together. Preserve existing IDs, saved progress and images, and rebuild the chooser after edits. Keep disputed mask counts and the Death Ray switch on a targeted in-game verification list rather than presenting them as settled facts.
