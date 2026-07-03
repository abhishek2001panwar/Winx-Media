export interface ProjectSection {
  heading: string;
  paragraphs: string[];
}

export interface ShowcaseImage {
  image: string;
  aspect: "portrait" | "landscape";
}

export interface ShowcaseItem {
  type: "landscape" | "grid";
  image?: string;
  images?: ShowcaseImage[];
}

export interface Project {
  title: string;
  slug: string;
  subtitle: string;
  hero: string;
  coverImage: string;
  contact: string;
  industry: string;
  services: string[];
  sections: ProjectSection[];
  showcase: ShowcaseItem[];
}

export const projects: Project[] = [
  {
    title: "Brivoxa Builders",
    slug: "brivoxa-builders",
    subtitle: "Brand Collateral & Corporate Brochure",
    hero: "/brand/01.jpg",
    coverImage: "/brand/cover.jpg",
    contact:"+1(234) 567-8900",

    industry: "Constructions",

    services: [
      "Brand Collateral",
      "Corporate Brochure",
     
    ],

    sections: [
      {
        heading: "Presenting Expertise Through Design",
        paragraphs: [
          "Brivoxa Builders needed a corporate brochure that would effectively communicate its expertise, professionalism, and commitment to quality. The objective was to create a marketing piece that not only showcased the company's services but also reinforced its credibility and built confidence among prospective clients and business partners.",
          "Rather than relying on heavy technical content, we designed a brochure that balances clear information with strong visual hierarchy. Structured layouts, refined typography, and a modern aesthetic work together to guide readers through the company's story, capabilities, services, and achievements in a seamless and engaging way.",
            "Every page was crafted to reflect the precision and reliability that define the construction industry. From introducing the company's vision to highlighting its services, values, and project portfolio, the brochure presents Brivoxa Builders as a trusted construction partner with a forward-looking approach",
            "The result is a polished corporate brochure that serves as a powerful sales and presentation tool-helping Brivoxa Builders communicate its value with clarity, professionalism, and confidence."
        ],
      },
      {
        heading: "Designed for mindful living",
        paragraphs: [
          "Lorem ipsum dolor sit amet...",
          "Lorem ipsum dolor sit amet...",
        ],
      },
    ],

    showcase: [
      {
        type: "landscape",
        image: "/brand/02.jpg",
      },
      {
        type: "landscape",
        image: "/brand/03.jpg",
      },
      {
        type: "grid",
        images: [
          {
            image: "/brand/10.jpg",
            aspect: "portrait",
          },
          {
            image: "/brand/11.jpg",
            aspect: "landscape",
          },
        ],
      },
      {
        type: "landscape",
        image: "/brand/04.jpg",
      },
      {
        type: "landscape",
        image: "/brand/05.jpg",
      },
      {
        type: "grid",
        images: [
          {
            image: "/brand/12.jpg",
            aspect: "portrait",
          },
          {
            image: "/brand/13.jpg",
            aspect: "portrait",
          },
        ],
      },
      {
        type: "landscape",
        image: "/brand/06.jpg",
      },
      {
        type: "landscape",
        image: "/brand/07.jpg",
      },
       {
        type: "landscape",
        image: "/brand/08.jpg",
      }
     
    ],
  },
];