import React from "react";
import "./styles/BadgeNew.css";

import header from "../images/platziconf-logo.svg";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm.js";

import api from "../api.js";
import PageLoader from "../components/PageLoader";

class BadgeNew extends React.Component {
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

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("stop send");
    // console.log(this.state)
    this.setState({
      loading: true,
      error: null,
    });

    try {
      
        await api.badges.create();

        this.setState({
          loading: false,
        });

        const formInputs = document.querySelectorAll("input[name]");
        formInputs.forEach((element) => {
          element.value = "";
        });
      
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  handleClickBadges = () => {
    this.props.history.push('/badges');
  }

  render() {
    if (this.state.loading) {
      return <PageLoader></PageLoader>;
    }

    return (
      <React.Fragment>
        <div className="BadgeNew__hero ">
          <img className="BadgeNew__hero-img" src={header} alt="" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                avatarUrl={this.state.form.email || ""}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                twitter={this.state.form.twitter || "TWITTER"}
              />
              <button onClick={this.handleClickBadges} className="btn btn-info col-12 text-light py-3 mt-3">
                See all badges
              </button>
            </div>
            
            <div className="col-6">
            <h1>New Attendant</h1>
              <BadgeForm
                changesFromBadgeNew={this.handleChange}
                onSubmitChangues={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>

          
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
