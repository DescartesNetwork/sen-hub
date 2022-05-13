import storage from './storage'

/**
 * Environment
 */
export const env = window._sentre.env

/**
 * Network
 */
export const net = window._sentre.net

export const onSwitchNetwork = (value: Net) => {
  storage.set('network', value)
  return window.location.reload()
}

/**
 * Chain ID
 */
export const chainId = window._sentre.chainId

export const rpc: string = window._sentre.cluster
