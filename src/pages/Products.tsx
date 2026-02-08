import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: 'Smart Vending & Locker Machines',
    points: [
      'Complete Package Care & Management',
      'Ultra-secure, automated, and scalable locker management',
      'High-performance last-mile delivery system',
      '15-second package drops replacing manual mail handling',
    ],
  },
  {
    id: 2,
    title: 'VMS – Visa Management System',
    description:
      'The Visa Management Platform (VMP) is an enterprise-grade, end-to-end digital solution designed to manage the complete lifecycle of visa applications for governments, diplomatic missions, and authorized service providers.',
    long:
      'Built on the PSAITECH Low-Code Digital Platform, the solution combines workflow automation, secure document management, biometric processing, and real-time monitoring to deliver a highly reliable and compliant visa processing ecosystem.',
  },
  {
    id: 3,
    title: 'XERP',
    description:
      'A comprehensive finance and accounting solution simplifying enterprise-wide financial management.',
    points: [
      'Payroll & employee self-service',
      'Accounting, inventory & CRM automation',
      'Risk control and expense management',
      'Balance sheet, P&L, and trial balance reports',
    ],
  },
  {
    id: 4,
    title: 'X-Sign',
    description:
      'A digital signature solution offering secure, legally compliant document signing.',
    points: [
      'IT Act compliant digital signatures',
      'Secure document signing & sharing',
      'Sustainable and paperless workflow',
    ],
  },
  {
    id: 5,
    title: 'e-Governance Solutions',
    description:
      'Self Service Portals and GIS Applications designed to enhance citizen engagement.',
    points: [
      'Online tax payment & grievance portals',
      'GIS-based service discovery',
      'Transparent and efficient municipal services',
    ],
  },
  {
    id: 6,
    title: 'eDMS – Document Management System',
    description:
      'Enterprise-grade document and content management system.',
    points: [
      'Document collaboration & version control',
      'Approval workflow management',
      'Open-source architecture with cost savings',
    ],
  },
  {
    id: 7,
    title: 'Assessment Module',
    description:
      'Employee assessment solution for training, promotion, and workforce optimization.',
    points: [
      'Skill gap identification',
      'Performance evaluation',
      'Talent alignment with business goals',
    ],
  },
  {
    id: 8,
    title: 'Human Capital Management',
    description:
      'Cloud-based HR management platform built by HR and IT experts.',
    points: [
      'End-to-end HR operations',
      'Browser-based, no installation required',
      'Accessible anytime, anywhere',
    ],
  },
  {
    id: 9,
    title: 'AI & Advanced Predictive Intelligence',
    description:
      'AI-powered decision-support tools for policing and governance.',
    points: [
      'Decision optimization',
      'Predictive intelligence models',
      'Improved policy-making',
    ],
  },
  {
    id: 10,
    title: 'Inventory Solution',
    description:
      'Automated inventory management solution for enterprises.',
    points: [
      'Online requisitions & PO automation',
      'Stock transfer & visibility',
      'Cost and time optimization',
    ],
  },
  {
    id: 11,
    title: 'Project Management System',
    description:
      'End-to-end project planning and execution platform.',
    points: [
      'Risk and budget management',
      'Resource allocation',
      'Stakeholder coordination',
    ],
  },
  {
    id: 12,
    title: 'Recruitment Assessment Platform',
    description:
      'AI-driven recruitment automation system.',
    points: [
      'Applicant tracking system',
      'Automated screening & interviews',
      'Centralized hiring dashboard',
    ],
  },
  {
    id: 13,
    title: 'Social Media Analytics',
    description:
      'Advanced analytics platform for social media insights.',
    points: [
      'Sentiment analysis',
      'Hashtag & viral post tracking',
      'Profile comparison & reporting',
    ],
  },
  {
    id: 14,
    title: 'Service Desk',
    description:
      'Enterprise service desk for IT support and employee productivity.',
    points: [
      'Centralized issue resolution',
      'Improved employee welfare',
      'Efficient IT support workflows',
    ],
  },
  {
    id: 15,
    title: 'PSAITECH Eye',
    description:
      'Mobile surveillance and security solution.',
    points: [
      'Live video streaming',
      'Motion detection & facial recognition',
      'Instant alerts via call, SMS, and email',
    ],
  },
];

export default function Products() {
  return (
    <Layout>
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />
        <div className="container-custom relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Products & Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Enterprise <span className="gradient-text">Digital Products</span>
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A comprehensive portfolio of digital platforms and solutions designed for
              governments, PSUs, and enterprises.
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glow-card p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.description}
                    </p>
                  )}

                  {item.long && (
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.long}
                    </p>
                  )}

                  {item.points && (
                    <ul className="space-y-2">
                      {item.points.map((p) => (
                        <li
                          key={p}
                          className="text-sm text-muted-foreground flex gap-2"
                        >
                          <Check className="w-4 h-4 text-primary mt-0.5" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <Link
                  to="/contact"
                  className="mt-6 text-sm text-primary flex items-center gap-1 hover:underline"
                >
                  Request Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
}
