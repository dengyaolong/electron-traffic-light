# electron-traffic-light
Custom traffic light for Electron Application

## Install
```
npm install electron-traffic-light --save
```

## Usage
```
require('electron-traffic-light')(your_browser_window)
```

## Example
```
const { app, BrowserWindow  } = require('electron')

app.on('ready', () => {
  const win = new BrowserWindow({
    width: 600,
    height: 400,
    frame: false,
  })
  win.loadURL('file://' + __dirname + './index.html')
  require('electron-traffic-light')(win)
})
```

And you can see "traffic light"!
