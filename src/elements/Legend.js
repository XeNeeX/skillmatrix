import React from 'react';
// eslint-desable-next-line
const Legend = () => {
    return (
        <div style={{ position: "absolute", top: "25vh", textAlign: "left" }}>
            <b>Verbal Scale</b>
            <table >
                <tr>
                    <td><span role="img">🎖</span> : Training request to level: Qualified</td>
                </tr>
                <tr>
                    <td><span role="img">🏅</span> : In progress to level: Qualified</td>
                </tr>
                <tr>
                    <td><span role="img">🥉</span> : Qualified</td>
                </tr>
                <tr>
                    <td><span role="img">🥈</span> : Training request to level: Trainer</td>
                </tr>
                <tr>
                    <td><span role="img">🥇</span> : In progress to level: Trainer</td>
                </tr>
                <tr>
                    <td><span role="img">🏆</span> : Trainer</td>
                </tr>
            </table>
        </div>
    );
}
export default Legend;
