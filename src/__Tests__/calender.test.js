import {render, screen, cleanup, fireEvent} from "@testing-library/react"
import {useState, useEffect} from "react"
import LeftArrow from "../images/left-arrow.svg"
import RightArrow from "../images/right-arrow.svg"

afterEach(() => {
    cleanup();
})

function Calender () {
    const currentDate = new Date()
    const [currentMonth,setCurrentMonth] = useState(currentDate.getMonth());
    const currentYear = currentDate.getFullYear()
    const monthNamesShort = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
    const [month,setMonth] = useState(monthNamesShort[currentMonth])
    const [year, setYear] = useState(currentYear)
    const [clicked, setClicked] = useState(null)
    const [selectedDayNum, setSelectedDayNum] = useState("")
    const SelectedDate = new Date (year, currentMonth, selectedDayNum)
    const weekNames = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const dayOfWeek = weekNames[SelectedDate.getDay()]
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const changeSelectedDayNum = (i) => {
        setSelectedDayNum(i)
    }




    function prevMonth() {
        setCurrentMonth(currentMonth - 1)
        setClicked(null)
        if(currentMonth < 1) {
            setCurrentMonth(11)
            setYear(year - 1)
        }
    }

    function nextMonth() {
        setCurrentMonth(currentMonth + 1)
        setClicked(null)
        if(currentMonth > 10) {
            setCurrentMonth(0)
            setYear(year + 1)
        }
    }

    useEffect(() => {
        setMonth(monthNamesShort[currentMonth]);
    },[currentMonth])


    const calenderGrid = () => {

        const cell = []

        for(let i = 1; i <= monthDays[currentMonth]; i++) {
            cell.push(
                <div data-testid={`num-cell-${i}`} key={i} onClick={() => changeSelectedDayNum(i)}>
                    <p data-testid={`day-num-${i}`}>{i}</p>
                </div>
            )
        }

        return (
            <div>
                {cell}
            </div>
        )
    }

    return (
        <>
        <h2 data-testid="displayed-month">{month}</h2>
        <h2 data-testid="displayed-year">{year}</h2>
        <h2 data-testid="current-month-num">{currentMonth}</h2>

        <button data-testid="calender-prev-button" onClick={prevMonth} className="prev-month"><img className="left-arrow" src={LeftArrow} alt="Previous Month" /></button>

        <button data-testid="calender-next-button" onClick={nextMonth} className="next-month"><img className="right-arrow" src={RightArrow} alt="Previous Month" /></button>

        <div>
            <h2 data-testid="displayed-day-number">{`Date: ${dayOfWeek}, ${month} ${selectedDayNum}`}</h2>
        </div>
        <div>
             {calenderGrid()}
        </div>
        </>
    )
}

// ---------------------------
// CALENDER TESTS
// ---------------------------

test("Should Change the Displayed Date to: Monday, Oct 23", () => {
    render(<Calender />)

    const prevButton = screen.getByTestId('calender-prev-button')
    const nextButton = screen.getByTestId('calender-next-button')
    const Month = screen.getByTestId('displayed-month')
    const Year = screen.getByTestId('displayed-year')
    const currentMonthNum = screen.getByTestId("current-month-num")

    // Next Button : Changes The Current Month ToThe Next Month
    fireEvent.click(nextButton)




    const displayedNum = screen.getByTestId("displayed-day-number")
    const numCell = screen.getByTestId("num-cell-24")

    // Date Calender Cell : On Click, selects A Calender Date
    fireEvent.click(numCell)



    expect(displayedNum).toHaveTextContent("Date: Tuesday, OCT 24")

})


