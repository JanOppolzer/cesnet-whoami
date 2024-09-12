let mix = require('laravel-mix');

mix
    .copy('src/*.html', 'dist/')
    .copy('src/intercept/*.html', 'dist/intercept/')
    .copy('src/webauthn/*.html', 'dist/webauthn/')
    .copy('src/idp/', 'dist/idp/')
    .postCss('src/css/app.css', 'dist/css/', [
        require('tailwindcss'),
    ]);
