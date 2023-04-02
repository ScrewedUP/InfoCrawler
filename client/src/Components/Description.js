import { motion } from "framer-motion";
export default function Description() {
  return (
    <div>
      <motion.div
        animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          delay: 0.3,
          ease: [0.5, 0.71, 1, 1.5],
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ scale: 1.2 }}
      >
        <div className="text-xl text-slate-500 mt-8 w-[70vw]">
          Introducing infoCrawler, your one-stop source for the latest news from
          around the world. Our advanced{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            scraping technology
          </span>{" "}
          aggregates news articles from reputable sources, and our{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-800">
            sentiment analysis
          </span>{" "}
          helps you understand the tone and emotions behind each story. Stay
          informed and engaged with infoCrawler.
        </div>
      </motion.div>
    </div>
  );
}
