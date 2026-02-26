import { Calendar, MapPin, Clock, Sparkles } from 'lucide-react';
import { motion } from "framer-motion";

export default function YesPage() {
return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-stone-50 flex items-center justify-center p-6 relative overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`sparkle sparkle-${i + 1}`}></div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-stone-200/50"
      >
        <motion.div className="text-center space-y-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <Sparkles className="w-12 h-12 text-rose-500 mx-auto animate-pulse" />
          <h1 className="text-4xl font-light text-stone-800 tracking-wide">
            You just made the right decision 😌✨
          </h1>

          <motion.div className="space-y-8 text-left">
            <h2 className="text-2xl font-light text-stone-800 text-center border-b border-stone-200 pb-4">
              Birthday Dinner Details
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-stone-700">
                    <span className="font-medium">Date:</span> Friday or Saturday
                  </p>
                  <p className="text-sm text-stone-500 mt-1">(final date will be confirmed)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-stone-700">
                    <span className="font-medium">Location:</span> Restaurant name – TBD
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-stone-700">
                    <span className="font-medium">Time:</span> Evening
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-rose-50/50 rounded-2xl p-6 border border-rose-100 space-y-4 mt-8">
              <p className="text-stone-700 leading-relaxed">
                This is a cozy dinner hangout — just vibes, laughter, and great food.
              </p>

              <p className="text-stone-700 leading-relaxed">
                Come ready to eat, dress cute, and celebrate Ruda properly 💅🏽✨
              </p>

              <p className="text-stone-600 text-sm italic mt-4">
                It&apos;s a chill dinner plan — everyone orders what they like and we just enjoy the night together 🤍
              </p>
            </div>

            <p className="text-xl font-light text-center text-rose-800 pt-4">
              Can&apos;t wait to see you 💕
            </p>

            <motion.div className="pt-6 text-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://chat.whatsapp.com/CbJTKnqtrL4AYaPtw808rO?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium text-lg transition-all duration-300 shadow-lg inline-block"
              >
                Join the WhatsApp Group 💬
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
