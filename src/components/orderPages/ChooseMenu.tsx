import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ChooseMenu() {

  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);


  const toggleSelected = (item) => {
    setSelected(item.price)

  }

  const fetchData = async () => {
    try{
      const {data} = await axios.get('dishes')
      setData(data)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div>
      <h3>메뉴 선택</h3>
      <Stack direction="row" spacing={5} alignItems="center" justifyContent="center">
        {data &&
          data.map((item) => (
            <Button
              key={item.id}
              variant={'outlined'}
              onClick={() => { toggleSelected(item.price) }}> 
              {item.name}<br /> ${item.price}
            </Button>
          )) 
        }
      </Stack>

      <h3>{selected}</h3>

      <Stack direction= "row" alignItems="center" justifyContent="center">
        <Link to='/ChooseCook'>
          <Button
            variant={'outlined'}>
            이전
          </Button>
        </Link>
        <Link to='/CheckOrders'>
          <Button
            variant={'outlined'}>
            다음
          </Button>
        </Link>
      </Stack>
    </div>
  )
}
