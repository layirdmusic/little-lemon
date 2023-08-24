import React from "react"

export default function Header() {
    return (
        <header className="header-section-container flex-column-center">
            <section className="header-content-container">
                <div className="header-content flex-column-left">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec</p>
                    <a>Reserve A Table</a>
                </div>
                <div className="header-image-container flex-column-center">
                    <div className="header-img"></div>
                </div>
            </section>
        </header>
    )
}



