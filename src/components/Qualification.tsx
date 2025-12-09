import { useState } from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const Qualification = () => {
    const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');

    const educationData = [
        {
            title: 'BCA',
            subtitle: 'Lucknow University',
            period: '2023-2025',
        },
        {
            title: 'Web Development',
            subtitle: 'Technical Skill',
            period: '2024 - Present',
        },
        {
            title: 'Algorithms',
            subtitle: 'Relevent-Course',
            period: '2024 - Present',
        },
    ];

    const experienceData = [
        {
            title: 'Proficient in Java, Python',
            subtitle: 'Relevent-course',
            period: '2024 - Present',
        },
        {
            title: 'Algorithms',
            subtitle: 'Relevent-Course',
            period: '2024 - Present',
        },
    ];

    const data = activeTab === 'education' ? educationData : experienceData;

    return (
        <section id="qualification" className="section flex flex-col items-center gap-10 py-16">
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Qualification</h2>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">My personal journey</span>
            </div>

            {/* Tabs */}
            <div className="flex gap-12 mb-4">
                <button
                    onClick={() => setActiveTab('education')}
                    className={`flex items-center gap-2 text-lg font-semibold transition-colors ${activeTab === 'education'
                            ? 'text-neutral-900 dark:text-white'
                            : 'text-neutral-400 dark:text-neutral-500'
                        }`}
                >
                    <GraduationCap className="w-6 h-6" />
                    Education
                </button>
                <button
                    onClick={() => setActiveTab('experience')}
                    className={`flex items-center gap-2 text-lg font-semibold transition-colors ${activeTab === 'experience'
                            ? 'text-neutral-900 dark:text-white'
                            : 'text-neutral-400 dark:text-neutral-500'
                        }`}
                >
                    <Briefcase className="w-6 h-6" />
                    Experience
                </button>
            </div>

            {/* Timeline */}
            <div className="relative max-w-3xl w-full px-6">
                {/* Center vertical line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-800 transform -translate-x-1/2" />

                <div className="flex flex-col gap-12">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                }`}
                        >
                            {/* Left/Right Content */}
                            <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                {index % 2 === 0 ? (
                                    <div className="inline-block">
                                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                            {item.subtitle}
                                        </p>
                                        <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-500 mt-2 justify-end">
                                            <Calendar className="w-3 h-3" />
                                            {item.period}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="opacity-0">Spacer</div>
                                )}
                            </div>

                            {/* Center Dot */}
                            <div className="relative z-10">
                                <div className="w-4 h-4 rounded-full bg-neutral-900 dark:bg-white border-4 border-white dark:border-neutral-950" />
                            </div>

                            {/* Right/Left Content */}
                            <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                                {index % 2 !== 0 ? (
                                    <div className="inline-block">
                                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                            {item.subtitle}
                                        </p>
                                        <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-500 mt-2">
                                            <Calendar className="w-3 h-3" />
                                            {item.period}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="opacity-0">Spacer</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Qualification;
