import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { blogPosts, getAllCategories } from '../data/blogPosts';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', ...getAllCategories()];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

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
              Insights & Updates
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-pynatic-text mb-6">
              Blog
            </h1>
            <p className="text-lg text-pynatic-text-secondary">
              Insights, tutorials, and updates from the Pynatic team. Stay ahead with the latest in technology, AI, and software development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-pynatic-bg border-y border-white/5">
        <div className="section-padding">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-pynatic-lime text-pynatic-bg'
                    : 'bg-white/5 text-pynatic-text-secondary hover:bg-white/10 hover:text-pynatic-text'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 lg:py-32 bg-pynatic-bg">
        <div className="section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="glass-card rounded-3xl overflow-hidden transition-all duration-500 group-hover:border-pynatic-lime/30">
                    {/* Image */}
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-pynatic-bg-secondary/80 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-mono tracking-wider uppercase bg-pynatic-lime/20 text-pynatic-lime rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-pynatic-text-secondary mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-display text-xl font-bold text-pynatic-text mb-3 line-clamp-2 group-hover:text-pynatic-lime transition-colors">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-pynatic-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* Author & CTA */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-pynatic-lime/20 flex items-center justify-center">
                            <User size={14} className="text-pynatic-lime" />
                          </div>
                          <span className="text-sm text-pynatic-text-secondary">{post.author}</span>
                        </div>
                        <span className="flex items-center gap-1 text-pynatic-lime text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          Read more
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}