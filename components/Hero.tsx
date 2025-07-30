"use client";

export default function Hero() {
  return (
    <section className="text-center my-32 mx-4 sm:mx-8 md:mx-16 lg:mx-24">
      <h1 className="font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl dark:text-white mb-6">
        Qualified Leads for Coaches Who Want to Scale Fast
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 font-light">
        We connect online coaches with premium, pre-qualified leads that convert. Let us fill your pipeline while you focus on delivering transformation.
      </p>
      <div className="flex justify-center space-x-6">
        <button
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }
          }}
          className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
        >
          Let's Talk
        </button>
      </div>
    </section>
  );
}
