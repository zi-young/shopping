'use client'
import React,{useState} from 'react';

const CartList = ({result}) => {
  
    return (
        <tbody className='cartList'>
            {
                result.length > 0 ? result.map((item, i)=>{
                    let priceCount=Number(item.price*item.count);
                    return(
                        <tr key={i}>
                            <td><input type="checkbox" /></td>
                            <td>
                                <span><img src={item.image} alt={item.description} /></span>
                                <strong>{item.description}</strong>
                            </td>
                            <td>{item.price * item.count}</td>
                            <td>{
                                priceCount>=200000? '무료배송':'200000원이상 무료배송'
                                }</td>
                        </tr>
                    )
                   
                }): '로딩중'
            }
        </tbody>
    );
};

export default CartList;