export interface CategoryItem {
  name: string;
  image: string;
  tags: string[];
  description?: string;
  contact?: string;
  mapLink?: string;
  website?: string;
  averageRating?: number;
}

// ─── Top Attractions ────────────────────────────────────────────────────────────
export const topAttractionsItems: CategoryItem[] = [
  {
    name: "Borobudur Temple",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Borobudur_Sunrise_2.jpg/800px-Borobudur_Sunrise_2.jpg",
    tags: ["UNESCO", "Temple", "Historic"],
    description: "The world's largest Buddhist monument, a 9th-century Mahayana marvel adorned with 2,672 relief panels and 504 Buddha statues.",
    contact: "+62 293 788266",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Borobudur+Temple+Magelang"
  },
  {
    name: "Prambanan Temple",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Prambanan_Temple_Yogyakarta_Indonesia.jpg/800px-Prambanan_Temple_Yogyakarta_Indonesia.jpg",
    tags: ["UNESCO", "Hindu Temple", "Historic"],
    description: "Indonesia's largest Hindu temple complex, built in the 9th century and dedicated to the Trimurti (Brahma, Vishnu, and Shiva).",
    contact: "+62 274 496401",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Prambanan+Temple+Yogyakarta"
  },
  {
    name: "Kraton Yogyakarta",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Kraton_Yogyakarta_Main_Gate.jpg/800px-Kraton_Yogyakarta_Main_Gate.jpg",
    tags: ["Palace", "Javanese Culture", "Museum"],
    description: "The official royal palace of the Ngayogyakarta Hadiningrat Sultanate, serving as a living museum of classical Javanese culture and royal artifacts.",
    contact: "+62 274 373721",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Kraton+Yogyakarta"
  },
  {
    name: "Taman Sari Water Castle",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Taman_Sari_Bathing_Pool.jpg/800px-Taman_Sari_Bathing_Pool.jpg",
    tags: ["Historical", "Bathing Complex", "Architecture"],
    description: "Built in the 18th century, this former royal garden of the Sultanate features elegant bathing pools, underground tunnels, and a unique submerged mosque.",
    contact: "+62 813 28310058",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Taman+Sari+Yogyakarta"
  },
  {
    name: "Malioboro Street",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Jalan_Malioboro_Night.jpg/800px-Jalan_Malioboro_Night.jpg",
    tags: ["Shopping", "Street Market", "Iconic"],
    description: "Jogja's most famous shopping street connecting the Tugu monument to the Kraton, bustling with street vendors selling batik, souvenirs, and local street food.",
    contact: "Public Street",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Jalan+Malioboro+Yogyakarta"
  },
  {
    name: "Ratu Boko Palace",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ratu_Boko_Main_Gate.jpg/800px-Ratu_Boko_Main_Gate.jpg",
    tags: ["Ruins", "Sunset View", "Historic"],
    description: "An imposing archaeological site set on a plateau near Prambanan. Believed to be an 8th-century palace, it offers arguably the best sunset view in Yogyakarta.",
    contact: "+62 274 496510",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Ratu+Boko+Yogyakarta"
  },
  {
    name: "Tugu Yogyakarta",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tugu_Yogyakarta_Monument.jpg/800px-Tugu_Yogyakarta_Monument.jpg",
    tags: ["Monument", "Iconic", "Landmark"],
    description: "The iconic historical monument serving as a symbol of Yogyakarta, lying on a mystical imaginary axis between Mount Merapi, the Kraton, and the South Sea.",
    contact: "Public Monument",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Tugu+Yogyakarta"
  },
  {
    name: "Ullen Sentalu Museum",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Museum_Ullen_Sentalu_Kaliurang.jpg/800px-Museum_Ullen_Sentalu_Kaliurang.jpg",
    tags: ["Museum", "Javanese Art", "Kaliurang"],
    description: "A highly acclaimed private museum nestled in the cool air of Kaliurang, showcasing an exquisite collection of Javanese royal art, batik, and aristocratic heritage.",
    contact: "+62 274 895151",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Ullen+Sentalu+Museum+Yogyakarta"
  }
];
