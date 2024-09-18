import React, { useState } from 'react';
import { Link } from "react-router-dom";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              >
                <option value="" disabled>Select a subject</option>
                <option value="Order Inquiry">Order Inquiry</option>
                <option value="Catering Services">Catering Services</option>
                <option value="Feedback">Feedback</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md"
            >
              Send
            </button>
          </form>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Details</h3>
          <p className="mb-2"><strong>Address:</strong> 123, Sweet Treats Bakery, Gurgaon</p>
          <p className="mb-2"><strong>Phone:</strong> +91 9310076667</p>
          <p className="mb-2"><strong>Email:</strong> sachdevak806@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;