/*
	Действия — структуры, которые передают данные из приложения в хранилище. 
	Они являются единственными источниками информации для хранилища. 
	Они отправляются в хранилище с помощью метода store.dispatch().

	Действия описывают что что-то совершилось,
	а редюсеры определяют, как в ответ изменится состояние приложения.
*/

import axios from 'axios'

// Типы действий:
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


// Генераторы действия:


export function changeSort (currentSortType, currentSortDirection, selectedUsers) {

  currentSortDirection = !currentSortDirection;

  let sortUsers = [...selectedUsers]

  console.log('sortUsers', sortUsers)

  sortUsers.sort( 
    (a, b) => {

      let c, d
      if (currentSortDirection) {
        c = a[currentSortType],
        d = b[currentSortType];        
      } else {
        c = b[currentSortType],
        d = a[currentSortType];          
      }

      if( c < d ){
        return -1;
      }else if( c > d ){
        return 1;
      }

      return 0;
    }
  ); 

  return (dispatch) => {

    dispatch({
      type: CHANGE_SORT_TYPE,
      payload: currentSortType
    })    
    
    dispatch({
      type: CHANGE_SORT_DIRECTION,
      payload: currentSortDirection
    })  

    dispatch({
      type: CHANGE_SELECTED_USERS,
      payload: sortUsers
    }) 

    dispatch({
      type: CHANGE_ACTIVE_USER,
      payload: sortUsers[0].id
    })             
  }    
} 


export function addNewUser(listOfUsers, newUser) {

  listOfUsers.push(newUser);
  let selectedUsers = [...listOfUsers];

  return (dispatch) => {

    dispatch({
      type: CHANGE_SEARCHBAR,
      payload: ''
    })    
    
    dispatch({
      type: ADD_USER,
      payload: listOfUsers
    })

    dispatch({
      type: CHANGE_SELECTED_USERS,
      payload: selectedUsers
    })      
  }   
}

export function changeActiveUser(id) {

  return (dispatch) => {
    dispatch({
      type: CHANGE_ACTIVE_USER,
      payload: id
    }) 
  }   
}

export function changeSearchbar(listOfUsers, searchQuery) {

  let userIndex = - 1;
  let selectedUsers = [];

  listOfUsers.map( (item) => {
    if (searchQuery == '' || item.name.toLowerCase().indexOf(searchQuery.toLowerCase()) + 1) {
      if (item && !(userIndex + 1) ) {
        userIndex = item.id; 
      }
      selectedUsers.push(item);
    }
  });

  console.log('selectedUsers = ', selectedUsers)

  userIndex == -1 ? 0 : userIndex  


  return (dispatch) => {
    
    dispatch({
      type: CHANGE_SEARCHBAR,
      payload: searchQuery
    })

    dispatch({
      type: CHANGE_SELECTED_USERS,
      payload: selectedUsers
    }) 

    dispatch({
      type: CHANGE_ACTIVE_USER,
      payload: userIndex
    }) 
  } 
} 

export function loadListOfUsers(json) {

  return (dispatch) => {

    dispatch({
      // Действие
      type: LOADING_JSON,
      payload: []
    })    

    axios.get(json)
      .then((response) => {

        dispatch({
          type: LOAD_JSON_SUCCESS,
          payload: response.data
        })

      })
      .catch(function (error) {
        dispatch({
          type: LOAD_JSON_ERROR,
          payload: error
        })
      });
  }
}
