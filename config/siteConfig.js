const defaultConfig = {
  title: 'Flowershow',
  description: 'Publish your digital garden', 
  author: 'Flowershow',
  // logo image
  authorLogo: '',
  // url to author
  authorUrl: 'https://flowershow.app/',
  // Google analytics key e.g. G-XXXX
  analytics: '',
  // content source directory for markdown files
  content: process.env.FLOWERSHOW_CONTENT || 'content',
  // Theme
  navLinks: [
    { href: '/about', name: 'About' },
    { href: '/contribute', name: 'Contribute' },
    { href: '/glossary/', name: 'Glossary' },
    { href: 'https://lifeitself.us/ecosystem/snapshot-2020/', name: '2020 Report' },
    { href: 'https://lifeitself.us/contact', name: 'Contact' },
    { href: 'https://lifeitself.us/ecosystem/', name: 'A Project of Life Itself & Collaborators' },
  ],
  // optional additional nextSeo content set on each page
  // see https://github.com/garmeeh/next-seo
//  nextSeo: {
//    openGraph: {
//      images: [
//        {
//          url: 'https://image.url/...',
//          alt: '',
//          width: 1200,
//          height: 627,
//          type: 'image/png',
//        }
//      ]
//    }
//  }
}

import userConfig from '../content/userConfig.js'

const siteConfig = Object.assign({}, defaultConfig, userConfig)

module.exports = siteConfig
