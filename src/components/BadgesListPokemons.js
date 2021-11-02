import React, { Component } from "react";
import PageLoader from "./PageLoader";
import "./styles/BadgesListPokemons.css";

export class BadgeListPokemons extends Component {
  render() {
    return (
      <>
        <ul className="list-unstyled row justify-content-center ">
          {this.props.infoPokes.results.map((dataPoke) => {
            return (
              <li
                className="col-auto col-lg-3 p-3 m-3 shadow bg-body rounded Card Card__container_image "
                key={dataPoke.id}
              >
                <div className="row justify-content-center">
                  <img
                    src={
                      dataPoke.sprites.other["official-artwork"].front_default
                    }
                    alt=""
                    className="Card__image my-3 bg-light rounded-circle shadow"
                  />
                </div>
                <div className="Card__container_info fw-bold ">
                  {dataPoke.name}
                </div>
                <div className="text-center text-black-50">
                  {dataPoke.base_experience}xp
                </div>

                <hr />

                <div className="row justify-content-center">
                  <div className="Card__container_info text-muted col">
                    {dataPoke.stats[0].base_stat}K
                  </div>
                  <div className="Card__container_info text-muted col">
                    {dataPoke.stats[1].base_stat}K
                  </div>
                  <div className="Card__container_info text-muted col">
                    {dataPoke.stats[2].base_stat}K
                  </div>
                </div>
                <div className="row justify-content-center ">
                  <p className="col text-center">
                    {dataPoke.stats[0].stat.name}
                  </p>
                  <p className="col text-center">
                    {dataPoke.stats[1].stat.name}
                  </p>
                  <p className="col text-center">
                    {dataPoke.stats[2].stat.name}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        {!this.props.infoPokes.loading ? (
          ""
        ) : (
         <PageLoader></PageLoader>
        )}
      </>
    );
  }
}

export default BadgeListPokemons;
