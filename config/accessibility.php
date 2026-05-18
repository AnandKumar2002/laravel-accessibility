<?php

declare(strict_types=1);

return [

    /*
    |--------------------------------------------------------------------------
    | Colors
    |--------------------------------------------------------------------------
    | These are applied as CSS variables to the widget automatically.
    | Override in your own CSS if you need more control.
    |
    |   --acc-primary         = header background, section labels
    |   --acc-hover-primary   = hover state for primary elements
    |   --acc-secondary       = trigger button, active state, reset bar
    |   --acc-hover-secondary = hover state for trigger button, reset button
    |   --acc-bg              = panel background
    */
    'colors' => [
        'primary'         => '#00205b',
        'hover-primary'   => '#00143a',
        'secondary'       => '#ff7402',
        'hover-secondary' => '#e06600',
        'background'      => '#ffffff',
    ],

    /*
    |--------------------------------------------------------------------------
    | UI Theme
    |--------------------------------------------------------------------------
    | Choose the default visual style of the toolbar panel.
    | Options: 'default', 'dark', 'glass', 'minimal', 'neon', 'soft'
    */
    'theme' => 'default',

    /*
    |--------------------------------------------------------------------------
    | Trigger Button Position
    |--------------------------------------------------------------------------
    | Where the floating accessibility button is anchored.
    | Options: 'bottom-right', 'bottom-left', 'top-right', 'top-left'
    |
    | Set to `false` or `'inline'` to render the button exactly where you
    | place the @accessibility directive, allowing full custom CSS positioning.
    |
    | Example of customizing an inline button:
    |
    | <div class="flex justify-center mt-2">
    |     <style>
    |         <-- Customizing the inline trigger button -->
    |         #accessibility-widget .acc-trigger {
    |             width: auto !important; height: auto !important;
    |             border-radius: 6px !important; padding: 8px 16px !important;
    |             background-color: #f4f4f5 !important; color: #18181b !important;
    |             font-weight: 600 !important; font-size: 13px !important;
    |             box-shadow: none !important; border: 1px solid #e4e4e7 !important;
    |         }
    |         #accessibility-widget .acc-trigger:hover { background-color: #e4e4e7 !important; transform: none !important; }
    |         <-- Hide the default SVG and add custom text -->
    |         #accessibility-widget .acc-trigger svg { display: none !important; }
    |         #accessibility-widget .acc-trigger::after { content: "👋 Open Accessibility"; }
    |     </style>
    |     @accessibility
    | </div>
    */
    'position' => 'bottom-right',

    /*
    |--------------------------------------------------------------------------
    | Local Storage Persistence
    |--------------------------------------------------------------------------
    | Set to true to save user preferences (theme, font size, active features)
    | in their browser's localStorage so it persists across page reloads.
    */
    'store_settings' => true,

    /*
    |--------------------------------------------------------------------------
    | Enabled Features
    |--------------------------------------------------------------------------
    | Set true/false to show or hide each feature button in the toolbar.
    */
    'features' => [
        // Font
        'font_size'          => true, // Allows users to increase or decrease the text size globally

        // Colors
        'high_contrast'      => true, // Increases text and background contrast for better readability
        'cb_protanopia'      => true, // Adjusts colors for Red-Blind users
        'cb_deuteranopia'    => true, // Adjusts colors for Green-Blind users
        'cb_tritanopia'      => true, // Adjusts colors for Blue-Blind users
        'grayscale'          => true, // Removes all colors, rendering the site in black and white
        'invert_colors'      => true, // Inverts all colors on the site, useful for light sensitivity

        // Text
        'dyslexia_font'      => true, // Changes the site font to a Dyslexia-friendly, heavy-bottomed typeface
        'text_spacing'       => true, // Increases the letter and word spacing for easier reading
        'line_height'        => true, // Increases the vertical spacing between lines of text
        'underline_links'    => true, // Forces all hyperlinks to have a visible underline

        // Content
        'skip_to_content'    => true, // Injects a keyboard-accessible hidden link at the top of the page
        'focus_mode'         => true, // Dims surrounding content and highlights the hovered reading area
        'reading_mask'       => true, // Horizontal focus bar that follows the cursor to aid reading focus
        'highlight_links'    => true, // Places a high-contrast background highlight behind all hyperlinks
        'highlight_headings' => true, // Places a high-contrast background highlight behind all headings
        'big_cursor'         => true, // Replaces the default mouse cursor with a large, high-contrast pointer
        'hide_images'        => true, // Hides all images to reduce visual clutter and distractions
        'stop_animations'    => true, // Calm mode: stops all CSS animations, gifs, and auto-playing videos
        'enhanced_focus'     => true, // Prominent keyboard focus ring for easier tab-key navigation

        // Screen Reader (uses browser Web Speech API)
        'read_page'          => true, // Reads the entire page text content aloud automatically
        'read_selected'      => true, // Reads out any text the user highlights with their mouse
        'hover_speech'       => true, // Reads out any element the user hovers their mouse over
        'stop_reading'       => true, // Instantly halts any active text-to-speech reading
        'voice_selector'     => true, // Allows the user to choose their preferred voice/speaker
        'voice_languages'    => ['en'], // Array of language codes to show (e.g., ['en', 'hi']). Leave empty [] to show all.

        // Widget Options
        'panel_layout'       => 'right_drawer', // options: 'right_drawer', 'left_drawer', 'bottom_sheet', 'center_modal'
        'theme_switcher'     => true, // Allows user to change the visual theme of the accessibility panel itself
    ],

];
