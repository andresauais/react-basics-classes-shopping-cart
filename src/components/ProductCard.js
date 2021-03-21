import React, { Component } from "react";
import Button from './Button'

class ProductCard extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { img, title, price, handleAddToCart } = this.props;

    return (
      <div className="col mb-4 d-flex flex-column product__card">
        <img className="product__img" src={img} alt="" />
        <div className="d-block">
          <h3 className="h5">{title}</h3>
          <p>{price}€</p>
          <Button value="Add to Cart" className="btn btn-dark" onClick={handleAddToCart}/>
        </div>
      </div>
    );
  }
}

export default ProductCard;
