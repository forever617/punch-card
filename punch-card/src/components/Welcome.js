import React from "react";

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}