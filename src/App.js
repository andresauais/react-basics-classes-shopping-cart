import React, { Component } from "react";

import "./App.scss";

import img_1 from "./img/img_1.jpeg";
import img_2 from "./img/img_2.jpeg";
import img_3 from "./img/img_3.jpeg";
import img_4 from "./img/img_4.jpeg";
import img_5 from "./img/img_5.jpeg";
import img_6 from "./img/img_6.jpeg";

import ProductCard from "./components/ProductCard";
import ShoppingCartItem from "./components/ShoppingCartItem";
import Button from "./components/Button"
import Cart from "./components/Cart"

// Render the products dinamically with a loop
import products from "./products";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemNum: [],
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleRemove(id) {
    console.log("remove");
    const removeItems = this.state.itemNum.filter((item) => item.id !== id);
    this.setState({
      itemNum: removeItems,
    })
    console.log(this.state.itemNum)
  }

  handleChange(event, id) {
    console.log(event.target.value);
    const updateQuantity = this.state.itemNum.map((item)=>{
      if(item.id === id){
        item.quantity = event.target.value
      }
      return item
    })
    this.setState({
      itemNum: updateQuantity,
    })

  }

  handleAddToCart(id, img, title, price){
    this.setState({
      itemNum: [...this.state.itemNum, 
        {
          "id": id,
          "img": img,
          "title": title,
          "price": price,
          "quantity": "0"
        }
      ]
    })
  }

  render() {
    return (
      <main className="container-fluid">
        <div className="row">
          <div className="col col-6 col-lg-8 p-4">
            <section className="row row-cols-1">
              <div className="col">
                <h1 className="mb-4">Shop</h1>
              </div>
              <div className="col">
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
                  {products.map((product, index) => (
                    <ProductCard
                    key={index}
                    img={product.img}
                    title={product.title}
                    price={product.price}
                    handleAddToCart={() => this.handleAddToCart(product.id, product.img, product.title, product.price)}
                  />
                  ))}
                </div>
              </div>
            </section>
          </div>
          <aside className="col col-6 col-lg-4 p-4">
            <Cart itemNum={this.state.itemNum} handleRemove={this.handleRemove} handleChange={this.handleChange}/>
          </aside>
        </div>
      </main>
    );
  }
}

export default App;
