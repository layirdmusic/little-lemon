import React from 'react'
import logo from "../../../images/Logo.svg"
import "../../../App.css"


export default function Nav() {
    return (
        <nav className="nav-section-container flex-row-center">
            <section className='nav-content-container flex-row-center-spread'>
                <div className="nav-logo-container">
                    <img src={logo} alt="little Lemon Logo" className="nav-logo" />
                </div>
                <div className="menu-links-container">
                    <ul className="flex-row-center">
                        <li className='flex-column-center'>
                            <a href="google.com">HOME</a>
                            <div className='nav-underline'></div>
                        </li>
                        <li className='flex-column-center'>
                            <a href="google.com">ABOUT</a>
                            <div className='nav-underline'></div>
                        </li>
                        <li className='flex-column-center'>
                            <a href="google.com">MENU</a>
                            <div className='nav-underline'></div>
                        </li>
                        <li className='flex-column-center'>
                            <a href="google.com">RESERVATIONS</a>
                            <div className='nav-underline'></div>
                        </li>
                        <li className='flex-column-center'>
                            <a href="google.com">ORDER ONLINE</a>
                            <div className='nav-underline'></div>
                        </li>
                        <li className='flex-column-center'>
                            <a href="google.com">LOGIN</a>
                            <div className='nav-underline'></div>
                        </li>
                    </ul>
                </div>
            </section>
        </nav>
    );
}