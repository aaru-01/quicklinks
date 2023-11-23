import { Schema, model } from "mongoose";

const linkShema = new Schema({
    url:{
        type:String,
        required: true,
    },
    slug:{
        type:String,
        required: true,
        unique:true,  
    },
    clicks:{
        type:Number,
        required: true,
        default: 0,
    }, 
},
{
    timestamps: true,
});

const Link = model('Link', linkShema);

export default Link;