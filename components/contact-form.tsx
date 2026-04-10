"use client";

import type React from "react";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, CheckCircle, XCircle, Clock, Phone } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    idea: "",
    timeline: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const payload = {
      access_key: "650bd897-b475-4b31-8ef3-0e84d93f5032",
      name: formData.name,
      email: formData.email,
      company: formData.company,
      timeline: formData.timeline,
      problem: formData.idea,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          idea: "",
          timeline: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="px-4 md:px-8 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-mono text-xs uppercase mb-2 block">
                Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-transparent border-b-2 border-white/30 py-3 font-mono focus:outline-none focus:border-[#4a0dbc] transition-colors text-white placeholder:text-white/50"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="font-mono text-xs uppercase mb-2 block">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent border-b-2 border-white/30 py-3 font-mono focus:outline-none focus:border-[#4a0dbc] transition-colors text-white placeholder:text-white/50"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-mono text-xs uppercase mb-2 block">
                Company/Startup
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full bg-transparent border-b-2 border-white/30 py-3 font-mono focus:outline-none focus:border-[#4a0dbc] transition-colors text-white placeholder:text-white/50"
                placeholder="Your Startup"
              />
            </div>
            <div>
              <label className="font-mono text-xs uppercase mb-2 block">
                Timeline
              </label>
              <select
                value={formData.timeline}
                onChange={(e) =>
                  setFormData({ ...formData, timeline: e.target.value })
                }
                className="w-full bg-transparent border-b-2 border-white/30 py-3 font-mono focus:outline-none focus:border-[#4a0dbc] transition-colors cursor-pointer text-white"
              >
                <option value="" className="bg-black">
                  Select timeline
                </option>
                <option value="asap" className="bg-black">
                  ASAP (Next 2 weeks)
                </option>
                <option value="1month" className="bg-black">
                  Within 1 month
                </option>
                <option value="2months" className="bg-black">
                  Within 2 months
                </option>
                <option value="flexible" className="bg-black">
                  Flexible
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-mono text-xs uppercase mb-2 block">
              Describe your idea (rough is totally fine) *
            </label>
            <textarea
              required
              value={formData.idea}
              onChange={(e) =>
                setFormData({ ...formData, idea: e.target.value })
              }
              rows={3}
              className="w-full bg-transparent border-2 border-white/30 p-4 font-mono focus:outline-none focus:border-[#4a0dbc] transition-colors resize-none text-white placeholder:text-white/50"
              placeholder="Describe your idea and target market..."
            />
          </div>

          <div>
            <label className="font-mono text-xs uppercase mb-2 block">
              Additional Details
            </label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={3}
              className="w-full bg-transparent border-2 border-white/30 p-4 font-mono focus:outline-none focus:border-[#4a0dbc] transition-colors resize-none text-white placeholder:text-white/50"
              placeholder="Budget, specific features, or any other details..."
            />
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="group flex items-center gap-4 bg-white text-black px-8 py-4 font-mono uppercase hover:bg-[#4a0dbc] hover:text-white transition-colors shadow-lg shadow-[#4a0dbc]/40 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
              <ArrowRight
                className="group-hover:translate-x-2 transition-transform"
                size={20}
              />
            </button>

            {status === "success" && (
              <div className="flex items-center gap-2 text-green-400 font-mono text-sm">
                <CheckCircle size={16} />
                Message sent successfully!
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2 text-red-400 font-mono text-sm">
                <XCircle size={16} />
                Failed to send message. Please try again.
              </div>
            )}
          </div>
        </form>

        <div className="space-y-12">
          <div>
            <h3 className="font-serif text-2xl uppercase mb-6">Get in Touch</h3>
            <div className="space-y-4 font-mono text-sm">
              <a
                href="mailto:muhammadtanveerabbas.contact@gmail.com"
                className="flex items-center gap-4 hover:text-[#4a0dbc] transition-colors"
              >
                <Mail size={20} />
                Contact Mail
              </a>
              <div className="flex items-center gap-4">
                <MapPin size={20} />
                Available Worldwide (PKT  UTC+5)
              </div>
              <div className="flex items-center gap-4">
                <Clock size={20} />
                Response time: Within 24 hours
              </div>
              <div className="flex items-center gap-4">
                <Clock size={20} />
                Best time: Weekday mornings
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} />
                Available for calls: Mon-Fri, 9 AM-6 PM PKT
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-white/30 p-8 bg-white/5">
              <h3 className="font-serif text-lg uppercase mb-4">Next Steps</h3>
              <ol className="font-mono text-xs text-white/70 space-y-2">
                <li>1. Share your idea and goals</li>
                <li>2. We validate the MVP scope</li>
                <li>3. Define timeline and deliverables</li>
                <li>4. Start building in 2-3 weeks</li>
                <li>5. Launch and scale your MVP</li>
              </ol>
            </div>

            <div className="border-2 border-[#4a0dbc] p-8 bg-[#4a0dbc]/10">
              <h3 className="font-serif text-lg uppercase mb-4 text-[#4a0dbc]">
                Why Work Together?
              </h3>
              <ul className="font-mono text-xs text-white/70 space-y-2">
                <li>✓ 2-3 week MVP delivery</li>
                <li>✓ Modern tech stack</li>
                <li>✓ Founder-focused approach</li>
                <li>✓ Scalable architecture</li>
                <li>✓ Post-launch support included</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
