import React from 'react'
import logo from "../../../images/Logo.svg"
import "../../../App.css"


export default function Nav() {
    
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

            {/* The Mobile Version Navigation */}
            <section class="menu-wrap">
                <div className='menu-background flex-column-center'>
                    <img src={logo} alt="little Lemon Logo" className="nav-logo" />
                </div>
                {/* <!-- Checkbox (toggler) --> */}
                <input type="checkbox" class="toggler"/>
                {/* <!-- Hamburger Lines --> */}
                <div class="hamburger">
                    <div></div>
                </div>
                <div class="menu">
                    <div>
                        <div className="menu-links-container">
                            <ul className="flex-column-left">
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
                    </div>
                </div>
            </section>
        </nav>
    );
}

