import React from 'react';
class List extends React.Component {
  constructor (props) {
    super(props);
    this.state = {numbers: props.numbers}
  }
  render () {
    // let listItems = this.state.numbers.map(number => {
    //   return <li>{number}<br/></li>
    // })
    return (
      <ul>
        {
          this.state.numbers.map(number => {
            return <li>项目：{number}<br/></li>
          })
        }
      </ul>
    );
  }
}
export default List