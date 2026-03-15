import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black-100 flex-col relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center c-space w-full max-w-2xl tracking-tight">
        
        {/* Simple 404 Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="text-[120px] sm:text-[160px] md:text-[200px] font-bold text-white leading-none select-none">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-primary transform -rotate-12 mix-blend-difference" />
        </motion.div>

        {/* Clean Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="space-y-6 mt-6 flex flex-col items-center"
        >
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-medium text-white">
              Page not found
            </h2>
            <p className="text-gray-400 text-base max-w-sm mx-auto">
              The page you are looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* Simple Button */}
          <Link to="/" className="inline-block mt-8 cursor-target group">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Go back home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
