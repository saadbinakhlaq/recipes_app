require 'app_spec_helper'

RSpec.describe Serializers::RecipeSerializer do
  it "returns recipe in json format" do
    data = create_data
    recipe = Models::Recipe.new(data: data)
    expect(Serializers::RecipeSerializer.new(recipe).to_json).
      to eq("{\"id\":\"1\",\"title\":\"recipe_1\",\"image\":\"url\",\"tags\":[\"tag1\"],\"description\":\"description\",\"chef\":{\"id\":\"1\",\"name\":\"chef\"}}")
  end
end