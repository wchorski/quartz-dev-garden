---
tags:
  - linux
  - troubleshooting
  - audio
---
Every other day the audio seemed to stop passing through the HDMI chord to the Display for my media rig [Ryzen 9 3900x Custom PC](📁developer/Hardware/Ryzen%209%203900x%20Custom%20PC.md). Audio seemed to usually stop as I paused a Youtube video, or switch apps every so often

I would manually disconnect the HDMI and plug it back in to get it to work, but I thought there had to be a simpler way to do it via software. 

## Solution 1
I could go to *Display* settings and change the resolution to any other resolution and back. That got the audio working as usual (because it re connected the **graphics card**).

## Solution 2
take **Solution 1**'s idea and put it in a one click script

```bash
#! /bin/bash
# to find display name and modes "xrandr -q"
xrandr --output HDMI-1 --mode 1360x768
sleep 3s
xrandr --output HDMI-1 --mode 1920x1080
exit
```

---

## Credits
- [Audio losing HDMI connection after sleep : r/linuxmint (reddit.com)](https://www.reddit.com/r/linuxmint/comments/j3tren/audio_losing_hdmi_connection_after_sleep/)
## index
- [_developer_box📦](📁developer/_developer_box📦.md)