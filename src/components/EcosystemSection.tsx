import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faTree, faBook, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const EcosystemSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="ecosystem" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.h2
          className="mb-16 text-4xl font-bold text-center text-gray-800 font-playfair"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Ecosystem
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* SomNg Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0 * 0.2 }}
            whileHover={{
              y: -10,
              boxShadow:
                '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
            }}
            className="relative p-8 overflow-hidden border-t-4 border-yellow-500 shadow-lg rounded-xl bg-gradient-to-br from-yellow-50 to-white"
          >
            <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 bg-yellow-500 rounded-full opacity-10"></div>

            <div className="relative z-10 flex items-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 0 * 0.2 + 0.2,
                }}
                whileHover={{ rotate: 10 }}
                className="flex items-center justify-center p-3 mr-4 bg-yellow-500 rounded-full"
              >
                <FontAwesomeIcon icon={faSchool} className="text-xl text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 font-playfair">SomNg</h3>
            </div>

            <p className="mb-6 text-gray-600">
              Our flagship program providing free digital math education to students
              across Africa through online platforms and community learning centers.
            </p>

            <div className="mb-8">
              {['Free video lessons', 'Interactive quizzes', 'Exam preparation'].map(
                (item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0 * 0.2 + 0.3 + idx * 0.1, duration: 0.4 }}
                  >
                    <div className="w-2 h-2 mr-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                )
              )}
            </div>

            <motion.a
              href="https://www.youtube.com/@SchoolOfMathematicsNigeria"
              className="inline-flex items-center font-medium border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white rounded-lg px-5 py-2.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore SomNg
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </motion.a>
          </motion.div>

          {/* UThrive Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1 * 0.2 }}
            whileHover={{
              y: -10,
              boxShadow:
                '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
            }}
            className="relative p-8 overflow-hidden border-t-4 shadow-lg rounded-xl bg-gradient-to-br from-emerald-50 to-white border-emerald-600"
          >
            <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 rounded-full opacity-10 bg-emerald-600"></div>

            <div className="relative z-10 flex items-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 1 * 0.2 + 0.2,
                }}
                whileHover={{ rotate: 10 }}
                className="flex items-center justify-center p-3 mr-4 rounded-full bg-emerald-600"
              >
                <FontAwesomeIcon icon={faTree} className="text-xl text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 font-playfair">UThrive</h3>
            </div>

            <p className="mb-6 text-gray-600">
              Our offline-first initiative bringing quality math education to underserved
              communities with limited internet access.
            </p>

            <div className="mb-8">
              {[
                'Solar-powered learning kits',
                'Community math circles',
                'Rural teacher training',
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1 * 0.2 + 0.3 + idx * 0.1, duration: 0.4 }}
                >
                  <div className="w-2 h-2 mr-3 rounded-full bg-emerald-600"></div>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://www.instagram.com/thrivebysomng?igsh=MXBzMTUyZ205YXM0NQ=="
              className="inline-flex items-center font-medium border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded-lg px-5 py-2.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn About UThrive
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </motion.a>
          </motion.div>

          {/* Currigami Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 2 * 0.2 }}
            whileHover={{
              y: -10,
              boxShadow:
                '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
            }}
            className="relative p-8 overflow-hidden border-t-4 shadow-lg rounded-xl bg-gradient-to-br from-violet-50 to-white border-violet-600"
          >
            <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 rounded-full opacity-10 bg-violet-600"></div>

            <div className="relative z-10 flex items-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 2 * 0.2 + 0.2,
                }}
                whileHover={{ rotate: 10 }}
                className="flex items-center justify-center p-3 mr-4 rounded-full bg-violet-600"
              >
                <FontAwesomeIcon icon={faBook} className="text-xl text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 font-playfair">Currigami</h3>
            </div>

            <p className="mb-6 text-gray-600">
              Our curriculum design studio creating customized learning solutions for
              schools, NGOs, and educational organizations.
            </p>

            <div className="mb-8">
              {[
                'Curriculum development',
                'Teacher training programs',
                'Educational consulting',
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 2 * 0.2 + 0.3 + idx * 0.1, duration: 0.4 }}
                >
                  <div className="w-2 h-2 mr-3 rounded-full bg-violet-600"></div>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://www.instagram.com/currigami?igsh=MWp6cGVldjQydG50Mw=="
              className="inline-flex items-center font-medium border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white rounded-lg px-5 py-2.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover Currigami
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
