import React, { Component } from "react";
class SearchPanel extends Component {
  state = {
    value: ""
  };
handleSubmit = (e)=> {
    e.preventDefault()
    this.props.onHandleSubmit(this.state.value)
}
  handleChange = e => {
     
    const value = e.target.value;
    this.setState({ value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="search"
          placeholder="Search"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <button>Go!</button>
      </form>
    );
  }
}

export default SearchPanel;
