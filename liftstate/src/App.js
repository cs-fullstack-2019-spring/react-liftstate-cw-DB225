import React, { Component } from 'react';
import './App.css';
import Players from "./Players";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
           name: ""
        };
    }

    winner=(player)=>{
        this.setState({name: player});
    };

  render() {
    return (
      <div className="App">
          <h1>Last Player &rarr; {this.state.name}</h1>
        <Players number={1} winner={this.winner}/>
        <Players number={2} winner={this.winner}/>
      </div>
    );
  }
}

export default App;
