---
codename: spearmint
---
My media rig that runs [Plex.tv](📁developer/Home%20Lab%20🏠/Plex.tv.md), [Jellyfin](📁developer/Home%20Lab%20🏠/Jellyfin.md), & my constant consumption of Youtube. 

DNS  - **mint.lan** *-via [Pi-hole](📁developer/Home%20Lab%20🏠/Pi-hole.md)*

```bash
             ...-:::::-...                 spearmint@spearmint
          .-MMMMMMMMMMMMMMM-.              -------------------
      .-MMMM`..-:::::::-..`MMMM-.          OS: Linux Mint 21 x86_64
    .:MMMM.:MMMMMMMMMMMMMMM:.MMMM:.        Host: A520 AORUS ELITE
   -MMM-M---MMMMMMMMMMMMMMMMMMM.MMM-       Kernel: 5.15.0-52-generic
 `:MMM:MM`  :MMMM:....::-...-MMMM:MMM:`    Uptime: 35 mins
 :MMM:MMM`  :MM:`  ``    ``  `:MMM:MMM:    Packages: 2589 (dpkg), 9 (flatpak)
.MMM.MMMM`  :MM.  -MM.  .MM-  `MMMM.MMM.   Shell: zsh 5.8.1
:MMM:MMMM`  :MM.  -MM-  .MM:  `MMMM-MMM:   Resolution: 1920x1080
:MMM:MMMM`  :MM.  -MM-  .MM:  `MMMM:MMM:   Terminal: /dev/pts/1
:MMM:MMMM`  :MM.  -MM-  .MM:  `MMMM-MMM:   CPU: AMD Ryzen 9 3900X (24) @ 3.800GHz
.MMM.MMMM`  :MM:--:MM:--:MM:  `MMMM.MMM.   GPU: NVIDIA GeForce GTX 1060 3GB
 :MMM:MMM-  `-MMMMMMMMMMMM-`  -MMM-MMM:    Memory: 6668MiB / 32023MiB
  :MMM:MMM:`                `:MMM:MMM:
   .MMM.MMMM:--------------:MMMM.MMM.
     '-MMMM.-MMMMMMMMMMMMMMM-.MMMM-'
       '.-MMMM``--:::::--``MMMM-.'
            '-MMMMMMMMMMMMM-'
               ``-:::::-``
```

| part         | brand                                   | model                                  | price |     |     |
| ------------ | --------------------------------------- | -------------------------------------- | ----- | --- | --- |
| OS           | Linux Mint                              | 20.3 x86_64                            |       |     |     |
| CPU          | AMD RYZEN                               | 9 3900X 12 Core                        |       |     |     |
| Motherboard  | Gigabyte Aorus                          | elite wifi mobo x570                   |       |     |     |
| RAM          | G Skill                                 | 32 gb trident z ram DDR4 3200mhz       |       |     |     |
| ~~GPU~~          | ~~NVIDIA_GeForce~~                          | GTX 1060 3GB                           |       |     |     |
| GPU          | Zotac                                   | Geforce GTX 1070 Mini 8gb 256bit GDDR5 |       |     |     |
| Cooler       | Some Wraith Cooler                      |                                        |       |     |     |
| Storage main |                                         | NVMe ?gb                               |       |     |     |
| Storage Ext  | Samsung                                 | 2.5mm SSD  ?gb                         |       |     |     |
| Storage Ext  |                                         | HDD 8tb                                |       |     |     |
| PSU          | high power 80 gold 650w hp1-j650gd-f12s | 650 W                                  |       |     |     |
| Case         |                                         |                                        |       |     |     |

>[!important] GPU Driver
>I tried the default `xserver-xorg-video-nouveau (open-source)` driver with terrible stuttering on game emulation. The proprietary `nvidia-driver-515` worked miles better. 

#todo 
- [ ] finish this page

## Apps & Programs
- control onboard RGB - [OpenRGB](https://openrgb.org/)

### Gaming Emulation
I also use this as my emulation gaming rig
- [Dolphin Emulator - GameCube/Wii games on PC (dolphin-emu.org)](https://dolphin-emu.org/)
- [RPCS3 - The PlayStation 3 Emulator](https://rpcs3.net/)
- Playstation 2 & 1
- [redream - Dreamcast Emulator](https://redream.io/)
- Wii U [Releases · cemu-project/Cemu (github.com)](https://github.com/cemu-project/Cemu/releases/)

### Crypto Mining
I also mine [Monero](https://www.getmonero.org/) on this machine with [XMRig](📁developer/Home%20Lab%20🏠/XMRig.md) 