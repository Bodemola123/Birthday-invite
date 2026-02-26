import { Calendar, MapPin, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function YesPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-amber-50 to-stone-50 flex items-center justify-center p-6 relative overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`sparkle sparkle-${i + 1}`}></div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-stone-200/50"
      >
        <motion.div
          className="text-center space-y-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Sparkles className="w-12 h-12 text-rose-500 mx-auto animate-pulse" />

          <h1 className="text-4xl font-light text-stone-800 tracking-wide">
            You understood the assignment 😌✨
          </h1>

          {/* DETAILS SECTION */}
          <div className="space-y-8 text-left">
            <h2 className="text-2xl font-light text-stone-800 text-center border-b border-stone-200 pb-4">
              Birthday Details
            </h2>

            <div className="space-y-6">

              {/* DATE */}
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Calendar className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-stone-700">
                    <span className="font-medium">Date:</span> 7th / 8th of March 2026
                  </p>
                </div>
              </motion.div>

              {/* TIME */}
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Clock className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-stone-700">
                    <span className="font-medium">Time:</span> 7:30PM / 8:00PM
                  </p>
                  <p className="text-sm text-stone-500 mt-1">
                    (Prompt! Main characters are never late.)
                  </p>
                </div>
              </motion.div>

              {/* LOCATION */}
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <MapPin className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-stone-700">
                    <span className="font-medium">Location:</span> Victoria Island
                  </p>
                  <p className="text-sm text-stone-500 mt-1">
                    Final restaurant will be selected together based on confirmed numbers, comfort & vibes.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* VIBE BOX */}
            <motion.div
              className="bg-rose-50/60 rounded-2xl p-6 border border-rose-100 space-y-4 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-stone-700 leading-relaxed">
                This is a <span className="font-medium">girls-only dinner.</span>
              </p>

              <p className="text-stone-700 leading-relaxed">
                Dress sexy. Cunty heels activated.
              </p>

              <p className="text-xl text-rose-800 font-light pt-2">
                I can’t wait to see you 💅🏾
              </p>
            </motion.div>

            {/* CTA */}
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
                Join the WhatsApp Group 💬
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}