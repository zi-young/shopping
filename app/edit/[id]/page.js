import { connectDB } from '@/utill/database';
import styles from './page.module.css'
import { ObjectId } from 'mongodb';

export default async function Edit(props){
    const client=await connectDB
    const db=client.db("shop")
    let result=await db.collection('post').findOne({_id: new ObjectId(props.params.id)});
    console.log(result)

    return(
        <div className={styles.writeWrap}>
            <h4>수정 페이지</h4>
            <form action="/api/post/edit" method='POST'>
                <input type="text" name="title" defaultValue={result.title} />
                <textarea name="content" defaultValue={result.content}></textarea>
                <input type="hidden" value={result._id} name='_id'/>
                {/* <input name="createdAt" /> */}
                <button type='submit'>수정</button>
                <input type="" name='createdAthidden' value={result.createdAt} />

            </form>
        </div>
    )
}

