# 📊 Sensor Graphs Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/integration)
[![GitHub release](https://img.shields.io/github/release/iceboerg00/sensor-graphs-card.svg)](https://github.com/iceboerg00/sensor-graphs-card/releases)

A Home Assistant Lovelace custom card for displaying multiple sensor histories as smooth, interactive area graphs — designed for grow tents, climate monitoring, and any multi-sensor dashboard.

---

## Features

- **Multi-sensor graphs** — display any number of HA sensor entities as individual area charts
- **Synchronized hover** — hovering one graph shows the value of all other sensors at the same point in time
- **Smart tooltip** — appears right next to the data point, vertically centered, never covers the line
- **Time range switcher** — 1h / 6h / 12h / 24h / 7d
- **5-minute averaging** — raw sensor data is bucketed into 5-minute averages for clean, spike-free graphs
- **Auto-hide empty graphs** — sensors with no history data are hidden until data is available
- **Responsive layout** — card fills the HA grid slot, graphs share space equally and scroll only when needed
- **Full Visual Editor** — add, remove, reorder sensors and pick colors — no YAML required
- **Auto color palette** — new sensors get distinct colors automatically
- **HACS compatible**

---

## Installation

### Via HACS (recommended)

1. Open **HACS** → **Frontend**
2. Click the three-dot menu → **Custom repositories**
3. Enter `https://github.com/iceboerg00/sensor-graphs-card` — category: **Dashboard**
4. Click **Sensor Graphs Card** → **Download**
5. Reload the browser

### Manual

1. Download `sensor-graphs-card.js` from the [latest release](https://github.com/iceboerg00/sensor-graphs-card/releases/latest)
2. Place it in `/config/www/sensor-graphs-card.js`
3. Go to **Settings → Dashboards → Resources** → add `/local/sensor-graphs-card.js` as **JavaScript module**
4. Reload the browser

---

## Configuration

Add the card from the dashboard card picker — search for **Sensor Graphs Card**.  
All options are configurable through the built-in Visual Editor. No YAML editing required.

### Visual Editor

1. Click **+ Sensor hinzufügen** to add a sensor
2. Pick the entity from the dropdown
3. Optionally set a custom label and color
4. Use the ▲ ▼ buttons to reorder

### YAML Example

Replace the entity IDs with your own sensors:

```yaml
type: custom:sensor-graphs-card
title: Grow Tent
sensors:
  - entity: sensor.your_temperature
    color: "#03a9f4"
    label: Temperatur
  - entity: sensor.your_humidity
    color: "#4caf50"
    label: Luftfeuchtigkeit
  - entity: sensor.your_vpd
    color: "#ffb300"
    label: VPD
```

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | — | Card title shown in the header |
| `sensors` | `list` | `[]` | List of sensor configurations |
| `sensors[].entity` | `string` | **required** | HA entity ID with a numeric state |
| `sensors[].color` | `string` | auto-palette | CSS color for the line and area gradient |
| `sensors[].label` | `string` | friendly_name | Display name shown in the graph header |

---

## Troubleshooting

**The card shows "Keine Daten" / nothing appears**

- Make sure the entity has a **numeric** state (not text like "on" / "off")
- Make sure the recorder is enabled and not excluding your entity in `configuration.yaml`
- Brand-new entities take a few minutes to accumulate history
- Open the browser console (F12) — any fetch errors will be logged there

**The card stays empty in the dashboard**

- A graph is hidden until at least one data point has been loaded for that sensor. Wait a few seconds after adding a sensor.

---

## License

[MIT](LICENSE)
