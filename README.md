# Asterix & Obelix Fanpage

This is a Webpack homework project that demonstrates the integration of a modern frontend stack: JS, TypeScript, SCSS/LESS, fonts, media, Babel, ESlint, and DevServer.

The project is a fan page featuring the characters Asterix, Obelix, and Getafix, where you can view their biographies, play audio, and enjoy responsive design.

---
```
homework-35/
├── dist/ # Project build
├── node_modules/ # Dependencies
├── src/
│ ├── assets/
│ │ ├── audio/
│ │ ├── fonts/
│ │ └── images/
│ ├── main.js # Main JS file
│ ├── test.ts # TypeScript example
│ └── index.html # HTML template
├── styles/
│ └── main.scss # Main styles with font support
├── package.json
├── tsconfig.json
├── webpack.config.cjs # Webpack config
└── eslint.config.mjs
 ```
---
## ⚙️ Functionality

- Display of Asterix, Obelix, Getafix characters with pictures  
- Buttons for viewing biographies in a modal window  
- Audio player for Dogmafix  
- Support for local fonts via @font-face  
- Import and use of images and audio via Webpack  
- SCSS/LESS/CSS integration and modular style structure  
- TypeScript compilation (test.ts)  
- ES6+ JS transpilation via Babel  
- Auto-reload via Webpack DevServer  
- Code linting via ESLint  
- Bundle size analysis via Webpack Bundle Analyzer  
- File hashing to avoid cache issues  
---

## 🚀 Installation and launch

1. Clone the repository:
```git clone <URL-репозиторію>
cd homework-35
```
2. Install dependencies:
```npm install
```
3. Start a local development server:
```npm start
```
The page will open at http://localhost:3000/ with hot-reload.
4. Assemble the production bundle:
```npm run build
```
The result will appear in the dist/ folder.
---
## 🛠 Technologies
- JavaScript (ES6+)
- TypeScript
- SCSS / LESS / CSS
- Webpack 5
- Babel
- ESLint
- Webpack DevServer
- Webpack Bundle Analyzer
- Lodash
---
## 📝 Notes:
- Font and media files are located in src/assets/.
- To add new characters, just add an image to images/ and a description to main.js in bios.
- Modal windows are implemented in pure JS, without third-party libraries.
---
## 👩‍💻 Author
---
Snizhana is a barista, artist and creative person, Asterix & Obelix fan, loves video games and anime.