import React from 'react';

//eslint-desable-next-line
const Legend = () => {

    return (
        <div style={{ position: "absolute", float: "right", top: "25vh", textAlign: "left", width: "350px" }}>
            <b>Verbal Scale</b>
            <table >
                <tr>
                    <td><span role="img" aria-label="state6">🎖</span> : Training request to level: Qualified</td>
                </tr>
                <tr>
                    <td><span role="img" aria-label="state5">🏅</span> : In progress to level: Qualified</td>
                </tr>
                <tr>
                    <td><span role="img" aria-label="state4">🥉</span> : Qualified</td>
                </tr>
                <tr>
                    <td><span role="img" aria-label="state3">🥈</span> : Training request to level: Trainer</td>
                </tr>
                <tr>
                    <td><span role="img" aria-label="state2">🥇</span> : In progress to level: Trainer</td>
                </tr>
                <tr>
                    <td><span role="img" aria-label="state1">🏆</span> : Trainer</td>
                </tr>
            </table>
        </div>
    );
}
export default Legend;
