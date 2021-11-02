import React, { Component } from "react";
import { Link } from "react-router-dom";
import PageLoader from "./PageLoader";
import BadgeListItem from "./BadgeListItem";
import Badges from "../pages/Badges";

function BadgesList(props) {
  const onlyBadge = props.infoBadges.dataBadge;
  const dataBadgeVar = onlyBadge.data;

  const [query, setQuery] = React.useState("");
  const [filterBadges, setfilterBadges] = React.useState(dataBadgeVar);

  React.useMemo(() => {
    const result =
      dataBadgeVar &&
      dataBadgeVar.filter((badge) => {
        return `${badge.firstName} ${badge.lastName}`
          .toLowerCase()
          .includes(query.toLowerCase());
      });
    debugger;
    setfilterBadges(result);
  }, [dataBadgeVar, query]);

  if (onlyBadge.loading) {
    return <PageLoader></PageLoader>;
  }

  if (filterBadges == undefined || !filterBadges.length) {
    debugger;
    return (
      <>
        <div className="Badges__container">
          <div class="input-group mt-3">
            <span class="input-group-text" id="basic-addon2">
              Filter Badges
            </span>

            <input
              type="text"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              className="form-control col"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </div>
          <div className="row justify-content-center text-center my-5 text-muted">
            <h3 className=" col-3">No badges found it...</h3>
          </div>
          <div className="row justify-content-center my-3">
            <Link className="btn btn-success col-5" to="/badges/new">
              Create a New Badge
            </Link>
          </div>
        </div>
      </>
    );
  }
  return (
    <React.Fragment>
      <div className="Badges__container ">
        <div class="input-group mt-3">
          <span class="input-group-text" id="basic-addon2">
            Filter Badges
          </span>

          <input
            type="text"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            className="form-control col"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <ul className="list-unstyled ">
          {filterBadges.map((badge) => {
            return (
              <li className="shadow p-3 my-3 bg-body rounded" key={badge.id}>
                <BadgeListItem
                  onDeleteModal={props.closeDeleteModal}
                  onOpenModal={props.onOpenModal}
                  badge={badge}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default BadgesList;
