import React, { Component } from "react";
import "./styles/PageLoader.css"

export class PageLoader extends Component {
  render() {
    return (
      <>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="lds-ripple">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PageLoader;
