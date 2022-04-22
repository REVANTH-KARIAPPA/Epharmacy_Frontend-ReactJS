import "./App.css";

function Menu() {
  return (
    <div className="navigation">
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="navbar-header nav_2">
            <button
              type="button"
              className="navbar-toggle collapsed navbar-toggle1"
              data-toggle="collapse"
              data-target="#bs-megadropdown-tabs"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
            <ul className="nav navbar-nav">
              <li>
                <a href="/" className="act">
                  Home
                </a>
              </li>

              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Products <b className="caret"></b>
                </a>
              </li>
              <li>
                <a href="about.html">About Us</a>
              </li>
              
             
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
