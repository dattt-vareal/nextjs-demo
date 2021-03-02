import Head from 'next/head'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import { CMS_NAME } from '../lib/constants'
import * as React from "react";

class Page extends React.Component {
  static async getInitialProps() {
    return {
      morePosts: [
        {slug: 1, title: "Post 1", date: "01/03/2020"},
        {slug: 2, title: "Post 2", date: "02/03/2020"},
        {slug: 3, title: "Post 3", date: "03/03/2020"},
        {slug: 4, title: "Post 4", date: "04/03/2020"},
      ]
    }
  }

  render() {
    return (
      <>
        <Layout>
          <Head>
            <title>Next.js Blog Example with {CMS_NAME}</title>
          </Head>
          <Container>
            {this.props.morePosts.length > 0 && <MoreStories posts={this.props.morePosts} />}
          </Container>
        </Layout>
      </>
    )
  }
}

export default Page
