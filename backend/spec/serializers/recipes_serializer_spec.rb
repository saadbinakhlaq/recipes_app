require 'app_spec_helper'

RSpec.describe Serializers::RecipesSerializer do
  it "returns json for recipes array" do
    data = create_data
    recipes = [Models::Recipe.new(data: data)]
    expect(Serializers::RecipesSerializer.new(recipes).to_json).
      to eq("[{\"id\":\"1\",\"title\":\"recipe_1\",\"image\":\"url\"}]")
  end
end