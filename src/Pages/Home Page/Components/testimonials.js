import React from "react"
import Star from "../../../images/star.svg"
import Quote from "../../../images/quote.svg"

export default function Testimonials() {
    return (
        <section className="testimonials-section-container flex-column-center">
            <h2>Testimonials</h2>
            <div className="testimonials-card-container flex-column-center">
                <div className="testimonials-card flex-column-left">
                    <div className="rating-container flex-row-left">
                        <img src={Star} alt="Star Rating" />
                        <img src={Star} alt="Star Rating" />
                        <img src={Star} alt="Star Rating" />
                        <img src={Star} alt="Star Rating" />
                        <img src={Star} alt="Star Rating" />
                    </div>
                    <div className="profile-container flex-row-left">
                        <div className="profile-img-joseph"></div>
                        <div className="profile-name">Joseph</div>
                    </div>
                    <div className="testimonial-container flex-row-top-spread">
                        <img src={Quote} alt="" />
                        <p>ante metus dictum at tempor commodo ullamcorper a lacus</p>
                    </div>
                </div>
                <div className="testimonials-card flex-column-left">
                    <div className="rating-container flex-row-left">
                        <img src={Star} alt="Star Rating" />
                        <img src={Star} alt="Star Rating" />
                        <img src={Star} alt="Star Rating" />
                        <img src={Star} alt="Star Rating" />
                        <img src={Star} alt="Star Rating" />
                    </div>
                    <div className="profile-container flex-row-left">
                        <div className="profile-img-joseph"></div>
                        <div className="profile-name">Joseph</div>
                    </div>
                    <div className="testimonial-container flex-row-top-spread">
                        <img src={Quote} alt="" />
                        <p>ante metus dictum at tempor commodo ullamcorper a lacus</p>
                    </div>
                </div>
                <div className="testimonials-card flex-column-left">
                    <div className="rating-container flex-row-left">
                        <img src={Star} alt="Star Rating" />
                        <img src={Star} alt="Star Rating" />
                        <img src={Star} alt="Star Rating" />
                        <img src={Star} alt="Star Rating" />
                        <img src={Star} alt="Star Rating" />
                    </div>
                    <div className="profile-container flex-row-left">
                        <div className="profile-img-joseph"></div>
                        <div className="profile-name">Joseph</div>
                    </div>
                    <div className="testimonial-container flex-row-top-spread">
                        <img src={Quote} alt="" />
                        <p>ante metus dictum at tempor commodo ullamcorper a lacus</p>
                    </div>
                </div>
                <div className="testimonials-card flex-column-left">
                    <div className="rating-container flex-row-left">
                        <img src={Star} alt="Star Rating" />
                        <img src={Star} alt="Star Rating" />
                        <img src={Star} alt="Star Rating" />
                        <img src={Star} alt="Star Rating" />
                        <img src={Star} alt="Star Rating" />
                    </div>
                    <div className="profile-container flex-row-left">
                        <div className="profile-img-joseph"></div>
                        <div className="profile-name">Joseph</div>
                    </div>
                    <div className="testimonial-container flex-row-top-spread">
                        <img src={Quote} alt="" />
                        <p>ante metus dictum at tempor commodo ullamcorper a lacus</p>
                    </div>
                </div>
            </div>
        </section>
    )
}