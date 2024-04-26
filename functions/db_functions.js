import mongoose from "mongoose";
import { Dare, Truth } from "./db.js";

export async function addDare(dareStr, condBoo, cuffBoo, blinBoo, nothingBoo) {
    const newDare = new Dare({
        dare: dareStr,
        cond: condBoo,
        cuff: cuffBoo,
        blin: blinBoo,
        nothing: nothingBoo
    });

    try {
        await newDare.save();
        return true;
    } catch (err) {
        return false;
    };
};
export async function editDare(id, updateObject) {
    try {
        await Dare.findOneAndUpdate({ _id: id }, updateObject);
        return true;
    } catch (err) {
        return false;
    };
};
export async function removeDare(id) {
    try {
        await Dare.remove({ _id: id });
        return true;
    } catch (err) {
        return false;
    };
};

export async function addTruth(truthStr) {
    const newTruth = new Truth({
        truth: truthStr
    });

    try {
        await newTruth.save();
        return true;
    } catch (err) {
        return false;
    };
};
export async function editTruth(id, updateObject) {
    try {
        await Truth.findOneAndUpdate({ _id: id }, updateObject);
        return true;
    } catch (err) {
        return false;
    };
};
export async function removeTruth(id) {
    try {
        await Truth.remove({ _id: id });
        return true;
    } catch (err) {
        return false;
    };
};

export async function truth() {
    try {
        const truthArr = await Truth.find();
        const truthObj = truthArr[Math.floor(Math.random()*truthArr.length)]

        return truthObj
    } catch (err) {
        console.log(err.error);
        return false;
    };
};
export async function dare() {
    try {
        const dareArr = await Truth.find();
        const dareObj = dareArr[Math.floor(Math.random()*dareArr.length)]

        return dareObj
    } catch (err) {
        console.log(err.error);
        return false;
    };
};
export async function dareFilter(req) {
    try {
        const dareArr1 = await Truth.find();

        const dareArr2 = dareArr1.filter((dare) => dare.nothing === req.body.nothing && dare.blin === req.body.blin && dare.cuff === req.body.cuff && dare.cond === req.body.cond);

        const dareObj = dareArr2[Math.floor(Math.random()*dareArr2.length)]

        return dareObj;
    } catch (err) {
        console.log(err.error);
        return false;
    };
};
export async function random() {
    try {
        const randInt = Math.floor(Math.floor()*2);
        if (randInt === 0){
            const truthArr = await Truth.find();
            const truthObj = truthArr[Math.floor(Math.random()*truthArr.length)]

            return truthObj
        } else if (randInt === 1){
            const dareArr = await Truth.find();
            const dareObj = dareArr[Math.floor(Math.random()*dareArr.length)]

            return dareObj
        };
    } catch (err) {
        console.log(err.error);
        return false;
    };
};