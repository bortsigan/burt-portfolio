# Icon System Guide

This is a custom SVG icon system for your portfolio. No external icon library dependency needed!

## Available Icons

### Development & Tech
- `commandLine` - Terminal/Command line
- `code` - Code brackets
- `database` - Database
- `server` - Server
- `git` - Git
- `docker` - Docker

### Communication
- `mail` - Email envelope
- `phone` - Phone
- `mapPin` - Location pin

### UI/Design
- `palette` - Color palette
- `layers` - Layers
- `star` - Star (filled)

### Status
- `checkCircle` - Check in circle
- `check` - Check mark

### Navigation
- `chevronDown` - Chevron down
- `chevronUp` - Chevron up
- `arrowRight` - Arrow right

### Other
- `briefcase` - Briefcase
- `award` - Award/Trophy
- `users` - Multiple users

### Social/Brand
- `github` - GitHub logo
- `linkedin` - LinkedIn logo

## Usage

### Basic Usage
```vue
<Icon name="mail" />
```

### With Custom Size
```vue
<Icon name="mail" size="w-6 h-6" />
<Icon name="mail" size="w-8 h-8" />
```

### With Custom Colors
```vue
<Icon name="mail" className="text-green-500" />
<Icon name="commandLine" className="text-blue-400 hover:text-blue-600" />
```

### Combined
```vue
<Icon name="phone" size="w-10 h-10" className="text-green-600" />
```

## Adding New Icons

1. Open `app/assets/js/icons.js`
2. Add a new entry with the icon name and SVG content:

```javascript
export const icons = {
  newIcon: '<svg>...</svg>',
  // ... other icons
};
```

3. Get SVG code from:
   - [Feather Icons](https://feathericons.com)
   - [Heroicons](https://heroicons.com)
   - [Tabler Icons](https://tabler-icons.io)
   - [Font Awesome](https://fontawesome.com)

## Size Presets

- `w-4 h-4` - Extra small (16px)
- `w-5 h-5` - Small (20px) - Default
- `w-6 h-6` - Medium (24px)
- `w-8 h-8` - Large (32px)
- `w-10 h-10` - Extra large (40px)
- `w-12 h-12` - 2XL (48px)

## Color Examples

```vue
<!-- Green -->
<Icon name="check" className="text-green-500" />

<!-- Blue -->
<Icon name="code" className="text-blue-500" />

<!-- With hover -->
<Icon name="arrowRight" className="text-gray-400 hover:text-green-500 transition" />

<!-- Dark mode support -->
<Icon name="mail" className="text-gray-800 dark:text-gray-200" />
```

## No Dependencies!

This system uses vanilla SVG with Tailwind CSS for styling. You don't need:
- @nuxt/ui icons
- FontAwesome
- Any other icon library

Just edit the JavaScript file and you're ready to go! 🎉
