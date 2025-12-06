import { Github, Linkedin, Mail, Eye } from 'lucide-react';
import { useViewCounter } from '../hooks/useViewCounter';

const Footer = () => {
    const viewCount = useViewCounter();

    return (
        <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-20">
            <div className="max-w-5xl mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Copyright and View Counter */}
                    <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                        <p className="text-center md:text-left">© {new Date().getFullYear()} <span className="whitespace-nowrap">Swadeep Dhondi.</span> All rights reserved.</p>
                        <div className="flex items-center gap-2">
                            <Eye size={16} className="text-neutral-400" />
                            <span className="font-medium">{viewCount.toLocaleString()} views</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="mailto:maildswadeep@gmail.com"
                            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
                        <a
                            href="https://github.com/Swadeep006"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/swadeep-dhondi-46b902256/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

