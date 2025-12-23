import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const About = () => {
  const profile = useSelector((state) => state.portfolio.profile);

  const paragraphs = [
    profile.description,
    '📌 Develop full-stack web applications using C# ASP.NET Core and Blazor for dynamic, interactive user experiences. Build responsive frontends with Angular, React, and Next.js using JavaScript and TypeScript for optimal performance.',
    '📌 Design secure databases with Microsoft SQL Server, ASP.NET MVC, and Microsoft Azure for cloud deployment. Deliver end-to-end solutions incorporating .NET Core, ASP.NET, and Blazor for enterprise-grade systems.',
    '🚀 What I Deliver: Full-Stack Development creating comprehensive web applications from backend C# ASP.NET Core logic to frontend Angular, React, and Next.js interfaces. Frontend Expertise building intuitive UIs ensuring cross-device compatibility and speed. Backend Mastery architecting reliable servers using C# ASP.NET Blazor, ASP.NET MVC, .NET Core, and Microsoft SQL Server for data handling.',
    '🔹 Cloud Integration deploying scalable apps on Microsoft Azure, optimizing for security, performance, and cost-efficiency. Custom Solutions developing tailored web applications that enhance user engagement, streamline operations, and support business growth.',
  ];

  return (
    <section
      id="about"
      className="section-container bg-white dark:bg-gray-800"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="gradient-text">About Me</span>
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {paragraphs.map((para, index) => (
            <motion.p
              key={index}
              className={`text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed ${index !== paragraphs.length - 1 ? 'mb-6' : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;

