require('babel-register')( {
    presets:['react', 'env', 'stage-0'],
    // plugins: ["react-loadable/babel"],
} );
require('./server');