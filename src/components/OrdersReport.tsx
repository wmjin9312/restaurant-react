import React, { useContext, useEffect } from 'react'
import { MainContext } from './context/ChosenContextProvider';

export default function OrdersReport() {

  const { resetData }  = useContext(MainContext);

  useEffect(()=>{
    resetData();
  }, [])

  return (
    <div>OrderReport</div>
  )
}
