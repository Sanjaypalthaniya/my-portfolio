"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LatestWork = () => {
    const [workData, setWorkData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/work-data');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setWorkData(data?.workData);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section>
            <div className="bg-softGray">
                <div className="container">
                    <div className="py-16 xl:py-32 ">
                        <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                            <h2>Latest Works</h2>
                            <p className="text-xl text-orange-500">( 04 )</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
                            {workData?.slice(0, 4).map((value: any, index: any) => {
                                return (
                                    <div key={index} className="group flex flex-col gap-3 xl:gap-6">
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
                                                src={value?.hoverImage}
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
                                        <div className="flex flex-col gap-0 xl:gap-2">
                                            <div className="flex items-center justify-between">
                                                <Link href={`${value.slug}`}>
                                                    <h5>{value?.title}</h5>
                                                </Link>
                                                <Image src={"/images/right-arrow-icon.svg"} alt="right-arrow-icon" width={30} height={30} />
                                            </div>
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
                                )
                            })}
                        </div>
                        <div className="flex justify-center mt-12">
                            <Link
                                href="/works"
                                className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
                            >
                                View More Works
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LatestWork