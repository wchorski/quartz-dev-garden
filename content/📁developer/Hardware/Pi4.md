## Raspberry Pi 4b 4gb

A great start for anyone who wants to start running digital services

### install
```shell
       _,met$$$$$gg.          pi4@rpi
    ,g$$$$$$$$$$$$$$$P.       -------
  ,g$$P"     """Y$$.".        OS: Debian GNU/Linux 11 (bullseye) aarch64
 ,$$P'              `$$$.     Host: Raspberry Pi 4 Model B Rev 1.4
',$$P       ,ggs.     `$$b:   Kernel: 5.10.0-18-arm64
`d$$'     ,$P"'   .    $$$    Uptime: 2 days, 1 hour, 24 mins
 $$P      d$'     ,    $$P    Packages: 664 (dpkg)
 $$:      $$.   -    ,d$$'    Shell: bash 5.1.4
 $$;      Y$b._   _,d$P'      Terminal: /dev/pts/1
 Y$$.    `.`"Y$$$$P"'         CPU: (4) @ 1.500GHz
 `$$b      "-.__              Memory: 1239MiB / 3791MiB
  `Y$$
   `Y$$.
     `$$b.
       `Y$$b.
          `"Y$b._
              `"""
```

Surprised that it isn't **Raspberry Pi OS**? Instead I run the Debian 64 bit version as recommended by [Home Assistant](📁developer/Home%20Lab%20🏠/Home%20Assistant.md) **Supervised** install. I'm a little bummed I don't get the cool Raspberry ascii art from `neofetch`, but honestly, the developer experience is pretty much identical 


## system wide backup

`full-img-backup.sh`
```shell
#!/bin/bash

#TODO clean out or ignore other folders and files before the copy

FILE_NAME="pi4--$(date +%y_%B_%d).img"
DEST="/ntwmnt/octo8/backups/pi4/img"
LOG="./backup-status.log"

echo "[[ creating system wide backup ]]"
echo $FILE_NAME

#backup img of SD card
if sudo dd bs=4M if=/dev/mmcblk1p2 of=$DEST/$FILE_NAME\
&& sudo zip -jm "$DEST/$FILE_NAME.zip" $DEST/$FILE_NAME\
; then
        sudo echo $FILE_NAME > $LOG
        sudo echo "SUCCESS" >> $LOG
else
        sudo echo $FILE_NAME > $LOG
        sudo echo "FAILURE" >> $LOG
fi
```

---
## Programs & Apps
1. [Pi-hole](📁developer/Home%20Lab%20🏠/Pi-hole.md)
2. [PiVPN](📁developer/Home%20Lab%20🏠/PiVPN.md)
3. [Home Assistant](📁developer/Home%20Lab%20🏠/Home%20Assistant.md)
4. [DuckDNS](📁developer/Home%20Lab%20🏠/DuckDNS.md)
5. [Hyperion](📁developer/Home%20Lab%20🏠/Hyperion.md)