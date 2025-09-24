import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUniversity, faCheckCircle, faCopy, faReceipt, faEnvelope, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const DonationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyBankDetails = () => {
    const details = `Bank Name: UBA\nAccount Name: School of Mathematics Nigeria LTD\nAccount Number: 1026471283\nType: Business Account`;
    navigator.clipboard.writeText(details);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="support" className="py-20 bg-light-gray">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold font-playfair">Sponsor a Math Star!</h2>
          <p className="text-lg">Your support helps us reach more learners across Africa and beyond</p>
          <div className="max-w-xl mx-auto mt-6">
            <div className="flex justify-between mb-2 text-sm">
              <span>₦350,000 raised</span>
              <span>Goal: ₦1,000,000</span>
            </div>
            <div className="relative h-3 bg-gray-200 rounded-full">
              <div className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-purple to-gold animate-pulse" style={{ width: '35%' }} />
            </div>
            <small className="block mt-2 text-gray-600">Funding 1000 math kits for rural students</small>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 transition-all bg-white border-2 border-transparent rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 hover:border-gold"
          >
            <FontAwesomeIcon icon={faHeart} className="mb-4 text-4xl text-purple" />
            <h3 className="mb-4 text-xl font-bold font-playfair">Quick Donation</h3>
            <p className="mb-4">Make an instant impact with these amounts:</p>
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <a href="https://wa.me/2349014149124?text=Hello!%20I%20want%20to%20donate%20₦1,000%20to%20support%20math%20education" target="_blank" className="px-4 py-2 rounded btn border-purple text-purple hover:bg-purple hover:text-white">
                ₦1,000
              </a>
              <a href="https://wa.me/2349014149124?text=Hello!%20I%20want%20to%20donate%20₦5,000%20to%20support%20math%20education" target="_blank" className="px-4 py-2 rounded btn bg-gold text-dark hover:bg-yellow-500">
                ₦5,000
              </a>
              <a href="https://wa.me/2349014149124?text=Hello!%20I%20want%20to%20donate%20₦10,000%20to%20support%20math%20education" target="_blank" className="px-4 py-2 rounded btn border-green text-green hover:bg-green hover:text-white">
                ₦10,000
              </a>
            </div>
            <div className="p-2 text-sm bg-blue-100 rounded text-dark">
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              <strong>Instant Support:</strong> Chat with us on WhatsApp
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 transition-all bg-white border-2 border-transparent rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 hover:border-gold"
          >
            <FontAwesomeIcon icon={faUniversity} className="mb-4 text-4xl text-gold" />
            <h3 className="mb-4 text-xl font-bold font-playfair">Bank Transfer</h3>
            <div className="p-3 mb-4 text-left bg-white rounded">
              <p className="mb-1"><strong>Bank Name:</strong> UBA</p>
              <p className="mb-1"><strong>Account Name:</strong> School of Mathematics Nigeria LTD</p>
              <p className="mb-1"><strong>Account Number:</strong> 1026471283</p>
              <p className="mb-0"><strong>Type:</strong> Business Account</p>
            </div>
            <button onClick={copyBankDetails} className="w-full px-4 py-2 text-white transition rounded btn bg-green hover:bg-green-700">
              <FontAwesomeIcon icon={faCopy} className="mr-2" /> Copy Account Details
            </button>
            {copied && (
              <div className="mt-2 text-sm text-green">
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2" /> Copied to clipboard!
              </div>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 text-white rounded-lg shadow-md bg-purple"
          >
            <h3 className="mb-4 text-xl font-bold font-playfair">Your Support Matters</h3>
            <ul className="mb-4 list-none">
              {[
                '₦5,000 sponsors math kits for 2 students',
                '₦10,000 funds a teacher training session',
                '₦50,000 supports our free YouTube content',
                '₦100,000 establishes a community math circle',
              ].map((item, i) => (
                <li key={i} className="flex items-start mb-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="mt-1 mr-2 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-3 bg-white rounded text-purple">
              <strong>All donations receive:</strong>
              <div className="mt-2 text-sm">
                <p><FontAwesomeIcon icon={faReceipt} className="mr-2" />Tax-deductible receipt</p>
                <p><FontAwesomeIcon icon={faEnvelope} className="mr-2" />Quarterly impact report</p>
                <p><FontAwesomeIcon icon={faCertificate} className="mr-2" />Recognition certificate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;