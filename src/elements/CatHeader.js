import React from 'react';


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