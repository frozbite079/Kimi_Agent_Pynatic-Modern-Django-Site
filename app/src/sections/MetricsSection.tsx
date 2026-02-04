import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

interface MetricData {
  id: number;
  value: string;
  suffix: string;
  label: string;
}

const fallbackMetrics = [
  { id: 1, value: '12', suffix: '+', label: 'Apps shipped' },
  { id: 2, value: '8', suffix: '+', label: 'Enterprise clients' },
  { id: 3, value: '99.9', suffix: '%', label: 'Uptime target' },
];

const testimonials = [
  {
    id: 1,
    quote: "Pynatic turned our AI prototype into a production tool in six weeks. Their team's expertise and speed were impressive.",
    author: 'Priya K.',
    role: 'Product Lead',
    company: 'TechStart Inc.',
  },
  {
    id: 2,
    quote: "Reliable, fast, and surprisingly simple to work with. They understood our vision and delivered beyond expectations.",
    author: 'Daniel R.',
    role: 'CTO',
    company: 'DataFlow Systems',
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display text-4xl lg:text-5xl font-bold text-pynatic-lime">
      {value % 1 === 0 ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
}

function useMetrics() {
  const [metrics, setMetrics] = useState<MetricData[]>(fallbackMetrics);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/content/metrics/')
      .then(res => res.json())
      .then(data => {
        // Handle paginated response from Django REST Framework
        const results = data.results || data;
        if (Array.isArray(results) && results.length > 0) {
          setMetrics(results);
        }
      })
      .catch(() => {
        // Use fallback metrics on error
      });
  }, []);

  return metrics;
}

export default function MetricsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const metrics = useMetrics();

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-pynatic-bg overflow-hidden">
      <div className="relative z-10 section-padding">
        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-3 gap-8 mb-20"
        >
          {metrics.map((metric: MetricData, index: number) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <AnimatedNumber value={parseFloat(metric.value)} suffix={metric.suffix} />
              <p className="text-sm text-pynatic-text-secondary mt-2">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
              className="glass-card rounded-3xl p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-pynatic-lime/10 flex items-center justify-center">
                <Quote size={18} className="text-pynatic-lime" />
              </div>

              {/* Quote Text */}
              <p className="text-lg text-pynatic-text leading-relaxed mb-6 pr-12">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pynatic-lime/20 flex items-center justify-center">
                  <span className="font-display font-bold text-pynatic-lime">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-pynatic-text">{testimonial.author}</p>
                  <p className="text-sm text-pynatic-text-secondary">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}