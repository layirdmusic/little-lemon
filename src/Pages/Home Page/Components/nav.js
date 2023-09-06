import React, { useEffect } from 'react'
import logo from "../../../images/Logo.svg"
import "../../../App.css"
import { useLocation } from 'react-router-dom';


export default function Nav() {
    const location = useLocation()
    return (
        <nav className="nav-section-container flex-row-center">

            {/* The Desktop Version Navigation */}
            <section className='nav-content-container'>
                <div className="nav-logo-container">
                    <img src={logo} alt="little Lemon Logo" className="nav-logo" />
                </div>
                <div className="menu-links-container">
                    <ul className="flex-row-center">
                        <li className='flex-column-center'>
                            <a className={`${location.pathname === "/" ? "active-page" : "nav-title"} `} href="/">HOME</a>
                            <div className={`nav-underline ${location.pathname === "/" ? "active-line" : ""}`}></div>
                        </li>
                        <li className='flex-column-center'>
                            <a className={`nav-title`} href="/">ABOUT</a>
                            <div className={`nav-underline`}></div>
                        </li>
                        <li className='flex-column-center'>
                            <a className={`nav-title`} href="/">MENU</a>
                            <div className={`nav-underline`}></div>
                        </li>
                        <li className='flex-column-center'>
                            <a className={`nav-title ${location.pathname === "/booking" ? "active-page" : ""}`} href="/booking">RESERVATIONS</a>
                            <div className={`nav-underline ${location.pathname === "/booking" ? "active-line" : ""}`}></div>
                        </li>
                        <li className='flex-column-center'>
                            <a className={`nav-title`} href="/">ORDER ONLINE</a>
                            <div className={`nav-underline`}></div>
                        </li>
                        <li className='flex-column-center'>
                            <a className={`nav-title`} href="/">LOGIN</a>
                            <div className={`nav-underline`}></div>
                        </li>
                    </ul>
                </div>
            </section>

            {/* The Mobile Version Navigation */}
            <section className="menu-wrap">
                <div className='menu-background flex-column-center'>
                    <img src={logo} alt="little Lemon Logo" className="nav-logo" />
                </div>
                {/* <!-- Checkbox (toggler) --> */}
                <input type="checkbox" className="toggler"/>
                {/* <!-- Hamburger Lines --> */}
                <div className="hamburger">
                    <div></div>
                </div>
                <div className="menu">
                    <div>
                        <div className="menu-links-container">
                            <ul className="flex-column-left">
                                <li className='flex-column-center'>
                                <a className={`${location.pathname === "/" ? "active-page" : "nav-title"} `} href="/">HOME</a>
                                <div className={`nav-underline ${location.pathname === "/" ? "active-line" : ""}`}></div>
                                </li>
                                <li className='flex-column-center'>
                                    <a className={`nav-title`} href="/">ABOUT</a>
                                    <div className={`nav-underline`}></div>
                                </li>
                                <li className='flex-column-center'>
                                    <a className={`nav-title`} href="/">MENU</a>
                                    <div className={`nav-underline`}></div>
                                </li>
                                <li className='flex-column-center'>
                                    <a className={`nav-title ${location.pathname === "/booking" ? "active-page" : ""}`} href="/booking">RESERVATIONS</a>
                                    <div className={`nav-underline ${location.pathname === "/booking" ? "active-line" : ""}`}></div>
                                </li>
                                <li className='flex-column-center'>
                                    <a className={`nav-title`} href="/">ORDER ONLINE</a>
                                    <div className={`nav-underline`}></div>
                                </li>
                                <li className='flex-column-center'>
                                    <a className={`nav-title`} href="/">LOGIN</a>
                                    <div className={`nav-underline`}></div>
                                </li>
                            </ul>
                    </div>
                    </div>
                </div>
            </section>
        </nav>
    );
}

