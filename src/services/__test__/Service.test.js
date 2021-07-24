import { rest } from 'msw';
import { setupServer } from 'msw/node'
import { getProfile } from '../index';

const response = { test: 'testing' }

const search = 'afonsoneto121';
const server = setupServer(
    rest.get(`${process.env.REACT_APP_API}/users/${search}`, (req, res, ctx) => {
        return res(ctx.json(response));
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
})