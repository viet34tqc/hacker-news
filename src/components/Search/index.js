import React, { Component } from "react";

export default class Search extends Component {
  render() {
    const { value, onChange, onSubmit, children } = this.props;
    return (
      <form onSubmit={onSubmit}>
        {children}
        <input type="text" value={value} onChange={onChange} />
        <button type="submit">{children}</button>
      </form>
    );
  }
}
