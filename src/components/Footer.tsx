"use client";

import { Footer } from "./ui/footer";

export function FooterDemo() {
  return (
     <Footer
        className=" bg-white text-back pt-24"
        brand={{
          name: "DODAS Palace",
          description: "Stay in Comfort, Leave with Memories.",
        }}
        socialLinks={[
          {
            name: "Instagram",
            href: "#",
          },
          {
            name: "Facebook",
            href: "#",
          },
          {
            name: "X (Twitter)",
            href: "#",
          },
        ]}
        columns={[
          {
            title: "Explore",
            links: [
              {
                name: "Rooms",
                href: "#rooms",
              },
              {
                name: "Atmos Rooftop",
                href: "#atmos",
              },
              {
                name: "Hive Restaurant & Bar",
                href: "#hive",
              },
              {
                name: "Bargain Sports Bar",
                href: "#bargain",
              },
            ],
          },
          {
            title: "Contact Us",
            links: [
              {
                name: "contact@dodaspalace.com",
                href: "mailto:contact@dodaspalace.com",
              },
              {
                name: "+91 123 456 7890",
                href: "tel:+911234567890",
              },
              {
                name: "Jaipur, Rajasthan, India",
                href: "#",
              },
            ],
          },
          {
            title: "Legal",
            links: [
              {
                name: "Privacy Policy",
                href: "/legal/privacy",
              },
              {
                name: "Terms of Service",
                href: "/legal/terms",
              },
            ],
          },
        ]}
        copyright="DODAS Palace © 2024. All Rights Reserved."
      />
  );
}
