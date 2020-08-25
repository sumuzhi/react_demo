import React, {Component} from 'react';
import './index.css'

export default class xxx extends Component {
  render() {
    // console.log(this.props.data)
    let {login, avatar_url, html_url} = this.props.data
    return (
      <div className="card">
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          <img src={avatar_url} style={{width: '100px'}} alt="资源加载失败"/>
        </a>
        <p className="card-text">{login}</p>
      </div>
    )
  }
}
