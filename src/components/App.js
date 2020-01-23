import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import "./App.css";
import Button from "./Button/Button";
import Loader from "react-loader-spinner";
import axios from "axios";
/* import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; */

//const api_key = "14452774-766286a273532ef73a45b39e7";

const key = "14968474-2f10c7b724ec59304454e7a07";
const API = "https://pixabay.com/api";

export default class Gallary extends Component {
  state = {
    dataApi: [],
    isModalOpen: false,
    id: null,
    page: 1,
    object: {},
    search: "",
    isLoading: false
  };

  openModal = e => {
    console.log("e.target.id", e.target.id);
    const [object] = this.state.dataApi.filter(
      item => item.id === Number(e.target.id)
    );
    this.setState({ isModalOpen: true, id: e.target.id, object: object });
  };
  getSearchValue = e => {
    this.setState({ search: e.target.value });
  };
  /* getData = () => {
    this.setState({
      isLoading: true
    });
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.search}&page=${this.state.page}&key=${api_key}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(data => {
        this.setState(state => ({
          page: state.page + 1,
          dataApi: [...state.dataApi, ...data.data.hits]
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
  }; */

  getData = async () => {
    /* this.setState({
      isLoading: true
    }); */

    try {
      this.setState({ isLoading: true });
      const request = await axios.get(
        `${API}/?q=${this.state.search}&page=${this.state.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      );
      const images = request.data.hits;
      await this.setState(prevstate => ({
        dataApi: [...prevstate.dataApi, ...images],
        isLoading: false,
        page: prevstate.page + 1
      }));
    } catch (error) {
      this.setState({ error });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      dataApi: [],
      page: 1
    });
    this.getData();
  };

  handleLoad = e => {
    this.getData();
  };

  close = () => {
    this.setState({ isModalOpen: false });
  };

  handleKeyPress = event => {
    // console.log("event", event);
    if (event.code === "Escape") {
      this.close();
    }
  };
  handleBackdropClick = event => {
    if (Number(event.target.id) === Number(this.state.object.id)) {
      this.close();
    }
  };
  componentDidUpdate(prevProps, prevState) {
    /* if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      if (prevState.search !== this.state.search) {
        this.setState({ dataApi: [], page: 1 });
      }
    } */
    if (prevState.page !== this.state.page) {
      setTimeout(
        () =>
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
          }),
        500
      );
      document.onreadystatechange = function() {
        if (document.readyState === "complete") {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
          });
          console.log("Azazaza!");
        }
      };
    }
  }

  render() {
    console.log("this.state.dataApi", this.state.dataApi);
    const { isLoading } = this.state;

    return (
      <div className="App">
        <Searchbar
          search={this.state.search}
          getSearchValue={this.getSearchValue}
          handleSubmit={this.handleSubmit}
        />

        <ImageGallery
          handleKeyPress={this.handleKeyPress}
          handleBackdropClick={this.handleBackdropClick}
          object={this.state.object}
          images={this.state.dataApi}
          openModal={this.openModal}
          isModalOpen={this.state.isModalOpen}
          id={this.state.id}
        />
        {isLoading && (
          <Loader
            className="loader"
            type="ThreeDots"
            color="palevioletred"
            height={500}
            width={500}
            timeout={3000} //3 secs
          />
        )}
        <Button handleLoad={this.handleLoad} />
      </div>
    );
  }
}
