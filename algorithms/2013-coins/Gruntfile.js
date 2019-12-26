module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        jasmine: {
            test: {
                src: 'src/js/**/*.js',
                options: {
                    specs: 'test/**/*Spec.js',
                    host: 'http://localhost:9002',
                    outfile: '_SpecRunner.html'
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    hostname: '*',
                    keepalive: true
                }
            },
            cli: {
                options: {
                    port: 9002
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['test:server']);
    grunt.registerTask('test', 'Run Jasmine tests on the commandline', ['connect:cli', 'jasmine:test']);
    grunt.registerTask('test:server', 'Launches a connect server for Jasmine tests', function () {
        grunt.task.run(['jasmine:test:build', 'connect:server']);
        grunt.log.writeln('Tests can be found at: http://localhost:9001/_SpecRunner.html');
    });
};
