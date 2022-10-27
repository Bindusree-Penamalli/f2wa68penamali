const express = require('express')

const router = express.Router()



router.get('/', (req, res, next) => {

    console.log(req.query)



    if (Object.keys(req.query).length === 0) {

        console.log("Entered")

        let r1 = Math.log2()

        res.render(`computation`, { Final_value: `cos applied to ${r1} is ${Math.cosh()}` })

    } else

        for (let a in req.query) {

            console.log(a)

            res.render(`Computed_value`, { value: `cos applied to ${req.query[a]} is ${Math.floor(req.query[a])}` })

        }

})



module.exports = router