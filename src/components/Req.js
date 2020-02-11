import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/Req.css'

const categories = [
    { id: "1", name: "HSE", col: "1" },
    { id: "2", name: "Finance", col: "2" },
    { id: "3", name: "Logistics", col: "9" },
    { id: "4", name: "Management", col: "3" }
]

const requirements = [
    { id: "1", name: "Health & Safety (Occupational)" },
    { id: "2", name: "SAP - Basic User" },
    { id: "3", name: "SAP - Key User" },
    { id: "4", name: "Shipment Planning" },
    { id: "5", name: "SAP - Logistic Transactions" },
    { id: "6", name: "SAP Transactions - Logistics Reporting" },
    { id: "7", name: "Specific Customer Logistic Instructions" },
    { id: "8", name: "Transport Quotations" },
    { id: "9", name: "Transport Documents" },
    { id: "10", name: "Packaging requirements for dangerous materials" },
    { id: "11", name: "Packaging by transport type" },
    { id: "12", name: "Shipment Tracking" },
    { id: "13", name: "German Language" },
    { id: "14", name: "French Language" },
    { id: "15", name: "Phone Usage" }
]

const Req = () => {

    const reqList = requirements.map(req => (
        <td key={req.id}><div className="vert">{req.name}</div></td>
    ))

    const catList = categories.map(category => (
        <th key={category.id} colSpan={category.col}>{category.name}</th>
    ))

    return (
        <div className="tbl">
            <table className="table table-bordered">
                <tr>
                    {catList}
                </tr>
                <tr>
                    {reqList}
                </tr>
            </table>
        </div >
    );
}

export default Req;