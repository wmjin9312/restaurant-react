import React, { useState, useContext, useEffect } from 'react'


export const MainContext = React.createContext(null)

export default function ChosenContextProvider({children}) {
  
  const [chosenData, setChosenData] = useState({
    cook: {id: null, firstName: null},
    tablet: {id: null, location: null},
    totalPrice: 0,
    dishes: {quantity:0} 
  })

  const resetData = () => {
    setChosenData({
      cook: {id: null, firstName: null},
      tablet: {id: null, location: null},
      totalPrice: 0,
      dishes: { quantity:0 }
    });
  }

  const value = {chosenData, setChosenData, resetData}

  return (
    <MainContext.Provider value={value}>
        {children}
    </MainContext.Provider>
  )
}
