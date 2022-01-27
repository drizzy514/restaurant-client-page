import {  useEffect, useState } from "react";
import "./admin.css";
import {createFastFood, createNationalFood} from "../../http/foodApi";
import { useRef } from "react";

function Admin () { 
    const [foodName, setFoodName] = useState([])
    const [foodPrice, setFoodPrice] = useState([])
    const [foodComplex, setFoodComplex] = useState([])
    const [foodImg, setFoodImg] = useState([])

         useEffect(() => {
              fetch('http://localhost:4000/api/foods/fastfood', {
                  method: "POST",
                  headers: {
                      'Access-Control-Allow-Origin': '*',
                      "Content-Type": "application/json"
                  },
                    body:{
                        name: foodName,
                        price: foodPrice,
                        complex: foodComplex,
                    },
                    files: {
                        img: foodImg
                    }
      
              })
      
      
      }, [])

            useEffect(() => {
              fetch('http://localhost:4000/api/foods/nationalfood', {
                  method: "POST",
                  headers: {
                      'Access-Control-Allow-Origin': '*',
                      "Content-Type": "application/json"
                  },
                    files: {
                        img: foodImg
                    }
      
              })
      
      
      }, [])

            
            


      const selectFile = e => {
        setFoodImg(e.target.files[0])
    }

        return <>

              <form action="http://localhost:4000/api/foods/fastfood" method="post">
                    <input value={foodName} onChange={(e) => {
                        setFoodName(e.target.value)
                    }} type="text" placeholder="food name" />

                    <input value={foodPrice} onChange={(e) => {
                        setFoodPrice(e.target.value)
                    }} type="number" placeholder="food price" />

                    <input value={foodComplex} onChange={(e) => {
                        setFoodComplex(e.target.value)
                    }} type="text" placeholder="food complex" />

                    <input onChange={selectFile} type="file" placeholder="food img" />
                    <button > Qo'shish</button>
              </form>


        </>
}


export default Admin