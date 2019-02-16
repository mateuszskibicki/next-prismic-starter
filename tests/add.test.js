describe('add 2 numbers', () => {
    test('should add 2 numbers', () => {
        const addNumber = (a, b) => {
            return a + b
        }
        expect(addNumber(1, 99)).toBe(100)
    })
})