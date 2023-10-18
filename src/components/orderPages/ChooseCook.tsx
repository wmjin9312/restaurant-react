import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ChooseCook() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState();

  const toggleSelected = (idx) => {
    setSelected(idx);
  }
  const fetchData = async () => {
    try{
      const {data} = await axios.get('cooks')
      setData(data);
    }catch (error){
      console.log(error)
    }
  } 
  
  useEffect(()=>{
    fetchData();
  },[])



  return (
    <div>
      <h3>요리사 선택</h3>
      <Stack direction="row" spacing={5} alignItems="center" justifyContent="center">
        {data &&
          data.map((item) => (
            <Button
              key={item.id}
              variant={selected === item.id ? 'contained' : 'outlined'} // 확실하게 조건 확인! 
              onClick={() => { toggleSelected(item.id) }}>  {/* 매개변수 넣으려면 익명함수  */}
              {item.lastName + ' ' + item.firstName}
            </Button>
          ))
        }
      </Stack>
      <Stack direction= "row" alignItems="center" justifyContent="center">
        <Link to='/ChooseTablet'>
          <Button
            variant={'outlined'}>
            이전
          </Button>
        </Link>
        <Link to='/ChooseMenu'>
          <Button
            variant={'outlined'}>
            다음
          </Button>
        </Link>
      </Stack>
    </div>
  )
}
