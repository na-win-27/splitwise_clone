const initialState = {
  allItems: [],
  totalPrice: 0,
  totalMembers: 0,
  allMembers: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const { item, member, price } = action.payload;
      return {
        ...state,
        allItems: [
          ...state.allItems,
          { item: item, member: member, price: price },
        ],
        totalPrice: state.totalPrice + price,
      };
    }
    case "ADD_MEMBER": {
      const { name } = action.payload;
      return {
        ...state,
        totalMembers: state.totalMembers + 1,
        allMembers: [...state.allMembers, { name: name }],
      };
    }
    default:
      return state;
  }
}
