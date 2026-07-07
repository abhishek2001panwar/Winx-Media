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
    contact: "+1(234) 567-8900",

    industry: "Constructions",

    services: ["Brand Collateral", "Corporate Brochure"],

    sections: [
      {
        heading: "Presenting Expertise Through Design",
        paragraphs: [
          "Brivoxa Builders needed a corporate brochure that would effectively communicate its expertise, professionalism, and commitment to quality. The objective was to create a marketing piece that not only showcased the company's services but also reinforced its credibility and built confidence among prospective clients and business partners.",
          "Rather than relying on heavy technical content, we designed a brochure that balances clear information with strong visual hierarchy. Structured layouts, refined typography, and a modern aesthetic work together to guide readers through the company's story, capabilities, services, and achievements in a seamless and engaging way.",
          "Every page was crafted to reflect the precision and reliability that define the construction industry. From introducing the company's vision to highlighting its services, values, and project portfolio, the brochure presents Brivoxa Builders as a trusted construction partner with a forward-looking approach",
          "The result is a polished corporate brochure that serves as a powerful sales and presentation tool-helping Brivoxa Builders communicate its value with clarity, professionalism, and confidence.",
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
      },
    ],
  },
  {
    title: "AUREYA",
    slug: "aureya",
    subtitle: "Logo & Visual Identity",
    hero: "/aureya/01.jpg",
    coverImage: "/aureya/cover.jpg",
    contact: "+1(234) 567-8900",

    industry: "Constructions",

    services: ["Logo Design", "Visual Identity"],

    sections: [
      {
        heading: "Crafting a Sanctuary of Inner Radiance",
        paragraphs: [
          "AUREYA was envisioned as more than a yoga studio-it was created to be a luxury wellness sanctuary where mindful movement, inner balance, and refined experiences come together. The objective was to build a timeless brand identity that communicates serenity, transformation, and sophistication while resonating with modern wellness seekers.",
          "Rather than relying on conventional yoga symbols or overly spiritual visuals, we developed a distinctive brand identity centered around a custom monogram that seamlessly combines the letter 'A', a meditative human figure, and the lotus. This thoughtful integration transforms the logo into a meaningful symbol of personal growth, balance, and awakening. Supported by a refined color palette, elegant typography, and minimalist visual language, every design element was carefully curated to evoke a sense of calm, luxury, and authenticity.",
          "Every aspect of the branding was designed to create a cohesive and immersive experience. From the logo and visual identity to the brand messaging, color system, and typography, each component reflects AUREYA's philosophy of cultivating inner radiance through conscious movement and mindful living. The identity strikes a balance between contemporary luxury and timeless yogic values, allowing the brand to feel both aspirational and approachable.",
          "The result is a sophisticated wellness brand that extends beyond a visual identity. AUREYA becomes a symbol of transformation, a brand that inspires trust, reflects elegance, and establishes a memorable presence across studio spaces, digital platforms, merchandise, and future wellness experiences. It positions AUREYA as a premium destination where every interaction encourages individuals to reconnect with themselves and embrace a more balanced way of living",
        ],
      }
    ],

    showcase: [
     
      {
        type: "landscape",
        image: "/aureya/03.jpg",
      },
     
      {
        type: "landscape",
        image: "/aureya/04.jpg",
      },
      {
        type: "landscape",
        image: "/aureya/05.jpg",
      },
     
      {
        type: "landscape",
        image: "/aureya/06.jpg",
      },
      {
        type: "landscape",
        image: "/aureya/07.jpg",
      },
      {
        type: "landscape",
        image: "/aureya/08.jpg",
      },
      {
        type: "landscape",
        image: "/aureya/09.jpg",
      },

    ],
  },
];
