import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import RecipeListContainer from './containers/RecipeListContainer'
import RecipeShowContainer from './containers/RecipeShowContainer'
import { Link } from 'react-router-dom'
import './App.sass'

function App() {
  return (
    <div className="app">
      <nav className="navbar mb-6" role="navigation" aria-label="main navigation">
          <div className="container mt-3">
            <Link to="/">
              <h4 className="title">Recipes</h4>
            </Link>
          </div>
      </nav>
      <div className="container">
        <div>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/recipes" />
            </Route>
            <Route path="/recipes/:id" component={RecipeShowContainer} exact />
            <Route path="/recipes" component={RecipeListContainer} exact />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App
