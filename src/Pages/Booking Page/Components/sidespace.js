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
import WarningIcon from "../../Icons/warning-icon";


export  default function BookingForm (props) {
    const [stageCount, setStageCount] = useState(0)
    const [reserveDate, setReserveDate] = useState("")
    const [reserveTime, setReserveTime] = useState("")
    const [reserveTableArea, setReserveTableArea] = useState("")
    const [reserveOccasion, setReserveOccasion] = useState("")
    const [standardGuestCount, setStandardGuestCount] = useState(2)
    const [wheelChairGuestCount, setWheelChairGuestCount] = useState(0)
    const [standardMinusWheelChair, setStandardMinusWheelChair] = useState(2)

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
    },[wheelChairGuestCount])

    const handleReserveDateChange = (selectedDate) => {
        setReserveDate(selectedDate)
    }

    const handleReserveTimeChange = (selectedTime) => {
        setReserveTime(selectedTime)
    }

    useEffect(() => {
        if(reserveDate.includes(null)) {
            setPageOneBtnDisabled(true)
        } else {
            setPageOneBtnDisabled(false)
        }

        if(reserveOccasion !== "Select An Option" && reserveTableArea !== undefined) {
            setPageTwoBtnDisabled(false)
        } else {
            setPageTwoBtnDisabled(true)
        }

        console.log(reserveTableArea)
    },[reserveDate, reserveTime, reserveOccasion, reserveTableArea])

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

    const handleSubmit =(event) => {
        event.preventDefault()
        window.location.href="/"
    }

    const stages = [first(),second(),third()]


    const [currentStage, setCurrentStage] = useState(stages[stageCount])

    const nextStage = () => {
        if(stageCount > 1) {
            setStageCount(2)
        } else {
            setStageCount(stageCount + 1)
        }

        console.log(stageCount)
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
                <div className={`booking-content-container`}>
                    <div className="calender-section-container flex-column-center">
                        <h2 className="section-title">SELECT YOUR DATE</h2>
                        <div className="reservation-line"></div>
                        <Calender onDateChange={handleReserveDateChange}/>
                    </div>
                    <div className="timeguest-section-container flex-column-top-center">
                        <h2 className="section-title">SELECT TIME & GUESTS</h2>
                        <div className="reservation-line"></div>
                        <TimeAndDate onTimeChange={handleReserveTimeChange} onGuestChange={handleGuestChange}/>
                        <button onClick={() => nextStage()} disabled={pageOneBtnDisabled} className="page-button next-color flex-row-center">
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
                            <button onClick={() => nextStage()} disabled={pageTwoBtnDisabled} className="page-button next-color flex-row-center">
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
            <div className={`reservation-overview-container flex-column-center`}>
                <div className="booking-content-container">
                <div className="reservation-overview flex-column-center">
                        <div className="overview-container">
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
                                    <h3>Standard Seating : <span>{standardMinusWheelChair + " Guest(s)"}</span></h3>
                                </li>
                                <li className="flex-row-left">
                                    <SmallCircle />
                                    <h3>Wheelchair Seating : <span>{wheelChairGuestCount + " Guest(s)"}</span></h3>
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
                    <div className="details-form-container flex-column-center">
                        <div className="details-title-container">
                            <h2>DETAILS</h2>
                             <p>Enter Your Contact Info</p>
                             <div className="reservation-line"></div>
                        </div>
                        <form onSubmit={handleSubmit} >
                            <input onChange={changeFirstName} onFocus={handleFirstNameTouched} onBlur={handleFirstNameUntouched} type="text" className="confirm-form-inputs" name="first-name" id="confirm-first-name" placeholder="First Name" autoComplete="on" required value={firstName}/>

                            <div className={`inValidMessage flex-row-left ${!firstNameValid && firstNameTouched && firstNameUntouched ? "showInvalidMessage" : ""}`}>
                                <WarningIcon />
                                <p>Please enter your first name</p>
                            </div>

                            <input onChange={changeLastName} onFocus={handleLastNameTouched} onBlur={handleLastNameUntouched} type="text" className="confirm-form-inputs" name="last-name" id="confirm-last-name" placeholder="Last Name" autoComplete="on" required value={lastName} />

                            <div className={`inValidMessage flex-row-left ${!lastNameValid && lastNameTouched && lastNameUntouched ? "showInvalidMessage" : ""}`}>
                                <WarningIcon />
                                <p>Please enter your first name</p>
                            </div>

                            <input onChange={changeEmail} onFocus={handleEmailTouched} onBlur={handleEmailUntouched} type="email" className="confirm-form-inputs" name="email" id="confirm-email" placeholder="Email" autoComplete="on" required value={email} />

                            <div className={`inValidMessage flex-row-left ${!emailValid && emailTouched && emailUntouched ? "showInvalidMessage" : ""}`}>
                                <WarningIcon />
                                <p>Please enter your first name</p>
                            </div>

                            <input onChange={changePhone} onFocus={handlePhoneTouched} onBlur={handlePhoneUntouched} type="tel" className="confirm-form-inputs" name="phone-number" id="confirm-phone-number" placeholder="Phone Number  (Format: 123-456-7890)" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required value={phone}></input>

                            <div className={`inValidMessage flex-row-left ${!phoneValid && phoneTouched && phoneUntouched ? "showInvalidMessage" : ""} `}>
                                <WarningIcon />
                                <p>Please enter your contact number</p>
                            </div>

                            <div className={`inValidMessage flex-row-left ${!phoneValidFormat && phoneTouched && phoneUntouched ? "showInvalidMessage" : ""} `}>
                                <WarningIcon />
                                <p>Incorrect Format (123-456-7890)</p>
                            </div>

                            <textarea onChange={changeSpecialRequest} className="confirm-form-textarea" name="special-requests" id="confirm-special-requests" placeholder="Special Requests" value={specialRequest}></textarea>

                            <button disabled={disabledState} type="submit" className="page-button next-color flex-row-center">
                                    <CheckSemiCircleSmall />
                                    <h2>Confirm</h2>
                            </button>

                        </form>
                        <div className="confirm-page-buttons-container flex-column-center">
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


    return (
        <section>
            <div className="slider-container flex-column-center">
                <div className={`slider ${stageCount === 1 ? "nextSlideOne" : ""} ${stageCount === 2 ? "nextSlideTwo" : ""}`}>
                    <div className={`slideOne flex-column-center ${stageCount === 0 ? "" : "slideHidden"}`}>
                        {first()}
                    </div>
                    <div className={`slideTwo flex-column-center ${stageCount === 1 ? "" : "slideHidden"}`}>
                        {second()}
                    </div>
                    <div className={`slideThree ${stageCount === 2 ? "" : "slideInVisable"} flex-column-center ${stageCount === 2 ? "" : "slideHidden"}`}>
                        {third()}
                    </div>
                </div>
            </div>
        </section>
    )
}