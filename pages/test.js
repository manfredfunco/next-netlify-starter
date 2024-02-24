import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import TestComponent from '@components/TestComponent'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Test Page!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="TEST PAGE" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <TestComponent/>
      <Footer />
    </div>
  )
}
