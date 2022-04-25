import React from 'react'
import "./Product.css";
import { useState } from "react";
import { httpPost, httpPostwithToken } from "./HttpConfig";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
 const[category,setCategory]=useState("1");
  const [image, setImage] = useState("");
 

  const addProductApi = () => {
    if (name == "") {
      alert("Name should not be empty");
      return;
    } else if (price == "") {
      alert("Price should not be empty");
      return;
    } else if (category == "") {
      alert("Category should not be empty");
      return;
    } else if (image == "") {
      alert("Image should not be empty");
      return;
    } 
    
    let jsonOBj = {
      name: name,
      price: price,
      image: image,
      category_id: category
    };


     httpPostwithToken("product/addProduct", jsonOBj)
       .then((res) => {
         res.json().then((data) => {
           
           if (res.ok) {
             alert("Product successfully placed....");
            
           } else {
             alert(data.message);
           }
           
         });
         alert("Product Added successfully ");
       })
       .catch(function (res) {
         console.log("Error ", res);
         //alert(error.message);
       });
  };

  return (
    <div>
      <form id="form">
        <h1>Add Product</h1>

        <div class="input-control">
          <label>Name</label>
          <input name="name" onChange={(e) => setName(e.target.value)} />
          <br />
        </div>
        <div class="input-control">
          <label>Price</label>
          <input name="price" onChange={(e) => setPrice(e.target.value)} />
          <br />
        </div>
        <div class="input-control">
          <label>Category</label>
          <br />
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="1">Tablet</option>
            <option value="2">Syrup</option>
            <option value="3">Capsules</option>
            <option value="4">Drops</option>
            <option value="5">Shot</option>
          </select>
          <br />
        </div>
        <div class="input-control">
          <label>Image</label>
          <input name="image" onChange={(e) => setImage(e.target.value)} />
          <br />
        </div>

        <input type="submit" onClick={() => addProductApi()} />
      </form>
    </div>
  );
}

export default AddProduct
