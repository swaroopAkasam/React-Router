import { Component } from "react";
import './index.css';

class Counter extends Component {
    onIncrement = () => {
        console.log("Increment clicked")
    }
    render() {
        return (
            <div className="container">
                <h1 className="heading">Counter</h1>
                <p className="count">0</p>
                <div>
                    <button className="button" onClick={this.onIncrement}>Increase</button>
                    <button className="button">Decrease</button>
                </div>
            </div>
        )
    }
}
export default Counter