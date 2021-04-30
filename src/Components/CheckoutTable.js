import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as Actions from "../Redux/Actions";

export class CheckoutTable extends Component {
  MaintainSell = () => {
    const sellData = {
      ...this.props.cartItem,
      date: new Date(),
    };

    let data = [];
    const sellItems = JSON.parse(localStorage.getItem("sell"));

    console.log("Items Cart", sellItems);

    if (sellItems === null) {
      data = [...data, sellData];
      localStorage.setItem("sell", JSON.stringify(data));
    } else {
      data = [...sellItems, sellData];
      localStorage.setItem("sell", JSON.stringify(data));
    }
    this.props.sold();
    this.props.history.push("/");
  };

  render() {
    const { cartItem, totalPrice } = this.props;
    return (
      <div>
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Item Name </th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItem.map((val, ind) => (
              <tr key={ind + " "}>
                <th scope="row">{ind + 1}</th>
                <td>
                  {val.name}
                  <span>
                    <img src={val.image} width={50} height={25} />
                  </span>{" "}
                </td>
                <td>{val.quantity}</td>
                <td>{val.price} </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-right">
          <h5>Total: {totalPrice} </h5>
          <button className="btn btn-primary" onClick={this.MaintainSell}>
            Purchase
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalPrice: state.cart.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sold: () => {
      dispatch({ type: Actions.SOLD });
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CheckoutTable)
);
