<?php

declare(strict_types=1);

return [

    /*
    |--------------------------------------------------------------------------
    | Colors
    |--------------------------------------------------------------------------
    */
    'colors' => [
        'primary' => '#00205b',
        'hover-primary' => '#00143a',
        'secondary' => '#ff7402',
        'hover-secondary' => '#e06600',
        'background' => '#ffffff',
    ],

    /*
    |--------------------------------------------------------------------------
    | UI Theme
    |--------------------------------------------------------------------------
    */
    'theme' => 'default',

    /*
    |--------------------------------------------------------------------------
    | Trigger Button Position
    |--------------------------------------------------------------------------
    */
    'position' => 'bottom-right',

    /*
    |--------------------------------------------------------------------------
    | Store Settings
    |--------------------------------------------------------------------------
    */
    'store_settings' => true,

    /*
    |--------------------------------------------------------------------------
    | Accessibility Features
    |--------------------------------------------------------------------------
    */
    'features' => [

        /*
        |--------------------------------------------------------------------------
        | FONT
        |--------------------------------------------------------------------------
        */
        'font_size' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => true,
                'modifiers' => ['alt'],
                'keys' => [
                    'up' => ']',
                    'down' => '[',
                ],
            ],
        ],

        /*
        |--------------------------------------------------------------------------
        | COLORS
        |--------------------------------------------------------------------------
        */
        'high_contrast' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => true,
                'modifiers' => ['alt'],
                'key' => 'c',
            ],
        ],

        'cb_protanopia' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => true,
                'modifiers' => ['alt'],
                'key' => '1',
            ],
        ],

        'cb_deuteranopia' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => true,
                'modifiers' => ['alt'],
                'key' => '2',
            ],
        ],

        'cb_tritanopia' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => true,
                'modifiers' => ['alt'],
                'key' => '3',
            ],
        ],

        'grayscale' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => true,
                'modifiers' => ['alt'],
                'key' => 'g',
            ],
        ],

        'invert_colors' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => true,
                'modifiers' => ['alt'],
                'key' => 'i',
            ],
        ],

        /*
        |--------------------------------------------------------------------------
        | TEXT
        |--------------------------------------------------------------------------
        */
        'dyslexia_font' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => true,
                'modifiers' => ['alt'],
                'key' => 'f',
            ],
        ],

        'text_spacing' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => true,
                'modifiers' => ['alt'],
                'key' => 's',
            ],
        ],

        'line_height' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => true,
                'modifiers' => ['alt'],
                'key' => 'l',
            ],
        ],

        'underline_links' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => true,
                'modifiers' => ['alt'],
                'key' => 'u',
            ],
        ],

        /*
        |--------------------------------------------------------------------------
        | CONTENT & FOCUS
        |--------------------------------------------------------------------------
        */
        'skip_to_content' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => false,
            ],
        ],

        'focus_mode' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => true,
                'modifiers' => ['alt'],
                'key' => 'm',
            ],
        ],

        'reading_mask' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => true,
                'modifiers' => ['alt'],
                'key' => 'b',
            ],
        ],

        'highlight_links' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => true,
                'modifiers' => ['alt'],
                'key' => 'h',
            ],
        ],

        'highlight_headings' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => false,
            ],
        ],

        'big_cursor' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => true,
                'modifiers' => ['alt'],
                'key' => 'k',
            ],
        ],

        'hide_images' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => true,
                'modifiers' => ['alt'],
                'key' => 'o',
            ],
        ],

        'stop_animations' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => true,
                'modifiers' => ['alt'],
                'key' => 'q',
            ],
        ],

        'enhanced_focus' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => true,
                'modifiers' => ['alt'],
                'key' => 'e',
            ],
        ],

        /*
        |--------------------------------------------------------------------------
        | SCREEN READER
        |--------------------------------------------------------------------------
        */
        'read_page' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => true,
                'modifiers' => ['alt'],
                'key' => 'r',
            ],
        ],

        'read_selected' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => true,
                'modifiers' => ['alt'],
                'key' => 'x',
            ],
        ],

        'hover_speech' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => true,
                'modifiers' => ['alt'],
                'key' => 'w',
            ],
        ],

        'stop_reading' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => true,
                'modifiers' => ['alt'],
                'key' => 'z',
            ],
        ],

        'voice_selector' => [
            'enabled' => true,
            'shortcuts' => [
                'enabled' => true,
                'modifiers' => ['alt'],
                'key' => 'v',
            ],
        ],

        'voice_languages' => ['en'],

        /*
        |--------------------------------------------------------------------------
        | PANEL OPTIONS
        |--------------------------------------------------------------------------
        */
        'panel_layout' => 'right_drawer',
        'theme_switcher' => true,
    ],

    /*
    |--------------------------------------------------------------------------
    | Global Widget Shortcuts
    |--------------------------------------------------------------------------
    */
    'global_shortcuts' => [

        'toggle_panel' => [
            'enabled' => true,
            'modifiers' => ['alt'],
            'key' => 'a',
        ],

        'reset_settings' => [
            'enabled' => true,
            'modifiers' => ['alt'],
            'key' => '0',
        ],
    ],
];
