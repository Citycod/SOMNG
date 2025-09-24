import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faStar, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useRef } from 'react';

const HeroSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="home" className="py-9 bg-hero-pattern bg-repeat bg-[length:400px] relative overflow-hidden" ref={sectionRef}>
      <div className="container px-4 mx-auto">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold lg:text-5xl font-playfair text-gold"
            >
              We're Innovating How Africans Learn Mathematics
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-dark"
            >
              From WAEC and JAMB to TEAS and tech-driven futures, we blend clear instruction with innovative approaches to help learners excel, whether in Kaduna or California.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfqqYWMyn5pSHr2MRSuP8oihzPO-xE0e-ms_J5QtIm8rEdZSg/viewform?embedded=true"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -4 }}
                className="px-6 py-3 font-semibold transition transform rounded btn bg-gold text-dark hover:bg-yellow-500"
              >
                <FontAwesomeIcon icon={faDownload} className="mr-2" /> Free Resources
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@SchoolOfMathematicsNigeria"
                target="_blank"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ y: -4 }}
                className="px-6 py-3 font-semibold transition rounded btn border-dark text-dark hover:bg-dark hover:text-white"
              >
                <FontAwesomeIcon icon={faYoutube} className="mr-2" /> Watch Videos
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex items-center"
              >
                <div className="flex mr-3 -space-x-2">
                  <img src="/images/testi1.jpg" alt="Student" className="w-10 h-10 border-2 border-white rounded-full" />
                  <img src="/images/testi2.jpg" alt="Student" className="w-10 h-10 border-2 border-white rounded-full" />
                </div>
                <div>
                  <div className="text-yellow-500">
                    {[...Array(5)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} />)}
                  </div>
                  <small className="text-gray-600">Trusted by 150,000+ learners</small>
                </div>
              </motion.div>
              <motion.button
                onClick={() => window.open('https://chat.whatsapp.com/JMxiU78zTJPEVpkHTd5ViS?mode=r_c', '_blank')}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                whileHover={{ y: -4 }}
                className="relative z-10 px-6 py-3 font-semibold text-white transition transform rounded bg-green btn hover:bg-green-300"
                aria-label="Join WhatsApp Class"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2" /> Join WhatsApp Class
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden mt-8 lg:block lg:mt-0"
          >
            <motion.div
              initial={{ opacity: 0, rotate: -2 }}
              animate={isInView ? { opacity: 1, rotate: -2 } : { opacity: 0, rotate: -2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ rotate: 0 }}
              className="relative overflow-hidden transition duration-500 transform border-4 border-white rounded-lg shadow-2xl"
            >
              <iframe
                src="https://www.youtube.com/embed/I89tnFto3rw?autoplay=0&mute=1&controls=1&rel=0"
                title="Mathematics Tutorial Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-80"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="floating-badge absolute top-[-1rem] right-[-1rem] bg-gold text-dark px-4 py-2 rounded-full font-semibold shadow-lg"
            >
              <FontAwesomeIcon icon={faPlayCircle} className="mr-2" /> WAEC & JAMB Ready!
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="floating-badge absolute bottom-[-1rem] left-[-1rem] bg-purple text-white px-4 py-2 rounded-full font-semibold shadow-lg"
            >
              <FontAwesomeIcon icon={faPlayCircle} className="mr-2" /> ₦5,000 - ₦10,000
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
};

export default HeroSection;