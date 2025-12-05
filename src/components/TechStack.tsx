const TechStack = () => {
    const technologies = [
        'JavaScript', 'TypeScript', 'React', 'Next.js',
        'Node.js', 'Express', 'Tailwind CSS', 'Git',
        'Figma', 'Jest', 'Docker', 'AWS'
    ];

    return (
        <section className="flex flex-col gap-6">
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">
                Tech Stack
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4">
                {technologies.map((tech) => (
                    <div key={tech} className="text-neutral-500 text-sm">
                        {tech}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
