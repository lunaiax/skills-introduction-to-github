# Video Test — Kling v3.0

Three clips from approved Episode 1 stills, chosen to test three different kinds
of motion before committing to a full pass.

Model: `kling3_0`, 5s, `mode: std`, `sound: off`, 16:9, 1280×720.
**7.5 credits each — 22.5 for the test.**

| # | Source still | Motion tested | Job |
|---|---|---|---|
| 1 | The 3am doorway (`daaa1b45`) | **Locked off + human motion.** Breathing, one slow blink, nothing else | `a61fd24b` |
| 2 | Night corridor (`4943a76b`) | **Camera motion.** Slow straight push following her down the corridor | `02a3ef39` |
| 3 | Meadow gate (`45265096`) | **Locked off + environmental.** Grass, sleeves, hair, drifting cloud | `62d37896` |

## What each clip is actually testing

**Clip 1 — can stillness carry the unease?** The bible's signature move is a fast
push-in, but for the doorway a locked-off frame is the stronger choice: it makes
the viewer sit inside the situation rather than being pushed through it. If it
works, holding still becomes the tool for every unease beat in the series.

**Clip 2 — does the corridor's one-point perspective survive a push?** This is the
only clip with camera movement, and it is the riskiest: a push down a symmetrical
corridor either holds the vanishing point dead centre or wobbles off it, and a
wobble kills the whole Anderson grammar.

**Clip 3 — does a static frame stay alive?** Episode 10 plays entirely in long
static wides, so the series needs to know that a locked-off shot with only wind in
it does not read as a still image with a glitch.

## Practical notes

- **Preset interception.** Kling intercepted clips 1 and 3 on first submission,
  recommending a viral preset ("IN THE DARK") instead of running the prompt. Pass
  `declined_preset_id` with the offered preset id to force the actual submission.
  Expect this on any locked-off or low-motion prompt.
- **Output is 720p** at `mode: std`. Fine for a storyboard/animatic pass, not for
  final delivery. `pro` is 8.75 and `4k` mode exists at higher cost.
- **Prompt style for image-to-video**: describe *motion only*. The start image
  already carries the set, costume and palette; re-describing them wastes the
  prompt and invites the model to redraw what is already correct.
- Negation works better here than in stills — "the camera does not move, no pan,
  no zoom" is the reliable way to get a locked-off frame.

## Budget

| | Credits |
|---|---|
| Episode 1, seven shots at 5s std | ~52.5 |
| All ten episodes, same basis | ~525 |
| Cinema Studio Video 3.0 at 1080p, per clip | 50 |

Balance after this test: **100.42**. A full ten-episode pass needs a top-up on any
model. Cinema Studio 3.0 is the better-looking model and is worth reserving for
one or two hero shots rather than a whole episode.
