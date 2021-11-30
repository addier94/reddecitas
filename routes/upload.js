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
    const { public_id } = req.body[0];
    
    if ( !public_id ) return res.status(400).json({msg: "image doesn't exits"})

    cloudinary.v2.uploader.destroy(public_id, async(err, result) => {
      if (err) throw err;

      res.json({msg: "Deleted success"})
    })

  } catch (error) {
    return res.status(500).json({msg: error.message})
  }
})

module.exports = router