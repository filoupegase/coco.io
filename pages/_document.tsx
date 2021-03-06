import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText, themeClassNames, themeStorageKey } from '../lib/styles/stitches.config';
import { Inter, RobotoMono } from "../lib/styles/fonts";
import ThemeScript from "../_common/components/ThemeScript";

// https://nextjs.org/docs/advanced-features/custom-document
const Document = () => {
  return (
    <Html lang="en" className={ themeClassNames["light"] }>
      <Head>
        {/* inject a small script to set/restore the user's theme ASAP */ }
        <ThemeScript id='restore-theme' { ...{ themeClassNames, themeStorageKey } } />

        {/* preload highest priority fonts defined in ../lib/styles/fonts/ */ }
        { [...Inter.preloads, ...RobotoMono.preloads].map(({ href, type }) => (
          <link key={ href } rel='preload' as='font' { ...{ type, href } } crossOrigin='anonymous' />
        )) }

        <style id="stitches" dangerouslySetInnerHTML={ { __html: getCssText() } } />
      </Head>

      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
};

export default Document;
