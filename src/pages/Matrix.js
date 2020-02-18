import React from 'react';
import '../style/Matrix.css'
import Column from '../elements/Column';
import CatHeader from '../elements/CatHeader'
import Stats from '../elements/Stats'


const Matrix = () => {
    return (
        <div className="matrix">
            <CatHeader />
            <span style={{ marginLeft: "9.7vw" }}>
                <Column />
            </span>
            <div style={{ marginLeft: "9.7vw" }}>
                <Stats />
            </div>
        </div>
    );
}

export default Matrix;