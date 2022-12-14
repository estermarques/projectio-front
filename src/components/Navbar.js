import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function NavbarComponent(props) {
  let buttonClicked = 0;

  const showBar = () => {
    let slideSearch = document.querySelector(".search-area");

    if (buttonClicked === 0) {
      slideSearch.style.display = "flex";
      buttonClicked = 1;
    } else {
      slideSearch.style.display = "none";
      buttonClicked = 0;
    }
  }

  const [state, setState] = useState({
    title: "",
    author: "",
    subject: ""
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const getSubjects = () => {
    fetch("https://v93r9d3h1j.execute-api.us-east-1.amazonaws.com/dev/subject/", {
      "method": "GET"
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <div>
      <div className="menu">
        <a className="title" href="http://localhost:3000/">PROJECT.io</a>
        <div className="buttons-div">
          <button className="search" onClick={showBar}>
            <img src="/search-icon.png" alt="Pesquisar" className="search-img" />
          </button>
          <a className="button" href={props.firstBtnLink}>{props.firstBtn}</a>
          <a className="button" href={props.secondBtnLink}>{props.secondBtn}</a>
        </div>
      </div>
      <div className="search-area">
        <h1 className="search-label">Pesquisar por projeto</h1>
        <form className="form-area">
          <input type="text" name="title" placeholder="Título" className="input" onChange={handleInputChange}/>
          <input type="text" name="author" placeholder="Autor" className="input" onChange={handleInputChange}/>
          <input type="text" name="subject" placeholder="Matéria" className="input" onChange={handleInputChange}/>
          {/* <button type="submit" className="blue-button" onClick={search}>Pesquisar</button> */}
          <Link
            className="blue-button"
            to={{
              pathname: "/",
              state
            }}
          >
            Pesquisar
          </Link>
        </form>
      </div>
    </div>
  );
}

export default NavbarComponent;