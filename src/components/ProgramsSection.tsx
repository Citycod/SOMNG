import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faChalkboardTeacher,
  faHome,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const programs = [
  {
    icon: faUserGraduate,
    title: "Student Courses",
    description:
      "Comprehensive self-paced lessons covering all levels from primary to university entrance exams",
    items: ["WAEC/JAMB preparation", "TEAS exam coaching", "STEM foundation courses"],
    buttonText: "Explore Courses",
    buttonStyle: "bg-purple text-white hover:bg-dark-purple",
    border: "border-purple",
    accent: "bg-purple/10",
    delay: 0.1,
  },
  {
    icon: faChalkboardTeacher,
    title: "Teacher Toolkit",
    description: "Professional development and classroom resources for educators",
    items: ["Lesson plans & activities", "Pedagogy training", "Classroom management"],
    buttonText: "Coming Soon",
    buttonStyle: "bg-gold text-dark hover:bg-dark-gold",
    border: "border-gold",
    accent: "bg-gold/10",
    delay: 0.2,
  },
  {
    icon: faHome,
    title: "Parent Guides",
    description: "Tools to support your child's math journey at home",
    items: ["Homework help strategies", "Growth mindset resources", "STEM career guidance"],
    buttonText: "Coming Soon",
    buttonStyle: "bg-green text-white hover:bg-dark-green",
    border: "border-green",
    accent: "bg-green/10",
    delay: 0.3,
  },
];

const ProgramsSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="programs"
      className="py-20 bg-gradient-to-b from-white to-light-gray/30"
      ref={sectionRef}
    >
      <div className="container px-4 mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-4xl font-bold text-center font-playfair text-purple"
        >
          Our Learning Paths
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 100,
                delay: program.delay,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow:
                  "0 20px 25px -5px rgba(0,0,0,0.15), 0 10px 10px -5px rgba(0,0,0,0.08)",
              }}
              className={`relative p-8 rounded-2xl shadow-lg border-t-4 ${program.border} flex flex-col h-full overflow-hidden group`}
            >
              {/* Background accent */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full ${program.accent} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
              ></div>

              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.4 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative z-10 flex items-center justify-center w-16 h-16 p-3 mb-6 bg-white shadow-md rounded-2xl"
              >
                <FontAwesomeIcon icon={program.icon} className="text-3xl text-purple" />
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="relative z-10 mb-4 text-2xl font-bold font-playfair text-dark"
              >
                {program.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative z-10 flex-grow mb-6 text-gray-700"
              >
                {program.description}
              </motion.p>

              {/* Items list */}
              <ul className="relative z-10 mb-6">
                {program.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.1 + 0.6, duration: 0.4 }}
                    className="flex items-start mb-3"
                  >
                    <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 rounded-full bg-gold"></span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Button */}
              <motion.a
                href="https://www.youtube.com/@SchoolOfMathematicsNigeria"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className={`${program.buttonStyle} px-6 py-3 rounded-xl font-semibold flex items-center justify-between mt-auto relative z-10`}
              >
                {program.buttonText}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
