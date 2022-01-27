import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  cartAddItem,
  cartRemoveItem,
} from '../../../../redux/cart/cart.action';
import {
  selectCartItems,
  selectCartItemsCount,
} from '../../../../redux/cart/cart.selector';

import ButtonAddRemoveItem from '../../ButtonAddRemoveItem';
import './styles.css';

const MenuItem = ({
  item,
  cartCount,
  cartList,
  cartAddItem,
  cartRemoveItem,
}) => {
  const { id, img, name, price, info } = item;

  const handleQuantity = () => {
    let quantity = 0;
    if (cartCount !== 0) {
      const foundItemInCart = cartList.find((item) => item.id === id);
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  };
    const [food, setFood] = useState([])
    const [nfood, setnFood] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/api/foods/fastfood')
    .then(response => response.json())
    .then(data => setFood(data))
  } ,[])
  useEffect(() => {
    fetch('http://localhost:4000/api/foods/nationalfood')
    .then(response => response.json())
    .then(data => setnFood(data))
  } ,[])


  return (
    <>
    
    <div className='item'>
    
        <img src={img} alt='food' />
      <div className='item-head_desc'>
        <p className='head_desc-name'>{name}</p>
        <p className='head_desc-info'>
          <small>{info}</small>
        </p>
      </div>
      <div className='item-foot_desc'>
        <span className='foot_desc-price'>${price}</span>
        <ButtonAddRemoveItem
          quantity={handleQuantity()}
          handleRemoveItem={() => cartRemoveItem(item)}
          handleAddItem={() => cartAddItem(item)}
        />
      </div>
      
    </div>
    <div className="item">
    {
        food.map((f) => {
          return <>
              <img src={f.img} alt="food" />
              <div className="item-head_desc">
                  <p className='head_desc-name'>{f.name}</p>
                  <p>{f.complexId}</p>
              </div>
              <div className="item-foot_desc">
              <p className='foot_desc-price'> {f.price}sum</p>
              <ButtonAddRemoveItem
                quantity={handleQuantity()}
                handleRemoveItem={() => cartRemoveItem(item)}
                handleAddItem={() => cartAddItem(item)}
              />
              </div>
          </>
        })
      } 
    </div>
    <div className="item">
    {
        nfood.map((f) => {
          return <>
              <img src={f.img} alt="food" />
              <div className="item-head_desc">
                  <p className='head_desc-name'>{f.name}</p>
                  <p>{f.complexId}</p>
              </div>
              <div className="item-foot_desc">
              <p className='foot_desc-price'> {f.price}sum</p>
              <ButtonAddRemoveItem
                quantity={handleQuantity()}
                handleRemoveItem={() => cartRemoveItem(item)}
                handleAddItem={() => cartAddItem(item)}
              />
              </div>
          </>
        })
      } 
    </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  cartAddItem: (item) => dispatch(cartAddItem(item)),
  cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
