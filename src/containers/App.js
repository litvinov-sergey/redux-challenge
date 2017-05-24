import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AddUser from '../components/AddUser'
import Searchbar from '../components/Searchbar'
import Toolbar from '../components/Toolbar'
import ActiveUser from '../components/ActiveUser'
import UserList from '../components/UserList'

import * as listOfUsersActions from '../actions/ListOfUsersActions'

class App extends Component {

  constructor(props) {
    super(props);
    this.isDataLoaded = false;
  }

  componentDidMount() {
    const { loadListOfUsers } = this.props.listOfUsersActions
    loadListOfUsers('data.json');
  }

  componentWillUpdate(nextProps) {
    console.log('nextProps', nextProps);
    this.isDataLoaded = nextProps.listOfUsers.length || false;
  }

  render() {
    const { listOfUsers } = this.props
    console.log('isDataLoaded', this.isDataLoaded);
    
    return (
      <div>
        <div className='bar'>
          <h2>User addition form</h2>
          <AddUser />
        </div>
        <div className='bar'>
        <h2>List of users</h2>
          <Searchbar />
          <Toolbar />
        </div>
        <div className='content'>
        { this.isDataLoaded && <ActiveUser user={listOfUsers[this.props.userIndex]} /> }
        { this.isDataLoaded && <UserList users={this.props.selectedUsers} /> }
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    listOfUsers: state.ListOfUsers.listOfUsers,
    selectedUsers: state.ListOfUsers.selectedUsers,

    userIndex: state.ListOfUsers.userIndex,
    
    searchQuery: state.ListOfUsers.searchQuery,
    currentSortType: state.ListOfUsers.currentSortType,
    currentSortDirection: state.ListOfUsers.currentSortDirection
  }
}

function mapDispatchToProps(dispatch) {
  return {
  // bindActionCreators позволяет вызывать action как:
	//   store.dispatch({
	//     type: 'ACTION'
	//     payload: data
	//   })
    listOfUsersActions: bindActionCreators(listOfUsersActions, dispatch)
  }
}

// Ф-ция connect помогает получить данные из store в качестве props для компонента <App />
// Назначение ф-ции connect вытекает из названия: "подключи React компонент к Redux store".
export default connect(mapStateToProps, mapDispatchToProps)(App)
// Результат работы ф-ции connect - новый присоединенный компонент, 
// который оборачивает переданный компонент.
// У нас был компонент <App />, а на выходе получился <Connected(App)>. 
// В этом нетрудно убедиться, если взглянуть в react dev tools.
