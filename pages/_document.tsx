import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const NextScrip = NextScript as any
  const H = Head as any
  return (
    <Html lang="en">
    <H />
    <body>
       <Main />
       <NextScrip />
     </body>
    </Html>
   
  )
}
