import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seed...');

  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@milkyexpress.com' },
    update: {},
    create: {
      email: 'admin@milkyexpress.com',
      password: adminPassword,
      firstName: 'Admin',
      lastName: 'User',
      role: 'ADMIN',
    },
  });
  console.log('Created admin user:', admin.email);

  const productsData = [
    {
      name: 'Lactation Boost Bites - Chocolate Bliss',
      slug: 'lactation-boost-bites-chocolate-bliss',
      description: 'Delicious chocolate-flavored lactation bites packed with galactagogues to support healthy milk production.',
      basePrice: 24.00,
      isGlutenFree: true,
      isNonGMO: true,
      isKosher: true,
      isOrganic: true,
      isFeatured: true,
      categories: 'lactation,postpartum,snacks',
      images: [
        {url: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800', altText: 'Chocolate bites', order: 0},
      ],
      variants: [
        {name: 'Chocolate Bliss - 2 Bags', sku: 'LBB-CHOC-2', price: 24.00, inventoryCount: 100},
        {name: 'Peanut Butter Chocolate - 2 Bags', sku: 'LBB-PBCHOC-2', price: 24.00, inventoryCount: 85},
      ],
    },
    {
      name: 'Mamas Morning Oat Bites',
      slug: 'mamas-morning-oat-bites',
      description: 'Energy-packed oat bites perfect for busy mornings.',
      basePrice: 22.00,
      isGlutenFree: true,
      isNonGMO: true,
      categories: 'lactation,breakfast,snacks',
      images: [{url: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=800', altText: 'Oat bites', order: 0}],
      variants: [{name: 'Cinnamon Raisin - 2 Bags', sku: 'MMO-CINRAIS-2', price: 22.00, inventoryCount: 120}],
    },
    {
      name: 'Birthday Cake Lactation Cookies',
      slug: 'birthday-cake-lactation-cookies',
      description: 'Indulgent birthday cake flavored lactation cookies.',
      basePrice: 24.00,
      isGlutenFree: true,
      isNonGMO: true,
      categories: 'lactation,dessert,cookies',
      images: [{url: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800', altText: 'Birthday cake cookies', order: 0}],
      variants: [{name: 'Birthday Cake - 2 Bags', sku: 'BC-CAKE-2', price: 24.00, inventoryCount: 75}],
    },
  ];

  for (const prod of productsData) {
    const {images, variants, ...info} = prod;
    const created = await prisma.product.create({
      data: {...info, images: {create: images}, variants: {create: variants}},
    });
    console.log('Created product:', created.name);
  }
  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
