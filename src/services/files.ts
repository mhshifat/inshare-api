import { Request, Response } from "express";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import { env, storage } from "../config";
import File from "../modals/File";

export default class FilesServices {
  static upload(req: Request, res: Response) {
    const upload = multer({
      storage: storage,
      limits: { fileSize: 1000000 * 100 },
    }).single("myFile");

    upload(req, res, async (err: any) => {
      if (!req.file) return res.json({ error: "All files are required" });
      if (err) return res.json({ error: err.message });

      const file = new File({
        filename: req.file.filename,
        uuid: uuidv4(),
        path: req.file.path,
        size: req.file.size,
      });
      const response: any = await file.save();
      return res.json({ file: `${env.BASE_URL}/files/${response.uuid}` });
    });
  }

  static async download(req: Request, res: Response) {
    try {
      const file: any = await File.findOne({ uuid: req.params.uuid });
      if (!file) {
        return res.render("download", { error: "Link has been expired." });
      }
      return res.render("download", {
        uuid: file.uuid,
        fileName: file.filename,
        fileSize: file.size,
        downloadLink: `${env.BASE_URL}/files/download/${file.uuid}`,
      });
    } catch (err) {
      return res.render("download", { error: "Something went wrong..." });
    }
  }
}
