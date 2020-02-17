import React from 'react';
import CatHeader from './CatHeader'


import '../style/Column.css'

const data = [
    { id: "1", name: "Health & Safety (Occupational)", required: "8", trained: "8", status: "✔" },
    { id: "2", name: "SAP - Basic user", required: "3", trained: "4", status: "+1" },
    { id: "3", name: "SAP - Key user", required: "2", trained: "3", status: "+1" },
    { id: "4", name: "Shipment Planning", required: "8", trained: "8", status: "✔" },
    { id: "5", name: "SAP - categoryistics Transactions", required: "8", trained: "7", status: "-1" },
    { id: "6", name: "SAP Transactions - categoryistics Reporting", required: "5", trained: "5", status: "✔" },
    { id: "7", name: "Specific Customer categoryistics Instructions", required: "8", trained: "8", status: "✔" },
    { id: "8", name: "Transport Quotations", required: "8", trained: "8", status: "✔" },
    { id: "9", name: "Transport Documents", required: "8", trained: "6", status: "-2" },
    { id: "10", name: "Packaging requirements for dangerous materials", required: "8", trained: "7", status: "-1" },
    { id: "11", name: "Packaging by transport type", required: "8", trained: "8", status: "✔" },
    { id: "12", name: "Shipment Tracking", required: "8", trained: "8", status: "✔" },
    { id: "13", name: "German Language", required: "1", trained: "2", status: "+1" },
    { id: "14", name: "French Language", required: "1", trained: "1", status: "✔" },
    { id: "15", name: "Phone Usage", required: "8", trained: "8", status: "✔" }
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