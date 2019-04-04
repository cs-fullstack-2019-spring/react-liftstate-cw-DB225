import React, { Component } from 'react';
import './App.css';

class Players extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
        this.clickMe = this.clickMe.bind(this);
    }

    clickMe(e){
        this.props.winner('player');
        this.setState(function (prevState, props) {
            return{
                count: prevState.count+1
            }
        });
    }


    render() {
        return (
            <div className="App">
                <h1>Player{this.props.number}</h1>
                <h3>Score:{this.state.count}</h3>
                <button onClick={this.clickMe}>1pt</button>
            </div>
        );
    }
}

export default Players;
