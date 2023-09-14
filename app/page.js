
import { connectDB } from '@/utill/database'
import MovieSwiper from '@/components/MovieSwiper'
import MovieSwiper1 from '@/components/MovieSwiper1'
import styles from './page.module.css'
import Link from 'next/link'

export default async function Home() {
  const client =await connectDB
  const db=client.db("shop")
  let result=await db.collection('new').find().toArray();
  // console.log(result)

  return (
    <div>
      <div className={styles.banner}>
        <MovieSwiper />
      </div>
      <div className={styles.banner1}>
        <MovieSwiper1 />
      </div>
      <div className="new-arrival">
          <h2>NEW ARRIVAL</h2>
          <p>월, 수, 금 오후 1시 업데이트</p>
          <div className="new-wrap">
            {
              result.map((a, i)=>{
                return (
                 <Link href={"/detail/" + result[i]._id}>
                    <div className="new-card" key={i}>
                      <img src={result[i].image} alt={result[i].title} />
                      <div className="card-box">
                        <h3 className='title'>{result[i].title}</h3>
                        <h3 className='description'>{result[i].description}</h3>
                        <h3 className='price'>{result[i].price}원</h3>
                      </div>
                    </div>
                 </Link>
                )
              })
            }
          </div>
      </div>
    </div>
  )
}
