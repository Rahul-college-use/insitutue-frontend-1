import React from 'react';

import { Globe } from "lucide-react";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-4 gap-12">

          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-indigo-500 to-violet-500 text-white p-2 rounded-lg">
                <Globe className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-bold text-lg">LingoSphere</h3>
                <p className="text-xs text-slate-400">Institute</p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering language learners worldwide with live,
              immersive, and personalized learning experiences.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">

              <a
                href="#"
                className="text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <FaTwitter className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-white">
              Quick Links
            </h4>

            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#courses"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Courses
                </a>
              </li>

              <li>
                <a
                  href="#instructors"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Instructors
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h4 className="font-bold mb-6 text-white">
              Languages
            </h4>

            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition-colors"
                >
                  🇬🇧 English
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition-colors"
                >
                  🇪🇸 Spanish
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition-colors"
                >
                  🇩🇪 German
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition-colors"
                >
                  🇯🇵 Japanese
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6 text-white">
              Contact Us
            </h4>

            <ul className="space-y-3 text-slate-400 text-sm">

              <li className="flex gap-2">
                <span className="text-indigo-400">📞</span>

                <a
                  href="tel:+919876543210"
                  className="hover:text-indigo-400 transition-colors"
                >
                  +91 9876 543 210
                </a>
              </li>

              <li className="flex gap-2">
                <span className="text-indigo-400">✉️</span>

                <a
                  href="mailto:hello@lingosphere.com"
                  className="hover:text-indigo-400 transition-colors"
                >
                  hello@lingosphere.com
                </a>
              </li>

              <li className="flex gap-2">
                <span className="text-indigo-400">📍</span>

                <span>
                  Suite 501, Tech Tower
                  <br />
                  Sector 62, New Delhi
                </span>
              </li>

            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-8" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">

          <p>
            © 2026 LingoSphere Institute. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a
              href="#"
              className="hover:text-indigo-400 transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-indigo-400 transition-colors"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="hover:text-indigo-400 transition-colors"
            >
              Refund Policy
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}