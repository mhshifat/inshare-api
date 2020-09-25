import { Request, Response } from "express";
import FilesServices from "../services/files";

export default class FilesController {
  static index(req: Request, res: Response) {
    return FilesServices.upload(req, res);
  }

  static download(req: Request, res: Response) {
    return FilesServices.download(req, res);
  }
}
