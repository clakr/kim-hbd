import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import TypewriterComponent from 'typewriter-effect'
import TypewriterInit from '../component/TypewriterInit'

const Home: NextPage = () => {
  const [isFinished, setIsFinished] = useState(false)

  return (
    <>
      <Head>
        <title>Kim</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4 flex flex-col gap-4 h-screen justify-between">
        <div className="grid place-items-center">
          <Image
            src="/cat.gif"
            width={480}
            height={360}
            layout="intrinsic"
            alt="cat-typing"
          />
        </div>
        <div className="text-4xl">
          <TypewriterComponent
            onInit={(typewriter) => {
              TypewriterInit(typewriter, () => {
                setIsFinished(true)
              })
            }}
            options={{
              autoStart: true,
            }}
          />
        </div>
        <div className="grid place-items-center">
          <Image
            src="/best.gif"
            width={240}
            height={240}
            layout="intrinsic"
            alt="guy saying you are the best"
            className={`${
              isFinished ? 'opacity-100' : 'opacity-0'
            } transition-all duration-500`}
          />
        </div>
      </main>
    </>
  )
}

export default Home
