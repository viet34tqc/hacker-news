import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../Buttons/index.js";

export default class Table extends Component {
  render() {
    const { list, onDismiss } = this.props;
    return (
      <div>
        {list.map(item => (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>
              <Button onClick={() => onDismiss(item.objectID)}>Dismiss</Button>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

Table.propTypes = {
  list: PropTypes.array.isRequired,
  onDismiss: PropTypes.func.isRequired
};
