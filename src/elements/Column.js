import React from 'react';


import '../style/Column.css'

const data = [
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
    { id: "15", name: "Phone Usage" }
]


const Column = () => {

    const column = data.map(info => (
        <div className="category">{info.name}</div>
    ))

    return (
        <>
            {column}
        </>
    );
}

export default Column;