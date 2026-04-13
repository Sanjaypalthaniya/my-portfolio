import { NextResponse } from "next/server";

const workData = [
    {
        image: "/images/work/the-juggling-club-front.png",
         hoverImage: "/images/work/the-juggling-club-admin.png",
        title: "The Juggling Club",
        technologies: [
        {
            name: "Figma",
            icon: "/images/figma-icon.svg"
        },
        {
            name: "Next.js",
            icon: "/images/nextjs-icon.svg"
        }
    ],
        liveUrl: "https://the-juggling-club.vercel.app/",
        figmaUrl: "https://www.figma.com/design/aAJ8wAMxt8gn7eotqxX392/The-Juggling-Club?node-id=0-1&t=yhTLap1k4s8H8W3M-1",
    },
    {
        image: "/images/work/datathlete-website-front.png",
         hoverImage: "/images/work/datathlete-website-admin.png",
        title: "DatAthlete Website + Dashboard",
       technologies: [
        {
            name: "Figma",
            icon: "/images/figma-icon.svg"
        },
        {
            name: "Next.js",
            icon: "/images/nextjs-icon.svg"
        }
    ],
        figmaUrl: "https://www.figma.com/design/BAxZiFMqtTa2enD3vrbkdc/DatAthlete-Website---Dashboard-clone?node-id=1-18941&t=Owfm1VMXiih75Ey0-1",
    },
    {
        image: "/images/work/inventring-app.png",
         hoverImage: "/images/work/inventring-web.png",
        title: "Inventring",
        technologies: [
        {
            name: "Figma",
            icon: "/images/figma-icon.svg"
        },
        {
            name: "Next.js",
            icon: "/images/nextjs-icon.svg"
        }
    ],
       liveUrl: "https://inventring.com/",
        figmaUrl: "",
    },
    {
        image: "/images/work/Holiyay.png",
         hoverImage: "/images/work/Holiyay.png",
        title: "Holiyay",
       technologies: [
        {
            name: "Figma",
            icon: "/images/figma-icon.svg"
        },
        {
            name: "HTML5/Css",
            icon: "/images/html-icon.svg"
        }
    ],
    liveUrl: "",
        figmaUrl: "https://www.figma.com/design/bC3OmtV4sHTiBXhw39uDMl/Holiyay-Design-V2--JPLoft-?node-id=6592-65928&p=f&t=Piv4HhojVYo5b4Gh-0",
    },
    {
        image: "/images/work/inventring-app.png",
         hoverImage: "/images/work/Inventring-web.png",
        title: "Mobile App Design",
        technologies: [
        {
            name: "Figma",
            icon: "/images/figma-icon.svg"
        },
        {
            name: "Next.js",
            icon: "/images/nextjs-icon.svg"
        }
    ],
                figmaUrl: "https://figma.com/yourdesignlink",
    },
    {
        image: "/images/work/Advanced-Trichology.png",
         hoverImage: "/images/work/Advanced-Trichology.png",
        title: "Advanced-Trichology",
       technologies: [
        {
            name: "Figma",
            icon: "/images/figma-icon.svg"
        },
        {
            name: "Next.js",
            icon: "/images/nextjs-icon.svg"
        }
    ],
       liveUrl: "https://yourlivewebsite.com",
        figmaUrl: "https://figma.com/yourdesignlink",
    }
];




export const GET = async () => {
    return NextResponse.json({
        workData
    });
};
