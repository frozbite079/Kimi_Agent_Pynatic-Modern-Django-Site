import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Globe, 
  Monitor, 
  Wifi, 
  Brain, 
  Database, 
  Shield,
  ArrowRight,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'web',
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with the latest technologies. From simple landing pages to complex enterprise solutions.',
    features: [
      'React & Next.js applications',
      'REST & GraphQL APIs',
      'Authentication & Authorization',
      'Cloud deployment & CI/CD',
      'Performance optimization',
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
  },
  {
    id: 'desktop',
    icon: Monitor,
    title: 'Desktop App Development',
    description: 'Cross-platform desktop applications that deliver powerful functionality with intuitive user interfaces for Windows, Mac, and Linux.',
    features: [
      'Tauri & Electron apps',
      'Python-based solutions',
      'Native performance',
      'Auto-updates',
      'Offline capabilities',
    ],
    technologies: ['Tauri', 'Python', 'Rust', 'SQLite', 'React'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop',
  },
  {
    id: 'iot',
    icon: Wifi,
    title: 'IoT Solutions',
    description: 'Connected device ecosystems that bridge the physical and digital worlds, enabling smart automation and data-driven insights.',
    features: [
      'Firmware development',
      'Cloud integration',
      'Real-time dashboards',
      'Device management',
      'Data analytics',
    ],
    technologies: ['ESP32', 'MQTT', 'Node-RED', 'InfluxDB', 'Grafana'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'AI / ML Solutions',
    description: 'Intelligent systems that learn and adapt. From LLMs to computer vision, we build AI solutions that solve real problems.',
    features: [
      'Large Language Models',
      'Computer vision',
      'Predictive analytics',
      'Natural language processing',
      'Custom model training',
    ],
    technologies: ['OpenAI', 'TensorFlow', 'PyTorch', 'Hugging Face', 'Python'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
  },
  {
    id: 'database',
    icon: Database,
    title: 'Database Design',
    description: 'Scalable database architectures that grow with your business. Optimized for performance, reliability, and security.',
    features: [
      'Schema design',
      'Query optimization',
      'Data migration',
      'Backup & recovery',
      'Scaling strategies',
    ],
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'AWS RDS'],
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=500&fit=crop',
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security & DevOps',
    description: 'Secure, reliable infrastructure with automated deployments and continuous monitoring.',
    features: [
      'CI/CD pipelines',
      'Infrastructure as Code',
      'Security audits',
      'Monitoring & alerting',
      'Disaster recovery',
    ],
    technologies: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'AWS'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
            <span className="font-mono text-xs tracking-[0.15em] uppercase text-pynatic-lime mb-4 block">
              What We Offer
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-pynatic-text mb-6">
              Our Services
            </h1>
            <p className="text-lg text-pynatic-text-secondary">
              End-to-end IT solutions tailored to your business needs. From concept to deployment, 
              we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section ref={ref} className="py-24 lg:py-32 bg-pynatic-bg">
        <div className="section-padding space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-video rounded-3xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pynatic-bg/60 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-pynatic-lime/10 border border-pynatic-lime/30 flex items-center justify-center">
                  <service.icon size={40} className="text-pynatic-lime" />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-pynatic-text mb-4">
                  {service.title}
                </h2>
                <p className="text-pynatic-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-pynatic-lime/20 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-pynatic-lime" />
                      </div>
                      <span className="text-pynatic-text">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono tracking-wider uppercase bg-white/5 text-pynatic-text-secondary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 text-pynatic-lime font-medium"
                >
                  Get a quote
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
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
            className="glass-card rounded-3xl p-8 lg:p-16 text-center"
          >
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-pynatic-text mb-4">
              Need something custom?
            </h2>
            <p className="text-pynatic-text-secondary mb-8 max-w-xl mx-auto">
              We love challenging projects. Let's discuss your unique requirements and build something amazing together.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-pynatic-lime text-pynatic-bg rounded-full font-semibold transition-all duration-300 hover:bg-pynatic-lime-dark hover:shadow-glow"
            >
              Start a conversation
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}