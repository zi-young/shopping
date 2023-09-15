// 'use client'
import { connectDB } from '@/utill/database'
import styles from './page.module.css'
import { ObjectId } from 'mongodb';
import Cart from '@/components/Cart';



export default async function Detail(props){
    const client=await connectDB
    const db=client.db("shop")
    let result=await db.collection('new').findOne({_id: new ObjectId(props.params.id)});
    console.log(result)
    return (
        <div className={styles.detail}>., 
            <div className={styles.detailWrap}>
                <div className={styles.imgWrap}>
                    <img src={result.image} alt={result.title} />
                </div>
                <div className={styles.text}>
                  <div className={styles.descriptionBox}>
                    <div><p className={styles.description}>{result.description}</p></div>
                        <div className={styles.likeBox}>
                        <p className={styles.like}>
                            <button>
                            <svg class="css-kglvp1 e1gbu2jd1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M9 6.088C9 3.831 10.791 2 13 2s4 1.83 4 4.088c0 1.743-1.46 3.23-1.46 3.23L9 16 2.46 9.318S1 7.83 1 6.088C1 3.831 2.791 2 5 2s4 1.83 4 4.088z" fill="#ffffff" fill-rule="evenodd" stroke="#5d5d5d" stroke-width="0.7"></path></svg>
                            </button>
                        </p>
                    </div>
                  </div>
                  <div className={styles.star_box}>
                    <div className={styles.star}>
                        <div className={styles.stars}>
                        <i class="css-neyd9i eryqt8b2"><svg class="css-0 e1awh2ac0" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 13 12"><path fill="#000000" fill-rule="evenodd" stroke="#000000" stroke-width="0.7" d="M4.146 3.95L0 4.583l3 3.075L2.292 12 6 9.95 9.708 12 9 7.658l3-3.075-4.146-.633L6 0z"></path></svg></i>
                        <i class="css-neyd9i eryqt8b2"><svg class="css-0 e1awh2ac0" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 13 12"><path fill="#000000" fill-rule="evenodd" stroke="#000000" stroke-width="0.7" d="M4.146 3.95L0 4.583l3 3.075L2.292 12 6 9.95 9.708 12 9 7.658l3-3.075-4.146-.633L6 0z"></path></svg></i>
                        <i class="css-neyd9i eryqt8b2"><svg class="css-0 e1awh2ac0" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 13 12"><path fill="#000000" fill-rule="evenodd" stroke="#000000" stroke-width="0.7" d="M4.146 3.95L0 4.583l3 3.075L2.292 12 6 9.95 9.708 12 9 7.658l3-3.075-4.146-.633L6 0z"></path></svg></i>
                        <i class="css-neyd9i eryqt8b2"><svg class="css-0 e1awh2ac0" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 13 12"><path fill="#000000" fill-rule="evenodd" stroke="#000000" stroke-width="0.7" d="M4.146 3.95L0 4.583l3 3.075L2.292 12 6 9.95 9.708 12 9 7.658l3-3.075-4.146-.633L6 0z"></path></svg></i>
                        <i class="css-neyd9i eryqt8b2"><svg class="css-0 e1awh2ac0" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 13 12"><path fill="#000000" fill-rule="evenodd" stroke="#000000" stroke-width="0.7" d="M4.146 3.95L0 4.583l3 3.075L2.292 12 6 9.95 9.708 12 9 7.658l3-3.075-4.146-.633L6 0z"></path></svg></i>
                        </div>
                    </div>
                  </div>
                  <div className={styles.review}>
                    <span>8개 리뷰보기</span>
                  </div>
                    <p className={styles.price}>{result.price}원</p>
                    <p className={styles.card}>{result.card}</p>
                    <div role='button' className={styles.data}>
                        <input className={styles.input} type="text" placeholder='날짜 선택' />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 16"><g fill="none" fill-rule="evenodd" stroke="rgb(212, 212, 212)" stroke-width="3"><path d="M28 1L13.97 15 0 1.058"></path></g></svg>
                    </div>
                    {/* <ul class="css-dgdhjg e3vsmsk4"><li role="button" class="css-ppfb76 e3vsmsk5">날짜 선택</li><li role="button" class="css-ppfb76 e3vsmsk5">4월 07일(목) [품절]</li></ul> */}
                    <p className={styles.dilivery}>{result.dilivery}</p>
                    <div className={styles.cart}>
                        <button className={styles.cart1}>
                         장바구니 담기
                        </button>
                        <button className={styles.cart2}>
                         바로 구매하기
                        </button>
                    </div>
                    <Cart result={result}/>
                </div>
            </div>
            <div className={styles.detail1}>
                 <img src={result.detailimage} alt="detailimage" />
            </div>
        </div>
    )
}