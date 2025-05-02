'use client';
import React from 'react';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
const page = () => {
  return (
    <div>
    <div className="bg-gradient-to-r from-green-900 to-black text-white py-14 px-4 text-center">
    <h2 className="text-3xl font-bold mb-3">Ready to Transform Your Business?</h2>
    <p className="text-sm text-gray-200 mb-6 max-w-xl mx-auto">
      Join hundreds of businesses across East Africa that have revolutionized their operations with ScriptCruise automation solutions.
    </p>

    <div className="flex justify-center items-center gap-3 flex-wrap">
      <Link href={"/demo"}>
      <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded flex items-center gap-2 text-sm">
        Schedule a Free Consultation <Calendar size={16} />
      </button>
      </Link>
      <input
      read-only="true"
        type="text"
        placeholder=""
        className="rounded px-3 py-2 text-black text-sm w-60 border-amber-300 border-[1px] "
      />
    </div>
    </div>

    <div className="mt-8 text-gray-300 py-10 px-6 md:px-20 text-sm">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-6">
    
    {/* Brand Info */}
    <div>
      <div className="text-green-500 font-bold text-lg mb-2 flex items-center gap-1">
        <span className="text-white text-xl">Script</span> <span className="text-green-500">Cruise</span>
      </div>
      <p className="text-xs mb-4">
        East Africa’s leading business process automation company, helping organizations streamline operations and drive growth through innovative technology solutions.
      </p>
      <div className="flex gap-4 text-white text-sm">
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
      </div>
    </div>

    {/* Quick Links */}
    <div className='flex flex-col'>
      <h4 className="text-white font-semibold mb-2">Quick Links</h4>
      
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About Us</Link>
        <Link href={"/solutions"}>Solutions</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/features"}>Features</Link>
        
   
    </div>

    {/* Solutions */}
    <div>
      <h4 className="text-white font-semibold mb-2">Solutions</h4>
      <ul className="space-y-1">
        <li>Financial Services</li>
        <li>Healthcare</li>
        <li>Retail & E-commerce</li>
        <li>Manufacturing</li>
        <li>Agriculture</li>
        <li>Education</li>
      </ul>
    </div>

    {/* Contact Us */}
    <div>
      <h4 className="text-white font-semibold mb-2">Contact Us</h4>
      <ul className="space-y-2 text-sm">
        <li className="flex items-start gap-2">
          <span className="text-green-500">📍</span>
          <span>Kenlands, Nakuru, Kenya</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">📞</span>
          <span>+254 746340691 / +254 746741528</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">✉️</span>
          <span>scriptcruisetechnologies@gmail.com</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">🕒</span>
          <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
        </li>
      </ul>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="text-center text-xs text-gray-500 mt-6">
    © 2025 Script Cruise Technologies. All rights reserved. <br />
    <span className="mt-1 block">
      <a href="#" className="hover:underline mx-1">Privacy Policy</a> | 
      <a href="#" className="hover:underline mx-1">Terms of Service</a> | 
      <a href="#" className="hover:underline mx-1">Cookie Policy</a>
    </span>
  </div>
</div>

  </div>

  );
}

export default page;
