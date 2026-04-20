"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Merriweather } from "next/font/google";
import { motion } from "motion/react";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const CarouselCenterSection = ({
  title,
  description,
  images,
}: {
  title: string;
  description: string;
  images: string[];
}) => {
  return (
    <section className="flex h-auto lg:h-[600px] w-full mb-8 lg:mb-0">
      <div className="flex-none bg-teal-50 flex flex-col items-center justify-center text-center h-auto lg:h-[600px] w-full p-8 py-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 lg:h-full lg:w-5/6">
          <div className="h-full col-span-2 flex flex-col items-center text-center mb-8 lg:mb-0">
            <Carousel className="w-full relative">
              {/* Flex added to make images appear in a row */}
              <CarouselContent className="flex">
                {images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="min-w-full h-[400px] lg:h-[568px]"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={image}
                        alt={`Pic ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white text-bold border-none px-16 p-2 hover:bg-opacity-70 w-24 h-full [&_svg]:size-12" />
              <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white text-bold border-none px-16 p-2 hover:bg-opacity-70 w-24 h-full [&_svg]:size-12" />
            </Carousel>
          </div>
          <div className="w-full lg:min-w-[300px] h-full lg:h-[568px] flex flex-col items-center justify-center border-2 lg:border-4 border-black/90 p-8">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`text-4xl lg:text-5xl ${merriweather.className} font-bold max-w-xl mb-4`}
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="text-base text-justify lg:text-lg max-w-xl"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
