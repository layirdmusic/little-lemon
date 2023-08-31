import React, { useState, useEffect } from "react"
import Calender from "./Calender";
import TimeAndDate from "./timeandguests";
import RightArrow from "../../../images/right-arrow.svg"
import LeftArrowWhite from "../../../images/left-arrow-white.svg"
import Occasion from "./Occasion";
import WheelChairGuests from "./wheelchairguests";
import TableArea from "./tablearea";
import CheckSemiCircleSmall from "../../Icons/check-semi-circle-small";
import SmallCircle from "../../Icons/small-circle";

export  default function BookingForm (props) {
    const [stageCount, setStageCount] = useState(0)
    const [reserveDate, setReserveDate] = useState(null)
    const [reserveTime, setReserveTime] = useState(null)
    const [reserveTableArea, setReserveTableArea] = useState(null)
    const [reserveOccasion, setReserveOccasion] = useState(null)
    const [standardGuestCount, setStandardGuestCount] = useState(2)
    const [wheelChairGuestCount, setWheelChairGuestCount] = useState(0)
    const [standardMinusWheelChair, setStandardMinusWheelChair] = useState(2)

    useEffect(() => {
        setStandardMinusWheelChair(standardGuestCount - wheelChairGuestCount)
    },[wheelChairGuestCount])

    const handleReserveDateChange = (selectedDate) => {
        setReserveDate(selectedDate)
    }

    const handleReserveTimeChange = (selectedTime) => {
        setReserveTime(selectedTime)
    }

    const handleGuestChange = (selectedStandardGuests) => {
        setStandardGuestCount(selectedStandardGuests)
    }

    const handleTableAreaChange = (selectedTable) => {
        setReserveTableArea(selectedTable)
    }

    const handleOccasionChange = (OccasionState) => {
        setReserveOccasion(OccasionState)
    }

    const handleWheelChairGuestChange = (selectedWheelChairGuests) => {
        setWheelChairGuestCount(selectedWheelChairGuests)
    }

    const stages = [first(),second(),third()]
    

    const [currentStage, setCurrentStage] = useState(stages[stageCount])

    const nextStage = () => {
        if(stageCount > 1) {
            setStageCount(2)
        } else {
            setStageCount(stageCount + 1)
        }
    }

    const prevStage = () => {
        if(stageCount < 1) {
            setStageCount(0)
        } else {
            setStageCount(stageCount - 1)
        }
    }

    useEffect(() => {
        setCurrentStage(stages[stageCount])
        props.onStageCountChange(stageCount)
    },[stageCount])



    function first (){

        // const [transition, setTransition] = useState(0)

        useEffect(() => {
            console.log(stageCount)
        },[stageCount])

        return (
            <div className={`booking-content-container transition-right ${stageCount === 0 ? "transition-center" : ""} ${stageCount === 1 ? "transition-left" :""}`}>
                <div className="calender-section-container flex-column-center">
                    <h2 className="section-title">SELECT YOUR DATE</h2>
                    <div className="reservation-line"></div>
                    <Calender onDateChange={handleReserveDateChange}/>
                </div>
                <div className="timeguest-section-container flex-column-top-center">
                    <h2 className="section-title">SELECT TIME & GUESTS</h2>
                    <div className="reservation-line"></div>
                    <TimeAndDate onTimeChange={handleReserveTimeChange} onGuestChange={handleGuestChange}/>
                    <button onClick={() => nextStage()} className="page-button next-color flex-row-center">
                        <h2>Next</h2>
                        <img src={RightArrow} alt="Next Page Icon" />
                    </button>
                </div>

            </div>
        )
    }

    function second (){

        return (
            <div className={`booking-content-container transition-right ${stageCount === 1 ? "transition-center" : ""} ${stageCount === 2 ? "transition-left" :""}`}>
                <div className="options-section-container">
                    <div className="flex-column-center">
                        <Occasion onOccasionChange={handleOccasionChange}/>
                    </div>
                    <div className="flex-column-center">
                        <WheelChairGuests onWheelChairGuestChange={handleWheelChairGuestChange}/>
                    </div>
                </div>
                <div className="options-section-container flex-column-center">
                    <TableArea onTableChange={handleTableAreaChange}/>
                    <div className="page-buttons-container flex-column-center">
                        <button onClick={() => nextStage()} className="page-button next-color flex-row-center">
                                <h2>Next</h2>
                                <img src={RightArrow} alt="Next Page Icon" />
                        </button>
                        <button onClick={() => prevStage()} className="page-button prev-color flex-row-center">
                                <img src={LeftArrowWhite} alt="Next Page Icon" />
                                <h2>Go Back</h2>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    function third (){

        return (
            <div className={`reservation-overview-container flex-column-center transition-right ${stageCount === 2 ? "transition-center" : ""}`}>
                <div className="confirm-details-container">
                    <div className="details-form-container flex-column-center">
                        <div className="details-title-container">
                            <h2>DETAILS</h2>
                             <p>Enter Your Contact Info</p>
                             <div className="reservation-line"></div>
                        </div>
                        <form >
                            <input type="text" className="confirm-form-inputs" name="first-name" id="confirm-first-name" placeholder="First Name" autoComplete="on" required />
                            <input type="text" className="confirm-form-inputs" name="last-name" id="confirm-last-name" placeholder="Last Name" autoComplete="on" required />
                            <input type="email" className="confirm-form-inputs" name="email" id="confirm-email" placeholder="Email" autoComplete="on" required />
                            <input type="tel" className="confirm-form-inputs" name="phone-number" id="confirm-phone-number" placeholder="Phone Number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"></input>
                            <textarea className="confirm-form-textarea" name="special-requests" id="confirm-special-requests" placeholder="Special Requests"></textarea>

                        </form>
                        <div className="confirm-page-buttons-container flex-column-center">
                            <button onClick={() => nextStage()} className="page-button next-color flex-row-center">
                                    <CheckSemiCircleSmall />
                                    <h2>Confirm</h2>
                            </button>
                            <button onClick={() => prevStage()} className="page-button prev-color flex-row-center">
                                    <img src={LeftArrowWhite} alt="Next Page Icon" />
                                    <h2>Go Back</h2>
                            </button>
                        </div>
                    </div>
                    <div className="reservation-overview flex-column-center">
                        <div>
                            <div className="title-container">
                                <h2>LITTLE LEMON</h2>
                                <p>RESERVATION OVERVIEW</p>
                            </div>
                            <div className="reservation-line"></div>
                            <ul>
                                <li className="flex-row-left">
                                    <SmallCircle />
                                    <h3>Date : <span>{reserveDate}</span></h3>
                                </li>
                                <li className="flex-row-left">
                                    <SmallCircle />
                                    <h3>Time : <span>{reserveTime}</span></h3>
                                </li>
                                <li className="flex-row-left">
                                    <SmallCircle />
                                    <h3>Occassion : <span>{reserveOccasion}</span></h3>
                                </li>
                                <li className="flex-row-left">
                                    <SmallCircle />
                                    <h3>Seating Area : <span>{reserveTableArea}</span></h3>
                                </li>
                                <li className="flex-row-left">
                                    <SmallCircle />
                                    <h3>Standard Seating : <span>{standardMinusWheelChair + " Guests"}</span></h3>
                                </li>
                                <li className="flex-row-left">
                                    <SmallCircle />
                                    <h3>Wheelchair Seating : <span>{wheelChairGuestCount + " Guests"}</span></h3>
                                </li>
                                <li className="flex-row-left">
                                    <SmallCircle />
                                    <h3>Location : <span> 7110 W. Valley Farms Street</span></h3>
                                </li>
                            </ul>
                            <div className="reservation-line"></div>
                            <div className="seating-image interior-seats"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <section>
            <div className="booking-section-container flex-column-center">
                {first()}
                {second()}
                {third()}
            </div>
        </section>
    )
}