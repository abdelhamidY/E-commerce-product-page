import "./Details.scss";
import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
import { connect } from "react-redux";
import { addCartAction } from "../actions";
import { useState } from "react";
const Details = ({ dispatch }) => {
  const [quntity, setQuantity] = useState(0);
  const handlePlus = () => {
    setQuantity(quntity + 1);
  };
  const handleMinus = () => {
    setQuantity(quntity - 1);
  };
  return (
    <>
      <p className="title">Sneaker company</p>
      <h1>
        Fall Limited Edition <br /> Sneakers
      </h1>
      <p className="sub-heading">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole.they'll withstand everything the
        weather cann offer.
      </p>
      <div className="price-section">
        <h2 className="price">$125.00</h2>
        <span className="discount">50%</span>
        <p className="after-discount-mobile">$250.00</p>
      </div>
      <p className="after-discount">$250.00</p>
      <div className="buy-snicker">
        <div className="cart-details">
          <img className="minus" src={minus} alt="" onClick={handleMinus} />
          <p>{quntity}</p>
          <img className="plus" src={plus} alt="" onClick={handlePlus} />
        </div>
        <button
          className="btn btn-info"
          onClick={() =>
            dispatch(addCartAction("Fall Limited Edition Sneakers", quntity))
          }
        >
          Add to cart
        </button>
      </div>
    </>
  );
};
const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps)(Details);
