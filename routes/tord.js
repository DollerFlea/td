import express from "express";

const router = express.Router();

router.get("/get/random", (req, res) => {

    const responseObject = {};

    res.json(responseObject);
});

export default router;