import React, { Component } from 'react';

export default class PeopleSkills extends Component {
    render() {
        state = [
            { id: 1, firstName: "Jan", lastName: "Kowalski", }
        ]
        const symbols = ['🎖', '🏅', '🥉', '🥈', '🥇', '🏆']
        return (
            <div> PeopleSkills </div>
        );
    }
}
