const { app, BrowserWindow  } = require('electron')

app.on('ready', () => {
  const win = new BrowserWindow({
    width: 600,
    height: 400,
    frame: false,
  })
  win.loadURL('file://' + __dirname + './index.html')
  require('../')(win)
})

