let numb = 1
describe(`Feature`, function() {
    it("retry", function() {
        this.retries(3);
        if (numb < 2) {
            numb = numb + 1
            throw new Error('Oops!')
        } else {
            console.log('finishing test successfully!')
        }
    });

    it('timeout C123', async function () {
        this.timeout(5000)
        return new Promise(resolve => {
            setTimeout(resolve, 9000)
        })
    })

    it('slow C124', async function () {
        this.slow(5000)
        return new Promise(resolve => {
            setTimeout(resolve, 7000)
        })
    })
});
