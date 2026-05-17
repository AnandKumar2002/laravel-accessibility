<?php

declare(strict_types=1);

namespace Parvion\Accessibility;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class AccessibilityServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/accessibility.php', 'accessibility');
    }

    public function boot(): void
    {
        // Publish config
        $this->publishes([
            __DIR__ . '/../config/accessibility.php' => config_path('accessibility.php'),
        ], 'accessibility-config');

        // Routes to serve static assets (CSS + JS)
        Route::group(['middleware' => 'web'], function () {
            Route::get('/_accessibility/accessibility.css', function () {
                return response(file_get_contents(__DIR__ . '/../assets/accessibility.css'), 200, [
                    'Content-Type'  => 'text/css; charset=utf-8',
                    'Cache-Control' => 'public, max-age=86400',
                ]);
            })->name('parvion.accessibility.css');

            Route::get('/_accessibility/accessibility.js', function () {
                return response(file_get_contents(__DIR__ . '/../assets/accessibility.js'), 200, [
                    'Content-Type'  => 'application/javascript; charset=utf-8',
                    'Cache-Control' => 'public, max-age=86400',
                ]);
            })->name('parvion.accessibility.js');
        });

        // Register the @accessibility Blade directive
        $this->app['blade.compiler']->directive('accessibility', function () {
            return '<?php echo \Parvion\Accessibility\AccessibilityWidget::render(); ?>';
        });
    }
}
