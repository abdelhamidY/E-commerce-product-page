import actionTypes from "../actiontypes";

export const addCartAction = (shoes, qtys) => {
  return {
    type: actionTypes.ADD_POST,
    payload: { shoesName: shoes, quantity: qtys },
  };
};
