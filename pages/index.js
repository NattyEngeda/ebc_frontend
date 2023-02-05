import Head from 'next/head'
import Layout from './components/layout'


const Home = () => {
  return (
    <>
      <section className='min-h-screen py-20'>
        <div>
          <h1 className=''>Hello Man</h1>
        </div>
      </section>
    </>
  );
}

Home.getLayout = (page) => {
  return (
    <>
      <Layout>
        {page}
      </Layout>
    </>
  )
}


export default Home;