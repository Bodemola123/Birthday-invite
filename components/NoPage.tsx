import { useState } from 'react';
import { motion } from "framer-motion";

interface NoPageProps {
  onGoBack: () => void;
}

const responses = [
  {
    title: "Wow.",
    message: "Ruda will remember this.",
    question: "Are you sure you want to continue being her friend? 😔"
  },
  {
    title: "That's crazy.",
    message: "We'll talk about this after my birthday.",
    question: ""
  },
  {
    title: "This decision has been recorded.",
    message: "See you in 2027.",
    question: ""
  }
];

export default function NoPage({ onGoBack }: NoPageProps) {
  const [response] = useState(() => {
  return responses[Math.floor(Math.random() * responses.length)];
});

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-stone-50 to-rose-50 flex items-center justify-center p-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-stone-200/50"
      >
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="text-7xl mb-6"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            😔
          </motion.div>

          <motion.h1 className="text-5xl font-light text-stone-800 tracking-wide">
            {response.title}
          </motion.h1>

          <div className="space-y-6">
            <motion.p className="text-2xl font-light text-stone-700 leading-relaxed">{response.message}</motion.p>
            {response.question && <motion.p className="text-xl font-light text-stone-600 leading-relaxed pt-4">{response.question}</motion.p>}
          </div>

          <motion.div className="pt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onGoBack}
              className="px-10 py-4 bg-rose-100 hover:bg-rose-200 text-rose-900 rounded-full font-light text-lg transition-all duration-300 border border-rose-200"
            >
              Okay fine, take me back
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
