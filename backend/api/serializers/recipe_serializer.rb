module Serializers
  class RecipeSerializer
    attr_reader :object

    def initialize(recipe)
      @object = recipe
    end

    def id
      object.id
    end

    def title
      object.title
    end

    def image
      object.image
    end

    def tags
      object.tags
    end

    def description
      object.description
    end

    def chef
      object.chef
    end

    def to_json
      {
        id: id,
        title: title,
        image: image,
        tags: tags,
        description: description,
        chef: {
          id: chef.id,
          name: chef.name
        }
      }.to_json
    end
  end
end