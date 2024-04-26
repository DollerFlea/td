import express from "express";
import mongoose from "mongoose";
import * as Tord from "./../functions/db_functions.js";

const router = express.Router();

router.get("/interact/dare/add", async (req, res) => {
    try {
        await addDare();

        const responseObj = {
            status: true
        };

        res.json(responseObj);
    } catch (err) {
        const responseObj = {
            status: false
        };

        res.json(responseObj);
    };
});
router.get("/interact/dare/edit/:id", (req, res) => {

});
router.get("/interact/dare/remove/:id", (req, res) => {

});

router.get("/interact/truth/add", (req, res) => {});
router.get("/interact/truth/edit/:id", (req, res) => {});
router.get("/interact/truth/remove/:id", (req, res) => {});

router.get("/get/random", (req, res) => {});

router.get("/get/dare", (req, res) => {});
router.get("/get/dare/filter", (req, res) => {});

router.get("/get/truth", (req, res) => {});

export default router;