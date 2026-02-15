"use client";
import Image from "next/image";

const EducationSkills = () => {
    return (
        <section>
            <div className="border-t border-softGray overflow-hidden">
                <div className="container relative z-10">
                    <Image
                        src={"/images/home/education-skill/edu-skill-vector.svg"}
                        alt="vector"
                        width={260}
                        height={170}
                        className="no-print absolute top-0 left-0 transform -translate-y-1/2"
                    />

                    <div className="relative z-10 py-16 md:py-32">
                        <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
                            <h2>Education & Skills</h2>
                            <p className="text-xl text-orange-500">( 03 )</p>
                        </div>

                        {/* ===== Education (TOP) ===== */}
                        <div className="w-full max-w-full flex flex-row gap-8 mb-16">
                            <div className="flex items-start gap-6">
                                <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black">
                                    <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                                </div>
                                <div className="flex-1 flex flex-col gap-2">
                                    <h5>B.Sc in Computer Science</h5>
                                    <p className="font-normal">University of Rajasthan, 2016 - 2019</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black">
                                    <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                                </div>
                                <div className="flex-1 flex flex-col gap-2">
                                    <h5>Diploma in Web Design</h5>
                                    <p className="font-normal"> 3iLogic, Jaipur, Rajasthan
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black">
                                    <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                                </div>
                                <div className="flex-1 flex flex-col gap-2">
                                    <h5>UI/UX Design Training</h5>
                                    <p className="font-normal">Dogma</p>
                                </div>
                            </div>
                        </div>

                        {/* ===== Skills (BOTTOM) ===== */}
                        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-5 gap-5 xl:gap-7 w-full">
                            {/* HTML */}
                            <div className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-4 items-center justify-between">
                                <div className="flex flex-col items-center gap-5">
                                    <Image src="/images/figma-icon.svg" alt="Figma" width={70} height={70} />
                                    <p className="text-black font-normal">Figma</p>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                </div>
                            </div>
                            <div className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-4 items-center justify-between">
                                <div className="flex flex-col items-center gap-5">
                                    <Image src="/images/adobe-icon.svg" alt="Adobe XD" width={70} height={70} />
                                    <p className="text-black font-normal">Adobe XD</p>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                </div>
                            </div>
                            <div className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-4 items-center justify-between">
                                <div className="flex flex-col items-center gap-5">
                                    <Image src="/images/photoshop-icon.svg" alt="Photoshop" width={70} height={70} />
                                    <p className="text-black font-normal">Photoshop</p>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                </div>
                            </div>
                            <div className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-4 items-center justify-between">
                                <div className="flex flex-col items-center gap-5">
                                    <Image src="/images/Adobe-Illustrator.svg" alt="Illustrator" width={70} height={70} />
                                    <p className="text-black font-normal">Illustrator</p>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                </div>
                            </div>
                            <div className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-4 items-center justify-between">
                                <div className="flex flex-col items-center gap-5">
                                    <Image src="/images/canva.svg" alt="Canva" width={70} height={70} />
                                    <p className="text-black font-normal">Canva</p>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                </div>
                            </div>
                            <div className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-4 items-center justify-between">
                                <div className="flex flex-col items-center gap-5">
                                    <Image src="/images/react-js-icon.svg" alt="React.js" width={70} height={70} />
                                    <p className="text-black font-normal">React.js</p>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                </div>
                            </div>

                            {/* React */}
                            <div className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-4 items-center justify-between">
                                <div className="flex flex-col items-center gap-5">
                                    <Image src="/images/nextjs-icon.svg" alt="Next.js" width={70} height={70} />
                                    <p className="text-black font-normal">Next.js</p>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                </div>
                            </div>
                            <div className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-4 items-center justify-between">
                                <div className="flex flex-col items-center gap-5">
                                    <Image src="/images/html-icon.svg" alt="HTML5" width={70} height={70} />
                                    <p className="text-black font-normal">HTML5</p>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                </div>
                            </div>
                            <div className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-4 items-center justify-between">
                                <div className="flex flex-col items-center gap-5">
                                    <Image src="/images/css-icon.svg" alt=" CSS3, SCSS, Sass" width={70} height={70} />
                                    <p className="text-black font-normal"> CSS3, SCSS, Sass</p>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                </div>
                            </div>

                            {/* CSS */}
                            <div className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-4 items-center justify-between">
                                <div className="flex flex-col items-center gap-5">
                                    <Image src="/images/javascript-logo.svg" alt="JavaScript" width={70} height={70} />
                                    <p className="text-black font-normal">JavaScript</p>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                </div>
                            </div>
                            {/* React */}
                            <div className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-4 items-center justify-between">
                                <div className="flex flex-col items-center gap-5">
                                    <Image src="/images/WordPress-icon.png" alt="WordPress" width={70} height={70} />
                                    <p className="text-black font-normal">WordPress</p>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#FE4300]"></div>
                                </div>
                            </div>

                            {/* Figma */}

                        </div>
                        {/* ===== End Skills ===== */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSkills;
