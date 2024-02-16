#music #media #player #itunes #bash #powershell

![banner-dark (jellyfin.org)](https://jellyfin.org/images/logo.svg) 
> [!info] [Jellyfin](https://jellyfin.org/) The Free Software Media System.
> Jellyfin is the volunteer-built media solution that puts _you_ in control of your media. Stream to any device from your own server, with no strings attached. Your media, your server, your way.

I use this exclusively for music hosting because [Plex.tv](📁developer/Home%20Lab%20🏠/Plex.tv.md) has more restrictions on client music playback. Plus, with a little shell magic -> [iTunes playlist Sync](#iTunes%20playlist%20Sync)

---

### Connections
- [Home Assistant](📁developer/Home%20Lab%20🏠/Home%20Assistant.md)
- Android Phone (Galaxy s9)

## installation
1. `./compose.yml` via [Docker](📁developer/Home%20Lab%20🏠/Docker.md)
```yaml
version: "3.7"

services:

  jellyfin:
    image: jellyfin/jellyfin:latest
    container_name: jellyfin
    restart: unless-stopped
    ports:
      - 8096:8096
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/Chicago
    volumes:
      - ./config:/config
      - ./cache:/cache
      - /mnt/<externalDrive>/jellyfin/media:/media:ro #:ro = read-only

# networks:
#   default:
#     external:
#       name: nginx-prox-mgmt-3_default
```

## Phone Players
Gotta be honest, the native [Jellyfin | F-Droid](https://f-droid.org/en/packages/org.jellyfin.mobile/) app is very lack luster. 🫰that this will improve in the future. Here is 2 alternatives

1. [Symfonium](https://www.symfonium.app/): It cost **$5**, and that's fine because it is very feature rich (Android Auto, auto sync, Offline downloads, etc). 
2. [FinAmp](https://github.com/jmshrv/finamp)If you're looking for something light weight (and [FOSS](📁developer/FOSS.md))

## iTunes playlist Sync
- copy files to server: [FreeFileSync](📁developer/Home%20Lab%20🏠/FreeFileSync.md) or [rsync](📁developer/Linux/rsync.md)
- [iTunes XML Playlist to m3u Converter](📁developer/Media%20Software/iTunes%20XML%20Playlist%20to%20m3u%20Converter.md)
- [Apple Music Batch Playlist Export](📁developer/MacOs/Apple%20Music%20Batch%20Playlist%20Export.md)


---
- [Home Lab 🏠](📁developer/Home%20Lab%20🏠/Home%20Lab%20🏠.md)
- [_music_box 🎶](📁music/_music_box%20🎶.md)
