// ==================== BLOG POSTS ====================
export const allPostsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "author": author->{
      name,
      slug,
      image
    },
    "categories": categories[]->{
      title,
      slug,
      color
    },
    mainImage,
    featured
  }
`;

export const featuredPostsQuery = `
  *[_type == "post" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "author": author->name,
    mainImage
  }
`;

export const recentPostsQuery = `
  *[_type == "post"] | order(publishedAt desc) [0...$limit] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "author": author->name,
    mainImage
  }
`;

export const allPostSlugsQuery = `
  *[_type == "post"] {
    "slug": slug.current
  }
`;

// ==================== CATEGORIES ====================
export const allCategoriesQuery = `
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    color,
    "postCount": count(*[_type == "post" && references(^._id)])
  }
`;

export const categoryBySlugQuery = `
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    color
  }
`;

export const postsByCategoryQuery = `
  *[_type == "post" && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "author": author->name,
    mainImage
  }
`;

// ==================== AUTHORS ====================
export const allAuthorsQuery = `
  *[_type == "author"] | order(name asc) {
    _id,
    name,
    slug,
    image,
    position,
    "postCount": count(*[_type == "post" && references(^._id)])
  }
`;

export const authorBySlugQuery = `
  *[_type == "author" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    image,
    bio,
    position,
    email,
    social
  }
`;

export const postsByAuthorQuery = `
  *[_type == "post" && author._ref == $authorId] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    "categories": categories[]->title
  }
`;

// ==================== LANDING PAGE ====================
export const landingPageQuery = `
  *[_type == "frontpage"] | order(_updatedAt desc) [0] {
    heroSection {
      badge,
      headline,
      subheadline,
      partnersTitle,
      partnerLogos[] {
        asset,
        alt,
        url
      }
    },
    howItWorksSection {
      title,
      subtitle,
      image {
        asset,
        alt
      },
      steps[] {
        title
      },
      ctaButton
    },
    targetAudienceSection {
      title,
      audiences[] {
        title,
        description,
        image {
          asset,
          alt
        },
        ctaText,
        ctaLink
      }
    },
    experienceSection {
      title,
      content,
      image {
        asset,
        alt
      },
      testimonial {
        authorName,
        authorPosition
      },
      ctaButton
    },
    projectsSection {
      title,
      projects
    },
    footerSettings {
      tagline,
      socialLinks {
        facebook,
        linkedin,
        instagram
      },
      footerColumns[] {
        title,
        links[] {
          text,
          url
        }
      },
      copyrightText
    },
    seo {
      metaTitle,
      metaDescription,
      ogImage {
        asset,
        alt
      },
      keywords,
      noIndex
    }
  }
`;

// ==================== BLOG PAGE ====================
export const blogPageQuery = `
  *[_type == "blogPage"][0] {
    heroSection {
      title,
      description,
      searchPlaceholder
    },
    newsletterSection {
      badge,
      title,
      description,
      inputPlaceholder,
      buttonText,
      disclaimer
    },
    seo
  }
`;

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    mainImage {
      asset,
      alt
    },
    readingTime, 
    "author": author->{
      name,
      slug,
      image,
      bio,
      position,
      social
    },
    "categories": categories[]->{
      _id,
      title,
      slug,
      color
    },
    seo {
      metaTitle,
      metaDescription,
      ogImage
    },
    "relatedPosts": relatedPosts[]->{
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      readingTime,
      "author": author->{
        name,
        image
      },
      "categories": categories[]->{
        _id,
        title,
        slug,
        color
      }
    }
  }
`;