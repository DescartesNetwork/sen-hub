const { app, screen, session, BrowserWindow } = require('electron')
const serve = require('electron-serve')
const isDev = require('electron-is-dev')
const minimatch = require('minimatch')

const loadFile = serve({ directory: 'build' })

const createWindow = async () => {
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
  await loadFile(win)
  await win.loadURL('app://-')
  if (isDev) win.webContents.openDevTools()
}

const createMiddleware = () => {
  session.defaultSession.webRequest.onBeforeSendHeaders(
    ({ url, requestHeaders }, callback) => {
      if (minimatch(url, '*://*.solana-mainnet.quiknode.pro/*'))
        requestHeaders['Origin'] = 'https://hub.sentre.io'
      return callback({ requestHeaders })
    },
  )
  session.defaultSession.webRequest.onHeadersReceived(
    ({ responseHeaders }, callback) => {
      const disabledHeaders = ['X-Frame-Options', 'x-frame-options']
      disabledHeaders.forEach((header) => {
        if (responseHeaders[header]) delete responseHeaders[header]
      })
      const modifiedHeaders = [
        'Access-Control-Allow-Origin',
        'access-control-allow-origin',
      ]
      modifiedHeaders.forEach((header) => {
        if (responseHeaders[header]) responseHeaders[header] = '*'
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
