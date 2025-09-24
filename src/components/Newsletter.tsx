import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Newsletter: React.FC = () => {
  return (
    <section id="newsletter" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-3 text-3xl font-bold font-playfair">Stay Updated</h2>
          <p className="mb-6 text-lg">Subscribe to our newsletter for updates on new resources, projects, and opportunities</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
              required
            />
            <button className="px-6 py-3 transition rounded btn bg-gold text-dark hover:bg-yellow-500">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" /> Subscribe
            </button>
          </div>
          <small className="block mt-2 text-gray-600">We respect your privacy. Unsubscribe at any time.</small>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;