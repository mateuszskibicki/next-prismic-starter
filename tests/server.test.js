const request = require('supertest')
const serverExpress = require('../server/server')

describe('Test route 123', () => {

    let app = serverExpress();

    afterEach(() => {
        app.close()
    })

    test('should return something', async () => {
        const response = await request(app).get('/api/test/test123')
        //console.log(await Promise.resolve(response))
        expect(response.body.id).toBe('test123')
    })

    test('should return something', async () => {
        const response = await request(app).get('/api/test/true')
        //console.log(await Promise.resolve(response))
        expect(response.body.id).toBe('true')
    })

})