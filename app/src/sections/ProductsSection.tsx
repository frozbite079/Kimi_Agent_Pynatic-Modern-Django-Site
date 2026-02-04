import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, MessageSquare, BarChart3, FileText } from 'lucide-react';

const products = [
  {
    id: 'chatbot',
    title: 'Chatbot Builder',
    description: 'Train on your docs. Deploy to web or WhatsApp. AI-powered conversations that understand your business.',
    icon: MessageSquare,
    features: ['Custom training', 'Multi-platform', 'Analytics'],
  },
  {
    id: 'iot-dashboard',
    title: 'IoT Dashboard',
    description: 'Real-time telemetry, alerts, and device management. Monitor your connected devices from anywhere.',
    icon: BarChart3,
    features: ['Real-time data', 'Custom alerts', 'Device management'],
  },
  {
    id: 'ai-parser',
    title: 'AI Parser',
    description: 'Extract structured data from documents and emails. Automate data entry with AI precision.',
    icon: FileText,
    features: ['OCR + AI', 'Data extraction', 'API integration'],
  },
];

export default function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-pynatic-bg overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pynatic-lime/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-pynatic-lime mb-4 block">
            Ready-to-Deploy
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-pynatic-text mb-4">
            Productized apps
          </h2>
          <p className="text-lg text-pynatic-text-secondary">
            Pick a foundation. We customize, integrate, and deploy—fast.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative h-full glass-card rounded-3xl p-8 transition-all duration-500 group-hover:border-pynatic-lime/30">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-pynatic-lime/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-pynatic-lime/20 group-hover:scale-110">
                  <product.icon size={28} className="text-pynatic-lime" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl lg:text-2xl font-bold text-pynatic-text mb-3">
                  {product.title}
                </h3>
                <p className="text-pynatic-text-secondary mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-mono tracking-wider uppercase bg-white/5 text-pynatic-text-secondary rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-pynatic-lime font-medium group/link"
                >
                  Learn more
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                  />
                </Link>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl bg-pynatic-lime/5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}