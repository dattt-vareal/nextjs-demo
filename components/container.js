import * as React from "react";

class Container extends React.Component {
  render () {
    return <div className="container mx-auto px-5">{this.props.children}</div>
  }
}

export default Container