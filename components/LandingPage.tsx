import { Sparkles } from 'lucide-react';
import { motion } from "framer-motion";

interface LandingPageProps {
  onResponse: (response: 'yes' | 'no') => void;
}

export default function LandingPage({ onResponse }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-stone-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Sparkle effects */}
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`sparkle sparkle-${i + 1}`}></div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-stone-200/50"
      >
        <div className="text-center space-y-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <Sparkles className="w-12 h-12 text-amber-600 mx-auto animate-pulse" />
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-light text-stone-800 tracking-wide"
            >
              Hi
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-4 text-stone-700 leading-relaxed"
            >
              <p className="text-lg font-light">
                You&apos;ve been specially selected by <span className="font-medium">Ruda</span> to celebrate her birthday with her.
              </p>
              <p className="text-lg font-light">
                She&apos;s not doing anything loud this year… just good food, good vibes, and her favorite people.
              </p>
              <p className="text-xl font-light mt-8">
                Would you like to join her for an intimate birthday dinner?
              </p>
            </motion.div>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onResponse("yes")}
              className="px-10 py-4 bg-rose-100 hover:bg-rose-200 text-rose-900 rounded-full font-light text-lg transition-all duration-300 border border-rose-200"
            >
              💗 Yes, of course!
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onResponse("no")}
              className="px-10 py-4 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-full font-light text-lg transition-all duration-300 border border-stone-300"
            >
              🙄 I don&apos;t like enjoyment
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
