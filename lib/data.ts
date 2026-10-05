export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  rating: number;
  reviewCount: number;
  badge: string | null;
  related: string[];
  faq: [string, string][];
  specs: Record<string, string>;
  variants: string[];
  [key: string]: unknown;
};

export const brand = {
  "slug": "formloom-furniture",
  "name": "Formloom",
  "tagline": "Sculpted living. Quiet rooms.",
  "niche": "Furniture showroom",
  "description": "A modern furniture showroom for sofas, tables, lighting, and storage — designed for calm, lasting rooms.",
  "cta": "Browse the showroom",
  "checkoutNote": "Showroom pickup or white-glove delivery.",
  "heroImage": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2400&q=80",
  "heroVideo": "https://videos.pexels.com/video-files/5495909/5495909-uhd_2560_1440_25fps.mp4",
  "categories": [
    "Sofas",
    "Tables",
    "Lighting",
    "Storage",
    "Bedroom"
  ],
  "isBooking": false,
  "offer": {
    "code": "ROOM15",
    "label": "Spring floor refresh — 15% off sofas & lighting",
    "ends": "Ends Sunday"
  },
  "loyalty": "Formloom Circle — earn studio credits on every delivery",
  "stats": [
    [
      "12k+",
      "rooms styled"
    ],
    [
      "48h",
      "white-glove booking"
    ],
    [
      "4.9",
      "showroom rating"
    ],
    [
      "90",
      "day comfort trial"
    ]
  ],
  "marquee": [
    "Solid wood ·",
    "Natural linen ·",
    "White-glove delivery ·",
    "Room planner ·",
    "Trade program ·"
  ],
  "reviews": [
    [
      "Maya R.",
      5,
      "The Arc Sofa changed how our living room feels — calm, not sparse."
    ],
    [
      "Jonah P.",
      5,
      "Room journey + material swatches helped us pick walnut over oak before shipping."
    ],
    [
      "Priya S.",
      4,
      "White-glove crew was careful. Nightstand is perfect scale."
    ]
  ],
  "ai": [
    [
      "What size sofa for a 12×16 room?",
      "For a 12×16 living room, the Linen Arc Sofa (84\") leaves walking paths. Pair with the Nest Table if you want flexibility."
    ],
    [
      "Can I see materials?",
      "Open any product and use Materials — linen, bouclé, walnut, ash, brass. Swatch kits ship free with ROOM15."
    ],
    [
      "Do you do room planning?",
      "Yes — walk the Room Journey on the homepage (Living → Sleep → Light), then book a free 20‑min floor plan session at checkout."
    ],
    [
      "Delivery timeline?",
      "In-stock pieces: 5–10 days. Custom upholstery: 4–6 weeks. White-glove is included over $1,200."
    ]
  ],
  "blog": [
    [
      "How to layer lighting in a quiet room",
      "Tips"
    ],
    [
      "Oak vs walnut for small apartments",
      "Materials"
    ],
    [
      "Measuring for white-glove delivery",
      "Guides"
    ]
  ],
  "stores": [
    "SoHo Studio",
    "Brooklyn Atelier",
    "Trade Desk (virtual)"
  ],
  "nicheKind": "furniture"
} as const;

export const products: Product[] = [
  {
    "id": "formloom-furniture-1",
    "name": "Linen Arc Sofa",
    "category": "Sofas",
    "price": 1890,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80"
    ],
    "description": "Three-seat sofa in warm linen with oak sled legs.",
    "rating": 4.4,
    "reviewCount": 18,
    "badge": "Bestseller",
    "related": [
      "formloom-furniture-2",
      "formloom-furniture-3",
      "formloom-furniture-5"
    ],
    "faq": [
      [
        "What's included?",
        "Three-seat sofa in warm linen with oak sled legs. Ships with care guide."
      ],
      [
        "Returns?",
        "Showroom pickup or white-glove delivery."
      ],
      [
        "Need help choosing?",
        "Ask the on-site assistant — niche answers, no pressure."
      ]
    ],
    "specs": {
      "Dimensions": "22\"W × 22\"D × 18\"H",
      "Materials": "Linen",
      "Finish": "Natural oil",
      "Weight": "20 lb",
      "Lead": "4–6 weeks custom"
    },
    "variants": [
      "Natural",
      "Charcoal",
      "Sand"
    ],
    "materials": [
      "Linen",
      "Walnut",
      "Bouclé",
      "Oak"
    ]
  },
  {
    "id": "formloom-furniture-2",
    "name": "Walnut Nest Table",
    "category": "Tables",
    "price": 420,
    "image": "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=900&q=80"
    ],
    "description": "Nested pair in solid walnut with soft edges.",
    "rating": 4.5,
    "reviewCount": 29,
    "badge": "Bestseller",
    "related": [
      "formloom-furniture-3",
      "formloom-furniture-4",
      "formloom-furniture-6"
    ],
    "faq": [
      [
        "What's included?",
        "Nested pair in solid walnut with soft edges. Ships with care guide."
      ],
      [
        "Returns?",
        "Showroom pickup or white-glove delivery."
      ],
      [
        "Need help choosing?",
        "Ask the on-site assistant — niche answers, no pressure."
      ]
    ],
    "specs": {
      "Dimensions": "84\"W × 36\"D × 32\"H",
      "Materials": "Walnut",
      "Finish": "Matte lacquer",
      "Weight": "28 lb",
      "Lead": "In stock · 5–10 days"
    },
    "variants": [
      "Natural",
      "Charcoal",
      "Sand"
    ],
    "materials": [
      "Linen",
      "Walnut",
      "Bouclé",
      "Oak"
    ]
  },
  {
    "id": "formloom-furniture-3",
    "name": "Halo Floor Lamp",
    "category": "Lighting",
    "price": 310,
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80"
    ],
    "description": "Brushed brass stem with linen drum shade.",
    "rating": 4.6,
    "reviewCount": 40,
    "badge": null,
    "related": [
      "formloom-furniture-4",
      "formloom-furniture-5",
      "formloom-furniture-7"
    ],
    "faq": [
      [
        "What's included?",
        "Brushed brass stem with linen drum shade. Ships with care guide."
      ],
      [
        "Returns?",
        "Showroom pickup or white-glove delivery."
      ],
      [
        "Need help choosing?",
        "Ask the on-site assistant — niche answers, no pressure."
      ]
    ],
    "specs": {
      "Dimensions": "22\"W × 22\"D × 18\"H",
      "Materials": "Oak",
      "Finish": "Brushed",
      "Weight": "36 lb",
      "Lead": "In stock · 5–10 days"
    },
    "variants": [
      "Natural",
      "Charcoal",
      "Sand"
    ],
    "materials": [
      "Linen",
      "Walnut",
      "Bouclé",
      "Oak"
    ]
  },
  {
    "id": "formloom-furniture-4",
    "name": "Ridge Media Console",
    "category": "Storage",
    "price": 980,
    "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=900&q=80"
    ],
    "description": "Fluted oak doors, cable-ready bay.",
    "rating": 4.7,
    "reviewCount": 51,
    "badge": "Limited",
    "related": [
      "formloom-furniture-5",
      "formloom-furniture-6",
      "formloom-furniture-8"
    ],
    "faq": [
      [
        "What's included?",
        "Fluted oak doors, cable-ready bay. Ships with care guide."
      ],
      [
        "Returns?",
        "Showroom pickup or white-glove delivery."
      ],
      [
        "Need help choosing?",
        "Ask the on-site assistant — niche answers, no pressure."
      ]
    ],
    "specs": {
      "Dimensions": "84\"W × 36\"D × 32\"H",
      "Materials": "Bouclé",
      "Finish": "Natural oil",
      "Weight": "44 lb",
      "Lead": "4–6 weeks custom"
    },
    "variants": [
      "Natural",
      "Charcoal",
      "Sand"
    ],
    "materials": [
      "Linen",
      "Walnut",
      "Bouclé",
      "Oak"
    ]
  },
  {
    "id": "formloom-furniture-5",
    "name": "Cloud Daybed",
    "category": "Sofas",
    "price": 1420,
    "image": "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80"
    ],
    "description": "Low daybed with removable boucle cover.",
    "rating": 4.8,
    "reviewCount": 62,
    "badge": null,
    "related": [
      "formloom-furniture-6",
      "formloom-furniture-7",
      "formloom-furniture-9"
    ],
    "faq": [
      [
        "What's included?",
        "Low daybed with removable boucle cover. Ships with care guide."
      ],
      [
        "Returns?",
        "Showroom pickup or white-glove delivery."
      ],
      [
        "Need help choosing?",
        "Ask the on-site assistant — niche answers, no pressure."
      ]
    ],
    "specs": {
      "Dimensions": "22\"W × 22\"D × 18\"H",
      "Materials": "Brass",
      "Finish": "Matte lacquer",
      "Weight": "52 lb",
      "Lead": "In stock · 5–10 days"
    },
    "variants": [
      "Natural",
      "Charcoal",
      "Sand"
    ],
    "materials": [
      "Linen",
      "Walnut",
      "Bouclé",
      "Oak"
    ]
  },
  {
    "id": "formloom-furniture-6",
    "name": "Stone Side Table",
    "category": "Tables",
    "price": 280,
    "image": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=80"
    ],
    "description": "Cast concrete top on blackened steel.",
    "rating": 4.9,
    "reviewCount": 73,
    "badge": "New",
    "related": [
      "formloom-furniture-7",
      "formloom-furniture-8",
      "formloom-furniture-10"
    ],
    "faq": [
      [
        "What's included?",
        "Cast concrete top on blackened steel. Ships with care guide."
      ],
      [
        "Returns?",
        "Showroom pickup or white-glove delivery."
      ],
      [
        "Need help choosing?",
        "Ask the on-site assistant — niche answers, no pressure."
      ]
    ],
    "specs": {
      "Dimensions": "84\"W × 36\"D × 32\"H",
      "Materials": "Linen",
      "Finish": "Brushed",
      "Weight": "60 lb",
      "Lead": "In stock · 5–10 days"
    },
    "variants": [
      "Natural",
      "Charcoal",
      "Sand"
    ],
    "materials": [
      "Linen",
      "Walnut",
      "Bouclé",
      "Oak"
    ]
  },
  {
    "id": "formloom-furniture-7",
    "name": "Paper Lantern Pendant",
    "category": "Lighting",
    "price": 190,
    "image": "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=900&q=80"
    ],
    "description": "Handmade washi globe, warm glow.",
    "rating": 4.4,
    "reviewCount": 84,
    "badge": null,
    "related": [
      "formloom-furniture-8",
      "formloom-furniture-9",
      "formloom-furniture-11"
    ],
    "faq": [
      [
        "What's included?",
        "Handmade washi globe, warm glow. Ships with care guide."
      ],
      [
        "Returns?",
        "Showroom pickup or white-glove delivery."
      ],
      [
        "Need help choosing?",
        "Ask the on-site assistant — niche answers, no pressure."
      ]
    ],
    "specs": {
      "Dimensions": "22\"W × 22\"D × 18\"H",
      "Materials": "Walnut",
      "Finish": "Natural oil",
      "Weight": "68 lb",
      "Lead": "4–6 weeks custom"
    },
    "variants": [
      "Natural",
      "Charcoal",
      "Sand"
    ],
    "materials": [
      "Linen",
      "Walnut",
      "Bouclé",
      "Oak"
    ]
  },
  {
    "id": "formloom-furniture-8",
    "name": "Cedar Wardrobe",
    "category": "Bedroom",
    "price": 2100,
    "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80"
    ],
    "description": "Floor-to-ceiling cedar with soft-close drawers.",
    "rating": 4.5,
    "reviewCount": 95,
    "badge": null,
    "related": [
      "formloom-furniture-9",
      "formloom-furniture-10",
      "formloom-furniture-12"
    ],
    "faq": [
      [
        "What's included?",
        "Floor-to-ceiling cedar with soft-close drawers. Ships with care guide."
      ],
      [
        "Returns?",
        "Showroom pickup or white-glove delivery."
      ],
      [
        "Need help choosing?",
        "Ask the on-site assistant — niche answers, no pressure."
      ]
    ],
    "specs": {
      "Dimensions": "84\"W × 36\"D × 32\"H",
      "Materials": "Oak",
      "Finish": "Matte lacquer",
      "Weight": "76 lb",
      "Lead": "In stock · 5–10 days"
    },
    "variants": [
      "Natural",
      "Charcoal",
      "Sand"
    ],
    "materials": [
      "Linen",
      "Walnut",
      "Bouclé",
      "Oak"
    ]
  },
  {
    "id": "formloom-furniture-9",
    "name": "Loom Lounge Chair",
    "category": "Sofas",
    "price": 740,
    "image": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80"
    ],
    "description": "Bentwood frame, handwoven seat.",
    "rating": 4.6,
    "reviewCount": 106,
    "badge": null,
    "related": [
      "formloom-furniture-10",
      "formloom-furniture-11",
      "formloom-furniture-1"
    ],
    "faq": [
      [
        "What's included?",
        "Bentwood frame, handwoven seat. Ships with care guide."
      ],
      [
        "Returns?",
        "Showroom pickup or white-glove delivery."
      ],
      [
        "Need help choosing?",
        "Ask the on-site assistant — niche answers, no pressure."
      ]
    ],
    "specs": {
      "Dimensions": "22\"W × 22\"D × 18\"H",
      "Materials": "Bouclé",
      "Finish": "Brushed",
      "Weight": "84 lb",
      "Lead": "In stock · 5–10 days"
    },
    "variants": [
      "Natural",
      "Charcoal",
      "Sand"
    ],
    "materials": [
      "Linen",
      "Walnut",
      "Bouclé",
      "Oak"
    ]
  },
  {
    "id": "formloom-furniture-10",
    "name": "Dune Nightstand",
    "category": "Bedroom",
    "price": 360,
    "image": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80"
    ],
    "description": "Two-drawer ash nightstand with leather pull.",
    "rating": 4.7,
    "reviewCount": 117,
    "badge": null,
    "related": [
      "formloom-furniture-11",
      "formloom-furniture-12",
      "formloom-furniture-2"
    ],
    "faq": [
      [
        "What's included?",
        "Two-drawer ash nightstand with leather pull. Ships with care guide."
      ],
      [
        "Returns?",
        "Showroom pickup or white-glove delivery."
      ],
      [
        "Need help choosing?",
        "Ask the on-site assistant — niche answers, no pressure."
      ]
    ],
    "specs": {
      "Dimensions": "84\"W × 36\"D × 32\"H",
      "Materials": "Brass",
      "Finish": "Natural oil",
      "Weight": "92 lb",
      "Lead": "4–6 weeks custom"
    },
    "variants": [
      "Natural",
      "Charcoal",
      "Sand"
    ],
    "materials": [
      "Linen",
      "Walnut",
      "Bouclé",
      "Oak"
    ]
  },
  {
    "id": "formloom-furniture-11",
    "name": "Gallery Shelving",
    "category": "Storage",
    "price": 620,
    "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=900&q=80"
    ],
    "description": "Open oak shelves with brass pins.",
    "rating": 4.8,
    "reviewCount": 128,
    "badge": null,
    "related": [
      "formloom-furniture-12",
      "formloom-furniture-1",
      "formloom-furniture-3"
    ],
    "faq": [
      [
        "What's included?",
        "Open oak shelves with brass pins. Ships with care guide."
      ],
      [
        "Returns?",
        "Showroom pickup or white-glove delivery."
      ],
      [
        "Need help choosing?",
        "Ask the on-site assistant — niche answers, no pressure."
      ]
    ],
    "specs": {
      "Dimensions": "22\"W × 22\"D × 18\"H",
      "Materials": "Linen",
      "Finish": "Matte lacquer",
      "Weight": "100 lb",
      "Lead": "In stock · 5–10 days"
    },
    "variants": [
      "Natural",
      "Charcoal",
      "Sand"
    ],
    "materials": [
      "Linen",
      "Walnut",
      "Bouclé",
      "Oak"
    ]
  },
  {
    "id": "formloom-furniture-12",
    "name": "Orbit Desk Lamp",
    "category": "Lighting",
    "price": 145,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80"
    ],
    "description": "Adjustable arm, matte black finish.",
    "rating": 4.9,
    "reviewCount": 139,
    "badge": null,
    "related": [
      "formloom-furniture-1",
      "formloom-furniture-2",
      "formloom-furniture-4"
    ],
    "faq": [
      [
        "What's included?",
        "Adjustable arm, matte black finish. Ships with care guide."
      ],
      [
        "Returns?",
        "Showroom pickup or white-glove delivery."
      ],
      [
        "Need help choosing?",
        "Ask the on-site assistant — niche answers, no pressure."
      ]
    ],
    "specs": {
      "Dimensions": "84\"W × 36\"D × 32\"H",
      "Materials": "Walnut",
      "Finish": "Brushed",
      "Weight": "108 lb",
      "Lead": "In stock · 5–10 days"
    },
    "variants": [
      "Natural",
      "Charcoal",
      "Sand"
    ],
    "materials": [
      "Linen",
      "Walnut",
      "Bouclé",
      "Oak"
    ]
  }
] as Product[];

export function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function relatedProducts(p: Product) {
  return p.related.map(getProduct).filter(Boolean) as Product[];
}
