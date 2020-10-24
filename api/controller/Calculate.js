class Calculate {
    add (req, res) {
        const request = req.body
        const data = request.data
        let sum = 0;
        let counter = 0

        for (let element of data) {
            counter++
            sum = element + sum
        }
         
        return res.status(200).json({sum})
    }
}

module.exports = Calculate