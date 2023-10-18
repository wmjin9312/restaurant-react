import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ChooseTablet() {

  const [data, setData] = useState([]);
  const [selected, setSelected] = useState();

  const toggleSelected = (idx) => {
    setSelected(idx);
  }

  const fetchData = async () => {
    try {                                     
      const {data} = await axios.get('tablets');
      setData(data);

    } catch(error){
      console.error(error);
    }
  }

  useEffect(()=>{
    fetchData();
  },[])


  return (
    <div>             
      <h3>타블렛 선택</h3>
        <Stack direction="row" spacing={5} alignItems="center" justifyContent="center">
          {data &&
            data.map((item) => (
              <Button
                key={item.id}
                variant={selected === item.id ? 'contained' : 'outlined'} // 확실하게 조건 확인! 
                onClick={() => { toggleSelected(item.id) }}>  {/* 매개변수 넣으려면 익명함수  */}
                {item.location}
              </Button>
            ))
          }
        </Stack>
        <Stack alignItems="center" justifyContent="center">
          <Link to='/ChooseCook'>
            <Button
              variant={'outlined'}>
              다음
            </Button>
          </Link>
        </Stack>
    </div>
  );
}

// 오류가 났을 경우
// 1. 오류 확인(데이터 props로 전달 못했을 경우, 통신이 실패했을 경우)
// 2. 조건이 틀렸을 경우 -> 가설 확인
// 3. GPT에 의존하지 않기
// 4. 