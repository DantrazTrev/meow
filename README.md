# 🐱 RESIDENT EVIL: CAT PROTOCOL v2.0

An interactive, retro-styled web experience inspired by Resident Evil, featuring procedurally generated pixel art cats that form mysterious triangle formations.

![Cat Protocol Demo](https://img.shields.io/badge/Status-OPERATIONAL-brightgreen?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K)

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/resident-evil-cat-protocol)

## ✨ Features

- **Interactive Cat Spawning**: Click anywhere to spawn procedurally generated pixel art cats
- **Triangle Protocol**: Spawn 6+ cats to activate the mysterious triangle formation
- **Retro Aesthetics**: CRT scanline effects, Orbitron font, and classic terminal UI
- **Audio System**: Procedural meow sounds and ambient effects using Web Audio API
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Zero Dependencies**: Pure HTML, CSS, and JavaScript

## 🛠️ Local Development

```bash
# Clone the repository
git clone https://github.com/your-username/resident-evil-cat-protocol.git
cd resident-evil-cat-protocol

# Install Vercel CLI (optional)
npm install -g vercel

# Start local development server
vercel dev
# OR simply open resident-evil-cats.html in your browser
```

## 📦 Deployment

### Vercel (Recommended)

1. **Fork this repository**
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your forked repository
   - Deploy automatically

3. **Manual deployment**:
   ```bash
   npm run deploy
   ```

### Other Platforms

- **Netlify**: Drag and drop the `resident-evil-cats.html` file
- **GitHub Pages**: Enable Pages in repository settings
- **Firebase Hosting**: Use `firebase deploy`

## ⚙️ Configuration

The application can be customized through environment variables or by modifying the `CONFIG` object in the HTML file:

### Environment Variables (Vercel)

Set these in your Vercel dashboard under Settings → Environment Variables:

| Variable | Default | Description |
|----------|---------|-------------|
| `CAT_TRIANGLE_THRESHOLD` | `6` | Number of cats needed to activate triangle protocol |
| `CAT_ANIMATION_DURATION` | `3000` | Duration of animations in milliseconds |
| `CAT_BLINK_PROBABILITY` | `0.3` | Probability of cats blinking (0.0-1.0) |
| `TRIANGLE_RADIUS` | `100` | Radius of the triangle formation in pixels |

### Code Configuration

Modify the `CONFIG` object in `resident-evil-cats.html`:

```javascript
const CONFIG = {
    CAT_SIZE: 32,                    // Size of cat sprites
    TRIANGLE_THRESHOLD: 6,           // Cats needed for triangle
    TRIANGLE_RADIUS: 100,            // Triangle formation radius
    ANIMATION_DURATION: 3000,        // Animation timing
    BLINK_PROBABILITY: 0.3,          // Cat blinking chance
    AUDIO_FREQUENCIES: {
        MEOW_BASE: 200,              // Base meow frequency
        MEOW_RANGE: 300,             // Meow frequency range
        AMBIENT_BASE: 150,           // Ambient sound frequency
        SPECIAL_BASE: 400            // Special effect frequency
    }
};
```

## 🎮 How to Play

1. **Click anywhere** on the screen to spawn cats
2. **Spawn 6 cats** to activate the Triangle Protocol
3. **Watch** as cats form a mysterious triangle formation
4. **Click Reset** to start over
5. **Enjoy** the retro sci-fi atmosphere!

## 🎨 Customization

### Themes

Create custom themes by modifying CSS variables:

```css
:root {
    --primary-bg: #000000;      /* Background color */
    --primary-text: #ffffff;    /* Text color */
    --border-color: #ffffff;    /* Border color */
    --hover-bg: #ffffff;        /* Hover background */
    --hover-text: #000000;      /* Hover text */
    --scanline-opacity: 0.1;    /* CRT effect intensity */
}
```

### Cat Variations

The `CatRenderer.drawPixelCat()` method supports random variations:
- Ear shapes (pointed vs rounded)
- Tail positions (curved vs straight)
- Eye expressions (sleepy vs alert)

## 🔧 Technical Details

- **Framework**: Vanilla JavaScript (ES6+)
- **Audio**: Web Audio API for procedural sound generation
- **Graphics**: HTML5 Canvas with pixel-perfect rendering
- **Styling**: Modern CSS with Grid, Flexbox, and CSS Variables
- **Performance**: Optimized with `will-change` and efficient DOM manipulation

## 🌟 Advanced Features

### PWA Support (Coming Soon)

The project is structured to easily add Progressive Web App features:
- Service Worker for offline support
- Web App Manifest for installation
- Push notifications for cat updates

### Analytics Integration

Add analytics by including environment variables:

```bash
# Vercel Environment Variables
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain.com
```

## 🐛 Troubleshooting

### Audio Not Working
- Ensure user interaction before audio (modern browser requirement)
- Check browser console for Web Audio API errors
- Verify HTTPS deployment for audio features

### Performance Issues
- Reduce `TRIANGLE_THRESHOLD` for slower devices
- Disable animations by setting `ANIMATION_DURATION` to `0`
- Use Chrome DevTools to profile performance

### Deployment Issues
- Ensure `vercel.json` is properly configured
- Check build logs in Vercel dashboard
- Verify all files are committed to repository

## 📈 Monitoring

Track your Cat Protocol deployment:

```bash
# Check deployment status
vercel ls

# View deployment logs
vercel logs your-deployment-url

# Monitor performance
vercel inspect your-deployment-url
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-cats`
3. Commit changes: `git commit -m 'Add amazing cat feature'`
4. Push to branch: `git push origin feature/amazing-cats`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Roadmap

- [ ] PWA support with offline functionality
- [ ] Multiple cat breeds and colors
- [ ] Sound packs and music tracks
- [ ] Multiplayer cat spawning
- [ ] Cat save/load system
- [ ] Advanced triangle formations (pentagram, hexagon)
- [ ] Mobile touch gestures
- [ ] Accessibility improvements

---

**Made with 🐱 and ☕ by the Cat Protocol Team**

*"In the darkness of cyberspace, only cats can save us..."*