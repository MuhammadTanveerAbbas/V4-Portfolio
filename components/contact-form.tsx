"use client";

import { ArrowRight, CheckCircle, Clock, Mail, MapPin, Phone, XCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { SERVICES } from "@/lib/services";
import { siteConfig } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  company: "",
  service: "",
  timeline: "",
  message: "",
};

export function ContactForm() {
  const searchParams = useSearchParams();
  const requestedService = searchParams.get("service") ?? "";
  const validService = SERVICES.some((service) => service.slug === requestedService)
    ? requestedService
    : "";

  const [formData, setFormData] = useState({ ...initialForm, service: validService });
  const [status, setStatus] = useState<Status>("idle");

  const update = (field: keyof typeof initialForm) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [field]: event.target.value });

  /*
    Bots fill every field they find. This one is hidden from people and
    rejected when it is filled, so the form has basic spam protection without a
    captcha.
  */
  const [honeypot, setHoneypot] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (honeypot) return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New enquiry from ${formData.name || "the website"}`,
          from_name: siteConfig.name,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service || "Not specified",
          timeline: formData.timeline,
          message: formData.message,
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      setStatus("success");
      setFormData(initialForm);
      setHoneypot("");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-transparent border-b-2 border-white/30 py-3 font-mono focus:outline-none focus:border-[#4a0dbc] transition-colors text-white placeholder:text-white/40";

  return (
    <section className="px-4 md:px-8 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <form onSubmit={handleSubmit} noValidate={false} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="contact-name" className="font-mono text-xs uppercase mb-2 block">
                Name *
              </label>
              <input
                id="contact-name"
                type="text"
                required
                autoComplete="name"
                value={formData.name}
                onChange={update("name")}
                className={inputClass}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="font-mono text-xs uppercase mb-2 block">
                Email *
              </label>
              <input
                id="contact-email"
                type="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={update("email")}
                className={inputClass}
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="contact-company" className="font-mono text-xs uppercase mb-2 block">
                Company
              </label>
              <input
                id="contact-company"
                type="text"
                autoComplete="organization"
                value={formData.company}
                onChange={update("company")}
                className={inputClass}
                placeholder="Company name"
              />
            </div>
            <div>
              <label htmlFor="contact-service" className="font-mono text-xs uppercase mb-2 block">
                What do you need?
              </label>
              <select
                id="contact-service"
                value={formData.service}
                onChange={update("service")}
                className={`${inputClass} bg-black`}
              >
                <option value="">Select an option</option>
                {SERVICES.map((service) => (
                  <option key={service.slug} value={service.slug} className="bg-black">
                    {service.title}
                  </option>
                ))}
                <option value="something-else" className="bg-black">
                  Something else
                </option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="contact-timeline" className="font-mono text-xs uppercase mb-2 block">
              When would you like to start?
            </label>
            <input
              id="contact-timeline"
              type="text"
              value={formData.timeline}
              onChange={update("timeline")}
              className={inputClass}
              placeholder="For example: in the next month"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="font-mono text-xs uppercase mb-2 block">
              What is the problem you want solved? *
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={formData.message}
              onChange={update("message")}
              className={`${inputClass} resize-y`}
              placeholder="A short description of the work, who it is for and what should change."
            />
          </div>

          {/* Honeypot: hidden from people, irresistible to bots. */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="contact-botcheck">Leave this field empty</label>
            <input
              id="contact-botcheck"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(event) => setHoneypot(event.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="group flex items-center gap-4 bg-white text-black px-8 py-4 font-mono uppercase hover:bg-[#4a0dbc] hover:text-white transition-colors shadow-lg shadow-[#4a0dbc]/40 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Sending..." : "Send message"}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
                aria-hidden="true"
              />
            </button>

            <div aria-live="polite">
              {status === "success" && (
                <p className="flex items-center gap-2 text-green-400 font-mono text-sm">
                  <CheckCircle size={16} aria-hidden="true" />
                  Message sent. I will reply within one working day.
                </p>
              )}

              {status === "error" && (
                <p className="flex items-center gap-2 text-red-400 font-mono text-sm">
                  <XCircle size={16} aria-hidden="true" />
                  That did not go through. Please email{" "}
                  <a href={`mailto:${siteConfig.email}`} className="underline">
                    {siteConfig.email}
                  </a>
                </p>
              )}
            </div>
          </div>
        </form>

        <div className="space-y-12">
          <div>
            <h3 className="font-serif text-2xl uppercase mb-6">Get in touch</h3>
            <div className="space-y-4 font-mono text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 hover:text-[#4a0dbc] transition-colors"
              >
                <Mail size={20} aria-hidden="true" />
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-4">
                <MapPin size={20} aria-hidden="true" />
                {siteConfig.location}
              </div>
              <div className="flex items-center gap-4">
                <Clock size={20} aria-hidden="true" />
                Replies within one working day
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} aria-hidden="true" />
                Calls on weekday mornings, PKT
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-white/30 p-8 bg-white/5">
              <h3 className="font-serif text-lg uppercase mb-4">How it starts</h3>
              <ol className="font-mono text-xs text-white/70 space-y-2">
                <li>1. You describe the problem</li>
                <li>2. A short call to go through it</li>
                <li>3. A written scope and fixed price</li>
                <li>4. Build in visible stages</li>
                <li>5. Launch, documentation, handover</li>
              </ol>
            </div>

            <div className="border-2 border-[#4a0dbc] p-8 bg-[#4a0dbc]/10">
              <h3 className="font-serif text-lg uppercase mb-4 text-[#4a0dbc]">
                What you get
              </h3>
              <ul className="font-mono text-xs text-white/70 space-y-2">
                <li>A written scope before work begins</li>
                <li>Fixed price, no hourly billing</li>
                <li>Working software you can open at any time</li>
                <li>Documentation and a handover</li>
                <li>Full ownership of the code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
