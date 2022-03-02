import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Details from "./components/Details";
import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <Nav />
  </Provider>,

  document.querySelector("#nav")
);

ReactDOM.render(<Slider />, document.querySelector(".slider"));
ReactDOM.render(
  <Provider store={store}>
    <Details />
  </Provider>,

  document.querySelector(".details")
);
