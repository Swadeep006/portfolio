import { ArrowUpRight } from 'lucide-react';

interface Project {
    name: string;
    description: string;
    tech: string[];
    link: string;
    image: string;
}

const projects: Project[] = [
    {
        name: 'PickItOut',
        description: 'An e-commerce platform for fashion and lifestyle products.',
        tech: ['React', 'Redux', 'Stripe'],
        link: 'https://github.com/Swadeep006/PickItOut',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Sentimental Analysis',
        description: 'A natural language processing project to analyze sentiment in text data.',
        tech: ['Python', 'NLP', 'Machine Learning'],
        link: 'https://github.com/Swadeep006/Sentimental_Anaylsis',
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Virtualr',
        description: 'A virtual reality landing page showcasing VR products and services.',
        tech: ['React', 'Tailwind CSS', 'Framer Motion'],
        link: 'https://github.com/Swadeep006/virtualr',
        image: 'https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Sociopedia',
        description: 'A full-stack social media application with features like posting, liking, and friend connections.',
        tech: ['React', 'Node.js', 'MongoDB', 'Material UI'],
        link: 'https://github.com/Swadeep006/Sociopedia',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Movie Recommender System',
        description: 'A machine learning based movie recommendation engine using content-based filtering.',
        tech: ['Python', 'Streamlit', 'Scikit-learn'],
        link: 'https://github.com/Swadeep006/movie_recommendation_system',
        image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Workout Buddy',
        description: 'A fitness tracking application to log workouts and monitor progress.',
        tech: ['MERN Stack', 'AuthContext'],
        link: 'https://github.com/Swadeep006/Workout-Buddy',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    },
];

const Portfolio = () => {
    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    Proof of my work
                </h1>
                <p className="text-neutral-500 dark:text-neutral-400 max-w-lg">
                    A collection of projects I've worked on. Each project represents a unique challenge and solution.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <a
                        key={project.name}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col gap-4 p-4 -mx-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                    >
                        <div className="aspect-video w-full overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800 relative">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-lg text-neutral-900 dark:text-white group-hover:underline decoration-neutral-400 underline-offset-4">
                                    {project.name}
                                </h3>
                                <ArrowUpRight size={18} className="text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
                            </div>

                            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs font-medium px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
