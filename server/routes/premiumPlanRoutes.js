import express from 'express';
import { subscribePremiumPlan ,getCurrentUserPlanExpiration,transferCoins,collectStatisticsAndGrantCoins,getPremiumPlanType} from '../controllers/premiumPlanController.js';

import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// Subscribe to a premium plan
router.post('/subscribe', verifyToken, subscribePremiumPlan);
router.post('/Statistics', verifyToken, collectStatisticsAndGrantCoins);
router.post('/transfer', verifyToken,transferCoins );
router.get('/PlanType/:userId', verifyToken, getPremiumPlanType);

router.get('/premium/expiration',verifyToken, getCurrentUserPlanExpiration);

export default router;
