"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { Merriweather } from "next/font/google";
import { motion } from "motion/react";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const CarouselLeftSection = ({
  title,
  description,
  images,
}: {
  title: string;
  description: string;
  images: string[];
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="flex h-[600px] w-full bg-black bg-opacity-90 mb-8 relative overflow-hidden">
      <div
        className={`flex w-full transition-all duration-500 ${
          isExpanded ? "lg:flex-row" : ""
        }`}
      >
        {/* Left Side - expands to full width on mobile when expanded */}
        <div
          className={`relative bg-opacity-60 transition-all duration-500 ${
            isExpanded ? "w-full lg:w-1/2" : "flex-1 w-1/4 lg:w-1/2"
          }`}
        >
          <Carousel className="w-full h-[600px] relative">
            {/* Flex added to make images appear in a row */}
            <CarouselContent className="flex">
              {images.map((image, index) => (
                <CarouselItem key={index} className="min-w-full h-[600px]">
                  <div className="w-full h-full relative">
                    <Image
                      src={image}
                      alt={`Pic ${index + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Expansion toggle button - only visible on smaller screens */}
            <button
              onClick={toggleExpand}
              className={`lg:hidden absolute ${
                isExpanded ? "right-2 top-10 p-2" : "left-1/2 top-1/2 p-4"
              } transform -translate-x-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-70 text-white rounded-full hover:bg-opacity-90 transition-all`}
            >
              {isExpanded ? (
                <X className="size-4" />
              ) : (
                <ArrowLeft className="size-8" />
              )}
            </button>

            {/* Navigation buttons - only visible on larger screens */}
            <CarouselPrevious className="hidden lg:block absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white text-bold border-none px-16 p-2 hover:bg-opacity-70 w-24 h-full [&_svg]:size-12" />
            <CarouselNext className="hidden lg:block absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white text-bold border-none px-16 p-2 hover:bg-opacity-70 w-24 h-full [&_svg]:size-12" />

            {/* Mobile navigation buttons - only visible when expanded on small screens */}
            {isExpanded && (
              <>
                <CarouselPrevious className="lg:hidden absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white text-bold border-none p-2 hover:bg-opacity-70 w-12 h-12 [&_svg]:size-6" />
                <CarouselNext className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white text-bold border-none p-2 hover:bg-opacity-70 w-12 h-12 [&_svg]:size-6" />
              </>
            )}
          </Carousel>
        </div>
        {/* Right Side - hidden when expanded on mobile */}
        <div
          className={`flex-none flex flex-col item-start justify-center lg:text-left text-white h-[600px] ${
            isExpanded ? "hidden lg:flex w-0 lg:w-1/2" : "w-3/4 lg:w-1/2"
          } p-8 lg:p-32`}
        >
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`text-4xl ${merriweather.className} lg:text-5xl font-bold max-w-xl mb-4`}
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-base lg:text-lg max-w-xl"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
};
