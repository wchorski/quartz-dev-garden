
## Install
[Install InfluxDB 2.7 | Docker](https://docs.influxdata.com/influxdb/v2.7/install/?t=Docker)

```yml
version: '3.3'
services:
  influxdb:
    image: influxdb:2.7
    container_name: influxdb
    ports:
      - '8086:8086'
    volumes:
      - ./db:/var/lib/influxdb2
      - ./config.yml:/etc/influxdb2/config.yml
```

create blank file `config.yml` in the root of directory. Look [here for config options](https://docs.influxdata.com/influxdb/v2.7/reference/config-options/)

`docker compose up -d`

visit `http://localhost:8060` to set up user, bucket, and key

## With NodeJS app
[Install the InfluxDB 2.7 Node.js JavaScript client library](https://docs.influxdata.com/influxdb/v2.7/api-guide/client-libraries/nodejs/install/)

### Dependancies 
```bash
yarn add @influxdata/influxdb-client @influxdata/influxdb-client-apis
```

**.env.local**
```bash
INFLUX_URL=http://localhost:8086
INFLUX_TOKEN=YOUR_API_TOKEN
INFLUX_ORG=YOUR_ORG
INFLUX_BUCKET=YOUR_BUCKET
```


---

## Credits
- [Add new time operators in addition to Now() · Issue #1549 · influxdata/flux · GitHub](https://github.com/influxdata/flux/issues/1549)

## Backlinks
- [Home Lab 🏠](📁developer/Home%20Lab%20🏠/Home%20Lab%20🏠.md)
- [Duplicati](📁developer/Home%20Lab%20🏠/Duplicati.md)
- [_developer_box📦](📁developer/_developer_box📦.md)
- [[duplicati]]