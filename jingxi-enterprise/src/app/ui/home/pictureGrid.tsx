"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { motion } from "motion/react";

const PictureGrid = () => {
  const images = [
    {
      id: "extension",
      name: "Extension",
      picName: "/our-services/extension/extension-1.jpg",
    },
    {
      id: "electrical",
      name: "Electrical Work",
      picName: "/our-services/electrical/electrical-1.jpg",
    },
    {
      id: "painting",
      name: "Painting",
      picName: "/our-services/painting/painting-1.jpg",
    },
    {
      id: "ceiling",
      name: "Ceiling Work",
      picName: "/our-services/ceiling/ceiling-1.jpg",
    },
    {
      id: "flooring",
      name: "Flooring & Tiling",
      picName: "/our-services/flooring/flooring-1.jpg",
    },
    {
      id: "roofing",
      name: "Roofing & Awning",
      picName: "/our-services/roofing/roofing-1.jpg",
    },
    {
      id: "waterproofing",
      name: "Waterproofing & Plumbing",
      picName: "/our-services/waterproofing/waterproofing-1.jpg",
    },
  ];

  return (
    <div className="bg-transparent flex items-center justify-center py-4 lg:px-4">
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="grid grid-cols-3 grid-rows-3 gap-4 max-w-screen-md">
          {/* First column */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="col-span-1 row-span-2 rounded-xl overflow-hidden relative group"
          >
            <Image
              src={images[0].picName}
              alt="Pic 1"
              height={600}
              width={500}
              className="w-full h-full object-cover transition duration-300 transform group-hover:scale-105 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                className="bg-transparent text-white rounded-none"
                variant="outline"
              >
                <Link href="/our-services#extension">Extension</Link>
              </Button>
            </div>
          </motion.div>
          {/* Top middle */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
            className="col-span-1 row-span-1 rounded-xl overflow-hidden relative group"
          >
            <Image
              src={images[1].picName}
              alt="Pic 2"
              height={600}
              width={500}
              className="w-full h-full object-cover transition duration-300 transform group-hover:scale-105 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                className="bg-transparent text-white rounded-none"
                variant="outline"
              >
                <Link href="/our-services#electrical">Electrical Work</Link>
              </Button>
            </div>
          </motion.div>
          {/* Top right */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="col-span-1 row-span-1 rounded-xl overflow-hidden relative group"
          >
            <Image
              src={images[2].picName}
              alt="Pic 3"
              height={600}
              width={500}
              className="w-full h-full object-cover transition duration-300 transform group-hover:scale-105 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                className="bg-transparent text-white rounded-none"
                variant="outline"
              >
                <Link href="/our-services#painting">Painting</Link>
              </Button>
            </div>
          </motion.div>
          {/* Center image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="col-span-1 row-span-1 rounded-xl overflow-hidden relative group"
          >
            <Image
              src={images[3].picName}
              alt="Pic 4"
              height={600}
              width={500}
              className="w-full h-full object-cover transition duration-300 transform group-hover:scale-105 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                className="bg-transparent text-white rounded-none"
                variant="outline"
              >
                <Link href="/our-services#ceiling">Ceiling Work</Link>
              </Button>
            </div>
          </motion.div>
          {/* Center right */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
            className="col-span-1 row-span-1 rounded-xl overflow-hidden relative group"
          >
            <Image
              src={images[4].picName}
              alt="Pic 5"
              height={600}
              width={500}
              className="w-full h-full object-cover transition duration-300 transform group-hover:scale-105 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                className="bg-transparent text-white rounded-none"
                variant="outline"
              >
                <Link href="/our-services#flooring">Flooring & Tiling</Link>
              </Button>
            </div>
          </motion.div>
          {/* Bottom left */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="col-span-1 row-span-1 rounded-xl overflow-hidden relative group"
          >
            <Image
              src={images[5].picName}
              alt="Pic 6"
              height={600}
              width={500}
              className="w-full h-full object-cover transition duration-300 transform group-hover:scale-105 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                className="bg-transparent text-white rounded-none"
                variant="outline"
              >
                <Link href="/our-services#roofing">Roofing & Awning</Link>
              </Button>
            </div>
          </motion.div>
          {/* Bottom right */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="col-span-2 row-span-1 rounded-xl overflow-hidden relative group"
          >
            <Image
              src={images[6].picName}
              alt="Pic 7"
              height={600}
              width={500}
              className="w-full h-full object-cover transition duration-300 transform group-hover:scale-105 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                className="bg-transparent text-white rounded-none"
                variant="outline"
              >
                <Link href="/our-services#waterproofing">
                  Waterproof & Plumbing
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-screen overflow-x-scroll mt-4">
        <ScrollArea className="whitespace-nowrap relative">
          <div className="flex w-max space-x-4 px-8">
            {images.map((image, index) => (
              <figure key={index} className="shrink-0">
                <div className="relative h-96 w-72 overflow-hidden rounded-xl group">
                  <Image
                    src={image.picName}
                    alt={`Pic ${index + 1}`}
                    fill
                    className="h-full w-full object-cover transition duration-300 transform group-hover:scale-105 group-hover:brightness-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      className="bg-transparent text-white rounded-none"
                      variant="outline"
                    >
                      <Link href={`/our-services#${image.id}`}>
                        {image.name}
                      </Link>
                    </Button>
                  </div>
                </div>
                <figcaption className="pt-2 text-base font-bold text-white text-muted-foreground">
                  {image.name}
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar
            orientation="horizontal"
            className="opacity-0 pointer-events-none"
          />
        </ScrollArea>
      </div>
    </div>
  );
};

export default PictureGrid;
