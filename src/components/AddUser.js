import React, { Component } from 'react'
import { addNewUser } from '../actions/ListOfUsersActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class AddUser extends Component {
  
  handleClick() {


    const newUser = {
      id: this.props.listOfUsers.length,
      name: this.refs['name'].value,
      age:  parseInt(this.refs['age'].value),
      phone:  this.refs['phone'].value,
      image:  this.refs['image'].value,
      phrase:  this.refs['phrase'].value
    }

    this.props.addNewUser(this.props.listOfUsers, newUser);
  }

  render() {
    return ( 
      <div className='form'> 
        <input 
          type='text' 
          className='search'
          ref='image' 
          placeholder='Image'
          defaultValue='dog'
        />   
        <br /><input 
          type='text' 
          className='search'
          ref='name' 
          placeholder='Name'
          defaultValue='John Doe'
        />      
        <br /><input 
          type='text' 
          className='search' 
          ref='age' 
          placeholder='Age'
          defaultValue='100'
        />      
        <br /><input 
          type='text' 
          className='search' 
          ref='phone' 
          placeholder='Phone'
          defaultValue='(976) 801-1523'
        />      
        <br /><input 
          type='text' 
          className='search' 
          ref='phrase' 
          placeholder='Phrase'
          defaultValue='Some phrase for a new user'
        />
        <p>
          <button className='toolbar__btn' onClick={::this.handleClick} >Add new user</button>
        </p>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    listOfUsers: state.ListOfUsers.listOfUsers
  }
}

function mapDispatchToProps(dispatch) {
  return { addNewUser: bindActionCreators(addNewUser, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)