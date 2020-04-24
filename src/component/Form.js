import React from 'react'
class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: ''};
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }
  change(e) {
    this.setState({value: e.target.value})
  }
  submit (e) {
    alert("提交value:" + this.state.value)
    e.preventDefault()
  }
  render () {
    return (
      <form  onSubmit={this.submit}>
        <label>
          名字：
          <input type="text" value={this.state.value} onChange={this.change} />
        </label>
        <input type="submit"  value="提交"/>
      </form>
    )
  }
}
export default Form;