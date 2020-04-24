import React from 'react'
class Check extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    }
    this.change = this.change.bind(this)
  }
  change (e) {
    const target = e.target;
    const value = target.name === "isGoing" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }
  render () {
    return (
      <form>
      <label>
        参与：
        <input 
          name="isGoing"
          type="checkbox"
          checked={this.state.isGoing}
          onChange={this.change}
        />
      </label>
      <br />
      <label>
        来宾人数：
        <input 
          name="numberOfGuests"
          type="number"
          value={this.state.numberOfGuests}
          onChange={this.change}
        />
      </label>
    </form>
    )
  }
}
export default Check;