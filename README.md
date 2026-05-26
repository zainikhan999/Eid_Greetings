# 🌟 Interactive Eid Card Generator

A beautiful, premium, visual-first Single Page Application (SPA) where anyone can generate, customize, preview, and share stunning animated Eid Greeting Cards instantly with friends and family.

![Personalized animated Eid card demo in Emerald theme](https://img.shields.github.io/badge/Theme-Emerald%20%7C%20Midnight%20%7C%20Rose%20%7C%20Sunset-047857?style=for-the-badge)
![Tech Stack: Vanilla CSS3, Canvas, Web Audio API, html2canvas](https://img.shields.github.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20JS--ES6-blue?style=for-the-badge)

---

## 🚀 Key "WOW" Features

### 1. 💫 Real-Time 3D Parallax Card Customizer
Gently move your mouse or tilt your mobile device to see the card rotate in elegant 3D space with a sparkling golden dynamic radial glare! Powered by pure CSS 3D transforms (`preserve-3d`) and an optimized lightweight JavaScript pointer tracking loop.

### 2. 🎵 Dynamic Web Audio API Eastern Synthesizer
*Zero loading latency, 100% offline!* Instead of loading heavy MP3 music tracks that slow down the page and trigger browser autoplay block issues, this app utilizes the native browser **Web Audio API** to synthesize beautiful chimes, eastern Oud, and ambient wind bells in the traditional **Hijaz Maqam** (oriental scale) or a relaxing Pentatonic scale. It incorporates high-frequency sine waves with an exponential decay envelope, low-pass filter sweeps, and custom delay loops.

### 3. ✍️ Offline "AI" Custom Greetings Synthesizer
*Instant personalized messages!* Features a large built-in database with over **100+ beautifully pre-written greeting templates** in three languages (**English, Urdu, Arabic**) mapped across five relationship categories (*Family, Friends, Teachers, Colleagues, General*) and four emotional tones (*Heartfelt, Joyful, Religious, Poetic*). Clicking `✨ Auto-Generate Message` synthetically merges names and contexts to form deep, customized greetings.

### 4. 🌙 Magical Theatrical Animations
*   **Twinkling Canvas Starfield**: A high-performance canvas loops hundreds of stars twinkling at custom speeds with silver/gold particles and random trailing shooting stars sweeping across the night sky.
*   **Swaying Lanterns (Fanoos)**: Two beautifully styled SVG traditional lanterns hang from the top corners, swaying in wind-blown harmony using custom CSS keyframe rotations and radial flickering glow nodes.
*   **Rising Crescent Moon**: An elegant, glowing golden crescent moon rises gracefully behind twin silhouetted mosque horizons as the card opens.
*   **Cute walking Sheep/Goat**: An adorable interactive SVG goat walks endlessly back and forth along the bottom boundary of the card, wiggles its ears, and jumps happily with a `Baa! Eid Mubarak!` speech bubble and confetti when tapped!

### 5. 🔗 Deep-Link Serialization & Instant Sharing
*No server or database required!* The card parameters are fully serialized and compressed into the URL query parameters using Base64 (supporting Unicode characters like Arabic letters, Urdu Nastaliq, and Emojis flawlessly). Sending a link instantly opens the card in its full immersive animated showcase view, tailored to the recipient! One-click sharing generates pre-filled links for WhatsApp and the clipboard.

### 6. 📥 Capture & Save as High-Res Instagram Image
Integrates **html2canvas** with pixel-ratio density multiplier scaling to cleanly capture the card (hiding active dashboard controls) and generate a downloadable, high-quality, border-framed PNG file to post directly on Instagram/Facebook/WhatsApp Stories!

---

## 🎨 Premium Visual Color Themes
The design incorporates premium glassmorphic cards (`backdrop-filter: blur(16px)`) with thin borders and glowing gold corners, supporting four custom aesthetic palettes:
1.  **Emerald Gold (Default)**: `#022c22` to `#064e3b` | Rich royal green, warm gold frames, and glowing lanterns.
2.  **Midnight Sky**: `#0f172a` to `#1e1b4b` | Deep twilight space blue, violet chimes, and bright yellow crescent.
3.  **Rose Gold**: `#4c0519` to `#881337` | Majestic crimson burgundy and elegant warm cream scripts.
4.  **Sunset Oasis**: `#7c2d12` to `#c2410c` | Warm terracotta orange and shining golden dunes.

---

## 📂 File Architecture
```
d:\Projects\Self\Eid_Greetings\
├── index.html          # Semantic structure & CDN integrations
├── style.css           # Glassmorphic themes, structural layout & SVG animations
├── app.js              # State manager, Canvas star field, Audio synthesis & Sharing logic
└── README.md           # Documentation & instructions
```

---

## 🛠️ How to Open and Run Locally
Since the application is purely client-side:
1.  Double-click `index.html` to open it in any modern browser (Chrome, Edge, Safari, Firefox).
2.  Alternatively, serve it through any local static server. For example, using Python:
    ```bash
    python -m http.server 8000
    ```
    Or Node:
    ```bash
    npx serve
    ```
3.  Navigate to `http://localhost:8000` to design and test custom share links.

---

## 🔗 Deployment & Hosting
This project is 100% compatible with free static hosting platforms:
*   **Vercel / Netlify**: Simply upload/drag-and-drop the directory. No build step or installation of dependencies required!
*   **GitHub Pages**: Push this directory to a repository and enable GitHub Pages on the `main` branch to share it instantly!
