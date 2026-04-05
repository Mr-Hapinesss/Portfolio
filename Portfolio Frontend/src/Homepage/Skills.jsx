import { skills } from "./data"

function Skills() {
  return (
    <section id="skills" className="bg-stone-900 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-amber-400 text-xs tracking-[0.4em] uppercase mb-3">— What I Work With</p>
        <h2 className="font-mono text-white text-3xl md:text-4xl font-bold mb-12">
          Skills<span className="text-amber-400">.</span>
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map(({ category, items }) => (
            <div key={category} className="border border-stone-800 p-6">
              <p className="font-mono text-xs tracking-widest uppercase text-amber-400/70 mb-4">{category}</p>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="font-mono text-stone-400 text-sm flex items-center gap-2">
                    <span className="text-amber-400/40">—</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default Skills