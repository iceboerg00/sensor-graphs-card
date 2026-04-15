# 📊 Sensor Graphs Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/integration)
[![GitHub release](https://img.shields.io/github/release/iceboerg00/sensor-graphs-card.svg)](https://github.com/iceboerg00/sensor-graphs-card/releases)

A Home Assistant Lovelace custom card for displaying multiple sensor histories as smooth, interactive area graphs — built for grow tents, climate monitoring, and any multi-sensor setup.

---

## Features

- **Multi-sensor graphs** — display any number of HA sensor entities as individual area charts
- **Synchronized hover** — hovering one graph shows the value of all other sensors at the same point in time
- **Smart tooltip** — appears right next to the data point, never obscures the graph below
- **Time range switcher** — 1h / 6h / 12h / 24h / 7d
- **5-minute averaging** — raw sensor data is bucketed into 5-minute averages for clean, spike-free graphs
- **Auto-hide empty graphs** — sensors with no history data are not shown until data is available
- **Responsive layout** — card fills the HA grid slot, graphs share space equally and scroll only when needed
- **Full Visual Editor** — add, remove, reorder sensors, pick colors — no YAML required
- **Auto color palette** — new sensors get distinct colors automatically
- **HACS compatible**

---

## Installation

### Via HACS (recommended)

1. Open **HACS** → **Frontend**
2. Click the three-dot menu → **Custom repositories**
3. Enter `https://github.com/iceboerg00/sensor-graphs-card` — category: **Daschboard**
4. Click **Sensor Graphs Card** → **Download**
5. Reload the browser

### Manual

1. Download `sensor-graphs-card.js` from the [latest release](https://github.com/iceboerg00/sensor-graphs-card/releases/latest)
2. Place it in `/config/www/sensor-graphs-card.js`
3. Go to **Settings → Dashboards → Resources** → add `/local/sensor-graphs-card.js` as **JavaScript module**
4. Reload the browser

---

## Configuration

Add the card from the card picker — search for **Sensor Graphs Card**.  
All options are configurable via the built-in Visual Editor.

### Example YAML

```yaml
type: custom:sensor-graphs-card
title: Grow Tent
sensors:
  - entity: sensor.schedule_4_real_cb_temperature
    color: "#03a9f4"
    label: Temperatur
  - entity: sensor.schedule_4_real_cb_humidity
    color: "#4caf50"
    label: Luftfeuchtigkeit
  - entity: sensor.schedule_4_real_cb_vpd
    color: "#ffb300"
    label: VPD
  - entity: sensor.schedule_4_real_cb_ppfd
    color: "#e91e63"
    label: PPFD
  - entity: sensor.schedule_4_real_cb_co2
    color: "#9c27b0"
    label: CO2
```

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | — | Card title |
| `sensors` | `list` | `[]` | Sensor configurations |
| `sensors[].entity` | `string` | **required** | HA entity ID |
| `sensors[].color` | `string` | palette | CSS color for line and fill |
| `sensors[].label` | `string` | friendly_name | Display name shown in graph header |

---

## License

[MIT](LICENSE)
