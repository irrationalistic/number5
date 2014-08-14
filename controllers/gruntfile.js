// Export the gruntfile for use in
// terminal.
module.exports = function(grunt){

	// Initialize the configuration
	grunt.initConfig({

		// setup the uglify tasks
		uglify: {
			// define the "dev" subtask
			dev: {
				// Specify files using
				// files-object format
				files: {
					// 'destination file': ['source file(s)']
					// (many to one)
					'javascript/main.min.js': [
						'javascript/main.js',
						'javascript/utils.js'
					]
				},
				options: {
					sourceMap: true
				}
			},

			// the "build" subtask
			build: {
				files: {
					// 'destination file': ['source file(s)']
					// (many to one)
					'javascript/main.min.js': [
						'javascript/main.js',
						'javascript/utils.js'
					]
				},
				options: {
					sourceMap: true,
					banner: '// Production Build'
				}
			}
		},

		// setup the cssmin task
		cssmin: {

			// setup the dev subtask
			dev: {

				// expanded syntax
				// 	(many to many)
				files: [
					{
						expand: true,
						// the "current working director" to find file matches in
						cwd: 'styles/',
						// file matching pattern
						src: ['*.css'],
						// where will the files end up?
						dest: 'styles/min/',
						// what will the extension of each compiled file be?
						ext: '.min.css'
					}
				]

			}
		},

		// Configure the file watching plugin
		watch: {
			scripts: {
				// when these files are changed...
				files: ['javascript/main.js', 'javascript/utils.js'],
				// run these tasks
				tasks: ['uglify:dev']
			},
			styles: {
				files: ['styles/*.css'],
				tasks: ['cssmin']
			}
		}

	});

	// Our custom tasks
	grunt.registerTask(
		'dev', ['uglify:dev', 'cssmin', 'watch']
	);
	grunt.registerTask(
		'build', ['uglify:build', 'cssmin']
	);

	// Load in the uglify plugin
	grunt.loadNpmTasks(
		'grunt-contrib-uglify'
	);

	// Load in the cssmin plugin
	grunt.loadNpmTasks(
		'grunt-contrib-cssmin'
	);

	// Load in the watch plugin
	grunt.loadNpmTasks(
		'grunt-contrib-watch'
	);

}