import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Globe, Monitor, Wifi } from 'lucide-react';

const capabilities = [
  {
    id: 'web',
    label: 'WEB',
    title: 'Scalable web apps',
    description: 'React + Node • APIs • Auth • Deploy',
    cta: 'View web work',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop',
  },
  {
    id: 'desktop',
    label: 'DESKTOP',
    title: 'Cross-platform tools',
    description: 'Tauri • Python • Windows / Mac / Linux',
    cta: 'View desktop work',
    icon: Monitor,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=800&fit=crop',
  },
  {
    id: 'iot',
    label: 'IoT',
    title: 'Connected devices',
    description: 'Firmware • Cloud • Real-time dashboards',
    cta: 'View IoT work',
    icon: Wifi,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=800&fit=crop',
  },
];

export default function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-pynatic-bg overflow-hidden">
      <div className="relative z-10 section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-pynatic-lime mb-4 block">
            What We Do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-pynatic-text">
            Our Services
          </h2>
        </motion.div>

        {/* Capability Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden">
                {/* Background Image */}
                <img
                  src={capability.image}
                  alt={capability.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-pynatic-bg/70 group-hover:bg-pynatic-bg/60 transition-colors duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  {/* Top Label */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-pynatic-lime/20 flex items-center justify-center">
                      <capability.icon size={20} className="text-pynatic-lime" />
                    </div>
                    <span className="font-mono text-xs tracking-[0.15em] uppercase text-pynatic-lime">
                      {capability.label}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-pynatic-text mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-pynatic-text-secondary text-sm mb-6">
                      {capability.description}
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-pynatic-lime uppercase group/link"
                    >
                      {capability.cta}
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                      />
                    </Link>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border border-white/0 group-hover:border-pynatic-lime/30 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}