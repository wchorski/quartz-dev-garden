>[!info] [PIVPN: Simplest way to setup a VPN](https://pivpn.io/)
>The simplest way to setup and manage a VPN,  
designed for Raspberry Pi™.
>

## install
It is recommended to install [Pi-hole](📁developer/Home%20Lab%20🏠/Pi-hole.md) first as it automates **DNS** routing upon installing **PiVPN**

>[!important ]
>don't forget to set boot option to wait for network (i.e. `raspi-config`)

## updating
[Installation - docs.pivpn.io](https://docs.pivpn.io/install/#update)

```shell
run pivpn update
```

VPN protocols are updated via system package manager

> [!Note] 
> Read [Updating OpenVPN](https://docs.pivpn.io/openvpn/#updating-openvpn) or [Updating Wireguard](https://docs.pivpn.io/wireguard/#updating-wireguard) for information on how to update the VPN protocol.

## backup
also a backup of [Pi-hole](📁developer/Home%20Lab%20🏠/Pi-hole.md)

```bash
#! /bin/bash

DATE=`date +%Y-%m-%d`

echo '======================' > backup.log
echo $DATE >> backup.log


if pihole -a -t\
&& mv /home/pi4/scripts/backup/pi-hole-rpi-teleporter* /home/pi4/scripts/backup/pihole\
; then
        echo 'pihole SUCCESS' >> backup.log
else
        echo 'pihole failed' >> backup.log
fi


if pivpn -bk\
&& sudo mv /home/pi4/pivpnbackup/* /home/pi4/scripts/backup/pivpn\
; then
        echo 'pivpn SUCCESS' >> backup.log
else
        echo 'pivpn failed' >> backup.log
fi
```

## Migrating PiVPN & Wireguard

Backup your server with `pivpn -bk` copy the tar archive to your computer. example using scp on Linux:

`scp <user>@<server>:~/pivpnbackup/<archivename> <path/on/local>`

1.  Backup the current (new instance) install: `sudo cp -r /etc/wireguard /etc/new_wireguard_backup`
2.  Extract the backup archive: `tar xzpfv <archive name>`
3.  Copy the extracted content: `sudo cp -r etc/wireguard /etc`
4.  Restart the wireguard service: `sudo systemctl restart wg-quick@wg0`

## tunnels connecting but no internet after reinstall
`sudo cat /etc/wireguard/wg0.conf`
`sudo iptables -t nat -A POSTROUTING -s <FIRST_IP_IN_CONF>/<#> -o eth0 -j MASQUERADE`
then turn off and on the tunnel

### connections 
- Running on [Pi4](📁developer/Hardware/Pi4.md)
- paired with [Pi-hole](📁developer/Home%20Lab%20🏠/Pi-hole.md) for ad blocking on the go

## No internet browsing when connected
```bash
# debug help
pivpn -d 
```

```bash
::::		Self check		 ::::
:: [OK] IP forwarding is enabled
:: [OK] Ufw is enabled
:: [ERR] Iptables MASQUERADE rule is not set, attempt fix now? [Y/n] Y
Firewall reloaded
Done
:: [OK] Ufw input rule set
:: [ERR] Ufw forwarding rule is not set, attempt fix now? [Y/n] Y
```

---
## Citations 
- [Wireguard - docs.pivpn.io](https://docs.pivpn.io/wireguard/)
- [PiVPN not working properly : raspberry_pi (reddit.com)](https://www.reddit.com/r/raspberry_pi/comments/9i6rmm/pivpn_not_working_properly/)
- [Make local devices accessible - Pi-hole documentation](https://docs.pi-hole.net/guides/vpn/wireguard/internal/)