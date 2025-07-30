import React from "react";
import FeatureCard from "./FeatureCard";
import { FaUsers, FaCalendarAlt, FaFilter, FaBullseye, FaUserCheck, FaGlobe } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: FaUsers,
      title: "Hyper-Targeted Lead Generation",
      description: "Connect with prospects actively seeking coaching in your specific niche with our intelligent matching system.",
    },
    {
      icon: FaCalendarAlt,
      title: "Lead Appointment Booking",
      description: "Seamless calendar integration with pre-scheduled calls that fit your schedule perfectly.",
    },
    {
      icon: FaFilter,
      title: "AI-Enhanced Filtering",
      description: "Advanced AI algorithms ensure only high-intent leads that perfectly match your ideal customer profile reach you.",
    },
    {
      icon: FaBullseye,
      title: "Niche-Specific Funnels",
      description: "Custom-built conversion funnels optimized for health, mindset, business, and fitness coaching niches.",
    },
    {
      icon: FaUserCheck,
      title: "Identity Verified Leads",
      description: "Every lead is verified with real contact information - no more ghosting or fake prospects.",
    },
    {
      icon: FaGlobe,
      title: "Web Presence",
      description: "Professional, conversion-optimized web pages that showcase your expertise and convert visitors into clients.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">Features</h2>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 font-light">
            Highlight cool features of your app using the beautifully designed custom cards with icons. You can use any
            icon you want.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
