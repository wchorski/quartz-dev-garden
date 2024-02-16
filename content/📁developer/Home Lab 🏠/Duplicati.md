## [Duplicati](https://www.duplicati.com/)
- automatic backup and versioning solution
- cross platform 

### connections
- [Home Lab 🏠](📁developer/Home%20Lab%20🏠/Home%20Lab%20🏠.md)
- links to my [SFTP Server](📁developer/Home%20Lab%20🏠/SFTP%20Server.md) 

1. `compose.yml`
```yaml
service 3.1

```

## Install on Raspberry Pi

I didn't want to run a whole [Docker](📁developer/Home%20Lab%20🏠/Docker.md) instance on my [Pi4](📁developer/Hardware/Pi4.md) just to run one container. So I've opted to install Duplicati on bare metal, as with all the other apps on this machine.

### Step 1: Install Mono

Technically my [Pi4](📁developer/Hardware/Pi4.md) runs [Debian](Debian), so I followed the **Debian** tab, but pick [Your Distro Tab](https://www.mono-project.com/download/stable/#download-lin-debian).

**Debian 10**
```shell
sudo apt install dirmngr ca-certificates gnupg
sudo gpg --homedir /tmp --no-default-keyring --keyring /usr/share/keyrings/mono-official-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF
echo "deb [signed-by=/usr/share/keyrings/mono-official-archive-keyring.gpg] https://download.mono-project.com/repo/debian stable-buster main" | sudo tee /etc/apt/sources.list.d/mono-official-stable.list
sudo apt update

sudo apt install mono-complete
```

### Install Duplicati deb package

get your appropriate package file here [Duplicati | Downloads](https://www.duplicati.com/download)

```shell
wget https://updates.duplicati.com/beta/duplicati_2.0.7.1-1_all.deb
sudo dpkg -i duplicati*.deb

## fix any missing dependencies if above fails
sudo apt-get -f install

## Run the webserver
duplicati-server --webservice-port=8200 --webservice-interface=any
```

check your machine's IP and port to see if the webpage is up. i.e. `http://192.168.0.222:8200`. If you use local DNS, go to `http://192.168.0.222:8200/ngax/index.html#/settings` and punch in the allowed domains in the `Hostname` i.e. `raspberry.lan`.

### Run as System Service

Here is the configuration for a system service. Check out [Linux System Service](📁developer/Linux/Linux%20System%20Service.md) if you want more of a break down

` sudo nano /etc/systemd/system/duplicati.service`
```shell
[Unit]
Description=Duplicati Backup service
After=network.target
StartLimitIntervalSec=0

[Service]
Type=simple
Restart=always
RestartSec=1
User=pi4
ExecStart=duplicati-server --webservice-port=8200 --webservice-interface=any

[Install]
WantedBy=multi-user.target
```

```shell
sudo systemctl start duplicati
sudo systemctl enable duplicati
```
## Credit 
- [Download - Stable | Mono (mono-project.com)](https://www.mono-project.com/download/stable/#download-lin-debian)
- [Install Duplicati on Raspi / Raspberry Pi - Installation - Duplicati](https://forum.duplicati.com/t/install-duplicati-on-raspi-raspberry-pi/5309/2)
- [Download - Stable | Mono (mono-project.com)](https://www.mono-project.com/download/stable/#download-lin-debian)