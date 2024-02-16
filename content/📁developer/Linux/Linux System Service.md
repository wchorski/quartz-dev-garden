---
tags:
  - linux
---


Let’s create a file called ` /etc/systemd/system/rot13.service`
```shell
[Unit]
Description=ROT13 demo service
After=network.target
StartLimitIntervalSec=0
[Service]
Type=simple
Restart=always
RestartSec=1
User=centos
ExecStart=/usr/bin/env php /path/to/server.php

[Install]
WantedBy=multi-user.target
```

set your actual username after `User=`
set the proper path to your script in `ExecStart=`
That’s it. We can now start the service:

```shell
systemctl start rot13
```

And automatically get it to start on boot:

```shell
systemctl enable rot13
```

---

## Credits
- [Creating a Linux service with systemd | by Benjamin Morel | Medium](https://medium.com/@benmorel/creating-a-linux-service-with-systemd-611b5c8b91d6#:~:text=1%20The%20program.%20Let%E2%80%99s%20create%20a%20small%20server,that%20it%20will%20always%20work%20as%20you%20)
## index
- [_developer_box📦](📁developer/_developer_box📦.md)