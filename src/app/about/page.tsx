"use client"
import Link from 'next/link';
import React from 'react';
import { FaMapMarkedAlt, FaCogs, FaChartLine } from "react-icons/fa";
const page = () => {
  return (
    <div className="bg-[#0c1320] text-white py-16 px-6 text-center">
    {/* Heading */}
    <h2 className="text-2xl md:text-3xl font-bold mb-2">
      Why Choose <span className="text-green-500">ScriptCruise</span>
    </h2>
    <p className="text-sm text-gray-400 max-w-2xl mx-auto mb-10">
      We’re East Africa’s leading business process automation company, dedicated to helping organizations streamline operations and drive growth.
    </p>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
      {/* Card 1 */}
      <div className="bg-black rounded-md p-6 text-center">
        <FaMapMarkedAlt className="text-green-600 text-3xl mx-auto mb-3" />
        <h4 className="text-green-600 font-semibold mb-2">Local Expertise</h4>
        <p className="text-sm text-gray-400">
          Solutions tailored specifically for East African businesses and their unique challenges.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-black rounded-md p-6 text-center">
        <FaCogs className="text-green-600 text-3xl mx-auto mb-3" />
        <h4 className="text-green-600 font-semibold mb-2">End-to-End Implementation</h4>
        <p className="text-sm text-gray-400">
          From consultation to deployment and support, we handle the entire automation journey.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-black rounded-md p-6 text-center">
        <FaChartLine className="text-green-600 text-3xl mx-auto mb-3" />
        <h4 className="text-green-600 font-semibold mb-2">Proven Results</h4>
        <p className="text-sm text-gray-400">
          Our solutions have helped hundreds of businesses achieve significant ROI and efficiency gains.
        </p>
      </div>
    </div>

    {/* CTA Button */}
    <Link href={"/reachout"}>
    <button className="bg-white text-green-600 text-sm font-medium px-6 py-2 rounded-sm hover:bg-green-600 hover:text-white transition cursor-pointer">
      Learn More About Us →
    </button>
    </Link>

         {/* Marquee Services */}
         <div className="overflow-hidden whitespace-nowrap border-t border-gray-700 pt-4 mb-3">
          <h4 className='font-bold text-[#F8931F] underline my-3'>What we Offer</h4>
        <div className="text-sm text-gray-300 flex flex-wrap gap-10">
          {[
            'Web and Mobile Design', 'Graphic Design', 'ERP Systems', 'Web Applications',
            'SEO Optimization', 'Social Media Marketing', 'Gmail Marketing',
            'Mobile Applications', 'Desktop Applications', 'POS Systems',
            'AI-Powered Analytics', 'IoT-Based Smart Farming', 'IoT-Enabled Asset Tracking'
          ].map((service, index) => (
            <span key={index} className=" flex flex-wrap">
              {service}
            </span>
          ))}
        </div>
      </div>
  </div>
  );
}

export default page;
