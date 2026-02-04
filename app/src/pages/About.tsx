import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Target, Lightbulb, Users, Zap } from 'lucide-react';
import omBadheImg from '../assets/team/om-badhe.jpeg';
import bhavanBadheImg from '../assets/team/bhavan-badhe.jpeg';

const team = [
  {
    name: 'Om Badhe',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 3+ years in tech innovation including AI/ML. Passionate about building products that make a difference.',
    image: omBadheImg,
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'om@pynatic.studio',
    },
  },
  {
    name: 'Bhavan Badhe',
    role: 'Co-Founder & CTO',
    bio: 'Technical expert specializing in hardware and scalable software architecture. Loves solving complex engineering challenges.',
    image: bhavanBadheImg,
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'bhavan@pynatic.studio',
    },
  },
];

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'We pay attention to every detail, ensuring high-quality deliverables that exceed expectations.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay ahead of the curve, adopting cutting-edge technologies to solve modern problems.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients, treating their success as our own.',
  },
  {
    icon: Zap,
    title: 'Speed',
    description: 'We believe in rapid iteration and quick delivery without compromising quality.',
  },
];

const milestones = [
  { year: '2022', event: 'Pynatic founded' },
  { year: '2023', event: 'First enterprise client' },
  { year: '2024', event: 'Launched AI/ML division' },
  { year: '2025', event: '12+ apps shipped' },
];

export default function About() {
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-mono text-xs tracking-[0.15em] uppercase text-pynatic-lime mb-4 block">
                About Us
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-pynatic-text mb-6">
                Building the future,{' '}
                <span className="text-gradient">one product at a time.</span>
              </h1>
              <p className="text-lg text-pynatic-text-secondary leading-relaxed">
                At Pynatic, we are passionate about leveraging technology to solve complex problems
                and drive innovation. Founded by two visionary entrepreneurs, our company specializes
                in delivering comprehensive IT solutions that empower businesses to thrive in the digital age.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                  alt="Pynatic Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-6">
                <p className="font-display text-3xl font-bold text-pynatic-lime">12+</p>
                <p className="text-sm text-pynatic-text-secondary">Projects delivered</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-pynatic-bg">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs tracking-[0.15em] uppercase text-pynatic-lime mb-4 block">
              Our Principles
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-pynatic-text">
              What drives us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-card rounded-3xl p-8 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-pynatic-lime/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon size={28} className="text-pynatic-lime" />
                </div>
                <h3 className="font-display text-xl font-bold text-pynatic-text mb-3">
                  {value.title}
                </h3>
                <p className="text-pynatic-text-secondary text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-pynatic-bg">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs tracking-[0.15em] uppercase text-pynatic-lime mb-4 block">
              Our Journey
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-pynatic-text">
              Milestones
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-center gap-8 mb-8 last:mb-0"
              >
                <div className="w-24 flex-shrink-0">
                  <span className="font-display text-2xl font-bold text-pynatic-lime">
                    {milestone.year}
                  </span>
                </div>
                <div className="w-px h-12 bg-pynatic-lime/30" />
                <div className="flex-1 glass-card rounded-2xl p-4">
                  <p className="text-pynatic-text">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32 bg-pynatic-bg">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs tracking-[0.15em] uppercase text-pynatic-lime mb-4 block">
              The People
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-pynatic-text">
              Meet the team
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="glass-card rounded-3xl overflow-hidden"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pynatic-bg-secondary to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-xl font-bold text-pynatic-text mb-1">
                    {member.name}
                  </h3>
                  <p className="text-pynatic-lime text-sm mb-4">{member.role}</p>
                  <p className="text-pynatic-text-secondary text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-pynatic-text-secondary hover:text-pynatic-lime hover:bg-pynatic-lime/10 transition-all"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-pynatic-text-secondary hover:text-pynatic-lime hover:bg-pynatic-lime/10 transition-all"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-pynatic-text-secondary hover:text-pynatic-lime hover:bg-pynatic-lime/10 transition-all"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}