import React from 'react';

class App extends React.Component {

    state = {
        peeps: []
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(peeps => this.setState({ peeps }))
    }

    render() {
        return <div>{this.state.peeps}</div>
    }
}

export default App;
