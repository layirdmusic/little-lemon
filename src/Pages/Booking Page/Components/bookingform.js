import React, { useState, useEffect } from "react"
import Calender from "./Calender";
import TimeAndDate from "./timeandguests";
import RightArrow from "../../../images/right-arrow.svg"
import LeftArrowWhite from "../../../images/left-arrow-white.svg"
import Occasion from "./Occasion";
import WheelChairGuests from "./wheelchairguests";
import TableArea from "./tablearea";
import CheckSemiCircleSmall from "../../Icons/check-semi-circle-small";
import SmallCircle from "../../../images/dot-icon.svg"
import WarningIcon from "../../Icons/warning-icon";
import HomeIcon from "../../../images/home-icon.svg"
import { render, fireEvent, screen } from "@testing-library/react";



export  default function BookingForm (props) {
    const [stageCount, setStageCount] = useState(0)
    const [reserveDate, setReserveDate] = useState("")
    const [reserveTime, setReserveTime] = useState("")
    const [reserveTableArea, setReserveTableArea] = useState("")
    const [reserveOccasion, setReserveOccasion] = useState("")
    const [standardGuestCount, setStandardGuestCount] = useState("")
    const [wheelChairGuestCount, setWheelChairGuestCount] = useState(0)
    const [standardMinusWheelChair, setStandardMinusWheelChair] = useState(2)
    const [formattedDate, setFormattedDate] = useState("")

    // Form Values
    const [pageOneBtnDisabled, setPageOneBtnDisabled] = useState(true)
    const [pageTwoBtnDisabled, setPageTwoBtnDisabled] = useState(true)
    const [firstName, setFirstName] = useState("")
    const [firstNameValid, setFirstNameValid] = useState(false)
    const [firstNameTouched, setFirstNameTouched] = useState(false)
    const [firstNameUntouched, setFirstNameUntouched] = useState(false)
    const [lastName, setLastName] = useState("")
    const [lastNameTouched, setLastNameTouched] = useState(false)
    const [lastNameUntouched, setLastNameUntouched] = useState(false)
    const [lastNameValid, setLastNameValid] = useState(false)
    const [email, setEmail] = useState("")
    const [emailTouched, setEmailTouched] = useState(false)
    const [emailUntouched, setEmailUntouched] = useState(false)
    const [emailValid, setEmailValid] = useState(false)
    const [phone, setPhone] = useState("")
    const [phoneTouched, setPhoneTouched] = useState(false)
    const [phoneUntouched, setPhoneUntouched] = useState(false)
    const [phoneValid, setPhoneValid] = useState(false)
    const [phoneValidFormat, setPhoneValidFormat] = useState(false)
    const [specialRequest, setSpecialRequest] = useState("")
    const [disabledState, setDisabledState] = useState(true)

    const handleFirstNameTouched = () => {
        setFirstNameTouched(true)
    }

    const handleFirstNameUntouched = () => {
        setFirstNameUntouched(true)
    }

    const handleLastNameTouched = () => {
        setLastNameTouched(true)
    }

    const handleLastNameUntouched = () => {
        setLastNameUntouched(true)
    }

    const handleEmailTouched = () => {
        setEmailTouched(true)
    }

    const handleEmailUntouched = () => {
        setEmailUntouched(true)
    }

    const handlePhoneTouched = () => {
        setPhoneTouched(true)
    }
    
    const handlePhoneUntouched = () => {
        setPhoneUntouched(true)
    }


    function changeFirstName(event) {
        const inputFirstName = event.target.value
        setFirstName(inputFirstName)

        const isFirstNameValid = /^[A-Za-z]+$/.test(inputFirstName) && inputFirstName.length >= 2
        setFirstNameValid(isFirstNameValid)
    }

    function changeLastName(event) {
        const inputLastName = event.target.value
        setLastName(inputLastName)

        const isLastNameValid = /^[A-Za-z]+$/.test(inputLastName) && inputLastName.length >= 2
        setLastNameValid(isLastNameValid)
    }

    function changeEmail(event) {
        const inputEmail = event.target.value
        setEmail(inputEmail)

        const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(inputEmail)

        setEmailValid(isValidEmail)
    }

    function changePhone(event) {
        const inputNumber = event.target.value
        setPhone(inputNumber)

        const isValidNumber = inputNumber.length >= 10
        const isValidFormat = /^\d{3}-\d{3}-\d{4}$/g.test(inputNumber)

        setPhoneValid(isValidNumber)
        setPhoneValidFormat(isValidFormat)
    }

    function changeSpecialRequest(event) {
        setSpecialRequest(event.target.value)
    }

    useEffect(() => {
        if(firstNameValid && lastNameValid && emailValid && phoneValid && phoneValidFormat) {
            setDisabledState(false)
        } else {
            setDisabledState(true)
        }
    },[firstName,lastName,phone,email,])


    useEffect(() => {
        setStandardMinusWheelChair(standardGuestCount - wheelChairGuestCount)
    },[wheelChairGuestCount, standardGuestCount])

    const handleReserveDateChange = (date) => {
        setReserveDate(date)
    }

    const handleReserveTimeChange = (selectedTime) => {
        setReserveTime(selectedTime)
    }

    useEffect(() => {
        if(reserveDate.includes(null) || reserveTime === "Select An Available Time") {
            setPageOneBtnDisabled(true)
        } else {
            setPageOneBtnDisabled(false)
        }

        if(reserveOccasion !== "Select An Option" && reserveTableArea !== undefined) {
            setPageTwoBtnDisabled(false)
        } else {
            setPageTwoBtnDisabled(true)
        }


        console.log(window.location.href)
    },[reserveDate, reserveTime, reserveOccasion, reserveTableArea])

    const handleGuestChange = (selectedStandardGuests) => {
        setStandardGuestCount(selectedStandardGuests)
        console.log(standardMinusWheelChair)
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

    const handleSubmit =(event) => {
        event.preventDefault()
        nextStage()
    }

    const handleFormattedDate = (formattedDate) => {
        setFormattedDate(formattedDate)
    }

    const stages = [first(),second(),third(),confirmation()]


    const [currentStage, setCurrentStage] = useState(stages[stageCount])

    const nextStage = () => {
        if(stageCount > 2) {
            setStageCount(3)
        } else {
            setStageCount(stageCount + 1)
        }

        window.scrollTo({top: 0})
    }

    const prevStage = () => {
        if(stageCount < 1) {
            setStageCount(0)
        } else {
            setStageCount(stageCount - 1)
        }

        window.scrollTo({top: 0})
    }

    useEffect(() => {
        setCurrentStage(stages[stageCount])
        props.onStageCountChange(stageCount)
    },[stageCount])





    function first (){

        return (
                <div className={`booking-content-container`}>
                    <div className="calender-section-container flex-column-center">
                        <h2>RESERVE DATE</h2>
                        <p>Choose Your Desired Date</p>
                        <div className="reservation-line"></div>
                        <Calender onDateChange={handleReserveDateChange} onSelectedDate={handleFormattedDate}/>
                    </div>
                    <div className={`timeguest-section-container flex-column-top-center`}>
                        <h2>RESERVE TIME</h2>
                        <p>Select A Time and Guest Count</p>
                        <div className="reservation-line"></div>
                        <TimeAndDate onTimeChange={handleReserveTimeChange} onGuestChange={handleGuestChange} value={formattedDate}/>
                        <button aria-disabled={pageOneBtnDisabled} onClick={() => nextStage()} disabled={pageOneBtnDisabled} className="page-button next-color flex-row-center">
                            <h2>Next</h2>
                            <img src={RightArrow} alt="Next Page Icon" />
                        </button>
                    </div>

                </div>
        )
    }

    function second (){

        return (
            <div className={`booking-section flex-column-center`}>

                <div className={`booking-content-container`}>
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
                            <button aria-disabled={pageTwoBtnDisabled} onClick={() => nextStage()} disabled={pageTwoBtnDisabled} className="page-button next-color flex-row-center">
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

            </div>
        )
    }

    function third (){

        return (
            <div className="reservation-confirmation-grid">
                <div className="booking-overview">
                    <h2>LITTLE LEMON</h2>
                    <p>RESERVATION OVERVIEW</p>
                    <div className="reservation-line"></div>
                    <ul>
                        <li className="booking-detail">

                            <h3>
                                <img src={SmallCircle} alt=""/>
                                Date :
                                <span> {reserveDate}</span>
                            </h3>
                        </li>
                        <li className="booking-detail">
                            <h3>
                                <img src={SmallCircle} alt=""/>
                                Time :
                                <span> {reserveTime}</span>
                            </h3>
                        </li>
                        <li className="booking-detail">
                            <h3>
                                <img src={SmallCircle} alt=""/>
                                Occassion :
                                <span> {reserveOccasion}</span>
                            </h3>
                        </li>
                        <li className="booking-detail">
                            <h3>
                                <img src={SmallCircle} alt=""/>
                                Seating Area :
                                <span> {reserveTableArea}
                                </span>
                            </h3>
                        </li>
                        <li className="booking-detail">
                            <h3>
                                <img src={SmallCircle} alt=""/>
                                Standard Seating :
                                <span> {standardMinusWheelChair + " Guest(s)"}</span>
                            </h3>
                        </li>
                        <li className="booking-detail">
                            <h3>
                                <img src={SmallCircle} alt=""/>
                                Wheelchair Seating :
                                <span> {wheelChairGuestCount + " Guest(s)"}</span>
                            </h3>
                        </li>
                        <li className="booking-detail">
                            <h3>
                                <img src={SmallCircle} alt=""/>
                                Location :
                                <span> 7110 W. Valley Farms Street</span>
                            </h3>
                        </li>
                    </ul>
                    <div className="reservation-line"></div>
                    <div className={`${reserveTableArea === "Interior Table" ? "interior-seats" : "patio-seats"}`}></div>
                </div>
                <div className="contact-details">
                    <h2>DETAILS</h2>
                    <p>Enter Your Contact Info</p>
                    <div className="reservation-line"></div>
                    <form onSubmit={handleSubmit} >
                            <input onChange={changeFirstName} onFocus={handleFirstNameTouched} onBlur={handleFirstNameUntouched} type="text" className="confirm-form-inputs" name="first-name" id="confirm-first-name" placeholder="First Name" autoComplete="on" required value={firstName} aria-label="First Name"/>

                            <div className={`inValidMessage flex-row-left ${!firstNameValid && firstNameTouched && firstNameUntouched ? "showInvalidMessage" : ""}`}>
                                <WarningIcon />
                                <p>Please enter your first name</p>
                            </div>

                            <input onChange={changeLastName} onFocus={handleLastNameTouched} onBlur={handleLastNameUntouched} type="text" className="confirm-form-inputs" name="last-name" id="confirm-last-name" placeholder="Last Name" autoComplete="on" required value={lastName} aria-label="Last Name" />

                            <div className={`inValidMessage flex-row-left ${!lastNameValid && lastNameTouched && lastNameUntouched ? "showInvalidMessage" : ""}`}>
                                <WarningIcon />
                                <p>Please enter your last name</p>
                            </div>

                            <input onChange={changeEmail} onFocus={handleEmailTouched} onBlur={handleEmailUntouched} type="email" className="confirm-form-inputs" name="email" id="confirm-email" placeholder="Email" autoComplete="on" required value={email} aria-label="Email Address" />

                            <div className={`inValidMessage flex-row-left ${!emailValid && emailTouched && emailUntouched ? "showInvalidMessage" : ""}`}>
                                <WarningIcon />
                                <p>Please enter your email</p>
                            </div>

                            <input onChange={changePhone} onFocus={handlePhoneTouched} onBlur={handlePhoneUntouched} type="tel" className="confirm-form-inputs" name="phone-number" id="confirm-phone-number" placeholder="Phone Number  (Format: 123-456-7890)" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required value={phone} aria-label="Phone Number"></input>

                            <div className={`inValidMessage flex-row-left ${!phoneValid && phoneTouched && phoneUntouched ? "showInvalidMessage" : ""} `}>
                                <WarningIcon />
                                <p>Please enter your contact number</p>
                            </div>

                            <div className={`inValidMessage flex-row-left ${!phoneValidFormat && phoneTouched && phoneUntouched ? "showInvalidMessage" : ""} `}>
                                <WarningIcon />
                                <p>Incorrect Format (123-456-7890)</p>
                            </div>

                            <textarea onChange={changeSpecialRequest} className="confirm-form-textarea" name="special-requests" id="confirm-special-requests" placeholder="Special Requests" value={specialRequest} aria-label="Special Requests"></textarea>

                            <button onClick={() => nextStage()} aria-disabled={disabledState} disabled={disabledState} type="submit" className="page-button next-color flex-row-center">
                                    <CheckSemiCircleSmall />
                                    <h2>Confirm</h2>
                            </button>
                        </form>
                        <button onClick={() => prevStage()} className="page-button prev-color flex-row-center">
                                    <img src={LeftArrowWhite} alt="Next Page Icon" />
                                    <h2>Go Back</h2>
                        </button>
                </div>
            </div>
        )
    }

    function confirmation() {

        return (

            <div className="confrmation-content">
                <h2>RESERVATION CONFIRMED, {firstName.toUpperCase()}!</h2>
                <p>Stay tuned for an email with your booking details</p>
                <p>Looking forward to your visit!</p>
                <a href="/" className="home-btn">
                    <img src={HomeIcon} alt="" />
                    RETURN HOME
                </a>
            </div>

        )
    }


    return (
        <section>
            <div className="slider-container">
                <div className={`slider ${stageCount === 1 ? "nextSlideOne" : ""} ${stageCount === 2 ? "nextSlideTwo" : ""} ${stageCount === 3 ? "nextSlideThree" : ""}`}>
                    <div className={`slideOne flex-column-center ${stageCount === 0 ? "" : "slideHidden"}`}>
                        {first()}
                    </div>
                    <div className={`slideTwo flex-column-center ${stageCount === 1 ? "" : "slideHidden"}`}>
                        {second()}
                    </div>
                    <div className={`slideThree  flex-column-center ${stageCount === 2 ? "" : "slideHidden"} ${stageCount === 2 ? "" : "increase-slide-size"}`}>
                        {third()}
                    </div>
                    <div className={`slideThree  flex-column-center ${stageCount === 3 ? "" : "slideHidden"}`}>
                        {confirmation()}
                    </div>
                </div>
            </div>
        </section>
    )
}