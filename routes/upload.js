const router = require('express').Router()
const cloudinary = require('cloudinary');
const auth = require('../middleware/auth')


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
})

router.post('/destroy', auth, (req, res) => {
  try {
    const public_ids = []

    req.body.forEach(({public_id}) => public_ids.push(public_id.toString()))

    if(!public_ids.length > 0) return res.status(400).json({msg: "Image doesn't exists"})

    cloudinary.v2.api.delete_resources(public_ids, async(err, result) => {
      if (err) throw err;

      res.json({msg: "Image deleted success"})
    })
  
  } catch (error) {
    return res.status(500).json({msg: error.message})
  }
})

module.exports = router