module Serializers
  class RecipesSerializer
    def initialize(recipes)
      @recipes = recipes
    end

    def to_json
      @recipes.map do |recipe|
        {
          id: recipe.id,
          title: recipe.title,
          image: recipe.image
        }
      end.to_json
    end
  end
end