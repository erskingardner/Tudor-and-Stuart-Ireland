desc 'nuke and build'
task :generate do
  sh 'rm -rf _site'
  stylesheets
  jekyll
  push_to_github
end

def stylesheets
  # Generate css stylesheets
  puts "-----> Generating stylesheet"
  sh 'sass _scss/style.scss:css/style.css'
  puts "-----> Done"
end

def jekyll
  puts "-----> Generating site"
  sh 'jekyll'
  puts "-----> Done"
end

def push_to_github
  # Commit and push to github
  puts "-----> Commiting changes"
  sh "git commit -a -m 'site generation'"
  puts "-----> Done"
  puts "-----> Pushing generated site to Github"
  sh "git push origin"
  puts "-----> Done"
end