import React from 'react'
import './FoodDisplay.css'
import { useContext } from 'react'
import { StoreContex } from '../../context/storeContex'
import Fooditem from '../FoodItem/Fooditem'

const FoodDisplay = ({category}) => {

const {food_list} = useContext(StoreContex)

  return (
    <div className='food_display' id="food_display">
        <h2>Top dishes near to u</h2>
        <div className='food_display_list'>
{food_list.map((item,index)=>{

if(category === "All" || category === item.category){
  return <Fooditem key={index} id={item._id} name={item.name} 
  description={item.description} price={item.price}
  image={item.image}/>
}


})}
        </div>
        </div>
  )
}

export default FoodDisplay;