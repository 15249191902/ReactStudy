import React from 'react'
function Title (props) {
  if (!props.warn) {
    return null;
  }
  return (
    <div className="warning">Warning!</div>
  )
}
class Warn extends React.Component {
  constructor (props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick () {
    this.setState(state => ({
      showWarning: !state.showWarning
    }))
  }
  render () {
    return (
      <div>
        <Title warn={this.state.showWarning}></Title>
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}
export default Warn