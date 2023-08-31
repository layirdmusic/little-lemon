import React, { useState, useEffect } from "react"
import LeftArrow from "../../../images/left-arrow.svg"
import RightArrow from "../../../images/right-arrow.svg"

export default function Calender(props) {
    const currentDate = new Date()
    const [currentMonth,setCurrentMonth] = useState(currentDate.getMonth());
    const currentYear = currentDate.getFullYear()
    const monthNamesShort = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
    const monthNamesLong = ["January","Feburary","March","April","May","June","July","August","September","October","November","Decemeber"]
    const weekNames = ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    const [month,setMonth] = useState(monthNamesShort[currentMonth])
    const [year, setYear] = useState(currentYear)



    function nextMonth() {
        setCurrentMonth(currentMonth + 1)
        if(currentMonth > 10) {
            setCurrentMonth(0)
            setYear(year + 1)
        }
    }

    function prevMonth() {
        setCurrentMonth(currentMonth - 1)
        if(currentMonth < 1) {
            setCurrentMonth(11)
            setYear(year - 1)
        }
    }

    useEffect(() => {
        setMonth(monthNamesShort[currentMonth]);
    },[currentMonth])

        const [clicked, setClicked] = useState(null)

    const selectedDate = (i) => {
        setClicked(i)

    }

    useEffect(() => {
       const clickedDate = new Date (year, currentMonth, clicked)
       const dayOfWeek = clickedDate.getDay()
       const selectedDay = weekNames[dayOfWeek]
       const selectedMonth = monthNamesLong[currentMonth]
       props.onDateChange(`${selectedDay}, ${selectedMonth} ${clicked}`)
    },[clicked])

    const date = new Date(year,currentMonth,1)
    const startDay = date.getDay()

    function calenderGrid() {

        const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        const cell = []

        for(let i = 1; i <= startDay; i++) {
            cell.push(<div key={32 * i}><h2></h2></div>)
        }

        for(let i = 1; i < monthDays[currentMonth]+1; i++) {
            cell.push(<div className={`cell flex-column-center ${clicked === i ? "clicked" : ""}`} onClick={() => selectedDate(i)} key={i}><p>{i}</p></div>)
        }



        return <div className="calender-grid">{cell}</div>
    }



    return (
        <div className="calendar-content-container flex-column-center">
            <div className="calender-month-container">
                <div className="month-year flex-row-left">
                    <h2>{month}</h2>
                    <h2>{year}</h2>
                </div>
                <div className="prev-next-buttons">
                    <button onClick={prevMonth} className="prev-month"><img className="left-arrow" src={LeftArrow} alt="Previous Month" /></button>
                    <button onClick={nextMonth} className="next-month"><img className="right-arrow" src={RightArrow} alt="Previous Month" /></button>
                </div>
            </div>
            <div className="calender-week-container">
                <h2>SUN</h2>
                <h2>MON</h2>
                <h2>TUE</h2>
                <h2>WED</h2>
                <h2>THU</h2>
                <h2>FRI</h2>
                <h2>SAT</h2>
            </div>
            <div className="calender-days-container">
                {calenderGrid()}
            </div>
        </div>
    )
}