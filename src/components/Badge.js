import React from "react";
import "./styles/Badge.css";
import imgHeaderBadge from "../images/badge-header.svg";
import Gravatar from "./Gravatar";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={imgHeaderBadge} alt="header_img" />
        </div>

        <div className="Badge__section-name">
          <Gravatar
            className="Badge__avatar"
            email={this.props.avatarUrl}
            alt={`Avatar ${this.props.firstName} ${this.props.lastName}`}
          />
          {/* <img className="Badge__avatar" src={this.props.avatarUrl} alt="" /> */}
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <a target="_blank" href="https://twitter.com/">@{this.props.twitter}</a>
        </div>

        <div className="Badge__footer">#MyBadge</div>
      </div>
    );
  }
}

export default Badge;
