import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { MainContext } from './context/ChosenContextProvider'

export default function OrdersManagement() {

  const [data,setData] = useState([])
  const { resetData }  = useContext(MainContext);

  useEffect(()=>{
    resetData();
  }, [])

  const fetchData = async () => {
    try {                                     
      const {data} = await axios.get('orders', { params: { current: true } });
      setData(data);
      
    } catch(error){
      console.error(error);
    }
  }

  useEffect(()=>{
    fetchData();
  },[])

  console.log(data)

  return (
    <div>
        <h2>
            OrdersManagement
        </h2>
    </div>
  )
}
