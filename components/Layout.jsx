import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import style from '../styles/Home.module.css'

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
