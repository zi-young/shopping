
import { ObjectId } from "mongodb";
import { connectDB } from "@/utill/database";

export default async function handler(req, res){

    const client= await connectDB
    const db=client.db("shop")
    let result=await db.collection('comment').find({parent: new ObjectId(req.query.id)}).toArray();
    //console.log(result)
    
    res.status(200).json(result)
}