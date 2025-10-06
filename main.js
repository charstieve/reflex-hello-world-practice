const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')
const nativeImage = require('electron').nativeImage;

var image = nativeImage.createFromPath("icon.jpeg")

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: image
  })

  win.loadFile(path.join('docs', 'index.html'))
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
