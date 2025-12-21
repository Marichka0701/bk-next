import { PortableTextBlock } from "next-sanity";

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
}

export interface Slug {
  _type: "slug";
  current: string;
}

export interface Author {
  _id: string;
  name: string;
  slug: Slug;
  image?: SanityImage;
  bio?: PortableTextBlock[];
  position?: string;
  email?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

export interface Category {
  _id: string;
  title: string;
  slug: Slug;
  description?: string;
  color?: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: Slug;
  publishedAt: string;
  excerpt?: string;
  body: PortableTextBlock[]; 
  mainImage?: SanityImage;
  author: Author;
  categories?: Category[];
  readingTime?: number; 
  relatedPosts?: Post[]; 
  featured?: boolean;
  seo?: SEO;
}

export interface PostPreview {
  _id: string;
  title: string;
  slug: Slug;
  publishedAt: string;
  excerpt?: string;
  mainImage?: SanityImage;
  readingTime?: number; 
  author: {
    name: string;
    image?: SanityImage;
  };
  categories?: {
    title: string;
    slug: Slug;
    color?: string;
  }[];
}

export interface SEO {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImage;
  keywords?: string[];
  noIndex?: boolean;
}

export interface Project {
  image: SanityImage;
  title: string;
  description: string;
  budget: number;
  isFlexibleFinancing?: boolean;
}

export interface LandingPage {
  heroSection: {
    badge: string;
    headline: string;
    subheadline: string;
    partnersTitle: string;
    partnerLogos: Array<SanityImage & { url?: string }>;
  };
  howItWorksSection: {
    title: string;
    subtitle: string;
    image: SanityImage;
    steps: Array<{
      title: string;
    }>;
    ctaButton: string;
  };
  targetAudienceSection: {
    title: string;
    audiences: Array<{
      title: string;
      description?: string;
      image: SanityImage;
      ctaText: string;
      ctaLink: string;
    }>;
  };
  experienceSection: {
    title: string;
    content: PortableTextBlock[];
    image: SanityImage;
    testimonial: {
      authorName?: string;
      authorPosition?: string;
    };
    ctaButton: string;
  };
  projectsSection: {
    title: string;
    projects: Project[];
  };
  footerSettings?: {
    tagline?: string;
    socialLinks?: {
      facebook?: string;
      linkedin?: string;
      instagram?: string;
    };
    footerColumns?: Array<{
      title: string;
      links: Array<{
        text: string;
        url: string;
      }>;
    }>;
    copyrightText?: string;
  };
  seo?: SEO;
}

export interface BlogPage {
  heroSection: {
    title: string;
    description: string;
    searchPlaceholder: string;
  };
  newsletterSection: {
    badge: string;
    title: string;
    description: string;
    inputPlaceholder: string;
    buttonText: string;
    disclaimer: string;
  };
  seo?: SEO;
}