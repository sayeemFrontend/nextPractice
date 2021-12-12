import "bootstrap/dist/css/bootstrap.min.css"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../comps/Layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {


  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
