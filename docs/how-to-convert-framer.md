# How to Convert Framer-Exported HTML to Clean HTML/Tailwind

What I wanna do now is take a page I've downloaded from Framer, and I want to convert it to clean HTML and Tailwind CSS in a new directory: `tmp/converted`.

I wanna emphasise I don't need to exactly reproduce the fonts, or things like that, but I wanna reproduce the layout and maybe font sizings, so we don't need to, but we can try saying the fonts if we want. But the main thing is, I also want it to be responsive, so it works for mobile and desktop.

I also do NOT need the navbar or footer so you can ignore those -- or include it in very crude form if you want.

So you're doing your best to reproduce, if you want. I can also show you the original site, but I want you to have a first go at outputting an HTML file based on the source file I will specify.

This guide outlines the "recipe" for converting complex, inline-styled HTML exported from Framer into clean, maintainable HTML using Tailwind CSS.

## 1. Analyze the Source

Open the Framer-exported file (e.g., `tmp/framer/art.html`) and identify:

- **Fonts**: Look for `@font-face` rules or Google Font links.
- **Colors**: Search for common `rgb()` or hex values in inline styles.
- **Structure**: Identify high-level sections (Hero, Content Blocks, Grids, etc.).
- **Assets**: Locate `<img>` tags and background images pointing to `framerusercontent.com`.

## 2. Extract and Localize Assets
Framer images are usually hosted externally. You need to pull them down to keep the site self-contained.

### Command to list image URLs:
```bash
grep -oE 'https://framerusercontent.com/images/[^"? ]+' tmp/framer/YOUR_PAGE.html | sort | uniq > image_urls.txt
```

### Script to download assets:
```bash
mkdir -p tmp/converted/assets
cat image_urls.txt | while read url; do 
  filename=$(basename "$url")
  curl -L "$url" -o "tmp/converted/assets/$filename"
done
```

## 3. Set Up the Boilerplate
Create a new HTML file with Tailwind CDN and the required Google Fonts.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Include fonts found in Step 1 -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Elsie:wght@400;900&display=swap" rel="stylesheet">
    <style>
        /* Define global font/color tokens */
        body { font-family: 'Inter', sans-serif; color: #250902; }
        h1, h2, h3, .serif { font-family: 'Elsie', serif; }
        .bg-primary { background-color: rgb(173, 40, 49); }
    </style>
</head>
<body class="bg-white">
    <!-- Content goes here -->
</body>
</html>
```

## 4. Reconstruct Sections
For each major section in the original:
1. **Identify the Layout**: Is it a 2-column grid? A centered text block? A full-width hero?
2. **Translate to Tailwind**:
   - Use `max-w-7xl mx-auto px-4` for standard containers.
   - Use `grid lg:grid-cols-2 gap-12` for side-by-side content.
   - Use `flex items-center justify-center` for centered heroes.
3. **Map Assets**: Update `<img>` tags to point to your local `assets/` folder.
4. **Clean Content**: Extract the actual text and headers, stripping away the nested Framer `div`s and complex `transform` styles.

## 5. Responsive Polish
- Use Tailwind's responsive prefixes (`md:`, `lg:`) to handle layout changes.
- Framer often uses `810px` and `1200px` as breakpoints; Tailwind's `md:` (768px) and `lg:` (1024px) or `xl:` (1280px) are usually close enough, but can be customized if precision is critical.

## 6. What to Ignore
- **Navbar/Footer**: These are often handled as global components. Focus on the page-specific content.
- **Hamburger Menus**: Skip complex JS-based navigation logic; use simple Tailwind-based mobile transitions if needed.
- **Complex Framer Animations**: Strip `data-framer-appear-animation` attributes unless a specific fade-in is required.
