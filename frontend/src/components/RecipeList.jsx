import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Loading from './Loading'

const RecipeList = props => {
  const { recipes, isLoading } = props

  return (
    <Loading loading={isLoading}>
      <section className="section">
        <div className="container">
          {recipes.map(recipe => (
            <div className="recipe" key={recipe.id}>
              <div className="card">
                <Link to={`/recipes/${recipe.id}`}>
                  <div className="card-image">
                    <figure className="image">
                      <img src={recipe.imageUrl} alt={recipe.title} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <p className="">{recipe.title}</p>
                    </div>
                  </div>
                </Link>
              </div>
              <br></br>
            </div>
          ))}
        </div>
      </section>
    </Loading>
  )
}

RecipeList.defaultProps = {
  recipes: [],
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
      title: PropTypes.string,
    })
  ),
}

export default RecipeList
