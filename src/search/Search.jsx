import React, {Component} from 'react';
import axios from "axios";

export default class xxx extends Component {
  
  keyWordRef = React.createRef()
  
  searchHandler = () => {
    let {updateAppState} = this.props
    let keyword = this.keyWordRef.current.value.trim()
    updateAppState({
      isFirst: false,
      isLoading: true,
      userData: [],
      errMsg: ''
    })
    let url = `https://api.github.com/search/users?q=${keyword}`
    axios.get(url)
    .then((result) => {
      let userData = result.data.items
      updateAppState({
        isFirst: false,
        isLoading: false,
        userData: userData,
        errMsg: ''
      })
    })
    .catch((err) => {
      updateAppState({
        isFirst: false,
        isLoading: false,
        users: [],
        errMsg: err.toString()
      })
    })
  }
  
  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input type="text" placeholder="enter the name you search" ref={this.keyWordRef}/>
            <button onClick={this.searchHandler}>Search</button>
          </div>
        </section>
      </div>
    )
  }
}
