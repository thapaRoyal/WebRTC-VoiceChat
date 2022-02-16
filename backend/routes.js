const router = require('express').Router();

router.post('/api/sendotp', (req, res) => {
  // logic
  res.send('Hello from OTP route');
});

module.exports = router;
