import React from 'react';
import { Flag, Landmark, School, MoveRight } from 'lucide-react';

const countryData = [
  {
    name: 'Germany',
    highlight: 'Public universities, low tuition, strong engineering & research',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHZXJtYW55fGVufDB8MHx8fDE3NjIzOTM5ODF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    points: ['TU9 Universities', 'Blocked Account & Visa', 'APS & Uni-Assist guidance'],
  },
  {
    name: 'United Kingdom',
    highlight: '1-year Master’s, world-class universities, PSW visas',
    image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=1600&auto=format&fit=crop',
    points: ['Russell Group', 'IELTS & SOP coaching', 'Scholarship mapping'],
  },
  {
    name: 'United States',
    highlight: 'Top-ranked programs, research, OPT opportunities',
    image: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db?q=80&w=1600&auto=format&fit=crop',
    points: ['STEM OPT', 'Assistantships', 'Profile building'],
  },
  {
    name: 'Ireland',
    highlight: 'Tech hub, friendly immigration, growing opportunities',
    image: 'https://images.unsplash.com/photo-1530538095376-a4936b35b5f0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJcmVsYW5kfGVufDB8MHx8fDE3NjIzOTM5ODF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    points: ['1–2 year PSW', 'Industry links', 'Fast decisions'],
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Top Study Destinations</h2>
            <p className="mt-2 text-slate-600">Focused expertise in Germany with tailored pathways for the UK, USA and Ireland.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-slate-50">Get a shortlist <MoveRight className="h-4 w-4"/></a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {countryData.map((c) => (
            <div key={c.name} className="group rounded-2xl border bg-white/70 shadow-sm overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.image} alt={c.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-lg">{c.name}</h3>
                <p className="text-sm text-slate-600">{c.highlight}</p>
                <ul className="mt-3 space-y-1 text-sm text-slate-700">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-center gap-2"><Flag className="h-3.5 w-3.5 text-sky-600"/> {p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
