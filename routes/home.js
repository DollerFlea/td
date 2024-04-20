import express from "express";
import path from "path";
const __dirname = path.resolve();

const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "html", "home.html"));
});

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "html", "edit.html"));
});

export default router;