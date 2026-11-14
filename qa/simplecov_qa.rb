# Cobertura de líneas y ramas para las pruebas del equipo.
# Uso: bundle exec rspec -r ./qa/simplecov_qa.rb spec/qa
require 'simplecov'
require 'simplecov_json_formatter'

SimpleCov.start 'rails' do
  enable_coverage :branch
  coverage_dir 'qa/reports/coverage'
  formatter SimpleCov::Formatter::MultiFormatter.new([SimpleCov::Formatter::HTMLFormatter, SimpleCov::Formatter::JSONFormatter])
end
