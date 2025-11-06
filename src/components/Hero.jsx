import React from 'react';
import { Rocket, Star, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 right-1/3 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-indigo-100 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium text-sky-700 shadow-sm">
              <Rocket className="h-3.5 w-3.5" /> Study Abroad With Confidence
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              i5 Overseas Consultancy
            </h1>
            <p className="text-lg text-slate-600">
              Your trusted partner for international education. We specialize in Germany and also guide students to the UK, USA, Ireland and other top destinations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex justify-center rounded-md bg-sky-600 px-6 py-3 text-white font-semibold shadow hover:bg-sky-700">Get Free Counseling</a>
              <a href="#destinations" className="inline-flex justify-center rounded-md bg-white px-6 py-3 text-sky-700 font-semibold border hover:bg-slate-50">Explore Destinations</a>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-sm text-slate-700">
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-600"/> End-to-end visa guidance</li>
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-600"/> University shortlisting</li>
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-600"/> Scholarship assistance</li>
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl border bg-white/70 shadow-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop"
                alt="Students celebrating admissions"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block rounded-xl bg-white p-4 shadow-lg border">
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-amber-500" />
                <p className="text-sm font-medium">1000+ success stories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
