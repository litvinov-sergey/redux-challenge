import React, { Component } from 'react'
import { changeSort } from '../actions/ListOfUsersActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Toolbar extends Component {

  sortBy(e) {
    this.props.changeSort(e.target.name, this.props.currentSortDirection, this.props.selectedUsers);
  }

  render() {

    return (  
      <div className='toolbar'>
        <button 
          className='toolbar__btn' 
          name='name'
          onClick={::this.sortBy}
        >
          Sort by name
        </button>
        <button 
          className='toolbar__btn'
          name='age'
          onClick={::this.sortBy}
        >
          Sort by age
        </button>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    selectedUsers: state.ListOfUsers.selectedUsers,
    currentSortType: state.ListOfUsers.currentSortType,
    currentSortDirection: state.ListOfUsers.currentSortDirection
  }
}

function mapDispatchToProps(dispatch) {
  return { changeSort: bindActionCreators(changeSort, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)