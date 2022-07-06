import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Hero from './Hero'
import TernaryPlot from './TernaryPlot'
import CircularVis from './CircularVis'
import Search from './Search'

const components = {
  Head,
  Hero,
  Link,
  Search,
  svg: props => <Fragment {...props} />,
  TernaryPlot,
  CircularVis,
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
