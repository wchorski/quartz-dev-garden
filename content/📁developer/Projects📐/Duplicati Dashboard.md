---
tags:
  - nodejs
  - reactjs
  - NextJS
  - InfluxDB
---
Locally Hosted Duplicati Monitor App

There wasn't much of a solution to monitor backups made by [Duplicati](📁developer/Home%20Lab%20🏠/Duplicati.md). So I'm trying to make one myself with [NextJS](📁developer/Home%20Lab%20🏠/NextJS.md) and [InfluxDB](📁developer/Home%20Lab%20🏠/InfluxDB.md)

Repo - [GitHub - wchorski/duplicati-dashboard: A NodeJS based server that collects JSON data from Duplicati backup logs](https://github.com/wchorski/duplicati-dashboard)

There is a couple options if you'd like to automate and monitor a Duplicati instance outside of it's GUI

1. [Pectojin/duplicati-client: A command line client for controlling the Duplicati Server (github.com)](https://github.com/Pectojin/duplicati-client)
2. [Duplicati Monitoring - dashboard and e-mail reports for Duplicati (duplicati-monitoring.com)](https://www.duplicati-monitoring.com/)
I'd prefer a locally hosted version for 2 reasons
1. keep all data on premise.
2. transfer the data to my [Home Assistant](📁developer/Home%20Lab%20🏠/Home%20Assistant.md) instance for alerts, dashboard, etc.


## Home Assistant RESTful Sensor

```yml
rest:
	- authentication: basic
	  username: "admin"
	  password: "password"
	  scan_interval: 86400
	  resource: http://dupdash.lan/api/backups/last/flstudio
	  sensor:
	    - name: "duplicati-flstudio-status"
	      value_template: "{{ value_json.status }}"
	    - name: "duplicati-flstudio-time"
	      value_template: >
	        {% set thistime = value_json.time %}
	        {{ as_timestamp(thistime) | timestamp_custom("%Y %M, %d %H:%M") }}
```

#todo 
- [ ] maybe try to use context to shift between layouts 
- [ ] media query container width instead of screen with for Responsive tables 
- [ ] maybe some kinda PageTemplate.tsx for each type?


---
## Credits
- [Pull Data From The Web & Display In Home Assistant - Working with APIs - Display YouTube Sub Count - YouTube](https://www.youtube.com/watch?v=G2YY-HXGmrE)
- [RESTful - Home Assistant (home-assistant.io)](https://www.home-assistant.io/integrations/rest)
- [Changing timestamp - Configuration - Home Assistant Community (home-assistant.io)](https://community.home-assistant.io/t/changing-timestamp/167164/2)
- https://community.home-assistant.io/t/changing-timestamp/167164/6?u=billsky