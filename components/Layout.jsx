import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import style from '../styles/Home.module.css'
import layoutStyle from '../styles/Layout.module.css'
import gsap from 'gsap/dist/gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Layout = (props) => {




    return (
        <>
            <main className={style.main}>
                <Navbar/> {
                props.children
            } </main>
            <Footer/>
        </>

    )
}

export default Layout
