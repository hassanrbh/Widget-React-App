import React from 'react';
import Clock from './components/clock/clock'
import Weather from './components/weather/weather'
import Search from './components/search/search'

const names = [
    "Abba",
    "Baryney",
    "Barbara",
    "jeff",
    "Jenny",
    "Sarah",
    "Sally",
    "Xander"
]

export default class Widget extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="widget-container">
                <Clock />                    
                <Weather />
                <Search names={names}/>
            </div>
        )
    }
}
