'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, User, ShoppingBag, Menu, X, ChevronRight } from 'lucide-react'

export function AnimatedFashionHomepageComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Shop', href: '#' },
    { name: 'Lookbook', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' },
  ]

  const fashionItems = [
    { name: 'Lsthgetur', image: '/placeholder.svg?height=400&width=300', color: 'bg-pink-100' },
    { name: 'Lookbook', image: '/placeholder.svg?height=400&width=300', color: 'bg-blue-100' },
    { name: 'Cnerckurts', image: '/placeholder.svg?height=400&width=300', color: 'bg-yellow-100' },
  ]

  const floatingAnimation = {
    y: ['-5%', '5%'],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 20 ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-pink-600 hover:text-pink-700 transition duration-300">6Canale</Link>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-700 hover:text-pink-600 transition duration-300 text-lg">{item.name}</Link>
            ))}
          </nav>
          <div className="flex items-center space-x-6">
            <span className="text-gray-700 hidden md:inline">Frolog Maint</span>
            <button className="p-2 hover:bg-pink-100 rounded-full transition duration-300">
              <Search className="w-6 h-6 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-pink-100 rounded-full transition duration-300">
              <User className="w-6 h-6 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-pink-100 rounded-full transition duration-300">
              <ShoppingBag className="w-6 h-6 text-gray-700" />
            </button>
            <button className="md:hidden p-2 hover:bg-pink-100 rounded-full transition duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <motion.div
        className="fixed inset-y-0 right-0 z-40 w-64 bg-white shadow-lg md:hidden"
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-6 space-y-4">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="block text-gray-700 hover:text-pink-600 transition duration-300 text-lg">{item.name}</Link>
          ))}
        </div>
      </motion.div>

      <main className="container mx-auto px-4 pt-32 pb-16">
        <section className="mb-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-6xl font-bold mb-8 text-gray-800 leading-tight">Theker mout destrem plat year feas.</h1>
              <p className="text-xl text-gray-600 mb-10">Discover the latest trends in fashion and express your unique style with our curated collection.</p>
              <button className="bg-pink-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition duration-300 transform hover:scale-105 shadow-lg">
                Shop now
              </button>
            </motion.div>
            <motion.div
              className="md:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Woman in yellow outfit"
                width={500}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
              <motion.div
                className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full z-[-1] opacity-75"
                animate={floatingAnimation}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-40 h-40 bg-pink-400 rounded-full z-[-1] opacity-75"
                animate={floatingAnimation}
              />
            </motion.div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {fashionItems.map((item, index) => (
              <motion.div
                key={item.name}
                className={`${item.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={item.image}
                  alt={`Fashion item ${index + 1}`}
                  width={300}
                  height={400}
                  className="w-full h-80 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{item.name}</h3>
                <Link href="#" className="inline-flex items-center text-pink-600 hover:text-pink-700 transition duration-300">
                  Explore collection <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="bg-white rounded-3xl shadow-xl p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Your images sharth</h2>
              <p className="text-xl text-gray-600 mb-8">Peslay tiee afigeds. Discover how our personalized styling service can transform your wardrobe.</p>
              <button className="bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-900 transition duration-300 transform hover:scale-105 shadow-lg">
                Learn More
              </button>
            </div>
            <div className="md:w-1/2 bg-gray-100 rounded-2xl p-8 shadow-inner">
              <h3 className="text-2xl font-bold mb-6 text-gray-700">SKESP Features</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600 text-lg">
                  <svg className="w-6 h-6 mr-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Nshly didat locics
                </li>
                <li className="flex items-center text-gray-600 text-lg">
                  <svg className="w-6 h-6 mr-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Parn ets sholy docke
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">About Us</h3>
            <p className="text-gray-400 leading-relaxed">6Canale is your ultimate destination for the latest fashion trends and styles. We curate the best collections to help you express your unique personality.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white transition duration-300">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition duration-300">FAQs</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition duration-300">Shipping & Returns</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition duration-300">Size Guide</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}><Link href={item.href} className="text-gray-400 hover:text-white transition duration-300">{item.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-6">Subscribe to our newsletter for the latest updates, exclusive offers, and fashion tips.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input type="email" placeholder="Your email" className="bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 flex-grow" />
              <button type="submit" className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition duration-300 font-semibold">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  )
}