'use strict';

module.exports = (grunt) => {
    grunt.loadNpmTasks('grunt-contrib-qunit');

    grunt.initConfig({
        qunit: {
            all: ["tests/test.js"]
        }
    });

    grunt.registerTask("default", "qunit");
}