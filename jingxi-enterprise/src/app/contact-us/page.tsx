"use client";
import { motion } from "motion/react";

export default function ContactUsPage() {
  return (
    <main className="flex flex-col flex-grow bg-teal-50 h-auto lg:min-h-[calc(100vh-200px)] w-full">
      <section className="flex h-auto lg:h-[calc(100vh-200px)] w-full">
        {/* Left Side */}
        <div className="flex-none w-1/4 lg:w-2/5 bg-black bg-opacity-90 flex flex-col items-start justify-center text-left text-white lg:pl-28 p-8">
          <div className="hidden lg:block">
            <h1 className="lg:text-6xl xl:text-8xl font-bold mb-4">CONTACT</h1>
            <h1 className="lg:text-6xl xl:text-8xl  font-bold mb-4">US</h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:hidden"
          >
            <h1 className="text-5xl [writing-mode:vertical-rl] scale-[-1] font-bold mb-4">
              CONTACT US
            </h1>
          </motion.div>
        </div>
        {/* Right Side */}
        <div className="flex-1 w-3/4 lg:w-3/5 items-center justify-center relative">
          <div className="h-full bg-black bg-opacity-40 flex flex-col items-start justify-center p-12 lg:p-24">
            <h1 className="text-5xl font-bold italic mb-4">
              Send us a message
            </h1>
            <p className="text-base lg:text-xl mb-16">
              Have questions about our renovation, construction, or contractor
              services in Johor Bahru? Reach out to us, and our team will be
              happy to assist you with expert advice and solutions.
            </p>
            <p className="text-base lg:text-xl">
              To know more, give us a call or whatsapp us at
            </p>
            <p className="text-base lg:text-xl font-bold mb-16">
              (+60) 12 - 779 7877
            </p>
            <p className="text-base lg:text-xl font-bold italic">
              *** Free consultation and quotation services are offered.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
