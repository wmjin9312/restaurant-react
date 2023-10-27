import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { MainContext } from '../context/ChosenContextProvider';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';


export default function CheckOrders() {

  const {chosenData, resetData} = useContext(MainContext); // 주로 변수명을 잘못 지어서 데이터가 안넘어 오는 경우,

  const postData = async () => {
    try{
      await axios.post('orders', { ...chosenData, cookId: chosenData.cook.id, tabletId: chosenData.tablet.id });
      console.log('요청 성공');
      alert('주문이 완료되었습니다');
      resetData();
      
    } catch (error){
      console.error('요청 실패');
    }
  }

  const menuInfo = (chosenData) => (
    <ul>
      {chosenData && chosenData.dishes && chosenData.dishes.map((item, index) => (
        <li key={index}>
          {`${item.name} x ${item.quantity} = $${item.price * item.quantity}`}
        </li>
      ))}
    </ul>
  )

  const paperStyle = { 
    width: 320,
    margin: '0 auto', // 가운데 정렬을 위한 스타일 추가
  };
  
  return (
    <div>
      <Paper sx={paperStyle}>
        <MenuList dense>
          <MenuItem>
            <ListItemText>{`요리사 정보 : ${chosenData.cook.firstName}`}</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>{`테이블 정보 : ${chosenData.tablet.location}`}</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>{menuInfo(chosenData)}</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>Total Price : $ {chosenData.totalPrice}</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
      <Stack direction= "row" alignItems="center" justifyContent="center">
        <Link to='/ChooseMenu'>
          <Button
            variant={'outlined'}>
            이전
          </Button>
        </Link>
        <Link to='/chooseTablet'>
          <Button
            variant={'outlined'}
            onClick={postData}>
            확인
          </Button>
        </Link>
      </Stack>
    </div>
  )
}