import React, { useState, useEffect } from 'react'
import RecipeList from '../components/RecipeList'
import { getRecipes} from '../services/RecipesService'

const RecipeListContainer = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes().then(res => {
      setRecipes(res)
      setIsLoading(false)
    })
  }, [])

  return <RecipeList recipes={recipes} isLoading={isLoading} />
}

export default RecipeListContainer
