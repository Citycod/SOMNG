import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

const testimonials = [
  {
    quote: "SomNG isn't just a name, it's a move. Really a great one, connected to SomNg birthed the start of a great thing for me on all grounds.",
    author: 'Adebayo',
    role: 'CEO MathGist, Nigeria',
    image: '/images/testi1.jpg',
    stars: 5,
    bg: 'bg-purple',
  },
  {
    quote: "It's been 3 years of learning under SomNG and I must confess that it's been one of my best decisions",
    author: 'Moji',
    role: 'Student, USA',
    image: '/images/testi2.jpg',
    stars: 4.5,
    bg: 'bg-gold',
  },
  {
    quote: "We used UThrive videos in our college when a strike happened. It kept us going.",
    author: 'Joel',
    role: 'Kafanchan',
    image: '/images/testi3.jpg',
    stars: 5,
    bg: 'bg-green',
  },
];

const Testimonials: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  return (
    <section id="testimonials" className="py-20" ref={sectionRef}>
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-3xl font-bold text-center font-playfair section-title"
        >
          Success Stories
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl"
            >
              <div className="flex items-start mb-4">
                <div className={`${testimonial.bg} text-white rounded-full p-2 mr-3 shrink-0`}>
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </div>
                <p className="italic text-gray-600">{testimonial.quote}</p>
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 mr-3 border-2 border-white rounded-full shadow-md"
                />
                <div>
                  <h6 className="font-bold">{testimonial.author}</h6>
                  <small className="text-gray-600">{testimonial.role}</small>
                  <div className="mt-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={
                          i < Math.floor(testimonial.stars)
                            ? faStar
                            : testimonial.stars % 1 !== 0 && i === Math.floor(testimonial.stars)
                            ? faStarHalfAlt
                            : faStar
                        }
                        className={i >= Math.ceil(testimonial.stars) ? 'text-gray-300' : 'text-yellow-500'}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;