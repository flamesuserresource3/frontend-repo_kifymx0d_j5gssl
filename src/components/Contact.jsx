import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We will reach out shortly.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Start your journey</h2>
            <p className="text-slate-600">Book a free counseling session. Our experts will evaluate your profile, shortlist universities, and guide you through the entire process.</p>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div className="rounded-xl border p-4">
                <Phone className="h-4 w-4 text-sky-600" />
                <p className="mt-2 font-medium">+91 90000 00000</p>
                <p className="text-slate-600">Call / WhatsApp</p>
              </div>
              <div className="rounded-xl border p-4">
                <Mail className="h-4 w-4 text-sky-600" />
                <p className="mt-2 font-medium">hello@i5overseas.com</p>
                <p className="text-slate-600">Email us</p>
              </div>
              <div className="rounded-xl border p-4">
                <MapPin className="h-4 w-4 text-sky-600" />
                <p className="mt-2 font-medium">Hyderabad, India</p>
                <p className="text-slate-600">Visit our office</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-slate-50 p-6 sm:p-8">
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Full Name</label>
                  <input type="text" required className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500 bg-white" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input type="email" required className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500 bg-white" placeholder="you@example.com" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <input type="tel" required className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500 bg-white" placeholder="+91" />
                </div>
                <div>
                  <label className="text-sm font-medium">Preferred Country</label>
                  <select required className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500 bg-white">
                    <option>Germany</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Ireland</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500 bg-white" placeholder="Tell us about your profile and goals"></textarea>
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-6 py-3 font-semibold text-white hover:bg-sky-700">
                <Send className="h-4 w-4" /> Request Callback
              </button>
              {status && <p className="text-sm text-emerald-700">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
