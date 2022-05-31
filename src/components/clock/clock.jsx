import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            time: new Date(),
        }
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.interval_id = setInterval(this.tick,1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval_id)
    }

    tick() {
        this.setState({time: new Date()});
    }

    render() {
        let hours = this.state.time.getHours();
        let minutes = this.state.time.getMinutes();
        let seconds = this.state.time.getSeconds();

        hours = (hours < 10) ? `0${hours}` : hours;
        minutes = (minutes < 10) ? `0${minutes}` : minutes;
        seconds = (seconds < 10) ? `0${seconds}` : seconds;

        return (
            <div>
                <h1 class="clock-name">Clock</h1>
                <div className="clock">
                    <div className="clock-time">
                        <p>
                            <h1>Time:</h1>
                            <span>{hours}:{minutes}:{seconds} PDT</span>
                        </p>
                    </div>
                    <div className="clock-date">
                        <p>
                            <h1>Date:</h1>
                            <span>{this.state.time.toDateString()}</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Clock;