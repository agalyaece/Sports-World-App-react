import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import playerModels from "./models/players.js";



const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

mongoose.connect("mongodb+srv://agalyapytest:kaMtezCysko6xUKS@cluster0.ngiwond.mongodb.net/sports?retryWrites=true&w=majority&appName=Cluster0"
)

app.get("/players", (req,res) => {
    playerModels.find({})
    .then(cricket => res.json(cricket))
    .catch(err => res.json(err))
    
})

app.listen(port, () => {
    console.log(`sever running on port ${port}`);
    
})
