import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});

  const vitaminsCategory = await prisma.category.create({
    data: { name: 'Vitamins' },
  });

  const mineralsCategory = await prisma.category.create({
    data: { name: 'Minerals' },
  });

  const supplementsCategory = await prisma.category.create({
    data: { name: 'Supplements' },
  });

  await prisma.product.create({
    data: {
      name: 'Vitamin C 1000mg',
      description:
        'High-dose vitamin C for immune support and antioxidant protection.',
      price: 12.99,
      stock: 200,
      supplementType: 'Vitamin C',
      ingredients: 'Vitamin C, citrus bioflavonoids, rose hips',
      dosage: '1 tablet daily',
      categoryId: vitaminsCategory.id,
    },
  });

  await prisma.product.create({
    data: {
      name: 'Vitamin D3 5000 IU',
      description:
        'Supports bone health, immune function, and calcium absorption.',
      price: 15.99,
      stock: 150,
      supplementType: 'Vitamin D',
      ingredients: 'Vitamin D3, olive oil, softgel capsule',
      dosage: '1 capsule daily',
      categoryId: vitaminsCategory.id,
    },
  });

  await prisma.product.create({
    data: {
      name: 'B-Complex Vitamins',
      description: 'Comprehensive B-vitamin formula for energy and metabolism.',
      price: 20.99,
      stock: 100,
      supplementType: 'B Vitamins',
      ingredients: 'B1, B2, B3, B5, B6, B12, folic acid, biotin',
      dosage: '1 tablet daily',
      categoryId: vitaminsCategory.id,
    },
  });

  // Create products for the Minerals category
  await prisma.product.create({
    data: {
      name: 'Magnesium Glycinate 400mg',
      description: 'Highly absorbable magnesium for muscle and nerve health.',
      price: 18.99,
      stock: 120,
      supplementType: 'Mineral',
      ingredients: 'Magnesium glycinate, cellulose, silica',
      dosage: '2 tablets daily',
      categoryId: mineralsCategory.id,
    },
  });

  await prisma.product.create({
    data: {
      name: 'Zinc Picolinate 50mg',
      description: 'Essential mineral for immune support and skin health.',
      price: 11.99,
      stock: 150,
      supplementType: 'Mineral',
      ingredients: 'Zinc picolinate, rice flour, gelatin',
      dosage: '1 capsule daily',
      categoryId: mineralsCategory.id,
    },
  });

  await prisma.product.create({
    data: {
      name: 'Iron Bisglycinate 25mg',
      description: 'Gentle, non-constipating iron for energy and blood health.',
      price: 14.99,
      stock: 100,
      supplementType: 'Mineral',
      ingredients: 'Iron bisglycinate, vitamin C, folic acid, vitamin B12',
      dosage: '1 tablet daily',
      categoryId: mineralsCategory.id,
    },
  });

  // Create products for the Supplements category
  await prisma.product.create({
    data: {
      name: 'Omega-3 Fish Oil 1000mg',
      description: 'Supports heart health, brain function, and joint mobility.',
      price: 29.99,
      stock: 90,
      supplementType: 'Fish Oil',
      ingredients: 'Fish oil concentrate, EPA, DHA, softgel capsule',
      dosage: '2 capsules daily',
      categoryId: supplementsCategory.id,
    },
  });

  await prisma.product.create({
    data: {
      name: 'Probiotic 10 Billion CFU',
      description: 'Supports gut health, digestion, and immune function.',
      price: 25.99,
      stock: 80,
      supplementType: 'Probiotic',
      ingredients: 'Lactobacillus and Bifidobacterium strains, inulin',
      dosage: '1 capsule daily',
      categoryId: supplementsCategory.id,
    },
  });

  await prisma.product.create({
    data: {
      name: 'Turmeric and Ginger Complex',
      description: 'Natural anti-inflammatory and antioxidant support.',
      price: 19.99,
      stock: 110,
      supplementType: 'Herbal',
      ingredients:
        'Turmeric root extract, ginger root extract, black pepper extract',
      dosage: '2 capsules daily',
      categoryId: supplementsCategory.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
