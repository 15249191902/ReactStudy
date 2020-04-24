import React from 'react'
class Select extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: 'coconut'}
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this)
  }
  change (e) {
    this.setState({value: e.target.value})
  }
  submit (e) {
    alert("你喜欢的风味是：" + this.state.value)
    e.preventDefault();
  }
  render () {
    return (
      <form onSubmit={this.submit}>
        <label>
          选择你喜欢的风味：
          <select value={this.state.value} onChange={this.change}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">橙子</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type="submit" value="提交"/>
      </form>
    )
  }
}
export default Select