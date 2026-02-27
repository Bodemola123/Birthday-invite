import { motion } from "framer-motion";

interface NoPageProps {
  onGoBack: () => void;
}

export default function NoPage({ onGoBack }: NoPageProps) {
  return (
    <div className="min-h-screen bg-linear-to-br from-stone-100 via-stone-50 to-rose-50 flex items-center justify-center p-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-stone-200/50"
      >
        <div className="text-center space-y-7">

          {/* Dramatic Emoji */}
          <motion.div
            className="text-6xl"
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.8 }}
          >
            😌
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-4xl font-light text-stone-800 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Oops.
          </motion.h1>

          {/* Main Message */}
          <motion.div
            className="space-y-6 text-stone-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg font-light">
              That wasn’t really a question.
            </p>

            <p className="text-lg font-light">
              You don’t actually have a choice 😌
            </p>

            <p className="text-lg font-light">
              <span className="font-medium">Attendance is compulsory.</span>
            </p>

            <p className="text-lg font-light">
              Management will still be in touch regarding your selection.
            </p>

            <p className="text-xl text-rose-800 font-light pt-4">
              See you at dinner.
            </p>
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div
            className="pt-8 text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://chat.whatsapp.com/CbJTKnqtrL4AYaPtw808rO?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium text-lg transition-all duration-300 shadow-lg inline-block"
            >
              Join the Girls’ Dinner Group 💬
            </a>
          </motion.div>

          {/* Optional back button (if you still want it) */}
          <motion.div className="pt-4">
            <button
              onClick={onGoBack}
              className="text-sm text-stone-500 hover:text-stone-700 transition"
            >
              (Fine… take me back)
            </button>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}