import React, { useState } from 'react';
import { Globe2, Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <Globe2 className="h-6 w-6 text-sky-600" />
            <span className="text-slate-900">i5 Overseas Consultancy</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#destinations" className="hover:text-sky-700">Destinations</a>
            <a href="#services" className="hover:text-sky-700">Services</a>
            <a href="#process" className="hover:text-sky-700">Process</a>
            <a href="#contact" className="hover:text-sky-700">Contact</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-700">
              <Phone className="h-4 w-4" /> Get Guidance
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-3 text-sm">
            <a href="#destinations" className="block" onClick={() => setOpen(false)}>Destinations</a>
            <a href="#services" className="block" onClick={() => setOpen(false)}>Services</a>
            <a href="#process" className="block" onClick={() => setOpen(false)}>Process</a>
            <a href="#contact" className="block" onClick={() => setOpen(false)}>Contact</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-700" onClick={() => setOpen(false)}>
              <Phone className="h-4 w-4" /> Get Guidance
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
