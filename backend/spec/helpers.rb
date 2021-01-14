ContentfulData = Struct.new(
  :id, :title, :description, :fields
)
Tag = Struct.new(:name)
Chef = Struct.new(:id, :name)
Photo = Struct.new(:url)

def create_data
  ContentfulData.new(
    "1",
    "recipe_1",
    "description",
    {
      photo: Photo.new("url"), 
      tags: [Tag.new("tag1")],
      chef: Chef.new("1", "chef")
    }
  )
end