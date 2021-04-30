import React, { Component } from "react";

export class Sell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sellData: null,
    };
  }

  componentDidMount() {
    const sellData = JSON.parse(localStorage.getItem("sell"));
    console.log("SellData", sellData);
    this.setState({
      sellData: sellData,
    });
  }
  render() {
    return (
      <div className="container">
        <h1 className="my-5 text-center">Sells History</h1>
        <div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.sellData !== null &&
                this.state.sellData.map((val, ind) => {
                  return (
                    <tr key={ind + " "}>
                      <th scope="row">{val.id}</th>
                      <td>
                        {val.name}{" "}
                        <span>
                          <img src={val.image} width="50" height={25} />
                        </span>
                      </td>
                      <td>{val.price}</td>
                      <td>{val.date}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {this.state.sellData === null && (
            <h4 className="text-center">No Item Found Yet</h4>
          )}
        </div>
      </div>
    );
  }
}

export default Sell;
