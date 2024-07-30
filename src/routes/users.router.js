import { Router } from "express";
import { passportCall } from "../utils/authUtil.js";
import { getUsers, premiumController, uploadUserDocuments } from "../controllers/usersController.js";
import upload from "../middlewares/multer.js";

const router = Router();

router.get("/", getUsers);
router.get("/premium/:uid", passportCall("jwt"), premiumController);
router.post("/:uid/documents", passportCall("jwt"), upload.array("file"), uploadUserDocuments);

export default router;