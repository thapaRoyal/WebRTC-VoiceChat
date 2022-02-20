const otpService = require('../services/otp-service');
const hashService = require('../services/hash-service');
class AuthController {
  async sendOtp(req, res) {
    //Logic

    const { phone } = req.body;
    if (!phone) {
      res.status(400).json({ message: 'Phone field is required' });
    }
    const otp = await otpService.generateOtp();

    // hash
    const hash = hashService.hashOtp();

    res.json({ otp: otp });
  }
}

module.exports = new AuthController();
