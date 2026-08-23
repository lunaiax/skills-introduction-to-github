# Storyboard — Chapter 1, Scene 1

Four-panel board derived from [`scenes/chapter-01-scene-01.md`](../scenes/chapter-01-scene-01.md)
using the `visual-skills` image methodology.

## Source beats

Taken from the scene's Three Details block, which is where the prose notes and the
visual prompt converge:

| Layer | Scene note | How it enters the frame |
|---|---|---|
| Environmental pressure | Seawater through the floor seams, breath showing, flame leaning | Flooded low corner holding a broken reflection; visible breath |
| Physical micro-action | Thumb flattened on the wet page, knuckle white | Named directly, as the body detail carrying the emotion |
| Sound anchor | The bell buoy on the reef | Not renderable in a still; held for the video/animatic pass |
| Controlled gaze | One lantern, one open page | The only bright values; room falls to black |
| Space geometry | Sloping floor, door behind as threat, hatch above as exit | Both kept in frame, unlit |

## Rules applied

- Verb-first opening (`Create`), natural language in paragraphs, not tag-soup
- No lens numbers — Nano Banana ignores `50mm` / `f/2.8`; described optically instead
- Positive framing throughout; nothing phrased as an absence
- The dramaturgy doc's banned words avoided — no "cinematic", "epic", "masterpiece",
  and no emotion named without a body to carry it

## The board

Four panels, cut against the scene's four beats. Panel 2 was rendered first and
approved; panels 1, 3 and 4 were then generated with panel 2 passed as an
`image_references` input, so identity, clothing and palette carry across the cut
rather than being re-rolled each time.

| # | Shot | Beat | Job |
|---|---|---|---|
| 1 | Wide establishing, high angle from the ladder hatch | Space geometry: sloping floor, flooded corner, shut door, one lantern | `e6fd0761` |
| 2 | Medium, slightly above and to one side | Wren works the ledger, thumb pinning the page | `df60b4b9` |
| 3 | Tight insert, overhead on the page | The date resolves; the signature does not | `0329f8c1` |
| 4 | Close reaction, below eye level, lantern between camera and face | The entry registers | `134bda69` |

The cut runs wide to medium to insert to close — each panel tighter than the last,
so the frame closes down as the water rises. The sound anchor (the bell buoy) has
no still-frame equivalent and stays held for a video pass.

Panel 3 quotes a date, `"14th November"`, to exercise Nano Banana's text
rendering. That date is **not canon**: nothing in the story files fixes the
harbour calendar yet. Set it in `chapters/chapter-01.md` before treating it as
established, or re-render the panel once the real date exists.

## Prompt

```text
Create a single film-storyboard frame from a literary thriller.

A woman in her thirties sits alone at a plank table in a cramped tide-house room
beneath harbour dock boards, reading an open water-stained ledger by one oil
lantern. Seawater pushes up between the floor seams and has flooded the low corner
of the sloping floor, holding a broken reflection of the flame. Her breath shows in
the cold air. She has flattened her thumb against the wet page to stop it curling,
and the knuckle has gone white with the pressure; her head is low and close to the
paper, jaw set. The lantern flame leans away from her.

Composition: medium shot from slightly above and to one side, so the table, the open
book and the rising water all sit in frame. The lantern and the open page hold the
only bright values, and the room falls off into wet darkness, a shut door behind her
and a ladder hatch overhead. Shallow depth of field with the page sharpest. Cold
blue-green water light from below meeting warm lantern amber above.

Style: desaturated photographic realism, heavy shadow, palette limited to lantern
amber, cold sea-green and near-black. Format: 16:9.
```

## Generation record

- Service: Higgsfield · requested `nano_banana_pro`, served by `nano_banana_2`
- Job: `df60b4b9-1be7-4994-b781-e128c738ace9`
- Output: 2752×1536, 16:9, 2K · 2 credits

The rendered PNGs are not committed here: this container's network policy denies the
CDN host serving it, so it could not be fetched. Save it from the generation widget
and drop it in this folder as `chapter-01-scene-01.png` if you want it versioned.

## Panel prompts

Each panel below was submitted with panel 2's job id as an `image_references`
input, plus an explicit instruction to match identity, clothing and lighting to
it. Full prompt text is preserved in the generation records on Higgsfield.

- **Panel 1 — wide establishing.** `e6fd0761-cf95-4350-9221-301902d1400a`
  High angle down through the hatch; the lantern is the single bright point in a
  large dark room, reaching only the table and a ring of wet floor.
- **Panel 3 — tight insert.** `0329f8c1-bb2c-4c98-9be5-863667475261`
  Overhead on the open ledger; ruled columns in iron-gall ink, damp climbing the
  lower entries, the final entry alone below a gap with its signature dissolved.
- **Panel 4 — close reaction.** `134bda69-2d7b-4202-9110-8a241553ac7c`
  Below eye level with the flame between camera and her face; amber under-light
  against a low band of blue-green where risen water catches the doorframe.

All four: 2752×1536, 16:9, 2K, Nano Banana (requested `nano_banana_pro`, served
by `nano_banana_2`). 2 credits each, 8 total.
