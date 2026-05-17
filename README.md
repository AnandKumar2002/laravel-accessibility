# Parvion Laravel Accessibility

An enterprise-grade, zero-dependency, highly configurable accessibility toolbar for Laravel. 

Provide your users with critical cognitive, visual, and motor accessibility tools instantly. Designed to integrate seamlessly into any Laravel, Livewire, or standard PHP application with **zero build-time overhead**.

---

## ⚡ Features at a Glance

*   **Zero Dependencies:** Pure Vanilla JS and scoped CSS. No Vue, React, Tailwind, NPM, or Vite build steps required.
*   **State Persistence:** User preferences (like active features and themes) are automatically saved to `localStorage` and remembered across sessions.
*   **Dynamic Layouts:** Display the accessibility panel as a Right Drawer, Left Drawer, Bottom Sheet (mobile-first), or Center Modal.
*   **Advanced Screen Reader:** Web Speech API integration with multi-voice support and language filtering.
*   **Cognitive Support:** Reading Masks, Calm Mode (Stop Animations), and Dyslexia Fonts.
*   **Visual Filters:** Mathematical SVG matrix filters for Protanopia, Deuteranopia, and Tritanopia color blindness.

---

## 🚀 Installation

Install the package via Composer:

```bash
composer require parvion/laravel-accessibility
```

Publish the configuration file. This allows you to toggle features on/off and control the layout of the widget:

```bash
php artisan vendor:publish --tag=accessibility-config
```

---

## 🛠️ Usage

Place the Blade directive **anywhere** in your layout file (e.g., `resources/views/layouts/app.blade.php`).

```blade
<body>
    {{-- Your application content --}}

    @accessibility
</body>
```

The directive automatically injects the necessary CSS, HTML widget, and JavaScript logic natively through Laravel routes. 

*Note: You can also use inline positioning by changing the config to `'position' => false`, which will render the button directly where you place the directive.*

---

## ⚙️ Configuration

All features, colors, and layouts are controlled via `config/accessibility.php`.

### Panel Layouts
You can dynamically change how the panel pops out on the screen.

```php
'panel_layout' => 'bottom_sheet', // options: 'right_drawer', 'left_drawer', 'bottom_sheet', 'center_modal'
```
*   **`right_drawer` / `left_drawer`:** Slides in from the sides of the screen.
*   **`bottom_sheet`:** Slides up from the bottom with a dark backdrop. Perfect for mobile UI.
*   **`center_modal`:** Fades into the absolute center of the screen with a dark backdrop to force focus.

### Dynamic Themes
The package includes built-in visual themes for the panel itself.

```php
'theme' => 'glass', // options: 'default', 'dark', 'glass', 'minimal', 'neon', 'soft'
'theme_switcher' => true, // Allows the user to change the theme dynamically in the UI
```

### Screen Reader & Voices
Control the native Web Speech API integration.

```php
'read_page'       => true,
'voice_selector'  => true, // Shows a dropdown of available system voices
'voice_languages' => ['en'], // Filter voices by language (e.g., ['en', 'hi']). Leave empty [] for all.
```

---

## 🎨 Custom CSS & Overrides

The widget uses strictly scoped, BEM-style CSS classes. You can easily override anything in your own application's stylesheet.

### Overriding Widget Styles
If you want to customize the trigger button or panel dimensions:

```css
/* Change the floating trigger button size and position */
#accessibility-widget .acc-trigger {
    width: 60px !important;
    height: 60px !important;
    bottom: 30px !important;
    right: 30px !important;
}

/* Change the active feature button color */
#accessibility-widget .acc-btn.is-active {
    background: #4f46e5 !important;
    border-color: #4f46e5 !important;
}
```

### Overriding Feature Behaviors
When a user activates an accessibility feature, a specific class is applied directly to the `<body>` (or `<html>` for global filters). You can write custom rules targeting these classes to adjust how the feature interacts with your specific site design.

```css
/* Customizing the High Contrast mode */
body.acc-high-contrast {
    background-color: #000 !important;
}
body.acc-high-contrast p {
    color: #ffcc00 !important;
}

/* Customizing the Enhanced Focus Ring */
body.acc-enhanced-focus *:focus-visible {
    outline: 4px dashed #ff0000 !important;
    outline-offset: 4px !important;
}
```

---

## 📋 Full Feature List

| Feature | Category | Description |
|---|---|---|
| **Font Size** | Text | Increase or decrease the global text size dynamically. |
| **High Contrast** | Color | Enforces a dark background with bright yellow text for readability. |
| **Color Blindness** | Color | True SVG filters for Protanopia (Red), Deuteranopia (Green), & Tritanopia (Blue). |
| **Grayscale** | Color | Removes all colors, rendering the site in black and white. |
| **Invert Colors** | Color | Mathematically inverts all colors on the site for light sensitivity. |
| **Dyslexia Font** | Text | Overrides fonts to a heavier, dyslexia-friendly typeface. |
| **Text Spacing** | Text | Increases letter and word tracking for easier reading. |
| **Line Height** | Text | Increases vertical spacing between lines. |
| **Reading Mask** | Focus | A horizontal "window" that follows the cursor, dimming the rest of the page. |
| **Calm Mode** | Focus | Instantly stops all CSS animations, transitions, and smooth scrolling. |
| **Enhanced Focus** | Focus | Renders a massive, high-contrast outline on keyboard navigation elements. |
| **Highlight Links** | Focus | Places a high-contrast background highlight behind all hyperlinks. |
| **Highlight Headings**| Focus | Places a high-contrast background highlight behind all h1-h6 tags. |
| **Big Cursor** | Focus | Replaces the default mouse cursor with a large, high-contrast pointer. |
| **Hide Images** | Focus | Completely hides all images and videos to reduce visual clutter. |
| **Read Page** | Speech | Reads the entire page text content aloud automatically. |
| **Read Selected** | Speech | Reads out any text the user highlights with their mouse. |
| **Hover Speech** | Speech | Reads out any element the user hovers their mouse over. |
| **Stop Reading** | Speech | Instantly halts any active text-to-speech reading. |
