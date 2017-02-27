module.exports = function(grunt) {

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express-server');

	// Project configuration.
	grunt.initConfig({

		pkg: 		grunt.file.readJSON('package.json'),

		buildPath:	'build',

		distPath:	'dist/<%= pkg.name %>/<%= pkg.version %>',

		clean:		{
					build:		['<%= buildPath %>'],
					dist:		['<%= distPath %>'],
					all:		['<%= buildPath %>', '<%= distPath %>']
					},

		requirejs:	{

					buildServer:	{
									options:	{
												appDir:			'./',
												baseUrl:		'./',
												dir:			'<%= buildPath %>',
												stubModules:	['path', 'fs'],
												name:			'fileserver',
												optimize:		'none', //'uglify2',
												optimizeCss:	'standard',
												removeCombined:	true
												}
									}
					},

		copy:		{
					buildServer:	{
									files:	[
											{src: ['fileserver.js'], dest: '<%= distPath %>/fileserver.js'}
											]
									}
					},

		express: 	{
					dev:	{
							options:	{
										node_env:	'development',
										script: 	'fileserver.js'
										}
							},
			    	build: 	{
			      			options: 	{
										background: false,
										node_env:	'development',
										script: 	'<%= distPath %>/<%= pkg.name %>.js'
			      						}
			    			},
					prod: 	{
			      			options: 	{
										background: false,
										node_env: 	'production',
			        					script: 	'<%= distPath %>/<%= pkg.name %>.js'
			      						}
			    			}
			    	},

		watch:		{
					dev:	{
							files: 		['fileserver.js', 'upload/*'],
							tasks:		['express:dev'],
							options:	{
										interrupt: 	true,
										spawn:		false
										}
							}
					},


	});


	// Default task(s).
	grunt.registerTask('default', ['express:dev', 'watch:dev']);

	// Need QA task and a run task

	grunt.registerTask('build', ['clean:all', 'copy:buildServer', 'requirejs:buildApp', 'copy:buildApp']);
	};
