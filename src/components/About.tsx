import { Download, Award, Briefcase, Headset } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section flex flex-col items-center gap-10 py-16">
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">About Me</h2>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">My Introduction</span>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Image Side */}
                <div className="flex justify-center md:justify-end">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-neutral-100 dark:bg-neutral-800">
                        {/* Placeholder for user image if specific one not provided, reusing profile.jpg from Home */}
                        <img
                            src="/profile.jpg"
                            alt="Swadeep Dhondi"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content Side */}
                <div className="flex flex-col gap-8 md:items-start text-center md:text-left">
                    <div className="grid grid-cols-3 gap-4 w-full">
                        <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 transition-transform hover:-translate-y-1 duration-300">
                            <Award className="w-6 h-6 text-neutral-900 dark:text-white" />
                            <h3 className="font-semibold text-neutral-900 dark:text-white text-sm">Experience</h3>
                            <span className="text-xs text-neutral-500 dark:text-neutral-400">1 Year Working</span>
                        </div>

                        <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 transition-transform hover:-translate-y-1 duration-300">
                            <Briefcase className="w-6 h-6 text-neutral-900 dark:text-white" />
                            <h3 className="font-semibold text-neutral-900 dark:text-white text-sm">Completed</h3>
                            <span className="text-xs text-neutral-500 dark:text-neutral-400">20+ Projects</span>
                        </div>

                        <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 transition-transform hover:-translate-y-1 duration-300">
                            <Headset className="w-6 h-6 text-neutral-900 dark:text-white" />
                            <h3 className="font-semibold text-neutral-900 dark:text-white text-sm">Support</h3>
                            <span className="text-xs text-neutral-500 dark:text-neutral-400">Online 24/7</span>
                        </div>
                    </div>

                    <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed text-base max-w-lg mx-auto md:mx-0">
                        Full Stack developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.
                    </p>

                    <div className="flex justify-center md:justify-start">
                        <a
                            href="/SD_FSR.pdf"
                            download
                            className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
                        >
                            <span>Download CV</span>
                            <Download size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
