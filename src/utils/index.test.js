import { convertDate } from '.'
describe('Utils Test', () => {
    test('Parse Data', () => {
        const data = convertDate('2016-04-21T02:24:07Z');
        expect(data).toStrictEqual('20/04/2016 23:24:07', { timeZone: 'UTC' })
    })
})