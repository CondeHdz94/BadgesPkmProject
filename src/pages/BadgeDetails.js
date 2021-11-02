import header from "../images/astronauts.svg";
import "./styles/BadgeDetails.css";
import Badge from "../components/Badge";

import React, { Component } from "react";
import api from "../api";
import PageLoader from "../components/PageLoader";
import Count from "../components/Count";

export class BadgeDetails extends Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "Algo",
      twitter: "",
    },
  };

  handleClickBadges = () => {
    this.props.history.push("/badges");
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e) => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({
        loading: false,
        form: data,
      });
    } catch (error) {
      this.setState({
        loading: true,
        error: error,
      });
    }
  };

  render() {
    if (this.state.loading) {
        return <PageLoader></PageLoader>;
      }
    return (
      <>

          <div className="Badges">
            <div className="BadgeDetails__hero mb-3 ">
              <div className="row justify-content-center align-items-center">
                <img
                  src={header}
                  alt=""
                  className="BadgeDetails__hero-img col-6"
                />

                <h1 className="col-6 text-center text-light mb-0">
                  {this.state.form.firstName} {this.state.form.lastName }
                </h1>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-6">
                <Count></Count>
                <Badge
                  firstName={this.state.form.firstName }
                  lastName={this.state.form.lastName }
                  avatarUrl={this.state.form.email }
                  jobTitle={this.state.form.jobTitle }
                  twitter={this.state.form.twitter }
                />
                <button
                  onClick={this.handleClickBadges}
                  className="btn btn-info col-12 text-light py-3 mt-3 mb-5"
                >
                  See all badges
                </button>
              </div>
            </div>
          </div>

      </>
    );
  }
}

export default BadgeDetails;
