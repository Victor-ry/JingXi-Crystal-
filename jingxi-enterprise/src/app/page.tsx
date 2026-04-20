"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PictureGrid from "@/app/ui/home/pictureGrid";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Merriweather } from "next/font/google";
import { motion } from "motion/react";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-teal-50 ">
      {/* Section with Background Image */}
      <section className="relative h-[600px] w-full">
        <Image
          src="/home/home-3.jpg"
          alt="Section Background"
          fill
          className="top-0 object-cover rounded-none"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center text-justify text-white bg-black bg-opacity-60 lg:pl-48 p-8">
          <h1
            className={`text-4xl lg:text-6xl ${merriweather.className} font-bold mb-4`}
          >
            Transforming Spaces,
          </h1>
          <h1
            className={`text-4xl lg:text-6xl ${merriweather.className} font-bold italic mb-4`}
          >
            Building Dreams
          </h1>
          <p className="text-base lg:text-lg max-w-xl">
            We deliver expert craftmanship that offers seamless, stress-free
            renovation solutions — designed for quality, delivered with care
          </p>
          <div className="mt-8">
            <Button
              className="bg-transparent rounded-none"
              variant="outline"
              asChild
            >
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section for About Us */}
      <section className="h-[600px] w-full my-8 lg:my-0">
        <div className="flex flex-col lg:flex-row bg-teal-50 items-center justify-center text-center h-[600px] p-8">
          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-none w-full lg:w-1/2 relative h-64 lg:h-full"
          >
            <Image
              src="/home/home-2.jpg"
              alt="Section 2 Background"
              fill
              className="object-cover rounded-none"
            />
          </motion.div>
          {/* Right Side */}
          <div className="items-center justify-center text-justify p-8 lg:ml-12">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 text-4xl lg:text-5xl font-bold mb-4"
            >
              ABOUT US
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="text-base lg:text-lg max-w-xl"
            >
              At Jing Xi, we are a trusted construction, contractor, and
              renovation company based in Johor Bahru. Our mission is to turn
              your ideas into reality by providing high-quality, reliable
              services that transform your space into something truly special.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="mt-8"
            >
              <Button
                className="bg-transparent border-black rounded-none hover:bg-black/90 hover:text-white"
                variant="outline"
              >
                <Link href="/about-us">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section for Our Services */}
      <section className="bg-black bg-opacity-90 w-full p-8">
        <div className="flex flex-col items-center text-justify py-8">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl lg:text-5xl text-white font-bold mb-4"
          >
            OUR SERVICES
          </motion.h2>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="text-base lg:text-lg text-white max-w-xl mb-4"
            >
              Our comprehensive services are designed to turn your house into a
              home you will love. Explore our services and let us help you bring
              your vision to life.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="text-base lg:text-lg text-white font-bold italic max-w-xl"
            >
              *** Free consultation and quotation services are offered.
            </motion.p>
          </div>
          <div className="mt-4 overflow-hidden">
            <PictureGrid />
          </div>
        </div>
      </section>

      {/* Section for Client Testimonials */}
      <section className="flex h-auto min-h-[600px] w-full">
        <div className="flex-none bg-teal-50 flex flex-col items-center justify-center text-center h-auto min-h-[600px] w-full pt-16 p-8">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl lg:text-5xl font-bold mb-8"
          >
            CLIENT TESTIMONIALS
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:h-full">
            <div className="px-12 py-8 h-full flex flex-col items-center text-center hover:bg-black/90 hover:text-white hover:rounded-xl">
              <FormatQuoteIcon sx={{ fontSize: 100 }} />
              <p className="text-base lg:text-lg text-justify max-w-xl mb-8">
                &quot;The company exceeded our expectations with their
                outstanding renovation services. The team was professional and
                truly listened to our needs. They transformed our living space
                beautifully, staying within budget and finishing on time. We
                couldn’t be happier with the result!&quot;
              </p>
              <p className="text-base lg:text-lg font-bold text-justify max-w-xl">
                — Amira, Johor Bahru
              </p>
            </div>
            <div className="px-12 py-8 h-full flex flex-col items-center text-center hover:bg-black/90 hover:text-white hover:rounded-xl">
              <FormatQuoteIcon sx={{ fontSize: 100 }} />
              <p className="text-base lg:text-lg text-justify max-w-xl mb-8">
                &quot;Working with Mr Chew was a fantastic experience. Their
                attention to detail and craftsmanship were exceptional. They
                kept us informed at every stage of the project and delivered
                top-quality work. I highly recommend their services for anyone
                looking for reliable contractors!&quot;
              </p>
              <p className="text-base lg:text-lg font-bold text-justify max-w-xl">
                — David Tan, Skudai
              </p>
            </div>
            <div className="px-12 py-8 h-full flex flex-col items-center text-center hover:bg-black/90 hover:text-white hover:rounded-xl">
              <FormatQuoteIcon sx={{ fontSize: 100 }} />
              <p className="text-base lg:text-lg text-justify max-w-xl mb-8">
                &quot;We hired Jing Xi for our office renovation, and the
                results were incredible! The team was professional, punctual,
                and creative. They understood our vision and brought it to life
                better than we imagined. Our new workspace is modern,
                functional, and inspiring.&quot;
              </p>
              <p className="text-base lg:text-lg font-bold text-justify max-w-xl">
                — Jie Han L., Masai
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
