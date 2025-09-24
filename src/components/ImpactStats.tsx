import { motion } from "framer-motion";

const stats = [
  {
    number: "150,000+",
    text: "Learners reached across Nigeria & diaspora through our programs and content",
  },
  {
    number: "1,000+",
    text: "Students personally coached from WAEC to TEAS exam preparation",
  },
  {
    number: "5+",
    text: "Countries accessing our educational content and resources",
  },
];

const ImpactStats: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                y: -8,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ type: "spring", damping: 12, stiffness: 100 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative h-full p-8 overflow-hidden bg-white border-l-4 rounded-lg shadow-lg border-yellow-500 group"
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-24 h-24 -mt-6 -mr-6 transition-colors duration-300 rounded-full bg-yellow-500/10 group-hover:bg-yellow-500/20"></div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                viewport={{ once: true }}
                className="mb-4 text-4xl font-bold text-purple-600"
              >
                {stat.number}
              </motion.div>

              <p className="relative z-10 leading-relaxed text-gray-700">
                {stat.text}
              </p>

              {/* Animated underline effect */}
              <motion.div
                className="w-12 h-1 mt-4 rounded-full bg-yellow-500"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Section footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="italic font-medium text-purple-800">
            Transforming mathematics education across Africa and beyond
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStats;
