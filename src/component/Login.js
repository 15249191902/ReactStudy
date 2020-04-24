import React from 'react'
function LogoutButton (props) {
  return (
    <button onClick={props.onClick}>logout</button>
  )
}
function LoginButton (props) {
  return (
    <button onClick={props.onClick}>login</button>
  )
}
class LoginControl extends React.Component {
  constructor (props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false}
  }
  handleLoginClick () {
    this.setState({isLoggedIn: true})
  }
  handleLogoutClick () {
    this.setState({isLoggedIn: false})
  }
  render () {
    const isLoggedIn = this.state.isLoggedIn;
    let button
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }
    return (
      // <div>
      //   <h1>hello world</h1>
      //   
      // </div>
      <div>
        {button}
        The user is <b>{isLoggedIn ? 'currently' : 'not'}</b>
      </div>
    )
  }
}
export default LoginControl