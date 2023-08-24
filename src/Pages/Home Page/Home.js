import  React, { useState } from "react"
import Nav from "./Components/nav";
import Footer from "./Components/footer";
import Header from "./Components/header";
import Specials from "./Components/specials";
import Testimonials from "./Components/testimonials"
import About from "./Components/about";

export default function Home() {

    const [browserWidth, setBrowserWidth] = useState(null)

    window.addEventListener('resize',
    function() {
        const browserWidth=window.innerWidth
        setBrowserWidth(browserWidth)
    })

    return (
        <>
        <div>
            <h2>{browserWidth}</h2>
        </div>
        <Nav />
        <Header />
        <Specials />
        <Testimonials />
        <About />
        <Footer />
        </>
    );
}