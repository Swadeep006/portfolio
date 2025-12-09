import { BadgeCheck } from 'lucide-react';

const Skills = () => {
    return (
        <section id="skills" className="section flex flex-col items-center gap-10 py-16">
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Skills</h2>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">My Technical Level</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full px-6">

                {/* Frontend Developer Card */}
                <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 border border-neutral-100 dark:border-neutral-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-center text-neutral-900 dark:text-white mb-8">
                        Frontend Developer
                    </h3>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                        <SkillItem name="HTML" level="Advanced" />
                        <SkillItem name="Bootstrap" level="Intermediate" />
                        <SkillItem name="CSS" level="Advanced" />
                        <SkillItem name="Git" level="Advanced" />
                        <SkillItem name="JavaScript" level="Intermediate" />
                        <SkillItem name="React" level="Intermediate" />
                    </div>
                </div>

                {/* Backend Developer Card */}
                <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 border border-neutral-100 dark:border-neutral-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-center text-neutral-900 dark:text-white mb-8">
                        Backend Developer
                    </h3>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                        <SkillItem name="Python" level="Intermediate" />
                        <SkillItem name="MySQL" level="Intermediate" />
                        <SkillItem name="Node Js" level="Basic" />
                        <SkillItem name="Firebase" level="Basic" />
                        <SkillItem name="MongoDB" level="Basic" />
                        <SkillItem name="SQL" level="Intermediate" />
                    </div>
                </div>

            </div>
        </section>
    );
};

const SkillItem = ({ name, level }: { name: string; level: string }) => (
    <div className="flex items-start gap-2">
        <BadgeCheck className="w-5 h-5 text-neutral-900 dark:text-white mt-0.5" />
        <div className="flex flex-col">
            <h4 className="font-semibold text-neutral-900 dark:text-white text-base leading-none">
                {name}
            </h4>
            <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                {level}
            </span>
        </div>
    </div>
);

export default Skills;
