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
    // ttl = time to live
    const ttl = 1000 * 60 * 2; // 2 minutes
    const expires = Date.now() + ttl;
    const data = `${phone}.${otp}.${expires}`;
    const hash = hashService.hashOtp(data);

    // send OTP
    try {
      await otpService.sendBySms(phone, otp);
      res.json({
        hash: `${hash}.${expires}`,
        phone,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Error sending OTP' });
    }
  }
}

module.exports = new AuthController();
