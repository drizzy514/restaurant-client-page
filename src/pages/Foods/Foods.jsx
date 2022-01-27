import "./Foods.css";
import React from "react";
import ButtonCartCount from "../../components/common/ButtonCartCount";
import axios from "axios";
import { useEffect } from "react";
import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Modal from 'react-modal';
import   {orderUser}  from '../../http/sellFoodApi'

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



function Foods (id)  {
        const [foods, setFoods] = useState([])

        useEffect(async() => {
                await  axios.get(`http://localhost:4000/api/foods/fastfood`)
                .then(response => setFoods(response.data))
        
        }, [])
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
      
      




        return <>
            <ButtonCartCount />
                <h1>Fast Foods</h1>
                
                        <div>
                                {
                                      foods.map((f) => {
                                              return <>
                                                          <div>
                                                                <p>{f.name}</p>
                                                                <p>{f.price} sum</p>
                                                        <img src={f.img} alt="food" width='250' height='250' /> 
                                                        </div>
                                                        <button onClick={openModal} className='order-btn'>Buyurtma Berish</button>
                                                        <Link className="back-link" to='/'>Back</Link>
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

                                              </>
                                      })
                                } 
                        </div>
                
                





        </>

}


export default Foods