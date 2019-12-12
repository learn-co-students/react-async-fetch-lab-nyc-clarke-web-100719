// create your App component here
import React from 'react';

export default class App extends React.Component{
    state ={
        peopleOnSpace: []
    }
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(json =>{
            this.setState({
                peopleOnSpace: json.people
            })
        })
    }
    render(){
        return(<p>{this.state.peopleOnSpace.map(p => p.name)}</p>)
    }

}