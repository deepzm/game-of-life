module.exports = function(config) {
    config.set({
 
        // base path, that will be used to resolve files and exclude
        basePath: '../',
 
        // frameworks to use
        frameworks: ['jasmine'],

        // for coverage
        // preprocessors : {
        //   'src/script/*.js': 'coverage'
        // },
 
        // list of files / patterns to load in the browser
        files: [
            'src/script/*.js',
            'test/unit/*.js'
        ],
 
        // list of files to exclude
        exclude: [
            'src/script/gol.js',
        ],
 
        // test results reporter to use
        reporters: ['progress'
        // , 'coverage'
        ],

        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-coverage'
            ],
 
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
 
        // Start these browsers
        browsers: ['PhantomJS'],

        singleRun : true,
 
        // coverageReporter : {
        //   type : 'html',
        //   dir : 'coverage/'
        // },

        junitReporter : {
          outputFile: 'test_out/unit.xml',
          suite: 'unit'
        }
    });
};