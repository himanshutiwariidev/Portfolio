import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-orange-500/20 bg-neutral-950 py-12 text-orange-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 text-sm sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="mb-3 inline-block border-b-2 border-orange-400 text-lg font-semibold text-orange-400">
            About Us
          </h3>
          <p className="mt-2 leading-relaxed text-orange-100/75">
            I specialize in full-stack MERN development, crafting dynamic web applications tailored to your business needs.
            Our expertise ensures seamless integration of MongoDB, Express.js, React, and Node.js for optimal performance.
          </p>
        </div>

        <div>
          <h3 className="mb-3 inline-block border-b-2 border-orange-400 text-lg font-semibold text-orange-400">
            Quick Links
          </h3>
          <ul className="mt-2 space-y-2">
            <li><Link to="/" className="transition hover:text-orange-400">Home</Link></li>
            <li><a href="#" className="transition hover:text-orange-400">Services</a></li>
            <li><Link to="/blog" className="transition hover:text-orange-400">Blog</Link></li>
            <li><Link to="/admin/login" className="transition hover:text-orange-400">Admin</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 inline-block border-b-2 border-orange-400 text-lg font-semibold text-orange-400">
            Legal
          </h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="transition hover:text-orange-400">Privacy Policy</a></li>
            <li><a href="#" className="transition hover:text-orange-400">Terms & Conditions</a></li>
            <li><a href="#" className="transition hover:text-orange-400">Help</a></li>
            <li><a href="#" className="transition hover:text-orange-400">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 inline-block border-b-2 border-orange-400 text-lg font-semibold text-orange-400">
            Contact Info
          </h3>
          <div className="mt-3 flex items-start gap-2 text-orange-100/75">
            <FaMapMarkerAlt className="mt-1 text-orange-400" />
            <p>C-546 New Ashok Nagar, New Delhi</p>
          </div>
          <div className="mt-3 flex items-center gap-2 text-orange-100/75">
            <FaEnvelope className="text-orange-400" />
            <p>Himanshhu.tiwarii.dev@gmail.com</p>
          </div>
          <div className="mt-4 flex gap-4 text-lg text-orange-400">
            <FaFacebookF className="cursor-pointer transition hover:text-orange-200" />
            <FaTwitter className="cursor-pointer transition hover:text-orange-200" />
            <FaInstagram className="cursor-pointer transition hover:text-orange-200" />
            <FaLinkedinIn className="cursor-pointer transition hover:text-orange-200" />
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-orange-500/10 pt-4 text-center text-sm text-orange-100/55">
        © 2025@TechnicalTiwarii. All rights reserved.
      </div>
    </footer>
  );
}
