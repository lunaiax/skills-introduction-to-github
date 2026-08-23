# Location Plates — Set v1

Nine reference plates, one per fixed location in [`../art-direction.md`](../art-direction.md) §5.
All empty and unoccupied: these are set references, not story frames.

Generated with each LOCATION BLOCK verbatim plus the STYLE BLOCK verbatim, unchanged.
That is the point of the exercise — if a plate is off-model, the fault is in the
block, and the block is what gets fixed.

| # | Location | Bible § | Job |
|---|---|---|---|
| 1 | Villa Mareau — exterior | 5.1 | `f08b308d` |
| 2 | The Meadow Gate | 5.2 | `c1473695` |
| 3 | Entrance hall | 5.3 | `a2f17fc4` |
| 4 | Kitchen / bell board | 5.4 | `905394dd` |
| 5 | Dining room | 5.5 | `edc61dbd` |
| 6 | Room Eleven | 5.6 | `47a240eb` |
| 7 | Aunt Mareau's door | 5.7 | `5e45a952` |
| 8 | The Post Office | 5.8 | `7627d6db` |
| 9 | The Bus Shelter | 5.9 | `5e14d72f` |

## Parameters

- Model: `soul_cinematic` (Soul Cinema), style preset "General", strength 1
- 2048×1152, 16:9
- 0.12 credits each, ~1.1 credits for the set
- Seeds recorded per job in the Higgsfield generation records; re-running a single
  plate with its seed reproduces it

## Known checks to run against each plate

From `art-direction.md` §6. Worth doing by eye before treating a plate as canon:

- Overcast, no sun, no shadow
- Palette inside the eight locked colours
- Villa reads as too large and slightly institutional (plate 1)
- Grass undisturbed either side of the gate (plate 2)
- Bell board is 22 tabs in two rows, blank one second row seventh from left (plate 4)
- Every table under dust sheets except one laid for three (plate 5)
- The aunt's door is shut (plate 7)
- The two yellows are *almost* the same (plate 9)

Plates 4 and 9 carry countable/comparative detail and are the two most likely to
need a re-roll. The PNGs are not committed — this environment's network policy
denies the CDN host, so they could not be fetched. Save from the widget into this
folder as `plate-01.png` … `plate-09.png` if they should be versioned.
