import mongoose from "mongoose";

const cricketSchema = new mongoose.Schema({
    player:String,
    runs:Number,
    wickets:Number
},
{
    collection: "cricket"
})

const playerModels = mongoose.model("cricket", cricketSchema);
export default playerModels;