import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <body className="min-h-[100%] h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
