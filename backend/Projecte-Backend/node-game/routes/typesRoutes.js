import express from "express";
import * as typesController from '../controllers/typesController.js';

const router = express.Router();

router.get('/types', typesController.showAllTypes);
router.post('/types', typesController.newType);    
router.put('/types', typesController.updateType);
router.delete('/types/:idType', typesController.deleteType);

export default router;
