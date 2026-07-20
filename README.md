<div align="center">

<img src="public/assets/logo.svg" alt="Explore Jogja Logo" width="120" height="120" />

# 🏛️ Explore Jogja

### *Your Ultimate Digital Travel Companion to Yogyakarta*

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Contentful](https://img.shields.io/badge/Contentful-CMS-2478CC?style=for-the-badge&logo=contentful&logoColor=white)](https://www.contentful.com/)

<p>Discover ancient temples, hidden beaches, royal palaces, and vibrant street culture —<br/>all in one immersive, AI-powered web experience.</p>

**[🌐 Live Demo](https://explorejogja.id)** · **[🐛 Report Bug](https://github.com/Agil-Saputra/explore-jogja/issues)** · **[💡 Request Feature](https://github.com/Agil-Saputra/explore-jogja/issues)**

</div>

---

## 📸 Screenshots

> **Note:** Replace the placeholder images below with actual screenshots from the live app.

<table>
  <tr>
    <td align="center">
      <strong>🏠 Hero — Home Page</strong><br/>
      <img src="https://placehold.co/800x500/0a0a0a/F5A623?text=📸+Home+Page+Screenshot" alt="Home Page Hero" width="100%"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>🗺️ Interactive Map Explorer</strong><br/>
      <img src="https://placehold.co/800x500/0a0a0a/0D9488?text=📸+Map+Explorer+Screenshot" alt="Map Explorer" width="100%"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>🤖 AI-Powered Trip Planner</strong><br/>
      <img src="https://placehold.co/800x500/0a0a0a/F5A623?text=📸+AI+Trip+Planner+Screenshot" alt="AI Trip Planner" width="100%"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>📜 Cultural History Timeline</strong><br/>
      <img src="https://placehold.co/800x500/0a0a0a/6B21A8?text=📸+History+Timeline+Screenshot" alt="History Timeline" width="100%"/>
    </td>
  </tr>
</table>

> 💡 **How to add real screenshots:** Take captures of your deployed app and save them to `docs/screenshots/`, then update the `src` paths above.

---

## ✨ Features

Explore Jogja is more than a travel guide — it's a full-featured, immersive digital experience built for curious explorers.

| Feature | Description |
|---|---|
| 🏠 **Cinematic Homepage** | GSAP-powered scroll animations, ambient video backgrounds, and a parallax hero section |
| 🔍 **Discover** | Browse destinations by category: Top Attractions, Beaches, Cafes, Food & Drink, Trekking, and more |
| 🤖 **AI Trip Planner** | 5-step wizard powered by Google Gemini AI — input your dates, companions, budget & interests to get a personalized itinerary |
| 🗺️ **Interactive Map** | Mapbox-powered map with live geolocation, category filters, distance-based nearby search, and place detail popups |
| 📰 **Stories & Guides** | Contentful CMS-backed articles with search, category filters, rich-text rendering, and community article submissions |
| 🎭 **Events** | Discover upcoming local events and submit your own with a built-in registration form |
| 📜 **History Timeline** | A cinematic, scrollable timeline of Yogyakarta's rich history — from the 1755 Giyanti Treaty to UNESCO recognition in 2023 |
| 🎵 **Ambient Music Player** | Optional gamelan music to enhance the history reading experience |
| 💬 **AI Chat Assistant** | "Sugeng Rawuh!" — an AI-powered chatbot (OpenAI) with conversation history, specialized in Yogyakarta knowledge |
| 🌐 **Bilingual (i18n)** | Full English & Indonesian language support via a custom locale context |
| 📱 **PWA Ready** | Progressive Web App manifest for installable, app-like experience |
| ♿ **Accessible & SEO** | Semantic HTML, complete meta tags, Open Graph, and Twitter Cards |

---

## 🛠️ Tech Stack

```
Frontend
├── Next.js 16.2          — App Router, Server Components, API Routes
├── React 19              — Latest concurrent features
├── TypeScript 5          — Full type safety
└── TailwindCSS 4         — Utility-first styling

Animations & UX
├── GSAP 3 + @gsap/react  — Scroll-triggered cinematic animations
├── Framer Motion 12      — Component-level micro-animations
├── Lenis                 — Smooth scrolling
└── Swiper 12             — Touch-friendly carousels

Maps & Data Viz
├── Mapbox GL JS 3        — Interactive maps with custom styling
└── React Simple Maps     — District choropleth map

AI & Backend
├── Google Gemini AI      — Itinerary generation & trip planning
├── OpenAI SDK            — AI chat assistant
├── Contentful            — Headless CMS for articles & events
└── Resend                — Transactional emails (article submission)

Typography
├── Plus Jakarta Sans     — Body text
├── Playfair Display      — Serif headings
└── Caveat Brush          — Decorative / handwritten accents
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>= 20.x`
- **npm** `>= 10.x`

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Agil-Saputra/explore-jogja.git
   cd explore-jogja
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```bash
   cp .env .env.local
   ```

   Fill in the following variables:

   | Variable | Description |
   |---|---|
   | `NEXT_PUBLIC_MAPBOX_TOKEN` | Mapbox GL JS public token |
   | `CONTENTFUL_SPACE_ID` | Contentful space ID |
   | `CONTENTFUL_ACCESS_TOKEN` | Contentful Delivery API token |
   | `GEMINI_API_KEY` | Google Gemini AI API key |
   | `OPENAI_API_KEY` | OpenAI API key (for chat assistant) |
   | `RESEND_API_KEY` | Resend API key (for email submissions) |

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser 🎉

---

## 📁 Project Structure

```
explore-jogja/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # 🏠 Homepage
│   ├── layout.tsx                # Root layout (fonts, metadata, providers)
│   ├── discover/                 # 🔍 Discovery hub & category listings
│   ├── plan-your-visit/          # ✈️  AI trip planner & transport guide
│   ├── maps/                     # 🗺️  Interactive Mapbox explorer
│   ├── articles/                 # 📰 Stories & guides (Contentful CMS)
│   │   └── [slug]/               # Dynamic article detail pages
│   ├── events/                   # 🎭 Events listing & registration
│   ├── history/                  # 📜 Cultural history timeline
│   └── api/                      # API Routes
│       ├── chat/                 # AI chat assistant endpoint
│       ├── generate-plan/        # AI itinerary generation endpoint
│       ├── articles/             # Articles submission endpoint
│       └── send-event-email/     # Event registration email endpoint
│
├── components/                   # Reusable UI components
│   ├── Navbar.tsx                # Responsive navbar with mega menu
│   ├── ChatModal.tsx             # AI chat assistant modal
│   ├── AttractionsSlider.tsx     # Swiper-based attractions carousel
│   ├── YogyakartaMap.tsx         # Interactive district map
│   ├── ItineraryMap.tsx          # AI-generated trip route map
│   ├── HistoryTimeline.tsx       # Scrollable history timeline
│   ├── HistoryMusicPlayer.tsx    # Ambient gamelan music player
│   └── PlaceDetailLayout.tsx     # Place detail full-page layout
│
├── data/                         # Static data (places, events, etc.)
├── lib/                          # Utility libraries (contentful client, etc.)
├── messages/                     # i18n translations
│   ├── en.json                   # English
│   └── id.json                   # Indonesian (Bahasa)
├── public/assets/                # Static assets (images, videos, SVGs)
└── types/                        # TypeScript type definitions
```

---

## 🌐 Pages Overview

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Cinematic hero, attractions slider, district map, culinary section |
| `/discover` | **Discover** | Category explorer hub |
| `/discover/[category]` | **Category** | Filtered listings (beaches, cafes, etc.) |
| `/discover/[category]/[slug]` | **Place Detail** | Full detail page with photos & info |
| `/plan-your-visit` | **Plan Your Visit** | AI trip planner + transport guide |
| `/maps` | **Map** | Interactive Mapbox map with geolocation |
| `/articles` | **Stories & Guides** | CMS-backed article listing |
| `/articles/[slug]` | **Article Detail** | Full article with rich text rendering |
| `/events` | **Events** | Upcoming events + submission form |
| `/history` | **History** | Cinematic cultural history timeline |

---

## 🤖 AI Features

### Trip Planner (Google Gemini)
The 5-step planner collects your **travel dates**, **companions**, **daily budget**, and **interests**, then calls the Gemini API to generate a structured day-by-day itinerary with:
- Named locations with addresses
- Time-of-day scheduling (Morning / Afternoon / Evening / Night)
- Estimated costs per activity
- Route visualized on Mapbox

### Chat Assistant (OpenAI)
An intelligent chatbot that greets you with *"Sugeng Rawuh!"* (Welcome in Javanese). It:
- Maintains full conversation history per session
- Specializes in Yogyakarta knowledge
- Suggests starter questions (temples, food, Kraton Palace, hidden gems)

---

## 🎨 Design System

The UI follows a **dark cinematic aesthetic** with warm cultural accents:

| Token | Value | Usage |
|---|---|---|
| Background | `#000000` / `#0a0a0a` | Page backgrounds |
| Primary Accent | `#F5A623` (amber/gold) | CTAs, highlights, selections |
| Secondary Accent | `#0D5C63` (deep teal) | Secondary elements, badges |
| Text Primary | `#FFFFFF` | Headings |
| Text Secondary | `#9ca3af` | Body, captions |
| Font — Display | Playfair Display | Hero headings |
| Font — Body | Plus Jakarta Sans | UI text |
| Font — Decorative | Caveat Brush | Handwritten accents |

---

## 🌏 Internationalization (i18n)

The app supports **English** and **Indonesian** via a custom `LocaleContext`:

```tsx
// Access translations anywhere in the app
const { locale, setLocale, t } = useLocale();

t('home.heroTitle') // → "The Cultural Capital of Indonesia"
```

All UI strings live in:
- `/messages/en.json` — English translations
- `/messages/id.json` — Indonesian (Bahasa Indonesia)

---

## 📦 Available Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build production bundle
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🤝 Contributing

Contributions are warmly welcome! If you'd like to improve Explore Jogja:

1. Fork the repository
2. Create your feature branch: `git checkout -b feat/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feat/amazing-feature`
5. Open a Pull Request

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

- [Contentful](https://www.contentful.com/) — Headless CMS powering articles & events
- [Mapbox](https://www.mapbox.com/) — Beautiful interactive maps
- [Google Gemini AI](https://ai.google.dev/) — Intelligent itinerary generation
- [GSAP](https://gsap.com/) — Industry-leading animation library
- [Framer Motion](https://www.framer.com/motion/) — React animation library
- [Lenis](https://lenis.darkroom.engineering/) — Smooth scrolling
- All photographers whose stunning images of Yogyakarta grace this app

---

<div align="center">

Made with ❤️ and ☕ from Yogyakarta, Indonesia

**[⭐ Star this repo](https://github.com/Agil-Saputra/explore-jogja)** if you found it helpful!

<br/>

*"Jogja Istimewa" — Yogyakarta is Special*

</div>
