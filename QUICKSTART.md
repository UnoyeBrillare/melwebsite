# Milky Express - Quick Start Guide 🍪

## Prerequisites

**IMPORTANT**: You need Node.js version 20+ to run this application.

### Check Your Node Version
```bash
node -v
```

If you see `v18.x.x` or lower, you need to upgrade:

### Upgrade Node.js (MacOS/Linux)

1. **Install nvm (Node Version Manager)**
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```

2. **Restart your terminal**, then:
   ```bash
   nvm install 20
   nvm use 20
   node -v  # Should show v20.x.x
   ```

---

## Quick Start

### Option 1: Use the Startup Script (Easiest)
```bash
./start.sh
```

### Option 2: Manual Start
```bash
# Install dependencies
npm install

# Start both frontend and backend
npm run dev
```

---

## Access the Application

Once running, open your browser:

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **API Health**: http://localhost:5000/health

---

## Default Admin Account

- **Email**: admin@milkyexpress.com
- **Password**: admin123

---

## Project Features

✅ **Complete E-Commerce Platform**
- Product catalog with filtering & search
- Shopping cart (guest & authenticated)
- Checkout & order management
- Admin panel

✅ **Beautiful Brand Design**
- Soft pink & baby blue color scheme
- Responsive, mobile-first
- Animated components
- Professional UI/UX

✅ **Full REST API**
- Authentication (JWT)
- Products, Cart, Orders
- Admin endpoints
- SQLite database

---

## Available Scripts

```bash
# Development
npm run dev              # Run both frontend & backend
npm run dev:frontend     # Frontend only (port 5173)
npm run dev:backend      # Backend only (port 5000)

# Database
npm run db:migrate       # Run database migrations
npm run db:seed          # Seed with sample data
npm run db:studio        # Open Prisma Studio

# Build
npm run build            # Build for production
npm run lint             # Run linting
```

---

## Troubleshooting

### Port Already in Use
```bash
# Kill processes on ports 5000 and 5173
lsof -ti:5000 | xargs kill -9
lsof -ti:5173 | xargs kill -9
```

### Node Version Issues
Make sure you're using Node.js 20+:
```bash
nvm use 20
```

### Database Issues
Reset and reseed the database:
```bash
npm run db:reset
npm run db:seed
```

### Missing Dependencies
```bash
npm install
```

---

## What's Included

📦 **Sample Data**
- 3 lactation products
- Multiple variants per product
- Admin user account

🎨 **Brand Assets**
- Logo (SVG)
- Pink & blue color palette
- Custom fonts (Poppins & Quicksand)

🔐 **Security**
- JWT authentication
- Password hashing (bcrypt)
- CORS protection
- Rate limiting

---

## Next Steps

1. **Customize Products**: Add your real products via the admin panel
2. **Add Images**: Upload actual product photos
3. **Configure Payment**: Integrate Stripe or PayPal
4. **Deploy**: Follow the deployment guide in README.md

---

## Need Help?

- Check [README.md](README.md) for detailed documentation
- View API documentation at http://localhost:5000/api/v1
- Explore the code in `apps/frontend` and `apps/backend`

---

**Built with ❤️ for breastfeeding mamas**
