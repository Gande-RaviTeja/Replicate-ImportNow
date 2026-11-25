# ImportNow Clone — Complete Replication & Enhancements

A pixel-faithful, feature-complete clone of [importnow-concept.vercel.app](https://importnow-concept.vercel.app/#home) — a premium China-to-India import services web application.

**Assignment submitted to:** Sabiya@importnow.in

---

## 🛠 Tech Stack

| Layer | Tool | Purpose |
|---|---|---|
| **Framework** | React 18 + Vite | Lightning-fast HMR, modular JSX architecture |
| **Styling** | Tailwind CSS v3 + CSS Custom Properties | Pixel-perfect matching of spacing, typography, and color tokens |
| **3D Engine** | Three.js + WebGL | Photorealistic atmospheric 3D Earth & interactive container ship voyage |
| **3D Shaders** | Three.js `Water` & `Sky` | Physical atmospheric sky rendering and ocean waves |
| **Motion & Micro-interactions** | IntersectionObserver + 3D Card Tilt | Smooth scroll reveals, count-up numbers, magnetic buttons, and 3D licence tilt |
| **Typography** | Google Fonts (`Sora` + `Inter`) | Exact typography hierarchy from the original concept |
| **Deployment** | Vercel | Production-ready zero-config deployment |

---

## 🌟 Core Features & Visual Fidelity

### 1. Photorealistic 3D Earth Globe (Hero Section)
- **High-Resolution NASA Planet Textures**: Earth surface, normal mapping, specular water reflections, city night lights, and atmospheric cloud layer.
- **Day/Night Sun Terminator**: Custom shader calculating realistic daylight across China and India with night limb illumination.
- **Animated Trade Route Arcs**: Curved Bezier tubes with travelling pulse heads connecting Shanghai, Yiwu, Guangzhou, and Shenzhen to Nhava Sheva, Chennai, Hyderabad, and Vizag.
- **Dynamic City Tags**: Screen-projected HTML tags with national flags positioned cleanly around the sphere.

### 2. Interactive 3D Ocean Voyage & Container Ship (Journey Section)
- **Three.js Ocean Water & Sky Simulation**: Procedural water normals with physical sun glare.
- **Detailed Container Ship Model**: Built with custom hull lines, container blocks, and *"IMPORTNOW"* hull branding.
- **Working STS Port Cranes**: Gantry cranes at Shanghai and Chennai quays that physically pick up and load/unload containers as the user scrolls.
- **Synchronized Scroll Timeline**: 6-step progress stepper on the left and a live route tracking bar with a travelling ship icon and Day 0–35 counter.

### 3. Interactive Import Duty & Landed Cost Estimator (`#calculator`)
- Choose product category (Furniture 25% BCD, Electronics 15% BCD, Lighting 20% BCD, EV Parts 15% BCD, General Goods 10% BCD, Machinery 7.5% BCD).
- Adjust factory FOB value via slider and choose shipping mode (FCL, LCL, Air).
- Real-time computation of Assessable Value, BCD, Social Welfare Surcharge (10% of BCD), IGST (18%), CHA handling, and Total Landed Cost in INR.
- One-click button to export the calculation to WhatsApp for an official quote.

### 4. Live Container & Consignment Tracker (`#tracker`)
- Real-time simulated tracking for sample consignments (`IN-SHA-0812`, `IN-FOS-9910`, `IN-YIW-4402`) or custom queries.
- Visual status cards showing vessel name, GPS location, container seal status, and 5-stage milestone progression.

### 5. Canton Fair 8-Day Sourcing Expedition Modal
- Interactive modal detailing the complete day-by-day itinerary (Pazhou Complex, Foshan furniture malls, Guzhen lighting, Shenzhen electronics, factory audits, and CHA clearance roadmap).

### 6. Quick Inquiry Presets (Contact Form)
- Single-click preset tags (Foshan Villa Furniture, Guzhen Lighting, EV Scooter CKD Kits, Yiwu Supermarket, Canton Fair Trip) that automatically pre-fill category, MOQ, and budget before launching WhatsApp.

---

## 🚀 Running the Project Locally

```bash
# 1. Navigate to project directory
cd importnow-clone

# 2. Install dependencies (if not already installed)
npm install

# 3. Start local development server
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser.

---

## 📦 Building for Production

```bash
npm run build
```

The production output is generated in `dist/` and is fully ready to deploy to Vercel or any static host.
