import './Navbar.css';

let slideSearch = document.querySelector(".search-area");
let buttonClicked = 0;

function showBar() {
  if (buttonClicked === 0) {
    slideSearch.style.display = "flex";
    buttonClicked = 1;
  } else {
    slideSearch.style.display = "none";
    buttonClicked = 0;
  }
}

function NavbarComponent() {
  return (
    <div>
      <div className="menu">
        <button className="title">PROJECT.io</button>
        <div className="buttons-div">
          <button className="search" onClick={showBar}>
            <img src="/search-icon.png" alt="Pesquisar" />
          </button>
          <button className="button">Login</button>
          <button className="button">Cadastre-se</button>
        </div>
      </div>
      <div className="search-area">
        <h1 className="search-label">Pesquisar por projeto</h1>
        <form className="form-area">
          <input type="text" name="title" placeholder="Título" className="input"/>
          <input type="text" name="author" placeholder="Autor" className="input"/>
          <input type="text" name="theme" placeholder="Tema" className="input"/>
          <input type="text" name="subject" placeholder="Matéria" className="input"/>
          <button type="submit" className="blue-button">Pesquisar</button>
        </form>
      </div>
    </div>
  );
}

export default NavbarComponent;