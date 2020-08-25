import React, {Component} from 'react';
import Item from '../item/Item'

export default class List extends Component {
  
  render() {
    let {isFirst, isLoading, userData, errMsg} = this.props.appState
    if (isFirst) {
      return <h2>欢迎搜索</h2>
    } else if (isLoading) {
      return <h2>Loading...</h2>
    } else if (errMsg) {
      return <h2>{errMsg}</h2>
    } else {
      return (
        <div className="row">
          {
            userData.map((item) => {
              return <Item key={item.login} data={item}/>
            })
          }
        </div>
      )
    }
  }
}
