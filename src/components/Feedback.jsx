import React from "react";
import { connect } from "react-redux";
const Feedback = (props) => {
  const listItems = props.allItems.map((item) => <h1>HI</h1>);
  return <div>{listItems}</div>;
};

const mapStateToProps = (state) => {
  const { allItems } = state;
  return {
    allItems: allItems,
  };
};

export default connect(mapStateToProps)(Feedback);
