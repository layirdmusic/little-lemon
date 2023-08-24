import React from "react"

export default function About() {
    return(
        <section className="about-section-container flex-column-center">
            <div className="about-content-container flex-row-center">
                <div className="content flex-column-left">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin</p>
                    <p>libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo</p>
                </div>
                <div className="images flex-column-center">
                    <div className="team-image"></div>
                    <div className="solo-image"></div>
                </div>
            </div>
        </section>
    )
}