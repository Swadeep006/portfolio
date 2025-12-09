import { useState, useEffect } from 'react';

const ScrollNav = () => {
    const [activeSection, setActiveSection] = useState('home');

    const sections = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'qualification', label: 'Qualifications' },
        { id: 'techstack', label: 'Tech Stack' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6">
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="group relative flex items-center"
                    aria-label={`Scroll to ${section.label}`}
                >
                    <span className="absolute right-6 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-3 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {section.label}
                    </span>
                    <div
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === section.id
                            ? 'bg-neutral-900 dark:bg-white scale-125'
                            : 'bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-500 dark:hover:bg-neutral-500'
                            }`}
                    />
                </button>
            ))}
        </div>
    );
};

export default ScrollNav;
