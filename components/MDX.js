import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Hero from './Hero'

const components = {
  Head,
  Hero,
  Link,
  svg: props => <Fragment {...props} />,
  wrapper: ({ layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  }
}

export default function MdxPage({ children, ...rest }) {
  const { Component, frontMatter } = children;
  return (
    <Component
      layout={frontMatter.layout}
      components={components}
      frontMatter={frontMatter}
      {...rest}
    />
  )
}
