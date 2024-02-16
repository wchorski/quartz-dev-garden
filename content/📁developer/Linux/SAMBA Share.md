[How to Setup a Raspberry Pi Samba Server - Pi My Life Up](https://pimylifeup.com/raspberry-pi-samba/#:~:text=Connect%20to%20Raspberry%20Pi%20Samba%20Server%20Mac%201,enter%20both%20the%20username%20and%20password...%20See%20More.)

```shell
sudo apt-get update 
sudo apt-get upgrade
```

```shell
sudo apt-get install samba samba-common-bin
```

`mkdir /home/pi/shared`

```shell
sudo nano /etc/samba/smb.conf
```

`smb.conf`
```
[SHARE]
path = /mnt/HDDVOLUME
writeable=Yes
create mask=0777
directory mask=0777
public=no
```

`sudo smbpasswd -a pi`


## make file share for single user
```shell
sudo addgroup smbgrp
sudo useradd smbuser -G newsmbgrp
smbpasswd -a smbuser

sudo mkdir -p /samba/smbuser
sudo chmod -R 0770 /samba/smbuser
sudo chown root:smbgrp /samba/smbuser
```

`sudo systemctl restart smbd`

---
## Credits 
- 

## Backlinks
- [[Linux]]