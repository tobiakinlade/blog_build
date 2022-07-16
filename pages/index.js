import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-gray-200 min-h-screen'>
      <Head>
        <title>Blog</title>
        <meta name='description' content='Blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='py-8'>
        <h1 className='mt-10 text-center text-3xl mb-10 font-extrabold tracking-tight text-gray-900'>
          Welcome to my blog
        </h1>

        <div className='mt-20 mx-auto text-center max-w-3xl px-10'>
          <div className='mb-10 p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col'>
            <p className='mb-6 text-gray-400 uppercase text-sm'>Feb 10 2022</p>
            <h3 className='text-3xl font-semibold text-gray-900'>
              February big update
            </h3>
            <p className='mt-6 text-gray-500'>
              Today we introduced a new big update ...
            </p>
          </div>

          <div className='mb-10 p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col'>
            <p className='mb-6 text-gray-400 uppercase text-sm'>Jan 06 2022</p>
            <h3 className='text-3xl font-semibold text-gray-900'>Some news</h3>
            <p className='mt-6 text-gray-500'>
              Today we introduced a new big update ...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
