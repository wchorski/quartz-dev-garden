use a local file or [SAMBA](📁developer/Home%20Lab%20🏠/SAMBA.md) share hooked into [Home Assistant](📁developer/Home%20Lab%20🏠/Home%20Assistant.md) to read as a sensor


## Allow external directory 

Although this share file is connected into HA's filesystem, it still needs to be allowed through configuration. I've allowed the whole `/share` folder, but you may piece meal the allowed nested directories 

`configuration.yaml`
```yml
homeassistant:
  allowlist_external_dirs:
    - "/share"
```

To load the new config either
1. Developer Tools > YAML > Location & Customization Button
2. Developer Tools > SERVICES > `homeassistant.reload_core_config` Service
3. Neither of those worked for me. I just restarted the whole damn thing
## Credits
- [Setup basic information - Home Assistant (home-assistant.io)](https://www.home-assistant.io/docs/configuration/basic/)
- [File - Home Assistant (home-assistant.io)](https://www.home-assistant.io/integrations/file/#sensor)