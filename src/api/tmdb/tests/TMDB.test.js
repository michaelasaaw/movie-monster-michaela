import axios from 'axios';
import  MOCK_SEARCH_SUCCESS from './search-success.testdata'
import  MOCK_REQUEST_TOKEN_SUCCESS from './request-token-success.testdata'
import TMDB from '../TMDB'
jest.mock('axios');

const tmdb = new TMDB();

describe('TMDB', () => {
    it('fetches movies from api via search', async () => {
      const data = {
        data: {
          MOCK_SEARCH_SUCCESS
        },
      };
      axios.get.mockImplementationOnce(() => Promise.resolve(data));
      await expect(tmdb.getMoviesBySearch('avengers')).resolves.toEqual(data);
    });
    it('fetches a request token', async () => {
        const data = {
          data: {
            MOCK_REQUEST_TOKEN_SUCCESS
          },
        };
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        await expect(tmdb.getRequestToken()).resolves.toEqual(data);
    });
    it('creates a new session', async () => {
      const data = {
        data: {
          MOCK_REQUEST_TOKEN_SUCCESS
        },
      };
      axios.get.mockImplementationOnce(() => Promise.resolve(data));
      await expect(tmdb.getRequestToken()).resolves.toEqual(data);
    });
  });