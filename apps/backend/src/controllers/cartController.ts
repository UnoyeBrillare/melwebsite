import { Request, Response } from 'express';
import prisma from '../config/database.js';
import { asyncHandler, CustomError } from '../middleware/errorHandler.js';

// Get cart (supports both authenticated and guest users)
export const getCart = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  const sessionId = req.query.sessionId as string;

  if (!userId && !sessionId) {
    throw new CustomError('User ID or Session ID required', 400, 'VALIDATION_ERROR');
  }

  const cartItems = await prisma.cartItem.findMany({
    where: userId ? { userId } : { sessionId },
    include: {
      product: {
        include: {
          images: {
            take: 1,
            orderBy: { order: 'asc' },
          },
        },
      },
      variant: true,
    },
  });

  res.json({
    success: true,
    data: cartItems,
  });
});

// Add item to cart
export const addToCart = asyncHandler(async (req: Request, res: Response) => {
  const { productId, variantId, quantity = 1, isSubscription = false, sessionId } = req.body;
  const userId = req.user?.userId;

  if (!productId) {
    throw new CustomError('Product ID is required', 400, 'VALIDATION_ERROR');
  }

  if (!userId && !sessionId) {
    throw new CustomError('User ID or Session ID required', 400, 'VALIDATION_ERROR');
  }

  // Check if product exists
  const product = await prisma.product.findUnique({ where: { id: productId } });
  if (!product) {
    throw new CustomError('Product not found', 404, 'PRODUCT_NOT_FOUND');
  }

  // Check if item already in cart
  const existingItem = await prisma.cartItem.findFirst({
    where: {
      ...(userId ? { userId } : { sessionId }),
      productId,
      variantId: variantId || null,
    },
  });

  let cartItem;

  if (existingItem) {
    // Update quantity
    cartItem = await prisma.cartItem.update({
      where: { id: existingItem.id },
      data: { quantity: existingItem.quantity + quantity },
      include: {
        product: true,
        variant: true,
      },
    });
  } else {
    // Create new cart item
    cartItem = await prisma.cartItem.create({
      data: {
        userId,
        sessionId,
        productId,
        variantId,
        quantity,
        isSubscription,
      },
      include: {
        product: true,
        variant: true,
      },
    });
  }

  res.status(201).json({
    success: true,
    data: cartItem,
    message: 'Item added to cart',
  });
});

// Update cart item quantity
export const updateCartItem = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { quantity } = req.body;

  if (!quantity || quantity < 1) {
    throw new CustomError('Invalid quantity', 400, 'VALIDATION_ERROR');
  }

  const cartItem = await prisma.cartItem.update({
    where: { id },
    data: { quantity },
    include: {
      product: true,
      variant: true,
    },
  });

  res.json({
    success: true,
    data: cartItem,
    message: 'Cart item updated',
  });
});

// Remove item from cart
export const removeFromCart = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  await prisma.cartItem.delete({
    where: { id },
  });

  res.json({
    success: true,
    message: 'Item removed from cart',
  });
});

// Clear entire cart
export const clearCart = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  const sessionId = req.query.sessionId as string;

  if (!userId && !sessionId) {
    throw new CustomError('User ID or Session ID required', 400, 'VALIDATION_ERROR');
  }

  await prisma.cartItem.deleteMany({
    where: userId ? { userId } : { sessionId },
  });

  res.json({
    success: true,
    message: 'Cart cleared',
  });
});
