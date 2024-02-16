using [Pi-hole](📁developer/Home%20Lab%20🏠/Pi-hole.md)'s  as the local DNS provider and [Nginx Proxy Manager](📁developer/Home%20Lab%20🏠/Nginx%20Proxy%20Manager.md) as a domain router, I'm able to set up custom paths for my local computers and apps.

## Example
the way I route my [Docker Compose Media Containers Arrs](📁developer/Media%20Software/Docker%20Compose%20Media%20Containers%20Arrs.md) so you can convert IP addresses and port numbers like so

| host IP       | port | =>  | pretty URL        |
| ------------- | ---- | --- | ----------------- |
| 192.168.0.222 | 7878 | =>  | http://radarr.lan  |
| 192.168.0.222 | 8989 | =>  | http://sonarr.lan |
| 192.168.0.101 | 80   | =>  | http://pihole.lan |

So other than making it easy to pop the url into the browser, it also makes configuration across apps a breeze. 

## DNS Routing

### A Records
First you must point the first A record `proxy.lan` to the host machine that is running [Nginx Proxy Manager](📁developer/Home%20Lab%20🏠/Nginx%20Proxy%20Manager.md)
![pi-hole screenshot]

I'd also recommend creating **A Records** for each networked machine that's also running apps. (ex: `192.168.0.222 => mediaserver.lan`)
![pi-hole screenshot]
### CNAME Records
From here you can create the app specific domain names
![pi-hole screenshot]

## Proxy
this is how you attach the local domain name to a specific app. It's even easier to remember if the host machine also has a pretty name too
![nginx screenshot]

Even with the host machine's pretty name you could in theory access your [Radarr](📁developer/Media%20Software/Radarr.md) app via `http://mediaserver.lan:7878` (bypassing the need for the **Nginx Proxy**) but I think this extra step is really the icing on the cake🍰

#todo 
- [ ] finish these screen shots