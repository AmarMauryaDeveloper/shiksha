import React from "react";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-[#2E2E2E] text-white pt-12 pb-6">

      {/* TOP — 3 Columns */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* About Shiksha */}
        <div>
          <h3 className="font-semibold text-lg mb-4">About Shiksha</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>About Us</li>
            <li>Management Team</li>
            <li>Careers</li>
            <li>Shiksha Authors</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Our Group */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Our Group</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Infoedge.in</li>
            <li>Naukri.com</li>
            <li>Naukri Resume Maker</li>
            <li>Naukrigulf</li>
            <li>99acres.com</li>
            <li>Jeevansathi.com</li>
            <li>AmbitionBox.com</li>
            <li>Shiksha Online</li>
            <li>Shiksha Abroad</li>
            <li>Job Hai</li>
          </ul>
        </div>

        {/* Enterprise */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Enterprise</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Client Login</li>
            <li>Advertising/Sales Enquiries</li>
            <li>Add Colleges</li>
          </ul>
        </div>

      </div>

      {/* MIDDLE — Logo + Contact + Contribute + Social */}
      <div className="container mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-4 items-center gap-10">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/shiksha-logo.svg"
            alt="Shiksha Logo"
            className="w-12"
          />
          <span className="text-2xl font-semibold">shiksha</span>
        </div>

        {/* WhatsApp Contact */}
        <div>
          <h3 className="font-semibold mb-3">Get in Touch</h3>
          <button className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full text-sm">
            <IoLogoWhatsapp className="text-xl" /> 8826978461
          </button>
        </div>

        {/* Contribute */}
        <div>
          <h3 className="font-semibold mb-3">Contribute</h3>
          <button className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full text-sm">
            📝 Write Review
          </button>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-3 text-xl">
            <FaInstagram className="bg-gray-700 p-2 rounded-md" size={36} />
            <FaYoutube className="bg-gray-700 p-2 rounded-md" size={36} />
            <FaFacebook className="bg-gray-700 p-2 rounded-md" size={36} />
            <FaTwitter className="bg-gray-700 p-2 rounded-md" size={36} />
          </div>
        </div>

      </div>

      {/* Bottom — Copyright */}
      <div className="bg-[#1F1F1F] mt-10 py-4">
        <div className="container mx-auto px-4 text-center text-gray-400 text-xs">
          Grievances • Notices • Summons • Privacy • Sitemap • Terms & Conditions  
          <br />
          Trade Marks belong to the respective owners. Copyright © 2025 Info Edge
          India Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
