
"use client"
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const features = [
  {
    title: "Automation Workflows",
    description: "Streamline repetitive tasks with powerful, no-code automation pipelines.",
  },
  {
    title: "AI-Driven Analytics",
    description: "Make smarter decisions with real-time, predictive insights powered by AI.",
  },
  {
    title: "Custom ERP Modules",
    description: "Tailored ERP components for Finance, Inventory, HR, and more.",
  },
  {
    title: "IoT Device Integration",
    description: "Seamless connection with smart sensors for real-time monitoring and control.",
  },
  {
    title: "Web & Mobile Apps",
    description: "Robust and scalable applications with modern UX/UI design.",
  },
  {
    title: "SEO & Digital Marketing",
    description: "Boost online presence with data-backed marketing strategies.",
  },
];

const FeaturesPage = () => {
  return (
    <div className="bg-[#071d13] min-h-screen text-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-4">
          Discover the Power of <span className="text-green-500">ScriptCruise</span> Features
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Explore the solutions that help businesses across East Africa optimize operations, reduce costs, and innovate.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#0c2b1e] p-6 rounded-xl border border-[#1f3d2d] hover:border-green-500 transition"
            >
              <CheckCircle2 className="text-green-400 mb-3" size={28} />
              <h3 className="text-lg font-semibold mb-1 text-white">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400 mb-4">Need a custom solution for your organization?</p>
         <Link href="/reachout"> <button type="button" className="cursor-pointer bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-lg transition">
            Book a Free Consultation
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
