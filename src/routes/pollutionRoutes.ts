// src/routes/pollutionRoutes.ts

import { Router } from 'elysia';
import {
  getAllPollutionData,
  getPollutionDataById,
  createPollutionData,
  updatePollutionData,
  deletePollutionData
} from '../controllers/pollutionController';

const router = new Router();

router.get('/pollution', getAllPollutionData);
router.get('/pollution/:id', getPollutionDataById);
router.post('/pollution', createPollutionData);
router.put('/pollution/:id', updatePollutionData);
router.delete('/pollution/:id', deletePollutionData);

export default router;
