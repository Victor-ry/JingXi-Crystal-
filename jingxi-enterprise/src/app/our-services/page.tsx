"use client";

import Image from "next/image";
import { CarouselCenterSection } from "./carousel-center-section";
import { CarouselLeftSection } from "./carousel-left-section";
import { CarouselRightSection } from "./carousel-right-section";

const extensionImages = ["/our-services/extension/extension-1.jpg", "/our-services/extension/extension-2.jpg", "/our-services/extension/extension-3.jpg"];
const electricalImages = ["/our-services/electrical/electrical-1.jpg", "/our-services/electrical/electrical-2.jpg", "/our-services/electrical/electrical-3.jpg"]; 
const paintingImages = ["/our-services/painting/painting-3.jpg", "/our-services/painting/painting-2.jpg", "/our-services/painting/painting-1.jpg"];
const ceilingImages = [ "/our-services/ceiling/ceiling-1.jpg",  "/our-services/ceiling/ceiling-2.jpg"];
const flooringImages = ["/our-services/flooring/flooring-2.jpg", "/our-services/flooring/flooring-3.jpg", "/our-services/flooring/flooring-1.jpg", "/our-services/flooring/flooring-4.jpg"];
const roofingImages = ["/our-services/roofing/roofing-1.jpg", "/our-services/roofing/roofing-2.jpg"];
const waterproofingImages = ["/our-services/waterproofing/waterproofing-1.jpg", "/our-services/waterproofing/waterproofing-2.jpg", "/our-services/waterproofing/waterproofing-3.jpg"];

export default function OurServicesPage() {
  return (
    <main className="flex flex-col lg:flew-row bg-teal-50 min-h-screen">
      {/* Section for About Us */}
      <section className="flex w-full h-[600px] mb-8">
        {/* Left Side (Now Text) */}
        <div className="flex-none w-3/4 lg:w-1/2 bg-black bg-opacity-90 flex flex-col items-start justify-center text-left text-white lg:pl-28 p-8">
          <div className="border-2 lg:border-4 p-4 py-8 lg:p-20 lg:py-28 my-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">OUR SERVICES</h1>
            <p className="text-base lg:text-lg text-left max-w-xl">
              At Jing Xi, we prioritise in delivering high-quality renovation,
              construction, and contractor services tailored to meet your needs.
              With expertise and craftsmanship, we transform spaces with
              precision, ensuring durability and aesthetic appeal.
            </p>
          </div>
        </div>

        {/* Right Side (Now Image) */}
        <div className="flex-1 w-1/4 lg:w-1/2 relative">
          <Image
            src="/our-services/our-services-1.jpg"
            alt="Section 1 Background"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            className="object-cover rounded-none"
          />
          {/* Overlay Content - provide opacity */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      </section>

      <div id="extension">
        <CarouselRightSection
          title="Extension"
          description="Expand your living or working space with expertly crafted home extensions, room partitions, and structural modifications to enhance functionality and comfort."
          images={extensionImages}
        />
      </div>

      <div id="electrical">
        <CarouselLeftSection
          title="Electrical Work"
          description="From wiring installation and lighting upgrades to power socket repairs and circuit troubleshooting, we provide reliable and safe electrical solutions."
          images={electricalImages}
        />
      </div>

      <div id="painting">
        <CarouselCenterSection
          title="Painting"
          description="Give your home or office a fresh look with our professional interior and exterior painting services. We use high-quality paints for long-lasting and beautiful finishes."
          images={paintingImages}
        />
      </div>

      <div id="ceiling">
        <CarouselRightSection
          title="Ceiling Work"
          description="Install or repair plaster ceilings, false ceilings, and decorative ceiling panels to enhance the aesthetics and ambiance of your space."
          images={ceilingImages}
        />
      </div>

      <div id="flooring">
        <CarouselLeftSection
          title="Flooring & Tiling"
          description="Upgrade your floors with durable and stylish materials, including ceramic tiles, vinyl, and laminate flooring, installed with precision."
          images={flooringImages}
        />
      </div>

      <div id="roofing">
        <CarouselCenterSection
          title="Roofing & Awning"
          description="Protect your home or business with durable roofing solutions and stylish awnings that provide shade, insulation, and weather protection."
          images={roofingImages}
        />
      </div>

      <div id="waterproofing">
        <CarouselRightSection
          title="Waterproof & Plumbing"
          description="Prevent leaks and water damage with our waterproofing services, and ensure smooth water flow with expert plumbing repairs and installations."
          images={waterproofingImages}
        />
      </div>
    </main>
  );
}
