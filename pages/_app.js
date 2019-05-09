import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'
export default class Mergeamelo extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>Mergeamelo | Blog de programacion</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
          <link rel="stylesheet" href="/static/css/github.css"/>
          
          <style>
            {`
              html, body {
                margin: 0px;
                font-family: 'Roboto';
              }
              .container {
                display: flex;
                justify-content: center;
                width: 100%;
              }  
              .contentContainer {
                padding: 20px;
                width: 100%;
              }

              @media (min-width: 768px) {
                .contentContainer {
                  width: 740px;
                  max-width: 740px;
                }
              }
            `}
          </style>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-139929853-1"></script>
          <script>
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-139929853-1');`}
          </script>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}