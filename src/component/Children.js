import React from 'react'
function FancyBorder (props) {
  return (
    <div>
      <div class="left">{props.left}</div>
      <div class="right">{props.right}</div>
    </div>
  )
}
class Children extends React.Component {
  constructor (props) {
    super(props);
    this.state = {}
  }
  componentDidMount () {
    
  }
  render () {
    return (
      <FancyBorder
        left={<span>左边</span>}
        right={<span>右边</span>}
      />
    )
  }
}
export default Children