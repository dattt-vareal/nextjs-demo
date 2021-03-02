import PostPreview from '../components/post-preview'
import * as React from "react";

class MoreStories extends React.Component {
  render () {
    return (
      <section>
        <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
          More Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
          {this.props.posts.map((node) => (
            <PostPreview
              key={node.slug}
              title={node.title}
              date={node.date}
            />
          ))}
        </div>
      </section>
    )
  }
}

export default MoreStories