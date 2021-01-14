require 'app_spec_helper'

RSpec.describe Models::Recipe do
  it "returns recipe model" do
    data = create_data
    recipe = Models::Recipe.new(data: data)
    expect(recipe.id).to eq("1")
    expect(recipe.title).to eq("recipe_1")
    expect(recipe.description).to eq("description")
    expect(recipe.tags).to eq(["tag1"])
    expect(recipe.chef.name).to eq("chef")
    expect(recipe.chef.id).to eq("1")
  end
end