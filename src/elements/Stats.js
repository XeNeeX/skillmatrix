import React, { Component } from 'react';
import '../style/Stats.css'

export default class Stats extends Component {
    state = {

        stats: [
            { id: 1, required: "8", trained: "8", status: "✔" },
            { id: 2, required: "3", trained: "4", status: "+1" },
            { id: 3, required: "2", trained: "3", status: "+1" },
            { id: 4, required: "8", trained: "8", status: "✔" },
            { id: 5, required: "8", trained: "7", status: "-1" },
            { id: 6, required: "5", trained: "5", status: "✔" },
            { id: 7, required: "8", trained: "8", status: "✔" },
            { id: 8, required: "8", trained: "8", status: "✔" },
            { id: 9, required: "8", trained: "6", status: "-2" },
            { id: 10, required: "8", trained: "7", status: "-1" },
            { id: 11, required: "8", trained: "8", status: "✔" },
            { id: 12, required: "8", trained: "8", status: "✔" },
            { id: 13, required: "1", trained: "2", status: "+1" },
            { id: 14, required: "1", trained: "1", status: "✔" },
            { id: 15, required: "8", trained: "8", status: "✔" }
        ]
    }
    render() {
        const reqList = this.state.stats.map(stat => (
            <>
                <div className="tblstat">{stat.required}</div>
            </>
        ));

        const trdList = this.state.stats.map(stat => (
            <>
                <div className="tblstat2">{stat.trained}</div>
            </>
        ));

        const statList = this.state.stats.map(stat => (
            <div className="tblstat2">
                <div className={stat.trained >= stat.required ? 'statTrue' : 'statFalse'}>{stat.status}</div>
            </div>
        ));
        return (
            <>
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
                </span>
            </>
        );
    }
}
