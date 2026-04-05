
function Hero() {
  return (
    <section className="min-h-screen bg-stone-950 flex items-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full py-24">
        <p className="font-mono text-amber-400 text-xs tracking-[0.4em] uppercase mb-6">
          — Available for work
        </p>
        <h1 className="font-mono text-white text-5xl md:text-7xl font-bold leading-none tracking-tight mb-6">
          Full Stack<br />
          <span className="text-stone-500">Developer</span>
          <span className="text-amber-400">.</span>
        </h1>
        <p className="text-stone-400 text-base md:text-lg max-w-xl leading-relaxed mb-10">
          I build clean, fast, and scalable web applications — from pixel-perfect UIs to robust backend systems. Let's turn your ideas into products.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="font-mono text-xs tracking-widest uppercase bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold px-6 py-3 transition-colors duration-200"
          >
            View Projects →
          </a>
          <a
            href="#contact"
            className="font-mono text-xs tracking-widest uppercase border border-stone-700 hover:border-amber-400 text-stone-400 hover:text-amber-400 px-6 py-3 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 flex flex-wrap gap-10 border-t border-stone-800 pt-10">
          {[["2+", "Years Experience"], ["20+", "Projects Shipped"], ["10+", "Happy Clients"]].map(([num, label]) => (
            <div key={label}>
              <p className="font-mono text-white text-3xl font-bold">{num}</p>
              <p className="font-mono text-stone-500 text-xs tracking-widest uppercase mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero