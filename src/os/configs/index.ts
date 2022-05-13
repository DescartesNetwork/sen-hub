import sol from './sol.config'
import register from './register.config'

const { net, env } = window._sentre
const configs = {
  sol: sol[net],
  register: register[env],
}

/**
 * Module exports
 */
export default configs
