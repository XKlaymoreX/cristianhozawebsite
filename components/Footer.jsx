import style from '../styles/Layout.module.css'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={
            style.footer
        }>
            <section className="">
               <h1>Footer</h1>
            </section>
        </footer>
    )
}

export default Footer
