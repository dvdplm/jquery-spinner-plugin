# Install hook code here
puts "Copying files..."
jsdir = "javascripts"
["jquery.spinner.js"].each do |js_file|
	dest_file = File.join(RAILS_ROOT, "public", jsdir, js_file)
	src_file = File.join(File.dirname(__FILE__) , jsdir, js_file)
	FileUtils.cp_r(src_file, dest_file)
end
puts "Javascript files copied"

cssdir = "stylesheets"
["spinner.css"].each do |css_file|
	dest_file = File.join(RAILS_ROOT, "public", cssdir, css_file)
	src_file = File.join(File.dirname(__FILE__) , cssdir, css_file)
	FileUtils.cp_r(src_file, dest_file)
end
puts "CSS files copied"

sassdir = "stylesheets/sass"
["spinner.sass"].each do |sass_file|
	dest_file = File.join(RAILS_ROOT, "public", cssdir, sass_file)
	src_file = File.join(File.dirname(__FILE__) , cssdir, sass_file)
	FileUtils.cp_r(src_file, dest_file)
end
puts "Sass files copied"

puts "ALL files copied - Installation complete!"
