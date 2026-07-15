'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Lexsyra",
    description: "An AI training platform for companies. It automatically turns business documents into interactive lessons and uses an AI voice tutor to run realistic practice conversations with employees, helping HR teams onboard and train staff faster.",
    image: "/images/lexsyra.png",
    tags: ["AI Voice Tutor", "Upskilling Telemetry"],
    link: "https://www.lexsyra.com/"
  },
  {
    id: 2,
    title: "Next Predict",
    description: "An AI-powered mobile app that helps you predict stock prices. It analyzes the stock's past 100 days of data and recent activity to forecast if the price will go up or down in the next 5 minutes with target ranges and confidence levels, making stock trading easier for everyone.",
    image: "/images/nextpredict.png",
    tags: ["Mobile AI", "Quantitative Telemetry"]
  },
  {
    id: 3,
    title: "Viom",
    description: "A premium OTT video streaming platform clone. It features on-demand movies, custom category lists, and integrated live streaming support to watch broadcast channels in real-time, making video entertainment accessible anywhere.",
    image: "/images/viom.png",
    tags: ["Entertainment", "Live Streaming"]
  },
  {
    id: 4,
    title: "GIETU Official",
    description: "A massive university-scale orchestration system. Features real-time academic telemetry, dynamic assessment kernels, and intuitive administrative nodes.",
    image: "/images/gietu_official.png",
    tags: ["Kotlin Architecture", "2.4k+ active"],
    link: "https://play.google.com/store/apps/details?id=com.gietuofficialapp.gietuofficial"
  },
  {
    id: 5,
    title: "AI Friend Forever",
    description: "Synthesizing human interaction through recursive neural feedback. Implements advanced role-modeling and sentiment extraction kernels for unprecedented conversational depth.",
    image: "/images/Aff.jpg",
    tags: ["Generative Engine", "Neural Context"]
  }
];

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="mb-20 text-center">
        <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-6">Production Clusters</h2>
        <h3 className="text-5xl font-outfit font-black tracking-tighter">Featured Architectures</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-3xl overflow-hidden glass border border-white/10 hover:border-primary/30 transition-all duration-500"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-8 space-y-6">
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-4 py-1.5 glass rounded-full text-[10px] font-black uppercase tracking-widest ${
                      tag.includes('active') ? 'text-primary' :
                      tag.includes('Neural') ? 'text-secondary' :
                      tag.includes('Telemetry') ? 'text-tertiary' :
                      'border border-white/10'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h4 className="text-3xl font-black tracking-tighter">{project.title}</h4>
              <p className="text-slate-400 leading-relaxed font-medium">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest group/btn text-primary"
                >
                  Execute Deployment
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover/btn:translate-x-1 transition-transform"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}