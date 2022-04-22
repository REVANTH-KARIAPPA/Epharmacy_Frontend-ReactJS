import "./App.css";
import Home from "./Home";

import Footer from "./Footer";
import Product from "./Product";
import CheckoutCart from "./CheckoutCart";
import Header from "./Header";
import { ContextProvider, cartState, reducer } from "./ContextProvider";
import { Routes, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <ContextProvider reducer={reducer} cartState={cartState}>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/product/:id" element={<Product /> } ></Route>
          <Route path="/checkoutcart" element={<CheckoutCart />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </ContextProvider>
  );
}

export default App;
