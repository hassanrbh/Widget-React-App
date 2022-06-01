import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

export default class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputVal: "",
            isUserLoggedIn: false,
        }
        this.captureInput = this.captureInput.bind(this)
        this.captureSelectedTag = this.captureSelectedTag.bind(this)
        this.changeUserLogged = this.changeUserLogged.bind(this)
    }

    changeUserLogged(event) {
        event.preventDefault();
        this.setState(prevState => ({
            isUserLoggedIn: !prevState.isUserLoggedIn,
        }))
    }

    changes() {
        let matches = [];
        let { names } = this.props;
        
        names.forEach((person) => {
            const sub = person.slice(0, this.state.inputVal.length);
            if (this.state.inputVal.toLowerCase() === (sub.toLowerCase())) {
                matches.push(person);
            }
        });
        
        if (matches.length === 0) {
            matches.push("Non Matches Found");
        }

        return matches;
    }
    captureInput(event) {
        this.setState({ inputVal: event.currentTarget.value});
    }

    captureSelectedTag(event) {
        this.setState({ inputVal: event.currentTarget.textContent})
    }

    render() {
        const items = this.changes().map((person,personIdx) => (
            <li key={personIdx} onClick={this.captureSelectedTag} style={
                person === "Non Matches Found" ? {color: "red"} : null
            }>{person}</li>
        ))
        const LoggedIn = this.state.isUserLoggedIn;
        return (
            <div>
                <h1>Search Comp</h1>
                <div className="search">
                    <input type="text" onChange={this.captureInput} value={this.state.inputVal} />
                    <ul className="search-items">
                        <CSSTransitionGroup
                            transitionName="auto"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}>
                            {items}
                        </CSSTransitionGroup>
                    </ul>
                </div>
                <div>
                    The User is <b>{LoggedIn ? "Logged In" : "Not logged in"}</b>
                    <br />
                    <input type="button" onClick={this.changeUserLogged} value="Show User"></input>
                </div>
            </div>
        )
    };
};