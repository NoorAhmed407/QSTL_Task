import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartCard from "../Components/cartCard";
import CheckoutTable from "../Components/CheckoutTable";

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
      checkoutView: false,
    };
  }

  render() {
    const { cart, totalPrice } = this.props;
    const { checkoutView } = this.state;
    return (
      <div className="container">
        <h1 className="my-5 text-center">
          {checkoutView ? "Checkout" : "Cart"}
        </h1>
        {!checkoutView ? (
          <>
            <div>
              {cart.length ? (
                cart.map((val, ind) => <CartCard item={val} key={ind + " "} />)
              ) : (
                <div className="text-center">
                  <p>No Item Found in Cart</p>
                  <Link to="/" className="btn btn-success">
                    Back To Shop Page
                  </Link>
                </div>
              )}
              {cart.length > 0 && (
                <div className="d-flex flex-row justify-content-around my-5">
                  <h3>Total price: {totalPrice}</h3>
                  <button
                    className="btn btn-success"
                    onClick={() => this.setState({ checkoutView: true })}
                  >
                    Checkout
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <CheckoutTable cartItem={cart} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalPrice: state.cart.totalPrice,
    cart: state.cart.cartItems,
  };
};

export default connect(mapStateToProps)(Cart);
