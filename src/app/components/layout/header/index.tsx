"use client";

import Logo from "../logo";

const Header = () => {
    const handleDownloadPDF = () => {
        window.print();
    };

    return (
        <header className="navbar top-0 left-0 z-50 w-full absolute">
            <div className="container">
                <nav className="py-4">
                    <div className="flex items-center gap-3 sm:gap-5">

                        {/* Logo */}
                        <Logo />

                        {/* Buttons next to logo */}
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">

                            {/* View Resume */}
                            <a
                                href="#"
                                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border border-primary rounded-full text-black hover:bg-primary hover:text-white transition-colors duration-300"
                            >
                                Download PDF Resume
                            </a>

                            {/* My Work */}
                            <a
                                href="#work"
                                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border border-primary rounded-full text-black hover:bg-primary hover:text-white transition-colors duration-300"
                            >
                                View My Portfolio
                            </a>



                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
