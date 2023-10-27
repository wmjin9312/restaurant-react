import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { MainContext } from './context/ChosenContextProvider'
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';


export default function OrdersManagement() {

  const [ordersData, setOrdersData] = useState<any[]>([])
  const { resetData }  = useContext(MainContext);

  const fetchData = async () => {
    try {                                     
      const { data } = await axios.get('orders');
      setOrdersData(data);
      
    } catch(error){
      console.error(error);
    }
  }

  useEffect(()=>{
    fetchData();
    resetData();
  },[])

  const menuInfo = (data) => (
    <ul>
      {data && data.map(({ dishes, id, quantity }) => (
        <li key={id}>
          {`${dishes.name} x ${quantity} = $${dishes.price * quantity}`}
        </li>
      ))}
    </ul>
  )

  const withdrawOrder = async (id) => {
    try{
      await axios.delete(`orders/${id}`)
      .then(()=>{
        alert('주문이 취소되었습니다');
        fetchData();
      });
      
    } catch (error){
      console.error('요청 실패');
    }
  }

  const confirmOrder = () => {

  }

  const paperStyle = { 
    width: 300,
    margin: '0 auto', // 가운데 정렬을 위한 스타일 추가
  };

  return (
    <div>
      <Paper sx={paperStyle}>
        <MenuList dense className="horizontal-menu">
          {ordersData && ordersData.map((item, idx) => (
              <div key={idx}>
                <MenuItem>
                  <ListItemText>주문 번호 :{item.id}</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemText>Cook : {item.cooks.firstName}</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemText>Tablet : {item.tablets.location}</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemText>{menuInfo(item.orderDishes)}</ListItemText>
                </MenuItem>
                <Stack direction= "row" alignItems="center" justifyContent="center">
                    <Button 
                     variant={'outlined'}
                     onClick={()=>withdrawOrder(item.id)}>
                     주문 취소
                    </Button>
                    <Button
                      variant={'outlined'}
                      onClick={confirmOrder}>
                      주문 승인
                    </Button>
                </Stack>
                <Divider />
              </div>
            ))
          }
        </MenuList>
      </Paper>
    </div>
  )
}
