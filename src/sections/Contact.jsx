import { useState } from "react";
import {
  Check,
  Clock,
  Copy,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

const EMAIL = "shamilvilakkumadathil@gmail.com";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Shamilvm",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shamilvm/",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/shamil_vm__/",
    icon: Instagram,
  },
];

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    action: "copy",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dubai, UAE",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 24 hours",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [hasCopied, setHasCopied] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status) setStatus(null);
  };

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.default.send(
        "service_apcutmj",
        "template_z4qt96n",
        {
          from_name: form.name,
          to_name: "Shamil",
          from_email: form.email,
          to_email: "shanushamil086@gmail.com",
          message: form.message,
        },
        "rLHkTGyrTfoHwxyuV",
      );

      setForm({ name: "", email: "", message: "" });
      setStatus({ type: "success", text: "Message sent. I'll get back to you soon." });
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        text: "Something went wrong. Please try again or email me directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="c-space my-20"
      aria-labelledby="contact-heading"
    >
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-400/80">
          Contact
        </p>
        <h2
          id="contact-heading"
          className="mt-3 sm:text-4xl text-3xl font-semibold text-white"
        >
          Let&apos;s talk
        </h2>
        <p className="mt-4 text-[#afb0b6] text-base leading-relaxed">
          Have a project in mind or want to collaborate? Send a message and
          I&apos;ll reply as soon as I can.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-5">
        <div className="lg:col-span-2 flex flex-col gap-4">
          {contactDetails.map(({ icon: Icon, label, value, action }) => (
            <div
              key={label}
              className="cursor-target border border-white/10 bg-white/[0.03] backdrop-blur-md rounded-lg p-5 flex items-start gap-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                <Icon className="h-4 w-4 text-indigo-300/90" strokeWidth={1.75} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-wider text-neutral-500">
                  {label}
                </p>
                {action === "copy" ? (
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="mt-1 flex w-full items-center gap-2 text-left text-sm font-medium text-white hover:text-indigo-200 transition-colors"
                  >
                    <span className="truncate">{value}</span>
                    {hasCopied ? (
                      <Check className="h-4 w-4 shrink-0 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4 shrink-0 text-neutral-500" />
                    )}
                  </button>
                ) : (
                  <p className="mt-1 text-sm font-medium text-white">{value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="cursor-target border border-white/10 bg-white/[0.03] backdrop-blur-md rounded-lg p-5">
            <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4">
              Social
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-neutral-400 transition-colors hover:border-white/20 hover:text-white hover:bg-white/[0.08]"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="cursor-target h-full border border-white/10 bg-white/[0.03] backdrop-blur-md rounded-lg sm:p-8 p-5">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="space-y-2">
                  <span className="text-sm text-neutral-400">Full name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="contact-field"
                    placeholder="Your name"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-neutral-400">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="contact-field"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-sm text-neutral-400">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="contact-field resize-none"
                  placeholder="Tell me about your project, timeline, or idea..."
                />
              </label>

              {status && (
                <p
                  role="status"
                  className={`text-sm rounded-lg px-4 py-3 border ${
                    status.type === "success"
                      ? "text-green-300 bg-green-500/10 border-green-500/20"
                      : "text-red-300 bg-red-500/10 border-red-500/20"
                  }`}
                >
                  {status.text}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="contact-submit group"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                {loading ? "Sending..." : "Send message"}
                {!loading && (
                  <Send
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                  />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
