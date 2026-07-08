import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import {
  Menu,
  X,
  Sparkles,
  Star,
  Check,
  ArrowRight,
  Heart,
  Zap,
  Shield,
  Users,
  Clock,
  Award,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Share2,
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const services = [
    {
      icon: Sparkles,
      title: 'Teeth Whitening',
      description: 'Professional teeth whitening for a brighter, more confident smile',
    },
    {
      icon: Shield,
      title: 'Preventive Care',
      description: 'Expert cleanings and checkups to maintain optimal oral health',
    },
    {
      icon: Heart,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with veneers, bonding, and aligners',
    },
    {
      icon: Zap,
      title: 'Emergency Services',
      description: '24/7 emergency care for urgent dental issues',
    },
    {
      icon: Award,
      title: 'Implants & Restorations',
      description: 'Advanced solutions for missing or damaged teeth',
    },
    {
      icon: Users,
      title: 'Family Dentistry',
      description: 'Comprehensive dental care for the entire family',
    },
  ];

  const benefits = [
    {
      title: 'State-of-the-Art Technology',
      description: 'We use the latest dental technology including digital imaging and laser treatments',
    },
    {
      title: 'Expert Practitioners',
      description: 'Our dentists are highly qualified with years of experience in advanced procedures',
    },
    {
      title: 'Patient Comfort First',
      description: 'Relaxing environment with sedation options for anxious patients',
    },
    {
      title: 'Comprehensive Services',
      description: 'From routine cleanings to complex restorations, all under one roof',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Patient',
      content: 'Best dental experience I\'ve ever had. The staff is incredibly professional and caring.',
      rating: 5,
      initials: 'SJ',
    },
    {
      name: 'Michael Chen',
      role: 'Patient',
      content: 'The whitening treatment completely transformed my smile. Highly recommended!',
      rating: 5,
      initials: 'MC',
    },
    {
      name: 'Emily Williams',
      role: 'Patient',
      content: 'Professional, friendly, and thorough. I\'ve been coming here for 3 years now.',
      rating: 5,
      initials: 'EW',
    },
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '49',
      description: 'Perfect for preventive care',
      features: [
        'Professional cleaning',
        'Digital X-rays',
        'Oral health assessment',
        'Fluoride treatment',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '99',
      description: 'Most popular for comprehensive care',
      features: [
        'Everything in Essential',
        'Cosmetic consultations',
        'Whitening treatment',
        'Priority scheduling',
        'Annual teeth cleanings (2x)',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: '199',
      description: 'For advanced procedures',
      features: [
        'Everything in Professional',
        'Implant consultations',
        'Advanced restorations',
        'VIP concierge service',
        'Unlimited emergency visits',
      ],
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'How often should I visit the dentist?',
      answer: 'We recommend visiting every 6 months for routine cleanings and checkups to maintain optimal oral health.',
    },
    {
      question: 'Do you offer emergency appointments?',
      answer: 'Yes, we offer 24/7 emergency dental services for urgent issues like severe pain or trauma.',
    },
    {
      question: 'What payment options do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and offer flexible payment plans for larger procedures.',
    },
    {
      question: 'Is teeth whitening safe?',
      answer: 'Professional teeth whitening is safe when performed by qualified dentists. We use approved whitening systems.',
    },
    {
      question: 'How long do dental implants last?',
      answer: 'With proper care, dental implants can last 20+ years. They\'re a long-term investment in your smile.',
    },
    {
      question: 'Do you treat dental anxiety?',
      answer: 'Yes, we offer sedation options and maintain a calm, supportive environment for anxious patients.',
    },
  ];

  // Smooth easing functions for premium feel
  const gentleEasing: any = [0.4, 0, 0.2, 1];
  const smoothEase: any = [0.25, 0.1, 0.25, 1];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
        when: 'beforeChildren',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.9, 
        ease: gentleEasing 
      },
    },
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-gray-900/5'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent hidden sm:inline">
                DentalCare
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 rounded-lg transition-colors hover:bg-gray-100 hover:text-gray-900"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="hidden sm:flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-blue-400/50 transition-all"
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              <span>Book Now</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: mobileMenuOpen ? 1 : 0,
              height: mobileMenuOpen ? 'auto' : 0,
            }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold text-center"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen pt-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background - Slower and more subtle */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full opacity-20 blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              x: [0, 30, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-300 rounded-full opacity-20 blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              x: [0, -30, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
        </div>

        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 1.2, 
                ease: smoothEase,
                staggerChildren: 0.15,
                delayChildren: 0.3
              }}
            >
              <motion.div
                className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: gentleEasing }}
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">
                  Excellence in Dental Care
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: gentleEasing }}
              >
                <span className="block text-gray-900">Your Perfect Smile</span>
                <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Starts Here
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: gentleEasing }}
              >
                Experience world-class dental care with cutting-edge technology, expert practitioners, and a commitment to your comfort and smile transformation.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: gentleEasing }}
              >
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-400/50 transition-all group"
                  whileHover={{ scale: 1.05, translateY: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Book Your Appointment</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.button
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Learn More</span>
                  <ChevronDown className="w-5 h-5 ml-2" />
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  { value: '500+', label: 'Happy Patients' },
                  { value: '20+', label: 'Years Experience' },
                  { value: '98%', label: 'Satisfaction' },
                ].map((stat, i) => (
                  <motion.div key={i} variants={itemVariants}>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              className="relative h-96 lg:h-full min-h-96 hidden lg:flex items-center justify-center"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="relative w-full max-w-md">
                {/* Gradient Blob */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-3xl blur-2xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                />

                {/* Card */}
                <motion.div
                  className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20"
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Premium Care</p>
                        <p className="text-sm text-gray-600">5-star rated</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {['Professional Cleaning', 'Digital X-rays', 'Smile Consultation'].map(
                        (item, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <Check className="w-5 h-5 text-cyan-500" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        )
                      )}
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600">Starting from</p>
                      <p className="text-3xl font-bold text-gray-900">£49</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-blue-600" />
        </motion.div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <p className="text-sm font-semibold text-blue-600 mb-2">TRUSTED BY</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Thousands of Satisfied Patients
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {[
              { icon: Star, label: '4.9 Rating' },
              { icon: Users, label: '500+ Patients' },
              { icon: Award, label: 'Award Winning' },
              { icon: Clock, label: '24/7 Available' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center space-y-3"
                variants={itemVariants}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <p className="font-semibold text-gray-900 text-center">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <p className="text-sm font-semibold text-blue-600 mb-3">OUR SERVICES</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Dental Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From routine care to advanced cosmetic procedures, we offer everything you need for optimal oral health.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {services.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div>
                <p className="text-sm font-semibold text-blue-600 mb-3">WHY CHOOSE US</p>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                  Why Patients Love Us
                </h2>
              </div>

              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                {benefits.map((benefit, i) => (
                  <motion.div key={i} className="space-y-2" variants={itemVariants}>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-5 h-5 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 mt-1">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              className="relative h-96 hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="relative w-full h-full">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-3xl backdrop-blur-xl border border-white/20"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <div className="relative p-8 h-full flex flex-col justify-center">
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, margin: '-100px' }}
                  >
                    {[
                      { label: 'Experience', value: '20+ Years' },
                      { label: 'Dentists', value: '12 Specialists' },
                      { label: 'Success Rate', value: '99.2%' },
                    ].map((item, i) => (
                      <div key={i} className="space-y-1">
                        <p className="text-sm text-gray-600">{item.label}</p>
                        <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <p className="text-sm font-semibold text-blue-600 mb-3">TESTIMONIALS</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              What Our Patients Say
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <p className="text-sm font-semibold text-blue-600 mb-3">PRICING</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Plans for Every Budget
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible pricing options to fit your needs and budget
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {pricingPlans.map((plan, i) => (
              <PricingCard key={i} plan={plan} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <p className="text-sm font-semibold text-blue-600 mb-3">FAQ</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-500 relative overflow-hidden"
      >
        {/* Animated Background - Slower ambient motion */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 80, 0],
              y: [0, 40, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-80 h-80 bg-white/50 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -60, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Book your consultation today and take the first step towards a brighter, healthier smile.
            </p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.a
              href="tel:+441234567890"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5 mr-2" />
              <span>Call Us Now</span>
            </motion.a>

            <motion.button
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 mr-2" />
              <span>Email Us</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">DentalCare</span>
              </div>
              <p className="text-gray-400">
                Premium dental care with world-class service and cutting-edge technology.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-white">Services</h3>
              <ul className="space-y-2">
                {services.slice(0, 3).map((service, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-white">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">
                    123 Dental Street
                    <br />
                    London, UK
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href="tel:+441234567890" className="text-gray-400 hover:text-white">
                    +44 123 456 7890
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href="mailto:hello@dentalcare.uk" className="text-gray-400 hover:text-white">
                    hello@dentalcare.uk
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              © 2024 DentalCare UK. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              {[Share2, Mail, Phone].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

// Service Card Component
function ServiceCard({ service, index }: { service: any; index: number }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const smoothEase: any = [0.4, 0, 0.2, 1];
  
  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 1, 
        delay: index * 0.12,
        ease: smoothEase 
      },
    },
  };

  return (
    <motion.div
      className="group relative h-full"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"
      />

      {/* Card */}
      <motion.div
        className="relative h-full bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500"
        whileHover={{
          scale: 1.03,
          y: -8,
          transition: { 
            duration: 0.5, 
            ease: smoothEase 
          }
        }}
      >
        <div className="space-y-6">
          {/* Icon */}
          <motion.div
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center"
            whileHover={{ rotate: 12, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <service.icon className="w-7 h-7 text-blue-600" />
          </motion.div>

          {/* Content */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </div>

          {/* Arrow */}
          <motion.div
            className="flex items-center space-x-2 text-blue-600 font-semibold pt-4 group-hover:translate-x-2 transition-transform"
            whileHover={{ x: 5 }}
          >
            <span>Learn More</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial, index }: { testimonial: any; index: number }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const smoothEase: any = [0.4, 0, 0.2, 1];
  
  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 1, 
        delay: index * 0.15,
        ease: smoothEase 
      },
    },
  };

  return (
    <motion.div
      className="group"
      custom={index}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.div
        className="h-full bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100/50 backdrop-blur-xl"
        whileHover={{
          scale: 1.02,
          y: -5,
          transition: { duration: 0.4, ease: smoothEase }
        }}
      >
        {/* Stars */}
        <div className="flex items-center space-x-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

        {/* Author */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
            {testimonial.initials}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Pricing Card Component
function PricingCard({ plan, index }: { plan: any; index: number }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const smoothEase: any = [0.4, 0, 0.2, 1];
  
  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 1, 
        delay: index * 0.12,
        ease: smoothEase 
      },
    },
  };

  return (
    <motion.div
      className={`group relative h-full ${plan.popular ? 'md:scale-105 md:z-10' : ''}`}
      custom={index}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <motion.div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ scale: 0, y: -20 }}
          whileInView={{ scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          viewport={{ once: true }}
        >
          <div className="px-4 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold rounded-full">
            Most Popular
          </div>
        </motion.div>
      )}

      {/* Card */}
      <motion.div
        className={`h-full rounded-2xl p-8 backdrop-blur-xl border transition-all duration-500 ${
          plan.popular
            ? 'bg-white/95 border-blue-300 shadow-2xl'
            : 'bg-white/50 border-white/50 hover:border-blue-200'
        }`}
        whileHover={{
          scale: 1.02,
          y: -5,
          transition: { duration: 0.4, ease: smoothEase }
        }}
      >
        <div className="space-y-8 h-full flex flex-col">
          {/* Header */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
            <p className="text-gray-600 text-sm">{plan.description}</p>
          </div>

          {/* Price */}
          <div className="space-y-1">
            <div className="flex items-baseline space-x-1">
              <span className="text-4xl font-bold text-gray-900">£{plan.price}</span>
              <span className="text-gray-600 text-sm">/month</span>
            </div>
          </div>

          {/* Features */}
          <motion.div
            className="space-y-4 flex-grow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {plan.features.map((feature: string, i: number) => (
              <motion.div
                key={i}
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                viewport={{ once: true }}
              >
                <Check className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            className={`w-full py-3 rounded-xl font-semibold transition-all ${
              plan.popular
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-400/50'
                : 'border-2 border-gray-300 text-gray-900 hover:bg-gray-50'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// FAQ Item Component
function FAQItem({ faq, index }: { faq: any; index: number }) {
  const [open, setOpen] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const smoothEase: any = [0.4, 0, 0.2, 1];

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: index * 0.08,
        ease: smoothEase 
      },
    },
  };

  return (
    <motion.div
      custom={index}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 bg-white/50 backdrop-blur-xl border border-white/50 rounded-xl text-left hover:bg-white/70 transition-all"
        whileHover={{ scale: 1.01 }}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 pr-8">{faq.question}</h3>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <ChevronDown className="w-5 h-5 text-blue-600" />
          </motion.div>
        </div>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: open ? 1 : 0,
          height: open ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 py-4 bg-blue-50/50 border border-t-0 border-white/50 rounded-b-xl border-l border-r border-b">
          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
