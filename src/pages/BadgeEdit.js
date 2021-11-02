import React from "react";
import "./styles/BadgeEdit.css";

import header from "../images/platziconf-logo.svg";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm.js";

import api from "../api.js";
import PageLoader from "../components/PageLoader";

class BadgeEdit extends React.Component {
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
      await api.badges.update(this.props.match.params.badgeId, this.state.form);

      this.setState({
        loading: false,
      });

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  handleClickBadges = () => {
    this.props.history.push("/badges");
  };

  render() {
    if (this.state.loading) {
      return <PageLoader></PageLoader>;
    }

    return (
      <React.Fragment>
        <div className="BadgeEdit__hero ">
          <img className="BadgeEdit__hero-img" src={header} alt="" />
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
              <button
                onClick={this.handleClickBadges}
                className="btn btn-info col-12 text-light py-3 mt-3"
              >
                See all badges
              </button>
            </div>

            <div className="col-6">
            <h1>Edit Attendant</h1>
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

export default BadgeEdit;
