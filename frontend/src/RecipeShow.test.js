import { render, waitFor, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RecipeShowContainer from './containers/RecipeShowContainer';
import * as services from './services/RecipesService'

const getRecipe = jest.spyOn(services, 'getRecipe');
afterEach(cleanup);

describe('renders recipe show', () => {
  it('renders <RecipeShow /> component', async () => {
    const recipe = {
      id: "123213",
      title: "recipe title",
      imageUrl: "/images.de/image_1",
      description: "description",
      tags: ["tag"],
      chef: {
        id: "12",
        name: "chef"
      }
    };

    getRecipe.mockImplementationOnce(() => Promise.resolve(recipe))
    const { getByText } = render(
        <RecipeShowContainer />, { wrapper: MemoryRouter }
    );
    await waitFor(() => {
      const recipetitle = getByText("recipe title");
      expect(recipetitle).toBeInTheDocument();
    });
  })
});