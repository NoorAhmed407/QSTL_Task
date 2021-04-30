import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "../Redux/Actions";

export class CartCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productPrice: this.props.item.price,
      count: 1,
      updatedPrice: 0,
    };

    this.state.updatedPrice = this.state.productPrice;
  }

  Increment = () => {
    const { count, productPrice } = this.state;

    this.setState(
      {
        count: count + 1,
        updatedPrice: (count + 1) * productPrice,
      },
      () => {
        const itemData = {
          ...this.props.item,
          price: productPrice * (count + 1),
          quantity: count + 1,
        };

        this.props.updateItem(itemData);
      }
    );
  };

  Decrement = () => {
    const { count, productPrice } = this.state;

    if (count > 0) {
      this.setState(
        {
          count: count - 1,
          updatedPrice: (count - 1) * productPrice,
        },
        () => {
          const itemData = {
            ...this.props.item,
            price: productPrice * (count - 1),
            quantity: count - 1,
          };

          this.props.updateItem(itemData);
        }
      );
    }
  };

  render() {
    const { item } = this.props;
    const { count, updatedPrice } = this.state;
    const style = {
      imgStyle: {
        height: 200,
        width: 400,
      },
    };
    return (
      <div>
        <div class="card text-center my-4">
          <div class="card-header">
            <div
              className="text-right"
              onClick={() => this.props.removeItem(item)}
              style={{ cursor: "pointer" }}
            >
              X
            </div>
          </div>

          <div class="card-body">
            <img
              class="card-img-top"
              style={style.imgStyle}
              src={item.image}
              alt="Card cap"
            />
            <h4 class="card-title mt-3">{item.name}</h4>
            <h5 class="card-title">Price ${updatedPrice}</h5>
            <div className="d-flex flex-row justify-content-around">
              <button
                className="btn btn-primary btn-sm"
                onClick={this.Increment}
              >
                {" "}
                +{" "}
              </button>
              <h3>{count}</h3>
              <button
                className="btn btn-danger btn-sm"
                onClick={this.Decrement}
              >
                {" "}
                -{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (data) => {
      dispatch({ type: Actions.DELETE_CART_ITEM, payload: data });
    },

    updateItem: (data) =>
      dispatch({ type: Actions.UPDATE_CART_ITEM, payload: data }),
  };
};

export default connect(null, mapDispatchToProps)(CartCard);
