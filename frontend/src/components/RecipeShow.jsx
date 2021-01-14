import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Loading from './Loading'

const RecipeDetail = props => {
  const { recipe, isLoading } = props

  const tags = () => {
    if (!recipe.tags) {
      return <></>
    }

    return (
      <div className="desciption">
        {(recipe.tags || []).map(tag => (
          <div key={tag}>
            <span className="tag">#{tag} &nbsp;</span>
            <br></br>
          </div>
        ))}
      </div>
    )
  }

  return (
    <Loading loading={isLoading}>
      <div className="container">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={recipe.imageUrl} alt={recipe.id} />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h1 className="title">{recipe.title}</h1>
              <div>
                {recipe.chef && recipe.chef.name && (
                  <div className="desciption">
                    Recipe by: <b>{recipe.chef.name}</b>
                  </div>
                )}
              </div>
              <div className="desciption">
                <p>{recipe.description}</p>
              </div>
              {tags()}
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="link mb-6">
        {recipe.title && <Link to="/">Go to Recipes list page</Link>}
      </div>
    </Loading>
  )
}

RecipeDetail.defaultProps = {
  recipe: {},
}

RecipeDetail.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string,
    photoUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    chefName: PropTypes.string,
    tagNames: PropTypes.arrayOf(PropTypes.string),
  }),
}

export default RecipeDetail
