/*
 * THIS [OPTIONAL] FILE EXISTS BECAUSE
 * a way to hook into events during build and development.
 * source: https://github.com/gatsbyjs/gatsby
 */

var rucksack = require('rucksack-css')
var lost = require("lost")
var cssnext = require("postcss-cssnext")
var nestedCss = require("postcss-nested");

exports.modifyWebpackConfig = function(config, env) {
    config.merge({
        postcss: [
            lost(),
            rucksack(),
            nestedCss(),
            cssnext({
                browsers: ['>1%', 'last 2 versions']
            })
        ]
    });

    // add file loader to load svgs properly to webpack config object
    config.loader('svg', {
       test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
       loader: 'file-loader'
    });

  return config;
};