import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function Testimonials() {
  return (
    <section className="bg-slate-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Centered heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-kaushan-script font-bold text-white">
            What Our Guests Say
          </h2>
          {/* Elegant gold accent line */}
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-4 mb-12"></div>
        </div>

        {/* The InfiniteMovingCards component will have white cards that pop against the dark background */}
        <div className="flex flex-col items-center justify-center relative">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

const testimonials = [
  {
    quote:
      "From the moment we checked in, the staff at Dodas Palace made us feel like royalty. The room was immaculate, the bed was incredibly comfortable, and the service was prompt and courteous. A truly relaxing stay!",
    name: "Priya Sharma",
    title: "Weekend Getaway",
  },
  {
    quote:
      "The rooftop lounge, Atmos, has a breathtaking view of the city! We spent every evening there. The food at Hive Restaurant was exceptional, offering a great mix of local and international dishes. Highly recommended for foodies.",
    name: "Rohan Mehta",
    title: "Business Traveler",
  },
  {
    quote:
      "An absolute gem in Jaipur! You get five-star service and amenities at an economy price. The location is perfect for sightseeing, with all the major forts and markets just a short drive away. Unbeatable value.",
    name: "Anjali Singh",
    title: "Solo Explorer",
  },
  {
    quote:
      "Traveling with kids can be hectic, but this hotel made it so easy. The rooms were spacious enough for our family of four, and the 24x7 kitchen was a lifesaver. It felt like a home away from home. We'll be back!",
    name: "The Gupta Family",
    title: "Family Vacation",
  },
  {
    quote:
      "Our stay was absolutely perfect. Clean rooms, delicious food, and a wonderfully attentive staff that went above and beyond. It exceeded all our expectations. If you're visiting Jaipur, look no further than Dodas Palace.",
    name: "Vikram Kumar",
    title: "Couple's Retreat",
  },
];
