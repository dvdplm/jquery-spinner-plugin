namespace :jspinner do
	namespace :update do
		desc "Copies the jSpinner files to public/javascripts, public/stylesheets/ and public/stylesheets/sass"
		task :files do
			puts "Copying files..."
			scripts_dir = RAILS_ROOT + '/public/javascripts/'
			css_dir = RAILS_ROOT + '/public/stylesheets/'
			sass_dir = RAILS_ROOT + '/public/stylesheets/sass/'
			
			scripts = Dir[File.join(File.dirname(__FILE__), '..') + '/javascripts/*spinner.js']
			FileUtils.cp(scripts, scripts_dir)
			
			css = Dir[File.join(File.dirname(__FILE__), '..') + '/stylesheets/*spinner.css']
			FileUtils.cp(scripts, css_dir)

			sass = Dir[File.join(File.dirname(__FILE__), '..') + '/stylesheets/sass/*spinner.sass']
			FileUtils.cp(scripts, sass_dir)
			
			puts "files copied successfully."
		end
	end
	
	namespace :install do
		desc "Copies the jSpinner files to public/javascripts, public/stylesheets/ and public/stylesheets/sass"
		task :files do
			Rake::Task['jspinner:update:files'].invoke
		end
	end
end
