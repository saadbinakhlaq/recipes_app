import httpClient from '../httpClient'

const getRecipe = async id => {
  const { get } = httpClient
  try {
    const { data: recipe } = await get(`/recipes/${id}`)
    return recipeShowModel(recipe)
  } catch (error) {
    throw error
  }
}

const getRecipes = async () => {
  const { get } = httpClient
  try {
    const { data: recipes } = await get(`/recipes`)
    return recipes.map(recipe => recipeModel(recipe))
  } catch (error) {
    throw error
  }
}

const recipeModel = (recipe) => ({
  id: recipe.id,
  title: recipe.title,
  imageUrl: recipe.image
})

const recipeShowModel = (recipe) => ({
  id: recipe.id,
  title: recipe.title,
  imageUrl: recipe.image,
  description: recipe.description,
  tags: recipe.tags,
  chef: recipe.chef
})

export { getRecipe, getRecipes }
