import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

const projects = [
  {
    title: 'UThrive Initiative',
    badge: 'Featured Project',
    badgeStyle: 'bg-green',
    titleStyle: 'text-green',
    buttonStyle: 'border-green text-green hover:bg-green hover:text-white',
    image: '/public/images/thrive.jpeg',
    description: 'Bringing offline-first math education to underserved communities across Nigeria through solar-powered learning kits and community math circles.',
    progress: 45,
    goal: '₦1,000,000',
    link: 'https://www.instagram.com/thrivebysomng?igsh=MXBzMTUyZ205YXM0NQ=='
  },
  {
    title: 'Currigami Studio',
    badge: 'New Launch',
    badgeStyle: 'bg-purple',
    titleStyle: 'text-purple',
    buttonStyle: 'border-purple text-purple hover:bg-purple hover:text-white',
    image: '/public/images/currigami.png',
    description: 'Developing customized math curricula for schools and NGOs, with a focus on culturally relevant content and practical applications.',
    items: ['5 schools onboarded', '3 NGO partnerships', '200+ teachers trained'],
    link: 'https://www.instagram.com/currigami?igsh=MWp6cGVldjQydG50Mw=='
  },
];

const InnovationProjects: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const formatRaisedAmount = (goal: string, progress: number): string => {
    const goalAmount = parseInt(goal.replace(/[^\d]/g, ''));
    const raised = (goalAmount * progress) / 100;
    return `₦${raised.toLocaleString()} raised`;
  };

  return (
    <section id="innovation" className="py-20" ref={sectionRef}>
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-3xl font-bold text-center font-playfair text-gold"
        >
          Innovation Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -2 }}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-48 md:h-full"
                  />
                </div>

                <div className="p-6">
                  <span className={`inline-block ${project.badgeStyle} text-white px-3 py-1 rounded-full text-sm mb-3 font-medium`}>
                    {project.badge}
                  </span>

                  <h3 className={`text-xl font-playfair font-bold mb-3 ${project.titleStyle}`}>
                    {project.title}
                  </h3>

                  <p className="mb-4 text-sm text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {project.progress !== undefined ? (
                    <div className="mb-4">
                      <div className="relative h-2 mb-2 bg-gray-200 rounded-full">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${project.progress}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.3 }}
                          className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-purple to-gold"
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>{formatRaisedAmount(project.goal!, project.progress)}</span>
                        <span>Goal: {project.goal}</span>
                      </div>
                    </div>
                  ) : (
                    <ul className="mb-4">
                      {project.items?.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                          className="flex items-center mb-2 text-sm"
                        >
                          <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-purple text-xs" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  <motion.a
                    href={project.link || '#'}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.4 }}
                    className={`inline-block text-sm px-4 py-2 rounded border transition-colors duration-300 font-medium ${project.buttonStyle}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationProjects;