import React from 'react';
import "./calculator.css";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        //TODO: need to figure out all the vars and declare states and handlers
        this.state = {
            N: 0,
            R: 0,
            fp: 0,
            ne: 0,
            fl: 0,
            fi: 0,
            fc: 0,
            L: 0,
        };
        this.handleNChange = this.handleNChange.bind(this);
        this.handleRChange = this.handleRChange.bind(this);
        this.handlefpChange = this.handlefpChange.bind(this);
        this.handleneChange = this.handleneChange.bind(this);
        this.handleflChange = this.handleflChange.bind(this);
        this.handlefiChange = this.handlefiChange.bind(this);
        this.handlefcChange = this.handlefcChange.bind(this);
        this.handleLChange = this.handleLChange.bind(this);
    }
    handleNChange = (event) => {
        this.setState({N: event.target.value});
    }
    handleRChange = (event) => {
        this.setState({R: event.target.value});
    }
    handlefpChange = (event) => {
        this.setState({fp: event.target.value});
    }
    handleneChange = (event) => {
        this.setState({ne: event.target.value});
    }
    handleflChange = (event) => {
        this.setState({fl: event.target.value});
    }
    handlefiChange = (event) => {
        this.setState({fi: event.target.value});
    }
    handlefcChange = (event) => {
        this.setState({fc: event.target.value});
    }
    handleLChange = (event) => {
        this.setState({L: event.target.value});
    }
    // create function called calculateN that multiplies all state values together except N to get N
    calculateN = () => {
        this.setState({N: this.state.R * this.state.fp * this.state.ne * this.state.fl * this.state.fi * this.state.fc * this.state.L});
    }
    render() {
        return (
            <div>
                <form>
                    <label>
                        R:
                        <input type="number" value={this.state.R} onChange={this.handleRChange} />
                    </label>
                    <label>
                        fp:
                        <input type="number" value={this.state.fp} onChange={this.handlefpChange} />
                    </label>
                    <label>
                        ne:
                        <input type="number" value={this.state.ne} onChange={this.handleneChange} />
                    </label>
                    <label>
                        fl:
                        <input type="number" value={this.state.fl} onChange={this.handleflChange} />
                    </label>
                    <label>
                        fi:
                        <input type="number" value={this.state.fi} onChange={this.handlefiChange} />
                    </label>
                    <label>
                        fc:
                        <input type="number" value={this.state.fc} onChange={this.handlefcChange} />
                    </label>
                    <label>
                        L:
                        <input type="number" value={this.state.L} onChange={this.handleLChange} />
                    </label>
                </form>
                <p>R: {this.state.R}</p>
                <p>fp: {this.state.fp}</p>
                <p>ne: {this.state.ne}</p>
                <p>fl: {this.state.fl}</p>
                <p>fi: {this.state.fi}</p>
                <p>fc: {this.state.fc}</p>
                <p>L: {this.state.L}</p>
                <button onClick={this.calculateN}>Calculate N</button>
                <p>N: {this.state.N}</p>
            </div>
        );
    }
}

export default Calculator;