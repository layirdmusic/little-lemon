import React, { useEffect, useState } from "react"
import Clock from "../../../images/clock-icon.svg"
import Plus from "../../../images/plus-icon.svg"
import Minus from "../../../images/minus-icon.svg"


export default function TimeAndDate(props) {

    const timeSlots = []

    for(let hours = 9; hours <= 12; hours++){

        if(hours === 12) {
            timeSlots.push(`${hours}:00 pm`)
            timeSlots.push(`${hours}:30 pm`)
        }  else {
            timeSlots.push(`${hours}:00 am`)
            timeSlots.push(`${hours}:30 am`)
        }
    }

    for(let hours = 1; hours <= 9; hours++){
        timeSlots.push(`${hours}:00 pm`)
        timeSlots.push(`${hours}:30 pm`)
    }


    const slots = []

    const [selectedTime, setSelectedTime] = useState("12:30 pm")

    const [clicked, setClicked] = useState(false)

    const [timeSelected, setTimeSelected] = useState(false)

    const setTime = (time) => {
        setSelectedTime(timeSlots[time])
        setClicked(!clicked)
        setTimeSelected(true)
    }

    function dropDown() {
        setClicked(!clicked)
    }

    for(let time = 0; time < timeSlots.length; time++ ) {
        slots.push(<div key={time} onClick={() => setTime(time)} className="timeslot flex-row-center"><h2>{timeSlots[time]}</h2></div>)
    }

    const [guestCount, setGuestCount] = useState(2)

    const addGuest = () => {
        if(guestCount > 8){
            setGuestCount(9)
        } else {
            setGuestCount(guestCount + 1)
        }
    }

    const removeGuest = () => {
        if(guestCount < 2){
            setGuestCount(1)
        } else {
            setGuestCount(guestCount - 1)
        }

    }

    useEffect (() => {
        props.onTimeChange(selectedTime)
    },[selectedTime])

    useEffect (() => {
        props.onGuestChange(guestCount)
    },[guestCount])

        return (
            <div className="timeguest-content-container flex-column-center">
                <div onClick={() => dropDown()} className={`time-container flex-row-center ${timeSelected ? "time-container-clicked" : "" } `}>
                    <img src={Clock} alt="clock icon" />
                    <h2>{selectedTime}</h2>
                    <div className= {`time-slot-dropdown ${clicked ? "visable" : ""}`}>
                    {slots}
                    </div>
                </div>
                <div className="guest-container flex-row-center">
                    <button onClick={() => removeGuest()}><img src={Minus} alt="minus button" /></button>
                    <h2>{`${guestCount} Guests`}</h2>
                    <button onClick={() => addGuest()}><img src={Plus} alt="add button" /></button>
                </div>
            </div>
        )
}