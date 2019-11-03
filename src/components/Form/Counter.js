import React, { Component } from 'react';
import './Counter.css'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment(e) {
        e.preventDefault();
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement(e) {
        e.preventDefault();
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return (
            <div className='counterbody'>
                <button className="minus" label='-' onClick={this.decrement.bind(this)}>-</button>
                <p className='num'>{this.state.count}</p>
                <button className="plus" label='+' onClick={this.increment.bind(this)}>+</button>
            </div>
        )
    }
}

export default Counter;