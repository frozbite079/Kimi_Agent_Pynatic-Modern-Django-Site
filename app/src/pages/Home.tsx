import { motion } from 'framer-motion';
import HeroSection from '../sections/HeroSection';
import SpotlightSection from '../sections/SpotlightSection';
import CapabilitiesSection from '../sections/CapabilitiesSection';
import ManifestoSection from '../sections/ManifestoSection';
import ProcessSection from '../sections/ProcessSection';
import ProductsSection from '../sections/ProductsSection';
import MetricsSection from '../sections/MetricsSection';
import CTASection from '../sections/CTASection';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <SpotlightSection />
      <CapabilitiesSection />
      <ManifestoSection />
      <ProcessSection />
      <ProductsSection />
      <MetricsSection />
      <CTASection />
    </motion.div>
  );
}