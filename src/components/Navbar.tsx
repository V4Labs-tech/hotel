"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// You can move this array to a separate file if you want
const navLinks = [
    { name: "Rooms", href: "#" },
    { name: "Atmos Rooftop", href: "#" },
    { name: "Hive Restaurant & Bar", href: "#" },
    { name: "Bargain Sports Bar", href: "#" },
    { name: "Contact Us", href: "#" },
];

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="absolute inset-x-0 top-0 z-50 p-4 md:p-6 font-">
            <div className="mx-auto max-w-5xl">
                <div className="px-4 md:px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    <nav
                        className="flex items-center justify-between"
                        aria-label="Global"
                    >
                        {/* Logo */}
                        <div className="flex lg:flex-1">
                            <Link href={"/"} className="-m-1.5 p-1.5">
                                <span className="sr-only">DODAS Palace</span>
                                <Image
                                    width={40}
                                    height={40}
                                    className="h-10 w-auto"
                                    src="/logo.png"
                                    alt="DODAS Palace Logo"
                                />
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Desktop Navigation Links */}
                        <div className="hidden lg:flex lg:gap-x-6 ">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="px-2 py-1 text-md text-black/80 rounded-xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-lg transition-colors duration-300 hover:bg-white/20 hover:scale-110 font-semibold"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop "Book Now" Button */}

                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <Link
                                href={"/"}
                                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200 hover:scale-110"
                            >
                                Book Now
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>

            {/* --- MOBILE MENU PANEL --- */}
            {/* We keep this in the DOM and use classes to show/hide it */}
            <div
                className={`lg:hidden ${mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
                    }`}
                role="dialog"
                aria-modal="true"
            >
                {/* Background Overlay */}
                <div
                    className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ease-in-out ${mobileMenuOpen ? "opacity-100" : "opacity-0"
                        }`}
                    onClick={() => setMobileMenuOpen(false)} // Close menu on overlay click
                />

                {/* Sidebar Panel */}
                <div
                    className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/60 backdrop-blur-lg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="flex items-center justify-between">
                        <Link href={"/"} className="-m-1.5 p-1.5">
                            <span className="sr-only">DODAS Palace</span>
                            <Image
                                width={40}
                                height={40}
                                className="h-10 w-auto"
                                src="/logo.png"
                                alt="DODAS Palace Logo"
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/25">
                            <div className="space-y-2 py-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/10"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <Link
                                    href={"/"}
                                    className="w-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-center bg-white text-black hover:bg-gray-100"
                                >
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
