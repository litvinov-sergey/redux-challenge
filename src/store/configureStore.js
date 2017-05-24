/*
Store хранит состояние приложения. 
Единственный путь изменить store - это отправить действие (dispatch action).

Store - это не класс. Это обычный объект с несколькими методами, а именно:
  getState()
  dispatch(action)
  subscribe(listener)
  replaceReducer(nextReducer)
*/

import { createStore, applyMiddleware } from 'redux'

// корневой редьюсер (rootReducer) отражает все состояние нашего приложения
import rootReducer from '../reducers'

// подключаем усилитель Middleware-enhancer
// import { ping } from './enhancers/ping'
import { createLogger } from 'redux-logger'

import thunk from 'redux-thunk'

export default function configureStore(initialState) {
  const logger = createLogger()

  // метод createStore принимает один обязательный аргумент (функцию reducer) 
  // и два необязательных: начальное состояние и усилители (enhancers)
  const store = createStore(
    rootReducer, 
    initialState,
    // Цепочка усилителей:
    // applyMiddleware(ping)
    applyMiddleware(thunk, logger)
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}