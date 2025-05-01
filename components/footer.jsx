"use client";

import React from "react";
import { FaWhatsapp, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { Button, Image } from "@nextui-org/react";
import pulzLogo from "@/public/assets/favicon.png";
import acictsLogo from "@/public/assets/acicts.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/#about" },
    { name: "Categories", url: "/categories?tabIndex=all" },
    { name: "Rules and Regulations", url: "/rnr" },
    { name: "Contact", url: "/#contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#00030B] via-[#03081B] to-[#00030B] text-gray-300 py-10 shadow-lg shadow-gray-900/50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-opacity-5 bg-white"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4 sm:mx-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex space-x-4 mb-4">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110  overflow-hidden group">
                <Image
                  className="w-full h-full object-cover transition-all duration-300 group-hover:shadow-lg"
                  alt="pulz-logo"
                  src={pulzLogo.src}
                  disableSkeleton
                />
              </div>
              <div className="w-40 h-16 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 overflow-hidden group">
                <Image
                  className="w-fit h-full object-cover transition-all duration-300 group-hover:shadow-none "
                  alt="pulz-text"
                  src={acictsLogo.src}
                  disableSkeleton
                />
              </div>
            </div>
            <p className="text-sm mb-6 text-center md:text-left leading-relaxed">
              PULZ, the flagship annual ICT Day of the Ananda College ICT
              Society, is a vibrant inter-school competition platform
              celebrating technological innovation and collaboration.
            </p>
            <div className="flex justify-start gap-4 mt-6 w-full">
              <a
                href="https://whatsapp.com/channel/0029Vam842dDZ4LVhhZ8Yj2S"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="WhatsApp"
              >
                <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-2 rounded-full">
                  <FaWhatsapp
                    size={24}
                    className="text-gray-300 group-hover:text-green-400 transition-all duration-300 transform group-hover:scale-125"
                  />
                </div>
              </a>
              <a
                href="https://github.com/acicts"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="GitHub"
              >
                <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-2 rounded-full">
                  <FaGithub
                    size={24}
                    className="text-gray-300 group-hover:text-purple-400 transition-all duration-300 transform group-hover:scale-125"
                  />
                </div>
              </a>
              <a
                href="https://facebook.com/acicts"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Facebook"
              >
                <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-2 rounded-full">
                  <FaFacebook
                    size={24}
                    className="text-gray-300 group-hover:text-blue-400 transition-all duration-300 transform group-hover:scale-125"
                  />
                </div>
              </a>
              <a
                href="https://instagram.com/acicts.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Instagram"
              >
                <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-2 rounded-full">
                  <FaInstagram
                    size={24}
                    className="text-gray-300 group-hover:text-pink-400 transition-all duration-300 transform group-hover:scale-125"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col md:pl-8">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              Looking For Something?
            </h3>
            <ul className="space-y-0.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Button
                    variant="link"
                    className="w-full text-left justify-start transition-transform transition-colors duration-200 text-base text-gray-200 hover:text-blue-400 hover:translate-x-1 py-0.5"
                    onClick={() => (window.location.href = link.url)}
                  >
                    {link.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col md:pl-4">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Contact Us
            </h3>
            <p className="text-sm mb-3 leading-relaxed">
              Address: Ananda College ICT Society, Ananda College, Colombo 10.
            </p>
            <p className="text-sm mb-3 leading-relaxed">
              Phone: +94 70 4063 555
            </p>
            <p className="text-sm leading-relaxed">
              Email: acictsofficial@gmail.com
            </p>
            <p className="text-sm mt-4 leading-relaxed">
              Feel free to reach out to us for any inquiries or support.
              We&apos;re here to help!
            </p>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-4 mx-4 sm:mx-8">
          <div className="text-center md:text-right">
            <p className="text-sm">
              &copy; {currentYear} All rights reserved by ACICTS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
