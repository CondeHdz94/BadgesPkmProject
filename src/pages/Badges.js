import React, { Component } from "react";
import { Link } from "react-router-dom";
import BadgeListPokemons from "../components/BadgesListPokemons";
import BadgesList from "../components/BadgesList";
import PageError from "../components/PageError";
import Modal from "../components/Modal";

import header from "../images/badge-header.svg";
import pokeLogo from "../images/poke-logo.svg";

import api from "../api";

import "./styles/BadgeNew.css";
import "./styles/Badges.css";

export class Badges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idDelete: undefined,
      modalIsOpen: false,
      list: false,
      dataBadge: {
        loading: true,
        data: undefined,
        error: null,
      },
      dataPoke: {
        loading: true,
        results: [],
        limit: 9,
        error: null,
      },
    };

    // console.log("constructor()");
  }

  // se invoca inmediatamente después de que un componente se monte
  componentDidMount() {
    // console.log("componentDidMount()");

    this.fetchCharacter();
    this.fetchDataBadge();

    // this.timeoutId = setTimeout(() => {
    //   this.setState({
    //     dataBadge: [
    //       {
    //         id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
    //         firstName: "Freda",
    //         lastName: "Grady",
    //         email: "Leann_Berge@gmail.com",
    //         jobTitle: "Legacy Brand Director",
    //         twitter: "FredaGrady22221-7573",
    //         avatarUrl:
    //           "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon",
    //       },
    //       {
    //         id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
    //         firstName: "Major",
    //         lastName: "Rodriguez",
    //         email: "Ilene66@hotmail.com",
    //         jobTitle: "Human Research Architect",
    //         twitter: "ajorRodriguez61545",
    //         avatarUrl:
    //           "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon",
    //       },
    //       {
    //         id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
    //         firstName: "Daphney",
    //         lastName: "Torphy",
    //         email: "Ron61@hotmail.com",
    //         jobTitle: "National Markets Officer",
    //         twitter: "DaphneyTorphy96105",
    //         avatarUrl:
    //           "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon",
    //       },
    //     ],
    //   });
    // }, 3000);
  }

  fetchDataBadge = async () => {
    this.setState({
      dataBadge: { loading: true, error: null },
    });

    try {
      const dataB = await api.badges.list();
      const badgeListReverse = dataB.slice(0).reverse();

      this.setState({
        dataBadge: { loading: false, data: badgeListReverse },
      });
    } catch (error) {
      this.setState({
        dataBadge: { loading: false, error: error },
      });
    }
  };

  fetchCharacter = async () => {
    this.setState({
      dataPoke: { loading: true, error: null },
    });
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=${this.state.dataPoke.limit}`
      );
      const dataInfo = await response.json();
      const dataPromises = dataInfo.results.map((pokemon) =>
        this.pokemonFetch(pokemon.url)
      );

      try {
        await Promise.all(dataPromises).then((data) => {
          this.setState({
            dataPoke: {
              loading: false,
              results: data,
              limit: this.state.dataPoke.limit + 9,
            },
          });
        });
      } catch (error) {
        this.setState({
          dataPoke: { loading: false, error: error },
        });
      }
    } catch (error) {
      this.setState({
        dataPoke: { loading: false, error: error },
      });
    }
  };

  async pokemonFetch(url) {
    const pokemon = await fetch(`${url}`);
    const pokemonToJson = await pokemon.json();
    return pokemonToJson;
  }

  prueba = (a) => {
    this.setState({ list: a });
  };

  changeBadgeList = (e) => {
    const eventMode = e.target.checked;
    this.prueba(eventMode);
  };

  handleCloseModal = (e) => {
    this.setState({
      modalIsOpen: false,
    });
  };

  handleOpenModal = (e) => {
    this.setState({
      modalIsOpen: true,
    });
  };

  handleCloseModalAndDelete = (idUser) => {
    this.setState({
      idDelete: idUser,
    });
  };

  deleteItemList = async () => {
    this.setState({
      dataBadge: { loading: true, error: null },
    });

    try {
      this.setState({
        dataBadge: { loading: false, error: null },
      });
      console.log(this.state.idDelete)
      await api.badges.remove(this.state.idDelete);
    } catch (error) {
      this.setState({
        dataBadge: { loading: false, error: error },
      });
    }
  };

  handleDeleteBadge = (e) => {
    this.deleteItemList();
    this.fetchDataBadge();

    this.setState({
      modalIsOpen: false,
    });
  };

  // Se invoca inmediatamente después de que la actualización ocurra. Este método no es llamado para el renderizador inicial.
  componentDidUpdate(prevProps, prevState) {
    // console.log("componentDidUpdate()");
    // console.log({ prevProps, prevState });
    // console.log({ props: this.props, state: this.state });
  }

  // Se invoca inmediatamente antes de desmontar y destruir un componente.
  componentWillUnmount() {
    // console.log("componentWillUnmount()");

    clearTimeout(this.timeoutId);
  }

  render() {
    // console.log("render()");

    if (this.state.dataPoke.error) {
      return `Error: ${this.state.dataPoke.error.message}`;
    }

    if (this.state.dataBadge.error) {
      return <PageError msgError={this.state.dataBadge}></PageError>;
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero mb-0">
            <div className="Badges__container">
              {!this.state.list ? (
                <img src={header} alt="" />
              ) : (
                <img src={pokeLogo} alt="" />
              )}
            </div>
          </div>
        </div>

        <div className="bg-dark  border-top border-success border-5">
          <div className="container">
            <div className="row align-items-center px-5">
              <div className="form-check form-switch col">
                <input
                  onClick={this.changeBadgeList}
                  className="form-check-input bg-success"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>

              <div className="Badges__buttons col-10 mb-0  ">
                <Link
                  to="/badges/new"
                  className="btn text-light btn-secondary rounded-0 border-end border-start "
                >
                  New Badge
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          {!this.state.list ? (
            <>
              <BadgesList
                onOpenModal={this.handleOpenModal}
                infoBadges={this.state}
                closeDeleteModal={this.handleCloseModalAndDelete}
              />
              <Modal
                isOpen={this.state.modalIsOpen}
                onCloseModal={this.handleCloseModal}
                onOpenModal={this.handleOpenModal}
              >
                <div className="row justify-content-end ">
                  <h3>Are you sure?</h3>
                  <p>You are about to delete this badge.</p>

                  <button
                    onClick={this.handleCloseModal}
                    className="btn btn-secondary p-1 col-3 text-center"
                  >
                    Cancel
                  </button>
                  <button
                    // onClick={this.handleDeleteBadge}
                    onClick={this.handleDeleteBadge}
                    className="btn btn-danger p-1 col-3 text-center mx-2"
                  >
                    Delete
                  </button>
                </div>
              </Modal>
            </>
          ) : (
            <BadgeListPokemons infoPokes={this.state.dataPoke} />
          )}

          {!this.state.list && !this.state.dataPoke.loading ? (
            ""
          ) : (
            <button
              className="btn btn-success col-12 my-5 BtnLoad"
              onClick={() => this.fetchCharacter()}
            >
              Load More
            </button>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
