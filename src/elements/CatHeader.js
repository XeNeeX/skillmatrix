import React from 'react';

const names = [
    { id: "1", name: "HSE", class: "hse" },
    { id: "2", name: "Finance", class: "fin" },
    { id: "3", name: "Logistics", class: "log" },
    { id: "4", name: "Management", class: "mgm" },
]

const CatHeader = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row", flexGrow: "1", flexShrink: "1", alignContent: "center", marginLeft: "25%" }}>
            <div className="hse">HSE</div>
            <div className="fin">Finance</div>
            <div className="log">Logistics</div>
            <div className="mgm">Management</div>
        </div>
    )
}


export default CatHeader;