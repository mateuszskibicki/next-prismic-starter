const request = require('supertest')
const serverExpress = require('../server/server')

describe('Test route 123', () => {

    let app = serverExpress();
    
    afterAll( async () => {
        await app.close()
    })

    test('should return status 404', async () => {
        const response = await request(app).get('/api/test/test/error')
        expect(response.status).toBe(404)
        expect(response.body).toHaveProperty(['error'])
        expect(response.body.error).toBe('This is 404 status')
    })

    test('should return test123', async () => {
        const response = await request(app).get('/api/test/test123')
        expect(response.body.id).toBe('test123')
        expect(response.status).toBe(200)
    })

    test('should return true as a string', async () => {
        const response = await request(app).get('/api/test/true')
        expect(response.body.id).toBe('true')
        expect(response.status).toBe(200)
    })

})