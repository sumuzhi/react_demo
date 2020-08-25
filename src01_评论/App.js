import React, {Component} from 'react';
import Add from './add/Add'
import List from './list/List'

export default class App extends Component {
  
  state = {
    comments: [
      {userId: '001', userName: 'Tom', content: 'hello world1'},
      {userId: '002', userName: 'Jerry', content: 'hello world2'},
      {userId: '003', userName: 'Daisy', content: 'hello world3'}
    ]
  }
  
  //  删除数据时,要根据state中的数据进行重新渲染,子代无法操作父代的state,所以删除操作方法定义在父类中,传递给子类
  deleteState = (userId) => {
    let comments = [...this.state.comments]
    
    comments.forEach((item, index) => {
      if (item.userId === userId) {
        comments.splice(index, 1)
      }
    })
    this.setState({comments});
    
  };
  
  updateState = (commentItem) => {
    let comments = [...this.state.comments]
    comments.unshift(commentItem)
    this.setState({comments})
  }
  
  render() {
    let {comments} = this.state
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add updateState={this.updateState}/>
          <List comments={comments} deleteState={this.deleteState}/>
        </div>
      </div>
    )
  }
  
}
