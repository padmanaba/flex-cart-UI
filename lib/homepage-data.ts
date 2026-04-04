export type NavItem = {
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

export type PromotionalBanner = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  cta: {
    label: string;
    href: string;
  };
};

export type HomepagePayload = {
  header: {
    logo: string;
    showSearch: boolean;
    showProfileMenu: boolean;
    showCart: boolean;
    navigation: NavItem[];
  };
  welcomeBanner: {
    title: string;
    subtitle: string;
    primaryAction: {
      label: string;
      href: string;
    };
    secondaryAction: {
      label: string;
      href: string;
    };
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
  promotionalBanners: {
    title: string;
    items: PromotionalBanner[];
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
  welcomeBanner: {
    title: "Welcome back, Rahul Kumar",
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
        id: "67ef10000000000000000001",
        name: "Electronics",
        slug: "electronics",
        description: "Phones, laptops, accessories and smart devices.",
        imageUrl:
          "https://dummyjson.com/image/600x400/0f172a/ffffff&text=Electronics",
      },
      {
        id: "67ef10000000000000000002",
        name: "Fashion",
        slug: "fashion",
        description: "Clothing, footwear, bags and accessories.",
        imageUrl:
          "https://dummyjson.com/image/600x400/7c2d12/ffffff&text=Fashion",
      },
      {
        id: "67ef10000000000000000003",
        name: "Home & Kitchen",
        slug: "home-kitchen",
        description: "Furniture, decor, cookware and home essentials.",
        imageUrl:
          "https://dummyjson.com/image/600x400/14532d/ffffff&text=Home+%26+Kitchen",
      },
      {
        id: "67ef10000000000000000004",
        name: "Beauty",
        slug: "beauty",
        description: "Skincare, makeup, grooming and wellness.",
        imageUrl:
          "https://dummyjson.com/image/600x400/831843/ffffff&text=Beauty",
      },
    ],
  },
  categoryTree: {
    title: "Browse By Category",
    items: [
      {
        id: "67ef10000000000000000001",
        name: "Electronics",
        slug: "electronics",
        children: [
          { id: "67ef10000000000000000011", name: "Mobiles", slug: "mobiles" },
          { id: "67ef10000000000000000012", name: "Laptops", slug: "laptops" },
          {
            id: "67ef10000000000000000013",
            name: "Accessories",
            slug: "accessories",
          },
        ],
      },
      {
        id: "67ef10000000000000000002",
        name: "Fashion",
        slug: "fashion",
        children: [
          {
            id: "67ef10000000000000000021",
            name: "Men",
            slug: "men-fashion",
          },
          {
            id: "67ef10000000000000000022",
            name: "Women",
            slug: "women-fashion",
          },
          {
            id: "67ef10000000000000000023",
            name: "Kids",
            slug: "kids-fashion",
          },
        ],
      },
      {
        id: "67ef10000000000000000003",
        name: "Home & Kitchen",
        slug: "home-kitchen",
        children: [
          {
            id: "67ef10000000000000000031",
            name: "Furniture",
            slug: "furniture",
          },
          {
            id: "67ef10000000000000000032",
            name: "Cookware",
            slug: "cookware",
          },
          { id: "67ef10000000000000000033", name: "Decor", slug: "decor" },
        ],
      },
    ],
  },
  featuredSubcategories: {
    title: "Explore Electronics",
    parentCategory: {
      id: "67ef10000000000000000001",
      name: "Electronics",
      slug: "electronics",
    },
    items: [
      {
        id: "67ef10000000000000000011",
        name: "Mobiles",
        slug: "mobiles",
        imageUrl:
          "https://dummyjson.com/image/400x300/1d4ed8/ffffff&text=Mobiles",
      },
      {
        id: "67ef10000000000000000012",
        name: "Laptops",
        slug: "laptops",
        imageUrl:
          "https://dummyjson.com/image/400x300/4338ca/ffffff&text=Laptops",
      },
      {
        id: "67ef10000000000000000013",
        name: "Audio",
        slug: "audio",
        imageUrl:
          "https://dummyjson.com/image/400x300/0f766e/ffffff&text=Audio",
      },
      {
        id: "67ef10000000000000000014",
        name: "Wearables",
        slug: "wearables",
        imageUrl:
          "https://dummyjson.com/image/400x300/9a3412/ffffff&text=Wearables",
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
  promotionalBanners: {
    title: "Spotlight",
    items: [
      {
        id: "promo-1",
        title: "Weekend Deals",
        subtitle: "Up to 40% off on electronics and accessories.",
        imageUrl:
          "https://dummyjson.com/image/1200x300/111827/ffffff&text=Weekend+Deals",
        cta: {
          label: "Shop Now",
          href: "/offers/weekend-deals",
        },
      },
      {
        id: "promo-2",
        title: "New Season Fashion",
        subtitle: "Fresh arrivals for men, women and kids.",
        imageUrl:
          "https://dummyjson.com/image/1200x300/7c2d12/ffffff&text=New+Season+Fashion",
        cta: {
          label: "Explore",
          href: "/categories/fashion",
        },
      },
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
