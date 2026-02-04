import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Brain, Cpu } from 'lucide-react';

const spotlights = [
  {
    id: 'ai',
    label: 'AI / ML',
    title: 'Smart models that ship.',
    description: 'From LLMs to computer vision, we build AI solutions that solve real problems.',
    cta: 'Explore AI services',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    gradient: 'from-purple-500/20 to-blue-500/20',
  },
  {
    id: 'iot',
    label: 'IoT SYSTEMS',
    title: 'Connected hardware, simple software.',
    description: 'End-to-end IoT solutions from sensors to cloud dashboards.',
    cta: 'Explore IoT services',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    gradient: 'from-cyan-500/20 to-emerald-500/20',
  },
];

export default function SpotlightSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-pynatic-bg overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pynatic-lime/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-pynatic-lime mb-4 block">
            Our Expertise
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-pynatic-text">
            High-leverage capabilities
          </h2>
        </motion.div>

        {/* Spotlight Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {spotlights.map((spotlight, index) => (
            <motion.div
              key={spotlight.id}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden">
                {/* Background Image */}
                <img
                  src={spotlight.image}
                  alt={spotlight.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b ${spotlight.gradient} opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-t from-pynatic-bg via-pynatic-bg/60 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  {/* Top Label */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-pynatic-lime/20 flex items-center justify-center">
                      <spotlight.icon size={20} className="text-pynatic-lime" />
                    </div>
                    <span className="font-mono text-xs tracking-[0.15em] uppercase text-pynatic-lime">
                      {spotlight.label}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-pynatic-text mb-3">
                      {spotlight.title}
                    </h3>
                    <p className="text-pynatic-text-secondary mb-6 max-w-sm">
                      {spotlight.description}
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 text-pynatic-lime font-medium group/link"
                    >
                      {spotlight.cta}
                      <ArrowUpRight
                        size={18}
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