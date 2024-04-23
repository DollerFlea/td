import mongoose from "mongoose";

//
const dareSchema = new mongoose.Schema({
    dare: {
        type: String,
        required: true
    },
    cond: {
        type: Boolean,
        required: true
    },
    cuff: {
        type: Boolean,
        required: true
    },
    blin: {
        type: Boolean,
        required: true
    },
    nothing: {
        type: Boolean,
        required: true
    }
}); //dare: String, cond: Boolean, cuff: Boolean, blin: Boolean, nothing: Boolean

const truthSchema = new mongoose.Schema({
    truth: {
        type: String,
        required: true
    }
}); //truth: String


const Dare = mongoose.Model("Dare", dareSchema);
const Truth = mongoose.Model("Truth", truthSchema);

export { Dare, Truth };