const path = require('path')
const minimatch = require('minimatch')
const { app, session, BrowserWindow } = require('electron')

const INDEX = `file://${path.join(__dirname, './build/index.html')}`

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: false,
    },
  })
  win.loadFile('./build/index.html')
  win.webContents.openDevTools()
}

const createMiddleware = () => {
  session.defaultSession.webRequest.onBeforeSendHeaders(
    ({ url, requestHeaders }, callback) => {
      if (minimatch(url, '*://*.solana-mainnet.quiknode.pro/*'))
        requestHeaders['Origin'] = 'https://hub.sentre.io'
      return callback({ requestHeaders })
    },
  )
  session.defaultSession.webRequest.onBeforeRequest(
    ({ url, resourceType }, callback) => {
      if (
        url !== INDEX &&
        url.startsWith('file://') &&
        resourceType === 'mainFrame'
      ) {
        console.log(url, resourceType)
        return callback({ redirectURL: INDEX })
      }
      return callback({})
    },
  )
  session.defaultSession.webRequest.onHeadersReceived(
    ({ responseHeaders }, callback) => {
      const disabledHeaders = ['X-Frame-Options', 'x-frame-options']
      disabledHeaders.forEach((header) => {
        if (responseHeaders[header]) delete responseHeaders[header]
      })
      return callback({ responseHeaders })
    },
  )
}

app.whenReady().then(() => {
  // Manipulate the http headers to simulate hub.sentre.io origin
  createMiddleware()
  // Define the window
  createWindow()
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
