import React, { Component } from "react";
import img404 from "../images/404Error.svg";

export class NotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container ">
          <img className="w-75 mx-auto d-block" src={img404} alt="" />
        </div>
      </React.Fragment>
    );
  }
}

export default NotFound;
