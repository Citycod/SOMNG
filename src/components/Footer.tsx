import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faWhatsapp, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-12 text-white bg-dark">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center mb-4">
              <img src="/images/Schoolofmlogo.png" alt="Logo" className="h-12 mr-3" />
              <h3 className="text-xl font-bold font-playfair">School of Mathematics Nigeria</h3>
            </div>
            <p className="mb-4">Innovating math education across Africa through accessible, engaging, and effective learning solutions.</p>
            <div className="flex mb-4 space-x-3">
              {[faYoutube, faWhatsapp, faFacebook, faTwitter, faLinkedin].map((icon, i) => (
                <a key={i} href="#" className="flex items-center justify-center w-10 h-10 transition rounded-full bg-white/10 hover:bg-gold hover:text-dark">
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Lagos, Nigeria | Global Impact
            </p>
          </div>
          <div>
            <h5 className="mb-4 text-lg font-bold">Quick Links</h5>
            {['Home', 'About Us', 'Programs', 'Resources', 'Success Stories', 'Support Us'].map((link, i) => (
              <a key={i} href={`#${link.toLowerCase().replace(/\s+/g, '')}`} className="block mb-2 text-gray-300 transition hover:text-white hover:pl-2">{link}</a>
            ))}
          </div>
          <div>
            <h5 className="mb-4 text-lg font-bold">Programs</h5>
            {[
              'SomNg Digital Learning',
              'UThrive Initiative',
              'Currigami Studio',
              'Teacher Training',
              'Parent Workshops',
              'Community Math Circles',
            ].map((program, i) => (
              <a key={i} href="#" className="block mb-2 text-gray-300 transition hover:text-white hover:pl-2">{program}</a>
            ))}
          </div>
          <div>
            <h5 className="mb-4 text-lg font-bold">Contact Us</h5>
            <ul className="list-none">
              <li className="mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-400" />
                <a href="mailto:Somnigeria@gmail.com" className="text-gray-300 transition hover:text-white hover:pl-2">contact@schoolofmath.ng</a>
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-gray-400" />
                <a href="https://wa.me/2349014149124" className="text-gray-300 transition hover:text-white hover:pl-2">+234 901 414 9124 <br />+ 234 8132944172</a>
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2 text-gray-400" />
                <a href="tel:+2349014149124" className="text-gray-300 transition hover:text-white hover:pl-2">+234 901 414 9124</a>
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-400" /> Mon-Fri: 9AM - 5PM WAT
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm text-gray-400">&copy; 2025 School of Mathematics Nigeria. All rights reserved.</p>
          <a href="https://portfolio-neon-ten-34.vercel.app/"> Made by Uplix</a>
          <div className="flex mt-4 space-x-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((link, i) => (
              <a key={i} href="#" className="text-gray-400 transition hover:text-white">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
