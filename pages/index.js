import Head from 'next/head'
import React from 'react'

export default function index() {
  return (
    <>
    <Head>
      <title>Coming Soon</title>
      <meta name="description" content="Coming Soon" />
      <link rel="icon" href="/favicon.ico" />
      

    </Head>
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'

    }}>
      <h1
        style={{
          fontSize: '10rem',
          color: 'white',
          textShadow: '0 0 10px white'
        }}
      >Coming Soon</h1>
      </div>
      </>
  )
}
