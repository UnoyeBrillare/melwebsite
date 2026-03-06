import { useState } from "react";
import { FaMapMarkerAlt, FaUserMd, FaTimes } from "react-icons/fa";

import {
  FaPhone,
  FaLeaf,
  FaCookieBite,
  FaStar,
  FaHeart,
  FaCheck,
  FaMedal,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";

const products = [
  {
    name: "Lactation Cookies",
    badge: "🔥 Best Seller",
    image: "/images/milky-blast-cookies-1.webp",
    description:
      "Our best-selling lactation cookies are expert-formulated in-house by an award-winning IBCLC, made with quality-sourced oats and brewer's yeast to support milk production and breastmilk enrichment in a delicious snack that fits seamlessly into real postpartum life.",
    benefits: [
      "Supports milk production with an easy, consistent daily snack",
      "Supports breastmilk enrichment through nourishing ingredients like oats + brewer's yeast",
      "Convenient and genuinely enjoyable—helps you stay nourished even on busy days",
    ],
  },
  {
    name: "Lactation Tea",
    badge: "🌿 Soothing",
    image: "/images/milky-delight-tea-1.webp",
    description:
      "A soothing lactation tea crafted in-house with IBCLC-led formulation, blended with moringa and fennel created to promote milk let-down and support milk production, while giving you a calm, comforting daily ritual.",
    benefits: [
      "Helps promote milk let-down for smoother, more relaxed feeding moments",
      "Supports milk production as part of your daily lactation routine",
      "Encourages hydration in a simple, enjoyable way",
      "Fenugreek-free blend with a soft, comforting taste profile",
    ],
  },
  {
    name: "Lactation Granola",
    badge: "⭐ Nourishing",
    image: "/images/milky-crunch-granola-1.webp",
    description:
      "A crunchy, nourishing lactation granola crafted in-house with oats and brewer's yeast, guided by IBCLC expertise—designed to support milk production and breastmilk enrichment as a quick breakfast, topping, or on-the-go snack.",
    benefits: [
      "Supports milk production with an easy everyday food you'll actually stick with",
      "Supports breastmilk enrichment through nourishing ingredients like oats + brewer's yeast",
      "Helps keep you satisfied—ideal for postpartum hunger and full schedules",
    ],
  },
  {
    name: "Lactation Pap",
    badge: "💛 Comforting",
    image: "/images/pap.webp",
    description:
      "A warm, comforting lactation pap created with IBCLC-led design and blended with moringa and ginger made to promote milk let-down and support milk production when you want something gentle, filling, and restorative.",
    benefits: [
      "Helps promote milk let-down and supports a smoother feeding flow",
      "Supports milk production while you nourish your postpartum body",
      "Comforting, warm nourishment—especially during early postpartum weeks",
    ],
  },
];

const testimonialImages = [
  {
    src: "/images/milky-mamas-testimonial-1.webp",
    alt: "Milky Mama testimonial",
  },
  {
    src: "/images/milky-mamas-testimonial-2.webp",
    alt: "Milky Mama testimonial",
  },
  {
    src: "/images/milky-mamas-testimonial-3.webp",
    alt: "Milky Mama testimonial",
  },
  {
    src: "/images/milky-mamas-testimonial-4.webp",
    alt: "Milky Mama testimonial",
  },
  {
    src: "/images/milky-moms-testimonial-1.webp",
    alt: "Milky Mom testimonial",
  },
  {
    src: "/images/milky-moms-testimonial-2.webp",
    alt: "Milky Mom testimonial",
  },
  {
    src: "/images/milky-moms-testimonial-3.webp",
    alt: "Milky Mom testimonial",
  },
];

function HomePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.hash.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="container-custom py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeIn">
            <div className="inline-block">
              <span className="badge text-sm">✨ 10+ Years of Trust</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold">
              For the mom
              <br />
              <span className="gradient-text">you are becoming</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From pregnancy to postpartum, we make it easier to feel supported,
              nourished, and ready to feed your baby—using naturally made,
              in-house products created by an IBCLC who understands the reality
              of breastfeeding.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#products" onClick={handleScroll}>
                <button className="btn-primary text-lg px-8 py-4">
                  Browse Products →
                </button>
              </a>
              <a href="#contact" onClick={handleScroll}>
                <button className="btn-outline text-lg px-8 py-4">
                  Contact Us
                </button>
              </a>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <FaLeaf className="text-3xl text-green-500" />
                <div>
                  <p className="font-semibold text-gray-900">Naturally Made</p>
                  <p className="text-sm text-gray-500">No harsh synthetics</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FaMedal className="text-3xl text-primary" />
                <div>
                  <p className="font-semibold text-gray-900">IBCLC-Led</p>
                  <p className="text-sm text-gray-500">Expert formulated</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative animate-float">
              <img
                src="/logo.webp"
                alt="Milky Express Logo"
                className="w-full drop-shadow-2xl"
              />
              {/* <img
                src="/logo.jpg"
                alt="Milky Express Logo"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              /> */}
              {/* <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Why Mums Choose Us */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
              Why Mums Choose Milky Express
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Support that feels like comfort and works like expert care
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                icon: <FaUserMd className="text-4xl text-primary" />,
                title: "Expert-Led",
                desc: "Crafted with IBCLC knowledge at the center",
              },
              {
                icon: <FaLeaf className="text-4xl text-green-500" />,
                title: "Naturally Made",
                desc: "No harsh synthetic or chemical materials",
              },
              {
                icon: <FaCookieBite className="text-4xl text-amber-600" />,
                title: "Delicious + Practical",
                desc: "Support that fits into real life",
              },
              {
                icon: <FaStar className="text-4xl text-yellow-400" />,
                title: "Trusted",
                desc: "10+ years in maternal & infant space, 5,000+ products sold",
              },
              {
                icon: <FaHeart className="text-4xl text-red-400" />,
                title: "Care-First Brand",
                desc: "Excellence, compassion, and love in everything we do",
              },
            ].map((item, index) => (
              <div key={index} className="card text-center group">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-display font-semibold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="container-custom py-20 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From our best-selling lactation cookies to nourishing teas, granola,
            and pap—every product is crafted with intention, guided by clinical
            lactation knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="card group cursor-default overflow-hidden"
            >
              <div className="relative mb-6">
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="absolute top-3 right-3 badge">
                  {product.badge}
                </span>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-3 text-gray-900">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {product.description}
              </p>
              <div>
                <p className="font-semibold text-gray-800 mb-2">
                  Why mums love it:
                </p>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start space-x-2 text-gray-600"
                    >
                      <FaCheck className="text-primary mt-1 flex-shrink-0 text-xs" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white py-20 scroll-mt-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
              What Mums Are Saying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over a decade, mums have chosen Milky Express for products
              that feel comforting, taste amazing, and are built with IBCLC
              expertise to improve the quality and quantity of breastmilk.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {testimonialImages.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setLightboxIndex(index)}
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section
        id="contact"
        className="bg-gradient-primary py-20 text-white scroll-mt-24"
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              We're here to make you feel understood—never judged—and supported
              with products you'll be proud to use and share.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 place-items-center max-w-5xl mx-auto">
            {/* Phone */}
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <FaPhone className="text-3xl" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                Call Us
              </h3>
              <p className="opacity-90 text-sm">
                <a
                  href="tel:+2349091186801"
                  className="hover:underline block text-white"
                >
                  +234 909 118 6801
                </a>
                <a
                  href="tel:+14168354919"
                  className="hover:underline block text-white mt-1"
                >
                  +1 416 835 4919
                </a>
              </p>
            </div>

            {/* Social */}
            {/* <div className="text-center">
              <div className="flex justify-center mb-3 space-x-3">
                <FaInstagram className="text-2xl" />
                <FaTiktok className="text-2xl" />
                <FaWhatsapp className="text-2xl" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                Social
              </h3>
              <p className="opacity-90 text-sm space-y-1">
                <a
                  href="https://www.instagram.com/milky_express"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline block text-white"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@milkyexpress_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline block text-white"
                >
                  TikTok
                </a>
                <a
                  href="https://wa.me/message/LQQ77OT5B2SPA1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline block text-white"
                >
                  WhatsApp
                </a>
              </p>
            </div> */}

            {/* Canada Office */}
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <FaMapMarkerAlt className="text-3xl" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                Canada
              </h3>
              <p className="opacity-90 text-sm">
                84 Gardenpost Terr,
                <br />
                Ottawa, Canada
              </p>
            </div>

            {/* Nigeria Office */}
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <FaMapMarkerAlt className="text-3xl" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                Nigeria
              </h3>
              <p className="opacity-90 text-sm">
                1, Nichole Balogun Street,
                <br />
                Lekki Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 overflow-y-auto"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            className="fixed top-6 right-6 text-white text-3xl hover:text-primary transition-colors z-20"
            onClick={() => setLightboxIndex(null)}
          >
            <FaTimes />
          </button>

          {/* Previous button */}
          <button
            className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-primary transition-colors z-20 p-2"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                lightboxIndex === 0
                  ? testimonialImages.length - 1
                  : lightboxIndex - 1,
              );
            }}
          >
            <FaChevronLeft />
          </button>

          {/* Image */}
          <div
            className="flex justify-center py-10 px-16 min-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={testimonialImages[lightboxIndex].src}
              alt={testimonialImages[lightboxIndex].alt}
              className="max-w-2xl w-full h-auto object-contain rounded-lg"
            />
          </div>

          {/* Next button */}
          <button
            className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-primary transition-colors z-20 p-2"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                lightboxIndex === testimonialImages.length - 1
                  ? 0
                  : lightboxIndex + 1,
              );
            }}
          >
            <FaChevronRight />
          </button>

          {/* Counter */}
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 text-white text-sm opacity-75 z-20">
            {lightboxIndex + 1} / {testimonialImages.length}
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
