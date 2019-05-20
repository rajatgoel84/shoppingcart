import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  
  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-secondary m-2">
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;