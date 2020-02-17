import React from 'react';
import '../style/Matrix.css'
import Column from '../elements/Column';
import CatHeader from '../elements/CatHeader'

const Matrix = () => {
    return (
        <div className="matrix">
            <CatHeader />
            <span style={{ marginLeft: "9.6vw" }}>
                <Column />
            </span>
        </div>
    );
}

export default Matrix;