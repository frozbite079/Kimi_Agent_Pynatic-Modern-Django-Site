import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Twitter, Linkedin, Facebook } from 'lucide-react';
import { getBlogPostBySlug, blogPosts } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Check out this article: ${post.title}`;
    
    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
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
      <section className="relative py-16 lg:py-24 bg-pynatic-bg overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-pynatic-bg via-transparent to-pynatic-bg" />
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back Link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-pynatic-text-secondary hover:text-pynatic-lime transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Back to blog
            </Link>

            {/* Category */}
            <span className="inline-block px-3 py-1 text-xs font-mono tracking-wider uppercase bg-pynatic-lime/20 text-pynatic-lime rounded-full mb-6">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-pynatic-text mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-pynatic-text-secondary">
              <span className="flex items-center gap-2">
                <User size={16} />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16 bg-pynatic-bg">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-[1fr,280px] gap-12">
              {/* Main Content */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="glass-card rounded-3xl p-8 lg:p-12">
                  <div className="prose prose-invert prose-lg max-w-none">
                    <ReactMarkdown
                      components={{
                        h1: ({ children }) => (
                          <h1 className="font-display text-3xl font-bold text-pynatic-text mt-12 mb-6">{children}</h1>
                        ),
                        h2: ({ children }) => (
                          <h2 className="font-display text-2xl font-bold text-pynatic-text mt-10 mb-4">{children}</h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="font-display text-xl font-bold text-pynatic-text mt-8 mb-3">{children}</h3>
                        ),
                        p: ({ children }) => (
                          <p className="text-pynatic-text-secondary leading-relaxed mb-6">{children}</p>
                        ),
                        ul: ({ children }) => (
                          <ul className="list-disc list-inside text-pynatic-text-secondary mb-6 space-y-2">{children}</ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal list-inside text-pynatic-text-secondary mb-6 space-y-2">{children}</ol>
                        ),
                        li: ({ children }) => (
                          <li className="text-pynatic-text-secondary">{children}</li>
                        ),
                        code: ({ children }) => (
                          <code className="bg-white/10 px-2 py-1 rounded text-sm font-mono text-pynatic-lime">{children}</code>
                        ),
                        pre: ({ children }) => (
                          <pre className="bg-pynatic-bg-secondary p-4 rounded-xl overflow-x-auto mb-6">{children}</pre>
                        ),
                        blockquote: ({ children }) => (
                          <blockquote className="border-l-4 border-pynatic-lime pl-6 italic text-pynatic-text-secondary my-6">{children}</blockquote>
                        ),
                        a: ({ children, href }) => (
                          <a href={href} className="text-pynatic-lime hover:underline">{children}</a>
                        ),
                      }}
                    >
                      {post.content}
                    </ReactMarkdown>
                  </div>

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-mono tracking-wider uppercase bg-white/5 text-pynatic-text-secondary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Share */}
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-4">
                      <span className="text-pynatic-text-secondary text-sm">Share this article:</span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleShare('twitter')}
                          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-pynatic-text-secondary hover:text-pynatic-lime hover:bg-pynatic-lime/10 transition-all"
                        >
                          <Twitter size={18} />
                        </button>
                        <button
                          onClick={() => handleShare('linkedin')}
                          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-pynatic-text-secondary hover:text-pynatic-lime hover:bg-pynatic-lime/10 transition-all"
                        >
                          <Linkedin size={18} />
                        </button>
                        <button
                          onClick={() => handleShare('facebook')}
                          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-pynatic-text-secondary hover:text-pynatic-lime hover:bg-pynatic-lime/10 transition-all"
                        >
                          <Facebook size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>

              {/* Sidebar */}
              <motion.aside
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                {/* Author Card */}
                <div className="glass-card rounded-3xl p-6">
                  <h3 className="font-display text-lg font-bold text-pynatic-text mb-4">About the Author</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-pynatic-lime/20 flex items-center justify-center">
                      <User size={24} className="text-pynatic-lime" />
                    </div>
                    <div>
                      <p className="font-semibold text-pynatic-text">{post.author}</p>
                      <p className="text-sm text-pynatic-text-secondary">Pynatic Team</p>
                    </div>
                  </div>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="glass-card rounded-3xl p-6">
                    <h3 className="font-display text-lg font-bold text-pynatic-text mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.id}
                          to={`/blog/${relatedPost.slug}`}
                          className="block group"
                        >
                          <div className="aspect-video rounded-xl overflow-hidden mb-3">
                            <img
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <h4 className="font-semibold text-pynatic-text group-hover:text-pynatic-lime transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-sm text-pynatic-text-secondary mt-1">{relatedPost.date}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Newsletter */}
                <div className="glass-card rounded-3xl p-6 bg-pynatic-lime/5 border-pynatic-lime/20">
                  <h3 className="font-display text-lg font-bold text-pynatic-text mb-2">Stay Updated</h3>
                  <p className="text-sm text-pynatic-text-secondary mb-4">
                    Get the latest articles delivered to your inbox.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-pynatic-text placeholder:text-pynatic-text-secondary/50 focus:outline-none focus:border-pynatic-lime/50"
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-3 bg-pynatic-lime text-pynatic-bg rounded-xl text-sm font-semibold hover:bg-pynatic-lime-dark transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </motion.aside>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}