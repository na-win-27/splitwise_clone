import React from "react";
import { connect } from "react-redux";
const Solution = () => {
  return <div></div>;
};

const mapStateToProps = (state) => {
  const { allItems, totalPrice, totalMembers, allMembers } = state;
  return {
    allItems: allItems,
  };
};

export default connect(mapStateToProps)(Solution);
