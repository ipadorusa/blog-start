import path from 'path'
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import * as Config from './config'

const getSchemaOrgJSONLD = ({
  isBlogPost,
  url,
  title,
  image,
  description,
  datePublished,
}) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: config.title,
    },
  ]

  return isBlogPost
    ? [
        ...schemaOrgJSONLD,
        {
          '@context': 'https://ipadorusa.com',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
                image,
              },
            },
          ],
        },
        {
          '@context': 'https://ipadorusa.com',
          '@type': 'BlogPosting',
          url,
          name: title,
          alternateName: config.title,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
          author: {
            '@type': 'Person',
            name: 'Ipadorusa',
          },
          publisher: {
            '@type': 'Organization',
            url: 'https://ipadorusa.com',
            logo: config.logo,
            name: 'Ipadorusa',
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': config.url,
          },
          datePublished,
        },
      ]
    : schemaOrgJSONLD
}

const SEO = ({ postData, postImage, isBlogPost }) => {
  const postMeta = postData || {}

  const title = postMeta.title || config.title
  const description =
    postMeta.description || postData.excerpt || config.description
  const image = `${config.url}${postImage}` || config.image
  const slug = postMeta.slug
  const url = postMeta.slug ? `${config.url}${postMeta.slug}` : config.url
  const datePublished = isBlogPost ? postMeta.date : false

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    isBlogPost,
    url,
    title,
    image,
    description,
    datePublished,
  })

  return (
    <Helmet>
      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  )
}

SEO.propTypes = {
  isBlogPost: PropTypes.bool,
  postData: PropTypes.shape({
    frontmatter: PropTypes.any,
    excerpt: PropTypes.any,
  }).isRequired,
  postImage: PropTypes.string,
}

SEO.defaultProps = {
  isBlogPost: false,
  postImage: null,
}

export default SEO
