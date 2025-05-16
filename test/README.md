# Cloud & Mountain Loading Animation

This folder contains a standalone implementation of the cloud and mountain loading animation.

## Files

### Basic Implementation
- `index.html` - Static version of the loading animation
- `style.css` - Styling for the static version
- `script.js` - JavaScript for the static version

### Dynamic Loading Implementation
- `loading.css` - Styling for the dynamic loading overlay
- `loading.js` - JavaScript to create and control the loading overlay
- `demo.html` - Demo page showing the loading overlay in action

## How to Use

### Static Version
Open `index.html` to see the static version of the loading animation.

### Dynamic Loading Overlay
1. Include `loading.css` in your HTML file:
   ```html
   <link rel="stylesheet" href="loading.css">
   ```

2. Include `loading.js` at the end of your HTML file:
   ```html
   <script src="loading.js"></script>
   ```

3. The loading overlay will automatically appear when:
   - The page loads
   - When clicking on internal links
   - The overlay will automatically hide when the page is fully loaded

### Demo
Open `demo.html` to see the loading animation in action with controls to show/hide it.

## Customization

You can customize the appearance of the loading animation by modifying:

- Colors in the CSS files
- Sizes and positions of elements
- Animation speeds and behaviors

The cloud and mountain images are loaded from the parent directory (`../cloud.png` and `../koth.png`).

## Integration

To integrate this loading animation into your website:

1. Copy the `loading.css` and `loading.js` files to your project
2. Include them in your HTML files
3. Make sure the paths to the cloud and mountain images are correct
