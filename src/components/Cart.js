import React, { Component } from "react";
import ShoppingCartItem from './ShoppingCartItem'
import Button from './Button';

function Cart({itemNum, handleRemove, handleChange}){

  return(
    <div className="row flex-column">
      <div className="col shopping__cart__header">
        <h2 className="h3 mt-2">Shopping Cart</h2>
        <hr className="mb-3" />
      </div>
      {
        itemNum.length > 0 ?
        (
          itemNum.map((item) => (
            <ShoppingCartItem
              key = {item.id}
              img = {item.img}
              title = {item.title}
              price = {item.price}
              handleRemove={() => handleRemove(item.id)}
              handleChange={(event) => handleChange(event, item.id)}
            />
          ))
        ) : (
          <p>Hey, Your Cart is Empty!</p>
        )
      }

      <div className="col shopping__cart__footer">
        <div className="row row-cols-1 flex-column">
          <div className="col">
            <div className="d-flex justify-content-between">
              <h4 className="h5">Total</h4>
              <h4>
                <strong>
                  {
                    itemNum.length > 0 ? (
                      getSum(itemNum)
                    ):(
                      0
                    )
                  }
                </strong>
              </h4>
            </div>
            <hr />
          </div>
          <div className="col">
            <Button value="Checkout" className="btn btn-primary btn-block btn-lg"/>
          </div>
        </div>
      </div>
    </div>
  )
}
function getSum(items){
  let sum = 0;
  items.forEach(element => {
    if(element.quantity > 1){
      sum = sum + (element.price*element.quantity)
    }else{
      sum +=element.price;
    }
  });
  return sum;
}
export default Cart;