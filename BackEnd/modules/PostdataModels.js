



const mongoose=require('mongoose')
const Postdataschema=mongoose.Schema({
    image: String,
    proname: String,
    category: String,
    price: String,
    brandname: String,
    quantity: String

},{timestamps:true}
)
const prodmodel=new mongoose.model('proims',Postdataschema)
module.exports=prodmodel