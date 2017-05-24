import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import './styles/main.min.css'

// Выносим создание store в отдельный файл, чтобы добавить возможность HMR
// и для более удобной работы с reducer'ом и усилителями (enhancers).
import configureStore from './store/configureStore'

const store = configureStore()

render(

  // Благодаря компоненту Provider можно получать данные из store с помощью ф-ции connect
  <Provider store={store}> 
    <div className='app'>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)