import manifest from './manifest.config'
import sol from './sol.config'

const { env, net } = window._sentre

const configs = {
  manifest: manifest[env],
  sol: sol[net],
}

/**
 * Module exports
 */
export default configs
