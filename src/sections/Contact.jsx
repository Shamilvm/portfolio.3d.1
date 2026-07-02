import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
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

      setLoading(false);
      alert("Your Message has been sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setLoading(false);
      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <section id="contact" className="c-space my-20">
      <div className="relative py-16 sm:py-24 flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt=""
          width={1920}
          height={1080}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover hidden sm:block opacity-40 pointer-events-none"
        />
        <div className="max-w-3xl relative z-10 sm:px-10 px-5">
          <h2 className="sm:text-4xl text-3xl font-semibold text-white">
            Let's talk
          </h2>
          <p className="text-md text-gray-400 mt-3">
            Whether you're dreaming up a bold new website, leveling up your
            current platform, or bringing a one-of-a-kind idea to life, I'm
            ready to turn your vision into something unforgettable. 🚀
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="cursor-target space-y-3">
              <span className="text-md px-2 text-gray-400">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 px-5 py-2 min-h-14 rounded-2xl placeholder:text-gray-300 text-sm text-gray-300 shadow-2xl focus:outline-none"
                placeholder="Your Name..."
              />
            </label>
            <label className="cursor-target space-y-3">
              <span className="text-md px-2 text-gray-400">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 px-5 py-2 min-h-14 rounded-2xl placeholder:text-gray-300 text-sm text-gray-300 shadow-2xl focus:outline-none"
                placeholder="example@gmail.com"
              />
            </label>
            <label className="cursor-target space-y-3">
              <span className="text-md px-2 text-gray-400">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-gray-900 px-5 py-2 min-h-14 rounded-2xl placeholder:text-gray-300 text-sm text-gray-300 shadow-2xl focus:outline-none"
                placeholder="Message here..."
              />
            </label>
            <button
              className="cursor-target bg-gray-800 px-5 py-2 min-h-10 rounded-2xl shadow-2xl flex justify-center items-center text-md text-white gap-3 font-semibold cursor-pointer"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}

              <img
                src="/assets/arrow-up.png"
                alt=""
                width={10}
                height={10}
                loading="lazy"
                decoding="async"
                className="w-2.5 h-2.5 object-contain invert brightness-0"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
