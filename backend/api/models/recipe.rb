module Models
  class Chef < Struct.new(:id, :name); end

  class Recipe
    attr_reader :data

    def initialize(data:)
      @data = data
    end

    def id
      data.id
    end
  
    def title
      data.title
    end
  
    def image
      data.fields[:photo]&.url
    end
  
    def tags
      data.fields[:tags]&.map{ |tag| tag.name }
    end
  
    def description
      data.description
    end
  
    def chef
      data.fields[:chef] || Chef.new(nil, nil)
    end
  end
end