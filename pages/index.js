import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'
import LandingSection from '../components/LandingSection'
import AboutSection from '../components/AboutSection'

export default function Home() {

    return (
        <div className={
            styles.container
        }>
            <Head>
                <title>Hello, I&apos;m Cristian Hoza</title>
                <meta name="description" content="Hello, I'm Cristian Hoza.
                                    Very passionate about the IT sector since I was a kid. I mainly manifest my passion in the development sphere. Through 4+ years of experience, I've mostly invested my time in giving a professional contribution to both small IT realities and multinational companies with an international presence. For a year now I've started to deepen UI/UX and Web Design.
                                    I consider my young age as a strength and an opportunity for growth for a company, which I express in my job through flexibility and continuous learning.
                                    "
                                    key="desc"/>
                <meta name="keywords" content="Cristian Hoza, Developer, Designer, Switzerland, Full Stack, Users, JSON"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="robots" content="all"></meta>
                <meta name="google" content="notranslate" key="notranslate"/>
            </Head>
            <main>
                <LandingSection/>
                <AboutSection/>
            </main>
        </div>
    )
}

export const getStaticProps = async () => {


  return {
      props : {

      }
  }
}