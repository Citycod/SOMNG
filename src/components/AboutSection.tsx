import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaGraduationCap, FaChartLine, FaLightbulb, FaHandHoldingHeart, FaSeedling, FaGlobeAfrica } from 'react-icons/fa';

const missionStatements = [
  {
    title: 'Our Mission',
    description: 'To help students understand and enjoy math by teaching it through content, community, and creative learning, reaching 1 million students by 2027.',
    icon: FaRocket,
    gradient: 'from-purple to-gold'
  },
  {
    title: 'Our Vision',
    description: 'To become Africa\'s most trusted and innovative math learning platform',
    icon: FaChartLine,
    gradient: 'from-green to-purple'
  }
];

const values = [
  { icon: FaLightbulb, title: 'Innovation', description: 'Pioneering new approaches to math education' },
  { icon: FaUsers, title: 'Community', description: 'Building supportive learning ecosystems' },
  { icon: FaGraduationCap, title: 'Excellence', description: 'Maintaining highest educational standards' },
  { icon: FaHandHoldingHeart, title: 'Accessibility', description: 'Reaching every learner, everywhere' },
  { icon: FaSeedling, title: 'Confidence', description: 'Building mathematical confidence in students' },
  { icon: FaGlobeAfrica, title: 'Impact', description: 'Driving educational transformation across Africa' }
];

const stats = [
  { number: '150K+', label: 'Students Empowered', color: 'bg-gradient-to-r from-purple' },
  { number: '5+', label: 'African Countries', color: 'bg-gradient-to-r from-gold to-yellow-500' },
  { number: '1K+', label: 'Teachers Trained', color: 'bg-gradient-to-r from-green' },
  { number: '94%', label: 'Success Rate', color: 'bg-gradient-to-r from-purple to-gold' }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative overflow-hidden py-12 px-4 md:px-8">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-purple rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-white rounded-full shadow-lg border border-gold">
            <img
              src="/images/Schoolofmlogo.png"
              alt="School of Mathematics Nigeria Logo"
              className="w-8 h-8 rounded-full object-cover border-2 border-gold"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-purple to-gold bg-clip-text text-transparent font-playfair">
              Our Story
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">
            <span className="bg-gradient-to-r from-purple via-gold to-green-600 bg-clip-text text-transparent">
              Transforming
            </span>
            <br />
            <span className="text-gray-800">Math Education</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The School of Mathematics in Nigeria is a learning innovation brand that makes math accessible, inclusive, and exciting, both online and offline.
          </p>
        </motion.div>

        {/* Founder's Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-purple-100">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-purple-600">
                  From a <span className="text-gold">Whiteboard</span> to a Movement
                </h2>
                <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                  <p>
                    <strong>School of Mathematics, Nigeria Ltd</strong> was born out of a whiteboard, a marker, and one woman's mission: to make math simple, relatable, and joyful.
                  </p>
                  <p>
                    Started on <strong>April 21, 2021</strong>, by <strong>Rose Danjuma Uwanassara</strong>, the platform aims to become Africa's leading destination for mathematics learning, resources, and innovation, from WAEC prep to global partnerships.
                  </p>
                  <p className="text-lg font-semibold text-purple-600 border-l-4 border-gold pl-3 py-1 bg-purple-50 rounded-r">
                    We don't just teach math, we teach confidence, we build communities, and we prepare learners for a tech-driven future where numeracy is power.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/rose danjuma.jpg"
                    alt="Rose Danjuma Uwanassara - Founder of School of Mathematics Nigeria"
                    className="w-full h-48 md:h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-gradient-to-r from-gold to-yellow-400 text-purple-900 px-3 py-1 rounded text-center font-bold text-sm">
                      Rose Danjuma Uwanassara - Founder
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {missionStatements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${item.gradient} p-6 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl h-full relative overflow-hidden`}>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <item.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-3 font-playfair">{item.title}</h3>
                </div>
                <p className="text-base text-white/90 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`${stat.color} rounded-xl p-4 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden`}>
                  <div className="relative z-10 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-lg">
                      {stat.number}
                    </div>
                    <div className="text-xs font-semibold text-white/90 drop-shadow-md">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 font-playfair">
              Our <span className="bg-gradient-to-r from-purple to-gold bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our mission and shape our impact across Africa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-full">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg h-full">
                  <div className="p-2 bg-gradient-to-br from-purple to-gold rounded-full w-fit mb-3">
                    <value.icon className="text-xl text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Story Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-2xl p-6 md:p-8 text-white mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-black">
                Our <span className="text-gold">Journey</span>
              </h2>
              <p className="text-purple mb-6 opacity-90">
                From that first whiteboard session to impacting thousands across Africa, our journey 
                has been fueled by a passion for mathematical excellence and educational equity.
              </p>
              
              <div className="space-y-4 text-black">
                {[
                  { year: '2021', event: 'Founded by Rose Danjuma Uwanassara with a vision to transform math education', color: 'border-purple' },
                  { year: '2022', event: 'Expanded to 5 African countries with digital learning platforms', color: 'border-gold' },
                  { year: '2023', event: 'Reached 150,000+ learners milestone across the continent', color: 'border-green' },
                  { year: '2024', event: 'Launched innovative AI-powered learning solutions', color: 'border-purple' },
                  { year: '2027', event: 'Target: Reach 1 million students across Africa', color: 'border-gold' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex items-start"
                  >
                    <div className="w-3 h-3 bg-gold rounded-full mr-3 mt-1 flex-shrink-0"></div>
                    <div className={`border-l-2 ${item.color} pl-3 pb-4 ${index === 4 ? 'pb-0' : ''}`}>
                      <span className="font-bold text-gold text-base">{item.year}:</span>
                      <span className="opacity-90 ml-1 text-sm">{item.event}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/math class.jpg"
                  alt="Students engaged in mathematics learning"
                  className="w-full h-48 md:h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-gradient-to-r from-gold to-yellow-400 text-purple-900 px-3 py-1 rounded text-center font-bold text-sm">
                    Building Mathematical Confidence Across Africa
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;