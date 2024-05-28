import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import playerModels from "./models/players.js";



const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

// mongoose.connect("mongodb+srv://agalyapytest:kaMtezCysko6xUKS@cluster0.ngiwond.mongodb.net/sports?retryWrites=true&w=majority&appName=Cluster0")
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://agalyapytest:kaMtezCysko6xUKS@cluster0.ngiwond.mongodb.net/sports?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir); 
app.get("/players", (req,res) => {
    playerModels.find({})
    .then(cricket => res.json(cricket))
    .catch(err => res.json(err))
    
})

app.listen(port, () => {
    console.log(`sever running on port ${port}`);
    
})
