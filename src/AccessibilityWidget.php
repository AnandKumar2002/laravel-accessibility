<?php

declare(strict_types=1);

namespace Parvion\Accessibility;

class AccessibilityWidget
{
    /**
     * Render the full widget HTML: CSS link + script tag + the widget div.
     * Place @accessibility in your Blade layout, or use the HTML snippet directly.
     */
    public static function render(): string
    {
        $config   = config('accessibility', []);
        $colors   = $config['colors']   ?? [];
        $features = $config['features'] ?? [];
        $position = $config['position'] ?? 'bottom-right';
        $theme    = $config['theme']    ?? 'default';
        $store    = isset($config['store_settings']) ? $config['store_settings'] : true;

        if ($position === false || $position === 'false') {
            $position = 'inline';
        }

        $colorsJson   = htmlspecialchars(json_encode($colors),   ENT_QUOTES, 'UTF-8');
        $featuresJson = htmlspecialchars(json_encode($features), ENT_QUOTES, 'UTF-8');

        $cssUrl = route('parvion.accessibility.css');
        $jsUrl  = route('parvion.accessibility.js');

        return <<<HTML
<link rel="stylesheet" href="{$cssUrl}">
<div id="accessibility-widget"
     data-theme="{$theme}"
     data-store="{$store}"
     data-colors="{$colorsJson}"
     data-features="{$featuresJson}"
     data-position="{$position}">
</div>
<script src="{$jsUrl}" defer></script>
HTML;
    }
}
