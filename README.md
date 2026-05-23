# Parvion Accessibility

[![PHP Version](https://img.shields.io/badge/php-%5E8.1-8892BF)](https://php.net)
[![Laravel](https://img.shields.io/badge/laravel-10%20%7C%2011%20%7C%2012%20%7C%2013-FF2D20?logo=laravel&logoColor=white)](https://laravel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-22c55e.svg)](LICENSE)
[![Changelog](https://img.shields.io/badge/changelog-CHANGELOG.md-0ea5e9)](CHANGELOG.md)
[![Contributing](https://img.shields.io/badge/contributing-CONTRIBUTING.md-f59e0b)](CONTRIBUTING.md)

An enterprise-grade, zero-dependency, highly configurable accessibility toolbar for PHP applications.

Provide your users with critical cognitive, visual, and motor accessibility tools instantly. Designed to integrate seamlessly into any PHP, Laravel, Vue, Livewire, or static HTML application with **zero build-time overhead**.

---

## ⚡ Features at a Glance

- **Zero Dependencies:** Pure Vanilla JS and scoped CSS. No Vue, React, Tailwind, NPM, or Vite required.
- **Keyboard Shortcut System:** Every feature has a configurable keyboard shortcut with full modifier support (`alt`, `ctrl`, `shift`, `meta`).
- **Tooltip Support:** Hovering any button shows the configured shortcut (e.g. `Alt+C`).
- **State Persistence:** User preferences are automatically saved to `localStorage` across sessions.
- **Dynamic Layouts:** Right Drawer, Left Drawer, Bottom Sheet, or Center Modal.
- **Advanced Screen Reader:** Web Speech API integration with multi-voice support and language filtering.
- **Cognitive Support:** Reading Masks, Calm Mode (Stop Animations), and Dyslexia Fonts.
- **Visual Filters:** Mathematical SVG matrix filters for Protanopia, Deuteranopia, and Tritanopia color blindness.
- **SPA Support:** Automatically re-initialises on `livewire:navigated` and `turbo:render` events.

---

## 🚀 Installation

### Laravel (Recommended)

```bash
composer require parvion/accessibility
```

Publish the configuration file:

```bash
php artisan vendor:publish --tag=accessibility-config
```

### Standard PHP / Static HTML

Download the assets from the `assets/` directory and host them on your server. See the **Static HTML Usage** section below.

---

## 🛠️ Usage

### Blade Directive

Place `@accessibility` anywhere in your layout file (e.g. `resources/views/layouts/app.blade.php`):

```blade
<body>
    {{-- Your content --}}

    @accessibility
</body>
```

The directive automatically injects the CSS, widget HTML, and deferred JavaScript via framework routes.

### Static HTML

Link the stylesheet in your `<head>` and load the script with `defer`:

```html
<link rel="stylesheet" href="/assets/accessibility.css">
<script src="/assets/accessibility.js" defer></script>
```

Place the widget `<div>` anywhere inside `<body>`:

```html
<div id="accessibility-widget"
    data-theme="default"
    data-store="true"
    data-position="bottom-right"
    data-colors='{"primary":"#00205b","hover-primary":"#00143a","secondary":"#ff7402","hover-secondary":"#e06600","background":"#ffffff"}'
    data-features='{"font_size":{"enabled":true},"high_contrast":{"enabled":true},"panel_layout":"right_drawer","theme_switcher":true}'
    data-global-shortcuts='{"toggle_panel":{"enabled":true,"modifiers":["alt"],"key":"a"},"reset_settings":{"enabled":true,"modifiers":["alt"],"key":"0"}}'>
</div>
```

---

## ⚙️ Configuration

All options live in `config/accessibility.php`.

### Colors

Override the widget's CSS variables to match your brand:

```php
'colors' => [
    'primary'         => '#00205b',  // Header background, section labels
    'hover-primary'   => '#00143a',  // Hover state for primary elements
    'secondary'       => '#ff7402',  // Trigger button, active state, reset bar
    'hover-secondary' => '#e06600',  // Hover state for secondary elements
    'background'      => '#ffffff',  // Panel background
],
```

### Theme

```php
'theme' => 'default', // Options: 'default', 'dark', 'glass', 'minimal', 'neon', 'soft'
```

### Position

```php
'position' => 'bottom-right', // Options: 'bottom-right', 'bottom-left', 'top-right', 'top-left'
// Set to false or 'inline' to render the button exactly where @accessibility is placed.
```

### Store Settings

```php
'store_settings' => true, // Save user preferences to localStorage across page reloads
```

### Panel Layout

```php
'panel_layout' => 'right_drawer', // Options: 'right_drawer', 'left_drawer', 'bottom_sheet', 'center_modal'
```

- **`right_drawer` / `left_drawer`:** Slides in from the side.
- **`bottom_sheet`:** Slides up from the bottom. Ideal for mobile.
- **`center_modal`:** Fades in at the center with a backdrop.

### Theme Switcher

```php
'theme_switcher' => true, // Show theme selector UI inside the panel
```

---

## ⌨️ Keyboard Shortcuts

Every feature supports a configurable keyboard shortcut. The engine reads all shortcuts from config — nothing is hardcoded in the JavaScript.

### Shortcut Config Shape

**Single-key features** (toggle on/off):
```php
'high_contrast' => [
    'enabled' => true,
    'shortcuts' => [
        'enabled'   => true,
        'modifiers' => ['alt'],   // 'ctrl', 'alt', 'shift', 'meta' — use an array for multiple
        'key'       => 'c',
    ],
],
```

**Directional features** (font size uses up/down keys):
```php
'font_size' => [
    'enabled' => true,
    'shortcuts' => [
        'enabled'   => true,
        'modifiers' => ['alt'],
        'keys' => [
            'up'   => ']',   // Alt+] increases font
            'down' => '[',   // Alt+[ decreases font
        ],
    ],
],
```

To **disable** a shortcut, set `'enabled' => false`:
```php
'skip_to_content' => [
    'enabled' => true,
    'shortcuts' => ['enabled' => false],
],
```

### Global Widget Shortcuts

```php
'global_shortcuts' => [
    'toggle_panel' => [
        'enabled'   => true,
        'modifiers' => ['alt'],
        'key'       => 'a',    // Alt+A — open / close the panel
    ],
    'reset_settings' => [
        'enabled'   => true,
        'modifiers' => ['alt'],
        'key'       => '0',    // Alt+0 — reset all settings
    ],
],
```

### Default Shortcut Reference

| Feature | Shortcut | Feature | Shortcut |
|---|---|---|---|
| **Toggle Panel** | `Alt+A` | **Reset All** | `Alt+0` |
| **Font Size ↑** | `Alt+]` | **Font Size ↓** | `Alt+[` |
| **High Contrast** | `Alt+C` | **Grayscale** | `Alt+G` |
| **Invert Colors** | `Alt+I` | **Protanopia** | `Alt+1` |
| **Deuteranopia** | `Alt+2` | **Tritanopia** | `Alt+3` |
| **Dyslexia Font** | `Alt+F` | **Text Spacing** | `Alt+S` |
| **Line Height** | `Alt+L` | **Underline Links** | `Alt+U` |
| **Focus Mode** | `Alt+M` | **Reading Mask** | `Alt+B` |
| **Highlight Links** | `Alt+H` | **Big Cursor** | `Alt+K` |
| **Hide Images** | `Alt+O` | **Calm Mode** | `Alt+Q` |
| **Enhanced Focus** | `Alt+E` | **Read Page** | `Alt+R` |
| **Read Selected** | `Alt+X` | **Hover Speech** | `Alt+W` |
| **Stop Reading** | `Alt+Z` | **Voice Selector** | `Alt+V` |

> **Note:** Shortcuts are skipped when focus is inside an `<input>`, `<textarea>`, or `<select>` element.

---

## 🔊 Screen Reader & Voices

```php
'read_page'      => ['enabled' => true, 'shortcuts' => ['enabled' => true, 'modifiers' => ['alt'], 'key' => 'r']],
'read_selected'  => ['enabled' => true, 'shortcuts' => ['enabled' => true, 'modifiers' => ['alt'], 'key' => 'x']],
'hover_speech'   => ['enabled' => true, 'shortcuts' => ['enabled' => true, 'modifiers' => ['alt'], 'key' => 'w']],
'stop_reading'   => ['enabled' => true, 'shortcuts' => ['enabled' => true, 'modifiers' => ['alt'], 'key' => 'z']],
'voice_selector' => ['enabled' => true, 'shortcuts' => ['enabled' => true, 'modifiers' => ['alt'], 'key' => 'v']],
'voice_languages' => ['en'],  // Filter voices by language. Empty array [] shows all voices.
```

---

## 🎨 Custom CSS & Overrides

The widget uses strictly scoped CSS. All classes are prefixed with `acc-`. Override anything in your own stylesheet:

```css
/* Trigger button */
#accessibility-widget .acc-trigger {
    width: 60px !important;
    height: 60px !important;
    bottom: 30px !important;
    right: 30px !important;
}

/* Active feature button */
#accessibility-widget .acc-btn.is-active {
    background: #4f46e5 !important;
    border-color: #4f46e5 !important;
}
```

### Feature Body Classes

When a feature is active, a class is applied to `<body>` (or `<html>` for global filters). Use these to write custom overrides:

```css
/* High Contrast customisation */
body.acc-high-contrast { background-color: #000 !important; }
body.acc-high-contrast p { color: #ffcc00 !important; }

/* Enhanced Focus Ring */
body.acc-enhanced-focus *:focus-visible {
    outline: 4px dashed #ff0000 !important;
    outline-offset: 4px !important;
}
```

| Feature | Class Applied |
|---|---|
| High Contrast | `body.acc-high-contrast` |
| Grayscale | `html.acc-grayscale` |
| Invert Colors | `html.acc-invert` |
| Protanopia | `html.acc-cb-protanopia` |
| Deuteranopia | `html.acc-cb-deuteranopia` |
| Tritanopia | `html.acc-cb-tritanopia` |
| Dyslexia Font | `body.acc-dyslexia-font` |
| Text Spacing | `body.acc-text-spacing` |
| Line Height | `body.acc-line-height` |
| Underline Links | `body.acc-underline-links` |
| Reading Mask | `body.acc-reading-mask` |
| Focus Mode | `body.acc-focus-mode` |
| Highlight Links | `body.acc-highlight-links` |
| Highlight Headings | `body.acc-highlight-headings` |
| Big Cursor | `body.acc-big-cursor` |
| Hide Images | `body.acc-hide-images` |
| Stop Animations | `body.acc-stop-animations` |
| Enhanced Focus | `body.acc-enhanced-focus` |

---

## 📋 Full Feature List

| Feature | Category | Default Shortcut | Description |
|---|---|---|---|
| **Font Size** | Text | `Alt+]` / `Alt+[` | Increase or decrease global text size dynamically. |
| **High Contrast** | Color | `Alt+C` | Dark background with bright yellow text for maximum readability. |
| **Protanopia** | Color | `Alt+1` | SVG matrix filter for red-blind color vision. |
| **Deuteranopia** | Color | `Alt+2` | SVG matrix filter for green-blind color vision. |
| **Tritanopia** | Color | `Alt+3` | SVG matrix filter for blue-blind color vision. |
| **Grayscale** | Color | `Alt+G` | Removes all colors, rendering the site in black and white. |
| **Invert Colors** | Color | `Alt+I` | Mathematically inverts all colors for light sensitivity. |
| **Dyslexia Font** | Text | `Alt+F` | Overrides fonts to a heavier, dyslexia-friendly typeface. |
| **Text Spacing** | Text | `Alt+S` | Increases letter and word tracking for easier reading. |
| **Line Height** | Text | `Alt+L` | Increases vertical spacing between lines. |
| **Underline Links** | Text | `Alt+U` | Forces underlines on all hyperlinks. |
| **Skip to Content** | Focus | — | Injects a skip link for keyboard navigation. |
| **Focus Mode** | Focus | `Alt+M` | Highlights the block-level element under the cursor. |
| **Reading Mask** | Focus | `Alt+B` | A horizontal window that follows the cursor, dimming the rest of the page. |
| **Highlight Links** | Focus | `Alt+H` | Places a high-contrast highlight behind all hyperlinks. |
| **Highlight Headings** | Focus | — | Places a high-contrast highlight behind all headings. |
| **Big Cursor** | Focus | `Alt+K` | Replaces the default cursor with a large, high-contrast pointer. |
| **Hide Images** | Focus | `Alt+O` | Hides all images and videos to reduce visual clutter. |
| **Calm Mode** | Focus | `Alt+Q` | Stops all CSS animations, transitions, and smooth scrolling. |
| **Enhanced Focus** | Focus | `Alt+E` | Renders a large, high-contrast outline on keyboard-focused elements. |
| **Read Page** | Speech | `Alt+R` | Reads the entire page text content aloud. |
| **Read Selected** | Speech | `Alt+X` | Reads any text the user highlights with their mouse. |
| **Hover Speech** | Speech | `Alt+W` | Reads any element the user hovers over. |
| **Stop Reading** | Speech | `Alt+Z` | Instantly halts any active text-to-speech. |
| **Voice Selector** | Speech | `Alt+V` | Shows a dropdown of available system voices. |

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.
