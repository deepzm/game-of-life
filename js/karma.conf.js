module.exports = function(config) {
    config.set({
 
        // base path, that will be used to resolve files and exclude
        basePath: '.',
 
        // frameworks to use
        frameworks: ['jasmine'],

        // for coverage
        preprocessors : {
          'src/script/*.js': 'coverage'
        },
 
        // list of files / patterns to load in the browser
        files: [
            'src/script/*.js',
            'test/*.js'
        ],
 
        // list of files to exclude
        exclude: [
            'src/script/gol.js',
        ],
 
        // test results reporter to use
        reporters: ['progress', 'coverage'],
 
        // web server port
        port: 9876,
 
        // enable / disable colors in the output (reporters and logs)
        colors: true,
 
        // level of logging
        logLevel: config.LOG_INFO,
 
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
 
        // Start these browsers
        browsers: ['PhantomJS'],
 
        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,
 
        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        coverageReporter : {
          type : 'html',
          dir : 'coverage/'
        }
    });
};