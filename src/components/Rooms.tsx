import Image from "next/image";
import React from "react";

// --- MOCK DATA FOR ROOMS ---
// Replace these with your actual room details, image, and video paths.
const roomsData = [
  {
    id: 1,
    name: "Super Deluxe DBL Bed",
    details: "1 King Bed, City View, 450 sqft",
    price: "8,500",
    imageSrc:
      "/room1.png",
    videoSrc: "/room1.mp4",
  },
  {
    id: 2,
    name: "Royal Suite Room",
    details: "Separate Living Area, Pool View, 700 sqft",
    price: "12,000",
    imageSrc:
      "/room2.png",
    videoSrc: "room2.mp4",
  },
  {
    id: 3,
    name: "Family Suite",
    details: "2 Twin Beds, Garden View, 400 sqft",
    price: "7,000",
    imageSrc:
      "/room3.png",
    videoSrc: "/room3.mp4",
  },
  {
    id: 4,
    name: "Super Deluxe Twin Bed",
    details: "Rooftop Jacuzzi, Cityscape, 1200 sqft",
    price: "25,000",
    imageSrc:
      "/room4.png",
    videoSrc: "room4.mp4",
  },
];

function Rooms() {
  return (
    <div className="py-16 md:py-10 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-kaushan-script font-bold text-center mb-12 text-gray-800">
          Our Rooms
        </h1>

        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {roomsData.map((room) => (
            <div
              key={room.id}
              className="group flex flex-col overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white"
            >
              {/* Media container with hover effect */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                {/* Video (plays continuously in the background) */}
                <video
                  src={room.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline // Important for iOS devices
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Image (fades out on hover) */}
                <Image
                  width={400}
                  height={700}
                  src={room.imageSrc}
                  alt={room.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                />
              </div>

              {/* Details Section */}
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-xl font-kaushan-script font-bold text-gray-900">
                  {room.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1 flex-grow">
                  {room.details}
                </p>
                <p className="text-lg font-bold text-gray-900 mt-4">
                  ₹{room.price}{" "}
                  <span className="text-sm font-normal text-gray-500">
                    / night
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rooms;
