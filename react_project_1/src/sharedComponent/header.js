// import logo from './logo.svg';
import "../App.css";


function Header({}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            Instacoach
          </a>
          <button
            className="navbar-toggler" 
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  How it works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Become a coach
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> 
                  Log in
                </a>
              </li>
              <li className="nav-item">
                <button className="btn">Sign up</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
