const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const { app, protocol, session } = require('electron')

const stat = promisify(fs.stat)

// See https://cs.chromium.org/chromium/src/net/base/net_error_list.h
const FILE_NOT_FOUND = -6

const getPath = async (path_) => {
  try {
    const result = await stat(path_)

    if (result.isFile()) {
      return path_
    }

    if (result.isDirectory()) {
      return getPath(path.join(path_, 'index.html'))
    }
  } catch (_) {}
}

module.exports = (options) => {
  options = Object.assign(
    {
      isCorsEnabled: true,
      scheme: 'app',
    },
    options,
  )

  if (!options.directory) {
    throw new Error('The `directory` option is required')
  }

  options.directory = path.resolve(app.getAppPath(), options.directory)

  const handler = async (request, callback) => {
    const indexPath = path.join(options.directory, 'index.html')
    const filePath = path.join(
      options.directory,
      decodeURIComponent(new URL(request.url).pathname),
    )
    const resolvedPath = await getPath(filePath)
    const fileExtension = path.extname(filePath)

    console.log('=================')
    console.log(request)
    console.log(filePath)
    console.log(resolvedPath)
    console.log(fileExtension)
    if (
      resolvedPath ||
      !fileExtension ||
      fileExtension === '.html' ||
      fileExtension === '.asar'
    ) {
      callback({
        path: resolvedPath || indexPath,
      })
    } else {
      callback({ error: FILE_NOT_FOUND })
    }
  }

  protocol.registerSchemesAsPrivileged([
    {
      scheme: options.scheme,
      privileges: {
        standard: true,
        secure: true,
        allowServiceWorkers: true,
        supportFetchAPI: true,
        corsEnabled: options.isCorsEnabled,
      },
    },
  ])

  app.on('ready', () => {
    const ses = options.partition
      ? session.fromPartition(options.partition)
      : session.defaultSession

    ses.protocol.registerFileProtocol(options.scheme, handler)
  })

  return async (window_) => {
    await window_.loadURL(`${options.scheme}://-`)
  }
}
