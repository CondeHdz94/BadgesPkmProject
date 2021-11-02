import React from "react";

class BadgeForm extends React.Component {
  // state = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   jobTitle: "Algo",
  //   twitter: "",
  // };

  // handleChangeInput = (e) => {
  //   // console.log({
  //   //     name: e.target.name,
  //   //     value: e.target.value
  //   // });
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  handleClick = (e) => {};

  handleClickClear = (e) => {
    console.log("clicked");
    e.preventDefault();
    const formInputs = document.querySelectorAll("input[name]");
    formInputs.forEach((element) => {
      element.value = "";
    });

    const divName = document.querySelectorAll("div.Badge__section-name> h1")[0];

    divName.childNodes[0].textContent = "FIRST_NAME";
    divName.childNodes[4].textContent = "LAST_NAME";

    document.querySelectorAll("div.Badge__section-info> h3")[0].textContent =
      "JOB_TITLE";

    document.querySelectorAll("div.Badge__section-info> a")[0].textContent =
      "@TWITTER";

    document.querySelectorAll("div.Badge__section-name> img")[0].src =
      "https://www.gravatar.com/avatar/d41d8cd98f00b204e9800998ecf8427e?d=identicon";
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("stop send");
  //   console.log(this.state)
  // };

  render() {
    return (
      <React.Fragment>
        
        <form action="" onSubmit={this.props.onSubmitChangues}>
          <div className="mb-3">
            <label className="form-label fw-bold">First Name:</label>
            <input
              onChange={this.props.changesFromBadgeNew}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Last Name:</label>
            <input
              onChange={this.props.changesFromBadgeNew}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Email:</label>
            <input
              onChange={this.props.changesFromBadgeNew}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Job Title:</label>
            <input
              onChange={this.props.changesFromBadgeNew}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Twitter:</label>
            <input
              onChange={this.props.changesFromBadgeNew}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
              required
            />
          </div>
          <div className="row ">
            <div className="col d-flex justify-content-end align-items-end">
            <button
                onClick={this.handleClickClear}
                className="btn btn-primary mx-2"
              >
                Clear
              </button>
              <button onClick={this.handleClick} className="btn btn-primary">
                Save
              </button>
              
            </div>
          </div>

          <hr />

          {this.props.error && (
            <div>
              <div className="row">
                <p className="text-danger fw-bolder col">
                  Opps! Something is wrong
                </p>
                <p className="text-danger col text-end">
                  {this.props.error.message}
                  <p className="text-info text-end">&#8505; Report here</p>
                </p>
              </div>
            </div>
          )}
        </form>
      </React.Fragment>
    );
  }
}

export default BadgeForm;
