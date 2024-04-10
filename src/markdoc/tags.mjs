import Image from 'next/image'
import Link from 'next/link'
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
  image: {
    render: Image,
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      width: { type: String },
      height: { type: String },
    },
  },
  link: {
    render: Link,
    attributes: {
      href: { type: String }
    },
  },
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
    attributes: {
      src: { type: String },
      alt: { type: String },
      width: { type: String },
      height: { type: String },
      gradient: { type: String },
    },
    render: components.Figure,
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
  'quick-links': {
    selfClosing: true,
    render: components.QuickLinks,
    attributes: {
      title: { type: String },
      description: { type: String }
    },
  },
  tabs: {
    render: components.Tabs,
    attributes: {
      labels: { type: Array },
    },
  },
  basic: {
    render: components.Basic,
    attributes: {
      icon: { type: String },
      title: { type: String },
    },
  },
  icon: {
    render: components.Icon,
    attributes: {
      icon: { type: String },
      class: { type: String },
    },
  }
}

export default tags
