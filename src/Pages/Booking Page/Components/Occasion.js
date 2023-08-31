import React, { useEffect, useState } from "react";
import Cheers from "../../../images/cheers-icon.svg"
import DownArrow from "../../../images/down-arrow.svg"
import CheersWhite from "../../../images/cheers-icon-white.svg"
import DownArrowWhite from "../../../images/down-arrow-white.svg"

export default function Occasion(props) {

    const icons = [Cheers, DownArrow, CheersWhite, DownArrowWhite]
    const [iconState, setIconState] = useState(false)

    const changeIcon = () => {
        setIconState(!iconState)
    }

    const occasionSlots = []

    const occasions = ["None", "Birthday","Romantic date","Anniversary","Business Meal"]

    const [clicked, setClicked] = useState(false)

    const [backColor, setBackColor] = useState("white")

    const dropDown = () => {
        setClicked(!clicked)
    }

    const [occasionState, setOccasionState] = useState("Select An Option")

    const selectedOccasion = (slots) => {
        setOccasionState(occasions[slots])
        setClicked(!clicked)
        setBackColor("black")
    }

    useEffect(() => {
        props.onOccasionChange(occasionState)
    },[occasionState])

    for(let slots = 0; slots < occasions.length; slots++) {
        occasionSlots.push(<div key={slots} onClick={() => selectedOccasion(slots)} className="occasion flex-row-center"><h3>{occasions[slots]}</h3></div>)
    }



    return (
        <>
        <div className="occasion-title-container">
            <h2>OCCASION</h2>
            <p>Dining For A Special Occassion?</p>
            <div className="reservation-line"></div>
        </div>
        <div className="occasion-select-container flex-column-left">
            <div onMouseEnter={() => changeIcon()} onMouseLeave={() => changeIcon()} onClick={() => dropDown()} className={`occasions-button flex-row-center ${backColor === "black" ? "occasions-background" : ""}`}>
                <img src={iconState? icons[2] : icons[0]} alt="Cheers Icon" />
                <h3>{occasionState}</h3>
                <img src={iconState? icons[3] : icons[1]} alt="Down Arrow" />
            </div>
            <div className={`occasions-dropdown flex-column-left ${clicked? "occasions-visable" : ""}`}>
                {occasionSlots}
            </div>
        </div>
        </>
    )
}