import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Mail, Phone, Clock } from 'lucide-react';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-pynatic-bg overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop"
          alt="Office"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pynatic-bg via-pynatic-bg/80 to-pynatic-bg/60" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card rounded-3xl p-8 lg:p-12">
              <span className="font-mono text-xs tracking-[0.15em] uppercase text-pynatic-lime mb-6 block">
                Get in Touch
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-pynatic-text mb-6">
                Let's build together.
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pynatic-lime/10 flex items-center justify-center">
                    <Mail size={18} className="text-pynatic-lime" />
                  </div>
                  <a
                    href="mailto:pynatic079@gmail.com"
                    className="text-pynatic-text hover:text-pynatic-lime transition-colors"
                  >
                    pynatic079@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pynatic-lime/10 flex items-center justify-center">
                    <Phone size={18} className="text-pynatic-lime" />
                  </div>
                  <a
                    href="tel:+917984823759"
                    className="text-pynatic-text hover:text-pynatic-lime transition-colors"
                  >
                    +91 7984823759
                  </a>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pynatic-lime/10 flex items-center justify-center">
                    <Clock size={18} className="text-pynatic-lime" />
                  </div>
                  <span className="text-pynatic-text-secondary">
                    Mon–Sat, 9am–6pm IST
                  </span>
                </div>
              </div>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-pynatic-lime text-pynatic-bg rounded-full font-semibold transition-all duration-300 hover:bg-pynatic-lime-dark hover:shadow-glow"
              >
                Request a call
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-pynatic-text mb-4">
              Ready to transform your ideas?
            </h3>
            <p className="text-lg text-pynatic-text-secondary mb-8">
              Tell us what you're shipping. We'll reply within 24 hours with a clear plan 
              and timeline for your project.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <span className="text-sm text-pynatic-text-secondary">Free consultation</span>
              </div>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <span className="text-sm text-pynatic-text-secondary">24h response</span>
              </div>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <span className="text-sm text-pynatic-text-secondary">No commitment</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}