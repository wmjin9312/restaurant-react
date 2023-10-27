import React, { useEffect, useContext } from 'react';
import RecipeReviewCard from './menu/RecipeReviewCard';
import { MainContext } from './context/ChosenContextProvider'

export default function Menus() {
  
  const { resetData }  = useContext(MainContext);

  useEffect(()=>{
    resetData();
  }, [])

  return (
    <div>
      <RecipeReviewCard ></RecipeReviewCard>
    </div>
  )
}
