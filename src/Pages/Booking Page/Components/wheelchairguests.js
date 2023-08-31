import React, { useEffect, useState } from "react";
import Plus from "../../../images/plus-icon.svg"
import Minus from "../../../images/minus-icon.svg"

export default function WheelChairGuests(props) {

    const [guestCount, setGuestCount] = useState(0)

    const plusGuest = () => {
        if(guestCount > 8) {
            setGuestCount(9)
        } else {
            setGuestCount(guestCount + 1)
        }
    }

    const minusGuest = () => {
        if(guestCount < 1) {
            setGuestCount(0)
        } else {
            setGuestCount(guestCount - 1)
        }
    }

    useEffect (() => {
        props.onWheelChairGuestChange(guestCount)
    },[guestCount])

    return (
        <>
            <div className="wheelchairguests-title-container">
                <h2>WHEELCHAIR GUESTS</h2>
                <p>Choose How Many Guests</p>
                <div className="reservation-line"></div>
            </div>
            <div className="wheelchairguests-select-container flex-row-center">
                <button onClick={() => minusGuest()}><img src={Minus} className="small-icon" alt="Remove Guests Button" /></button>
                <h3>{`${guestCount} Guests`}</h3>
                <button onClick={() => plusGuest()}><img src={Plus} className="small-icon" alt="Add Guests Button" /></button>
            </div>
        </>
    )
}