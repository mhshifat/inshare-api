import express from "express";
import FilesController from "../controllers/files";

const router = express.Router();

router.route("/files").post(FilesController.index);

export default router;
