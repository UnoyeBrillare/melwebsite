import { Link } from "react-router-dom";
import {
  FaUserMd,
  FaLeaf,
  FaCookieBite,
  FaStar,
  FaHeart,
  FaCheck,
} from "react-icons/fa";

function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-primary py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            About Milky Express
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            A premium lactation and postpartum wellness brand created to support
            women through one of the most transformative seasons of life.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container-custom py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="badge text-sm">✨ Our Story</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Born from a{" "}
              <span className="gradient-text">mother's journey</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Milky Express was born from a very real place: a mother's
                struggle.
              </p>
              <p>
                In 2014, after the birth of her daughter, Titi Med faced
                unexpected breastfeeding difficulties. What she thought would be
                natural and effortless became a six-month journey of learning,
                persistence, and rebuilding confidence, one feed at a time. She
                learned first-hand that breastfeeding isn't just about love;
                it's also about support, nourishment, guidance, and the right
                tools.
              </p>
              <p>
                That experience became the spark behind Milky Express: a brand
                designed to help mums feel held—emotionally and
                practically—through pregnancy and postpartum.
              </p>
              <p>
                Today, Milky Express has supported families for over 10 years,
                with 5,000+ products sold, and a growing community of women who
                want quality, results, simplicity, and care that feels personal.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative">
              <img
                src="/images/titi-med.webp"
                alt="Titi Med — Founder of Milky Express"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
              />
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-secondary/20 rounded-full blur-3xl"></div>
            </div>
            <div className="mt-4 text-center">
              <p className="font-display font-semibold text-gray-900">
                Titi Med
              </p>
              <p className="text-sm text-gray-500">
                Founder & Award-Winning IBCLC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / Philosophy */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-display font-medium text-gray-800 italic leading-relaxed">
              "Every product is crafted with intention in-house, guided by
              clinical lactation knowledge, using naturally made ingredients—and
              designed to feel like a warm hug in the middle of a demanding
              season."
            </p>
            <footer className="mt-6">
              <p className="text-gray-500">
                Because motherhood is soft, powerful, and sacred—and you deserve
                support that matches that.
              </p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* About the Brand */}
      <section className="container-custom py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <span className="badge text-sm">🌸 Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Crafted with{" "}
              <span className="gradient-text">clinical expertise</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We believe support should feel like comfort and work like expert
                care. That's why our products are crafted in-house by Titi
                Med—an award-winning IBCLC (International Board Certified
                Lactation Consultant)—with the clinical insight to understand
                human lactation and the compassion of a mother who has lived it.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="badge text-sm">🍪 What We Make</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Products that{" "}
              <span className="gradient-text">nourish & support</span>
            </h2>
            <div className="text-gray-600 leading-relaxed">
              <p className="mb-4">
                From our best-selling lactation cookies to nourishing teas,
                granola, lactation pap, and breastfeeding essentials like nipple
                cream and breastmilk storage bags, every Milky Express product
                is designed to help you:
              </p>
              <ul className="space-y-3">
                {[
                  "Feel more confident in your feeding journey",
                  "Nourish your postpartum body gently",
                  "Keep things simple, effective, and enjoyable",
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <FaCheck className="text-primary mt-1 flex-shrink-0 text-sm" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mums Trust Us */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
              Why Mums Choose Us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <FaUserMd className="text-3xl text-primary" />,
                title: "Expert-Led",
                desc: "Crafted with IBCLC knowledge at the center",
              },
              {
                icon: <FaLeaf className="text-3xl text-green-500" />,
                title: "Naturally Made",
                desc: "No harsh synthetic or chemical materials",
              },
              {
                icon: <FaCookieBite className="text-3xl text-amber-600" />,
                title: "Delicious + Practical",
                desc: "Support that fits into real life",
              },
              {
                icon: <FaStar className="text-3xl text-yellow-400" />,
                title: "Trusted",
                desc: "10+ years in maternal & infant space, 5,000+ products sold",
              },
              {
                icon: <FaHeart className="text-3xl text-red-400" />,
                title: "Care-First",
                desc: "Excellence, compassion, and love in everything we do",
              },
            ].map((item, index) => (
              <div key={index} className="card text-center group">
                <div className="flex justify-center mb-3">{item.icon}</div>
                <h3 className="text-lg font-display font-semibold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Promise */}
      <section className="container-custom py-20">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div>
            <span className="badge text-sm mb-4 inline-block">
              🎯 Our Mission
            </span>
            <p className="text-2xl md:text-3xl font-display font-semibold text-gray-800 leading-relaxed">
              To support modern mothers with clinically informed lactation
              essentials made with excellence, compassion, and love.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-10">
            <span className="badge text-sm mb-4 inline-block">
              🤝 Our Promise
            </span>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're here to make you feel understood—never judged—and supported
              with products you'll be proud to use and share.
            </p>
          </div>

          <div className="pt-6">
            <Link to="/#products">
              <button className="btn-primary text-lg px-10 py-4">
                Explore Our Products →
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
