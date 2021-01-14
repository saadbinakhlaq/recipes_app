require 'app_spec_helper'

RSpec.describe Application do

  describe '/api/v1/recipes' do
    it 'responds with 200 OK' do
      VCR.use_cassette("recipes") do
        get '/api/v1/recipes'
        expect(last_response.status).to eq(200)
      end
    end
  end

  describe '/api/v1/recipes/:id' do
    context 'when found' do
      it 'responds with 200 OK' do
        VCR.use_cassette("recipe_4dT8tcb6ukGSIg2YyuGEOm") do
          get '/api/v1/recipes/4dT8tcb6ukGSIg2YyuGEOm'
          expect(last_response.status).to eq(200)
        end
      end
    end

    context 'when not found' do
      it 'responds with 404 not found' do
        VCR.use_cassette("recipe_not_found") do
          get '/api/v1/recipes/1'
          expect(last_response.status).to eq(404)
          expect(JSON.parse(last_response.body)).to eq({ 'status' => 'not_found' })
        end
      end
    end
  end

  describe '/*' do
    it 'responds with 404 not found' do
      get '/'
      expect(last_response.status).to eq(404)
      expect(JSON.parse(last_response.body)).to eq({ 'status' => 'not_found' })
    end
  end
end