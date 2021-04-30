import React, { Component } from "react";
import ShopCard from "../Components/ShopCard";
import { products } from "../Constants/DummyData";

export class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
    };
  }

  componentDidMount() {
    this.setState({
      products: products,
    });
  }

  render() {
    const { products } = this.state;

    return (
      <div className="container">
        <h1 className="my-5 text-center">Shop</h1>
        <div className="row">
          {products ? (
            products.map((val, ind) => <ShopCard product={val} />)
          ) : (
            <div class="spinner-border text-dark" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Shop;
