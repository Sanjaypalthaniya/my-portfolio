"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const WorksPage = () => {
    const [workData, setWorkData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/work-data");
            const data = await res.json();
            setWorkData(data?.workData);
        };

        fetchData();
    }, []);

    return (
        <section className="py-16 xl:py-32">
            <div className="container">
                <div className="flex items-center justify-between border-b border-black pb-7 mb-12">
                    <h2>All Works</h2>
                    <p className="text-xl text-orange-500">
                        ( {workData?.length || 0} )
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {workData?.map((value: any, index: any) => (
                        <div key={index} className="group flex flex-col gap-4">
                            <div className="relative overflow-hidden rounded-lg">

                                {/* Default Image */}
                                <Image
                                    src={value?.image}
                                    alt="image"
                                    width={570}
                                    height={414}
                                    className="rounded-lg w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                                />

                                {/* Hover Image */}
                                <Image
                                    src={value?.hoverImage || value?.image}
                                    alt="hover-image"
                                    width={570}
                                    height={414}
                                    className="absolute top-0 left-0 rounded-lg w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                />

                                {/* Overlay Button */}
                                <div className="absolute top-0 left-0 backdrop-blur-sm bg-primary/20 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">

                                    {value?.liveUrl && (
                                        <Link
                                            href={value.liveUrl}
                                            target="_blank"
                                            className="px-5 py-2 bg-primary text-white rounded-full text-sm"
                                        >
                                            Live Site
                                        </Link>
                                    )}

                                    {value?.figmaUrl && (
                                        <Link
                                            href={value.figmaUrl}
                                            target="_blank"
                                            className="px-5 py-2 bg-black text-white rounded-full text-sm"
                                        >
                                            Figma
                                        </Link>
                                    )}

                                </div>
                            </div>

                            <div>
                                <h5>{value?.title}</h5>
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm font-medium text-gray-500">Tech Stack</p>

                                    <div className="flex items-center gap-3 flex-wrap">
                                        {value?.technologies?.map((tech: any, i: number) => (
                                            <div key={i} className="flex items-center gap-1 bg-white px-2 py-1 rounded-md shadow-sm">
                                                <Image
                                                    src={tech.icon}
                                                    alt={tech.name}
                                                    width={16}
                                                    height={16}
                                                />
                                                <span className="text-xs">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorksPage;
