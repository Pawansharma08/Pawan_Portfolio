'use client';

import { motion } from 'framer-motion';
import ScrollyCanvas from '../components/ScrollyCanvas';
import Overlay from '../components/Overlay';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <main className="relative">
      {/* ScrollyCanvas section */}
      <section className="relative h-[500vh]">
        <ScrollyCanvas />
        <Overlay />
      </section>

      {/* Projects section after scroll zone */}
      <section className="min-h-screen py-20">
        <Projects />
      </section>
    </main>
  );
}