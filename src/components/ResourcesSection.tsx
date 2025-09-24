import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faCalculator, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const resources = [
  { icon: faFilePdf, title: 'WAEC/JAMB Pack', description: '10 years of past questions with solutions', buttonText: 'Download' },
  { icon: faCalculator, title: 'Formula Sheets', description: 'All essential formulas for secondary math', buttonText: 'Download' },
  { icon: faCalendarAlt, title: 'Study Plans', description: '30-day revision schedules for exams', buttonText: 'Download' },
];

const ResourcesSection: React.FC = () => {
  return (
    <section id="resources" className="py-20 text-white bg-gradient-to-r from-purple to-dark-purple">
      <div className="container px-4 mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4 text-3xl font-bold font-playfair"
        >
          Free Learning Resources
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8 text-lg"
        >
          Download our collection of past questions, revision plans, printable formulas, and study guides
        </motion.p>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="h-full p-6 bg-white rounded-lg shadow-md text-dark transition-shadow duration-300 hover:shadow-lg"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                viewport={{ once: true }}
                className="flex items-center justify-center w-16 h-16 p-4 mx-auto mb-4 text-white rounded-full bg-purple"
              >
                <FontAwesomeIcon icon={resource.icon} className="text-2xl" />
              </motion.div>
              
              <h4 className="mb-2 text-xl font-bold font-playfair">{resource.title}</h4>
              <p className="mb-4">{resource.description}</p>
              
              <motion.a 
                href="public/images/Study Pack (3).pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-4 py-2 transition rounded btn bg-gold text-dark hover:bg-yellow-500"
              >
                {resource.buttonText}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;