import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "../Redux/Actions";

export class ShopCard extends Component {
  render() {
    const { product, addToCart } = this.props;
    const style = {
      imgStyle: {
        height: 100,
        width: 200,
      },
    };
    return (
      <div className="col-md-4 mb-4">
        <div className="card d-flex align-items-center">
          <img
            class="card-img-top"
            style={style.imgStyle}
            src={product.image}
            alt="Card cap"
          />

          <div className="card-body">
            <h5 className="card-title text-center">{product.name}</h5>

            <h3 className="text-center">${product.price}</h3>
          </div>
          <div className="mb-3">
            <button
              onClick={() => addToCart(product)}
              className="btn btn-block btn-primary"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (data) => {
      dispatch({ type: Actions.ADD_TO_CART, payload: data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopCard);
