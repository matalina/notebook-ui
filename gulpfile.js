var elixir = require('laravel-elixir');

elixir.config.publicPath = '/';
elixir.config.assetsPath = 'assets'

elixir(function(mix) {

    mix.sass([
        'app.scss'
    ], 'assets/css/app.css');

});