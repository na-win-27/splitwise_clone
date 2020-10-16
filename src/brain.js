export default (allmembers, totalMembers, totalPrice) => {
  let idealPrice = totalPrice / totalMembers;
  let idealMem = allmembers.map((item) => {
    return {
      name: item.name,
      cost: item.cost - idealPrice,
    };
  });
  let a = idealMem.sort((a, b) => {
    return b.cost - a.cost;
  });
  let cnt = 0;
  let graph = new Map();
  while (a.length > 0 && totalPrice > 0) {
    let high = a[0];
    let low = a[a.length - 1];
    let debit = low.cost;
    let dname = low.name;
    let credit = high.cost;
    let cname = high.name;

    a.splice(0, 1);
    a.splice(a.length - 1, 1);

    let settled = Math.min(-debit, credit);
    debit += settled;
    credit -= settled;

    //console.log(dname, "will pay", settled, "to", cname);
    let prev = graph.get(dname);
    if (prev) {
      graph.set(dname, [...prev, { to: cname, cost: settled }]);
    } else {
      graph.set(dname, [{ to: cname, cost: settled }]);
    }

    if (debit !== 0) {
      let val = {
        name: dname,
        cost: debit,
      };
      a.push(val);
    }
    if (credit !== 0) {
      let val = {
        name: cname,
        cost: credit,
      };
      a.push(val);
    }

    a = a.sort((a, b) => {
      return b.cost - a.cost;
    });

    cnt += 1;
  }

  return {
    count: cnt,
    transactions: graph,
  };
};
