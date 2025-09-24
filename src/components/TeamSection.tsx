import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  alt: string;
  social: {
    linkedin: string;
    twitter: string;
    email: string;
  };
}

const TeamSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const teamMembers: TeamMember[] = [
    {
      name: "Rose Danjuma",
      role: "Founder & Executive Director",
      description: "",
      image: "/images/rose danjuma.jpg",
      alt: "Founder",
      social: {
        linkedin: "https://www.linkedin.com/in/rosedanjuma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "#",
        email: "somnigeria@gmail.com",
      }
    },
    {
      name: "Kyomnom Ephraim",
      role: "CTO",
      description: "",
      image: "/images/ephraim.jpeg",
      alt: "CTO",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      }
    },
    {
      name: "Aboluwarin Oluwatobiloba Rosemary",
      role: "Community Manager",
      description: "",
      image: "/images/rosemary.jpg",
      alt: "Community Manager",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.6
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full opacity-10 blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-200 rounded-full opacity-10 blur-xl"></div>
      </div>

      <div className="container relative px-4 mx-auto">
        <motion.h2 
          className="text-center mb-16 text-4xl font-bold font-playfair text-gray-900"
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Our Leadership Team
        </motion.h2>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-blue-200">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.alt}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                      {member.role}
                    </p>
                  </div>

                  {member.description && (
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm lg:text-base">
                      {member.description}
                    </p>
                  )}

                  {/* Social Links */}
                  <div className="flex space-x-3 pt-4 border-t border-gray-100">
                    <motion.a
                      href={member.social.linkedin}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full flex items-center justify-center transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin text-sm"></i>
                    </motion.a>
                    <motion.a
                      href={member.social.twitter}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full flex items-center justify-center transition-colors duration-200"
                      aria-label="Twitter"
                    >
                      <i className="fab fa-twitter text-sm"></i>
                    </motion.a>
                    <motion.a
                      href={member.social.email}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full flex items-center justify-center transition-colors duration-200"
                      aria-label="Email"
                    >
                      <i className="fas fa-envelope text-sm"></i>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      
      </div>
    </section>
  );
};

export default TeamSection;