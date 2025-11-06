"use client";
import React, { useState } from "react";
import { ArrowRight, Globe, Layers, Code, Smartphone, Cpu, Star, CheckCircle, Award, Users, Zap, Shield, Clock, TrendingUp, Package, ShoppingCart, Gamepad2, Building2, Utensils, Plane, Heart, Menu, X, Sparkles, Rocket, Target, Briefcase, Server, Database, Cloud, Lock, BarChart3, FileCode, Palette, Search } from "lucide-react";
import Head from "next/head";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const services = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Web Development",
      desc: "Build responsive, fast-loading websites optimized for search engines and user experience",
      features: ["Next.js", "React.js", "SEO Optimization", "Performance"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: "Blockchain Solutions",
      desc: "Secure smart contracts, DeFi platforms, NFT marketplaces, and decentralized applications",
      features: ["Smart Contracts", "DeFi", "NFT", "Web3"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: "Custom Software",
      desc: "Enterprise ERP, HRMS, LMS, and CRM systems designed for business efficiency",
      features: ["ERP Systems", "HRMS", "LMS", "CRM"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile App Development",
      desc: "Native and cross-platform iOS and Android apps with seamless user experiences",
      features: ["React Native", "Flutter", "iOS", "Android"],
      color: "from-blue-600 to-cyan-500"
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "AI & Machine Learning",
      desc: "Intelligent automation, predictive analytics, and AI-powered business solutions",
      features: ["AI Integration", "ML Models", "Automation", "Analytics"],
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: <Gamepad2 className="w-10 h-10" />,
      title: "Gaming Development",
      desc: "Engaging casino games, fantasy sports platforms, and multiplayer gaming solutions",
      features: ["Casino Games", "Fantasy Sports", "Ludo", "Multiplayer"],
      color: "from-pink-500 to-rose-600"
    },
  ];

  const projects = [
    // React/React Native Projects
    { 
      name: "Boatflex", 
      link: "https://apps.apple.com/dk/app/boatflex/id1563762907", 
      type: "react", 
      category: "Travel & Tourism", 
      icon: <Plane className="w-6 h-6" />,
      desc: "Boat rental and management platform",
      tech: ["React Native", "iOS", "Booking System"]
    },
    { 
      name: "Boatflex Android", 
      link: "https://play.google.com/store/apps/details?id=com.boatflexaps", 
      type: "react", 
      category: "Travel & Tourism", 
      icon: <Plane className="w-6 h-6" />,
      desc: "Android boat booking application",
      tech: ["React Native", "Android", "Real-time"]
    },
    { 
      name: "Zevio", 
      link: "https://play.google.com/store/apps/details?id=com.zevio", 
      type: "react", 
      category: "E-Commerce", 
      icon: <ShoppingCart className="w-6 h-6" />,
      desc: "Multi-vendor e-commerce mobile app",
      tech: ["React Native", "E-commerce", "Payment Gateway"]
    },
    { 
      name: "Tjenerteamet", 
      link: "https://www.tjenerteamet.dk", 
      type: "react", 
      category: "Web Application", 
      icon: <Globe className="w-6 h-6" />,
      desc: "Service management platform",
      tech: ["React.js", "Web App", "Dashboard"]
    },
    { 
      name: "Actee Gaming", 
      link: "https://actee.com", 
      type: "react", 
      category: "Gaming", 
      icon: <Gamepad2 className="w-6 h-6" />,
      desc: "Online gaming and entertainment platform",
      tech: ["React", "Gaming", "Multiplayer"]
    },
    
    // Angular Projects
    { 
      name: "Evolution360", 
      link: "http://evolution360.com", 
      type: "angular", 
      category: "ERP & Reporting", 
      icon: <BarChart3 className="w-6 h-6" />,
      desc: "360-degree business analytics platform",
      tech: ["Angular", "ERP", "Analytics"]
    },
    
    // Umbraco Websites
    { 
      name: "Sproglar", 
      link: "http://sproglar.dk", 
      type: "umbraco", 
      category: "Web Application", 
      icon: <Globe className="w-6 h-6" />,
      desc: "Language learning platform",
      tech: ["Umbraco CMS", "SEO", "Responsive"]
    },
    { 
      name: "Boatflex Web", 
      link: "http://boatflex.com", 
      type: "umbraco", 
      category: "Travel & Tourism", 
      icon: <Plane className="w-6 h-6" />,
      desc: "Boat rental web platform",
      tech: ["Umbraco", "Booking", "CMS"]
    },
    { 
      name: "Robotowork", 
      link: "http://robotowork.com", 
      type: "umbraco", 
      category: "Web Application", 
      icon: <Briefcase className="w-6 h-6" />,
      desc: "Recruitment and workforce platform",
      tech: ["Umbraco", "HR Tech", "Portal"]
    },
    { 
      name: "Zenegy", 
      link: "https://zenegy.com", 
      type: "umbraco", 
      category: "B2B Domain", 
      icon: <Building2 className="w-6 h-6" />,
      desc: "Payroll and HR management system",
      tech: ["Umbraco", "B2B", "SaaS"]
    },
    { 
      name: "Probusfyn", 
      link: "http://probusfyn.dk", 
      type: "umbraco", 
      category: "Web Application", 
      icon: <Users className="w-6 h-6" />,
      desc: "Community management platform",
      tech: ["Umbraco", "Community", "Portal"]
    },
    { 
      name: "Tscherning", 
      link: "http://tscherning.dk", 
      type: "umbraco", 
      category: "Web Application", 
      icon: <Briefcase className="w-6 h-6" />,
      desc: "Corporate business website",
      tech: ["Umbraco", "Corporate", "SEO"]
    },
    { 
      name: "Vattenfall", 
      link: "http://vattenfall.com", 
      type: "umbraco", 
      category: "Web Application", 
      icon: <Zap className="w-6 h-6" />,
      desc: "Energy company website",
      tech: ["Umbraco", "Enterprise", "CMS"]
    },
    { 
      name: "TPC Management", 
      link: "http://tpcmanagement.dk", 
      type: "umbraco", 
      category: "Web Application", 
      icon: <Building2 className="w-6 h-6" />,
      desc: "Property management system",
      tech: ["Umbraco", "Property", "Management"]
    },
    
    // E-Commerce
    { 
      name: "FYE", 
      link: "https://www.fye.com", 
      type: "ecommerce", 
      category: "E-Commerce", 
      icon: <ShoppingCart className="w-6 h-6" />,
      desc: "Entertainment merchandise store",
      tech: ["E-commerce", "Payment", "Inventory"]
    },
    { 
      name: "FindItEZ", 
      link: "https://www.finditez.com", 
      type: "ecommerce", 
      category: "E-Commerce", 
      icon: <Search className="w-6 h-6" />,
      desc: "Product discovery platform",
      tech: ["Search Engine", "E-commerce", "AI"]
    },
    { 
      name: "Intelihot", 
      link: "https://www.intelihot.com", 
      type: "ecommerce", 
      category: "E-Commerce", 
      icon: <ShoppingCart className="w-6 h-6" />,
      desc: "Smart water heating solutions",
      tech: ["E-commerce", "IoT", "Smart Home"]
    },
    { 
      name: "Fairhope Store", 
      link: "https://www.fairhopedirectstore.com", 
      type: "ecommerce", 
      category: "E-Commerce", 
      icon: <Package className="w-6 h-6" />,
      desc: "Direct-to-consumer retail store",
      tech: ["E-commerce", "Retail", "Shipping"]
    },
    { 
      name: "Garaaz App", 
      link: "https://play.google.com/store/apps/details?id=com.garaaz", 
      type: "ecommerce", 
      category: "E-Commerce", 
      icon: <ShoppingCart className="w-6 h-6" />,
      desc: "Automotive e-commerce app",
      tech: ["Mobile App", "E-commerce", "Auto Parts"]
    },
    
    // Healthcare
    { 
      name: "America Medic", 
      link: "http://americamedic.com", 
      type: "healthcare", 
      category: "Healthcare", 
      icon: <Heart className="w-6 h-6" />,
      desc: "Medical services management",
      tech: ["Healthcare", "EMR", "Appointments"]
    },
    { 
      name: "DCPA", 
      link: "http://www.dcpa.com.au", 
      type: "healthcare", 
      category: "Healthcare", 
      icon: <Heart className="w-6 h-6" />,
      desc: "Dental care practice platform",
      tech: ["Healthcare", "Dental", "Patient Portal"]
    },
    { 
      name: "Divya Ayurveda", 
      link: "http://divyaayurveda.com", 
      type: "healthcare", 
      category: "Healthcare", 
      icon: <Heart className="w-6 h-6" />,
      desc: "Ayurvedic healthcare portal",
      tech: ["Healthcare", "E-commerce", "Wellness"]
    },
    { 
      name: "Induction Healthcare", 
      link: "http://inductionhealthcare.com", 
      type: "healthcare", 
      category: "Healthcare", 
      icon: <Heart className="w-6 h-6" />,
      desc: "Clinical communication platform",
      tech: ["Healthcare", "Communication", "HIPAA"]
    },
    
    // Real Estate
    { 
      name: "HomeOptima", 
      link: "https://www.homeoptima.com", 
      type: "realestate", 
      category: "Real Estate", 
      icon: <Building2 className="w-6 h-6" />,
      desc: "Property listings and ratings",
      tech: ["Real Estate", "Listings", "Reviews"]
    },
    { 
      name: "HomeOptima App", 
      link: "https://apps.apple.com/us/app/homeoptima-listings-ratings/id886930132", 
      type: "realestate", 
      category: "Real Estate", 
      icon: <Building2 className="w-6 h-6" />,
      desc: "Mobile property search app",
      tech: ["iOS", "Real Estate", "Search"]
    },
    
    // Food & Delivery
    { 
      name: "Pasfalls", 
      link: "http://thepasfalls.dk", 
      type: "food", 
      category: "Food & Delivery", 
      icon: <Utensils className="w-6 h-6" />,
      desc: "Food ordering and delivery",
      tech: ["Food Tech", "Delivery", "Orders"]
    },
    { 
      name: "Gourministeriet", 
      link: "http://www.gourministeriet.dk", 
      type: "food", 
      category: "Food & Delivery", 
      icon: <Utensils className="w-6 h-6" />,
      desc: "Gourmet food delivery platform",
      tech: ["Food Delivery", "Restaurant", "Mobile"]
    },
    
    // Gaming
    { 
      name: "All Play Arena", 
      link: "http://www.allplayarena.appdevelopment.shop", 
      type: "gaming", 
      category: "Gaming", 
      icon: <Gamepad2 className="w-6 h-6" />,
      desc: "Multi-game entertainment platform",
      tech: ["Gaming", "Multiplayer", "Tournaments"]
    },
    
    // Travel & Tourism
    { 
      name: "Tropiclink", 
      link: "https://www.tropiclink.net", 
      type: "travel", 
      category: "Travel & Tourism", 
      icon: <Plane className="w-6 h-6" />,
      desc: "Travel booking and management",
      tech: ["Travel", "Booking", "Tours"]
    },
    { 
      name: "iTransfer Tourist", 
      link: "https://www.itransfertourist.net", 
      type: "travel", 
      category: "Travel & Tourism", 
      icon: <Plane className="w-6 h-6" />,
      desc: "Tourist transfer services",
      tech: ["Travel", "Transportation", "Booking"]
    },
    { 
      name: "Harivansh Tours", 
      link: "https://www.harivanshtours.com", 
      type: "travel", 
      category: "Travel & Tourism", 
      icon: <Plane className="w-6 h-6" />,
      desc: "Tour packages and travel services",
      tech: ["Travel", "Tours", "Packages"]
    },
    
    // ERP & B2B
    { 
      name: "Centrl AI", 
      link: "http://www.centrl.ai", 
      type: "erp", 
      category: "ERP & Reporting", 
      icon: <Database className="w-6 h-6" />,
      desc: "AI-powered business intelligence",
      tech: ["AI", "ERP", "Analytics"]
    },
    { 
      name: "Specsources", 
      link: "https://www.specsources.com", 
      type: "erp", 
      category: "ERP & Reporting", 
      icon: <FileCode className="w-6 h-6" />,
      desc: "Specification management system",
      tech: ["ERP", "Document", "Management"]
    },
    { 
      name: "Katalyst Tech", 
      link: "http://www.katalysttech.com", 
      type: "erp", 
      category: "ERP & Reporting", 
      icon: <Server className="w-6 h-6" />,
      desc: "Technology solutions platform",
      tech: ["ERP", "Enterprise", "Cloud"]
    },
    { 
      name: "Appian Road", 
      link: "https://www.appianroad.com", 
      type: "b2b", 
      category: "B2B Domain", 
      icon: <Briefcase className="w-6 h-6" />,
      desc: "B2B consulting services",
      tech: ["B2B", "Consulting", "Enterprise"]
    },
    { 
      name: "Kamal Cogent", 
      link: "https://www.kamalcogentenergy.com", 
      type: "b2b", 
      category: "B2B Domain", 
      icon: <Zap className="w-6 h-6" />,
      desc: "Energy solutions provider",
      tech: ["Energy", "B2B", "Enterprise"]
    },
    { 
      name: "Gartner", 
      link: "https://www.gartner.com/en", 
      type: "b2b", 
      category: "B2B Domain", 
      icon: <BarChart3 className="w-6 h-6" />,
      desc: "Research and advisory services",
      tech: ["B2B", "Analytics", "Research"]
    },
    
    // Blockchain
    { 
      name: "Zuraverse", 
      link: "https://zuraverse.xyz/", 
      type: "blockchain", 
      category: "Blockchain", 
      icon: <Layers className="w-6 h-6" />,
      desc: "Metaverse blockchain platform",
      tech: ["Blockchain", "Metaverse", "NFT"]
    },
    { 
      name: "DeFi Institute", 
      link: "https://decentralizedfinance.institute/", 
      type: "blockchain", 
      category: "Blockchain", 
      icon: <Lock className="w-6 h-6" />,
      desc: "Decentralized finance platform",
      tech: ["DeFi", "Blockchain", "Crypto"]
    },
  ];

  const categories = ["all", "E-Commerce", "Healthcare", "Real Estate", "Food & Delivery", "Gaming", "Travel & Tourism", "ERP & Reporting", "B2B Domain", "Blockchain", "Web Application"];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const stats = [
    { icon: <Award className="w-10 h-10" />, value: "500+", label: "Projects Delivered", desc: "" },
    { icon: <Users className="w-10 h-10" />, value: "98%", label: "Client Satisfaction", desc: "" },
    { icon: <Globe className="w-10 h-10" />, value: "50+", label: "Industries Served", desc: "" },
    { icon: <Clock className="w-10 h-10" />, value: "5+", label: "Years of Experience", desc: "" },
];


  const technologies = [
    { name: "Next.js", icon: <Code className="w-5 h-5" />, category: "Frontend" },
    { name: "React.js", icon: <Code className="w-5 h-5" />, category: "Frontend" },
    { name: "Angular", icon: <Code className="w-5 h-5" />, category: "Frontend" },
    { name: "Vue.js", icon: <Code className="w-5 h-5" />, category: "Frontend" },
    { name: "Node.js", icon: <Server className="w-5 h-5" />, category: "Backend" },
    { name: "ASP.NET", icon: <Server className="w-5 h-5" />, category: "Backend" },
    { name: "MongoDB", icon: <Database className="w-5 h-5" />, category: "Database" },
    { name: "MySQL", icon: <Database className="w-5 h-5" />, category: "Database" },
    { name: "PostgreSQL", icon: <Database className="w-5 h-5" />, category: "Database" },
    { name: "AWS", icon: <Cloud className="w-5 h-5" />, category: "Cloud" },
    { name: "Azure", icon: <Cloud className="w-5 h-5" />, category: "Cloud" },
    { name: "React Native", icon: <Smartphone className="w-5 h-5" />, category: "Mobile" },
  ];

  const whyChooseUs = [
    { 
      icon: <Zap className="w-8 h-8" />, 
      title: "Latest Technologies", 
      desc: "Cutting-edge tech stack for modern solutions",
      highlight: "Future-proof development"
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: "Quality Assurance", 
      desc: "Rigorous testing for bug-free delivery",
      highlight: "In-house QA team"
    },
    { 
      icon: <Clock className="w-8 h-8" />, 
      title: "On-Time Delivery", 
      desc: "We respect deadlines and commitments",
      highlight: "Proven track record"
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      title: "Expert Team", 
      desc: "Experienced developers and designers",
      highlight: "5+ years expertise"
    },
    { 
      icon: <TrendingUp className="w-8 h-8" />, 
      title: "Scalable Solutions", 
      desc: "Built to grow with your business",
      highlight: "Cloud-native architecture"
    },
    { 
      icon: <CheckCircle className="w-8 h-8" />, 
      title: "Post-Launch Support", 
      desc: "Dedicated support after delivery",
      highlight: "24/7 assistance"
    },
  ];

  const processSteps = [
    { icon: <Target className="w-8 h-8" />, title: "Discovery", desc: "Understanding your requirements" },
    { icon: <Palette className="w-8 h-8" />, title: "Design", desc: "Creating wireframes and mockups" },
    { icon: <Code className="w-8 h-8" />, title: "Development", desc: "Building your solution" },
    { icon: <CheckCircle className="w-8 h-8" />, title: "Testing", desc: "Quality assurance" },
    { icon: <Rocket className="w-8 h-8" />, title: "Launch", desc: "Deployment and support" },
  ];

  return (
    <>
     

      <main className="bg-white text-gray-900 font-sans overflow-hidden">
        {/* HERO SECTION - SEO Optimized */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
          </div>
          
          <div className="relative z-10 max-w-6xl">
            <div className="mb-8 flex justify-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border-2 border-white/30 transform hover:scale-110 transition-all duration-300">
                <Cpu className="w-10 h-10 text-white" aria-label="Technology Icon" />
              </div>
            </div>
            <h1 className="text-7xl md:text-5xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-2xl">
              OpenSoftAI
            </h1>
            <h2 className="mt-6 text-2xl md:text-2xl max-w-4xl mx-auto text-white/95 font-light leading-relaxed">
              Leading Web Development, Blockchain & AI Solutions Company
            </h2>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/80">
              Trusted by 35+ clients worldwide • 50+ successful projects • Expert team with 5+ years experience
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 bg-white text-blue-900 px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                aria-label="View our portfolio projects"
              >
                <Package className="w-6 h-6" />
                View Projects <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-blue-700/30 backdrop-blur-sm text-white border-3 border-white/50 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-600/40 hover:scale-105 transition-all duration-300"
                aria-label="Contact us to get started"
              >
                <Rocket className="w-6 h-6" />
                Get Started
              </a>
            </div>
          </div>

          
        </section>

        {/* STATS SECTION - Trust Indicators for SEO */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-950 text-white" aria-label="Company statistics">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <article key={i} className="text-center transform hover:scale-110 transition-all duration-300">
                  <div className="flex justify-center mb-4 text-blue-300" aria-hidden="true">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-black mb-2">{stat.value}</div>
                  <div className="text-xl text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-blue-200">{stat.desc}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION - SEO Rich Content */}
        <section className="py-24 px-6 bg-white" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <h2 id="services-heading" className="text-3xl md:text-4xl font-black text-blue-950 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive IT solutions for digital transformation and business growth
              </p>
            </header>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <article key={i} className={`group bg-gradient-to-br ${service.color} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-white`}>
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/90 leading-relaxed mb-4">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION - Portfolio Showcase */}
        <section id="projects" className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white" aria-labelledby="projects-heading">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <h2 id="projects-heading" className="text-3xl md:text-4xl font-black text-blue-950 mb-4">
                Our Portfolio
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Showcasing 50+ successful projects across diverse industries and cutting-edge technologies
              </p>
            </header>

            {/* Category Filter */}
            <nav
  className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12"
  aria-label="Project categories"
>
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setActiveCategory(cat)}
      aria-pressed={activeCategory === cat}
      className={`relative px-5 sm:px-7 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300
        ${
          activeCategory === cat
            ? "bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg ring-2 ring-blue-300 scale-105"
            : "bg-white text-blue-900 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 hover:shadow-md"
        }`}
    >
      {activeCategory === cat && (
        <span className="absolute inset-0 rounded-full bg-blue-400/10 animate-pulse"></span>
      )}
      <span className="relative z-10">
        {cat === "all" ? "All Projects" : cat}
      </span>
    </button>
  ))}
</nav>


            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, i) => (
                <article
                  key={i}
                  className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    aria-label={`Visit ${project.name} - ${project.desc}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="text-blue-600 group-hover:text-blue-700 mt-1 flex-shrink-0" aria-hidden="true">
                          {project.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-blue-950 group-hover:text-blue-700 transition-colors mb-1">
                            {project.name}
                          </h3>
                          <p className="text-sm text-gray-500 mb-2">{project.category}</p>
                          <p className="text-sm text-gray-600 leading-relaxed mb-3">{project.desc}</p>
                          <div className="flex flex-wrap gap-1">
                            {project.tech.map((tech, idx) => (
                              <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" aria-hidden="true" />
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US - Trust Factors for SEO */}
        <section className="py-24 px-6 bg-gradient-to-br from-blue-950 to-blue-900 text-white" aria-labelledby="why-choose-heading">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <h2 id="why-choose-heading" className="text-3xl md:text-4xl font-black mb-4">
                Why Choose OpenSoftAI
              </h2>
              <p className="text-lg text-blue-200 max-w-3xl mx-auto">
                What makes us the preferred IT partner for businesses worldwide
              </p>
            </header>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, i) => (
                <article key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-blue-300 mb-4" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-200 mb-3">{item.desc}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300">
                    <Sparkles className="w-4 h-4" aria-hidden="true" />
                    {item.highlight}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES - Tech Stack Showcase */}
        <section className="py-24 px-6 bg-white" aria-labelledby="tech-heading">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <h2 id="tech-heading" className="text-3xl md:text-4xl font-black text-blue-950 mb-4">
                Technologies We Master
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Leveraging cutting-edge technology stack for optimal performance and scalability
              </p>
            </header>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {technologies.map((tech, i) => (
                <div
                  key={i}
                  className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                >
                  <div className="text-blue-600 group-hover:text-blue-700" aria-hidden="true">
                    {tech.icon}
                  </div>
                  <div>
                    <div className="font-bold text-blue-950 text-lg">{tech.name}</div>
                    <div className="text-xs text-gray-500">{tech.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white" aria-labelledby="process-heading">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <h2 id="process-heading" className="text-3xl md:text-4xl font-black text-blue-950 mb-4">
                Our Development Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures quality delivery and client satisfaction
              </p>
            </header>
            <div className="grid md:grid-cols-5 gap-6">
              {processSteps.map((step, i) => (
                <article key={i} className="relative">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full mb-4" aria-hidden="true">
                      {step.icon}
                    </div>
                    <div className="text-sm font-bold text-blue-600 mb-2">Step {i + 1}</div>
                    <h3 className="text-lg font-bold text-blue-950 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 -right-3 w-6 h-0.5 bg-blue-300" aria-hidden="true"></div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL SECTION */}
        <section className="py-24 px-6 bg-gradient-to-r from-blue-900 to-blue-950 text-white" aria-labelledby="testimonial-heading">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
            
            </div>
            <blockquote>
              <p className="text-2xl md:text-xl font-light italic mb-6 leading-relaxed">
                "I tried a few developers, but none were able to deliver the project on time. Then I came across OpenSoftAI; they were able to complete the project on time. Not to mention there were no bugs when they delivered the project."
              </p>
              <footer>
                <cite className="not-italic">
                  <div className="font-bold text-xl">Luna Smith</div>
                  <div className="text-blue-300">Business Owner</div>
                </cite>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* CTA SECTION - Conversion Optimized */}
        <section id="contact" className="py-24 px-6 bg-gradient-to-br from-blue-600 to-blue-950 text-white" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-black mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-200 mb-4">Let's build something amazing together</p>
            <p className="text-lg text-blue-300 mb-12">
              Get a free consultation • Quick response time • Transparent pricing
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:info@opensoftai.com"
                className="inline-flex items-center gap-3 bg-white text-blue-900 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                aria-label="Contact us via email"
              >
                <Globe className="w-6 h-6" />
                Contact Us <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="tel:+919256497999"
                className="inline-flex items-center gap-3 bg-blue-700/30 backdrop-blur-sm text-white border-3 border-white/50 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-600/40 hover:scale-105 transition-all duration-300"
                aria-label="Call us at +91 925 649 7999"
              >
                <Smartphone className="w-6 h-6" />
                Call Now: +91 9256497999
              </a>
            </div>
          </div>
        </section>

       
      </main>
    </>
  );
}