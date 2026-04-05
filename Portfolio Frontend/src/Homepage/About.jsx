function About() {
  return (
    <section id="about" className="bg-stone-900 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-amber-400 text-xs tracking-[0.4em] uppercase mb-3">— About Me</p>
        <h2 className="font-mono text-white text-3xl md:text-4xl font-bold mb-10">
          Who I Am<span className="text-amber-400">.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-stone-400 text-sm leading-relaxed">
            <p>
              I'm a full stack developer with a passion for building products that are as reliable under the hood as they are beautiful on the surface. I care deeply about code quality, performance, and user experience.
            </p>
            <p>
              My stack centers around the JavaScript ecosystem — React on the frontend, Node.js and Express on the backend, with MongoDB and PostgreSQL for data. I'm comfortable owning a feature end to end, from database schema to pixel-perfect UI.
            </p>
            <p>
              When I'm not coding, I'm reading about system design, contributing to open source, or exploring new tools that make development faster and more enjoyable.
            </p>
          </div>

          {/* Quick facts */}
          <div className="border border-stone-700 p-6 space-y-4">
            {[
              ["Location", "Nairobi, Kenya"],
              ["Availability", "Open to opportunities"],
              ["Focus", "Full Stack Web Dev"],
              ["Education", "BSc Computer Science"],
              ["Languages", "English, Swahili"],
            ].map(([key, val]) => (
              <div key={key} className="flex justify-between border-b border-stone-800 pb-4 last:border-0 last:pb-0">
                <span className="font-mono text-xs tracking-widest uppercase text-stone-600">{key}</span>
                <span className="font-mono text-xs text-stone-300">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About