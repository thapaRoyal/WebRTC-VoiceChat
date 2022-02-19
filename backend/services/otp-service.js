const crypto = require('crypto');

class OtpService {
  async generateOtp() {
    const otp = crypto.randomInt(1000, 9999);
    return otp;
  }

  sendBySms() {}

  verifyOtp() {}
}

module.exports = new OtpService();
