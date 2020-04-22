import React from 'react'
class Case extends React.Component {
  constructor (props) {
    super(props)
    this.state = {isToggleOn: true}
    this.handleClick =  this.handleClick.bind(this);
  }
  handleClick () {
    console.log(arguments)
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render () {
    let arr = [1,2,3,4];
    const listItems = arr.map(number => <p>{number}</p>)
    return (
      <div>
        {listItems}
      </div>
      // <button type="button" onClick={this.handleClick}>
      //   {this.state.isToggleOn ? 'ON' : 'OFF'}
      // </button>
    )
  }
}
export default Case