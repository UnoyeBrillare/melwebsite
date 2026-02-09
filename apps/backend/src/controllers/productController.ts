import { Request, Response } from 'express';
import prisma from '../config/database.js';
import { asyncHandler, CustomError } from '../middleware/errorHandler.js';
import type { Prisma } from '@prisma/client';

// Get all products with filtering, sorting, and pagination
export const getProducts = asyncHandler(async (req: Request, res: Response) => {
  const {
    category,
    minPrice,
    maxPrice,
    isGlutenFree,
    isNonGMO,
    isKosher,
    isOrganic,
    search,
    sort = 'newest',
    page = '1',
    limit = '20',
  } = req.query;

  const pageNum = parseInt(page as string);
  const limitNum = parseInt(limit as string);
  const skip = (pageNum - 1) * limitNum;

  // Build where clause
  const where: Prisma.ProductWhereInput = {
    isActive: true,
    ...(category && { categories: { has: category as string } }),
    ...(minPrice && { basePrice: { gte: parseFloat(minPrice as string) } }),
    ...(maxPrice && { basePrice: { lte: parseFloat(maxPrice as string) } }),
    ...(isGlutenFree === 'true' && { isGlutenFree: true }),
    ...(isNonGMO === 'true' && { isNonGMO: true }),
    ...(isKosher === 'true' && { isKosher: true }),
    ...(isOrganic === 'true' && { isOrganic: true }),
    ...(search && {
      OR: [
        { name: { contains: search as string, mode: 'insensitive' } },
        { description: { contains: search as string, mode: 'insensitive' } },
      ],
    }),
  };

  // Build orderBy clause
  const orderByMap: Record<string, Prisma.ProductOrderByWithRelationInput> = {
    newest: { createdAt: 'desc' },
    oldest: { createdAt: 'asc' },
    price_asc: { basePrice: 'asc' },
    price_desc: { basePrice: 'desc' },
    name_asc: { name: 'asc' },
    name_desc: { name: 'desc' },
  };

  const orderBy = orderByMap[sort as string] || orderByMap.newest;

  // Fetch products and total count
  const [products, total] = await Promise.all([
    prisma.product.findMany({
      where,
      orderBy,
      skip,
      take: limitNum,
      include: {
        images: {
          orderBy: { order: 'asc' },
          take: 1,
        },
        variants: {
          take: 3,
        },
      },
    }),
    prisma.product.count({ where }),
  ]);

  res.json({
    success: true,
    data: products,
    pagination: {
      page: pageNum,
      limit: limitNum,
      total,
      totalPages: Math.ceil(total / limitNum),
    },
  });
});

// Get single product by slug
export const getProductBySlug = asyncHandler(async (req: Request, res: Response) => {
  const { slug } = req.params;

  const product = await prisma.product.findUnique({
    where: { slug },
    include: {
      images: {
        orderBy: { order: 'asc' },
      },
      variants: {
        orderBy: { name: 'asc' },
      },
    },
  });

  if (!product) {
    throw new CustomError('Product not found', 404, 'PRODUCT_NOT_FOUND');
  }

  res.json({
    success: true,
    data: product,
  });
});

// Create product (Admin only)
export const createProduct = asyncHandler(async (req: Request, res: Response) => {
  const {
    name,
    slug,
    description,
    basePrice,
    categories,
    isGlutenFree,
    isNonGMO,
    isKosher,
    isOrganic,
    isFeatured,
    images,
    variants,
  } = req.body;

  // Validation
  if (!name || !slug || !description || !basePrice) {
    throw new CustomError('Missing required fields', 400, 'VALIDATION_ERROR');
  }

  // Check if slug already exists
  const existingProduct = await prisma.product.findUnique({ where: { slug } });
  if (existingProduct) {
    throw new CustomError('Product with this slug already exists', 400, 'DUPLICATE_SLUG');
  }

  // Create product with images and variants
  const product = await prisma.product.create({
    data: {
      name,
      slug,
      description,
      basePrice,
      categories: categories || [],
      isGlutenFree: isGlutenFree || false,
      isNonGMO: isNonGMO || false,
      isKosher: isKosher || false,
      isOrganic: isOrganic || false,
      isFeatured: isFeatured || false,
      images: {
        create: images || [],
      },
      variants: {
        create: variants || [],
      },
    },
    include: {
      images: true,
      variants: true,
    },
  });

  res.status(201).json({
    success: true,
    data: product,
    message: 'Product created successfully',
  });
});

// Update product (Admin only)
export const updateProduct = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;

  const product = await prisma.product.update({
    where: { id },
    data: updateData,
    include: {
      images: true,
      variants: true,
    },
  });

  res.json({
    success: true,
    data: product,
    message: 'Product updated successfully',
  });
});

// Delete product (Admin only)
export const deleteProduct = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  await prisma.product.delete({
    where: { id },
  });

  res.json({
    success: true,
    message: 'Product deleted successfully',
  });
});
