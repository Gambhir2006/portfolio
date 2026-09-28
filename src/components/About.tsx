import { motion } from "framer-motion";
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
              <User className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I am a BCA (AI & DL – IBM) student at ARKA JAIN UNIVERSITY, Jharkhand, passionate about Data Analytics, Artificial Intelligence, Generative AI, and Software Development. With a strong academic foundation and practical project experience, I focus on building intelligent software solutions and data-driven applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              My journey in technology is driven by curiosity and a desire to solve real-world problems through innovative solutions. I have experience working with various technologies including React, Python, Flask, and data analytics tools like Power BI and SPSS Modeler.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am actively seeking internship opportunities where I can apply my skills in AI, data analytics, and software development while continuing to learn and grow in a professional environment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
