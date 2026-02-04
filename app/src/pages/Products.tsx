import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  BarChart3, 
  FileText, 
  ArrowRight, 
  Check, 
  Zap, 
  Shield, 
  Clock,
  Sparkles
} from 'lucide-react';

const products = [
  {
    id: 'chatbot',
    icon: MessageSquare,
    title: 'Chatbot Builder',
    tagline: 'AI-powered conversations for your business',
    description: 'Train on your docs. Deploy to web or WhatsApp. Build intelligent chatbots that understand your business and provide instant support to your customers.',
    features: [
      'Custom training on your documents',
      'Multi-platform deployment (Web, WhatsApp, Slack)',
      'Real-time analytics dashboard',
      'Human handoff capability',
      'Multi-language support',
      'API integrations',
    ],
    benefits: [
      { icon: Zap, title: '24/7 Support', description: 'Never miss a customer query' },
      { icon: Shield, title: 'Secure', description: 'Enterprise-grade security' },
      { icon: Clock, title: 'Quick Setup', description: 'Deploy in hours, not weeks' },
    ],
    pricing: 'Starting at $99/month',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 'iot-dashboard',
    icon: BarChart3,
    title: 'IoT Dashboard',
    tagline: 'Real-time monitoring for connected devices',
    description: 'Real-time telemetry, alerts, and device management. Monitor your connected devices from anywhere with our powerful dashboard.',
    features: [
      'Real-time data visualization',
      'Custom alert rules',
      'Device management console',
      'Historical data analysis',
      'Export and reporting',
      'Mobile-responsive design',
    ],
    benefits: [
      { icon: Zap, title: 'Real-time', description: 'Live data from all devices' },
      { icon: Shield, title: 'Reliable', description: '99.9% uptime guarantee' },
      { icon: Clock, title: 'Scalable', description: 'From 10 to 10,000 devices' },
    ],
    pricing: 'Starting at $149/month',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    id: 'ai-parser',
    icon: FileText,
    title: 'AI Parser',
    tagline: 'Extract data from documents automatically',
    description: 'Extract structured data from documents and emails. Automate data entry with AI precision and save countless hours of manual work.',
    features: [
      'OCR + AI-powered extraction',
      'Support for PDFs, images, and scans',
      'Custom data schemas',
      'API for seamless integration',
      'Batch processing',
      'Data validation rules',
    ],
    benefits: [
      { icon: Zap, title: 'Fast', description: 'Process documents in seconds' },
      { icon: Shield, title: 'Accurate', description: '99%+ extraction accuracy' },
      { icon: Clock, title: 'Efficient', description: 'Save 90% of manual work' },
    ],
    pricing: 'Starting at $199/month',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop',
    color: 'from-purple-500/20 to-pink-500/20',
  },
];

export default function Products() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-pynatic-bg overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pynatic-lime/5 rounded-full blur-[150px]" />
        </div>
        
        <div className="relative z-10 section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pynatic-lime/10 border border-pynatic-lime/20 mb-6">
              <Sparkles size={14} className="text-pynatic-lime" />
              <span className="font-mono text-xs tracking-[0.15em] uppercase text-pynatic-lime">
                Ready-to-Deploy
              </span>
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-pynatic-text mb-6">
              Productized Apps
            </h1>
            <p className="text-lg text-pynatic-text-secondary">
              Pick a foundation. We customize, integrate, and deploy—fast. 
              Get started with our battle-tested solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 lg:py-32 bg-pynatic-bg">
        <div className="section-padding space-y-32">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-3xl blur-[60px] opacity-50`} />
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pynatic-bg/60 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-pynatic-lime/10 border border-pynatic-lime/30 flex items-center justify-center">
                  <product.icon size={40} className="text-pynatic-lime" />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="font-mono text-xs tracking-[0.15em] uppercase text-pynatic-lime mb-4 block">
                  {product.pricing}
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-pynatic-text mb-2">
                  {product.title}
                </h2>
                <p className="text-lg text-pynatic-text-secondary mb-4">
                  {product.tagline}
                </p>
                <p className="text-pynatic-text-secondary leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {product.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-pynatic-lime/20 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-pynatic-lime" />
                      </div>
                      <span className="text-pynatic-text text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Benefits */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {product.benefits.map((benefit) => (
                    <div key={benefit.title} className="text-center">
                      <div className="w-10 h-10 rounded-xl bg-pynatic-lime/10 flex items-center justify-center mx-auto mb-2">
                        <benefit.icon size={18} className="text-pynatic-lime" />
                      </div>
                      <p className="text-sm font-semibold text-pynatic-text">{benefit.title}</p>
                      <p className="text-xs text-pynatic-text-secondary">{benefit.description}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-pynatic-lime text-pynatic-bg rounded-full font-semibold transition-all duration-300 hover:bg-pynatic-lime-dark hover:shadow-glow"
                  >
                    Get Started
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-pynatic-text rounded-full font-medium transition-all duration-300 hover:border-pynatic-lime/50 hover:text-pynatic-lime"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-pynatic-bg">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pynatic-lime/10 to-transparent" />
            <div className="relative z-10">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-pynatic-text mb-4">
                Need a custom solution?
              </h2>
              <p className="text-pynatic-text-secondary mb-8 max-w-xl mx-auto">
                Our products are built on modular architectures. We can customize any solution 
                to fit your specific requirements.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-pynatic-lime text-pynatic-bg rounded-full font-semibold transition-all duration-300 hover:bg-pynatic-lime-dark hover:shadow-glow"
              >
                Discuss Customization
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}