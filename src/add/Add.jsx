import React, {Component} from 'react';
import * as uuid from 'uuid';

export default class Add extends Component {
  
  contentRef = React.createRef()
  
  add = () => {
    
    let {updateState} = this.props
    let user_name = this.input.value.trim()
    let user_comment = this.contentRef.current.value.trim()
    
    if (user_name === '' || user_comment === '') {
      alert('不允许输入为空')
      return
    }
    
    //新建一个对象,去存储新的数据
    //   {userId:'001', userName:'Tom', content:'hello world1'},
    let obj = {
      userId: uuid.v4(),
      userName: user_name,
      content: user_comment
    }
    updateState(obj)
    this.input.value =''
    this.contentRef.current.value =''
  }
  
  render() {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" ref={(input) => {
              this.input = input
            }}/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" ref={this.contentRef}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.add}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}