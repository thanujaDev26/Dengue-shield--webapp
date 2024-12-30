import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-teal-500 text-gray-200 py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Dengue Shield Section */}
        <div className="dengu-sheild">
          <h2 className="text-lg font-bold mb-4">Dengue Shield</h2>
          <p className="text-sm">
            Dengue Shield Project: Advanced sensor-based monitoring system to
            detect dengue risk factors across communities, ensuring
            environmental safety, operational transparency, and public health
            support, while providing real-time updates to stakeholders for
            proactive action.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="quickLinks">
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Community Section */}
        <div className="community">
          <h2 className="text-lg font-bold mb-4">Community</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Partners
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                News
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="socilaMedia">
          <h2 className="text-lg font-bold mb-4">Social Media</h2>
          <ul className="space-y-2">
            <li className="flex space-x-2">
              <Facebook />
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li className="flex space-x-2">
              <Twitter />
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li className="flex space-x-2">
              <Instagram />
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li className="flex space-x-2">
              <Linkedin />
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center text-sm text-black-400 mt-8">
        &copy; {new Date().getFullYear()} Dengue Shield. All rights reserved.
      </div>
    </footer>
  );
}
