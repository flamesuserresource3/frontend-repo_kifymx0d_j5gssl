import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Destinations from './components/Destinations.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Contact />
      </main>
      <footer className="border-t bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 text-sm text-slate-600 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} i5 Overseas Consultancy. All rights reserved.</p>
          <p>
            Crafted for ambitious students pursuing global education. Serving Germany, the UK, USA, Ireland and more.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
