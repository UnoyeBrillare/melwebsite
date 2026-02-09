import { Request, Response } from 'express';
import prisma from '../config/database.js';
import { asyncHandler, CustomError } from '../middleware/errorHandler.js';

// Generate unique order number
const generateOrderNumber = () => {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `ME${timestamp}${random}`;
};

// Create order (checkout)
export const createOrder = asyncHandler(async (req: Request, res: Response) => {
  const {
    email,
    firstName,
    lastName,
    shippingAddress,
    items,
    subtotal,
    tax,
    shipping,
    total,
    paymentMethod,
  } = req.body;

  const userId = req.user?.userId;

  // Validation
  if (!email || !firstName || !lastName || !shippingAddress || !items || items.length === 0) {
    throw new CustomError('Missing required order information', 400, 'VALIDATION_ERROR');
  }

  // Generate order number
  const orderNumber = generateOrderNumber();

  // Create order with items
  const order = await prisma.order.create({
    data: {
      userId,
      orderNumber,
      email,
      firstName,
      lastName,
      shippingAddress,
      subtotal,
      tax,
      shipping,
      total,
      paymentMethod,
      items: {
        create: items.map((item: any) => ({
          productId: item.productId,
          variantId: item.variantId,
          productName: item.productName,
          variantName: item.variantName,
          price: item.price,
          quantity: item.quantity,
          isSubscription: item.isSubscription || false,
        })),
      },
    },
    include: {
      items: {
        include: {
          product: true,
          variant: true,
        },
      },
    },
  });

  // Clear cart after order (if user is authenticated)
  if (userId) {
    await prisma.cartItem.deleteMany({
      where: { userId },
    });
  }

  res.status(201).json({
    success: true,
    data: order,
    message: 'Order created successfully',
  });
});

// Get user's orders
export const getOrders = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.user?.userId;

  if (!userId) {
    throw new CustomError('Authentication required', 401, 'UNAUTHORIZED');
  }

  const orders = await prisma.order.findMany({
    where: { userId },
    include: {
      items: {
        include: {
          product: true,
          variant: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  res.json({
    success: true,
    data: orders,
  });
});

// Get single order by order number
export const getOrderByNumber = asyncHandler(async (req: Request, res: Response) => {
  const { orderNumber } = req.params;

  const order = await prisma.order.findUnique({
    where: { orderNumber },
    include: {
      items: {
        include: {
          product: true,
          variant: true,
        },
      },
    },
  });

  if (!order) {
    throw new CustomError('Order not found', 404, 'ORDER_NOT_FOUND');
  }

  res.json({
    success: true,
    data: order,
  });
});

// Update order status (Admin only)
export const updateOrderStatus = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { orderStatus, paymentStatus } = req.body;

  const order = await prisma.order.update({
    where: { id },
    data: {
      ...(orderStatus && { orderStatus }),
      ...(paymentStatus && { paymentStatus }),
    },
    include: {
      items: true,
    },
  });

  res.json({
    success: true,
    data: order,
    message: 'Order status updated',
  });
});
