import actionTypes from "../actiontypes";
import img1 from "../assets/image-product-1.jpg";
export const addCartReducer = (state, action) => {
  if (action.type === actionTypes.ADD_POST) {
    const newPosts = {
      shoesName: action.payload.shoesName,
      qty: action.payload.quantity,
      image: img1,
      price: 125,
    };

    return newPosts;
  }
  return state;
};
