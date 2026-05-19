/**
 * Parvion Accessibility Toolbar
 * Self-contained IIFE — no dependencies, no build step required.
 */
(function () {
    'use strict';

    // ── SVG Icons ────────────────────────────────────────────────
    const I = {
        accessibility: '<svg viewBox="0 0 122.88 122.88" fill="white" width="28" height="28"><path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.21,61.21,0,0,1,61.44,0Zm-.39,74.18L52.1,98.91a5,5,0,0,1-9.4-3.41l6.24-17.28a26.3,26.3,0,0,0,1.17-4,40.64,40.64,0,0,0,.54-4.18c.24-2.53.41-5.27.54-7.9s.22-5.18.29-7.29c.09-2.63-.62-2.8-2.73-3.3l-.44-.1-18-3.39A5,5,0,0,1,27.08,46a5,5,0,0,1,5.05-7.74l19.34,3.63c.77.07,1.52.16,2.31.25a57.64,57.64,0,0,0,7.18.53A81.13,81.13,0,0,0,69.9,42c.9-.1,1.75-.21,2.6-.29l18.25-3.42A5,5,0,0,1,94.5,39a5,5,0,0,1-2,9.07L75.15,51.37c-.58.13-1.1.22-1.56.29-1.82.31-2.72.47-2.61,3.06.08,1.89.31,4.15.61,6.51.35,2.77.81,5.71,1.29,8.4.31,1.77.6,3.19,1,4.55s.79,2.75,1.39,4.42l6.11,16.9a5,5,0,0,1-9.4,3.41L63,74.23,62,72.4l-1,1.78Zm.39-53.52a8.83,8.83,0,1,1-6.24,2.59,8.79,8.79,0,0,1,6.24-2.59Zm36.35,4.43a51.42,51.42,0,1,0,15,36.35,51.27,51.27,0,0,0-15-36.35Z"/></svg>',
        close: svg('M18 6 6 18M6 6l12 12'),
        reset: svg('M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8M3 3v5h5'),
        minus: svg('M5 12h14'),
        plus: svg('M12 5v14M5 12h14'),
        contrast: svg('M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 0v20M12 12h10'),
        palette: svg('M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.44-.18-.84-.44-1.13-.29-.29-.44-.65-.44-1.13A1.64 1.64 0 0 1 14.44 18h1.99c3.05 0 5.56-2.5 5.56-5.56C21.97 6.01 17.46 2 12 2z'),
        droplet: svg('M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z'),
        font: svg('M4 7V4h16v3M9 20h6M12 4v16'),
        textW: svg('M21 6H3M21 12H3M21 18H3M12 6v12'),
        lineH: svg('M12 3v18M3 6h7M3 12h7M3 18h7M17 6h4M17 12h4M17 18h4'),
        link: svg('M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'),
        highlight: svg('M9 11l-6 6v3h9l3-3M22 12l-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4'),
        heading: svg('M6 12h12M6 20V4M18 20V4'),
        cursor: svg('M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3zM13 13l6 6'),
        image: svg('M3 3h18v14H3zM8 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM21 17l-5-5-4 4-2-2-4 4'),
        volume: svg('M11 5 6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14'),
        comment: svg('M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'),
        pointer: svg('M18 11V6a2 2 0 0 0-4 0v0M14 10V4a2 2 0 0 0-4 0v2M10 10.5V6a2 2 0 0 0-4 0v8M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15'),
        stop: svg('M6 6h12v12H6z'),
        mask: svg('M3 9h18v6H3z M3 4h18 M3 20h18'),
        calm: svg('M11 20A7 7 0 0 1 14 2c7 0 7 7 7 7s0 7-7 7a7 7 0 0 1-3-1v5z'),
        focus: svg('M3 3h18v18H3z M8 8h8v8H8z'),
        crosshair: svg('M12 2v4M12 18v4M2 12h4M18 12h4M12 8a4 4 0 1 0 0 8 4 4 0 1 0 0-8z'),
        colorBlind: svg('M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'),
    };

    function svg(d) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><path d="' + d + '"/></svg>';
    }

    // ── Constants ─────────────────────────────────────────────────
    var STORAGE_KEY = 'parvion_acc_v1';
    var HOVER_TAGS = [
        // Headings & Paragraphs
        'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6',

        // Lists
        'LI', 'UL', 'OL', 'DT', 'DD', 'DL',

        // Tables
        'TD', 'TH', 'TR', 'THEAD', 'TBODY', 'TFOOT', 'CAPTION',

        // Formatting & Phrases
        'SPAN', 'A', 'B', 'STRONG', 'I', 'EM', 'MARK', 'SMALL', 'SUB', 'SUP', 'CODE', 'PRE', 'TIME', 'ADDRESS',

        // Forms & Interactive
        'LABEL', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT', 'OPTION', 'LEGEND', 'FIELDSET', 'SUMMARY', 'DETAILS',

        // Sections & Layout
        'DIV', 'SECTION', 'ARTICLE', 'ASIDE', 'NAV', 'HEADER', 'FOOTER', 'MAIN',

        // Media Descriptions
        'FIGCAPTION', 'BLOCKQUOTE', 'CITE', 'ABBR', 'IMG'
    ];

    // ── State ─────────────────────────────────────────────────────
    var state = {
        fontSize: 16,
        theme: 'default',
        activeFeatures: {},
        speech: window.speechSynthesis || null,
        isSpeaking: false,
        hoverActive: false,
        hoverTimeout: null,
        lastHovered: null,
        readSelectedOn: false,
        voiceURI: null,
        voiceLanguages: [],
        storeSettings: true,
    };

    // ── Bootstrap ─────────────────────────────────────────────────
    function init() {
        var el = document.getElementById('accessibility-widget');
        if (!el || el.dataset.init) return;

        // Read config from data attributes
        var features        = parseJSON(el.dataset.features)        || {};
        var colors          = parseJSON(el.dataset.colors)          || {};
        var globalShortcuts = parseJSON(el.dataset.globalShortcuts) || {};
        var position        = el.dataset.position || 'bottom-right';
        var layout          = features.panel_layout || 'right_drawer';

        el.classList.add('layout-' + layout);
        state.storeSettings  = el.dataset.store !== 'false' && el.dataset.store !== '0' && el.dataset.store !== '';
        state.voiceLanguages = Array.isArray(features.voice_languages) ? features.voice_languages : [];

        // Skip Link Injection
        if (features.skip_to_content) {
            injectSkipLink();
        }

        // Load saved state from localStorage (overrides default theme if saved)
        loadState();

        var theme = state.theme !== 'default' ? state.theme : (el.dataset.theme || 'default');
        state.theme = theme;

        // Apply theme class
        el.classList.add('theme-' + theme);

        // Apply CSS variables from config
        applyColors(colors);

        // Inject global DOM elements (SVG filters, Reading Mask)
        injectGlobalElements();

        // Build the widget HTML
        el.innerHTML = buildTrigger(position) + buildPanel(features) + '<div class="acc-backdrop"></div>';

        // Apply stored features
        restoreState();

        // Bind all UI events
        bindEvents(el, features);

        // Bind all keyboard shortcuts (centralized)
        bindShortcuts(el, features, globalShortcuts);

        el.dataset.init = '1';
    }

    // ── Color Variables ───────────────────────────────────────────
    function applyColors(colors) {
        var r = document.documentElement;
        if (colors.primary) r.style.setProperty('--acc-primary', colors.primary);
        var hoverPrimary = colors['hover-primary'] || colors.hover_primary;
        if (hoverPrimary) r.style.setProperty('--acc-hover-primary', hoverPrimary);
        if (colors.secondary) r.style.setProperty('--acc-secondary', colors.secondary);
        var hoverSecondary = colors['hover-secondary'] || colors.hover_secondary;
        if (hoverSecondary) r.style.setProperty('--acc-hover-secondary', hoverSecondary);
        if (colors.background) r.style.setProperty('--acc-bg', colors.background);
    }

    // ── HTML Builders ─────────────────────────────────────────────
    function buildTrigger(position) {
        var posClass = position === 'inline' ? 'pos-inline' : 'pos-' + position;
        return '<button type="button" class="acc-trigger ' + posClass + '" aria-label="Open Accessibility Settings" aria-expanded="false" aria-controls="acc-panel">' +
            I.accessibility +
            '</button>';
    }

    function buildPanel(f) {
        var body = '';

        // Font Size
        if (f.font_size) {
            var fsc = f.font_size.shortcuts;
            var fLabelUp   = buildFontShortcutLabel(fsc, 'up');
            var fLabelDown = buildFontShortcutLabel(fsc, 'down');
            body += section('Font Size',
                '<div class="acc-font-row">' +
                btn('font-decrease', I.minus + ' A', 'acc-font-btn', fLabelDown ? 'Decrease Font (' + fLabelDown + ')' : 'Decrease Font') +
                '<span class="acc-font-display">16px</span>' +
                btn('font-increase', 'A ' + I.plus, 'acc-font-btn', fLabelUp ? 'Increase Font (' + fLabelUp + ')' : 'Increase Font') +
                btn('font-reset', I.reset, 'acc-font-btn', 'Reset Font Size') +
                '</div>'
            );
        }

        // Colors
        var colorBtns = [];
        if (f.high_contrast)   colorBtns.push(featureBtn('acc-high-contrast',    I.contrast,   'High Contrast',  buildShortcutLabel(f.high_contrast.shortcuts)));
        if (f.grayscale)       colorBtns.push(featureBtn('acc-grayscale',         I.palette,    'Grayscale',      buildShortcutLabel(f.grayscale.shortcuts)));
        if (f.invert_colors)   colorBtns.push(featureBtn('acc-invert',            I.droplet,    'Invert',         buildShortcutLabel(f.invert_colors.shortcuts)));
        if (f.cb_protanopia)   colorBtns.push(featureBtn('acc-cb-protanopia',     I.colorBlind, 'Protanopia',     buildShortcutLabel(f.cb_protanopia.shortcuts)));
        if (f.cb_deuteranopia) colorBtns.push(featureBtn('acc-cb-deuteranopia',   I.colorBlind, 'Deuteranopia',   buildShortcutLabel(f.cb_deuteranopia.shortcuts)));
        if (f.cb_tritanopia)   colorBtns.push(featureBtn('acc-cb-tritanopia',     I.colorBlind, 'Tritanopia',     buildShortcutLabel(f.cb_tritanopia.shortcuts)));
        if (colorBtns.length) body += section('Colors', '<div class="acc-grid">' + colorBtns.join('') + '</div>');

        // Text
        var textBtns = [];
        if (f.dyslexia_font)   textBtns.push(featureBtn('acc-dyslexia-font',   I.font,   'Dyslexia Font',   buildShortcutLabel(f.dyslexia_font.shortcuts)));
        if (f.text_spacing)    textBtns.push(featureBtn('acc-text-spacing',    I.textW,  'Text Spacing',    buildShortcutLabel(f.text_spacing.shortcuts)));
        if (f.line_height)     textBtns.push(featureBtn('acc-line-height',     I.lineH,  'Line Height',     buildShortcutLabel(f.line_height.shortcuts)));
        if (f.underline_links) textBtns.push(featureBtn('acc-underline-links', I.link,   'Underline Links', buildShortcutLabel(f.underline_links.shortcuts)));
        if (textBtns.length) body += section('Text', '<div class="acc-grid">' + textBtns.join('') + '</div>');

        // Content & Focus
        var contentBtns = [];
        if (f.skip_to_content)    contentBtns.push(featureBtn('acc-skip-activate',      I.link,      'Skip to Content', buildShortcutLabel(f.skip_to_content.shortcuts)));
        if (f.highlight_links)    contentBtns.push(featureBtn('acc-highlight-links',    I.highlight, 'Highlight Links', buildShortcutLabel(f.highlight_links.shortcuts)));
        if (f.highlight_headings) contentBtns.push(featureBtn('acc-highlight-headings', I.heading,   'Headings',        buildShortcutLabel(f.highlight_headings.shortcuts)));
        if (f.big_cursor)         contentBtns.push(featureBtn('acc-big-cursor',         I.cursor,    'Big Cursor',      buildShortcutLabel(f.big_cursor.shortcuts)));
        if (f.hide_images)        contentBtns.push(featureBtn('acc-hide-images',        I.image,     'Hide Images',     buildShortcutLabel(f.hide_images.shortcuts)));
        if (f.reading_mask)       contentBtns.push(featureBtn('acc-reading-mask',       I.mask,      'Reading Mask',    buildShortcutLabel(f.reading_mask.shortcuts)));
        if (f.focus_mode)         contentBtns.push(featureBtn('acc-focus-mode',         I.crosshair, 'Focus Mode',      buildShortcutLabel(f.focus_mode.shortcuts)));
        if (f.stop_animations)    contentBtns.push(featureBtn('acc-stop-animations',    I.calm,      'Calm Mode',       buildShortcutLabel(f.stop_animations.shortcuts)));
        if (f.enhanced_focus)     contentBtns.push(featureBtn('acc-enhanced-focus',     I.focus,     'Enhanced Focus',  buildShortcutLabel(f.enhanced_focus.shortcuts)));
        if (contentBtns.length) body += section('Content & Focus', '<div class="acc-grid">' + contentBtns.join('') + '</div>');

        // Screen Reader
        var speechHtml = '';
        if (f.read_page)     speechHtml += speechBtn('read-page',    I.volume,  'Read Page',    buildShortcutLabel(f.read_page    && f.read_page.shortcuts));
        if (f.read_selected)  speechHtml += speechBtn('read-selected', I.comment, 'Read Selected', buildShortcutLabel(f.read_selected && f.read_selected.shortcuts));
        if (f.hover_speech)   speechHtml += speechBtn('hover-speech',  I.pointer, 'Hover Speech',  buildShortcutLabel(f.hover_speech  && f.hover_speech.shortcuts));
        if (f.stop_reading)   speechHtml += speechBtn('stop-reading',  I.stop,    'Stop Reading',  buildShortcutLabel(f.stop_reading  && f.stop_reading.shortcuts));
        if (f.voice_selector) {
            speechHtml += '<select id="acc-voice-select" class="acc-voice-select" style="grid-column: 1 / -1;" aria-label="Select Voice">' +
                '<option value="">Default Voice</option>' +
                '</select>';
        }

        if (speechHtml !== '') {
            body += section('Screen Reader', '<div class="acc-grid">' + speechHtml + '</div>');
        }

        // Theme Switcher
        if (f.theme_switcher) {
            var themes = ['default', 'dark', 'glass', 'minimal', 'neon', 'soft'];
            var themeBtns = themes.map(function (t) {
                var label = t.charAt(0).toUpperCase() + t.slice(1);
                return '<button type="button" class="acc-theme-btn" data-theme-val="' + t + '">' + label + '</button>';
            }).join('');

            body += section('Widget Theme', '<div class="acc-grid">' + themeBtns + '</div>');
        }

        return '<div id="acc-panel" class="acc-panel" role="dialog" aria-label="Accessibility Settings" aria-modal="true">' +
            '<div class="acc-header">' +
            '<span class="acc-header-title">' + I.accessibility + ' Accessibility</span>' +
            '<button type="button" class="acc-close" aria-label="Close">' + I.close + '</button>' +
            '</div>' +
            '<div class="acc-body">' + body + '</div>' +
            '<div class="acc-footer">' +
            '<button type="button" class="acc-reset" data-action="reset">' + I.reset + ' Reset All</button>' +
            '</div>' +
            '</div>';
    }

    function section(label, content) {
        return '<div><div class="acc-section-label">' + label + '</div>' + content + '</div>';
    }

    function featureBtn(feature, icon, label, tooltip) {
        var titleAttr = tooltip ? ' title="' + tooltip + '" aria-label="' + label + (tooltip ? ' (' + tooltip + ')' : '') + '"' : ' aria-label="' + label + '"';
        return '<button type="button" class="acc-btn" data-feature="' + feature + '" aria-pressed="false"' + titleAttr + '>' + icon + ' ' + label + '</button>';
    }

    function speechBtn(action, icon, label, tooltip) {
        var titleAttr = tooltip ? ' title="' + tooltip + '" aria-label="' + label + ' (' + tooltip + ')"' : ' aria-label="' + label + '"';
        return '<button type="button" class="acc-speech-btn" data-action="' + action + '"' + titleAttr + '>' + icon + ' ' + label + '</button>';
    }

    function btn(action, content, cls, tooltip) {
        var titleAttr = tooltip ? ' title="' + tooltip + '" aria-label="' + tooltip + '"' : '';
        return '<button type="button" class="' + cls + '" data-action="' + action + '"' + titleAttr + '>' + content + '</button>';
    }

    // ── Event Binding ─────────────────────────────────────────────
    function bindEvents(el, features) {
        var trigger = el.querySelector('.acc-trigger');
        var panel = el.querySelector('.acc-panel');
        var close = el.querySelector('.acc-close');

        // Toggle open/close
        trigger.addEventListener('click', function (e) {
            e.stopPropagation();
            var open = panel.classList.toggle('is-open');
            trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
            var backdrop = document.querySelector('#accessibility-widget .acc-backdrop');
            if (backdrop) {
                if (open) backdrop.classList.add('is-open');
                else backdrop.classList.remove('is-open');
            }
        });

        close.addEventListener('click', function (e) {
            e.stopPropagation();
            closePanel(trigger, panel);
        });

        document.addEventListener('click', function (e) {
            if (!el.contains(e.target)) closePanel(trigger, panel);
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && panel.classList.contains('is-open')) {
                closePanel(trigger, panel);
                trigger.focus();
            }
        });
        // Note: feature shortcuts & global shortcuts are registered by bindShortcuts()

        // Font controls
        el.querySelector('[data-action="font-increase"]').addEventListener('click', function (e) { e.stopPropagation(); changeFontSize(1); });
        el.querySelector('[data-action="font-decrease"]').addEventListener('click', function (e) { e.stopPropagation(); changeFontSize(-1); });
        el.querySelector('[data-action="font-reset"]').addEventListener('click', function (e) { e.stopPropagation(); resetFontSize(); });

        // Feature toggle buttons
        el.querySelectorAll('[data-feature]').forEach(function (b) {
            b.addEventListener('click', function (e) {
                e.stopPropagation();
                var feature = this.dataset.feature;

                // Mutually exclusive color blindness logic
                if (feature.startsWith('acc-cb-')) {
                    var isTurningOn = !state.activeFeatures[feature];
                    // Turn off other CB filters
                    ['acc-cb-protanopia', 'acc-cb-deuteranopia', 'acc-cb-tritanopia'].forEach(function (cb) {
                        delete state.activeFeatures[cb];
                        document.documentElement.classList.remove(cb);
                        var btn = el.querySelector('[data-feature="' + cb + '"]');
                        if (btn) { btn.classList.remove('is-active'); btn.setAttribute('aria-pressed', 'false'); }
                    });
                    if (isTurningOn) {
                        toggleFeature(feature, el, true); // Force on
                    } else {
                        save(); // Already turned off by the loop above
                    }
                } else {
                    toggleFeature(feature, el);
                }
            });
        });

        // Speech buttons
        var rp = el.querySelector('[data-action="read-page"]');
        var rs = el.querySelector('[data-action="read-selected"]');
        var hs = el.querySelector('[data-action="hover-speech"]');
        var ss = el.querySelector('[data-action="stop-reading"]');

        if (rp) rp.addEventListener('click', function (e) { e.stopPropagation(); readPage(); });
        if (rs) rs.addEventListener('click', function (e) { e.stopPropagation(); toggleReadSelected(rs); });
        if (hs) hs.addEventListener('click', function (e) { e.stopPropagation(); toggleHoverSpeech(hs); });
        if (ss) ss.addEventListener('click', function (e) { e.stopPropagation(); stopSpeaking(); });

        // Voice Selector
        var voiceSelect = el.querySelector('#acc-voice-select');
        if (voiceSelect) {
            populateVoices(voiceSelect);
            if (speechSynthesis.onvoiceschanged !== undefined) {
                speechSynthesis.onvoiceschanged = function () { populateVoices(voiceSelect); };
            }
            voiceSelect.addEventListener('change', function () {
                state.voiceURI = this.value;
                save();
            });
        }

        // Close buttons inside panel
        el.querySelectorAll('.acc-close').forEach(function (btn) {
            btn.addEventListener('click', function (e) { e.stopPropagation(); closePanel(trigger, panel); });
        });

        // Backdrop click to close
        var backdrop = el.querySelector('.acc-backdrop');
        if (backdrop) {
            backdrop.addEventListener('click', function (e) { e.stopPropagation(); closePanel(trigger, panel); });
        }

        // Theme Switcher
        el.querySelectorAll('.acc-theme-btn').forEach(function (b) {
            b.addEventListener('click', function (e) {
                e.stopPropagation();
                var newTheme = this.dataset.themeVal;
                state.theme = newTheme;
                // Remove all existing theme classes
                el.classList.forEach(function (c) {
                    if (c.startsWith('theme-')) el.classList.remove(c);
                });
                el.classList.add('theme-' + newTheme);
                // Highlight active button
                el.querySelectorAll('.acc-theme-btn').forEach(function (btn) { btn.classList.remove('is-active'); });
                this.classList.add('is-active');
                save();
            });
        });

        // Highlight the currently active theme on load
        var activeThemeBtn = el.querySelector('.acc-theme-btn[data-theme-val="' + state.theme + '"]');
        if (activeThemeBtn) activeThemeBtn.classList.add('is-active');

        // Reset
        el.querySelector('[data-action="reset"]').addEventListener('click', function (e) { e.stopPropagation(); resetAll(el); });

        // Text selection reader
        document.addEventListener('mouseup', function () {
            if (!state.readSelectedOn) return;
            var sel = window.getSelection().toString().trim();
            if (sel) speak(sel);
        });
    }

    // ── Shortcut Utilities ────────────────────────────────────────

    /**
     * Build a human-readable label for a shortcut config object.
     * e.g. { enabled: true, modifiers: ['ctrl','alt'], key: 'c' } → "Ctrl+Alt+C"
     * Returns empty string if the shortcut is disabled or has no key.
     */
    function buildShortcutLabel(shortcutCfg) {
        if (!shortcutCfg || !shortcutCfg.enabled || !shortcutCfg.key) return '';
        var modMap = { ctrl: 'Ctrl', alt: 'Alt', shift: 'Shift', meta: 'Meta' };
        var parts  = [];
        var mods   = Array.isArray(shortcutCfg.modifiers) ? shortcutCfg.modifiers : [];
        // Deterministic order: Ctrl → Alt → Shift → Meta
        ['ctrl', 'alt', 'shift', 'meta'].forEach(function (m) {
            if (mods.indexOf(m) !== -1) parts.push(modMap[m]);
        });
        parts.push(shortcutCfg.key.toUpperCase());
        return parts.join('+');
    }

    /**
     * Build a shortcut label for font_size, which uses a `keys` map instead of a
     * single `key`. direction is 'up' or 'down'.
     * e.g. buildFontShortcutLabel({ enabled:true, modifiers:['ctrl','alt'], keys:{up:'=',down:'-'} }, 'up') → "Ctrl+Alt+="
     */
    function buildFontShortcutLabel(shortcutCfg, direction) {
        if (!shortcutCfg || !shortcutCfg.enabled || !shortcutCfg.keys) return '';
        var key = shortcutCfg.keys[direction];
        if (!key) return '';
        return buildShortcutLabel({ enabled: true, modifiers: shortcutCfg.modifiers, key: key });
    }

    /**
     * Returns true when the keyboard event matches a shortcut config object.
     * Supports { modifiers, key } shape used by both features and global_shortcuts.
     */
    function matchesShortcut(e, shortcutCfg) {
        if (!shortcutCfg || !shortcutCfg.enabled || !shortcutCfg.key) return false;
        var mods = Array.isArray(shortcutCfg.modifiers) ? shortcutCfg.modifiers : [];
        if ((mods.indexOf('ctrl')  !== -1) !== e.ctrlKey)  return false;
        if ((mods.indexOf('alt')   !== -1) !== e.altKey)   return false;
        if ((mods.indexOf('shift') !== -1) !== e.shiftKey) return false;
        if ((mods.indexOf('meta')  !== -1) !== e.metaKey)  return false;
        return e.key.toLowerCase() === shortcutCfg.key.toLowerCase();
    }

    // Lookup: shifted character → base physical key (US keyboard layout)
    // Used to normalise e.key when Shift is held, so config values like '=' still match Shift+= (which fires '+').
    var SHIFTED_KEY_BASE = {
        '+': '=',  '_': '-',  '~': '`',  '!': '1',  '@': '2',  '#': '3',
        '$': '4',  '%': '5',  '^': '6',  '&': '7',  '*': '8',  '(': '9',
        ')': '0',  '{': '[',  '}': ']',  '|': '\\', ':': ';',  '"': "'",
        '<': ',',  '>': '.',  '?': '/'
    };

    /**
     * Returns the physical/base key string for a KeyboardEvent key value.
     * Always resolves shifted special characters ('+' → '=', '_' → '-', etc.)
     * regardless of which modifier caused the shift — this is necessary because
     * Ctrl+Alt on Windows is treated as AltGr and produces the same shifted chars
     * even without Shift being held. Letters fall through to toLowerCase().
     */
    function resolveEventKey(eventKey) {
        return (SHIFTED_KEY_BASE[eventKey] || eventKey).toLowerCase();
    }

    /**
     * Returns true when the keyboard event matches a font_size directional shortcut.
     * Handles the { modifiers, keys: { up, down } } shape — direction is 'up' or 'down'.
     * Normalises shifted special characters via resolveEventKey().
     */
    function matchesFontShortcut(e, shortcutCfg, direction) {
        if (!shortcutCfg || !shortcutCfg.enabled || !shortcutCfg.keys) return false;
        var key = shortcutCfg.keys[direction];
        if (!key) return false;
        var mods = Array.isArray(shortcutCfg.modifiers) ? shortcutCfg.modifiers : [];
        if ((mods.indexOf('ctrl')  !== -1) !== e.ctrlKey)  return false;
        if ((mods.indexOf('alt')   !== -1) !== e.altKey)   return false;
        if ((mods.indexOf('shift') !== -1) !== e.shiftKey) return false;
        if ((mods.indexOf('meta')  !== -1) !== e.metaKey)  return false;
        return resolveEventKey(e.key) === key.toLowerCase();
    }

    /**
     * Central keyboard shortcut dispatcher.
     * Reads feature shortcut configs + global shortcut configs and wires a
     * single document keydown listener that routes to the correct action.
     */
    function bindShortcuts(el, features, globalShortcuts) {
        // Map: feature data-feature value → config key in features object
        var featureShortcutMap = [
            { feature: 'acc-high-contrast',    cfg: features.high_contrast   },
            { feature: 'acc-grayscale',        cfg: features.grayscale       },
            { feature: 'acc-invert',           cfg: features.invert_colors   },
            { feature: 'acc-cb-protanopia',    cfg: features.cb_protanopia   },
            { feature: 'acc-cb-deuteranopia',  cfg: features.cb_deuteranopia },
            { feature: 'acc-cb-tritanopia',    cfg: features.cb_tritanopia   },
            { feature: 'acc-dyslexia-font',    cfg: features.dyslexia_font   },
            { feature: 'acc-text-spacing',     cfg: features.text_spacing    },
            { feature: 'acc-line-height',      cfg: features.line_height     },
            { feature: 'acc-underline-links',  cfg: features.underline_links },
            { feature: 'acc-highlight-links',  cfg: features.highlight_links },
            { feature: 'acc-highlight-headings', cfg: features.highlight_headings },
            { feature: 'acc-big-cursor',       cfg: features.big_cursor      },
            { feature: 'acc-hide-images',      cfg: features.hide_images     },
            { feature: 'acc-reading-mask',     cfg: features.reading_mask    },
            { feature: 'acc-focus-mode',       cfg: features.focus_mode      },
            { feature: 'acc-stop-animations',  cfg: features.stop_animations },
            { feature: 'acc-enhanced-focus',   cfg: features.enhanced_focus  },
        ];

        var trigger = el.querySelector('.acc-trigger');
        var panel   = el.querySelector('.acc-panel');

        document.addEventListener('keydown', function (e) {
            // Skip if focus is inside a text input
            var tag = document.activeElement && document.activeElement.tagName;
            if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

            // ── Global: toggle panel ──────────────────────────────
            if (globalShortcuts.toggle_panel && matchesShortcut(e, globalShortcuts.toggle_panel)) {
                e.preventDefault();
                var open = panel.classList.toggle('is-open');
                trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
                var bd = el.querySelector('.acc-backdrop');
                if (bd) bd.classList.toggle('is-open', open);
                if (open) {
                    var firstBtn = panel.querySelector('button');
                    if (firstBtn) firstBtn.focus();
                }
                return;
            }

            // ── Global: reset settings ────────────────────────────
            if (globalShortcuts.reset_settings && matchesShortcut(e, globalShortcuts.reset_settings)) {
                e.preventDefault();
                resetAll(el);
                return;
            }

            // ── Font Size: uses keys.up / keys.down map (not single key) ──
            if (features.font_size && features.font_size.enabled) {
                var fsc = features.font_size.shortcuts;
                if (fsc && fsc.enabled) {
                    if (matchesFontShortcut(e, fsc, 'up')) {
                        e.preventDefault();
                        changeFontSize(1);
                        return;
                    }
                    if (matchesFontShortcut(e, fsc, 'down')) {
                        e.preventDefault();
                        changeFontSize(-1);
                        return;
                    }
                }
            }

            // ── Feature shortcuts ─────────────────────────────────
            for (var i = 0; i < featureShortcutMap.length; i++) {
                var entry = featureShortcutMap[i];
                if (!entry.cfg || !entry.cfg.enabled) continue;
                if (!matchesShortcut(e, entry.cfg.shortcuts)) continue;

                e.preventDefault();
                var feature = entry.feature;

                // Honor color-blindness mutual exclusivity
                if (feature.startsWith('acc-cb-')) {
                    var isTurningOn = !state.activeFeatures[feature];
                    ['acc-cb-protanopia', 'acc-cb-deuteranopia', 'acc-cb-tritanopia'].forEach(function (cb) {
                        delete state.activeFeatures[cb];
                        document.documentElement.classList.remove(cb);
                        var b = el.querySelector('[data-feature="' + cb + '"]');
                        if (b) { b.classList.remove('is-active'); b.setAttribute('aria-pressed', 'false'); }
                    });
                    if (isTurningOn) toggleFeature(feature, el, true);
                    else save();
                } else {
                    toggleFeature(feature, el);
                }
                return;
            }

            // ── Speech / Screen Reader shortcuts ────────────────────────────
            if (features.read_page && features.read_page.enabled &&
                matchesShortcut(e, features.read_page.shortcuts)) {
                e.preventDefault();
                readPage();
                return;
            }
            if (features.read_selected && features.read_selected.enabled &&
                matchesShortcut(e, features.read_selected.shortcuts)) {
                e.preventDefault();
                var rsBtn = el.querySelector('[data-action="read-selected"]');
                if (rsBtn) toggleReadSelected(rsBtn);
                return;
            }
            if (features.hover_speech && features.hover_speech.enabled &&
                matchesShortcut(e, features.hover_speech.shortcuts)) {
                e.preventDefault();
                var hsBtn = el.querySelector('[data-action="hover-speech"]');
                if (hsBtn) toggleHoverSpeech(hsBtn);
                return;
            }
            if (features.stop_reading && features.stop_reading.enabled &&
                matchesShortcut(e, features.stop_reading.shortcuts)) {
                e.preventDefault();
                stopSpeaking();
                return;
            }
            if (features.voice_selector && features.voice_selector.enabled &&
                matchesShortcut(e, features.voice_selector.shortcuts)) {
                e.preventDefault();
                var vs = el.querySelector('#acc-voice-select');
                if (vs) vs.focus();
                return;
            }
        });
    }

    function closePanel(trigger, panel) {
        panel.classList.remove('is-open');
        var backdrop = document.querySelector('#accessibility-widget .acc-backdrop');
        if (backdrop) backdrop.classList.remove('is-open');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
    }

    // ── Font Size ─────────────────────────────────────────────────
    function changeFontSize(delta) {
        state.fontSize = Math.min(28, Math.max(12, state.fontSize + delta));
        document.documentElement.style.setProperty('--acc-font-size', state.fontSize + 'px');
        document.body.classList.add('acc-font-scaled');
        var d = document.querySelector('.acc-font-display');
        if (d) d.textContent = state.fontSize + 'px';
        save();
    }

    function resetFontSize() {
        state.fontSize = 16;
        document.documentElement.style.setProperty('--acc-font-size', '16px');
        document.body.classList.remove('acc-font-scaled');
        var d = document.querySelector('.acc-font-display');
        if (d) d.textContent = '16px';
        save();
    }

    // ── Feature Toggle ────────────────────────────────────────────
    function toggleFeature(feature, el, forceState) {
        var isOn = forceState !== undefined ? !forceState : !!state.activeFeatures[feature];
        var btn = el.querySelector('[data-feature="' + feature + '"]');

        // grayscale, invert, and color blindness use <html> filter — apply to <html> not <body>
        var isHtmlTarget = (feature === 'acc-grayscale' || feature === 'acc-invert' || feature.startsWith('acc-cb-'));
        var target = isHtmlTarget ? document.documentElement : document.body;

        if (isOn) {
            delete state.activeFeatures[feature];
            target.classList.remove(feature);
            if (btn) { btn.classList.remove('is-active'); btn.setAttribute('aria-pressed', 'false'); }

            if (feature === 'acc-reading-mask') {
                document.removeEventListener('mousemove', updateReadingMask);
            }
            if (feature === 'acc-focus-mode') {
                document.removeEventListener('mouseover', updateFocusMode);
            }
        } else {
            state.activeFeatures[feature] = true;
            target.classList.add(feature);
            if (btn) { btn.classList.add('is-active'); btn.setAttribute('aria-pressed', 'true'); }

            if (feature === 'acc-reading-mask') {
                document.addEventListener('mousemove', updateReadingMask);
                updateReadingMask({ clientY: window.innerHeight / 2 }); // Initial center position
            }
            if (feature === 'acc-focus-mode') {
                document.addEventListener('mouseover', updateFocusMode);
            }
        }
        save();
    }

    // ── Speech / Screen Reader ────────────────────────────────────
    function speak(text) {
        if (!state.speech || !text) return;
        state.speech.cancel();
        var u = new SpeechSynthesisUtterance(text);
        u.rate = 0.92;
        u.pitch = 1;
        u.lang = document.documentElement.lang || 'en-US';

        // Apply selected voice
        if (state.voiceURI) {
            var voices = state.speech.getVoices();
            var chosen = voices.find(function (v) { return v.voiceURI === state.voiceURI; });
            if (chosen) u.voice = chosen;
        }

        u.onend = function () { state.isSpeaking = false; document.body.classList.remove('is-speaking'); };
        u.onerror = function () { state.isSpeaking = false; };
        state.speech.speak(u);
        state.isSpeaking = true;
        document.body.classList.add('is-speaking');
    }

    function stopSpeaking() {
        if (state.speech) state.speech.cancel();
        state.isSpeaking = false;
        document.body.classList.remove('is-speaking');
        var b = document.querySelector('[data-action="read-page"]');
        if (b) b.classList.remove('is-speaking');
    }

    function readPage() {
        stopSpeaking();
        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: function (node) {
                var p = node.parentElement;
                if (!p) return NodeFilter.FILTER_REJECT;
                if (['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(p.tagName)) return NodeFilter.FILTER_REJECT;
                if (p.closest('#accessibility-widget')) return NodeFilter.FILTER_REJECT;
                if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
                return NodeFilter.FILTER_ACCEPT;
            }
        });
        var parts = [], node;
        while ((node = walker.nextNode())) {
            var t = node.nodeValue.trim();
            if (t) parts.push(t);
        }
        var text = parts.join(' ').replace(/\s+/g, ' ').trim();
        if (text) {
            speak(text);
            var b = document.querySelector('[data-action="read-page"]');
            if (b) b.classList.add('is-speaking');
        }
    }

    function toggleReadSelected(btn) {
        state.readSelectedOn = !state.readSelectedOn;
        btn.classList.toggle('is-active', state.readSelectedOn);
        if (!state.readSelectedOn) stopSpeaking();
    }

    function toggleHoverSpeech(btn) {
        state.hoverActive = !state.hoverActive;
        btn.classList.toggle('is-active', state.hoverActive);

        if (state.hoverActive) {
            document.body.classList.add('acc-hover-speech');
            document.addEventListener('mouseover', onHoverOver);
            document.addEventListener('mouseout', onHoverOut);
        } else {
            document.body.classList.remove('acc-hover-speech');
            document.removeEventListener('mouseover', onHoverOver);
            document.removeEventListener('mouseout', onHoverOut);
            clearHoverHighlight();
            stopSpeaking();
        }
    }

    function onHoverOver(e) {
        var el = e.target;
        if (!el || el.closest('#accessibility-widget')) return;

        var target = HOVER_TAGS.includes(el.tagName) ? el : el.closest(HOVER_TAGS.join(','));
        if (!target || target === state.lastHovered) return;

        clearHoverHighlight();
        state.lastHovered = target;
        target.classList.add('acc-hover-highlight');

        clearTimeout(state.hoverTimeout);
        state.hoverTimeout = setTimeout(function () {
            var text = (target.innerText || target.textContent || '').trim();
            if (text) speak(text);
        }, 320);
    }

    function onHoverOut(e) {
        if (!e.target || e.target.closest('#accessibility-widget')) return;
        clearTimeout(state.hoverTimeout);
        clearHoverHighlight();
    }

    function clearHoverHighlight() {
        if (state.lastHovered) {
            state.lastHovered.classList.remove('acc-hover-highlight');
            state.lastHovered = null;
        }
    }

    // ── Reset All ─────────────────────────────────────────────────
    function resetAll(el) {
        // Remove all body classes
        Object.keys(state.activeFeatures).forEach(function (f) {
            var target = (f === 'acc-grayscale' || f === 'acc-invert')
                ? document.documentElement
                : document.body;
            target.classList.remove(f);
        });
        state.activeFeatures = {};

        // Reset buttons
        el.querySelectorAll('.acc-btn.is-active').forEach(function (b) {
            b.classList.remove('is-active');
            b.setAttribute('aria-pressed', 'false');
        });

        // Reset font
        resetFontSize();

        // Reset speech
        stopSpeaking();
        state.readSelectedOn = false;
        state.hoverActive = false;
        document.body.classList.remove('acc-hover-speech');
        document.removeEventListener('mouseover', onHoverOver);
        document.removeEventListener('mouseout', onHoverOut);
        clearHoverHighlight();

        el.querySelectorAll('.acc-speech-btn').forEach(function (b) {
            b.classList.remove('is-active', 'is-speaking');
        });

        // Clean up focus mode listener
        document.removeEventListener('mouseover', updateFocusMode);
        document.querySelectorAll('.acc-focus-mode-target').forEach(function (el) {
            el.classList.remove('acc-focus-mode-target');
        });

        save();
    }

    // ── Persistence ───────────────────────────────────────────────
    function save() {
        if (!state.storeSettings) return;
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({
                fontSize: state.fontSize,
                theme: state.theme,
                activeFeatures: state.activeFeatures,
                voiceURI: state.voiceURI,
            }));
        } catch (e) { }
    }

    function loadState() {
        if (!state.storeSettings) return;
        try {
            var raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return;
            var data = JSON.parse(raw);
            state.fontSize = data.fontSize || 16;
            state.theme = data.theme || 'default';
            state.activeFeatures = data.activeFeatures || {};
            state.voiceURI = data.voiceURI || null;
        } catch (e) { }
    }

    function restoreState() {
        // Font
        if (state.fontSize !== 16) {
            document.documentElement.style.setProperty('--acc-font-size', state.fontSize + 'px');
            document.body.classList.add('acc-font-scaled');
            var d = document.querySelector('.acc-font-display');
            if (d) d.textContent = state.fontSize + 'px';
        }

        // Features
        Object.keys(state.activeFeatures).forEach(function (f) {
            if (!state.activeFeatures[f]) {
                delete state.activeFeatures[f];
                return;
            }
            var target = (f === 'acc-grayscale' || f === 'acc-invert' || f.startsWith('acc-cb-'))
                ? document.documentElement
                : document.body;
            target.classList.add(f);
            var btn = document.querySelector('[data-feature="' + f + '"]');
            if (btn) { btn.classList.add('is-active'); btn.setAttribute('aria-pressed', 'true'); }

            if (f === 'acc-reading-mask') {
                document.addEventListener('mousemove', updateReadingMask);
            }
            if (f === 'acc-focus-mode') {
                document.addEventListener('mouseover', updateFocusMode);
            }
        });
    }

    // ── Utility & Global Injections ──────────────────────────────────
    function injectGlobalElements() {
        if (document.getElementById('acc-global-svg')) return;

        // SVG Filters for Color Blindness
        var svgHtml = '<svg id="acc-global-svg" style="position: absolute; width: 0; height: 0; pointer-events: none;" aria-hidden="true">' +
            '<defs>' +
            '<filter id="acc-filter-protanopia">' +
            '<feColorMatrix type="matrix" values="0.567, 0.433, 0, 0, 0  0.558, 0.442, 0, 0, 0  0, 0.242, 0.758, 0, 0  0, 0, 0, 1, 0" />' +
            '</filter>' +
            '<filter id="acc-filter-deuteranopia">' +
            '<feColorMatrix type="matrix" values="0.625, 0.375, 0, 0, 0  0.7, 0.3, 0, 0, 0  0, 0.3, 0.7, 0, 0  0, 0, 0, 1, 0" />' +
            '</filter>' +
            '<filter id="acc-filter-tritanopia">' +
            '<feColorMatrix type="matrix" values="0.95, 0.05, 0, 0, 0  0, 0.433, 0.567, 0, 0  0, 0.475, 0.525, 0, 0  0, 0, 0, 1, 0" />' +
            '</filter>' +
            '</defs>' +
            '</svg>';

        // Reading Mask Element
        var maskHtml = '<div id="acc-reading-mask-element"></div>';

        document.body.insertAdjacentHTML('beforeend', svgHtml + maskHtml);
    }

    function updateReadingMask(e) {
        var mask = document.getElementById('acc-reading-mask-element');
        if (!mask) return;
        var y = e.clientY;
        var height = 120; // Height of the focus area

        // Clip path creates a transparent window at the mouse Y position
        // while the rest of the fixed div is filled with a dark semi-transparent color.
        mask.style.background = 'rgba(0, 0, 0, 0.6)';
        mask.style.clipPath = 'polygon(' +
            '0% 0%, 100% 0%, 100% ' + (y - height / 2) + 'px, 0% ' + (y - height / 2) + 'px, ' + // Top dark section
            '0% 0%, ' + // Loop back to start to close polygon, then jump
            '0% ' + (y + height / 2) + 'px, 100% ' + (y + height / 2) + 'px, 100% 100%, 0% 100%' + // Bottom dark section
            ')';
    }

    function updateFocusMode(e) {
        var target = e.target;
        if (!target || target.closest('#accessibility-widget')) return;

        // Remove highlight from previous element
        document.querySelectorAll('.acc-focus-mode-target').forEach(function (el) {
            el.classList.remove('acc-focus-mode-target');
        });

        // Add highlight to current block-level ancestor
        var block = target;
        var blockTags = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI', 'BLOCKQUOTE', 'TD', 'TH', 'SECTION', 'ARTICLE', 'DIV'];
        while (block && block !== document.body) {
            if (blockTags.includes(block.tagName)) break;
            block = block.parentElement;
        }
        if (block && block !== document.body) {
            block.classList.add('acc-focus-mode-target');
        }
    }

    function populateVoices(selectEl) {
        if (!state.speech) return;
        var voices = state.speech.getVoices();
        if (!voices.length) return;

        // Retain the 'Default' option
        selectEl.innerHTML = '<option value="">Default Voice</option>';

        voices.forEach(function (voice) {
            // Filter by configured languages if any exist
            if (state.voiceLanguages.length > 0) {
                var isAllowed = state.voiceLanguages.some(function (lang) {
                    return voice.lang.toLowerCase().startsWith(lang.toLowerCase());
                });
                if (!isAllowed) return;
            }

            var option = document.createElement('option');
            option.textContent = voice.name + ' (' + voice.lang + ')';
            option.value = voice.voiceURI;
            if (state.voiceURI === voice.voiceURI) option.selected = true;
            selectEl.appendChild(option);
        });
    }

    function parseJSON(str) {
        try { return JSON.parse(str); } catch (e) { return null; }
    }

    function injectSkipLink() {
        if (document.querySelector('.acc-skip-link')) return;
        var a = document.createElement('a');
        a.href = '#main';
        a.className = 'acc-skip-link';
        a.textContent = 'Skip to Content';

        // Find best target dynamically
        var target = document.querySelector('main') || document.querySelector('#main') || document.querySelector('#content');
        if (target) {
            if (!target.id) target.id = 'acc-main-content';
            a.href = '#' + target.id;
        }

        document.body.insertBefore(a, document.body.firstChild);
    }

    // ── Boot ──────────────────────────────────────────────────────
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // SPA support
    document.addEventListener('livewire:navigated', init);
    document.addEventListener('turbo:render', init);

})();
