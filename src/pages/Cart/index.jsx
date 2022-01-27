import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import EmptyCart from '../../components/Cart/EmptyCart';
import Footer from '../../components/common/Footer';
import Logo from '../../components/common/Logo';
import Menu from '../../components/common/Menu';
import Modal from 'react-modal';
import   {orderUser}  from '../../http/sellFoodApi'
import axios from "axios"
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from '../../redux/cart/cart.selector';
import './styles.css';
import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');


const Cart = ({ cartCount, cartList, cartTotal }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [adress, setAdress] = useState('')
      const [number, setNumber] = useState('')
      const [price, setPrice] = useState('')
    // console.log(name, email)

const sellFood = async() => {
        
  const formData = new FormData()
  formData.append('email', email)
  formData.append('name', name)
  formData.append('adress', adress)
  formData.append('price', price)
  formData.append('number', number)
  orderUser(formData)

  await axios.post('http://localhost:4000/api/user/sellfood', formData)

}


        // useEffect(() => {
        //   fetch('http://localhost:4000/api/user/sellfood', {
        //     method:"POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //       'Access-Control-Allow-Origin': '*'
        //     },
        //     body: JSON.stringify(formData)
        //   })
        // }, [formData])




  return (
    <>
      <div className='cart-header'>
        <Logo />
      </div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className='orders'>
          <h1 className='orders-heading'>Your Orders</h1>
          <div className='orders-menu'>
            <Menu list={cartList} />
          </div>
          <button onClick={openModal} className='order-btn'>Buyurtma Berish</button>
          <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Buyturtma berish uchun to'ldiring</h2>
        <button className='close-modal' onClick={closeModal}>close</button>

        <form  action='http://localhost:4000/api/user/sellfood'   className='modal-form' method='post'>
            <input onChange={(e) => setName(e.target.value)} placeholder='your name' type='text' className='modal-input'/>
            <input  onChange={(e) => setEmail(e.target.value)}  placeholder='your email' type='email' className='modal-input'/>
            <input  onChange={(e) => setNumber(e.target.value)}  placeholder='your number' type='number' className='modal-input'/>
            <input  onChange={(e) =>  setAdress(e.target.value)}  placeholder='your adress' type='text' className='modal-input'/>
            <input  onChange={(e) =>  setPrice(e.target.value)}  placeholder='price' type='number' className='modal-input'/>
       <Link type='submit' onClick={sellFood}  className='order-btn' to='/' >Submit</Link>
          
        </form>
      </Modal>
          <h3 className='orders-total'>Your Total ${cartTotal}</h3>
        </div>
      )}
      <Footer />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
