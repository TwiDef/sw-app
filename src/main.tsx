import { createRoot } from 'react-dom/client'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import { app_theme } from './app_theme'
import App from './App'

import './index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ConfigProvider theme={app_theme}>
      <App />
    </ConfigProvider>
  </Provider>
)

