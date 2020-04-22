import React from 'react';
// function Demo (props) {
// return <h1>hello， {props.name}</h1>
// }
class Demo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {date: new Date()}
  }
  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
  componentWillUnmount () {
    clearInterval(this.timerID)
  }
  tick () {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return <h1>It is {this.state.date.toLocaleTimeString()}</h1>
  }
}
export default Demo;