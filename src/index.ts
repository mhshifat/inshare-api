import cors from "cors";
import express from "express";
import path from "path";
import { connectDb, env } from "./config";
import FilesController from "./controllers/files";
import File from "./modals/File";
import fileRoutes from "./routes/files";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.use("/api", fileRoutes);
app.get("/files/:uuid", FilesController.download);
app.get("/files/download/:uuid", async (req, res) => {
  const file: any = await File.findOne({ uuid: req.params.uuid });
  if (!file) {
    return res.render("download", { error: "Link has been expired." });
  }
  const filePath = `${__dirname}/../${file.path}`;
  res.download(filePath);
});

connectDb();
app.listen(env.PORT, () => {
  console.log(`Listening on port ${env.PORT}`);
});
