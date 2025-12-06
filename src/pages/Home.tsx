import { Github, Linkedin, Download } from 'lucide-react';
import {
    SiReact, SiTypescript, SiTailwindcss, SiNodedotjs,
    SiNextdotjs, SiFigma, SiPython, SiMongodb, SiCplusplus, SiGithub
} from 'react-icons/si';
import { motion } from 'framer-motion';

const Home = () => {
    const skills = [
        { name: 'React', icon: SiReact, color: 'text-blue-500' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-neutral-900 dark:text-white' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
        { name: 'Python', icon: SiPython, color: 'text-yellow-500' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
        { name: 'Figma', icon: SiFigma, color: 'text-pink-500' },
        { name: 'Git & GitHub', icon: SiGithub, color: 'text-neutral-900 dark:text-white' },
        { name: 'C++', icon: SiCplusplus, color: 'text-blue-700' },
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-500' },
    ];

    return (
        <div className="flex flex-col gap-10">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 pt-8">
                <div className="flex-1 flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl text-neutral-900 dark:text-white flex items-center gap-3">
                            <span className="whitespace-nowrap">Swadeep Dhondi</span> <span className="animate-wave">👋</span>
                        </h1>
                        <h2 className="text-xl font-medium text-neutral-600 dark:text-neutral-400">
                            Full Stack Developer
                        </h2>
                    </div>

                    <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-lg text-lg">
                        I build minimal, user-friendly web experiences and love clean design.
                        Excited about turning real problems into simple digital solutions.
                    </p>

                    <div className="flex flex-col gap-6">
                        <a
                            href="/SD_FSR.pdf"
                            download
                            className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-fit overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            <Download size={18} />
                            <span>Resume</span>
                        </a>

                        <div className="flex gap-5">
                            <a
                                href="https://github.com/Swadeep006"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                                aria-label="GitHub"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/swadeep-dhondi-46b902256/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center md:justify-end">
                    <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-neutral-100 dark:bg-neutral-900 overflow-hidden relative shadow-[0_0_60px_rgba(0,0,0,0.3)] dark:shadow-[0_0_60px_rgba(255,255,255,0.2)] animate-float">
                        <img
                            src="/profile.jpg"
                            alt="Swadeep Dhondi"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>

            {/* Experience Section */}
            <div className="flex flex-col gap-5 border-t border-neutral-100 dark:border-neutral-800 pt-6">
                <h3 className="text-xs font-semibold text-neutral-900 dark:text-white text-center uppercase tracking-widest">
                    Experience
                </h3>
                <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
                    <div className="flex flex-col gap-2 p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <h4 className="text-xl font-semibold text-neutral-900 dark:text-white">
                                Web Developer Intern
                            </h4>
                            <span className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                                March 2025 – November 2025
                            </span>
                        </div>
                        <div className="text-base font-medium text-neutral-700 dark:text-neutral-300">
                            HashInclude
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-base mt-2">
                            Designed and implemented responsive user interfaces using Figma and WordPress, enhancing cross-device user experience.
                        </p>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="flex flex-col gap-5 border-t border-neutral-100 dark:border-neutral-800 pt-6">
                <h3 className="text-xs font-semibold text-neutral-900 dark:text-white text-center uppercase tracking-widest">
                    Tech Stack
                </h3>
                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                            className="flex flex-col items-center gap-3 group"
                        >
                            <div className={`text-5xl ${skill.color} opacity-80 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-300`}>
                                <skill.icon />
                            </div>
                            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;

