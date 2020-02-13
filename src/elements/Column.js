import React from 'react';

import '../style/Column.css'

const categories = [
    { id: "1", name: "HSE", class: "hse" },
    { id: "2", name: "Finance", class: "fin" },
    { id: "3", name: "Logistics", class: "log" },
    { id: "4", name: "Management", class: "mgm" }
]

const details = [
    { id: "1", name: "Health & Safety (Occupational)" },
    { id: "2", name: "SAP - Basic user" },
    { id: "3", name: "SAP - Key user" },
    { id: "4", name: "Shipment Planning" },
    { id: "5", name: "SAP - categoryistics Transactions" },
    { id: "6", name: "SAP Transactions - categoryistics Reporting" },
    { id: "7", name: "Specific Customer categoryistics Instructions" },
    { id: "8", name: "Transport Quotations" },
    { id: "9", name: "Transport Documents" },
    { id: "10", name: "Packaging requirements for dangerous materials" },
    { id: "11", name: "Packaging by transport type" },
    { id: "12", name: "Shipment Tracking" },
    { id: "13", name: "German Language" },
    { id: "14", name: "French Language" },
    { id: "15", name: "Phone Usage" },
]

const stats = [
    { id: "1", required: "8", trained: "8", status: "✔" },
    { id: "2", required: "3", trained: "4", status: "+1" },
    { id: "3", required: "2", trained: "3", status: "+1" },
    { id: "4", required: "8", trained: "8", status: "✔" },
    { id: "5", required: "8", trained: "7", status: "-1" },
    { id: "6", required: "5", trained: "5", status: "✔" },
    { id: "7", required: "8", trained: "8", status: "✔" },
    { id: "8", required: "8", trained: "8", status: "✔" },
    { id: "9", required: "8", trained: "6", status: "-2" },
    { id: "10", required: "8", trained: "7", status: "-1" },
    { id: "11", required: "8", trained: "8", status: "✔" },
    { id: "12", required: "8", trained: "8", status: "✔" },
    { id: "13", required: "1", trained: "2", status: "+1" },
    { id: "14", required: "1", trained: "8", status: "✔" },
    { id: "15", required: "8", trained: "8", status: "✔" },
]

const Column = () => {
    const catList = categories.map(category => (
        <div className={category.class}>
            {category.name}
        </div>
    ))
    const detList = details.map(detail => (
        <div className="category">
            {detail.name}
        </div>
    ))
    const statList = stats.map(stat => (
        <div className="stats">

        </div>
    ))
    return (
        <>
            {catList}
            <br />
            <div style={{ marginLeft: "556px", width: "1000px" }}>
                {detList}
            </div>
            <div>
                {statList}
            </div>
        </>
    );
}

export default Column;