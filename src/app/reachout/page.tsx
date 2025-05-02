"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function BusinessInfoPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    employees: "",
    location: "",
    website: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");

  // Auto-clear messages after 3 seconds
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess("");
        setError("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("/api/auth/reachout", formData);
      setSuccess(response.data.message || "Submitted successfully!");
      setFormData({
        companyName: "",
        industry: "",
        employees: "",
        location: "",
        website: "",
        description: "",
      })
    } catch (err: any) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 relative">
      {/* Timed Message */}
      {(error || success) && (
        <div
          className={`fixed top-5 right-5 z-50 px-4 py-3 rounded-md shadow-md transition duration-300 ${
            success
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {success || error}
        </div>
      )}

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-2 bg-[#0d0d0d] p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-1">Business Information</h2>
          <p className="text-sm text-gray-400 mb-6">
            Tell us about your business so we can customize our solutions to your needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Your Company Ltd."
              className="bg-[#1a1a1a] p-3 rounded-md border border-gray-700 text-white placeholder-gray-500"
              required
            />
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="bg-[#1a1a1a] p-3 rounded-md border border-gray-700 text-white"
              required
            >
              <option value="">Select your industry</option>
              <option>Technology</option>
              <option>Finance</option>
              <option>Retail</option>
              <option>Agriculture</option>
              <option>Education</option>
              <option>Goverment</option>
              <option>More</option>
            </select>

            <select
              name="employees"
              value={formData.employees}
              onChange={handleChange}
              className="bg-[#1a1a1a] p-3 rounded-md border border-gray-700 text-white"
              required
            >
              <option value="">Select company size</option>
              <option>1-10</option>
              <option>11-50</option>
              <option>51-200</option>
              <option>More</option>
            </select>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="bg-[#1a1a1a] p-3 rounded-md border border-gray-700 text-white"
              required
            >
              <option value="">Select your country</option>
              <option>Kenya</option>
              <option>Uganda</option>
              <option>Tanzania</option>
              <option>Rwanda</option>
              <option>Burundi</option>
              <option>Ethiopia</option>
              <option>Djibuti</option>
              <option>Eritrea</option>
              <option>Sudan</option>
              <option>Somalia</option>
            </select>
          </div>

          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://www.example.com"
            className="bg-[#1a1a1a] p-3 rounded-md border border-gray-700 text-white mt-4 w-full placeholder-gray-500"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Tell us about your business and its main activities..."
            className="bg-[#1a1a1a] p-3 rounded-md border border-gray-700 text-white mt-4 w-full placeholder-gray-500"
            required
          ></textarea>

          <button
            type="submit"
            className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit →"}
          </button>
        </form>

        {/* Resources Panel */}
        <div className="bg-[#111] p-6 rounded-xl shadow-lg space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-green-400 mb-2">Resources & Support</h3>
            <p className="text-sm text-gray-400 mb-2">
              See our automation solutions in action with a personalized demo.
            </p>
            <Link href="/demo">
            <button className="bg-green-600 hover:bg-green-700 w-full py-2 rounded-md font-semibold transition cursor-pointer">
              📅 Book a Demo
            </button>
            </Link>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-gray-300">Helpful Resources</h4>
            <ul className="space-y-1 text-green-400 text-sm">
              <li>📘 Automation Guide (PDF)</li>
              <li>🎥 Product Overview Video</li>
              <li>📊 ROI Calculator</li>
              <li>📂 Case Studies</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-gray-300">Need Help?</h4>
            <p className="text-sm text-gray-400">Our team is ready to assist you with any questions.</p>
            <ul className="mt-2 space-y-1 text-sm text-white">
              <li>📞 +254 746741528</li>
              <li>📧 scriptcruisetechnologies@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
