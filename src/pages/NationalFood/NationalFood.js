import ButtonCartCount from "../../components/common/ButtonCartCount";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";



function NationalFood (id)  {
        const [nationalFood, setNationalFood] = useState([])
        
        useEffect(async () => {
               await axios.get(`http://localhost:4000/api/foods/nationalfood`)
        .then(response => setNationalFood(response.data))
        }, [])




        return <>
            <ButtonCartCount />
              
                <h1>National Foods</h1>
                
                        <div>
                                {
                                      nationalFood.map((f) => {

                                              return <>
                                                          <div key={f.id}>
                                                                <p>{f.name}</p>
                                                                <p>{f.price} sum</p>
                                                              <img src={f.img} alt='food' /> 

                                                        </div>
                                              </>
                                      })
                                } 
                        </div>
                





        </>

}


export default NationalFood