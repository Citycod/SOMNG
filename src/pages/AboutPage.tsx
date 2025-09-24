/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaGraduationCap, FaChartLine, FaLightbulb, FaHandHoldingHeart } from 'react-icons/fa';


const missionStatements = [
  {
    title: 'Our Mission',
    description: 'To help students understand and enjoy math by teaching it through content, community, and creative learning, eaching 1 million students by 2027.',
    icon: FaRocket,
    color: 'purple-500'
  },
  {
    title: 'Our Vision',
    description: 'To become Africa’s most trusted and innovative math learning platform ',
    icon: FaChartLine,
    color: 'green-500'
  }
];

const values = [
  { icon: FaLightbulb, title: 'Innovation', description: 'Pioneering new approaches to math education' },
  { icon: FaUsers, title: 'Community', description: 'Building supportive learning ecosystems' },
  { icon: FaGraduationCap, title: 'Excellence', description: 'Maintaining highest educational standards' },
  { icon: FaHandHoldingHeart, title: 'Accessibility', description: 'Reaching every learner, everywhere' }
];

const stats = [
  { number: '150K+', label: 'Students Empowered', increment: 150 },
  { number: '5+', label: 'African Countries', increment: 5 },
  { number: '1K+', label: 'Teachers Trained', increment: 1000 },
  { number: '94%', label: 'Success Rate', increment: 94 }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-20 px-4 md:px-8">
      {/* Background Elements */}

      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-purple rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-4 mb-6 px-6 py-3 bg-white rounded-full shadow-lg border border-gold">
            <img
              src="/images/Schoolofmlogo.png"
              alt="School of Mathematics Nigeria Logo"
              className="w-12 h-12 rounded-full object-cover border-2 border-black"
            />
            <span className="text-2xl font-bold bg-purple bg-clip-text text-transparent font-playfair">
              About Our Mission
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
            <span className="bg-gradient-to-r from-purple via-gold to-purple bg-clip-text text-transparent">
              Transforming
            </span>
            <br />
            <span className="text-gray-800">Math Education</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The School of Mathematics in Nigeria is a learning innovation brand that makes math accessible, inclusive, and exciting, both online and offline.
          </p>
          
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {missionStatements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${item.color} p-8 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl h-full`}>
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                    <item.icon className="text-3xl text-gold" />
                  </div>
                  <h3 className="text-3xl font-bold text-gold ml-4 font-playfair">{item.title}</h3>
                </div>
                <p className="text-lg text-black/90 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 transform transition-all duration-300 hover:scale-110 hover:shadow-xl">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base font-semibold text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-playfair">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our mission and shape our impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
                  <div className="p-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl w-fit mb-4">
                    <value.icon className="text-2xl text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
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
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-purple">Our Journey</h2>
              <p className="text-lg mb-6 opacity-90 text-black">
                From a single classroom in 2021 to impacting thousands across Africa, our journey 
                has been fueled by a passion for mathematical excellence and educational equity.
              </p>
              <div className="space-y-4 text-black">
                {[
                  { year: '2021', event: 'Founded with a vision to transform math education' },
                  { year: '2022', event: 'Expanded to 5 African countries' },
                  { year: '2023', event: 'Reached 150,000+ learners milestone' },
                  { year: '2024', event: 'Launched AI-powered learning platform' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4"></div>
                    <span className="font-semibold mr-2">{item.year}:</span>
                    <span className="opacity-90">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/math class.jpg"
                alt="Students celebrating mathematical success"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-playfair">
            Ready to Transform Math Education?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of educators, students, and partners who are already part of our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Join Our Mission
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-2xl font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-purple-50">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>

      
    </section>
  );
};

export default AboutSection;