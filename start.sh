#!/bin/bash

# Milky Express - Development Startup Script

echo "🍪 Starting Milky Express..."
echo ""

# Check Node version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 20 ]; then
    echo "⚠️  WARNING: Node.js version 20+ is required"
    echo "   Current version: $(node -v)"
    echo ""
    echo "To upgrade Node.js:"
    echo "  1. Install nvm: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash"
    echo "  2. Install Node 20: nvm install 20"
    echo "  3. Use Node 20: nvm use 20"
    echo ""
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Kill any processes on ports 5000 and 5173
echo "🧹 Cleaning up ports..."
lsof -ti:5000 | xargs kill -9 2>/dev/null || true
lsof -ti:5173 | xargs kill -9 2>/dev/null || true

echo ""
echo "📦 Installing dependencies (if needed)..."
npm install

echo ""
echo "🚀 Starting servers..."
echo "   Frontend: http://localhost:5173"
echo "   Backend:  http://localhost:5000"
echo ""

# Start both servers
npm run dev
