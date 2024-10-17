import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  onIncreament = () => {
    this.setState((prev) => ({
      value: prev.value + 1,
    }));
  };
  onDecreament = () => {
    this.setState((prev) => ({
      value: prev.value == 0 ? prev.value : prev.value - 1,
    }));
  };
  render() {
    return (
      <div>
        <div className="text-4xl">Class Component</div>
        <div>
          <button
            className="py-2 px-4 rounded-lg bg-black text-white"
            onClick={this.onIncreament}
          >
            +
          </button>
          <span className="py-2 px-4 rounded-lg">{this.state.value}</span>
          <button
            onClick={this.onDecreament}
            className="py-2 px-4 rounded-lg bg-black text-white"
          >
            -
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
