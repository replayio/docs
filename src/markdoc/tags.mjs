import Image from 'next/image'
import Link from 'next/link'
import components from '@/components'
import { Accordion } from '../components/Accordian'

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
      href: { type: String },
    },
  },
  callout: {
    attributes: {
      title: { type: String },
      showIcon: {
        type: Boolean,
      },
      href: { type: String },
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
      ripple: { type: Boolean },
      showRadius: { type: Boolean },
    },
    render: components.Figure,
  },
  video: {
    render: components.Video,
    selfClosing: true,
    attributes: {
      src: { type: String },
      controls: { type: Boolean },
      autoplay: { type: Boolean },
      muted: { type: Boolean },
      loop: { type: Boolean },
      thumbnailTime: { type: Number },
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
      mini: { type: Boolean },
    },
  },
  'quick-links': {
    selfClosing: true,
    render: components.QuickLinks,
    attributes: {
      title: { type: String },
      description: { type: String },
      mini: { type: Boolean },
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
  },
  twocolumns: {
    render: components.TwoColumns,
  },
  accordion: {
    render: components.Accordion,
  },
  'accordion-item': {
    render: components.AccordionItem,
    attributes: {
      title: { type: String },
    },
  },
  snapshotsvsreplay: {
    render: components.SnapshotsVsReplay,
  },
}

export default tags
