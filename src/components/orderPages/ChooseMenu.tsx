import React, { useState, useEffect, useContext, useMemo } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { MainContext } from '../context/ChosenContextProvider';

export default function ChooseMenu(children) {

  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const { chosenData, setChosenData } = useContext(MainContext);
  const [resetMenu, setResetMenu] = useState(false);
  
  const toggleSelected = (selectItem) => {

    setSelected((current) => {
      const newSelected = [...current];
      const selectedItem = newSelected.find((item) => item.id === selectItem.id);

      if (selectedItem) {
        selectedItem.quantity++;
        setSelected(selectItem);

        setChosenData(current => ({ ...chosenData, dishes:newSelected, totalPrice: current.totalPrice + selectItem.price }));
      } else {
        newSelected.push({ ...selectItem, quantity: 1, dishId:selectItem.id });

        setSelected(newSelected);
        setChosenData(current => ({
          ...chosenData,
          dishes : newSelected, totalPrice: current.totalPrice + selectItem.price })
        )
      }
      return newSelected;
    });
  }

  const menuQuantity = (name) => {
    const selectedMenu = selected.find(item => item.name === name);
    return selectedMenu ? selectedMenu.quantity : 0;
  };

  const fetchData = async () => {
    try{
      const {data} = await axios.get('dishes')
      setData(data)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h3>메뉴 선택</h3>
      <Stack direction="row" spacing={5} alignItems="center" justifyContent="center">
        {data &&
          data.map((item) => (
            <Button
              key={item.id}
              variant={'outlined'}
              onClick={() => { toggleSelected(item) }}> 
              {item.name}<br /> ${item.price}
            </Button>
          )) 
        }
      </Stack>

      <div>{chosenData.totalPrice}</div>
      <div>- soup의 개수 : {menuQuantity('soup')} </div>
      <div>- salad의 개수 : {menuQuantity('salad')} </div>
      <div>- steak의 개수 : {menuQuantity('steak')} </div>
      <div>- fish의 개수 : {menuQuantity('fish')} </div>
      <div>- coffee의 개수 : {menuQuantity('coffee')}</div>
      <div>- 총 금액 : {chosenData.totalPrice} </div>

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
