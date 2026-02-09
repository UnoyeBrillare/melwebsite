# Milky Express 🍪

A modern, full-stack e-commerce platform for lactation products built with React, TypeScript, and Node.js.

## Features

- **Product Catalog** - Browse lactation products with filtering, sorting, and pagination
- **Product Details** - Image gallery with zoom, variant selection, and add to cart
- **Shopping Cart** - Guest and authenticated cart support
- **Checkout** - Multi-step checkout process with order management
- **Authentication** - JWT-based user authentication and authorization
- **Admin Panel** - Product and order management
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Type Safety** - Full TypeScript support across frontend and backend

## Tech Stack

### Frontend
- **React 19** with TypeScript
- **Vite** - Lightning-fast development server
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **React Query** - Server state management
- **React Router** - Client-side routing
- **PhotoSwipe** - Image lightbox
- **Swiper** - Touch slider

### Backend
- **Node.js** with Express
- **TypeScript** - Type-safe server code
- **Prisma** - Type-safe database ORM
- **SQLite** - Development database (easily swappable for PostgreSQL)
- **JWT** - Secure authentication
- **Bcrypt** - Password hashing

## Project Structure

```
milky-express/
├── apps/
│   ├── frontend/              # React + Vite application
│   │   ├── src/
│   │   │   ├── api/           # API client
│   │   │   ├── components/    # React components
│   │   │   ├── pages/         # Page components
│   │   │   ├── hooks/         # Custom hooks
│   │   │   ├── store/         # Zustand stores
│   │   │   ├── types/         # TypeScript types
│   │   │   └── styles/        # Global styles
│   │   └── package.json
│   │
│   └── backend/               # Express API
│       ├── src/
│       │   ├── controllers/   # Route controllers
│       │   ├── middleware/    # Express middleware
│       │   ├── routes/        # API routes
│       │   ├── services/      # Business logic
│       │   ├── config/        # Configuration
│       │   └── utils/         # Utilities
│       ├── prisma/
│       │   ├── schema.prisma  # Database schema
│       │   └── seed.ts        # Sample data
│       └── package.json
│
├── packages/
│   └── shared-types/          # Shared TypeScript types
│
├── turbo.json                 # Turborepo config
└── package.json               # Root package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ (v18.18+ recommended)
- npm 8+

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd milky-express
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**

   Frontend (apps/frontend/.env):
   ```env
   VITE_API_BASE_URL=http://localhost:5000/api/v1
   VITE_CLOUDINARY_CLOUD_NAME=demo
   ```

   Backend (apps/backend/.env):
   ```env
   NODE_ENV=development
   PORT=5000
   DATABASE_URL="file:./dev.db"
   JWT_SECRET=your_secret_key_here
   JWT_EXPIRES_IN=7d
   FRONTEND_URL=http://localhost:5173
   ```

4. **Generate Prisma Client**
   ```bash
   ./node_modules/.bin/prisma generate --schema=apps/backend/prisma/schema.prisma
   ```

5. **Run database migrations**
   ```bash
   cd apps/backend
   ../../node_modules/.bin/prisma migrate dev --schema=./prisma/schema.prisma
   ```

6. **Seed the database**
   ```bash
   cd apps/backend
   ../../node_modules/.bin/tsx prisma/seed.ts
   ```

### Development

Run both frontend and backend concurrently:

```bash
npm run dev
```

Or run them separately:

```bash
# Terminal 1: Frontend (http://localhost:5173)
npm run dev:frontend

# Terminal 2: Backend (http://localhost:5000)
npm run dev:backend
```

### Default Admin Credentials

- **Email**: admin@milkyexpress.com
- **Password**: admin123

## API Endpoints

Base URL: `http://localhost:5000/api/v1`

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user
- `POST /auth/logout` - Logout user
- `GET /auth/me` - Get current user (requires auth)

### Products
- `GET /products` - Get all products (supports filtering, sorting, pagination)
- `GET /products/:slug` - Get single product by slug
- `POST /products` - Create product (admin only)
- `PUT /products/:id` - Update product (admin only)
- `DELETE /products/:id` - Delete product (admin only)

### Cart
- `GET /cart` - Get cart items
- `POST /cart/items` - Add item to cart
- `PUT /cart/items/:id` - Update cart item
- `DELETE /cart/items/:id` - Remove cart item
- `DELETE /cart` - Clear cart

### Orders
- `POST /orders` - Create order (checkout)
- `GET /orders` - Get user orders (requires auth)
- `GET /orders/:orderNumber` - Get order by number
- `PUT /orders/:id/status` - Update order status (admin only)

## Database Schema

The application uses the following main models:

- **User** - Customer accounts and admin users
- **Product** - Product information with certifications
- **ProductImage** - Multiple images per product
- **ProductVariant** - Product flavors/variations with pricing and inventory
- **CartItem** - Shopping cart items (supports guest carts)
- **Order** - Customer orders with shipping info
- **OrderItem** - Line items in orders

## Design System

### Colors
- **Primary**: #cb8981 (Warm terracotta)
- **Gold**: #d4af37 (Accent color)
- **Background**: White
- **Text**: Gray-900

### Typography
- **Font Family**: Jost (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## Scripts

### Root Scripts
- `npm run dev` - Run both frontend and backend
- `npm run dev:frontend` - Run frontend only
- `npm run dev:backend` - Run backend only
- `npm run build` - Build all apps
- `npm run lint` - Lint all apps
- `npm run db:migrate` - Run Prisma migrations
- `npm run db:seed` - Seed the database
- `npm run db:studio` - Open Prisma Studio

## Deployment

### Frontend (Vercel)
1. Connect repository to Vercel
2. Set root directory to `apps/frontend`
3. Add environment variables
4. Deploy

### Backend (Railway/Render)
1. Connect repository
2. Set root directory to `apps/backend`
3. Add environment variables
4. Set build command: `npm install && npx prisma generate`
5. Set start command: `npm start`

### Database
For production, update `DATABASE_URL` to use PostgreSQL:
```env
DATABASE_URL="postgresql://user:password@host:5432/database"
```

Then update `prisma/schema.prisma` datasource provider to `postgresql`.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email support@milkyexpress.com or open an issue in the repository.

---

Built with ❤️ using React, TypeScript, and Node.js
