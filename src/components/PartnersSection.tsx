import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const partners = [
  '/images/brand1.jpg',
  '/images/brand2-removebg-preview.png',
  '/images/brand3-removebg-preview.png',
  '/images/brand4-removebg-preview.png',
  '/images/brand5-removebg-preview.png',
];

const PartnersSection: React.FC = () => {
  const [sectionRef, sectionInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section 
      id="partners" 
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-playfair text-gray-900 mb-4">
            Trusted By Leading Organizations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Collaborating with industry leaders to make math accessible worldwide through innovative solutions
          </p>
        </motion.div>

        {/* Marquee Section - Continuous Scroll */}
        <div className="relative overflow-hidden mb-16">
          <motion.div
            className="flex space-x-12"
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...partners, ...partners, ...partners].map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img 
                  src={logo} 
                  alt={`Partner Logo ${index + 1}`} 
                  className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110"
                />
              </div>
            ))}
          </motion.div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>

       


      </div>
    </section>
  );
};

export default PartnersSection;