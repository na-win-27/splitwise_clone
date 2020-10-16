import React from "react";
import { connect } from "react-redux";
import brain from "../brain";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const Solution = (props) => {
  const { count, transactions } = brain(
    props.allMembers,
    props.totalMembers,
    props.totalPrice
  );
  let list = [];
  for (let entry of transactions) {
    let name = entry[0];
    let det = entry[1];
    det.map((tran) => list.push({ payer: name, to: tran.to, cost: tran.cost }));
  }
  let final = null;
  const def = (
    <Card>
      <CardContent className="list">Add Transactions To continue</CardContent>
    </Card>
  );
  if (list) {
    final = list.map((transition) => (
      <Card key={transition.payer} className="list">
        <CardContent>
          {transition.payer +
            "  pays  " +
            transition.to +
            "  an amount of  " +
            transition.cost}
        </CardContent>
      </Card>
    ));
  }

  return (
    <div>
      <h2 className="head">Shortest Cash Flow</h2>
      {count ? <p>Total of {count} transactions</p> : null}
      <div className="flex-col">{count ? final : def}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { allItems, totalPrice, totalMembers, allMembers } = state;
  return {
    allItems: allItems,
    allMembers: allMembers,
    totalPrice: totalPrice,
    totalMembers: totalMembers,
  };
};

export default connect(mapStateToProps)(Solution);
