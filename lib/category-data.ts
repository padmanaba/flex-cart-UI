export type CategoryTreeNode = {
  _id: string;
  slug: string;
  imageUrl?: string;
  isLeaf: boolean;
  level: number;
  name: string;
  parentCategoryId: string | null;
  path: string[];
  pathNames: string[];
  sortOrder: number;
  status: string;
  children: CategoryTreeNode[];
};

export type CategoriesTreeResponse = {
  responseMetadata?: {
    correlationId?: string;
    sourceSystemId?: string;
    sourceSystemCountryCode?: string;
  };
  responsePayload: {
    categories: CategoryTreeNode[];
  };
};

export const categoriesTreeFallback: CategoriesTreeResponse["responsePayload"] = {
  categories: [
    {
      _id: "69d1dd6e71bdbc93ff68715d",
      slug: "electronics",
      imageUrl:
        "https://dummyjson.com/image/600x400/1f2937/ffffff&text=Electronics",
      isLeaf: false,
      level: 1,
      name: "Electronics",
      parentCategoryId: null,
      path: [],
      pathNames: [],
      sortOrder: 1,
      status: "ACTIVE",
      children: [
        {
          _id: "69d1dd6e71bdbc93ff687167",
          slug: "electronics-mobiles",
          imageUrl:
            "https://dummyjson.com/image/500x350/374151/ffffff&text=Mobiles",
          isLeaf: true,
          level: 2,
          name: "Mobiles",
          parentCategoryId: "69d1dd6e71bdbc93ff68715d",
          path: ["69d1dd6e71bdbc93ff68715d"],
          pathNames: ["Electronics"],
          sortOrder: 1,
          status: "ACTIVE",
          children: [],
        },
        {
          _id: "69d1dd6e71bdbc93ff687168",
          slug: "electronics-laptops",
          imageUrl:
            "https://dummyjson.com/image/500x350/374151/ffffff&text=Laptops",
          isLeaf: true,
          level: 2,
          name: "Laptops",
          parentCategoryId: "69d1dd6e71bdbc93ff68715d",
          path: ["69d1dd6e71bdbc93ff68715d"],
          pathNames: ["Electronics"],
          sortOrder: 2,
          status: "ACTIVE",
          children: [],
        },
      ],
    },
    {
      _id: "69d1dd6e71bdbc93ff68715e",
      slug: "fashion",
      imageUrl:
        "https://dummyjson.com/image/600x400/1f2937/ffffff&text=Fashion",
      isLeaf: false,
      level: 1,
      name: "Fashion",
      parentCategoryId: null,
      path: [],
      pathNames: [],
      sortOrder: 2,
      status: "ACTIVE",
      children: [
        {
          _id: "69d1dd6e71bdbc93ff687171",
          slug: "fashion-men-clothing",
          imageUrl:
            "https://dummyjson.com/image/500x350/374151/ffffff&text=Men%20Clothing",
          isLeaf: true,
          level: 2,
          name: "Men Clothing",
          parentCategoryId: "69d1dd6e71bdbc93ff68715e",
          path: ["69d1dd6e71bdbc93ff68715e"],
          pathNames: ["Fashion"],
          sortOrder: 1,
          status: "ACTIVE",
          children: [],
        },
        {
          _id: "69d1dd6e71bdbc93ff687172",
          slug: "fashion-women-clothing",
          imageUrl:
            "https://dummyjson.com/image/500x350/374151/ffffff&text=Women%20Clothing",
          isLeaf: true,
          level: 2,
          name: "Women Clothing",
          parentCategoryId: "69d1dd6e71bdbc93ff68715e",
          path: ["69d1dd6e71bdbc93ff68715e"],
          pathNames: ["Fashion"],
          sortOrder: 2,
          status: "ACTIVE",
          children: [],
        },
      ],
    },
  ],
};
