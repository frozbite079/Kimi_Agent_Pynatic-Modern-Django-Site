import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ManifestoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-pynatic-bg overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-pynatic-lime/5 to-transparent" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* Left - Headline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs tracking-[0.15em] uppercase text-pynatic-lime mb-6 block">
              Our Philosophy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-pynatic-text leading-tight">
              We turn complex problems into{' '}
              <span className="text-gradient">clean, shipped products.</span>
            </h2>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-pynatic-text-secondary leading-relaxed">
              Strategy, design, engineering, and DevOps—one team, one timeline, one clear deliverable. 
              We believe in transparent communication, iterative development, and delivering value at every step.
            </p>
          </motion.div>
        </div>

        {/* Wide Photo Band */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="aspect-[21/9] lg:aspect-[3/1]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=500&fit=crop"
              alt="Pynatic Team"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-pynatic-bg/80 via-transparent to-pynatic-bg/40" />
            
            {/* Caption Tag */}
            <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pynatic-lime/20 border border-pynatic-lime/30">
                <span className="w-2 h-2 rounded-full bg-pynatic-lime animate-pulse" />
                <span className="font-mono text-xs tracking-wider text-pynatic-lime uppercase">
                  Pynatic Team — Build Week
                </span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}