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
![image](https://user-images.githubusercontent.com/6772690/33932249-6104eed2-e02d-11e7-8a11-900deffdb664.png)
