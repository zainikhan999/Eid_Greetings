# 🌙 Eid-ul-Adha & Bakra Eid Greeting Card Generator

A beautiful, premium, and fully responsive Single Page Application (SPA) where users can generate, customize, preview, and share stunning Eid-ul-Adha greeting cards instantly with friends and family.

![Tech Stack: Vanilla CSS3, Canvas, JS](https://img.shields.github.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20JS--ES6-064e3b?style=for-the-badge)
![Status: Production Ready](https://img.shields.github.io/badge/Status-Production%20Ready-22c55e?style=for-the-badge)

---

## 🚀 Key Features

### 1. 🧙 4-Step Interactive Wizard UI
A highly intuitive, mobile-optimized 4-step creation wizard replaces endless scrolling. Users are smoothly guided through Language selection, Name customization, Message selection, and Card Design.

### 2. 🌍 Bilingual Support (English & Urdu)
Fully tailored for both English and Urdu audiences.
*   **Automatic RTL:** Switches the entire card and input layout to Right-To-Left when Urdu is selected.
*   **Native Typography:** Uses beautiful, authentic Google Fonts like `Noto Nastaliq Urdu` for Urdu scripts and `Great Vibes` & `Playfair Display` for English aesthetics.

### 3. 🐑 Eid-ul-Adha Specific Templates
Instead of generic greetings, the app features **30 pre-written wish templates** deeply focused on Bakra Eid, Qurbani, Hajj, and sacrifice — decorated with beautiful themed icons (🐑 🌙 🕌 🕋).

### 4. 🎨 Premium Dynamic Aesthetics
Choose from an array of premium styles to create a truly personalized card:
*   **4 Color Themes:** Emerald Gold, Midnight Sky, Rose Gold, Sunset Oasis.
*   **4 Card Frame Styles:** Royal Arch, Floral Arabesque, Festive Qurbani, Modern Minimalist.
*   **Rich CSS Textures:** Each card style applies a subtle, elegant CSS geometric background pattern (like dot-grids or diagonal weaves) to give the paper a luxurious, tactile feel without relying on heavy background images.

### 5. 🔗 Deep-Link URL Serialization
*No backend database required!* The user's custom names, language, theme, style, and selected message are base64-encoded and serialized directly into the URL. Sending this link to a friend instantly opens their personalized card in full-screen showcase mode.

### 6. 📥 High-Res Image Export & Sharing
Integrates **html2canvas** with pixel-ratio density scaling to capture a perfectly framed PNG image of the customized card, making it ready to share natively to WhatsApp, Instagram Stories, or Facebook with a single click.

---

## 📂 File Architecture
```
Eid_Greetings/
├── index.html          # Semantic wizard structure & UI layout
├── style.css           # Glassmorphic themes, responsive grids & CSS pattern textures
├── app.js              # State manager, URL deep-linking, HTML2Canvas & template DB
└── README.md           # Documentation
```

---

## 🛠️ How to Run Locally

Since the application is a purely client-side static site, it runs immediately:
1. Double-click `index.html` to open it in Chrome, Edge, Safari, or Firefox.
2. Alternatively, serve it via a local static server:
   ```bash
   python -m http.server 8000
   ```
   Or Node:
   ```bash
   npx serve
   ```
3. Navigate to `http://localhost:8000` to design and test custom share links.

---

## 🔗 Deployment

This project is 100% compatible with free static hosting platforms:
*   **GitHub Pages**: Push this directory to your `main` or `master` branch and enable GitHub Pages in repository settings to share it instantly.
*   **Vercel / Netlify**: Drag-and-drop the directory for an instant global CDN deployment. No build step required!
