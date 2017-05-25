import {
  LOADING_JSON,
  LOAD_JSON_SUCCESS,
  LOAD_JSON_ERROR,
  CHANGE_ACTIVE_USER,
  CHANGE_SEARCHBAR,
  CHANGE_SORT_TYPE,
  CHANGE_SORT_DIRECTION,
  CHANGE_SELECTED_USERS,
  ADD_USER
} from '../constants/ListOfUsers'


const initialState = {
  listOfUsers: [],
  selectedUsers: [],
  userIndex: 0,
  searchQuery: '',
  currentSortType: '',
  currentSortDirection: false
}

// ...sort = () => {}

export default function listOfUsers(state = initialState, action) {
   // Аргумент action - стандартные аргументы redux reducer'а. 
   // С ним можно обрабатывать различные действия по их типу, попадая в нужный case

  switch (action.type) {

    case LOADING_JSON:
      return {...state, listOfUsers: action.payload}

    case LOAD_JSON_SUCCESS: 
      return {...state, listOfUsers: action.payload, selectedUsers: action.payload}

    case LOAD_JSON_ERROR:
      return {...state, error: action.payload}

    case CHANGE_SEARCHBAR:
      return {...state, searchQuery: action.payload}

    case CHANGE_SORT_TYPE:
      // sort()
      return {...state, currentSortType: action.payload}
    
    case CHANGE_SORT_DIRECTION:
      return {...state, currentSortDirection: action.payload}

    case CHANGE_SELECTED_USERS:
      return {...state, selectedUsers: action.payload} 
    
    case CHANGE_ACTIVE_USER:
      return {...state, userIndex: action.payload}

    case ADD_USER:
      return {...state, listOfUsers: action.payload}

    default:
      return state;
  }

}
