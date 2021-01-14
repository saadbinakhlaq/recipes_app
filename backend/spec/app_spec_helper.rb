require 'spec_helper'
require 'rack/test'
require 'helpers'
require 'webmock'
require 'vcr'

Dir[File.join(__dir__, "../api/**/*.rb")].each do |file|
  require_relative file
end

ENV['RACK_ENV'] = 'test'
module RSpecMixin
  include Rack::Test::Methods

  def app
    described_class
  end
end

RSpec.configure do |c|
  c.include RSpecMixin
end

VCR.configure do |config|
  config.cassette_library_dir = "fixtures/vcr_cassettes"
  config.hook_into :webmock
  config.default_cassette_options = { :decode_compressed_response => true } 
end