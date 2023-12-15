import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductList } from '../data/ProductList'
import {useDispatch} from 'react-redux'
import { addItem } from '../redux/reducer/cart';

export default function Product() {
  const params = useParams();
  const dispatch=useDispatch()
  const props = ProductList.find(
    (element) => element.id === parseInt(params.id));
const addToCart=()=>{
dispatch(addItem (props));
};
   
  
  
  return (
    <div className='card m-2 '>
      <div className='m-2'>
        <img src={props.thumbnail}
          height={180}
          width={200}
          alt={props.title} className='border-radius-9' />
        <div className='mt-3 card-body'>
          <h4 className='card-title'>{props.title}</h4>
          <h6 className='mt-2'>Price:${props.price}</h6>
          <h6 className='mt-2'>Discout:{props.discountPercentage}%</h6>
          <h6 className='mt-2'>Rating:{props.rating}</h6>

          <h6 className='mt-2'>Brand:{props.brand}</h6>
          <h6 className='mt-2'>Category:{props.category}</h6>
          <div className='mt4'>
            {props.stock > 0 ?(
            <>
            <button className=' ms-3 btn btn-success'>Buy Now</button>
            
            <button className=' ms-3 btn btn-success ' onClick={addToCart}>Add to Cart</button>
            </>
            ):( 
            <button className='btn btn-outline-danger'>out of stack</button>)}
          </div>

        </div>

      </div>
    </div>

  )
}
