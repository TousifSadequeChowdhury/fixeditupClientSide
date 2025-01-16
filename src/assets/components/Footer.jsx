import React from 'react';
import logo from '../img/fixedituplogoBW.png';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-gray-800 py-10">
      {/* Container */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          {/* Logo and Tagline */}
          <div className="mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
            <img src={logo} alt="FixedItUp Logo" className="h-14 mb-4" />
            <p className="text-gray-600 text-sm text-center lg:text-left">
              Where Every Fix Matters.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:gap-x-12 lg:gap-y-8 text-sm text-center lg:text-left">
            {/* Services */}
            <div>
              <h6 className="text-gray-900 font-semibold mb-4">Services</h6>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Branding</a></li>
                <li><a href="#" className="hover:underline">Design</a></li>
                <li><a href="#" className="hover:underline">Marketing</a></li>
                <li><a href="#" className="hover:underline">Advertisement</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h6 className="text-gray-900 font-semibold mb-4">Company</h6>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About us</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Jobs</a></li>
                <li><a href="#" className="hover:underline">Press kit</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h6 className="text-gray-900 font-semibold mb-4">Legal</h6>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Terms of use</a></li>
                <li><a href="#" className="hover:underline">Privacy policy</a></li>
                <li><a href="#" className="hover:underline">Cookie policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Copyright */}
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FixedItUp. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
