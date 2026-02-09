import { Router } from 'express';
import {
  createOrder,
  getOrders,
  getOrderByNumber,
  updateOrderStatus,
} from '../controllers/orderController.js';
import { authenticateToken, requireAdmin } from '../middleware/auth.js';

const router = Router();

router.post('/', createOrder);
router.get('/', authenticateToken, getOrders);
router.get('/:orderNumber', getOrderByNumber);
router.put('/:id/status', authenticateToken, requireAdmin, updateOrderStatus);

export default router;
