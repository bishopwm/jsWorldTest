import React from 'react'
import Script from 'next/script'

export default function Head() {
  return (
    <>
        <Script src="https://miro.com/app/static/sdk/v2/miro.js" />
        <meta content="width=device-width, initial-scale=1" name="viewport"/>
        <link rel="icon" href="/favicon.ico"/>
        <link
            precedence="default"
            rel="stylesheet"
            href="https://unpkg.com/mirotone@^4/dist/styles.css"
        />
        <title>NextJS 13 appDir - Miro</title>
    </>
  )
}