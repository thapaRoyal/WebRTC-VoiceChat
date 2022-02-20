const otpService = require('../services/otp-service');
class AuthController {
  async sendOtp(req, res) {
    //Logic

    const { phone } = req.body;
    if (!phone) {
      res.status(400).json({ message: 'Phone field is required' });
    }
    const otp = await otpService.generateOtp();

    // hash
    res.json({ otp: otp });
  }
}

module.exports = new AuthController();
