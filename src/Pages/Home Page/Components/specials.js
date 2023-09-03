import React from "react"
import BikeIcon from "../../../images/bike-icon.svg"

export default function Specials() {

    return (
        <section className="specials-section-container">
            <div className="specials-content-container flex-column-center">
                <div className="specials-content flex-row-center-spread">
                    <h2>Specials</h2>
                    <a>Online Menu</a>
                </div>
                <div className="specials-card-container">
                    <div className="specials-card flex-column-center">
                        <div className="specials-card-img baked-salmon-img"></div>
                        <div className="specials-card-text">
                            <div className="specials-card-title flex-row-center-spread">
                                <h3 className="menu-item">
                                    Baked Salmon
                                </h3>
                                <h3 className="menu-price">
                                    $12.99
                                </h3>
                            </div>
                            <p>
                            ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec.
                            </p>
                            <a className="flex-row-center">Order A Delivery <img src={BikeIcon} alt="bike icon" /></a>
                        </div>
                    </div>
                    <div className="specials-card flex-column-center">
                        <div className="specials-card-img lemon-dessert-img"></div>
                        <div className="specials-card-text">
                            <div className="specials-card-title flex-row-center-spread">
                                <h3 className="menu-item">
                                    Baked Salmon
                                </h3>
                                <h3 className="menu-price">
                                    $12.99
                                </h3>
                            </div>
                            <p>
                            ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec.
                            </p>
                            <a className="flex-row-center">Order A Delivery <img src={BikeIcon} alt="bike icon" /></a>
                        </div>
                    </div>
                    <div className="specials-card flex-column-center">
                        <div className="specials-card-img greek-salad-img"></div>
                        <div className="specials-card-text">
                            <div className="specials-card-title flex-row-center-spread">
                                <h3 className="menu-item">
                                    Baked Salmon
                                </h3>
                                <h3 className="menu-price">
                                    $12.99
                                </h3>
                            </div>
                            <p>
                            ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec.
                            </p>
                            <a className="flex-row-center">Order A Delivery <img src={BikeIcon} alt="bike icon" /></a>
                        </div>
                    </div>
                    <div className="specials-card flex-column-center">
                        <div className="specials-card-img shrimp-remoulade-img"></div>
                        <div className="specials-card-text">
                            <div className="specials-card-title flex-row-center-spread">
                                <h3 className="menu-item">
                                Shrimp Remoulade
                                </h3>
                                <h3 className="menu-price">
                                    $12.99
                                </h3>
                            </div>
                            <p>
                            ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec.
                            </p>
                            <a className="flex-row-center">Order A Delivery <img src={BikeIcon} alt="bike icon" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}