I've been having problems with my [Pi4](📁developer/Hardware/Pi4.md) freezing up because of the [Home Assistant](📁developer/Home%20Lab%20🏠/Home%20Assistant.md) install. There are all sorts of reasons why [Home Assistant](📁developer/Home%20Lab%20🏠/Home%20Assistant.md) would lock up the Pi. Resulting in my **DNS and DHCP** server via [Pi-hole](📁developer/Home%20Lab%20🏠/Pi-hole.md) and VPN via [PiVPN](📁developer/Home%20Lab%20🏠/PiVPN.md)  to go down (not good). 

> [!warning] [Linux - Home Assistant (home-assistant.io)](https://www.home-assistant.io/installation/linux)
> This way of running Home Assistant will require the most of you. It also has strict requirements you need to follow.
> 
> Unless you really need this installation type, you should install Home Assistant OS (this can also be a [virtual machine](https://www.home-assistant.io/installation/linux#install-home-assistant-operating-system)), or [Home Assistant Container](https://www.home-assistant.io/installation/linux#install-home-assistant-container).

As you can see from the warning, It was dead on. Honestly, the struggles of keeping [Home Assistant](📁developer/Home%20Lab%20🏠/Home%20Assistant.md) updated has really exercised my Linux knowledge but my [Home Assistant](📁developer/Home%20Lab%20🏠/Home%20Assistant.md) has grown and requires more and I'm getting tired of fighting the errors. Plus, not loosing **DNS and DHCP** from [Pi-hole](📁developer/Home%20Lab%20🏠/Pi-hole.md) and remote access via [PiVPN](📁developer/Home%20Lab%20🏠/PiVPN.md) when [Home Assistant](📁developer/Home%20Lab%20🏠/Home%20Assistant.md) acts up will be a nice weight off my shoulders. 

It's time to move to Home Assistant Operating System aka Hass.os

## Backup apps and OS
currently my [Pi4](📁developer/Hardware/Pi4.md) runs
- [Pi-hole](📁developer/Home%20Lab%20🏠/Pi-hole.md)
- [PiVPN](📁developer/Home%20Lab%20🏠/PiVPN.md)
- [Hyperion](📁developer/Home%20Lab%20🏠/Hyperion.md)
- [Home Assistant](📁developer/Home%20Lab%20🏠/Home%20Assistant.md)
- [Glances](📁developer/Home%20Lab%20🏠/Glances.md)
- [DuckDNS](📁developer/Home%20Lab%20🏠/DuckDNS.md)
- probably forgetting something else...

#todo 
- [x] pi-hole config
- [x] pivn config
- [x] hyperion config
- [x] home assistant config
- [x] duckdns config?
- [x] system img backup

## Restore configs
### pi-hole
- through app's GUI "Teleporter"

### PiVPN
On Linux, copy the config from the Raspberry Pi to a target directory on your local machine:
`sudo cp backupconfigs/whatever.conf ~/configs/whatever.conf`

### Hyperion
- through app's GUI "General Settings > Import/Export Configuration"

### Home Assistant
- through app's GUI "Backups > Restore"

## New Pi4 2gb
#todo
- [x] burn clean Raspberry OS Lite 64bit 
- [x] install pi-hole & config
- [x] install pivpn & config
- [x] install glances 
- [x] install duckdns
- [x] install Hyperion