import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Discover',
    description: 'Goals, constraints, users, and success metrics. We start by understanding your vision.',
    icon: Search,
  },
  {
    id: 2,
    title: 'Design',
    description: 'Wireframes, UI system, and prototype validation. Design that works for your users.',
    icon: PenTool,
  },
  {
    id: 3,
    title: 'Build',
    description: 'Frontend, backend, APIs, and real-world testing. Clean code, scalable architecture.',
    icon: Code,
  },
  {
    id: 4,
    title: 'Ship',
    description: 'CI/CD, monitoring, and continuous improvements. Launch with confidence.',
    icon: Rocket,
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-pynatic-bg overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-1 h-full bg-gradient-to-b from-transparent via-pynatic-lime/20 to-transparent transform -translate-y-1/2" />
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
            Our Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-pynatic-text mb-4">
            How we work
          </h2>
          <p className="text-lg text-pynatic-text-secondary">
            A simple roadmap from idea to production—transparent, iterative, and fast.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pynatic-lime/50 via-pynatic-lime/30 to-transparent origin-top hidden md:block"
          />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                  index !== steps.length - 1 ? 'lg:pb-16' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 top-0 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    className="w-16 h-16 rounded-full bg-pynatic-bg-secondary border border-pynatic-lime/50 flex items-center justify-center"
                  >
                    <span className="font-display text-xl font-bold text-pynatic-lime">
                      {step.id}
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <div
                  className={`lg:pr-20 ${
                    index % 2 === 1 ? 'lg:col-start-2 lg:pl-20 lg:pr-0' : ''
                  }`}
                >
                  <div className="flex items-start gap-4 lg:gap-6">
                    {/* Mobile Number */}
                    <div className="lg:hidden w-12 h-12 rounded-full bg-pynatic-bg-secondary border border-pynatic-lime/50 flex items-center justify-center flex-shrink-0">
                      <span className="font-display text-lg font-bold text-pynatic-lime">
                        {step.id}
                      </span>
                    </div>

                    <div className="glass-card rounded-2xl p-6 lg:p-8 flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-pynatic-lime/10 flex items-center justify-center">
                          <step.icon size={20} className="text-pynatic-lime" />
                        </div>
                        <h3 className="font-display text-xl lg:text-2xl font-bold text-pynatic-text">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-pynatic-text-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}