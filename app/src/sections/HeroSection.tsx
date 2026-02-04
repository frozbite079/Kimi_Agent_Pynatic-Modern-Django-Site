import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';

export default function HeroSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  useEffect(() => {
    // GSAP animation for hero image
    if (heroImageRef.current) {
      gsap.fromTo(
        heroImageRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out', delay: 0.3 }
      );
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-pynatic-bg pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pynatic-lime/5 via-transparent to-transparent" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-pynatic-lime/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 -right-32 w-80 h-80 bg-pynatic-lime/5 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 section-padding min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-12 lg:py-0">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="order-2 lg:order-1"
          >
            {/* Micro label */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pynatic-lime/10 border border-pynatic-lime/20">
                <Sparkles size={14} className="text-pynatic-lime" />
                <span className="font-mono text-xs tracking-[0.15em] uppercase text-pynatic-lime">
                  IT Solutions Studio
                </span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-pynatic-text leading-[0.95] mb-6"
            >
              Build fast.
              <br />
              <span className="text-gradient">Ship bold.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-pynatic-text-secondary max-w-lg mb-8 leading-relaxed"
            >
              Web apps, desktop tools, and IoT systems—designed, built, and deployed end-to-end.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-pynatic-lime text-pynatic-bg rounded-full font-semibold transition-all duration-300 hover:bg-pynatic-lime-dark hover:shadow-glow"
              >
                Start a project
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-pynatic-text rounded-full font-medium transition-all duration-300 hover:border-pynatic-lime/50 hover:text-pynatic-lime"
              >
                See products
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-white/5 grid grid-cols-3 gap-8"
            >
              <div>
                <p className="font-display text-2xl lg:text-3xl font-bold text-pynatic-lime">12+</p>
                <p className="text-sm text-pynatic-text-secondary mt-1">Apps shipped</p>
              </div>
              <div>
                <p className="font-display text-2xl lg:text-3xl font-bold text-pynatic-lime">8+</p>
                <p className="text-sm text-pynatic-text-secondary mt-1">Enterprise clients</p>
              </div>
              <div>
                <p className="font-display text-2xl lg:text-3xl font-bold text-pynatic-lime">99.9%</p>
                <p className="text-sm text-pynatic-text-secondary mt-1">Uptime target</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <div className="order-1 lg:order-2 relative">
            <div
              ref={heroImageRef}
              className="relative aspect-square lg:aspect-[4/5] max-w-lg mx-auto lg:max-w-none"
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-pynatic-lime/20 rounded-3xl blur-[60px] transform scale-90" />
              
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=1000&fit=crop"
                  alt="Digital Innovation"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-pynatic-bg/80 via-transparent to-transparent" />
                
                {/* Floating card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-pynatic-lime/20 flex items-center justify-center">
                      <Sparkles size={24} className="text-pynatic-lime" />
                    </div>
                    <div>
                      <p className="font-semibold text-pynatic-text">AI-Powered Solutions</p>
                      <p className="text-sm text-pynatic-text-secondary">Transforming ideas into reality</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -right-4 w-20 h-20 border border-pynatic-lime/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-8 -left-8 w-32 h-32 border border-white/10 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}