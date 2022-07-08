import { Fragment } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import Hero from './Hero'
import Search from './Search'

const TernaryPlot = dynamic(() => import('./TernaryPlot'))
const CircularVis = dynamic(() => import('./CircularVis'))

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
