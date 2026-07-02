import { resumeData } from "./index.js";

export const SITE_URL = "https://shamilvm.com";
export const SITE_NAME = "Shamil Vm";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/logo/shamil_logo.png`;

export const PAGE_SEO = {
  home: {
    title: "Shamil Vm | Full-Stack Developer Portfolio",
    description:
      "Shamil Vm is a Full-Stack Developer in Dubai building modern, scalable web applications with React, Next.js, Node.js, and TypeScript. Explore projects, skills, and experience.",
    path: "/",
    type: "website",
    image: DEFAULT_OG_IMAGE,
  },
  resume: {
    title: "Resume | Shamil Vm — Full-Stack Developer",
    description:
      "Resume of Shamil Vm — Full-Stack Developer with experience in React, Next.js, TypeScript, Node.js, and MongoDB. View work history, skills, education, and achievements.",
    path: "/resume",
    type: "profile",
    image: DEFAULT_OG_IMAGE,
  },
};

export function getPersonJsonLd() {
  const { HEADER } = resumeData;

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: HEADER.NAME,
    alternateName: SITE_NAME,
    url: SITE_URL,
    jobTitle: "Full-Stack Developer",
    email: "shamilvilakkumadathil@gmail.com",
    description: HEADER.HEADLINE,
    sameAs: [HEADER.GITHUB, HEADER.LINKEDIN],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: PAGE_SEO.home.description,
    author: getPersonJsonLd(),
  };
}

export function getResumePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${resumeData.HEADER.NAME} Resume`,
    url: `${SITE_URL}/resume`,
    description: PAGE_SEO.resume.description,
    mainEntity: getPersonJsonLd(),
  };
}
