"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Code,
  Cloud,
  Package,
  Users,
  FileText,
  DollarSign,
  ShoppingCart,
  Clock,
  Calendar,
  BookOpen,
  GraduationCap,
  School,
  HelpCircle,
  Star,
  Plane,
  Heart,
  Utensils,
  Building,
  PartyPopper,
  Hospital,
  Home,
  Stethoscope,
  TrendingUp,
  Briefcase,
} from "lucide-react";

export default function SoftwareServices() {
  const [activeCategory, setActiveCategory] = useState("all");

  const services = [
    {
      icon: Code,
      title: "ERP Software Development",
      description:
        "Comprehensive enterprise resource planning systems that integrate all your business processes – from finance and HR to inventory and customer management.",
      category: "enterprise",
      link: "/erp-software-development",
    },
    {
      icon: Cloud,
      title: "SaaS Software Development",
      description:
        "Cloud-based software platforms that generate recurring revenue while serving your customers efficiently with subscription management and multi-tenancy.",
      category: "enterprise",
      link: "/saas-software-development",
    },
    {
      icon: Package,
      title: "Warehouse Management Software",
      description:
        "Optimize inventory tracking, order fulfillment, and logistics operations with custom warehouse management systems that reduce costs and improve accuracy.",
      category: "business",
      link: "/services/warehouse-management",
    },
    {
      icon: Users,
      title: "HRMS Software Development",
      description:
        "Streamline human resource management with integrated systems covering recruitment, payroll, performance management, and compliance reporting.",
      category: "business",
      link: "/hospital-management-system",
    },
    {
      icon: Package,
      title: "Inventory Management Software",
      description:
        "Real-time inventory tracking, automated reordering, supplier management, and comprehensive reporting systems that prevent stockouts.",
      category: "business",
      link: "/inventory-management-software-development",
    },
    {
      icon: FileText,
      title: "Accounting & Billing Software",
      description:
        "Automated financial management systems with invoicing, expense tracking, tax compliance, and financial reporting that integrate seamlessly.",
      category: "business",
      link: "/services/accounting-billing",
    },
    {
      icon: ShoppingCart,
      title: "POS System Software",
      description:
        "Modern point-of-sale solutions for retail and hospitality businesses, featuring payment processing, inventory integration, and sales analytics.",
      category: "retail",
      link: "/pos-system-software-development",
    },
    {
      icon: Clock,
      title: "Employee Tracking Software",
      description:
        "Monitor productivity, project progress, and resource allocation with time tracking, task management, and performance analytics.",
      category: "business",
      link: "/services/employee-tracking",
    },
    {
      icon: Calendar,
      title: "Attendance System Software",
      description:
        "Automated attendance tracking with biometric integration, shift scheduling, overtime calculation, and compliance reporting.",
      category: "business",
      link: "/services/attendance-system",
    },
    {
      icon: BookOpen,
      title: "Library Management System",
      description:
        "Complete digital library solutions with cataloging, circulation management, member services, and digital resource access.",
      category: "education",
      link: "/services/library-management",
    },
    {
      icon: GraduationCap,
      title: "LMS with Live Class Software",
      description:
        "Learning management platforms with interactive online classrooms, content delivery, student assessment, and progress tracking.",
      category: "education",
      link: "/lms-software-development",
    },
    {
      icon: School,
      title: "University Management Software",
      description:
        "Comprehensive academic administration systems covering admissions, student records, course management, and fee collection.",
      category: "education",
      link: "/services/university-management",
    },
    {
      icon: HelpCircle,
      title: "Quiz System Software",
      description:
        "Interactive assessment platforms with question banks, automated grading, performance analytics, and customizable testing environments.",
      category: "education",
      link: "/services/quiz-system",
    },
    {
      icon: Star,
      title: "Astrology Software",
      description:
        "Specialized astrology applications with chart calculations, prediction systems, consultation management, and client portals.",
      category: "specialized",
      link: "/services/astrology-software",
    },
    {
      icon: Plane,
      title: "Travel Booking Software",
      description:
        "End-to-end travel management platforms with booking engines, inventory management, payment processing, and customer service tools.",
      category: "specialized",
      link: "/services/travel-booking",
    },
    {
      icon: Heart,
      title: "Matrimonial Software",
      description:
        "Comprehensive matchmaking platforms with profile management, compatibility matching, communication tools, and privacy controls.",
      category: "specialized",
      link: "/services/matrimonial",
    },
    {
      icon: Utensils,
      title: "Restaurant Management System",
      description:
        "Integrated restaurant operations software covering order management, kitchen workflows, inventory tracking, and customer loyalty programs.",
      category: "hospitality",
      link: "/restaurant-management-system",
    },
    {
      icon: Building,
      title: "Hotel Management Software",
      description:
        "Complete hospitality management solutions with reservation systems, guest services, housekeeping coordination, and billing capabilities.",
      category: "hospitality",
      link: "/services/hotel-management",
    },
    {
      icon: PartyPopper,
      title: "Event Management Software",
      description:
        "Plan and execute successful events with registration management, venue coordination, vendor management, and attendee communication.",
      category: "specialized",
      link: "/services/event-management",
    },
    {
      icon: Hospital,
      title: "Hospital Management System",
      description:
        "Healthcare administration platforms integrating patient records, appointment scheduling, billing, inventory management, and clinical workflows.",
      category: "healthcare",
      link: "/services/hospital-management",
    },
    {
      icon: Home,
      title: "Real Estate Software",
      description:
        "Property management and sales platforms with listing management, client relationship tools, transaction tracking, and market analysis.",
      category: "specialized",
      link: "/services/real-estate",
    },
    {
      icon: Stethoscope,
      title: "Clinic Management Software",
      description:
        "Healthcare practice management with appointment scheduling, patient records, billing integration, and prescription management.",
      category: "healthcare",
      link: "/services/clinic-management",
    },
    {
      icon: TrendingUp,
      title: "Trading Software",
      description:
        "Financial trading platforms with real-time market data, portfolio management, risk analysis, and automated trading capabilities.",
      category: "finance",
      link: "/services/trading-software",
    },
    {
      icon: Briefcase,
      title: "Job Portal Software",
      description:
        "Employment platforms connecting employers and job seekers with advanced search capabilities, application management, and candidate tracking.",
      category: "specialized",
      link: "/services/job-portal",
    },
  ];

  const categories = [
    { id: "all", label: "All Solutions" },
    { id: "enterprise", label: "Enterprise" },
    { id: "business", label: "Business" },
    { id: "education", label: "Education" },
    { id: "healthcare", label: "Healthcare" },
    { id: "hospitality", label: "Hospitality" },
    { id: "retail", label: "Retail" },
    { id: "finance", label: "Finance" },
    { id: "specialized", label: "Specialized" },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <>
      <Head>
        <title>Custom Software Development Services | OpenSoftAI</title>
        <meta
          name="description"
          content="Explore our core software solutions across enterprise, healthcare, education, and business sectors. Build scalable, secure, and custom software with OpenSoftAI."
        />
        <meta
          name="keywords"
          content="custom software development, ERP software, SaaS platform, LMS, HRMS, POS, healthcare software, OpenSoftAI"
        />
      </Head>

      <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12">
            <h2 className="text-xl md:text-4xl font-bold text-slate-800 mb-4">
              Core Software Solutions We Deliver
            </h2>
            <p className="text-md text-slate-600 max-w-3xl mx-auto">
              Comprehensive software solutions tailored to transform your
              business operations and drive growth across every industry.
            </p>
          </header>

          {/* Category Filter */}
          <nav
            className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100 justify-start sm:justify-center gap-3 mb-12 pb-2 no-scrollbar"
            aria-label="Software Categories"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 shadow"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={index} href={service.link} className="group">
                  <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-slate-100 hover:border-blue-300 group-hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Let's discuss how our custom software solutions can streamline
              your operations and accelerate your growth.
            </p>
            <Link
              href="/contact-us"
              className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
