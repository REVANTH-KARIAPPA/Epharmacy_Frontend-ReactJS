import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./Menu";
import { httpPost, httpPostwithToken } from "./HttpConfig";
import { CartContextValue } from "./ContextProvider";
import { Link,useNavigate } from "react-router-dom";
function Home(props) {
  
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [cartData, dispatch] = CartContextValue();
  const navigate = useNavigate();

  const toProduct = (pid,name,image,price) => {
    navigate("/product/" + pid, { state: {id:pid,name:name,image:image,price:price} });
  };
  useEffect(() => {
    //TODO check user login
    getCategory();
    getCartApi();
  }, []);
 
  const getCartApi = () => {
    httpPostwithToken("addtocart/getCartsByUserId", {}).then(
      (res) => {
        res.json().then((data) => {
          if (res.ok) {
            dispatch({
              type: "add_cart",
              data: data,
            });
            //alert("Successfully added..")
          } else {
            alert(data.message);
          }
        });
      },
      (error) => {
        alert(error.message);
      }
    );
  };
  const addCartApi = (productObj) => {
    let obj = {
      productId: productObj.id,
      qty: "1",
      price: productObj.price,
    };
    httpPostwithToken("addtocart/addProduct", obj)
      .then((res) => {
        res.json().then((data) => {
          if (res.ok) {
            dispatch({
              type: "add_cart",
              data: data,
            });
            alert("Successfully added..");
          } else {
            alert(data.message);
          }
        });
      })
      .catch(function (res) {
        console.log("Error ", res);
        //alert(error.message);
      });
  };
  const getCategory = () => {
    httpPostwithToken("product/getAllCategory", {}).then((res) => {
      res.json().then((response) => {
        if (res.ok) {
          setCategoryList(response);
          getProductsByCategory(response[0].id);
        } else {
          alert("Error in category api..");
        }
      });
    });
  };
  const getProductsByCategory = (cat_id) => {
    let obj = {
      cat_id: cat_id,
    };

    httpPostwithToken("product/getProductsByCategory", obj).then(
      (res) => {
        res.json().then((response) => {
          if (res.ok) {
            if (response.length > 0) {
              setProductList(response);
            } else {
              alert("No product found..");
            }
          } else {
            setProductList([]);
            alert("No product found..");
          }
        });
      },
      (error) => {
        alert(error.message);
      }
    );
  };
  
  return (
    <div>
      <div className="banner-bottom">
        <div className="container">
          <div className="col-md-5 wthree_banner_bottom_left">
            <div className="video-img">
              <a
                className="play-icon popup-with-zoom-anim"
                href="#small-dialog"
              ></a>
            </div>
          </div>
          <div className="col-md-7 wthree_banner_bottom_right">
            <div
              className="bs-example bs-example-tabs"
              role="tabpanel"
              data-example-id="togglable-tabs"
            >
              <ul id="myTab" className="nav nav-tabs" role="tablist">
                {categoryList.map((category) => (
                  <li
                    onClick={(e) => getProductsByCategory(category.id)}
                    key={category.id}
                    role="presentation"
                  >
                    <a href="javascript:void(0)">{category.name}</a>
                  </li>
                ))}
              </ul>
              <div id="myTabContent" className="tab-content">
                <div
                  role="tabpanel"
                  className="tab-pane fade active in"
                  id="home"
                  aria-labelledby="home-tab"
                >
                  <div className="agile_ecommerce_tabs">
                    {productList.map((product) => (
                      <div className="col-md-4 agile_ecommerce_tab_left">
                        <div className="hs-wrapper">
                          <img
                            src={product.image}
                            alt=" "
                            className="img-responsive"
                          />
                        </div>
                        <h5>
                          {/* <Link
                            to={ {pathname:"/product/" + product.id,state:product}}
                            
                          >
                            {product.name}
                          </Link> */}
                         <div>
                           <a onClick={()=>{toProduct(product.id,product.name,product.image,product.price)}}> {product.name}   </a>
                         </div>
                        </h5>
                        <h5>
                          <a
                            onClick={() => addCartApi(product)}
                            href="javascript:void(0)"
                          >
                            Add Cart
                          </a>
                        </h5>
                        <div className="simpleCart_shelfItem">
                          <p>
                            <i className="item_price">Rs.{product.price}</i>
                          </p>
                        </div>
                      </div>
                    ))}

                    <div className="clearfix"> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
