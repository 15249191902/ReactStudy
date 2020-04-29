import React from 'react'
// import axios from 'axios'
import {getUserData} from '../api/userApi/user.js'
function FancyBorder (props) {
  return (
    <div>
      <div className="left">{props.left}</div>
      <div className="right">{props.right}</div>
      {
        props.list.map(item => {
          return <div>{item.name}</div>
        })
      }
    </div>
  )
}
class Children extends React.Component {
  constructor (props) {
    super(props);
    this.state = {list: []}
  }
  componentDidMount () {
    getUserData().then( res => {
      console.log(res);
      const list = res.data;
      this.setState({
        list: list
      })
    })
    // axios({
    //   method: 'get',
    //   url: '/users/getUser',
    // }).then(res => {
    //   console.log(res);
    // })
    // fetch("https://api.example.com/items")
    // .then(res => res.json())
    // .then(
    //   (result) => {
    //     console.log(result)
    //   },
    //   // 注意：需要在此处处理错误
    //   // 而不是使用 catch() 去捕获错误
    //   // 因为使用 catch 去捕获异常会掩盖掉组件本身可能产生的 bug
    //   (error) => {
    //   }
    // )
  }
  render () {
    return (
      <FancyBorder
        list= {this.state.list}
        left={<span>左边</span>}
        right={<span>右边</span>}
      />
    )
  }
}
export default Children