import React, { useState, useContext } from 'react'
import ChooseTablet from './orderPages/ChooseTablet'
import { MainContext } from './context/ChosenContextProvider'
import ChooseCook from './orderPages/ChooseCook'
import ChooseMenu from './orderPages/ChooseMenu'
import CheckOrders from './orderPages/CheckOrders'

// Orders에서 화면 렌더링
// ChooseTablet, cook, menu는 MainContext를 가지고 와서 값을 업데이트



export default function Orders() {

  return (
    <div>
        <ChooseTablet></ChooseTablet>
    </div>
  )
}
