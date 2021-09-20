import Head from 'next/head'
import Item from '../components/item'
import React from 'react'
import styles from '../styles/Home.module.css'
import LandingSection from '../components/LandingSection'

export default function Home({data}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Hello, I&apos;m Cristian Hoza</title>
        <meta name="description" content="Hello, i'm Cristian Hoza" />
        <meta name="keywords" content="Cristian Hoza, Developer, Designer, Switzerland, Full Stack, Users, JSON" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingSection />
    </div>
  )
}
