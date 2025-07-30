import Header from "components/Header";
import Hero from "components/Hero";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Customers from "components/Customers";
import Image from "next/image";
import Accordion from "components/Accordion";
import Reviews from "components/Reviews";
import Contact from "components/Contact";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <Section
          leftHalf={
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Online Coaching Use Case
              </h2>
              <p className="text-xl font-light mb-6">
                Whether you're a mindset coach, fitness trainer, or business strategist—TechNova delivers leads looking for results. We target users based on interests, pain points, and behaviors, filtering for your niche before you ever pick up the phone. You'll get:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-black dark:bg-white rounded-full mt-3 mr-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">People actively searching for coaching programs.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-black dark:bg-white rounded-full mt-3 mr-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">Profiles that meet your income, location, or commitment criteria.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-black dark:bg-white rounded-full mt-3 mr-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">Clients ready to invest in themselves—and in you.</p>
                </div>
              </div>
            </>
          }
          rightHalf={
            <Image src={"/case.png"} alt="use-case" width={500} height={100} className="w-3/4 h-auto" />
          }
        />
        <Customers />
        <Section
          leftHalf={<Accordion />}
          rightHalf={
            <div className="flex flex-col justify-end">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Still have questions?
              </h2>
              <p className="text-xl font-light">
                We're here to help. Check out our FAQ or contact us directly.
              </p>
            </div>
          }
        />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
