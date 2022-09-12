import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Hero from './Hero'
import CustomLink from './Link';
import { Pre } from './Pre';
import ProfileSearch from './ProfileSearch'
import siteConfig from '../config/siteConfig';

import TernaryPlot from './TernaryPlot'
import CircularVis from './CircularVis'

const components = {
  Head,
  Hero,
  a: CustomLink,
  pre: Pre,
  ProfileSearch,
  TernaryPlot,
  CircularVis,
  GlobalTest: ({children}) => <h1 className="bg-red-300">{children}</h1>,
  wrapper: ({ layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default;
    return <Layout {...rest} />;
  }
};

export default function MdxPage({ children, ...rest }) {
  const { Component, frontMatter } = children;
  const websiteUrl = siteConfig.authorUrl.replace(/\/+$/, '');
  const frontMatterImage = frontMatter.image && (frontMatter.image || frontMatter.image.url)
  const seoImageUrl = frontMatterImage?.startsWith('http')
    ? frontMatter.image
    : websiteUrl + frontMatter.image;

  return (
    <>
      <NextSeo
        title={frontMatter.title}
        openGraph={{
          title: frontMatter.title,
          description: frontMatter.description,
          images: frontMatter.image
            ? [
                {
                  url: seoImageUrl,
                  width: 1200,
                  height: 627,
                  alt: frontMatter.title
                }
              ]
            : siteConfig?.nextSeo?.openGraph?.images || []
        }}
      />
      <Component
        layout={frontMatter.layout}
        components={components}
        frontMatter={frontMatter}
        {...rest}
      />
    </>
  );
}
