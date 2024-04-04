import React from 'react'

import components from '@/components'

function toSnakeCase(str) {
  return (str[0] + str.substr(1).replace(/([A-Z])/g, '-$1')).toLowerCase()
}

// Import all the components and generate tag stubs for each.
// If you want to expose attributes, you have to override the entry
// with the configuration you need.
const componentTags = Object.fromEntries(
  Object.keys(components).map((key) => [
    toSnakeCase(key),
    { render: components[key] },
  ]),
)

const tags = {
  ...componentTags,
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: components.Callout,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  video: {
    render: components.Video,
    selfClosing: true,
    attributes: {
      src: { type: String },
    },
  },
  'quick-link': {
    selfClosing: true,
    render: components.QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
  tabs: {
    render: components.Tabs,
    attributes: {
      labels: { type: Array },
    },
  },
}

export default tags
