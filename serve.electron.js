// Credit: https://github.com/sindresorhus/electron-serve

const path = require('path')
const glob = require('glob')
const { app, protocol, session } = require('electron')

const FILE_NOT_FOUND = -6 // See https://cs.chromium.org/chromium/src/net/base/net_error_list.h
const PATH_SEP = path.sep
const DEFAULT_OPTTIONS = {
  scheme: 'app',
  directory: 'build',
}

module.exports = (options) => {
  const { scheme, directory } = { ...DEFAULT_OPTTIONS, ...options }

  const buildDir = path.resolve(app.getAppPath(), directory)
  const indexPath = path.join(buildDir, 'index.html')

  const handler = ({ url }, callback) => {
    const reqPath = decodeURIComponent(new URL(url).pathname)
    const basename = path.basename(reqPath)
    let [filePath] = glob.sync(`${PATH_SEP}**${PATH_SEP}${basename}`, {
      nodir: true,
      root: buildDir,
    })
    if (filePath) return callback({ path: filePath })
    const fileExtension = path.extname(reqPath)
    if (!fileExtension) return callback({ path: indexPath })
    return callback({ error: FILE_NOT_FOUND })
  }

  protocol.registerSchemesAsPrivileged([
    {
      scheme,
      privileges: {
        standard: true,
        secure: true,
        allowServiceWorkers: true,
        supportFetchAPI: true,
        corsEnabled: true,
      },
    },
  ])

  app.whenReady().then(() => {
    session.defaultSession.protocol.registerFileProtocol(scheme, handler)
  })

  return (win) => win.loadURL(`${scheme}://-`)
}
