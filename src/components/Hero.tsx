import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-neutral-900">
                    Your Name
                </h1>
                <h2 className="text-lg font-medium text-neutral-600">
                    Frontend Developer
                </h2>
            </div>

            <p className="text-neutral-500 leading-relaxed max-w-md">
                I build accessible, pixel-perfect, and performant web experiences.
                Passionate about minimal design and clean code.
            </p>

            <div className="flex gap-4">
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-900 transition-colors"
                    aria-label="GitHub"
                >
                    <Github size={20} />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-900 transition-colors"
                    aria-label="LinkedIn"
                >
                    <Linkedin size={20} />
                </a>
                <a
                    href="mailto:hello@example.com"
                    className="text-neutral-400 hover:text-neutral-900 transition-colors"
                    aria-label="Email"
                >
                    <Mail size={20} />
                </a>
            </div>
        </section>
    );
};

export default Hero;
