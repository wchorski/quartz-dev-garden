#homeassistant #linux 

1. in HA terminal `ssh-keygen`
2. `cp /root/.ssh /config/ssh`
3. include this in beginning of `shell_command` -> `ssh -i /config/ssh/id_rsa -o 'StrictHostKeyChecking=no' username@remote_IP 'touch newfile.txt'`

---
## Credits
- [Home Assistant Shell Integration: Local & SSH Linux Control – Siytek](https://siytek.com/home-assistant-shell/#:~:text=When%20executing%20shell%20commands%20in%20Home%20Assistant%2C%20the,integration%20comes%20when%20you%20combine%20it%20with%20SSH.)

## Backlinks
- [Home Assistant](📁developer/Home%20Lab%20🏠/Home%20Assistant.md)