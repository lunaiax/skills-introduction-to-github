# Episode 1 — Animatic

Thirteen clips, story order. Kling v3.0, `mode: std`, `sound: off`, 5s, 1280×720.
**Silent cut, 65 seconds.**

| # | Shot | Motion | Element | Clip |
|---|---|---|---|---|
| 1 | Meadow gate | locked off; wind in grass and sleeves | — | `62d37896` |
| 2 | Kitchen, bell board | locked off; her hand polishing | ✓ | `5cb44426` |
| 3 | Hall, the staircase | locked off; she crosses to the stairs | ✓ | `99e1f859` |
| 4 | Dining room doorway | locked off; she breathes, shifts weight | ✓ | `da571b79` |
| 5 | Linen room, the Register | locked off; she turns one page | ✓ | `feeb6d22` |
| 6 | **The blank tab drops** | locked off; tab swings, bell stills | — | `b39614b8` |
| 7 | The night walk | locked off; rope sways, she listens | ✓ | `0fe39988` |
| 8 | Light under door eleven | locked off; almost nothing moves | — | `20f664f8` |
| 9 | **The 3am doorway** | locked off; his breathing, one blink | — | `a61fd24b` |
| 10 | Night corridor | **push-in**; she walks away | — | `02a3ef39` |
| 11 | Breakfast | locked off; three people, no eye contact | ✓ | `3a6576cd` |
| 12 | Havel leaves through the gate | locked off; he walks away, wind | — | `69cf4896` |
| 13 | **The shut door** | locked off; nothing moves at all | — | `3154c9a1` |

## Camera

**Twelve of thirteen are locked off.** Only shot 10 has a camera move — the push
down the corridor. That was not the original plan (the bible's signature is the
fast push-in) but it is what the material wanted: the unease reads better when the
viewer sits inside a still frame than when the camera pushes them through it.

Worth deciding whether that becomes the series rule. If so, `art-direction.md` §5A
needs revising — the motion vocabulary currently assumes push-ins throughout.

## The element

Six clips contain Elaya and all six carry the element, confirmed in the returned
job params (`kling_element_ids: ["319482935676524"]`). Clips 1, 9 and 10 also
contain her but predate the rule and were driven by `start_image` alone.

## Practical findings

- **Kling intercepts low-motion prompts** with a viral preset recommendation
  ("IN THE DARK", id `24bae836-2c4a-48e0-89b6-49fcc0b21612`) instead of submitting.
  Pass `declined_preset_id` on every locked-off prompt.
- **Long prompts failed.** Five jobs returned 400 or failed on first submission and
  all five succeeded on a shortened prompt. Keep image-to-video prompts to about
  three sentences: camera instruction, subject motion, light.
- **Describe motion only.** The start image carries set, costume and palette.

## Cost and state

10 clips × 7.5 = **75 credits**. Balance after: **7.42**.

No audio. Kling's native sound is +2.5 a clip (+32.5 for all 13) and the platform
has **no standalone music or SFX model**, so score and sound design happen
externally regardless. A narration pass is ~6 credits and would fit the remaining
balance.
