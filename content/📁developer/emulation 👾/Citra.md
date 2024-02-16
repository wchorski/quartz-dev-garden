3DS emulator

I recommend getting a **New 3DS XL / LL** and loading Luma3ds to run native 3ds, DS, & Gameboy games.

[3DS Hacks Guide - 3DS Hacks Guide](https://3ds.hacks.guide/)

## 3DS as SAMBA share
just like setting up a PC with [SAMBA](📁developer/Home%20Lab%20🏠/SAMBA.md), you can also wirelessly transfer data to and from PC as if the 3DS's SD card was any other mounted drive.

### non hacked 3ds 
- [Nintendo Support: How to Use microSD Management to Move Files between a New Nintendo 3DS XL and a PC](https://en-americas-support.nintendo.com/app/answers/detail/a_id/14218/~/how-to-use-microsd-management-to-move-files-between-a-new-nintendo-3ds-xl-and-a#:~:text=Complete%20these%20steps%201%20From%20the%20HOME%20menu%2C,accessing%20the%20system%20via%20a%20PC.%20More%20items)
- [How to utilize the 3DS MICROSD MANAGEMENT to transfer files wirelessly - YouTube](https://www.youtube.com/watch?v=2IQtcY9mEbI&t=274s)

>[!info] Windows 10 Users
>turn on `SMB1` in **Windows Features**

my 3ds did not automatically show up in my networks tab, so I just mounted the drive manually with `\\3DLIME\microSD\` and it worked

### hacked 3ds
[FTPDB 3DS - GameBrew](https://www.gamebrew.org/wiki/FTPDB_3DS)
- ftp://192.168.0.66:5000` in **Windows Explorer**

## transfer / manage save data
[Dumping Save Data from a 3DS Console - Citra (citra-emu.org)](https://citra-emu.org/wiki/dumping-save-data-from-a-3ds-console/#:~:text=Transferring%20Save%20Data%201%20Open%20Checkpoint.%20...%202,in%20Step%204%5D%20to%20the%20computer.%20More%20items)
important thing to note is that whatever tool used to get the save data off of the 3DS supports exporting _expanded_ save data. Save data lives in Citra’s emulated SD card directories (`user/sdmc/Nintendo 3DS/000...0/000...0/title/[game-TID-high]/[game-TID-low]/data/00000001/`).

I use [Checkpoint 3DS - GameBrew](https://www.gamebrew.org/wiki/Checkpoint_3DS) because it's the most simple. and also compatible with the Switch 
1. navigate **Checkpoint** 3ds rom to backup game's save data
2. on 3ds SD card - `/3ds/Checkpoint/saves/<Game Name>/<checkpoint folder>` 
3. in **Citra** open the save directory by right-clicking on a game in and clicking “Open Save Data Directory”

##### Example diagram showing the correct location of New Super Mario Bros. 2 save data in Citra’s [User Directory](https://citra-emu.org/wiki/user-directory).
```
"User directory"
└── sdmc
    └── Nintendo 3DS
        └── 00000000000000000000000000000000
            └── 00000000000000000000000000000000
                └── title
                    └── 00040000
                        └── 0007ae00
                            └── data
                                └── 00000001
                                    └── BigRedSave.dat
```

## inject gameboy advance games as virtual console titles
I recommend this over emulation in **Twilight** as you get native support and menu icon

[Ultimate GBA VC Injector 3DS - GameBrew](https://www.gamebrew.org/wiki/Ultimate_GBA_VC_Injector_3DS)