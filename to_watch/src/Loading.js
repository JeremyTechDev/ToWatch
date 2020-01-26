import React from "react";

export default class Loading extends React.Component {
    state = { content: "Loading" };
    componentDidMount() {
      this.interval = window.setInterval(() => {
        this.state.content === "Loading..."
          ? this.setState({ content: "Loading" })
          : this.setState(({ content }) => ({ content: content + "." }));
      }, 300);
    }
  
    componentWillUnmount() {
      window.clearInterval(this.interval);
    }
  
    render() {
      return (
        <div className="page-loading">
          <h2>{this.state.content}</h2>
        </div>
      );
    }
  }