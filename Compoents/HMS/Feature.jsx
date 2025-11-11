"use client";
import { useState } from 'react';
import { 
  ClipboardList, 
  CalendarCheck2, 
  Stethoscope, 
  Pill, 
  FlaskConical, 
  Receipt, 
  Package, 
  Users, 
  Ambulance, 
  BarChart3 
} from 'lucide-react';

export default function HMSFeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: ClipboardList,
      title: 'Electronic Health Records (EHR)',
      description: 'Comprehensive patient records with medical history, treatment plans, and clinical documentation',
      gradient: 'from-cyan-400 via-blue-500 to-blue-600'
    },
    {
      icon: CalendarCheck2,
      title: 'Patient Registration & Scheduling',
      description: 'Streamlined appointment booking, registration workflows, and automated patient communication',
      gradient: 'from-blue-500 via-blue-600 to-blue-700'
    },
    {
      icon: Stethoscope,
      title: 'Clinical Workflow Management',
      description: 'Doctor rounds, nursing schedules, treatment protocols, and coordinated clinical tasks',
      gradient: 'from-cyan-400 via-blue-500 to-blue-600'
    },
    {
      icon: Pill,
      title: 'Pharmacy & Medication Management',
      description: 'Prescription tracking, drug inventory, dosage monitoring, and medication administration records',
      gradient: 'from-blue-500 via-blue-600 to-blue-700'
    },
    {
      icon: FlaskConical,
      title: 'Laboratory Information System',
      description: 'Test ordering, results management, lab equipment integration, and automated report generation',
      gradient: 'from-cyan-400 via-blue-500 to-blue-600'
    },
    {
      icon: Receipt,
      title: 'Billing & Insurance Processing',
      description: 'Automated claims, patient billing, payment tracking, and comprehensive financial reporting',
      gradient: 'from-blue-500 via-blue-600 to-blue-700'
    },
    {
      icon: Package,
      title: 'Inventory & Supply Management',
      description: 'Medical supply tracking, automated reordering, vendor management, and cost control',
      gradient: 'from-cyan-400 via-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Staff Scheduling & Management',
      description: 'Shift planning, resource allocation, credential tracking, and performance management',
      gradient: 'from-blue-500 via-blue-600 to-blue-700'
    },
    {
      icon: Ambulance,
      title: 'Emergency Department Integration',
      description: 'Triage management, emergency protocols, bed availability, and critical care coordination',
      gradient: 'from-cyan-400 via-blue-500 to-blue-600'
    },
    {
      icon: BarChart3,
      title: 'Reporting & Analytics Dashboard',
      description: 'Operational metrics, clinical outcomes, financial insights, and compliance reports',
      gradient: 'from-blue-500 via-blue-600 to-blue-700'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 px-4 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: '2s' }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Comprehensive Features for{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Complete Healthcare Management
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                ></div>

                {/* Card */}
                <div className="relative bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 transition-all duration-500 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2">
                  {/* Icon */}
                  <div className="flex items-start gap-6 mb-4">
                    <div
                      className={`relative flex-shrink-0 w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center transform transition-transform duration-500 ${isHovered ? 'scale-110 rotate-6' : ''}`}
                    >
                      <Icon className="w-8 h-8 text-white" />

                      {/* Icon glow */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                      ></div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed pl-0">{feature.description}</p>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                    <div
                      className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${feature.gradient} transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 opacity-20`}
                    ></div>
                  </div>

                  {/* Bottom Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
