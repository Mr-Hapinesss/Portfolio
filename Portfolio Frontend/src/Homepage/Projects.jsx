import { projects } from "./data"

function Projects() {
  return (
    <section id="projects" className="bg-stone-950 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-amber-400 text-xs tracking-[0.4em] uppercase mb-3">— Selected Work</p>
        <h2 className="font-mono text-white text-3xl md:text-4xl font-bold mb-12">
          Projects<span className="text-amber-400">.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-stone-800 hover:border-amber-400/50 p-6 flex flex-col gap-4 transition-colors duration-300 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-widest uppercase text-amber-400/70">{project.tag}</span>
                <a
                  href={project.href}
                  className="font-mono text-xs text-stone-600 group-hover:text-amber-400 transition-colors duration-200"
                >
                  ↗
                </a>
              </div>
              <h3 className="font-mono text-white font-bold text-lg leading-tight">{project.title}</h3>
              <p className="text-stone-500 text-xs leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-800">
                {project.stack.map((tech) => (
                  <span key={tech} className="font-mono text-xs text-stone-600 bg-stone-900 px-2 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects