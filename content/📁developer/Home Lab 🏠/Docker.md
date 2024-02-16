## [Home - Docker](https://www.docker.com/)
fast, easy and portable application development through containerization 

If I haven't figured out a way to [containerize]([What is a Container? - Docker](https://www.docker.com/resources/what-container/)) an app, I will find a way. Pretty much the backbone of how I deploy and maintain many services.    

---

### connections
- [portainer](📁developer/Home%20Lab%20🏠/portainer.md)
- [Nginx Proxy Manager](📁developer/Home%20Lab%20🏠/Nginx%20Proxy%20Manager.md)
- [Nextcloud](📁developer/Home%20Lab%20🏠/Nextcloud.md)
- [PhotoPrism](📁developer/Home%20Lab%20🏠/PhotoPrism.md)
- [Wordpress](📁developer/Home%20Lab%20🏠/Wordpress.md)
- [NextJS](📁developer/Home%20Lab%20🏠/NextJS.md)
- [ReactJS](📁developer/ReactJS/ReactJS.md)
- [vaultwarden](📁developer/Home%20Lab%20🏠/vaultwarden.md)
- [Jellyfin](📁developer/Home%20Lab%20🏠/Jellyfin.md)
- [Plex.tv](📁developer/Home%20Lab%20🏠/Plex.tv.md)
- pretty much any of my microservices. Especially if it's public facing 

### installation
1. [Install Docker Desktop on Linux](https://docs.docker.com/desktop/install/linux-install/)

---
## Tips & Tricks
specifiy a file other than `docker-compose.yml` or `compose.yml`
```bash
docker-compose -f docker-compose.test.yml up
```

### execute a command
```shell
sudo docker exec -it dev-garden-app-1 ls /public # '/public = whatever directory you want to look into'

sudo docker exec -it dev-garden-app-1 /bin/bash # 'heard you like shell inside your shell'
```

### Map Volume on Windows 10
- [yaml - docker-compose on Windows volume not working - Stack Overflow](https://stackoverflow.com/questions/50959475/docker-compose-on-windows-volume-not-working#:~:text=To%20do%20so%3A%201%20Run%20the%20command%20%22set,container%20rm%20-f%20%29%205%20Re-run%20the%20containers)
```shell
1.  Launch Docker from your windows taskbar
2.  Click on Settings icon on top
3.  Click Resources
4.  Click File Sharing
5.  Click on (+) sign and add path of local folder in which you want to map the container volume.

It worked for me.
```

````yaml
"C:\\ProgramData\\Docker\\volumes\\sqldata:c:\\mssql"
````

## macOS app not responding upon launch
1.  Go to finder and open `Applications > Utilities > Activity Monitor.app`
    
2.  Find `Docker` or `Docker Desktop` (it was in Not responding mode in my case) and Force Kill the app.
    
3.  Run the following command in Terminal:
    
    `sudo rm -rf ~/Library/Containers/com.docker.*`
    
4.  Open the setting file in the terminal:
    
    `sudo nano ~/Library/Group\ Containers/group.com.docker/settings.json`
    

then find `"filesharingDirectories":`

5.  Remove all entries inside this key and leave it as `"filesharingDirectories": [],` save and close the file.
6.  Finally go to the Application folder, find `Docker` and run it (wait sometime, it takes a minute or so to run)
7.  It will run and work like a charm!

## Run Docker Compose in Crontab
running `docker compose up -d` is the norm when you're already in the same directory as the `compose.yml` file, but what if you want to call that same file from a `crontab`

```bash
# spin up container from selected file
docker compose -f /home/mypath/compose.yml up -d 
docker compose -f /mnt/uasis5/node/filesystem-livesync-pywriter4/compose.yml up -d

# restart container 'server' named in compose.yml file
docker compose -f /mnt/uasis5/node/filesystem-livesync-pywriter4/compose.yml restart server
```

#todo 
- [ ] try out watchtower  to auto update containers [Docker Compose File For Watchtower | JamesCoyle.net Limited](https://www.jamescoyle.net/how-to/docker-compose-files/3323-docker-compose-file-for-watchtower#:~:text=Create%20a%20new%20directory%20and%20save%20the%20above,from%20the%20moment%20you%20start%20the%20Watchtower%20container.)

---
## Credits
- [cannot launch docker desktop for mac - Stack Overflow](https://stackoverflow.com/questions/69552636/cannot-launch-docker-desktop-for-mac)