import { useState } from "react"
import { useNavigate } from "react-router-dom"

function ContactMe() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("idle") // idle | loading | success | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"

    if (!formData.email.trim()) newErrors.email = "Email is required"
    
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    return newErrors
  }

  const sendFormData = async () => {
    setStatus("loading")
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!response.ok) throw new Error("Failed to send")
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Error sending form data:", error)
      setStatus("error")
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear field error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleSubmit = () => {
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    sendFormData()
  }

  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center p-6 font-mono">
      <div className="w-full max-w-lg">

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-stone-500 hover:text-amber-400 text-xs tracking-widest uppercase transition-colors duration-200 mb-8"
        >
          ← Back
        </button>

        {/* Header */}
        <div className="mb-10">
          <p className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-2">— get in touch</p>
          <h1 className="text-white text-4xl font-bold tracking-tight leading-none">
            Contact<span className="text-amber-400">.</span>
          </h1>
        </div>

        {/* Success banner */}
        {status === "success" && (
          <div className="mb-6 border border-emerald-500/40 bg-emerald-500/10 rounded-sm px-4 py-3 text-emerald-400 text-sm flex items-center gap-2">
            <span>✓</span> Message sent — I'll get back to you soon.
          </div>
        )}

        {/* Error banner */}
        {status === "error" && (
          <div className="mb-6 border border-red-500/40 bg-red-500/10 rounded-sm px-4 py-3 text-red-400 text-sm flex items-center gap-2">
            <span>✕</span> Something went wrong. Please try again.
          </div>
        )}

        {/* Form fields */}
        <div className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-stone-400 text-xs tracking-widest uppercase mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              disabled={status === "loading"}
              className={`w-full bg-stone-900 border ${
                errors.name ? "border-red-500/70" : "border-stone-700"
              } rounded-sm px-4 py-3 text-white placeholder-stone-600 text-sm
              focus:outline-none focus:border-amber-400 transition-colors duration-200
              disabled:opacity-50 disabled:cursor-not-allowed`}
            />
            {errors.name && (
              <p className="mt-1.5 text-red-400 text-xs">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-stone-400 text-xs tracking-widest uppercase mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              disabled={status === "loading"}
              className={`w-full bg-stone-900 border ${
                errors.email ? "border-red-500/70" : "border-stone-700"
              } rounded-sm px-4 py-3 text-white placeholder-stone-600 text-sm
              focus:outline-none focus:border-amber-400 transition-colors duration-200
              disabled:opacity-50 disabled:cursor-not-allowed`}
            />
            {errors.email && (
              <p className="mt-1.5 text-red-400 text-xs">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-stone-400 text-xs tracking-widest uppercase mb-2">
              Message
            </label>
            <textarea
              name="message"
              placeholder="What's on your mind?"
              value={formData.message}
              onChange={handleChange}
              disabled={status === "loading"}
              rows={5}
              className={`w-full bg-stone-900 border ${
                errors.message ? "border-red-500/70" : "border-stone-700"
              } rounded-sm px-4 py-3 text-white placeholder-stone-600 text-sm
              focus:outline-none focus:border-amber-400 transition-colors duration-200
              resize-none disabled:opacity-50 disabled:cursor-not-allowed`}
            />
            {errors.message && (
              <p className="mt-1.5 text-red-400 text-xs">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            className="w-full bg-amber-400 hover:bg-amber-300 disabled:bg-amber-400/50
            text-stone-950 font-bold text-sm tracking-widest uppercase
            py-3.5 rounded-sm transition-colors duration-200
            disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Sending...
              </>
            ) : (
              "Send Message →"
            )}
          </button>
        </div>

      </div>
    </div>
  )
}

export default ContactMe