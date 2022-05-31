import React from 'react';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curr_location: undefined,
        }
        this.api = "cce434873da185c08fc398b441c2c292";
    }
    

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.getLocation(position);
            })
        } else {
            console.warn("Your Browser does not support geolocation");
        }
    }

    async getLocation(pos) {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude; 
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.api}`;

        let res = await fetch(url);
        let location_data = await res.json();

        this.setState({curr_location: location_data})
    }

    render() {
        if (this.state.curr_location === undefined) {
            return (
                <div className="weather-loading">
                    <div className="loader"></div>
                </div>
            )
        } else {
            return (
                <div>
                    <h1 className="weather-header">Weather</h1>
                    <div className="weather">
                        <a>City: <span>{this.state.curr_location.name}</span></a>
                        <a>Temp: <span>{this.state.curr_location.main.temp}</span></a>
                        <a>Weather: <span>{this.state.curr_location.weather[0].description}</span></a>
                        <a>Status: <img src={`https://openweathermap.org/img/wn/${this.state.curr_location.weather[0].icon}@2x.png`}></img></a>
                    </div>
                </div>
            )
        }
    }
}