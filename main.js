const path = require('path')
const minimatch = require('minimatch')
const { app, screen, session, protocol, BrowserWindow } = require('electron')

const BUILD = path.join(__dirname, 'build')
const INDEX = `file://${path.join(BUILD, 'index.html')}`

const createWindow = () => {
  const {
    workAreaSize: { width, height },
  } = screen.getPrimaryDisplay()
  const win = new BrowserWindow({
    width,
    height,
    webPreferences: {
      nodeIntegration: false,
    },
  })
  win.loadURL(INDEX)
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
      )
        return callback({ redirectURL: INDEX })
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
  // protocol.interceptFileProtocol('file', ({ url }, callback) => {
  //   if (
  //     !minimatch(url, `file://${BUILD}/**`) &&
  //     !minimatch(url, 'file://**.*')
  //   ) {
  //     console.log(url, INDEX)
  //     return callback({ path: INDEX })
  //   }
  //   return callback({})
  // })
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
