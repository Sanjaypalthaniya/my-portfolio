import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2018 – 2021",
            title: "UI/UX, Front-End Developer & Digital Marketing Executive",
            company: "Webmedia Techno Services Pvt. Ltd",
            type: "Full-time",
            description:
                "Designed and developed responsive websites and landing pages using HTML, CSS, and JavaScript. Created UI/UX designs, improved user experience, and supported digital marketing creatives to enhance brand presence and conversions."
        },
        {
            year: "2021 – 2022",
            title: "Senior UI/UX & Front-End Developer",
            company: "Helpful Insight Pvt. Ltd",
            type: "Full-time",
            description:
                "Designed user-friendly web interfaces and dashboards. Converted Figma/XD designs into pixel-perfect front-end code, optimized performance, and ensured cross-browser compatibility."
        },
        {
            year: "2022 – 2024",
            title: "Senior UI/UX & Front-End Developer",
            company: "WhyQ Pte. Ltd",
            type: "Full-time",
            description:
                "Led UI/UX design for multiple products, built responsive front-end interfaces, created design systems and reusable components, and improved overall user engagement through UX improvements."
        },
        {
            year: "2024 – Present",
            title: "Senior UI/UX & Front-End Developer",
            company: "JPLoft",
            type: "Full-time",
            description:
                "Designing scalable UI systems and developing high-performance front-end applications using React and Next.js. Collaborating with product and engineering teams to improve usability, consistency, and conversion-focused layouts."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => {
                            const isCurrent = exp.year.includes("Present");

                            return (
                                <div
                                    key={index}
                                    className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative"
                                >
                                    {/* Left Column */}
                                    <div>
                                        <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                        <h4 className="text-lg font-normal">{exp.title}</h4>
                                    </div>

                                    {/* Timeline Column */}
                                    <div className="relative">
                                        {index < experiences.length - 1 && (
                                            <div className="absolute left-0 top-3 w-px h-40 bg-softGray"></div>
                                        )}

                                        {/* Dot */}
                                        <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                            <div
                                                className={`w-3.5 h-3.5 rounded-full border bg-white flex items-center justify-center ${isCurrent
                                                    ? "border-primary"
                                                    : "border-black"
                                                    }`}
                                            >
                                                {isCurrent && (
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="pl-4 lg:pl-7">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xl text-black font-normal">
                                                    {exp.company}
                                                </span>
                                            </div>
                                            <p className="text-base font-normal">{exp.type}</p>
                                        </div>
                                    </div>

                                    {/* Description Column */}
                                    <div className="pl-8 sm:pl-0">
                                        <p className="leading-relaxed text-base">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;
