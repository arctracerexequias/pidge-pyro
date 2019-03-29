/*
 |--------------------------------------------------------------------------
 | Avviare Extension by Pixney AB
 |--------------------------------------------------------------------------
 | 
 | The following has been added when you ran the Avviare extension.
 | 
 */

let mix = require('laravel-mix');
//mix.setPublicPath(path.normalize('.\addons/pidge/vx/vx_modern-theme/resources/dist/'));
mix.js('C:\\xampp-7.2.14\\htdocs\\pidge.dev\\addons/pidge/vx/vx_modern-theme/resources/js/app.js', 'js')
.sass('C:\\xampp-7.2.14\\htdocs\\pidge.dev\\addons/pidge/vx/vx_modern-theme/resources/sass/theme.scss', 'css')
.sourceMaps().version();
