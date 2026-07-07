# 🎀 Birthday Surprise Website

A personal birthday gift website made with pure HTML, CSS and JavaScript.

## 📁 File Structure

```
birthday-surprise/
├── index.html     ← all the pages (edit text here)
├── style.css      ← all the styling
├── script.js      ← floating hearts, music, game logic
├── song.mp3       ← ADD YOUR SONG HERE (not included)
└── README.md
```

## ✏️ How to Customize

Open `index.html` in VS Code and press **Ctrl+F**, search for `CUSTOMIZE`.
Every comment marks exactly what to change:
- Her name
- Welcome message
- Birthday wishes (3 cards)
- The full letter
- "Reasons you are amazing" (4 cards) — make these personal!
- Final promise message

## 🎵 Adding the Song

1. Get your Bruno Mars mp3 file
2. Rename it to `song.mp3`
3. Put it in this same folder

## 🚀 Push to GitHub Pages

```bash
git init
git add .
git commit -m "birthday surprise"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Then go to your repo → **Settings → Pages → Branch: main** → Save.
She gets a live link like: `https://your-username.github.io/your-repo`

> ⚠️ Note: GitHub Pages won't play local mp3 files due to file size limits.
> For music on GitHub Pages, use a hosting service like Netlify instead,
> which supports uploading the mp3 along with the site files.

## 💻 Preview Locally

Install **Live Server** extension in VS Code,
right-click `index.html` → **Open with Live Server**.
