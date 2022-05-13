import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { RootContext } from '@senhub/context'

import { ConfigProvider } from 'antd'
import View from 'os/view'

import store from 'os/store'

const OS = () => {
  return (
    <Provider context={RootContext} store={store}>
      <BrowserRouter>
        <ConfigProvider prefixCls={'sentre'}>
          <View />
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default OS
