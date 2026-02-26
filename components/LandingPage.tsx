import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface LandingPageProps {
  onResponse: (response: "yes" | "no") => void;
}

export default function LandingPage({ onResponse }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-rose-50 to-stone-50 flex items-center justify-center p-6 relative overflow-hidden">
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
              Hi Lovelies 💕
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-5 text-stone-700 leading-relaxed"
            >
              <p className="text-lg font-light">
                <span className="font-medium">Rhoda is turning a year finer in a few days</span> 🤭✨
              </p>

              <p className="text-lg font-light">
                You’ve been specially selected to celebrate her birthday with her.
              </p>

              <p className="text-lg font-light">
                And this year feels different.
              </p>

              <div className="space-y-2 pt-2">
                <p className="text-lg font-light">✨ I’m choosing you.</p>
                <p className="text-lg font-light">✨ I’m choosing intentional vibes.</p>
                <p className="text-lg font-light">✨ I’m choosing fine dining and fine friends.</p>
              </div>

              <p className="text-lg font-light pt-4">
                It’s going to be an intentional girls’ dinner with the people I genuinely love being around.
              </p>

              <p className="text-lg font-light">
                Good food. Real conversations. Soft laughter. Main character energy.
              </p>

              <p className="text-xl font-light mt-6">
                Would you like to join me? 👀💕
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
              💗 Of course, I’m there!
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onResponse("no")}
              className="px-10 py-4 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-full font-light text-lg transition-all duration-300 border border-stone-300"
            >
              🙄 I don’t like enjoyment
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}