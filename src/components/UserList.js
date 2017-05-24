import React, { PropTypes, Component } from 'react'
import UserData from '../components/UserData'

export default class UserList extends Component {

  render() {
    var {users} = this.props;

    users = users.map( (item) => {
      return (
        <UserData key={item.id} item={item} />
      )
    });
    
    return (
      <div>
        <table className='user-list'>
          <thead>
            <tr className='user-list__row user-list__row_headline' >
              <th className='user-list__item user-list__item_headline'>Image</th>
              <th className='user-list__item user-list__item_headline'>Name</th>
              <th className='user-list__item user-list__item_headline'>Age</th>
              <th className='user-list__item user-list__item_headline'>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users}
          </tbody>
        </table>
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.array,
  index: PropTypes.number,
  onClick: PropTypes.func
}