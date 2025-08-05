"use client";

import Link from "next/link";
import { FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaComments } from "react-icons/fa";

const Contact: React.FC = () => {
  const handleContactClick = () => {
    console.log("Button clicked!");
    
    // WhatsApp with predefined message
    const phoneNumber = "+19542144625"; // Replace with your actual phone number
    const message = encodeURIComponent(`Hi TechNova team! 👋

I'm interested in your lead generation services for my coaching business.

My details:
• Coaching niche: 
• Current client count: 
• Monthly revenue goal: 

I'd like to learn more about your customized packages.

Thanks!`);
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="container mx-auto py-24 px-4 md:px-6" id="contact">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 order-1 p-4 flex justify-center md:justify-start items-center">
          <div className="text-center md:text-left space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h2>
            <div className="space-y-4 text-left">
              <div className="flex items-center space-x-3">
                 <FaPhone className="text-xl text-black dark:text-white" />
                 <div>
                   <p className="text-lg font-medium text-gray-900 dark:text-white">Phone</p>
                   <p className="text-gray-600 dark:text-gray-300">+1 (954) 214-4625</p>
                 </div>
               </div>
               <div className="flex items-center space-x-3">
                 <FaEnvelope className="text-xl text-black dark:text-white" />
                 <div>
                   <p className="text-lg font-medium text-gray-900 dark:text-white">Email</p>
                   <p className="text-gray-600 dark:text-gray-300">technovamiami@gmail.com</p>
                 </div>
               </div>
               <div className="flex items-start space-x-3">
                 <FaMapMarkerAlt className="text-xl text-black dark:text-white mt-1" />
                 <div>
                   <p className="text-lg font-medium text-gray-900 dark:text-white">Address</p>
                   <p className="text-gray-600 dark:text-gray-300">150 South Pine Island Road<br />Suite 300
                   <br />Plantation, FL 33324</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 order-2 flex justify-center md:justify-end">
          <div className="flex flex-col justify-center w-full max-w-md">
            <h3 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
              Ready to Scale?
            </h3>
            <p className="text-xl text-gray-800 dark:text-gray-300 mb-6 font-light">
              Let's talk about how we can help you grow your coaching business.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">👉</span>
                <span className="text-lg text-gray-700 dark:text-gray-300">Get your customized lead generation plan.</span>
              </div>
            </div>
            <button
               onClick={handleContactClick}
               type="button"
               className="inline-flex items-center space-x-2 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-200 cursor-pointer"
            >
              <FaComments className="text-lg" />
              <span>Contact Us</span>
              <FaArrowRight className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
