import React, {Component} from 'react';
import Search from './search/Search'
import List from './list/List'

export default class App extends Component {
  
  state = {
    isFirst: true,
    isLoading: false,
    userData: [],
    errMsg: ''
  }
  
  updateAppState = ({isFirst, isLoading, userData, errMsg}) => {
    this.setState({
      isFirst,
      isLoading,
      userData,
      errMsg
    })
  }
  
  render() {
    return (
      <div>
        <div className="container">
          <Search updateAppState={this.updateAppState}/>
          <List appState={this.state}/>
        </div>
      </div>
    )
  }
}