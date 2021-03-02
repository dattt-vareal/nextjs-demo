import * as React from "react";

class Date extends React.Component {
  render () {
    return <time dateTime={this.props.dateString}>{this.props.dateString}</time>
  }
}

export default Date