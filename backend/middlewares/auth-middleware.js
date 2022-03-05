const tokenService = require('../services/token-service');

module.exports = async function (req, res, next) {
  try {
    //   get accessToken
    const { accessToken } = req.cookies;

    if (!accessToken) {
      throw new Error();
    }
    const userData = await tokenService.verifyAccessToken(accessToken);
    console.log(userData);
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: 'Unauthorized' });
  }
};
