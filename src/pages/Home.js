import React, { Component } from "react";
import { Link } from "react-router-dom";
import imgHome from "../images/home.svg";
import "./styles/Badges.css";

export class Home extends Component {
  render() {
    return (
      <>
        <div className="BadgeNew__hero shadow">
            <h1 className="text-light my-0 text-center ">Bienvenido</h1>
        </div>
          <div className="container">
            <div className="row">
                <img className="mx-auto d-block img-fluid col-6" src={imgHome} alt="" />
                <div className="col-6">
                    <h3 className="mt-5">Print your badge</h3>
                <p className="col-12 text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nam possimus enim quia ut? Nihil sunt dicta excepturi maiores saepe ex assumenda eaque veritatis eos dolore, perferendis odio nesciunt ab.</p>
                <Link to="/badges">
                    <div className="btn btn-success mt-3 px-5 py-2">Let Start!</div>
                </Link>
                </div>

            </div>
            
          </div>
        
      </>
    );
  }
}

export default Home;
