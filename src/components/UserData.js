import React, { PropTypes, Component } from 'react'
import {changeActiveUser} from '../actions/ListOfUsersActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class UserData extends Component {

  handleClick() {
    this.props.changeActiveUser(this.props.item.id);
  }  

  render() {
    const { item } = this.props

    return (  
      <tr 
        className='user-list__row user-list__row_item' 
        onClick={::this.handleClick}
      >
        <td className='user-list__item user-list__item_image'>
          <img className='img' src={`images/${item.image}.svg`} />
        </td>
        <td className='user-list__item user-list__item_name'> {item.name} </td>
        <td className='user-list__item user-list__item_age'> {item.age} </td>
        <td className='user-list__item user-list__item_phone'> {item.phone} </td>
      </tr>
    );
  }
  // ::this.onYearBtnClick === this.onYearBtnClick.bind(this)
  // Использование :: - возможность ES7, доступная в babel с настройкой stage=0
}

UserData.propTypes = {
  item: PropTypes.object.isRequired
};

function mapStateToProps () {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
  // Вспомогательная ф-ция из redux bindActionCreators позволяет вызывать setYear как:
  // store.dispatch({
  //     type: 'SET_YEAR'
  //     payload: 2016
  // })
    changeActiveUser: bindActionCreators(changeActiveUser, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserData)