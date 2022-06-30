import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <>
      <Head>
        <title>Campus virtual</title>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
        <script src="/js/bootstrap.bundle.min.js"></script>
      </Head>
      <Header />
      <div class="container">
        <Banner />
        <Main />
      </div>
    </>
  )
}
