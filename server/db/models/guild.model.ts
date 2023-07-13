import { Schema } from "mongoose"
import mongoose from "mongoose"

const reqNum = {
    type: Number,
    required: true,
    default: 0
}

const reqString = {
    type: String,
    required: true
}
const reqBool = {
   type: Boolean,
   required: true,
   default: true
}
const falsereqBool = {
   type: Boolean,
   required: true,
   default: true
}



const userSchema = new Schema({
    _id: reqString,
    servers: [],
    name: reqString
})

export default mongoose.model("guild", userSchema)