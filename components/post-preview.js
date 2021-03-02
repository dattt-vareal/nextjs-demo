import Date from '../components/date'
import * as React from "react";

class PostPreview extends React.Component {
  render() {
    return (
      <div>
        <h3 className="text-3xl mb-3 leading-snug">
          {this.props.title}
        </h3>
        <div className="text-lg mb-4">
          <Date dateString={this.props.date} />
        </div>
      </div>
    )
  }
}

export default PostPreview