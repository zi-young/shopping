import Link from 'next/link'
import styles from './page.module.css'

import NoticeItem from './NoticeItem'
import { connectDB } from '@/utill/database'


export default async function Notice(){

    const client = await connectDB
    const db = client.db('shop')
    let result =await db.collection('post').find().toArray();
    console.log("result"+result);

    return(
        <div className={styles.notice}>
            <h4>Notice</h4>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>날짜</th>
                        <th>수정</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <NoticeItem result={result} />
            </table>
            <p><Link href='/write'>작성하기</Link></p>
        </div>
    )
}