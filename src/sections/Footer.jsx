const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="c-space py-4 border-t border-gray-700 flex flex-col sm:flex-row justify-center items-center gap-5">
      {/* <div className="flex gap-3">
        <a
          href="https://github.com/Shamilvm"
          target="_blank"
          className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-950 border border-gray-800"
        >
          <img src="/assets/social/github.svg" alt="GitHub" width={24} height={24} loading="lazy" decoding="async" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://www.linkedin.com/in/shamilvm/"
          target="_blank"
          className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-950 border border-gray-800"
        >
          <img src="/assets/social/in.png" alt="LinkedIn" width={24} height={24} loading="lazy" decoding="async" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://www.instagram.com/shamil_vm__/"
          target="_blank"
          className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-950 border border-gray-800"
        >
          <img
            src="/assets/social/instagram.svg"
            alt="Instagram"
            width={24}
            height={24}
            loading="lazy"
            decoding="async"
            className="w-1/2 h-1/2"
          />
        </a>
      </div> */}
      <div className="text-white/50 flex gap-2 text-sm">
        <p>© {currentYear} Shamil Vm | All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
