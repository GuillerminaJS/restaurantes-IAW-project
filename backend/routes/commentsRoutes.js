import express from "express";
import * as commentsController from '../controllers/commentsController.js';

const router = express.Router();

router.get('/comments', commentsController.showAllComments);
router.post('/comments', commentsController.newComment); 
router.put('/comments', commentsController.updateComment);
router.delete('/comments/:idComment', commentsController.deleteCommment);

export default router;
