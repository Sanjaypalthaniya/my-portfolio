import { NextResponse } from "next/server";

/* ================= CONTACT BAR ================= */

const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "sanjaypalthaniya@gmail.com",
      icon: "/images/mail-icon.svg",
      link: "mailto:sanjaypalthaniya@gmail.com"
    },
    {
      type: "phone",
      label: "+91-8302185709",
      icon: "/images/call-icon.svg",
      link: "tel:+918302185709"
    },
    {
      type: "website",
      label: "portfolio-sanjay-design.dev",
      icon: "/images/web-icon.svg",
      link: "https://portfolio-sanjay-design.dev"
    }
  ],
  socialItems: [
    {
      platform: "dribbble",
      icon: "/images/dribble-icon.svg",
      link: "https://dribbble.com/sanjay-ui"
    },
    {
      platform: "linkedin",
      icon: "/images/linkedin-icon.svg",
      link: "https://www.linkedin.com/in/sanjay-choudhary-3555b414a"
    },
    {
      platform: "facebook",
      icon: "/images/facebook-icon.svg",
      link: "https://facebook.com"
    }
  ]
};


/* ================= EDUCATION & SKILLS ================= */

const educationData = {
  education: [
    {
      title: "Bachelor of Arts (BA)",
      description: "Adarsh College, Sardarpura"
    },
    {
      title: "Diploma in Website Designing",
      description: "3iLogic, Jaipur, Rajasthan"
    }
  ],
  skills: [
    {
      name: "Figma",
      icon: "/images/home/education-skill/figma-icon.svg",
      rating: 5
    },
    {
      name: "Adobe XD",
      icon: "/images/home/education-skill/adobe-icon.svg",
      rating: 4
    },
    {
      name: "Photoshop",
      icon: "/images/home/education-skill/photoshop-icon.svg",
      rating: 4
    },
    {
      name: "Adobe Illustrator",
      icon: "/images/home/education-skill/illustrator-icon.svg",
      rating: 4
    },
    {
      name: "Canva",
      icon: "/images/home/education-skill/canva-icon.svg",
      rating: 4
    },
    {
      name: "HTML5 / CSS3 / SCSS",
      icon: "/images/home/education-skill/html-icon.svg",
      rating: 5
    },
    {
      name: "JavaScript",
      icon: "/images/home/education-skill/js-icon.svg",
      rating: 4
    },
    {
      name: "React.js",
      icon: "/images/home/education-skill/react-icon.svg",
      rating: 4
    },
    {
      name: "Next.js",
      icon: "/images/home/education-skill/nextjs-icon.svg",
      rating: 4
    },
    {
      name: "WordPress",
      icon: "/images/home/education-skill/wp-icon.svg",
      rating: 4
    }
  ]
};


/* ================= FOOTER CONTACT LINKS ================= */

const contactLinks = {
  socialLinks: [
    {
      title: "Dribbble",
      href: "https://dribbble.com/sanjay-ui"
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/sanjay-choudhary-3555b414a"
    },
    {
      title: "Facebook",
      href: "https://facebook.com"
    }
  ],
  contactInfo: [
    {
      type: "email",
      label: "sanjaypalthaniya@gmail.com",
      link: "mailto:sanjaypalthaniya@gmail.com"
    },
    {
      type: "phone",
      label: "+91-8302185709",
      link: "tel:+918302185709"
    }
  ]
};


/* ================= API RESPONSE ================= */

export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks
  });
};
