
import React from 'react';
import styles from './page.module.css'
import CartList from '@/components/CartList';
import { connectDB } from '@/utill/database';


export default async function Detail(props){
    const client= await connectDB
    const db=client.db("shop")
    let result=await db.collection('cart').find().toArray();
    console.log(result)
    return(
        <div className={styles.cart}>
            <h3 className={styles.h3}>장바구니</h3>
            <div className={styles.cartWrap}>
                <table className={styles.title}>
                    <thead>
                        <tr>
                            <th><input type="checkbox" />전체선택</th>
                            <th>상품정보</th>
                            <th>상품금액</th>
                            <th>배송비</th>
                        </tr>
                    </thead>
                    <CartList result={result} />
                </table>
                <p className={styles.buy}>구매하기</p>
            </div>
        </div>
    )
}