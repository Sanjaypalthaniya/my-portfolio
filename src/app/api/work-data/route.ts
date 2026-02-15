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
       liveUrl: "https://yourlivewebsite.com",
        figmaUrl: "https://figma.com/yourdesignlink",
    },
    {
        image: "/images/work/elite-equine-marketplace-app.png",
         hoverImage: "/images/work/elite-equine-marketplace-web.png",
        title: "Elite Equine Marketplace",
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
    liveUrl: "https://yourlivewebsite.com",
        figmaUrl: "https://figma.com/yourdesignlink",
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
        image: "/images/work/work-img-6.jpg",
         hoverImage: "/images/work/work-img-1-hover.jpg",
        title: "Mug Sticker Designing",
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
