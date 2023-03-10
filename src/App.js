import React, { Component } from "react";
import CardList from "./CardList";
import Searchbox from "./SearchBox";
import './App.css'
import { robots } from "./robots";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }))
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
        <div className="tc">
            <h1 className="f1">Robofriends</h1>
            <Searchbox searchChange={this.onSearchChange} />
            <CardList robots={filteredRobots} />
        </div>
        )
    }
}

export default App; 