"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function BookDemoPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    date: "",
    time: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
    const [success, setSuccess] = useState<string>("");
    const [error, setError] = useState<string>("");
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submit logic here (e.g., send to backend or EmailJS)
    setSubmitted(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("/api/auth/demo", form);
      setSuccess(response.data.message || "Submitted successfully!");
      setForm({
        name: "",
        email: "",
        company: "",
        date: "",
        time: "",
        notes: "",
      })
    } catch (err: any) {
      setError("Something went wrong. Please try again.");
    } finally {
    
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="bg-[#0d0d0d] max-w-2xl w-full p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-2">Book a Demo</h2>
        <p className="text-sm text-gray-400 mb-6">
          Schedule a personalized demo with our team. We'll walk you through how our automation solution can help your business.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-[#1a1a1a] border border-gray-700 text-white placeholder-gray-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-[#1a1a1a] border border-gray-700 text-white placeholder-gray-500"
            required
          />
          <input
            type="text"
            name="company"
            required
            placeholder="Your Company Name"
            value={form.company}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-[#1a1a1a] border border-gray-700 text-white placeholder-gray-500"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-[#1a1a1a] border border-gray-700 text-white"
              required
            />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-[#1a1a1a] border border-gray-700 text-white"
              required
            />
          </div>
          <textarea
            name="notes"
            rows={4}
            value={form.notes}
            onChange={handleChange}
            placeholder="Anything you'd like us to know ahead of the call?"
            className="w-full p-3 rounded-md bg-[#1a1a1a] border border-gray-700 text-white placeholder-gray-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md transition"
          >
            {submitted ? "Submitted ✔️" : "Book Demo"}
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-green-400 text-center">Thank you! We'll be in touch shortly.</p>
        )}
      </div>

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

    </div>
  );
}
