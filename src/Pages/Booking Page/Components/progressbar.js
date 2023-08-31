import React, {useState} from "react";
import Calender from "../../../images/Calender-icon.svg"
import GreyCalender from "../../../images/calender-icon-grey.svg"
import Curser from "../../../images/Curser-Icon.svg"
import GreyCursor from "../../../images/cursor-icon-grey.svg"
import Check from "../../../images/check-icon-grey.svg"
import CalendarIcon from "../../Icons/calender-icon";
import CheckSemiCircleMed from "../../Icons/check-semi-circle-med";

export default function ProgressBar(props) {

    const [calenderIconState, setCalenderIconState] = useState(Calender)
    const [curserIconState, setCurserIconState] = useState(GreyCursor)
    const [fadeState, setFadeState] = useState(null)
    const [activeBubbleState, setActiveBubbleState] = useState ("active-bubble")

    const changeIcon = () => {
        setFadeState("fade-out")
        setActiveBubbleState(null)
        setInterval(() => {
            setCalenderIconState(GreyCalender)
        }, 500);
        setInterval(() => {
            setFadeState("fade-in")
        }, 600);
    }

    return(
        <section className="bar-section-container flex-column-center">
            <div className="bar-bubble-container">
                <div className={`bar-bubble ${props.value === 0 ? "active-bubble": ""}`}>
                    <CalendarIcon />
                </div >
                <div className="bar-line">

                </div >
                <div className={`bar-bubble ${props.value === 1 ? "active-bubble": ""}`}>
                    <img className={fadeState} src={curserIconState} alt="" />
                </div>
                <div className="bar-line">

                </div >
                <div className={`bar-bubble ${props.value === 2 ? "active-bubble": ""}`}>
                    <CheckSemiCircleMed />
                </div>
            </div>
        </section>
    )
}
