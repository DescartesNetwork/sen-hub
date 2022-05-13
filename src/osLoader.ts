import { Connection } from '@solana/web3.js'

import storage from './shared/storage'
import registerConfig from 'os/configs/register.config'

/**
 * Environment
 */
export const getEnv = (): Env => {
  switch (process.env.REACT_APP_ENV) {
    case 'development':
      return 'development'
    case 'staging':
      return 'staging'
    case 'production':
      return 'production'
    default:
      return 'development'
  }
}

/**
 * Network
 */
export const getNetwork = (): Net => {
  switch (storage.get('network')) {
    case 'devnet':
      return 'devnet'
    case 'testnet':
      return 'testnet'
    case 'mainnet':
      return 'mainnet'
    default:
      return 'mainnet'
  }
}

/**
 * Chain ID
 */
export const getChainId = () => {
  const net = getNetwork()
  switch (net) {
    case 'devnet':
      return 103
    case 'testnet':
      return 102
    case 'mainnet':
      return 101
    default:
      return 101
  }
}

/**
 * RPC Node
 */
const CLUSTERS: Record<Net, string[]> = {
  devnet: [
    'https://api.devnet.solana.com',
    'https://psytrbhymqlkfrhudd.dev.genesysgo.net:8899/',
  ],
  testnet: ['https://api.testnet.solana.com'],
  mainnet: [
    'https://ssc-dao.genesysgo.net/',
    'https://solana-api.projectserum.com',
    'https://solitary-autumn-water.solana-mainnet.quiknode.pro/dcbac9d444818a20ac583541dec35b44c6840888/',
  ],
}

/**
 * Ping Solana cluster
 * @param nodeRpc - Solana's RPC cluster
 * @returns ping time
 */
export const pingCluster = async (nodeRpc: string): Promise<number> => {
  const connection = new Connection(nodeRpc)
  const start = Date.now()
  await connection.getVersion()
  const end = Date.now()
  return end - start
}

/**
 * Check health and get best cluster
 * @returns best cluster with duration at least
 */
export const getCluster = async (): Promise<string> => {
  const net = getNetwork()
  const clusters = CLUSTERS[net]
  return await new Promise((resolve) =>
    clusters.forEach(async (cluster) => {
      try {
        await pingCluster(cluster)
        return resolve(cluster)
      } catch (error) {}
    }),
  )
}

export const fetchRegister = async (): Promise<SenReg> => {
  const env = getEnv()
  const configs = registerConfig[env]
  try {
    const res = await fetch(configs.senreg)
    return await res.json()
  } catch (er) {
    return {}
  }
}

export const onSwitchNetwork = (value: Net) => {
  storage.set('network', value)
  return window.location.reload()
}
