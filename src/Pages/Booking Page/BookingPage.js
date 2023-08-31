import React, { useEffect, useState } from "react"
import Nav from "../Home Page/Components/nav"
import ProgressBar from "./Components/progressbar"
import BookingForm from "./Components/bookingform"


export default function BookingPage(){
    const [bubbleState, setBubbleState] = useState(0)

    const handleBubbleChange = (state) => {
        setBubbleState(state)
    }

    useEffect(() => {
        setBubbleState(bubbleState)
    },[bubbleState])


    return (
        <>
        <Nav />
        <ProgressBar value={bubbleState}/>
        <BookingForm onStageCountChange={handleBubbleChange} value={bubbleState}/>
        </>
    )
}