import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faDonate, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

const CTASection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  return (
    <section id="cta" className="py-20 text-center bg-light-gray" ref={sectionRef}>
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-3xl font-bold font-playfair"
        >
          Join the Math Education Movement
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 text-lg"
        >
          Empower the next generation with math confidence and problem-solving skills
        </motion.p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="#support"
            custom={0}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 font-semibold transition rounded btn bg-gold text-dark hover:bg-yellow-500"
          >
            <FontAwesomeIcon icon={faHandsHelping} className="mr-2" /> Partner With Us
          </motion.a>
          <motion.a
            href="#support"
            custom={1}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 font-semibold text-white transition rounded btn bg-green hover:bg-green-700"
          >
            <FontAwesomeIcon icon={faDonate} className="mr-2" /> Make a Donation
          </motion.a>
          <motion.a
            href="#"
            custom={2}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 font-semibold transition rounded btn border-dark text-dark hover:bg-dark hover:text-white"
          >
            <FontAwesomeIcon icon={faUserPlus} className="mr-2" /> Join Our Team
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;