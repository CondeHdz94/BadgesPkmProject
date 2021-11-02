import React, { Component } from "react";
import img404 from "../images/404Error.svg";

export class PageError extends Component {
  render() {
      debugger
    return (
      <>
        <div className="container text-center">
            <h3 className="mt-3 text-muted">{this.props.msgError.error.message}</h3>
          <img className="w-50 mx-auto d-block" src={img404} alt="" />
        </div>
      </>
    );
  }
}

export default PageError;
