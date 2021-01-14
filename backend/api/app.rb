require 'sinatra/base'
require 'sinatra/cross_origin'

require 'json'
require 'contentful'

require_relative './models/recipe'
require_relative './serializers/recipes_serializer'
require_relative './serializers/recipe_serializer'

class Application < Sinatra::Base
  register Sinatra::CrossOrigin
  before do
    content_type :json
  end

  enable :cross_origin

  before do
    response.headers['Access-Control-Allow-Origin'] = '*'
  end

  options "*" do
    response.headers["Allow"] = "GET"
    response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept"
    response.headers["Access-Control-Allow-Origin"] = "*"
    200
  end

  get '/api/v1/recipes' do
    recipe_entries = client.entries(content_type: 'recipe')
    recipes = recipe_entries.map { |r| Models::Recipe.new(data: r) }
  
    Serializers::RecipesSerializer.new(recipes).to_json
  end
  
  get '/api/v1/recipes/:id' do
    recipe_data = client.entry(params[:id])
    if recipe_data.nil?
      halt_with_404_not_found
    end
    
    recipe = Models::Recipe.new(data: recipe_data)
    Serializers::RecipeSerializer.new(recipe).to_json
  end

  get '/*' do
    halt_with_404_not_found
  end
  
  
  def client
    @client ||= Contentful::Client.new(
      space: ENV['SPACE_ID'],
      access_token: ENV['ACCESS_TOKEN']
    )
  end

  def halt_with_404_not_found
    halt 404, { status: 'not_found' }.to_json
  end
end