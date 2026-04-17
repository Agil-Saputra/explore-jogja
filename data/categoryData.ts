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

// ─── Accommodation ──────────────────────────────────────────────────────────────
export const accommodationItems: CategoryItem[] = [
  {
    name: "Greenhost Boutique Hotel",
    image: "https://picsum.photos/seed/greenhost/600/800",
    tags: ["Boutique Hotel", "Eco-Friendly", "City Center"],
    description: "Located on Jl. Prawirotaman II, this eco-friendly boutique hotel is famous for its urban farming concept and was prominently featured in the movie 'Ada Apa Dengan Cinta 2'.",
    contact: "+62 274 389777",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Greenhost+Boutique+Hotel+Yogyakarta"
  },
  {
    name: "The Phoenix Hotel Yogyakarta",
    image: "https://picsum.photos/seed/phoenix/600/800",
    tags: ["Heritage Hotel", "Luxury", "MGallery"],
    description: "An MGallery Collection property built in 1918 on Jl. Jend. Sudirman, blending rich European colonial architecture with exquisite Javanese cultural details.",
    contact: "+62 274 566617",
    mapLink: "https://www.google.com/maps/search/?api=1&query=The+Phoenix+Hotel+Yogyakarta"
  },
  {
    name: "Adhisthana Hotel",
    image: "https://picsum.photos/seed/adhisthana/600/800",
    tags: ["Boutique", "Cultural District", "Prawirotaman"],
    description: "Situated in the Prawirotaman district, this boutique hotel is highly recognizable by its iconic facade made of repurposed vintage Javanese window shutters.",
    contact: "+62 274 413888",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Adhisthana+Hotel+Yogyakarta"
  },
  {
    name: "Plataran Heritage Borobudur",
    image: "https://picsum.photos/seed/plataran/600/800",
    tags: ["Resort", "Borobudur", "Luxury"],
    description: "A majestic luxury resort located amidst the rice terraces of Magelang, offering breathtaking views of the Menoreh Hills and close proximity to Borobudur Temple.",
    contact: "+62 293 3301888",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Plataran+Heritage+Borobudur"
  },
  {
    name: "Rumah Palagan Yogyakarta",
    image: "https://picsum.photos/seed/rumahpalagan/600/800",
    tags: ["Guest House", "Modern", "Sleman"],
    description: "A charming and relaxing guest house on Jl. Palagan Tentara Pelajar, offering a quiet escape from the city bustle with intimate garden settings.",
    contact: "+62 274 888632",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Rumah+Palagan+Yogyakarta"
  },
  {
    name: "Tentrem Hotel",
    image: "https://picsum.photos/seed/tentrem/600/800",
    tags: ["5-Star", "Luxury", "Premium"],
    description: "An extravagant 5-star hotel on Jl. AM Sangaji that combines grand Javanese hospitality with state-of-the-art luxury, known for hosting international dignitaries.",
    contact: "+62 274 6415555",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Tentrem+Hotel+Yogyakarta"
  },
  {
    name: "D'Senopati Malioboro Grand Hotel",
    image: "https://picsum.photos/seed/dsenopati/600/800",
    tags: ["Malioboro", "Business", "City Center"],
    description: "A convenient grand hotel situated on Jl. Panembahan Senopati, precisely in the heart of the city near historical sites like the Zero Kilometer point.",
    contact: "+62 274 5011456",
    mapLink: "https://www.google.com/maps/search/?api=1&query=D+Senopati+Malioboro+Grand+Hotel"
  },
  {
    name: "Villa Borobudur Resort",
    image: "https://picsum.photos/seed/villaborobudur/600/800",
    tags: ["Villa", "Borobudur", "Nature"],
    description: "Perched on the slopes of the Menoreh Mountains, offering exclusive authentic Javanese teak villas with direct views of Mount Merapi and Borobudur.",
    contact: "+62 851 00525520",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Villa+Borobudur+Resort"
  }
];

// ─── Activities ─────────────────────────────────────────────────────────────────
export const activitiesItems: CategoryItem[] = [
  {
    name: "Batik Making Workshop",
    image: "https://picsum.photos/seed/batik/600/800",
    tags: ["Workshop", "Cultural", "Handcraft"],
    description: "Learn the ancient art of Batik making at Batik Plentong, guiding you from drawing patterns with hot wax to the traditional dyeing process.",
    contact: "+62 274 373777 (Batik Plentong)",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Batik+Plentong+Yogyakarta"
  },
  {
    name: "Ramayana Ballet Prambanan",
    image: "https://picsum.photos/seed/ramayana/600/800",
    tags: ["Performance", "Traditional Dance", "Prambanan"],
    description: "A spectacular traditional Javanese dance performance telling the epic Ramayana story in an open-air theater with the illuminated Prambanan temples as a backdrop.",
    contact: "+62 274 496408",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Ramayana+Ballet+Prambanan"
  },
  {
    name: "Silver Craft in Kotagede",
    image: "https://picsum.photos/seed/silver/600/800",
    tags: ["Workshop", "Silver", "Artisan"],
    description: "Explore Kotagede, the historic silver-making center of Jogja, and try your hand at crafting delicate filigree jewelry at renowned studios like HS Silver.",
    contact: "+62 274 371735",
    mapLink: "https://www.google.com/maps/search/?api=1&query=HS+Silver+Kotagede"
  },
  {
    name: "Gamelan Music Experience",
    image: "https://picsum.photos/seed/gamelan/600/800",
    tags: ["Music", "Traditional", "Cultural"],
    description: "Immerse yourself in traditional Javanese sounds by learning to play the Gamelan, an ensemble of percussive instruments, offered at Museum Sonobudoyo.",
    contact: "+62 274 383690 (Sonobudoyo)",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Museum+Sonobudoyo+Yogyakarta"
  },
  {
    name: "Jomblang Cave Adventure",
    image: "https://picsum.photos/seed/jomblang/600/800",
    tags: ["Adventure", "Nature", "Gunung Kidul"],
    description: "Descend 60 meters into a vertical sinkhole cave using single rope techniques, and trek through an underground ancient forest to witness the 'Light of Heaven'.",
    contact: "+62 811 117130 (Tour Booking)",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Jomblang+Cave+Gunung+Kidul"
  },
  {
    name: "Borobudur Sunrise Tour",
    image: "https://picsum.photos/seed/borosunrise/600/800",
    tags: ["Tour", "Sunrise", "Magelang"],
    description: "Experience the mystical morning mist and sunrise from the nearby Punthuk Setumbu hill, followed by an early entrance to explore the Borobudur temple.",
    contact: "+62 293 788131",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Punthuk+Setumbu+Magelang"
  },
  {
    name: "Traditional Pottery Class",
    image: "https://picsum.photos/seed/pottery/600/800",
    tags: ["Workshop", "Pottery", "Kasongan"],
    description: "Visit the artisan village of Kasongan in Bantul to learn the craft of making clay pottery directly from generations of skilled local craftsmen.",
    contact: "+62 812 2711 1118 (Kasongan Info)",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Kasongan+Pottery+Village+Bantul"
  },
  {
    name: "Merapi Jeep Lava Tour",
    image: "https://picsum.photos/seed/merapijeep/600/800",
    tags: ["Adventure", "Merapi", "Kaliurang"],
    description: "Take a thrilling open-jeep ride around the slopes of the active Mount Merapi in Kaliurang, exploring the alien landscape left by past eruptions.",
    contact: "+62 813 2828 2812 (Lava Tour Assoc.)",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Merapi+Jeep+Lava+Tour+Kaliurang"
  }
];

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

// ─── Events ─────────────────────────────────────────────────────────────────────
export const eventsItems: CategoryItem[] = [
  {
    name: "Sekaten Festival",
    image: "https://picsum.photos/seed/sekaten/600/800",
    tags: ["Traditional", "Annual", "Kraton"],
    description: "A vibrant month-long traditional Javanese festival held in the Alun-Alun Utara to celebrate the birth of Prophet Muhammad, featuring night markets and gamelan.",
    contact: "+62 274 373721 (Kraton Info)",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Alun+Alun+Utara+Yogyakarta"
  },
  {
    name: "Yogyakarta Art Festival (FKY)",
    image: "https://picsum.photos/seed/fky/600/800",
    tags: ["Art", "Contemporary", "Cultural"],
    description: "Festival Kesenian Yogyakarta (FKY) is the city’s largest annual arts and culture event, highlighting contemporary exhibitions, performances, and creative markets.",
    contact: "www.fky.id",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Taman+Budaya+Yogyakarta"
  },
  {
    name: "Malioboro Night Festival",
    image: "https://picsum.photos/seed/malioboronight/600/800",
    tags: ["Night Market", "Music", "Street Art"],
    description: "An occasional nighttime celebration turning the pedestrian areas of Malioboro Street into an open stage for street musicians and cultural shows.",
    contact: "Yogyakarta Tourism Board",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Jalan+Malioboro+Yogyakarta"
  },
  {
    name: "Labuhan Ceremony",
    image: "https://picsum.photos/seed/labuhan/600/800",
    tags: ["Ceremony", "Traditional", "Sacred"],
    description: "An annual sacred offering ceremony by the Kraton to honor Nyai Roro Kidul (Queen of the Southern Sea) at Parangkusumo Beach and Mount Merapi.",
    contact: "Kraton Yogyakarta",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Parangkusumo+Beach+Yogyakarta"
  },
  {
    name: "Jogja International Batik Biennale",
    image: "https://picsum.photos/seed/jibb/600/800",
    tags: ["Batik", "International", "Exhibition"],
    description: "A massive international event celebrating Yogyakarta's status as a World Batik City, featuring elaborate fashion shows, symposiums, and exhibitions.",
    contact: "www.jibb.id",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Jogja+Expo+Center"
  },
  {
    name: "Wayang Kulit Performance",
    image: "https://picsum.photos/seed/wayang/600/800",
    tags: ["Shadow Puppet", "Traditional", "Performance"],
    description: "Experience an authentic Wayang Kulit (leather shadow puppet) performance showcasing Hindu epics, held regularly at Museum Sonobudoyo.",
    contact: "+62 274 383690",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Museum+Sonobudoyo+Yogyakarta"
  },
  {
    name: "Grebeg Maulud",
    image: "https://picsum.photos/seed/grebeg/600/800",
    tags: ["Religious", "Traditional", "Parade"],
    description: "The grand finale of the Sekaten festival featuring a massive parade where large 'Gunungan' food mountains are carried from the Kraton to the Grand Mosque.",
    contact: "Kraton Yogyakarta",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Kraton+Yogyakarta"
  },
  {
    name: "Jogja Fashion Week",
    image: "https://picsum.photos/seed/jfw/600/800",
    tags: ["Fashion", "Modern", "Annual"],
    description: "A vibrant showcase of local and national designers pushing the envelope of Indonesian fashion, specifically highlighting the modernization of traditional textiles.",
    contact: "www.jogjafashionweek.co.id",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Jogja+Expo+Center"
  }
];

// ─── Food & Drink ───────────────────────────────────────────────────────────────
export const foodAndDrinkItems: CategoryItem[] = [
  {
    name: "Gudeg Yu Djum",
    image: "https://picsum.photos/seed/gudeg/600/800",
    tags: ["Traditional", "Gudeg", "Iconic"],
    description: "Operating since 1950 on Jl. Wijilan, this is the most legendary establishment serving dry Gudeg, Yogyakarta's signature sweet jackfruit stew.",
    contact: "+62 274 450989",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Gudeg+Yu+Djum+Wijilan"
  },
  {
    name: "Bakpia Pathok 25",
    image: "https://picsum.photos/seed/bakpia/600/800",
    tags: ["Snack", "Souvenir", "Bakpia"],
    description: "The premier souvenir shop in Pathuk selling freshly baked Bakpia, a sweet mung-bean filled pastry that is a mandatory culinary souvenir from Jogja.",
    contact: "+62 274 512219",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Bakpia+Pathok+25+Yogyakarta"
  },
  {
    name: "Sate Klathak Pak Pong",
    image: "https://picsum.photos/seed/sate/600/800",
    tags: ["Street Food", "Satay", "Bantul"],
    description: "Located in Bantul, this highly popular spot is renowned for its unique preparation of mutton satay skewered on metal bicycle spokes and grilled over charcoal.",
    contact: "+62 811 264611",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Sate+Klathak+Pak+Pong+Bantul"
  },
  {
    name: "Wedang Ronde Alun-Alun",
    image: "https://picsum.photos/seed/wedang/600/800",
    tags: ["Warm Drink", "Traditional", "Dessert"],
    description: "Experience comfort in a bowl at Alun-Alun Kidul with this hot ginger broth filled with peanut-stuffed glutinous rice balls, perfect for breezy Jogja nights.",
    contact: "Alun-Alun Kidul Stalls",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Alun+Alun+Kidul+Yogyakarta"
  },
  {
    name: "Angkringan Kopi Joss Lik Man",
    image: "https://picsum.photos/seed/angkringan/600/800",
    tags: ["Street Food", "Night", "Coffee"],
    description: "An iconic traditional cart near Tugu station famous for inventing 'Kopi Joss', a strong black coffee served boiling hot with a piece of glowing charcoal inside.",
    contact: "Next to Tugu Train Station",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Angkringan+Kopi+Joss+Lik+Man"
  },
  {
    name: "Nasi Kucing Pasar Kembang",
    image: "https://picsum.photos/seed/nasikucing/600/800",
    tags: ["Street Food", "Rice", "Late Night"],
    description: "Grab tiny portions of rice wrapped in banana leaves with savory side dishes (Nasi Kucing) along Pasar Kembang for an authentic local late-night experience.",
    contact: "Pasar Kembang Area",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Pasar+Kembang+Yogyakarta"
  },
  {
    name: "Brongkos Bu Letnan (Handayani)",
    image: "https://picsum.photos/seed/brongkos/600/800",
    tags: ["Traditional", "Beef Stew", "Alun-Alun"],
    description: "Enjoy Brongkos, a rich, dark beef and black-eyed pea stew flavored with keluak nut, famously served at Warung Handayani south of the Alun-Alun.",
    contact: "+62 274 373622",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Brongkos+Handayani+Alun+Alun+Kidul"
  },
  {
    name: "Es Dawet Cendol Beringharjo",
    image: "https://picsum.photos/seed/esdawet/600/800",
    tags: ["Cold Drink", "Traditional", "Sweet"],
    description: "Cool down at Pasar Beringharjo with Jogja's popular sweet iced dessert made from green rice flour jelly, fresh coconut milk, and rich liquid palm sugar.",
    contact: "Pasar Beringharjo Market",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Pasar+Beringharjo+Yogyakarta"
  }
];

// ─── Getting Around ─────────────────────────────────────────────────────────────
export const gettingAroundItems: CategoryItem[] = [
  {
    name: "Trans Jogja Bus",
    image: "https://picsum.photos/seed/transjogja/600/800",
    tags: ["Public Transit", "Affordable", "City Route"],
    description: "The city's affordable and air-conditioned Rapid Transit bus system. Fares are extremely cheap and buses loop around all major tourist areas like Malioboro and Prambanan.",
    contact: "1500 000 (Customer Service)",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Halte+Trans+Jogja+Malioboro"
  },
  {
    name: "Andong Horse Cart",
    image: "https://picsum.photos/seed/andong/600/800",
    tags: ["Traditional", "Tourist", "Scenic"],
    description: "Take a leisurely, scenic ride on an 'Andong', a traditional four-wheeled horse-drawn carriage heavily concentrated around Malioboro Street and the Kraton.",
    contact: "Street Hail (Malioboro)",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Jalan+Malioboro+Yogyakarta"
  },
  {
    name: "Becak Pedicab",
    image: "https://picsum.photos/seed/becak/600/800",
    tags: ["Traditional", "Short Distance", "Cultural"],
    description: "A classic Indonesian three-wheeled pedicab (available in manual or motorized versions). Perfect for short, breezy trips around the cultural and shopping districts.",
    contact: "Street Hail Citywide",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Jalan+Malioboro+Yogyakarta"
  },
  {
    name: "Motorbike Rental",
    image: "https://picsum.photos/seed/motorbike/600/800",
    tags: ["Self-drive", "Flexible", "Prawirotaman"],
    description: "The most popular and efficient way to explore Jogja and its surrounding beaches or temples. Many rental shops are clustered in the Prawirotaman tourist area.",
    contact: "Various Renters in Prawirotaman",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Motorbike+Rental+Prawirotaman"
  },
  {
    name: "YIA Airport Rail Link",
    image: "https://picsum.photos/seed/yia/600/800",
    tags: ["Airport Train", "Fast", "Convenient"],
    description: "Travel efficiently between the city center (Tugu Station) and the new Yogyakarta International Airport (YIA) in Kulon Progo via the dedicated high-speed airport train.",
    contact: "www.railink.co.id",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Yogyakarta+International+Airport"
  },
  {
    name: "Online Ride-Hailing",
    image: "https://picsum.photos/seed/gojek/600/800",
    tags: ["Grab", "Gojek", "App"],
    description: "Use Grab or Gojek apps to conveniently order inexpensive car and motorcycle rides anywhere within the city limits and surrounding regencies.",
    contact: "Via App Store / Google Play",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Yogyakarta"
  },
  {
    name: "Bicycle Tour",
    image: "https://picsum.photos/seed/bicycle/600/800",
    tags: ["Eco-Friendly", "Tour", "Borobudur"],
    description: "Rent a bike or join a guided cycling tour to explore the peaceful rural villages, craft communities, and lush rice paddies surrounding Borobudur or Imogiri.",
    contact: "+62 811 2640 967 (Jogja Bike)",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Borobudur+Village+Bicycle+Tour"
  },
  {
    name: "Car Rental with Driver",
    image: "https://picsum.photos/seed/carrental/600/800",
    tags: ["Private", "Day Trip", "Comfortable"],
    description: "Hire an air-conditioned car with a knowledgeable local driver for convenient 10-12 hour full-day trips out to distant caves, southern beaches, and northern temples.",
    contact: "Travel Agencies Citywide",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Car+Rental+Yogyakarta"
  }
];

// ─── Trekking and Hiking ────────────────────────────────────────────────────────
export const trekkingAndHikingItems: CategoryItem[] = [
  {
    name: "Mount Merapi Summit Trek",
    image: "https://picsum.photos/seed/merapi/600/800",
    tags: ["Volcano", "Challenging", "Selo Basecamp"],
    description: "A challenging overnight hike starting from Selo Basecamp up one of the world's most active volcanoes to witness a breathtaking sunrise at the crater rim.",
    contact: "+62 822 4118 7338 (Basecamp Selo)",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Basecamp+Gunung+Merapi+Selo"
  },
  {
    name: "Kalibiru National Park",
    image: "https://picsum.photos/seed/kalibiru/600/800",
    tags: ["Forest", "Viewpoint", "Kulon Progo"],
    description: "Located in the Menoreh Hills, this park offers a scenic trek through lush forests towards spectacular treetop wooden viewing platforms overlooking Lake Sermo.",
    contact: "+62 813 9294 6994",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Kalibiru+National+Park+Kulon+Progo"
  },
  {
    name: "Mangunan Fruit Garden Trek",
    image: "https://picsum.photos/seed/mangunan/600/800",
    tags: ["Easy", "Nature", "Bantul"],
    description: "Enjoy a relaxed walk through refreshing pine forests and fruit orchards high in Bantul, famously known as the 'land above the clouds' due to thick morning mist.",
    contact: "Kebun Buah Mangunan",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Kebun+Buah+Mangunan+Bantul"
  },
  {
    name: "Sri Gethuk Waterfall Trail",
    image: "https://picsum.photos/seed/srigethuk/600/800",
    tags: ["Waterfall", "River", "Moderate"],
    description: "A scenic hike along the emerald waters of the Oya River flanked by towering karst cliffs, leading to the beautiful, cascading Sri Gethuk waterfall.",
    contact: "Desa Wisata Bleberan",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Air+Terjun+Sri+Gethuk+Gunung+Kidul"
  },
  {
    name: "Mount Nglanggeran Ancient Volcano",
    image: "https://picsum.photos/seed/nglanggeran/600/800",
    tags: ["Ancient Volcano", "Moderate", "Sunset"],
    description: "Hike the giant rocky boulders of an extinct ancient volcano in Gunung Kidul to enjoy unhindered panoramic views, highly recommended during sunset.",
    contact: "+62 818 0260 6050",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Gunung+Api+Purba+Nglanggeran"
  },
  {
    name: "Timang Beach Cliffside Trail",
    image: "https://picsum.photos/seed/timangtrail/600/800",
    tags: ["Coastal", "Adventure", "Gunung Kidul"],
    description: "A rugged coastal trek along steep limestone cliffs culminating in a ride on an adrenaline-pumping traditional wooden gondola over crashing ocean waves.",
    contact: "Gunung Kidul Tourism",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Timang+Beach+Gunung+Kidul"
  },
  {
    name: "Kalisuci Cave Tubing",
    image: "https://picsum.photos/seed/kalisuci/600/800",
    tags: ["Cave", "Tubing", "Adventure"],
    description: "Combine light hiking over karst landscapes with cave tubing down an underground river for a unique natural adventure in the Gunung Kidul regency.",
    contact: "+62 878 3974 0846",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Kalisuci+Cave+Tubing+Gunung+Kidul"
  },
  {
    name: "Pinus Pengger Forest Walk",
    image: "https://picsum.photos/seed/pengger/600/800",
    tags: ["Pine Forest", "Easy", "Night View"],
    description: "An easy, atmospheric walk through a dense pine forest featuring massive, creative branch art installations that perfectly frame the sparkling city lights below at night.",
    contact: "Hutan Pinus Pengger",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Hutan+Pinus+Pengger+Bantul"
  }
];

// ─── Beaches ────────────────────────────────────────────────────────────────────
export const beachesItems: CategoryItem[] = [
  {
    name: "Parangtritis Beach",
    image: "https://picsum.photos/seed/parangtritis/600/800",
    tags: ["Iconic", "Black Sand", "Bantul"],
    description: "Jogja's most legendary beach, deeply tied to Javanese mythology. It features vast black sand shores, romantic sunsets, ATV rentals, and nearby sand dunes.",
    contact: "Bantul Tourism Office",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Parangtritis+Beach+Bantul"
  },
  {
    name: "Indrayanti Beach",
    image: "https://picsum.photos/seed/indrayanti/600/800",
    tags: ["White Sand", "Swimming", "Gunung Kidul"],
    description: "One of the most popular white sand beaches in Gunung Kidul, meticulously maintained and lined with excellent seaside seafood restaurants and gazebos.",
    contact: "Gunung Kidul Tourism",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Indrayanti+Beach+Gunung+Kidul"
  },
  {
    name: "Timang Beach",
    image: "https://picsum.photos/seed/timangbeach/600/800",
    tags: ["Cable Cart", "Adventure", "Lobster"],
    description: "World-famous for its extreme hand-drawn wooden gondola across treacherous waves, and for serving some of the most amazing freshly caught lobster dishes.",
    contact: "Local Gondola Operators",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Timang+Beach+Gunung+Kidul"
  },
  {
    name: "Wediombo Beach",
    image: "https://picsum.photos/seed/wediombo/600/800",
    tags: ["Snorkeling", "Secluded", "Natural Pool"],
    description: "A pristine horse-shoe bay boasting clear waters suitable for snorkeling and swimming in natural seawater pools safely formed by coral rocks.",
    contact: "Gunung Kidul Tourism",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Wediombo+Beach+Gunung+Kidul"
  },
  {
    name: "Ngrenehan Beach",
    image: "https://picsum.photos/seed/ngrenehan/600/800",
    tags: ["Fishing Village", "Seafood", "Quiet Cove"],
    description: "A tranquil cove surrounded by karst hills operating as an active fishing village where visitors can buy the freshest catches directly off the incoming boats.",
    contact: "Gunung Kidul Tourism",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Ngrenehan+Beach+Gunung+Kidul"
  },
  {
    name: "Drini Beach",
    image: "https://picsum.photos/seed/drini/600/800",
    tags: ["Twin Beach", "Calm Water", "Family"],
    description: "Characterized by a small coral island dividing the beach in two: a quiet, wave-less lagoon perfect for children, and a rougher side facing the open ocean.",
    contact: "Gunung Kidul Tourism",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Drini+Beach+Gunung+Kidul"
  },
  {
    name: "Baron Beach",
    image: "https://picsum.photos/seed/baron/600/800",
    tags: ["Fish Market", "Underground River", "Popular"],
    description: "A bustling brown-sand beach unique for a massive underground river that meets the ocean, providing fresh sweetwater for swimming alongside a lively seafood market.",
    contact: "Gunung Kidul Tourism",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Baron+Beach+Gunung+Kidul"
  },
  {
    name: "Jogan Waterfall Beach",
    image: "https://picsum.photos/seed/jogan/600/800",
    tags: ["Waterfall", "Unique", "Cliffside"],
    description: "A rare and stunning geological sight where a 10-meter freshwater waterfall drops directly over a coastal cliff onto the beach sands below.",
    contact: "Gunung Kidul Tourism",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Jogan+Beach+Waterfall+Gunung+Kidul"
  }
];

// ─── Aesthetic Cafes ────────────────────────────────────────────────────────────
export const aestheticCafesItems: CategoryItem[] = [
    {
        "name": "Arka Coffee and Space",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqFVwXnADx0yQaUpA_QkRL7-U62QkUDvCriQU3w6rmF0T1mgEf4g6WkbW3QerYogOgaUtyCLdAes5N5CreO9NCeot6ENgft18L1EOI8gphqMz2j-HpQNlIPYP997wYWZj4w9gx_wembOoVi=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. Taman Sari No.1/310, Patehan, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55133",
        "contact": "",
        "mapLink": "https://www.google.com/maps/place/Arka+Coffee+and+Space/data=!4m7!3m6!1s0x2e7a57fd1b7b39cb:0xb5d29267d6c87e3e!8m2!3d-7.8101671!4d110.3603694!16s%2Fg%2F11sq4trpnv!19sChIJyzl7G_1Xei4RPn7I1meS0rU?authuser=0&hl=id&rclk=1",
        "averageRating": 4.8,
        "website": "linktr.ee"
    },
    {
        "name": "Jeeva Yogyakarta",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepl6xhhZjWnUOgyWEX6epvqrUHpMNaE1NTGXuvmj-eLdKFeHbS6Pfx-wkFYWvtZxaXDuqLTXZX6FifKDo4Qu9gwvcH4B2fYMk8pRtltQ52yI1MuTt0ebgeuJYs7iDyAObaiX8I39g=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. Suhartono No.2, Kotabaru, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55224",
        "contact": "\n0811-255-568",
        "mapLink": "https://www.google.com/maps/place/Jeeva+Yogyakarta/data=!4m7!3m6!1s0x2e7a58328658f5e9:0x1bf5640bc0de9bd6!8m2!3d-7.7848923!4d110.3754035!16s%2Fg%2F11gfly1cqy!19sChIJ6fVYhjJYei4R1pvewAtk9Rs?authuser=0&hl=id&rclk=1",
        "averageRating": 4.5,
        "website": "instagram.com"
    },
    {
        "name": "Yama Saka Coffee Yogyakarta",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq0iZqNvP8nMSkY9Ziz1beHLGU00yvKyt3HTuKe3eoIai4XAD7IFlnVmqsO5JkTdTAMxRxu1l4GZftAEoMgOWBZxYA18jYLHXPsiw-VIWad7G_vOIBK_4dmdGv85e8iD7Stoic=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. Bener No.4, Bener, Kec. Tegalrejo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55243",
        "contact": "\n0851-2110-2047",
        "mapLink": "https://www.google.com/maps/place/Yama+Saka+Coffee+Yogyakarta/data=!4m7!3m6!1s0x2e7a59ab64214971:0xe759142c70e63942!8m2!3d-7.7809143!4d110.3520708!16s%2Fg%2F11sbpv1y3m!19sChIJcUkhZKtZei4RQjnmcCwUWec?authuser=0&hl=id&rclk=1",
        "averageRating": 4.7,
        "website": "instagram.com"
    },
    {
        "name": "Blanco Coffee and Books",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepT8gkPjIaGfUHrTC-BATI32s7t4J1jk1uGH9NWdqjypHvi4YzdpyQ1vKCGSm0blIg2FgX-E7yNKi7xxHE0AH-c-WE0tltbwuVIUhYKq99DDmjccOuweFtfSQrT4dNP0nd-VuI_cQ=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. Kranggan No.30, Cokrodiningratan, Kec. Jetis, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55233",
        "contact": "",
        "mapLink": "https://www.google.com/maps/place/Blanco+Coffee+and+Books/data=!4m7!3m6!1s0x2e7a583a3b875c11:0xe57a6751df67f10d!8m2!3d-7.7814081!4d110.3647698!16s%2Fg%2F11bw82l3y1!19sChIJEVyHOzpYei4RDfFn31FneuU?authuser=0&hl=id&rclk=1",
        "averageRating": 4.6,
        "website": "blancocoffee.id"
    },
    {
        "name": "Simetri Coffee Roaster",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerUdqWH0dGoDy3BmKpAXfhhRxF2gnyeNS4pyI1m-Tcms-bPtekg-KPFAXfo-l0Wik83ITtg8L4Ionc9O_HrHBBilihET_08itrfIjil1iQruXjg869hONejwJX39886SZLN5rk=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. Sabirin No.20, Kotabaru, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55224",
        "contact": "\n(0274) 5026959",
        "mapLink": "https://www.google.com/maps/place/Simetri+Coffee+Roaster/data=!4m7!3m6!1s0x2e7a58321847366b:0x2d1c974a3f408e1e!8m2!3d-7.784344!4d110.3740934!16s%2Fg%2F11dxnm7j9g!19sChIJazZHGDJYei4RHo5AP0qXHC0?authuser=0&hl=id&rclk=1",
        "averageRating": 4.6,
        "website": "instagram.com"
    },
    {
        "name": "Dummin Coffee & Space UKDW",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoOgGW1VvZfmMqKOvcdfRIYHRJKu0skF67eDwr1fddnOgmTwhLY_hjhhtl2WgmKGWZaBi7iWca7kSION3YTBXZ9RP3VK1uSAp_VmlOinKT0im9T4QNsnf5RwWvNtpqT8EV3yzO7MQ=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. Dr. Wahidin Sudirohusodo No.34, RT.14/RW.04, Klitren, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55222",
        "contact": "",
        "mapLink": "https://www.google.com/maps/place/Dummin+Coffee+%26+Space+UKDW/data=!4m7!3m6!1s0x2e7a57024e94419f:0xea0b2c49dd9982d6!8m2!3d-7.7862167!4d110.3788211!16s%2Fg%2F11tj4pq2x2!19sChIJn0GUTgJXei4R1oKZ3UksC-o?authuser=0&hl=id&rclk=1",
        "averageRating": 4.4,
        "website": "dummin.id"
    },
    {
        "name": "Space Roastery Zero",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqO7ic-FOuydY4I43wXacu8RgsdZdBHbuiT0SrtU1tToMUEiP7GgJ68bIh2UDzKMi7-ZrYCk3ve0b9rBYkuZWZJcCjq7TlWY0ojUnTcTm7qtmqoShiHL0m2UyHcUyvt6LE-8kzyLg=w2000-h2000-p-k-no",
        "tags": [
            "Tempat penyangraian kopi"
        ],
        "description": "Gg. Loncang Jl. Magelang - Yogyakarta No.88, Rogoyudan, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55284",
        "contact": "",
        "mapLink": "https://www.google.com/maps/place/Space+Roastery+Zero/data=!4m7!3m6!1s0x2e7a584335baa0b5:0x92012d15e3dd6d9f!8m2!3d-7.7660474!4d110.3606993!16s%2Fg%2F11c1yhbnjz!19sChIJtaC6NUNYei4Rn23d4xUtAZI?authuser=0&hl=id&rclk=1",
        "averageRating": 4.7,
        "website": "spaceroastery.com"
    },
    {
        "name": "Piyama Cafe Yogyakarta",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep6EJBQo1EQiMgksCUcq1r33jY7ouOe2s0nRrY5SXv14b76SMVHp7pW5vtEU5VzYM0V-M2ajhEVUsQgAkbkuoWHrn-qq5zJgMyUg81Iz-f8p5ZZUAOmw5pcvowxO4DzsVin39EdXQ=w2000-h2000-p-k-no",
        "tags": [
            "Kafe"
        ],
        "description": "Jl. Pangeran Diponegoro No.87, Bumijo, Kec. Jetis, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55231",
        "contact": "\n0811-2658-989",
        "mapLink": "https://www.google.com/maps/place/Piyama+Cafe+Yogyakarta/data=!4m7!3m6!1s0x2e7a59cb8ca7e933:0x7171e0248e7c57fd!8m2!3d-7.7831343!4d110.3630412!16s%2Fg%2F11nmfkq98m!19sChIJM-mnjMtZei4R_Vd8jiTgcXE?authuser=0&hl=id&rclk=1",
        "averageRating": 4.7,
        "website": "kottahotels.com"
    },
    {
        "name": "Lunaria Coffee Yogyakarta",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqelVQjsNXVIcrs2-FaG6ALWWMlHuxTlQ5PgOZlrMDN9VBmpO_NluEIICj3UqRsYZHBsmh_NbEXLMZXGdPP1GYARwRdEcQRlFJY_e3rrxV1vgr-PVRZJPJ4w7XU-RX-uQVUQA2QhhZNQhCW=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. Gedongkiwo No.29, Gedongkiwo, Kec. Mantrijeron, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55142",
        "contact": "",
        "mapLink": "https://www.google.com/maps/place/Lunaria+Coffee+Yogyakarta/data=!4m7!3m6!1s0x2e7a57f68edfb81d:0xa0190d28ff274712!8m2!3d-7.8137018!4d110.3540593!16s%2Fg%2F11sh7fjn9b!19sChIJHbjfjvZXei4REkcn_ygNGaA?authuser=0&hl=id&rclk=1",
        "averageRating": 4.6,
        "website": "instagram.com"
    },
    {
        "name": "LOKIO Coffee & Eatery - Mangkubumi",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoYkbebNSa8DZNntH4cm2MMIUuQkakyLqjzA5SYasZdvhQK9xalPxBvD12fS5vaQZuKtZUVjDsMfg5S3yN62X8yk55La1OYnusdJDQYQ35UmdgKRQrgcjVyDaqToCVwCHEb5ZU23STz6mw=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. Margo Utomo No.21, Gowongan, Kec. Jetis, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55232",
        "contact": "\n0889-5346-650",
        "mapLink": "https://www.google.com/maps/place/LOKIO+Coffee+%26+Eatery+-+Mangkubumi/data=!4m7!3m6!1s0x2e7a59fa73674733:0x10f0ceae68ffed00!8m2!3d-7.7875364!4d110.3663697!16s%2Fg%2F11kj06s_h5!19sChIJM0dnc_pZei4RAO3_aK7O8BA?authuser=0&hl=id&rclk=1",
        "averageRating": 4.8,
        "website": "instagram.com"
    },
    {
        "name": "Hagia Coffee Yogyakarta",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepLIfbt-DJXxrYOqj4UuVLY9-fby4n3QQ2LGROZujIy-r4viDA7DivG21WCMLXmswioOgaQT7-qd4M8VqaROOvnvYzjS24vWtPXrAfAF_s7b_GZ4UALgeGpLQjaFITsIMxooCmC_A=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. Pringgokusuman No.10, Pringgokusuman, Gedong Tengen, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55272",
        "contact": "\n0882-2728-0960",
        "mapLink": "https://www.google.com/maps/place/Hagia+Coffee+Yogyakarta/data=!4m7!3m6!1s0x2e7a5952f507be99:0x8982ec88d4a5070c!8m2!3d-7.7913675!4d110.3593901!16s%2Fg%2F11vyn0rvj7!19sChIJmb4H9VJZei4RDAel1Ijsgok?authuser=0&hl=id&rclk=1",
        "averageRating": 4.5,
        "website": ""
    },
    {
        "name": "Ever Coffee Yogyakarta",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq-1tFiYf_wwNkBKy6vja9hvSV6HuRfZeN5FvMB51KZ4fyV8no8JfORFCt63mTLWKBhw8pHTurBWwACT0t5Ho2Q6JnoZV6KVkcW1ggsN4PhxThu7U6Ps-AgHnaPoy4MJvpKJc3J9w=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. Rogoyudan 1 No.1, Rogoyudan, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55284",
        "contact": "\n0895-6104-59703",
        "mapLink": "https://www.google.com/maps/place/Ever+Coffee+Yogyakarta/data=!4m7!3m6!1s0x2e7a59f76bf49a35:0x72bca37121d675fe!8m2!3d-7.7704898!4d110.3596852!16s%2Fg%2F11shyfjhpr!19sChIJNZr0a_dZei4R_nXWIXGjvHI?authuser=0&hl=id&rclk=1",
        "averageRating": 4.6,
        "website": "instagram.com"
    },
    {
        "name": "Silol Kopi & Eatery",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweorrUV4_Hzdowo7RTc2RJQ5Vn3lHZbS34YyER4pLXEgZ5fTkcjxO-GOGMQyYpOAAiTFu74O6qCCRORqLYn8PaxcHVP4Pn3dQjKVHT-YWgjpEjxPQ7-m5nJw4wNLBAQZc0jk-vFu=w2000-h2000-p-k-no",
        "tags": [
            "Kafe"
        ],
        "description": "Jl. Suroto, Kotabaru, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55224",
        "contact": "\n(0274) 5012802",
        "mapLink": "https://www.google.com/maps/place/Silol+Kopi+%26+Eatery/data=!4m7!3m6!1s0x2e7a583270dfb36d:0x11319229b0a5bd3b!8m2!3d-7.7844832!4d110.3743765!16s%2Fg%2F11c6tvy7gq!19sChIJbbPfcDJYei4RO72lsCmSMRE?authuser=0&hl=id&rclk=1",
        "averageRating": 4.4,
        "website": ""
    },
    {
        "name": "Tekoff Coffee and Roastery",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerBLVHHfgpLiCTjMiENcmr1gpfYJR184NmIKs1uR3BOrhvgKcGB7-ZDezKRdAI5hmpbB2U_oH2XnA-Z2EVP4DGwaCCTVOLrm2QWVXTmwjeJvLVG_j1FlVatM70UevSljVBaHU67=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jalan Sagan Timur GK 5 1053B, Jl. Sagan Tim., Terban, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55223",
        "contact": "\n0817-5424-291",
        "mapLink": "https://www.google.com/maps/place/Tekoff+Coffee+and+Roastery/data=!4m7!3m6!1s0x2e7a59cb5606d64b:0x274c540e0d27b5a0!8m2!3d-7.7800274!4d110.3787585!16s%2Fg%2F11ddxzzyw0!19sChIJS9YGVstZei4RoLUnDQ5UTCc?authuser=0&hl=id&rclk=1",
        "averageRating": 4.6,
        "website": "instagram.com"
    },
    {
        "name": "Nol Kilometer Coffee & Tea Yogyakarta",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo0B-Hp41x363QzXLW7PfAvifGdKxxD54pkfjo0WWKprIG4StzAsApBthdfB6hS-YMXEwHUntcPqHYZDaSKNISTK2sBhvF45d2VG9-6gfdpJyUWlNqdz9OWpH9e8y4nXW_NL92UmwTqPiw=w2000-h2000-p-k-no",
        "tags": [
            "Kafe"
        ],
        "description": "Jl. Pangurakan No.04, Ngupasan, Kec. Gondomanan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55122",
        "contact": "\n0888-2205-555",
        "mapLink": "https://www.google.com/maps/place/Nol+Kilometer+Coffee+%26+Tea+Yogyakarta/data=!4m7!3m6!1s0x2e7a57f218dd03fb:0x681d34ac0be132a8!8m2!3d-7.8018453!4d110.3645658!16s%2Fg%2F11jlrp4x5q!19sChIJ-wPdGPJXei4RqDLhC6w0HWg?authuser=0&hl=id&rclk=1",
        "averageRating": 4.7,
        "website": ""
    },
    {
        "name": "Tanamera Coffee Yogyakarta",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqnc4OnMxz4fgBHKUeSNGxjZG_vNtW1HsbnH3xAh-CLRLKabp5WnNECEEqloLDabBzrSauYyWSxtHSh0XpzNB2GlprvOhWwjOLRQRnssG6LPtCVCOWGqcpakP8D1lUZYZ9KF3izqw=w2000-h2000-p-k-no",
        "tags": [
            "Kafe"
        ],
        "description": "Jl. Jend. Sudirman No.3, Cokrodiningratan, Kec. Jetis, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55233",
        "contact": "\n(0274) 5012738",
        "mapLink": "https://www.google.com/maps/place/Tanamera+Coffee+Yogyakarta/data=!4m7!3m6!1s0x2e7a58308ec0c5b3:0x1c0a26ede2472941!8m2!3d-7.7825783!4d110.3676083!16s%2Fg%2F11ggw0krrf!19sChIJs8XAjjBYei4RQSlH4u0mChw?authuser=0&hl=id&rclk=1",
        "averageRating": 4.6,
        "website": ""
    },
    {
        "name": "LaLe Coffee and Space",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqUzthsDpv17jiNg9YprkwpIdNdhySwoFvIO2oPAkZUABBMV8JRlQSGqxGrGZY4-nc-KtoFc4mDST6udPoXV2sGxayGvwlV4NIfBvt6x6Jo-UwaH36qfuuSet40d5Ts9cys5y4=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. Tambak, Tambi, Ngestiharjo, Kec. Kasihan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55184",
        "contact": "\n0858-8818-3662",
        "mapLink": "https://www.google.com/maps/place/LaLe+Coffee+and+Space/data=!4m7!3m6!1s0x2e7a59440560fde5:0x71c3b1278b164e3b!8m2!3d-7.770528!4d110.3504066!16s%2Fg%2F11sj6dgy8_!19sChIJ5f1gBURZei4RO04Wiyexw3E?authuser=0&hl=id&rclk=1",
        "averageRating": 4.7,
        "website": "instagram.com"
    },
    {
        "name": "TETRA Coffee & Eatery - Yogyakarta // Terra Coffee",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo6RZdY1PA_DkATI0CxHHiKHh8CFjX_I9vSPHHHOTAMByFu0ssYCBQvqqj_o5iOjx3NlqHdCewTq5zObeP419Ww4tjOGM6ihJtl7C8TQVj4u582zrFyp9-HOMAvXxqRArLrShty=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. Sagan I No.5, Terban, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55223",
        "contact": "",
        "mapLink": "https://www.google.com/maps/place/TETRA+Coffee+%26+Eatery+-+Yogyakarta+%2F%2F+Terra+Coffee/data=!4m7!3m6!1s0x2e7a59ecbf771c57:0x41697292a90c4e64!8m2!3d-7.7801404!4d110.377899!16s%2Fg%2F11n18n0z9j!19sChIJVxx3v-xZei4RZE4MqZJyaUE?authuser=0&hl=id&rclk=1",
        "averageRating": 4.6,
        "website": ""
    },
    {
        "name": "Sapulu Coffee",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerms8JsVkwBiawBx4WSNazcudk3vxU5uz96qe_x3LGXShiJXlyBzxb8ljuX9B0_v9Od3dONLYyqj9Sf1PxkvOvA2Hzs4pSBCciQ9kX-rPJk5fZHxN57Kg_YzikdwuTCar7sy2oMwFr137Yq=w2000-h2000-p-k-no",
        "tags": [
            "Kafe"
        ],
        "description": "Jl. Panembahan Mangkurat No.10, Panembahan, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55131",
        "contact": "\n(0274) 4289475",
        "mapLink": "https://www.google.com/maps/place/Sapulu+Coffee/data=!4m7!3m6!1s0x2e7a573d95f8fcf9:0x45d8a9cdabd4bc41!8m2!3d-7.80701!4d110.3667512!16s%2Fg%2F11fkl9jtl_!19sChIJ-fz4lT1Xei4RQbzUq82p2EU?authuser=0&hl=id&rclk=1",
        "averageRating": 4.6,
        "website": ""
    },
    {
        "name": "HSCO. Had Some Coffee.",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer0cNrbUL1pq0zXJtqarki7ktSnkdfIAWGNad162l5zqKTIjAJURCjwpqiNEi2f-Dgy4QtzZeoFTHGn97b4Uo4ICg1DDjSEkAXtVyE9kE-xKwd28Jmiz0ZWIZHiufhbEzNTxzDfmx5kqxI=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. Pekapalan, Alun-Alun Utara, Kec. Gondomanan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55121",
        "contact": "\n0877-5859-9215",
        "mapLink": "https://www.google.com/maps/place/HSCO.+Had+Some+Coffee./data=!4m7!3m6!1s0x2e7a573cf6318c81:0xf9eaa911631ec578!8m2!3d-7.8026233!4d110.3636689!16s%2Fg%2F11sj9s3381!19sChIJgYwx9jxXei4ReMUeYxGp6vk?authuser=0&hl=id&rclk=1",
        "averageRating": 4.8,
        "website": "instagram.com"
    },
    {
        "name": "Sinom Coffee & Space",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweozMSX0NdKYu2HnJFuWK3s9g-VaJXKOy9cKuGJdk00h802NTYMVRhH9bvqdPoyn9HDAKvxL9A38PcYtSOIrEb2g6q6yquOj9OnusPBImF86HSG0lWKAiNae3bJqTDuTGapL3ObYpzBp5Lk=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. Bugisan Selatan No.95, Dongkelan Kauman, Tirtonirmolo, Kec. Kasihan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55181",
        "contact": "\n0857-7005-4146",
        "mapLink": "https://www.google.com/maps/place/Sinom+Coffee+%26+Space/data=!4m7!3m6!1s0x2e7a57688f22643f:0x35013dde082b13ec!8m2!3d-7.8225102!4d110.3477073!16s%2Fg%2F11k0sqlqtk!19sChIJP2Qij2hXei4R7BMrCN49ATU?authuser=0&hl=id&rclk=1",
        "averageRating": 4.9,
        "website": ""
    },
    {
        "name": "Lunaria Coffee Yogyakarta",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqelVQjsNXVIcrs2-FaG6ALWWMlHuxTlQ5PgOZlrMDN9VBmpO_NluEIICj3UqRsYZHBsmh_NbEXLMZXGdPP1GYARwRdEcQRlFJY_e3rrxV1vgr-PVRZJPJ4w7XU-RX-uQVUQA2QhhZNQhCW=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. Gedongkiwo No.29, Gedongkiwo, Kec. Mantrijeron, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55142",
        "contact": "",
        "mapLink": "https://www.google.com/maps/place/Lunaria+Coffee+Yogyakarta/data=!4m7!3m6!1s0x2e7a57f68edfb81d:0xa0190d28ff274712!8m2!3d-7.8137018!4d110.3540593!16s%2Fg%2F11sh7fjn9b!19sChIJHbjfjvZXei4REkcn_ygNGaA?authuser=0&hl=id&rclk=1",
        "averageRating": 4.6,
        "website": "instagram.com"
    },
    {
        "name": "Nol Kilometer Coffee & Tea Yogyakarta",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo0B-Hp41x363QzXLW7PfAvifGdKxxD54pkfjo0WWKprIG4StzAsApBthdfB6hS-YMXEwHUntcPqHYZDaSKNISTK2sBhvF45d2VG9-6gfdpJyUWlNqdz9OWpH9e8y4nXW_NL92UmwTqPiw=w2000-h2000-p-k-no",
        "tags": [
            "Kafe"
        ],
        "description": "Jl. Pangurakan No.04, Ngupasan, Kec. Gondomanan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55122",
        "contact": "\n0888-2205-555",
        "mapLink": "https://www.google.com/maps/place/Nol+Kilometer+Coffee+%26+Tea+Yogyakarta/data=!4m7!3m6!1s0x2e7a57f218dd03fb:0x681d34ac0be132a8!8m2!3d-7.8018453!4d110.3645658!16s%2Fg%2F11jlrp4x5q!19sChIJ-wPdGPJXei4RqDLhC6w0HWg?authuser=0&hl=id&rclk=1",
        "averageRating": 4.7,
        "website": ""
    },
    {
        "name": "TETRA Coffee & Eatery - Yogyakarta // Terra Coffee",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo6RZdY1PA_DkATI0CxHHiKHh8CFjX_I9vSPHHHOTAMByFu0ssYCBQvqqj_o5iOjx3NlqHdCewTq5zObeP419Ww4tjOGM6ihJtl7C8TQVj4u582zrFyp9-HOMAvXxqRArLrShty=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. Sagan I No.5, Terban, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55223",
        "contact": "",
        "mapLink": "https://www.google.com/maps/place/TETRA+Coffee+%26+Eatery+-+Yogyakarta+%2F%2F+Terra+Coffee/data=!4m7!3m6!1s0x2e7a59ecbf771c57:0x41697292a90c4e64!8m2!3d-7.7801404!4d110.377899!16s%2Fg%2F11n18n0z9j!19sChIJVxx3v-xZei4RZE4MqZJyaUE?authuser=0&hl=id&rclk=1",
        "averageRating": 4.6,
        "website": ""
    },
    {
        "name": "Sapulu Coffee",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerms8JsVkwBiawBx4WSNazcudk3vxU5uz96qe_x3LGXShiJXlyBzxb8ljuX9B0_v9Od3dONLYyqj9Sf1PxkvOvA2Hzs4pSBCciQ9kX-rPJk5fZHxN57Kg_YzikdwuTCar7sy2oMwFr137Yq=w2000-h2000-p-k-no",
        "tags": [
            "Kafe"
        ],
        "description": "Jl. Panembahan Mangkurat No.10, Panembahan, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55131",
        "contact": "\n(0274) 4289475",
        "mapLink": "https://www.google.com/maps/place/Sapulu+Coffee/data=!4m7!3m6!1s0x2e7a573d95f8fcf9:0x45d8a9cdabd4bc41!8m2!3d-7.80701!4d110.3667512!16s%2Fg%2F11fkl9jtl_!19sChIJ-fz4lT1Xei4RQbzUq82p2EU?authuser=0&hl=id&rclk=1",
        "averageRating": 4.6,
        "website": ""
    },
    {
        "name": "Atap Langit Container Cafe",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepkOWISk8fgJMpcSgkjvMH6xvrJGVwPMKybPzCsc-pYIEuZXh8F1MJXrZSr9trFNwIlxdzNEgw51MgG-Y0NDdTId7jXrqK5BEaKX1w2wl-ZFi1HkhGTn24mpLn3-l7776JjXl7FvQ=w2000-h2000-p-k-no",
        "tags": [
            "Kafe"
        ],
        "description": "Cambahan, Nogotirto, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55592",
        "contact": "\n0812-2941-2654",
        "mapLink": "https://www.google.com/maps/place/Atap+Langit+Container+Cafe/data=!4m7!3m6!1s0x2e7a591812d0a349:0xc72d531dbac25c6e!8m2!3d-7.7670621!4d110.3315319!16s%2Fg%2F11qqh8y1z5!19sChIJSaPQEhhZei4RblzCuh1TLcc?authuser=0&hl=id&rclk=1",
        "averageRating": 4.6,
        "website": ""
    },
    {
        "name": "Hidjau Coffee & Mart",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerrGP_kRZ8cR3tE2fMeIVqmrqsFn62Gm41J0igc3XNPTN9OuThG0kCAbFW7ltTJXJ2RqF3qkPlYJaEwZ4_HqgHayve8s_XThxUJTXXghjFSXUjX-8d3Eua-cayZfm21zXlLkaDLVw=w2000-h2000-p-k-no",
        "tags": [
            "Kafe"
        ],
        "description": "Jl. KH. Ahmad Dahlan No.132, Ngampilan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55261",
        "contact": "\n(0274) 513230",
        "mapLink": "https://www.google.com/maps/place/Hidjau+Coffee+%26+Mart/data=!4m7!3m6!1s0x2e7a57f20706455d:0xe4c928bf3c451acf!8m2!3d-7.8009776!4d110.3567648!16s%2Fg%2F11j26220y0!19sChIJXUUGB_JXei4RzxpFPL8oyeQ?authuser=0&hl=id&rclk=1",
        "averageRating": 4.5,
        "website": "lynk.id"
    },
    {
        "name": "Silol Kopi & Eatery",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweorrUV4_Hzdowo7RTc2RJQ5Vn3lHZbS34YyER4pLXEgZ5fTkcjxO-GOGMQyYpOAAiTFu74O6qCCRORqLYn8PaxcHVP4Pn3dQjKVHT-YWgjpEjxPQ7-m5nJw4wNLBAQZc0jk-vFu=w2000-h2000-p-k-no",
        "tags": [
            "Kafe"
        ],
        "description": "Jl. Suroto, Kotabaru, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55224",
        "contact": "\n(0274) 5012802",
        "mapLink": "https://www.google.com/maps/place/Silol+Kopi+%26+Eatery/data=!4m7!3m6!1s0x2e7a583270dfb36d:0x11319229b0a5bd3b!8m2!3d-7.7844832!4d110.3743765!16s%2Fg%2F11c6tvy7gq!19sChIJbbPfcDJYei4RO72lsCmSMRE?authuser=0&hl=id&rclk=1",
        "averageRating": 4.4,
        "website": ""
    },
    {
        "name": "Nuju Coffee Sagan | Coffee Shop Yogyakarta",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqH8bRBbMwYt-HligQuTcaq_9Ex4RwHvkLiOqQiU7pCZjd-0EOQIeAMM8HrNr9g0j99E5BYZ7JIXp1DRL0l0AliNGK0xbJYYUPQIT-LzfBYdCyBZmTrpI963pqDOs3FVaRdAI6UHkRXfPXi=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "69CH+9Q5, Jl. Prof. Dr. Ir. Herman Johannes No.1030, Terban, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55223",
        "contact": "",
        "mapLink": "https://www.google.com/maps/place/Nuju+Coffee+Sagan+%7C+Coffee+Shop+Yogyakarta/data=!4m7!3m6!1s0x2e7a59007d7675c7:0xe4c96ce63eaf450c!8m2!3d-7.7790085!4d110.3794778!16s%2Fg%2F11yb695g9m!19sChIJx3V2fQBZei4RDEWvPuZsyeQ?authuser=0&hl=id&rclk=1",
        "averageRating": 4.9,
        "website": "linktr.ee"
    },
    {
        "name": "Karta Coffee & Eatery",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweolD9ArDB7wcMndEEvct_bzS_uoB8w5ViwolXT6rdOpykCHahLsD1asJtdxAdLf2RYrsvJ8AhCN4BZgsVuLOWZy2WYZVYTDLuCFsZObF-WikKUrX07bxNFWP4pxBcPxUbItq0U=w2000-h2000-p-k-no",
        "tags": [
            "Restoran"
        ],
        "description": "Karta Coffee & Eatery, Jl. Malioboro. 52-58, Suryatmajan, Danurejan Plaza Malioboro, Lt. 1 Unit 13-16, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55213",
        "contact": "\n0811-1991-995",
        "mapLink": "https://www.google.com/maps/place/Karta+Coffee+%26+Eatery/data=!4m7!3m6!1s0x2e7a59218cdcadff:0x98af621f09af61f4!8m2!3d-7.7936271!4d110.3658864!16s%2Fg%2F11trh_5cy2!19sChIJ_63cjCFZei4R9GGvCR9ir5g?authuser=0&hl=id&rclk=1",
        "averageRating": 4.7,
        "website": "instagram.com"
    },
    {
        "name": "A Cup of Tugu Lor Java",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepFTzJRX5jlfaYWLY_SmUY3H2S7QIy6zGTW-UhYwKWTfBp79xEtqZesQcLWB2RA80BJsC17KOS1nRtN8zX221rf-dmBT_DGmj88knjM4GyuzrvfbeTLJrscgCnOLgr7oJATtB7gVzL78yU=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. A.M. Sangaji No.72, Cokrodiningratan, Kec. Jetis, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55233",
        "contact": "\n(0274) 515268",
        "mapLink": "https://www.google.com/maps/place/A+Cup+of+Tugu+Lor+Java/data=!4m7!3m6!1s0x2e7a5918df8e53fb:0x143c2532fe3025a6!8m2!3d-7.7742056!4d110.3681944!16s%2Fg%2F11gxzs3tht!19sChIJ-1OO3xhZei4RpiUw_jIlPBQ?authuser=0&hl=id&rclk=1",
        "averageRating": 4.5,
        "website": ""
    },
    {
        "name": "Water castle cafe",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweodDFS2VjM07yNJkM5PmZ9EjWa1t210vMTX2PD1yNjAqTMQQFWahcw9WF3vz4ITV_DMoF9JLSLXFGFG6uzCdez7whj0WEvs84g21-_QIyTjc_exRsJ0xhr1ozcQhWVPFGs7MKN8=w2000-h2000-p-k-no",
        "tags": [
            "Kafe"
        ],
        "description": "Jl. Polowijan, Patehan, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55133",
        "contact": "\n0813-2662-5905",
        "mapLink": "https://www.google.com/maps/place/Water+castle+cafe/data=!4m7!3m6!1s0x2e7a57922fc0f0cd:0x9dc06044a29bfd07!8m2!3d-7.8087025!4d110.3599949!16s%2Fg%2F11bwkd_tlz!19sChIJzfDAL5JXei4RB_2bokRgwJ0?authuser=0&hl=id&rclk=1",
        "averageRating": 4.7,
        "website": ""
    },
    {
        "name": "Legend Coffee",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo093X94q1LLvOnVLK1IDw0BIXhqIq1ZTpxWsK-Sde2uZIYNGn1x7KEMrgEn81Lo5K79IrvLK_Oyp25g_GbBHPU6GxSMyz6CfONc9SRJw0BF7PESfcwU6Ow4JORZjLYybyiQZ_j0r7wowM=w2000-h2000-p-k-no",
        "tags": [
            "Kafe"
        ],
        "description": "Jl. Abu Bakar Ali No.24-26, Kotabaru, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55224",
        "contact": "\n0877-0537-0974",
        "mapLink": "https://www.google.com/maps/place/Legend+Coffee/data=!4m7!3m6!1s0x2e7a582ec18d1347:0x34afc639ceaa0573!8m2!3d-7.7881602!4d110.372794!16s%2Fg%2F1pzrm44fv!19sChIJRxONwS5Yei4RcwWqzjnGrzQ?authuser=0&hl=id&rclk=1",
        "averageRating": 4.4,
        "website": "legendcoffeejogja.com"
    },
    {
        "name": "Kopi Nako Rumah Sangrai - Jogja",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqShamuzKHhkLYnhsGmou4DlH71aaC39xw4Gi-X_wrc3N-cXldH06S0zVEAfhQRzV4mNEuTel1odbgamclxB1p0W80gwOlLtC1LOBWrz_1GrWylhVr0VSHNBHRw7wxnNP3TjmqOEra8lCDS=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. Jend. Sudirman No.52, Kotabaru, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55224",
        "contact": "\n0811-1977-3575",
        "mapLink": "https://www.google.com/maps/place/Kopi+Nako+Rumah+Sangrai+-+Jogja/data=!4m7!3m6!1s0x2e7a59d0d318cdbb:0x2a79d7eb08373e0f!8m2!3d-7.7833058!4d110.3743435!16s%2Fg%2F11ygr7jp4w!19sChIJu80Y09BZei4RDz43COvXeSo?authuser=0&hl=id&rclk=1",
        "averageRating": 4.7,
        "website": ""
    },
    {
        "name": "Lizard Coffee Yogyakarta",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepAllaWB0zbBzUHD6VitJfeFdFwLxIwMIO3FZ6PSoQHlfqgRKorM3Bw9WWXWjSy8j6PzpUkAMr-dgXyFDDYi8XR_3rN2LZRwIJNIU-e4qjNA_we1882CUABsI-_IMLiXYEdTgiA=w2000-h2000-p-k-no",
        "tags": [
            "Kafe"
        ],
        "description": "Green Plaza, Ruko Jl. Godean No.Km. 2 Kav. 16, Kembang, Ngestiharjo, Kec. Kasihan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55182",
        "contact": "\n0812-5020-0300",
        "mapLink": "https://www.google.com/maps/place/Lizard+Coffee+Yogyakarta/data=!4m7!3m6!1s0x2e7a591aeef0ddcd:0xe55a9bf36adb40d5!8m2!3d-7.7809954!4d110.3496492!16s%2Fg%2F11fct4p2m7!19sChIJzd3w7hpZei4R1UDbavObWuU?authuser=0&hl=id&rclk=1",
        "averageRating": 4.7,
        "website": "instagram.com"
    },
    {
        "name": "POENOKAWAN CAFE RESTO & GALLERY",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoU-nxFQsF3q5SMO7sGO6vMMqB-TWVzyF5Sl4ke-BWtXQqVjQdj6oD04WdanwcmIZeRVtqyIy0XeXhzC1j_Yfh2YEocLvGKHdThYO99X6O3vqaGIgV7jM4xRC8ETXbyDiKs9QFw=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. KH. Ahmad Dahlan No.71, RW.08, Notoprajan, Ngampilan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55262",
        "contact": "",
        "mapLink": "https://www.google.com/maps/place/POENOKAWAN+CAFE+RESTO+%26+GALLERY/data=!4m7!3m6!1s0x2e7a57bcead5fd8d:0xcb52615aa04753d2!8m2!3d-7.80154!4d110.3603373!16s%2Fg%2F11ry7lbwhk!19sChIJjf3V6rxXei4R0lNHoFphUss?authuser=0&hl=id&rclk=1",
        "averageRating": 4.6,
        "website": ""
    },
    {
        "name": "Camp Coffee & Nature",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepOYwPusVgk5TsPkt6RZvp7tInoTg2-rJpbIP7RlD-B_qxVCCR8cUa6SGGYyy3pNatQSSGHPcfcU6x4qN2L6i-GNfopIG2He8mUIIyezHkgJp6riyamLeU5GrxeKGBqlRE_7lxW=w2000-h2000-p-k-no",
        "tags": [
            "Panggang"
        ],
        "description": "Unnamed Road, Kwarasan, Nogotirto, Gamping, Sleman Regency, Special Region of Yogyakarta 55592",
        "contact": "",
        "mapLink": "https://www.google.com/maps/place/Camp+Coffee+%26+Nature/data=!4m7!3m6!1s0x2e7a593f8e3dd327:0x221ef12c9aeeb074!8m2!3d-7.7748214!4d110.3476145!16s%2Fg%2F11m_jp_yf7!19sChIJJ9M9jj9Zei4RdLDumizxHiI?authuser=0&hl=id&rclk=1",
        "averageRating": 4.5,
        "website": ""
    },
    {
        "name": "Literica Resto & Cafe",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer1JANxxXCwWLdL8hodWt8mkS4WyjYballzIBUBIPMFMLheb3Ylv9Q7mObms_2fQeK8tf6ka_jjV55Kcq4Cp0fejTyZXzHJ68oMPptORVeStSbQIAmoJj2u08aQ_B3geO7xmNKh3o7QHi4a=w2000-h2000-p-k-no",
        "tags": [
            "Restoran"
        ],
        "description": "Jl. Tirtodipuran No.65, Mantrijeron, Kec. Mantrijeron, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55143",
        "contact": "\n0858-6446-4496",
        "mapLink": "https://www.google.com/maps/place/Literica+Resto+%26+Cafe/data=!4m7!3m6!1s0x2e7a57b8ce533197:0xef39acf8e0523d93!8m2!3d-7.818551!4d110.3669626!16s%2Fg%2F11txny2ty3!19sChIJlzFTzrhXei4Rkz1S4PisOe8?authuser=0&hl=id&rclk=1",
        "averageRating": 4.8,
        "website": ""
    },
    {
        "name": "Walter Restaurant",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoUwzgSsTp7cDLRHG9mPgM_XipHNuJgjezl9xCB8URpQ9N_cAOOR4xdK3BiXrtuUTklImw5_NXt5FNSDcOhsQgZnNUkV6tjyIDu51eVHszAyw6G83c-5T6Qo4hd9TPvFRtREhCeSxca-Ek=w2000-h2000-p-k-no",
        "tags": [
            "Restoran"
        ],
        "description": "Jl. Kemetiran Kidul No.9, Pringgokusuman, Gedong Tengen, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55272",
        "contact": "\n0819-9998-3883",
        "mapLink": "https://www.google.com/maps/place/Walter+Restaurant/data=!4m7!3m6!1s0x2e7a59256e140529:0xd66611d4abf9da32!8m2!3d-7.7937726!4d110.3605852!16s%2Fg%2F11l6hwfm7b!19sChIJKQUUbiVZei4RMtr5q9QRZtY?authuser=0&hl=id&rclk=1",
        "averageRating": 4.9,
        "website": "walterjogja.com"
    },
    {
        "name": "Fill In Blue",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerypbIelaIGi_pIvA8z9ZvTnoizH1nAvbePCNUL-9oa1il-U7bFTRi3Ye39oRlA3_MtRceTNLMDQtfzUn2AXCVEI-Z6iGRzM3H2X0aPY2a9BXmhScF5oRycqlCoaI1sCYIbyvLZ3UfLOMwZ=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. Brigjen Katamso, Prawirodirjan, Kec. Gondomanan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55121",
        "contact": "\n0812-3705-6149",
        "mapLink": "https://www.google.com/maps/place/Fill+In+Blue/data=!4m7!3m6!1s0x2e7a59ee24aa785f:0x8f5b9a5ba9c755fc!8m2!3d-7.8072761!4d110.3696995!16s%2Fg%2F11rkbsyd1c!19sChIJX3iqJO5Zei4R_FXHqVuaW48?authuser=0&hl=id&rclk=1",
        "averageRating": 4.8,
        "website": ""
    },
    {
        "name": "Estuary Café",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq4G3rTrByICq_JFm3DBtkVEfaTo895V4XMtygidUybIsPhczb50QLuEI9GJB8BOlRbBODadeFV1svSqXz1II_9Rc19PJ92AfDiZNFIiw3lsxg0UTBUOZkn9elZssngqOlSs4w=w2000-h2000-p-k-no",
        "tags": [
            "Kafe"
        ],
        "description": "Gg. Code III No.170C, Gemawang, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55283",
        "contact": "\n(0274) 5014118",
        "mapLink": "https://www.google.com/maps/place/Estuary+Caf%C3%A9/data=!4m7!3m6!1s0x2e7a592453113ae7:0xc92fb44d034ddd57!8m2!3d-7.7634102!4d110.3698868!16s%2Fg%2F11g1kn1g2n!19sChIJ5zoRUyRZei4RV91NA020L8k?authuser=0&hl=id&rclk=1",
        "averageRating": 4.6,
        "website": "instagram.com"
    },
    {
        "name": "satu.lokasi coffee",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepQenrNUeIRF0cyxfaOuCcq5mMURs58lsLSQ4LCzjDw9YCzYLg6o8eUHaHHca204j8QPDQL13MykJX3nJ1-9eZk5Qr7fvcmD3tTApH_bgCUMfcU4I9cdcnRP5OWDuwh5L5QJNb9qSkDel7Y=w2000-h2000-p-k-no",
        "tags": [
            "Kafe"
        ],
        "description": "Jl. Sareh No.5, Kotabaru, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55224",
        "contact": "\n0859-6236-2576",
        "mapLink": "https://www.google.com/maps/place/satu.lokasi+coffee/data=!4m7!3m6!1s0x2e7a5979b1ed0d4b:0xe47bc1a742959b8!8m2!3d-7.7851511!4d110.3760331!16s%2Fg%2F11kxcs5zys!19sChIJSw3tsXlZei4RuFkpdBq8Rw4?authuser=0&hl=id&rclk=1",
        "averageRating": 4.7,
        "website": "instagram.com"
    },
    {
        "name": "EC Cafe & Coworking Space",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerHikrk9kv24aJb64kkuSRHtE9La4zrEz5EILPh88uIymDXzaUjxSuGXEiKWMU-HDOPMJBn6mYCVNpRbnqYPMZlaSDex6jhxIIavTiyeTkeEHkOvFpeIYy07AiCwZEkAo7TUwg=w2000-h2000-p-k-no",
        "tags": [
            "Ruang Kerja Bersama"
        ],
        "description": "Jl. Pakuningratan No.29, Cokrodiningratan, Kec. Jetis, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55233",
        "contact": "\n0888-0843-4972",
        "mapLink": "https://www.google.com/maps/place/EC+Cafe+%26+Coworking+Space/data=!4m7!3m6!1s0x2e7a598b161f4421:0x767c60b3fa21f1f!8m2!3d-7.7810407!4d110.3648734!16s%2Fg%2F11qrnyd3f5!19sChIJIUQfFotZei4RHx-iPwvGZwc?authuser=0&hl=id&rclk=1",
        "averageRating": 4.7,
        "website": ""
    },
    {
        "name": "Svarga Flora Coffee & Plants",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwernktkoo9mvsFyNpC0MlbK5FL1GTTkiO80sdzWUXwYSApzfu57R4yGFMlm9x1faQLwXBQ3-4RmkijVvDHCe0RKWJ2evcr5Mq0HSUze_5Io8xGNWSHcmonUiAlvPUrH9xSCK8JIg=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. Affandi No.26A, Soropadan, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55222",
        "contact": "\n0851-9595-1919",
        "mapLink": "https://www.google.com/maps/place/Svarga+Flora+Coffee+%26+Plants/data=!4m7!3m6!1s0x2e7a598f1c4530d9:0x93ddd9982e4ae5b5!8m2!3d-7.7612473!4d110.3940399!16s%2Fg%2F11mbpvxqqx!19sChIJ2TBFHI9Zei4RteVKLpjZ3ZM?authuser=0&hl=id&rclk=1",
        "averageRating": 4.4,
        "website": "instagram.com"
    },
    {
        "name": "28 Coffee Taman Siswa",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq0DEPbjggdBXBYO-7jiGhk551vZ74JMFv2aFOwivTp2lrwt6u3FV_Qvn-IfH3ZD5RY0hlAR7gwJ4QKU2p7d0eA4J9yWNNeF6UdEaKvMNtT_2fG2L4fI4TBUBDNU67KCREz1ig6=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. Taman Siswa No.134, Wirogunan, Kec. Mergangsan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55151",
        "contact": "\n0811-5968-288",
        "mapLink": "https://www.google.com/maps/place/28+Coffee+Taman+Siswa/data=!4m7!3m6!1s0x2e7a57e81e754f4b:0x3eea62e9a796bffd!8m2!3d-7.8121622!4d110.3766031!16s%2Fg%2F11lkv5lwj0!19sChIJS091HuhXei4R_b-Wp-li6j4?authuser=0&hl=id&rclk=1",
        "averageRating": 4.8,
        "website": "instagram.com"
    },
    {
        "name": "𝐑𝐞𝐬𝐭𝐥𝐞𝐬𝐬 𝐂𝐨𝐟𝐟𝐞𝐞 & 𝐄𝐚𝐭𝐞𝐫𝐲",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweowyMvne2sHOsisSkMybiotRTFjOEWCcM_2lrUDig8Z24oXfXR_5bbau2t8Q3E8zKxIWGt2ShUACGoL8IaQuVXxgSSFS_w_5MeVAZQshMUHlFLhZJrUI3c6CjNhLp45ZC71zyQ=w2000-h2000-p-k-no",
        "tags": [
            "Restoran"
        ],
        "description": "Jl. Gayam No.3, Baciro, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55225",
        "contact": "\n0878-6688-5757",
        "mapLink": "https://www.google.com/maps/place/%F0%9D%90%91%F0%9D%90%9E%F0%9D%90%AC%F0%9D%90%AD%F0%9D%90%A5%F0%9D%90%9E%F0%9D%90%AC%F0%9D%90%AC+%F0%9D%90%82%F0%9D%90%A8%F0%9D%90%9F%F0%9D%90%9F%F0%9D%90%9E%F0%9D%90%9E+%26+%F0%9D%90%84%F0%9D%90%9A%F0%9D%90%AD%F0%9D%90%9E%F0%9D%90%AB%F0%9D%90%B2/data=!4m7!3m6!1s0x2e7a575bbb56bb6b:0x5e30ed8bd77f5fe1!8m2!3d-7.7971201!4d110.3781139!16s%2Fg%2F11sjwby50b!19sChIJa7tWu1tXei4R4V9_14vtMF4?authuser=0&hl=id&rclk=1",
        "averageRating": 4.6,
        "website": "msha.ke"
    },
    {
        "name": "Phin Kopi -------- Coffee & Eatery --------",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepdzk2-CNpJWxODQHtVt-hv0MWLWkz6oYjLr0JPUaEQBywvC-vKdR_aihVhs_00cB9hg4Mb3j94OiBlT6HIJQJ_LRGpj8EDNlZkgaP-GFTm7gw7ovJ_U1CIT1VOnzEP5uJOPGae=w2000-h2000-p-k-no",
        "tags": [
            "Restoran"
        ],
        "description": "Jl. Bumijo No.2, Bumijo, Kec. Jetis, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55231",
        "contact": "\n0896-0333-1176",
        "mapLink": "https://www.google.com/maps/place/Phin+Kopi+--------+Coffee+%26+Eatery+--------/data=!4m7!3m6!1s0x2e7a5824c4c12841:0xea4be157880e680!8m2!3d-7.786784!4d110.362832!16s%2Fg%2F11gf5_z81n!19sChIJQSjBxCRYei4RgOaAeBW-pA4?authuser=0&hl=id&rclk=1",
        "averageRating": 4.5,
        "website": "gofood.link"
    },
    {
        "name": "Awor Gallery & Coffee",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqiip_j5xA34AqXoVFg2GWAugYPe7vKiG7eJDXnZhTUFzGTZZQmdyn1_BtMqLT6VLiLoxIPpwM8l9gZhhYghFpO9GPuEg3FiYCll643lLEnYI7zw-GA1GuCa6H2Xzq-31jrqTSC=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. C. Simanjuntak, Terban, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55223",
        "contact": "\n0877-2294-1300",
        "mapLink": "https://www.google.com/maps/place/Awor+Gallery+%26+Coffee/data=!4m7!3m6!1s0x2e7a5833f67657a7:0xf85dfd22517d6263!8m2!3d-7.7804034!4d110.3734082!16s%2Fg%2F11c0rsqhsl!19sChIJp1d29jNYei4RY2J9USL9Xfg?authuser=0&hl=id&rclk=1",
        "averageRating": 4.5,
        "website": "instagram.com"
    },
    {
        "name": "B COFFEE YOGYA",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerx9YbF7mDSUR4T2GDXctOPKnw1JoexAox6PNVsqpqLa-yrYisYKOrapmTwdBq5pSvjGAyW1ksc77JCcu4FrZITlhgr0SFLsTI6L6nPH-DQpHm39Skbzqqnxc1UqOFn3w8lJl_K=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. Jogokaryan No.61-63, Mantrijeron, Kec. Mantrijeron, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55143",
        "contact": "\n0821-2535-8383",
        "mapLink": "https://www.google.com/maps/place/B+COFFEE+YOGYA/data=!4m7!3m6!1s0x2e7a57ac78799897:0x1e81537395ae712c!8m2!3d-7.8240555!4d110.3665697!16s%2Fg%2F11t65n4vsn!19sChIJl5h5eKxXei4RLHGulXNTgR4?authuser=0&hl=id&rclk=1",
        "averageRating": 4.8,
        "website": ""
    },
    {
        "name": "Eighteen Coffee Jogja",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqI4DPlbDGbyasXHejpuTNVizeG5eBCw8WYZjrAgcFNfTkHCnBQKXZKJpZjMF1DgESQe243zgIdfwdBlQTFI2VxC-reoqI9D7s6ebX7IfBZlPgSq_0klJcXT-ri8MbLt85y_GNS=w2000-h2000-p-k-no",
        "tags": [
            "Kedai Kopi"
        ],
        "description": "Jl. Prof. DR. Ki Amri Yahya No.1, Pakuncen, Wirobrajan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55253",
        "contact": "\n0895-6074-65000",
        "mapLink": "https://www.google.com/maps/place/Eighteen+Coffee+Jogja/data=!4m7!3m6!1s0x2e7a5792caef88ab:0xc3ae1041f6bbdd42!8m2!3d-7.8004357!4d110.3530925!16s%2Fg%2F11vdrgkt07!19sChIJq4jvypJXei4RQt279kEQrsM?authuser=0&hl=id&rclk=1",
        "averageRating": 4.8,
        "website": ""
    }
]