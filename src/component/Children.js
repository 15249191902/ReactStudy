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