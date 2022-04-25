import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Menu from "./Menu";
import { httpPost, httpPostwithToken } from "./HttpConfig";


export default function Product(props) {
   const location = useLocation();
  return (
    <div class="single">
      <div class="container">
        <div class="col-md-4 single-left">
          <div class="flexslider">
            <ul class="slides">
              <li data-thumb="images/a.jpg">
                <div class="thumb-image">
                  {" "}
                  <img
                    src={location.state.image}
                    data-imagezoom="true"
                    class="img-responsive"
                    alt=""
                  />{" "}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-8 single-right">
          <h3>{location.state.name}</h3>

          <div class="rating1">
            <span class="starRating">
              <input id="rating5" type="radio" name="rating" value="5" />
              <label for="rating5">5</label>
              <input id="rating4" type="radio" name="rating" value="4" />
              <label for="rating4">4</label>
              <input
                id="rating3"
                type="radio"
                name="rating"
                value="3"
                checked
              />
              <label for="rating3">3</label>
              <input id="rating2" type="radio" name="rating" value="2" />
              <label for="rating2">2</label>
              <input id="rating1" type="radio" name="rating" value="1" />
              <label for="rating1">1</label>
            </span>
          </div>
          <div class="description">
            <h5>
              <i>Description</i>
            </h5>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident. Nemo enim ipsam voluptatem quia voluptas
              sit aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>

          <div class="simpleCart_shelfItem">
            <p>
              <i class="item_price">₹ {location.state.price}</i>
            </p>

            
              
            
          </div>
        </div>
      </div>
    </div>
  );
}
