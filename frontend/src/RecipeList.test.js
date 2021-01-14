import { render, waitFor, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RecipeListContainer from './containers/RecipeListContainer';
import * as services from './services/RecipesService'

const getRecipes = jest.spyOn(services, 'getRecipes');
afterEach(cleanup);

describe('renders recipes list', () => {
  it('renders <RecipeList /> component', async () => {
    const recipes = [{
      id: "123213",
      title: "recipe title",
      imageUrl: "/images.de/image_1"
    }];

    getRecipes.mockImplementationOnce(() => Promise.resolve(recipes))
    const { getByText } = render(
        <RecipeListContainer />, { wrapper: MemoryRouter }
    );
    await waitFor(() => {
      const recipetitle = getByText("recipe title");
      expect(recipetitle).toBeInTheDocument();
    });
  })
});