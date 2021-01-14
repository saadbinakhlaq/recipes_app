import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RecipeShow from '../components/RecipeShow'
import { getRecipe } from '../services/RecipesService'

const RecipeShowContainer = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [recipe, setRecipe] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getRecipe(id).then(res => {
      setRecipe(res)
      setIsLoading(false)
    })
  }, [id])

  return <RecipeShow recipe={recipe} isLoading={isLoading} />
}

export default RecipeShowContainer
