import React from 'react';


import '../style/Column.css'

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
    { id: "14", required: "1", trained: "1", status: "✔" },
    { id: "15", required: "8", trained: "8", status: "✔" },
]

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

const statreq = [
    { id: "1", name: "Required" },
    { id: "2", name: "Trained" },
    { id: "3", name: "Training status" }
]

const people = [
    { id: "1", firstName: "Jan", lastName: "Kowalski" },
    { id: "2", firstName: "Tomasz", lastName: "Nowak" },
    { id: "3", firstName: "Bartosz", lastName: "Nadolski" },
    { id: "4", firstName: "Dominik", lastName: "Bos" },
    { id: "5", firstName: "Paweł", lastName: "Furowicz" },
    { id: "6", firstName: "Kamil", lastName: "Nodocki" },
    { id: "7", firstName: "Piotr", lastName: "Grzybowski" },
    { id: "8", firstName: "Karol", lastName: "Strzelecki" },
]


const Column = () => {

    const nameList = people.map(person => (
        <div className="name">
            <div><b>{person.lastName}, {person.firstName}</b></div>
        </div>
    ))


    const catList = categories.map(category => (
        <div className={category.class}>
            {category.name}
        </div>
    ))
    const detList = details.map(detail => (
        <div className="category position-relative">
            {detail.name}
        </div>
    ))

    const reqList = stats.map(stat => (
        <>
            <div className="tblstat">{stat.required}</div>
        </>
    ));

    const trdList = stats.map(stat => (
        <>
            <div className="tblstat2">{stat.trained}</div>
        </>
    ));

    const statList = stats.map(stat => (
        <div className="tblstat2">
            <div className={stat.trained >= stat.required ? 'statTrue' : 'statFalse'}>{stat.status}</div>
        </div>
    ));

    const statReq = statreq.map(name => (
        <div className="tblreq">{name.name}</div>
    ))
    return (
        <>
            <div className="det">
                <span className="cat">
                    {catList}
                </span>
                <br />
                {detList}

                <br />
                <span className="cat">
                    {reqList}
                </span>
                <br />
                <span className="cat">
                    {trdList}
                </span>
                <br />
                <span className="cat">
                    {statList}
                    <span className="req">
                        {statReq}
                        <span className="name">
                            {nameList}
                        </span>
                    </span>
                </span>
                <div>
                </div>
            </div>
        </>
    );
}

export default Column;