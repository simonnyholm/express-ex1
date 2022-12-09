import mongodb from "mongodb";

import dotenv from "dotenv";
dotenv.config();

const { MongoClient } = mongodb;
// Connection URI
const uri = process.env.MONGO_URI;
// Create a ew MongoClient
const client = new MongoClient(uri);

export default async function useDB(collectionName) {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    console.log("db connection est");
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });

    const db = client.db("Ostebiks");
    const collection = db.collection(collectionName);
    return { collection, client };
  } catch {}
}
useDB().catch(console.dir);
