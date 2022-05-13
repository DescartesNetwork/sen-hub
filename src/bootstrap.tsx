import { render } from 'react-dom'
import React, { Suspense, useCallback, useEffect, useState } from 'react'
import reportWebVitals from 'reportWebVitals'

import {
  fetchRegister,
  getChainId,
  getCluster,
  getEnv,
  getNetwork,
} from './osLoader'

const OsLoading = () => {
  return <div>Loading</div>
}

const OsLoader = () => {
  const [loading, setLoading] = useState(true)

  const loadOsData = useCallback(async () => {
    // Load OS data
    const cluster = await getCluster()
    const register = await fetchRegister()
    // Block _sentre private data
    window._sentre = Object.freeze({
      cluster,
      env: getEnv(),
      net: getNetwork(),
      chainId: getChainId(),
      register,
    })
    Object.defineProperty(window, '_sentre', {
      value: window._sentre,
      writable: false,
    })

    // Start OS
    setLoading(false)
  }, [])
  useEffect(() => {
    loadOsData()
  }, [loadOsData])

  if (loading) return <OsLoading />

  const OsApp = React.lazy(() => import('./osApp'))
  return (
    <Suspense fallback={<OsLoading />}>
      <OsApp />
    </Suspense>
  )
}

render(<OsLoader />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
