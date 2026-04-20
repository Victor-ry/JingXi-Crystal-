"use client";

import Image from "next/image";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import { motion } from "motion/react";

export default function AboutUSPage() {
  return (
    <main className="flex bg-teal-50 min-h-screen flex-col">
      {/* Section for About Us*/}
      <section className="flex h-[600px] w-full">
        {/* Left Side */}
        <div className="flex-none w-1/4 lg:w-1/2 relative">
          <Image
            src="/about-us/about-us-1.jpg"
            alt="Section 1 Background"
            fill
            className="object-cover rounded-none"
          />
          {/* Overlay Content - provide opacity */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Right Side */}
        <div className="flex-1 w-3/4 lg:w-1/2 bg-black bg-opacity-90 flex flex-col items-end justify-center text-right text-white lg:pr-48 p-8">
          <h1 className="text-5xl font-bold mb-4">ABOUT US</h1>
          <Image
            src="/about-us/about-us-2.jpg"
            alt="About Us picture"
            width={736 * 0.35}
            height={920 * 0.35}
            className="rounded-none text-right mb-4"
          />
          <p className="text-base lg:text-lg text-right max-w-xl">
            We offer top-notch renovation, construction, and contracting
            services tailored to your needs.
          </p>
        </div>
      </section>

      {/* Section for About Us */}
      <section className="flex h-[600px] max-w-screen mt-8 mb-8">
        {/* Left Side */}
        <div className="flex flex-none bg-teal-50 items-center justify-center h-[600px] w-3/4 lg:w-1/2 p-8">
          <div className="flex flex-col items-start justify-center ">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl font-bold max-w-xl text-left mb-4"
            >
              Your Trusted Renovation Partner in Johor Bahru
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="text-base lg:text-lg max-w-xl text-left"
            >
              With years of experience in the industry, our team of skilled
              professionals is dedicated to delivering high-quality
              craftsmanship and exceptional customer service. Whether it is a
              simple home improvement project or a large-scale renovation, we
              approach every task with passion, professionalism, and attention
              to detail.
            </motion.p>
          </div>
        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 w-1/4 lg:w-1/2 relative bg-opacity-60"
        >
          <Image
            src="/about-us/about-us-3.jpg"
            alt="Section 2 Background"
            fill
            className="object-cover rounded-none"
          />
          {/* Overlay Content - provide opacity */}
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </motion.div>
      </section>

      {/* Section for Why Choose Us */}
      <section className="flex h-auto w-full mb-8">
        <div className="flex-none bg-black bg-opacity-90 flex flex-col items-center text-center text-white h-auto w-full p-8 pb-16">
          <h2 className="text-5xl font-bold mb-20 mt-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 h-auto">
            <div className="px-12 py-8 lg:border-r border-gray-700 h-full flex flex-col items-center text-center">
              <TaskAltOutlinedIcon sx={{ fontSize: 60 }} />
              <h2 className="text-2xl lg:text-4xl font-bold my-4">
                Expertise You Can Trust
              </h2>
              <p className="text-base lg:text-lg max-w-xl">
                Experienced professionals who understand every detail of
                construction and renovation.
              </p>
            </div>
            <div className="px-12 py-8 lg:border-r border-gray-700 h-full flex flex-col items-center text-center">
              <TaskAltOutlinedIcon sx={{ fontSize: 60 }} />
              <h2 className="text-2xl lg:text-4xl font-bold my-4">
                Customer-Centric Approach
              </h2>
              <p className="text-base lg:text-lg max-w-xl">
                We listen, advise, and tailor our services to your unique needs.
              </p>
            </div>
            <div className="px-12 py-8 lg:border-r border-gray-700 h-full flex flex-col items-center text-center">
              <TaskAltOutlinedIcon sx={{ fontSize: 60 }} />
              <h2 className="text-2xl lg:text-4xl font-bold my-4">
                High-Quality Craftsmanship
              </h2>
              <p className="text-base lg:text-lg max-w-xl">
                We are committed to delivering exceptional results, every time.
              </p>
            </div>
            <div className="px-12 py-8 h-full flex flex-col items-center text-center">
              <TaskAltOutlinedIcon sx={{ fontSize: 60 }} />
              <h2 className="text-2xl lg:text-4xl font-bold my-4">
                Affordable Solutions
              </h2>
              <p className="text-base lg:text-lg max-w-xl">
                Quality does not have to come at a high price.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section for Vision & Mission */}
      <section className="flex h-auto lg:h-[600px] w-full mb-8">
        <div className="flex-none bg-teal-50 flex flex-col items-center text-center h-auto lg:h-[600px] w-full p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:h-full">
            <div className="px-12 py-8 h-full flex flex-col items-center justify-center text-center">
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-2xl lg:text-4xl font-bold mb-4"
              >
                Our Vision
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="text-base lg:text-lg text-justify max-w-xl"
              >
                Our vision is to become Johor Bahru’s leading construction,
                contractor, and renovation service provider, renowned for
                transforming spaces through innovative solutions and exceptional
                craftsmanship. We aspire to set new industry standards by
                combining creativity, quality, and reliability, making us the
                first choice for clients seeking excellence and professionalism.
              </motion.p>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full h-[300px] lg:h-full"
            >
              <Image
                src="/about-us/about-us-4.jpg"
                alt="Section 1 Background"
                fill
                className="object-cover rounded-none"
              />
            </motion.div>
            <div className="px-12 py-8 h-full flex flex-col items-center justify-center text-center">
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-2xl lg:text-4xl font-bold mb-4"
              >
                Our Mission
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="text-base lg:text-lg text-justify max-w-xl"
              >
                Our mission is to deliver high-quality construction and
                renovation services that exceed client expectations. We are
                dedicated to providing personalized solutions tailored to each
                project’s unique needs while upholding values of transparency,
                reliability, and craftsmanship. By embracing innovation and
                sustainable practices, we aim to build strong, lasting
                relationships founded on trust and client satisfaction.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
