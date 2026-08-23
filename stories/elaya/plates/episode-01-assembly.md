# Episode 1 — Assembly Sheet

Everything needed to cut the episode together. **13 clips × 5s = 65s of picture,
59.4s of narration.**

Assembly could not be done here: this container has no `ffmpeg` and its network
policy blocks the CDN the media sits on (403 at the proxy). Higgsfield has no
concatenation tool either — the only marketplace app is Match Cut + Tracelab,
which builds match-cut reels rather than ordered timelines. So this is the EDL.

## Picture — in order

| # | In | Out | Shot | Clip |
|---|---|---|---|---|
| 1 | 00:00 | 00:05 | Meadow gate | `62d37896` |
| 2 | 00:05 | 00:10 | Kitchen, bell board | `5cb44426` |
| 3 | 00:10 | 00:15 | Hall, the staircase | `99e1f859` |
| 4 | 00:15 | 00:20 | Dining room doorway | `da571b79` |
| 5 | 00:20 | 00:25 | Linen room, the Register | `feeb6d22` |
| 6 | 00:25 | 00:30 | **The blank tab drops** | `b39614b8` |
| 7 | 00:30 | 00:35 | The night walk | `0fe39988` |
| 8 | 00:35 | 00:40 | Light under door eleven | `20f664f8` |
| 9 | 00:40 | 00:45 | **The 3am doorway** | `a61fd24b` |
| 10 | 00:45 | 00:50 | Night corridor (only camera move) | `02a3ef39` |
| 11 | 00:50 | 00:55 | Breakfast | `3a6576cd` |
| 12 | 00:55 | 01:00 | Havel leaves through the gate | `69cf4896` |
| 13 | 01:00 | 01:05 | **The shut door** | `3154c9a1` |

## Narration

`8cb05dce` — 59.4s, WAV, 24 kHz, single take.

Suggested placement: start at **00:03**, so the gate plays three seconds silent
before the voice enters, and the last line lands with roughly two seconds of
picture left. The final clip then holds in silence.

Cue estimates below are proportional, not measured — I could not listen to the
file. Check them against the waveform.

| ~In | Line | Lands on |
|---|---|---|
| 00:03 | "The bell board was fitted in 1911…" | gate → kitchen |
| 00:12 | "Twenty-one of the bells were disconnected in 1963…" | hall |
| 00:20 | "One tab has had its number rubbed smooth." | dining room → linen room |
| 00:26 | "The guest came up the track on a Tuesday…" | tab drops |
| 00:33 | "The register runs from 1911 in one continuous hand." | night walk |
| 00:38 | "Nineteen sixty-one. Room eleven. Havel, and wife." | light under the door |
| 00:44 | "That bell had been rung four times in thirty years…" | the doorway |
| 00:55 | "She left no note. She has never once left a note." | breakfast → Havel leaves |
| 01:02 | *(silence)* | the shut door |

Holding the last three seconds silent on the shut door is deliberate: the episode
ends on an object, not a sentence.

## Source URLs

Picture, in cut order:

01. `gate`
    https://d8j0ntlcm91z4.cloudfront.net/user_3EAyXnLH4MpykXWqL5HAFsJ7q9U/hf_20260823_180130_62d37896-4e3d-40ce-a527-779fd4d17653.mp4
02. `kitchen`
    https://d8j0ntlcm91z4.cloudfront.net/user_3EAyXnLH4MpykXWqL5HAFsJ7q9U/hf_20260823_185845_5cb44426-f971-41a7-9b41-da6649f4b28d.mp4
03. `hall`
    https://d8j0ntlcm91z4.cloudfront.net/user_3EAyXnLH4MpykXWqL5HAFsJ7q9U/hf_20260823_185739_99e1f859-6593-40d5-ae79-a7e73f30dbad.mp4
04. `dining`
    https://d8j0ntlcm91z4.cloudfront.net/user_3EAyXnLH4MpykXWqL5HAFsJ7q9U/hf_20260823_185845_da571b79-4df6-4220-b0e7-232e5a254eb8.mp4
05. `linen`
    https://d8j0ntlcm91z4.cloudfront.net/user_3EAyXnLH4MpykXWqL5HAFsJ7q9U/hf_20260823_185845_feeb6d22-c509-4d4f-a520-d54f69fb7c8d.mp4
06. `tab drops`
    https://d8j0ntlcm91z4.cloudfront.net/user_3EAyXnLH4MpykXWqL5HAFsJ7q9U/hf_20260823_185727_b39614b8-f21b-462a-87fa-6cd7551be8fc.mp4
07. `night walk`
    https://d8j0ntlcm91z4.cloudfront.net/user_3EAyXnLH4MpykXWqL5HAFsJ7q9U/hf_20260823_185845_0fe39988-40e4-4471-800d-f5aa9ce020b1.mp4
08. `light under door`
    https://d8j0ntlcm91z4.cloudfront.net/user_3EAyXnLH4MpykXWqL5HAFsJ7q9U/hf_20260823_185727_20f664f8-98f9-4e19-8cef-a466c2d5eecf.mp4
09. `3am doorway`
    https://d8j0ntlcm91z4.cloudfront.net/user_3EAyXnLH4MpykXWqL5HAFsJ7q9U/hf_20260823_180130_a61fd24b-2332-4160-b7b1-950555f7cfbc.mp4
10. `corridor`
    https://d8j0ntlcm91z4.cloudfront.net/user_3EAyXnLH4MpykXWqL5HAFsJ7q9U/hf_20260823_180117_02a3ef39-7778-465e-815b-4a220e8fa039.mp4
11. `breakfast`
    https://d8j0ntlcm91z4.cloudfront.net/user_3EAyXnLH4MpykXWqL5HAFsJ7q9U/hf_20260823_185727_3a6576cd-105e-4ef5-a62f-0aee05e97a3e.mp4
12. `havel leaves`
    https://d8j0ntlcm91z4.cloudfront.net/user_3EAyXnLH4MpykXWqL5HAFsJ7q9U/hf_20260823_185727_69cf4896-62fe-4776-8ca7-09d13ea9e0a3.mp4
13. `shut door`
    https://d8j0ntlcm91z4.cloudfront.net/user_3EAyXnLH4MpykXWqL5HAFsJ7q9U/hf_20260823_185727_3154c9a1-4370-4709-9a59-d85ad9a63ee0.mp4

Narration:

    https://d8j0ntlcm91z4.cloudfront.net/user_3EAyXnLH4MpykXWqL5HAFsJ7q9U/hf_20260823_191906_8cb05dce-2952-411c-b5f9-58f9b5c93be7.wav

## Assembling it yourself

Download the thirteen mp4s in order as `01.mp4` … `13.mp4` and the wav as
`vo.wav`, then:

```shell
printf "file '%s'\n" 0{1..9}.mp4 1{0..3}.mp4 > list.txt
ffmpeg -f concat -safe 0 -i list.txt -c copy picture.mp4
ffmpeg -i picture.mp4 -itsoffset 3 -i vo.wav \
       -map 0:v -map 1:a -c:v copy -c:a aac -shortest episode-01.mp4
```

The `-itsoffset 3` is the three-second hold before the narration enters.

Any NLE does the same job with more control over the cue points, which is
probably worth it given the estimates above are unverified.
