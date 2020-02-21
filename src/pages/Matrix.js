import React from 'react';
import '../style/Matrix.css'
import Column from '../elements/Column';
import CatHeader from '../elements/CatHeader'
import Stats from '../elements/Stats'
import Legend from '../elements/Legend'
import PeopleSkills from '../elements/PeopleSkills'
import 'bootstrap/dist/css/bootstrap.min.css'



const Matrix = () => {
    return (
        <>
            <div className="matrix parent">
                <div className="div2">
                    <CatHeader />
                    <span style={{ marginLeft: "9.7vw" }}>
                        <Column />
                    </span>
                    <div style={{ marginLeft: "9.7vw" }}>
                        <Stats />
                    </div>
                </div>
                <div className="div1">
                    <PeopleSkills />
                </div>
            </div>
            <div>
                <Legend />
            </div>
        </>
    );
}

export default Matrix;