import "./Nav.scss";
import avatar from "../assets/image-avatar.png";
import cart from "../assets/icon-cart.svg";
import { connect } from "react-redux";
import { useState } from "react";
import deleteImage from "../assets/icon-delete.svg";
import menu from "../assets/icon-menu.svg";
const Nav = props => {
  const [activate, setActivate] = useState(false);
  console.log(props.state);
  const active = props.state.qty > 0 ? "" : "hidden";
  const showCart = activate ? "" : "hidden";
  const handleCart = () => {
    setActivate(!activate);
  };
  // $125.00 x 3 $375.00
  const showContent = () => {
    if (props.state.qty === null) {
      return <span>Your cart is empty</span>;
    } else {
      return (
        <>
          <div className="top">
            <img src={props.state.image} alt="" />
            <h4 className="cart-details">
              {props.state.shoesName} <br />
              {`$${props.state.price}.00 x ${props.state.qty} `}
              <span>{`$${props.state.price * props.state.qty}`}.00</span>
            </h4>
            <img className="delete-image" src={deleteImage} alt="" />
          </div>
          <div className="bottom">
            <button>Checkout</button>
          </div>
        </>
      );
    }
  };
  return (
    <>
      <div className="left">
        <img className="menu" src={menu} alt="" />
        <h1>sneakers</h1>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="right">
        <img className="cart" src={cart} alt="cart" onClick={handleCart} />
        <span className={active}>{props.state.qty}</span>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={`main-cart ${showCart}`}>
        <h4>Cart</h4>
        <hr />
        <div className="content">{showContent()}</div>
      </div>
    </>
  );
};

const mapToState = state => {
  return { state };
};
export default connect(mapToState)(Nav);
