import "./App.css";
import { Link, useNavigate } from "react-router-dom";


function Footer() {
   const navigate = useNavigate();
  const addProduct = () => {
    navigate("/addProduct");
  };
  return (
    <div className="footer">
      <div className="container">
        <div className="w3_footer_grids">
          <div className="col-md-3 w3_footer_grid">
            <h3>Contact</h3>

            <ul className="address">
              <li>
                <i
                  className="glyphicon glyphicon-map-marker"
                  aria-hidden="true"
                ></i>
                Avenue, 4th block, <span>Banglore City.</span>
              </li>
              <li>
                <i
                  className="glyphicon glyphicon-envelope"
                  aria-hidden="true"
                ></i>
                <a href="mailto:info@example.com">epharmacy@email.com</a>
              </li>
              <li>
                <i
                  className="glyphicon glyphicon-earphone"
                  aria-hidden="true"
                ></i>
                +1234 567 567
              </li>
            </ul>
          </div>

          <div className="col-md-3 w3_footer_grid">
            <h3>Category</h3>
            <ul className="info">
              <li>
                <a href="products.html">Tablet</a>
              </li>
              <li>
                <a href="products1.html">Capsules</a>
              </li>
              <li>
                <a href="products.html">Syrup</a>
              </li>
              <li>
                <a href="products1.html">Drops</a>
              </li>
              <li>
                <a href="products2.html">Shot</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 w3_footer_grid">
            <h3>Profile</h3>
            <ul className="info">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="products.html">Today's Deals</a>
              </li>
            </ul>
            <h4>Follow Us</h4>
            <div className="agileits_social_button">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/revanth.kariappa.7/"
                    className="facebook"
                  >
                    {" "}
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/i/flow/login"
                    className="twitter"
                  >
                    {" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="google">
                    {" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="pinterest">
                    {" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
     
       
   
      <div className="footer-copy">
        <div className="footer-copy1">
          <div className="footer-copy-pos">
            <a href="#home1" className="scroll">
              <img
                src="../assets/images/arrow.png"
                alt=" "
                className="img-responsive"
              />
            </a>
          </div>
        </div>
        <div className="container"></div>
      </div>
    </div>
  );
}
export default Footer;
