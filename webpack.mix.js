let mix = require('laravel-mix');

mix
    .copy('src/*.html', 'dist/')
    .copy('src/img/', 'dist/img/')
    .postCss('src/css/app.css', 'dist/css/', [
        require('tailwindcss'),
    ]);
