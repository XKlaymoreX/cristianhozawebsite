import React from 'react'
import Link from 'next/link'
import style from '../styles/Layout.module.css'
import NavIcon from './NavIcon'

const Navbar = () => {


    const linkedIdIconStyle = {
        width: '28px',
        borderRadius: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#2764ac',
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <nav className={
            style.myNavbar
        }>
            <ul className={style.navItems}>
                <li >
                    <Link href="https://www.linkedin.com/in/cristian-george-hoza-b8164b171">
                        <a>
                            <div style={linkedIdIconStyle}>in</div>Cristian Hoza</a>
                    </Link>
                </li>
                <li className={style.navItem}>
                    <Link href="/">
                        <a>About</a>
                    </Link>
                    <div className="underline"></div>
                </li>
                <li className={style.navItem}>

                    <Link href="/">
                        <a >Contact Me</a>
                    </Link>
                    <div className="underline"></div>
                </li>
                <li className={style.navbarToggle}>
                    <NavIcon />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
