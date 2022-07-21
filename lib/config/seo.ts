import type { StaticImageData } from 'next/image';
import type { DefaultSeoProps, SocialProfileJsonLdProps, ArticleJsonLdProps } from 'next-seo';

import * as config from ".";

import faviconIco from "../../public/static/favicons/favicon.ico";
import faviconPng from "../../public/static/favicons/favicon.png";
import appleTouchIconPng from "../../public/static/favicons/apple-touch-icon.png";
import chrome512Png from "../../public/static/favicons/android-chrome-512x512.png";
import chrome192Png from "../../public/static/favicons/android-chrome-192x192.png";
import maskable512Png from "../../public/static/favicons/maskable-512x512.png";
import maskable192Png from "../../public/static/favicons/maskable-192x192.png";
import meJpeg from "../../public/static/images/me.jpeg";


// https://github.com/garmeeh/next-seo#default-seo-configuration
export const defaultSeo: DefaultSeoProps = {
  defaultTitle: `${ config.siteName } – ${ config.shortDescription }`,
  titleTemplate: `%s – ${ config.siteName }`,
  description: config.longDescription,
  openGraph: {
    site_name: config.siteName,
    title: `${ config.siteName } – ${ config.shortDescription }`,
    locale: config.siteLocale?.replace("-", "_"),
    type: "website",
    images: [
      {
        url: `${ config.baseUrl }${ meJpeg.src }`,
        alt: `${ config.siteName } – ${ config.shortDescription }`,
      },
    ],
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "author",
      content: config.authorName,
    },
    {
      name: "google-site-verification",
      content: config.verifyGoogle,
    },
    {
      name: "msvalidate.01",
      content: config.verifyBing,
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: faviconIco.src,
    },
    {
      rel: "icon",
      href: faviconPng.src,
      type: "image/png",
    },
    {
      rel: "apple-touch-icon",
      href: appleTouchIconPng.src,
      sizes: `${ appleTouchIconPng.width }x${ appleTouchIconPng.height }`,
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "alternate",
      href: "/feed.xml",
      type: "application/rss+xml",
      // @ts-ignore
      title: `${ config.siteName } (RSS)`,
    },
    {
      rel: "alternate",
      href: "/feed.atom",
      type: "application/atom+xml",
      // @ts-ignore
      title: `${ config.siteName } (Atom)`,
    },
    {
      rel: "webmention",
      href: `https://webmention.io/${ config.webmentionId }/webmention`,
    },
    {
      rel: "pingback",
      href: `https://webmention.io/${ config.webmentionId }/xmlrpc`,
    },
    {
      rel: "humans",
      href: "/humans.txt",
    },
    {
      rel: "pgpkey",
      href: "/pubkey.asc",
      type: "application/pgp-keys",
    },
  ],
};

// https://github.com/garmeeh/next-seo#social-profile
export const socialProfileJsonLd: SocialProfileJsonLdProps = {
  type: "Person",
  name: config.authorName,
  url: `${ config.baseUrl }/`,
  sameAs: [
    `${ config.baseUrl }`
  ]
};

// Just the basic items applicable to all notes, extended by pages/notes/[slug].tsx
// https://github.com/garmeeh/next-seo#article-1
export const articleJsonLd: Pick<ArticleJsonLdProps, "authorName" | "publisherName" | "publisherLogo"> = {
  authorName: [config.authorName],
  publisherName: config.siteName,
  publisherLogo: `${ config.baseUrl }${ meJpeg.src }`
};

export const favicons: Record<string, StaticImageData> = {
  faviconIco,
  faviconPng,
  appleTouchIconPng,
  chrome512Png,
  chrome192Png,
  maskable512Png,
  maskable192Png,
  meJpeg
};
