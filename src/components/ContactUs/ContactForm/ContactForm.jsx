import { useState } from "react";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
  };

  return (
    <div className="w-full h-full">
      <form
        onSubmit={handleSubmit}
        className="w-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-10 text-white"
      >
        <h2 className="mb-8">
          <SectionHeader firstWord="Get in Touch" />
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-zinc-400 text-sm font-medium mb-2 uppercase tracking-widest">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-mainGold focus:outline-none transition-all text-white"
            />
          </div>

          <div>
            <label className="block text-zinc-400 text-sm font-medium mb-2 uppercase tracking-widest">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="email@example.com"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-mainGold focus:outline-none transition-all text-white"
            />
          </div>

          <div>
            <label className="block text-zinc-400 text-sm font-medium mb-2 uppercase tracking-widest">
              Your Message
            </label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="How can we help you?"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-mainGold focus:outline-none transition-all text-white resize-none"
            ></textarea>
          </div>

          <button className="w-full py-4 bg-mainGold text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 rounded-lg mt-4">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}