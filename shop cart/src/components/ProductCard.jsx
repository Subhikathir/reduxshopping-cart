import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function ProductCard(props) {
  const navigate=useNavigate();
  return (
    <div className='card m-2 cursor-pointer' role='button' onClick={()=>navigate(`/Product/${props.id}`)}>
<div className='m-2 '>
    <img src ={props.thumbnail}
    height={150}
    width={180}
    alt={props.title} className='border-radius-9'/>
    <div className='card-body'>
        <h4 className='card-title'>{props.title}</h4>
        <h6 className='mt-2'>Price:${props.price}</h6>
        <h6 className='mt-2'>Discout:{props.discountPercentage}%</h6>
        <h6 className='mt-2'>Rating:{props.rating}</h6>
        
        <h6 className='mt-2'>Brand:{props.brand}</h6>
        <h6 className='mt-2'>Category:{props.category}</h6>
        <div className='mt4'>
        {props.stock > 0 ? <button className='btn btn-success'>Available</button>:<button className='btn btn-outline-danger'>Out of Stack</button> }
       </div>
       
    </div>
    
</div>
    </div>
  )
}
