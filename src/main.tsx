import { createRoot } from 'react-dom/client'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import App from './App'

import './index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
