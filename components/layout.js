import Footer from '../components/footer'
import Meta from '../components/meta'
import * as React from "react";

class Layout extends React.Component {
  render () {
    return (
      <>
        <Meta />
        <div className="min-h-screen">
          <main>{this.props.children}</main>
        </div>
        <Footer />
      </>
    )
  }
}

export default Layout
