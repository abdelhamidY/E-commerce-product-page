import { createStore } from "redux";

import { addCartReducer } from "../reducers";

const store = createStore(addCartReducer, { shoesName: null, qty: null });

export default store;
