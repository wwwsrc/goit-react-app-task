import React, { Component } from "react";
import Notification from "./notification/notification";

class Counter extends Component {
  static defaultProps = {
    step: 1
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  handleClick = e => {
    let name = e.target.name;
    console.log(name);
    this.setState(prevState => ({
      [name]: prevState[name] + this.props.step
    }));
  };

  totalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countGoodFeedback = () => {
    if (this.totalFeedback() !== 0) {
      return Math.round((this.state.good / this.totalFeedback()) * 100);
    }
  };

  render() {
    // const { totalFeedback } = this.totalFeedback;
    const { good, neutral, bad } = this.state;
    return (
      <div className="css.container">
        <button type="button" name="good" onClick={this.handleClick}>
          Хорошо
        </button>
        <button type="button" name="neutral" onClick={this.handleClick}>
          Норм
        </button>
        <button type="button" name="bad" onClick={this.handleClick}>
          Плохо
        </button>
        {this.totalFeedback() === 0 ? (
          <Notification message={"nothing to view"} />
        ) : (
          <>
            <p>Хорошо: {good}</p>
            <p>Норм: {neutral}</p>
            <p>Плохо: {bad}</p>
            <h2>Total: {this.totalFeedback()}</h2>
            <h2>Good Feedback: {this.countGoodFeedback()}%</h2>
          </>
        )}
      </div>
    );
  }
}
export default Counter;
