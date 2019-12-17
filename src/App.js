// create your App component here
import React from 'react';

const API = "http://api.open-notify.org/astros.json";

export default class App extends React.Component {
    componentDidMount() {
        fetch(API)
        .then(resp => resp.json())
        .then(object => console.log(object))
    }

    render() {
        return(
            <div>yo</div>
        )
    }
}