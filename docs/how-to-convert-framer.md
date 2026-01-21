# How to Convert Framer-Exported HTML to Clean HTML/Tailwind

Take a page I've downloaded from Framer in `tmp/framer`, and I want to convert it to clean HTML and Tailwind CSS in a new directory: `tmp/converted`.

I emphasise I don't need to exactly reproduce the fonts, or things like that, but I wanna reproduce the layout and font sizings (at least approximately), so we don't need to, but we can try saying the fonts if we want. But the main thing is, I also want it to be responsive, so it works for mobile and desktop.

I also do NOT need the navbar or footer so you can ignore those -- or include it in very crude form if you want.

So you're doing your best to reproduce the original page. I can also show you the original site, but I want you to have a first go at outputting an HTML file based on the source file I will specify.

- Download images used in the pages and put in `tmp/converted/assets`
  - Framer images are usually hosted externally. You need to pull them down to keep the site self-contained.
- Make sure to include buttons and links (and try and reproduce look and feel)