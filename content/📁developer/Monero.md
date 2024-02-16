I mine on a pool with [XMRig](📁developer/Home%20Lab%20🏠/XMRig.md) 

### Wallet

I gave the [GUI Wallet](https://www.getmonero.org/downloads/#gui) a spin and found it pretty easy to interface, but I wanted to stretch my CLI skills and with the added ability to [SSH](📁developer/SSH.md) into my wallet from any computer

setting up the CLI wallet was quite a trip... 

> [!warning] Portainer
> I like to use [portainer](📁developer/Home%20Lab%20🏠/portainer.md) to manage my container. Including SSH. So make sure you enter the container as **Root** user if you don't want to have a bad time with permissions
> 
> Not sure if it's me but trying to access this container's console through the Portainer GUI just hangs on connecting. Instead, I've just been running `docker exec -u root -it <container-id> /bin/bash` to get into the shell

1. download the git repo - [monero-project/monero: Monero](https://github.com/monero-project/monero#installing-monero-from-a-package)
2. create your directories on host system to whatever's comfy
	1. `/.bitmonero`
	2. `/wallets`
3. build the docker img
```bash
# Build using all available cores
docker build -t monero .

# or build using a specific number of cores (reduce RAM requirement)
docker build --build-arg NPROC=1 -t monero .

# either run in foreground
docker run -it -v /monero/chain:/home/monero/.bitmonero -v /monero/wallets://home/monero/wallets -p 18080:18080 monero

# or in background
docker run -it -d -v /monero/chain:/home/monero/.bitmonero -v /monero/wallet:/wallet -p 18080:18080 monero
```

## CLI Wallet Commands

```shell
## inside container run
monero-wallet-cli --wallet-file /wallets/walletofwealth/walletofwealth.keys
```
## Backlinks
- [_developer_box📦](📁developer/_developer_box📦.md)