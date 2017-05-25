import React, { PropTypes, Component } from 'react'

export default class ActiveUser extends Component {

  render() {
    const {user} = this.props
    // console.log('ActiveUser', this.props)

    return (
      <aside className='user-detail'>
        {
          user.image ? 
            <img className='user-detail__image' src={`images/${user.image}.svg`} />
            : ''
        }
        <h2 className='user-detail__name'> {user.name} </h2>
        <table className='user-detail__table'>
          <tbody>
            <tr className='user-detail__row'>
              <td>Age:</td>
              <td>{user.age}</td>
            </tr>
            <tr className='user-detail__row'>
              <td>Phone:</td>
              <td>{user.phone}</td>
            </tr>
            <tr className='user-detail__row'>
              <td>Favorite animal:</td>
              <td>{user.image}</td>
            </tr>
          </tbody>
        </table>            
        <div className='user-detail__phrase'> 
          <strong>Favorite phrase:</strong> {user.phrase} 
        </div>
      </aside>
    );
  }
}

ActiveUser.propTypes = {
  user: PropTypes.object.isRequired
};