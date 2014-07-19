'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        jshintrc: true
      }
    },
    csslint: {
      files: ['src/**/*.css'],
      options: {
        csslintrc: '.csslintrc'
      }
    },
    watch: {
      files: ['<%= jshint.files %>','<%= csslint.files%>'],
      tasks: ['jshint','csslint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('test', ['jshint','csslint']);

  grunt.registerTask('default', ['jshint','csslint']);

};