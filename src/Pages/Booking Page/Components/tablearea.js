import React, { useState, useEffect } from "react"
import Circle from "../../../images/circle-icon.svg"
import SelectedCircle from "../../../images/selected-circle-icon.svg"

export default function TableArea(props) {

    const [clicked, setClicked] = useState(null)

    const changeIcon = (table) => {
        setClicked(table)
    }

    const tableOptions = ["Interior Table","Patio Table"]

    const tableSelect = []

    const selectedTable = tableOptions[clicked]

    useEffect(() => {
        props.onTableChange(selectedTable)
    },[clicked])

    for(let table = 0; table < tableOptions.length; table++) {
        tableSelect.push(
        <div key={table} className="table-select flex-row-center">
            <button onClick={() => changeIcon(table)} ><img className="small-icon" src={clicked === table ? SelectedCircle : Circle} alt="selection button" /></button>
            <h3>{tableOptions[table]}</h3>
        </div>)
    }

    return (
        <>
        <div className="title-container">
                <h2>SEATING AREA</h2>
                <p>Where would you like to be seated?</p>
                <div className="reservation-line"></div>
        </div>
        <div className="tablearea-select-container flex-row-center">
            {tableSelect}
        </div>
        </>
    )
}