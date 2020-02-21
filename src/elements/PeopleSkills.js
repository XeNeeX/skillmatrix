import React, { Component } from 'react';
import '../style/Stats.css'


export default class PeopleSkills extends Component {
    state = {
        names: [
            { id: 1, firstName: "Jan", lastName: "Kowalski" },
            { id: 2, firstName: "Jarosław", lastName: "Kowalski" }
        ]
    }
    render() {
        const nameList = this.state.names.map(name => (
            <div className="name"><b>{name.lastName}, {name.firstName}</b></div>
        ))
        return nameList
    }
}
