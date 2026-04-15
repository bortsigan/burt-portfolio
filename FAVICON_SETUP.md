# Favicon Setup Guide

Your portfolio now has a custom favicon (the icon shown in the browser tab next to the page title).

## What Was Created

### 1. **public/favicon.svg** 
Your main favicon - an SVG with:
- Dark green background (#022c22)
- Green accent circle matching your portfolio theme (#22c55e)
- Code brackets symbolizing development
- "B" for Burt in the center

### 2. **public/manifest.json**
Web app manifest for PWA support and icon configuration

### 3. **nuxt.config.ts** (Updated)
Head configuration now includes:
- SVG favicon
- Apple touch icon reference
- Web manifest link

## Customization

### Change Favicon Colors

Edit `public/favicon.svg` and change the hex colors:
- `#022c22` - Background color
- `#22c55e` - Accent color

### Replace the "B" icon

Open `public/favicon.svg` and modify the design:

```svg
<!-- Change this section -->
<text x="32" y="38" font-family="monospace" font-size="24" font-weight="bold" fill="#22c55e" text-anchor="middle" dominant-baseline="middle">B</text>

<!-- To something like: -->
<circle cx="32" cy="32" r="8" fill="#22c55e"/>
<!-- Or any other SVG shape -->
```

### Add PNG versions

For better compatibility on all devices, you can generate PNG versions:

1. Use an online SVG to PNG converter or tools like:
   - [Squoosh](https://squoosh.app)
   - [CloudConvert](https://cloudconvert.com)
   - [SVGtoPNG](https://svgtopng.com)

2. Create these sizes and save in `public/`:
   - `favicon-16x16.png` (16x16)
   - `favicon-32x32.png` (32x32)
   - `apple-touch-icon.png` (180x180) - for iPhone home screen
   - `android-chrome-192x192.png` (192x192) - for Android

3. Update `nuxt.config.ts` to include them:
```typescript
link: [
  { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
  { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
  { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
  { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
  { rel: 'manifest', href: '/manifest.json' },
],
```

## Testing

1. Reload your browser (Ctrl/Cmd + Shift + R for hard refresh)
2. Look at the browser tab - you should see the green "B" icon
3. On mobile, add to home screen - icon will appear

## Files Location

```
public/
├── favicon.svg           ← Main favicon (SVG)
├── manifest.json         ← PWA manifest
└── apple-touch-icon.png  ← (Optional) for iOS devices
```

## Browser Support

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ iOS devices (with apple-touch-icon)
- ✅ Android devices  (with manifest.json)
- ✅ PWA support
