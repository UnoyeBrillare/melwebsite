function App() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/logo.jpg" alt="Milky Express" className="h-16 w-16" />
              <div>
                <h1 className="text-2xl font-display font-bold gradient-text">Milky Express</h1>
                <p className="text-xs text-gray-500">Nourishing Mamas, Naturally</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#products" className="text-gray-700 hover:text-primary transition-colors">Products</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
              <button className="btn-primary">Shop Now</button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container-custom py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeIn">
            <div className="inline-block">
              <span className="badge text-sm">✨ New Arrivals</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold">
              Delicious
              <span className="block gradient-text">Lactation Support</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Nourishing lactation bites & cookies crafted with love to support your breastfeeding journey.
              Gluten-free, organic, and absolutely delicious!
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary text-lg px-8 py-4">
                Browse Products →
              </button>
              <button className="btn-outline text-lg px-8 py-4">
                Learn More
              </button>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <span className="text-3xl">🌱</span>
                <div>
                  <p className="font-semibold text-gray-900">100% Natural</p>
                  <p className="text-sm text-gray-500">Organic Ingredients</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-3xl">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Certified</p>
                  <p className="text-sm text-gray-500">Gluten-Free & Non-GMO</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative animate-float">
              <img
                src="/logo.jpg"
                alt="Milky Express Logo"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
              Why Choose Milky Express?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're dedicated to supporting breastfeeding mamas with delicious, nutritious lactation treats
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center group">
              <div className="text-5xl mb-4">🍪</div>
              <h3 className="text-2xl font-display font-semibold mb-3 text-gray-900">Lactation Support</h3>
              <p className="text-gray-600">
                Packed with galactagogues like oats, flax, and brewer's yeast to naturally support milk production
              </p>
            </div>

            <div className="card text-center group">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-2xl font-display font-semibold mb-3 text-gray-900">Pure Ingredients</h3>
              <p className="text-gray-600">
                100% natural, organic ingredients. Gluten-free, Non-GMO, and made with love
              </p>
            </div>

            <div className="card text-center group">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-2xl font-display font-semibold mb-3 text-gray-900">Delicious Taste</h3>
              <p className="text-gray-600">
                Who says healthy can't be tasty? Our treats are so good, you'll forget they're good for you!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="container-custom py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600">
            Handcrafted with care, delivered with love
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Chocolate Bliss Bites',
              price: '$24.00',
              description: 'Rich chocolate lactation bites',
              badge: '🔥 Bestseller',
              image: '🍫'
            },
            {
              name: 'Morning Oat Bites',
              price: '$22.00',
              description: 'Energy-packed oat goodness',
              badge: '⭐ New',
              image: '🌾'
            },
            {
              name: 'Birthday Cake Cookies',
              price: '$24.00',
              description: 'Fun & delicious celebration',
              badge: '🎉 Popular',
              image: '🎂'
            },
          ].map((product, index) => (
            <div key={index} className="card group cursor-pointer">
              <div className="relative mb-4">
                <div className="w-full aspect-square bg-gradient-soft rounded-xl flex items-center justify-center text-8xl">
                  {product.image}
                </div>
                <span className="absolute top-2 right-2 badge">{product.badge}</span>
              </div>
              <h3 className="text-xl font-display font-semibold mb-2 text-gray-900">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">{product.price}</span>
                <button className="btn-primary text-sm">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary py-20 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Support Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of mamas who trust Milky Express for delicious lactation support
          </p>
          <button className="bg-white text-primary hover:bg-gray-50 font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Shop All Products →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.jpg" alt="Milky Express" className="h-12 w-12" />
                <span className="text-xl font-display font-bold text-white">Milky Express</span>
              </div>
              <p className="text-sm">
                Nourishing mamas with delicious lactation support, one bite at a time.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">All Products</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Lactation Bites</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Gift Sets</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Newsletter</h4>
              <p className="text-sm mb-3">Get exclusive offers & lactation tips</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none"
                />
                <button className="bg-primary hover:bg-primary-600 px-4 py-2 rounded-r-lg transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Milky Express. Made with ❤️ for breastfeeding mamas.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
