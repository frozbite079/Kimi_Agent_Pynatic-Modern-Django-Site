import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_t7i1q1e';
const EMAILJS_TEMPLATE_ID = 'template_nmqrj2q';
const EMAILJS_PUBLIC_KEY = 'KuWrAJTqnJ9zIXzxE';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'pynatic079@gmail.com',
    href: 'mailto:pynatic079@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7984823759',
    href: 'tel:+917984823759',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Shiv Smruti Bhawan, Dabhoi, Gujarat 391110',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon - Sat: 9:00 AM - 6:00 PM IST',
    href: '#',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error('Failed to send email:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Get in Touch
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-pynatic-text mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-pynatic-text-secondary">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32 bg-pynatic-bg">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-pynatic-text mb-6">
                Let's start a conversation
              </h2>
              <p className="text-pynatic-text-secondary mb-12 leading-relaxed">
                Whether you have a question about our services, pricing, need a demo, or anything else,
                our team is ready to answer all your questions.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-pynatic-lime/10 flex items-center justify-center flex-shrink-0 group-hover:bg-pynatic-lime/20 transition-colors">
                      <item.icon size={20} className="text-pynatic-lime" />
                    </div>
                    <div>
                      <p className="text-sm text-pynatic-text-secondary mb-1">{item.label}</p>
                      <p className="text-pynatic-text group-hover:text-pynatic-lime transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 aspect-video rounded-3xl overflow-hidden bg-pynatic-bg-secondary border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.0123456789012!2d73.41234567890123!3d22.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA3JzI0LjQiTiA3M8KwMjQnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pynatic Location"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-card rounded-3xl p-8 lg:p-12">
                <h3 className="font-display text-xl font-bold text-pynatic-text mb-6">
                  Send us a message
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-pynatic-lime/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-pynatic-lime" />
                    </div>
                    <h4 className="font-display text-xl font-bold text-pynatic-text mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-pynatic-text-secondary">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm text-pynatic-text-secondary mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-pynatic-text placeholder:text-pynatic-text-secondary/50 focus:outline-none focus:border-pynatic-lime/50 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm text-pynatic-text-secondary mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-pynatic-text placeholder:text-pynatic-text-secondary/50 focus:outline-none focus:border-pynatic-lime/50 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm text-pynatic-text-secondary mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-pynatic-text focus:outline-none focus:border-pynatic-lime/50 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-pynatic-bg-secondary">Select a subject</option>
                        <option value="general" className="bg-pynatic-bg-secondary">General Inquiry</option>
                        <option value="project" className="bg-pynatic-bg-secondary">Project Discussion</option>
                        <option value="quote" className="bg-pynatic-bg-secondary">Request a Quote</option>
                        <option value="support" className="bg-pynatic-bg-secondary">Technical Support</option>
                        <option value="partnership" className="bg-pynatic-bg-secondary">Partnership</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm text-pynatic-text-secondary mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-pynatic-text placeholder:text-pynatic-text-secondary/50 focus:outline-none focus:border-pynatic-lime/50 transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    {error && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-pynatic-lime text-pynatic-bg rounded-xl font-semibold transition-all duration-300 hover:bg-pynatic-lime-dark hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}