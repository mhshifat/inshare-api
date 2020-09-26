import express from "express";
import FilesController from "../controllers/files";

const router = express.Router();

router.route("/files").post(FilesController.index);
router.route("/files/send").post(FilesController.send);

export default router;
