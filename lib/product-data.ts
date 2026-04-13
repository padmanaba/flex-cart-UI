export type ProductBreadcrumb = {
  name: string;
  slug: string | null;
};

export type ProductGalleryItem = {
  url: string;
  altText?: string;
  isPrimary?: boolean;
};

export type ProductPrice = {
  currency: string;
  mrp: number;
  sellingPrice: number;
  maxSellingPrice?: number;
  discountAmount: number;
};

export type ProductInventory = {
  quantity: number;
  inStock: boolean;
  outOfStockAction?: string;
};

export type ProductVariant = {
  sku: string;
  optionValues: Record<string, string>;
  images?: ProductGalleryItem[];
  price: {
    mrp: number;
    sellingPrice: number;
    currency: string;
    taxRate?: number;
  };
  inventory: ProductInventory;
  status?: string;
};

export type ProductDetails = {
  id: string;
  name: string;
  slug: string;
  sku: string;
  shortDescription?: string;
  description?: string;
  brand?: string;
  tags?: string[];
  breadcrumbs?: ProductBreadcrumb[];
  category?: {
    id: string;
    name: string;
    path: string[];
    pathNames: string[];
  };
  gallery?: ProductGalleryItem[];
  pricing: ProductPrice;
  inventory: ProductInventory;
  hasVariants?: boolean;
  variantAxes?: string[];
  variants?: ProductVariant[];
  attributes?: Record<string, string>;
  specifications?: Record<string, string>;
  featured?: boolean;
};

export type RelatedProduct = {
  id: string;
  name: string;
  slug: string;
  pricing: ProductPrice;
};

export type ProductDetailsResponse = {
  product: ProductDetails;
  relatedProducts: RelatedProduct[];
};

export const productDetailsFallback: ProductDetailsResponse = {
  product: {
    id: "69d27dc8b0308f6ef76ed0a9",
    name: "Samsung Galaxy Ultra 26",
    slug: "samsung-galaxy-ultra-26",
    sku: "SKU-SAM-GALAXY-ULTRA-26",
    shortDescription: "Premium Samsung flagship smartphone",
    description: "Samsung Galaxy Ultra 26 with AMOLED display, fast performance, generous battery life, and a premium camera system designed for daily flagship use.",
    brand: "Samsung",
    tags: ["flagship", "android"],
    breadcrumbs: [
      { name: "Electronics", slug: "electronics" },
      { name: "Mobiles", slug: null },
    ],
    category: {
      id: "69d1dd6e71bdbc93ff687167",
      name: "Mobiles",
      path: ["69d1dd6e71bdbc93ff68715d", "69d1dd6e71bdbc93ff687167"],
      pathNames: ["Electronics", "Mobiles"],
    },
    gallery: [
      {
        url: "https://dummyjson.com/image/1200x1200/111827/ffffff&text=Galaxy+Ultra+Front",
        altText: "Samsung Galaxy Ultra 26 front view",
        isPrimary: true,
      },
      {
        url: "https://dummyjson.com/image/1200x1200/334155/ffffff&text=Galaxy+Ultra+Back",
        altText: "Samsung Galaxy Ultra 26 rear view",
      },
    ],
    pricing: {
      currency: "INR",
      mrp: 72000,
      sellingPrice: 69000,
      maxSellingPrice: 129000,
      discountAmount: 3000,
    },
    inventory: {
      quantity: 25,
      inStock: true,
      outOfStockAction: "continue",
    },
    hasVariants: true,
    variantAxes: ["ram", "storage"],
    variants: [
      {
        sku: "SAM-ULTRA26-8GB-128GB",
        optionValues: {
          ram: "8GB",
          storage: "128GB",
        },
        images: [],
        price: {
          mrp: 72000,
          sellingPrice: 69000,
          currency: "INR",
          taxRate: 18,
        },
        inventory: {
          quantity: 15,
          inStock: true,
          outOfStockAction: "continue",
        },
        status: "ACTIVE",
      },
    ],
    attributes: {
      battery: "5000mAh",
      processor: "Snapdragon 8 Gen 4",
    },
    specifications: {
      screen_size: "6.8 inch",
    },
    featured: true,
  },
  relatedProducts: [
    {
      id: "related-1",
      name: "Another Mobile",
      slug: "another-mobile",
      pricing: {
        currency: "INR",
        mrp: 65000,
        sellingPrice: 62000,
        discountAmount: 3000,
      },
    },
  ],
};
