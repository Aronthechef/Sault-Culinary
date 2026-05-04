import { motion } from "framer-motion";
import { useState } from "react";

/*
  SAULT Culinary - Modernist Portfolio Version
  Inspired by Mouthwash Studio's Swiss design principles:
  - Grid-based, minimal layout
  - Generous whitespace
  - Large, prominent visuals
  - Concise text hierarchies
  - Focus on content over chrome
*/

function NavArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const projects = [
  {
    id: 1,
    title: "Menu Systems",
    category: "Strategic Architecture",
    description: "Proprietary flavor systems and menu engineering for QSR brands",
    image: "https://images.unsplash.com/photo-1495565720989-61d1dba3fc12?q=80&w=2000&auto=format&fit=crop",
    color: "#f3eee3"
  },
  {
    id: 2,
    title: "Concept Development",
    category: "Innovation Strategy",
    description: "From white space identification to commercial launch architecture",
    image: "https://images.unsplash.com/photo-1495567720989-61d1dba3fc12?q=80&w=2000&auto=format&fit=crop",
    color: "#f3eee3"
  },
  {
    id: 3,
    title: "Flavor Intelligence",
    category: "Research & Trends",
    description: "Emerging taste patterns and behavioral consumer mapping",
    image: "https://images.unsplash.com/photo-1504674900954-da9aac1b5a04?q=80&w=2000&auto=format&fit=crop",
    color: "#f3eee3"
  },
  {
    id: 4,
    title: "Category Architecture",
    category: "Competitive Analysis",
    description: "Territory definition and opportunity clustering before investment",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2000&auto=format&fit=crop",
    color: "#f3eee3"
  },
];

const engagementModels = [
  {
    number: "01",
    name: "SIGNAL SESSION™",
    duration: "4 weeks",
    desc: "Rapid external perspective on menu opportunity and flavor direction."
  },
  {
    number: "02",
    name: "EMBED™",
    duration: "Ongoing",
    desc: "Integrated culinary intelligence partnership within your innovation cycle."
  },
  {
    number: "03",
    name: "TERRITORY MAP™",
    duration: "6 weeks",
    desc: "Category architecture and opportunity structure before development spend."
  },
  {
    number: "04",
    name: "LAB ACCESS™",
    duration: "Custom",
    desc: "Proprietary systems, concept platforms, and next-generation formats."
  },
];

export default function ModernistPortfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <main className="bg-[#f3eee3] text-[#10100e] min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-[#f3eee3]/95 backdrop-blur-sm border-b border-[#10100e]/10">
        <nav className="flex items-center justify-between px-6 md:px-12 py-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-semibold tracking-[0.4em] uppercase"
          >
            SAULT
          </motion.div>
          <div className="flex items-center gap-8">
            <a href="#work" className="text-xs font-light tracking-[0.2em] uppercase hover:opacity-60 transition">Work</a>
            <a href="#contact" className="text-xs font-light tracking-[0.2em] uppercase hover:opacity-60 transition">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero / Intro Section */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight tracking-[-0.04em] mb-8">
              Culinary Innovation Partner
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-[#514b41] max-w-2xl">
              Private intelligence and strategic concept development for restaurant, QSR, and CPG brands that need external perspective on menu territory, flavor systems, and consumer experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Work Grid */}
      <section id="work" className="px-6 md:px-12 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-[#8c7449] mb-4">Strategic Services</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-[-0.03em]">Core Engagements</h2>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 mb-32">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="mb-6 overflow-hidden rounded-lg bg-[#e8e3d8] aspect-square md:aspect-auto md:h-[400px]">
                <motion.div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                  animate={{
                    scale: hoveredProject === project.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#8c7449]">
                  {project.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-[-0.02em] group-hover:opacity-70 transition">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#514b41] max-w-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Engagement Models Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="border-t border-[#10100e]/10 pt-24"
        >
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-[#8c7449] mb-4">Service Models</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-[-0.03em] mb-16">Engagement Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
            {engagementModels.map((model, idx) => (
              <motion.div
                key={model.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="pb-8 border-b border-[#10100e]/10"
              >
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-3xl font-black tracking-[-0.02em]">{model.number}</span>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-[-0.02em]">
                    {model.name}
                  </h3>
                </div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8c7449] mb-4">
                  {model.duration}
                </p>
                <p className="text-sm leading-relaxed text-[#514b41]">
                  {model.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About / Founder Section */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-[#10100e]/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-[#8c7449] mb-6">About</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-[-0.03em] mb-12">
              Led by Aron Habiger
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-[#514b41] mb-8">
              Corporate culinary innovation executive operating at the intersection of QSR commercialization, flavor systems, menu trend intelligence, and disruptive concept development. Specialized in bringing external perspective to food brands that have lost internal innovation momentum.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#10100e]/10">
              {["QSR Commercialization", "Flavor Architecture", "Concept Systems", "Innovation Strategy"].map((skill) => (
                <div key={skill} className="py-4">
                  <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#8c7449]">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="px-6 md:px-12 py-24 md:py-32 border-t border-[#10100e]/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-[#8c7449] mb-6">Get Started</p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-[-0.04em] mb-8">
            Let's talk strategy.
          </h2>
          <p className="text-lg leading-relaxed text-[#514b41] mb-12 max-w-2xl">
            For restaurant, QSR, CPG, and emerging food brands ready to move beyond incremental thinking.
          </p>
          
          <motion.button
            whileHover={{ x: 4 }}
            className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] border-b-2 border-[#10100e] pb-2 hover:opacity-60 transition"
          >
            Start Conversation
            <NavArrow />
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 border-t border-[#10100e]/10 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-[#8c7449]">
          © 2026 SAULT Culinary. All rights reserved.
        </p>
      </footer>
    </main>
  );
}