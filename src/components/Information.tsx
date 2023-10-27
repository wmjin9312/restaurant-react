import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import BasicTable from './table/BasicTable';
import { MainContext } from './context/ChosenContextProvider';

export default function Information() {

  const [cooksData, setCooksData] = useState([]);
  const [dishesData, setDishesData] = useState([]);
  const [tabletsData, setTabletsData] = useState([]);

  const { resetData }  = useContext(MainContext);

  const fetchData = async (endpoint, setData) => {
    try {                                     
      const {data} = await axios.get(endpoint);
      setData(data);

    } catch(error){
      console.error(error);
    }
  }

  useEffect(()=>{
    fetchData('cooks', setCooksData);
    fetchData('dishes', setDishesData);
    fetchData('tablets', setTabletsData);

    resetData();
  }, [])

  return (
    <div>
      <h3>요리사 정보</h3>
      <BasicTable data={cooksData} />
      <h3>음식 정보</h3>
      <BasicTable data={dishesData} />
      <h3>주문 정보</h3>
      <BasicTable data={tabletsData} />
    </div>
  )
}

