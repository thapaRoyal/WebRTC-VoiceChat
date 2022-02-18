class AuthController {
  sendOtp(req, res) {
    //Logic

    const { phone } = req.body;
    if (!phone) {
      res.status(400).json({ message: 'Phone field is required' });
    }
    res.send('Hello from OTP route');
  }
}

module.exports = new AuthController();
