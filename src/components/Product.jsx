import React, { Component } from 'react'


export default function Product(props) {
    return (
        <div className='card'>
            <div className="card--image">
                <img src={`src/assets/images/${props.image}`} alt="product image" className='product--image' />

            </div>
            <p className='product--type'>{props.type}</p>
            <h2 className='product--name'>{props.name}</h2>
            <p className='product--price'>Rs.{props.price}</p>
            <div className='product--color'>
                {props.color.mode1 && <div className="p--color" style={{ backgroundColor: `${props.color.mode1}` }} ></div>}
                {props.color.mode2 && <div className="p--color" style={{ backgroundColor: `${props.color.mode2}` }}></div>}
                {props.color.mode3 && <div className="p--color" style={{ backgroundColor: `${props.color.mode3}` }}></div>}
                {props.color.mode4 && <div className="p--color" style={{ backgroundColor: `${props.color.mode4}` }}></div>}
                {props.color.mode5 && <div className="p--color" style={{ backgroundColor: `${props.color.mode5}` }}></div>}
            </div>
            <h3 className='product--size'>{props.size}</h3>
        </div>

    )
}

