export interface CategoryItem {
  name: string;
  image: string;
  tags: string[];
  description?: string;
  contact?: string;
  mapLink?: string;
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
    name: "Klinik Kopi",
    image: "https://picsum.photos/seed/klinikkopi/600/800",
    tags: ["Specialty Coffee", "Storytelling", "Kaliurang"],
    description: "An iconic, purist coffee shop on Jl. Kaliurang famous for not serving sugar or milk, focusing entirely on the storytelling and origins of high-quality Indonesian beans.",
    contact: "+62 813 9399 9205",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Klinik+Kopi+Yogyakarta"
  },
  {
    name: "Sellie Coffee",
    image: "https://picsum.photos/seed/sellie/600/800",
    tags: ["Art Space", "Prawirotaman", "Coffee"],
    description: "A comfortable, aesthetically pleasing cafe and art space in Prawirotaman, gaining massive popularity after being a filming location for 'Ada Apa Dengan Cinta 2'.",
    contact: "+62 812 2700 8072",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Sellie+Coffee+Prawirotaman"
  },
  {
    name: "Filosofi Kopi Jogja",
    image: "https://picsum.photos/seed/filosofi/600/800",
    tags: ["Heritage Building", "Sleman", "Coffee"],
    description: "Housed in a traditional open-air Javanese Joglo in Sariharjo, this cafe from the famous movie franchise offers deep cultural vibes with exceptional local beans.",
    contact: "+62 821 2163 1118",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Filosofi+Kopi+Jogja"
  },
  {
    name: "Loji Cokro Coffee",
    image: "https://picsum.photos/seed/lojicokro/600/800",
    tags: ["Garden", "Colonial", "Brunch"],
    description: "A vintage-style cafe set in an old colonial Dutch house with a lush backyard garden on Jl. Cokroaminoto, ideal for relaxed weekend brunches.",
    contact: "+62 813 9363 4598",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Loji+Cokro+Coffee+Jogja"
  },
  {
    name: "Epic Coffee & Furniture",
    image: "https://picsum.photos/seed/epiccoffee/600/800",
    tags: ["Third Wave", "Roastery", "Industrial"],
    description: "Located on Jl. Palagan Tentara Pelajar, this vast warehouse-style roastery produces stellar third-wave coffee while doubling as a trendy high-end furniture gallery.",
    contact: "+62 274 4530704",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Epic+Coffee+Sleman"
  },
  {
    name: "Peacock Coffee",
    image: "https://picsum.photos/seed/peacock/600/800",
    tags: ["24-Hour", "Cozy", "Desserts"],
    description: "A cozy 24-hour spot on Jl. Palagan known for its self-service concept, serving a great variety of pies and strong coffee, heavily popular among university students.",
    contact: "+62 274 580005",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Peacock+Coffee+Jogja"
  },
  {
    name: "Simetri Coffee Roasters",
    image: "https://picsum.photos/seed/simetri/600/800",
    tags: ["Specialty", "Kotabaru", "Aesthetic"],
    description: "An elegant, minimalist cafe situated in an old heritage building in the Kotabaru district, known for its precision-brewed specialty coffees and delicious croissants.",
    contact: "+62 274 544078",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Simetri+Coffee+Roasters+Jogja"
  },
  {
    name: "Blanco Coffee and Books",
    image: "https://picsum.photos/seed/blanco/600/800",
    tags: ["Vintage", "Library", "Jetis"],
    description: "A bright, airy coffee shop near the Tugu Monument packed with books and European pastries, perfect for getting work done or quiet afternoon reading.",
    contact: "+62 812 2736 0036",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Blanco+Coffee+and+Books+Jogja"
  }
];