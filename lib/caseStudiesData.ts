// lib/caseStudiesData.ts

// Remove this line:
// import {image} from '@/public/forever.png';

// If you want to use the image, use:
import foreverImage from '@/public/forever.png';

// But in your data, you are using image: "./forever.png",
// which is just a string path. If you want to use the imported image,
// update the relevant object like:
// image: foreverImage,

// Otherwise, you can just remove the import entirely if not used.

export interface CaseStudy {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  slug: string; // IMPORTANT: plain id only
  challenge: string;
  solution: string;
  results: string[];
  color: string;
  website?: string;
  instagramHandle?: string;
}
export const caseStudiesData: CaseStudy[] = [
{
  title: "It's forever",
  subtitle: "Digging Deep into Digital Excellence",
  description:
    "We created a digital foundation as solid as the work they do.",
  image: foreverImage.src,
  tags: [],
  color: "from-blue-500 to-indigo-600",
  slug: "forever",
  challenge:
    "Indian weddings generate thousands of photos, but guests and couples struggle to find the ones they actually like. Managing uploads from multiple devices and avoiding unflattering candid shots was chaotic.",
  solution:
    "You know how Indian weddings generate approximately 47,000 photos, but somehow you can never find the ones where you actually look good? And don’t even get us started on trying to hunt down pictures of yourself from your cousin’s phone while avoiding those unflattering candid shots your uncle took. Its Forever solved this chaos with features that feel like magic. Their highly accurate AI facial recognition automatically finds and matches photos of you across all uploads—no more playing digital detective to track down that perfect shot. Meanwhile, photographers can upload their entire collection but choose exactly what guests can download, and couples get the ultimate power move: deciding which photos guests can even see. It’s like having a personal photo curator who knows your face better than your mirror, plus the privacy controls that let you curate your own wedding story. We didn’t just build their social media presence—we made their brand the solution to every couple’s biggest wedding photography nightmares: finding the good photos while hiding the questionable ones. Their Instagram became the place where love stories get organized, shared, and celebrated on YOUR terms. Now they’re not just a QR code app; they’re the reason families actually get to keep their precious memories AND their dignity intact.",
  results: [
    "Transformed the brand into the ultimate wedding photo management tool.",
    "Instagram became a hub for organized and shareable wedding memories.",
    "Guests and couples could finally find perfect photos without compromising privacy.",
  ],
}
,
  {
    title: "KLCI",
    subtitle: "Digging Deep into Digital Excellence",
    description:
      "Mining companies have incredible stories to tell about building the future—they just need the right platform to share them. KLCI had the expertise and vision; we gave them the digital presence to match their industry leadership. We created a digital foundation as solid as the work they do. Their new website doesn't just showcase services—it tells the compelling story of a company that's literally building tomorrow from the ground up. Now they don't just extract materials; they build trust, confidence, and lasting partnerships.",
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/07/7.png",
    tags: ["WordPress"],
    slug: "klci",
    challenge:
      "KLCI needed a digital presence that could match their industry expertise and showcase their capabilities to potential clients and partners in the competitive mining sector.",
    solution:
      "We designed and developed a comprehensive website that tells their story effectively, showcases their projects, and positions them as industry leaders with a focus on trust and professionalism.",
    results: [
      "Enhanced brand credibility in the mining sector",
      "Improved client engagement and trust",
      "Professional platform for business development",
      "Streamlined presentation of services and expertise",
    ],
    color: "from-blue-600 to-purple-600",
  },
  {
    title: "Ambari Weddings",
    subtitle: "Orchestrating Dreams from Vision to Reality",
    description:
      "When Ambari Weddings came to us, they were like incredibly talented artists ready to showcase their work on the biggest stage. They had the skills, the vision, the passion—they just needed the right platform to share it all. We built their complete brand ecosystem from the ground up. From brand identity to social media presence to performance marketing, we created a comprehensive platform that showcases their incredible talent for creating unforgettable celebrations. Now they're not just planning weddings; they're creating experiences that make people book them for future events before their current ones are even finished.",
    image:
      "https://winxmarketingmedia.in/wp-content/uploads/2025/07/Untitled-design-33.png",
    tags: ["Instagram", "WordPress"],
    slug: "ambari-weddings",
    challenge:
      "Ambari Weddings had exceptional talent but needed a cohesive brand identity and digital presence to reach their target audience and stand out in the crowded wedding planning market.",
    solution:
      "Complete brand ecosystem development including visual identity, social media strategy, website design, content creation, and performance marketing campaigns that showcase their unique approach.",
    results: [
      "400% increase in social media engagement",
      "Consistent booking pipeline with advance reservations",
      "Established as premium wedding planning brand",
      "Strong brand recognition in competitive market",
    ],
    color: "from-pink-500 to-rose-500",
    instagramHandle: "@ambariweddings",
  },
  {
    title: "House of Bliss",
    subtitle: "From Unknown to Unmissable",
    description:
      "Every photographer thinks they're the next big thing, but House of Bliss actually became it. We took their incredible talent and gave it the digital stage it deserved. Their story isn't just about taking pretty pictures—it's about capturing the moments that matter most. We helped them tell that story in a way that makes couples forget about every other photographer in Bengaluru. Now they're not just booking clients; they're creating a waiting list of people who refuse to trust their special day to anyone else.",
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/07/1.png",
    tags: ["Instagram", "WordPress"],
    slug: "house-of-bliss",
    challenge:
      "House of Bliss had exceptional photography skills but struggled to differentiate themselves in Bengaluru's saturated wedding photography market and attract premium clients.",
    solution:
      "Strategic brand positioning, stunning portfolio website, consistent Instagram presence showcasing their unique storytelling approach, and targeted content that resonates with couples.",
    results: [
      "Transformed into Bengaluru's most sought-after wedding photographers",
      "Created a 6-month advance booking waitlist",
      "300% increase in premium package bookings",
      "Established as the go-to choice for discerning couples",
    ],
    color: "from-amber-500 to-orange-600",
    instagramHandle: "@houseofbliss",
  },
  {
    title: "Sneha Banquet Hall",
    subtitle: "Where Dreams Get Their Spotlight",
    description:
      "Event venues are everywhere, but Sneha Banquet Hall became the place where memories are made. We transformed their marketing from 'we have a nice space' to 'we're where your story gets its perfect setting.' Through content that captures not just the beauty of their venue but the emotion of every celebration, Sneha went from being compared to competitors to being in a category of their own. Now families don't just book them—they specifically ask for 'the Sneha experience.'",
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/07/3.png",
    tags: ["Instagram"],
    slug: "sneha-banquet",
    challenge:
      "Sneha Banquet Hall was lost in a sea of similar venue options, struggling to communicate their unique value beyond just physical space.",
    solution:
      "Emotional storytelling through Instagram, showcasing real celebrations, behind-the-scenes preparation, and the care that goes into every event, creating 'the Sneha experience' brand.",
    results: [
      "Moved from price competition to value-based bookings",
      "Created distinct brand identity in crowded market",
      "80% increase in direct booking inquiries",
      "Established as the emotional choice for celebrations",
    ],
    color: "from-purple-600 to-pink-600",
    instagramHandle: "@snehabanquet",
  },
  {
    title: "SSSS Catering",
    subtitle: "Flavoring Success, One Event at a Time",
    description:
      "Food is the heart of every celebration, and SSSS Catering Service has always understood that every dish contributes to someone's special story. We helped them share this beautiful philosophy with the world. We positioned them not just as caterers, but as celebration enhancers. Every dish they serve becomes part of someone's cherished memory, someone's perfect day, someone's family gathering that everyone talks about for years. Through content that captures the artistry, passion, and genuine care behind every event, SSSS became known for creating culinary experiences that make celebrations truly memorable.",
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/07/2.png",
    tags: ["Instagram"],
    slug: "ssss-catering",
    challenge:
      "SSSS Catering needed to differentiate themselves from countless catering services and communicate their philosophy that food creates lasting memories, not just fills stomachs.",
    solution:
      "Content strategy focused on the artistry and emotion of food, showcasing preparation processes, ingredient selection, and the joy food brings to celebrations through Instagram storytelling.",
    results: [
      "Positioned as memory-makers, not just caterers",
      "200% increase in premium event bookings",
      "Strong emotional brand connection with clients",
      "Repeat bookings from satisfied families",
    ],
    color: "from-red-500 to-orange-500",
    instagramHandle: "@sssscatering",
  },
  {
    title: "Collaborative Senior Care",
    subtitle: "Rewriting Healthcare's Story",
    description:
      "Healthcare marketing is usually about as exciting as watching paint dry, but we changed that narrative completely. We made Collaborative Senior Care feel less like a medical service and more like family. Their transformation wasn't just about getting more clients—it was about changing how people think about senior care. We helped them tell stories that make families feel hopeful instead of worried, confident instead of anxious. Now they're not just a healthcare provider; they're the place where golden years actually feel golden.",
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/07/6.png",
    tags: ["WordPress"],
    slug: "collaborative-senior-care",
    challenge:
      "Senior care is often approached with anxiety and worry. Collaborative Senior Care needed to change the narrative and make families feel confident and hopeful about their choices.",
    solution:
      "Humanized healthcare marketing through storytelling website, focusing on hope, dignity, and quality of life rather than just medical services and facilities.",
    results: [
      "Transformed perception of senior care from worry to hope",
      "Increased family confidence in choosing care",
      "Positioned as family-first healthcare provider",
      "Strong emotional connection with community",
    ],
    color: "from-teal-500 to-green-600",
  },
  {
    title: "Kahani by Charm Events",
    subtitle: "Luxury Wedding Curators",
    description:
      "Kahani by Charm Events always understood that a wedding is not just an occasion—it's an emotion woven into memories, culture, and artistry. Winx Marketing Media positioned them not merely as planners, but as luxury storytellers crafting unforgettable celebrations. Their expertise goes far beyond décor and coordination; it's about curating experiences that feel personal, intimate, and timeless. Through strategic digital storytelling, we showcased their evolution from a wedding service provider to an architect of bespoke celebrations. Now, they don't just attract clients—they attract families who trust them with their most cherished moments.",
    image:
      "https://winxmarketingmedia.in/wp-content/uploads/2025/12/1000404200.jpg",
    tags: ["Instagram"],
    slug: "kahani",
    challenge:
      "Kahani needed to elevate from wedding planner to luxury experience curator, attracting high-end clients who value bespoke, emotional storytelling over standard coordination.",
    solution:
      "Strategic positioning as luxury storytellers, curated Instagram content showcasing intimate moments and cultural artistry, emphasizing personal touches that make each celebration unique.",
    results: [
      "Elevated to luxury wedding curator status",
      "Attracted high-value, emotionally-invested clients",
      "Created portfolio of bespoke celebration experiences",
      "Established trust as architects of cherished moments",
    ],
    color: "from-rose-500 to-pink-600",
    instagramHandle: "@kahanibycharm",
  },
  {
    title: "Ceramic Pro – VR Lifestyle",
    subtitle: "Where Perfection Meets Prestige",
    description:
      "Car detailing, when done right, is automotive artistry. VR Lifestyle India understood this from day one—they weren't just maintaining vehicles, they were creating automotive excellence. We positioned them as the luxury lifestyle curators they truly are. Their ceramic protection services represent more than maintenance; they're about preserving automotive perfection for people who appreciate the finer details. Through strategic digital positioning, we showcased their transformation from service provider to luxury experience creator. Now they don't just have clients; they have enthusiasts who won't trust their vehicles to anyone else.",
    image: "https://winxmarketingmedia.in/wp-content/uploads/2025/07/4.png",
    tags: ["Instagram"],
    slug: "ceramic-pro",
    challenge:
      "VR Lifestyle needed to elevate car detailing from maintenance service to luxury lifestyle experience, attracting premium vehicle owners who value perfection.",
    solution:
      "Positioned as automotive artistry and luxury lifestyle curation, showcasing the precision, care, and excellence that goes into every ceramic protection service through visual storytelling.",
    results: [
      "Transformed from detailer to luxury curator",
      "Attracted premium vehicle enthusiasts",
      "Built loyal community of perfection-seekers",
      "Established as the only choice for discerning owners",
    ],
    color: "from-gray-700 to-gray-900",
    instagramHandle: "@ceramicpro_vrlifestyle",
  },
  {
    title: "Classy Captures",
    subtitle: "The Art of Timeless Wedding Photography",
    description:
      "Classy Captures always knew that wedding photography is more than documenting moments—it's preserving emotions that deserve to live forever. Winx Marketing Media positioned them as artists of timeless storytelling, not just photographers. Every frame they create reflects elegance, emotion, and the quiet beauty found in real connections. Their work goes beyond visuals; it becomes a legacy for families to treasure. Through intentional digital positioning and refined visual storytelling, we showcased their transformation from talented photographers to curators of unforgettable wedding memories. Today, they don't just book clients—they attract couples who value authenticity, artistry, and depth.",
    image:
      "https://winxmarketingmedia.in/wp-content/uploads/2025/12/Untitled-design-2025-12-09T155103.244.png",
    tags: ["Instagram", "WordPress"],
    slug: "classy-captures",
    challenge:
      "Classy Captures needed to differentiate from countless wedding photographers by emphasizing their artistic approach and ability to preserve emotions, not just capture images.",
    solution:
      "Positioned as timeless storytelling artists, created portfolio website and Instagram presence showcasing elegance, emotion, and authentic connections, attracting couples who value depth.",
    results: [
      "Elevated from photographer to memory curator",
      "Attracted emotionally-invested, quality-focused couples",
      "Built reputation for authentic, artistic storytelling",
      "Created legacy work that families treasure",
    ],
    color: "from-indigo-600 to-purple-600",
    instagramHandle: "@classycaptures",
  },
  {
    title: "Glass Gallery",
    subtitle: "South India's Premium Glass Brand",
    description:
      "Glass Gallery is known for redefining modern spaces through premium glass manufacturing and bespoke design solutions. Winx Marketing Media positioned Glass Gallery not just as a glass manufacturer, but as a visionary design partner shaping the future of modern architecture and interior luxury. Their expertise goes far beyond producing glass—they craft masterpieces that elevate spaces with elegance, precision, and timeless sophistication. Through a strategically designed, high-end website, we showcased their evolution from a product supplier to a premium design authority trusted by architects, builders, and luxury homeowners.",
    image:
      "https://winxmarketingmedia.in/wp-content/uploads/2025/12/Untitled-design-2025-12-10T120812.686.png",
    tags: ["WordPress"],
    slug: "glass-gallery",
    challenge:
      "Glass Gallery needed to transcend commodity status and establish themselves as premium design partners for architects and luxury homeowners, not just glass suppliers.",
    solution:
      "High-end website showcasing bespoke design solutions, emphasizing vision, precision, and sophistication. Positioned as design authority shaping modern architecture and interior luxury.",
    results: [
      "Elevated from supplier to design authority",
      "Attracted architects and luxury builders as partners",
      "Established premium brand positioning in South India",
      "Created trust as visionary design partner",
    ],
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "HSR Tiles & Sanitary World",
    subtitle: "Transforming Spaces, One Tile at a Time",
    description:
      "HSR Tiles and Sanitary World always understood that tiles are more than building materials—they are the foundation of spaces where people live, grow, and create memories. Winx Marketing Media positioned them not just as suppliers, but as curators of modern living and architectural elegance. Their products go beyond functionality; they represent craftsmanship, durability, and style designed to elevate every corner of a home. Through strategic digital storytelling, we showcased their evolution from a showroom to a trusted design partner for homeowners, architects, and interior creators. Today, they don't just attract buyers—they attract visionaries who believe every space deserves character and creativity.",
    image:
      "https://winxmarketingmedia.in/wp-content/uploads/2025/12/IMG-20251105-WA0010.jpg",
    tags: ["Instagram"],
    slug: "hsr-tiles",
    challenge:
      "HSR Tiles needed to elevate from product showroom to design partner, appealing to homeowners and architects who see tiles as foundational elements of living spaces.",
    solution:
      "Strategic storytelling positioning tiles as foundations of memories and modern living, showcasing craftsmanship, style, and the elevation they bring to spaces through Instagram content.",
    results: [
      "Transformed from showroom to design partner",
      "Attracted design-conscious homeowners and architects",
      "Positioned products as lifestyle elevators, not just materials",
      "Built community of visionaries valuing character and creativity",
    ],
    color: "from-orange-500 to-red-600",
    instagramHandle: "@hsrtiles",
  },
];
