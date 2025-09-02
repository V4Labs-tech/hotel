import React from 'react';

function Hero() {
    return (

        <div className="relative w-full h-screen overflow-hidden flex justify-start items-end">

            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                src="/hotel.mp4"
            >
                Your browser does not support the video tag.
            </video>

            <div className="z-10 font-kaushan-script text-white p-8 md:p-12 mb-8 ml-8">
                <h1 className={`text-5xl md:text-7xl`}>
                    DODAS Palace
                </h1>

                <p className="ml-1 text-xl md:text-2xl mt-2">
                    Stay in Comfort, Leave with Memories.
                </p>
            </div>

        </div>
    );
}

export default Hero;