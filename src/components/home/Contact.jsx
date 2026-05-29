import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    language: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll contact you shortly.');
    setFormData({ name: '', email: '', phone: '', language: '', message: '' });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Get in Touch With Us
          </h2>
          <p className="text-indigo-100">
            Have questions? Our learning counselors are ready to help you find the perfect course.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="card-hover bg-white/10 backdrop-blur border border-white/20 p-8 rounded-2xl text-center">
            <div className="bg-indigo-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-indigo-400" />
            </div>
            <h3 className="text-lg font-bold mb-2">Call Us</h3>
            <p className="text-indigo-100">Mon-Sun: 9 AM - 10 PM IST</p>
            <a href="tel:+919876543210" className="text-indigo-400 hover:text-indigo-300 font-semibold mt-2">
              +91 9876 543 210
            </a>
          </div>

          <div className="card-hover bg-white/10 backdrop-blur border border-white/20 p-8 rounded-2xl text-center">
            <div className="bg-indigo-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-indigo-400" />
            </div>
            <h3 className="text-lg font-bold mb-2">Email Us</h3>
            <p className="text-indigo-100">We reply within 24 hours</p>
            <a href="mailto:hello@lingosphere.com" className="text-indigo-400 hover:text-indigo-300 font-semibold mt-2">
              hello@lingosphere.com
            </a>
          </div>

          <div className="card-hover bg-white/10 backdrop-blur border border-white/20 p-8 rounded-2xl text-center">
            <div className="bg-indigo-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-indigo-400" />
            </div>
            <h3 className="text-lg font-bold mb-2">Visit Us</h3>
            <p className="text-indigo-100">New Delhi, India</p>
            <p className="text-indigo-400 font-semibold mt-2">
              Suite 501, Tech Tower, Sector 62
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto animate-fadeInUp">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <option value="" className="bg-slate-900">Select Language of Interest</option>
                <option value="English" className="bg-slate-900">English</option>
                <option value="Spanish" className="bg-slate-900">Spanish</option>
                <option value="German" className="bg-slate-900">German</option>
                <option value="Japanese" className="bg-slate-900">Japanese</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 group"
            >
              Send Message
              <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
