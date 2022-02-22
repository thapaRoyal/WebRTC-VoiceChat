const otpService = require('../services/otp-service');
const hashService = require('../services/hash-service');
const userService = require('../services/user-service');
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

  verifyOtp(req, res) {
    // Logic
    const { hash, otp, phone } = req.body;
    if (!otp || !hash || !phone) {
      res.status(400).json({ message: 'Invalid request' });
    }

    const { hashedOtp, expires } = hash.split('.');
    if (Date.now() > +expires) {
      res.status(400).json({ message: 'OTP expired' });
    }

    const data = `${phone}.${otp}.${expires}`;

    const isValid = otpService.verifyOtp(hashedOtp, data);
    if (!isValid) {
      res.status(400).json({ message: 'Invalid OTP' });
    }

    let user;
    let accessToken;
    let refreshToken;

    try {
      user = await userService.findUser({ phone });
      if (!user) {
        user = await userService.createUser({ phone });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'DB Error' });
    }

    //tokens
  }
}

module.exports = new AuthController();
