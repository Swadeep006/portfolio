import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-12 max-w-2xl mx-auto text-center">
            <div className="flex flex-col gap-6">
                <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    Get in Touch
                </h1>
                <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed text-lg">
                    Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
            </div>

            <div className="flex flex-col items-center gap-6">
                <a
                    href="mailto:maildswadeep@gmail.com"
                    className="flex items-center gap-3 text-xl font-medium text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                >
                    <Mail size={24} />
                    <span>maildswadeep@gmail.com</span>
                </a>

                <div className="flex flex-col items-center gap-3">
                    <div className="flex gap-6">
                        <a
                            href="https://github.com/Swadeep006"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/swadeep-dhondi-46b902256/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
