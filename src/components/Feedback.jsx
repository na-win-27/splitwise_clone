import React from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const Feedback = (props) => {
  console.log(props.allItems);
  const list = props.allItems.map((transaction) => (
    <Card className="list" key={transaction.price} variant="outlined">
      <CardContent>
        {transaction.member +
          "  bought  " +
          transaction.item +
          "  at an amount of  " +
          transaction.price}
      </CardContent>
    </Card>
  ));
  const def = (
    <Card>
      <CardContent className="list">Add Transaction to Continue</CardContent>
    </Card>
  );
  return (
    <div>
      <h2 className="head">Transactions Till Now</h2>
      <div className="flex-col">{props.allItems.length > 0 ? list : def}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { allItems } = state;
  return {
    allItems: allItems,
  };
};

export default connect(mapStateToProps)(Feedback);
