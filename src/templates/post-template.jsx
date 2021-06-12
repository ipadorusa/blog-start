import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostTemplateDetails from '../components/PostTemplateDetails'

class PostTemplate extends React.Component {
  render() {
    const { title, subtitle, author } = this.props.data.site.siteMetadata
    const post = this.props.data.markdownRemark
    const {
      title: postTitle,
      description: postDescription,
      tags: keywords,
    } = post.frontmatter
    const description = postDescription !== null ? postDescription : subtitle

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${postTitle} - ${title}`}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={postTitle} />
            <meta property="og:description" content={description} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={`${postTitle} - ${title}`} />
            <meta name="twitter:creator" content={author.twitter} />
            <meta name="twitter:description" content={description} />
          </Helmet>
          <PostTemplateDetails {...this.props} />
        </div>
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        author {
          name
          twitter
        }
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        tagSlugs
        slug
      }
      frontmatter {
        title
        tags
        date
        description
      }
    }
  }
`
