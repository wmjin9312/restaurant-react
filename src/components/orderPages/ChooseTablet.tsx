import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { MainContext } from '../context/ChosenContextProvider'; // 비구조화할당으로 import -> 접근지정자 없이 사용가능

export default function ChooseTablet() {

  const [data, setData] = useState([]);
  const [selectedTablet, setSelectedTablet] = useState();
  const { chosenData, setChosenData, resetData } = useContext(MainContext);

  //value로 쓸 변수명과 key의 이름이 같다면 value명을 생략가능 (ex: cook: cook == cook)
  const toggleSelected = (idx) => {
    const tabletArr = data.filter(item => item.id === idx);
    setChosenData({ ...chosenData, tablet: tabletArr[0] }); // tablet이라는 이름으로 context에 저장
    setSelectedTablet(idx);
  }

  const fetchData = async () => {
    try {                                     
      const {data} = await axios.get('tablets');
      setData(data);
      
    } catch(error){
      console.error(error);
    }
  }

  const [searchParams] = useSearchParams();


  useEffect(() => {
    fetchData();
    if (searchParams.get('reset') === 'true') {
      resetData();
    }
  }, [resetData]);


  return (
    <div>             
      <h3>타블렛 선택</h3>
        <Stack direction="row" spacing={5} alignItems="center" justifyContent="center">
          {data &&
            data.map((item) => (
              <Button
                key={item.id}
                variant={chosenData.tablet.id === item.id ? 'contained' : 'outlined'} // 확실하게 조건 확인! 
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