import React, { useEffect, useState } from "react"
import Clock from "../../../images/clock-icon.svg"
import Plus from "../../../images/plus-icon.svg"
import Minus from "../../../images/minus-icon.svg"
import { fetchAPI } from "../../../TimesApi"
import { submitAPI } from "../../../TimesApi"

export default function TimeAndDate(props) {

    const [timeSlots, setTimeSlots] = useState(["Please Select A Date"])

    useEffect(() => {
    const fetchAvailableTimes = async (date) => {
        const times = await fetchAPI(date);
        setTimeSlots(times)
        console.log(timeSlots)
    };

    fetchAvailableTimes(props.value);
    console.log(props.value)
    }, [props.value]);



    const slots = []

    const [selectedTime, setSelectedTime] = useState("Select An Available Time")

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
        slots.push(<div key={time} onClick={() => setTime(time)} className={`timeslot flex-row-center ${props.value === "2023-08-31" ? "timeslot-disabled" : ""}`}><h2>{timeSlots[time]}</h2></div>)
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