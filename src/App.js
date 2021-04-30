import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Sell from "./Pages/Sell";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={Shop} />
          <Route path="/cart" component={Cart} />
          <Route path="/sell" component={Sell} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
