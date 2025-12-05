import { ArrowUpRight } from 'lucide-react';

interface Project {
    name: string;
    description: string;
    tech: string[];
    link: string;
}

const projects: Project[] = [
    {
        name: 'Project One',
        description: 'A minimal task management application for personal productivity.',
        tech: ['React', 'TypeScript', 'Tailwind'],
        link: 'https://github.com',
    },
    {
        name: 'Project Two',
        description: 'Real-time weather dashboard with detailed analytics.',
        tech: ['Next.js', 'API Integration', 'Chart.js'],
        link: 'https://github.com',
    },
    {
        name: 'Project Three',
        description: 'E-commerce platform with seamless checkout experience.',
        tech: ['Node.js', 'Express', 'Stripe'],
        link: 'https://github.com',
    },
];

const Projects = () => {
    return (
        <section className="flex flex-col gap-6">
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">
                Projects
            </h3>
            <div className="flex flex-col gap-8">
                {projects.map((project) => (
                    <a
                        key={project.name}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col gap-2 transition-opacity hover:opacity-70"
                    >
                        <div className="flex items-center justify-between">
                            <h4 className="font-medium text-neutral-900 group-hover:underline decoration-neutral-400 underline-offset-4">
                                {project.name}
                            </h4>
                            <ArrowUpRight size={16} className="text-neutral-400" />
                        </div>
                        <p className="text-neutral-500 text-sm">
                            {project.description}
                        </p>
                        <div className="flex gap-2 text-xs text-neutral-400 font-mono">
                            {project.tech.join(' • ')}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;
