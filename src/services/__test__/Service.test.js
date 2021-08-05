import { rest } from 'msw';
import { setupServer } from 'msw/node'
import { getProfile, getRepos } from '../index';

const response = { test: 'testing' }
const response2 = [{ name: 'name1' }, { name: 'name2' }]
const search = 'afonsoneto121';

const server = setupServer(
  rest.get(`${process.env.REACT_APP_API}/users/${search}`, (req, res, ctx) => {
    return res(ctx.json(response));
  }),
  rest.get(`${process.env.REACT_APP_API}/users/${search}/repos`, (req, res, ctx) => {
    return res(ctx.json(response2));
  })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Service', () => {
  test('getProfileAPI', async () => {
    const profile = await getProfile('afonsoneto121');
    expect(profile).toStrictEqual(response);
  })
  test('getProfileAPI', async () => {
    const profile = await getRepos('afonsoneto121');
    expect(profile).toStrictEqual(response2);
  })
})
