import { Mail, Github, Linkedin, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('idle');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || errorData.message || 'Failed to send message');
            }

            setStatus('success');
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            console.error(error);
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-12 max-w-4xl mx-auto px-4 py-8">
            <div className="flex flex-col gap-6 text-center max-w-2xl">
                <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    Get in Touch
                </h1>
                <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed text-lg">
                    Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 w-full">
                {/* Contact Form */}
                <div className="bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-medium text-neutral-900 dark:text-white">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-neutral-900 dark:text-white">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-medium text-neutral-900 dark:text-white">Tell me about your project</label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                rows={4}
                                placeholder="I have a great idea for..."
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send size={20} />
                                    Send Message
                                </>
                            )}
                        </button>

                        {status === 'success' && (
                            <p className="text-green-600 text-center text-sm bg-green-50 dark:bg-green-900/10 py-2 rounded">
                                Message sent successfully! I'll get back to you soon.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-600 text-center text-sm bg-red-50 dark:bg-red-900/10 py-2 rounded">
                                {errorMessage || "Failed to send message. Please try again or email directly."}
                            </p>
                        )}
                    </form>
                </div>

                {/* Direct Contact Info */}
                <div className="flex flex-col gap-8 justify-center">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Other ways to connect</h2>

                        <a
                            href="mailto:maildswadeep@gmail.com"
                            className="flex items-center gap-4 text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                        >
                            <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                                <Mail size={24} />
                            </div>
                            <span className="text-lg">maildswadeep@gmail.com</span>
                        </a>

                        <div className="flex gap-4 mt-2">
                            <a
                                href="https://github.com/Swadeep006"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-black dark:hover:text-white transition-all"
                                aria-label="GitHub"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/swadeep-dhondi-46b902256/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-[#0A66C2] hover:text-white dark:hover:bg-[#0A66C2] transition-all"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
