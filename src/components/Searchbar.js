import React, { Component } from 'react'
import { changeSearchbar } from '../actions/ListOfUsersActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Searchbar extends Component {
  
  handleChange(e) {
    this.props.changeSearchbar(this.props.listOfUsers, e.target.value);
  }

  render() {
    return (  
      <input 
        type='text' 
        className='search' 
        placeholder='Search people by name...'
        onChange={::this.handleChange}
        value={this.props.searchQuery}
      />
    );
  }
}

function mapStateToProps (state) {
  return {
    listOfUsers: state.ListOfUsers.listOfUsers,
    searchQuery: state.ListOfUsers.searchQuery
  }
}

function mapDispatchToProps(dispatch) {
  return { changeSearchbar: bindActionCreators(changeSearchbar, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar)