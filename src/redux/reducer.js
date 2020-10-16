const initialState = {
  allItems: [],
  totalPrice: 0,
  totalMembers: 3,
  allMembers: [
    { name: "navin", cost: 0 },
    { name: "RSN", cost: 0 },
    { name: "mani", cost: 0 },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const { item, member, price } = action.payload;
      let addedMember = state.allMembers.find((item) => item.name === member);
      if (addedMember) {
        addedMember.cost += price;
        return {
          ...state,
          allItems: [
            ...state.allItems,
            { item: item, member: member, price: price },
          ],
          totalPrice: state.totalPrice + price,
          allMembers: [...state.allMembers],
        };
      }
      break;
    }
    case "ADD_MEMBER": {
      const { name } = action.payload;
      return {
        ...state,
        totalMembers: state.totalMembers + 1,
        allMembers: [...state.allMembers, { name: name, cost: 0 }],
      };
    }
    default:
      return state;
  }
}
