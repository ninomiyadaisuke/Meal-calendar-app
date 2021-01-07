import express from 'express';

const router = express.Router()

router.get('/meal/all', (req, res) => {
  res.json({
    data: "hello Team A!!! from meal all"
  })
})

export default router