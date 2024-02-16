Scrape a website and return it's status code to a [Home Assistant](📁developer/Home%20Lab%20🏠/Home%20Assistant.md) sensor. This builds off of my [TV Power and Switch Template](📁developer/Home%20Assistant/TV%20Power%20and%20Switch%20Template.md).

## Dashboard Screenshot
![HA-html-status-code](attachments/HA-html-status-code%201.png)

## Local File  + Template Sensor

Later I explain a **Command Line Method** to do this only within Home Assistant, but I had a lot of false positives (or in this case, true negatives). This method assumes you have a separate machine (using my [Pi4](📁developer/Hardware/Pi4.md)) to run the `curl` commands, share files via [SAMBA Share](📁developer/Linux/SAMBA%20Share.md), and set up a **Local File Sensor** in Home Assistant

### Curl HMTL Status from Website

I go more in depth with my [Monitor Website's HTML Status Code with Bash Script](📁developer/Linux/Monitor%20Website's%20HTML%20Status%20Code%20with%20Bash%20Script.md), but here is the gist

```bash
#!/bin/bash

cd ~/html-status-codes

declare -a WEBSITES
WEBSITES+=( 
  "https://make-a-gram.williamusic.com"
  "https://www.tawtaw.site/home"
)

for website in "${WEBSITES[@]}"
do
  # remove any bad chars for filenames
  FILENAME=$(sed -E 's/(http|https):\/\///g' <<< $website | sed 's/\//_/g')
  test -e "./logs/$FILENAME.log" || touch ./logs/$FILENAME.log
  curl -o /dev/null -s -w "%{http_code}" $website > "./logs/$FILENAME.log"
done
```

Set this script to run in a [Crontab](📁developer/Linux/Crontab.md) and setup a [SAMBA Share](📁developer/Linux/SAMBA%20Share.md). In my case my directory will be `~/html-status-codes/logs`

### Add Network Storage

Home Assistant now supports mounting network storage via the UI (you may have to update you HA to get this feature) `http://HOMEASSISTANT_HOSTNAME:8123/config/storage`

On this page <button>Add Network Storage</button>  with the username, password, and folder

![HA-network-smb](attachments/HA-network-smb%201.png)

Now we can jump into HA's `configuration.yaml`

### HA Configuration.yaml

> [!important] Allow the directory
> Add the below snippet or you will get read permission issues. I added both the whole `/share` as well as the nested directory. You can chose either or both for your case.

```yml
homeassistant:
  allowlist_external_dirs:
    - "/share/html_codes"
    - "/share"
```

#### The Sensor

If you already know what you're doing, you probably just skipped to this part

```yml
sensor: 
- platform: file
name: html_code_analytics_file
file_path: /share/html_codes/logs/analytics.williamusic.com_login.log

- platform: template
sensors:
	html_code_makeagram:
		friendly_name: HTML Code Make a Gram
		value_template: "{{ states('sensor.html_code_makeagram_file') | int(0) }}"
		icon_template: >-
			{% from 'html-status-icon.jinja' import html_status_icon %}
			{{ html_status_icon('sensor.html_code_makeagram_file') }}
```

You could just add the `platform: file` block and be done with it, but the `platform: template` adds a reactive icon as well as defaults the sensor to `0` if the file is `unkown` which makes readings in [Grafana & InfluxDB](📁developer/Home%20Lab%20🏠/Grafana%20&%20InfluxDB.md) much more simple. 

Notice how I'm importing a reusable snippet for the `icon_template:` field, learn how with [Jinja Code Snippet](📁developer/Home%20Assistant/Jinja%20Code%20Snippet.md)

> [!info] Restart Home Assistant
> Sometimes a "Quick Reload" doesn't update all the sensors (especially the `platform: file`. Try "Restart Home Assistant" instead
## Command Line Method

Although it's possible have Home assistant do everything from call the `curl` command to store the state, I'd recommend trying the **Local File  + Template Sensor** Method first as I had a lot of false `uknown` returns. Maybe I don't understand the syntax, or maybe command line

> [!warn] Home assistant > 2023.8.0
>  command_line sensors are now nested under `command_line:` **NOT** under `sensor: - platform: command_line`
>  
>  i've created a dedicated `command_line.yaml` file and import it into `configuration.yaml` like so `command_line: !include command_line.yaml`

Here is the command that we will have run to return just the head status code. Test it out in your terminal, or home assistant's terminal. Change `https://www.williamusic.com` to you're own endpoint

```shell
# return the header status code of a webpage. i.e. 200, 404, 500
curl -o /dev/null -s -w "%{http_code}" https://cutefruit.tawtaw.site/home

# here is another command I found that may work for you
curl -I https://www.williamusic.com 2>/dev/null | head -n 1 | cut -d$' ' -f2
```

Assuming I still have this site running, you should get a number between 200 and 399.
### Basic Configuration
```yml
command_line:
	- sensor:
	    name: BlessPress HTML Status
	    unique_id: html_status_blesspress
	    # chose one of the below 'command:' options
	    command: 'curl -o /dev/null -s -w ''%{http_code}'' https://www.williamusic.com'
	    command: 'curl -I https://www.williamusic.com 2>/dev/null | head -n 1 | cut -d$'' '' -f2'
	    value_template: '{{ int(value, 404) }}'
	    scan_interval: 600
```

> [!tip] escape quotes
> You'll notice the command has changed a bit, there is double `'' ''`. This is because The command is already in quotes and they need to be escaped. This is [recommended by Home Assistant](https://www.home-assistant.io/integrations/command_line/). I tried using double quote `"` but you'll have some intermittent problems so just stick with the goofy syntax. 

> [!tip] Redirects
> Lets say your `curl`ing a admin dashboard that that redirects to a login page you may get a `302`. Still a positive status code, but you may want to add another condition range into your icon statement.
> 
> Also, if your base website `https://www.tawtaw.site/` redirects to a `/home` page, you'll want to put the URL as `https://www.tawtaw.site/home`

`value_template: '{{ int(value, 0) }}'` - Set return the value as a *integer* property. the `0` is a fallback default number if no number is found.

`scan_interval` - is in seconds

`unique_id` - for some reason this doesn't relate the entities id. Still working on this

### Icon based on Status

Add a bit more visual feedback with dynamic icons

```yml
command_line:
	- sensor:
	    name: BlessPress HTML Status
	    unique_id: html_status_blesspress
	    command: 'curl -I https://blesspress.williamusic.com 2>/dev/null | head -n 1 | cut -d$'' '' -f2'
	    value_template: '{{ int(value, 0) }}'
	    scan_interval: 600
	    icon: >-
	      {% if int(value) == 0 %}
	        mdi:server-off
	      {% elif int(value) > 199 and int(value) < 400 %}
	        mdi:check-circle
	      {% elif int(value) > 499 %}
	        mdi:alert-outline
	      {% else %}
	        mdi:help-rhombus-outline
	      {% endif %}
```

Don't let the syntax scare you here is the documentation
- [Template Designer Documentation — Jinja Documentation (3.2.x) (palletsprojects.com)](https://jinja.palletsprojects.com/en/latest/templates/)
- [Templating - Home Assistant (home-assistant.io)](https://www.home-assistant.io/docs/configuration/templating/)

I'll also break down what's happening line by line

```yml
icon: >-
	# check if the return value is 0, like an 'None' or 'undefined' check
	# set the icon to 'mdi:server-off'. You can browse the icons in the Lovelace UI and copy paste the name
	{% if int(value) == 0 %}
		mdi:server-off
		
		# is the value is in the 200-300 code range. Meaning the page is good
	{% elif int(value) > 199 and int(value) < 400 %}
		mdi:check-circle
		
		# if the value is in the 500 range or above. The page is up, but we are having server side error with the app
	{% elif int(value) > 499 %}
		mdi:alert-outline
		
		# here is a catch all for anything else, denoted by a hazard ? symbol
	{% else %}
		mdi:help-rhombus-outline
	{% endif %}
```

Code split and reuse this icon code in a [Jinja Code Snippet](📁developer/Home%20Assistant/Jinja%20Code%20Snippet.md)
## Alert Automations

Later I'll add some automation templates that alert my phone when a webpage goes down. Also would like to add a bit of color to these icons too in the future

## Remove Old Stale Entities

Through the trial and error, I had a few orphaned or `_2` appended entities that made the work flow rather annoying. Removing them isn't as simple as deleting the `.yaml` code.

In the **Home Assistant UI** find **Developer Tools > Services > Recorder: Purge Entities**. click "Chose Entity" to find the ones you want to rid of and "Call Service"

> [!tip] force refresh the window because your browser cache may hold onto those old entities

## Credits
- [Template sensors are still there after they are being removed - Configuration - Home Assistant Community (home-assistant.io)](https://community.home-assistant.io/t/template-sensors-are-still-there-after-they-are-being-removed/431510/3)
- [shell - Curl to return http status code along with the response - Stack Overflow](https://stackoverflow.com/questions/38906626/curl-to-return-http-status-code-along-with-the-response)
- [Command Line - Home Assistant (home-assistant.io)](https://www.home-assistant.io/integrations/command_line/)
- [icon_template is an invalid option for [command_line] · Issue #94190 · home-assistant/core (github.com)](https://github.com/home-assistant/core/issues/94190)
- [BrendanMoran](https://community.home-assistant.io/u/BrendanMoran) - [template example](https://community.home-assistant.io/t/website-down-or-up/53919/8)
-  [sebdoan](https://community.home-assistant.io/u/sebdoan)- [template example](https://community.home-assistant.io/t/website-down-or-up/53919/9?u=billsky)
- [#57 Command Line Yaml Configuration has moved error FIXED | Home Assistant 2023.6.0 | vccground (youtube.com)](https://www.youtube.com/watch?v=MKZ6B7tAXu0)
- [Change icon color based on sensor value - Configuration - Home Assistant Community (home-assistant.io)](https://community.home-assistant.io/t/change-icon-color-based-on-sensor-value/493637/4)