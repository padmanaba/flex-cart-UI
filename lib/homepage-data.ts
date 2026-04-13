export type NavItem = {
  label: string;
  href: string;
};

export type CtaLink = {
  label: string;
  href: string;
};

export type CategoryItem = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
};

export type CategoryTreeItem = {
  id: string;
  name: string;
  slug: string;
  children: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
};

export type StatItem = {
  label: string;
  value: number;
};

export type BannerItem = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  mobileImageUrl?: string;
  cta: CtaLink;
  bannerType?: string;
  displayOrder?: number;
};

export type FeaturedProduct = {
  id: string;
  name: string;
  slug: string;
  sku: string;
  categoryId: string;
  categoryName: string;
  brand?: string;
  shortDescription?: string;
  image?: {
    url?: string;
    altText?: string;
  };
  pricing: {
    currency: string;
    mrp: number;
    sellingPrice: number;
    discountAmount: number;
  };
  inventory: {
    quantity: number;
    inStock: boolean;
  };
  hasVariants?: boolean;
  variantAxes?: string[];
  variantCount?: number;
  featured?: boolean;
};

export type HomepagePayload = {
  header: {
    logo: string;
    showSearch: boolean;
    showProfileMenu: boolean;
    showCart: boolean;
    navigation: NavItem[];
  };
  heroBanners?: BannerItem[];
  welcomeBanner: {
    title: string;
    subtitle: string;
    primaryAction: CtaLink;
    secondaryAction: CtaLink;
  };
  topCategories: {
    title: string;
    items: CategoryItem[];
    pagination?: {
      page: number;
      limit: number;
      totalItems: number;
      totalPages: number;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  };
  categoryTree: {
    title: string;
    items: CategoryTreeItem[];
  };
  featuredSubcategories: {
    title: string;
    parentCategory: {
      id: string;
      name: string;
      slug: string;
    } | null;
    items: CategoryItem[];
  };
  featuredProducts?: {
    title: string;
    items: FeaturedProduct[];
  };
  promotionalBanners: {
    title: string;
    items: BannerItem[];
  };
  accountSummary: {
    title: string;
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
      memberSince: string;
    };
    stats: StatItem[];
  };
  footer: {
    links: NavItem[];
    socialLinks: NavItem[];
  };
};

export type HomepageApiResponse = {
  responseMetadata?: {
    correlationId?: string;
    sourceSystemId?: string;
    sourceSystemCountryCode?: string;
  };
  responsePayload: HomepagePayload;
};

export const homepageFallbackData: HomepagePayload = {
  header: {
    logo: "Flex Cart",
    showSearch: true,
    showProfileMenu: true,
    showCart: true,
    navigation: [
      { label: "Home", href: "/" },
      { label: "Categories", href: "/categories" },
      { label: "Offers", href: "/offers" },
      { label: "My Account", href: "/account" },
    ],
  },
  heroBanners: [
    {
      id: "hero-1",
      title: "Mega Electronics Sale",
      subtitle: "Up to 60% off on gadgets and accessories",
      imageUrl:
        "https://dummyjson.com/image/1400x420/0f172a/ffffff&text=Mega+Electronics+Sale",
      mobileImageUrl:
        "https://dummyjson.com/image/700x700/0f172a/ffffff&text=Electronics+Sale",
      cta: {
        label: "Shop Electronics",
        href: "/categories/electronics",
      },
      bannerType: "HERO",
      displayOrder: 1,
    },
    {
      id: "hero-2",
      title: "Fashion Festival",
      subtitle: "Fresh styles for men, women and kids",
      imageUrl:
        "https://dummyjson.com/image/1400x420/7c2d12/ffffff&text=Fashion+Festival",
      mobileImageUrl:
        "https://dummyjson.com/image/700x700/7c2d12/ffffff&text=Fashion+Festival",
      cta: {
        label: "Explore Fashion",
        href: "/categories/fashion",
      },
      bannerType: "HERO",
      displayOrder: 2,
    },
  ],
  welcomeBanner: {
    title: "Welcome back",
    subtitle: "Discover categories and start shopping with curated picks.",
    primaryAction: {
      label: "Browse Categories",
      href: "/categories",
    },
    secondaryAction: {
      label: "View Account",
      href: "/account",
    },
  },
  topCategories: {
    title: "Top Categories",
    items: [
      {
        id: "cat-1",
        name: "Electronics",
        slug: "electronics",
        description: "Browse top products in Electronics.",
        imageUrl:
          "https://dummyjson.com/image/600x400/1f2937/ffffff&text=Electronics",
      },
      {
        id: "cat-2",
        name: "Fashion",
        slug: "fashion",
        description: "Browse top products in Fashion.",
        imageUrl:
          "https://dummyjson.com/image/600x400/1f2937/ffffff&text=Fashion",
      },
      {
        id: "cat-3",
        name: "Home & Kitchen",
        slug: "home-and-kitchen",
        description: "Browse top products in Home & Kitchen.",
        imageUrl:
          "https://dummyjson.com/image/600x400/1f2937/ffffff&text=Home%20%26%20Kitchen",
      },
      {
        id: "cat-4",
        name: "Beauty",
        slug: "beauty",
        description: "Browse top products in Beauty.",
        imageUrl:
          "https://dummyjson.com/image/600x400/1f2937/ffffff&text=Beauty",
      },
    ],
    pagination: {
      page: 1,
      limit: 8,
      totalItems: 24,
      totalPages: 3,
      hasNextPage: true,
      hasPreviousPage: false,
    },
  },
  categoryTree: {
    title: "Browse By Category",
    items: [
      {
        id: "tree-1",
        name: "Electronics",
        slug: "electronics",
        children: [
          { id: "sub-1", name: "Mobiles", slug: "electronics-mobiles" },
          { id: "sub-2", name: "Laptops", slug: "electronics-laptops" },
          { id: "sub-3", name: "Audio", slug: "electronics-audio" },
        ],
      },
      {
        id: "tree-2",
        name: "Fashion",
        slug: "fashion",
        children: [
          { id: "sub-4", name: "Men Clothing", slug: "fashion-men-clothing" },
          { id: "sub-5", name: "Women Clothing", slug: "fashion-women-clothing" },
          { id: "sub-6", name: "Footwear", slug: "fashion-footwear" },
        ],
      },
      {
        id: "tree-3",
        name: "Home & Kitchen",
        slug: "home-and-kitchen",
        children: [
          {
            id: "sub-7",
            name: "Furniture",
            slug: "home-and-kitchen-furniture",
          },
          {
            id: "sub-8",
            name: "Cookware",
            slug: "home-and-kitchen-cookware",
          },
          {
            id: "sub-9",
            name: "Home Decor",
            slug: "home-and-kitchen-home-decor",
          },
        ],
      },
    ],
  },
  featuredSubcategories: {
    title: "Featured Subcategories",
    parentCategory: {
      id: "tree-1",
      name: "Electronics",
      slug: "electronics",
    },
    items: [
      {
        id: "fsub-1",
        name: "Mobiles",
        slug: "electronics-mobiles",
        imageUrl:
          "https://dummyjson.com/image/500x350/374151/ffffff&text=Mobiles",
      },
      {
        id: "fsub-2",
        name: "Laptops",
        slug: "electronics-laptops",
        imageUrl:
          "https://dummyjson.com/image/500x350/374151/ffffff&text=Laptops",
      },
      {
        id: "fsub-3",
        name: "Audio",
        slug: "electronics-audio",
        imageUrl:
          "https://dummyjson.com/image/500x350/374151/ffffff&text=Audio",
      },
      {
        id: "fsub-4",
        name: "Cameras",
        slug: "electronics-cameras",
        imageUrl:
          "https://dummyjson.com/image/500x350/374151/ffffff&text=Cameras",
      },
    ],
  },
  featuredProducts: {
    title: "Featured Products",
    items: [
      {
        id: "prod-1",
        name: "Apple iPhone 17 Pro",
        slug: "apple-iphone-17-pro",
        sku: "APPLE-IPHONE-17-PRO",
        categoryId: "fsub-1",
        categoryName: "Mobiles",
        brand: "Apple",
        shortDescription:
          "Flagship Apple smartphone with ProMotion display and triple-camera system.",
        image: {
          url: "https://dummyjson.com/image/800x800/111827/ffffff&text=iPhone+17+Pro",
          altText: "Apple iPhone 17 Pro",
        },
        pricing: {
          currency: "INR",
          mrp: 139900,
          sellingPrice: 129900,
          discountAmount: 10000,
        },
        inventory: {
          quantity: 21,
          inStock: true,
        },
        hasVariants: true,
        variantAxes: ["color", "storage"],
        variantCount: 3,
        featured: true,
      },
      {
        id: "prod-2",
        name: "Samsung Galaxy Ultra 26",
        slug: "samsung-galaxy-ultra-26",
        sku: "SKU-SAM-GALAXY-ULTRA-26",
        categoryId: "fsub-1",
        categoryName: "Mobiles",
        brand: "Samsung",
        shortDescription: "Premium Android smartphone with powerful cameras.",
        image: {
          url: "https://dummyjson.com/image/800x800/334155/ffffff&text=Galaxy+Ultra",
          altText: "Samsung Galaxy Ultra 26",
        },
        pricing: {
          currency: "INR",
          mrp: 89000,
          sellingPrice: 80000,
          discountAmount: 9000,
        },
        inventory: {
          quantity: 30,
          inStock: true,
        },
        hasVariants: true,
        variantAxes: ["ram", "storage"],
        variantCount: 2,
        featured: true,
      },
    ],
  },
  promotionalBanners: {
    title: "Spotlight",
    items: [
      {
        id: "promo-1",
        title: "Weekend Spotlight",
        subtitle: "Special promo picks for this weekend",
        imageUrl:
          "https://dummyjson.com/image/1200x320/111827/ffffff&text=Weekend+Spotlight",
        mobileImageUrl:
          "https://dummyjson.com/image/700x500/111827/ffffff&text=Weekend+Spotlight",
        cta: {
          label: "See Offers",
          href: "/offers/weekend",
        },
        bannerType: "PROMO",
        displayOrder: 1,
      },
    ],
  },
  accountSummary: {
    title: "Quick Account Summary",
    user: {
      id: "67ef00112233445566778899",
      name: "Rahul Kumar",
      email: "rahul@example.com",
      role: "user",
      memberSince: "2026-04-03T10:15:22.000Z",
    },
    stats: [
      { label: "Orders", value: 3 },
      { label: "Wishlist", value: 7 },
      { label: "Saved Addresses", value: 2 },
    ],
  },
  footer: {
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
    socialLinks: [
      { label: "Instagram", href: "https://instagram.com/flexcart" },
      { label: "Facebook", href: "https://facebook.com/flexcart" },
      { label: "Twitter", href: "https://twitter.com/flexcart" },
    ],
  },
};
