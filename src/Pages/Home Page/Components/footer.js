import React from "react"
import "../../../App.css"
import logo from "../../../images/Logo-2.png"
import facebook from "../../../images/facebook.svg"

export default function Footer() {
    return (
        <footer className="footer-section-container">
            <section className="footer-content-container">
                <div className="footer-logo-container flex-column-left">
                    <img src={logo} alt="Little Lemon Logo" className="footer-logo" />
                </div>
                <div className="footer-content flex-column-left">
                    <h2>Navigation</h2>
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Menu</a>
                        </li>
                        <li>
                            <a>Reservations</a>
                        </li>
                        <li>
                            <a>Order Online</a>
                        </li>
                        <li>
                            <a>Login</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-content flex-column-left">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>
                            <p>7110 W. Valley Farms Street</p>
                        </li>
                        <li>
                            <p>(253) 644-2182</p>
                        </li>
                        <li>
                            <p>contact@littlelemon.com</p>
                        </li>
                    </ul>
                </div>
                <div className="footer-content footer-socials-container flex-column-left">
                    <h2>Follow Us</h2>
                    <ul>
                        <li className="flex-row-left">
                            <a><img src={facebook} alt="facebook-logo" className="flex-column-center"/></a>
                            <p>Facebook</p>
                        </li>
                        <li className="flex-row-left">
                        <a><img src={facebook} alt="facebook-logo" className="flex-column-center"/></a>
                            <p>Instagram</p>
                        </li>
                        <li className="flex-row-left">
                        <a><img src={facebook} alt="facebook-logo" className="flex-column-center"/></a>
                            <p>LinkedIn</p>
                        </li>
                    </ul>
                </div >
            </section>
        </footer>
    )
}