function Contact() {
  return (
    <section id="contact" className="bg-stone-950 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-amber-400 text-xs tracking-[0.4em] uppercase mb-3">— Get In Touch</p>
        <h2 className="font-mono text-white text-3xl md:text-4xl font-bold mb-4">
          Let's Work Together<span className="text-amber-400">.</span>
        </h2>
        <p className="text-stone-400 text-sm max-w-md leading-relaxed mb-10">
          Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
        </p>
        <a
          href="/contact"
          className="inline-block font-mono text-xs tracking-widest uppercase bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold px-8 py-4 transition-colors duration-200"
        >
          Send Me a Message →
        </a>
      </div>
    </section>
  )
}

export default Contact