// Собираем все редьюсеры в один составной редьюсер 
import { combineReducers } from 'redux'

// import page from './page'
import ListOfUsers from './ListOfUsers'

export default combineReducers({
  // page,
  ListOfUsers
})